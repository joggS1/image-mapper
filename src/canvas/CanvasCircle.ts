import { CanvasFactory } from './CanvasFactory';
import { CanvasViewer } from './CanvasViewer';
import { FigureOptions } from '../types';

export class CanvasCircle extends CanvasFactory<FigureOptions> {
  constructor(rootClass: CanvasViewer, data: FigureOptions, id: string) {
    super(rootClass, data, id);
  }

  draw() {
    const { x, y, width, height, fill } = this.data;
    const circle = new Path2D();
    circle.arc(x + width / 2, y + height / 2, width, 2 * Math.PI, 0, false);
    return super.draw(circle);
  }
}
