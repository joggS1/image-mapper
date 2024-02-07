"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handle = void 0;
var constants_1 = require("./constants");
var globals_1 = require("./globals");
var style_1 = require("./style");
function Handle(x, y, moveHandler, frozen) {
    this.moveHandler = moveHandler;
    this.element = globals_1.doc.createElementNS(constants_1.SVG_NS, 'circle');
    this.element.setAttribute('cx', x);
    this.element.setAttribute('cy', y);
    this.element.setAttribute('r', 5);
    this.element.setAttribute('visibility', 'hidden');
    this.isFrozen = frozen !== undefined ? !!frozen : false;
}
exports.Handle = Handle;
Handle.prototype.freeze = function (freeze) {
    this.isFrozen = freeze !== undefined ? !!freeze : true;
    this.isFrozen && this.setVisible(false);
    return this;
};
Handle.prototype.setAttrX = function (value) {
    this.element.setAttribute('cx', value);
    return this;
};
Handle.prototype.setAttrY = function (value) {
    this.element.setAttribute('cy', value);
    return this;
};
Handle.prototype.move = function (deltaX, deltaY) {
    this.moveHandler(deltaX, deltaY);
    return this;
};
Handle.prototype.setVisible = function (visible) {
    visible = visible !== undefined ? !!visible : true;
    this.element.setAttribute('visibility', visible ? 'visible' : 'hidden');
    return this;
};
Handle.prototype.setStyle = function (style, hoverStyle) {
    (0, style_1.setStyle)(this.element, style);
    (0, style_1.addHover)(this.element, style, hoverStyle);
    return this;
};
