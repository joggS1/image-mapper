import { Dimensions, FigureOptions, PolygonOptions, PolygonPoint } from 'src/types';

const polyOptGuard = (data: any): data is PolygonOptions => 'points' in data;

export class MobileFactory<T extends PolygonOptions | FigureOptions> {
  id: string;
  data: T;
  dim: Dimensions = { x: 0, y: 0, width: 0, height: 0 };
  center: PolygonPoint = { x: 0, y: 0 };

  constructor(data: T, id: string) {
    this.id = id;
    this.data = data;
    if (polyOptGuard(data)) {
      const borderPoints = {
        t: data.points[0],
        l: data.points[0],
        r: data.points[0],
        b: data.points[0]
      };
      data.points.forEach((p) => {
        if (p.x < borderPoints.l.x) borderPoints.l = p;
        if (p.x > borderPoints.r.x) borderPoints.r = p;
        if (p.y < borderPoints.t.y) borderPoints.t = p;
        if (p.y > borderPoints.b.y) borderPoints.b = p;
      });
      this.dim = {
        x: borderPoints.l.x,
        y: borderPoints.t.y,
        width: borderPoints.r.x - borderPoints.l.x,
        height: borderPoints.b.y - borderPoints.t.y
      };
    } else
      this.dim = {
        x: data.x,
        y: data.y,
        width: data.width,
        height: data.height
      };
    this.center = {
      x: this.dim.x + this.dim.width / 2,
      y: this.dim.y + this.dim.height / 2
    };
  }
}
