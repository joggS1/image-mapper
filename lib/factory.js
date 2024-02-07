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
//@ts-ignore
import { SVG_NS, dataRegex } from './constants';
import { doc } from './globals';
import { Handle } from './handle';
import { onChange } from './onChangeProxy';
import { addHover, setStyle } from './style';
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
        this.element = doc.createElementNS(SVG_NS, this.svgElementName);
        this.editorOwner = editorOwner;
        //svgElementName, propChangeListener
        this.dim = onChange({
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
            new Handle(x, y, function (deltaX, deltaY) {
                _this.dim.x += deltaX;
                _this.dim.width -= deltaX;
                _this.dim.y += deltaY;
                _this.dim.height -= deltaY;
            }, this.isFrozen),
            //@ts-ignore
            new Handle(x, y, function (deltaX, deltaY) {
                _this.dim.x += deltaX;
                _this.dim.width -= deltaX;
                _this.dim.height += deltaY;
            }, this.isFrozen),
            //@ts-ignore
            new Handle(x, y, function (deltaX, deltaY) {
                _this.dim.width += deltaX;
                _this.dim.y += deltaY;
                _this.dim.height -= deltaY;
            }, this.isFrozen),
            //@ts-ignore
            new Handle(x, y, function (deltaX, deltaY) {
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
            setStyle(this.element, isSelected ? this.style.componentSelect.on : this.style.componentSelect.off);
        return this;
    };
    ;
    CornerShapedElement.prototype.getHandles = function () {
        return this.handles;
    };
    ;
    CornerShapedElement.prototype.setStyle = function (style) {
        this.style = style;
        setStyle(this.element, style.component);
        setStyle(this.element, style.componentHover.off);
        setStyle(this.element, style.componentSelect.off);
        addHover(this.element, style.componentHover.off, style.componentHover.on);
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
        var e_1, _a;
        var _b = this.dim, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
        var data = {
            x: x,
            y: y,
            width: width,
            height: height
        };
        try {
            for (var _c = __values(this.element.attributes), _d = _c.next(); !_d.done; _d = _c.next()) {
                var attribute = _d.value;
                if (attribute.name in this.includeAttributes || dataRegex.test(attribute.name)) {
                    data[attribute.name] = attribute.value;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
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
export { CornerShapedElement };
//# sourceMappingURL=factory.js.map