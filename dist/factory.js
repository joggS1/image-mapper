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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
        this.dim = {
            x: 0,
            height: 0,
            width: 0,
            y: 0
        };
        this.style = {};
        this.isSelected = false;
        this.isFrozen = false;
        this.propChangeListener = propChangeListener;
        this.svgElementName = svgElementName;
        this.element = globals_1.doc.createElementNS(constants_1.SVG_NS, this.svgElementName);
    }
    CornerShapedElement.prototype.add = function (editorOwner, x, y, width, height) {
        var _a;
        var _this = this;
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
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
                //@ts-ignore
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
                //@ts-ignore
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
                //@ts-ignore
                (_a = _this.propChangeListener.width).call.apply(_a, __spreadArray([_this], [width, prevWidth, dim], false));
                _this.handles[2].setAttrX(dim.x + width);
                _this.handles[3].setAttrX(dim.x + width);
            },
            // resize
            height: function (height, prevHeight, dim) {
                var _a;
                _this._logWarnOnOpOnFrozen('Dimension property height changed on');
                //@ts-ignore
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
        _a = __read([width, height], 2), this.dim.width = _a[0], this.dim.height = _a[1];
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
        var _a;
        for (var key in attributes) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.setAttribute(key, String(attributes[key]));
        }
        return this;
    };
    ;
    CornerShapedElement.prototype.export = function () {
        var e_1, _a;
        var _b;
        var _c = this.dim, x = _c.x, y = _c.y, width = _c.width, height = _c.height;
        var data = {
            x: x,
            y: y,
            width: width,
            height: height
        };
        try {
            for (var _d = __values((_b = this.element) === null || _b === void 0 ? void 0 : _b.attributes), _e = _d.next(); !_e.done; _e = _d.next()) {
                var attribute = _e.value;
                if (attribute.name in this.includeAttributes || constants_1.dataRegex.test(attribute.name)) {
                    data[attribute.name] = attribute.value;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return data;
    };
    ;
    CornerShapedElement.prototype._logWarnOnOpOnFrozen = function (op) {
        var _a, _b;
        if (this.isFrozen) {
            console.warn("".concat(op, " frozen ").concat((_a = this.element) === null || _a === void 0 ? void 0 : _a.tagName, " with id ").concat((_b = this.element) === null || _b === void 0 ? void 0 : _b.id));
        }
    };
    ;
    return CornerShapedElement;
}());
exports.CornerShapedElement = CornerShapedElement;
