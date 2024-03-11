import { CanvasViewer } from './CanvasViewer';
export declare class CanvasFactory<T> {
    id: string;
    rootClass: CanvasViewer;
    data: T;
    ctx: CanvasRenderingContext2D;
    constructor(rootClass: CanvasViewer, data: T, id: string);
    draw(figure: Path2D): this;
}
