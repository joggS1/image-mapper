import { Editor } from './editor';
import { PolygonOptions, FigureOptions, Style } from './types';
export declare const editor: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: Style | undefined) => Editor;
export declare const view: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: Style | undefined) => Editor;
declare const _default: {
    editor: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: Style | undefined) => Editor;
    view: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: Style | undefined) => Editor;
};
export default _default;
export type { PolygonOptions, FigureOptions, Editor, Style };
