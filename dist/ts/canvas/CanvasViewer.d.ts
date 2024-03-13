import { FigureOptions, PolygonOptions } from '../types';
export declare class CanvasViewer {
    img: HTMLImageElement;
    scale: number;
    style: import("../types/styles").Style;
    background: string;
    alpha: number;
    constructor(canvasEl: HTMLCanvasElement | string, data: any, background: string, options?: any);
    on<T extends keyof DocumentEventMap>(eventTypes: T, handler: (e: DocumentEventMap[T]) => any): this;
    setScale(scale: number): void;
    createRectangle(dim: FigureOptions, id: string): void;
    createCircle(dim: FigureOptions, id: string): void;
    createEllipse(dim: FigureOptions, id: string): void;
    createPolygon(data: PolygonOptions, id: string): void;
}
