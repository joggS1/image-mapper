import { addEventListeners } from './events';
import {
  Style,
  ComponentStyles,
  ComponentStylesSelect,
  ComponentStylesHover,
  HandleStylesHover,
  HandleStyles
} from './types';

const componentDefault: ComponentStyles = {
  fill: 'rgb(102, 102, 102)',
  stroke: 'rgb(51, 51, 51)',
  cursor: 'pointer'
};

const componentHoverDefault: ComponentStylesHover = {
  off: {
    'stroke-width': 1,
    opacity: 0.5
  },
  on: {
    'stroke-width': 2,
    opacity: 0.6
  }
};

// TODO: should not be overridden by unhovering
const componentSelectDefault: ComponentStylesSelect = {
  off: {
    'stroke-dasharray': 'none', // alt. 'initial'
    'stroke-linejoin': 'miter'
  },
  on: {
    'stroke-dasharray': '4 3',
    'stroke-linejoin': 'round'
  }
};

const handleDefault: HandleStyles = {
  fill: 'rgb(255, 255, 255)',
  stroke: 'rgb(51, 51, 51)',
  'stroke-width': 1,
  opacity: 0.3,
  cursor: 'pointer'
};

const handleHoverDefault: HandleStylesHover = {
  opacity: 0.6
};

const getDefaultStyle = (): Style => ({
  component: Object.assign({}, componentDefault),
  componentHover: Object.assign({}, componentHoverDefault),
  componentSelect: Object.assign({}, componentSelectDefault),
  handle: Object.assign({}, handleDefault),
  handleHover: Object.assign({}, handleHoverDefault)
});

const setStyle = (element: SVGElement, style: any) =>
  Object.entries(style).forEach(([attr, value]) => element.setAttribute(attr, String(value)));

const addHover = (
  element: SVGElement,
  defaultStyle: ComponentStylesHover['off'],
  hoverStyle: ComponentStylesHover['on']
) => {
  addEventListeners(element, 'mouseenter touchstart', () => setStyle(element, hoverStyle));
  addEventListeners(element, 'mouseleave touchend touchleave', () =>
    setStyle(element, defaultStyle)
  );
};

export { getDefaultStyle, setStyle, addHover };
