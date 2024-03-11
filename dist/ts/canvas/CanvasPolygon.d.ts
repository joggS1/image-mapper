import { CanvasFactory } from './CanvasFactory';
import { CanvasViewer } from './CanvasViewer';
import { PolygonOptions } from '../types';
export declare class CanvasPolygon extends CanvasFactory<PolygonOptions> {
    constructor(rootClass: CanvasViewer, data: PolygonOptions, id: string);
    draw(): this;
}
