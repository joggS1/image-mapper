//@ts-ignore
import { SVG_NS, dataRegex } from './constants';
import { doc } from './globals';
import { Handle } from './handle';
import { onChange } from './onChangeProxy';
import { addHover, setStyle } from './style';
import { Dimensions, FigureOptions, PropChangeListener, SVGTagNames } from './types/editor';



export class CornerShapedElement {
  editorOwner: any;
  svgElementName: SVGTagNames
  private includeAttributes = ['fill', 'stroke', 'opacity', 'stroke-width'];
  public element: SVGRectElement | SVGCircleElement | SVGPolygonElement | SVGEllipseElement | SVGElement;
  dim: Dimensions;
  handles: any;
  style: Record<string, any>;
  isSelected: boolean;
  private propChangeListener: PropChangeListener
  isFrozen: boolean;
  constructor(svgElementName: SVGTagNames, propChangeListener: PropChangeListener) {
    this.propChangeListener = propChangeListener;
    this.svgElementName = svgElementName
  }

  public add(editorOwner: any, x: number, y: number, width: number = 0, height: number = 0) {
    this.element = doc.createElementNS(SVG_NS, this.svgElementName);
    this.editorOwner = editorOwner;
    //svgElementName, propChangeListener
    this.dim = onChange({
      x,
      y,
      width: 0,
      height: 0
    }, {
      /*
        this.handles[]
        index location:

          0_______2
           |     |
           |_____|
          1       3
      */
      // move
      x: (x: number, prevX: number, dim: Dimensions) => {
        this._logWarnOnOpOnFrozen('Dimension property x changed on');

        this.propChangeListener.x.call(this, ...[x, prevX, dim]);
        this.handles[0].setAttrX(x);
        this.handles[1].setAttrX(x);
        this.handles[2].setAttrX(x + dim.width);
        this.handles[3].setAttrX(x + dim.width);
      },
      // move
      y:  (y: number, prevY: number, dim: Dimensions) =>  {
        this._logWarnOnOpOnFrozen('Dimension property y changed on');

        this.propChangeListener.y.call(this, ...[y, prevY, dim]);
        this.handles[0].setAttrY(y);
        this.handles[1].setAttrY(y + dim.height);
        this.handles[2].setAttrY(y);
        this.handles[3].setAttrY(y + dim.height);
      },
      // resize
      width:  (width: number, prevWidth: number, dim: Dimensions) => {
        this._logWarnOnOpOnFrozen('Dimension property width changed on');

        this.propChangeListener.width.call(this, ...[width, prevWidth, dim]);
        this.handles[2].setAttrX(dim.x + width);
        this.handles[3].setAttrX(dim.x + width);
      },
      // resize
      height:  (height: number, prevHeight: number, dim: Dimensions) => {
        this._logWarnOnOpOnFrozen('Dimension property height changed on');

        this.propChangeListener.height.call(this, ...[height, prevHeight, dim]);
        this.handles[1].setAttrY(dim.y + height);
        this.handles[3].setAttrY(dim.y + height);
      },
    },
    this,
  );
    this.handles = [
      //@ts-ignore
      new Handle(
        x,
        y,
        (deltaX: number, deltaY: number) => {
          this.dim.x += deltaX;
          this.dim.width -= deltaX;

          this.dim.y += deltaY;
          this.dim.height -= deltaY;
        },
        this.isFrozen
      ),
      //@ts-ignore

      new Handle(
        x,
        y,
        (deltaX: number, deltaY: number) => {
          this.dim.x += deltaX;
          this.dim.width -= deltaX;

          this.dim.height += deltaY;
        },
        this.isFrozen
      ),
      //@ts-ignore

      new Handle(
        x,
        y,
        (deltaX: number, deltaY: number) => {
          this.dim.width += deltaX;

          this.dim.y += deltaY;
          this.dim.height -= deltaY;
        },
        this.isFrozen
      ),
      //@ts-ignore

      new Handle(
        x,
        y,
        (deltaX: number, deltaY: number) => {
          this.dim.width += deltaX;
          this.dim.height += deltaY;
        },
        this.isFrozen
      )
    ];
    this.handles.forEach((h: any) => {
      this.editorOwner.registerComponentHandle(h);
    });

    // we want to resize when importing shape data too
    [this.dim.width, this.dim.height] = [width, height];

    this.style = {};
    this.isSelected = false;
    this.isFrozen = false;
  }
  public freeze (freeze: boolean) {
    this.isFrozen = freeze !== undefined ? !!freeze : true;
    this.handles.forEach((handle: any) => handle.freeze(freeze));
    return this;
  };

  public resize (x: number, y: number) {
    this.dim.width = x - this.dim.x;
    this.dim.height = y - this.dim.y;
    return this;
  };

  public move (deltaX: number, deltaY: number) {
    this.dim.x += deltaX;
    this.dim.y += deltaY;
    return this;
  };

  public isValid () {
    return this.dim.width && this.dim.height;
  };

  public setHandlesVisibility (visible: boolean) {
    this.handles.forEach((handle: any) => handle.setVisible(visible));
    return this;
  };

  public setIsSelected (isSelected: boolean) {
    this._logWarnOnOpOnFrozen('Select/unselect performed on');

    this.isSelected = isSelected = isSelected !== undefined ? !!isSelected : true;
    this.setHandlesVisibility(isSelected);
    this.style &&
      setStyle(
        this.element,
        isSelected ? this.style.componentSelect.on! : this.style.componentSelect.off!
      );
    return this;
  };

  public getHandles () {
    return this.handles;
  };

  public setStyle (style: any) {
    this.style = style;
    setStyle(this.element, style.component);
    setStyle(this.element, style.componentHover.off);
    setStyle(this.element, style.componentSelect.off);

    addHover(this.element, style.componentHover.off, style.componentHover.on);
    return this;
  };
  public setDataAttributes (attributes: Record<string, string | number>) {
    for (let key in attributes) {
      this.element.setAttribute(key, String(attributes[key]));
    }
    return this;
  };

  public export () {
    const { x, y, width, height } = this.dim;
    const data: FigureOptions  = {
      x,
      y,
      width,
      height
    };
    for (let attribute of this.element.attributes) {
      if (attribute.name in this.includeAttributes || dataRegex.test(attribute.name)) {
        data[attribute.name] = attribute.value;
      }
    }
    return data;
  };


  private _logWarnOnOpOnFrozen (op: string) {
    if (this.isFrozen) {
      console.warn(`${op} frozen ${this.element.tagName} with id ${this.element.id}`);
      }
    };
  }