import { CanvasFactory } from './CanvasFactory';
import { CanvasViewer } from './CanvasViewer';
import { Component, Dimensions, FigureOptions, PolygonOptions, SVGTagNames } from '../types';

export class CanvasPolygon extends CanvasFactory<PolygonOptions> {
  constructor(rootClass: CanvasViewer, data: PolygonOptions, id: string) {
    super(rootClass, data, id);
  }

  draw() {
    const { points } = this.data;
    const poly = new Path2D();
    poly.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      poly.lineTo(points[i].x, points[i].y);
    }
    poly.closePath();
    return super.draw(poly);
  }
}
