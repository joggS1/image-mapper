import { SvgPropertiesHyphen } from 'csstype';
type ComponentStyles = SvgPropertiesHyphen;
type ComponentStylesHover = {
    off: SvgPropertiesHyphen;
    on: SvgPropertiesHyphen;
};
type ComponentStylesSelect = {
    off: SvgPropertiesHyphen;
    on: SvgPropertiesHyphen;
};
type HandleStyles = SvgPropertiesHyphen;
type HandleStylesHover = SvgPropertiesHyphen;
type Style = {
    component: ComponentStyles;
    componentHover: ComponentStylesHover;
    componentSelect: ComponentStylesSelect;
    handle: HandleStyles;
    handleHover: HandleStylesHover;
};
type StylesUnion = ComponentStyles | ComponentStylesHover[keyof ComponentStylesHover] | HandleStyles | HandleStylesHover | ComponentStylesSelect[keyof ComponentStylesSelect];
export type { Style, ComponentStyles, ComponentStylesHover, HandleStylesHover, ComponentStylesSelect, HandleStyles, StylesUnion };
