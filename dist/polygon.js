"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = void 0;
var constants_1 = require("./constants");
var globals_1 = require("./globals");
var handle_1 = require("./handle");
var onChangeProxy_1 = require("./onChangeProxy");
var style_1 = require("./style");
var Polygon = /** @class */ (function () {
    function Polygon(editorOwner, points) {
        var _this = this;
        this.includeAttributes = ['fill', 'stroke', 'opacity', 'stroke-width'];
        this.editorOwner = editorOwner;
        this.element = globals_1.doc.createElementNS(constants_1.SVG_NS, 'polygon');
        this.points = []; // proxied points
        this.includeAttributes = ['fill', 'stroke', 'opacity', 'stroke-width'];
        points && [points].flat().forEach(function (p) { return _this.addPoint(p.x, p.y); });
        this.style = {};
        this.isSelected = false;
        this.isFrozen = false;
    }
    Polygon.prototype.freeze = function (freeze) {
        this.isFrozen = freeze !== undefined ? !!freeze : true;
        this.getHandles().forEach(function (handle) { return handle.freeze(freeze); });
        return this;
    };
    ;
    Polygon.prototype.updateElementPoints = function () {
        this.element.setAttribute('points', this.points.map(function (p) { return "".concat(p.x, ",").concat(p.y); }).join(' '));
        return this;
    };
    ;
    Polygon.prototype.addPoint = function (x, y) {
        var _this = this;
        var point = { x: x, y: y };
        //@ts-ignore
        var pointProxy = (0, onChangeProxy_1.onChange)(point, function (prop, newValue, prevValue, obj) {
            _this._logWarnOnOpOnFrozen('Point moved on');
            _this.updateElementPoints();
            obj.handle['setAttr' + prop.toUpperCase()](newValue);
        });
        // don't observe handle assignment
        //@ts-ignore
        point.handle = new handle_1.Handle(x, y, function (deltaX, deltaY) {
            pointProxy.x += deltaX;
            pointProxy.y += deltaY;
        }, this.isFrozen);
        //@ts-ignore
        this.editorOwner.registerComponentHandle(point.handle);
        this.points.push(pointProxy);
        this.updateElementPoints();
        return this;
    };
    ;
    Polygon.prototype.moveLastPoint = function (x, y) {
        var _a;
        var lastPoint = this.points[this.points.length - 1];
        _a = [x, y], lastPoint.x = _a[0], lastPoint.y = _a[1];
        return this;
    };
    ;
    // TODO: move by transform:translate instead?
    Polygon.prototype.move = function (deltaX, deltaY) {
        this.points.forEach(function (p) {
            p.x += deltaX;
            p.y += deltaY;
        });
        return this;
    };
    ;
    Polygon.prototype.isValid = function () {
        return this.points.length >= 3;
    };
    ;
    Polygon.prototype.setHandlesVisibility = function (visible) {
        this.getHandles().forEach(function (handle) { return handle.setVisible(visible); });
        return this;
    };
    ;
    Polygon.prototype.setIsSelected = function (isSelected) {
        this._logWarnOnOpOnFrozen('Select/unselect performed on');
        this.isSelected = isSelected = isSelected !== undefined ? !!isSelected : true;
        this.setHandlesVisibility(isSelected);
        this.style &&
            (0, style_1.setStyle)(this.element, isSelected ? this.style.componentSelect.on : this.style.componentSelect.off);
        return this;
    };
    ;
    Polygon.prototype.getHandles = function () {
        return this.points.map(function (p) { return p.handle; });
    };
    ;
    Polygon.prototype.setStyle = function (style) {
        this.style = style;
        (0, style_1.setStyle)(this.element, style.component);
        (0, style_1.setStyle)(this.element, style.componentHover.off);
        (0, style_1.setStyle)(this.element, style.componentSelect.off);
        (0, style_1.addHover)(this.element, style.componentHover.off, style.componentHover.on);
        return this;
    };
    ;
    Polygon.prototype.setDataAttributes = function (attributes) {
        for (var key in attributes) {
            this.element.setAttribute(key, String(attributes[key]));
        }
        return this;
    };
    ;
    Polygon.prototype.export = function () {
        //@ts-ignore
        var data = {
            points: this.points.map(function (p) { return ({ x: p.x, y: p.y }); })
        };
        for (var _i = 0, _a = this.element.attributes; _i < _a.length; _i++) {
            var attribute = _a[_i];
            if (attribute.name in this.includeAttributes || constants_1.dataRegex.test(attribute.name)) {
                data[attribute.name] = attribute.value;
            }
        }
        return data;
    };
    ;
    Polygon.prototype._logWarnOnOpOnFrozen = function (op) {
        if (this.isFrozen) {
            console.warn("".concat(op, " frozen ").concat(this.element.tagName, " with id ").concat(this.element.id));
        }
    };
    ;
    return Polygon;
}());
exports.Polygon = Polygon;
