import { MobileFactory } from './MobileFactory';
import { FigureOptions } from '../types';

export class MobileCircle extends MobileFactory<FigureOptions> {
  constructor(data: FigureOptions, id: string) {
    super(data, id);
  }

  click(clickX: number, clickY: number) {
    const center = { x: this.dim.x + this.dim.width / 2, y: this.dim.y + this.dim.height / 2 };
    return (
      Math.pow(clickX - center.x, 2) + Math.pow(clickY - center.y, 2) <
      Math.pow(this.data.width / 2, 2)
    );
  }
}
