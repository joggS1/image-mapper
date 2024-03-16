import { Editor } from './editor';
import { FigureOptions, MouseButtons, PolygonOptions, Style, EditorMode, Schema } from './types';
declare const editor: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: Style | undefined) => Editor;
declare const view: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: Style | undefined) => Editor;
declare const _default: {
    editor: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: Style | undefined) => Editor;
    view: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: Style | undefined) => Editor;
    MouseButtons: typeof MouseButtons;
};
export default _default;
export { editor, view, MouseButtons };
export * from './mobile';
export type { PolygonOptions, FigureOptions, Editor, Style, EditorMode, Schema };
