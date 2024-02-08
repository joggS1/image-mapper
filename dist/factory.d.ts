import { Editor } from './editor';
import { Handle } from './handle';
import { Dimensions, FigureOptions, PropChangeListener, SVGTagNames } from './types/editor';
export declare class CornerShapedElement {
    editorOwner: Editor | null;
    svgElementName: SVGTagNames;
    private includeAttributes;
    element: SVGRectElement | SVGCircleElement | SVGPolygonElement | SVGEllipseElement | SVGElement;
    dim: Dimensions;
    handles: Handle[];
    style: Record<string, any>;
    isSelected: boolean;
    private propChangeListener;
    isFrozen: boolean;
    constructor(svgElementName: SVGTagNames, propChangeListener: PropChangeListener);
    add(editorOwner: Editor, x: number, y: number, width?: number, height?: number): void;
    freeze(freeze: boolean): this;
    resize(x: number, y: number): this;
    move(deltaX: number, deltaY: number): this;
    isValid(): number;
    setHandlesVisibility(visible: boolean): this;
    setIsSelected(isSelected: boolean): this;
    getHandles(): Handle[];
    clearHandles(): void;
    setStyle(style: any): this;
    setDataAttributes(attributes: Record<string, string | number>): this;
    export(): FigureOptions;
    private _logWarnOnOpOnFrozen;
}
