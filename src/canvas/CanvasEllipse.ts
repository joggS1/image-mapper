import { CanvasFactory } from './CanvasFactory';
import { CanvasViewer } from './CanvasViewer';
import { Component, Dimensions, FigureOptions, PolygonOptions, SVGTagNames } from '../types';

export class CanvasEllipse extends CanvasFactory<FigureOptions> {
  constructor(rootClass: CanvasViewer, data: FigureOptions, id: string) {
    super(rootClass, data, id);
  }

  draw() {
    const { x, y, width, height, fill } = this.data;
    const ellipse = new Path2D();
    ellipse.ellipse(x + width / 2, y + height / 2, width, height, 0, 0, Math.PI * 2, false);
    return super.draw(ellipse);
  }
}
