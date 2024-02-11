import { Editor } from './editor';
import { Handle } from './handle';
import { PolygonOptions, PolygonPoint } from './types/editor';
declare class Polygon {
    editorOwner: Editor;
    element: SVGPolygonElement;
    points: Array<PolygonPoint>;
    includeAttributes: string[];
    style: Record<string, any>;
    isSelected: boolean;
    isFrozen: boolean;
    constructor(editorOwner: Editor, points: PolygonPoint[]);
    freeze(freeze: boolean): this;
    updateElementPoints(): this;
    addPoint(x: number, y: number): this;
    moveLastPoint(x: number, y: number): this;
    move(deltaX: number, deltaY: number): this;
    isValid(): boolean;
    setHandlesVisibility(visible: boolean): this;
    scale(scale: number): this;
    setIsSelected(isSelected: boolean): this;
    getHandles(): (Handle | null | undefined)[];
    clearHandles(): void;
    setStyle(style: any): this;
    setDataAttributes(attributes: Record<string, string | number>): this;
    export(): PolygonOptions;
    private _logWarnOnOpOnFrozen;
}
export { Polygon };
