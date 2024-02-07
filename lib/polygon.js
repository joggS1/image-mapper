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
import { SVG_NS, dataRegex } from './constants';
import { doc } from './globals';
import { Handle } from './handle';
import { onChange } from './onChangeProxy';
import { addHover, setStyle } from './style';
var Polygon = /** @class */ (function () {
    function Polygon(editorOwner, points) {
        var _this = this;
        this.includeAttributes = ['fill', 'stroke', 'opacity', 'stroke-width'];
        this.editorOwner = editorOwner;
        this.element = doc.createElementNS(SVG_NS, 'polygon');
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
        var pointProxy = onChange(point, function (prop, newValue, prevValue, obj) {
            _this._logWarnOnOpOnFrozen('Point moved on');
            _this.updateElementPoints();
            obj.handle['setAttr' + prop.toUpperCase()](newValue);
        });
        // don't observe handle assignment
        //@ts-ignore
        point.handle = new Handle(x, y, function (deltaX, deltaY) {
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
        _a = __read([x, y], 2), lastPoint.x = _a[0], lastPoint.y = _a[1];
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
            setStyle(this.element, isSelected ? this.style.componentSelect.on : this.style.componentSelect.off);
        return this;
    };
    ;
    Polygon.prototype.getHandles = function () {
        return this.points.map(function (p) { return p.handle; });
    };
    ;
    Polygon.prototype.setStyle = function (style) {
        this.style = style;
        setStyle(this.element, style.component);
        setStyle(this.element, style.componentHover.off);
        setStyle(this.element, style.componentSelect.off);
        addHover(this.element, style.componentHover.off, style.componentHover.on);
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
        var e_1, _a;
        //@ts-ignore
        var data = {
            points: this.points.map(function (p) { return ({ x: p.x, y: p.y }); })
        };
        try {
            for (var _b = __values(this.element.attributes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var attribute = _c.value;
                if (attribute.name in this.includeAttributes || dataRegex.test(attribute.name)) {
                    data[attribute.name] = attribute.value;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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
export { Polygon };
//# sourceMappingURL=polygon.js.map