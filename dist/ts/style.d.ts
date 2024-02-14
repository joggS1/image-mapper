import { Style, ComponentStylesHover, StylesUnion } from './types';
declare const getDefaultStyle: () => Style;
declare const setStyle: (element: SVGElement, style: StylesUnion) => void;
declare const addHover: (element: SVGElement, defaultStyle: ComponentStylesHover['off'], hoverStyle: ComponentStylesHover['on']) => void;
export { getDefaultStyle, setStyle, addHover };
