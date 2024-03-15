import { Schema } from '../types';
import { MobileComponent, MobileViewerOptions } from './types';
export declare class MobileViewer {
    img: HTMLImageElement;
    scale: number;
    background: string;
    alpha: number;
    componentsMap: Map<any, any>;
    zonesMap: Map<number, Set<MobileComponent>>;
    clickHandler: MobileViewerOptions['clickHandler'];
    zonesCount: number;
    constructor(imgEl: HTMLImageElement | string, options?: MobileViewerOptions, backgroundURL?: string, splitToZonesCount?: number);
    on<T extends keyof DocumentEventMap>(eventTypes: T, handler: (e: DocumentEventMap[T]) => any): this;
    setScale(scale: number): void;
    loadImage(url: string): void;
    import(data: Schema): Promise<void>;
    private createRectangle;
    private createCircle;
    private createEllipse;
    private createPolygon;
    private initZones;
    private getZone;
    private setToZones;
    private initEventListeners;
}
