import { Schema } from '../types';
import { MobileComponent, MobileViewerOptions } from './types';
import { TouchHandler } from './TouchHandler';
export declare class MobileViewer {
    img: HTMLImageElement;
    scale: number;
    touchHandler: TouchHandler;
    componentsMap: Map<string, MobileComponent>;
    width: number;
    height: number;
    zonesMap: Map<number, Set<MobileComponent>>;
    clickHandler: MobileViewerOptions['clickHandler'];
    zonesCount: number;
    constructor(imgEl: HTMLImageElement | string, options?: MobileViewerOptions, splitToZonesCount?: number);
    get TouchHandler(): TouchHandler;
    on<T extends keyof DocumentEventMap>(eventTypes: T, handler: (e: DocumentEventMap[T]) => any): this;
    import(data: Schema, img: string): Promise<void>;
    selectComponent(id: MobileComponent['id']): MobileComponent | undefined;
    setScale(scale: number): void;
    getClickedComponent(clientX: number, clientY: number): MobileComponent | undefined;
    private createRectangle;
    private createCircle;
    private createEllipse;
    private createPolygon;
    private initZones;
    private getZone;
    private setToZones;
    private initEvents;
}
