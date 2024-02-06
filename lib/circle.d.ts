import { CornerShapedElement } from './factory';
declare class Circle extends CornerShapedElement {
    element: SVGCircleElement;
    constructor(editorOwner: any, x: number, y: number, width?: number, height?: number);
}
export { Circle };
