import { SVG_NS } from './constants';
import { doc } from './globals';
import { addHover, setStyle } from './style';

function Handle(this: any, x: any, y: any, moveHandler: any, frozen: any) {
  this.moveHandler = moveHandler;

  this.element = doc.createElementNS(SVG_NS, 'circle');
  this.element.setAttribute('cx', x);
  this.element.setAttribute('cy', y);
  this.element.setAttribute('r', 5);
  this.element.setAttribute('visibility', 'hidden');

  this.isFrozen = frozen !== undefined ? !!frozen : false;
}

Handle.prototype.freeze = function (freeze: boolean) {
  this.isFrozen = freeze !== undefined ? !!freeze : true;
  this.isFrozen && this.setVisible(false);
  return this;
};

Handle.prototype.setAttrX = function (value: any) {
  this.element.setAttribute('cx', value);
  return this;
};

Handle.prototype.setAttrY = function (value: any) {
  this.element.setAttribute('cy', value);
  return this;
};

Handle.prototype.move = function (deltaX: number, deltaY: number) {
  this.moveHandler(deltaX, deltaY);
  return this;
};

Handle.prototype.setVisible = function (visible: boolean) {
  visible = visible !== undefined ? !!visible : true;
  this.element.setAttribute('visibility', visible ? 'visible' : 'hidden');
  return this;
};

Handle.prototype.setStyle = function (style: any, hoverStyle: any) {
  setStyle(this.element, style);
  addHover(this.element, style, hoverStyle);
  return this;
};

export { Handle };
