import { Handle } from '../handle';
import { Circle } from '../circle';
import { Rectangle } from '../rect';
import { Polygon } from '../polygon';
import { Ellipse } from '../ellipse';
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
} & Record<string, any>;
export type Component = Circle | Rectangle | Polygon | Ellipse;
export declare enum MouseButtons {
    LMB = 1,
    RMB = 2,
    MMB = 4
}
export type SVGTagNames = 'circle' | 'ellipse' | 'polygon' | 'rect';
type SchemaComponents<T = SVGTagNames> = Array<T extends 'polygon' ? {
    type: T;
    id: string;
    data: PolygonOptions;
} : {
    type: T;
    id: string;
    data: FigureOptions;
}>;
export type Schema = {
    id?: string;
    components: SchemaComponents;
};
export {};
