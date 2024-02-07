"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CornerShapedElement = void 0;
//@ts-ignore
var constants_1 = require("./constants");
var globals_1 = require("./globals");
var handle_1 = require("./handle");
var onChangeProxy_1 = require("./onChangeProxy");
var style_1 = require("./style");
var CornerShapedElement = /** @class */ (function () {
    function CornerShapedElement(svgElementName, propChangeListener) {
        this.includeAttributes = ['fill', 'stroke', 'opacity', 'stroke-width'];
        this.propChangeListener = propChangeListener;
        this.svgElementName = svgElementName;
    }
    CornerShapedElement.prototype.add = function (editorOwner, x, y, width, height) {
        var _a;
        var _this = this;
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this.element = globals_1.doc.createElementNS(constants_1.SVG_NS, this.svgElementName);
        this.editorOwner = editorOwner;
        //svgElementName, propChangeListener
        this.dim = (0, onChangeProxy_1.onChange)({
            x: x,
            y: y,
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
            x: function (x, prevX, dim) {
                var _a;
                _this._logWarnOnOpOnFrozen('Dimension property x changed on');
                (_a = _this.propChangeListener.x).call.apply(_a, __spreadArray([_this], [x, prevX, dim], false));
                _this.handles[0].setAttrX(x);
                _this.handles[1].setAttrX(x);
                _this.handles[2].setAttrX(x + dim.width);
                _this.handles[3].setAttrX(x + dim.width);
            },
            // move
            y: function (y, prevY, dim) {
                var _a;
                _this._logWarnOnOpOnFrozen('Dimension property y changed on');
                (_a = _this.propChangeListener.y).call.apply(_a, __spreadArray([_this], [y, prevY, dim], false));
                _this.handles[0].setAttrY(y);
                _this.handles[1].setAttrY(y + dim.height);
                _this.handles[2].setAttrY(y);
                _this.handles[3].setAttrY(y + dim.height);
            },
            // resize
            width: function (width, prevWidth, dim) {
                var _a;
                _this._logWarnOnOpOnFrozen('Dimension property width changed on');
                (_a = _this.propChangeListener.width).call.apply(_a, __spreadArray([_this], [width, prevWidth, dim], false));
                _this.handles[2].setAttrX(dim.x + width);
                _this.handles[3].setAttrX(dim.x + width);
            },
            // resize
            height: function (height, prevHeight, dim) {
                var _a;
                _this._logWarnOnOpOnFrozen('Dimension property height changed on');
                (_a = _this.propChangeListener.height).call.apply(_a, __spreadArray([_this], [height, prevHeight, dim], false));
                _this.handles[1].setAttrY(dim.y + height);
                _this.handles[3].setAttrY(dim.y + height);
            },
        }, this);
        this.handles = [
            //@ts-ignore
            new handle_1.Handle(x, y, function (deltaX, deltaY) {
                _this.dim.x += deltaX;
                _this.dim.width -= deltaX;
                _this.dim.y += deltaY;
                _this.dim.height -= deltaY;
            }, this.isFrozen),
            //@ts-ignore
            new handle_1.Handle(x, y, function (deltaX, deltaY) {
                _this.dim.x += deltaX;
                _this.dim.width -= deltaX;
                _this.dim.height += deltaY;
            }, this.isFrozen),
            //@ts-ignore
            new handle_1.Handle(x, y, function (deltaX, deltaY) {
                _this.dim.width += deltaX;
                _this.dim.y += deltaY;
                _this.dim.height -= deltaY;
            }, this.isFrozen),
            //@ts-ignore
            new handle_1.Handle(x, y, function (deltaX, deltaY) {
                _this.dim.width += deltaX;
                _this.dim.height += deltaY;
            }, this.isFrozen)
        ];
        this.handles.forEach(function (h) {
            _this.editorOwner.registerComponentHandle(h);
        });
        // we want to resize when importing shape data too
        _a = [width, height], this.dim.width = _a[0], this.dim.height = _a[1];
        this.style = {};
        this.isSelected = false;
        this.isFrozen = false;
    };
    CornerShapedElement.prototype.freeze = function (freeze) {
        this.isFrozen = freeze !== undefined ? !!freeze : true;
        this.handles.forEach(function (handle) { return handle.freeze(freeze); });
        return this;
    };
    ;
    CornerShapedElement.prototype.resize = function (x, y) {
        this.dim.width = x - this.dim.x;
        this.dim.height = y - this.dim.y;
        return this;
    };
    ;
    CornerShapedElement.prototype.move = function (deltaX, deltaY) {
        this.dim.x += deltaX;
        this.dim.y += deltaY;
        return this;
    };
    ;
    CornerShapedElement.prototype.isValid = function () {
        return this.dim.width && this.dim.height;
    };
    ;
    CornerShapedElement.prototype.setHandlesVisibility = function (visible) {
        this.handles.forEach(function (handle) { return handle.setVisible(visible); });
        return this;
    };
    ;
    CornerShapedElement.prototype.setIsSelected = function (isSelected) {
        this._logWarnOnOpOnFrozen('Select/unselect performed on');
        this.isSelected = isSelected = isSelected !== undefined ? !!isSelected : true;
        this.setHandlesVisibility(isSelected);
        this.style &&
            (0, style_1.setStyle)(this.element, isSelected ? this.style.componentSelect.on : this.style.componentSelect.off);
        return this;
    };
    ;
    CornerShapedElement.prototype.getHandles = function () {
        return this.handles;
    };
    ;
    CornerShapedElement.prototype.setStyle = function (style) {
        this.style = style;
        (0, style_1.setStyle)(this.element, style.component);
        (0, style_1.setStyle)(this.element, style.componentHover.off);
        (0, style_1.setStyle)(this.element, style.componentSelect.off);
        (0, style_1.addHover)(this.element, style.componentHover.off, style.componentHover.on);
        return this;
    };
    ;
    CornerShapedElement.prototype.setDataAttributes = function (attributes) {
        for (var key in attributes) {
            this.element.setAttribute(key, String(attributes[key]));
        }
        return this;
    };
    ;
    CornerShapedElement.prototype.export = function () {
        var _a = this.dim, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var data = {
            x: x,
            y: y,
            width: width,
            height: height
        };
        for (var _i = 0, _b = this.element.attributes; _i < _b.length; _i++) {
            var attribute = _b[_i];
            if (attribute.name in this.includeAttributes || constants_1.dataRegex.test(attribute.name)) {
                data[attribute.name] = attribute.value;
            }
        }
        return data;
    };
    ;
    CornerShapedElement.prototype._logWarnOnOpOnFrozen = function (op) {
        if (this.isFrozen) {
            console.warn("".concat(op, " frozen ").concat(this.element.tagName, " with id ").concat(this.element.id));
        }
    };
    ;
    return CornerShapedElement;
}());
exports.CornerShapedElement = CornerShapedElement;
