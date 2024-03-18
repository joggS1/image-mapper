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
  scale = 1;
  touchHandler: TouchHandler;
  componentsMap = new Map<MobileComponent['id'], MobileComponent>();
  width: number;
  height: number;
  zonesMap = new Map<number, Set<MobileComponent>>();
  clickHandler: MobileViewerOptions['clickHandler'];
  zonesCount = 4;

  constructor(
    imgEl: HTMLImageElement | string,
    options: MobileViewerOptions = {},
    splitToZonesCount: number = 4
  ) {
    const { width, height } = options;
    this.touchHandler = new TouchHandler();
    this.clickHandler = options.clickHandler;
    this.initZones(splitToZonesCount);
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
      this.img.width = width || 1200;
      this.img.height = height || 600;
    }
    this.width = width || 1200;
    this.height = height || 600;
    this.initEvents();
  }

  get TouchHandler() {
    return this.touchHandler;
  }

  on<T extends keyof DocumentEventMap>(eventTypes: T, handler: (e: DocumentEventMap[T]) => any) {
    addEventListeners(this.img, eventTypes, handler);
    return this;
  }

  async import(data: Schema, img: string) {
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
          this.componentsMap.set(rect.id, rect);
          this.zonesCount && this.setToZones(rect);
          this.componentsMap.set(c.id, rect);
          break;
        case 'circle':
          const circle = this.createCircle(c.data, c.id);
          this.componentsMap.set(circle.id, circle);
          this.zonesCount && this.setToZones(circle);
          this.componentsMap.set(c.id, circle);
          break;
        case 'ellipse':
          const ellipse = this.createEllipse(c.data, c.id);
          this.componentsMap.set(ellipse.id, ellipse);
          this.zonesCount && this.setToZones(ellipse);
          this.componentsMap.set(c.id, ellipse);
          break;
        case 'polygon':
          const polygon = this.createPolygon(c.data, c.id);
          this.componentsMap.set(polygon.id, polygon);
          this.zonesCount && this.setToZones(polygon);
          this.componentsMap.set(c.id, polygon);
          break;
      }
    });
    await editor
      .loadImage(img, this.img.width, this.img.height)
      .then(() => {
        editor.import(data);
        const SVG = editor.exportAsString();
        this.img.src = 'data:image/svg+xml;base64,' + SVG;
      })
      .catch(console.error);
  }

  selectComponent(id: MobileComponent['id']) {
    return this.componentsMap.get(id);
  }

  setScale(scale: number) {
    this.scale = +scale.toFixed(2);
  }

  getClickedComponent(clientX: number, clientY: number) {
    clientX = clientX / this.scale;
    clientY = clientY / this.scale;
    const rect = this.img.getBoundingClientRect();
    const clickX = clientX - rect.left / this.scale;
    const clickY = clientY - rect.top / this.scale;

    const zoneId = this.getZone(clickX, clickY);
    const zoneFigures = this.zonesMap.get(zoneId);
    if (zoneFigures)
      for (const c of zoneFigures) {
        if (c.click(clickX, clickY)) {
          return c;
        }
      }
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
    this.zonesCount = Math.ceil(Math.sqrt(Math.max(count, 1)));
    for (let i = 0; i < Math.pow(this.zonesCount, 2); i++) {
      this.zonesMap.set(i, new Set());
    }
  }

  private getZone = (x: number, y: number) => {
    const cutX = this.width / this.zonesCount;
    const cutY = this.height / this.zonesCount;
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

  private initEvents() {
    if (!this.clickHandler) return;
    addEventListeners(this.img, 'pointerdown', (e) => {
      this.touchHandler.onTouchStart(e.clientX, e.clientY);
    });
    addEventListeners(this.img, 'pointerup', (e) => {
      this.touchHandler.onTouchEnd(e.clientX, e.clientY);
      if (this.touchHandler.isClicked()) {
        const component = this.getClickedComponent(e.clientX, e.clientY);
        if (component) this.clickHandler?.(e, component);
      }
    });
  }
}
