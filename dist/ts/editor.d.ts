import { createFSMService } from './fsm';
import { Handle } from './handle';
import { Component, EditorMode, EditorOptions, FigureOptions, MouseButtons, PolygonOptions, Schema, Style, SVGTagNames } from './types';
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
    onMouseOut: EditorOptions['onMouseOut'];
    onMouseOver: EditorOptions['onMouseOver'];
    scale: number;
    private imageSizes;
    _idCounter: number;
    _handleIdCounter: number;
    mouseButtons: MouseButtons[];
    constructor(svgEl: SVGSVGElement | string, options?: EditorOptions, style?: Style);
    loadImage(path: string, width: number, height: number): Promise<this>;
    setStyle(style: object): this;
    setScale(scale: number): void;
    setEditorMode(mode: EditorMode): void;
    selectComponent(component: Component | string): Component;
    removeComponent(component: string | any): SVGAElement | undefined;
    on(eventTypes: string, handler: (e: Event) => any): this;
    addFiguresEventListener<T extends keyof DocumentEventMap>(eventType: T, handler: (e: DocumentEventMap[T]) => any): this;
    removeFiguresEventListener<T extends keyof DocumentEventMap>(eventType: T, handler: (e: DocumentEventMap[T]) => any): this;
    off(eventTypes: string, handler: (e: Event) => {}): this;
    getComponentById(id: string): Component;
    import(data: Schema | string, idInterceptor?: (id: string) => string): any;
    export(escape?: boolean): {
        idCounter: number;
        components: {
            id: string;
            type: SVGTagNames;
            data: FigureOptions | PolygonOptions;
        }[];
    };
    exportAsString(): string;
    createRectangle(dim: FigureOptions, id: string): Component;
    createCircle(dim: FigureOptions, id: string): Component;
    createEllipse(dim: FigureOptions, id: string): Component;
    createPolygon(data: PolygonOptions, id: string): Component;
    registerComponent(component: Component, id?: string): Component;
    registerComponentHandle(handle: Handle): Component;
    unregisterComponent(component: string | Component): void;
    destroy(): void;
}
declare const _default: (isView?: boolean) => (svgEl: SVGSVGElement | string, options?: EditorOptions, style?: Style) => Editor;
export default _default;
