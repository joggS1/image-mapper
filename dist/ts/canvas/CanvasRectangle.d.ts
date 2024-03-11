import { CanvasFactory } from './CanvasFactory';
import { CanvasViewer } from './CanvasViewer';
import { FigureOptions } from '../types';
export declare class CanvasRectangle extends CanvasFactory<FigureOptions> {
    constructor(rootClass: CanvasViewer, data: FigureOptions, id: string);
    draw(): this;
}
