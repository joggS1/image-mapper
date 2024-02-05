export function Polygon(editorOwner: any, points: any): void;
export class Polygon {
    constructor(editorOwner: any, points: any);
    editorOwner: any;
    element: SVGPolygonElement;
    points: any[];
    includeAttributes: string[];
    style: {};
    isSelected: boolean;
    isFrozen: boolean;
    freeze(freeze: any): this;
    updateElementPoints(): this;
    addPoint(x: any, y: any): this;
    moveLastPoint(x: any, y: any): this;
    move(deltaX: any, deltaY: any): this;
    isValid(): boolean;
    setHandlesVisibility(visible: any): this;
    setIsSelected(isSelected: any): this;
    getHandles(): any[];
    setStyle(style: any): this;
    setDataAttributes(attributes: any): this;
    export(): {
        points: {
            x: any;
            y: any;
        }[];
    };
    _logWarnOnOpOnFrozen(op: any): void;
}
