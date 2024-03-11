import { FigureOptions, PolygonOptions } from '../types';
export declare class CanvasViewer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    scale: number;
    style: import("../types/styles").Style;
    alpha: number;
    constructor(canvasEl: HTMLCanvasElement | string, options?: any);
    on<T extends keyof DocumentEventMap>(eventTypes: T, handler: (e: DocumentEventMap[T]) => any): this;
    setScale(scale: number): void;
    loadImage(imgURL: string, width: number, height: number): void;
    import(data: any, idInterceptor?: (id: string) => string): any;
    createRectangle(dim: FigureOptions, id: string): void;
    createCircle(dim: FigureOptions, id: string): void;
    createEllipse(dim: FigureOptions, id: string): void;
    createPolygon(data: PolygonOptions, id: string): void;
}
