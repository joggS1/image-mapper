import { SVG_NS } from './constants';
import { doc } from './globals';
import { addHover, setStyle } from './style';

type MoveHandler = (deltaX: number, deltaY: number) => void;
export class Handle {
  x: number;
  y: number;
  moveHandler: MoveHandler;
  isFrozen: boolean;
  element: SVGCircleElement;

  constructor(x: number, y: number, moveHandler: MoveHandler, frozen: boolean) {
    this.x = x;
    this.y = y;
    this.moveHandler = moveHandler;
    this.element = doc.createElementNS(SVG_NS, 'circle');
    this.element.setAttribute('cx', String(x));
    this.element.setAttribute('cy', String(y));
    this.element.setAttribute('r', String(5));
    this.element.setAttribute('visibility', 'hidden');
    this.isFrozen = frozen !== undefined ? !!frozen : false;
  }

  freeze(freeze: boolean) {
    this.isFrozen = freeze !== undefined ? !!freeze : true;
    this.isFrozen && this.setVisible(false);
    return this;
  }

  setAttrX(value: number) {
    this.element.setAttribute('cx', String(value));
    return this;
  }

  delete() {
    this.element.remove();
  }

  setAttrY(value: number) {
    this.element.setAttribute('cy', String(value));
    return this;
  }

  move(deltaX: number, deltaY: number) {
    this.moveHandler(deltaX, deltaY);
    return this;
  }

  setVisible(visible: boolean) {
    visible = visible !== undefined ? !!visible : true;
    this.element.setAttribute('visibility', visible ? 'visible' : 'hidden');
    return this;
  }

  setStyle(style: any, hoverStyle: any) {
    setStyle(this.element, style);
    addHover(this.element, style, hoverStyle);
    return this;
  }
}
