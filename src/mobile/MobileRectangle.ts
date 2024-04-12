import { MobileFactory } from './MobileFactory';
import { FigureOptions } from '../types';

export class MobileRectangle extends MobileFactory<FigureOptions> {
  constructor(data: FigureOptions, id: string) {
    super(data, id);
  }

  click(clickX: number, clickY: number) {
    return (
      clickX >= this.dim.x &&
      clickX <= this.dim.x + this.dim.width &&
      clickY >= this.dim.y &&
      clickY <= this.dim.y + this.dim.height
    );
  }
}
