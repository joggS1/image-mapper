const De = window || void 0, q = De.window.document, rt = "http://www.w3.org/2000/svg", an = "http://www.w3.org/1999/xlink", Ce = new RegExp(/^data-[a-zA-Z]+/), G = function(n, t, e) {
  [n].flat().forEach((r) => {
    t.split(" ").forEach((i) => {
      r.addEventListener(i, e, {
        passive: !1
      });
    });
  });
}, un = function(n, t, e) {
  [n].flat().forEach((r) => {
    t.split(" ").forEach((i) => {
      r.removeEventListener(i, e);
    });
  });
}, hn = {
  fill: "rgb(102, 102, 102)",
  stroke: "rgb(51, 51, 51)",
  cursor: "pointer"
}, cn = {
  off: {
    "stroke-width": "1",
    opacity: 0.5
  },
  on: {
    "stroke-width": "2",
    opacity: 0.6
  }
}, ln = {
  off: {
    "stroke-dasharray": "none",
    // alt. 'initial'
    "stroke-linejoin": "miter"
  },
  on: {
    "stroke-dasharray": "4 3",
    "stroke-linejoin": "round"
  }
}, fn = {
  fill: "rgb(255, 255, 255)",
  stroke: "rgb(51, 51, 51)",
  "stroke-width": "1",
  opacity: 0.3,
  cursor: "pointer"
}, dn = {
  opacity: 0.6
}, vn = () => ({
  component: Object.assign({}, hn),
  componentHover: Object.assign({}, cn),
  componentSelect: Object.assign({}, ln),
  handle: Object.assign({}, fn),
  handleHover: Object.assign({}, dn)
}), K = (n, t) => Object.entries(t).forEach(([e, r]) => n.setAttribute(e, String(r))), se = (n, t, e) => {
  G(n, "mouseenter touchstart", () => K(n, e)), G(
    n,
    "mouseleave touchend touchleave",
    () => K(n, t)
  );
};
class B {
  constructor(t, e, r, i) {
    this.x = t, this.y = e, this.moveHandler = r, this.element = q.createElementNS(rt, "circle"), this.element.setAttribute("cx", String(t)), this.element.setAttribute("cy", String(e)), this.element.setAttribute("r", String(5)), this.element.setAttribute("visibility", "hidden"), this.isFrozen = i !== void 0 ? !!i : !1;
  }
  freeze(t) {
    return this.isFrozen = t !== void 0 ? !!t : !0, this.isFrozen && this.setVisible(!1), this;
  }
  setAttrX(t) {
    return this.element.setAttribute("cx", String(t)), this;
  }
  delete() {
    this.element.remove();
  }
  setAttrY(t) {
    return this.element.setAttribute("cy", String(t)), this;
  }
  move(t, e) {
    return this.moveHandler(t, e), this;
  }
  setVisible(t) {
    return t = t !== void 0 ? !!t : !0, this.element.setAttribute("visibility", t ? "visible" : "hidden"), this;
  }
  setStyle(t, e) {
    return K(this.element, t), se(this.element, t, e), this;
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var d = function() {
  return d = Object.assign || function(t) {
    for (var e, r = 1, i = arguments.length; r < i; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, d.apply(this, arguments);
};
function oe(n, t) {
  var e = {};
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (e[r[i]] = n[r[i]]);
  return e;
}
function E(n) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && n[t], r = 0;
  if (e)
    return e.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function A(n, t) {
  var e = typeof Symbol == "function" && n[Symbol.iterator];
  if (!e)
    return n;
  var r = e.call(n), i, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
      s.push(i.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      i && !i.done && (e = r.return) && e.call(r);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function j(n, t, e) {
  if (e || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return n.concat(s || Array.prototype.slice.call(t));
}
var N;
(function(n) {
  n.Start = "xstate.start", n.Stop = "xstate.stop", n.Raise = "xstate.raise", n.Send = "xstate.send", n.Cancel = "xstate.cancel", n.NullEvent = "", n.Assign = "xstate.assign", n.After = "xstate.after", n.DoneState = "done.state", n.DoneInvoke = "done.invoke", n.Log = "xstate.log", n.Init = "xstate.init", n.Invoke = "xstate.invoke", n.ErrorExecution = "error.execution", n.ErrorCommunication = "error.communication", n.ErrorPlatform = "error.platform", n.ErrorCustom = "xstate.error", n.Update = "xstate.update", n.Pure = "xstate.pure", n.Choose = "xstate.choose";
})(N || (N = {}));
var et;
(function(n) {
  n.Parent = "#_parent", n.Internal = "#_internal";
})(et || (et = {}));
var kt = N.Start, Xt = N.Stop, yt = N.Raise, _t = N.Send, ae = N.Cancel, Ne = N.NullEvent, $t = N.Assign, pn = N.After, yn = N.DoneState, Vt = N.Log, _e = N.Init, Ft = N.Invoke, gn = N.ErrorExecution, Zt = N.ErrorPlatform, ue = N.ErrorCustom, Bt = N.Update, Te = N.Choose, Pe = N.Pure;
const mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  after: pn,
  assign: $t,
  cancel: ae,
  choose: Te,
  doneState: yn,
  error: ue,
  errorExecution: gn,
  errorPlatform: Zt,
  init: _e,
  invoke: Ft,
  log: Vt,
  nullEvent: Ne,
  pure: Pe,
  raise: yt,
  send: _t,
  start: kt,
  stop: Xt,
  update: Bt
}, Symbol.toStringTag, { value: "Module" }));
var Ie = ".", pe = {}, te = "xstate.guard", wn = "", L = process.env.NODE_ENV === "production", Tt;
function he(n, t, e) {
  e === void 0 && (e = Ie);
  var r = At(n, e), i = At(t, e);
  return D(i) ? D(r) ? i === r : !1 : D(r) ? r in i : Object.keys(r).every(function(s) {
    return s in i ? he(r[s], i[s]) : !1;
  });
}
function je(n) {
  try {
    return D(n) || typeof n == "number" ? "".concat(n) : n.type;
  } catch {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
function ee(n, t) {
  try {
    return gt(n) ? n : n.toString().split(t);
  } catch {
    throw new Error("'".concat(n, "' is not a valid state path."));
  }
}
function Sn(n) {
  return typeof n == "object" && "value" in n && "context" in n && "event" in n && "_event" in n;
}
function At(n, t) {
  if (Sn(n))
    return n.value;
  if (gt(n))
    return Yt(n);
  if (typeof n != "string")
    return n;
  var e = ee(n, t);
  return Yt(e);
}
function Yt(n) {
  if (n.length === 1)
    return n[0];
  for (var t = {}, e = t, r = 0; r < n.length - 1; r++)
    r === n.length - 2 ? e[n[r]] = n[r + 1] : (e[n[r]] = {}, e = e[n[r]]);
  return t;
}
function bt(n, t) {
  for (var e = {}, r = Object.keys(n), i = 0; i < r.length; i++) {
    var s = r[i];
    e[s] = t(n[s], s, n, i);
  }
  return e;
}
function ye(n, t, e) {
  var r, i, s = {};
  try {
    for (var o = E(Object.keys(n)), u = o.next(); !u.done; u = o.next()) {
      var a = u.value, h = n[a];
      e(h) && (s[a] = t(h, a, n));
    }
  } catch (c) {
    r = {
      error: c
    };
  } finally {
    try {
      u && !u.done && (i = o.return) && i.call(o);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return s;
}
var bn = function(n) {
  return function(t) {
    var e, r, i = t;
    try {
      for (var s = E(n), o = s.next(); !o.done; o = s.next()) {
        var u = o.value;
        i = i[u];
      }
    } catch (a) {
      e = {
        error: a
      };
    } finally {
      try {
        o && !o.done && (r = s.return) && r.call(s);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return i;
  };
};
function xn(n, t) {
  return function(e) {
    var r, i, s = e;
    try {
      for (var o = E(n), u = o.next(); !u.done; u = o.next()) {
        var a = u.value;
        s = s[t][a];
      }
    } catch (h) {
      r = {
        error: h
      };
    } finally {
      try {
        u && !u.done && (i = o.return) && i.call(o);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return s;
  };
}
function jt(n) {
  if (!n)
    return [[]];
  if (D(n))
    return [[n]];
  var t = R(Object.keys(n).map(function(e) {
    var r = n[e];
    return typeof r != "string" && (!r || !Object.keys(r).length) ? [[e]] : jt(n[e]).map(function(i) {
      return [e].concat(i);
    });
  }));
  return t;
}
function R(n) {
  var t;
  return (t = []).concat.apply(t, j([], A(n), !1));
}
function Re(n) {
  return gt(n) ? n : [n];
}
function V(n) {
  return n === void 0 ? [] : Re(n);
}
function zt(n, t, e) {
  var r, i;
  if (C(n))
    return n(t, e.data);
  var s = {};
  try {
    for (var o = E(Object.keys(n)), u = o.next(); !u.done; u = o.next()) {
      var a = u.value, h = n[a];
      C(h) ? s[a] = h(t, e.data) : s[a] = h;
    }
  } catch (c) {
    r = {
      error: c
    };
  } finally {
    try {
      u && !u.done && (i = o.return) && i.call(o);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return s;
}
function En(n) {
  return /^(done|error)\./.test(n);
}
function ge(n) {
  return !!(n instanceof Promise || n !== null && (C(n) || typeof n == "object") && C(n.then));
}
function On(n) {
  return n !== null && typeof n == "object" && "transition" in n && typeof n.transition == "function";
}
function An(n, t) {
  var e, r, i = A([[], []], 2), s = i[0], o = i[1];
  try {
    for (var u = E(n), a = u.next(); !a.done; a = u.next()) {
      var h = a.value;
      t(h) ? s.push(h) : o.push(h);
    }
  } catch (c) {
    e = {
      error: c
    };
  } finally {
    try {
      a && !a.done && (r = u.return) && r.call(u);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return [s, o];
}
function Le(n, t) {
  return bt(n.states, function(e, r) {
    if (e) {
      var i = (D(t) ? void 0 : t[r]) || (e ? e.current : void 0);
      if (i)
        return {
          current: i,
          states: Le(e, i)
        };
    }
  });
}
function Mn(n, t) {
  return {
    current: t,
    states: Le(n, t)
  };
}
function me(n, t, e, r) {
  L || H(!!n, "Attempting to update undefined context");
  var i = n && e.reduce(function(s, o) {
    var u, a, h = o.assignment, c = {
      state: r,
      action: o,
      _event: t
    }, f = {};
    if (C(h))
      f = h(s, t.data, c);
    else
      try {
        for (var l = E(Object.keys(h)), v = l.next(); !v.done; v = l.next()) {
          var y = v.value, p = h[y];
          f[y] = C(p) ? p(s, t.data, c) : p;
        }
      } catch (S) {
        u = {
          error: S
        };
      } finally {
        try {
          v && !v.done && (a = l.return) && a.call(l);
        } finally {
          if (u)
            throw u.error;
        }
      }
    return Object.assign({}, s, f);
  }, n);
  return i;
}
var H = function() {
};
L || (H = function(n, t) {
  var e = n instanceof Error ? n : void 0;
  if (!(!e && n) && console !== void 0) {
    var r = ["Warning: ".concat(t)];
    e && r.push(e), console.warn.apply(console, r);
  }
});
function gt(n) {
  return Array.isArray(n);
}
function C(n) {
  return typeof n == "function";
}
function D(n) {
  return typeof n == "string";
}
function ke(n, t) {
  if (n)
    return D(n) ? {
      type: te,
      name: n,
      predicate: t ? t[n] : void 0
    } : C(n) ? {
      type: te,
      name: n.name,
      predicate: n
    } : n;
}
function Dn(n) {
  try {
    return "subscribe" in n && C(n.subscribe);
  } catch {
    return !1;
  }
}
var tt = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
Tt = {}, Tt[tt] = function() {
  return this;
}, Tt[Symbol.observable] = function() {
  return this;
};
function st(n) {
  return !!n && "__xstatenode" in n;
}
function Cn(n) {
  return !!n && typeof n.send == "function";
}
function Kt(n, t) {
  return D(n) || typeof n == "number" ? d({
    type: n
  }, t) : n;
}
function z(n, t) {
  if (!D(n) && "$$type" in n && n.$$type === "scxml")
    return n;
  var e = Kt(n);
  return d({
    name: e.type,
    data: e,
    $$type: "scxml",
    type: "external"
  }, t);
}
function ut(n, t) {
  var e = Re(t).map(function(r) {
    return typeof r > "u" || typeof r == "string" || st(r) ? {
      target: r,
      event: n
    } : d(d({}, r), {
      event: n
    });
  });
  return e;
}
function Nn(n) {
  if (!(n === void 0 || n === wn))
    return V(n);
}
function _n(n, t, e) {
  if (!L) {
    var r = n.stack ? " Stacktrace was '".concat(n.stack, "'") : "";
    if (n === t)
      console.error("Missing onError handler for invocation '".concat(e, "', error was '").concat(n, "'.").concat(r));
    else {
      var i = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e, "'. ") + "Original error: '".concat(n, "'. ").concat(r, " Current error is '").concat(t, "'.").concat(i));
    }
  }
}
function Fe(n, t, e, r, i) {
  var s = n.options.guards, o = {
    state: i,
    cond: t,
    _event: r
  };
  if (t.type === te)
    return ((s == null ? void 0 : s[t.name]) || t.predicate)(e, r.data, o);
  var u = s == null ? void 0 : s[t.type];
  if (!u)
    throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(n.id, "'."));
  return u(e, r.data, o);
}
function Ye(n) {
  return typeof n == "string" ? {
    type: n
  } : n;
}
function Rt(n, t, e) {
  var r = function() {
  }, i = typeof n == "object", s = i ? n : null;
  return {
    next: ((i ? n.next : n) || r).bind(s),
    error: ((i ? n.error : t) || r).bind(s),
    complete: ((i ? n.complete : e) || r).bind(s)
  };
}
function Pt(n, t) {
  return "".concat(n, ":invocation[").concat(t, "]");
}
function ne(n) {
  return (n.type === yt || n.type === _t && n.to === et.Internal) && typeof n.delay != "number";
}
var it = /* @__PURE__ */ z({
  type: _e
});
function Ht(n, t) {
  return t && t[n] || void 0;
}
function pt(n, t) {
  var e;
  if (D(n) || typeof n == "number") {
    var r = Ht(n, t);
    C(r) ? e = {
      type: n,
      exec: r
    } : r ? e = r : e = {
      type: n,
      exec: void 0
    };
  } else if (C(n))
    e = {
      // Convert action to string if unnamed
      type: n.name || n.toString(),
      exec: n
    };
  else {
    var r = Ht(n.type, t);
    if (C(r))
      e = d(d({}, n), {
        exec: r
      });
    else if (r) {
      var i = r.type || n.type;
      e = d(d(d({}, r), n), {
        type: i
      });
    } else
      e = n;
  }
  return e;
}
var Q = function(n, t) {
  if (!n)
    return [];
  var e = gt(n) ? n : [n];
  return e.map(function(r) {
    return pt(r, t);
  });
};
function Jt(n) {
  var t = pt(n);
  return d(d({
    id: D(n) ? n : t.id
  }, t), {
    type: t.type
  });
}
function ze(n, t) {
  return {
    type: yt,
    event: typeof n == "function" ? n : Kt(n),
    delay: t ? t.delay : void 0,
    id: t == null ? void 0 : t.id
  };
}
function He(n, t, e, r) {
  var i = {
    _event: e
  }, s = z(C(n.event) ? n.event(t, e.data, i) : n.event), o;
  if (D(n.delay)) {
    var u = r && r[n.delay];
    o = C(u) ? u(t, e.data, i) : u;
  } else
    o = C(n.delay) ? n.delay(t, e.data, i) : n.delay;
  return d(d({}, n), {
    type: yt,
    _event: s,
    delay: o
  });
}
function ot(n, t) {
  return {
    to: t ? t.to : void 0,
    type: _t,
    event: C(n) ? n : Kt(n),
    delay: t ? t.delay : void 0,
    // TODO: don't auto-generate IDs here like that
    // there is too big chance of the ID collision
    id: t && t.id !== void 0 ? t.id : C(n) ? n.name : je(n)
  };
}
function Ue(n, t, e, r) {
  var i = {
    _event: e
  }, s = z(C(n.event) ? n.event(t, e.data, i) : n.event), o;
  if (D(n.delay)) {
    var u = r && r[n.delay];
    o = C(u) ? u(t, e.data, i) : u;
  } else
    o = C(n.delay) ? n.delay(t, e.data, i) : n.delay;
  var a = C(n.to) ? n.to(t, e.data, i) : n.to;
  return d(d({}, n), {
    to: a,
    _event: s,
    event: s.data,
    delay: o
  });
}
function ce(n, t) {
  return ot(n, d(d({}, t), {
    to: et.Parent
  }));
}
function Tn(n, t, e) {
  return ot(t, d(d({}, e), {
    to: n
  }));
}
function Pn() {
  return ce(Bt);
}
function In(n, t) {
  return ot(n, d(d({}, t), {
    to: function(e, r, i) {
      var s = i._event;
      return s.origin;
    }
  }));
}
var jn = function(n, t) {
  return {
    context: n,
    event: t
  };
};
function Rn(n, t) {
  return n === void 0 && (n = jn), {
    type: Vt,
    label: t,
    expr: n
  };
}
var We = function(n, t, e) {
  return d(d({}, n), {
    value: D(n.expr) ? n.expr : n.expr(t, e.data, {
      _event: e
    })
  });
}, Xe = function(n) {
  return {
    type: ae,
    sendId: n
  };
};
function $e(n) {
  var t = Jt(n);
  return {
    type: N.Start,
    activity: t,
    exec: void 0
  };
}
function Ve(n) {
  var t = C(n) ? n : Jt(n);
  return {
    type: N.Stop,
    activity: t,
    exec: void 0
  };
}
function Be(n, t, e) {
  var r = C(n.activity) ? n.activity(t, e.data) : n.activity, i = typeof r == "string" ? {
    id: r
  } : r, s = {
    type: N.Stop,
    activity: i
  };
  return s;
}
var Ke = function(n) {
  return {
    type: $t,
    assignment: n
  };
};
function Ln(n) {
  return typeof n == "object" && "type" in n;
}
function Je(n, t) {
  var e = t ? "#".concat(t) : "";
  return "".concat(N.After, "(").concat(n, ")").concat(e);
}
function xt(n, t) {
  var e = "".concat(N.DoneState, ".").concat(n), r = {
    type: e,
    data: t
  };
  return r.toString = function() {
    return e;
  }, r;
}
function Mt(n, t) {
  var e = "".concat(N.DoneInvoke, ".").concat(n), r = {
    type: e,
    data: t
  };
  return r.toString = function() {
    return e;
  }, r;
}
function vt(n, t) {
  var e = "".concat(N.ErrorPlatform, ".").concat(n), r = {
    type: e,
    data: t
  };
  return r.toString = function() {
    return e;
  }, r;
}
function kn(n) {
  return {
    type: N.Pure,
    get: n
  };
}
function Fn(n, t) {
  if (!L && (!n || typeof n == "function")) {
    var e = n;
    n = function() {
      for (var r = [], i = 0; i < arguments.length; i++)
        r[i] = arguments[i];
      var s = typeof e == "function" ? e.apply(void 0, j([], A(r), !1)) : e;
      if (!s)
        throw new Error("Attempted to forward event to undefined actor. This risks an infinite loop in the sender.");
      return s;
    };
  }
  return ot(function(r, i) {
    return i;
  }, d(d({}, t), {
    to: n
  }));
}
function Yn(n, t) {
  return ce(function(e, r, i) {
    return {
      type: ue,
      data: C(n) ? n(e, r, i) : n
    };
  }, d(d({}, t), {
    to: et.Parent
  }));
}
function zn(n) {
  return {
    type: N.Choose,
    conds: n
  };
}
var Hn = function(n) {
  var t, e, r = [];
  try {
    for (var i = E(n), s = i.next(); !s.done; s = i.next())
      for (var o = s.value, u = 0; u < o.actions.length; ) {
        if (o.actions[u].type === $t) {
          r.push(o.actions[u]), o.actions.splice(u, 1);
          continue;
        }
        u++;
      }
  } catch (a) {
    t = {
      error: a
    };
  } finally {
    try {
      s && !s.done && (e = i.return) && e.call(i);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return r;
};
function Ct(n, t, e, r, i, s, o) {
  o === void 0 && (o = !1);
  var u = o ? [] : Hn(i), a = u.length ? me(e, r, u, t) : e, h = o ? [e] : void 0, c = [];
  function f(y, p) {
    var S;
    switch (p.type) {
      case yt: {
        var m = He(p, a, r, n.options.delays);
        return s && typeof m.delay == "number" && s(m, a, r), m;
      }
      case _t:
        var g = Ue(p, a, r, n.options.delays);
        if (!L) {
          var w = p.delay;
          H(
            !D(w) || typeof g.delay == "number",
            // tslint:disable-next-line:max-line-length
            "No delay reference for delay expression '".concat(w, "' was found on machine '").concat(n.id, "'")
          );
        }
        return s && g.to !== et.Internal && (y === "entry" ? c.push(g) : s(g, a, r)), g;
      case Vt: {
        var b = We(p, a, r);
        return s == null || s(b, a, r), b;
      }
      case Te: {
        var P = p, _ = (S = P.conds.find(function(nt) {
          var Z = ke(nt.cond, n.options.guards);
          return !Z || Fe(n, Z, a, r, s ? void 0 : t);
        })) === null || S === void 0 ? void 0 : S.actions;
        if (!_)
          return [];
        var M = A(Ct(n, t, a, r, [{
          type: y,
          actions: Q(V(_), n.options.actions)
        }], s, o), 2), T = M[0], O = M[1];
        return a = O, h == null || h.push(a), T;
      }
      case Pe: {
        var _ = p.get(a, r.data);
        if (!_)
          return [];
        var k = A(Ct(n, t, a, r, [{
          type: y,
          actions: Q(V(_), n.options.actions)
        }], s, o), 2), x = k[0], I = k[1];
        return a = I, h == null || h.push(a), x;
      }
      case Xt: {
        var b = Be(p, a, r);
        return s == null || s(b, e, r), b;
      }
      case $t: {
        a = me(a, r, [p], s ? void 0 : t), h == null || h.push(a);
        break;
      }
      default:
        var Y = pt(p, n.options.actions), U = Y.exec;
        if (s)
          s(Y, a, r);
        else if (U && h) {
          var mt = h.length - 1, Gt = d(d({}, Y), {
            exec: function(nt) {
              for (var Z = [], W = 1; W < arguments.length; W++)
                Z[W - 1] = arguments[W];
              U.apply(void 0, j([h[mt]], A(Z), !1));
            }
          });
          Y = Gt;
        }
        return Y;
    }
  }
  function l(y) {
    var p, S, m = [];
    try {
      for (var g = E(y.actions), w = g.next(); !w.done; w = g.next()) {
        var b = w.value, P = f(y.type, b);
        P && (m = m.concat(P));
      }
    } catch (_) {
      p = {
        error: _
      };
    } finally {
      try {
        w && !w.done && (S = g.return) && S.call(g);
      } finally {
        if (p)
          throw p.error;
      }
    }
    return c.forEach(function(_) {
      s(_, a, r);
    }), c.length = 0, m;
  }
  var v = R(i.map(l));
  return [v, a];
}
const Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  actionTypes: mn,
  after: Je,
  assign: Ke,
  cancel: Xe,
  choose: zn,
  done: xt,
  doneInvoke: Mt,
  error: vt,
  escalate: Yn,
  forwardTo: Fn,
  getActionFunction: Ht,
  initEvent: it,
  isActionObject: Ln,
  log: Rn,
  pure: kn,
  raise: ze,
  resolveActions: Ct,
  resolveLog: We,
  resolveRaise: He,
  resolveSend: Ue,
  resolveStop: Be,
  respond: In,
  send: ot,
  sendParent: ce,
  sendTo: Tn,
  sendUpdate: Pn,
  start: $e,
  stop: Ve,
  toActionObject: pt,
  toActionObjects: Q,
  toActivityDefinition: Jt
}, Symbol.toStringTag, { value: "Module" }));
var we = [], ft = function(n, t) {
  we.push(n);
  var e = t(n);
  return we.pop(), e;
};
function Ge(n) {
  var t;
  return t = {
    id: n,
    send: function() {
    },
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    getSnapshot: function() {
    },
    toJSON: function() {
      return {
        id: n
      };
    }
  }, t[tt] = function() {
    return this;
  }, t;
}
function Wn(n, t, e, r) {
  var i, s = Ye(n.src), o = (i = t == null ? void 0 : t.options.services) === null || i === void 0 ? void 0 : i[s.type], u = n.data ? zt(n.data, e, r) : void 0, a = o ? qe(o, n.id, u) : Ge(n.id);
  return a.meta = n, a;
}
function qe(n, t, e) {
  var r = Ge(t);
  if (r.deferred = !0, st(n)) {
    var i = r.state = ft(void 0, function() {
      return (e ? n.withContext(e) : n).initialState;
    });
    r.getSnapshot = function() {
      return i;
    };
  }
  return r;
}
function Xn(n) {
  try {
    return typeof n.send == "function";
  } catch {
    return !1;
  }
}
function $n(n) {
  return Xn(n) && "id" in n;
}
function Vn(n) {
  var t;
  return d((t = {
    subscribe: function() {
      return {
        unsubscribe: function() {
        }
      };
    },
    id: "anonymous",
    getSnapshot: function() {
    }
  }, t[tt] = function() {
    return this;
  }, t), n);
}
var Ut = function(n) {
  return n.type === "atomic" || n.type === "final";
};
function Qe(n) {
  return Object.keys(n.states).map(function(t) {
    return n.states[t];
  });
}
function Nt(n) {
  return Qe(n).filter(function(t) {
    return t.type !== "history";
  });
}
function Ze(n) {
  var t = [n];
  return Ut(n) ? t : t.concat(R(Nt(n).map(Ze)));
}
function Et(n, t) {
  var e, r, i, s, o, u, a, h, c = new Set(n), f = re(c), l = new Set(t);
  try {
    for (var v = E(l), y = v.next(); !y.done; y = v.next())
      for (var p = y.value, S = p.parent; S && !l.has(S); )
        l.add(S), S = S.parent;
  } catch (O) {
    e = {
      error: O
    };
  } finally {
    try {
      y && !y.done && (r = v.return) && r.call(v);
    } finally {
      if (e)
        throw e.error;
    }
  }
  var m = re(l);
  try {
    for (var g = E(l), w = g.next(); !w.done; w = g.next()) {
      var p = w.value;
      if (p.type === "compound" && (!m.get(p) || !m.get(p).length))
        f.get(p) ? f.get(p).forEach(function(k) {
          return l.add(k);
        }) : p.initialStateNodes.forEach(function(k) {
          return l.add(k);
        });
      else if (p.type === "parallel")
        try {
          for (var b = (o = void 0, E(Nt(p))), P = b.next(); !P.done; P = b.next()) {
            var _ = P.value;
            l.has(_) || (l.add(_), f.get(_) ? f.get(_).forEach(function(k) {
              return l.add(k);
            }) : _.initialStateNodes.forEach(function(k) {
              return l.add(k);
            }));
          }
        } catch (k) {
          o = {
            error: k
          };
        } finally {
          try {
            P && !P.done && (u = b.return) && u.call(b);
          } finally {
            if (o)
              throw o.error;
          }
        }
    }
  } catch (O) {
    i = {
      error: O
    };
  } finally {
    try {
      w && !w.done && (s = g.return) && s.call(g);
    } finally {
      if (i)
        throw i.error;
    }
  }
  try {
    for (var M = E(l), T = M.next(); !T.done; T = M.next())
      for (var p = T.value, S = p.parent; S && !l.has(S); )
        l.add(S), S = S.parent;
  } catch (O) {
    a = {
      error: O
    };
  } finally {
    try {
      T && !T.done && (h = M.return) && h.call(M);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return l;
}
function tn(n, t) {
  var e = t.get(n);
  if (!e)
    return {};
  if (n.type === "compound") {
    var r = e[0];
    if (r) {
      if (Ut(r))
        return r.key;
    } else
      return {};
  }
  var i = {};
  return e.forEach(function(s) {
    i[s.key] = tn(s, t);
  }), i;
}
function re(n) {
  var t, e, r = /* @__PURE__ */ new Map();
  try {
    for (var i = E(n), s = i.next(); !s.done; s = i.next()) {
      var o = s.value;
      r.has(o) || r.set(o, []), o.parent && (r.has(o.parent) || r.set(o.parent, []), r.get(o.parent).push(o));
    }
  } catch (u) {
    t = {
      error: u
    };
  } finally {
    try {
      s && !s.done && (e = i.return) && e.call(i);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return r;
}
function Bn(n, t) {
  var e = Et([n], t);
  return tn(n, re(e));
}
function Ot(n, t) {
  return Array.isArray(n) ? n.some(function(e) {
    return e === t;
  }) : n instanceof Set ? n.has(t) : !1;
}
function Kn(n) {
  return j([], A(new Set(R(j([], A(n.map(function(t) {
    return t.ownEvents;
  })), !1)))), !1);
}
function Lt(n, t) {
  return t.type === "compound" ? Nt(t).some(function(e) {
    return e.type === "final" && Ot(n, e);
  }) : t.type === "parallel" ? Nt(t).every(function(e) {
    return Lt(n, e);
  }) : !1;
}
function Jn(n) {
  return n === void 0 && (n = []), n.reduce(function(t, e) {
    return e.meta !== void 0 && (t[e.id] = e.meta), t;
  }, {});
}
function Se(n) {
  return new Set(R(n.map(function(t) {
    return t.tags;
  })));
}
function en(n, t) {
  if (n === t)
    return !0;
  if (n === void 0 || t === void 0)
    return !1;
  if (D(n) || D(t))
    return n === t;
  var e = Object.keys(n), r = Object.keys(t);
  return e.length === r.length && e.every(function(i) {
    return en(n[i], t[i]);
  });
}
function Gn(n) {
  return typeof n != "object" || n === null ? !1 : "value" in n && "_event" in n;
}
function qn(n, t) {
  var e = n.exec, r = d(d({}, n), {
    exec: e !== void 0 ? function() {
      return e(t.context, t.event, {
        action: n,
        state: t,
        _event: t._event
      });
    } : void 0
  });
  return r;
}
var J = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t) {
      var e = this, r;
      this.actions = [], this.activities = pe, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || pe, this.meta = Jn(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (r = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set(), this.machine = t.machine, Object.defineProperty(this, "nextEvents", {
        get: function() {
          return Kn(e.configuration);
        }
      });
    }
    return n.from = function(t, e) {
      if (t instanceof n)
        return t.context !== e ? new n({
          value: t.value,
          context: e,
          _event: t._event,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          actions: [],
          activities: t.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        }) : t;
      var r = it;
      return new n({
        value: t,
        context: e,
        _event: r,
        _sessionid: null,
        historyValue: void 0,
        history: void 0,
        actions: [],
        activities: void 0,
        meta: void 0,
        events: [],
        configuration: [],
        transitions: [],
        children: {}
      });
    }, n.create = function(t) {
      return new n(t);
    }, n.inert = function(t, e) {
      if (t instanceof n) {
        if (!t.actions.length)
          return t;
        var r = it;
        return new n({
          value: t.value,
          context: e,
          _event: r,
          _sessionid: null,
          historyValue: t.historyValue,
          history: t.history,
          activities: t.activities,
          configuration: t.configuration,
          transitions: [],
          children: {}
        });
      }
      return n.from(t, e);
    }, n.prototype.toStrings = function(t, e) {
      var r = this;
      if (t === void 0 && (t = this.value), e === void 0 && (e = "."), D(t))
        return [t];
      var i = Object.keys(t);
      return i.concat.apply(i, j([], A(i.map(function(s) {
        return r.toStrings(t[s], e).map(function(o) {
          return s + e + o;
        });
      })), !1));
    }, n.prototype.toJSON = function() {
      var t = this;
      t.configuration, t.transitions;
      var e = t.tags;
      t.machine;
      var r = oe(t, ["configuration", "transitions", "tags", "machine"]);
      return d(d({}, r), {
        tags: Array.from(e)
      });
    }, n.prototype.matches = function(t) {
      return he(t, this.value);
    }, n.prototype.hasTag = function(t) {
      return this.tags.has(t);
    }, n.prototype.can = function(t) {
      var e;
      L && H(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
      var r = (e = this.machine) === null || e === void 0 ? void 0 : e.getTransitionData(this, t);
      return !!(r != null && r.transitions.length) && // Check that at least one transition is not forbidden
      r.transitions.some(function(i) {
        return i.target !== void 0 || i.actions.length;
      });
    }, n;
  }()
), Qn = {
  deferEvents: !1
}, be = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t) {
      this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = d(d({}, Qn), t);
    }
    return n.prototype.initialize = function(t) {
      if (this.initialized = !0, t) {
        if (!this.options.deferEvents) {
          this.schedule(t);
          return;
        }
        this.process(t);
      }
      this.flushEvents();
    }, n.prototype.schedule = function(t) {
      if (!this.initialized || this.processingEvent) {
        this.queue.push(t);
        return;
      }
      if (this.queue.length !== 0)
        throw new Error("Event queue should be empty when it is not processing events");
      this.process(t), this.flushEvents();
    }, n.prototype.clear = function() {
      this.queue = [];
    }, n.prototype.flushEvents = function() {
      for (var t = this.queue.shift(); t; )
        this.process(t), t = this.queue.shift();
    }, n.prototype.process = function(t) {
      this.processingEvent = !0;
      try {
        t();
      } catch (e) {
        throw this.clear(), e;
      } finally {
        this.processingEvent = !1;
      }
    }, n;
  }()
), qt = /* @__PURE__ */ new Map(), Zn = 0, wt = {
  bookId: function() {
    return "x:".concat(Zn++);
  },
  register: function(n, t) {
    return qt.set(n, t), n;
  },
  get: function(n) {
    return qt.get(n);
  },
  free: function(n) {
    qt.delete(n);
  }
};
function le() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  L || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
function tr() {
  var n = le();
  if (n && "__xstate__" in n)
    return n.__xstate__;
}
function er(n) {
  if (le()) {
    var t = tr();
    t && t.register(n);
  }
}
function nr(n, t) {
  t === void 0 && (t = {});
  var e = n.initialState, r = /* @__PURE__ */ new Set(), i = [], s = !1, o = function() {
    if (!s) {
      for (s = !0; i.length > 0; ) {
        var h = i.shift();
        e = n.transition(e, h, a), r.forEach(function(c) {
          return c.next(e);
        });
      }
      s = !1;
    }
  }, u = Vn({
    id: t.id,
    send: function(h) {
      i.push(h), o();
    },
    getSnapshot: function() {
      return e;
    },
    subscribe: function(h, c, f) {
      var l = Rt(h, c, f);
      return r.add(l), l.next(e), {
        unsubscribe: function() {
          r.delete(l);
        }
      };
    }
  }), a = {
    parent: t.parent,
    self: u,
    id: t.id || "anonymous",
    observers: r
  };
  return e = n.start ? n.start(a) : e, u;
}
var rr = {
  sync: !1,
  autoForward: !1
}, F;
(function(n) {
  n[n.NotStarted = 0] = "NotStarted", n[n.Running = 1] = "Running", n[n.Stopped = 2] = "Stopped";
})(F || (F = {}));
var ir = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t, e) {
      e === void 0 && (e = n.defaultOptions);
      var r = this;
      this.machine = t, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = !1, this.status = F.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(c, f) {
        if (gt(c))
          return r.batch(c), r.state;
        var l = z(Kt(c, f));
        if (r.status === F.Stopped)
          return L || H(!1, 'Event "'.concat(l.name, '" was sent to stopped service "').concat(r.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(l.data))), r.state;
        if (r.status !== F.Running && !r.options.deferEvents)
          throw new Error('Event "'.concat(l.name, '" was sent to uninitialized service "').concat(
            r.machine.id,
            `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `
          ).concat(JSON.stringify(l.data)));
        return r.scheduler.schedule(function() {
          r.forward(l);
          var v = r._nextState(l);
          r.update(v, l);
        }), r._state;
      }, this.sendTo = function(c, f, l) {
        var v = r.parent && (f === et.Parent || r.parent.id === f), y = v ? r.parent : D(f) ? f === et.Internal ? r : r.children.get(f) || wt.get(f) : Cn(f) ? f : void 0;
        if (!y) {
          if (!v)
            throw new Error("Unable to send event to child '".concat(f, "' from service '").concat(r.id, "'."));
          L || H(!1, "Service '".concat(r.id, "' has no parent: unable to send event ").concat(c.type));
          return;
        }
        if ("machine" in y) {
          if (r.status !== F.Stopped || r.parent !== y || // we need to send events to the parent from exit handlers of a machine that reached its final state
          r.state.done) {
            var p = d(d({}, c), {
              name: c.name === ue ? "".concat(vt(r.id)) : c.name,
              origin: r.sessionId
            });
            !l && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([y, p]) : y.send(p);
          }
        } else
          !l && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([y, c.data]) : y.send(c.data);
      }, this._exec = function(c, f, l, v) {
        v === void 0 && (v = r.machine.options.actions);
        var y = c.exec || Ht(c.type, v), p = C(y) ? y : y ? y.exec : c.exec;
        if (p)
          try {
            return p(f, l.data, r.machine.config.predictableActionArguments ? {
              action: c,
              _event: l
            } : {
              action: c,
              state: r.state,
              _event: l
            });
          } catch (U) {
            throw r.parent && r.parent.send({
              type: "xstate.error",
              data: U
            }), U;
          }
        switch (c.type) {
          case yt: {
            var S = c;
            r.defer(S);
            break;
          }
          case _t:
            var m = c;
            if (typeof m.delay == "number") {
              r.defer(m);
              return;
            } else
              m.to ? r.sendTo(m._event, m.to, l === it) : r.send(m._event);
            break;
          case ae:
            r.cancel(c.sendId);
            break;
          case kt: {
            if (r.status !== F.Running)
              return;
            var g = c.activity;
            if (
              // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
              !r.machine.config.predictableActionArguments && !r.state.activities[g.id || g.type]
            )
              break;
            if (g.type === N.Invoke) {
              var w = Ye(g.src), b = r.machine.options.services ? r.machine.options.services[w.type] : void 0, P = g.id, _ = g.data;
              L || H(
                !("forward" in g),
                // tslint:disable-next-line:max-line-length
                "`forward` property is deprecated (found in invocation of '".concat(g.src, "' in in machine '").concat(r.machine.id, "'). ") + "Please use `autoForward` instead."
              );
              var M = "autoForward" in g ? g.autoForward : !!g.forward;
              if (!b) {
                L || H(!1, "No service found for invocation '".concat(g.src, "' in machine '").concat(r.machine.id, "'."));
                return;
              }
              var T = _ ? zt(_, f, l) : void 0;
              if (typeof b == "string")
                return;
              var O = C(b) ? b(f, l.data, {
                data: T,
                src: w,
                meta: g.meta
              }) : b;
              if (!O)
                return;
              var k = void 0;
              st(O) && (O = T ? O.withContext(T) : O, k = {
                autoForward: M
              }), r.spawn(O, P, k);
            } else
              r.spawnActivity(g);
            break;
          }
          case Xt: {
            r.stopChild(c.activity.id);
            break;
          }
          case Vt:
            var x = c, I = x.label, Y = x.value;
            I ? r.logger(I, Y) : r.logger(Y);
            break;
          default:
            L || H(!1, "No implementation found for action type '".concat(c.type, "'"));
            break;
        }
      };
      var i = d(d({}, n.defaultOptions), e), s = i.clock, o = i.logger, u = i.parent, a = i.id, h = a !== void 0 ? a : t.id;
      this.id = h, this.logger = o, this.clock = s, this.parent = u, this.options = i, this.scheduler = new be({
        deferEvents: this.options.deferEvents
      }), this.sessionId = wt.bookId();
    }
    return Object.defineProperty(n.prototype, "initialState", {
      get: function() {
        var t = this;
        return this._initialState ? this._initialState : ft(this, function() {
          return t._initialState = t.machine.initialState, t._initialState;
        });
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "state", {
      /**
       * @deprecated Use `.getSnapshot()` instead.
       */
      get: function() {
        return L || H(this.status !== F.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.execute = function(t, e) {
      var r, i;
      try {
        for (var s = E(t.actions), o = s.next(); !o.done; o = s.next()) {
          var u = o.value;
          this.exec(u, t, e);
        }
      } catch (a) {
        r = {
          error: a
        };
      } finally {
        try {
          o && !o.done && (i = s.return) && i.call(s);
        } finally {
          if (r)
            throw r.error;
        }
      }
    }, n.prototype.update = function(t, e) {
      var r, i, s, o, u, a, h, c, f = this;
      if (t._sessionid = this.sessionId, this._state = t, (!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
      // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
      e === it) && this.options.execute)
        this.execute(this.state);
      else
        for (var l = void 0; l = this._outgoingQueue.shift(); )
          l[0].send(l[1]);
      if (this.children.forEach(function(O) {
        f.state.children[O.id] = O;
      }), this.devTools && this.devTools.send(e.data, t), t.event)
        try {
          for (var v = E(this.eventListeners), y = v.next(); !y.done; y = v.next()) {
            var p = y.value;
            p(t.event);
          }
        } catch (O) {
          r = {
            error: O
          };
        } finally {
          try {
            y && !y.done && (i = v.return) && i.call(v);
          } finally {
            if (r)
              throw r.error;
          }
        }
      try {
        for (var S = E(this.listeners), m = S.next(); !m.done; m = S.next()) {
          var p = m.value;
          p(t, t.event);
        }
      } catch (O) {
        s = {
          error: O
        };
      } finally {
        try {
          m && !m.done && (o = S.return) && o.call(S);
        } finally {
          if (s)
            throw s.error;
        }
      }
      try {
        for (var g = E(this.contextListeners), w = g.next(); !w.done; w = g.next()) {
          var b = w.value;
          b(this.state.context, this.state.history ? this.state.history.context : void 0);
        }
      } catch (O) {
        u = {
          error: O
        };
      } finally {
        try {
          w && !w.done && (a = g.return) && a.call(g);
        } finally {
          if (u)
            throw u.error;
        }
      }
      if (this.state.done) {
        var P = t.configuration.find(function(O) {
          return O.type === "final" && O.parent === f.machine;
        }), _ = P && P.doneData ? zt(P.doneData, t.context, e) : void 0;
        this._doneEvent = Mt(this.id, _);
        try {
          for (var M = E(this.doneListeners), T = M.next(); !T.done; T = M.next()) {
            var p = T.value;
            p(this._doneEvent);
          }
        } catch (O) {
          h = {
            error: O
          };
        } finally {
          try {
            T && !T.done && (c = M.return) && c.call(M);
          } finally {
            if (h)
              throw h.error;
          }
        }
        this._stop(), this._stopChildren(), wt.free(this.sessionId);
      }
    }, n.prototype.onTransition = function(t) {
      return this.listeners.add(t), this.status === F.Running && t(this.state, this.state.event), this;
    }, n.prototype.subscribe = function(t, e, r) {
      var i = this, s = Rt(t, e, r);
      this.listeners.add(s.next), this.status !== F.NotStarted && s.next(this.state);
      var o = function() {
        i.doneListeners.delete(o), i.stopListeners.delete(o), s.complete();
      };
      return this.status === F.Stopped ? s.complete() : (this.onDone(o), this.onStop(o)), {
        unsubscribe: function() {
          i.listeners.delete(s.next), i.doneListeners.delete(o), i.stopListeners.delete(o);
        }
      };
    }, n.prototype.onEvent = function(t) {
      return this.eventListeners.add(t), this;
    }, n.prototype.onSend = function(t) {
      return this.sendListeners.add(t), this;
    }, n.prototype.onChange = function(t) {
      return this.contextListeners.add(t), this;
    }, n.prototype.onStop = function(t) {
      return this.stopListeners.add(t), this;
    }, n.prototype.onDone = function(t) {
      return this.status === F.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t), this;
    }, n.prototype.off = function(t) {
      return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this;
    }, n.prototype.start = function(t) {
      var e = this;
      if (this.status === F.Running)
        return this;
      this.machine._init(), wt.register(this.sessionId, this), this.initialized = !0, this.status = F.Running;
      var r = t === void 0 ? this.initialState : ft(this, function() {
        return Gn(t) ? e.machine.resolveState(t) : e.machine.resolveState(J.from(t, e.machine.context));
      });
      return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
        e.update(r, it);
      }), this;
    }, n.prototype._stopChildren = function() {
      this.children.forEach(function(t) {
        C(t.stop) && t.stop();
      }), this.children.clear();
    }, n.prototype._stop = function() {
      var t, e, r, i, s, o, u, a, h, c;
      try {
        for (var f = E(this.listeners), l = f.next(); !l.done; l = f.next()) {
          var v = l.value;
          this.listeners.delete(v);
        }
      } catch (M) {
        t = {
          error: M
        };
      } finally {
        try {
          l && !l.done && (e = f.return) && e.call(f);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var y = E(this.stopListeners), p = y.next(); !p.done; p = y.next()) {
          var v = p.value;
          v(), this.stopListeners.delete(v);
        }
      } catch (M) {
        r = {
          error: M
        };
      } finally {
        try {
          p && !p.done && (i = y.return) && i.call(y);
        } finally {
          if (r)
            throw r.error;
        }
      }
      try {
        for (var S = E(this.contextListeners), m = S.next(); !m.done; m = S.next()) {
          var v = m.value;
          this.contextListeners.delete(v);
        }
      } catch (M) {
        s = {
          error: M
        };
      } finally {
        try {
          m && !m.done && (o = S.return) && o.call(S);
        } finally {
          if (s)
            throw s.error;
        }
      }
      try {
        for (var g = E(this.doneListeners), w = g.next(); !w.done; w = g.next()) {
          var v = w.value;
          this.doneListeners.delete(v);
        }
      } catch (M) {
        u = {
          error: M
        };
      } finally {
        try {
          w && !w.done && (a = g.return) && a.call(g);
        } finally {
          if (u)
            throw u.error;
        }
      }
      if (!this.initialized)
        return this;
      this.initialized = !1, this.status = F.Stopped, this._initialState = void 0;
      try {
        for (var b = E(Object.keys(this.delayedEventsMap)), P = b.next(); !P.done; P = b.next()) {
          var _ = P.value;
          this.clock.clearTimeout(this.delayedEventsMap[_]);
        }
      } catch (M) {
        h = {
          error: M
        };
      } finally {
        try {
          P && !P.done && (c = b.return) && c.call(b);
        } finally {
          if (h)
            throw h.error;
        }
      }
      this.scheduler.clear(), this.scheduler = new be({
        deferEvents: this.options.deferEvents
      });
    }, n.prototype.stop = function() {
      var t = this, e = this.scheduler;
      return this._stop(), e.schedule(function() {
        var r;
        if (!(!((r = t._state) === null || r === void 0) && r.done)) {
          var i = z({
            type: "xstate.stop"
          }), s = ft(t, function() {
            var o = R(j([], A(t.state.configuration), !1).sort(function(f, l) {
              return l.order - f.order;
            }).map(function(f) {
              return Q(f.onExit, t.machine.options.actions);
            })), u = A(Ct(t.machine, t.state, t.state.context, i, [{
              type: "exit",
              actions: o
            }], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2), a = u[0], h = u[1], c = new J({
              value: t.state.value,
              context: h,
              _event: i,
              _sessionid: t.sessionId,
              historyValue: void 0,
              history: t.state,
              actions: a.filter(function(f) {
                return !ne(f);
              }),
              activities: {},
              events: [],
              configuration: [],
              transitions: [],
              children: {},
              done: t.state.done,
              tags: t.state.tags,
              machine: t.machine
            });
            return c.changed = !0, c;
          });
          t.update(s, i), t._stopChildren(), wt.free(t.sessionId);
        }
      }), this;
    }, n.prototype.batch = function(t) {
      var e = this;
      if (this.status === F.NotStarted && this.options.deferEvents)
        L || H(!1, "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
      else if (this.status !== F.Running)
        throw new Error(
          // tslint:disable-next-line:max-line-length
          "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
        );
      if (t.length) {
        var r = !!this.machine.config.predictableActionArguments && this._exec;
        this.scheduler.schedule(function() {
          var i, s, o = e.state, u = !1, a = [], h = function(v) {
            var y = z(v);
            e.forward(y), o = ft(e, function() {
              return e.machine.transition(o, y, void 0, r || void 0);
            }), a.push.apply(a, j([], A(e.machine.config.predictableActionArguments ? o.actions : o.actions.map(function(p) {
              return qn(p, o);
            })), !1)), u = u || !!o.changed;
          };
          try {
            for (var c = E(t), f = c.next(); !f.done; f = c.next()) {
              var l = f.value;
              h(l);
            }
          } catch (v) {
            i = {
              error: v
            };
          } finally {
            try {
              f && !f.done && (s = c.return) && s.call(c);
            } finally {
              if (i)
                throw i.error;
            }
          }
          o.changed = u, o.actions = a, e.update(o, z(t[t.length - 1]));
        });
      }
    }, n.prototype.sender = function(t) {
      return this.send.bind(this, t);
    }, n.prototype._nextState = function(t, e) {
      var r = this;
      e === void 0 && (e = !!this.machine.config.predictableActionArguments && this._exec);
      var i = z(t);
      if (i.name.indexOf(Zt) === 0 && !this.state.nextEvents.some(function(o) {
        return o.indexOf(Zt) === 0;
      }))
        throw i.data.data;
      var s = ft(this, function() {
        return r.machine.transition(r.state, i, void 0, e || void 0);
      });
      return s;
    }, n.prototype.nextState = function(t) {
      return this._nextState(t, !1);
    }, n.prototype.forward = function(t) {
      var e, r;
      try {
        for (var i = E(this.forwardTo), s = i.next(); !s.done; s = i.next()) {
          var o = s.value, u = this.children.get(o);
          if (!u)
            throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(o, "'."));
          u.send(t);
        }
      } catch (a) {
        e = {
          error: a
        };
      } finally {
        try {
          s && !s.done && (r = i.return) && r.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
    }, n.prototype.defer = function(t) {
      var e = this, r = this.clock.setTimeout(function() {
        "to" in t && t.to ? e.sendTo(t._event, t.to, !0) : e.send(t._event);
      }, t.delay);
      t.id && (this.delayedEventsMap[t.id] = r);
    }, n.prototype.cancel = function(t) {
      this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t];
    }, n.prototype.exec = function(t, e, r) {
      r === void 0 && (r = this.machine.options.actions), this._exec(t, e.context, e._event, r);
    }, n.prototype.removeChild = function(t) {
      var e;
      this.children.delete(t), this.forwardTo.delete(t), (e = this.state) === null || e === void 0 || delete e.children[t];
    }, n.prototype.stopChild = function(t) {
      var e = this.children.get(t);
      e && (this.removeChild(t), C(e.stop) && e.stop());
    }, n.prototype.spawn = function(t, e, r) {
      if (this.status !== F.Running)
        return qe(t, e);
      if (ge(t))
        return this.spawnPromise(Promise.resolve(t), e);
      if (C(t))
        return this.spawnCallback(t, e);
      if ($n(t))
        return this.spawnActor(t, e);
      if (Dn(t))
        return this.spawnObservable(t, e);
      if (st(t))
        return this.spawnMachine(t, d(d({}, r), {
          id: e
        }));
      if (On(t))
        return this.spawnBehavior(t, e);
      throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof t, '".'));
    }, n.prototype.spawnMachine = function(t, e) {
      var r = this;
      e === void 0 && (e = {});
      var i = new n(t, d(d({}, this.options), {
        parent: this,
        id: e.id || t.id
      })), s = d(d({}, rr), e);
      s.sync && i.onTransition(function(u) {
        r.send(Bt, {
          state: u,
          id: i.id
        });
      });
      var o = i;
      return this.children.set(i.id, o), s.autoForward && this.forwardTo.add(i.id), i.onDone(function(u) {
        r.removeChild(i.id), r.send(z(u, {
          origin: i.id
        }));
      }).start(), o;
    }, n.prototype.spawnBehavior = function(t, e) {
      var r = nr(t, {
        id: e,
        parent: this
      });
      return this.children.set(e, r), r;
    }, n.prototype.spawnPromise = function(t, e) {
      var r, i = this, s = !1, o;
      t.then(function(a) {
        s || (o = a, i.removeChild(e), i.send(z(Mt(e, a), {
          origin: e
        })));
      }, function(a) {
        if (!s) {
          i.removeChild(e);
          var h = vt(e, a);
          try {
            i.send(z(h, {
              origin: e
            }));
          } catch (c) {
            _n(a, c, e), i.devTools && i.devTools.send(h, i.state), i.machine.strict && i.stop();
          }
        }
      });
      var u = (r = {
        id: e,
        send: function() {
        },
        subscribe: function(a, h, c) {
          var f = Rt(a, h, c), l = !1;
          return t.then(function(v) {
            l || (f.next(v), !l && f.complete());
          }, function(v) {
            l || f.error(v);
          }), {
            unsubscribe: function() {
              return l = !0;
            }
          };
        },
        stop: function() {
          s = !0;
        },
        toJSON: function() {
          return {
            id: e
          };
        },
        getSnapshot: function() {
          return o;
        }
      }, r[tt] = function() {
        return this;
      }, r);
      return this.children.set(e, u), u;
    }, n.prototype.spawnCallback = function(t, e) {
      var r, i = this, s = !1, o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), a, h = function(l) {
        a = l, u.forEach(function(v) {
          return v(l);
        }), !s && i.send(z(l, {
          origin: e
        }));
      }, c;
      try {
        c = t(h, function(l) {
          o.add(l);
        });
      } catch (l) {
        this.send(vt(e, l));
      }
      if (ge(c))
        return this.spawnPromise(c, e);
      var f = (r = {
        id: e,
        send: function(l) {
          return o.forEach(function(v) {
            return v(l);
          });
        },
        subscribe: function(l) {
          var v = Rt(l);
          return u.add(v.next), {
            unsubscribe: function() {
              u.delete(v.next);
            }
          };
        },
        stop: function() {
          s = !0, C(c) && c();
        },
        toJSON: function() {
          return {
            id: e
          };
        },
        getSnapshot: function() {
          return a;
        }
      }, r[tt] = function() {
        return this;
      }, r);
      return this.children.set(e, f), f;
    }, n.prototype.spawnObservable = function(t, e) {
      var r, i = this, s, o = t.subscribe(function(a) {
        s = a, i.send(z(a, {
          origin: e
        }));
      }, function(a) {
        i.removeChild(e), i.send(z(vt(e, a), {
          origin: e
        }));
      }, function() {
        i.removeChild(e), i.send(z(Mt(e), {
          origin: e
        }));
      }), u = (r = {
        id: e,
        send: function() {
        },
        subscribe: function(a, h, c) {
          return t.subscribe(a, h, c);
        },
        stop: function() {
          return o.unsubscribe();
        },
        getSnapshot: function() {
          return s;
        },
        toJSON: function() {
          return {
            id: e
          };
        }
      }, r[tt] = function() {
        return this;
      }, r);
      return this.children.set(e, u), u;
    }, n.prototype.spawnActor = function(t, e) {
      return this.children.set(e, t), t;
    }, n.prototype.spawnActivity = function(t) {
      var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
      if (!e) {
        L || H(!1, "No implementation found for activity '".concat(t.type, "'"));
        return;
      }
      var r = e(this.state.context, t);
      this.spawnEffect(t.id, r);
    }, n.prototype.spawnEffect = function(t, e) {
      var r;
      this.children.set(t, (r = {
        id: t,
        send: function() {
        },
        subscribe: function() {
          return {
            unsubscribe: function() {
            }
          };
        },
        stop: e || void 0,
        getSnapshot: function() {
        },
        toJSON: function() {
          return {
            id: t
          };
        }
      }, r[tt] = function() {
        return this;
      }, r));
    }, n.prototype.attachDev = function() {
      var t = le();
      if (this.options.devTools && t) {
        if (t.__REDUX_DEVTOOLS_EXTENSION__) {
          var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
          this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(d(d({
            name: this.id,
            autoPause: !0,
            stateSanitizer: function(r) {
              return {
                value: r.value,
                context: r.context,
                actions: r.actions
              };
            }
          }, e), {
            features: d({
              jump: !1,
              skip: !1
            }, e ? e.features : void 0)
          }), this.machine), this.devTools.init(this.state);
        }
        er(this);
      }
    }, n.prototype.toJSON = function() {
      return {
        id: this.id
      };
    }, n.prototype[tt] = function() {
      return this;
    }, n.prototype.getSnapshot = function() {
      return this.status === F.NotStarted ? this.initialState : this._state;
    }, n.defaultOptions = {
      execute: !0,
      deferEvents: !0,
      clock: {
        setTimeout: function(t, e) {
          return setTimeout(t, e);
        },
        clearTimeout: function(t) {
          return clearTimeout(t);
        }
      },
      logger: /* @__PURE__ */ console.log.bind(console),
      devTools: !1
    }, n.interpret = nn, n;
  }()
);
function nn(n, t) {
  var e = new ir(n, t);
  return e;
}
function sr(n) {
  if (typeof n == "string") {
    var t = {
      type: n
    };
    return t.toString = function() {
      return n;
    }, t;
  }
  return n;
}
function It(n) {
  return d(d({
    type: Ft
  }, n), {
    toJSON: function() {
      n.onDone, n.onError;
      var t = oe(n, ["onDone", "onError"]);
      return d(d({}, t), {
        type: Ft,
        src: sr(n.src)
      });
    }
  });
}
var dt = "", ie = "#", St = "*", ht = {}, ct = function(n) {
  return n[0] === ie;
}, or = function() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
}, ar = function(n, t, e) {
  var r = e.slice(0, -1).some(function(s) {
    return !("cond" in s) && !("in" in s) && (D(s.target) || st(s.target));
  }), i = t === dt ? "the transient event" : "event '".concat(t, "'");
  H(!r, "One or more transitions for ".concat(i, " on state '").concat(n.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, ur = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t, e, r, i) {
      r === void 0 && (r = "context" in t ? t.context : void 0);
      var s = this, o;
      this.config = t, this._context = r, this.order = -1, this.__xstatenode = !0, this.__cache = {
        events: void 0,
        relativeValue: /* @__PURE__ */ new Map(),
        initialStateValue: void 0,
        initialState: void 0,
        on: void 0,
        transitions: void 0,
        candidates: {},
        delayedTransitions: void 0
      }, this.idMap = {}, this.tags = [], this.options = Object.assign(or(), e), this.parent = i == null ? void 0 : i.parent, this.key = this.config.key || (i == null ? void 0 : i.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Ie), this.id = this.config.id || j([this.machine.key], A(this.path), !1).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (o = this.config.schema) !== null && o !== void 0 ? o : {}, this.description = this.config.description, L || H(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? bt(this.config.states, function(h, c) {
        var f, l = new n(h, {}, void 0, {
          parent: s,
          key: c
        });
        return Object.assign(s.idMap, d((f = {}, f[l.id] = l, f), l.idMap)), l;
      }) : ht;
      var u = 0;
      function a(h) {
        var c, f;
        h.order = u++;
        try {
          for (var l = E(Qe(h)), v = l.next(); !v.done; v = l.next()) {
            var y = v.value;
            a(y);
          }
        } catch (p) {
          c = {
            error: p
          };
        } finally {
          try {
            v && !v.done && (f = l.return) && f.call(l);
          } finally {
            if (c)
              throw c.error;
          }
        }
      }
      a(this), this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(h) {
        var c = h.event;
        return c === dt;
      }) : dt in this.config.on : !1), this.strict = !!this.config.strict, this.onEntry = V(this.config.entry || this.config.onEntry).map(function(h) {
        return pt(h);
      }), this.onExit = V(this.config.exit || this.config.onExit).map(function(h) {
        return pt(h);
      }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = V(this.config.invoke).map(function(h, c) {
        var f, l;
        if (st(h)) {
          var v = Pt(s.id, c);
          return s.machine.options.services = d((f = {}, f[v] = h, f), s.machine.options.services), It({
            src: v,
            id: v
          });
        } else if (D(h.src)) {
          var v = h.id || Pt(s.id, c);
          return It(d(d({}, h), {
            id: v,
            src: h.src
          }));
        } else if (st(h.src) || C(h.src)) {
          var v = h.id || Pt(s.id, c);
          return s.machine.options.services = d((l = {}, l[v] = h.src, l), s.machine.options.services), It(d(d({
            id: v
          }, h), {
            src: v
          }));
        } else {
          var y = h.src;
          return It(d(d({
            id: Pt(s.id, c)
          }, h), {
            src: y
          }));
        }
      }), this.activities = V(this.config.activities).concat(this.invoke).map(function(h) {
        return Jt(h);
      }), this.transition = this.transition.bind(this), this.tags = V(this.config.tags);
    }
    return n.prototype._init = function() {
      this.__cache.transitions || Ze(this).forEach(function(t) {
        return t.on;
      });
    }, n.prototype.withConfig = function(t, e) {
      var r = this.options, i = r.actions, s = r.activities, o = r.guards, u = r.services, a = r.delays;
      return new n(this.config, {
        actions: d(d({}, i), t.actions),
        activities: d(d({}, s), t.activities),
        guards: d(d({}, o), t.guards),
        services: d(d({}, u), t.services),
        delays: d(d({}, a), t.delays)
      }, e ?? this.context);
    }, n.prototype.withContext = function(t) {
      return new n(this.config, this.options, t);
    }, Object.defineProperty(n.prototype, "context", {
      get: function() {
        return C(this._context) ? this._context() : this._context;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "definition", {
      /**
       * The well-structured state node definition.
       */
      get: function() {
        return {
          id: this.id,
          key: this.key,
          version: this.version,
          context: this.context,
          type: this.type,
          initial: this.initial,
          history: this.history,
          states: bt(this.states, function(t) {
            return t.definition;
          }),
          on: this.on,
          transitions: this.transitions,
          entry: this.onEntry,
          exit: this.onExit,
          activities: this.activities || [],
          meta: this.meta,
          order: this.order || -1,
          data: this.doneData,
          invoke: this.invoke,
          description: this.description,
          tags: this.tags
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.toJSON = function() {
      return this.definition;
    }, Object.defineProperty(n.prototype, "on", {
      /**
       * The mapping of events to transitions.
       */
      get: function() {
        if (this.__cache.on)
          return this.__cache.on;
        var t = this.transitions;
        return this.__cache.on = t.reduce(function(e, r) {
          return e[r.eventType] = e[r.eventType] || [], e[r.eventType].push(r), e;
        }, {});
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "after", {
      get: function() {
        return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "transitions", {
      /**
       * All the transitions that can be taken from this state node.
       */
      get: function() {
        return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.getCandidates = function(t) {
      if (this.__cache.candidates[t])
        return this.__cache.candidates[t];
      var e = t === dt, r = this.transitions.filter(function(i) {
        var s = i.eventType === t;
        return e ? s : s || i.eventType === St;
      });
      return this.__cache.candidates[t] = r, r;
    }, n.prototype.getDelayedTransitions = function() {
      var t = this, e = this.config.after;
      if (!e)
        return [];
      var r = function(s, o) {
        var u = C(s) ? "".concat(t.id, ":delay[").concat(o, "]") : s, a = Je(u, t.id);
        return t.onEntry.push(ot(a, {
          delay: s
        })), t.onExit.push(Xe(a)), a;
      }, i = gt(e) ? e.map(function(s, o) {
        var u = r(s.delay, o);
        return d(d({}, s), {
          event: u
        });
      }) : R(Object.keys(e).map(function(s, o) {
        var u = e[s], a = D(u) ? {
          target: u
        } : u, h = isNaN(+s) ? s : +s, c = r(h, o);
        return V(a).map(function(f) {
          return d(d({}, f), {
            event: c,
            delay: h
          });
        });
      }));
      return i.map(function(s) {
        var o = s.delay;
        return d(d({}, t.formatTransition(s)), {
          delay: o
        });
      });
    }, n.prototype.getStateNodes = function(t) {
      var e, r = this;
      if (!t)
        return [];
      var i = t instanceof J ? t.value : At(t, this.delimiter);
      if (D(i)) {
        var s = this.getStateNode(i).initial;
        return s !== void 0 ? this.getStateNodes((e = {}, e[i] = s, e)) : [this, this.states[i]];
      }
      var o = Object.keys(i), u = [this];
      return u.push.apply(u, j([], A(R(o.map(function(a) {
        return r.getStateNode(a).getStateNodes(i[a]);
      }))), !1)), u;
    }, n.prototype.handles = function(t) {
      var e = je(t);
      return this.events.includes(e);
    }, n.prototype.resolveState = function(t) {
      var e = t instanceof J ? t : J.create(t), r = Array.from(Et([], this.getStateNodes(e.value)));
      return new J(d(d({}, e), {
        value: this.resolve(e.value),
        configuration: r,
        done: Lt(r, this),
        tags: Se(r),
        machine: this.machine
      }));
    }, n.prototype.transitionLeafNode = function(t, e, r) {
      var i = this.getStateNode(t), s = i.next(e, r);
      return !s || !s.transitions.length ? this.next(e, r) : s;
    }, n.prototype.transitionCompoundNode = function(t, e, r) {
      var i = Object.keys(t), s = this.getStateNode(i[0]), o = s._transition(t[i[0]], e, r);
      return !o || !o.transitions.length ? this.next(e, r) : o;
    }, n.prototype.transitionParallelNode = function(t, e, r) {
      var i, s, o = {};
      try {
        for (var u = E(Object.keys(t)), a = u.next(); !a.done; a = u.next()) {
          var h = a.value, c = t[h];
          if (c) {
            var f = this.getStateNode(h), l = f._transition(c, e, r);
            l && (o[h] = l);
          }
        }
      } catch (m) {
        i = {
          error: m
        };
      } finally {
        try {
          a && !a.done && (s = u.return) && s.call(u);
        } finally {
          if (i)
            throw i.error;
        }
      }
      var v = Object.keys(o).map(function(m) {
        return o[m];
      }), y = R(v.map(function(m) {
        return m.transitions;
      })), p = v.some(function(m) {
        return m.transitions.length > 0;
      });
      if (!p)
        return this.next(e, r);
      var S = R(Object.keys(o).map(function(m) {
        return o[m].configuration;
      }));
      return {
        transitions: y,
        exitSet: R(v.map(function(m) {
          return m.exitSet;
        })),
        configuration: S,
        source: e,
        actions: R(Object.keys(o).map(function(m) {
          return o[m].actions;
        }))
      };
    }, n.prototype._transition = function(t, e, r) {
      return D(t) ? this.transitionLeafNode(t, e, r) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, e, r) : this.transitionParallelNode(t, e, r);
    }, n.prototype.getTransitionData = function(t, e) {
      return this._transition(t.value, t, z(e));
    }, n.prototype.next = function(t, e) {
      var r, i, s = this, o = e.name, u = [], a = [], h;
      try {
        for (var c = E(this.getCandidates(o)), f = c.next(); !f.done; f = c.next()) {
          var l = f.value, v = l.cond, y = l.in, p = t.context, S = y ? D(y) && ct(y) ? (
            // Check if in state by ID
            t.matches(At(this.getStateNodeById(y).path, this.delimiter))
          ) : (
            // Check if in state by relative grandparent
            he(At(y, this.delimiter), bn(this.path.slice(0, -2))(t.value))
          ) : !0, m = !1;
          try {
            m = !v || Fe(this.machine, v, p, e, t);
          } catch (b) {
            throw new Error("Unable to evaluate guard '".concat(v.name || v.type, "' in transition for event '").concat(o, "' in state node '").concat(this.id, `':
`).concat(b.message));
          }
          if (m && S) {
            l.target !== void 0 && (a = l.target), u.push.apply(u, j([], A(l.actions), !1)), h = l;
            break;
          }
        }
      } catch (b) {
        r = {
          error: b
        };
      } finally {
        try {
          f && !f.done && (i = c.return) && i.call(c);
        } finally {
          if (r)
            throw r.error;
        }
      }
      if (h) {
        if (!a.length)
          return {
            transitions: [h],
            exitSet: [],
            configuration: t.value ? [this] : [],
            source: t,
            actions: u
          };
        var g = R(a.map(function(b) {
          return s.getRelativeStateNodes(b, t.historyValue);
        })), w = !!h.internal;
        return {
          transitions: [h],
          exitSet: w ? [] : R(a.map(function(b) {
            return s.getPotentiallyReenteringNodes(b);
          })),
          configuration: g,
          source: t,
          actions: u
        };
      }
    }, n.prototype.getPotentiallyReenteringNodes = function(t) {
      if (this.order < t.order)
        return [this];
      for (var e = [], r = this, i = t; r && r !== i; )
        e.push(r), r = r.parent;
      return r !== i ? [] : (e.push(i), e);
    }, n.prototype.getActions = function(t, e, r, i, s, o, u) {
      var a, h, c, f, l = this, v = o ? Et([], this.getStateNodes(o.value)) : [], y = /* @__PURE__ */ new Set();
      try {
        for (var p = E(Array.from(t).sort(function(x, I) {
          return x.order - I.order;
        })), S = p.next(); !S.done; S = p.next()) {
          var m = S.value;
          (!Ot(v, m) || Ot(r.exitSet, m) || m.parent && y.has(m.parent)) && y.add(m);
        }
      } catch (x) {
        a = {
          error: x
        };
      } finally {
        try {
          S && !S.done && (h = p.return) && h.call(p);
        } finally {
          if (a)
            throw a.error;
        }
      }
      try {
        for (var g = E(v), w = g.next(); !w.done; w = g.next()) {
          var m = w.value;
          (!Ot(t, m) || Ot(r.exitSet, m.parent)) && r.exitSet.push(m);
        }
      } catch (x) {
        c = {
          error: x
        };
      } finally {
        try {
          w && !w.done && (f = g.return) && f.call(g);
        } finally {
          if (c)
            throw c.error;
        }
      }
      r.exitSet.sort(function(x, I) {
        return I.order - x.order;
      });
      var b = Array.from(y).sort(function(x, I) {
        return x.order - I.order;
      }), P = new Set(r.exitSet), _ = R(b.map(function(x) {
        var I = [];
        if (x.type !== "final")
          return I;
        var Y = x.parent;
        if (!Y.parent)
          return I;
        I.push(
          xt(x.id, x.doneData),
          // TODO: deprecate - final states should not emit done events for their own state.
          xt(Y.id, x.doneData ? zt(x.doneData, i, s) : void 0)
        );
        var U = Y.parent;
        return U.type === "parallel" && Nt(U).every(function(mt) {
          return Lt(r.configuration, mt);
        }) && I.push(xt(U.id)), I;
      })), M = b.map(function(x) {
        var I = x.onEntry, Y = x.activities.map(function(U) {
          return $e(U);
        });
        return {
          type: "entry",
          actions: Q(u ? j(j([], A(I), !1), A(Y), !1) : j(j([], A(Y), !1), A(I), !1), l.machine.options.actions)
        };
      }).concat({
        type: "state_done",
        actions: _.map(function(x) {
          return ze(x);
        })
      }), T = Array.from(P).map(function(x) {
        return {
          type: "exit",
          actions: Q(j(j([], A(x.onExit), !1), A(x.activities.map(function(I) {
            return Ve(I);
          })), !1), l.machine.options.actions)
        };
      }), O = T.concat({
        type: "transition",
        actions: Q(r.actions, this.machine.options.actions)
      }).concat(M);
      if (e) {
        var k = Q(R(j([], A(t), !1).sort(function(x, I) {
          return I.order - x.order;
        }).map(function(x) {
          return x.onExit;
        })), this.machine.options.actions).filter(function(x) {
          return !ne(x);
        });
        return O.concat({
          type: "stop",
          actions: k
        });
      }
      return O;
    }, n.prototype.transition = function(t, e, r, i) {
      t === void 0 && (t = this.initialState);
      var s = z(e), o;
      if (t instanceof J)
        o = r === void 0 ? t : this.resolveState(J.from(t, r));
      else {
        var u = D(t) ? this.resolve(Yt(this.getResolvedPath(t))) : this.resolve(t), a = r ?? this.machine.context;
        o = this.resolveState(J.from(u, a));
      }
      if (!L && s.name === St)
        throw new Error("An event cannot have the wildcard type ('".concat(St, "')"));
      if (this.strict && !this.events.includes(s.name) && !En(s.name))
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(s.name, "'"));
      var h = this._transition(o.value, o, s) || {
        transitions: [],
        configuration: [],
        exitSet: [],
        source: o,
        actions: []
      }, c = Et([], this.getStateNodes(o.value)), f = h.configuration.length ? Et(c, h.configuration) : c;
      return h.configuration = j([], A(f), !1), this.resolveTransition(h, o, o.context, i, s);
    }, n.prototype.resolveRaisedTransition = function(t, e, r, i) {
      var s, o = t.actions;
      return t = this.transition(t, e, void 0, i), t._event = r, t.event = r.data, (s = t.actions).unshift.apply(s, j([], A(o), !1)), t;
    }, n.prototype.resolveTransition = function(t, e, r, i, s) {
      var o, u, a, h, c = this;
      s === void 0 && (s = it);
      var f = t.configuration, l = !e || t.transitions.length > 0, v = l ? t.configuration : e ? e.configuration : [], y = Lt(v, this), p = l ? Bn(this.machine, f) : void 0, S = e ? e.historyValue ? e.historyValue : t.source ? this.machine.historyValue(e.value) : void 0 : void 0, m = this.getActions(new Set(v), y, t, r, s, e, i), g = e ? d({}, e.activities) : {};
      try {
        for (var w = E(m), b = w.next(); !b.done; b = w.next()) {
          var P = b.value;
          try {
            for (var _ = (a = void 0, E(P.actions)), M = _.next(); !M.done; M = _.next()) {
              var T = M.value;
              T.type === kt ? g[T.activity.id || T.activity.type] = T : T.type === Xt && (g[T.activity.id || T.activity.type] = !1);
            }
          } catch ($) {
            a = {
              error: $
            };
          } finally {
            try {
              M && !M.done && (h = _.return) && h.call(_);
            } finally {
              if (a)
                throw a.error;
            }
          }
        }
      } catch ($) {
        o = {
          error: $
        };
      } finally {
        try {
          b && !b.done && (u = w.return) && u.call(w);
        } finally {
          if (o)
            throw o.error;
        }
      }
      var O = A(Ct(this, e, r, s, m, i, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), k = O[0], x = O[1], I = A(An(k, ne), 2), Y = I[0], U = I[1], mt = k.filter(function($) {
        var at;
        return $.type === kt && ((at = $.activity) === null || at === void 0 ? void 0 : at.type) === Ft;
      }), Gt = mt.reduce(function($, at) {
        return $[at.activity.id] = Wn(at.activity, c.machine, x, s), $;
      }, e ? d({}, e.children) : {}), nt = new J({
        value: p || e.value,
        context: x,
        _event: s,
        // Persist _sessionid between states
        _sessionid: e ? e._sessionid : null,
        historyValue: p ? S ? Mn(S, p) : void 0 : e ? e.historyValue : void 0,
        history: !p || t.source ? e : void 0,
        actions: p ? U : [],
        activities: p ? g : e ? e.activities : {},
        events: [],
        configuration: v,
        transitions: t.transitions,
        children: Gt,
        done: y,
        tags: Se(v),
        machine: this
      }), Z = r !== x;
      nt.changed = s.name === Bt || Z;
      var W = nt.history;
      W && delete W.history;
      var ve = !y && (this._transient || f.some(function($) {
        return $._transient;
      }));
      if (!l && (!ve || s.name === dt))
        return nt;
      var X = nt;
      if (!y)
        for (ve && (X = this.resolveRaisedTransition(X, {
          type: Ne
        }, s, i)); Y.length; ) {
          var sn = Y.shift();
          X = this.resolveRaisedTransition(X, sn._event, s, i);
        }
      var on = X.changed || (W ? !!X.actions.length || Z || typeof W.value != typeof X.value || !en(X.value, W.value) : void 0);
      return X.changed = on, X.history = W, X;
    }, n.prototype.getStateNode = function(t) {
      if (ct(t))
        return this.machine.getStateNodeById(t);
      if (!this.states)
        throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
      var e = this.states[t];
      if (!e)
        throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
      return e;
    }, n.prototype.getStateNodeById = function(t) {
      var e = ct(t) ? t.slice(ie.length) : t;
      if (e === this.id)
        return this;
      var r = this.machine.idMap[e];
      if (!r)
        throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
      return r;
    }, n.prototype.getStateNodeByPath = function(t) {
      if (typeof t == "string" && ct(t))
        try {
          return this.getStateNodeById(t.slice(1));
        } catch {
        }
      for (var e = ee(t, this.delimiter).slice(), r = this; e.length; ) {
        var i = e.shift();
        if (!i.length)
          break;
        r = r.getStateNode(i);
      }
      return r;
    }, n.prototype.resolve = function(t) {
      var e, r = this;
      if (!t)
        return this.initialStateValue || ht;
      switch (this.type) {
        case "parallel":
          return bt(this.initialStateValue, function(s, o) {
            return s ? r.getStateNode(o).resolve(t[o] || s) : ht;
          });
        case "compound":
          if (D(t)) {
            var i = this.getStateNode(t);
            return i.type === "parallel" || i.type === "compound" ? (e = {}, e[t] = i.initialStateValue, e) : t;
          }
          return Object.keys(t).length ? bt(t, function(s, o) {
            return s ? r.getStateNode(o).resolve(s) : ht;
          }) : this.initialStateValue || {};
        default:
          return t || ht;
      }
    }, n.prototype.getResolvedPath = function(t) {
      if (ct(t)) {
        var e = this.machine.idMap[t.slice(ie.length)];
        if (!e)
          throw new Error("Unable to find state node '".concat(t, "'"));
        return e.path;
      }
      return ee(t, this.delimiter);
    }, Object.defineProperty(n.prototype, "initialStateValue", {
      get: function() {
        var t;
        if (this.__cache.initialStateValue)
          return this.__cache.initialStateValue;
        var e;
        if (this.type === "parallel")
          e = ye(this.states, function(r) {
            return r.initialStateValue || ht;
          }, function(r) {
            return r.type !== "history";
          });
        else if (this.initial !== void 0) {
          if (!this.states[this.initial])
            throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
          e = Ut(this.states[this.initial]) ? this.initial : (t = {}, t[this.initial] = this.states[this.initial].initialStateValue, t);
        } else
          e = {};
        return this.__cache.initialStateValue = e, this.__cache.initialStateValue;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.getInitialState = function(t, e) {
      this._init();
      var r = this.getStateNodes(t);
      return this.resolveTransition({
        configuration: r,
        exitSet: [],
        transitions: [],
        source: void 0,
        actions: []
      }, void 0, e ?? this.machine.context, void 0);
    }, Object.defineProperty(n.prototype, "initialState", {
      /**
       * The initial State instance, which includes all actions to be executed from
       * entering the initial state.
       */
      get: function() {
        var t = this.initialStateValue;
        if (!t)
          throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
        return this.getInitialState(t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "target", {
      /**
       * The target state value of the history state node, if it exists. This represents the
       * default state value to transition to if no history value exists yet.
       */
      get: function() {
        var t;
        if (this.type === "history") {
          var e = this.config;
          D(e.target) ? t = ct(e.target) ? Yt(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : t = e.target;
        }
        return t;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.getRelativeStateNodes = function(t, e, r) {
      return r === void 0 && (r = !0), r ? t.type === "history" ? t.resolveHistory(e) : t.initialStateNodes : [t];
    }, Object.defineProperty(n.prototype, "initialStateNodes", {
      get: function() {
        var t = this;
        if (Ut(this))
          return [this];
        if (this.type === "compound" && !this.initial)
          return L || H(!1, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
        var e = jt(this.initialStateValue);
        return R(e.map(function(r) {
          return t.getFromRelativePath(r);
        }));
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.getFromRelativePath = function(t) {
      if (!t.length)
        return [this];
      var e = A(t), r = e[0], i = e.slice(1);
      if (!this.states)
        throw new Error("Cannot retrieve subPath '".concat(r, "' from node with no states"));
      var s = this.getStateNode(r);
      if (s.type === "history")
        return s.resolveHistory();
      if (!this.states[r])
        throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
      return this.states[r].getFromRelativePath(i);
    }, n.prototype.historyValue = function(t) {
      if (Object.keys(this.states).length)
        return {
          current: t || this.initialStateValue,
          states: ye(this.states, function(e, r) {
            if (!t)
              return e.historyValue();
            var i = D(t) ? void 0 : t[r];
            return e.historyValue(i || e.initialStateValue);
          }, function(e) {
            return !e.history;
          })
        };
    }, n.prototype.resolveHistory = function(t) {
      var e = this;
      if (this.type !== "history")
        return [this];
      var r = this.parent;
      if (!t) {
        var i = this.target;
        return i ? R(jt(i).map(function(o) {
          return r.getFromRelativePath(o);
        })) : r.initialStateNodes;
      }
      var s = xn(r.path, "states")(t).current;
      return D(s) ? [r.getStateNode(s)] : R(jt(s).map(function(o) {
        return e.history === "deep" ? r.getFromRelativePath(o) : [r.states[o[0]]];
      }));
    }, Object.defineProperty(n.prototype, "stateIds", {
      /**
       * All the state node IDs of this state node and its descendant state nodes.
       */
      get: function() {
        var t = this, e = R(Object.keys(this.states).map(function(r) {
          return t.states[r].stateIds;
        }));
        return [this.id].concat(e);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "events", {
      /**
       * All the event types accepted by this state node and its descendants.
       */
      get: function() {
        var t, e, r, i;
        if (this.__cache.events)
          return this.__cache.events;
        var s = this.states, o = new Set(this.ownEvents);
        if (s)
          try {
            for (var u = E(Object.keys(s)), a = u.next(); !a.done; a = u.next()) {
              var h = a.value, c = s[h];
              if (c.states)
                try {
                  for (var f = (r = void 0, E(c.events)), l = f.next(); !l.done; l = f.next()) {
                    var v = l.value;
                    o.add("".concat(v));
                  }
                } catch (y) {
                  r = {
                    error: y
                  };
                } finally {
                  try {
                    l && !l.done && (i = f.return) && i.call(f);
                  } finally {
                    if (r)
                      throw r.error;
                  }
                }
            }
          } catch (y) {
            t = {
              error: y
            };
          } finally {
            try {
              a && !a.done && (e = u.return) && e.call(u);
            } finally {
              if (t)
                throw t.error;
            }
          }
        return this.__cache.events = Array.from(o);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "ownEvents", {
      /**
       * All the events that have transitions directly from this state node.
       *
       * Excludes any inert events.
       */
      get: function() {
        var t = new Set(this.transitions.filter(function(e) {
          return !(!e.target && !e.actions.length && e.internal);
        }).map(function(e) {
          return e.eventType;
        }));
        return Array.from(t);
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.resolveTarget = function(t) {
      var e = this;
      if (t !== void 0)
        return t.map(function(r) {
          if (!D(r))
            return r;
          var i = r[0] === e.delimiter;
          if (i && !e.parent)
            return e.getStateNodeByPath(r.slice(1));
          var s = i ? e.key + r : r;
          if (e.parent)
            try {
              var o = e.parent.getStateNodeByPath(s);
              return o;
            } catch (u) {
              throw new Error("Invalid transition definition for state node '".concat(e.id, `':
`).concat(u.message));
            }
          else
            return e.getStateNodeByPath(s);
        });
    }, n.prototype.formatTransition = function(t) {
      var e = this, r = Nn(t.target), i = "internal" in t ? t.internal : r ? r.some(function(a) {
        return D(a) && a[0] === e.delimiter;
      }) : !0, s = this.machine.options.guards, o = this.resolveTarget(r), u = d(d({}, t), {
        actions: Q(V(t.actions)),
        cond: ke(t.cond, s),
        target: o,
        source: this,
        internal: i,
        eventType: t.event,
        toJSON: function() {
          return d(d({}, u), {
            target: u.target ? u.target.map(function(a) {
              return "#".concat(a.id);
            }) : void 0,
            source: "#".concat(e.id)
          });
        }
      });
      return u;
    }, n.prototype.formatTransitions = function() {
      var t, e, r = this, i;
      if (!this.config.on)
        i = [];
      else if (Array.isArray(this.config.on))
        i = this.config.on;
      else {
        var s = this.config.on, o = St, u = s[o], a = u === void 0 ? [] : u, h = oe(s, [typeof o == "symbol" ? o : o + ""]);
        i = R(Object.keys(h).map(function(g) {
          !L && g === dt && H(!1, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(r.id, '".'));
          var w = ut(g, h[g]);
          return L || ar(r, g, w), w;
        }).concat(ut(St, a)));
      }
      var c = this.config.always ? ut("", this.config.always) : [], f = this.config.onDone ? ut(String(xt(this.id)), this.config.onDone) : [];
      L || H(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
      var l = R(this.invoke.map(function(g) {
        var w = [];
        return g.onDone && w.push.apply(w, j([], A(ut(String(Mt(g.id)), g.onDone)), !1)), g.onError && w.push.apply(w, j([], A(ut(String(vt(g.id)), g.onError)), !1)), w;
      })), v = this.after, y = R(j(j(j(j([], A(f), !1), A(l), !1), A(i), !1), A(c), !1).map(function(g) {
        return V(g).map(function(w) {
          return r.formatTransition(w);
        });
      }));
      try {
        for (var p = E(v), S = p.next(); !S.done; S = p.next()) {
          var m = S.value;
          y.push(m);
        }
      } catch (g) {
        t = {
          error: g
        };
      } finally {
        try {
          S && !S.done && (e = p.return) && e.call(p);
        } finally {
          if (t)
            throw t.error;
        }
      }
      return y;
    }, n;
  }()
), xe = !1;
function hr(n, t) {
  return !L && !("predictableActionArguments" in n) && !xe && (xe = !0, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new ur(n, t);
}
var lt = Ke, Qt = ot;
const { choose: cr } = Un, lr = {
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
}, fr = {
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
}, dr = (n) => hr(
  {
    context: {
      unfinishedComponent: void 0,
      mouseDownInSelectModeObject: void 0,
      _editor: n
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
                actions: ["unselectAll", Qt("mouseDownInSelectModeUnassign")]
              },
              KEYDOWN_DEL: {
                actions: ["deleteComponent", Qt("mouseDownInSelectModeUnassign")]
              },
              mouseDownInSelectModeUnassign: {
                actions: "mouseDownInSelectModeUnassign"
              }
            },
            entry: "selectModeEntry",
            exit: ["unselectAll", Qt("mouseDownInSelectModeUnassign")]
          },
          drawMode: {
            initial: void 0,
            states: lr,
            on: {
              KEYDOWN_ESC: "#idle.selectMode"
            }
          }
        }
      },
      drawing: {
        id: "drawing",
        initial: void 0,
        states: fr,
        exit: cr([
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
      createRectangle: lt({
        unfinishedComponent: (t, e) => t._editor.createRectangle({ x: e.offsetX, y: e.offsetY })
      }),
      createCircle: lt({
        unfinishedComponent: (t, e) => t._editor.createCircle({ x: e.offsetX, y: e.offsetY })
      }),
      createEllipse: lt({
        unfinishedComponent: (t, e) => t._editor.createEllipse({ x: e.offsetX, y: e.offsetY })
      }),
      createPolygon: lt({
        unfinishedComponent: (t, e) => t._editor.createPolygon({ points: { x: e.offsetX, y: e.offsetY } })
      }),
      discardUnfinished: (t, e) => {
        t._editor.unregisterComponent(t.unfinishedComponent);
      },
      resizeUnfinished: (t, e) => {
        t.unfinishedComponent.resize(e.offsetX, e.offsetY);
      },
      selectUnfinished: (t, e) => {
        t._editor.selectComponent(t.unfinishedComponent);
      },
      validComponentFinished: (t, e) => {
        const r = t.unfinishedComponent;
        t._editor.componentDrawnHandler && t._editor.componentDrawnHandler(r, r.element.id);
      },
      // polygons only
      addPoint: (t, e) => {
        t.unfinishedComponent.addPoint(e.offsetX, e.offsetY), t._editor.selectComponent(t.unfinishedComponent);
      },
      // polygons only
      moveLastPoint: (t, e) => {
        t.unfinishedComponent.moveLastPoint(e.offsetX, e.offsetY);
      },
      mouseDownInSelectModeAssign: lt({
        mouseDownInSelectModeObject: (t, e) => e.component
      }),
      mouseDownInSelectModeUnassign: lt({
        //@ts-ignore
        mouseDownInSelectModeObject: null
      }),
      mouseDownInSelectModeObjectMove: (t, e) => {
        const r = t.mouseDownInSelectModeObject;
        r && r.move && r.move(e.movementX, e.movementY);
      },
      selectComponent: (t, e) => {
        t._editor.selectComponent(e.component);
      },
      deleteComponent: (t, e) => {
        const r = t.mouseDownInSelectModeObject;
        r && t._editor.unregisterComponent(r);
      },
      unselectAll: (t, e) => {
        t._editor.selectComponent(null);
      },
      selectModeEntry: (t, e) => {
        t._editor.mode = "select", t._editor.selectModeHandler && t._editor.selectModeHandler();
      }
    },
    guards: {
      isHandle: (t, e) => e.component instanceof B,
      unfinishedIsValid: (t, e) => t.unfinishedComponent.isValid()
    }
  }
), vr = (n) => nn(dr(n)), fe = (n, t, e) => {
  const r = {
    defineProperty(i, s, o) {
      return Object.is(o.value, i[s]) || (typeof t == "function" ? t.call(e || this, s, o.value, i[s], n) : t[s].call(e || this, o.value, i[s], n)), Reflect.defineProperty(i, s, o);
    }
  };
  return new Proxy(n, r);
};
function Ee(n, t, e) {
  return new B(
    n,
    t,
    (r, i) => {
      e.x += r, e.y += i;
    },
    this.isFrozen
  );
}
class pr {
  constructor(t, e) {
    this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], this.editorOwner = t, this.element = q.createElementNS(rt, "polygon"), this.points = [], this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], e && [e].flat().forEach((r) => this.addPoint(r.x, r.y)), this.isSelected = !1, this.isFrozen = !1;
  }
  freeze(t) {
    return this.isFrozen = t !== void 0 ? !!t : !0, this.getHandles().forEach((e) => e.freeze(t)), this;
  }
  updateElementPoints() {
    return this.element.setAttribute("points", this.points.map((t) => `${t.x},${t.y}`).join(" ")), this;
  }
  addPoint(t, e) {
    const r = { x: t, y: e }, i = fe(r, (s, o, u, a) => {
      var h, c;
      s !== "handle" && (this._logWarnOnOpOnFrozen("Point moved on"), this.updateElementPoints(), (c = (h = a.handle) == null ? void 0 : h["setAttr" + s.toUpperCase()]) == null || c.call(h, o));
    });
    return r.handle = Ee.call(this, t, e, i), this.editorOwner.registerComponentHandle(r.handle), this.points.push(i), this.updateElementPoints(), this;
  }
  moveLastPoint(t, e) {
    const r = this.points[this.points.length - 1];
    return [r.x, r.y] = [t, e], this;
  }
  move(t, e) {
    return this.points.forEach((r) => {
      r.x += t, r.y += e;
    }), this;
  }
  isValid() {
    return this.points.length >= 3;
  }
  setHandlesVisibility(t) {
    return this.points.forEach((e) => {
      var r;
      if (!e.handle) {
        const i = Ee.call(this, e.x, e.y, e);
        e.handle = i, (r = this.editorOwner) == null || r.registerComponentHandle(i);
      }
      e.handle.setVisible(t);
    }), this;
  }
  getCenterCoords() {
    return this.points.reduce(
      (t, e) => (t.x += e.x / this.points.length, t.y += e.y / this.points.length, t),
      { x: 0, y: 0 }
    );
  }
  scale(t) {
    return this.points.forEach((e, r) => {
      e.x = Number((e.x * t).toFixed(2)), e.y = Number((e.y * t).toFixed(2));
    }), this.updateElementPoints(), this;
  }
  setIsSelected(t) {
    return this._logWarnOnOpOnFrozen("Select/unselect performed on"), this.isSelected = t = t !== void 0 ? !!t : !0, this.setHandlesVisibility(t), this.style && K(
      this.element,
      t ? this.style.componentSelect.on : this.style.componentSelect.off
    ), this;
  }
  getHandles() {
    return this.points.map((t) => t.handle);
  }
  clearHandles() {
    this.points.forEach((t) => {
      var e;
      (e = this.editorOwner) == null || e.unregisterComponent(t.handle), t.handle = null;
    });
  }
  setStyle(t) {
    return this.style = t, K(this.element, t.component), K(this.element, t.componentHover.off), K(this.element, t.componentSelect.off), se(this.element, t.componentHover.off, t.componentHover.on), this;
  }
  setDataAttributes(t) {
    for (let e in t)
      this.element.setAttribute(e, String(t[e]));
    return this;
  }
  export() {
    const t = {
      points: this.points.map((e) => {
        var r, i;
        return {
          x: Number((e.x / (((r = this.editorOwner) == null ? void 0 : r.scale) || 1)).toFixed(2)),
          y: Number((e.y / (((i = this.editorOwner) == null ? void 0 : i.scale) || 1)).toFixed(2))
        };
      })
    };
    for (let e of this.element.attributes)
      (e.name in this.includeAttributes || Ce.test(e.name)) && (t[e.name] = e.value);
    return t;
  }
  _logWarnOnOpOnFrozen(t) {
    this.isFrozen && console.warn(`${t} frozen ${this.element.tagName} with id ${this.element.id}`);
  }
}
function Oe() {
  const { x: n, y: t, width: e, height: r } = this.dim;
  this.handles = [
    new B(
      n,
      t,
      (i, s) => {
        this.dim.x += i, this.dim.width -= i, this.dim.y += s, this.dim.height -= s;
      },
      this.isFrozen
    ),
    new B(
      n,
      t + r,
      (i, s) => {
        this.dim.x += i, this.dim.width -= i, this.dim.height += s;
      },
      this.isFrozen
    ),
    new B(
      n + e,
      t,
      (i, s) => {
        this.dim.width += i, this.dim.y += s, this.dim.height -= s;
      },
      this.isFrozen
    ),
    new B(
      n + e,
      t + r,
      (i, s) => {
        this.dim.width += i, this.dim.height += s;
      },
      this.isFrozen
    )
  ], this.handles.forEach((i) => {
    var s;
    (s = this.editorOwner) == null || s.registerComponentHandle(i);
  });
}
class de {
  constructor(t, e) {
    this.editorOwner = null, this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], this.dim = {
      x: 0,
      height: 0,
      width: 0,
      y: 0
    }, this.handles = [], this.isSelected = !1, this.isFrozen = !1, this.propChangeListener = e, this.svgElementName = t, this.element = q.createElementNS(rt, this.svgElementName);
  }
  add(t, e, r, i = 0, s = 0) {
    this.editorOwner = t, this.dim = fe(
      {
        x: e,
        y: r,
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
        x: (o, u, a) => {
          this._logWarnOnOpOnFrozen("Dimension property x changed on"), this.propChangeListener.x.call(this, o, u, a), this.handles.length && (this.handles[0].setAttrX(o), this.handles[1].setAttrX(o), this.handles[2].setAttrX(o + a.width), this.handles[3].setAttrX(o + a.width));
        },
        // move
        y: (o, u, a) => {
          this._logWarnOnOpOnFrozen("Dimension property y changed on"), this.propChangeListener.y.call(this, o, u, a), this.handles.length && (this.handles[0].setAttrY(o), this.handles[1].setAttrY(o + a.height), this.handles[2].setAttrY(o), this.handles[3].setAttrY(o + a.height));
        },
        // resize
        width: (o, u, a) => {
          this._logWarnOnOpOnFrozen("Dimension property width changed on"), this.propChangeListener.width.call(this, o, u, a), this.handles.length && (this.handles[2].setAttrX(a.x + o), this.handles[3].setAttrX(a.x + o));
        },
        // resize
        height: (o, u, a) => {
          this._logWarnOnOpOnFrozen("Dimension property height changed on"), this.propChangeListener.height.call(this, o, u, a), this.handles.length && (this.handles[1].setAttrY(a.y + o), this.handles[3].setAttrY(a.y + o));
        }
      },
      this
    ), Oe.call(this), [this.dim.width, this.dim.height] = [i, s], this.isSelected = !1, this.isFrozen = !1;
  }
  freeze(t) {
    return this.isFrozen = t !== void 0 ? !!t : !0, this.handles.forEach((e) => e.freeze(t)), this;
  }
  resize(t, e) {
    return this.dim.width = t - this.dim.x, this.dim.height = e - this.dim.y, this;
  }
  move(t, e) {
    return this.dim.x += t, this.dim.y += e, this;
  }
  isValid() {
    return this.dim.width && this.dim.height;
  }
  setHandlesVisibility(t) {
    var e, r;
    return t && !((e = this.handles) != null && e.length) && Oe.call(this), (r = this.handles) == null || r.forEach((i) => i == null ? void 0 : i.setVisible(t)), this;
  }
  setIsSelected(t) {
    return this._logWarnOnOpOnFrozen("Select/unselect performed on"), this.isSelected = t = t !== void 0 ? !!t : !0, this.setHandlesVisibility(t), this.style && K(
      this.element,
      t ? this.style.componentSelect.on : this.style.componentSelect.off
    ), this;
  }
  getHandles() {
    return this.handles;
  }
  getCenterCoords() {
    return {
      x: this.dim.x + this.dim.width / 2,
      y: this.dim.y + this.dim.height / 2
    };
  }
  clearHandles() {
    this.handles.forEach((t) => {
      var e;
      return (e = this.editorOwner) == null ? void 0 : e.unregisterComponent(t);
    }), this.handles = [];
  }
  scale(t) {
    return this.dim.width = Number((this.dim.width * t).toFixed(2)), this.dim.height = Number((this.dim.height * t).toFixed(2)), this.dim.x = Number((this.dim.x * t).toFixed(2)), this.dim.y = Number((this.dim.y * t).toFixed(2)), this;
  }
  setStyle(t) {
    return this.style = t, K(this.element, t.component), K(this.element, t.componentHover.off), K(this.element, t.componentSelect.off), se(this.element, t.componentHover.off, t.componentHover.on), this;
  }
  setDataAttributes(t) {
    var e;
    for (let r in t)
      (e = this.element) == null || e.setAttribute(r, String(t[r]));
    return this;
  }
  export() {
    var e, r, i, s, o;
    const t = {
      width: Number((this.dim.width / (((e = this.editorOwner) == null ? void 0 : e.scale) || 1)).toFixed(2)),
      height: Number((this.dim.height / (((r = this.editorOwner) == null ? void 0 : r.scale) || 1)).toFixed(2)),
      x: Number((this.dim.x / (((i = this.editorOwner) == null ? void 0 : i.scale) || 1)).toFixed(2)),
      y: Number((this.dim.y / (((s = this.editorOwner) == null ? void 0 : s.scale) || 1)).toFixed(2))
    };
    for (let u of (o = this.element) == null ? void 0 : o.attributes)
      (u.name in this.includeAttributes || Ce.test(u.name)) && (t[u.name] = u.value);
    return t;
  }
  _logWarnOnOpOnFrozen(t) {
    var e, r;
    this.isFrozen && console.warn(`${t} frozen ${(e = this.element) == null ? void 0 : e.tagName} with id ${(r = this.element) == null ? void 0 : r.id}`);
  }
}
class yr extends de {
  constructor(t, e, r, i, s) {
    super("rect", {
      x: (o, u, a) => {
        this.element.setAttribute("x", String(a.width < 0 ? o + a.width : o));
      },
      // move
      y: (o, u, a) => {
        this.element.setAttribute("y", String(a.height < 0 ? o + a.height : o));
      },
      // resize
      width: (o, u, a) => {
        this.element.setAttribute("width", String(Math.abs(o))), this.element.setAttribute("x", String(o < 0 ? a.x + o : a.x));
      },
      // resize
      height: (o, u, a) => {
        this.element.setAttribute("height", String(Math.abs(o))), this.element.setAttribute("y", String(o < 0 ? a.y + o : a.y));
      }
    }), this.add(t, e, r, i, s);
  }
}
class gr extends de {
  constructor(t, e, r, i, s) {
    super("circle", {
      // move
      x: (o, u, a) => {
        var h;
        (h = this == null ? void 0 : this.element) == null || h.setAttribute("cx", String(o + a.width / 2));
      },
      // move
      y: (o, u, a) => {
        var h;
        (h = this == null ? void 0 : this.element) == null || h.setAttribute("cy", String(o + a.height / 2));
      },
      // resize
      width: (o, u, a) => {
        var h, c;
        (h = this == null ? void 0 : this.element) == null || h.setAttribute(
          "r",
          String(Math.min(Math.abs(o), Math.abs(a.height)) / 2)
        ), (c = this == null ? void 0 : this.element) == null || c.setAttribute("cx", String(a.x + o / 2));
      },
      // resize
      height: (o, u, a) => {
        var h, c;
        (h = this == null ? void 0 : this.element) == null || h.setAttribute(
          "r",
          String(Math.min(Math.abs(o), Math.abs(a.width)) / 2)
        ), (c = this == null ? void 0 : this.element) == null || c.setAttribute("cy", String(a.y + o / 2));
      }
    }), this.add(t, e, r, i, s);
  }
}
class mr extends de {
  constructor(t, e, r, i, s) {
    super("ellipse", {
      x: (o, u, a) => {
        this.element.setAttribute("cx", String(o + a.width / 2));
      },
      // move
      y: (o, u, a) => {
        this.element.setAttribute("cy", String(o + a.height / 2));
      },
      // resize
      width: (o, u, a) => {
        this.element.setAttribute("rx", String(Math.abs(o) / 2)), this.element.setAttribute("cx", String(a.x + o / 2));
      },
      // resize
      height: (o, u, a) => {
        this.element.setAttribute("ry", String(Math.abs(o) / 2)), this.element.setAttribute("cy", String(a.y + o / 2));
      }
    }), this.add(t, e, r, i, s);
  }
}
var Dt = /* @__PURE__ */ ((n) => (n[n.LMB = 1] = "LMB", n[n.RMB = 2] = "RMB", n[n.MMB = 4] = "MMB", n))(Dt || {});
const wr = new RegExp(/[A-Z]+/g), Ae = (n) => {
  const t = n.matchAll(wr);
  for (let e of t)
    e.index && (n = n.replace(e[0], "-" + e[0].toLowerCase()));
  return n;
};
class Me {
  constructor(t, e = {}, r) {
    if (this.scale = 1, this.imageSizes = {
      width: 0,
      height: 0
    }, this.mouseButtons = [Dt.LMB, Dt.MMB, Dt.RMB], [
      this.width = 1200,
      this.height = 600,
      this.componentDrawnHandler,
      this.selectModeHandler,
      this.clickHandler,
      this.selectHandler,
      this.idGenerator,
      this.deleteHandler,
      this.onMouseOver,
      this.onMouseOut
    ] = [
      e.width,
      e.height,
      e.componentDrawnHandler,
      // applies to Editor only
      e.selectModeHandler,
      // applies to Editor only
      e.clickHandler,
      // applies to View only
      e.selectHandler,
      e.idGenerator,
      e.deleteHandler,
      e.onMouseOver,
      e.onMouseOut
    ], e.mouseButtons && (this.mouseButtons = e.mouseButtons), this.style = Wt(vn(), r), this.fsmService = vr(this).start(), this.svg = t, typeof t == "string") {
      if (this.svg = q.getElementById(t), !this.svg) {
        this.svg = q.createElementNS(rt, "svg"), this.svg.setAttribute("version", "1.1"), this.svg.setAttribute("id", t), this.svg.setAttribute("width", this.width + "px"), this.svg.setAttribute("height", this.height + "px"), this.svg.setAttribute("viewBox", `0, 0, ${this.width} ${this.height}`), this.svg.setAttribute("preserveAspectRatio", "xMinYMin");
        const i = this.svg;
        window.addEventListener(
          "load",
          function() {
            q.body.appendChild(i);
          },
          { once: !0 }
        );
      }
    } else
      t && t.tagName === "svg" && (this.svg = t);
    if (!this.svg)
      throw new Error("No SVG element provided");
    this.cgroup = q.createElementNS(rt, "g"), this.hgroup = q.createElementNS(rt, "g"), this.svg.appendChild(this.cgroup), this.svg.appendChild(this.hgroup), this._cacheElementMapping = fe(
      {},
      (i, s, o) => {
        s ? s instanceof B ? this.hgroup.appendChild(s.element) : this.cgroup.appendChild(s.element) : o instanceof B ? this.hgroup.removeChild(o.element) : o && (this.cgroup.removeChild(o.element), o.getHandles().forEach((u) => {
          this.unregisterComponent(u);
        }));
      }
    ), this._idCounter = 1, this._handleIdCounter = 1;
  }
  loadImage(t, e, r) {
    var i;
    return this.image = q.createElementNS(rt, "image"), this.image.setAttributeNS(an, "href", t), this.imageSizes.width = e, this.imageSizes.height = r, e && this.image.setAttribute("width", String(e)), r && this.image.setAttribute("height", String(r)), (i = this.svg) == null || i.prepend(this.image), this;
  }
  setStyle(t) {
    return this.style = Wt(this.style, t), this;
  }
  setScale(t) {
    var r, i;
    const e = t / this.scale;
    for (const s in this._cacheElementMapping)
      (i = (r = this._cacheElementMapping[s]) == null ? void 0 : r.scale) == null || i.call(r, e);
    if (this.image && this.image.getAttribute("width") && this.image.getAttribute("height")) {
      const { width: s, height: o } = this.imageSizes;
      s && this.image.setAttribute("width", (s * t).toFixed(2)), o && this.image.setAttribute("height", (o * t).toFixed(2));
    }
    this.scale = t;
  }
  setEditorMode(t) {
    switch (this.mode = t, t) {
      case "circle": {
        this.fsmService.send("MODE_DRAW_CIRCLE");
        break;
      }
      case "ellipse": {
        this.fsmService.send("MODE_DRAW_ELLIPSE");
        break;
      }
      case "polygon": {
        this.fsmService.send("MODE_DRAW_POLYGON");
        break;
      }
      case "rect": {
        this.fsmService.send("MODE_DRAW_RECT");
        break;
      }
      case "select": {
        this.fsmService.send("MODE_SELECT");
        break;
      }
    }
  }
  selectComponent(t) {
    let e;
    return typeof t == "string" ? e = this.getComponentById(t) : e = t, (!e || e.setIsSelected) && Object.values(this._cacheElementMapping).forEach((r) => {
      var i;
      r === t && ((i = this.selectHandler) == null || i.call(this, r.element.id, r), r.setIsSelected && r.setIsSelected(!0)), r !== t && !r.isFrozen && r.setIsSelected && (r.setIsSelected(!1), r.getHandles().forEach((s) => {
        this.unregisterComponent(s);
      }), r.clearHandles());
    }), e;
  }
  removeComponent(t) {
    return typeof t == "string" && (t = this.getComponentById(t)), this.unregisterComponent(t), t;
  }
  on(t, e) {
    return G(this.svg, t, e), this;
  }
  off(t, e) {
    return un(this.svg, t, e), this;
  }
  getComponentById(t) {
    return this._cacheElementMapping && this._cacheElementMapping[t];
  }
  import(t, e) {
    const r = typeof t == "string" ? JSON.parse(t) : t;
    return this._idCounter = r.idCounter, r.components.map((i) => {
      var u, a;
      const s = e ? e(i.id) : i.id, o = {};
      for (let h in i.data)
        o[Ae(h)] = i.data[h];
      switch ((a = (u = i.data) == null ? void 0 : u.entries) == null || a.call(u).map(([h, c]) => ({ [Ae(h)]: c })), i.type) {
        case "rect":
          return this.createRectangle(o, s);
        case "circle":
          return this.createCircle(o, s);
        case "ellipse":
          return this.createEllipse(o, s);
        case "polygon":
          return this.createPolygon(o, s);
        default:
          return console.error("Unknown type", i.type), null;
      }
    }).filter((i) => {
      var s;
      return (s = i == null ? void 0 : i.clearHandles) == null || s.call(i), !!i;
    });
  }
  export(t) {
    return {
      idCounter: this._idCounter,
      components: Object.entries(this._cacheElementMapping).filter(([r, i]) => !(i instanceof B)).map(([r, i]) => ({
        id: r,
        type: i.element.tagName,
        data: i.export()
      }))
    };
  }
  createRectangle(t, e) {
    const { x: r, y: i, width: s, height: o, ...u } = t;
    return this.registerComponent(
      new yr(this, r, i, s, o).setStyle(this.style).setDataAttributes(u),
      e
    );
  }
  createCircle(t, e) {
    const { x: r, y: i, width: s, height: o, ...u } = t;
    return this.registerComponent(
      new gr(this, r, i, s, o).setStyle(this.style).setDataAttributes(u),
      e
    );
  }
  createEllipse(t, e) {
    const { x: r, y: i, width: s, height: o, ...u } = t;
    return this.registerComponent(
      new mr(this, r, i, s, o).setStyle(this.style).setDataAttributes(u),
      e
    );
  }
  createPolygon(t, e) {
    const { points: r, ...i } = t;
    return this.registerComponent(
      new pr(this, r).setStyle(this.style).setDataAttributes(i),
      e
    );
  }
  registerComponent(t, e) {
    var r;
    return t instanceof B ? e = "handle_" + this._handleIdCounter++ : e = e || ((r = this.idGenerator) == null ? void 0 : r.call(this)) || t.element.tagName + "_" + this._idCounter++, this._cacheElementMapping[e] = t, t.element.id = e, t;
  }
  registerComponentHandle(t) {
    return this.registerComponent(t.setStyle(this.style.handle, this.style.handleHover));
  }
  unregisterComponent(t) {
    var e, r, i;
    t = typeof t == "string" ? this.selectComponent(t) : t, t && (!(t instanceof B) && ((e = t.isValid) != null && e.call(t)) && ((i = this.deleteHandler) == null || i.call(this, (r = t == null ? void 0 : t.element) == null ? void 0 : r.id, t)), t._logWarnOnOpOnFrozen && t._logWarnOnOpOnFrozen("Deleting"), this._cacheElementMapping[t.element.id] = null, delete this._cacheElementMapping[t.element.id]);
  }
}
const Sr = (n) => {
  let t;
  return G(n.svg, "mousedown touchstart", (e) => {
    var u;
    if (e.preventDefault(), e instanceof MouseEvent && !(e.button in n.mouseButtons))
      return;
    const r = n.getComponentById(e.target.id), i = r && r.isFrozen ? null : r, s = (u = n.svg) == null ? void 0 : u.getBoundingClientRect(), o = e.targetTouches && e.targetTouches[0];
    n.fsmService.send({
      type: "MT_DOWN",
      component: i,
      // not defined when mousedown on editor
      offsetX: e.offsetX !== void 0 ? e.offsetX : o && o.clientX - s.x,
      offsetY: e.offsetY !== void 0 ? e.offsetY : o && o.clientY - s.y
    }), t = o;
  }), G(n.svg, "mouseup touchend mouseleave touchleave", (e) => {
    e.preventDefault(), n.fsmService.send({
      type: "MT_UP"
    }), t = null;
  }), G(n.svg, "mousemove touchmove", (e) => {
    var s;
    const r = (s = n.svg) == null ? void 0 : s.getBoundingClientRect(), i = e.targetTouches && e.targetTouches[0];
    n.fsmService.send({
      type: "MT_MOVE",
      offsetX: e.offsetX !== void 0 ? e.offsetX : i && i.clientX - r.x,
      offsetY: e.offsetY !== void 0 ? e.offsetY : i && i.clientY - r.y,
      movementX: e.movementX !== void 0 ? e.movementX : t ? i.clientX - t.clientX : 0,
      movementY: e.movementY !== void 0 ? e.movementY : t ? i.clientY - t.clientY : 0
    }), t = i;
  }), G(De.window, "keydown", (e) => {
    switch (e.key) {
      case "Escape":
        n.fsmService.send("KEYDOWN_ESC");
        break;
      case "Enter":
        n.fsmService.send("KEYDOWN_ESC");
      case "Delete":
        n.fsmService.send("KEYDOWN_DEL");
        break;
      case "ArrowUp":
        e.preventDefault(), n.fsmService.send({
          type: "KEYDOWN_ARRAY",
          movementX: 0,
          movementY: -1
        });
        break;
      case "ArrowDown":
        e.preventDefault(), n.fsmService.send({
          type: "KEYDOWN_ARRAY",
          movementX: 0,
          movementY: 1
        });
        break;
      case "ArrowLeft":
        e.preventDefault(), n.fsmService.send({
          type: "KEYDOWN_ARRAY",
          movementX: -1,
          movementY: 0
        });
        break;
      case "ArrowRight":
        e.preventDefault(), n.fsmService.send({
          type: "KEYDOWN_ARRAY",
          movementX: 1,
          movementY: 0
        });
        break;
    }
  }), n;
}, br = (n) => (G(n.cgroup, "click touchstart", (t) => {
  var e;
  t.preventDefault(), n.clickHandler && n.clickHandler(t, t.target.id, (e = n.selectComponent(t.target.id)) == null ? void 0 : e.getCenterCoords());
}), G(n.cgroup, "mouseover", (t) => {
  var e, r;
  t.preventDefault(), console.log(1), (r = n.onMouseOver) == null || r.call(n, t, t.target.id, (e = n.selectComponent(t.target.id)) == null ? void 0 : e.getCenterCoords());
}), G(n.cgroup, "mouseout", (t) => {
  var e;
  t.preventDefault(), (e = n.onMouseOut) == null || e.call(n, t, t.target.id);
}), n), Wt = (n, ...t) => {
  if (!t.length || !t[0])
    return n;
  const e = t.shift();
  return Object.entries(e).forEach(([r, i]) => {
    Object.getPrototypeOf(i) === Object.prototype ? Wt(n[r], i) : n[r] = i;
  }), Wt(n, ...t);
}, rn = (n) => function(e, r = {}, i) {
  return n ? br(new Me(e, r, i)) : Sr(new Me(e, r, i));
}, xr = rn(!1), Er = rn(!0), Or = {
  editor: xr,
  view: Er,
  MouseButtons: Dt
};
export {
  Dt as MouseButtons,
  Or as default,
  xr as editor,
  Er as view
};
