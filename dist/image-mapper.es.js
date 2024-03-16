const Te = window || void 0, Z = Te.window.document, it = "http://www.w3.org/2000/svg", _e = new RegExp(/^data-[a-zA-Z]+/), W = function(n, t, e) {
  [n].flat().forEach((i) => {
    t.split(" ").forEach((r) => {
      i.addEventListener(r, e, {
        passive: !1
      });
    });
  });
}, ge = function(n, t, e) {
  [n].flat().forEach((i) => {
    t.split(" ").forEach((r) => {
      i.removeEventListener(r, e);
    });
  });
}, un = {
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
}, dn = {
  fill: "rgb(255, 255, 255)",
  stroke: "rgb(51, 51, 51)",
  "stroke-width": "1",
  opacity: 0.3,
  cursor: "pointer"
}, fn = {
  opacity: 0.6
}, vn = () => ({
  component: Object.assign({}, un),
  componentHover: Object.assign({}, cn),
  componentSelect: Object.assign({}, ln),
  handle: Object.assign({}, dn),
  handleHover: Object.assign({}, fn)
}), J = (n, t) => Object.entries(t).forEach(([e, i]) => n.setAttribute(e, String(i))), ae = (n, t, e) => {
  W(n, "mouseenter touchstart", () => J(n, e)), W(
    n,
    "mouseleave touchend touchleave",
    () => J(n, t)
  );
};
class G {
  constructor(t, e, i, r) {
    this.x = t, this.y = e, this.moveHandler = i, this.element = Z.createElementNS(it, "circle"), this.element.setAttribute("cx", String(t)), this.element.setAttribute("cy", String(e)), this.element.setAttribute("r", String(5)), this.element.setAttribute("visibility", "hidden"), this.isFrozen = r !== void 0 ? !!r : !1;
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
    return J(this.element, t), ae(this.element, t, e), this;
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
var f = function() {
  return f = Object.assign || function(t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      e = arguments[i];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, f.apply(this, arguments);
};
function he(n, t) {
  var e = {};
  for (var i in n)
    Object.prototype.hasOwnProperty.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(n); r < i.length; r++)
      t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (e[i[r]] = n[i[r]]);
  return e;
}
function E(n) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && n[t], i = 0;
  if (e)
    return e.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function M(n, t) {
  var e = typeof Symbol == "function" && n[Symbol.iterator];
  if (!e)
    return n;
  var i = e.call(n), r, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = i.next()).done; )
      s.push(r.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      r && !r.done && (e = i.return) && e.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function L(n, t, e) {
  if (e || arguments.length === 2)
    for (var i = 0, r = t.length, s; i < r; i++)
      (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return n.concat(s || Array.prototype.slice.call(t));
}
var T;
(function(n) {
  n.Start = "xstate.start", n.Stop = "xstate.stop", n.Raise = "xstate.raise", n.Send = "xstate.send", n.Cancel = "xstate.cancel", n.NullEvent = "", n.Assign = "xstate.assign", n.After = "xstate.after", n.DoneState = "done.state", n.DoneInvoke = "done.invoke", n.Log = "xstate.log", n.Init = "xstate.init", n.Invoke = "xstate.invoke", n.ErrorExecution = "error.execution", n.ErrorCommunication = "error.communication", n.ErrorPlatform = "error.platform", n.ErrorCustom = "xstate.error", n.Update = "xstate.update", n.Pure = "xstate.pure", n.Choose = "xstate.choose";
})(T || (T = {}));
var et;
(function(n) {
  n.Parent = "#_parent", n.Internal = "#_internal";
})(et || (et = {}));
var kt = T.Start, Xt = T.Stop, yt = T.Raise, _t = T.Send, ue = T.Cancel, Ne = T.NullEvent, $t = T.Assign, pn = T.After, yn = T.DoneState, Vt = T.Log, Pe = T.Init, zt = T.Invoke, gn = T.ErrorExecution, te = T.ErrorPlatform, ce = T.ErrorCustom, Bt = T.Update, Ie = T.Choose, Le = T.Pure;
const mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  after: pn,
  assign: $t,
  cancel: ue,
  choose: Ie,
  doneState: yn,
  error: ce,
  errorExecution: gn,
  errorPlatform: te,
  init: Pe,
  invoke: zt,
  log: Vt,
  nullEvent: Ne,
  pure: Le,
  raise: yt,
  send: _t,
  start: kt,
  stop: Xt,
  update: Bt
}, Symbol.toStringTag, { value: "Module" }));
var Re = ".", me = {}, ee = "xstate.guard", wn = "", j = process.env.NODE_ENV === "production", Nt;
function le(n, t, e) {
  e === void 0 && (e = Re);
  var i = Mt(n, e), r = Mt(t, e);
  return C(r) ? C(i) ? r === i : !1 : C(i) ? i in r : Object.keys(i).every(function(s) {
    return s in r ? le(i[s], r[s]) : !1;
  });
}
function je(n) {
  try {
    return C(n) || typeof n == "number" ? "".concat(n) : n.type;
  } catch {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
function ne(n, t) {
  try {
    return gt(n) ? n : n.toString().split(t);
  } catch {
    throw new Error("'".concat(n, "' is not a valid state path."));
  }
}
function Sn(n) {
  return typeof n == "object" && "value" in n && "context" in n && "event" in n && "_event" in n;
}
function Mt(n, t) {
  if (Sn(n))
    return n.value;
  if (gt(n))
    return Ft(n);
  if (typeof n != "string")
    return n;
  var e = ne(n, t);
  return Ft(e);
}
function Ft(n) {
  if (n.length === 1)
    return n[0];
  for (var t = {}, e = t, i = 0; i < n.length - 1; i++)
    i === n.length - 2 ? e[n[i]] = n[i + 1] : (e[n[i]] = {}, e = e[n[i]]);
  return t;
}
function bt(n, t) {
  for (var e = {}, i = Object.keys(n), r = 0; r < i.length; r++) {
    var s = i[r];
    e[s] = t(n[s], s, n, r);
  }
  return e;
}
function we(n, t, e) {
  var i, r, s = {};
  try {
    for (var o = E(Object.keys(n)), a = o.next(); !a.done; a = o.next()) {
      var h = a.value, u = n[h];
      e(u) && (s[h] = t(u, h, n));
    }
  } catch (c) {
    i = {
      error: c
    };
  } finally {
    try {
      a && !a.done && (r = o.return) && r.call(o);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return s;
}
var bn = function(n) {
  return function(t) {
    var e, i, r = t;
    try {
      for (var s = E(n), o = s.next(); !o.done; o = s.next()) {
        var a = o.value;
        r = r[a];
      }
    } catch (h) {
      e = {
        error: h
      };
    } finally {
      try {
        o && !o.done && (i = s.return) && i.call(s);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return r;
  };
};
function xn(n, t) {
  return function(e) {
    var i, r, s = e;
    try {
      for (var o = E(n), a = o.next(); !a.done; a = o.next()) {
        var h = a.value;
        s = s[t][h];
      }
    } catch (u) {
      i = {
        error: u
      };
    } finally {
      try {
        a && !a.done && (r = o.return) && r.call(o);
      } finally {
        if (i)
          throw i.error;
      }
    }
    return s;
  };
}
function Lt(n) {
  if (!n)
    return [[]];
  if (C(n))
    return [[n]];
  var t = R(Object.keys(n).map(function(e) {
    var i = n[e];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[e]] : Lt(n[e]).map(function(r) {
      return [e].concat(r);
    });
  }));
  return t;
}
function R(n) {
  var t;
  return (t = []).concat.apply(t, L([], M(n), !1));
}
function ke(n) {
  return gt(n) ? n : [n];
}
function B(n) {
  return n === void 0 ? [] : ke(n);
}
function Ht(n, t, e) {
  var i, r;
  if (D(n))
    return n(t, e.data);
  var s = {};
  try {
    for (var o = E(Object.keys(n)), a = o.next(); !a.done; a = o.next()) {
      var h = a.value, u = n[h];
      D(u) ? s[h] = u(t, e.data) : s[h] = u;
    }
  } catch (c) {
    i = {
      error: c
    };
  } finally {
    try {
      a && !a.done && (r = o.return) && r.call(o);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return s;
}
function En(n) {
  return /^(done|error)\./.test(n);
}
function Se(n) {
  return !!(n instanceof Promise || n !== null && (D(n) || typeof n == "object") && D(n.then));
}
function On(n) {
  return n !== null && typeof n == "object" && "transition" in n && typeof n.transition == "function";
}
function Mn(n, t) {
  var e, i, r = M([[], []], 2), s = r[0], o = r[1];
  try {
    for (var a = E(n), h = a.next(); !h.done; h = a.next()) {
      var u = h.value;
      t(u) ? s.push(u) : o.push(u);
    }
  } catch (c) {
    e = {
      error: c
    };
  } finally {
    try {
      h && !h.done && (i = a.return) && i.call(a);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return [s, o];
}
function ze(n, t) {
  return bt(n.states, function(e, i) {
    if (e) {
      var r = (C(t) ? void 0 : t[i]) || (e ? e.current : void 0);
      if (r)
        return {
          current: r,
          states: ze(e, r)
        };
    }
  });
}
function An(n, t) {
  return {
    current: t,
    states: ze(n, t)
  };
}
function be(n, t, e, i) {
  j || Y(!!n, "Attempting to update undefined context");
  var r = n && e.reduce(function(s, o) {
    var a, h, u = o.assignment, c = {
      state: i,
      action: o,
      _event: t
    }, d = {};
    if (D(u))
      d = u(s, t.data, c);
    else
      try {
        for (var l = E(Object.keys(u)), v = l.next(); !v.done; v = l.next()) {
          var y = v.value, p = u[y];
          d[y] = D(p) ? p(s, t.data, c) : p;
        }
      } catch (S) {
        a = {
          error: S
        };
      } finally {
        try {
          v && !v.done && (h = l.return) && h.call(l);
        } finally {
          if (a)
            throw a.error;
        }
      }
    return Object.assign({}, s, d);
  }, n);
  return r;
}
var Y = function() {
};
j || (Y = function(n, t) {
  var e = n instanceof Error ? n : void 0;
  if (!(!e && n) && console !== void 0) {
    var i = ["Warning: ".concat(t)];
    e && i.push(e), console.warn.apply(console, i);
  }
});
function gt(n) {
  return Array.isArray(n);
}
function D(n) {
  return typeof n == "function";
}
function C(n) {
  return typeof n == "string";
}
function Fe(n, t) {
  if (n)
    return C(n) ? {
      type: ee,
      name: n,
      predicate: t ? t[n] : void 0
    } : D(n) ? {
      type: ee,
      name: n.name,
      predicate: n
    } : n;
}
function Cn(n) {
  try {
    return "subscribe" in n && D(n.subscribe);
  } catch {
    return !1;
  }
}
var tt = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
Nt = {}, Nt[tt] = function() {
  return this;
}, Nt[Symbol.observable] = function() {
  return this;
};
function st(n) {
  return !!n && "__xstatenode" in n;
}
function Dn(n) {
  return !!n && typeof n.send == "function";
}
function Gt(n, t) {
  return C(n) || typeof n == "number" ? f({
    type: n
  }, t) : n;
}
function H(n, t) {
  if (!C(n) && "$$type" in n && n.$$type === "scxml")
    return n;
  var e = Gt(n);
  return f({
    name: e.type,
    data: e,
    $$type: "scxml",
    type: "external"
  }, t);
}
function ht(n, t) {
  var e = ke(t).map(function(i) {
    return typeof i > "u" || typeof i == "string" || st(i) ? {
      target: i,
      event: n
    } : f(f({}, i), {
      event: n
    });
  });
  return e;
}
function Tn(n) {
  if (!(n === void 0 || n === wn))
    return B(n);
}
function _n(n, t, e) {
  if (!j) {
    var i = n.stack ? " Stacktrace was '".concat(n.stack, "'") : "";
    if (n === t)
      console.error("Missing onError handler for invocation '".concat(e, "', error was '").concat(n, "'.").concat(i));
    else {
      var r = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e, "'. ") + "Original error: '".concat(n, "'. ").concat(i, " Current error is '").concat(t, "'.").concat(r));
    }
  }
}
function He(n, t, e, i, r) {
  var s = n.options.guards, o = {
    state: r,
    cond: t,
    _event: i
  };
  if (t.type === ee)
    return ((s == null ? void 0 : s[t.name]) || t.predicate)(e, i.data, o);
  var a = s == null ? void 0 : s[t.type];
  if (!a)
    throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(n.id, "'."));
  return a(e, i.data, o);
}
function Ye(n) {
  return typeof n == "string" ? {
    type: n
  } : n;
}
function Rt(n, t, e) {
  var i = function() {
  }, r = typeof n == "object", s = r ? n : null;
  return {
    next: ((r ? n.next : n) || i).bind(s),
    error: ((r ? n.error : t) || i).bind(s),
    complete: ((r ? n.complete : e) || i).bind(s)
  };
}
function Pt(n, t) {
  return "".concat(n, ":invocation[").concat(t, "]");
}
function ie(n) {
  return (n.type === yt || n.type === _t && n.to === et.Internal) && typeof n.delay != "number";
}
var rt = /* @__PURE__ */ H({
  type: Pe
});
function Yt(n, t) {
  return t && t[n] || void 0;
}
function pt(n, t) {
  var e;
  if (C(n) || typeof n == "number") {
    var i = Yt(n, t);
    D(i) ? e = {
      type: n,
      exec: i
    } : i ? e = i : e = {
      type: n,
      exec: void 0
    };
  } else if (D(n))
    e = {
      // Convert action to string if unnamed
      type: n.name || n.toString(),
      exec: n
    };
  else {
    var i = Yt(n.type, t);
    if (D(i))
      e = f(f({}, n), {
        exec: i
      });
    else if (i) {
      var r = i.type || n.type;
      e = f(f(f({}, i), n), {
        type: r
      });
    } else
      e = n;
  }
  return e;
}
var q = function(n, t) {
  if (!n)
    return [];
  var e = gt(n) ? n : [n];
  return e.map(function(i) {
    return pt(i, t);
  });
};
function Jt(n) {
  var t = pt(n);
  return f(f({
    id: C(n) ? n : t.id
  }, t), {
    type: t.type
  });
}
function Ue(n, t) {
  return {
    type: yt,
    event: typeof n == "function" ? n : Gt(n),
    delay: t ? t.delay : void 0,
    id: t == null ? void 0 : t.id
  };
}
function We(n, t, e, i) {
  var r = {
    _event: e
  }, s = H(D(n.event) ? n.event(t, e.data, r) : n.event), o;
  if (C(n.delay)) {
    var a = i && i[n.delay];
    o = D(a) ? a(t, e.data, r) : a;
  } else
    o = D(n.delay) ? n.delay(t, e.data, r) : n.delay;
  return f(f({}, n), {
    type: yt,
    _event: s,
    delay: o
  });
}
function ot(n, t) {
  return {
    to: t ? t.to : void 0,
    type: _t,
    event: D(n) ? n : Gt(n),
    delay: t ? t.delay : void 0,
    // TODO: don't auto-generate IDs here like that
    // there is too big chance of the ID collision
    id: t && t.id !== void 0 ? t.id : D(n) ? n.name : je(n)
  };
}
function Xe(n, t, e, i) {
  var r = {
    _event: e
  }, s = H(D(n.event) ? n.event(t, e.data, r) : n.event), o;
  if (C(n.delay)) {
    var a = i && i[n.delay];
    o = D(a) ? a(t, e.data, r) : a;
  } else
    o = D(n.delay) ? n.delay(t, e.data, r) : n.delay;
  var h = D(n.to) ? n.to(t, e.data, r) : n.to;
  return f(f({}, n), {
    to: h,
    _event: s,
    event: s.data,
    delay: o
  });
}
function de(n, t) {
  return ot(n, f(f({}, t), {
    to: et.Parent
  }));
}
function Nn(n, t, e) {
  return ot(t, f(f({}, e), {
    to: n
  }));
}
function Pn() {
  return de(Bt);
}
function In(n, t) {
  return ot(n, f(f({}, t), {
    to: function(e, i, r) {
      var s = r._event;
      return s.origin;
    }
  }));
}
var Ln = function(n, t) {
  return {
    context: n,
    event: t
  };
};
function Rn(n, t) {
  return n === void 0 && (n = Ln), {
    type: Vt,
    label: t,
    expr: n
  };
}
var $e = function(n, t, e) {
  return f(f({}, n), {
    value: C(n.expr) ? n.expr : n.expr(t, e.data, {
      _event: e
    })
  });
}, Ve = function(n) {
  return {
    type: ue,
    sendId: n
  };
};
function Be(n) {
  var t = Jt(n);
  return {
    type: T.Start,
    activity: t,
    exec: void 0
  };
}
function Ge(n) {
  var t = D(n) ? n : Jt(n);
  return {
    type: T.Stop,
    activity: t,
    exec: void 0
  };
}
function Je(n, t, e) {
  var i = D(n.activity) ? n.activity(t, e.data) : n.activity, r = typeof i == "string" ? {
    id: i
  } : i, s = {
    type: T.Stop,
    activity: r
  };
  return s;
}
var Ke = function(n) {
  return {
    type: $t,
    assignment: n
  };
};
function jn(n) {
  return typeof n == "object" && "type" in n;
}
function Ze(n, t) {
  var e = t ? "#".concat(t) : "";
  return "".concat(T.After, "(").concat(n, ")").concat(e);
}
function xt(n, t) {
  var e = "".concat(T.DoneState, ".").concat(n), i = {
    type: e,
    data: t
  };
  return i.toString = function() {
    return e;
  }, i;
}
function At(n, t) {
  var e = "".concat(T.DoneInvoke, ".").concat(n), i = {
    type: e,
    data: t
  };
  return i.toString = function() {
    return e;
  }, i;
}
function vt(n, t) {
  var e = "".concat(T.ErrorPlatform, ".").concat(n), i = {
    type: e,
    data: t
  };
  return i.toString = function() {
    return e;
  }, i;
}
function kn(n) {
  return {
    type: T.Pure,
    get: n
  };
}
function zn(n, t) {
  if (!j && (!n || typeof n == "function")) {
    var e = n;
    n = function() {
      for (var i = [], r = 0; r < arguments.length; r++)
        i[r] = arguments[r];
      var s = typeof e == "function" ? e.apply(void 0, L([], M(i), !1)) : e;
      if (!s)
        throw new Error("Attempted to forward event to undefined actor. This risks an infinite loop in the sender.");
      return s;
    };
  }
  return ot(function(i, r) {
    return r;
  }, f(f({}, t), {
    to: n
  }));
}
function Fn(n, t) {
  return de(function(e, i, r) {
    return {
      type: ce,
      data: D(n) ? n(e, i, r) : n
    };
  }, f(f({}, t), {
    to: et.Parent
  }));
}
function Hn(n) {
  return {
    type: T.Choose,
    conds: n
  };
}
var Yn = function(n) {
  var t, e, i = [];
  try {
    for (var r = E(n), s = r.next(); !s.done; s = r.next())
      for (var o = s.value, a = 0; a < o.actions.length; ) {
        if (o.actions[a].type === $t) {
          i.push(o.actions[a]), o.actions.splice(a, 1);
          continue;
        }
        a++;
      }
  } catch (h) {
    t = {
      error: h
    };
  } finally {
    try {
      s && !s.done && (e = r.return) && e.call(r);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return i;
};
function Dt(n, t, e, i, r, s, o) {
  o === void 0 && (o = !1);
  var a = o ? [] : Yn(r), h = a.length ? be(e, i, a, t) : e, u = o ? [e] : void 0, c = [];
  function d(y, p) {
    var S;
    switch (p.type) {
      case yt: {
        var m = We(p, h, i, n.options.delays);
        return s && typeof m.delay == "number" && s(m, h, i), m;
      }
      case _t:
        var g = Xe(p, h, i, n.options.delays);
        if (!j) {
          var w = p.delay;
          Y(
            !C(w) || typeof g.delay == "number",
            // tslint:disable-next-line:max-line-length
            "No delay reference for delay expression '".concat(w, "' was found on machine '").concat(n.id, "'")
          );
        }
        return s && g.to !== et.Internal && (y === "entry" ? c.push(g) : s(g, h, i)), g;
      case Vt: {
        var b = $e(p, h, i);
        return s == null || s(b, h, i), b;
      }
      case Ie: {
        var P = p, _ = (S = P.conds.find(function(nt) {
          var Q = Fe(nt.cond, n.options.guards);
          return !Q || He(n, Q, h, i, s ? void 0 : t);
        })) === null || S === void 0 ? void 0 : S.actions;
        if (!_)
          return [];
        var A = M(Dt(n, t, h, i, [{
          type: y,
          actions: q(B(_), n.options.actions)
        }], s, o), 2), N = A[0], O = A[1];
        return h = O, u == null || u.push(h), N;
      }
      case Le: {
        var _ = p.get(h, i.data);
        if (!_)
          return [];
        var k = M(Dt(n, t, h, i, [{
          type: y,
          actions: q(B(_), n.options.actions)
        }], s, o), 2), x = k[0], I = k[1];
        return h = I, u == null || u.push(h), x;
      }
      case Xt: {
        var b = Je(p, h, i);
        return s == null || s(b, e, i), b;
      }
      case $t: {
        h = be(h, i, [p], s ? void 0 : t), u == null || u.push(h);
        break;
      }
      default:
        var F = pt(p, n.options.actions), U = F.exec;
        if (s)
          s(F, h, i);
        else if (U && u) {
          var mt = u.length - 1, Zt = f(f({}, F), {
            exec: function(nt) {
              for (var Q = [], X = 1; X < arguments.length; X++)
                Q[X - 1] = arguments[X];
              U.apply(void 0, L([u[mt]], M(Q), !1));
            }
          });
          F = Zt;
        }
        return F;
    }
  }
  function l(y) {
    var p, S, m = [];
    try {
      for (var g = E(y.actions), w = g.next(); !w.done; w = g.next()) {
        var b = w.value, P = d(y.type, b);
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
      s(_, h, i);
    }), c.length = 0, m;
  }
  var v = R(r.map(l));
  return [v, h];
}
const Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  actionTypes: mn,
  after: Ze,
  assign: Ke,
  cancel: Ve,
  choose: Hn,
  done: xt,
  doneInvoke: At,
  error: vt,
  escalate: Fn,
  forwardTo: zn,
  getActionFunction: Yt,
  initEvent: rt,
  isActionObject: jn,
  log: Rn,
  pure: kn,
  raise: Ue,
  resolveActions: Dt,
  resolveLog: $e,
  resolveRaise: We,
  resolveSend: Xe,
  resolveStop: Je,
  respond: In,
  send: ot,
  sendParent: de,
  sendTo: Nn,
  sendUpdate: Pn,
  start: Be,
  stop: Ge,
  toActionObject: pt,
  toActionObjects: q,
  toActivityDefinition: Jt
}, Symbol.toStringTag, { value: "Module" }));
var xe = [], dt = function(n, t) {
  xe.push(n);
  var e = t(n);
  return xe.pop(), e;
};
function qe(n) {
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
function Wn(n, t, e, i) {
  var r, s = Ye(n.src), o = (r = t == null ? void 0 : t.options.services) === null || r === void 0 ? void 0 : r[s.type], a = n.data ? Ht(n.data, e, i) : void 0, h = o ? Qe(o, n.id, a) : qe(n.id);
  return h.meta = n, h;
}
function Qe(n, t, e) {
  var i = qe(t);
  if (i.deferred = !0, st(n)) {
    var r = i.state = dt(void 0, function() {
      return (e ? n.withContext(e) : n).initialState;
    });
    i.getSnapshot = function() {
      return r;
    };
  }
  return i;
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
  return f((t = {
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
function tn(n) {
  return Object.keys(n.states).map(function(t) {
    return n.states[t];
  });
}
function Tt(n) {
  return tn(n).filter(function(t) {
    return t.type !== "history";
  });
}
function en(n) {
  var t = [n];
  return Ut(n) ? t : t.concat(R(Tt(n).map(en)));
}
function Et(n, t) {
  var e, i, r, s, o, a, h, u, c = new Set(n), d = re(c), l = new Set(t);
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
      y && !y.done && (i = v.return) && i.call(v);
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
        d.get(p) ? d.get(p).forEach(function(k) {
          return l.add(k);
        }) : p.initialStateNodes.forEach(function(k) {
          return l.add(k);
        });
      else if (p.type === "parallel")
        try {
          for (var b = (o = void 0, E(Tt(p))), P = b.next(); !P.done; P = b.next()) {
            var _ = P.value;
            l.has(_) || (l.add(_), d.get(_) ? d.get(_).forEach(function(k) {
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
            P && !P.done && (a = b.return) && a.call(b);
          } finally {
            if (o)
              throw o.error;
          }
        }
    }
  } catch (O) {
    r = {
      error: O
    };
  } finally {
    try {
      w && !w.done && (s = g.return) && s.call(g);
    } finally {
      if (r)
        throw r.error;
    }
  }
  try {
    for (var A = E(l), N = A.next(); !N.done; N = A.next())
      for (var p = N.value, S = p.parent; S && !l.has(S); )
        l.add(S), S = S.parent;
  } catch (O) {
    h = {
      error: O
    };
  } finally {
    try {
      N && !N.done && (u = A.return) && u.call(A);
    } finally {
      if (h)
        throw h.error;
    }
  }
  return l;
}
function nn(n, t) {
  var e = t.get(n);
  if (!e)
    return {};
  if (n.type === "compound") {
    var i = e[0];
    if (i) {
      if (Ut(i))
        return i.key;
    } else
      return {};
  }
  var r = {};
  return e.forEach(function(s) {
    r[s.key] = nn(s, t);
  }), r;
}
function re(n) {
  var t, e, i = /* @__PURE__ */ new Map();
  try {
    for (var r = E(n), s = r.next(); !s.done; s = r.next()) {
      var o = s.value;
      i.has(o) || i.set(o, []), o.parent && (i.has(o.parent) || i.set(o.parent, []), i.get(o.parent).push(o));
    }
  } catch (a) {
    t = {
      error: a
    };
  } finally {
    try {
      s && !s.done && (e = r.return) && e.call(r);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return i;
}
function Bn(n, t) {
  var e = Et([n], t);
  return nn(n, re(e));
}
function Ot(n, t) {
  return Array.isArray(n) ? n.some(function(e) {
    return e === t;
  }) : n instanceof Set ? n.has(t) : !1;
}
function Gn(n) {
  return L([], M(new Set(R(L([], M(n.map(function(t) {
    return t.ownEvents;
  })), !1)))), !1);
}
function jt(n, t) {
  return t.type === "compound" ? Tt(t).some(function(e) {
    return e.type === "final" && Ot(n, e);
  }) : t.type === "parallel" ? Tt(t).every(function(e) {
    return jt(n, e);
  }) : !1;
}
function Jn(n) {
  return n === void 0 && (n = []), n.reduce(function(t, e) {
    return e.meta !== void 0 && (t[e.id] = e.meta), t;
  }, {});
}
function Ee(n) {
  return new Set(R(n.map(function(t) {
    return t.tags;
  })));
}
function rn(n, t) {
  if (n === t)
    return !0;
  if (n === void 0 || t === void 0)
    return !1;
  if (C(n) || C(t))
    return n === t;
  var e = Object.keys(n), i = Object.keys(t);
  return e.length === i.length && e.every(function(r) {
    return rn(n[r], t[r]);
  });
}
function Kn(n) {
  return typeof n != "object" || n === null ? !1 : "value" in n && "_event" in n;
}
function Zn(n, t) {
  var e = n.exec, i = f(f({}, n), {
    exec: e !== void 0 ? function() {
      return e(t.context, t.event, {
        action: n,
        state: t,
        _event: t._event
      });
    } : void 0
  });
  return i;
}
var K = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t) {
      var e = this, i;
      this.actions = [], this.activities = me, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || me, this.meta = Jn(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (i = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = t.machine, Object.defineProperty(this, "nextEvents", {
        get: function() {
          return Gn(e.configuration);
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
      var i = rt;
      return new n({
        value: t,
        context: e,
        _event: i,
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
        var i = rt;
        return new n({
          value: t.value,
          context: e,
          _event: i,
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
      var i = this;
      if (t === void 0 && (t = this.value), e === void 0 && (e = "."), C(t))
        return [t];
      var r = Object.keys(t);
      return r.concat.apply(r, L([], M(r.map(function(s) {
        return i.toStrings(t[s], e).map(function(o) {
          return s + e + o;
        });
      })), !1));
    }, n.prototype.toJSON = function() {
      var t = this;
      t.configuration, t.transitions;
      var e = t.tags;
      t.machine;
      var i = he(t, ["configuration", "transitions", "tags", "machine"]);
      return f(f({}, i), {
        tags: Array.from(e)
      });
    }, n.prototype.matches = function(t) {
      return le(t, this.value);
    }, n.prototype.hasTag = function(t) {
      return this.tags.has(t);
    }, n.prototype.can = function(t) {
      var e;
      j && Y(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
      var i = (e = this.machine) === null || e === void 0 ? void 0 : e.getTransitionData(this, t);
      return !!(i != null && i.transitions.length) && // Check that at least one transition is not forbidden
      i.transitions.some(function(r) {
        return r.target !== void 0 || r.actions.length;
      });
    }, n;
  }()
), qn = {
  deferEvents: !1
}, Oe = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t) {
      this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = f(f({}, qn), t);
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
), qt = /* @__PURE__ */ new Map(), Qn = 0, wt = {
  bookId: function() {
    return "x:".concat(Qn++);
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
function fe() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  j || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
function ti() {
  var n = fe();
  if (n && "__xstate__" in n)
    return n.__xstate__;
}
function ei(n) {
  if (fe()) {
    var t = ti();
    t && t.register(n);
  }
}
function ni(n, t) {
  t === void 0 && (t = {});
  var e = n.initialState, i = /* @__PURE__ */ new Set(), r = [], s = !1, o = function() {
    if (!s) {
      for (s = !0; r.length > 0; ) {
        var u = r.shift();
        e = n.transition(e, u, h), i.forEach(function(c) {
          return c.next(e);
        });
      }
      s = !1;
    }
  }, a = Vn({
    id: t.id,
    send: function(u) {
      r.push(u), o();
    },
    getSnapshot: function() {
      return e;
    },
    subscribe: function(u, c, d) {
      var l = Rt(u, c, d);
      return i.add(l), l.next(e), {
        unsubscribe: function() {
          i.delete(l);
        }
      };
    }
  }), h = {
    parent: t.parent,
    self: a,
    id: t.id || "anonymous",
    observers: i
  };
  return e = n.start ? n.start(h) : e, a;
}
var ii = {
  sync: !1,
  autoForward: !1
}, z;
(function(n) {
  n[n.NotStarted = 0] = "NotStarted", n[n.Running = 1] = "Running", n[n.Stopped = 2] = "Stopped";
})(z || (z = {}));
var ri = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t, e) {
      e === void 0 && (e = n.defaultOptions);
      var i = this;
      this.machine = t, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = !1, this.status = z.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(c, d) {
        if (gt(c))
          return i.batch(c), i.state;
        var l = H(Gt(c, d));
        if (i.status === z.Stopped)
          return j || Y(!1, 'Event "'.concat(l.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(l.data))), i.state;
        if (i.status !== z.Running && !i.options.deferEvents)
          throw new Error('Event "'.concat(l.name, '" was sent to uninitialized service "').concat(
            i.machine.id,
            `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `
          ).concat(JSON.stringify(l.data)));
        return i.scheduler.schedule(function() {
          i.forward(l);
          var v = i._nextState(l);
          i.update(v, l);
        }), i._state;
      }, this.sendTo = function(c, d, l) {
        var v = i.parent && (d === et.Parent || i.parent.id === d), y = v ? i.parent : C(d) ? d === et.Internal ? i : i.children.get(d) || wt.get(d) : Dn(d) ? d : void 0;
        if (!y) {
          if (!v)
            throw new Error("Unable to send event to child '".concat(d, "' from service '").concat(i.id, "'."));
          j || Y(!1, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(c.type));
          return;
        }
        if ("machine" in y) {
          if (i.status !== z.Stopped || i.parent !== y || // we need to send events to the parent from exit handlers of a machine that reached its final state
          i.state.done) {
            var p = f(f({}, c), {
              name: c.name === ce ? "".concat(vt(i.id)) : c.name,
              origin: i.sessionId
            });
            !l && i.machine.config.predictableActionArguments ? i._outgoingQueue.push([y, p]) : y.send(p);
          }
        } else
          !l && i.machine.config.predictableActionArguments ? i._outgoingQueue.push([y, c.data]) : y.send(c.data);
      }, this._exec = function(c, d, l, v) {
        v === void 0 && (v = i.machine.options.actions);
        var y = c.exec || Yt(c.type, v), p = D(y) ? y : y ? y.exec : c.exec;
        if (p)
          try {
            return p(d, l.data, i.machine.config.predictableActionArguments ? {
              action: c,
              _event: l
            } : {
              action: c,
              state: i.state,
              _event: l
            });
          } catch (U) {
            throw i.parent && i.parent.send({
              type: "xstate.error",
              data: U
            }), U;
          }
        switch (c.type) {
          case yt: {
            var S = c;
            i.defer(S);
            break;
          }
          case _t:
            var m = c;
            if (typeof m.delay == "number") {
              i.defer(m);
              return;
            } else
              m.to ? i.sendTo(m._event, m.to, l === rt) : i.send(m._event);
            break;
          case ue:
            i.cancel(c.sendId);
            break;
          case kt: {
            if (i.status !== z.Running)
              return;
            var g = c.activity;
            if (
              // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
              !i.machine.config.predictableActionArguments && !i.state.activities[g.id || g.type]
            )
              break;
            if (g.type === T.Invoke) {
              var w = Ye(g.src), b = i.machine.options.services ? i.machine.options.services[w.type] : void 0, P = g.id, _ = g.data;
              j || Y(
                !("forward" in g),
                // tslint:disable-next-line:max-line-length
                "`forward` property is deprecated (found in invocation of '".concat(g.src, "' in in machine '").concat(i.machine.id, "'). ") + "Please use `autoForward` instead."
              );
              var A = "autoForward" in g ? g.autoForward : !!g.forward;
              if (!b) {
                j || Y(!1, "No service found for invocation '".concat(g.src, "' in machine '").concat(i.machine.id, "'."));
                return;
              }
              var N = _ ? Ht(_, d, l) : void 0;
              if (typeof b == "string")
                return;
              var O = D(b) ? b(d, l.data, {
                data: N,
                src: w,
                meta: g.meta
              }) : b;
              if (!O)
                return;
              var k = void 0;
              st(O) && (O = N ? O.withContext(N) : O, k = {
                autoForward: A
              }), i.spawn(O, P, k);
            } else
              i.spawnActivity(g);
            break;
          }
          case Xt: {
            i.stopChild(c.activity.id);
            break;
          }
          case Vt:
            var x = c, I = x.label, F = x.value;
            I ? i.logger(I, F) : i.logger(F);
            break;
          default:
            j || Y(!1, "No implementation found for action type '".concat(c.type, "'"));
            break;
        }
      };
      var r = f(f({}, n.defaultOptions), e), s = r.clock, o = r.logger, a = r.parent, h = r.id, u = h !== void 0 ? h : t.id;
      this.id = u, this.logger = o, this.clock = s, this.parent = a, this.options = r, this.scheduler = new Oe({
        deferEvents: this.options.deferEvents
      }), this.sessionId = wt.bookId();
    }
    return Object.defineProperty(n.prototype, "initialState", {
      get: function() {
        var t = this;
        return this._initialState ? this._initialState : dt(this, function() {
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
        return j || Y(this.status !== z.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.execute = function(t, e) {
      var i, r;
      try {
        for (var s = E(t.actions), o = s.next(); !o.done; o = s.next()) {
          var a = o.value;
          this.exec(a, t, e);
        }
      } catch (h) {
        i = {
          error: h
        };
      } finally {
        try {
          o && !o.done && (r = s.return) && r.call(s);
        } finally {
          if (i)
            throw i.error;
        }
      }
    }, n.prototype.update = function(t, e) {
      var i, r, s, o, a, h, u, c, d = this;
      if (t._sessionid = this.sessionId, this._state = t, (!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
      // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
      e === rt) && this.options.execute)
        this.execute(this.state);
      else
        for (var l = void 0; l = this._outgoingQueue.shift(); )
          l[0].send(l[1]);
      if (this.children.forEach(function(O) {
        d.state.children[O.id] = O;
      }), this.devTools && this.devTools.send(e.data, t), t.event)
        try {
          for (var v = E(this.eventListeners), y = v.next(); !y.done; y = v.next()) {
            var p = y.value;
            p(t.event);
          }
        } catch (O) {
          i = {
            error: O
          };
        } finally {
          try {
            y && !y.done && (r = v.return) && r.call(v);
          } finally {
            if (i)
              throw i.error;
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
        a = {
          error: O
        };
      } finally {
        try {
          w && !w.done && (h = g.return) && h.call(g);
        } finally {
          if (a)
            throw a.error;
        }
      }
      if (this.state.done) {
        var P = t.configuration.find(function(O) {
          return O.type === "final" && O.parent === d.machine;
        }), _ = P && P.doneData ? Ht(P.doneData, t.context, e) : void 0;
        this._doneEvent = At(this.id, _);
        try {
          for (var A = E(this.doneListeners), N = A.next(); !N.done; N = A.next()) {
            var p = N.value;
            p(this._doneEvent);
          }
        } catch (O) {
          u = {
            error: O
          };
        } finally {
          try {
            N && !N.done && (c = A.return) && c.call(A);
          } finally {
            if (u)
              throw u.error;
          }
        }
        this._stop(), this._stopChildren(), wt.free(this.sessionId);
      }
    }, n.prototype.onTransition = function(t) {
      return this.listeners.add(t), this.status === z.Running && t(this.state, this.state.event), this;
    }, n.prototype.subscribe = function(t, e, i) {
      var r = this, s = Rt(t, e, i);
      this.listeners.add(s.next), this.status !== z.NotStarted && s.next(this.state);
      var o = function() {
        r.doneListeners.delete(o), r.stopListeners.delete(o), s.complete();
      };
      return this.status === z.Stopped ? s.complete() : (this.onDone(o), this.onStop(o)), {
        unsubscribe: function() {
          r.listeners.delete(s.next), r.doneListeners.delete(o), r.stopListeners.delete(o);
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
      return this.status === z.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t), this;
    }, n.prototype.off = function(t) {
      return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this;
    }, n.prototype.start = function(t) {
      var e = this;
      if (this.status === z.Running)
        return this;
      this.machine._init(), wt.register(this.sessionId, this), this.initialized = !0, this.status = z.Running;
      var i = t === void 0 ? this.initialState : dt(this, function() {
        return Kn(t) ? e.machine.resolveState(t) : e.machine.resolveState(K.from(t, e.machine.context));
      });
      return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
        e.update(i, rt);
      }), this;
    }, n.prototype._stopChildren = function() {
      this.children.forEach(function(t) {
        D(t.stop) && t.stop();
      }), this.children.clear();
    }, n.prototype._stop = function() {
      var t, e, i, r, s, o, a, h, u, c;
      try {
        for (var d = E(this.listeners), l = d.next(); !l.done; l = d.next()) {
          var v = l.value;
          this.listeners.delete(v);
        }
      } catch (A) {
        t = {
          error: A
        };
      } finally {
        try {
          l && !l.done && (e = d.return) && e.call(d);
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
      } catch (A) {
        i = {
          error: A
        };
      } finally {
        try {
          p && !p.done && (r = y.return) && r.call(y);
        } finally {
          if (i)
            throw i.error;
        }
      }
      try {
        for (var S = E(this.contextListeners), m = S.next(); !m.done; m = S.next()) {
          var v = m.value;
          this.contextListeners.delete(v);
        }
      } catch (A) {
        s = {
          error: A
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
      } catch (A) {
        a = {
          error: A
        };
      } finally {
        try {
          w && !w.done && (h = g.return) && h.call(g);
        } finally {
          if (a)
            throw a.error;
        }
      }
      if (!this.initialized)
        return this;
      this.initialized = !1, this.status = z.Stopped, this._initialState = void 0;
      try {
        for (var b = E(Object.keys(this.delayedEventsMap)), P = b.next(); !P.done; P = b.next()) {
          var _ = P.value;
          this.clock.clearTimeout(this.delayedEventsMap[_]);
        }
      } catch (A) {
        u = {
          error: A
        };
      } finally {
        try {
          P && !P.done && (c = b.return) && c.call(b);
        } finally {
          if (u)
            throw u.error;
        }
      }
      this.scheduler.clear(), this.scheduler = new Oe({
        deferEvents: this.options.deferEvents
      });
    }, n.prototype.stop = function() {
      var t = this, e = this.scheduler;
      return this._stop(), e.schedule(function() {
        var i;
        if (!(!((i = t._state) === null || i === void 0) && i.done)) {
          var r = H({
            type: "xstate.stop"
          }), s = dt(t, function() {
            var o = R(L([], M(t.state.configuration), !1).sort(function(d, l) {
              return l.order - d.order;
            }).map(function(d) {
              return q(d.onExit, t.machine.options.actions);
            })), a = M(Dt(t.machine, t.state, t.state.context, r, [{
              type: "exit",
              actions: o
            }], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2), h = a[0], u = a[1], c = new K({
              value: t.state.value,
              context: u,
              _event: r,
              _sessionid: t.sessionId,
              historyValue: void 0,
              history: t.state,
              actions: h.filter(function(d) {
                return !ie(d);
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
          t.update(s, r), t._stopChildren(), wt.free(t.sessionId);
        }
      }), this;
    }, n.prototype.batch = function(t) {
      var e = this;
      if (this.status === z.NotStarted && this.options.deferEvents)
        j || Y(!1, "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
      else if (this.status !== z.Running)
        throw new Error(
          // tslint:disable-next-line:max-line-length
          "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
        );
      if (t.length) {
        var i = !!this.machine.config.predictableActionArguments && this._exec;
        this.scheduler.schedule(function() {
          var r, s, o = e.state, a = !1, h = [], u = function(v) {
            var y = H(v);
            e.forward(y), o = dt(e, function() {
              return e.machine.transition(o, y, void 0, i || void 0);
            }), h.push.apply(h, L([], M(e.machine.config.predictableActionArguments ? o.actions : o.actions.map(function(p) {
              return Zn(p, o);
            })), !1)), a = a || !!o.changed;
          };
          try {
            for (var c = E(t), d = c.next(); !d.done; d = c.next()) {
              var l = d.value;
              u(l);
            }
          } catch (v) {
            r = {
              error: v
            };
          } finally {
            try {
              d && !d.done && (s = c.return) && s.call(c);
            } finally {
              if (r)
                throw r.error;
            }
          }
          o.changed = a, o.actions = h, e.update(o, H(t[t.length - 1]));
        });
      }
    }, n.prototype.sender = function(t) {
      return this.send.bind(this, t);
    }, n.prototype._nextState = function(t, e) {
      var i = this;
      e === void 0 && (e = !!this.machine.config.predictableActionArguments && this._exec);
      var r = H(t);
      if (r.name.indexOf(te) === 0 && !this.state.nextEvents.some(function(o) {
        return o.indexOf(te) === 0;
      }))
        throw r.data.data;
      var s = dt(this, function() {
        return i.machine.transition(i.state, r, void 0, e || void 0);
      });
      return s;
    }, n.prototype.nextState = function(t) {
      return this._nextState(t, !1);
    }, n.prototype.forward = function(t) {
      var e, i;
      try {
        for (var r = E(this.forwardTo), s = r.next(); !s.done; s = r.next()) {
          var o = s.value, a = this.children.get(o);
          if (!a)
            throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(o, "'."));
          a.send(t);
        }
      } catch (h) {
        e = {
          error: h
        };
      } finally {
        try {
          s && !s.done && (i = r.return) && i.call(r);
        } finally {
          if (e)
            throw e.error;
        }
      }
    }, n.prototype.defer = function(t) {
      var e = this, i = this.clock.setTimeout(function() {
        "to" in t && t.to ? e.sendTo(t._event, t.to, !0) : e.send(t._event);
      }, t.delay);
      t.id && (this.delayedEventsMap[t.id] = i);
    }, n.prototype.cancel = function(t) {
      this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t];
    }, n.prototype.exec = function(t, e, i) {
      i === void 0 && (i = this.machine.options.actions), this._exec(t, e.context, e._event, i);
    }, n.prototype.removeChild = function(t) {
      var e;
      this.children.delete(t), this.forwardTo.delete(t), (e = this.state) === null || e === void 0 || delete e.children[t];
    }, n.prototype.stopChild = function(t) {
      var e = this.children.get(t);
      e && (this.removeChild(t), D(e.stop) && e.stop());
    }, n.prototype.spawn = function(t, e, i) {
      if (this.status !== z.Running)
        return Qe(t, e);
      if (Se(t))
        return this.spawnPromise(Promise.resolve(t), e);
      if (D(t))
        return this.spawnCallback(t, e);
      if ($n(t))
        return this.spawnActor(t, e);
      if (Cn(t))
        return this.spawnObservable(t, e);
      if (st(t))
        return this.spawnMachine(t, f(f({}, i), {
          id: e
        }));
      if (On(t))
        return this.spawnBehavior(t, e);
      throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof t, '".'));
    }, n.prototype.spawnMachine = function(t, e) {
      var i = this;
      e === void 0 && (e = {});
      var r = new n(t, f(f({}, this.options), {
        parent: this,
        id: e.id || t.id
      })), s = f(f({}, ii), e);
      s.sync && r.onTransition(function(a) {
        i.send(Bt, {
          state: a,
          id: r.id
        });
      });
      var o = r;
      return this.children.set(r.id, o), s.autoForward && this.forwardTo.add(r.id), r.onDone(function(a) {
        i.removeChild(r.id), i.send(H(a, {
          origin: r.id
        }));
      }).start(), o;
    }, n.prototype.spawnBehavior = function(t, e) {
      var i = ni(t, {
        id: e,
        parent: this
      });
      return this.children.set(e, i), i;
    }, n.prototype.spawnPromise = function(t, e) {
      var i, r = this, s = !1, o;
      t.then(function(h) {
        s || (o = h, r.removeChild(e), r.send(H(At(e, h), {
          origin: e
        })));
      }, function(h) {
        if (!s) {
          r.removeChild(e);
          var u = vt(e, h);
          try {
            r.send(H(u, {
              origin: e
            }));
          } catch (c) {
            _n(h, c, e), r.devTools && r.devTools.send(u, r.state), r.machine.strict && r.stop();
          }
        }
      });
      var a = (i = {
        id: e,
        send: function() {
        },
        subscribe: function(h, u, c) {
          var d = Rt(h, u, c), l = !1;
          return t.then(function(v) {
            l || (d.next(v), !l && d.complete());
          }, function(v) {
            l || d.error(v);
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
      }, i[tt] = function() {
        return this;
      }, i);
      return this.children.set(e, a), a;
    }, n.prototype.spawnCallback = function(t, e) {
      var i, r = this, s = !1, o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), h, u = function(l) {
        h = l, a.forEach(function(v) {
          return v(l);
        }), !s && r.send(H(l, {
          origin: e
        }));
      }, c;
      try {
        c = t(u, function(l) {
          o.add(l);
        });
      } catch (l) {
        this.send(vt(e, l));
      }
      if (Se(c))
        return this.spawnPromise(c, e);
      var d = (i = {
        id: e,
        send: function(l) {
          return o.forEach(function(v) {
            return v(l);
          });
        },
        subscribe: function(l) {
          var v = Rt(l);
          return a.add(v.next), {
            unsubscribe: function() {
              a.delete(v.next);
            }
          };
        },
        stop: function() {
          s = !0, D(c) && c();
        },
        toJSON: function() {
          return {
            id: e
          };
        },
        getSnapshot: function() {
          return h;
        }
      }, i[tt] = function() {
        return this;
      }, i);
      return this.children.set(e, d), d;
    }, n.prototype.spawnObservable = function(t, e) {
      var i, r = this, s, o = t.subscribe(function(h) {
        s = h, r.send(H(h, {
          origin: e
        }));
      }, function(h) {
        r.removeChild(e), r.send(H(vt(e, h), {
          origin: e
        }));
      }, function() {
        r.removeChild(e), r.send(H(At(e), {
          origin: e
        }));
      }), a = (i = {
        id: e,
        send: function() {
        },
        subscribe: function(h, u, c) {
          return t.subscribe(h, u, c);
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
      }, i[tt] = function() {
        return this;
      }, i);
      return this.children.set(e, a), a;
    }, n.prototype.spawnActor = function(t, e) {
      return this.children.set(e, t), t;
    }, n.prototype.spawnActivity = function(t) {
      var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
      if (!e) {
        j || Y(!1, "No implementation found for activity '".concat(t.type, "'"));
        return;
      }
      var i = e(this.state.context, t);
      this.spawnEffect(t.id, i);
    }, n.prototype.spawnEffect = function(t, e) {
      var i;
      this.children.set(t, (i = {
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
      }, i[tt] = function() {
        return this;
      }, i));
    }, n.prototype.attachDev = function() {
      var t = fe();
      if (this.options.devTools && t) {
        if (t.__REDUX_DEVTOOLS_EXTENSION__) {
          var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
          this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(f(f({
            name: this.id,
            autoPause: !0,
            stateSanitizer: function(i) {
              return {
                value: i.value,
                context: i.context,
                actions: i.actions
              };
            }
          }, e), {
            features: f({
              jump: !1,
              skip: !1
            }, e ? e.features : void 0)
          }), this.machine), this.devTools.init(this.state);
        }
        ei(this);
      }
    }, n.prototype.toJSON = function() {
      return {
        id: this.id
      };
    }, n.prototype[tt] = function() {
      return this;
    }, n.prototype.getSnapshot = function() {
      return this.status === z.NotStarted ? this.initialState : this._state;
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
    }, n.interpret = sn, n;
  }()
);
function sn(n, t) {
  var e = new ri(n, t);
  return e;
}
function si(n) {
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
  return f(f({
    type: zt
  }, n), {
    toJSON: function() {
      n.onDone, n.onError;
      var t = he(n, ["onDone", "onError"]);
      return f(f({}, t), {
        type: zt,
        src: si(n.src)
      });
    }
  });
}
var ft = "", se = "#", St = "*", ut = {}, ct = function(n) {
  return n[0] === se;
}, oi = function() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
}, ai = function(n, t, e) {
  var i = e.slice(0, -1).some(function(s) {
    return !("cond" in s) && !("in" in s) && (C(s.target) || st(s.target));
  }), r = t === ft ? "the transient event" : "event '".concat(t, "'");
  Y(!i, "One or more transitions for ".concat(r, " on state '").concat(n.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, hi = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t, e, i, r) {
      i === void 0 && (i = "context" in t ? t.context : void 0);
      var s = this, o;
      this.config = t, this._context = i, this.order = -1, this.__xstatenode = !0, this.__cache = {
        events: void 0,
        relativeValue: /* @__PURE__ */ new Map(),
        initialStateValue: void 0,
        initialState: void 0,
        on: void 0,
        transitions: void 0,
        candidates: {},
        delayedTransitions: void 0
      }, this.idMap = {}, this.tags = [], this.options = Object.assign(oi(), e), this.parent = r == null ? void 0 : r.parent, this.key = this.config.key || (r == null ? void 0 : r.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Re), this.id = this.config.id || L([this.machine.key], M(this.path), !1).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (o = this.config.schema) !== null && o !== void 0 ? o : {}, this.description = this.config.description, j || Y(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? bt(this.config.states, function(u, c) {
        var d, l = new n(u, {}, void 0, {
          parent: s,
          key: c
        });
        return Object.assign(s.idMap, f((d = {}, d[l.id] = l, d), l.idMap)), l;
      }) : ut;
      var a = 0;
      function h(u) {
        var c, d;
        u.order = a++;
        try {
          for (var l = E(tn(u)), v = l.next(); !v.done; v = l.next()) {
            var y = v.value;
            h(y);
          }
        } catch (p) {
          c = {
            error: p
          };
        } finally {
          try {
            v && !v.done && (d = l.return) && d.call(l);
          } finally {
            if (c)
              throw c.error;
          }
        }
      }
      h(this), this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(u) {
        var c = u.event;
        return c === ft;
      }) : ft in this.config.on : !1), this.strict = !!this.config.strict, this.onEntry = B(this.config.entry || this.config.onEntry).map(function(u) {
        return pt(u);
      }), this.onExit = B(this.config.exit || this.config.onExit).map(function(u) {
        return pt(u);
      }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = B(this.config.invoke).map(function(u, c) {
        var d, l;
        if (st(u)) {
          var v = Pt(s.id, c);
          return s.machine.options.services = f((d = {}, d[v] = u, d), s.machine.options.services), It({
            src: v,
            id: v
          });
        } else if (C(u.src)) {
          var v = u.id || Pt(s.id, c);
          return It(f(f({}, u), {
            id: v,
            src: u.src
          }));
        } else if (st(u.src) || D(u.src)) {
          var v = u.id || Pt(s.id, c);
          return s.machine.options.services = f((l = {}, l[v] = u.src, l), s.machine.options.services), It(f(f({
            id: v
          }, u), {
            src: v
          }));
        } else {
          var y = u.src;
          return It(f(f({
            id: Pt(s.id, c)
          }, u), {
            src: y
          }));
        }
      }), this.activities = B(this.config.activities).concat(this.invoke).map(function(u) {
        return Jt(u);
      }), this.transition = this.transition.bind(this), this.tags = B(this.config.tags);
    }
    return n.prototype._init = function() {
      this.__cache.transitions || en(this).forEach(function(t) {
        return t.on;
      });
    }, n.prototype.withConfig = function(t, e) {
      var i = this.options, r = i.actions, s = i.activities, o = i.guards, a = i.services, h = i.delays;
      return new n(this.config, {
        actions: f(f({}, r), t.actions),
        activities: f(f({}, s), t.activities),
        guards: f(f({}, o), t.guards),
        services: f(f({}, a), t.services),
        delays: f(f({}, h), t.delays)
      }, e ?? this.context);
    }, n.prototype.withContext = function(t) {
      return new n(this.config, this.options, t);
    }, Object.defineProperty(n.prototype, "context", {
      get: function() {
        return D(this._context) ? this._context() : this._context;
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
        return this.__cache.on = t.reduce(function(e, i) {
          return e[i.eventType] = e[i.eventType] || [], e[i.eventType].push(i), e;
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
      var e = t === ft, i = this.transitions.filter(function(r) {
        var s = r.eventType === t;
        return e ? s : s || r.eventType === St;
      });
      return this.__cache.candidates[t] = i, i;
    }, n.prototype.getDelayedTransitions = function() {
      var t = this, e = this.config.after;
      if (!e)
        return [];
      var i = function(s, o) {
        var a = D(s) ? "".concat(t.id, ":delay[").concat(o, "]") : s, h = Ze(a, t.id);
        return t.onEntry.push(ot(h, {
          delay: s
        })), t.onExit.push(Ve(h)), h;
      }, r = gt(e) ? e.map(function(s, o) {
        var a = i(s.delay, o);
        return f(f({}, s), {
          event: a
        });
      }) : R(Object.keys(e).map(function(s, o) {
        var a = e[s], h = C(a) ? {
          target: a
        } : a, u = isNaN(+s) ? s : +s, c = i(u, o);
        return B(h).map(function(d) {
          return f(f({}, d), {
            event: c,
            delay: u
          });
        });
      }));
      return r.map(function(s) {
        var o = s.delay;
        return f(f({}, t.formatTransition(s)), {
          delay: o
        });
      });
    }, n.prototype.getStateNodes = function(t) {
      var e, i = this;
      if (!t)
        return [];
      var r = t instanceof K ? t.value : Mt(t, this.delimiter);
      if (C(r)) {
        var s = this.getStateNode(r).initial;
        return s !== void 0 ? this.getStateNodes((e = {}, e[r] = s, e)) : [this, this.states[r]];
      }
      var o = Object.keys(r), a = [this];
      return a.push.apply(a, L([], M(R(o.map(function(h) {
        return i.getStateNode(h).getStateNodes(r[h]);
      }))), !1)), a;
    }, n.prototype.handles = function(t) {
      var e = je(t);
      return this.events.includes(e);
    }, n.prototype.resolveState = function(t) {
      var e = t instanceof K ? t : K.create(t), i = Array.from(Et([], this.getStateNodes(e.value)));
      return new K(f(f({}, e), {
        value: this.resolve(e.value),
        configuration: i,
        done: jt(i, this),
        tags: Ee(i),
        machine: this.machine
      }));
    }, n.prototype.transitionLeafNode = function(t, e, i) {
      var r = this.getStateNode(t), s = r.next(e, i);
      return !s || !s.transitions.length ? this.next(e, i) : s;
    }, n.prototype.transitionCompoundNode = function(t, e, i) {
      var r = Object.keys(t), s = this.getStateNode(r[0]), o = s._transition(t[r[0]], e, i);
      return !o || !o.transitions.length ? this.next(e, i) : o;
    }, n.prototype.transitionParallelNode = function(t, e, i) {
      var r, s, o = {};
      try {
        for (var a = E(Object.keys(t)), h = a.next(); !h.done; h = a.next()) {
          var u = h.value, c = t[u];
          if (c) {
            var d = this.getStateNode(u), l = d._transition(c, e, i);
            l && (o[u] = l);
          }
        }
      } catch (m) {
        r = {
          error: m
        };
      } finally {
        try {
          h && !h.done && (s = a.return) && s.call(a);
        } finally {
          if (r)
            throw r.error;
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
        return this.next(e, i);
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
    }, n.prototype._transition = function(t, e, i) {
      return C(t) ? this.transitionLeafNode(t, e, i) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, e, i) : this.transitionParallelNode(t, e, i);
    }, n.prototype.getTransitionData = function(t, e) {
      return this._transition(t.value, t, H(e));
    }, n.prototype.next = function(t, e) {
      var i, r, s = this, o = e.name, a = [], h = [], u;
      try {
        for (var c = E(this.getCandidates(o)), d = c.next(); !d.done; d = c.next()) {
          var l = d.value, v = l.cond, y = l.in, p = t.context, S = y ? C(y) && ct(y) ? (
            // Check if in state by ID
            t.matches(Mt(this.getStateNodeById(y).path, this.delimiter))
          ) : (
            // Check if in state by relative grandparent
            le(Mt(y, this.delimiter), bn(this.path.slice(0, -2))(t.value))
          ) : !0, m = !1;
          try {
            m = !v || He(this.machine, v, p, e, t);
          } catch (b) {
            throw new Error("Unable to evaluate guard '".concat(v.name || v.type, "' in transition for event '").concat(o, "' in state node '").concat(this.id, `':
`).concat(b.message));
          }
          if (m && S) {
            l.target !== void 0 && (h = l.target), a.push.apply(a, L([], M(l.actions), !1)), u = l;
            break;
          }
        }
      } catch (b) {
        i = {
          error: b
        };
      } finally {
        try {
          d && !d.done && (r = c.return) && r.call(c);
        } finally {
          if (i)
            throw i.error;
        }
      }
      if (u) {
        if (!h.length)
          return {
            transitions: [u],
            exitSet: [],
            configuration: t.value ? [this] : [],
            source: t,
            actions: a
          };
        var g = R(h.map(function(b) {
          return s.getRelativeStateNodes(b, t.historyValue);
        })), w = !!u.internal;
        return {
          transitions: [u],
          exitSet: w ? [] : R(h.map(function(b) {
            return s.getPotentiallyReenteringNodes(b);
          })),
          configuration: g,
          source: t,
          actions: a
        };
      }
    }, n.prototype.getPotentiallyReenteringNodes = function(t) {
      if (this.order < t.order)
        return [this];
      for (var e = [], i = this, r = t; i && i !== r; )
        e.push(i), i = i.parent;
      return i !== r ? [] : (e.push(r), e);
    }, n.prototype.getActions = function(t, e, i, r, s, o, a) {
      var h, u, c, d, l = this, v = o ? Et([], this.getStateNodes(o.value)) : [], y = /* @__PURE__ */ new Set();
      try {
        for (var p = E(Array.from(t).sort(function(x, I) {
          return x.order - I.order;
        })), S = p.next(); !S.done; S = p.next()) {
          var m = S.value;
          (!Ot(v, m) || Ot(i.exitSet, m) || m.parent && y.has(m.parent)) && y.add(m);
        }
      } catch (x) {
        h = {
          error: x
        };
      } finally {
        try {
          S && !S.done && (u = p.return) && u.call(p);
        } finally {
          if (h)
            throw h.error;
        }
      }
      try {
        for (var g = E(v), w = g.next(); !w.done; w = g.next()) {
          var m = w.value;
          (!Ot(t, m) || Ot(i.exitSet, m.parent)) && i.exitSet.push(m);
        }
      } catch (x) {
        c = {
          error: x
        };
      } finally {
        try {
          w && !w.done && (d = g.return) && d.call(g);
        } finally {
          if (c)
            throw c.error;
        }
      }
      i.exitSet.sort(function(x, I) {
        return I.order - x.order;
      });
      var b = Array.from(y).sort(function(x, I) {
        return x.order - I.order;
      }), P = new Set(i.exitSet), _ = R(b.map(function(x) {
        var I = [];
        if (x.type !== "final")
          return I;
        var F = x.parent;
        if (!F.parent)
          return I;
        I.push(
          xt(x.id, x.doneData),
          // TODO: deprecate - final states should not emit done events for their own state.
          xt(F.id, x.doneData ? Ht(x.doneData, r, s) : void 0)
        );
        var U = F.parent;
        return U.type === "parallel" && Tt(U).every(function(mt) {
          return jt(i.configuration, mt);
        }) && I.push(xt(U.id)), I;
      })), A = b.map(function(x) {
        var I = x.onEntry, F = x.activities.map(function(U) {
          return Be(U);
        });
        return {
          type: "entry",
          actions: q(a ? L(L([], M(I), !1), M(F), !1) : L(L([], M(F), !1), M(I), !1), l.machine.options.actions)
        };
      }).concat({
        type: "state_done",
        actions: _.map(function(x) {
          return Ue(x);
        })
      }), N = Array.from(P).map(function(x) {
        return {
          type: "exit",
          actions: q(L(L([], M(x.onExit), !1), M(x.activities.map(function(I) {
            return Ge(I);
          })), !1), l.machine.options.actions)
        };
      }), O = N.concat({
        type: "transition",
        actions: q(i.actions, this.machine.options.actions)
      }).concat(A);
      if (e) {
        var k = q(R(L([], M(t), !1).sort(function(x, I) {
          return I.order - x.order;
        }).map(function(x) {
          return x.onExit;
        })), this.machine.options.actions).filter(function(x) {
          return !ie(x);
        });
        return O.concat({
          type: "stop",
          actions: k
        });
      }
      return O;
    }, n.prototype.transition = function(t, e, i, r) {
      t === void 0 && (t = this.initialState);
      var s = H(e), o;
      if (t instanceof K)
        o = i === void 0 ? t : this.resolveState(K.from(t, i));
      else {
        var a = C(t) ? this.resolve(Ft(this.getResolvedPath(t))) : this.resolve(t), h = i ?? this.machine.context;
        o = this.resolveState(K.from(a, h));
      }
      if (!j && s.name === St)
        throw new Error("An event cannot have the wildcard type ('".concat(St, "')"));
      if (this.strict && !this.events.includes(s.name) && !En(s.name))
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(s.name, "'"));
      var u = this._transition(o.value, o, s) || {
        transitions: [],
        configuration: [],
        exitSet: [],
        source: o,
        actions: []
      }, c = Et([], this.getStateNodes(o.value)), d = u.configuration.length ? Et(c, u.configuration) : c;
      return u.configuration = L([], M(d), !1), this.resolveTransition(u, o, o.context, r, s);
    }, n.prototype.resolveRaisedTransition = function(t, e, i, r) {
      var s, o = t.actions;
      return t = this.transition(t, e, void 0, r), t._event = i, t.event = i.data, (s = t.actions).unshift.apply(s, L([], M(o), !1)), t;
    }, n.prototype.resolveTransition = function(t, e, i, r, s) {
      var o, a, h, u, c = this;
      s === void 0 && (s = rt);
      var d = t.configuration, l = !e || t.transitions.length > 0, v = l ? t.configuration : e ? e.configuration : [], y = jt(v, this), p = l ? Bn(this.machine, d) : void 0, S = e ? e.historyValue ? e.historyValue : t.source ? this.machine.historyValue(e.value) : void 0 : void 0, m = this.getActions(new Set(v), y, t, i, s, e, r), g = e ? f({}, e.activities) : {};
      try {
        for (var w = E(m), b = w.next(); !b.done; b = w.next()) {
          var P = b.value;
          try {
            for (var _ = (h = void 0, E(P.actions)), A = _.next(); !A.done; A = _.next()) {
              var N = A.value;
              N.type === kt ? g[N.activity.id || N.activity.type] = N : N.type === Xt && (g[N.activity.id || N.activity.type] = !1);
            }
          } catch (V) {
            h = {
              error: V
            };
          } finally {
            try {
              A && !A.done && (u = _.return) && u.call(_);
            } finally {
              if (h)
                throw h.error;
            }
          }
        }
      } catch (V) {
        o = {
          error: V
        };
      } finally {
        try {
          b && !b.done && (a = w.return) && a.call(w);
        } finally {
          if (o)
            throw o.error;
        }
      }
      var O = M(Dt(this, e, i, s, m, r, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), k = O[0], x = O[1], I = M(Mn(k, ie), 2), F = I[0], U = I[1], mt = k.filter(function(V) {
        var at;
        return V.type === kt && ((at = V.activity) === null || at === void 0 ? void 0 : at.type) === zt;
      }), Zt = mt.reduce(function(V, at) {
        return V[at.activity.id] = Wn(at.activity, c.machine, x, s), V;
      }, e ? f({}, e.children) : {}), nt = new K({
        value: p || e.value,
        context: x,
        _event: s,
        // Persist _sessionid between states
        _sessionid: e ? e._sessionid : null,
        historyValue: p ? S ? An(S, p) : void 0 : e ? e.historyValue : void 0,
        history: !p || t.source ? e : void 0,
        actions: p ? U : [],
        activities: p ? g : e ? e.activities : {},
        events: [],
        configuration: v,
        transitions: t.transitions,
        children: Zt,
        done: y,
        tags: Ee(v),
        machine: this
      }), Q = i !== x;
      nt.changed = s.name === Bt || Q;
      var X = nt.history;
      X && delete X.history;
      var ye = !y && (this._transient || d.some(function(V) {
        return V._transient;
      }));
      if (!l && (!ye || s.name === ft))
        return nt;
      var $ = nt;
      if (!y)
        for (ye && ($ = this.resolveRaisedTransition($, {
          type: Ne
        }, s, r)); F.length; ) {
          var an = F.shift();
          $ = this.resolveRaisedTransition($, an._event, s, r);
        }
      var hn = $.changed || (X ? !!$.actions.length || Q || typeof X.value != typeof $.value || !rn($.value, X.value) : void 0);
      return $.changed = hn, $.history = X, $;
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
      var e = ct(t) ? t.slice(se.length) : t;
      if (e === this.id)
        return this;
      var i = this.machine.idMap[e];
      if (!i)
        throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
      return i;
    }, n.prototype.getStateNodeByPath = function(t) {
      if (typeof t == "string" && ct(t))
        try {
          return this.getStateNodeById(t.slice(1));
        } catch {
        }
      for (var e = ne(t, this.delimiter).slice(), i = this; e.length; ) {
        var r = e.shift();
        if (!r.length)
          break;
        i = i.getStateNode(r);
      }
      return i;
    }, n.prototype.resolve = function(t) {
      var e, i = this;
      if (!t)
        return this.initialStateValue || ut;
      switch (this.type) {
        case "parallel":
          return bt(this.initialStateValue, function(s, o) {
            return s ? i.getStateNode(o).resolve(t[o] || s) : ut;
          });
        case "compound":
          if (C(t)) {
            var r = this.getStateNode(t);
            return r.type === "parallel" || r.type === "compound" ? (e = {}, e[t] = r.initialStateValue, e) : t;
          }
          return Object.keys(t).length ? bt(t, function(s, o) {
            return s ? i.getStateNode(o).resolve(s) : ut;
          }) : this.initialStateValue || {};
        default:
          return t || ut;
      }
    }, n.prototype.getResolvedPath = function(t) {
      if (ct(t)) {
        var e = this.machine.idMap[t.slice(se.length)];
        if (!e)
          throw new Error("Unable to find state node '".concat(t, "'"));
        return e.path;
      }
      return ne(t, this.delimiter);
    }, Object.defineProperty(n.prototype, "initialStateValue", {
      get: function() {
        var t;
        if (this.__cache.initialStateValue)
          return this.__cache.initialStateValue;
        var e;
        if (this.type === "parallel")
          e = we(this.states, function(i) {
            return i.initialStateValue || ut;
          }, function(i) {
            return i.type !== "history";
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
      var i = this.getStateNodes(t);
      return this.resolveTransition({
        configuration: i,
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
          C(e.target) ? t = ct(e.target) ? Ft(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : t = e.target;
        }
        return t;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.getRelativeStateNodes = function(t, e, i) {
      return i === void 0 && (i = !0), i ? t.type === "history" ? t.resolveHistory(e) : t.initialStateNodes : [t];
    }, Object.defineProperty(n.prototype, "initialStateNodes", {
      get: function() {
        var t = this;
        if (Ut(this))
          return [this];
        if (this.type === "compound" && !this.initial)
          return j || Y(!1, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
        var e = Lt(this.initialStateValue);
        return R(e.map(function(i) {
          return t.getFromRelativePath(i);
        }));
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.getFromRelativePath = function(t) {
      if (!t.length)
        return [this];
      var e = M(t), i = e[0], r = e.slice(1);
      if (!this.states)
        throw new Error("Cannot retrieve subPath '".concat(i, "' from node with no states"));
      var s = this.getStateNode(i);
      if (s.type === "history")
        return s.resolveHistory();
      if (!this.states[i])
        throw new Error("Child state '".concat(i, "' does not exist on '").concat(this.id, "'"));
      return this.states[i].getFromRelativePath(r);
    }, n.prototype.historyValue = function(t) {
      if (Object.keys(this.states).length)
        return {
          current: t || this.initialStateValue,
          states: we(this.states, function(e, i) {
            if (!t)
              return e.historyValue();
            var r = C(t) ? void 0 : t[i];
            return e.historyValue(r || e.initialStateValue);
          }, function(e) {
            return !e.history;
          })
        };
    }, n.prototype.resolveHistory = function(t) {
      var e = this;
      if (this.type !== "history")
        return [this];
      var i = this.parent;
      if (!t) {
        var r = this.target;
        return r ? R(Lt(r).map(function(o) {
          return i.getFromRelativePath(o);
        })) : i.initialStateNodes;
      }
      var s = xn(i.path, "states")(t).current;
      return C(s) ? [i.getStateNode(s)] : R(Lt(s).map(function(o) {
        return e.history === "deep" ? i.getFromRelativePath(o) : [i.states[o[0]]];
      }));
    }, Object.defineProperty(n.prototype, "stateIds", {
      /**
       * All the state node IDs of this state node and its descendant state nodes.
       */
      get: function() {
        var t = this, e = R(Object.keys(this.states).map(function(i) {
          return t.states[i].stateIds;
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
        var t, e, i, r;
        if (this.__cache.events)
          return this.__cache.events;
        var s = this.states, o = new Set(this.ownEvents);
        if (s)
          try {
            for (var a = E(Object.keys(s)), h = a.next(); !h.done; h = a.next()) {
              var u = h.value, c = s[u];
              if (c.states)
                try {
                  for (var d = (i = void 0, E(c.events)), l = d.next(); !l.done; l = d.next()) {
                    var v = l.value;
                    o.add("".concat(v));
                  }
                } catch (y) {
                  i = {
                    error: y
                  };
                } finally {
                  try {
                    l && !l.done && (r = d.return) && r.call(d);
                  } finally {
                    if (i)
                      throw i.error;
                  }
                }
            }
          } catch (y) {
            t = {
              error: y
            };
          } finally {
            try {
              h && !h.done && (e = a.return) && e.call(a);
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
        return t.map(function(i) {
          if (!C(i))
            return i;
          var r = i[0] === e.delimiter;
          if (r && !e.parent)
            return e.getStateNodeByPath(i.slice(1));
          var s = r ? e.key + i : i;
          if (e.parent)
            try {
              var o = e.parent.getStateNodeByPath(s);
              return o;
            } catch (a) {
              throw new Error("Invalid transition definition for state node '".concat(e.id, `':
`).concat(a.message));
            }
          else
            return e.getStateNodeByPath(s);
        });
    }, n.prototype.formatTransition = function(t) {
      var e = this, i = Tn(t.target), r = "internal" in t ? t.internal : i ? i.some(function(h) {
        return C(h) && h[0] === e.delimiter;
      }) : !0, s = this.machine.options.guards, o = this.resolveTarget(i), a = f(f({}, t), {
        actions: q(B(t.actions)),
        cond: Fe(t.cond, s),
        target: o,
        source: this,
        internal: r,
        eventType: t.event,
        toJSON: function() {
          return f(f({}, a), {
            target: a.target ? a.target.map(function(h) {
              return "#".concat(h.id);
            }) : void 0,
            source: "#".concat(e.id)
          });
        }
      });
      return a;
    }, n.prototype.formatTransitions = function() {
      var t, e, i = this, r;
      if (!this.config.on)
        r = [];
      else if (Array.isArray(this.config.on))
        r = this.config.on;
      else {
        var s = this.config.on, o = St, a = s[o], h = a === void 0 ? [] : a, u = he(s, [typeof o == "symbol" ? o : o + ""]);
        r = R(Object.keys(u).map(function(g) {
          !j && g === ft && Y(!1, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
          var w = ht(g, u[g]);
          return j || ai(i, g, w), w;
        }).concat(ht(St, h)));
      }
      var c = this.config.always ? ht("", this.config.always) : [], d = this.config.onDone ? ht(String(xt(this.id)), this.config.onDone) : [];
      j || Y(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
      var l = R(this.invoke.map(function(g) {
        var w = [];
        return g.onDone && w.push.apply(w, L([], M(ht(String(At(g.id)), g.onDone)), !1)), g.onError && w.push.apply(w, L([], M(ht(String(vt(g.id)), g.onError)), !1)), w;
      })), v = this.after, y = R(L(L(L(L([], M(d), !1), M(l), !1), M(r), !1), M(c), !1).map(function(g) {
        return B(g).map(function(w) {
          return i.formatTransition(w);
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
), Me = !1;
function ui(n, t) {
  return !j && !("predictableActionArguments" in n) && !Me && (Me = !0, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new hi(n, t);
}
var lt = Ke, Qt = ot;
const { choose: ci } = Un, li = {
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
}, di = {
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
}, fi = (n) => ui(
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
            states: li,
            on: {
              KEYDOWN_ESC: "#idle.selectMode"
            }
          }
        }
      },
      drawing: {
        id: "drawing",
        initial: void 0,
        states: di,
        exit: ci([
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
        const i = t.unfinishedComponent;
        t._editor.componentDrawnHandler && t._editor.componentDrawnHandler(i, i.element.id);
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
        const i = t.mouseDownInSelectModeObject;
        i && i.move && i.move(e.movementX, e.movementY);
      },
      selectComponent: (t, e) => {
        t._editor.selectComponent(e.component);
      },
      deleteComponent: (t, e) => {
        const i = t.mouseDownInSelectModeObject;
        i && t._editor.unregisterComponent(i);
      },
      unselectAll: (t, e) => {
        t._editor.selectComponent(null);
      },
      selectModeEntry: (t, e) => {
        t._editor.mode = "select", t._editor.selectModeHandler && t._editor.selectModeHandler();
      }
    },
    guards: {
      isHandle: (t, e) => e.component instanceof G,
      unfinishedIsValid: (t, e) => t.unfinishedComponent.isValid()
    }
  }
), vi = (n) => sn(fi(n)), ve = (n, t, e) => {
  const i = {
    defineProperty(r, s, o) {
      return Object.is(o.value, r[s]) || (typeof t == "function" ? t.call(e || this, s, o.value, r[s], n) : t[s].call(e || this, o.value, r[s], n)), Reflect.defineProperty(r, s, o);
    }
  };
  return new Proxy(n, i);
};
function Ae(n, t, e) {
  return new G(
    n,
    t,
    (i, r) => {
      e.x += i, e.y += r;
    },
    this.isFrozen
  );
}
class pi {
  constructor(t, e) {
    this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], this.editorOwner = t, this.element = Z.createElementNS(it, "polygon"), this.points = [], this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], e && [e].flat().forEach((i) => this.addPoint(i.x, i.y)), this.isSelected = !1, this.isFrozen = !1;
  }
  freeze(t) {
    return this.isFrozen = t !== void 0 ? !!t : !0, this.getHandles().forEach((e) => e.freeze(t)), this;
  }
  updateElementPoints() {
    return this.element.setAttribute("points", this.points.map((t) => `${t.x},${t.y}`).join(" ")), this;
  }
  addPoint(t, e) {
    const i = { x: t, y: e }, r = ve(i, (s, o, a, h) => {
      var u, c;
      s !== "handle" && (this._logWarnOnOpOnFrozen("Point moved on"), this.updateElementPoints(), (c = (u = h.handle) == null ? void 0 : u["setAttr" + s.toUpperCase()]) == null || c.call(u, o));
    });
    return i.handle = Ae.call(this, t, e, r), this.editorOwner.registerComponentHandle(i.handle), this.points.push(r), this.updateElementPoints(), this;
  }
  moveLastPoint(t, e) {
    const i = this.points[this.points.length - 1];
    return [i.x, i.y] = [t, e], this;
  }
  move(t, e) {
    return this.points.forEach((i) => {
      i.x += t, i.y += e;
    }), this;
  }
  isValid() {
    return this.points.length >= 3;
  }
  setHandlesVisibility(t) {
    return this.points.forEach((e) => {
      var i;
      if (!e.handle) {
        const r = Ae.call(this, e.x, e.y, e);
        e.handle = r, (i = this.editorOwner) == null || i.registerComponentHandle(r);
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
    return this.points.forEach((e, i) => {
      e.x = Number((e.x * t).toFixed(2)), e.y = Number((e.y * t).toFixed(2));
    }), this.updateElementPoints(), this;
  }
  setIsSelected(t) {
    return this._logWarnOnOpOnFrozen("Select/unselect performed on"), this.isSelected = t = t !== void 0 ? !!t : !0, this.setHandlesVisibility(t), this.style && J(
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
    return this.style = t, J(this.element, t.component), J(this.element, t.componentHover.off), J(this.element, t.componentSelect.off), ae(this.element, t.componentHover.off, t.componentHover.on), this;
  }
  setDataAttributes(t) {
    for (let e in t)
      this.element.setAttribute(e, String(t[e]));
    return this;
  }
  export() {
    const t = {
      points: this.points.map((e) => {
        var i, r;
        return {
          x: Number((e.x / (((i = this.editorOwner) == null ? void 0 : i.scale) || 1)).toFixed(2)),
          y: Number((e.y / (((r = this.editorOwner) == null ? void 0 : r.scale) || 1)).toFixed(2))
        };
      })
    };
    for (let e of this.element.attributes)
      (e.name in this.includeAttributes || _e.test(e.name)) && (t[e.name] = e.value);
    return t;
  }
  _logWarnOnOpOnFrozen(t) {
    this.isFrozen && console.warn(`${t} frozen ${this.element.tagName} with id ${this.element.id}`);
  }
}
function Ce() {
  const { x: n, y: t, width: e, height: i } = this.dim;
  this.handles = [
    new G(
      n,
      t,
      (r, s) => {
        this.dim.x += r, this.dim.width -= r, this.dim.y += s, this.dim.height -= s;
      },
      this.isFrozen
    ),
    new G(
      n,
      t + i,
      (r, s) => {
        this.dim.x += r, this.dim.width -= r, this.dim.height += s;
      },
      this.isFrozen
    ),
    new G(
      n + e,
      t,
      (r, s) => {
        this.dim.width += r, this.dim.y += s, this.dim.height -= s;
      },
      this.isFrozen
    ),
    new G(
      n + e,
      t + i,
      (r, s) => {
        this.dim.width += r, this.dim.height += s;
      },
      this.isFrozen
    )
  ], this.handles.forEach((r) => {
    var s;
    (s = this.editorOwner) == null || s.registerComponentHandle(r);
  });
}
class pe {
  constructor(t, e) {
    this.editorOwner = null, this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], this.dim = {
      x: 0,
      height: 0,
      width: 0,
      y: 0
    }, this.handles = [], this.isSelected = !1, this.isFrozen = !1, this.propChangeListener = e, this.svgElementName = t, this.element = Z.createElementNS(it, this.svgElementName);
  }
  add(t, e, i, r = 0, s = 0) {
    this.editorOwner = t, this.dim = ve(
      {
        x: e,
        y: i,
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
        x: (o, a, h) => {
          this._logWarnOnOpOnFrozen("Dimension property x changed on"), this.propChangeListener.x.call(this, o, a, h), this.handles.length && (this.handles[0].setAttrX(o), this.handles[1].setAttrX(o), this.handles[2].setAttrX(o + h.width), this.handles[3].setAttrX(o + h.width));
        },
        // move
        y: (o, a, h) => {
          this._logWarnOnOpOnFrozen("Dimension property y changed on"), this.propChangeListener.y.call(this, o, a, h), this.handles.length && (this.handles[0].setAttrY(o), this.handles[1].setAttrY(o + h.height), this.handles[2].setAttrY(o), this.handles[3].setAttrY(o + h.height));
        },
        // resize
        width: (o, a, h) => {
          this._logWarnOnOpOnFrozen("Dimension property width changed on"), this.propChangeListener.width.call(this, o, a, h), this.handles.length && (this.handles[2].setAttrX(h.x + o), this.handles[3].setAttrX(h.x + o));
        },
        // resize
        height: (o, a, h) => {
          this._logWarnOnOpOnFrozen("Dimension property height changed on"), this.propChangeListener.height.call(this, o, a, h), this.handles.length && (this.handles[1].setAttrY(h.y + o), this.handles[3].setAttrY(h.y + o));
        }
      },
      this
    ), Ce.call(this), [this.dim.width, this.dim.height] = [r, s], this.isSelected = !1, this.isFrozen = !1;
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
    var e, i;
    return t && !((e = this.handles) != null && e.length) && Ce.call(this), (i = this.handles) == null || i.forEach((r) => r == null ? void 0 : r.setVisible(t)), this;
  }
  setIsSelected(t) {
    return this._logWarnOnOpOnFrozen("Select/unselect performed on"), this.isSelected = t = t !== void 0 ? !!t : !0, this.setHandlesVisibility(t), this.style && J(
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
    return this.style = t, J(this.element, t.component), J(this.element, t.componentHover.off), J(this.element, t.componentSelect.off), ae(this.element, t.componentHover.off, t.componentHover.on), this;
  }
  setDataAttributes(t) {
    var e;
    for (let i in t)
      (e = this.element) == null || e.setAttribute(i, String(t[i]));
    return this;
  }
  export() {
    var e, i, r, s, o;
    const t = {
      width: Number((this.dim.width / (((e = this.editorOwner) == null ? void 0 : e.scale) || 1)).toFixed(2)),
      height: Number((this.dim.height / (((i = this.editorOwner) == null ? void 0 : i.scale) || 1)).toFixed(2)),
      x: Number((this.dim.x / (((r = this.editorOwner) == null ? void 0 : r.scale) || 1)).toFixed(2)),
      y: Number((this.dim.y / (((s = this.editorOwner) == null ? void 0 : s.scale) || 1)).toFixed(2))
    };
    for (let a of (o = this.element) == null ? void 0 : o.attributes)
      (a.name in this.includeAttributes || _e.test(a.name)) && (t[a.name] = a.value);
    return t;
  }
  _logWarnOnOpOnFrozen(t) {
    var e, i;
    this.isFrozen && console.warn(`${t} frozen ${(e = this.element) == null ? void 0 : e.tagName} with id ${(i = this.element) == null ? void 0 : i.id}`);
  }
}
class yi extends pe {
  constructor(t, e, i, r, s) {
    super("rect", {
      x: (o, a, h) => {
        this.element.setAttribute("x", String(h.width < 0 ? o + h.width : o));
      },
      // move
      y: (o, a, h) => {
        this.element.setAttribute("y", String(h.height < 0 ? o + h.height : o));
      },
      // resize
      width: (o, a, h) => {
        this.element.setAttribute("width", String(Math.abs(o))), this.element.setAttribute("x", String(o < 0 ? h.x + o : h.x));
      },
      // resize
      height: (o, a, h) => {
        this.element.setAttribute("height", String(Math.abs(o))), this.element.setAttribute("y", String(o < 0 ? h.y + o : h.y));
      }
    }), this.add(t, e, i, r, s);
  }
}
class gi extends pe {
  constructor(t, e, i, r, s) {
    super("circle", {
      // move
      x: (o, a, h) => {
        var u;
        (u = this == null ? void 0 : this.element) == null || u.setAttribute("cx", String(o + h.width / 2));
      },
      // move
      y: (o, a, h) => {
        var u;
        (u = this == null ? void 0 : this.element) == null || u.setAttribute("cy", String(o + h.height / 2));
      },
      // resize
      width: (o, a, h) => {
        var u, c;
        (u = this == null ? void 0 : this.element) == null || u.setAttribute(
          "r",
          String(Math.min(Math.abs(o), Math.abs(h.height)) / 2)
        ), (c = this == null ? void 0 : this.element) == null || c.setAttribute("cx", String(h.x + o / 2));
      },
      // resize
      height: (o, a, h) => {
        var u, c;
        (u = this == null ? void 0 : this.element) == null || u.setAttribute(
          "r",
          String(Math.min(Math.abs(o), Math.abs(h.width)) / 2)
        ), (c = this == null ? void 0 : this.element) == null || c.setAttribute("cy", String(h.y + o / 2));
      }
    }), this.add(t, e, i, r, s);
  }
}
class mi extends pe {
  constructor(t, e, i, r, s) {
    super("ellipse", {
      x: (o, a, h) => {
        this.element.setAttribute("cx", String(o + h.width / 2));
      },
      // move
      y: (o, a, h) => {
        this.element.setAttribute("cy", String(o + h.height / 2));
      },
      // resize
      width: (o, a, h) => {
        this.element.setAttribute("rx", String(Math.abs(o) / 2)), this.element.setAttribute("cx", String(h.x + o / 2));
      },
      // resize
      height: (o, a, h) => {
        this.element.setAttribute("ry", String(Math.abs(o) / 2)), this.element.setAttribute("cy", String(h.y + o / 2));
      }
    }), this.add(t, e, i, r, s);
  }
}
var Ct = /* @__PURE__ */ ((n) => (n[n.LMB = 1] = "LMB", n[n.RMB = 2] = "RMB", n[n.MMB = 4] = "MMB", n))(Ct || {});
const wi = new RegExp(/[A-Z]+/g), De = (n) => {
  const t = n.matchAll(wi);
  for (let e of t)
    e.index && (n = n.replace(e[0], "-" + e[0].toLowerCase()));
  return n;
};
class oe {
  constructor(t, e = {}, i) {
    if (this.scale = 1, this.imageSizes = {
      width: 0,
      height: 0
    }, this.mouseButtons = [Ct.LMB, Ct.MMB, Ct.RMB], [
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
    ], e.mouseButtons && (this.mouseButtons = e.mouseButtons), this.style = Wt(vn(), i), this.fsmService = vi(this).start(), this.svg = t, typeof t == "string") {
      if (this.svg = Z.getElementById(t), !this.svg) {
        this.svg = Z.createElementNS(it, "svg"), this.svg.setAttribute("version", "1.1"), this.svg.setAttribute("id", t), this.svg.setAttribute("width", this.width + "px"), this.svg.setAttribute("height", this.height + "px"), this.svg.setAttribute("viewBox", `0, 0, ${this.width} ${this.height}`), this.svg.setAttribute("preserveAspectRatio", "xMinYMin");
        const r = this.svg;
        e.isBuilderMode || window.addEventListener(
          "load",
          function() {
            Z.body.appendChild(r);
          },
          { once: !0 }
        );
      }
    } else
      t && t.tagName === "svg" && (this.svg = t);
    if (!this.svg)
      throw new Error("No SVG element provided");
    this.cgroup = Z.createElementNS(it, "g"), this.hgroup = Z.createElementNS(it, "g"), this.svg.replaceChildren(this.cgroup, this.hgroup), this._cacheElementMapping = ve(
      {},
      (r, s, o) => {
        s ? s instanceof G ? this.hgroup.appendChild(s.element) : this.cgroup.appendChild(s.element) : o instanceof G ? this.hgroup.removeChild(o.element) : o && (this.cgroup.removeChild(o.element), o.getHandles().forEach((a) => {
          this.unregisterComponent(a);
        }));
      }
    ), this._idCounter = 1, this._handleIdCounter = 1;
  }
  async loadImage(t, e, i) {
    var s;
    const r = async (o) => new Promise((a, h) => {
      const u = new XMLHttpRequest();
      u.onload = function() {
        const c = new FileReader();
        c.onloadend = function() {
          a(c.result);
        }, c.readAsDataURL(u.response);
      }, u.onerror = () => {
        h(u.response);
      }, u.open("GET", o), u.responseType = "blob", u.send();
    });
    try {
      const o = await r(t);
      return this.image = Z.createElementNS(it, "image"), this.image.setAttribute("href", o), this.imageSizes.width = e, this.imageSizes.height = i, e && this.image.setAttribute("width", String(e)), i && this.image.setAttribute("height", String(i)), (s = this.svg) == null || s.prepend(this.image), this;
    } catch (o) {
      return console.error(o), this;
    }
  }
  setStyle(t) {
    return this.style = Wt(this.style, t), this;
  }
  setScale(t) {
    var i, r;
    const e = t / this.scale;
    for (const s in this._cacheElementMapping)
      (r = (i = this._cacheElementMapping[s]) == null ? void 0 : i.scale) == null || r.call(i, e);
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
    return typeof t == "string" ? e = this.getComponentById(t) : e = t, (!e || e.setIsSelected) && Object.values(this._cacheElementMapping).forEach((i) => {
      var r;
      i === t && ((r = this.selectHandler) == null || r.call(this, i.element.id, i), i.setIsSelected && i.setIsSelected(!0)), i !== t && !i.isFrozen && i.setIsSelected && (i.setIsSelected(!1), i.getHandles().forEach((s) => {
        this.unregisterComponent(s);
      }), i.clearHandles());
    }), e;
  }
  removeComponent(t) {
    return typeof t == "string" && (t = this.getComponentById(t)), this.unregisterComponent(t), t;
  }
  on(t, e) {
    return W(this.svg, t, e), this;
  }
  addFiguresEventListener(t, e) {
    return W(this.cgroup, t, e), this;
  }
  removeFiguresEventListener(t, e) {
    return ge(this.cgroup, t, e), this;
  }
  off(t, e) {
    return ge(this.svg, t, e), this;
  }
  getComponentById(t) {
    return this._cacheElementMapping && this._cacheElementMapping[t];
  }
  import(t, e) {
    const i = typeof t == "string" ? JSON.parse(t) : t;
    return this._idCounter = i.idCounter, i.components.map((r) => {
      var a, h;
      const s = e ? e(r.id) : r.id, o = {};
      for (let u in r.data)
        o[De(u)] = r.data[u];
      switch ((h = (a = r.data) == null ? void 0 : a.entries) == null || h.call(a).map(([u, c]) => ({ [De(u)]: c })), r.type) {
        case "rect":
          return this.createRectangle(o, s);
        case "circle":
          return this.createCircle(o, s);
        case "ellipse":
          return this.createEllipse(o, s);
        case "polygon":
          return this.createPolygon(o, s);
        default:
          return console.error("Unknown type", r.type), null;
      }
    }).filter((r) => {
      var s;
      return (s = r == null ? void 0 : r.clearHandles) == null || s.call(r), !!r;
    });
  }
  export(t) {
    return {
      idCounter: this._idCounter,
      components: Object.entries(this._cacheElementMapping).filter(([i, r]) => !(r instanceof G)).map(([i, r]) => ({
        id: i,
        type: r.element.tagName,
        data: r.export()
      }))
    };
  }
  exportAsString() {
    const t = new XMLSerializer().serializeToString(this.svg);
    return btoa(t);
  }
  createRectangle(t, e) {
    const { x: i, y: r, width: s, height: o, ...a } = t;
    return this.registerComponent(
      new yi(this, i, r, s, o).setStyle(this.style).setDataAttributes(a),
      e
    );
  }
  createCircle(t, e) {
    const { x: i, y: r, width: s, height: o, ...a } = t;
    return this.registerComponent(
      new gi(this, i, r, s, o).setStyle(this.style).setDataAttributes(a),
      e
    );
  }
  createEllipse(t, e) {
    const { x: i, y: r, width: s, height: o, ...a } = t;
    return this.registerComponent(
      new mi(this, i, r, s, o).setStyle(this.style).setDataAttributes(a),
      e
    );
  }
  createPolygon(t, e) {
    const { points: i, ...r } = t;
    return this.registerComponent(
      new pi(this, i).setStyle(this.style).setDataAttributes(r),
      e
    );
  }
  registerComponent(t, e) {
    var i;
    return t instanceof G ? e = "handle_" + this._handleIdCounter++ : e = e || ((i = this.idGenerator) == null ? void 0 : i.call(this)) || t.element.tagName + "_" + this._idCounter++, this._cacheElementMapping[e] = t, t.element.id = e, t;
  }
  registerComponentHandle(t) {
    return this.registerComponent(t.setStyle(this.style.handle, this.style.handleHover));
  }
  unregisterComponent(t) {
    var e, i, r;
    t = typeof t == "string" ? this.selectComponent(t) : t, t && (!(t instanceof G) && ((e = t.isValid) != null && e.call(t)) && ((r = this.deleteHandler) == null || r.call(this, (i = t == null ? void 0 : t.element) == null ? void 0 : i.id, t)), t._logWarnOnOpOnFrozen && t._logWarnOnOpOnFrozen("Deleting"), this._cacheElementMapping[t.element.id] = null, delete this._cacheElementMapping[t.element.id]);
  }
  destroy() {
    this.svg.remove();
    for (let t in this)
      delete this[t];
  }
}
const Si = (n) => {
  let t;
  return W(n.svg, "mousedown touchstart", (e) => {
    var a;
    if (e.preventDefault(), e instanceof MouseEvent && !(e.button in n.mouseButtons))
      return;
    const i = n.getComponentById(e.target.id), r = i && i.isFrozen ? null : i, s = (a = n.svg) == null ? void 0 : a.getBoundingClientRect(), o = e.targetTouches && e.targetTouches[0];
    n.fsmService.send({
      type: "MT_DOWN",
      component: r,
      // not defined when mousedown on editor
      offsetX: e.offsetX !== void 0 ? e.offsetX : o && o.clientX - s.x,
      offsetY: e.offsetY !== void 0 ? e.offsetY : o && o.clientY - s.y
    }), t = o;
  }), W(n.svg, "mouseup touchend mouseleave touchleave", (e) => {
    e.preventDefault(), n.fsmService.send({
      type: "MT_UP"
    }), t = null;
  }), W(n.svg, "mousemove touchmove", (e) => {
    var s;
    const i = (s = n.svg) == null ? void 0 : s.getBoundingClientRect(), r = e.targetTouches && e.targetTouches[0];
    n.fsmService.send({
      type: "MT_MOVE",
      offsetX: e.offsetX !== void 0 ? e.offsetX : r && r.clientX - i.x,
      offsetY: e.offsetY !== void 0 ? e.offsetY : r && r.clientY - i.y,
      movementX: e.movementX !== void 0 ? e.movementX : t ? r.clientX - t.clientX : 0,
      movementY: e.movementY !== void 0 ? e.movementY : t ? r.clientY - t.clientY : 0
    }), t = r;
  }), W(Te.window, "keydown", (e) => {
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
}, bi = (n) => (W(n.cgroup, "click touchstart", (t) => {
  var e;
  t.preventDefault(), n.clickHandler && n.clickHandler(t, t.target.id, (e = n.selectComponent(t.target.id)) == null ? void 0 : e.getCenterCoords());
}), W(n.cgroup, "mouseover", (t) => {
  var e, i;
  t.preventDefault(), (i = n.onMouseOver) == null || i.call(n, t, t.target.id, (e = n.selectComponent(t.target.id)) == null ? void 0 : e.getCenterCoords());
}), W(n.cgroup, "mouseout", (t) => {
  var e;
  t.preventDefault(), (e = n.onMouseOut) == null || e.call(n, t, t.target.id);
}), n), Wt = (n, ...t) => {
  if (!t.length || !t[0])
    return n;
  const e = t.shift();
  return Object.entries(e).forEach(([i, r]) => {
    Object.getPrototypeOf(r) === Object.prototype ? Wt(n[i], r) : n[i] = r;
  }), Wt(n, ...t);
}, on = (n) => function(e, i = {}, r) {
  return n ? bi(new oe(e, i, r)) : Si(new oe(e, i, r));
}, xi = (n) => "points" in n;
class Kt {
  constructor(t, e) {
    if (this.dim = { x: 0, y: 0, width: 0, height: 0 }, this.center = { x: 0, y: 0 }, this.id = e, this.data = t, xi(t)) {
      const i = {
        t: t.points[0],
        l: t.points[0],
        r: t.points[0],
        b: t.points[0]
      };
      t.points.forEach((r) => {
        r.x < i.l.x && (i.l = r), r.x > i.r.x && (i.r = r), r.y < i.t.y && (i.t = r), r.y > i.b.y && (i.b = r);
      }), this.dim = {
        x: i.l.x,
        y: i.t.y,
        width: i.r.x - i.l.x,
        height: i.b.y - i.t.y
      };
    } else
      this.dim = {
        x: t.x,
        y: t.y,
        width: t.width,
        height: t.height
      };
    this.center = {
      x: this.dim.x + this.dim.width / 2,
      y: this.dim.y + this.dim.height / 2
    };
  }
}
class Ei extends Kt {
  constructor(t, e) {
    super(t, e);
  }
  click(t, e) {
    return t >= this.data.x && t <= this.data.x + this.data.width && e >= this.data.y && e <= this.data.y + this.data.height;
  }
}
class Oi extends Kt {
  constructor(t, e) {
    super(t, e);
  }
  click(t, e) {
    const i = { x: this.data.x + this.data.width / 2, y: this.data.y + this.data.height / 2 };
    return Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(this.data.width / 2, 2);
  }
}
class Mi extends Kt {
  constructor(t, e) {
    super(t, e);
  }
  click(t, e) {
    const i = { x: this.data.x + this.data.width / 2, y: this.data.y + this.data.height / 2 };
    return Math.pow(t - i.x, 2) / Math.pow(this.data.width / 2, 2) + Math.pow(e - i.y, 2) / Math.pow(this.data.height / 2, 2) <= 1;
  }
}
class Ai extends Kt {
  constructor(t, e) {
    super(t, e);
  }
  click(t, e) {
    let i = 0, r = 0, s = 0, o = 0, a = 0;
    const h = this.data.points.length;
    for (let u = 1; u <= h; u++)
      r = this.data.points[u - 1].x, s = this.data.points[u - 1].y, u == h ? (o = this.data.points[0].x, a = this.data.points[0].y) : (o = this.data.points[u].x, a = this.data.points[u].y), s <= e ? a > e && this.isLeft(r, s, o, a, t, e) > 0 && ++i : a <= e && this.isLeft(r, s, o, a, t, e) < 0 && --i;
    return i != 0;
  }
  // start* и end* - координаты точек, представляющих грань. point* - координаты точки P, которую проверяем
  isLeft(t, e, i, r, s, o) {
    return (i - t) * (o - e) - (s - t) * (r - e);
  }
}
class Ci {
  constructor() {
    this.lastClickTime = 0, this.DC_trashHold = 10;
  }
  onTouchStart(t, e) {
    this.touchStartPoint = { x: t, y: e };
  }
  onTouchEnd(t, e) {
    this.lastClickTime = Date.now(), this.touchEndPoint = { x: t, y: e };
  }
  isClicked(t = 0) {
    var e, i, r, s, o, a, h, u;
    return t && this.touchStartPoint && this.touchEndPoint ? Math.abs(((e = this.touchStartPoint) == null ? void 0 : e.x) - ((i = this.touchEndPoint) == null ? void 0 : i.x)) <= t && Math.abs(((r = this.touchStartPoint) == null ? void 0 : r.y) - ((s = this.touchEndPoint) == null ? void 0 : s.y)) <= t : ((o = this.touchStartPoint) == null ? void 0 : o.x) === ((a = this.touchEndPoint) == null ? void 0 : a.x) && ((h = this.touchStartPoint) == null ? void 0 : h.y) === ((u = this.touchEndPoint) == null ? void 0 : u.y);
  }
  isDoubleClicked() {
    return this.isClicked(this.DC_trashHold) && Date.now() - this.lastClickTime < 300;
  }
}
class _i {
  constructor(t, e = {}, i = "", r) {
    this.scale = 1, this.background = "", this.alpha = 1, this.componentsMap = /* @__PURE__ */ new Map(), this.zonesMap = /* @__PURE__ */ new Map(), this.zonesCount = 4, this.getZone = (a, h) => {
      const u = this.img.width / this.zonesCount, c = this.img.height / this.zonesCount, d = Math.ceil(a / u), l = Math.ceil(h / c);
      return d + (l - 1) * this.zonesCount - 1;
    };
    const { width: s, height: o } = e;
    this.clickHandler = e.clickHandler, this.background = i, r && this.initZones(r), typeof t == "string" ? (this.img = new Image(), this.img.id = t, this.img.width = s || 1200, this.img.height = o || 600, window.addEventListener(
      "load",
      () => {
        Z.body.appendChild(this.img);
      },
      { once: !0 }
    )) : this.img = t, this.initEventListeners();
  }
  on(t, e) {
    return W(this.img, t, e), this;
  }
  setScale(t) {
    this.scale = t, this.img.style.transform = `scale(${t * 100})`;
  }
  loadImage(t) {
    this.background = t;
  }
  async import(t) {
    if (!this.background)
      throw new Error("Background is not set");
    let e = new oe("builder", {
      isBuilderMode: !0,
      width: this.img.width,
      height: this.img.height
    });
    t.components.forEach((i) => {
      switch (i.type === "polygon" && i.data, i.type) {
        case "rect":
          const r = this.createRectangle(i.data, i.id);
          this.zonesCount && this.setToZones(r), this.componentsMap.set(i.id, r);
          break;
        case "circle":
          const s = this.createCircle(i.data, i.id);
          this.zonesCount && this.setToZones(s), this.componentsMap.set(i.id, s);
          break;
        case "ellipse":
          const o = this.createEllipse(i.data, i.id);
          this.zonesCount && this.setToZones(o), this.componentsMap.set(i.id, o);
          break;
        case "polygon":
          const a = this.createPolygon(i.data, i.id);
          this.zonesCount && this.setToZones(a), this.componentsMap.set(i.id, a);
          break;
      }
    }), await e.loadImage(this.background, this.img.width, this.img.height).then(() => {
      e.import(t);
      const i = e.exportAsString();
      this.background = "data:image/svg+xml;base64," + i, this.img.src = this.background;
    });
  }
  createRectangle(t, e) {
    return new Ei(t, e);
  }
  createCircle(t, e) {
    return new Oi(t, e);
  }
  createEllipse(t, e) {
    return new Mi(t, e);
  }
  createPolygon(t, e) {
    return new Ai(t, e);
  }
  initZones(t) {
    this.zonesCount = Math.ceil(Math.sqrt(t));
    for (let e = 0; e < Math.pow(this.zonesCount, 2); e++)
      this.zonesMap.set(e, /* @__PURE__ */ new Set());
  }
  setToZones(t) {
    let e, i, r, s;
    const { x: o, y: a, width: h, height: u } = t.dim;
    e = { x: o, y: a }, i = { x: o + h, y: a }, r = { x: o + h, y: a + u }, s = { x: o, y: a + u }, [e, i, r, s].forEach((c) => {
      const d = this.getZone(c.x, c.y), l = this.zonesMap.get(d);
      l == null || l.add(t);
    });
  }
  initEventListeners() {
    if (!this.clickHandler)
      return;
    const t = new Ci();
    this.img.ontouchstart = (e) => {
      e.preventDefault(), e.stopPropagation(), t.onTouchStart(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }, this.img.ontouchend = (e) => {
      if (console.log(t.isDoubleClicked()), t.onTouchEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY), t.isClicked()) {
        const i = e.changedTouches[0].clientX - this.img.offsetLeft, r = e.changedTouches[0].clientY - this.img.offsetTop, s = this.getZone(i, r), o = this.zonesMap.get(s);
        o == null || o.forEach((a) => {
          var h;
          a.click(i, r) && ((h = this.clickHandler) == null || h.call(this, e, a.id, a.center));
        });
      }
    };
  }
}
const Di = on(!1), Ti = on(!0), Ni = {
  editor: Di,
  view: Ti,
  MouseButtons: Ct
};
export {
  _i as MobileViewer,
  Ct as MouseButtons,
  Ni as default,
  Di as editor,
  Ti as view
};
