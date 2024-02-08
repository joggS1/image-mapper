import { interpret as C, createMachine as Y, send as w, assign as p, actions as x } from "C:/Users/lukin/OneDrive/Рабочий стол/imagemapper-main/node_modules/xstate/es/index.js";
const b = window || void 0, m = b.window.document, g = "http://www.w3.org/2000/svg", I = "http://www.w3.org/1999/xlink", _ = new RegExp(/^data-[a-zA-Z]+/), f = function(r, e, t) {
  [r].flat().forEach((s) => {
    e.split(" ").forEach((i) => {
      s.addEventListener(i, t, {
        passive: !1
      });
    });
  });
}, H = function(r, e, t) {
  [r].flat().forEach((s) => {
    e.split(" ").forEach((i) => {
      s.removeEventListener(i, t);
    });
  });
}, N = {
  fill: "rgb(102, 102, 102)",
  stroke: "rgb(51, 51, 51)",
  cursor: "pointer"
}, W = {
  off: {
    "stroke-width": 1,
    opacity: 0.5
  },
  on: {
    "stroke-width": 2,
    opacity: 0.6
  }
}, R = {
  off: {
    "stroke-dasharray": "none",
    // alt. 'initial'
    "stroke-linejoin": "miter"
  },
  on: {
    "stroke-dasharray": "4 3",
    "stroke-linejoin": "round"
  }
}, z = {
  fill: "rgb(255, 255, 255)",
  stroke: "rgb(51, 51, 51)",
  "stroke-width": 1,
  opacity: 0.3,
  cursor: "pointer"
}, P = {
  opacity: 0.6
}, X = () => ({
  component: Object.assign({}, N),
  componentHover: Object.assign({}, W),
  componentSelect: Object.assign({}, R),
  handle: Object.assign({}, z),
  handleHover: Object.assign({}, P)
}), d = (r, e) => Object.entries(e).forEach(([t, s]) => r.setAttribute(t, s)), y = (r, e, t) => {
  f(r, "mouseenter touchstart", () => d(r, t)), f(
    r,
    "mouseleave touchend touchleave",
    () => d(r, e)
  );
};
class c {
  constructor(e, t, s, i) {
    this.x = e, this.y = t, this.moveHandler = s, this.element = m.createElementNS(g, "circle"), this.element.setAttribute("cx", String(e)), this.element.setAttribute("cy", String(t)), this.element.setAttribute("r", String(5)), this.element.setAttribute("visibility", "hidden"), this.isFrozen = i !== void 0 ? !!i : !1;
  }
  freeze(e) {
    return this.isFrozen = e !== void 0 ? !!e : !0, this.isFrozen && this.setVisible(!1), this;
  }
  setAttrX(e) {
    return this.element.setAttribute("cx", String(e)), this;
  }
  delete() {
    this.element.remove();
  }
  setAttrY(e) {
    return this.element.setAttribute("cy", String(e)), this;
  }
  move(e, t) {
    return this.moveHandler(e, t), this;
  }
  setVisible(e) {
    return e = e !== void 0 ? !!e : !0, this.element.setAttribute("visibility", e ? "visible" : "hidden"), this;
  }
  setStyle(e, t) {
    return d(this.element, e), y(this.element, e, t), this;
  }
}
const { choose: F } = x, k = {
  rect: {
    on: {
      MT_DOWN: {
        actions: ["createRectangle", "selectUnfinished"],
        target: "#drawing.rect.mouseIsDown"
      }
    }
  },
  circle: {
    on: {
      MT_DOWN: {
        actions: ["createCircle", "selectUnfinished"],
        target: "#drawing.circle.mouseIsDown"
      }
    }
  },
  ellipse: {
    on: {
      MT_DOWN: {
        actions: ["createEllipse", "selectUnfinished"],
        target: "#drawing.ellipse.mouseIsDown"
      }
    }
  },
  polygon: {
    on: {
      MT_DOWN: {
        actions: ["createPolygon", "selectUnfinished"],
        target: "#drawing.polygon.mouseIsDown"
      }
    }
  }
}, U = {
  rect: {
    states: {
      mouseIsDown: {
        on: {
          MT_UP: "#idle.drawMode.rect",
          // consider selection if mouse has not moved
          KEYDOWN_ESC: "#idle.drawMode.rect",
          MT_MOVE: {
            actions: "resizeUnfinished"
          }
        }
      }
    }
  },
  circle: {
    states: {
      mouseIsDown: {
        on: {
          MT_UP: "#idle.drawMode.circle",
          // consider selection if mouse has not moved
          KEYDOWN_ESC: "#idle.drawMode.circle",
          MT_MOVE: {
            actions: "resizeUnfinished"
          }
        }
      }
    }
  },
  ellipse: {
    states: {
      mouseIsDown: {
        on: {
          MT_UP: "#idle.drawMode.ellipse",
          // consider selection if mouse has not moved
          KEYDOWN_ESC: "#idle.drawMode.ellipse",
          MT_MOVE: {
            actions: "resizeUnfinished"
          }
        }
      }
    }
  },
  polygon: {
    on: {
      KEYDOWN_ESC: "#idle.drawMode.polygon"
    },
    states: {
      mouseIsDown: {
        on: {
          MT_UP: "mouseIsUp",
          MT_MOVE: {
            actions: "moveLastPoint"
          }
        }
      },
      mouseIsUp: {
        on: {
          MT_DOWN: [
            {
              cond: "isHandle",
              target: "#idle.drawMode.polygon"
            },
            {
              // else
              actions: "addPoint",
              target: "mouseIsDown"
            }
          ]
        }
      }
    }
  }
}, L = (r) => Y(
  {
    context: {
      unfinishedComponent: void 0,
      mouseDownInSelectModeObject: void 0,
      _editor: r
    },
    predictableActionArguments: !0,
    on: {
      MODE_SELECT: "idle.selectMode",
      MODE_DRAW_RECT: "idle.drawMode.rect",
      MODE_DRAW_CIRCLE: "idle.drawMode.circle",
      MODE_DRAW_ELLIPSE: "idle.drawMode.ellipse",
      MODE_DRAW_POLYGON: "idle.drawMode.polygon"
    },
    initial: "idle",
    states: {
      idle: {
        id: "idle",
        initial: "selectMode",
        states: {
          selectMode: {
            initial: "mouseIsUp",
            states: {
              mouseIsUp: {
                on: {
                  MT_DOWN: {
                    actions: ["selectComponent", "mouseDownInSelectModeAssign"],
                    target: "mouseIsDown"
                  },
                  KEYDOWN_ARRAY: {
                    actions: "mouseDownInSelectModeObjectMove"
                  }
                }
              },
              mouseIsDown: {
                on: {
                  MT_UP: "mouseIsUp",
                  MT_MOVE: {
                    actions: "mouseDownInSelectModeObjectMove"
                  }
                }
              }
            },
            // https://xstate.js.org/docs/guides/actions.html#action-order:
            // In XState version 4.x, assign actions have priority and are executed before any other actions.
            // We use send on the 'mouseDownInSelectModeUnassign' action to overcome this limitation.
            on: {
              KEYDOWN_ESC: {
                actions: ["unselectAll", w("mouseDownInSelectModeUnassign")]
              },
              KEYDOWN_DEL: {
                actions: ["deleteComponent", w("mouseDownInSelectModeUnassign")]
              },
              mouseDownInSelectModeUnassign: {
                actions: "mouseDownInSelectModeUnassign"
              }
            },
            entry: "selectModeEntry",
            exit: ["unselectAll", w("mouseDownInSelectModeUnassign")]
          },
          drawMode: {
            initial: void 0,
            states: k,
            on: {
              KEYDOWN_ESC: "#idle.selectMode"
            }
          }
        }
      },
      drawing: {
        id: "drawing",
        initial: void 0,
        states: U,
        exit: F([
          {
            cond: "unfinishedIsValid",
            actions: ["unselectAll", "validComponentFinished"]
          },
          {
            // else
            actions: "discardUnfinished"
          }
        ])
      }
    }
  },
  {
    actions: {
      createRectangle: p({
        unfinishedComponent: (e, t) => e._editor.createRectangle({ x: t.offsetX, y: t.offsetY })
      }),
      createCircle: p({
        unfinishedComponent: (e, t) => e._editor.createCircle({ x: t.offsetX, y: t.offsetY })
      }),
      createEllipse: p({
        unfinishedComponent: (e, t) => e._editor.createEllipse({ x: t.offsetX, y: t.offsetY })
      }),
      createPolygon: p({
        unfinishedComponent: (e, t) => e._editor.createPolygon({ points: { x: t.offsetX, y: t.offsetY } })
      }),
      discardUnfinished: (e, t) => {
        e._editor.unregisterComponent(e.unfinishedComponent);
      },
      resizeUnfinished: (e, t) => {
        e.unfinishedComponent.resize(t.offsetX, t.offsetY);
      },
      selectUnfinished: (e, t) => {
        e._editor.selectComponent(e.unfinishedComponent);
      },
      validComponentFinished: (e, t) => {
        const s = e.unfinishedComponent;
        e._editor.componentDrawnHandler && e._editor.componentDrawnHandler(s, s.element.id);
      },
      // polygons only
      addPoint: (e, t) => {
        e.unfinishedComponent.addPoint(t.offsetX, t.offsetY), e._editor.selectComponent(e.unfinishedComponent);
      },
      // polygons only
      moveLastPoint: (e, t) => {
        e.unfinishedComponent.moveLastPoint(t.offsetX, t.offsetY);
      },
      mouseDownInSelectModeAssign: p({
        mouseDownInSelectModeObject: (e, t) => t.component
      }),
      mouseDownInSelectModeUnassign: p({
        //@ts-ignore
        mouseDownInSelectModeObject: null
      }),
      mouseDownInSelectModeObjectMove: (e, t) => {
        const s = e.mouseDownInSelectModeObject;
        s && s.move && s.move(t.movementX, t.movementY);
      },
      selectComponent: (e, t) => {
        e._editor.selectComponent(t.component);
      },
      deleteComponent: (e, t) => {
        const s = e.mouseDownInSelectModeObject;
        s && e._editor.unregisterComponent(s);
      },
      unselectAll: (e, t) => {
        e._editor.selectComponent(null);
      },
      selectModeEntry: (e, t) => {
        e._editor.selectModeHandler && e._editor.selectModeHandler();
      }
    },
    guards: {
      isHandle: (e, t) => t.component instanceof c,
      unfinishedIsValid: (e, t) => e.unfinishedComponent.isValid()
    }
  }
), T = (r) => C(L(r)), S = (r, e, t) => {
  const s = {
    defineProperty(i, o, n) {
      return Object.is(n.value, i[o]) || (typeof e == "function" ? e.call(t || this, o, n.value, i[o], r) : e[o].call(t || this, n.value, i[o], r)), Reflect.defineProperty(i, o, n);
    }
  };
  return new Proxy(r, s);
};
function E(r, e, t) {
  return new c(
    r,
    e,
    (s, i) => {
      t.x += s, t.y += i;
    },
    this.isFrozen
  );
}
class j {
  constructor(e, t) {
    this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], this.editorOwner = e, this.element = m.createElementNS(g, "polygon"), this.points = [], this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], t && [t].flat().forEach((s) => this.addPoint(s.x, s.y)), this.style = {}, this.isSelected = !1, this.isFrozen = !1;
  }
  freeze(e) {
    return this.isFrozen = e !== void 0 ? !!e : !0, this.getHandles().forEach((t) => t.freeze(e)), this;
  }
  updateElementPoints() {
    return this.element.setAttribute("points", this.points.map((e) => `${e.x},${e.y}`).join(" ")), this;
  }
  addPoint(e, t) {
    const s = { x: e, y: t }, i = S(s, (o, n, l, h) => {
      var a, u;
      o !== "handle" && (this._logWarnOnOpOnFrozen("Point moved on"), this.updateElementPoints(), (u = (a = h.handle) == null ? void 0 : a["setAttr" + o.toUpperCase()]) == null || u.call(a, n));
    });
    return s.handle = E.call(this, e, t, i), this.editorOwner.registerComponentHandle(s.handle), this.points.push(i), this.updateElementPoints(), this;
  }
  moveLastPoint(e, t) {
    const s = this.points[this.points.length - 1];
    return [s.x, s.y] = [e, t], this;
  }
  // TODO: move by transform:translate instead?
  move(e, t) {
    return this.points.forEach((s) => {
      s.x += e, s.y += t;
    }), this;
  }
  isValid() {
    return this.points.length >= 3;
  }
  setHandlesVisibility(e) {
    return this.points.forEach((t) => {
      var s;
      if (!t.handle) {
        const i = E.call(this, t.x, t.y, t);
        t.handle = i, (s = this.editorOwner) == null || s.registerComponentHandle(i);
      }
      t.handle.setVisible(e);
    }), this;
  }
  setIsSelected(e) {
    return this._logWarnOnOpOnFrozen("Select/unselect performed on"), this.isSelected = e = e !== void 0 ? !!e : !0, this.setHandlesVisibility(e), this.style && d(
      this.element,
      e ? this.style.componentSelect.on : this.style.componentSelect.off
    ), this;
  }
  getHandles() {
    return this.points.map((e) => e.handle);
  }
  clearHandles() {
    this.points.forEach((e) => {
      var t;
      (t = this.editorOwner) == null || t.unregisterComponent(e.handle), e.handle = null;
    });
  }
  setStyle(e) {
    return this.style = e, d(this.element, e.component), d(this.element, e.componentHover.off), d(this.element, e.componentSelect.off), y(this.element, e.componentHover.off, e.componentHover.on), this;
  }
  setDataAttributes(e) {
    for (let t in e)
      this.element.setAttribute(t, String(e[t]));
    return this;
  }
  export() {
    const e = {
      points: this.points.map((t) => ({ x: t.x, y: t.y }))
    };
    for (let t of this.element.attributes)
      (t.name in this.includeAttributes || _.test(t.name)) && (e[t.name] = t.value);
    return e;
  }
  _logWarnOnOpOnFrozen(e) {
    this.isFrozen && console.warn(`${e} frozen ${this.element.tagName} with id ${this.element.id}`);
  }
}
function D() {
  const { x: r, y: e, width: t, height: s } = this.dim;
  this.handles = [
    //@ts-ignore
    new c(
      r,
      e,
      (i, o) => {
        this.dim.x += i, this.dim.width -= i, this.dim.y += o, this.dim.height -= o;
      },
      this.isFrozen
    ),
    //@ts-ignore
    new c(
      r,
      e + s,
      (i, o) => {
        this.dim.x += i, this.dim.width -= i, this.dim.height += o;
      },
      this.isFrozen
    ),
    //@ts-ignore
    new c(
      r + t,
      e,
      (i, o) => {
        this.dim.width += i, this.dim.y += o, this.dim.height -= o;
      },
      this.isFrozen
    ),
    //@ts-ignore
    new c(
      r + t,
      e + s,
      (i, o) => {
        this.dim.width += i, this.dim.height += o;
      },
      this.isFrozen
    )
  ], this.handles.forEach((i) => {
    var o;
    (o = this.editorOwner) == null || o.registerComponentHandle(i);
  });
}
class O {
  constructor(e, t) {
    this.editorOwner = null, this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], this.dim = {
      x: 0,
      height: 0,
      width: 0,
      y: 0
    }, this.handles = [], this.style = {}, this.isSelected = !1, this.isFrozen = !1, this.propChangeListener = t, this.svgElementName = e, this.element = m.createElementNS(g, this.svgElementName);
  }
  add(e, t, s, i = 0, o = 0) {
    this.editorOwner = e, this.dim = S(
      {
        x: t,
        y: s,
        width: 0,
        height: 0
      },
      {
        /*
                this.handles[]
                index location:
        
                  0_______2
                   |     |
                   |_____|
                  1       3
              */
        // move
        x: (n, l, h) => {
          this._logWarnOnOpOnFrozen("Dimension property x changed on"), this.propChangeListener.x.call(this, n, l, h), this.handles[0].setAttrX(n), this.handles[1].setAttrX(n), this.handles[2].setAttrX(n + h.width), this.handles[3].setAttrX(n + h.width);
        },
        // move
        y: (n, l, h) => {
          this._logWarnOnOpOnFrozen("Dimension property y changed on"), this.propChangeListener.y.call(this, n, l, h), this.handles[0].setAttrY(n), this.handles[1].setAttrY(n + h.height), this.handles[2].setAttrY(n), this.handles[3].setAttrY(n + h.height);
        },
        // resize
        width: (n, l, h) => {
          this._logWarnOnOpOnFrozen("Dimension property width changed on"), this.propChangeListener.width.call(this, n, l, h), this.handles[2].setAttrX(h.x + n), this.handles[3].setAttrX(h.x + n);
        },
        // resize
        height: (n, l, h) => {
          this._logWarnOnOpOnFrozen("Dimension property height changed on"), this.propChangeListener.height.call(this, n, l, h), this.handles[1].setAttrY(h.y + n), this.handles[3].setAttrY(h.y + n);
        }
      },
      this
    ), D.call(this), [this.dim.width, this.dim.height] = [i, o], this.style = {}, this.isSelected = !1, this.isFrozen = !1;
  }
  freeze(e) {
    return this.isFrozen = e !== void 0 ? !!e : !0, this.handles.forEach((t) => t.freeze(e)), this;
  }
  resize(e, t) {
    return this.dim.width = e - this.dim.x, this.dim.height = t - this.dim.y, this;
  }
  move(e, t) {
    return this.dim.x += e, this.dim.y += t, this;
  }
  isValid() {
    return this.dim.width && this.dim.height;
  }
  setHandlesVisibility(e) {
    var t, s;
    return e && !((t = this.handles) != null && t.length) && D.call(this), (s = this.handles) == null || s.forEach((i) => i == null ? void 0 : i.setVisible(e)), this;
  }
  setIsSelected(e) {
    return this._logWarnOnOpOnFrozen("Select/unselect performed on"), this.isSelected = e = e !== void 0 ? !!e : !0, this.setHandlesVisibility(e), this.style && d(
      this.element,
      e ? this.style.componentSelect.on : this.style.componentSelect.off
    ), this;
  }
  getHandles() {
    return this.handles;
  }
  clearHandles() {
    this.handles = [];
  }
  setStyle(e) {
    return this.style = e, d(this.element, e.component), d(this.element, e.componentHover.off), d(this.element, e.componentSelect.off), y(this.element, e.componentHover.off, e.componentHover.on), this;
  }
  setDataAttributes(e) {
    var t;
    for (let s in e)
      (t = this.element) == null || t.setAttribute(s, String(e[s]));
    return this;
  }
  export() {
    var n;
    const { x: e, y: t, width: s, height: i } = this.dim, o = {
      x: e,
      y: t,
      width: s,
      height: i
    };
    for (let l of (n = this.element) == null ? void 0 : n.attributes)
      (l.name in this.includeAttributes || _.test(l.name)) && (o[l.name] = l.value);
    return o;
  }
  _logWarnOnOpOnFrozen(e) {
    var t, s;
    this.isFrozen && console.warn(`${e} frozen ${(t = this.element) == null ? void 0 : t.tagName} with id ${(s = this.element) == null ? void 0 : s.id}`);
  }
}
class V extends O {
  constructor(e, t, s, i, o) {
    super("rect", {
      x: (n, l, h) => {
        this.element.setAttribute("x", String(h.width < 0 ? n + h.width : n));
      },
      // move
      y: (n, l, h) => {
        this.element.setAttribute("y", String(h.height < 0 ? n + h.height : n));
      },
      // resize
      width: (n, l, h) => {
        this.element.setAttribute("width", String(Math.abs(n))), this.element.setAttribute("x", String(n < 0 ? h.x + n : h.x));
      },
      // resize
      height: (n, l, h) => {
        this.element.setAttribute("height", String(Math.abs(n))), this.element.setAttribute("y", String(n < 0 ? h.y + n : h.y));
      }
    }), this.add(e, t, s, i, o);
  }
}
class K extends O {
  constructor(e, t, s, i, o) {
    super("circle", {
      // move
      x: (n, l, h) => {
        var a;
        (a = this == null ? void 0 : this.element) == null || a.setAttribute("cx", String(n + h.width / 2));
      },
      // move
      y: (n, l, h) => {
        var a;
        (a = this == null ? void 0 : this.element) == null || a.setAttribute("cy", String(n + h.height / 2));
      },
      // resize
      width: (n, l, h) => {
        var a, u;
        (a = this == null ? void 0 : this.element) == null || a.setAttribute(
          "r",
          String(Math.min(Math.abs(n), Math.abs(h.height)) / 2)
        ), (u = this == null ? void 0 : this.element) == null || u.setAttribute("cx", String(h.x + n / 2));
      },
      // resize
      height: (n, l, h) => {
        var a, u;
        (a = this == null ? void 0 : this.element) == null || a.setAttribute(
          "r",
          String(Math.min(Math.abs(n), Math.abs(h.width)) / 2)
        ), (u = this == null ? void 0 : this.element) == null || u.setAttribute("cy", String(h.y + n / 2));
      }
    }), this.add(e, t, s, i, o);
  }
}
class B extends O {
  constructor(e, t, s, i, o) {
    super("ellipse", {
      x: (n, l, h) => {
        this.element.setAttribute("cx", String(n + h.width / 2));
      },
      // move
      y: (n, l, h) => {
        this.element.setAttribute("cy", String(n + h.height / 2));
      },
      // resize
      width: (n, l, h) => {
        this.element.setAttribute("rx", String(Math.abs(n) / 2)), this.element.setAttribute("cx", String(h.x + n / 2));
      },
      // resize
      height: (n, l, h) => {
        this.element.setAttribute("ry", String(Math.abs(n) / 2)), this.element.setAttribute("cy", String(h.y + n / 2));
      }
    }), this.add(e, t, s, i, o);
  }
}
class M {
  constructor(e, t = {}, s = {}) {
    if ([
      this.width = 1200,
      this.height = 600,
      this.componentDrawnHandler,
      this.selectModeHandler,
      this.viewClickHandler
    ] = [
      t.width,
      t.height,
      t.componentDrawnHandler,
      // applies to Editor only
      t.selectModeHandler,
      // applies to Editor only
      t.viewClickHandler
      // applies to View only
    ], this.style = v(X(), s), this.fsmService = T(this).start(), this.svg = e, typeof e == "string") {
      if (this.svg = m.getElementById(e), !this.svg) {
        this.svg = m.createElementNS(g, "svg"), this.svg.setAttribute("version", "1.1"), this.svg.setAttribute("id", e), this.svg.setAttribute("width", this.width + "px"), this.svg.setAttribute("height", this.height + "px"), this.svg.setAttribute("viewBox", `0, 0, ${this.width} ${this.height}`), this.svg.setAttribute("preserveAspectRatio", "xMinYMin");
        const i = this.svg;
        window.addEventListener(
          "load",
          function() {
            m.body.appendChild(i);
          },
          { once: !0 }
        );
      }
    } else
      e && e.tagName === "svg" && (this.svg = e);
    if (!this.svg)
      throw new Error("No SVG element provided");
    this.cgroup = m.createElementNS(g, "g"), this.hgroup = m.createElementNS(g, "g"), this.svg.appendChild(this.cgroup), this.svg.appendChild(this.hgroup), this._cacheElementMapping = S({}, (i, o, n) => {
      o ? o instanceof c ? this.hgroup.appendChild(o.element) : this.cgroup.appendChild(o.element) : n instanceof c ? this.hgroup.removeChild(n.element) : n && (this.cgroup.removeChild(n.element), n.getHandles().forEach((l) => {
        this.unregisterComponent(l);
      }));
    }), this._idCounter = 1, this._handleIdCounter = 1;
  }
  loadImage(e, t, s) {
    var o;
    const i = m.createElementNS(g, "image");
    return i.setAttributeNS(I, "href", e), t && i.setAttribute("width", String(t)), s && i.setAttribute("height", String(s)), (o = this.svg) == null || o.prepend(i), this;
  }
  setStyle(e) {
    return this.style = v(this.style, e), this;
  }
  rect() {
    this.fsmService.send("MODE_DRAW_RECT");
  }
  polygon() {
    this.fsmService.send("MODE_DRAW_POLYGON");
  }
  circle() {
    this.fsmService.send("MODE_DRAW_CIRCLE");
  }
  ellipse() {
    this.fsmService.send("MODE_DRAW_ELLIPSE");
  }
  selectMode() {
    this.fsmService.send("MODE_SELECT");
  }
  selectComponent(e) {
    let t;
    return typeof e == "string" ? t = this.getComponentById(e) : t = e, (!t || t.setIsSelected) && Object.values(this._cacheElementMapping).forEach((s) => {
      s === e && s.setIsSelected && s.setIsSelected(!0), s !== e && !s.isFrozen && s.setIsSelected && (s.setIsSelected(!1), s.getHandles().forEach((i) => {
        this.unregisterComponent(i);
      }), s.clearHandles());
    }), t;
  }
  removeComponent(e) {
    return typeof e == "string" && (e = this.getComponentById(e)), this.unregisterComponent(e), e;
  }
  on(e, t) {
    return f(this.svg, e, t), this;
  }
  off(e, t) {
    return H(this.svg, e, t), this;
  }
  getComponentById(e) {
    return this._cacheElementMapping && this._cacheElementMapping[e];
  }
  import(e, t) {
    const s = JSON.parse(e);
    return this._idCounter = s.idCounter, s.components.map((i) => {
      const o = t ? t(i.id) : i.id;
      switch (i.type) {
        case "rect":
          return this.createRectangle(i.data, o);
        case "circle":
          return this.createCircle(i.data, o);
        case "ellipse":
          return this.createEllipse(i.data, o);
        case "polygon":
          return this.createPolygon(i.data, o);
        default:
          return console.error("Unknown type", i.type), null;
      }
    }).filter((i) => i);
  }
  export(e) {
    const t = {
      idCounter: this._idCounter,
      components: Object.entries(this._cacheElementMapping).filter(([i, o]) => !(o instanceof c)).map(([i, o]) => ({
        id: i,
        type: o.element.tagName,
        data: o.export()
      }))
    }, s = JSON.stringify(t);
    return e ? s.replace(/[\"]/g, '\\"') : s;
  }
  createRectangle(e, t) {
    const { x: s, y: i, width: o, height: n, ...l } = e;
    return this.registerComponent(
      new V(this, s, i, o, n).setStyle(this.style).setDataAttributes(l),
      t
    );
  }
  createCircle(e, t) {
    const { x: s, y: i, width: o, height: n, ...l } = e;
    return this.registerComponent(
      new K(this, s, i, o, n).setStyle(this.style).setDataAttributes(l),
      t
    );
  }
  createEllipse(e, t) {
    const { x: s, y: i, width: o, height: n, ...l } = e;
    return this.registerComponent(
      new B(this, s, i, o, n).setStyle(this.style).setDataAttributes(l),
      t
    );
  }
  createPolygon(e, t) {
    const { points: s, ...i } = e;
    return this.registerComponent(
      new j(this, s).setStyle(this.style).setDataAttributes(i),
      t
    );
  }
  registerComponent(e, t) {
    return e instanceof c ? t = "handle_" + this._handleIdCounter++ : t = t || e.element.tagName + "_" + this._idCounter++, this._cacheElementMapping[t] = e, e.element.id = t, e;
  }
  registerComponentHandle(e) {
    return this.registerComponent(e.setStyle(this.style.handle, this.style.handleHover));
  }
  unregisterComponent(e) {
    e && (e._logWarnOnOpOnFrozen && e._logWarnOnOpOnFrozen("Deleting"), this._cacheElementMapping[e.element.id] = null, delete this._cacheElementMapping[e.element.id]);
  }
}
const $ = (r) => {
  let e;
  return f(r.svg, "mousedown touchstart", (t) => {
    var l;
    t.preventDefault();
    const s = r.getComponentById(t.target.id), i = s && s.isFrozen ? null : s, o = (l = r.svg) == null ? void 0 : l.getBoundingClientRect(), n = t.targetTouches && t.targetTouches[0];
    r.fsmService.send({
      type: "MT_DOWN",
      component: i,
      // not defined when mousedown on editor
      offsetX: t.offsetX !== void 0 ? t.offsetX : n && n.clientX - o.x,
      offsetY: t.offsetY !== void 0 ? t.offsetY : n && n.clientY - o.y
    }), e = n;
  }), f(r.svg, "mouseup touchend mouseleave touchleave", (t) => {
    t.preventDefault(), r.fsmService.send({
      type: "MT_UP"
    }), e = null;
  }), f(r.svg, "mousemove touchmove", (t) => {
    var o;
    const s = (o = r.svg) == null ? void 0 : o.getBoundingClientRect(), i = t.targetTouches && t.targetTouches[0];
    r.fsmService.send({
      type: "MT_MOVE",
      offsetX: t.offsetX !== void 0 ? t.offsetX : i && i.clientX - s.x,
      offsetY: t.offsetY !== void 0 ? t.offsetY : i && i.clientY - s.y,
      movementX: t.movementX !== void 0 ? t.movementX : e ? i.clientX - e.clientX : 0,
      movementY: t.movementY !== void 0 ? t.movementY : e ? i.clientY - e.clientY : 0
    }), e = i;
  }), f(b.window, "keydown", (t) => {
    switch (t.key) {
      case "Escape":
        r.fsmService.send("KEYDOWN_ESC");
        break;
      case "Enter":
        r.fsmService.send("KEYDOWN_ESC");
      case "Delete":
        r.fsmService.send("KEYDOWN_DEL");
        break;
      case "ArrowUp":
        t.preventDefault(), r.fsmService.send({
          type: "KEYDOWN_ARRAY",
          movementX: 0,
          movementY: -1
        });
        break;
      case "ArrowDown":
        t.preventDefault(), r.fsmService.send({
          type: "KEYDOWN_ARRAY",
          movementX: 0,
          movementY: 1
        });
        break;
      case "ArrowLeft":
        t.preventDefault(), r.fsmService.send({
          type: "KEYDOWN_ARRAY",
          movementX: -1,
          movementY: 0
        });
        break;
      case "ArrowRight":
        t.preventDefault(), r.fsmService.send({
          type: "KEYDOWN_ARRAY",
          movementX: 1,
          movementY: 0
        });
        break;
    }
  }), r;
}, G = (r) => (f(r.cgroup, "click touchstart", (e) => {
  e.preventDefault(), r.viewClickHandler && r.viewClickHandler(e, e.target.id);
}), r), v = (r, ...e) => {
  if (!e.length || !e[0])
    return r;
  const t = e.shift();
  return Object.entries(t).forEach(([s, i]) => {
    Object.getPrototypeOf(i) === Object.prototype ? v(r[s], i) : r[s] = i;
  }), v(r, ...e);
}, A = (r) => function(t, s = {}, i = {}) {
  return r ? G(new M(t, s, i)) : $(new M(t, s, i));
}, J = A(!1), Z = A(!0), Q = {
  editor: J,
  view: Z
};
export {
  Q as default,
  J as editor,
  Z as view
};
