"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onChange = void 0;
var onChange = function (object, onChange, thisArg) {
    var handler = {
        defineProperty: function (target, property, descriptor) {
            if (!Object.is(descriptor.value, target[property])) {
                if (typeof onChange === 'function') {
                    // propName, newValue, previousValue, updatedObject
                    onChange.call(thisArg || this, property, descriptor.value, target[property], object);
                }
                else {
                    // Separate listener for each property
                    // newValue, previousValue, updatedObject
                    onChange[property].call(thisArg || this, descriptor.value, target[property], object);
                }
            }
            return Reflect.defineProperty(target, property, descriptor);
        },
    };
    return new Proxy(object, handler);
};
exports.onChange = onChange;
