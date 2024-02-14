import { Style, ComponentStyles, ComponentStylesSelect, ComponentStylesHover, HandleStylesHover, HandleStyles } from './types';
type StylesUnion = ComponentStyles | ComponentStylesHover[keyof ComponentStylesHover] | HandleStyles | HandleStylesHover | ComponentStylesSelect[keyof ComponentStylesSelect];
declare const getDefaultStyle: () => Style;
declare const setStyle: (element: SVGElement, style: StylesUnion) => void;
declare const addHover: (element: SVGElement, defaultStyle: ComponentStylesHover['off'], hoverStyle: ComponentStylesHover['on']) => void;
export { getDefaultStyle, setStyle, addHover };
