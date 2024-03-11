import { CanvasFactory } from './CanvasFactory';
import { CanvasViewer } from './CanvasViewer';
import { FigureOptions, SVGTagNames } from '../types';

export class CanvasRectangle extends CanvasFactory<FigureOptions> {
  constructor(rootClass: CanvasViewer, data: FigureOptions, id: string) {
    super(rootClass, data, id);
  }

  draw() {
    const { x, y, width, height, fill } = this.data;
    fill && (this.ctx.fillStyle = fill);
    const rect = new Path2D();
    rect.rect(x, y, width, height);
    return super.draw(rect);
  }
}
