import { MobileFactory } from './MobileFactory';
import { FigureOptions } from '../types';

export class MobileEllipse extends MobileFactory<FigureOptions> {
  constructor(data: FigureOptions, id: string) {
    super(data, id);
  }
  click(x: number, y: number) {
    const center = { x: this.dim.x + this.dim.width / 2, y: this.dim.y + this.dim.height / 2 };
    return (
      Math.pow(x - center.x, 2) / Math.pow(this.data.width / 2, 2) +
        Math.pow(y - center.y, 2) / Math.pow(this.data.height / 2, 2) <=
      1
    );
  }
}
