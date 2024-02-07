import { CornerShapedElement } from "./factory";

class Rectangle extends CornerShapedElement {
  constructor(editorOwner: any, x: number, y: number, width?: number, height?: number) {
    super('rect', {
      x:  (x, prevX, dim) => {
        this.element.setAttribute('x', String(dim.width < 0 ? x + dim.width : x));
      },
      // move
      y: (y, prevY, dim ) => {
        this.element.setAttribute('y', String(dim.height < 0 ? y + dim.height : y));
      },
      // resize
      width:  (width, prevWidth, dim) => {
        this.element.setAttribute('width', String(Math.abs(width)));
        this.element.setAttribute('x', String(width < 0 ? dim.x + width : dim.x));
      },
      // resize
      height:  (height, prevHeight, dim) => {
        this.element.setAttribute('height', String(Math.abs(height)));
        this.element.setAttribute('y', String(height < 0 ? dim.y + height : dim.y));
      },
    })
    this.add(editorOwner, x, y, width, height);
  }
}

export { Rectangle };
