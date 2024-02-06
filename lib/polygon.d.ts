import { PolygonOptions, PolygonPoints } from './types/editor';
declare class Polygon {
    editorOwner: any;
    element: SVGPolygonElement;
    points: PolygonPoints;
    includeAttributes: string[];
    style: Record<string, any>;
    isSelected: boolean;
    isFrozen: boolean;
    constructor(editorOwner: any, points: PolygonPoints);
    freeze(freeze: boolean): this;
    updateElementPoints(): this;
    addPoint(x: number, y: number): this;
    moveLastPoint(x: number, y: number): this;
    move(deltaX: number, deltaY: number): this;
    isValid(): boolean;
    setHandlesVisibility(visible: boolean): this;
    setIsSelected(isSelected: boolean): this;
    getHandles(): any[];
    setStyle(style: any): this;
    setDataAttributes(attributes: Record<string, string | number>): this;
    export(): PolygonOptions;
    private _logWarnOnOpOnFrozen;
}
export { Polygon };
