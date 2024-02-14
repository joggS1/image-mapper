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
export type { Style, ComponentStyles, ComponentStylesHover, HandleStylesHover, ComponentStylesSelect, HandleStyles, SvgPropertiesHyphen as SVGstyles };
