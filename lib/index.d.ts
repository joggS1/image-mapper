export declare const editor: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: {}) => {
    width: number;
    height: number;
    svg: SVGSVGElement;
    style: object;
    fsmService: import("xstate").Interpreter<{
        unfinishedComponent: undefined;
        mouseDownInSelectModeObject: undefined;
        _editor: any;
    }, any, import("xstate").AnyEventObject, {
        value: any;
        context: {
            unfinishedComponent: undefined;
            mouseDownInSelectModeObject: undefined;
            _editor: any;
        };
    }, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, import("xstate").AnyEventObject, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
    componentDrawnHandler: ((component: SVGElement, componentId: string) => void) | undefined;
    selectModeHandler: (() => void) | undefined;
    viewClickHandler: ((component: SVGElement, componentId: string) => void) | undefined;
    cgroup: SVGGElement;
    hgroup: SVGGElement;
    _cacheElementMapping: {
        [key: string]: SVGAElement;
    };
    _idCounter: number;
    _handleIdCounter: number;
    loadImage(path: string, width: string | number, height: string | number): any;
    setStyle(style: object): any;
    rect(): void;
    polygon(): void;
    circle(): void;
    ellipse(): void;
    selectMode(): void;
    selectComponent(component: any): SVGAElement | undefined;
    removeComponent(component: any): SVGAElement | undefined;
    on(eventTypes: string[], handler: (e: Event) => {}): any;
    off(eventTypes: string[], handler: (e: Event) => {}): any;
    getComponentById(id: string): SVGAElement;
    import(data: string, idInterceptor: (id: string) => string): any;
    export(escape?: boolean | undefined): string;
    createRectangle(dim: import("./types").FigureOptions, id: string): any;
    createCircle(dim: import("./types").FigureOptions, id: string): any;
    createEllipse(dim: import("./types").FigureOptions, id: string): any;
    createPolygon(data: import("./types").FigureOptions, id: string): any;
    registerComponent(component: any, id?: string | undefined): any;
    registerComponentHandle(handle: import("./handle").Handle): any;
    unregisterComponent(component: any): void;
};
export declare const view: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: {}) => {
    width: number;
    height: number;
    svg: SVGSVGElement;
    style: object;
    fsmService: import("xstate").Interpreter<{
        unfinishedComponent: undefined;
        mouseDownInSelectModeObject: undefined;
        _editor: any;
    }, any, import("xstate").AnyEventObject, {
        value: any;
        context: {
            unfinishedComponent: undefined;
            mouseDownInSelectModeObject: undefined;
            _editor: any;
        };
    }, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, import("xstate").AnyEventObject, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
    componentDrawnHandler: ((component: SVGElement, componentId: string) => void) | undefined;
    selectModeHandler: (() => void) | undefined;
    viewClickHandler: ((component: SVGElement, componentId: string) => void) | undefined;
    cgroup: SVGGElement;
    hgroup: SVGGElement;
    _cacheElementMapping: {
        [key: string]: SVGAElement;
    };
    _idCounter: number;
    _handleIdCounter: number;
    loadImage(path: string, width: string | number, height: string | number): any;
    setStyle(style: object): any;
    rect(): void;
    polygon(): void;
    circle(): void;
    ellipse(): void;
    selectMode(): void;
    selectComponent(component: any): SVGAElement | undefined;
    removeComponent(component: any): SVGAElement | undefined;
    on(eventTypes: string[], handler: (e: Event) => {}): any;
    off(eventTypes: string[], handler: (e: Event) => {}): any;
    getComponentById(id: string): SVGAElement;
    import(data: string, idInterceptor: (id: string) => string): any;
    export(escape?: boolean | undefined): string;
    createRectangle(dim: import("./types").FigureOptions, id: string): any;
    createCircle(dim: import("./types").FigureOptions, id: string): any;
    createEllipse(dim: import("./types").FigureOptions, id: string): any;
    createPolygon(data: import("./types").FigureOptions, id: string): any;
    registerComponent(component: any, id?: string | undefined): any;
    registerComponentHandle(handle: import("./handle").Handle): any;
    unregisterComponent(component: any): void;
};
declare const _default: {
    editor: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: {}) => {
        width: number;
        height: number;
        svg: SVGSVGElement;
        style: object;
        fsmService: import("xstate").Interpreter<{
            unfinishedComponent: undefined;
            mouseDownInSelectModeObject: undefined;
            _editor: any;
        }, any, import("xstate").AnyEventObject, {
            value: any;
            context: {
                unfinishedComponent: undefined;
                mouseDownInSelectModeObject: undefined;
                _editor: any;
            };
        }, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, import("xstate").AnyEventObject, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
        componentDrawnHandler: ((component: SVGElement, componentId: string) => void) | undefined;
        selectModeHandler: (() => void) | undefined;
        viewClickHandler: ((component: SVGElement, componentId: string) => void) | undefined;
        cgroup: SVGGElement;
        hgroup: SVGGElement;
        _cacheElementMapping: {
            [key: string]: SVGAElement;
        };
        _idCounter: number;
        _handleIdCounter: number;
        loadImage(path: string, width: string | number, height: string | number): any;
        setStyle(style: object): any;
        rect(): void;
        polygon(): void;
        circle(): void;
        ellipse(): void;
        selectMode(): void;
        selectComponent(component: any): SVGAElement | undefined;
        removeComponent(component: any): SVGAElement | undefined;
        on(eventTypes: string[], handler: (e: Event) => {}): any;
        off(eventTypes: string[], handler: (e: Event) => {}): any;
        getComponentById(id: string): SVGAElement;
        import(data: string, idInterceptor: (id: string) => string): any;
        export(escape?: boolean | undefined): string;
        createRectangle(dim: import("./types").FigureOptions, id: string): any;
        createCircle(dim: import("./types").FigureOptions, id: string): any;
        createEllipse(dim: import("./types").FigureOptions, id: string): any;
        createPolygon(data: import("./types").FigureOptions, id: string): any;
        registerComponent(component: any, id?: string | undefined): any;
        registerComponentHandle(handle: import("./handle").Handle): any;
        unregisterComponent(component: any): void;
    };
    view: (svgEl: string | SVGSVGElement, options?: import("./types").EditorOptions, style?: {}) => {
        width: number;
        height: number;
        svg: SVGSVGElement;
        style: object;
        fsmService: import("xstate").Interpreter<{
            unfinishedComponent: undefined;
            mouseDownInSelectModeObject: undefined;
            _editor: any;
        }, any, import("xstate").AnyEventObject, {
            value: any;
            context: {
                unfinishedComponent: undefined;
                mouseDownInSelectModeObject: undefined;
                _editor: any;
            };
        }, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, import("xstate").AnyEventObject, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
        componentDrawnHandler: ((component: SVGElement, componentId: string) => void) | undefined;
        selectModeHandler: (() => void) | undefined;
        viewClickHandler: ((component: SVGElement, componentId: string) => void) | undefined;
        cgroup: SVGGElement;
        hgroup: SVGGElement;
        _cacheElementMapping: {
            [key: string]: SVGAElement;
        };
        _idCounter: number;
        _handleIdCounter: number;
        loadImage(path: string, width: string | number, height: string | number): any;
        setStyle(style: object): any;
        rect(): void;
        polygon(): void;
        circle(): void;
        ellipse(): void;
        selectMode(): void;
        selectComponent(component: any): SVGAElement | undefined;
        removeComponent(component: any): SVGAElement | undefined;
        on(eventTypes: string[], handler: (e: Event) => {}): any;
        off(eventTypes: string[], handler: (e: Event) => {}): any;
        getComponentById(id: string): SVGAElement;
        import(data: string, idInterceptor: (id: string) => string): any;
        export(escape?: boolean | undefined): string;
        createRectangle(dim: import("./types").FigureOptions, id: string): any;
        createCircle(dim: import("./types").FigureOptions, id: string): any;
        createEllipse(dim: import("./types").FigureOptions, id: string): any;
        createPolygon(data: import("./types").FigureOptions, id: string): any;
        registerComponent(component: any, id?: string | undefined): any;
        registerComponentHandle(handle: import("./handle").Handle): any;
        unregisterComponent(component: any): void;
    };
};
export default _default;
