import { Handle } from '../handle';
import { Circle } from '../circle';
import { Rectangle } from '../rect';
import { Polygon } from '../polygon';
import { Ellipse } from '../ellipse';
import { Prettify } from './utils';

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
  fill?: string;
} & Record<string, string | number>;

export type PolygonOptions = {
  points: Array<PolygonPoint>;
} & Record<string, string | number>;

export type Component = Circle | Rectangle | Polygon | Ellipse;

export enum MouseButtons {
  LMB = 1,
  RMB = 2,
  MMB = 4
}

export type SVGTagNames = 'circle' | 'ellipse' | 'polygon' | 'rect';

interface ComponentDataMapping {
  polygon: PolygonOptions;
  rect: FigureOptions;
  circle: FigureOptions;
  ellipse: FigureOptions;
}

type SchemaComponents<T extends SVGTagNames> = Array<{
  type: T;
  id: string;
  data: ComponentDataMapping[T];
}>;

export type Schema = {
  id?: string;
  components: SchemaComponents<SVGTagNames>;
};
