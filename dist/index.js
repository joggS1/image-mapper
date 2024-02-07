"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.view = exports.editor = void 0;
var editor_1 = __importDefault(require("./editor"));
exports.editor = (0, editor_1.default)(false);
exports.view = (0, editor_1.default)(true);
exports.default = {
    editor: exports.editor,
    view: exports.view
};
