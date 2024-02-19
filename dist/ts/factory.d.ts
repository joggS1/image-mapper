import { Editor } from './editor';
import { Handle } from './handle';
import { Dimensions, FigureOptions, PropChangeListener, Style, SVGTagNames } from './types';
export declare class CornerShapedElement {
    editorOwner: Editor | null;
    svgElementName: SVGTagNames;
    private includeAttributes;
    element: SVGRectElement | SVGCircleElement | SVGEllipseElement | SVGElement;
    dim: Dimensions;
    handles: Handle[];
    style?: Style;
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
    getCenterCoords(): {
        x: number;
        y: number;
    };
    clearHandles(): void;
    scale(scale: number): this;
    setStyle(style: Style): this;
    setDataAttributes(attributes: Record<string, string | number>): this;
    export(): FigureOptions;
    private _logWarnOnOpOnFrozen;
}
