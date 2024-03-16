import { MobileFactory } from './MobileFactory';
import { PolygonOptions } from '../types';

export class MobilePolygon extends MobileFactory<PolygonOptions> {
  constructor(data: PolygonOptions, id: string) {
    super(data, id);
  }
  click(clickX: number, clickY: number) {
    let windingCount = 0; // Счётчик числа оборотов

    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    const count = this.data.points.length;

    for (let i = 1; i <= count; i++) {
      startX = this.data.points[i - 1].x;
      startY = this.data.points[i - 1].y;

      if (i == count) {
        endX = this.data.points[0].x;
        endY = this.data.points[0].y;
      } else {
        endX = this.data.points[i].x;
        endY = this.data.points[i].y;
      }

      if (startY <= clickY) {
        if (endY > clickY) {
          // Восходящая грань
          if (this.isLeft(startX, startY, endX, endY, clickX, clickY) > 0) {
            // Точка P слева от грани многоугольника
            ++windingCount;
          }
        }
      } else {
        if (endY <= clickY) {
          // Нисходящая грань
          if (this.isLeft(startX, startY, endX, endY, clickX, clickY) < 0) {
            // Точка P справа от грани
            --windingCount;
          }
        }
      }
    }

    return windingCount != 0;
  }
  // start* и end* - координаты точек, представляющих грань. point* - координаты точки P, которую проверяем
  private isLeft(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    clickX: number,
    clickY: number
  ) {
    return (endX - startX) * (clickY - startY) - (clickX - startX) * (endY - startY);
  }
}
