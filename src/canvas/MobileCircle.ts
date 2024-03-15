import { MobileFactory } from './MobileFactory';
import { FigureOptions } from '../types';

export class MobileCircle extends MobileFactory<FigureOptions> {
  constructor(data: FigureOptions, id: string) {
    super(data, id);
  }

  click(clickX: number, clickY: number) {
    const center = { x: this.data.x + this.data.width / 2, y: this.data.y + this.data.height / 2 };
    return (
      Math.pow(clickX - center.x, 2) + Math.pow(clickY - center.y, 2) <
      Math.pow(this.data.width / 2, 2)
    );
  }
}
