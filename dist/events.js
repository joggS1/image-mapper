"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEventListeners = exports.addEventListeners = void 0;
var addEventListeners = function (targets, eventTypes, handler) {
    [targets].flat().forEach(function (target) {
        eventTypes.split(' ').forEach(function (eventType) {
            target.addEventListener(eventType, handler, {
                passive: false,
            });
        });
    });
};
exports.addEventListeners = addEventListeners;
var removeEventListeners = function (targets, eventTypes, handler) {
    [targets].flat().forEach(function (target) {
        eventTypes.split(' ').forEach(function (eventType) {
            target.removeEventListener(eventType, handler);
        });
    });
};
exports.removeEventListeners = removeEventListeners;
