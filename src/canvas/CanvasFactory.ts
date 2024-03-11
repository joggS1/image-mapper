import { CanvasViewer } from './CanvasViewer';

export class CanvasFactory<T> {
  id: string;
  rootClass: CanvasViewer;
  data: T;
  ctx: CanvasRenderingContext2D;

  constructor(rootClass: CanvasViewer, data: T, id: string) {
    this.rootClass = rootClass;
    this.ctx = rootClass.ctx;
    this.id = id;
    this.data = data;
  }
  draw(figure: Path2D) {
    //@ts-ignore
    const { fill, stroke } = this.data;
    fill && (this.ctx.fillStyle = fill);
    stroke && (this.ctx.strokeStyle = stroke);
    this.ctx.globalAlpha = this.rootClass.alpha;
    this.ctx.fill(figure);
    this.ctx.stroke(figure);
    return this;
  }
}
