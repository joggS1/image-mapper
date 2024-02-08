const Ae = window || void 0, G = Ae.window.document, rt = "http://www.w3.org/2000/svg", sn = "http://www.w3.org/1999/xlink", De = new RegExp(/^data-[a-zA-Z]+/), tt = function(n, t, e) {
  [n].flat().forEach((r) => {
    t.split(" ").forEach((i) => {
      r.addEventListener(i, e, {
        passive: !1
      });
    });
  });
}, on = function(n, t, e) {
  [n].flat().forEach((r) => {
    t.split(" ").forEach((i) => {
      r.removeEventListener(i, e);
    });
  });
}, an = {
  fill: "rgb(102, 102, 102)",
  stroke: "rgb(51, 51, 51)",
  cursor: "pointer"
}, un = {
  off: {
    "stroke-width": 1,
    opacity: 0.5
  },
  on: {
    "stroke-width": 2,
    opacity: 0.6
  }
}, cn = {
  off: {
    "stroke-dasharray": "none",
    // alt. 'initial'
    "stroke-linejoin": "miter"
  },
  on: {
    "stroke-dasharray": "4 3",
    "stroke-linejoin": "round"
  }
}, hn = {
  fill: "rgb(255, 255, 255)",
  stroke: "rgb(51, 51, 51)",
  "stroke-width": 1,
  opacity: 0.3,
  cursor: "pointer"
}, ln = {
  opacity: 0.6
}, fn = () => ({
  component: Object.assign({}, an),
  componentHover: Object.assign({}, un),
  componentSelect: Object.assign({}, cn),
  handle: Object.assign({}, hn),
  handleHover: Object.assign({}, ln)
}), J = (n, t) => Object.entries(t).forEach(([e, r]) => n.setAttribute(e, r)), ie = (n, t, e) => {
  tt(n, "mouseenter touchstart", () => J(n, e)), tt(
    n,
    "mouseleave touchend touchleave",
    () => J(n, t)
  );
};
class B {
  constructor(t, e, r, i) {
    this.x = t, this.y = e, this.moveHandler = r, this.element = G.createElementNS(rt, "circle"), this.element.setAttribute("cx", String(t)), this.element.setAttribute("cy", String(e)), this.element.setAttribute("r", String(5)), this.element.setAttribute("visibility", "hidden"), this.isFrozen = i !== void 0 ? !!i : !1;
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
    return J(this.element, t), ie(this.element, t, e), this;
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
function se(n, t) {
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
var C;
(function(n) {
  n.Start = "xstate.start", n.Stop = "xstate.stop", n.Raise = "xstate.raise", n.Send = "xstate.send", n.Cancel = "xstate.cancel", n.NullEvent = "", n.Assign = "xstate.assign", n.After = "xstate.after", n.DoneState = "done.state", n.DoneInvoke = "done.invoke", n.Log = "xstate.log", n.Init = "xstate.init", n.Invoke = "xstate.invoke", n.ErrorExecution = "error.execution", n.ErrorCommunication = "error.communication", n.ErrorPlatform = "error.platform", n.ErrorCustom = "xstate.error", n.Update = "xstate.update", n.Pure = "xstate.pure", n.Choose = "xstate.choose";
})(C || (C = {}));
var et;
(function(n) {
  n.Parent = "#_parent", n.Internal = "#_internal";
})(et || (et = {}));
var Lt = C.Start, Wt = C.Stop, yt = C.Raise, Ct = C.Send, oe = C.Cancel, Me = C.NullEvent, Xt = C.Assign, dn = C.After, vn = C.DoneState, $t = C.Log, _e = C.Init, kt = C.Invoke, pn = C.ErrorExecution, Qt = C.ErrorPlatform, ae = C.ErrorCustom, Vt = C.Update, Ce = C.Choose, Ne = C.Pure;
const yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  after: dn,
  assign: Xt,
  cancel: oe,
  choose: Ce,
  doneState: vn,
  error: ae,
  errorExecution: pn,
  errorPlatform: Qt,
  init: _e,
  invoke: kt,
  log: $t,
  nullEvent: Me,
  pure: Ne,
  raise: yt,
  send: Ct,
  start: Lt,
  stop: Wt,
  update: Vt
}, Symbol.toStringTag, { value: "Module" }));
var Te = ".", ve = {}, Zt = "xstate.guard", gn = "", L = process.env.NODE_ENV === "production", Nt;
function ue(n, t, e) {
  e === void 0 && (e = Te);
  var r = At(n, e), i = At(t, e);
  return M(i) ? M(r) ? i === r : !1 : M(r) ? r in i : Object.keys(r).every(function(s) {
    return s in i ? ue(r[s], i[s]) : !1;
  });
}
function Pe(n) {
  try {
    return M(n) || typeof n == "number" ? "".concat(n) : n.type;
  } catch {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
function te(n, t) {
  try {
    return gt(n) ? n : n.toString().split(t);
  } catch {
    throw new Error("'".concat(n, "' is not a valid state path."));
  }
}
function mn(n) {
  return typeof n == "object" && "value" in n && "context" in n && "event" in n && "_event" in n;
}
function At(n, t) {
  if (mn(n))
    return n.value;
  if (gt(n))
    return Yt(n);
  if (typeof n != "string")
    return n;
  var e = te(n, t);
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
function pe(n, t, e) {
  var r, i, s = {};
  try {
    for (var o = E(Object.keys(n)), u = o.next(); !u.done; u = o.next()) {
      var a = u.value, c = n[a];
      e(c) && (s[a] = t(c, a, n));
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
}
var wn = function(n) {
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
function Sn(n, t) {
  return function(e) {
    var r, i, s = e;
    try {
      for (var o = E(n), u = o.next(); !u.done; u = o.next()) {
        var a = u.value;
        s = s[t][a];
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
  };
}
function It(n) {
  if (!n)
    return [[]];
  if (M(n))
    return [[n]];
  var t = R(Object.keys(n).map(function(e) {
    var r = n[e];
    return typeof r != "string" && (!r || !Object.keys(r).length) ? [[e]] : It(n[e]).map(function(i) {
      return [e].concat(i);
    });
  }));
  return t;
}
function R(n) {
  var t;
  return (t = []).concat.apply(t, j([], A(n), !1));
}
function Ie(n) {
  return gt(n) ? n : [n];
}
function V(n) {
  return n === void 0 ? [] : Ie(n);
}
function zt(n, t, e) {
  var r, i;
  if (_(n))
    return n(t, e.data);
  var s = {};
  try {
    for (var o = E(Object.keys(n)), u = o.next(); !u.done; u = o.next()) {
      var a = u.value, c = n[a];
      _(c) ? s[a] = c(t, e.data) : s[a] = c;
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
}
function bn(n) {
  return /^(done|error)\./.test(n);
}
function ye(n) {
  return !!(n instanceof Promise || n !== null && (_(n) || typeof n == "object") && _(n.then));
}
function xn(n) {
  return n !== null && typeof n == "object" && "transition" in n && typeof n.transition == "function";
}
function En(n, t) {
  var e, r, i = A([[], []], 2), s = i[0], o = i[1];
  try {
    for (var u = E(n), a = u.next(); !a.done; a = u.next()) {
      var c = a.value;
      t(c) ? s.push(c) : o.push(c);
    }
  } catch (h) {
    e = {
      error: h
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
function je(n, t) {
  return bt(n.states, function(e, r) {
    if (e) {
      var i = (M(t) ? void 0 : t[r]) || (e ? e.current : void 0);
      if (i)
        return {
          current: i,
          states: je(e, i)
        };
    }
  });
}
function On(n, t) {
  return {
    current: t,
    states: je(n, t)
  };
}
function ge(n, t, e, r) {
  L || F(!!n, "Attempting to update undefined context");
  var i = n && e.reduce(function(s, o) {
    var u, a, c = o.assignment, h = {
      state: r,
      action: o,
      _event: t
    }, f = {};
    if (_(c))
      f = c(s, t.data, h);
    else
      try {
        for (var l = E(Object.keys(c)), v = l.next(); !v.done; v = l.next()) {
          var y = v.value, p = c[y];
          f[y] = _(p) ? p(s, t.data, h) : p;
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
var F = function() {
};
L || (F = function(n, t) {
  var e = n instanceof Error ? n : void 0;
  if (!(!e && n) && console !== void 0) {
    var r = ["Warning: ".concat(t)];
    e && r.push(e), console.warn.apply(console, r);
  }
});
function gt(n) {
  return Array.isArray(n);
}
function _(n) {
  return typeof n == "function";
}
function M(n) {
  return typeof n == "string";
}
function Re(n, t) {
  if (n)
    return M(n) ? {
      type: Zt,
      name: n,
      predicate: t ? t[n] : void 0
    } : _(n) ? {
      type: Zt,
      name: n.name,
      predicate: n
    } : n;
}
function An(n) {
  try {
    return "subscribe" in n && _(n.subscribe);
  } catch {
    return !1;
  }
}
var Z = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
Nt = {}, Nt[Z] = function() {
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
function Jt(n, t) {
  return M(n) || typeof n == "number" ? d({
    type: n
  }, t) : n;
}
function U(n, t) {
  if (!M(n) && "$$type" in n && n.$$type === "scxml")
    return n;
  var e = Jt(n);
  return d({
    name: e.type,
    data: e,
    $$type: "scxml",
    type: "external"
  }, t);
}
function ut(n, t) {
  var e = Ie(t).map(function(r) {
    return typeof r > "u" || typeof r == "string" || st(r) ? {
      target: r,
      event: n
    } : d(d({}, r), {
      event: n
    });
  });
  return e;
}
function Mn(n) {
  if (!(n === void 0 || n === gn))
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
function Le(n, t, e, r, i) {
  var s = n.options.guards, o = {
    state: i,
    cond: t,
    _event: r
  };
  if (t.type === Zt)
    return ((s == null ? void 0 : s[t.name]) || t.predicate)(e, r.data, o);
  var u = s == null ? void 0 : s[t.type];
  if (!u)
    throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(n.id, "'."));
  return u(e, r.data, o);
}
function ke(n) {
  return typeof n == "string" ? {
    type: n
  } : n;
}
function jt(n, t, e) {
  var r = function() {
  }, i = typeof n == "object", s = i ? n : null;
  return {
    next: ((i ? n.next : n) || r).bind(s),
    error: ((i ? n.error : t) || r).bind(s),
    complete: ((i ? n.complete : e) || r).bind(s)
  };
}
function Tt(n, t) {
  return "".concat(n, ":invocation[").concat(t, "]");
}
function ee(n) {
  return (n.type === yt || n.type === Ct && n.to === et.Internal) && typeof n.delay != "number";
}
var it = /* @__PURE__ */ U({
  type: _e
});
function Ut(n, t) {
  return t && t[n] || void 0;
}
function pt(n, t) {
  var e;
  if (M(n) || typeof n == "number") {
    var r = Ut(n, t);
    _(r) ? e = {
      type: n,
      exec: r
    } : r ? e = r : e = {
      type: n,
      exec: void 0
    };
  } else if (_(n))
    e = {
      // Convert action to string if unnamed
      type: n.name || n.toString(),
      exec: n
    };
  else {
    var r = Ut(n.type, t);
    if (_(r))
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
var q = function(n, t) {
  if (!n)
    return [];
  var e = gt(n) ? n : [n];
  return e.map(function(r) {
    return pt(r, t);
  });
};
function Kt(n) {
  var t = pt(n);
  return d(d({
    id: M(n) ? n : t.id
  }, t), {
    type: t.type
  });
}
function Ye(n, t) {
  return {
    type: yt,
    event: typeof n == "function" ? n : Jt(n),
    delay: t ? t.delay : void 0,
    id: t == null ? void 0 : t.id
  };
}
function ze(n, t, e, r) {
  var i = {
    _event: e
  }, s = U(_(n.event) ? n.event(t, e.data, i) : n.event), o;
  if (M(n.delay)) {
    var u = r && r[n.delay];
    o = _(u) ? u(t, e.data, i) : u;
  } else
    o = _(n.delay) ? n.delay(t, e.data, i) : n.delay;
  return d(d({}, n), {
    type: yt,
    _event: s,
    delay: o
  });
}
function ot(n, t) {
  return {
    to: t ? t.to : void 0,
    type: Ct,
    event: _(n) ? n : Jt(n),
    delay: t ? t.delay : void 0,
    // TODO: don't auto-generate IDs here like that
    // there is too big chance of the ID collision
    id: t && t.id !== void 0 ? t.id : _(n) ? n.name : Pe(n)
  };
}
function Ue(n, t, e, r) {
  var i = {
    _event: e
  }, s = U(_(n.event) ? n.event(t, e.data, i) : n.event), o;
  if (M(n.delay)) {
    var u = r && r[n.delay];
    o = _(u) ? u(t, e.data, i) : u;
  } else
    o = _(n.delay) ? n.delay(t, e.data, i) : n.delay;
  var a = _(n.to) ? n.to(t, e.data, i) : n.to;
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
function Cn(n, t, e) {
  return ot(t, d(d({}, e), {
    to: n
  }));
}
function Nn() {
  return ce(Vt);
}
function Tn(n, t) {
  return ot(n, d(d({}, t), {
    to: function(e, r, i) {
      var s = i._event;
      return s.origin;
    }
  }));
}
var Pn = function(n, t) {
  return {
    context: n,
    event: t
  };
};
function In(n, t) {
  return n === void 0 && (n = Pn), {
    type: $t,
    label: t,
    expr: n
  };
}
var Fe = function(n, t, e) {
  return d(d({}, n), {
    value: M(n.expr) ? n.expr : n.expr(t, e.data, {
      _event: e
    })
  });
}, He = function(n) {
  return {
    type: oe,
    sendId: n
  };
};
function We(n) {
  var t = Kt(n);
  return {
    type: C.Start,
    activity: t,
    exec: void 0
  };
}
function Xe(n) {
  var t = _(n) ? n : Kt(n);
  return {
    type: C.Stop,
    activity: t,
    exec: void 0
  };
}
function $e(n, t, e) {
  var r = _(n.activity) ? n.activity(t, e.data) : n.activity, i = typeof r == "string" ? {
    id: r
  } : r, s = {
    type: C.Stop,
    activity: i
  };
  return s;
}
var Ve = function(n) {
  return {
    type: Xt,
    assignment: n
  };
};
function jn(n) {
  return typeof n == "object" && "type" in n;
}
function Je(n, t) {
  var e = t ? "#".concat(t) : "";
  return "".concat(C.After, "(").concat(n, ")").concat(e);
}
function xt(n, t) {
  var e = "".concat(C.DoneState, ".").concat(n), r = {
    type: e,
    data: t
  };
  return r.toString = function() {
    return e;
  }, r;
}
function Dt(n, t) {
  var e = "".concat(C.DoneInvoke, ".").concat(n), r = {
    type: e,
    data: t
  };
  return r.toString = function() {
    return e;
  }, r;
}
function vt(n, t) {
  var e = "".concat(C.ErrorPlatform, ".").concat(n), r = {
    type: e,
    data: t
  };
  return r.toString = function() {
    return e;
  }, r;
}
function Rn(n) {
  return {
    type: C.Pure,
    get: n
  };
}
function Ln(n, t) {
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
function kn(n, t) {
  return ce(function(e, r, i) {
    return {
      type: ae,
      data: _(n) ? n(e, r, i) : n
    };
  }, d(d({}, t), {
    to: et.Parent
  }));
}
function Yn(n) {
  return {
    type: C.Choose,
    conds: n
  };
}
var zn = function(n) {
  var t, e, r = [];
  try {
    for (var i = E(n), s = i.next(); !s.done; s = i.next())
      for (var o = s.value, u = 0; u < o.actions.length; ) {
        if (o.actions[u].type === Xt) {
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
function Mt(n, t, e, r, i, s, o) {
  o === void 0 && (o = !1);
  var u = o ? [] : zn(i), a = u.length ? ge(e, r, u, t) : e, c = o ? [e] : void 0, h = [];
  function f(y, p) {
    var S;
    switch (p.type) {
      case yt: {
        var m = ze(p, a, r, n.options.delays);
        return s && typeof m.delay == "number" && s(m, a, r), m;
      }
      case Ct:
        var g = Ue(p, a, r, n.options.delays);
        if (!L) {
          var w = p.delay;
          F(
            !M(w) || typeof g.delay == "number",
            // tslint:disable-next-line:max-line-length
            "No delay reference for delay expression '".concat(w, "' was found on machine '").concat(n.id, "'")
          );
        }
        return s && g.to !== et.Internal && (y === "entry" ? h.push(g) : s(g, a, r)), g;
      case $t: {
        var b = Fe(p, a, r);
        return s == null || s(b, a, r), b;
      }
      case Ce: {
        var P = p, N = (S = P.conds.find(function(nt) {
          var Q = Re(nt.cond, n.options.guards);
          return !Q || Le(n, Q, a, r, s ? void 0 : t);
        })) === null || S === void 0 ? void 0 : S.actions;
        if (!N)
          return [];
        var D = A(Mt(n, t, a, r, [{
          type: y,
          actions: q(V(N), n.options.actions)
        }], s, o), 2), T = D[0], O = D[1];
        return a = O, c == null || c.push(a), T;
      }
      case Ne: {
        var N = p.get(a, r.data);
        if (!N)
          return [];
        var k = A(Mt(n, t, a, r, [{
          type: y,
          actions: q(V(N), n.options.actions)
        }], s, o), 2), x = k[0], I = k[1];
        return a = I, c == null || c.push(a), x;
      }
      case Wt: {
        var b = $e(p, a, r);
        return s == null || s(b, e, r), b;
      }
      case Xt: {
        a = ge(a, r, [p], s ? void 0 : t), c == null || c.push(a);
        break;
      }
      default:
        var z = pt(p, n.options.actions), H = z.exec;
        if (s)
          s(z, a, r);
        else if (H && c) {
          var mt = c.length - 1, Bt = d(d({}, z), {
            exec: function(nt) {
              for (var Q = [], W = 1; W < arguments.length; W++)
                Q[W - 1] = arguments[W];
              H.apply(void 0, j([c[mt]], A(Q), !1));
            }
          });
          z = Bt;
        }
        return z;
    }
  }
  function l(y) {
    var p, S, m = [];
    try {
      for (var g = E(y.actions), w = g.next(); !w.done; w = g.next()) {
        var b = w.value, P = f(y.type, b);
        P && (m = m.concat(P));
      }
    } catch (N) {
      p = {
        error: N
      };
    } finally {
      try {
        w && !w.done && (S = g.return) && S.call(g);
      } finally {
        if (p)
          throw p.error;
      }
    }
    return h.forEach(function(N) {
      s(N, a, r);
    }), h.length = 0, m;
  }
  var v = R(i.map(l));
  return [v, a];
}
const Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  actionTypes: yn,
  after: Je,
  assign: Ve,
  cancel: He,
  choose: Yn,
  done: xt,
  doneInvoke: Dt,
  error: vt,
  escalate: kn,
  forwardTo: Ln,
  getActionFunction: Ut,
  initEvent: it,
  isActionObject: jn,
  log: In,
  pure: Rn,
  raise: Ye,
  resolveActions: Mt,
  resolveLog: Fe,
  resolveRaise: ze,
  resolveSend: Ue,
  resolveStop: $e,
  respond: Tn,
  send: ot,
  sendParent: ce,
  sendTo: Cn,
  sendUpdate: Nn,
  start: We,
  stop: Xe,
  toActionObject: pt,
  toActionObjects: q,
  toActivityDefinition: Kt
}, Symbol.toStringTag, { value: "Module" }));
var me = [], ft = function(n, t) {
  me.push(n);
  var e = t(n);
  return me.pop(), e;
};
function Ke(n) {
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
  }, t[Z] = function() {
    return this;
  }, t;
}
function Fn(n, t, e, r) {
  var i, s = ke(n.src), o = (i = t == null ? void 0 : t.options.services) === null || i === void 0 ? void 0 : i[s.type], u = n.data ? zt(n.data, e, r) : void 0, a = o ? Be(o, n.id, u) : Ke(n.id);
  return a.meta = n, a;
}
function Be(n, t, e) {
  var r = Ke(t);
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
function Hn(n) {
  try {
    return typeof n.send == "function";
  } catch {
    return !1;
  }
}
function Wn(n) {
  return Hn(n) && "id" in n;
}
function Xn(n) {
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
  }, t[Z] = function() {
    return this;
  }, t), n);
}
var Ft = function(n) {
  return n.type === "atomic" || n.type === "final";
};
function Ge(n) {
  return Object.keys(n.states).map(function(t) {
    return n.states[t];
  });
}
function _t(n) {
  return Ge(n).filter(function(t) {
    return t.type !== "history";
  });
}
function qe(n) {
  var t = [n];
  return Ft(n) ? t : t.concat(R(_t(n).map(qe)));
}
function Et(n, t) {
  var e, r, i, s, o, u, a, c, h = new Set(n), f = ne(h), l = new Set(t);
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
  var m = ne(l);
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
          for (var b = (o = void 0, E(_t(p))), P = b.next(); !P.done; P = b.next()) {
            var N = P.value;
            l.has(N) || (l.add(N), f.get(N) ? f.get(N).forEach(function(k) {
              return l.add(k);
            }) : N.initialStateNodes.forEach(function(k) {
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
    for (var D = E(l), T = D.next(); !T.done; T = D.next())
      for (var p = T.value, S = p.parent; S && !l.has(S); )
        l.add(S), S = S.parent;
  } catch (O) {
    a = {
      error: O
    };
  } finally {
    try {
      T && !T.done && (c = D.return) && c.call(D);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return l;
}
function Qe(n, t) {
  var e = t.get(n);
  if (!e)
    return {};
  if (n.type === "compound") {
    var r = e[0];
    if (r) {
      if (Ft(r))
        return r.key;
    } else
      return {};
  }
  var i = {};
  return e.forEach(function(s) {
    i[s.key] = Qe(s, t);
  }), i;
}
function ne(n) {
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
function $n(n, t) {
  var e = Et([n], t);
  return Qe(n, ne(e));
}
function Ot(n, t) {
  return Array.isArray(n) ? n.some(function(e) {
    return e === t;
  }) : n instanceof Set ? n.has(t) : !1;
}
function Vn(n) {
  return j([], A(new Set(R(j([], A(n.map(function(t) {
    return t.ownEvents;
  })), !1)))), !1);
}
function Rt(n, t) {
  return t.type === "compound" ? _t(t).some(function(e) {
    return e.type === "final" && Ot(n, e);
  }) : t.type === "parallel" ? _t(t).every(function(e) {
    return Rt(n, e);
  }) : !1;
}
function Jn(n) {
  return n === void 0 && (n = []), n.reduce(function(t, e) {
    return e.meta !== void 0 && (t[e.id] = e.meta), t;
  }, {});
}
function we(n) {
  return new Set(R(n.map(function(t) {
    return t.tags;
  })));
}
function Ze(n, t) {
  if (n === t)
    return !0;
  if (n === void 0 || t === void 0)
    return !1;
  if (M(n) || M(t))
    return n === t;
  var e = Object.keys(n), r = Object.keys(t);
  return e.length === r.length && e.every(function(i) {
    return Ze(n[i], t[i]);
  });
}
function Kn(n) {
  return typeof n != "object" || n === null ? !1 : "value" in n && "_event" in n;
}
function Bn(n, t) {
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
var K = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t) {
      var e = this, r;
      this.actions = [], this.activities = ve, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || ve, this.meta = Jn(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (r = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set(), this.machine = t.machine, Object.defineProperty(this, "nextEvents", {
        get: function() {
          return Vn(e.configuration);
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
      if (t === void 0 && (t = this.value), e === void 0 && (e = "."), M(t))
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
      var r = se(t, ["configuration", "transitions", "tags", "machine"]);
      return d(d({}, r), {
        tags: Array.from(e)
      });
    }, n.prototype.matches = function(t) {
      return ue(t, this.value);
    }, n.prototype.hasTag = function(t) {
      return this.tags.has(t);
    }, n.prototype.can = function(t) {
      var e;
      L && F(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
      var r = (e = this.machine) === null || e === void 0 ? void 0 : e.getTransitionData(this, t);
      return !!(r != null && r.transitions.length) && // Check that at least one transition is not forbidden
      r.transitions.some(function(i) {
        return i.target !== void 0 || i.actions.length;
      });
    }, n;
  }()
), Gn = {
  deferEvents: !1
}, Se = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t) {
      this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = d(d({}, Gn), t);
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
), Gt = /* @__PURE__ */ new Map(), qn = 0, wt = {
  bookId: function() {
    return "x:".concat(qn++);
  },
  register: function(n, t) {
    return Gt.set(n, t), n;
  },
  get: function(n) {
    return Gt.get(n);
  },
  free: function(n) {
    Gt.delete(n);
  }
};
function he() {
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
function Qn() {
  var n = he();
  if (n && "__xstate__" in n)
    return n.__xstate__;
}
function Zn(n) {
  if (he()) {
    var t = Qn();
    t && t.register(n);
  }
}
function tr(n, t) {
  t === void 0 && (t = {});
  var e = n.initialState, r = /* @__PURE__ */ new Set(), i = [], s = !1, o = function() {
    if (!s) {
      for (s = !0; i.length > 0; ) {
        var c = i.shift();
        e = n.transition(e, c, a), r.forEach(function(h) {
          return h.next(e);
        });
      }
      s = !1;
    }
  }, u = Xn({
    id: t.id,
    send: function(c) {
      i.push(c), o();
    },
    getSnapshot: function() {
      return e;
    },
    subscribe: function(c, h, f) {
      var l = jt(c, h, f);
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
var er = {
  sync: !1,
  autoForward: !1
}, Y;
(function(n) {
  n[n.NotStarted = 0] = "NotStarted", n[n.Running = 1] = "Running", n[n.Stopped = 2] = "Stopped";
})(Y || (Y = {}));
var nr = (
  /** @class */
  /* @__PURE__ */ function() {
    function n(t, e) {
      e === void 0 && (e = n.defaultOptions);
      var r = this;
      this.machine = t, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = !1, this.status = Y.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(h, f) {
        if (gt(h))
          return r.batch(h), r.state;
        var l = U(Jt(h, f));
        if (r.status === Y.Stopped)
          return L || F(!1, 'Event "'.concat(l.name, '" was sent to stopped service "').concat(r.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(l.data))), r.state;
        if (r.status !== Y.Running && !r.options.deferEvents)
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
      }, this.sendTo = function(h, f, l) {
        var v = r.parent && (f === et.Parent || r.parent.id === f), y = v ? r.parent : M(f) ? f === et.Internal ? r : r.children.get(f) || wt.get(f) : Dn(f) ? f : void 0;
        if (!y) {
          if (!v)
            throw new Error("Unable to send event to child '".concat(f, "' from service '").concat(r.id, "'."));
          L || F(!1, "Service '".concat(r.id, "' has no parent: unable to send event ").concat(h.type));
          return;
        }
        if ("machine" in y) {
          if (r.status !== Y.Stopped || r.parent !== y || // we need to send events to the parent from exit handlers of a machine that reached its final state
          r.state.done) {
            var p = d(d({}, h), {
              name: h.name === ae ? "".concat(vt(r.id)) : h.name,
              origin: r.sessionId
            });
            !l && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([y, p]) : y.send(p);
          }
        } else
          !l && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([y, h.data]) : y.send(h.data);
      }, this._exec = function(h, f, l, v) {
        v === void 0 && (v = r.machine.options.actions);
        var y = h.exec || Ut(h.type, v), p = _(y) ? y : y ? y.exec : h.exec;
        if (p)
          try {
            return p(f, l.data, r.machine.config.predictableActionArguments ? {
              action: h,
              _event: l
            } : {
              action: h,
              state: r.state,
              _event: l
            });
          } catch (H) {
            throw r.parent && r.parent.send({
              type: "xstate.error",
              data: H
            }), H;
          }
        switch (h.type) {
          case yt: {
            var S = h;
            r.defer(S);
            break;
          }
          case Ct:
            var m = h;
            if (typeof m.delay == "number") {
              r.defer(m);
              return;
            } else
              m.to ? r.sendTo(m._event, m.to, l === it) : r.send(m._event);
            break;
          case oe:
            r.cancel(h.sendId);
            break;
          case Lt: {
            if (r.status !== Y.Running)
              return;
            var g = h.activity;
            if (
              // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
              !r.machine.config.predictableActionArguments && !r.state.activities[g.id || g.type]
            )
              break;
            if (g.type === C.Invoke) {
              var w = ke(g.src), b = r.machine.options.services ? r.machine.options.services[w.type] : void 0, P = g.id, N = g.data;
              L || F(
                !("forward" in g),
                // tslint:disable-next-line:max-line-length
                "`forward` property is deprecated (found in invocation of '".concat(g.src, "' in in machine '").concat(r.machine.id, "'). ") + "Please use `autoForward` instead."
              );
              var D = "autoForward" in g ? g.autoForward : !!g.forward;
              if (!b) {
                L || F(!1, "No service found for invocation '".concat(g.src, "' in machine '").concat(r.machine.id, "'."));
                return;
              }
              var T = N ? zt(N, f, l) : void 0;
              if (typeof b == "string")
                return;
              var O = _(b) ? b(f, l.data, {
                data: T,
                src: w,
                meta: g.meta
              }) : b;
              if (!O)
                return;
              var k = void 0;
              st(O) && (O = T ? O.withContext(T) : O, k = {
                autoForward: D
              }), r.spawn(O, P, k);
            } else
              r.spawnActivity(g);
            break;
          }
          case Wt: {
            r.stopChild(h.activity.id);
            break;
          }
          case $t:
            var x = h, I = x.label, z = x.value;
            I ? r.logger(I, z) : r.logger(z);
            break;
          default:
            L || F(!1, "No implementation found for action type '".concat(h.type, "'"));
            break;
        }
      };
      var i = d(d({}, n.defaultOptions), e), s = i.clock, o = i.logger, u = i.parent, a = i.id, c = a !== void 0 ? a : t.id;
      this.id = c, this.logger = o, this.clock = s, this.parent = u, this.options = i, this.scheduler = new Se({
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
        return L || F(this.status !== Y.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
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
      var r, i, s, o, u, a, c, h, f = this;
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
        }), N = P && P.doneData ? zt(P.doneData, t.context, e) : void 0;
        this._doneEvent = Dt(this.id, N);
        try {
          for (var D = E(this.doneListeners), T = D.next(); !T.done; T = D.next()) {
            var p = T.value;
            p(this._doneEvent);
          }
        } catch (O) {
          c = {
            error: O
          };
        } finally {
          try {
            T && !T.done && (h = D.return) && h.call(D);
          } finally {
            if (c)
              throw c.error;
          }
        }
        this._stop(), this._stopChildren(), wt.free(this.sessionId);
      }
    }, n.prototype.onTransition = function(t) {
      return this.listeners.add(t), this.status === Y.Running && t(this.state, this.state.event), this;
    }, n.prototype.subscribe = function(t, e, r) {
      var i = this, s = jt(t, e, r);
      this.listeners.add(s.next), this.status !== Y.NotStarted && s.next(this.state);
      var o = function() {
        i.doneListeners.delete(o), i.stopListeners.delete(o), s.complete();
      };
      return this.status === Y.Stopped ? s.complete() : (this.onDone(o), this.onStop(o)), {
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
      return this.status === Y.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t), this;
    }, n.prototype.off = function(t) {
      return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this;
    }, n.prototype.start = function(t) {
      var e = this;
      if (this.status === Y.Running)
        return this;
      this.machine._init(), wt.register(this.sessionId, this), this.initialized = !0, this.status = Y.Running;
      var r = t === void 0 ? this.initialState : ft(this, function() {
        return Kn(t) ? e.machine.resolveState(t) : e.machine.resolveState(K.from(t, e.machine.context));
      });
      return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
        e.update(r, it);
      }), this;
    }, n.prototype._stopChildren = function() {
      this.children.forEach(function(t) {
        _(t.stop) && t.stop();
      }), this.children.clear();
    }, n.prototype._stop = function() {
      var t, e, r, i, s, o, u, a, c, h;
      try {
        for (var f = E(this.listeners), l = f.next(); !l.done; l = f.next()) {
          var v = l.value;
          this.listeners.delete(v);
        }
      } catch (D) {
        t = {
          error: D
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
      } catch (D) {
        r = {
          error: D
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
      } catch (D) {
        s = {
          error: D
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
      } catch (D) {
        u = {
          error: D
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
      this.initialized = !1, this.status = Y.Stopped, this._initialState = void 0;
      try {
        for (var b = E(Object.keys(this.delayedEventsMap)), P = b.next(); !P.done; P = b.next()) {
          var N = P.value;
          this.clock.clearTimeout(this.delayedEventsMap[N]);
        }
      } catch (D) {
        c = {
          error: D
        };
      } finally {
        try {
          P && !P.done && (h = b.return) && h.call(b);
        } finally {
          if (c)
            throw c.error;
        }
      }
      this.scheduler.clear(), this.scheduler = new Se({
        deferEvents: this.options.deferEvents
      });
    }, n.prototype.stop = function() {
      var t = this, e = this.scheduler;
      return this._stop(), e.schedule(function() {
        var r;
        if (!(!((r = t._state) === null || r === void 0) && r.done)) {
          var i = U({
            type: "xstate.stop"
          }), s = ft(t, function() {
            var o = R(j([], A(t.state.configuration), !1).sort(function(f, l) {
              return l.order - f.order;
            }).map(function(f) {
              return q(f.onExit, t.machine.options.actions);
            })), u = A(Mt(t.machine, t.state, t.state.context, i, [{
              type: "exit",
              actions: o
            }], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2), a = u[0], c = u[1], h = new K({
              value: t.state.value,
              context: c,
              _event: i,
              _sessionid: t.sessionId,
              historyValue: void 0,
              history: t.state,
              actions: a.filter(function(f) {
                return !ee(f);
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
            return h.changed = !0, h;
          });
          t.update(s, i), t._stopChildren(), wt.free(t.sessionId);
        }
      }), this;
    }, n.prototype.batch = function(t) {
      var e = this;
      if (this.status === Y.NotStarted && this.options.deferEvents)
        L || F(!1, "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
      else if (this.status !== Y.Running)
        throw new Error(
          // tslint:disable-next-line:max-line-length
          "".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
        );
      if (t.length) {
        var r = !!this.machine.config.predictableActionArguments && this._exec;
        this.scheduler.schedule(function() {
          var i, s, o = e.state, u = !1, a = [], c = function(v) {
            var y = U(v);
            e.forward(y), o = ft(e, function() {
              return e.machine.transition(o, y, void 0, r || void 0);
            }), a.push.apply(a, j([], A(e.machine.config.predictableActionArguments ? o.actions : o.actions.map(function(p) {
              return Bn(p, o);
            })), !1)), u = u || !!o.changed;
          };
          try {
            for (var h = E(t), f = h.next(); !f.done; f = h.next()) {
              var l = f.value;
              c(l);
            }
          } catch (v) {
            i = {
              error: v
            };
          } finally {
            try {
              f && !f.done && (s = h.return) && s.call(h);
            } finally {
              if (i)
                throw i.error;
            }
          }
          o.changed = u, o.actions = a, e.update(o, U(t[t.length - 1]));
        });
      }
    }, n.prototype.sender = function(t) {
      return this.send.bind(this, t);
    }, n.prototype._nextState = function(t, e) {
      var r = this;
      e === void 0 && (e = !!this.machine.config.predictableActionArguments && this._exec);
      var i = U(t);
      if (i.name.indexOf(Qt) === 0 && !this.state.nextEvents.some(function(o) {
        return o.indexOf(Qt) === 0;
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
      e && (this.removeChild(t), _(e.stop) && e.stop());
    }, n.prototype.spawn = function(t, e, r) {
      if (this.status !== Y.Running)
        return Be(t, e);
      if (ye(t))
        return this.spawnPromise(Promise.resolve(t), e);
      if (_(t))
        return this.spawnCallback(t, e);
      if (Wn(t))
        return this.spawnActor(t, e);
      if (An(t))
        return this.spawnObservable(t, e);
      if (st(t))
        return this.spawnMachine(t, d(d({}, r), {
          id: e
        }));
      if (xn(t))
        return this.spawnBehavior(t, e);
      throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof t, '".'));
    }, n.prototype.spawnMachine = function(t, e) {
      var r = this;
      e === void 0 && (e = {});
      var i = new n(t, d(d({}, this.options), {
        parent: this,
        id: e.id || t.id
      })), s = d(d({}, er), e);
      s.sync && i.onTransition(function(u) {
        r.send(Vt, {
          state: u,
          id: i.id
        });
      });
      var o = i;
      return this.children.set(i.id, o), s.autoForward && this.forwardTo.add(i.id), i.onDone(function(u) {
        r.removeChild(i.id), r.send(U(u, {
          origin: i.id
        }));
      }).start(), o;
    }, n.prototype.spawnBehavior = function(t, e) {
      var r = tr(t, {
        id: e,
        parent: this
      });
      return this.children.set(e, r), r;
    }, n.prototype.spawnPromise = function(t, e) {
      var r, i = this, s = !1, o;
      t.then(function(a) {
        s || (o = a, i.removeChild(e), i.send(U(Dt(e, a), {
          origin: e
        })));
      }, function(a) {
        if (!s) {
          i.removeChild(e);
          var c = vt(e, a);
          try {
            i.send(U(c, {
              origin: e
            }));
          } catch (h) {
            _n(a, h, e), i.devTools && i.devTools.send(c, i.state), i.machine.strict && i.stop();
          }
        }
      });
      var u = (r = {
        id: e,
        send: function() {
        },
        subscribe: function(a, c, h) {
          var f = jt(a, c, h), l = !1;
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
      }, r[Z] = function() {
        return this;
      }, r);
      return this.children.set(e, u), u;
    }, n.prototype.spawnCallback = function(t, e) {
      var r, i = this, s = !1, o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), a, c = function(l) {
        a = l, u.forEach(function(v) {
          return v(l);
        }), !s && i.send(U(l, {
          origin: e
        }));
      }, h;
      try {
        h = t(c, function(l) {
          o.add(l);
        });
      } catch (l) {
        this.send(vt(e, l));
      }
      if (ye(h))
        return this.spawnPromise(h, e);
      var f = (r = {
        id: e,
        send: function(l) {
          return o.forEach(function(v) {
            return v(l);
          });
        },
        subscribe: function(l) {
          var v = jt(l);
          return u.add(v.next), {
            unsubscribe: function() {
              u.delete(v.next);
            }
          };
        },
        stop: function() {
          s = !0, _(h) && h();
        },
        toJSON: function() {
          return {
            id: e
          };
        },
        getSnapshot: function() {
          return a;
        }
      }, r[Z] = function() {
        return this;
      }, r);
      return this.children.set(e, f), f;
    }, n.prototype.spawnObservable = function(t, e) {
      var r, i = this, s, o = t.subscribe(function(a) {
        s = a, i.send(U(a, {
          origin: e
        }));
      }, function(a) {
        i.removeChild(e), i.send(U(vt(e, a), {
          origin: e
        }));
      }, function() {
        i.removeChild(e), i.send(U(Dt(e), {
          origin: e
        }));
      }), u = (r = {
        id: e,
        send: function() {
        },
        subscribe: function(a, c, h) {
          return t.subscribe(a, c, h);
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
      }, r[Z] = function() {
        return this;
      }, r);
      return this.children.set(e, u), u;
    }, n.prototype.spawnActor = function(t, e) {
      return this.children.set(e, t), t;
    }, n.prototype.spawnActivity = function(t) {
      var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
      if (!e) {
        L || F(!1, "No implementation found for activity '".concat(t.type, "'"));
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
      }, r[Z] = function() {
        return this;
      }, r));
    }, n.prototype.attachDev = function() {
      var t = he();
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
        Zn(this);
      }
    }, n.prototype.toJSON = function() {
      return {
        id: this.id
      };
    }, n.prototype[Z] = function() {
      return this;
    }, n.prototype.getSnapshot = function() {
      return this.status === Y.NotStarted ? this.initialState : this._state;
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
    }, n.interpret = tn, n;
  }()
);
function tn(n, t) {
  var e = new nr(n, t);
  return e;
}
function rr(n) {
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
function Pt(n) {
  return d(d({
    type: kt
  }, n), {
    toJSON: function() {
      n.onDone, n.onError;
      var t = se(n, ["onDone", "onError"]);
      return d(d({}, t), {
        type: kt,
        src: rr(n.src)
      });
    }
  });
}
var dt = "", re = "#", St = "*", ct = {}, ht = function(n) {
  return n[0] === re;
}, ir = function() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
}, sr = function(n, t, e) {
  var r = e.slice(0, -1).some(function(s) {
    return !("cond" in s) && !("in" in s) && (M(s.target) || st(s.target));
  }), i = t === dt ? "the transient event" : "event '".concat(t, "'");
  F(!r, "One or more transitions for ".concat(i, " on state '").concat(n.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, or = (
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
      }, this.idMap = {}, this.tags = [], this.options = Object.assign(ir(), e), this.parent = i == null ? void 0 : i.parent, this.key = this.config.key || (i == null ? void 0 : i.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Te), this.id = this.config.id || j([this.machine.key], A(this.path), !1).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (o = this.config.schema) !== null && o !== void 0 ? o : {}, this.description = this.config.description, L || F(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? bt(this.config.states, function(c, h) {
        var f, l = new n(c, {}, void 0, {
          parent: s,
          key: h
        });
        return Object.assign(s.idMap, d((f = {}, f[l.id] = l, f), l.idMap)), l;
      }) : ct;
      var u = 0;
      function a(c) {
        var h, f;
        c.order = u++;
        try {
          for (var l = E(Ge(c)), v = l.next(); !v.done; v = l.next()) {
            var y = v.value;
            a(y);
          }
        } catch (p) {
          h = {
            error: p
          };
        } finally {
          try {
            v && !v.done && (f = l.return) && f.call(l);
          } finally {
            if (h)
              throw h.error;
          }
        }
      }
      a(this), this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(c) {
        var h = c.event;
        return h === dt;
      }) : dt in this.config.on : !1), this.strict = !!this.config.strict, this.onEntry = V(this.config.entry || this.config.onEntry).map(function(c) {
        return pt(c);
      }), this.onExit = V(this.config.exit || this.config.onExit).map(function(c) {
        return pt(c);
      }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = V(this.config.invoke).map(function(c, h) {
        var f, l;
        if (st(c)) {
          var v = Tt(s.id, h);
          return s.machine.options.services = d((f = {}, f[v] = c, f), s.machine.options.services), Pt({
            src: v,
            id: v
          });
        } else if (M(c.src)) {
          var v = c.id || Tt(s.id, h);
          return Pt(d(d({}, c), {
            id: v,
            src: c.src
          }));
        } else if (st(c.src) || _(c.src)) {
          var v = c.id || Tt(s.id, h);
          return s.machine.options.services = d((l = {}, l[v] = c.src, l), s.machine.options.services), Pt(d(d({
            id: v
          }, c), {
            src: v
          }));
        } else {
          var y = c.src;
          return Pt(d(d({
            id: Tt(s.id, h)
          }, c), {
            src: y
          }));
        }
      }), this.activities = V(this.config.activities).concat(this.invoke).map(function(c) {
        return Kt(c);
      }), this.transition = this.transition.bind(this), this.tags = V(this.config.tags);
    }
    return n.prototype._init = function() {
      this.__cache.transitions || qe(this).forEach(function(t) {
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
        return _(this._context) ? this._context() : this._context;
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
        var u = _(s) ? "".concat(t.id, ":delay[").concat(o, "]") : s, a = Je(u, t.id);
        return t.onEntry.push(ot(a, {
          delay: s
        })), t.onExit.push(He(a)), a;
      }, i = gt(e) ? e.map(function(s, o) {
        var u = r(s.delay, o);
        return d(d({}, s), {
          event: u
        });
      }) : R(Object.keys(e).map(function(s, o) {
        var u = e[s], a = M(u) ? {
          target: u
        } : u, c = isNaN(+s) ? s : +s, h = r(c, o);
        return V(a).map(function(f) {
          return d(d({}, f), {
            event: h,
            delay: c
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
      var i = t instanceof K ? t.value : At(t, this.delimiter);
      if (M(i)) {
        var s = this.getStateNode(i).initial;
        return s !== void 0 ? this.getStateNodes((e = {}, e[i] = s, e)) : [this, this.states[i]];
      }
      var o = Object.keys(i), u = [this];
      return u.push.apply(u, j([], A(R(o.map(function(a) {
        return r.getStateNode(a).getStateNodes(i[a]);
      }))), !1)), u;
    }, n.prototype.handles = function(t) {
      var e = Pe(t);
      return this.events.includes(e);
    }, n.prototype.resolveState = function(t) {
      var e = t instanceof K ? t : K.create(t), r = Array.from(Et([], this.getStateNodes(e.value)));
      return new K(d(d({}, e), {
        value: this.resolve(e.value),
        configuration: r,
        done: Rt(r, this),
        tags: we(r),
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
          var c = a.value, h = t[c];
          if (h) {
            var f = this.getStateNode(c), l = f._transition(h, e, r);
            l && (o[c] = l);
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
      return M(t) ? this.transitionLeafNode(t, e, r) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, e, r) : this.transitionParallelNode(t, e, r);
    }, n.prototype.getTransitionData = function(t, e) {
      return this._transition(t.value, t, U(e));
    }, n.prototype.next = function(t, e) {
      var r, i, s = this, o = e.name, u = [], a = [], c;
      try {
        for (var h = E(this.getCandidates(o)), f = h.next(); !f.done; f = h.next()) {
          var l = f.value, v = l.cond, y = l.in, p = t.context, S = y ? M(y) && ht(y) ? (
            // Check if in state by ID
            t.matches(At(this.getStateNodeById(y).path, this.delimiter))
          ) : (
            // Check if in state by relative grandparent
            ue(At(y, this.delimiter), wn(this.path.slice(0, -2))(t.value))
          ) : !0, m = !1;
          try {
            m = !v || Le(this.machine, v, p, e, t);
          } catch (b) {
            throw new Error("Unable to evaluate guard '".concat(v.name || v.type, "' in transition for event '").concat(o, "' in state node '").concat(this.id, `':
`).concat(b.message));
          }
          if (m && S) {
            l.target !== void 0 && (a = l.target), u.push.apply(u, j([], A(l.actions), !1)), c = l;
            break;
          }
        }
      } catch (b) {
        r = {
          error: b
        };
      } finally {
        try {
          f && !f.done && (i = h.return) && i.call(h);
        } finally {
          if (r)
            throw r.error;
        }
      }
      if (c) {
        if (!a.length)
          return {
            transitions: [c],
            exitSet: [],
            configuration: t.value ? [this] : [],
            source: t,
            actions: u
          };
        var g = R(a.map(function(b) {
          return s.getRelativeStateNodes(b, t.historyValue);
        })), w = !!c.internal;
        return {
          transitions: [c],
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
      var a, c, h, f, l = this, v = o ? Et([], this.getStateNodes(o.value)) : [], y = /* @__PURE__ */ new Set();
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
          S && !S.done && (c = p.return) && c.call(p);
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
        h = {
          error: x
        };
      } finally {
        try {
          w && !w.done && (f = g.return) && f.call(g);
        } finally {
          if (h)
            throw h.error;
        }
      }
      r.exitSet.sort(function(x, I) {
        return I.order - x.order;
      });
      var b = Array.from(y).sort(function(x, I) {
        return x.order - I.order;
      }), P = new Set(r.exitSet), N = R(b.map(function(x) {
        var I = [];
        if (x.type !== "final")
          return I;
        var z = x.parent;
        if (!z.parent)
          return I;
        I.push(
          xt(x.id, x.doneData),
          // TODO: deprecate - final states should not emit done events for their own state.
          xt(z.id, x.doneData ? zt(x.doneData, i, s) : void 0)
        );
        var H = z.parent;
        return H.type === "parallel" && _t(H).every(function(mt) {
          return Rt(r.configuration, mt);
        }) && I.push(xt(H.id)), I;
      })), D = b.map(function(x) {
        var I = x.onEntry, z = x.activities.map(function(H) {
          return We(H);
        });
        return {
          type: "entry",
          actions: q(u ? j(j([], A(I), !1), A(z), !1) : j(j([], A(z), !1), A(I), !1), l.machine.options.actions)
        };
      }).concat({
        type: "state_done",
        actions: N.map(function(x) {
          return Ye(x);
        })
      }), T = Array.from(P).map(function(x) {
        return {
          type: "exit",
          actions: q(j(j([], A(x.onExit), !1), A(x.activities.map(function(I) {
            return Xe(I);
          })), !1), l.machine.options.actions)
        };
      }), O = T.concat({
        type: "transition",
        actions: q(r.actions, this.machine.options.actions)
      }).concat(D);
      if (e) {
        var k = q(R(j([], A(t), !1).sort(function(x, I) {
          return I.order - x.order;
        }).map(function(x) {
          return x.onExit;
        })), this.machine.options.actions).filter(function(x) {
          return !ee(x);
        });
        return O.concat({
          type: "stop",
          actions: k
        });
      }
      return O;
    }, n.prototype.transition = function(t, e, r, i) {
      t === void 0 && (t = this.initialState);
      var s = U(e), o;
      if (t instanceof K)
        o = r === void 0 ? t : this.resolveState(K.from(t, r));
      else {
        var u = M(t) ? this.resolve(Yt(this.getResolvedPath(t))) : this.resolve(t), a = r ?? this.machine.context;
        o = this.resolveState(K.from(u, a));
      }
      if (!L && s.name === St)
        throw new Error("An event cannot have the wildcard type ('".concat(St, "')"));
      if (this.strict && !this.events.includes(s.name) && !bn(s.name))
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(s.name, "'"));
      var c = this._transition(o.value, o, s) || {
        transitions: [],
        configuration: [],
        exitSet: [],
        source: o,
        actions: []
      }, h = Et([], this.getStateNodes(o.value)), f = c.configuration.length ? Et(h, c.configuration) : h;
      return c.configuration = j([], A(f), !1), this.resolveTransition(c, o, o.context, i, s);
    }, n.prototype.resolveRaisedTransition = function(t, e, r, i) {
      var s, o = t.actions;
      return t = this.transition(t, e, void 0, i), t._event = r, t.event = r.data, (s = t.actions).unshift.apply(s, j([], A(o), !1)), t;
    }, n.prototype.resolveTransition = function(t, e, r, i, s) {
      var o, u, a, c, h = this;
      s === void 0 && (s = it);
      var f = t.configuration, l = !e || t.transitions.length > 0, v = l ? t.configuration : e ? e.configuration : [], y = Rt(v, this), p = l ? $n(this.machine, f) : void 0, S = e ? e.historyValue ? e.historyValue : t.source ? this.machine.historyValue(e.value) : void 0 : void 0, m = this.getActions(new Set(v), y, t, r, s, e, i), g = e ? d({}, e.activities) : {};
      try {
        for (var w = E(m), b = w.next(); !b.done; b = w.next()) {
          var P = b.value;
          try {
            for (var N = (a = void 0, E(P.actions)), D = N.next(); !D.done; D = N.next()) {
              var T = D.value;
              T.type === Lt ? g[T.activity.id || T.activity.type] = T : T.type === Wt && (g[T.activity.id || T.activity.type] = !1);
            }
          } catch ($) {
            a = {
              error: $
            };
          } finally {
            try {
              D && !D.done && (c = N.return) && c.call(N);
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
      var O = A(Mt(this, e, r, s, m, i, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), k = O[0], x = O[1], I = A(En(k, ee), 2), z = I[0], H = I[1], mt = k.filter(function($) {
        var at;
        return $.type === Lt && ((at = $.activity) === null || at === void 0 ? void 0 : at.type) === kt;
      }), Bt = mt.reduce(function($, at) {
        return $[at.activity.id] = Fn(at.activity, h.machine, x, s), $;
      }, e ? d({}, e.children) : {}), nt = new K({
        value: p || e.value,
        context: x,
        _event: s,
        // Persist _sessionid between states
        _sessionid: e ? e._sessionid : null,
        historyValue: p ? S ? On(S, p) : void 0 : e ? e.historyValue : void 0,
        history: !p || t.source ? e : void 0,
        actions: p ? H : [],
        activities: p ? g : e ? e.activities : {},
        events: [],
        configuration: v,
        transitions: t.transitions,
        children: Bt,
        done: y,
        tags: we(v),
        machine: this
      }), Q = r !== x;
      nt.changed = s.name === Vt || Q;
      var W = nt.history;
      W && delete W.history;
      var de = !y && (this._transient || f.some(function($) {
        return $._transient;
      }));
      if (!l && (!de || s.name === dt))
        return nt;
      var X = nt;
      if (!y)
        for (de && (X = this.resolveRaisedTransition(X, {
          type: Me
        }, s, i)); z.length; ) {
          var nn = z.shift();
          X = this.resolveRaisedTransition(X, nn._event, s, i);
        }
      var rn = X.changed || (W ? !!X.actions.length || Q || typeof W.value != typeof X.value || !Ze(X.value, W.value) : void 0);
      return X.changed = rn, X.history = W, X;
    }, n.prototype.getStateNode = function(t) {
      if (ht(t))
        return this.machine.getStateNodeById(t);
      if (!this.states)
        throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
      var e = this.states[t];
      if (!e)
        throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
      return e;
    }, n.prototype.getStateNodeById = function(t) {
      var e = ht(t) ? t.slice(re.length) : t;
      if (e === this.id)
        return this;
      var r = this.machine.idMap[e];
      if (!r)
        throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
      return r;
    }, n.prototype.getStateNodeByPath = function(t) {
      if (typeof t == "string" && ht(t))
        try {
          return this.getStateNodeById(t.slice(1));
        } catch {
        }
      for (var e = te(t, this.delimiter).slice(), r = this; e.length; ) {
        var i = e.shift();
        if (!i.length)
          break;
        r = r.getStateNode(i);
      }
      return r;
    }, n.prototype.resolve = function(t) {
      var e, r = this;
      if (!t)
        return this.initialStateValue || ct;
      switch (this.type) {
        case "parallel":
          return bt(this.initialStateValue, function(s, o) {
            return s ? r.getStateNode(o).resolve(t[o] || s) : ct;
          });
        case "compound":
          if (M(t)) {
            var i = this.getStateNode(t);
            return i.type === "parallel" || i.type === "compound" ? (e = {}, e[t] = i.initialStateValue, e) : t;
          }
          return Object.keys(t).length ? bt(t, function(s, o) {
            return s ? r.getStateNode(o).resolve(s) : ct;
          }) : this.initialStateValue || {};
        default:
          return t || ct;
      }
    }, n.prototype.getResolvedPath = function(t) {
      if (ht(t)) {
        var e = this.machine.idMap[t.slice(re.length)];
        if (!e)
          throw new Error("Unable to find state node '".concat(t, "'"));
        return e.path;
      }
      return te(t, this.delimiter);
    }, Object.defineProperty(n.prototype, "initialStateValue", {
      get: function() {
        var t;
        if (this.__cache.initialStateValue)
          return this.__cache.initialStateValue;
        var e;
        if (this.type === "parallel")
          e = pe(this.states, function(r) {
            return r.initialStateValue || ct;
          }, function(r) {
            return r.type !== "history";
          });
        else if (this.initial !== void 0) {
          if (!this.states[this.initial])
            throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
          e = Ft(this.states[this.initial]) ? this.initial : (t = {}, t[this.initial] = this.states[this.initial].initialStateValue, t);
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
          M(e.target) ? t = ht(e.target) ? Yt(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : t = e.target;
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
        if (Ft(this))
          return [this];
        if (this.type === "compound" && !this.initial)
          return L || F(!1, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
        var e = It(this.initialStateValue);
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
          states: pe(this.states, function(e, r) {
            if (!t)
              return e.historyValue();
            var i = M(t) ? void 0 : t[r];
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
        return i ? R(It(i).map(function(o) {
          return r.getFromRelativePath(o);
        })) : r.initialStateNodes;
      }
      var s = Sn(r.path, "states")(t).current;
      return M(s) ? [r.getStateNode(s)] : R(It(s).map(function(o) {
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
              var c = a.value, h = s[c];
              if (h.states)
                try {
                  for (var f = (r = void 0, E(h.events)), l = f.next(); !l.done; l = f.next()) {
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
          if (!M(r))
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
      var e = this, r = Mn(t.target), i = "internal" in t ? t.internal : r ? r.some(function(a) {
        return M(a) && a[0] === e.delimiter;
      }) : !0, s = this.machine.options.guards, o = this.resolveTarget(r), u = d(d({}, t), {
        actions: q(V(t.actions)),
        cond: Re(t.cond, s),
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
        var s = this.config.on, o = St, u = s[o], a = u === void 0 ? [] : u, c = se(s, [typeof o == "symbol" ? o : o + ""]);
        i = R(Object.keys(c).map(function(g) {
          !L && g === dt && F(!1, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(r.id, '".'));
          var w = ut(g, c[g]);
          return L || sr(r, g, w), w;
        }).concat(ut(St, a)));
      }
      var h = this.config.always ? ut("", this.config.always) : [], f = this.config.onDone ? ut(String(xt(this.id)), this.config.onDone) : [];
      L || F(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
      var l = R(this.invoke.map(function(g) {
        var w = [];
        return g.onDone && w.push.apply(w, j([], A(ut(String(Dt(g.id)), g.onDone)), !1)), g.onError && w.push.apply(w, j([], A(ut(String(vt(g.id)), g.onError)), !1)), w;
      })), v = this.after, y = R(j(j(j(j([], A(f), !1), A(l), !1), A(i), !1), A(h), !1).map(function(g) {
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
), be = !1;
function ar(n, t) {
  return !L && !("predictableActionArguments" in n) && !be && (be = !0, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new or(n, t);
}
var lt = Ve, qt = ot;
const { choose: ur } = Un, cr = {
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
}, hr = {
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
}, lr = (n) => ar(
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
                actions: ["unselectAll", qt("mouseDownInSelectModeUnassign")]
              },
              KEYDOWN_DEL: {
                actions: ["deleteComponent", qt("mouseDownInSelectModeUnassign")]
              },
              mouseDownInSelectModeUnassign: {
                actions: "mouseDownInSelectModeUnassign"
              }
            },
            entry: "selectModeEntry",
            exit: ["unselectAll", qt("mouseDownInSelectModeUnassign")]
          },
          drawMode: {
            initial: void 0,
            states: cr,
            on: {
              KEYDOWN_ESC: "#idle.selectMode"
            }
          }
        }
      },
      drawing: {
        id: "drawing",
        initial: void 0,
        states: hr,
        exit: ur([
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
        t._editor.selectModeHandler && t._editor.selectModeHandler();
      }
    },
    guards: {
      isHandle: (t, e) => e.component instanceof B,
      unfinishedIsValid: (t, e) => t.unfinishedComponent.isValid()
    }
  }
), fr = (n) => tn(lr(n)), le = (n, t, e) => {
  const r = {
    defineProperty(i, s, o) {
      return Object.is(o.value, i[s]) || (typeof t == "function" ? t.call(e || this, s, o.value, i[s], n) : t[s].call(e || this, o.value, i[s], n)), Reflect.defineProperty(i, s, o);
    }
  };
  return new Proxy(n, r);
};
function xe(n, t, e) {
  return new B(
    n,
    t,
    (r, i) => {
      e.x += r, e.y += i;
    },
    this.isFrozen
  );
}
class dr {
  constructor(t, e) {
    this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], this.editorOwner = t, this.element = G.createElementNS(rt, "polygon"), this.points = [], this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], e && [e].flat().forEach((r) => this.addPoint(r.x, r.y)), this.style = {}, this.isSelected = !1, this.isFrozen = !1;
  }
  freeze(t) {
    return this.isFrozen = t !== void 0 ? !!t : !0, this.getHandles().forEach((e) => e.freeze(t)), this;
  }
  updateElementPoints() {
    return this.element.setAttribute("points", this.points.map((t) => `${t.x},${t.y}`).join(" ")), this;
  }
  addPoint(t, e) {
    const r = { x: t, y: e }, i = le(r, (s, o, u, a) => {
      var c, h;
      s !== "handle" && (this._logWarnOnOpOnFrozen("Point moved on"), this.updateElementPoints(), (h = (c = a.handle) == null ? void 0 : c["setAttr" + s.toUpperCase()]) == null || h.call(c, o));
    });
    return r.handle = xe.call(this, t, e, i), this.editorOwner.registerComponentHandle(r.handle), this.points.push(i), this.updateElementPoints(), this;
  }
  moveLastPoint(t, e) {
    const r = this.points[this.points.length - 1];
    return [r.x, r.y] = [t, e], this;
  }
  // TODO: move by transform:translate instead?
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
        const i = xe.call(this, e.x, e.y, e);
        e.handle = i, (r = this.editorOwner) == null || r.registerComponentHandle(i);
      }
      e.handle.setVisible(t);
    }), this;
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
    return this.style = t, J(this.element, t.component), J(this.element, t.componentHover.off), J(this.element, t.componentSelect.off), ie(this.element, t.componentHover.off, t.componentHover.on), this;
  }
  setDataAttributes(t) {
    for (let e in t)
      this.element.setAttribute(e, String(t[e]));
    return this;
  }
  export() {
    const t = {
      points: this.points.map((e) => ({ x: e.x, y: e.y }))
    };
    for (let e of this.element.attributes)
      (e.name in this.includeAttributes || De.test(e.name)) && (t[e.name] = e.value);
    return t;
  }
  _logWarnOnOpOnFrozen(t) {
    this.isFrozen && console.warn(`${t} frozen ${this.element.tagName} with id ${this.element.id}`);
  }
}
function Ee() {
  const { x: n, y: t, width: e, height: r } = this.dim;
  this.handles = [
    //@ts-ignore
    new B(
      n,
      t,
      (i, s) => {
        this.dim.x += i, this.dim.width -= i, this.dim.y += s, this.dim.height -= s;
      },
      this.isFrozen
    ),
    //@ts-ignore
    new B(
      n,
      t + r,
      (i, s) => {
        this.dim.x += i, this.dim.width -= i, this.dim.height += s;
      },
      this.isFrozen
    ),
    //@ts-ignore
    new B(
      n + e,
      t,
      (i, s) => {
        this.dim.width += i, this.dim.y += s, this.dim.height -= s;
      },
      this.isFrozen
    ),
    //@ts-ignore
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
class fe {
  constructor(t, e) {
    this.editorOwner = null, this.includeAttributes = ["fill", "stroke", "opacity", "stroke-width"], this.dim = {
      x: 0,
      height: 0,
      width: 0,
      y: 0
    }, this.handles = [], this.style = {}, this.isSelected = !1, this.isFrozen = !1, this.propChangeListener = e, this.svgElementName = t, this.element = G.createElementNS(rt, this.svgElementName);
  }
  add(t, e, r, i = 0, s = 0) {
    this.editorOwner = t, this.dim = le(
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
          this._logWarnOnOpOnFrozen("Dimension property x changed on"), this.propChangeListener.x.call(this, o, u, a), this.handles[0].setAttrX(o), this.handles[1].setAttrX(o), this.handles[2].setAttrX(o + a.width), this.handles[3].setAttrX(o + a.width);
        },
        // move
        y: (o, u, a) => {
          this._logWarnOnOpOnFrozen("Dimension property y changed on"), this.propChangeListener.y.call(this, o, u, a), this.handles[0].setAttrY(o), this.handles[1].setAttrY(o + a.height), this.handles[2].setAttrY(o), this.handles[3].setAttrY(o + a.height);
        },
        // resize
        width: (o, u, a) => {
          this._logWarnOnOpOnFrozen("Dimension property width changed on"), this.propChangeListener.width.call(this, o, u, a), this.handles[2].setAttrX(a.x + o), this.handles[3].setAttrX(a.x + o);
        },
        // resize
        height: (o, u, a) => {
          this._logWarnOnOpOnFrozen("Dimension property height changed on"), this.propChangeListener.height.call(this, o, u, a), this.handles[1].setAttrY(a.y + o), this.handles[3].setAttrY(a.y + o);
        }
      },
      this
    ), Ee.call(this), [this.dim.width, this.dim.height] = [i, s], this.style = {}, this.isSelected = !1, this.isFrozen = !1;
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
    return t && !((e = this.handles) != null && e.length) && Ee.call(this), (r = this.handles) == null || r.forEach((i) => i == null ? void 0 : i.setVisible(t)), this;
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
  clearHandles() {
    this.handles = [];
  }
  setStyle(t) {
    return this.style = t, J(this.element, t.component), J(this.element, t.componentHover.off), J(this.element, t.componentSelect.off), ie(this.element, t.componentHover.off, t.componentHover.on), this;
  }
  setDataAttributes(t) {
    var e;
    for (let r in t)
      (e = this.element) == null || e.setAttribute(r, String(t[r]));
    return this;
  }
  export() {
    var o;
    const { x: t, y: e, width: r, height: i } = this.dim, s = {
      x: t,
      y: e,
      width: r,
      height: i
    };
    for (let u of (o = this.element) == null ? void 0 : o.attributes)
      (u.name in this.includeAttributes || De.test(u.name)) && (s[u.name] = u.value);
    return s;
  }
  _logWarnOnOpOnFrozen(t) {
    var e, r;
    this.isFrozen && console.warn(`${t} frozen ${(e = this.element) == null ? void 0 : e.tagName} with id ${(r = this.element) == null ? void 0 : r.id}`);
  }
}
class vr extends fe {
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
class pr extends fe {
  constructor(t, e, r, i, s) {
    super("circle", {
      // move
      x: (o, u, a) => {
        var c;
        (c = this == null ? void 0 : this.element) == null || c.setAttribute("cx", String(o + a.width / 2));
      },
      // move
      y: (o, u, a) => {
        var c;
        (c = this == null ? void 0 : this.element) == null || c.setAttribute("cy", String(o + a.height / 2));
      },
      // resize
      width: (o, u, a) => {
        var c, h;
        (c = this == null ? void 0 : this.element) == null || c.setAttribute(
          "r",
          String(Math.min(Math.abs(o), Math.abs(a.height)) / 2)
        ), (h = this == null ? void 0 : this.element) == null || h.setAttribute("cx", String(a.x + o / 2));
      },
      // resize
      height: (o, u, a) => {
        var c, h;
        (c = this == null ? void 0 : this.element) == null || c.setAttribute(
          "r",
          String(Math.min(Math.abs(o), Math.abs(a.width)) / 2)
        ), (h = this == null ? void 0 : this.element) == null || h.setAttribute("cy", String(a.y + o / 2));
      }
    }), this.add(t, e, r, i, s);
  }
}
class yr extends fe {
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
class Oe {
  constructor(t, e = {}, r = {}) {
    if ([
      this.width = 1200,
      this.height = 600,
      this.componentDrawnHandler,
      this.selectModeHandler,
      this.viewClickHandler
    ] = [
      e.width,
      e.height,
      e.componentDrawnHandler,
      // applies to Editor only
      e.selectModeHandler,
      // applies to Editor only
      e.viewClickHandler
      // applies to View only
    ], this.style = Ht(fn(), r), this.fsmService = fr(this).start(), this.svg = t, typeof t == "string") {
      if (this.svg = G.getElementById(t), !this.svg) {
        this.svg = G.createElementNS(rt, "svg"), this.svg.setAttribute("version", "1.1"), this.svg.setAttribute("id", t), this.svg.setAttribute("width", this.width + "px"), this.svg.setAttribute("height", this.height + "px"), this.svg.setAttribute("viewBox", `0, 0, ${this.width} ${this.height}`), this.svg.setAttribute("preserveAspectRatio", "xMinYMin");
        const i = this.svg;
        window.addEventListener(
          "load",
          function() {
            G.body.appendChild(i);
          },
          { once: !0 }
        );
      }
    } else
      t && t.tagName === "svg" && (this.svg = t);
    if (!this.svg)
      throw new Error("No SVG element provided");
    this.cgroup = G.createElementNS(rt, "g"), this.hgroup = G.createElementNS(rt, "g"), this.svg.appendChild(this.cgroup), this.svg.appendChild(this.hgroup), this._cacheElementMapping = le({}, (i, s, o) => {
      s ? s instanceof B ? this.hgroup.appendChild(s.element) : this.cgroup.appendChild(s.element) : o instanceof B ? this.hgroup.removeChild(o.element) : o && (this.cgroup.removeChild(o.element), o.getHandles().forEach((u) => {
        this.unregisterComponent(u);
      }));
    }), this._idCounter = 1, this._handleIdCounter = 1;
  }
  loadImage(t, e, r) {
    var s;
    const i = G.createElementNS(rt, "image");
    return i.setAttributeNS(sn, "href", t), e && i.setAttribute("width", String(e)), r && i.setAttribute("height", String(r)), (s = this.svg) == null || s.prepend(i), this;
  }
  setStyle(t) {
    return this.style = Ht(this.style, t), this;
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
  selectComponent(t) {
    let e;
    return typeof t == "string" ? e = this.getComponentById(t) : e = t, (!e || e.setIsSelected) && Object.values(this._cacheElementMapping).forEach((r) => {
      r === t && r.setIsSelected && r.setIsSelected(!0), r !== t && !r.isFrozen && r.setIsSelected && (r.setIsSelected(!1), r.getHandles().forEach((i) => {
        this.unregisterComponent(i);
      }), r.clearHandles());
    }), e;
  }
  removeComponent(t) {
    return typeof t == "string" && (t = this.getComponentById(t)), this.unregisterComponent(t), t;
  }
  on(t, e) {
    return tt(this.svg, t, e), this;
  }
  off(t, e) {
    return on(this.svg, t, e), this;
  }
  getComponentById(t) {
    return this._cacheElementMapping && this._cacheElementMapping[t];
  }
  import(t, e) {
    const r = JSON.parse(t);
    return this._idCounter = r.idCounter, r.components.map((i) => {
      const s = e ? e(i.id) : i.id;
      switch (i.type) {
        case "rect":
          return this.createRectangle(i.data, s);
        case "circle":
          return this.createCircle(i.data, s);
        case "ellipse":
          return this.createEllipse(i.data, s);
        case "polygon":
          return this.createPolygon(i.data, s);
        default:
          return console.error("Unknown type", i.type), null;
      }
    }).filter((i) => i);
  }
  export(t) {
    const e = {
      idCounter: this._idCounter,
      components: Object.entries(this._cacheElementMapping).filter(([i, s]) => !(s instanceof B)).map(([i, s]) => ({
        id: i,
        type: s.element.tagName,
        data: s.export()
      }))
    }, r = JSON.stringify(e);
    return t ? r.replace(/[\"]/g, '\\"') : r;
  }
  createRectangle(t, e) {
    const { x: r, y: i, width: s, height: o, ...u } = t;
    return this.registerComponent(
      new vr(this, r, i, s, o).setStyle(this.style).setDataAttributes(u),
      e
    );
  }
  createCircle(t, e) {
    const { x: r, y: i, width: s, height: o, ...u } = t;
    return this.registerComponent(
      new pr(this, r, i, s, o).setStyle(this.style).setDataAttributes(u),
      e
    );
  }
  createEllipse(t, e) {
    const { x: r, y: i, width: s, height: o, ...u } = t;
    return this.registerComponent(
      new yr(this, r, i, s, o).setStyle(this.style).setDataAttributes(u),
      e
    );
  }
  createPolygon(t, e) {
    const { points: r, ...i } = t;
    return this.registerComponent(
      new dr(this, r).setStyle(this.style).setDataAttributes(i),
      e
    );
  }
  registerComponent(t, e) {
    return t instanceof B ? e = "handle_" + this._handleIdCounter++ : e = e || t.element.tagName + "_" + this._idCounter++, this._cacheElementMapping[e] = t, t.element.id = e, t;
  }
  registerComponentHandle(t) {
    return this.registerComponent(t.setStyle(this.style.handle, this.style.handleHover));
  }
  unregisterComponent(t) {
    t && (t._logWarnOnOpOnFrozen && t._logWarnOnOpOnFrozen("Deleting"), this._cacheElementMapping[t.element.id] = null, delete this._cacheElementMapping[t.element.id]);
  }
}
const gr = (n) => {
  let t;
  return tt(n.svg, "mousedown touchstart", (e) => {
    var u;
    e.preventDefault();
    const r = n.getComponentById(e.target.id), i = r && r.isFrozen ? null : r, s = (u = n.svg) == null ? void 0 : u.getBoundingClientRect(), o = e.targetTouches && e.targetTouches[0];
    n.fsmService.send({
      type: "MT_DOWN",
      component: i,
      // not defined when mousedown on editor
      offsetX: e.offsetX !== void 0 ? e.offsetX : o && o.clientX - s.x,
      offsetY: e.offsetY !== void 0 ? e.offsetY : o && o.clientY - s.y
    }), t = o;
  }), tt(n.svg, "mouseup touchend mouseleave touchleave", (e) => {
    e.preventDefault(), n.fsmService.send({
      type: "MT_UP"
    }), t = null;
  }), tt(n.svg, "mousemove touchmove", (e) => {
    var s;
    const r = (s = n.svg) == null ? void 0 : s.getBoundingClientRect(), i = e.targetTouches && e.targetTouches[0];
    n.fsmService.send({
      type: "MT_MOVE",
      offsetX: e.offsetX !== void 0 ? e.offsetX : i && i.clientX - r.x,
      offsetY: e.offsetY !== void 0 ? e.offsetY : i && i.clientY - r.y,
      movementX: e.movementX !== void 0 ? e.movementX : t ? i.clientX - t.clientX : 0,
      movementY: e.movementY !== void 0 ? e.movementY : t ? i.clientY - t.clientY : 0
    }), t = i;
  }), tt(Ae.window, "keydown", (e) => {
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
}, mr = (n) => (tt(n.cgroup, "click touchstart", (t) => {
  t.preventDefault(), n.viewClickHandler && n.viewClickHandler(t, t.target.id);
}), n), Ht = (n, ...t) => {
  if (!t.length || !t[0])
    return n;
  const e = t.shift();
  return Object.entries(e).forEach(([r, i]) => {
    Object.getPrototypeOf(i) === Object.prototype ? Ht(n[r], i) : n[r] = i;
  }), Ht(n, ...t);
}, en = (n) => function(e, r = {}, i = {}) {
  return n ? mr(new Oe(e, r, i)) : gr(new Oe(e, r, i));
}, wr = en(!1), Sr = en(!0), br = {
  editor: wr,
  view: Sr
};
export {
  br as default,
  wr as editor,
  Sr as view
};
