import { doc } from '../globals';
import { FigureOptions, PolygonOptions } from '../types';
import { getDefaultStyle } from '../style';
import { CanvasRectangle } from './CanvasRectangle';
import { CanvasCircle } from './CanvasCircle';
import { CanvasEllipse } from './CanvasEllipse';
import { CanvasPolygon } from './CanvasPolygon';
import { addEventListeners } from '../events';
import { Editor } from '../editor';

export class CanvasViewer {
  // canvas: HTMLCanvasElement;
  // ctx: CanvasRenderingContext2D;
  img: HTMLImageElement;
  scale: number = 1;
  style = getDefaultStyle();
  background = '';
  // w: number;
  // h: number;
  alpha = 1;

  constructor(
    canvasEl: HTMLCanvasElement | string,
    data: any,
    background: string,
    options: any = {}
  ) {
    const { width, height } = options;
    console.log(data);
    this.img = new Image();
    this.img.width = width || 1200;
    this.img.height = height || 600;
    let editor = new Editor('builder', {
      isBuilderMode: true,
      width: this.img.width,
      height: this.img.width
    });
    editor.loadImage(background, this.img.width, this.img.height);
    editor.import(data);
    const SVG = editor.exportAsString();
    this.background = 'data:image/svg+xml;base64,' + SVG;
    this.img.src = 'test.svg';

    window.addEventListener(
      'load',
      () => {
        doc.body.appendChild(this.img);
      },
      { once: true }
    );
  }
  on<T extends keyof DocumentEventMap>(eventTypes: T, handler: (e: DocumentEventMap[T]) => any) {
    addEventListeners(this.img, eventTypes, handler);
    return this;
  }
  setScale(scale: number) {
    this.scale = scale;
    this.img.style.transform = `scale(${scale * 100}%, ${scale * 100}%)`;

    // this.loadImage(this.background, this.w * 2 * this.scale, this.h * 2 * this.scale)

    this;
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
