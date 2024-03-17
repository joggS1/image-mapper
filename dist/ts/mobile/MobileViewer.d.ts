import { Schema } from '../types';
import { MobileComponent, MobileViewerOptions } from './types';
import { TouchHandler } from './TouchHandler';
export declare class MobileViewer {
    img: HTMLImageElement;
    scale: number;
    touchHandler: TouchHandler;
    componentsMap: Map<string, MobileComponent>;
    zonesMap: Map<number, Set<MobileComponent>>;
    zonesCount: number;
    constructor(imgEl: HTMLImageElement | string, options?: MobileViewerOptions, splitToZonesCount?: number);
    get TouchHandler(): TouchHandler;
    on<T extends keyof DocumentEventMap>(eventTypes: T, handler: (e: DocumentEventMap[T]) => any): this;
    setScale(scale: number): this;
    import(data: Schema, img: string): Promise<void>;
    selectComponent(id: MobileComponent['id']): MobileComponent | undefined;
    getClickedComponent(clientX: number, clientY: number): {
        clientY: number;
        clientX: number;
        rect: DOMRect;
        clickY: number;
        clickX: number;
        c: MobileComponent;
    } | undefined;
    private createRectangle;
    private createCircle;
    private createEllipse;
    private createPolygon;
    private initZones;
    private getZone;
    private setToZones;
}
