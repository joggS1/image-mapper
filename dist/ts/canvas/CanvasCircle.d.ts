import { CanvasFactory } from './CanvasFactory';
import { CanvasViewer } from './CanvasViewer';
import { FigureOptions } from '../types';
export declare class CanvasCircle extends CanvasFactory<FigureOptions> {
    constructor(rootClass: CanvasViewer, data: FigureOptions, id: string);
    draw(): this;
}
