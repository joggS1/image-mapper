import { Schema } from '../types';
import { MobileComponent, MobileViewerOptions } from './types';
export declare class MobileViewer {
    img: HTMLImageElement;
    scale: number;
    background: string;
    alpha: number;
    componentsMap: Map<string, MobileComponent>;
    zonesMap: Map<number, Set<MobileComponent>>;
    clickHandler: MobileViewerOptions['clickHandler'];
    zonesCount: number;
    constructor(imgEl: HTMLImageElement | string, options?: MobileViewerOptions, backgroundURL?: string, splitToZonesCount?: number);
    on<T extends keyof DocumentEventMap>(eventTypes: T, handler: (e: DocumentEventMap[T]) => any): this;
    setScale(scale: number): this;
    loadImage(url: string): void;
    import(data: Schema): Promise<void>;
    selectComponent(id: MobileComponent['id']): MobileComponent | undefined;
    private createRectangle;
    private createCircle;
    private createEllipse;
    private createPolygon;
    private initZones;
    private getZone;
    private setToZones;
    private initEventListeners;
}
