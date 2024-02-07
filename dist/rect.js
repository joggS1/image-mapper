"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var factory_1 = require("./factory");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(editorOwner, x, y, width, height) {
        var _this = _super.call(this, 'rect', {
            x: function (x, prevX, dim) {
                _this.element.setAttribute('x', String(dim.width < 0 ? x + dim.width : x));
            },
            // move
            y: function (y, prevY, dim) {
                _this.element.setAttribute('y', String(dim.height < 0 ? y + dim.height : y));
            },
            // resize
            width: function (width, prevWidth, dim) {
                _this.element.setAttribute('width', String(Math.abs(width)));
                _this.element.setAttribute('x', String(width < 0 ? dim.x + width : dim.x));
            },
            // resize
            height: function (height, prevHeight, dim) {
                _this.element.setAttribute('height', String(Math.abs(height)));
                _this.element.setAttribute('y', String(height < 0 ? dim.y + height : dim.y));
            },
        }) || this;
        _this.add(editorOwner, x, y, width, height);
        return _this;
    }
    return Rectangle;
}(factory_1.CornerShapedElement));
exports.Rectangle = Rectangle;
