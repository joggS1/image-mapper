import { createFSMService } from './fsm';
import { Handle } from './handle';
import { Component, EditorMode, EditorOptions, FigureOptions, MouseButtons, PolygonOptions, Style, SVGTagNames } from './types';
export declare class Editor {
    width: number;
    height: number;
    svg: SVGSVGElement;
    style: Style;
    fsmService: ReturnType<typeof createFSMService>;
    componentDrawnHandler: EditorOptions['componentDrawnHandler'];
    selectModeHandler: EditorOptions['selectModeHandler'];
    clickHandler: EditorOptions['clickHandler'];
    selectHandler: EditorOptions['selectHandler'];
    image?: SVGImageElement;
    mode?: EditorMode;
    /** components */
    cgroup: SVGGElement;
    /** handles */
    hgroup: SVGGElement;
    _cacheElementMapping: Record<string, Component>;
    deleteHandler?: EditorOptions['deleteHandler'];
    idGenerator: EditorOptions['idGenerator'];
    scale: number;
    private imageSizes;
    _idCounter: number;
    _handleIdCounter: number;
    mouseButtons: MouseButtons[];
    constructor(svgEl: SVGSVGElement | string, options?: EditorOptions, style?: Style);
    loadImage(path: string, width: number, height: number): this;
    setStyle(style: object): this;
    setScale(scale: number): void;
    setEditorMode(mode: SVGTagNames): void;
    selectComponent(component: Component | string): Component;
    removeComponent(component: string | any): SVGAElement | undefined;
    on(eventTypes: string, handler: (e: Event) => any): this;
    off(eventTypes: string, handler: (e: Event) => {}): this;
    getComponentById(id: string): Component;
    import(data: any, idInterceptor?: (id: string) => string): any;
    export(escape?: boolean): {
        idCounter: number;
        components: {
            id: string;
            type: string;
            data: FigureOptions | PolygonOptions;
        }[];
    };
    createRectangle(dim: FigureOptions, id: string): Component;
    createCircle(dim: FigureOptions, id: string): Component;
    createEllipse(dim: FigureOptions, id: string): Component;
    createPolygon(data: PolygonOptions, id: string): Component;
    registerComponent(component: Component, id?: string): Component;
    registerComponentHandle(handle: Handle): Component;
    unregisterComponent(component: string | Component): void;
}
declare const _default: (isView?: boolean) => (svgEl: SVGSVGElement | string, options?: EditorOptions, style?: Style) => Editor;
export default _default;
