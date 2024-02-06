import { SVG_NS, dataRegex } from './constants';
import { doc } from './globals';
import { Handle } from './handle';
import { onChange } from './onChangeProxy';
import { addHover, setStyle } from './style';
import { PolygonOptions, PolygonPoints } from './types/editor';


class Polygon {
  editorOwner: any
  element: SVGPolygonElement
  points: PolygonPoints
  includeAttributes = ['fill', 'stroke', 'opacity', 'stroke-width'];


  style: Record<string, any>
  isSelected: boolean
  isFrozen: boolean
  constructor(editorOwner: any, points: PolygonPoints) {

      this.editorOwner = editorOwner;
      this.element = doc.createElementNS(SVG_NS, 'polygon');
      this.points = []; // proxied points
      this.includeAttributes = ['fill', 'stroke', 'opacity', 'stroke-width'];
      points && [points].flat().forEach((p) => this.addPoint(p.x, p.y));
      this.style = {};
      this.isSelected = false;
      this.isFrozen = false;

  }
  freeze (freeze: boolean) {
    this.isFrozen = freeze !== undefined ? !!freeze : true;
    this.getHandles().forEach((handle: any) => handle.freeze(freeze));
    return this;
  };

  updateElementPoints () {
    this.element.setAttribute('points', this.points.map((p) => `${p.x},${p.y}`).join(' '));
    return this;
  };

  addPoint (x: number, y: number) {
    const point = { x, y };
     //@ts-ignore
    const pointProxy = onChange(point, (prop: string, newValue: any, prevValue: any, obj: any) => {
      this._logWarnOnOpOnFrozen('Point moved on');
      this.updateElementPoints();
      obj.handle['setAttr' + prop.toUpperCase()](newValue);
    });

    // don't observe handle assignment
    //@ts-ignore
    point.handle = new Handle(
      x,
      y,
      (deltaX: number, deltaY: number) => {
        pointProxy.x += deltaX;
        pointProxy.y += deltaY;
      },
      this.isFrozen,
    );
    //@ts-ignore
    this.editorOwner.registerComponentHandle(point.handle);

    this.points.push(pointProxy);
    this.updateElementPoints();

    return this;
  };

  moveLastPoint (x: number, y: number) {
    const lastPoint: any = this.points[this.points.length - 1];
    [lastPoint.x, lastPoint.y] = [x, y];
    return this;
  };

  // TODO: move by transform:translate instead?
  move(deltaX: number, deltaY: number) {
    this.points.forEach((p) => {
      p.x += deltaX;
      p.y += deltaY;
    });
    return this;
  };

  isValid () {
    return this.points.length >= 3;
  };

  setHandlesVisibility (visible: boolean) {
    this.getHandles().forEach((handle: any) => handle.setVisible(visible));
    return this;
  };

  setIsSelected (isSelected: boolean) {
    this._logWarnOnOpOnFrozen('Select/unselect performed on');

    this.isSelected = isSelected = isSelected !== undefined ? !!isSelected : true;
    this.setHandlesVisibility(isSelected);
    this.style &&
      setStyle(
        this.element,
        isSelected ? this.style.componentSelect.on : this.style.componentSelect.off,
      );
    return this;
  };

  getHandles () {
    return this.points.map((p: any) => p.handle);
  };

  setStyle (style: any) {
    this.style = style;
    setStyle(this.element, style.component);
    setStyle(this.element, style.componentHover.off);
    setStyle(this.element, style.componentSelect.off);

    addHover(this.element, style.componentHover.off, style.componentHover.on);
    return this;
  };
  setDataAttributes (attributes: Record<string, string | number>) {
    for (let key in attributes){
        this.element.setAttribute(key, String(attributes[key]));
    }
    return this;
  };

  export () {
    //@ts-ignore
    const data: PolygonOptions = {
      points: this.points.map((p) => ({ x: p.x, y: p.y }))
    }
    for (let attribute of this.element.attributes ) {
      if (attribute.name in this.includeAttributes || dataRegex.test(attribute.name)) {
        data[attribute.name] = attribute.value;
      }
    }
    return data
  };

  private _logWarnOnOpOnFrozen (op: string) {
    if (this.isFrozen) {
      console.warn(`${op} frozen ${this.element.tagName} with id ${this.element.id}`);
    }
  };



}




export { Polygon };


