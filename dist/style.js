"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHover = exports.setStyle = exports.getDefaultStyle = void 0;
var events_1 = require("./events");
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
exports.getDefaultStyle = getDefaultStyle;
var setStyle = function (element, style) {
    return Object.entries(style).forEach(function (_a) {
        var attr = _a[0], value = _a[1];
        return element.setAttribute(attr, value);
    });
};
exports.setStyle = setStyle;
var addHover = function (element, defaultStyle, hoverStyle) {
    (0, events_1.addEventListeners)(element, 'mouseenter touchstart', function () { return setStyle(element, hoverStyle); });
    (0, events_1.addEventListeners)(element, 'mouseleave touchend touchleave', function () {
        return setStyle(element, defaultStyle);
    });
};
exports.addHover = addHover;
