import { CornerShapedElement } from "./factory";
declare class Rectangle extends CornerShapedElement {
    element: SVGRectElement;
    constructor(editorOwner: any, x: number, y: number, width?: number, height?: number);
}
export { Rectangle };
