import { doc, root } from './globals';
import { createFSMService } from './fsm';
import { addEventListeners, removeEventListeners } from './events';
import { onChange } from './onChangeProxy';
import { Polygon } from './polygon';
import { Rectangle } from './rect';
import { Circle } from './circle';
import { Ellipse } from './ellipse';
import { Handle } from './handle';
import { getDefaultStyle } from './style';
import {
  Component,
  EditorMode,
  EditorOptions,
  FigureOptions,
  MouseButtons,
  PolygonOptions,
  Style
} from './types';
import { SVG_NS, XLINK_NS } from './constants';
import { deCamelCase } from './utils';

export class Editor {
  width: number;
  height: number;
  //@ts-ignore
  svg: SVGSVGElement;
  style: Style;
  fsmService: ReturnType<typeof createFSMService>;
  componentDrawnHandler: EditorOptions['componentDrawnHandler'];
  selectModeHandler: EditorOptions['selectModeHandler'];
  clickHandler: EditorOptions['clickHandler'];
  selectHandler: EditorOptions['selectHandler'];
  image?: SVGImageElement;
  mode?: EditorMode;
  /** components */
  cgroup: SVGGElement;
  /** handles */
  hgroup: SVGGElement;
  _cacheElementMapping: Record<string, Component>;
  deleteHandler?: EditorOptions['deleteHandler'];
  idGenerator: EditorOptions['idGenerator'];
  public scale = 1;
  private imageSizes = {
    width: 0,
    height: 0
  };
  _idCounter: number;
  _handleIdCounter: number;
  mouseButtons: MouseButtons[] = [MouseButtons.LMB, MouseButtons.MMB, MouseButtons.RMB];

  constructor(svgEl: SVGSVGElement | string, options: EditorOptions = {}, style?: Style) {
    [
      this.width = 1200,
      this.height = 600,
      this.componentDrawnHandler,
      this.selectModeHandler,
      this.clickHandler,
      this.selectHandler,
      this.idGenerator,
      this.deleteHandler
    ] = [
      options.width,
      options.height,
      options.componentDrawnHandler, // applies to Editor only
      options.selectModeHandler, // applies to Editor only
      options.clickHandler, // applies to View only
      options.selectHandler,
      options.idGenerator,
      options.deleteHandler
    ];
    options.mouseButtons && (this.mouseButtons = options.mouseButtons);

    this.style = deepMerge(getDefaultStyle(), style);

    this.fsmService = createFSMService(this).start();
    this.svg = svgEl as unknown as SVGSVGElement;

    if (typeof svgEl === 'string') {
      this.svg = doc.getElementById(svgEl) as unknown as SVGSVGElement;
      if (!this.svg) {
        this.svg = doc.createElementNS(SVG_NS, 'svg');
        this.svg.setAttribute('version', '1.1');
        this.svg.setAttribute('id', svgEl);
        // this.svg.setAttribute("shape-rendering", "crispEdges");

        this.svg.setAttribute('width', this.width + 'px');
        this.svg.setAttribute('height', this.height + 'px');
        this.svg.setAttribute('viewBox', `0, 0, ${this.width} ${this.height}`);
        this.svg.setAttribute('preserveAspectRatio', 'xMinYMin');

        const svg = this.svg;
        window.addEventListener(
          'load',
          function load() {
            doc.body.appendChild(svg);
          },
          { once: true }
        );
      }
    } else if (svgEl && svgEl.tagName === 'svg') {
      this.svg = svgEl;
    }

    if (!this.svg) throw new Error('No SVG element provided');

    this.cgroup = doc.createElementNS(SVG_NS, 'g');
    this.hgroup = doc.createElementNS(SVG_NS, 'g');
    this.svg.appendChild(this.cgroup);
    this.svg.appendChild(this.hgroup);

    //@ts-ignore
    this._cacheElementMapping = onChange(
      {},
      (prop: any, newComponent: Component, prevComponent: Component) => {
        if (newComponent) {
          if (newComponent instanceof Handle) {
            //@ts-ignore
            this.hgroup.appendChild(newComponent.element!);
          } else {
            this.cgroup.appendChild(newComponent.element);
          }
        } else {
          if (prevComponent instanceof Handle) {
            //@ts-ignore
            this.hgroup.removeChild(prevComponent.element);
          } else if (prevComponent) {
            this.cgroup.removeChild(prevComponent.element);
            prevComponent.getHandles().forEach((h: any) => {
              this.unregisterComponent(h);
            });
          }
        }
      }
    );
    this._idCounter = 1;
    this._handleIdCounter = 1;
  }

  public loadImage(path: string, width: number, height: number) {
    this.image = doc.createElementNS(SVG_NS, 'image');
    this.image.setAttributeNS(XLINK_NS, 'href', path);
    this.imageSizes.width = width;
    this.imageSizes.height = height;
    width && this.image.setAttribute('width', String(width));
    height && this.image.setAttribute('height', String(height));

    this.svg?.prepend(this.image);
    return this;
  }

  public setStyle(style: object) {
    this.style = deepMerge(this.style, style);
    return this;
  }

  public setScale(scale: number) {
    const newScale = scale / this.scale;
    for (const key in this._cacheElementMapping) {
      this._cacheElementMapping[key]?.scale?.(newScale);
    }
    if (this.image && this.image.getAttribute('width') && this.image.getAttribute('height')) {
      const { width, height } = this.imageSizes;
      width && this.image.setAttribute('width', String(width * scale));
      height && this.image.setAttribute('height', String(height * scale));
    }
    this.scale = scale;
  }

  public rect() {
    this.mode = 'rect';
    this.fsmService.send('MODE_DRAW_RECT');
  }

  public polygon() {
    this.mode = 'polygon';
    this.fsmService.send('MODE_DRAW_POLYGON');
  }

  public circle() {
    this.mode = 'circle';
    this.fsmService.send('MODE_DRAW_CIRCLE');
  }

  public ellipse() {
    this.mode = 'ellipse';
    this.fsmService.send('MODE_DRAW_ELLIPSE');
  }

  public selectMode() {
    this.mode = 'select';
    this.fsmService.send('MODE_SELECT');
  }

  public selectComponent(component: Component | string) {
    let _component: Component;
    if (typeof component === 'string') {
      _component = this.getComponentById(component);
    } else {
      _component = component;
    }

    // When component is defined, we require a component which supports setIsSelected() (handles do not).
    //@ts-ignore
    if (!_component || _component.setIsSelected) {
      Object.values(this._cacheElementMapping).forEach((c) => {
        if (c === component) {
          this.selectHandler?.(c.element.id, c);
          c.setIsSelected && c.setIsSelected(true);
        }
        if (c !== component && !c.isFrozen) {
          if (c.setIsSelected) {
            c.setIsSelected(false);
            c.getHandles().forEach((handle: any) => {
              this.unregisterComponent(handle);
            });
            c.clearHandles();
          }
        }
      });
    }
    return _component;
  }

  public removeComponent(component: string | any) {
    if (typeof component === 'string') {
      component = this.getComponentById(component);
    }
    this.unregisterComponent(component);
    return component as SVGAElement | undefined;
  }

  public on(eventTypes: string, handler: (e: Event) => any) {
    addEventListeners(this.svg, eventTypes, handler);
    return this;
  }

  public off(eventTypes: string, handler: (e: Event) => {}) {
    removeEventListeners(this.svg, eventTypes, handler);
    return this;
  }

  public getComponentById(id: string) {
    return this._cacheElementMapping && this._cacheElementMapping[id];
  }

  public import(data: any, idInterceptor?: (id: string) => string) {
    const jsData = typeof data === 'string' ? JSON.parse(data) : data;
    this._idCounter = jsData.idCounter;

    return jsData.components
      .map((c: any) => {
        const id = idInterceptor ? idInterceptor(c.id) : c.id;
        const data: any = {};
        for (let key in c.data) {
          data[deCamelCase(key)] = c.data[key];
        }
        c.data?.entries?.().map(([key, value]: [string, any]) => ({ [deCamelCase(key)]: value }));
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
      .filter((c: Component) => {
        c?.clearHandles?.();
        return !!c;
      });
  }

  public export(escape?: boolean) {
    const data = {
      idCounter: this._idCounter,
      components: Object.entries(this._cacheElementMapping)
        .filter(([id, component]) => !(component instanceof Handle))
        .map(([id, component]) => ({
          id,
          type: component.element.tagName,
          data: component.export()
        }))
    };

    return data;
  }

  public createRectangle(dim: FigureOptions, id: string) {
    const { x, y, width, height, ...attributes } = dim;
    return this.registerComponent(
      new Rectangle(this, x, y, width, height).setStyle(this.style).setDataAttributes(attributes),
      id
    );
  }

  public createCircle(dim: FigureOptions, id: string) {
    const { x, y, width, height, ...attributes } = dim;
    return this.registerComponent(
      new Circle(this, x, y, width, height).setStyle(this.style).setDataAttributes(attributes),
      id
    );
  }

  public createEllipse(dim: FigureOptions, id: string) {
    const { x, y, width, height, ...attributes } = dim;
    return this.registerComponent(
      new Ellipse(this, x, y, width, height).setStyle(this.style).setDataAttributes(attributes),
      id
    );
  }

  public createPolygon(data: PolygonOptions, id: string) {
    const { points, ...attributes } = data;
    return this.registerComponent(
      new Polygon(this, points).setStyle(this.style).setDataAttributes(attributes),
      id
    );
  }

  public registerComponent(component: Component, id?: string) {
    if (component instanceof Handle) {
      id = 'handle_' + this._handleIdCounter++;
    } else {
      id = id || this.idGenerator?.() || component.element.tagName + '_' + this._idCounter++;
    }
    this._cacheElementMapping[id] = component;
    component.element.id = id;
    return component;
  }

  public registerComponentHandle(handle: Handle) {
    //@ts-ignore
    return this.registerComponent(handle.setStyle(this.style.handle, this.style.handleHover));
  }

  public unregisterComponent(component: string | Component) {
    component = typeof component === 'string' ? this.selectComponent(component) : component;
    if (!component) return;
    !(component instanceof Handle) &&
      component.isValid?.() &&
      this.deleteHandler?.(component?.element?.id, component);
    component._logWarnOnOpOnFrozen && component._logWarnOnOpOnFrozen('Deleting');
    //@ts-ignore
    this._cacheElementMapping[component.element.id] = null; // tell observer
    delete this._cacheElementMapping[component.element.id];
  }
}

const addEditorListeners = (editor: Editor) => {
  let prevTouch: any; // used by touchmove

  addEventListeners(editor.svg, 'mousedown touchstart', (e: any) => {
    e.preventDefault(); // avoid both mouse and touch event on devices firing both

    if (e instanceof MouseEvent && !(e.button in editor.mouseButtons)) return;
    const storedComponent = editor.getComponentById(e.target.id);
    const componentTarget = storedComponent && storedComponent.isFrozen ? null : storedComponent;

    const touchBCR = editor.svg?.getBoundingClientRect()!;
    const touch = e.targetTouches && e.targetTouches[0];

    editor.fsmService.send({
      type: 'MT_DOWN',
      component: componentTarget, // not defined when mousedown on editor
      offsetX: e.offsetX !== undefined ? e.offsetX : touch && touch.clientX - touchBCR.x,
      offsetY: e.offsetY !== undefined ? e.offsetY : touch && touch.clientY - touchBCR.y
    });

    prevTouch = touch;
  });

  addEventListeners(editor.svg, 'mouseup touchend mouseleave touchleave', (e: any) => {
    e.preventDefault(); // avoid both mouse and touch event on devices firing both

    editor.fsmService.send({
      type: 'MT_UP'
    });

    prevTouch = null;
  });

  addEventListeners(editor.svg, 'mousemove touchmove', (e: any) => {
    const touchBCR = editor.svg?.getBoundingClientRect()!;
    const touch = e.targetTouches && e.targetTouches[0];

    editor.fsmService.send({
      type: 'MT_MOVE',
      offsetX: e.offsetX !== undefined ? e.offsetX : touch && touch.clientX - touchBCR.x,
      offsetY: e.offsetY !== undefined ? e.offsetY : touch && touch.clientY - touchBCR.y,
      movementX:
        e.movementX !== undefined ? e.movementX : prevTouch ? touch.clientX - prevTouch.clientX : 0,
      movementY:
        e.movementY !== undefined ? e.movementY : prevTouch ? touch.clientY - prevTouch.clientY : 0
    });

    prevTouch = touch;
  });

  addEventListeners(root.window, 'keydown', (e: any) => {
    switch (e.key) {
      case 'Escape':
        editor.fsmService.send('KEYDOWN_ESC');
        break;
      case 'Enter':
        editor.fsmService.send('KEYDOWN_ESC');
      case 'Delete':
        editor.fsmService.send('KEYDOWN_DEL');
        break;
      case 'ArrowUp':
        e.preventDefault();
        editor.fsmService.send({
          type: 'KEYDOWN_ARRAY',
          movementX: 0,
          movementY: -1
        });
        break;
      case 'ArrowDown':
        e.preventDefault();
        editor.fsmService.send({
          type: 'KEYDOWN_ARRAY',
          movementX: 0,
          movementY: 1
        });
        break;
      case 'ArrowLeft':
        e.preventDefault();
        editor.fsmService.send({
          type: 'KEYDOWN_ARRAY',
          movementX: -1,
          movementY: 0
        });
        break;
      case 'ArrowRight':
        e.preventDefault();
        editor.fsmService.send({
          type: 'KEYDOWN_ARRAY',
          movementX: 1,
          movementY: 0
        });
        break;
    }
  });

  return editor;
};

const addViewListeners = (view: Editor) => {
  addEventListeners(view.cgroup, 'click touchstart', (e: any) => {
    e.preventDefault(); // avoid both touch and pointer event on devices firing both

    view.clickHandler &&
      view.clickHandler(e, e.target.id, view.selectComponent(e.target.id)?.getCenterCoords());
  });

  return view;
};

const deepMerge = (target: any, ...sources: any): any => {
  if (!sources.length || !sources[0]) {
    return target;
  }
  const source = sources.shift();

  Object.entries(source).forEach(([key, value]) => {
    if (Object.getPrototypeOf(value) === Object.prototype) {
      deepMerge(target[key], value);
    } else {
      target[key] = value;
    }
  });

  return deepMerge(target, ...sources);
};

export default (isView?: boolean) => {
  return function EditorConstructor(
    svgEl: SVGSVGElement | string,
    options: EditorOptions = {},
    style?: Style
  ) {
    return isView
      ? addViewListeners(new Editor(svgEl, options, style))
      : addEditorListeners(new Editor(svgEl, options, style));
  };
};
