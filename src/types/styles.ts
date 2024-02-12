type ComponentStyles = {
  fill: string;
  stroke: string;
  cursor: string;
};
type ComponentStylesHover = {
  off: {
    'stroke-width': number;
    opacity: number;
  };
  on: {
    'stroke-width': number;
    opacity: number;
  };
};
type ComponentStylesSelect = {
  off: {
    'stroke-dasharray': string;
    'stroke-linejoin': string;
  };
  on: {
    'stroke-dasharray': string;
    'stroke-linejoin': string;
  };
};
type HandleStyles = {
  fill: string;
  stroke: string;
  cursor: string;
  'stroke-width': number;
  opacity: number;
};
type HandleStylesHover = {
  opacity: number;
};

type Style = {
  component: ComponentStyles;
  componentHover: ComponentStylesHover;
  componentSelect: ComponentStylesSelect;
  handle: HandleStyles;
  handleHover: HandleStylesHover;
};

export type {
  Style,
  ComponentStyles,
  ComponentStylesHover,
  HandleStylesHover,
  ComponentStylesSelect,
  HandleStyles
};
