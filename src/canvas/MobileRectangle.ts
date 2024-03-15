import { MobileFactory } from './MobileFactory';
import { FigureOptions } from '../types';

export class MobileRectangle extends MobileFactory<FigureOptions> {
  constructor(data: FigureOptions, id: string) {
    super(data, id);
  }

  click(clickX: number, clickY: number) {
    return (
      clickX >= this.data.x &&
      clickX <= this.data.x + this.data.width &&
      clickY >= this.data.y &&
      clickY <= this.data.y + this.data.height
    );
  }
}
