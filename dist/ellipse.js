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
exports.Ellipse = void 0;
var factory_1 = require("./factory");
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(editorOwner, x, y, width, height) {
        var _this = _super.call(this, 'ellipse', {
            x: function (x, prevX, dim) {
                _this.element.setAttribute('cx', String(x + dim.width / 2));
            },
            // move
            y: function (y, prevY, dim) {
                _this.element.setAttribute('cy', String(y + dim.height / 2));
            },
            // resize
            width: function (width, prevWidth, dim) {
                _this.element.setAttribute('rx', String(Math.abs(width) / 2));
                _this.element.setAttribute('cx', String(dim.x + width / 2));
            },
            // resize
            height: function (height, prevHeight, dim) {
                _this.element.setAttribute('ry', String(Math.abs(height) / 2));
                _this.element.setAttribute('cy', String(dim.y + height / 2));
            },
        }) || this;
        _this.add(editorOwner, x, y, width, height);
        return _this;
    }
    return Ellipse;
}(factory_1.CornerShapedElement));
exports.Ellipse = Ellipse;
