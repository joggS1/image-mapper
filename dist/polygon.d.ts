import { Editor } from './editor';
import { Handle } from './handle';
import { PolygonOptions, PolygonPoints } from './types/editor';
type Point = {
    x: number;
    y: number;
    handle?: Handle | null;
};
declare class Polygon {
    editorOwner: Editor;
    element: SVGPolygonElement;
    points: Array<Point>;
    includeAttributes: string[];
    style: Record<string, any>;
    isSelected: boolean;
    isFrozen: boolean;
    constructor(editorOwner: Editor, points: PolygonPoints);
    freeze(freeze: boolean): this;
    updateElementPoints(): this;
    addPoint(x: number, y: number): this;
    moveLastPoint(x: number, y: number): this;
    move(deltaX: number, deltaY: number): this;
    isValid(): boolean;
    setHandlesVisibility(visible: boolean): this;
    setIsSelected(isSelected: boolean): this;
    getHandles(): (Handle | null | undefined)[];
    clearHandles(): void;
    setStyle(style: any): this;
    setDataAttributes(attributes: Record<string, string | number>): this;
    export(): PolygonOptions;
    private _logWarnOnOpOnFrozen;
}
export { Polygon };
