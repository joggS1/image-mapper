"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
var globals_1 = require("./globals");
var fsm_1 = require("./fsm");
var events_1 = require("./events");
var onChangeProxy_1 = require("./onChangeProxy");
var polygon_1 = require("./polygon");
var rect_1 = require("./rect");
var circle_1 = require("./circle");
var ellipse_1 = require("./ellipse");
var handle_1 = require("./handle");
var style_1 = require("./style");
var constants_1 = require("./constants");
var Editor = /** @class */ (function () {
    function Editor(svgEl, options, style) {
        var _a, _b, _c;
        if (options === void 0) { options = {}; }
        if (style === void 0) { style = {}; }
        var _this = this;
        _a = [
            options.width,
            options.height,
            options.componentDrawnHandler, // applies to Editor only
            options.selectModeHandler, // applies to Editor only
            options.viewClickHandler, // applies to View only
        ], _b = _a[0], this.width = _b === void 0 ? 1200 : _b, _c = _a[1], this.height = _c === void 0 ? 600 : _c, this.componentDrawnHandler = _a[2], this.selectModeHandler = _a[3], this.viewClickHandler = _a[4];
        this.style = deepMerge((0, style_1.getDefaultStyle)(), style);
        this.fsmService = (0, fsm_1.createFSMService)(this).start();
        this.svg = svgEl;
        if (typeof svgEl === 'string') {
            this.svg = globals_1.doc.getElementById(svgEl);
            if (!this.svg) {
                this.svg = globals_1.doc.createElementNS(constants_1.SVG_NS, 'svg');
                this.svg.setAttribute('version', '1.1');
                this.svg.setAttribute('id', svgEl);
                // this.svg.setAttribute("shape-rendering", "crispEdges");
                this.svg.setAttribute('width', this.width + 'px');
                this.svg.setAttribute('height', this.height + 'px');
                this.svg.setAttribute('viewBox', "0, 0, ".concat(this.width, " ").concat(this.height));
                this.svg.setAttribute('preserveAspectRatio', 'xMinYMin');
                var svg_1 = this.svg;
                window.addEventListener('load', function load() {
                    globals_1.doc.body.appendChild(svg_1);
                }, { once: true });
            }
        }
        else if (svgEl && svgEl.tagName === 'svg') {
            this.svg = svgEl;
        }
        if (!this.svg)
            throw new Error('No SVG element provided');
        this.cgroup = globals_1.doc.createElementNS(constants_1.SVG_NS, 'g');
        this.hgroup = globals_1.doc.createElementNS(constants_1.SVG_NS, 'g');
        this.svg.appendChild(this.cgroup);
        this.svg.appendChild(this.hgroup);
        //@ts-ignore
        this._cacheElementMapping = (0, onChangeProxy_1.onChange)({}, function (prop, newComponent, prevComponent) {
            if (newComponent) {
                if (newComponent instanceof handle_1.Handle) {
                    //@ts-ignore
                    _this.hgroup.appendChild(newComponent.element);
                }
                else {
                    _this.cgroup.appendChild(newComponent.element);
                }
            }
            else {
                if (prevComponent instanceof handle_1.Handle) {
                    //@ts-ignore
                    _this.hgroup.removeChild(prevComponent.element);
                }
                else {
                    _this.cgroup.removeChild(prevComponent.element);
                    prevComponent.getHandles().forEach(function (h) {
                        _this.unregisterComponent(h);
                    });
                }
            }
        });
        this._idCounter = 1;
        this._handleIdCounter = 1;
    }
    ;
    Editor.prototype.loadImage = function (path, width, height) {
        var _a;
        var image = globals_1.doc.createElementNS(constants_1.SVG_NS, 'image');
        image.setAttributeNS(constants_1.XLINK_NS, 'href', path);
        width && image.setAttribute('width', String(width));
        height && image.setAttribute('height', String(height));
        (_a = this.svg) === null || _a === void 0 ? void 0 : _a.prepend(image);
        return this;
    };
    ;
    Editor.prototype.setStyle = function (style) {
        this.style = deepMerge(this.style, style);
        return this;
    };
    Editor.prototype.rect = function () {
        this.fsmService.send('MODE_DRAW_RECT');
    };
    ;
    Editor.prototype.polygon = function () {
        this.fsmService.send('MODE_DRAW_POLYGON');
    };
    ;
    Editor.prototype.circle = function () {
        this.fsmService.send('MODE_DRAW_CIRCLE');
    };
    ;
    Editor.prototype.ellipse = function () {
        this.fsmService.send('MODE_DRAW_ELLIPSE');
    };
    ;
    Editor.prototype.selectMode = function () {
        this.fsmService.send('MODE_SELECT');
    };
    ;
    Editor.prototype.selectComponent = function (component) {
        if (typeof component === 'string') {
            component = this.getComponentById(component);
        }
        // When component is defined, we require a component which supports setIsSelected() (handles do not).
        if (!component || component.setIsSelected) {
            Object.values(this._cacheElementMapping).forEach(function (c) {
                if (c === component) {
                    c.setIsSelected && c.setIsSelected(true);
                }
                if (c !== component && !c.isFrozen) {
                    c.setIsSelected && c.setIsSelected(false);
                }
            });
        }
        return component;
    };
    ;
    Editor.prototype.removeComponent = function (component) {
        if (typeof component === 'string') {
            component = this.getComponentById(component);
        }
        this.unregisterComponent(component);
        return component;
        ;
    };
    ;
    Editor.prototype.on = function (eventTypes, handler) {
        (0, events_1.addEventListeners)(this.svg, eventTypes, handler);
        return this;
    };
    ;
    Editor.prototype.off = function (eventTypes, handler) {
        (0, events_1.removeEventListeners)(this.svg, eventTypes, handler);
        return this;
    };
    ;
    Editor.prototype.getComponentById = function (id) {
        return this._cacheElementMapping && this._cacheElementMapping[id];
    };
    ;
    Editor.prototype.import = function (data, idInterceptor) {
        var _this = this;
        var jsData = JSON.parse(data);
        this._idCounter = jsData.idCounter;
        return jsData.components
            .map(function (c) {
            var id = idInterceptor ? idInterceptor(c.id) : c.id;
            switch (c.type) {
                case 'rect':
                    return _this.createRectangle(c.data, id); // c.data = dim object
                case 'circle':
                    return _this.createCircle(c.data, id); // c.data = dim object
                case 'ellipse':
                    return _this.createEllipse(c.data, id); // c.data = dim object
                case 'polygon':
                    return _this.createPolygon(c.data, id); // c.data = array of points
                default:
                    console.error('Unknown type', c.type);
                    return null;
            }
        })
            .filter(function (c) { return c; });
    };
    ;
    Editor.prototype.export = function (escape) {
        var data = {
            idCounter: this._idCounter,
            components: Object.entries(this._cacheElementMapping)
                .filter(function (_a) {
                var id = _a[0], component = _a[1];
                return !(component instanceof handle_1.Handle);
            })
                .map(function (_a) {
                var id = _a[0], component = _a[1];
                return ({
                    id: id,
                    type: component.element.tagName,
                    data: component.export(),
                });
            }),
        };
        var result = JSON.stringify(data);
        return escape ? result.replace(/[\"]/g, '\\"') : result;
    };
    ;
    Editor.prototype.createRectangle = function (dim, id) {
        var x = dim.x, y = dim.y, width = dim.width, height = dim.height, attributes = __rest(dim, ["x", "y", "width", "height"]);
        return this.registerComponent(new rect_1.Rectangle(this, x, y, width, height).setStyle(this.style).setDataAttributes(attributes), id);
    };
    ;
    Editor.prototype.createCircle = function (dim, id) {
        var x = dim.x, y = dim.y, width = dim.width, height = dim.height, attributes = __rest(dim, ["x", "y", "width", "height"]);
        return this.registerComponent(new circle_1.Circle(this, x, y, width, height).setStyle(this.style).setDataAttributes(attributes), id);
    };
    ;
    Editor.prototype.createEllipse = function (dim, id) {
        var x = dim.x, y = dim.y, width = dim.width, height = dim.height, attributes = __rest(dim, ["x", "y", "width", "height"]);
        return this.registerComponent(new ellipse_1.Ellipse(this, x, y, width, height).setStyle(this.style).setDataAttributes(attributes), id);
    };
    ;
    Editor.prototype.createPolygon = function (data, id) {
        var points = data.points, attributes = __rest(data, ["points"]);
        return this.registerComponent(new polygon_1.Polygon(this, points).setStyle(this.style).setDataAttributes(attributes), id);
    };
    ;
    Editor.prototype.registerComponent = function (component, id) {
        if (component instanceof handle_1.Handle) {
            id = 'handle_' + this._handleIdCounter++;
        }
        else {
            id = id || component.element.tagName + '_' + this._idCounter++;
        }
        this._cacheElementMapping[id] = component;
        component.element.id = id;
        return component;
    };
    ;
    Editor.prototype.registerComponentHandle = function (handle) {
        //@ts-ignore
        return this.registerComponent(handle.setStyle(this.style.handle, this.style.handleHover));
    };
    ;
    Editor.prototype.unregisterComponent = function (component) {
        component._logWarnOnOpOnFrozen && component._logWarnOnOpOnFrozen('Deleting');
        //@ts-ignore
        this._cacheElementMapping[component.element.id] = null; // tell observer
        delete this._cacheElementMapping[component.element.id];
    };
    ;
    return Editor;
}());
var addEditorListeners = function (editor) {
    var prevTouch; // used by touchmove
    (0, events_1.addEventListeners)(editor.svg, 'mousedown touchstart', function (e) {
        var _a;
        e.preventDefault(); // avoid both mouse and touch event on devices firing both
        var storedComponent = editor.getComponentById(e.target.id);
        var componentTarget = storedComponent && storedComponent.isFrozen ? null : storedComponent;
        var touchBCR = (_a = editor.svg) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        var touch = e.targetTouches && e.targetTouches[0];
        editor.fsmService.send({
            type: 'MT_DOWN',
            component: componentTarget, // not defined when mousedown on editor
            offsetX: e.offsetX !== undefined ? e.offsetX : touch && touch.clientX - touchBCR.x,
            offsetY: e.offsetY !== undefined ? e.offsetY : touch && touch.clientY - touchBCR.y,
        });
        prevTouch = touch;
    });
    (0, events_1.addEventListeners)(editor.svg, 'mouseup touchend mouseleave touchleave', function (e) {
        e.preventDefault(); // avoid both mouse and touch event on devices firing both
        editor.fsmService.send({
            type: 'MT_UP',
        });
        prevTouch = null;
    });
    (0, events_1.addEventListeners)(editor.svg, 'mousemove touchmove', function (e) {
        var _a;
        var touchBCR = (_a = editor.svg) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        var touch = e.targetTouches && e.targetTouches[0];
        editor.fsmService.send({
            type: 'MT_MOVE',
            offsetX: e.offsetX !== undefined ? e.offsetX : touch && touch.clientX - touchBCR.x,
            offsetY: e.offsetY !== undefined ? e.offsetY : touch && touch.clientY - touchBCR.y,
            movementX: e.movementX !== undefined ? e.movementX : prevTouch ? touch.clientX - prevTouch.clientX : 0,
            movementY: e.movementY !== undefined ? e.movementY : prevTouch ? touch.clientY - prevTouch.clientY : 0,
        });
        prevTouch = touch;
    });
    (0, events_1.addEventListeners)(globals_1.root.window, 'keydown', function (e) {
        switch (e.key) {
            case 'Escape':
                editor.fsmService.send('KEYDOWN_ESC');
                break;
            case 'Enter':
                editor.fsmService.send('KEYDOWN_ESC');
            case 'Delete':
                editor.fsmService.send('KEYDOWN_DEL');
                break;
            case 'ArrowUp':
                e.preventDefault();
                editor.fsmService.send({
                    type: 'KEYDOWN_ARRAY',
                    movementX: 0,
                    movementY: -1,
                });
                break;
            case 'ArrowDown':
                e.preventDefault();
                editor.fsmService.send({
                    type: 'KEYDOWN_ARRAY',
                    movementX: 0,
                    movementY: 1,
                });
                break;
            case 'ArrowLeft':
                e.preventDefault();
                editor.fsmService.send({
                    type: 'KEYDOWN_ARRAY',
                    movementX: -1,
                    movementY: 0,
                });
                break;
            case 'ArrowRight':
                e.preventDefault();
                editor.fsmService.send({
                    type: 'KEYDOWN_ARRAY',
                    movementX: 1,
                    movementY: 0,
                });
                break;
        }
    });
    return editor;
};
var addViewListeners = function (view) {
    (0, events_1.addEventListeners)(view.cgroup, 'click touchstart', function (e) {
        e.preventDefault(); // avoid both touch and pointer event on devices firing both
        view.viewClickHandler && view.viewClickHandler(e, e.target.id);
    });
    return view;
};
var deepMerge = function (target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length || !sources[0]) {
        return target;
    }
    var source = sources.shift();
    Object.entries(source).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (Object.getPrototypeOf(value) === Object.prototype) {
            deepMerge(target[key], value);
        }
        else {
            target[key] = value;
        }
    });
    return deepMerge.apply(void 0, __spreadArray([target], sources, false));
};
exports.default = (function (isView) {
    return function EditorConstructor(svgEl, options, style) {
        if (options === void 0) { options = {}; }
        if (style === void 0) { style = {}; }
        return isView
            ? addViewListeners(new Editor(svgEl, options, style))
            : addEditorListeners(new Editor(svgEl, options, style));
    };
});