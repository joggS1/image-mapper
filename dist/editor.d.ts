import { createFSMService } from './fsm';
import { Handle } from './handle';
import { Component, EditorOptions, FigureOptions, PolygonOptions } from './types';
export declare class Editor {
  width: number;
  height: number;
  svg: SVGSVGElement;
  style: object;
  fsmService: ReturnType<typeof createFSMService>;
  componentDrawnHandler: EditorOptions['componentDrawnHandler'];
  selectModeHandler: EditorOptions['selectModeHandler'];
  viewClickHandler: EditorOptions['viewClickHandler'];
  cgroup: SVGGElement;
  hgroup: SVGGElement;
  _cacheElementMapping: Record<string, Component>;
  _idCounter: number;
  _handleIdCounter: number;
  constructor(svgEl: SVGSVGElement | string, options?: EditorOptions, style?: {});
  loadImage(path: string, width: number | string, height: number | string): this;
  setStyle(style: object): this;
  rect(): void;
  polygon(): void;
  circle(): void;
  ellipse(): void;
  selectMode(): void;
  selectComponent(component: Component | string): Component;
  removeComponent(component: string | any): SVGAElement | undefined;
  on(eventTypes: Array<Event['type']>, handler: (e: Event) => {}): this;
  off(eventTypes: Array<Event['type']>, handler: (e: Event) => {}): this;
  getComponentById(id: string): Component;
  import(data: string, idInterceptor: (id: string) => string): any;
  export(escape?: boolean): string;
  createRectangle(dim: FigureOptions, id: string): any;
  createCircle(dim: FigureOptions, id: string): any;
  createEllipse(dim: FigureOptions, id: string): any;
  createPolygon(data: PolygonOptions, id: string): any;
  registerComponent(component: any, id?: string): any;
  registerComponentHandle(handle: Handle): any;
  unregisterComponent(component: any): void;
}
declare const _default: (
  isView?: boolean
) => (svgEl: SVGSVGElement | string, options?: EditorOptions, style?: {}) => Editor;
export default _default;
