import { Editor } from './editor';
import { CornerShapedElement } from './factory';
import { Dimensions } from './types';
class Circle extends CornerShapedElement {
  constructor(editorOwner: Editor, x: number, y: number, width?: number, height?: number) {
    super('circle', {
      // move
      x: (x: number, prevX: number, dim: Dimensions) => {
        this?.element?.setAttribute('cx', String(x + dim.width / 2));
      },
      // move
      y: (y: number, prevY: number, dim: Dimensions) => {
        this?.element?.setAttribute('cy', String(y + dim.height / 2));
      },
      // resize
      width: (width: number, prevWidth: number, dim: Dimensions) => {
        this?.element?.setAttribute(
          'r',
          String(Math.min(Math.abs(width), Math.abs(dim.height)) / 2)
        );
        this?.element?.setAttribute('cx', String(dim.x + width / 2));
      },
      // resize
      height: (height: number, prevHeight: number, dim: Dimensions) => {
        this?.element?.setAttribute(
          'r',
          String(Math.min(Math.abs(height), Math.abs(dim.width)) / 2)
        );
        this?.element?.setAttribute('cy', String(dim.y + height / 2));
      }
    });
    this.add(editorOwner, x, y, width, height);
  }
}

export { Circle };
