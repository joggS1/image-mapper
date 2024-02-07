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
import { CornerShapedElement } from './factory';
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(editorOwner, x, y, width, height) {
        var _this = _super.call(this, 'circle', {
            // move
            x: function (x, prevX, dim) {
                var _a;
                (_a = _this === null || _this === void 0 ? void 0 : _this.element) === null || _a === void 0 ? void 0 : _a.setAttribute('cx', String(x + dim.width / 2));
            },
            // move
            y: function (y, prevY, dim) {
                var _a;
                (_a = _this === null || _this === void 0 ? void 0 : _this.element) === null || _a === void 0 ? void 0 : _a.setAttribute('cy', String(y + dim.height / 2));
            },
            // resize
            width: function (width, prevWidth, dim) {
                var _a, _b;
                (_a = _this === null || _this === void 0 ? void 0 : _this.element) === null || _a === void 0 ? void 0 : _a.setAttribute('r', String(Math.min(Math.abs(width), Math.abs(dim.height)) / 2));
                (_b = _this === null || _this === void 0 ? void 0 : _this.element) === null || _b === void 0 ? void 0 : _b.setAttribute('cx', String(dim.x + width / 2));
            },
            // resize
            height: function (height, prevHeight, dim) {
                var _a, _b;
                (_a = _this === null || _this === void 0 ? void 0 : _this.element) === null || _a === void 0 ? void 0 : _a.setAttribute('r', String(Math.min(Math.abs(height), Math.abs(dim.width)) / 2));
                (_b = _this === null || _this === void 0 ? void 0 : _this.element) === null || _b === void 0 ? void 0 : _b.setAttribute('cy', String(dim.y + height / 2));
            }
        }) || this;
        _this.add(editorOwner, x, y, width, height);
        return _this;
    }
    return Circle;
}(CornerShapedElement));
export { Circle };
//# sourceMappingURL=circle.js.map