import { doc } from '../globals';
import { Schema } from '../types';
import { MobileRectangle } from './MobileRectangle';
import { MobileCircle } from './MobileCircle';
import { MobileEllipse } from './MobileEllipse';
import { MobilePolygon } from './MobilePolygon';
import { addEventListeners } from '../events';
import { Editor } from '../editor';
import { MobileComponent, MobileViewerOptions } from './types';
import { TouchHandler } from './TouchHandler';

export class MobileViewer {
  img: HTMLImageElement;
  scale: number = 1;
  background = '';
  alpha = 1;
  componentsMap = new Map();
  zonesMap = new Map<number, Set<MobileComponent>>();
  clickHandler: MobileViewerOptions['clickHandler'];
  zonesCount = 4;

  constructor(
    imgEl: HTMLImageElement | string,
    options: MobileViewerOptions = {},
    backgroundURL: string = '',
    splitToZonesCount?: number
  ) {
    const { width, height } = options;
    this.clickHandler = options.clickHandler;
    this.background = backgroundURL;
    splitToZonesCount && this.initZones(splitToZonesCount);
    if (typeof imgEl === 'string') {
      this.img = new Image();
      this.img.id = imgEl;
      this.img.width = width || 1200;
      this.img.height = height || 600;
      window.addEventListener(
        'load',
        () => {
          doc.body.appendChild(this.img);
        },
        { once: true }
      );
    } else {
      this.img = imgEl;
    }
    this.initEventListeners();
  }
  on<T extends keyof DocumentEventMap>(eventTypes: T, handler: (e: DocumentEventMap[T]) => any) {
    addEventListeners(this.img, eventTypes, handler);
    return this;
  }
  setScale(scale: number) {
    this.scale = scale;
    this.img.style.transform = `scale(${scale * 100})`;
    this;
  }

  loadImage(url: string) {
    this.background = url;
  }

  async import(data: Schema) {
    if (!this.background) throw new Error('Background is not set');
    let editor = new Editor('builder', {
      isBuilderMode: true,
      width: this.img.width,
      height: this.img.height
    });
    data.components.forEach((c) => {
      if (c.type === 'polygon') {
        c.data;
      }

      switch (c.type) {
        case 'rect':
          const rect = this.createRectangle(c.data, c.id);
          this.zonesCount && this.setToZones(rect);
          this.componentsMap.set(c.id, rect);
          break;
        case 'circle':
          const circle = this.createCircle(c.data, c.id);
          this.zonesCount && this.setToZones(circle);
          this.componentsMap.set(c.id, circle);
          break;
        case 'ellipse':
          const ellipse = this.createEllipse(c.data, c.id);
          this.zonesCount && this.setToZones(ellipse);
          this.componentsMap.set(c.id, ellipse);
          break;
        case 'polygon':
          const polygon = this.createPolygon(c.data, c.id);
          this.zonesCount && this.setToZones(polygon);
          this.componentsMap.set(c.id, polygon);
          break;
      }
    });
    await editor.loadImage(this.background, this.img.width, this.img.height).then(() => {
      editor.import(data);
      const SVG = editor.exportAsString();
      this.background = 'data:image/svg+xml;base64,' + SVG;
      this.img.src = this.background;
    });
  }

  private createRectangle(data: any, id: string) {
    return new MobileRectangle(data, id);
  }

  private createCircle(data: any, id: string) {
    return new MobileCircle(data, id);
  }

  private createEllipse(data: any, id: string) {
    return new MobileEllipse(data, id);
  }

  private createPolygon(data: any, id: string) {
    return new MobilePolygon(data, id);
  }
  private initZones(count: number) {
    this.zonesCount = Math.ceil(Math.sqrt(count));
    for (let i = 0; i < Math.pow(this.zonesCount, 2); i++) {
      this.zonesMap.set(i, new Set());
    }
  }

  private getZone = (x: number, y: number) => {
    const cutX = this.img.width / this.zonesCount;
    const cutY = this.img.height / this.zonesCount;
    const x_zone = Math.ceil(x / cutX);
    const y_zone = Math.ceil(y / cutY);
    return x_zone + (y_zone - 1) * this.zonesCount - 1;
  };
  private setToZones(component: MobileComponent) {
    let tl, tr, br, bl;

    const { x, y, width, height } = component.dim;
    tl = { x, y };
    tr = { x: x + width, y };
    br = { x: x + width, y: y + height };
    bl = { x, y: y + height };

    [tl, tr, br, bl].forEach((p) => {
      const zoneId = this.getZone(p.x, p.y);
      const zone = this.zonesMap.get(zoneId);
      zone?.add(component);
    });
  }
  private initEventListeners() {
    if (!this.clickHandler) return;
    const touchHandler = new TouchHandler();
    this.img.ontouchstart = (e) => {
      e.preventDefault();
      e.stopPropagation();
      touchHandler.onTouchStart(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    };
    this.img.ontouchend = (e) => {
      console.log(touchHandler.isDoubleClicked());
      touchHandler.onTouchEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      if (touchHandler.isClicked()) {
        const clickX = e.changedTouches[0].clientX - this.img.offsetLeft;
        const clickY = e.changedTouches[0].clientY - this.img.offsetTop;
        const zoneId = this.getZone(clickX, clickY);
        const zoneFigures = this.zonesMap.get(zoneId);
        zoneFigures?.forEach((c) => {
          if (c.click(clickX, clickY)) {
            this.clickHandler?.(e, c.id, c.center);
          }
        });
      }
    };
  }
}
