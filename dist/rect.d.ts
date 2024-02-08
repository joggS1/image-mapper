import { Editor } from './editor';
import { CornerShapedElement } from './factory';
declare class Rectangle extends CornerShapedElement {
  constructor(editorOwner: Editor, x: number, y: number, width?: number, height?: number);
}
export { Rectangle };
