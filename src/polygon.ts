import { dataRegex, SVG_NS } from './constants';
import { Editor } from './editor';
import { doc } from './globals';
import { Handle } from './handle';
import { onChange } from './onChangeProxy';
import { addHover, setStyle } from './style';
import { PolygonOptions, PolygonPoint } from './types/editor';
import { Style } from './types';

function generateHandle(this: Polygon, x: number, y: number, point: PolygonPoint) {
  return new Handle(
    x,
    y,
    (deltaX: number, deltaY: number) => {
      point.x += deltaX;
      point.y += deltaY;
    },
    this.isFrozen
  );
}

class Polygon {
  editorOwner: Editor;
  element: SVGPolygonElement;
  points: Array<PolygonPoint>;
  includeAttributes = ['fill', 'stroke', 'opacity', 'stroke-width'];
  style?: Style;
  isSelected: boolean;
  isFrozen: boolean;

  constructor(editorOwner: Editor, points: PolygonPoint[]) {
    this.editorOwner = editorOwner;
    this.element = doc.createElementNS(SVG_NS, 'polygon');
    this.points = []; // proxied points
    this.includeAttributes = ['fill', 'stroke', 'opacity', 'stroke-width'];
    points && [points].flat().forEach((p) => this.addPoint(p.x, p.y));
    this.isSelected = false;
    this.isFrozen = false;
  }

  freeze(freeze: boolean) {
    this.isFrozen = freeze !== undefined ? !!freeze : true;
    this.getHandles().forEach((handle: any) => handle.freeze(freeze));
    return this;
  }

  updateElementPoints() {
    this.element.setAttribute('points', this.points.map((p) => `${p.x},${p.y}`).join(' '));
    return this;
  }

  addPoint(x: number, y: number) {
    const point: PolygonPoint = { x, y };
    //@ts-ignore
    const pointProxy = onChange(point, (prop: string, newValue: any, prevValue: any, obj: any) => {
      if (prop !== 'handle') {
        this._logWarnOnOpOnFrozen('Point moved on');
        this.updateElementPoints();
        obj.handle?.['setAttr' + prop.toUpperCase()]?.(newValue);
      }
    }); // don't observe handle assignment
    point.handle = generateHandle.call(this, x, y, pointProxy);
    //@ts-ignore
    this.editorOwner.registerComponentHandle(point.handle);

    this.points.push(pointProxy);
    this.updateElementPoints();

    return this;
  }

  moveLastPoint(x: number, y: number) {
    const lastPoint: any = this.points[this.points.length - 1];
    [lastPoint.x, lastPoint.y] = [x, y];
    return this;
  }

  move(deltaX: number, deltaY: number) {
    this.points.forEach((p) => {
      p.x += deltaX;
      p.y += deltaY;
    });
    return this;
  }

  isValid() {
    return this.points.length >= 3;
  }

  setHandlesVisibility(visible: boolean) {
    this.points.forEach((p) => {
      if (!p.handle) {
        const handle = generateHandle.call(this, p.x, p.y, p);
        p.handle = handle;
        this.editorOwner?.registerComponentHandle(handle);
      }
      p.handle.setVisible(visible);
    });
    return this;
  }

  public getCenterCoords() {
    return this.points.reduce(
      (acc, point) => {
        acc.x += point.x / this.points.length;
        acc.y += point.y / this.points.length;
        return acc;
      },
      { x: 0, y: 0 }
    );
  }

  public scale(scale: number) {
    this.points.forEach((p, index) => {
      p.x = p.x * scale;
      p.y = p.y * scale;
    });
    this.updateElementPoints();
    return this;
  }

  setIsSelected(isSelected: boolean) {
    this._logWarnOnOpOnFrozen('Select/unselect performed on');

    this.isSelected = isSelected = isSelected !== undefined ? !!isSelected : true;
    this.setHandlesVisibility(isSelected);
    this.style &&
      setStyle(
        this.element,
        isSelected ? this.style.componentSelect.on : this.style.componentSelect.off
      );
    return this;
  }

  getHandles() {
    return this.points.map((p) => p.handle);
  }

  clearHandles() {
    this.points.forEach((p) => {
      this.editorOwner?.unregisterComponent(p.handle);
      p.handle = null;
    });
  }

  setStyle(style: Style) {
    this.style = style;
    setStyle(this.element, style.component);
    setStyle(this.element, style.componentHover.off);
    setStyle(this.element, style.componentSelect.off);

    addHover(this.element, style.componentHover.off, style.componentHover.on);
    return this;
  }

  setDataAttributes(attributes: Record<string, string | number>) {
    for (let key in attributes) {
      this.element.setAttribute(key, String(attributes[key]));
    }
    return this;
  }

  export() {
    //@ts-ignore
    const data: PolygonOptions = {
      points: this.editorOwner?.initialSizes.get(this.element.id) as PolygonOptions['points']
    };
    for (let attribute of this.element.attributes) {
      if (attribute.name in this.includeAttributes || dataRegex.test(attribute.name)) {
        data[attribute.name] = attribute.value;
      }
    }
    return data;
  }

  private _logWarnOnOpOnFrozen(op: string) {
    if (this.isFrozen) {
      console.warn(`${op} frozen ${this.element.tagName} with id ${this.element.id}`);
    }
  }
}

export { Polygon };
