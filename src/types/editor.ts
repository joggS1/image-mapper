import { Handle } from '../handle';
import { Circle } from '../circle';
import { Ellipse } from '../ellipse';
import { Polygon } from '../polygon';
import { Rectangle } from '../rect';

export interface EditorOptions {
  width?: number;
  height?: number;
  /** applies to Editor only */
  componentDrawnHandler?: (component: SVGElement, componentId: string) => void;
  /** applies to Editor only  */
  selectModeHandler?: () => void;
  /** View mode click handler */
  clickHandler?: (
    component: Event,
    componentId: string,
    centerCoords: { x: number; y: number }
  ) => void;
  selectHandler?: (component: Component) => void;
  mouseButtons?: MouseButtons[];
}

export type PolygonPoint = {
  x: number;
  y: number;
  handle?: Handle | null;
};

export type FigureOptions = {
  x: number;
  y: number;
  width: number;
  height: number;
} & Record<string, string | number>;
export type PolygonOptions = {
  points: Array<PolygonPoint>;
} & Record<string, string | number>;

export type SVGTagNames = 'circle' | 'ellipse' | 'polygon' | 'rect';

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

export type Component = Circle | Rectangle | Polygon | Ellipse;
export type EditorMode = SVGTagNames | 'select';

export enum MouseButtons {
  LMB = 1,
  RMB = 2,
  MMB = 4
}
