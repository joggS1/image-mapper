import { Dimensions, FigureOptions, PolygonOptions, PolygonPoint } from 'src/types';
export declare class MobileFactory<T extends PolygonOptions | FigureOptions> {
    id: string;
    data: T;
    dim: Dimensions;
    center: PolygonPoint;
    constructor(data: T, id: string);
}
