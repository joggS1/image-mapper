import { doc } from '../globals';
import { deCamelCase } from '../utils';
import { FigureOptions, PolygonOptions } from '../types';
import { getDefaultStyle } from '../style';
import { CanvasRectangle } from './CanvasRectangle';
import { CanvasCircle } from './CanvasCircle';
import { CanvasEllipse } from './CanvasEllipse';
import { CanvasPolygon } from './CanvasPolygon';
import { addEventListeners } from '../events';

export class CanvasViewer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  scale: number = 1;
  style = getDefaultStyle();
  alpha = 0.15;

  constructor(canvasEl: HTMLCanvasElement | string, options: any = {}) {
    const { width, height } = options;
    if (typeof canvasEl === 'string') {
      this.canvas = doc.getElementById(canvasEl) as unknown as HTMLCanvasElement;
      if (!this.canvas) {
        this.canvas = doc.createElement('canvas');
        window.addEventListener(
          'load',
          () => {
            doc.body.appendChild(this.canvas);
          },
          { once: true }
        );
      }
    } else {
      this.canvas = canvasEl as unknown as HTMLCanvasElement;
    }
    this.canvas.width = width || 600;
    this.canvas.height = height || 600;
    this.ctx = this.canvas.getContext('2d')!;
    this.ctx.globalAlpha = 0.5;
    this.ctx.fillStyle = this.style.component.fill!;
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = this.style.component.stroke!;
    this.canvas.onclick = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
    };
  }
  on<T extends keyof DocumentEventMap>(eventTypes: T, handler: (e: DocumentEventMap[T]) => any) {
    addEventListeners(this.canvas, eventTypes, handler);
    return this;
  }
  setScale(scale: number) {
    this.scale = scale;
    this.canvas.style.transform = `scale(${scale})`;
  }
  loadImage(imgURL: string, width: number, height: number) {
    this.canvas.style.background = `url(${imgURL}) no-repeat`;
    this.canvas.style.backgroundSize = `${width * this.scale}px ${height * this.scale}px`;
  }
  public import(data: any, idInterceptor?: (id: string) => string) {
    const jsData = typeof data === 'string' ? JSON.parse(data) : data;

    return jsData.components
      .map((c: any) => {
        const id = idInterceptor ? idInterceptor(c.id) : c.id;
        const data: any = {};
        for (let key in c.data) {
          data[deCamelCase(key)] = c.data[key];
        }
        switch (c.type) {
          case 'rect':
            return this.createRectangle(data, id);
          case 'circle':
            return this.createCircle(data, id);
          case 'ellipse':
            return this.createEllipse(data, id);
          case 'polygon':
            return this.createPolygon(data, id);
          default:
            console.error('Unknown type', c.type);
            return null;
        }
      })
      .filter((c: any) => {
        return !!c;
      });
  }

  public createRectangle(dim: FigureOptions, id: string) {
    new CanvasRectangle(this, dim, id).draw();
  }

  public createCircle(dim: FigureOptions, id: string) {
    new CanvasCircle(this, dim, id).draw();
  }

  public createEllipse(dim: FigureOptions, id: string) {
    new CanvasEllipse(this, dim, id).draw();
  }

  public createPolygon(data: PolygonOptions, id: string) {
    new CanvasPolygon(this, data, id).draw();
  }
}
