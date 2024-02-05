export function Circle(editorOwner: any, x: any, y: any, width?: number, height?: number): void;
export class Circle {
    constructor(editorOwner: any, x: any, y: any, width?: number, height?: number);
    editorOwner: any;
    includeAttributes: string[];
    element: any;
    dim: any;
    handles: import("./handle.js").Handle[];
    style: {};
    isSelected: boolean;
    isFrozen: boolean;
    freeze(freeze: any): this;
    resize(x: any, y: any): this;
    move(deltaX: any, deltaY: any): this;
    isValid(): any;
    setHandlesVisibility(visible: any): this;
    setIsSelected(isSelected: any): this;
    getHandles(): import("./handle.js").Handle[];
    setStyle(style: any): this;
    setDataAttributes(attributes: any): this;
    export(): {
        x: any;
        y: any;
        width: any;
        height: any;
    };
    _logWarnOnOpOnFrozen(op: any): void;
}
