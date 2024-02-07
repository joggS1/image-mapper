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
import { addEventListeners } from './events';
var componentDefault = {
    fill: 'rgb(102, 102, 102)',
    stroke: 'rgb(51, 51, 51)',
    cursor: 'pointer',
};
var componentHoverDefault = {
    off: {
        'stroke-width': 1,
        opacity: 0.5,
    },
    on: {
        'stroke-width': 2,
        opacity: 0.6,
    },
};
// TODO: should not be overridden by unhovering
var componentSelectDefault = {
    off: {
        'stroke-dasharray': 'none', // alt. 'initial'
        'stroke-linejoin': 'miter',
    },
    on: {
        'stroke-dasharray': '4 3',
        'stroke-linejoin': 'round',
    },
};
var handleDefault = {
    fill: 'rgb(255, 255, 255)',
    stroke: 'rgb(51, 51, 51)',
    'stroke-width': 1,
    opacity: 0.3,
    cursor: 'pointer',
};
var handleHoverDefault = {
    opacity: 0.6,
};
var getDefaultStyle = function () { return ({
    component: Object.assign({}, componentDefault),
    componentHover: Object.assign({}, componentHoverDefault),
    componentSelect: Object.assign({}, componentSelectDefault),
    handle: Object.assign({}, handleDefault),
    handleHover: Object.assign({}, handleHoverDefault),
}); };
var setStyle = function (element, style) {
    return Object.entries(style).forEach(function (_a) {
        var _b = __read(_a, 2), attr = _b[0], value = _b[1];
        return element.setAttribute(attr, value);
    });
};
var addHover = function (element, defaultStyle, hoverStyle) {
    addEventListeners(element, 'mouseenter touchstart', function () { return setStyle(element, hoverStyle); });
    addEventListeners(element, 'mouseleave touchend touchleave', function () {
        return setStyle(element, defaultStyle);
    });
};
export { getDefaultStyle, setStyle, addHover };
