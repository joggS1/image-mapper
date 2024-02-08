import { PolygonOptions, FigureOptions } from './types';
export declare const editor: (
  svgEl: string | SVGSVGElement,
  options?: import('./types').EditorOptions,
  style?: {}
) => import('./editor').Editor;
export declare const view: (
  svgEl: string | SVGSVGElement,
  options?: import('./types').EditorOptions,
  style?: {}
) => import('./editor').Editor;
declare const _default: {
  editor: (
    svgEl: string | SVGSVGElement,
    options?: import('./types').EditorOptions,
    style?: {}
  ) => import('./editor').Editor;
  view: (
    svgEl: string | SVGSVGElement,
    options?: import('./types').EditorOptions,
    style?: {}
  ) => import('./editor').Editor;
};
export default _default;
export type { PolygonOptions, FigureOptions };
