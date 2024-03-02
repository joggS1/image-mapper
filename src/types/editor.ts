import { Component, MouseButtons, SVGTagNames } from './shared';

export interface EditorOptions {
  width?: number;
  height?: number;
  /** applies to Editor only */
  componentDrawnHandler?: (component: SVGElement, componentId: string) => void;
  /** applies to Editor only  */
  selectModeHandler?: () => void;
  /** View mode click handler */
  clickHandler?: (
    event: DocumentEventMap['mousedown'],
    componentId: string,
    centerCoords: { x: number; y: number }
  ) => void;
  /** View hover handler */
  onMouseOver?: (
    e: DocumentEventMap['mouseover'],
    componentId: string,
    centerCoords: { x: number; y: number }
  ) => void;
  /** View hover handler */
  onMouseOut?: (e: DocumentEventMap['mouseout'], componentId: string) => void;
  idGenerator?: () => string;
  deleteHandler?: (componentId: string, component: Component) => void;
  selectHandler?: (componentId: string, component: Component) => void;
  mouseButtons?: MouseButtons[];
}

export type Dimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type PropChangeListener = {
  x: (currX: number, prevX: number, dim: Dimensions) => void;
  y: (currY: number, prevY: number, dim: Dimensions) => void;
  width: (currWidth: number, prevWidth: number, dim: Dimensions) => void;
  height: (currHeight: number, prevHeight: number, dim: Dimensions) => void;
};

export type EditorMode = SVGTagNames | 'select';
