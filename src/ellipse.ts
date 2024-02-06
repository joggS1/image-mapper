import { CornerShapedElement } from "./factory";


class Ellipse extends CornerShapedElement {
  element: SVGEllipseElement;
  constructor(editorOwner: any, x: number, y: number, width?: number, height?: number) {
    super('ellipse', {
      x:  (x, prevX, dim) => {
        this.element.setAttribute('cx', String(x + dim.width / 2));
      },
      // move
      y: (y, prevY, dim ) => {
        this.element.setAttribute('cy', String(y + dim.height / 2));
      },
      // resize
      width:  (width, prevWidth, dim) => {
        this.element.setAttribute('rx', String(Math.abs(width) / 2));
        this.element.setAttribute('cx', String(dim.x + width / 2));
      },
      // resize
      height:  (height, prevHeight, dim) => {
        this.element.setAttribute('ry', String(Math.abs(height) / 2));
        this.element.setAttribute('cy', String(dim.y + height / 2));
      },
    })
    this.add(editorOwner, x, y, width, height);
  }

}

export { Ellipse };
