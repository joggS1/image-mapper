import { CornerShapedElement } from "./factory";
declare class Ellipse extends CornerShapedElement {
    element: SVGEllipseElement;
    constructor(editorOwner: any, x: number, y: number, width?: number, height?: number);
}
export { Ellipse };
