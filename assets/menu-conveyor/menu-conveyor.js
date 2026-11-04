var Ef = { exports: {} }, Rs = {};
var up;
function mT() {
  if (up) return Rs;
  up = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, c, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      h = {};
      for (var y in c)
        y !== "key" && (h[y] = c[y]);
    } else h = c;
    return c = h.ref, {
      $$typeof: i,
      type: r,
      key: d,
      ref: c !== void 0 ? c : null,
      props: h
    };
  }
  return Rs.Fragment = l, Rs.jsx = o, Rs.jsxs = o, Rs;
}
var op;
function yT() {
  return op || (op = 1, Ef.exports = mT()), Ef.exports;
}
var Y = yT(), Af = { exports: {} }, Ns = {}, Mf = { exports: {} }, Cf = {};
var rp;
function pT() {
  return rp || (rp = 1, (function(i) {
    function l(X, at) {
      var $ = X.length;
      X.push(at);
      t: for (; 0 < $; ) {
        var ft = $ - 1 >>> 1, St = X[ft];
        if (0 < c(St, at))
          X[ft] = at, X[$] = St, $ = ft;
        else break t;
      }
    }
    function o(X) {
      return X.length === 0 ? null : X[0];
    }
    function r(X) {
      if (X.length === 0) return null;
      var at = X[0], $ = X.pop();
      if ($ !== at) {
        X[0] = $;
        t: for (var ft = 0, St = X.length, Gt = St >>> 1; ft < Gt; ) {
          var $e = 2 * (ft + 1) - 1, ea = X[$e], E = $e + 1, q = X[E];
          if (0 > c(ea, $))
            E < St && 0 > c(q, ea) ? (X[ft] = q, X[E] = $, ft = E) : (X[ft] = ea, X[$e] = $, ft = $e);
          else if (E < St && 0 > c(q, $))
            X[ft] = q, X[E] = $, ft = E;
          else break t;
        }
      }
      return at;
    }
    function c(X, at) {
      var $ = X.sortIndex - at.sortIndex;
      return $ !== 0 ? $ : X.id - at.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var d = Date, y = d.now();
      i.unstable_now = function() {
        return d.now() - y;
      };
    }
    var v = [], S = [], g = 1, p = null, T = 3, V = !1, _ = !1, j = !1, L = !1, G = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function Q(X) {
      for (var at = o(S); at !== null; ) {
        if (at.callback === null) r(S);
        else if (at.startTime <= X)
          r(S), at.sortIndex = at.expirationTime, l(v, at);
        else break;
        at = o(S);
      }
    }
    function ut(X) {
      if (j = !1, Q(X), !_)
        if (o(v) !== null)
          _ = !0, rt || (rt = !0, gt());
        else {
          var at = o(S);
          at !== null && st(ut, at.startTime - X);
        }
    }
    var rt = !1, W = -1, F = 5, ct = -1;
    function Z() {
      return L ? !0 : !(i.unstable_now() - ct < F);
    }
    function ot() {
      if (L = !1, rt) {
        var X = i.unstable_now();
        ct = X;
        var at = !0;
        try {
          t: {
            _ = !1, j && (j = !1, k(W), W = -1), V = !0;
            var $ = T;
            try {
              e: {
                for (Q(X), p = o(v); p !== null && !(p.expirationTime > X && Z()); ) {
                  var ft = p.callback;
                  if (typeof ft == "function") {
                    p.callback = null, T = p.priorityLevel;
                    var St = ft(
                      p.expirationTime <= X
                    );
                    if (X = i.unstable_now(), typeof St == "function") {
                      p.callback = St, Q(X), at = !0;
                      break e;
                    }
                    p === o(v) && r(v), Q(X);
                  } else r(v);
                  p = o(v);
                }
                if (p !== null) at = !0;
                else {
                  var Gt = o(S);
                  Gt !== null && st(
                    ut,
                    Gt.startTime - X
                  ), at = !1;
                }
              }
              break t;
            } finally {
              p = null, T = $, V = !1;
            }
            at = void 0;
          }
        } finally {
          at ? gt() : rt = !1;
        }
      }
    }
    var gt;
    if (typeof K == "function")
      gt = function() {
        K(ot);
      };
    else if (typeof MessageChannel < "u") {
      var Ft = new MessageChannel(), Bt = Ft.port2;
      Ft.port1.onmessage = ot, gt = function() {
        Bt.postMessage(null);
      };
    } else
      gt = function() {
        G(ot, 0);
      };
    function st(X, at) {
      W = G(function() {
        X(i.unstable_now());
      }, at);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, i.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : F = 0 < X ? Math.floor(1e3 / X) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, i.unstable_next = function(X) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var at = 3;
          break;
        default:
          at = T;
      }
      var $ = T;
      T = at;
      try {
        return X();
      } finally {
        T = $;
      }
    }, i.unstable_requestPaint = function() {
      L = !0;
    }, i.unstable_runWithPriority = function(X, at) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var $ = T;
      T = X;
      try {
        return at();
      } finally {
        T = $;
      }
    }, i.unstable_scheduleCallback = function(X, at, $) {
      var ft = i.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? ft + $ : ft) : $ = ft, X) {
        case 1:
          var St = -1;
          break;
        case 2:
          St = 250;
          break;
        case 5:
          St = 1073741823;
          break;
        case 4:
          St = 1e4;
          break;
        default:
          St = 5e3;
      }
      return St = $ + St, X = {
        id: g++,
        callback: at,
        priorityLevel: X,
        startTime: $,
        expirationTime: St,
        sortIndex: -1
      }, $ > ft ? (X.sortIndex = $, l(S, X), o(v) === null && X === o(S) && (j ? (k(W), W = -1) : j = !0, st(ut, $ - ft))) : (X.sortIndex = St, l(v, X), _ || V || (_ = !0, rt || (rt = !0, gt()))), X;
    }, i.unstable_shouldYield = Z, i.unstable_wrapCallback = function(X) {
      var at = T;
      return function() {
        var $ = T;
        T = at;
        try {
          return X.apply(this, arguments);
        } finally {
          T = $;
        }
      };
    };
  })(Cf)), Cf;
}
var cp;
function gT() {
  return cp || (cp = 1, Mf.exports = pT()), Mf.exports;
}
var Df = { exports: {} }, pt = {};
var fp;
function vT() {
  if (fp) return pt;
  fp = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), T = /* @__PURE__ */ Symbol.for("react.view_transition"), V = Symbol.iterator;
  function _(E) {
    return E === null || typeof E != "object" ? null : (E = V && E[V] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var j = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, L = Object.assign, G = {};
  function k(E, q, it) {
    this.props = E, this.context = q, this.refs = G, this.updater = it || j;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(E, q) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, q, "setState");
  }, k.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function K() {
  }
  K.prototype = k.prototype;
  function Q(E, q, it) {
    this.props = E, this.context = q, this.refs = G, this.updater = it || j;
  }
  var ut = Q.prototype = new K();
  ut.constructor = Q, L(ut, k.prototype), ut.isPureReactComponent = !0;
  var rt = Array.isArray;
  function W() {
  }
  var F = { H: null, A: null, T: null, S: null }, ct = Object.prototype.hasOwnProperty;
  function Z(E, q, it) {
    var P = it.ref;
    return {
      $$typeof: i,
      type: E,
      key: q,
      ref: P !== void 0 ? P : null,
      props: it
    };
  }
  function ot(E, q) {
    return Z(E.type, q, E.props);
  }
  function gt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function Ft(E) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(it) {
      return q[it];
    });
  }
  var Bt = /\/+/g;
  function st(E, q) {
    return typeof E == "object" && E !== null && E.key != null ? Ft("" + E.key) : q.toString(36);
  }
  function X(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(W, W) : (E.status = "pending", E.then(
          function(q) {
            E.status === "pending" && (E.status = "fulfilled", E.value = q);
          },
          function(q) {
            E.status === "pending" && (E.status = "rejected", E.reason = q);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function at(E, q, it, P, zt) {
    var Ct = typeof E;
    (Ct === "undefined" || Ct === "boolean") && (E = null);
    var wt = !1;
    if (E === null) wt = !0;
    else
      switch (Ct) {
        case "bigint":
        case "string":
        case "number":
          wt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case l:
              wt = !0;
              break;
            case g:
              return wt = E._init, at(
                wt(E._payload),
                q,
                it,
                P,
                zt
              );
          }
      }
    if (wt)
      return zt = zt(E), wt = P === "" ? "." + st(E, 0) : P, rt(zt) ? (it = "", wt != null && (it = wt.replace(Bt, "$&/") + "/"), at(zt, q, it, "", function(fn) {
        return fn;
      })) : zt != null && (gt(zt) && (zt = ot(
        zt,
        it + (zt.key == null || E && E.key === zt.key ? "" : ("" + zt.key).replace(
          Bt,
          "$&/"
        ) + "/") + wt
      )), q.push(zt)), 1;
    wt = 0;
    var tt = P === "" ? "." : P + ":";
    if (rt(E))
      for (var mt = 0; mt < E.length; mt++)
        P = E[mt], Ct = tt + st(P, mt), wt += at(
          P,
          q,
          it,
          Ct,
          zt
        );
    else if (mt = _(E), typeof mt == "function")
      for (E = mt.call(E), mt = 0; !(P = E.next()).done; )
        P = P.value, Ct = tt + st(P, mt++), wt += at(
          P,
          q,
          it,
          Ct,
          zt
        );
    else if (Ct === "object") {
      if (typeof E.then == "function")
        return at(
          X(E),
          q,
          it,
          P,
          zt
        );
      throw q = String(E), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return wt;
  }
  function $(E, q, it) {
    if (E == null) return E;
    var P = [], zt = 0;
    return at(E, P, "", "", function(Ct) {
      return q.call(it, Ct, zt++);
    }), P;
  }
  function ft(E) {
    if (E._status === -1) {
      var q = E._result, it = q();
      it.then(
        function(P) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = P, it.status === void 0 && (it.status = "fulfilled", it.value = P));
        },
        function(P) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = P, it.status === void 0 && (it.status = "rejected", it.reason = P));
        }
      ), E._status === -1 && (E._status = 0, E._result = it);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var St = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function Gt(E) {
    var q = F.T, it = {};
    it.types = q !== null ? q.types : null, F.T = it;
    try {
      var P = E(), zt = F.S;
      zt !== null && zt(it, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(W, St);
    } catch (Ct) {
      St(Ct);
    } finally {
      q !== null && it.types !== null && (q.types = it.types), F.T = q;
    }
  }
  function $e(E) {
    var q = F.T;
    if (q !== null) {
      var it = q.types;
      it === null ? q.types = [E] : it.indexOf(E) === -1 && it.push(E);
    } else Gt($e.bind(null, E));
  }
  var ea = {
    map: $,
    forEach: function(E, q, it) {
      $(
        E,
        function() {
          q.apply(this, arguments);
        },
        it
      );
    },
    count: function(E) {
      var q = 0;
      return $(E, function() {
        q++;
      }), q;
    },
    toArray: function(E) {
      return $(E, function(q) {
        return q;
      }) || [];
    },
    only: function(E) {
      if (!gt(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return pt.Activity = p, pt.Children = ea, pt.Component = k, pt.Fragment = o, pt.Profiler = c, pt.PureComponent = Q, pt.StrictMode = r, pt.Suspense = v, pt.ViewTransition = T, pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, pt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return F.H.useMemoCache(E);
    }
  }, pt.addTransitionType = $e, pt.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, pt.cacheSignal = function() {
    return null;
  }, pt.cloneElement = function(E, q, it) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var P = L({}, E.props), zt = E.key;
    if (q != null)
      for (Ct in q.key !== void 0 && (zt = "" + q.key), q)
        !ct.call(q, Ct) || Ct === "key" || Ct === "__self" || Ct === "__source" || Ct === "ref" && q.ref === void 0 || (P[Ct] = q[Ct]);
    var Ct = arguments.length - 2;
    if (Ct === 1) P.children = it;
    else if (1 < Ct) {
      for (var wt = Array(Ct), tt = 0; tt < Ct; tt++)
        wt[tt] = arguments[tt + 2];
      P.children = wt;
    }
    return Z(E.type, zt, P);
  }, pt.createContext = function(E) {
    return E = {
      $$typeof: d,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: h,
      _context: E
    }, E;
  }, pt.createElement = function(E, q, it) {
    var P, zt = {}, Ct = null;
    if (q != null)
      for (P in q.key !== void 0 && (Ct = "" + q.key), q)
        ct.call(q, P) && P !== "key" && P !== "__self" && P !== "__source" && (zt[P] = q[P]);
    var wt = arguments.length - 2;
    if (wt === 1) zt.children = it;
    else if (1 < wt) {
      for (var tt = Array(wt), mt = 0; mt < wt; mt++)
        tt[mt] = arguments[mt + 2];
      zt.children = tt;
    }
    if (E && E.defaultProps)
      for (P in wt = E.defaultProps, wt)
        zt[P] === void 0 && (zt[P] = wt[P]);
    return Z(E, Ct, zt);
  }, pt.createRef = function() {
    return { current: null };
  }, pt.forwardRef = function(E) {
    return { $$typeof: y, render: E };
  }, pt.isValidElement = gt, pt.lazy = function(E) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: E },
      _init: ft
    };
  }, pt.memo = function(E, q) {
    return {
      $$typeof: S,
      type: E,
      compare: q === void 0 ? null : q
    };
  }, pt.startTransition = Gt, pt.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, pt.use = function(E) {
    return F.H.use(E);
  }, pt.useActionState = function(E, q, it) {
    return F.H.useActionState(E, q, it);
  }, pt.useCallback = function(E, q) {
    return F.H.useCallback(E, q);
  }, pt.useContext = function(E) {
    return F.H.useContext(E);
  }, pt.useDebugValue = function() {
  }, pt.useDeferredValue = function(E, q) {
    return F.H.useDeferredValue(E, q);
  }, pt.useEffect = function(E, q) {
    return F.H.useEffect(E, q);
  }, pt.useEffectEvent = function(E) {
    return F.H.useEffectEvent(E);
  }, pt.useId = function() {
    return F.H.useId();
  }, pt.useImperativeHandle = function(E, q, it) {
    return F.H.useImperativeHandle(E, q, it);
  }, pt.useInsertionEffect = function(E, q) {
    return F.H.useInsertionEffect(E, q);
  }, pt.useLayoutEffect = function(E, q) {
    return F.H.useLayoutEffect(E, q);
  }, pt.useMemo = function(E, q) {
    return F.H.useMemo(E, q);
  }, pt.useOptimistic = function(E, q) {
    return F.H.useOptimistic(E, q);
  }, pt.useReducer = function(E, q, it) {
    return F.H.useReducer(E, q, it);
  }, pt.useRef = function(E) {
    return F.H.useRef(E);
  }, pt.useState = function(E) {
    return F.H.useState(E);
  }, pt.useSyncExternalStore = function(E, q, it) {
    return F.H.useSyncExternalStore(
      E,
      q,
      it
    );
  }, pt.useTransition = function() {
    return F.H.useTransition();
  }, pt.version = "19.3.1", pt;
}
var dp;
function Td() {
  return dp || (dp = 1, Df.exports = vT()), Df.exports;
}
var Of = { exports: {} }, Oe = {};
var hp;
function ST() {
  if (hp) return Oe;
  hp = 1;
  var i = Td();
  function l(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var T = 2; T < arguments.length; T++)
        p += "&args[]=" + encodeURIComponent(arguments[T]);
    }
    return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(l(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.recoverable"), d = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function y(g, p, T) {
    var V = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: V == null ? null : V === d ? d : "" + V,
      children: g,
      containerInfo: p,
      implementation: T
    };
  }
  var v = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(g, p) {
    if (g === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Oe.browser = function(g) {
    return { $$typeof: h, _reason: g };
  }, Oe.createPortal = function(g, p) {
    var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(l(299));
    return y(g, p, null, T);
  }, Oe.flushSync = function(g) {
    var p = v.T, T = r.p;
    try {
      if (v.T = null, r.p = 2, g) return g();
    } finally {
      v.T = p, r.p = T, r.d.f();
    }
  }, Oe.preconnect = function(g, p) {
    typeof g == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, r.d.C(g, p));
  }, Oe.prefetchDNS = function(g) {
    typeof g == "string" && r.d.D(g);
  }, Oe.preinit = function(g, p) {
    if (typeof g == "string" && p && typeof p.as == "string") {
      var T = p.as, V = S(T, p.crossOrigin), _ = typeof p.integrity == "string" ? p.integrity : void 0, j = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      T === "style" ? r.d.S(
        g,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: V,
          integrity: _,
          fetchPriority: j
        }
      ) : T === "script" && r.d.X(g, {
        crossOrigin: V,
        integrity: _,
        fetchPriority: j,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Oe.preinitModule = function(g, p) {
    if (typeof g == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var T = S(
            p.as,
            p.crossOrigin
          );
          r.d.M(g, {
            crossOrigin: T,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
          });
        }
      } else p == null && r.d.M(g);
  }, Oe.preload = function(g, p) {
    if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var T = p.as, V = S(T, p.crossOrigin);
      r.d.L(g, T, {
        crossOrigin: V,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, Oe.preloadModule = function(g, p) {
    if (typeof g == "string")
      if (p) {
        var T = S(p.as, p.crossOrigin);
        r.d.m(g, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: T,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      } else r.d.m(g);
  }, Oe.requestFormReset = function(g) {
    r.d.r(g);
  }, Oe.unstable_batchedUpdates = function(g, p) {
    return g(p);
  }, Oe.useFormState = function(g, p, T) {
    return v.H.useFormState(g, p, T);
  }, Oe.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, Oe.version = "19.3.1", Oe;
}
var mp;
function qg() {
  if (mp) return Of.exports;
  mp = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Of.exports = ST(), Of.exports;
}
var yp;
function bT() {
  if (yp) return Ns;
  yp = 1;
  var i = gT(), l = Td(), o = qg();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (h(t) !== t)
      throw Error(r(188));
  }
  function S(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (a = s.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return v(s), t;
          if (u === a) return v(s), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) n = s, a = u;
      else {
        for (var f = !1, m = s.child; m; ) {
          if (m === n) {
            f = !0, n = s, a = u;
            break;
          }
          if (m === a) {
            f = !0, a = s, n = u;
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = u.child; m; ) {
            if (m === n) {
              f = !0, n = u, a = s;
              break;
            }
            if (m === a) {
              f = !0, a = u, n = s;
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = g(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function p(t, e, n, a, s, u) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, a, s, u) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && p(
        t.child,
        e,
        n,
        a,
        s,
        u
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function T(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function V(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function _(t) {
    var e = [null, null], n = T(t);
    return n === null || j(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function j(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && j(
        t,
        e,
        n.child,
        a
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function L(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var G = null, k = null;
  function K(t, e, n) {
    return t === n ? !0 : t === e ? (G = t, !0) : !1;
  }
  function Q(t, e, n) {
    return t === n ? (k = t, !1) : t === e ? (k !== null && (G = t), !0) : !1;
  }
  function ut(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function rt(t, e, n) {
    for (var a = 0, s = t; s; s = n(s)) a++;
    s = 0;
    for (var u = e; u; u = n(u)) s++;
    for (; 0 < a - s; ) t = n(t), a--;
    for (; 0 < s - a; ) e = n(e), s--;
    for (; a--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var W = Object.assign, F = /* @__PURE__ */ Symbol.for("react.element"), ct = /* @__PURE__ */ Symbol.for("react.transitional.element"), Z = /* @__PURE__ */ Symbol.for("react.portal"), ot = /* @__PURE__ */ Symbol.for("react.fragment"), gt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ft = /* @__PURE__ */ Symbol.for("react.profiler"), Bt = /* @__PURE__ */ Symbol.for("react.consumer"), st = /* @__PURE__ */ Symbol.for("react.context"), X = /* @__PURE__ */ Symbol.for("react.forward_ref"), at = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.suspense_list"), ft = /* @__PURE__ */ Symbol.for("react.memo"), St = /* @__PURE__ */ Symbol.for("react.lazy"), Gt = /* @__PURE__ */ Symbol.for("react.activity"), $e = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), ea = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), E = /* @__PURE__ */ Symbol.for("react.view_transition"), q = /* @__PURE__ */ Symbol.for("react.recoverable"), it = Symbol.iterator;
  function P(t) {
    return t === null || typeof t != "object" ? null : (t = it && t[it] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var zt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ct(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === zt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ot:
        return "Fragment";
      case Ft:
        return "Profiler";
      case gt:
        return "StrictMode";
      case at:
        return "Suspense";
      case $:
        return "SuspenseList";
      case Gt:
        return "Activity";
      case E:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Z:
          return "Portal";
        case st:
          return t.displayName || "Context";
        case Bt:
          return (t._context.displayName || "Context") + ".Consumer";
        case X:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ft:
          return e = t.displayName || null, e !== null ? e : Ct(t.type) || "Memo";
        case St:
          e = t._payload, t = t._init;
          try {
            return Ct(t(e));
          } catch {
          }
      }
    return null;
  }
  var wt = Array.isArray, tt = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, mt = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fn = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ia = [], Un = -1;
  function dn(t) {
    return { current: t };
  }
  function re(t) {
    0 > Un || (t.current = Ia[Un], Ia[Un] = null, Un--);
  }
  function Xt(t, e) {
    Un++, Ia[Un] = t.current, t.current = e;
  }
  var Ve = dn(null), Qe = dn(null), Ne = dn(null), We = dn(null);
  function va(t, e) {
    switch (Xt(Ne, e), Xt(Qe, t), Xt(Ve, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? py(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = py(e), t = gy(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    re(Ve), Xt(Ve, t);
  }
  function Bn() {
    re(Ve), re(Qe), re(Ne);
  }
  function It(t) {
    var e = t.memoizedState;
    e !== null && (Tl._currentValue = e.memoizedState, Xt(We, t)), e = Ve.current;
    var n = gy(e, t.type);
    e !== n && (Xt(Qe, t), Xt(Ve, n));
  }
  function vt(t) {
    Qe.current === t && (re(Ve), re(Qe)), We.current === t && (re(We), Tl._currentValue = fn);
  }
  var Vl, wl;
  function Ie(t) {
    if (Vl === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Vl = e && e[1] || "", wl = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Vl + t + wl;
  }
  var jn = !1;
  function Sa(t, e) {
    if (!t || jn) return "";
    jn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var U = function() {
                throw Error();
              };
              if (Object.defineProperty(U.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(U, []);
                } catch (J) {
                  var A = J;
                }
                Reflect.construct(t, [], U);
              } else {
                try {
                  U.call();
                } catch (J) {
                  A = J;
                }
                U = !1;
                try {
                  var z = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), U = !0, new t();
                } finally {
                  U && (z !== void 0 ? Object.defineProperty(t.prototype, "props", z) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (J) {
                A = J;
              }
              (U = t()) && typeof U.catch == "function" && U.catch(function() {
              });
            }
          } catch (J) {
            if (J && A && typeof J.stack == "string")
              return [J.stack, A.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), f = u[0], m = u[1];
      if (f && m) {
        var b = f.split(`
`), C = m.split(`
`);
        for (s = a = 0; a < b.length && !b[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; s < C.length && !C[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (a === b.length || s === C.length)
          for (a = b.length - 1, s = C.length - 1; 1 <= a && 0 <= s && b[a] !== C[s]; )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (b[a] !== C[s]) {
            if (a !== 1 || s !== 1)
              do
                if (a--, s--, 0 > s || b[a] !== C[s]) {
                  var N = `
` + b[a].replace(" at new ", " at ");
                  return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), N;
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      jn = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Ie(n) : "";
  }
  function Ul(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ie(t.type);
      case 16:
        return Ie("Lazy");
      case 13:
        return t.child !== e && e !== null ? Ie("Suspense Fallback") : Ie("Suspense");
      case 19:
        return Ie("SuspenseList");
      case 0:
      case 15:
        return Sa(t.type, !1);
      case 11:
        return Sa(t.type.render, !1);
      case 1:
        return Sa(t.type, !0);
      case 31:
        return Ie("Activity");
      case 30:
        return Ie("ViewTransition");
      default:
        return "";
    }
  }
  function Vi(t) {
    try {
      var e = "", n = null;
      do
        e += Ul(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var pe = Object.prototype.hasOwnProperty, ue = i.unstable_scheduleCallback, tn = i.unstable_cancelCallback, Bl = i.unstable_shouldYield, jl = i.unstable_requestPaint, we = i.unstable_now, Js = i.unstable_getCurrentPriorityLevel, wi = i.unstable_ImmediatePriority, Fs = i.unstable_UserBlockingPriority, ti = i.unstable_NormalPriority, Ll = i.unstable_LowPriority, Ps = i.unstable_IdlePriority, Po = i.log, $s = i.unstable_setDisableYieldValue, ei = null, Ue = null;
  function Ln(t) {
    if (typeof Po == "function" && $s(t), Ue && typeof Ue.setStrictMode == "function")
      try {
        Ue.setStrictMode(ei, t);
      } catch {
      }
  }
  var Be = Math.clz32 ? Math.clz32 : ni, $o = Math.log, je = Math.LN2;
  function ni(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - ($o(t) / je | 0) | 0;
  }
  var Ui = 256, ba = 262144, _t = 4194304;
  function Mn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function ai(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0, u = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var m = a & 134217727;
    return m !== 0 ? (a = m & ~u, a !== 0 ? s = Mn(a) : (f &= m, f !== 0 ? s = Mn(f) : n || (n = m & ~t, n !== 0 && (s = Mn(n))))) : (m = a & ~u, m !== 0 ? s = Mn(m) : f !== 0 ? s = Mn(f) : n || (n = a & ~t, n !== 0 && (s = Mn(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : s;
  }
  function Ta(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Hl(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - Be(n), s = 1 << a;
        e |= t[a], n &= ~s;
      }
    return e;
  }
  function Ws(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function D() {
    var t = _t;
    return _t <<= 1, (_t & 62914560) === 0 && (_t = 4194304), t;
  }
  function R(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function H(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function dt(t, e, n, a, s, u) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var m = t.entanglements, b = t.expirationTimes, C = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var N = 31 - Be(n), U = 1 << N;
      m[N] = 0, b[N] = -1;
      var A = C[N];
      if (A !== null)
        for (C[N] = null, N = 0; N < A.length; N++) {
          var z = A[N];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~U;
    }
    a !== 0 && bt(t, a, 0), u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e));
  }
  function bt(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Be(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function Et(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - Be(n), s = 1 << a;
      s & e | t[a] & e && (t[a] |= e), n &= ~s;
    }
  }
  function yt(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Zt(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Zt(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ae(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ze() {
    var t = mt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : tp(t.type));
  }
  function ee(t, e) {
    var n = mt.p;
    try {
      return mt.p = t, e();
    } finally {
      mt.p = n;
    }
  }
  var Mt = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + Mt, ce = "__reactProps$" + Mt, hn = "__reactContainer$" + Mt, Fd = "__reactEvents$" + Mt, R1 = "__reactListeners$" + Mt, N1 = "__reactHandles$" + Mt, Pd = "__reactResources$" + Mt, Yl = "__reactMarker$" + Mt, Is = "__reactLoad$" + Mt;
  function tu(t) {
    delete t[Wt], delete t[ce], delete t[R1], delete t[N1];
  }
  function ii(t) {
    var e;
    if (e = t[Wt]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[hn] || n[Wt]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = wy(t); t !== null; ) {
            if (n = t[Wt]) return n;
            t = wy(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Bi(t) {
    if (t = t[Wt] || t[hn]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ql(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ji(t) {
    var e = t[Pd];
    return e || (e = t[Pd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Se(t) {
    t[Yl] = !0;
  }
  function $d(t) {
    t[Is] = void 0;
  }
  var Wd = /* @__PURE__ */ new Set(), Id = {};
  function li(t, e) {
    Li(t, e), Li(t + "Capture", e);
  }
  function Li(t, e) {
    for (Id[t] = e, t = 0; t < e.length; t++)
      Wd.add(e[t]);
  }
  var _1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), th = {}, eh = {};
  function V1(t) {
    return pe.call(eh, t) ? !0 : pe.call(th, t) ? !1 : _1.test(t) ? eh[t] = !0 : (th[t] = !0, !1);
  }
  var Ut = !1;
  function nh() {
    var t = Ut;
    return Ut = !1, t;
  }
  function eu(t, e, n) {
    if (V1(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function nu(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function na(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, a);
    }
  }
  function en(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ah(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function w1(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var s = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(f) {
          n = "" + f, u.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Wo(t) {
    if (!t._valueTracker) {
      var e = ah(t) ? "checked" : "value";
      t._valueTracker = w1(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function ih(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = ah(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var U1 = /[\n"\\]/g;
  function mn(t) {
    return t.replace(
      U1,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Io(t, e, n, a, s, u, f, m) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + en(e)) : t.value !== "" + en(e) && (t.value = "" + en(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? f === "number" && t.value == e ? tr(t, en(t.value)) : tr(t, en(e)) : n != null ? tr(t, en(n)) : a != null && t.removeAttribute("value"), s == null && u != null && (t.defaultChecked = !!u), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + en(m) : t.removeAttribute("name");
  }
  function lh(t, e, n, a, s, u, f, m) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Wo(t);
        return;
      }
      n = n != null ? "" + en(n) : "", e = e != null ? "" + en(e) : n, m || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = m ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), Wo(t);
  }
  function tr(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Hi(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var s = 0; s < n.length; s++)
        e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + en(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          t[s].selected = !0, a && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function sh(t, e, n) {
    if (e != null && (e = "" + en(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + en(n) : "";
  }
  function uh(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (wt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = en(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Wo(t);
  }
  function Yi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var B1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function oh(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || B1.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function rh(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", Ut = !0);
      for (var s in e)
        a = e[s], e.hasOwnProperty(s) && n[s] !== a && (oh(t, s, a), Ut = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && oh(t, u, e[u]);
  }
  function er(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var j1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), L1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function au(t) {
    return L1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Hn() {
  }
  var nr = null;
  function ar(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var qi = null, Gi = null;
  function ch(t) {
    var e = Bi(t);
    if (e && (t = e.stateNode)) {
      var n = t[ce] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Io(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + mn(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[ce] || null;
                if (!s) throw Error(r(90));
                Io(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && ih(a);
          }
          break t;
        case "textarea":
          sh(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Hi(t, !!n.multiple, e, !1);
      }
    }
  }
  var ir = !1;
  function fh(t, e, n) {
    if (ir) return t(e, n);
    ir = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (ir = !1, (qi !== null || Gi !== null) && (ao(), qi && (e = qi, t = Gi, Gi = qi = null, ch(e), t)))
        for (e = 0; e < t.length; e++) ch(t[e]);
    }
  }
  function Gl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[ce] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, e, typeof n)
      );
    return n;
  }
  var aa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lr = !1;
  if (aa)
    try {
      var Xl = {};
      Object.defineProperty(Xl, "passive", {
        get: function() {
          lr = !0;
        }
      }), window.addEventListener("test", Xl, Xl), window.removeEventListener("test", Xl, Xl);
    } catch {
      lr = !1;
    }
  var xa = null, sr = null, iu = null;
  function dh() {
    if (iu) return iu;
    var t, e = sr, n = e.length, a, s = "value" in xa ? xa.value : xa.textContent, u = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++) ;
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[u - a]; a++) ;
    return iu = s.slice(t, 1 < a ? 1 - a : void 0);
  }
  function lu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function su() {
    return !0;
  }
  function hh() {
    return !1;
  }
  function Le(t) {
    function e(n, a, s, u, f) {
      this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var m in t)
        t.hasOwnProperty(m) && (n = t[m], this[m] = n ? n(u) : u[m]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? su : hh, this.isPropagationStopped = hh, this;
    }
    return W(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = su);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = su);
      },
      persist: function() {
      },
      isPersistent: su
    }), e;
  }
  var Ea = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, uu = Le(Ea), Ql = W({}, Ea, { view: 0, detail: 0 }), H1 = Le(Ql), ur, or, Zl, ou = W({}, Ql, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: cr,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Zl && (Zl && t.type === "mousemove" ? (ur = t.screenX - Zl.screenX, or = t.screenY - Zl.screenY) : or = ur = 0, Zl = t), ur);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : or;
    }
  }), mh = Le(ou), Y1 = W({}, ou, { dataTransfer: 0 }), q1 = Le(Y1), G1 = W({}, Ql, { relatedTarget: 0 }), rr = Le(G1), X1 = W({}, Ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Q1 = Le(X1), Z1 = W({}, Ea, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), K1 = Le(Z1), k1 = W({}, Ea, { data: 0 }), yh = Le(k1), J1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, F1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, P1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function $1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = P1[t]) ? !!e[t] : !1;
  }
  function cr() {
    return $1;
  }
  var W1 = W({}, Ql, {
    key: function(t) {
      if (t.key) {
        var e = J1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = lu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? F1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cr,
    charCode: function(t) {
      return t.type === "keypress" ? lu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? lu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), I1 = Le(W1), tS = W({}, ou, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), ph = Le(tS), eS = W({}, Ea, { submitter: 0 }), nS = Le(eS), aS = W({}, Ql, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cr
  }), iS = Le(aS), lS = W({}, Ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sS = Le(lS), uS = W({}, ou, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), oS = Le(uS), rS = W({}, Ea, {
    newState: 0,
    oldState: 0,
    source: 0
  }), cS = Le(rS), fS = [9, 13, 27, 32], fr = aa && "CompositionEvent" in window, Kl = null;
  aa && "documentMode" in document && (Kl = document.documentMode);
  var dS = aa && "TextEvent" in window && !Kl, gh = aa && (!fr || Kl && 8 < Kl && 11 >= Kl), vh = " ", Sh = !1;
  function bh(t, e) {
    switch (t) {
      case "keyup":
        return fS.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Th(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Xi = !1;
  function hS(t, e) {
    switch (t) {
      case "compositionend":
        return Th(e);
      case "keypress":
        return e.which !== 32 ? null : (Sh = !0, vh);
      case "textInput":
        return t = e.data, t === vh && Sh ? null : t;
      default:
        return null;
    }
  }
  function mS(t, e) {
    if (Xi)
      return t === "compositionend" || !fr && bh(t, e) ? (t = dh(), iu = sr = xa = null, Xi = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return gh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var yS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function xh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!yS[t.type] : e === "textarea";
  }
  function Eh(t, e, n, a) {
    qi ? Gi ? Gi.push(a) : Gi = [a] : qi = a, e = ro(e, "onChange"), 0 < e.length && (n = new uu(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var kl = null, Jl = null;
  function pS(t) {
    cy(t, 0);
  }
  function ru(t) {
    var e = ql(t);
    if (ih(e)) return t;
  }
  function Ah(t, e) {
    if (t === "change") return e;
  }
  var Mh = !1;
  if (aa) {
    var dr;
    if (aa) {
      var hr = "oninput" in document;
      if (!hr) {
        var Ch = document.createElement("div");
        Ch.setAttribute("oninput", "return;"), hr = typeof Ch.oninput == "function";
      }
      dr = hr;
    } else dr = !1;
    Mh = dr && (!document.documentMode || 9 < document.documentMode);
  }
  function Dh() {
    kl && (kl.detachEvent("onpropertychange", Oh), Jl = kl = null);
  }
  function Oh(t) {
    if (t.propertyName === "value" && ru(Jl)) {
      var e = [];
      Eh(
        e,
        Jl,
        t,
        ar(t)
      ), fh(pS, e);
    }
  }
  function gS(t, e, n) {
    t === "focusin" ? (Dh(), kl = e, Jl = n, kl.attachEvent("onpropertychange", Oh)) : t === "focusout" && Dh();
  }
  function vS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ru(Jl);
  }
  function SS(t, e) {
    if (t === "click") return ru(e);
  }
  function bS(t, e) {
    if (t === "input" || t === "change")
      return ru(e);
  }
  function TS(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var nn = typeof Object.is == "function" ? Object.is : TS;
  function Fl(t, e) {
    if (nn(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!pe.call(e, s) || !nn(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  function mr(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function zh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Rh(t, e) {
    var n = zh(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e)
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = zh(n);
    }
  }
  function Nh(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Nh(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function _h(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = mr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = mr(t.document);
    }
    return e;
  }
  function yr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var xS = aa && "documentMode" in document && 11 >= document.documentMode, Qi = null, pr = null, Pl = null, gr = !1;
  function Vh(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    gr || Qi == null || Qi !== mr(a) || (a = Qi, "selectionStart" in a && yr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Pl && Fl(Pl, a) || (Pl = a, a = ro(pr, "onSelect"), 0 < a.length && (e = new uu(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = Qi)));
  }
  function si(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Zi = {
    animationend: si("Animation", "AnimationEnd"),
    animationiteration: si("Animation", "AnimationIteration"),
    animationstart: si("Animation", "AnimationStart"),
    transitionrun: si("Transition", "TransitionRun"),
    transitionstart: si("Transition", "TransitionStart"),
    transitioncancel: si("Transition", "TransitionCancel"),
    transitionend: si("Transition", "TransitionEnd")
  }, vr = {}, wh = {};
  aa && (wh = document.createElement("div").style, "AnimationEvent" in window || (delete Zi.animationend.animation, delete Zi.animationiteration.animation, delete Zi.animationstart.animation), "TransitionEvent" in window || delete Zi.transitionend.transition);
  function ui(t) {
    if (vr[t]) return vr[t];
    if (!Zi[t]) return t;
    var e = Zi[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in wh)
        return vr[t] = e[n];
    return t;
  }
  var Uh = ui("animationend"), Bh = ui("animationiteration"), jh = ui("animationstart"), ES = ui("transitionrun"), AS = ui("transitionstart"), MS = ui("transitioncancel"), Lh = ui("transitionend"), Hh = /* @__PURE__ */ new Map(), Sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Sr.push("scrollEnd");
  function Cn(t, e) {
    Hh.set(t, e), li(e, [t]);
  }
  var CS = 0;
  function ia(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = Rn.identifierPrefix;
    var n = CS++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Yh(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = fl;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = t[n[a]];
        if (s != null) {
          if (s === "none") return "none";
          e = e == null ? s : e + (" " + s);
        }
      }
    return e ?? t.default;
  }
  function la(t, e) {
    return t = Yh(t), e = Yh(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var cu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, yn = [], Ki = 0, br = 0;
  function fu() {
    for (var t = Ki, e = br = Ki = 0; e < t; ) {
      var n = yn[e];
      yn[e++] = null;
      var a = yn[e];
      yn[e++] = null;
      var s = yn[e];
      yn[e++] = null;
      var u = yn[e];
      if (yn[e++] = null, a !== null && s !== null) {
        var f = a.pending;
        f === null ? s.next = s : (s.next = f.next, f.next = s), a.pending = s;
      }
      u !== 0 && qh(n, s, u);
    }
  }
  function du(t, e, n, a) {
    yn[Ki++] = t, yn[Ki++] = e, yn[Ki++] = n, yn[Ki++] = a, br |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Tr(t, e, n, a) {
    return du(t, e, n, a), hu(t);
  }
  function oi(t, e) {
    return du(t, null, null, e), hu(t);
  }
  function qh(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, u = t.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (s = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, s && e !== null && (s = 31 - Be(n), t = u.hiddenUpdates, a = t[s], a === null ? t[s] = [e] : a.push(e), e.lane = n | 536870912), u) : null;
  }
  function hu(t) {
    if (50 < vs)
      throw vs = 0, no = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ki = {};
  function DS(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ke(t, e, n, a) {
    return new DS(t, e, n, a);
  }
  function xr(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function sa(t, e) {
    var n = t.alternate;
    return n === null ? (n = Ke(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Gh(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function mu(t, e, n, a, s, u) {
    var f = 0;
    if (a = t, typeof a == "function") xr(a) && (f = 1);
    else if (typeof a == "string")
      f = eT(
        t,
        n,
        Ve.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case Gt:
          return t = Ke(31, n, e, s), t.elementType = Gt, t.lanes = u, t;
        case ot:
          return ri(n.children, s, u, e);
        case gt:
          f = 8, s |= 24;
          break;
        case Ft:
          return t = Ke(12, n, e, s | 2), t.elementType = Ft, t.lanes = u, t;
        case at:
          return t = Ke(13, n, e, s), t.elementType = at, t.lanes = u, t;
        case $:
          return t = Ke(19, n, e, s), t.elementType = $, t.lanes = u, t;
        case $e:
        case E:
          return t = s | 32, t = Ke(30, n, e, t), t.elementType = E, t.lanes = u, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case st:
                f = 10;
                break t;
              case Bt:
                f = 9;
                break t;
              case X:
                f = 11;
                break t;
              case ft:
                f = 14;
                break t;
              case St:
                f = 16, a = null;
                break t;
            }
          f = 29, n = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Ke(f, n, e, s), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function ri(t, e, n, a) {
    return t = Ke(7, t, a, e), t.lanes = n, t;
  }
  function Er(t, e, n) {
    return t = Ke(6, t, null, e), t.lanes = n, t;
  }
  function Xh(t) {
    var e = Ke(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Ar(t, e, n) {
    return e = Ke(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Qh = /* @__PURE__ */ new WeakMap();
  function pn(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Qh.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Vi(e)
      }, Qh.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Vi(e)
    };
  }
  var Ji = [], Fi = 0, yu = null, $l = 0, gn = [], vn = 0, Aa = null, Yn = 1, qn = "";
  function ua(t, e) {
    Ji[Fi++] = $l, Ji[Fi++] = yu, yu = t, $l = e;
  }
  function Zh(t, e, n) {
    gn[vn++] = Yn, gn[vn++] = qn, gn[vn++] = Aa, Aa = t;
    var a = Yn;
    t = qn;
    var s = 32 - Be(a) - 1;
    a &= ~(1 << s), n += 1;
    var u = 32 - Be(e) + s;
    if (30 < u) {
      var f = s - s % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, s -= f, Yn = 1 << 32 - Be(e) + s | n << s | a, qn = u + t;
    } else
      Yn = 1 << u | n << s | a, qn = t;
  }
  function pu(t) {
    t.return !== null && (ua(t, 1), Zh(t, 1, 0));
  }
  function Mr(t) {
    for (; t === yu; )
      yu = Ji[--Fi], Ji[Fi] = null, $l = Ji[--Fi], Ji[Fi] = null;
    for (; t === Aa; )
      Aa = gn[--vn], gn[vn] = null, qn = gn[--vn], gn[vn] = null, Yn = gn[--vn], gn[vn] = null;
  }
  function Kh(t, e) {
    gn[vn++] = Yn, gn[vn++] = qn, gn[vn++] = Aa, Yn = e.id, qn = e.overflow, Aa = t;
  }
  var be = null, Pt = null, At = !1, Ma = null, Sn = !1, Cr = Error(r(519));
  function Ca(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Wl(pn(e, t)), Cr;
  }
  function kh(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[Wt] = t, e[ce] = a, n) {
      case "dialog":
        Ot("cancel", e), Ot("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ot("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < bs.length; n++)
          Ot(bs[n], e);
        break;
      case "source":
        Ot("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Ot("error", e), Ot("load", e);
        break;
      case "details":
        Ot("toggle", e);
        break;
      case "input":
        Ot("invalid", e), lh(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        Ot("invalid", e);
        break;
      case "textarea":
        Ot("invalid", e), uh(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || my(e.textContent, n) ? (a.popover != null && (Ot("beforetoggle", e), Ot("toggle", e)), a.onScroll != null && Ot("scroll", e), a.onScrollEnd != null && Ot("scrollend", e), a.onClick != null && (e.onclick = Hn), e = !0) : e = !1, e || Ca(t, !0);
  }
  function gu(t) {
    for (be = t.return; be; )
      switch (be.tag) {
        case 5:
        case 31:
        case 13:
          Sn = !1;
          return;
        case 27:
        case 3:
          Sn = !0;
          return;
        default:
          be = be.return;
      }
  }
  function Pi(t) {
    if (t !== be) return !1;
    if (!At) return gu(t), At = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || nf(t.type, t.memoizedProps)), n = !n), n && Pt && Ca(t), gu(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Pt = Vy(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Pt = Vy(t);
    } else
      e === 27 ? (e = Pt, Ga(t.type) ? (t = df, df = null, Pt = t) : Pt = e) : Pt = be ? Tn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ci() {
    Pt = be = null, At = !1;
  }
  function Dr() {
    var t = Ma;
    return t !== null && (Fe === null ? Fe = t : Fe.push.apply(
      Fe,
      t
    ), Ma = null), t;
  }
  function Wl(t) {
    Ma === null ? Ma = [t] : Ma.push(t);
  }
  var Or = dn(null), fi = null, oa = null;
  function Da(t, e, n) {
    Xt(Or, e._currentValue), e._currentValue = n;
  }
  function ra(t) {
    t._currentValue = Or.current, re(Or);
  }
  function vu(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function zr(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var f = s.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var m = u;
          u = s;
          for (var b = 0; b < e.length; b++)
            if (m.context === e[b]) {
              u.lanes |= n, m = u.alternate, m !== null && (m.lanes |= n), vu(
                u.return,
                n,
                t
              ), a || (f = null);
              break t;
            }
          u = m.next;
        }
      } else if (s.tag === 18) {
        if (f = s.return, f === null) throw Error(r(341));
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), vu(f, n, t), f = null;
      } else
        s.tag === 13 && s.memoizedState !== null && s.memoizedState.dehydrated === null ? (s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), vu(
          s.return,
          n,
          t
        ), f = s.child, f = f !== null ? f.sibling : null) : f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (s = f.sibling, s !== null) {
            s.return = f.return, f = s;
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function di(t, e, n, a) {
    t = null;
    for (var s = e, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var m = s.type;
          nn(s.pendingProps.value, f.value) || (t !== null ? t.push(m) : t = [m]);
        }
      } else if (s === We.current) {
        if (f = s.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(Tl) : t = [Tl]);
      }
      s = s.return;
    }
    return t !== null && zr(
      e,
      t,
      n,
      a
    ), e.flags |= 262144, t !== null;
  }
  function Su(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!nn(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function hi(t) {
    fi = t, oa = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Ee(t) {
    return Jh(fi, t);
  }
  function bu(t, e) {
    return fi === null && hi(t), Jh(t, e);
  }
  function Jh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, oa === null) {
      if (t === null) throw Error(r(308));
      oa = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else oa = oa.next = e;
    return n;
  }
  var OS = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, zS = i.unstable_scheduleCallback, RS = i.unstable_NormalPriority, fe = {
    $$typeof: st,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Rr() {
    return {
      controller: new OS(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Il(t) {
    t.refCount--, t.refCount === 0 && zS(RS, function() {
      t.controller.abort();
    });
  }
  function Fh(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var ts = null;
  function NS(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var es = null, Nr = 0, mi = 0, $i = null;
  function _S(t, e) {
    if (es === null) {
      var n = es = [];
      Nr = 0, mi = kc(), $i = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Nr++, e.then(Ph, Ph), e;
  }
  function Ph() {
    if (--Nr === 0 && (ts = null, es !== null)) {
      $i !== null && ($i.status = "fulfilled");
      var t = es;
      es = null, mi = 0, $i = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function VS(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var s = 0; s < n.length; s++) (0, n[s])(e);
      },
      function(s) {
        for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), a;
  }
  var $h = tt.S;
  tt.S = function(t, e) {
    if (X0 = we(), typeof e == "object" && e !== null && typeof e.then == "function" && _S(t, e), ts !== null)
      for (var n = yl; n !== null; )
        Fh(n, ts), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = yl; a !== null; )
        Fh(a, n), a = a.next;
      if (mi !== 0) {
        a = ts, a === null && (a = ts = []);
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    $h !== null && $h(t, e);
  };
  var yi = dn(null);
  function _r() {
    var t = yi.current;
    return t !== null ? t : Kt.pooledCache;
  }
  function Tu(t, e) {
    e === null ? Xt(yi, yi.current) : Xt(yi, e.pool);
  }
  function Wh() {
    var t = _r();
    return t === null ? null : { parent: fe._currentValue, pool: t };
  }
  var Wi = Error(r(460)), Vr = Error(r(474)), xu = Error(r(542)), Eu = { then: function() {
  } };
  function Ih(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function tm(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Hn, Hn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, nm(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Hn, Hn);
        else {
          if (t = Kt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "fulfilled", s.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "rejected", s.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, nm(t), t;
        }
        throw gi = e, Wi;
    }
  }
  function pi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (gi = n, Wi) : n;
    }
  }
  var gi = null;
  function em() {
    if (gi === null) throw Error(r(459));
    var t = gi;
    return gi = null, t;
  }
  function nm(t) {
    if (t === Wi || t === xu)
      throw Error(r(483));
  }
  var Ii = null, ns = 0;
  function Au(t) {
    var e = ns;
    return ns += 1, Ii === null && (Ii = []), tm(Ii, t, e);
  }
  function Oa(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Mu(t, e) {
    throw e.$$typeof === F ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function am(t) {
    function e(M, x) {
      if (t) {
        var O = M.deletions;
        O === null ? (M.deletions = [x], M.flags |= 16) : O.push(x);
      }
    }
    function n(M, x) {
      if (!t) return null;
      for (; x !== null; )
        e(M, x), x = x.sibling;
      return null;
    }
    function a(M) {
      for (var x = /* @__PURE__ */ new Map(); M !== null; )
        M.key === null ? x.set(M.index, M) : x.set(M.key, M), M = M.sibling;
      return x;
    }
    function s(M, x) {
      return M = sa(M, x), M.index = 0, M.sibling = null, M;
    }
    function u(M, x, O) {
      return M.index = O, t ? (O = M.alternate, O !== null ? (O = O.index, O < x ? (M.flags |= 2, x) : O) : (M.flags |= 134217730, x)) : (M.flags |= 1048576, x);
    }
    function f(M) {
      return t && M.alternate === null && (M.flags |= 134217730), M;
    }
    function m(M, x, O, w) {
      return x === null || x.tag !== 6 ? (x = Er(O, M.mode, w), x.return = M, x) : (x = s(x, O), x.return = M, x);
    }
    function b(M, x, O, w) {
      var I = O.type;
      return I === ot ? (M = N(
        M,
        x,
        O.props.children,
        w,
        O.key
      ), Oa(M, O), M) : x !== null && (x.elementType === I || typeof I == "object" && I !== null && I.$$typeof === St && pi(I) === x.type) ? (x = s(x, O.props), Oa(x, O), x.return = M, x) : (x = mu(
        O.type,
        O.key,
        O.props,
        null,
        M.mode,
        w
      ), Oa(x, O), x.return = M, x);
    }
    function C(M, x, O, w) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== O.containerInfo || x.stateNode.implementation !== O.implementation ? (x = Ar(O, M.mode, w), x.return = M, x) : (x = s(x, O.children || []), x.return = M, x);
    }
    function N(M, x, O, w, I) {
      return x === null || x.tag !== 7 ? (x = ri(
        O,
        M.mode,
        w,
        I
      ), x.return = M, x) : (x = s(x, O), x.return = M, x);
    }
    function U(M, x, O) {
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return x = Er(
          "" + x,
          M.mode,
          O
        ), x.return = M, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ct:
            return O = mu(
              x.type,
              x.key,
              x.props,
              null,
              M.mode,
              O
            ), Oa(O, x), O.return = M, O;
          case Z:
            return x = Ar(
              x,
              M.mode,
              O
            ), x.return = M, x;
          case St:
            return x = pi(x), U(M, x, O);
        }
        if (wt(x) || P(x))
          return x = ri(
            x,
            M.mode,
            O,
            null
          ), x.return = M, x;
        if (typeof x.then == "function")
          return U(M, Au(x), O);
        if (x.$$typeof === st)
          return U(
            M,
            bu(M, x),
            O
          );
        Mu(M, x);
      }
      return null;
    }
    function A(M, x, O, w) {
      var I = x !== null ? x.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return I !== null ? null : m(M, x, "" + O, w);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case ct:
            return O.key === I ? b(M, x, O, w) : null;
          case Z:
            return O.key === I ? C(M, x, O, w) : null;
          case St:
            return O = pi(O), A(M, x, O, w);
        }
        if (wt(O) || P(O))
          return I !== null ? null : N(M, x, O, w, null);
        if (typeof O.then == "function")
          return A(
            M,
            x,
            Au(O),
            w
          );
        if (O.$$typeof === st)
          return A(
            M,
            x,
            bu(M, O),
            w
          );
        Mu(M, O);
      }
      return null;
    }
    function z(M, x, O, w, I) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return M = M.get(O) || null, m(x, M, "" + w, I);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case ct:
            return M = M.get(
              w.key === null ? O : w.key
            ) || null, b(x, M, w, I);
          case Z:
            return M = M.get(
              w.key === null ? O : w.key
            ) || null, C(x, M, w, I);
          case St:
            return w = pi(w), z(
              M,
              x,
              O,
              w,
              I
            );
        }
        if (wt(w) || P(w))
          return M = M.get(O) || null, N(x, M, w, I, null);
        if (typeof w.then == "function")
          return z(
            M,
            x,
            O,
            Au(w),
            I
          );
        if (w.$$typeof === st)
          return z(
            M,
            x,
            O,
            bu(x, w),
            I
          );
        Mu(x, w);
      }
      return null;
    }
    function J(M, x, O, w) {
      for (var I = null, Nt = null, lt = x, ht = x = 0, me = null; lt !== null && ht < O.length; ht++) {
        lt.index > ht ? (me = lt, lt = null) : me = lt.sibling;
        var Vt = A(
          M,
          lt,
          O[ht],
          w
        );
        if (Vt === null) {
          lt === null && (lt = me);
          break;
        }
        t && lt && Vt.alternate === null && e(M, lt), x = u(Vt, x, ht), Nt === null ? I = Vt : Nt.sibling = Vt, Nt = Vt, lt = me;
      }
      if (ht === O.length)
        return n(M, lt), At && ua(M, ht), I;
      if (lt === null) {
        for (; ht < O.length; ht++)
          lt = U(M, O[ht], w), lt !== null && (x = u(
            lt,
            x,
            ht
          ), Nt === null ? I = lt : Nt.sibling = lt, Nt = lt);
        return At && ua(M, ht), I;
      }
      for (lt = a(lt); ht < O.length; ht++)
        me = z(
          lt,
          M,
          ht,
          O[ht],
          w
        ), me !== null && (t && (Vt = me.alternate, Vt !== null && lt.delete(Vt.key === null ? ht : Vt.key)), x = u(
          me,
          x,
          ht
        ), Nt === null ? I = me : Nt.sibling = me, Nt = me);
      return t && lt.forEach(function(ka) {
        return e(M, ka);
      }), At && ua(M, ht), I;
    }
    function et(M, x, O, w) {
      if (O == null) throw Error(r(151));
      for (var I = null, Nt = null, lt = x, ht = x = 0, me = null, Vt = O.next(); lt !== null && !Vt.done; ht++, Vt = O.next()) {
        lt.index > ht ? (me = lt, lt = null) : me = lt.sibling;
        var ka = A(M, lt, Vt.value, w);
        if (ka === null) {
          lt === null && (lt = me);
          break;
        }
        t && lt && ka.alternate === null && e(M, lt), x = u(ka, x, ht), Nt === null ? I = ka : Nt.sibling = ka, Nt = ka, lt = me;
      }
      if (Vt.done)
        return n(M, lt), At && ua(M, ht), I;
      if (lt === null) {
        for (; !Vt.done; ht++, Vt = O.next())
          Vt = U(M, Vt.value, w), Vt !== null && (x = u(Vt, x, ht), Nt === null ? I = Vt : Nt.sibling = Vt, Nt = Vt);
        return At && ua(M, ht), I;
      }
      for (lt = a(lt); !Vt.done; ht++, Vt = O.next())
        Vt = z(lt, M, ht, Vt.value, w), Vt !== null && (t && (me = Vt.alternate, me !== null && lt.delete(
          me.key === null ? ht : me.key
        )), x = u(Vt, x, ht), Nt === null ? I = Vt : Nt.sibling = Vt, Nt = Vt);
      return t && lt.forEach(function(hT) {
        return e(M, hT);
      }), At && ua(M, ht), I;
    }
    function xt(M, x, O, w) {
      if (typeof O == "object" && O !== null && O.type === ot && O.key === null && O.props.ref === void 0 && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case ct:
            t: {
              for (var I = O.key; x !== null; ) {
                if (x.key === I) {
                  if (I = O.type, I === ot) {
                    if (x.tag === 7) {
                      n(
                        M,
                        x.sibling
                      ), w = s(
                        x,
                        O.props.children
                      ), Oa(w, O), w.return = M, M = w;
                      break t;
                    }
                  } else if (x.elementType === I || typeof I == "object" && I !== null && I.$$typeof === St && pi(I) === x.type) {
                    n(
                      M,
                      x.sibling
                    ), w = s(x, O.props), Oa(w, O), w.return = M, M = w;
                    break t;
                  }
                  n(M, x);
                  break;
                } else e(M, x);
                x = x.sibling;
              }
              O.type === ot ? (w = ri(
                O.props.children,
                M.mode,
                w,
                O.key
              ), Oa(w, O), w.return = M, M = w) : (w = mu(
                O.type,
                O.key,
                O.props,
                null,
                M.mode,
                w
              ), Oa(w, O), w.return = M, M = w);
            }
            return f(M);
          case Z:
            t: {
              for (I = O.key; x !== null; ) {
                if (x.key === I)
                  if (x.tag === 4 && x.stateNode.containerInfo === O.containerInfo && x.stateNode.implementation === O.implementation) {
                    n(
                      M,
                      x.sibling
                    ), w = s(x, O.children || []), w.return = M, M = w;
                    break t;
                  } else {
                    n(M, x);
                    break;
                  }
                else e(M, x);
                x = x.sibling;
              }
              w = Ar(O, M.mode, w), w.return = M, M = w;
            }
            return f(M);
          case St:
            return O = pi(O), xt(
              M,
              x,
              O,
              w
            );
        }
        if (wt(O))
          return J(
            M,
            x,
            O,
            w
          );
        if (P(O)) {
          if (I = P(O), typeof I != "function") throw Error(r(150));
          return O = I.call(O), et(
            M,
            x,
            O,
            w
          );
        }
        if (typeof O.then == "function")
          return xt(
            M,
            x,
            Au(O),
            w
          );
        if (O.$$typeof === st)
          return xt(
            M,
            x,
            bu(M, O),
            w
          );
        Mu(M, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, x !== null && x.tag === 6 ? (n(M, x.sibling), w = s(x, O), w.return = M, M = w) : (n(M, x), w = Er(O, M.mode, w), w.return = M, M = w), f(M)) : n(M, x);
    }
    return function(M, x, O, w) {
      try {
        ns = 0;
        var I = xt(
          M,
          x,
          O,
          w
        );
        return Ii = null, I;
      } catch (lt) {
        if (lt === Wi || lt === xu) throw lt;
        var Nt = Ke(29, lt, null, M.mode);
        return Nt.lanes = w, Nt.return = M, Nt;
      }
    };
  }
  var vi = am(!0), im = am(!1), za = !1;
  function wr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ur(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Ra(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Na(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (jt & 2) !== 0) {
      var s = a.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), a.pending = e, e = hu(t), qh(t, null, n), e;
    }
    return du(t, a, e, n), hu(t);
  }
  function as(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Et(t, n);
    }
  }
  function Br(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var s = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? s = u = f : u = u.next = f, n = n.next;
        } while (n !== null);
        u === null ? s = u = e : u = u.next = e;
      } else s = u = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var jr = !1;
  function is() {
    if (jr) {
      var t = $i;
      if (t !== null) throw t;
    }
  }
  function ls(t, e, n, a) {
    jr = !1;
    var s = t.updateQueue;
    za = !1;
    var u = s.firstBaseUpdate, f = s.lastBaseUpdate, m = s.shared.pending;
    if (m !== null) {
      s.shared.pending = null;
      var b = m, C = b.next;
      b.next = null, f === null ? u = C : f.next = C, f = b;
      var N = t.alternate;
      N !== null && (N = N.updateQueue, m = N.lastBaseUpdate, m !== f && (m === null ? N.firstBaseUpdate = C : m.next = C, N.lastBaseUpdate = b));
    }
    if (u !== null) {
      var U = s.baseState;
      f = 0, N = C = b = null, m = u;
      do {
        var A = m.lane & -536870913, z = A !== m.lane;
        if (z ? (Rt & A) === A : (a & A) === A) {
          A !== 0 && A === mi && (jr = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          t: {
            var J = t, et = m;
            A = e;
            var xt = n;
            switch (et.tag) {
              case 1:
                if (J = et.payload, typeof J == "function") {
                  U = J.call(xt, U, A);
                  break t;
                }
                U = J;
                break t;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = et.payload, A = typeof J == "function" ? J.call(xt, U, A) : J, A == null) break t;
                U = W({}, U, A);
                break t;
              case 2:
                za = !0;
            }
          }
          A = m.callback, A !== null && (t.flags |= 64, z && (t.flags |= 8192), z = s.callbacks, z === null ? s.callbacks = [A] : z.push(A));
        } else
          z = {
            lane: A,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, N === null ? (C = N = z, b = U) : N = N.next = z, f |= A;
        if (m = m.next, m === null) {
          if (m = s.shared.pending, m === null)
            break;
          z = m, m = z.next, z.next = null, s.lastBaseUpdate = z, s.shared.pending = null;
        }
      } while (!0);
      N === null && (b = U), s.baseState = b, s.firstBaseUpdate = C, s.lastBaseUpdate = N, u === null && (s.shared.lanes = 0), La |= f, t.lanes = f, t.memoizedState = U;
    }
  }
  function lm(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function sm(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        lm(n[t], e);
  }
  var _a = dn(null), Cu = dn(0);
  function um(t, e) {
    t = ma, Xt(Cu, t), Xt(_a, e), ma = t | e.baseLanes;
  }
  function Lr() {
    Xt(Cu, ma), Xt(_a, _a.current);
  }
  function Hr() {
    ma = Cu.current, re(_a), re(Cu);
  }
  var Ae = dn(null), _e = null;
  function Va(t) {
    var e = t.alternate;
    Xt(Me, Me.current & 1), Xt(Ae, t), _e === null && (e === null || _a.current !== null || e.memoizedState !== null) && (_e = t);
  }
  function Yr(t) {
    Xt(Me, Me.current), Xt(Ae, t), _e === null && (_e = t);
  }
  function om(t) {
    t.tag === 22 ? (Xt(Me, Me.current), Xt(Ae, t), _e === null && (_e = t)) : wa();
  }
  function wa() {
    Xt(Me, Me.current), Xt(Ae, Ae.current);
  }
  function an(t) {
    re(Ae), _e === t && (_e = null), re(Me);
  }
  var Me = dn(0);
  function ss(t, e) {
    Xt(Ae, Ae.current), Xt(Me, e);
  }
  function qr(t) {
    re(Me), re(Ae), _e === t && (_e = null);
  }
  function Du(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || cf(n) || ff(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var ca = 0, Tt = null, Qt = null, de = null, Ou = !1, tl = !1, Si = !1, zu = 0, us = 0, el = null, wS = 0;
  function ie() {
    throw Error(r(321));
  }
  function Gr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!nn(t[n], e[n])) return !1;
    return !0;
  }
  function Xr(t, e, n, a, s, u) {
    return ca = u, Tt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, tt.H = t === null || t.memoizedState === null ? Zm : Km, Si = !1, u = n(a, s), Si = !1, tl && (u = cm(
      e,
      n,
      a,
      s
    )), rm(t), u;
  }
  function rm(t) {
    tt.H = Bu;
    var e = Qt !== null && Qt.next !== null;
    if (ca = 0, de = Qt = Tt = null, Ou = !1, us = 0, el = null, e) throw Error(r(300));
    t === null || he || (t = t.dependencies, t !== null && Su(t) && (he = !0));
  }
  function cm(t, e, n, a) {
    Tt = t;
    var s = 0;
    do {
      if (tl && (el = null), us = 0, tl = !1, 25 <= s) throw Error(r(301));
      if (s += 1, de = Qt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      tt.H = GS, u = e(n, a);
    } while (tl);
    return u;
  }
  function US() {
    var t = tt.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? os(e) : e, t = t.useState()[0], (Qt !== null ? Qt.memoizedState : null) !== t && (Tt.flags |= 1024), e;
  }
  function Qr() {
    var t = zu !== 0;
    return zu = 0, t;
  }
  function Zr(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Kr(t) {
    if (Ou) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Ou = !1;
    }
    ca = 0, de = Qt = Tt = null, tl = !1, us = zu = 0, el = null;
  }
  function He() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return de === null ? Tt.memoizedState = de = t : de = de.next = t, de;
  }
  function oe() {
    if (Qt === null) {
      var t = Tt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Qt.next;
    var e = de === null ? Tt.memoizedState : de.next;
    if (e !== null)
      de = e, Qt = t;
    else {
      if (t === null)
        throw Tt.alternate === null ? Error(r(467)) : Error(r(310));
      Qt = t, t = {
        memoizedState: Qt.memoizedState,
        baseState: Qt.baseState,
        baseQueue: Qt.baseQueue,
        queue: Qt.queue,
        next: null
      }, de === null ? Tt.memoizedState = de = t : de = de.next = t;
    }
    return de;
  }
  function Ru() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function os(t) {
    var e = us;
    return us += 1, el === null && (el = []), t = tm(el, t, e), e = Tt, (de === null ? e.memoizedState : de.next) === null && (e = e.alternate, tt.H = e === null || e.memoizedState === null ? Zm : Km), t;
  }
  function Nu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return os(t);
      if (t.$$typeof === q) return;
      if (t.$$typeof === st) return Ee(t);
    }
    throw Error(r(438, String(t)));
  }
  function kr(t) {
    var e = null, n = Tt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = Tt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Ru(), Tt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = ea;
    return e.index++, n;
  }
  function fa(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function _u(t) {
    var e = oe();
    return Jr(e, Qt, t);
  }
  function Jr(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = u.next, u.next = f;
      }
      e.baseQueue = s = u, a.pending = null;
    }
    if (u = t.baseState, s === null) t.memoizedState = u;
    else {
      e = s.next;
      var m = f = null, b = null, C = e, N = !1;
      do {
        var U = C.lane & -536870913;
        if (U !== C.lane ? (Rt & U) === U : (ca & U) === U) {
          var A = C.revertLane;
          if (A === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), U === mi && (N = !0);
          else if ((ca & A) === A) {
            C = C.next, A === mi && (N = !0);
            continue;
          } else
            U = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, b === null ? (m = b = U, f = u) : b = b.next = U, Tt.lanes |= A, La |= A;
          U = C.action, Si && n(u, U), u = C.hasEagerState ? C.eagerState : n(u, U);
        } else
          A = {
            lane: U,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, b === null ? (m = b = A, f = u) : b = b.next = A, Tt.lanes |= U, La |= U;
        C = C.next;
      } while (C !== null && C !== e);
      if (b === null ? f = u : b.next = m, !nn(u, t.memoizedState) && (he = !0, N && (n = $i, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = f, t.baseQueue = b, a.lastRenderedState = u;
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Fr(t) {
    var e = oe(), n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, s = n.pending, u = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        u = t(u, f.action), f = f.next;
      while (f !== s);
      nn(u, e.memoizedState) || (he = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function fm(t, e, n) {
    var a = Tt, s = oe(), u = At;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !nn(
      (Qt || s).memoizedState,
      n
    );
    if (f && (s.memoizedState = n, he = !0), s = s.queue, Wr(mm.bind(null, a, s, t), [
      t
    ]), t = s.getSnapshot !== e || f || de !== null && (de.memoizedState.tag & 1) !== 0, nl(
      t ? 9 : 8,
      { destroy: void 0 },
      hm.bind(null, a, s, n, e),
      null
    ), t) {
      if (a.flags |= 2048, Kt === null) throw Error(r(349));
      u || (ca & 127) !== 0 || dm(a, e, n);
    }
    return n;
  }
  function dm(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = Tt.updateQueue, e === null ? (e = Ru(), Tt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function hm(t, e, n, a) {
    e.value = n, e.getSnapshot = a, ym(e) && pm(t);
  }
  function mm(t, e, n) {
    return n(function() {
      ym(e) && pm(t);
    });
  }
  function ym(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !nn(t, n);
    } catch {
      return !0;
    }
  }
  function pm(t) {
    var e = oi(t, 2);
    e !== null && Pe(e, t, 2);
  }
  function Pr(t) {
    var e = He();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Si) {
        Ln(!0);
        try {
          n();
        } finally {
          Ln(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fa,
      lastRenderedState: t
    }, e;
  }
  function gm(t, e, n, a) {
    return t.baseState = n, Jr(
      t,
      Qt,
      typeof a == "function" ? a : fa
    );
  }
  function BS(t, e, n, a, s) {
    if (Uu(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          u.listeners.push(f);
        }
      };
      tt.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, vm(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function vm(t, e) {
    var n = e.action, a = e.payload, s = t.state;
    if (e.isTransition) {
      var u = tt.T, f = {};
      f.types = u !== null ? u.types : null, tt.T = f;
      try {
        var m = n(s, a), b = tt.S;
        b !== null && b(f, m), Sm(t, e, m);
      } catch (C) {
        $r(t, e, C);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), tt.T = u;
      }
    } else
      try {
        u = n(s, a), Sm(t, e, u);
      } catch (C) {
        $r(t, e, C);
      }
  }
  function Sm(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        bm(t, e, a);
      },
      function(a) {
        return $r(t, e, a);
      }
    ) : bm(t, e, n);
  }
  function bm(t, e, n) {
    e.status = "fulfilled", e.value = n, Tm(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, vm(t, n)));
  }
  function $r(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Tm(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Tm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function xm(t, e) {
    return e;
  }
  function Em(t, e) {
    if (At) {
      var n = Kt.formState;
      if (n !== null) {
        t: {
          var a = Tt;
          if (At) {
            if (Pt) {
              e: {
                for (var s = Pt, u = Sn; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (s = Tn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                u = s.data, s = u === "F!" || u === "F" ? s : null;
              }
              if (s) {
                Pt = Tn(
                  s.nextSibling
                ), a = s.data === "F!";
                break t;
              }
            }
            Ca(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = He(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xm,
      lastRenderedState: e
    }, n.queue = a, n = Gm.bind(
      null,
      Tt,
      a
    ), a.dispatch = n, a = Pr(!1), u = ac.bind(
      null,
      Tt,
      !1,
      a.queue
    ), a = He(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = s, n = BS.bind(
      null,
      Tt,
      s,
      u,
      n
    ), s.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function Am(t) {
    var e = oe();
    return Mm(e, Qt, t);
  }
  function Mm(t, e, n) {
    if (e = Jr(
      t,
      e,
      xm
    )[0], t = _u(fa)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = os(e);
      } catch (f) {
        throw f === Wi ? xu : f;
      }
    else a = e;
    e = oe();
    var s = e.queue, u = s.dispatch;
    return n !== e.memoizedState && (Tt.flags |= 2048, nl(
      9,
      { destroy: void 0 },
      jS.bind(null, s, n),
      null
    )), [a, u, t];
  }
  function jS(t, e) {
    t.action = e;
  }
  function Cm(t) {
    var e = oe(), n = Qt;
    if (n !== null)
      return Mm(e, n, t);
    oe(), e = e.memoizedState, n = oe();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function nl(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = Tt.updateQueue, e === null && (e = Ru(), Tt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Dm() {
    return oe().memoizedState;
  }
  function Vu(t, e, n, a) {
    var s = He();
    Tt.flags |= t, s.memoizedState = nl(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function wu(t, e, n, a) {
    var s = oe();
    a = a === void 0 ? null : a;
    var u = s.memoizedState.inst;
    Qt !== null && a !== null && Gr(a, Qt.memoizedState.deps) ? s.memoizedState = nl(e, u, n, a) : (Tt.flags |= t, s.memoizedState = nl(
      1 | e,
      u,
      n,
      a
    ));
  }
  function Om(t, e) {
    Vu(8390656, 8, t, e);
  }
  function Wr(t, e) {
    wu(2048, 8, t, e);
  }
  function LS(t) {
    Tt.flags |= 4;
    var e = Tt.updateQueue;
    if (e === null)
      e = Ru(), Tt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function zm(t) {
    var e = oe().memoizedState;
    return LS({ ref: e, nextImpl: t }), function() {
      if ((jt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Rm(t, e) {
    return wu(4, 2, t, e);
  }
  function Nm(t, e) {
    return wu(4, 4, t, e);
  }
  function _m(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Vm(t, e, n) {
    n = n != null ? n.concat([t]) : null, wu(4, 4, _m.bind(null, e, t), n);
  }
  function Ir() {
  }
  function wm(t, e) {
    var n = oe();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Gr(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function Um(t, e) {
    var n = oe();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Gr(e, a[1]))
      return a[0];
    if (a = t(), Si) {
      Ln(!0);
      try {
        t();
      } finally {
        Ln(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function tc(t, e, n) {
    return n === void 0 || (ca & 1073741824) !== 0 && (Rt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Z0(), Tt.lanes |= t, La |= t, n);
  }
  function Bm(t, e, n, a) {
    return nn(n, e) ? n : _a.current !== null ? (t = tc(t, n, a), nn(t, e) || (he = !0), t) : (ca & 106) === 0 || (ca & 1073741824) !== 0 && (Rt & 261930) === 0 ? (he = !0, t.memoizedState = n) : (t = Z0(), Tt.lanes |= t, La |= t, e);
  }
  function jm(t, e, n, a, s) {
    var u = mt.p;
    mt.p = u !== 0 && 8 > u ? u : 8;
    var f = tt.T, m = {};
    m.types = f !== null ? f.types : null, tt.T = m, ac(t, !1, e, n);
    try {
      var b = s(), C = tt.S;
      if (C !== null && C(m, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var N = VS(
          b,
          a
        );
        rs(
          t,
          e,
          N,
          on(t)
        );
      } else
        rs(
          t,
          e,
          a,
          on(t)
        );
    } catch (U) {
      rs(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: U },
        on()
      );
    } finally {
      mt.p = u, f !== null && m.types !== null && (f.types = m.types), tt.T = f;
    }
  }
  function HS() {
  }
  function ec(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var s = Lm(t).queue;
    jm(
      t,
      s,
      e,
      fn,
      n === null ? HS : function() {
        return Hm(t), n(a);
      }
    );
  }
  function Lm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: fn,
      baseState: fn,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fa,
        lastRenderedState: fn
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fa,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Hm(t) {
    var e = Lm(t);
    e.next === null && (e = t.alternate.memoizedState), rs(
      t,
      e.next.queue,
      {},
      on()
    );
  }
  function nc() {
    return Ee(Tl);
  }
  function Ym() {
    return oe().memoizedState;
  }
  function qm() {
    return oe().memoizedState;
  }
  function YS(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = on();
          t = Ra(n);
          var a = Na(e, t, n);
          a !== null && (Pe(a, e, n), as(a, e, n)), e = { cache: Rr() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function qS(t, e, n) {
    var a = on();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uu(t) ? Xm(e, n) : (n = Tr(t, e, n, a), n !== null && (Pe(n, t, a), Qm(n, e, a)));
  }
  function Gm(t, e, n) {
    var a = on();
    rs(t, e, n, a);
  }
  function rs(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Uu(t)) Xm(e, s);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var f = e.lastRenderedState, m = u(f, n);
          if (s.hasEagerState = !0, s.eagerState = m, nn(m, f))
            return du(t, e, s, 0), Kt === null && fu(), !1;
        } catch {
        }
      if (n = Tr(t, e, s, a), n !== null)
        return Pe(n, t, a), Qm(n, e, a), !0;
    }
    return !1;
  }
  function ac(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: kc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Uu(t)) {
      if (e) throw Error(r(479));
    } else
      e = Tr(
        t,
        n,
        a,
        2
      ), e !== null && Pe(e, t, 2);
  }
  function Uu(t) {
    var e = t.alternate;
    return t === Tt || e !== null && e === Tt;
  }
  function Xm(t, e) {
    tl = Ou = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Qm(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Et(t, n);
    }
  }
  var Bu = {
    readContext: Ee,
    use: Nu,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useLayoutEffect: ie,
    useInsertionEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useSyncExternalStore: ie,
    useId: ie,
    useHostTransitionStatus: ie,
    useFormState: ie,
    useActionState: ie,
    useOptimistic: ie,
    useMemoCache: ie,
    useCacheRefresh: ie,
    useEffectEvent: ie
  }, Zm = {
    readContext: Ee,
    use: Nu,
    useCallback: function(t, e) {
      return He().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Ee,
    useEffect: Om,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Vu(
        4194308,
        4,
        _m.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return Vu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Vu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = He();
      e = e === void 0 ? null : e;
      var a = t();
      if (Si) {
        Ln(!0);
        try {
          t();
        } finally {
          Ln(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = He();
      if (n !== void 0) {
        var s = n(e);
        if (Si) {
          Ln(!0);
          try {
            n(e);
          } finally {
            Ln(!1);
          }
        }
      } else s = e;
      return a.memoizedState = a.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, a.queue = t, t = t.dispatch = qS.bind(
        null,
        Tt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = He();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Pr(t);
      var e = t.queue, n = Gm.bind(null, Tt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Ir,
    useDeferredValue: function(t, e) {
      var n = He();
      return tc(n, t, e);
    },
    useTransition: function() {
      var t = Pr(!1);
      return t = jm.bind(
        null,
        Tt,
        t.queue,
        !0,
        !1
      ), He().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = Tt, s = He();
      if (At) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), Kt === null)
          throw Error(r(349));
        (Rt & 127) !== 0 || dm(a, e, n);
      }
      s.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return s.queue = u, Om(mm.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, nl(
        9,
        { destroy: void 0 },
        hm.bind(
          null,
          a,
          u,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = He(), e = Kt.identifierPrefix;
      if (At) {
        var n = qn, a = Yn;
        n = (a & ~(1 << 32 - Be(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = zu++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = wS++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: nc,
    useFormState: Em,
    useActionState: Em,
    useOptimistic: function(t) {
      var e = He();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = ac.bind(
        null,
        Tt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: kr,
    useCacheRefresh: function() {
      return He().memoizedState = YS.bind(
        null,
        Tt
      );
    },
    useEffectEvent: function(t) {
      var e = He(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((jt & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Km = {
    readContext: Ee,
    use: Nu,
    useCallback: wm,
    useContext: Ee,
    useEffect: Wr,
    useImperativeHandle: Vm,
    useInsertionEffect: Rm,
    useLayoutEffect: Nm,
    useMemo: Um,
    useReducer: _u,
    useRef: Dm,
    useState: function() {
      return _u(fa);
    },
    useDebugValue: Ir,
    useDeferredValue: function(t, e) {
      var n = oe();
      return Bm(
        n,
        Qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = _u(fa)[0], e = oe().memoizedState;
      return [
        typeof t == "boolean" ? t : os(t),
        e
      ];
    },
    useSyncExternalStore: fm,
    useId: Ym,
    useHostTransitionStatus: nc,
    useFormState: Am,
    useActionState: Am,
    useOptimistic: function(t, e) {
      var n = oe();
      return gm(n, Qt, t, e);
    },
    useMemoCache: kr,
    useCacheRefresh: qm,
    useEffectEvent: zm
  }, GS = {
    readContext: Ee,
    use: Nu,
    useCallback: wm,
    useContext: Ee,
    useEffect: Wr,
    useImperativeHandle: Vm,
    useInsertionEffect: Rm,
    useLayoutEffect: Nm,
    useMemo: Um,
    useReducer: Fr,
    useRef: Dm,
    useState: function() {
      return Fr(fa);
    },
    useDebugValue: Ir,
    useDeferredValue: function(t, e) {
      var n = oe();
      return Qt === null ? tc(n, t, e) : Bm(
        n,
        Qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Fr(fa)[0], e = oe().memoizedState;
      return [
        typeof t == "boolean" ? t : os(t),
        e
      ];
    },
    useSyncExternalStore: fm,
    useId: Ym,
    useHostTransitionStatus: nc,
    useFormState: Cm,
    useActionState: Cm,
    useOptimistic: function(t, e) {
      var n = oe();
      return Qt !== null ? gm(n, Qt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: kr,
    useCacheRefresh: qm,
    useEffectEvent: zm
  };
  function ic(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : W({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var lc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = on(), s = Ra(a);
      s.payload = e, n != null && (s.callback = n), e = Na(t, s, a), e !== null && (Pe(e, t, a), as(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = on(), s = Ra(a);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = Na(t, s, a), e !== null && (Pe(e, t, a), as(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = on(), a = Ra(n);
      a.tag = 2, e != null && (a.callback = e), e = Na(t, a, n), e !== null && (Pe(e, t, n), as(e, t, n));
    }
  };
  function km(t, e, n, a, s, u, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, f) : e.prototype && e.prototype.isPureReactComponent ? !Fl(n, a) || !Fl(s, u) : !0;
  }
  function Jm(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && lc.enqueueReplaceState(e, e.state, null);
  }
  function bi(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = W({}, n));
      for (var s in t)
        n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function Fm(t) {
    cu(t);
  }
  function Pm(t) {
    console.error(t);
  }
  function $m(t) {
    cu(t);
  }
  function ju(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Wm(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function sc(t, e, n) {
    return n = Ra(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ju(t, e);
    }, n;
  }
  function Im(t) {
    return t = Ra(t), t.tag = 3, t;
  }
  function t0(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = a.value;
      t.payload = function() {
        return s(u);
      }, t.callback = function() {
        Wm(e, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      Wm(e, n, a), typeof s != "function" && (Ha === null ? Ha = /* @__PURE__ */ new Set([this]) : Ha.add(this));
      var m = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function XS(t, e, n, a, s) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && di(
        e,
        n,
        s,
        !0
      ), n = Ae.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return _e === null ? io() : n.alternate === null && le === 0 && (le = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === Eu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Qc(t, a, s)), !1;
          case 22:
            return n.flags |= 65536, a === Eu ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Qc(t, a, s)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Qc(t, a, s), io(), !1;
    }
    if (At)
      return e = Ae.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, a !== Cr && (t = Error(r(422), { cause: a }), Wl(pn(t, n)))) : (a !== Cr && (e = Error(r(423), {
        cause: a
      }), Wl(
        pn(e, n)
      )), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, a = pn(a, n), s = sc(
        t.stateNode,
        a,
        s
      ), Br(t, s), le !== 4 && (le = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = pn(u, n), gs === null ? gs = [u] : gs.push(u), le !== 4 && (le = 2), e === null) return !0;
    a = pn(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = sc(n.stateNode, a, t), Br(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ha === null || !Ha.has(u))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = Im(s), t0(
              s,
              t,
              n,
              a
            ), Br(n, s), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var uc = Error(r(461)), he = !1;
  function ge(t, e, n, a) {
    e.child = t === null ? im(e, null, n, a) : vi(
      e,
      t.child,
      n,
      a
    );
  }
  function e0(t, e, n, a, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var m in a)
        m !== "ref" && (f[m] = a[m]);
    } else f = a;
    return hi(e), a = Xr(
      t,
      e,
      n,
      f,
      u,
      s
    ), m = Qr(), t !== null && !he ? (Zr(t, e, s), da(t, e, s)) : (At && m && pu(e), e.flags |= 1, ge(t, e, a, s), e.child);
  }
  function n0(t, e, n, a, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !xr(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, a0(
        t,
        e,
        u,
        a,
        s
      )) : (t = mu(
        n.type,
        null,
        a,
        e,
        e.mode,
        s
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !yc(t, s)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Fl, n(f, a) && t.ref === e.ref)
        return da(t, e, s);
    }
    return e.flags |= 1, t = sa(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function a0(t, e, n, a, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Fl(u, a) && t.ref === e.ref)
        if (he = !1, e.pendingProps = a = u, yc(t, s))
          (t.flags & 131072) !== 0 && (he = !0);
        else
          return e.lanes = t.lanes, da(t, e, s);
    }
    return oc(
      t,
      e,
      n,
      a,
      s
    );
  }
  function i0(t, e, n, a) {
    var s = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, s = 0; a !== null; )
            s = s | a.lanes | a.childLanes, a = a.sibling;
          a = s & ~u;
        } else a = 0, e.child = null;
        return l0(
          t,
          e,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Tu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? um(e, u) : Lr(), om(e);
      else
        return a = e.lanes = 536870912, l0(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (Tu(e, u.cachePool), um(e, u), wa(), e.memoizedState = null) : (t !== null && Tu(e, null), Lr(), wa());
    return ge(t, e, s, n), e.child;
  }
  function cs(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function l0(t, e, n, a, s) {
    var u = _r();
    return u = u === null ? null : { parent: fe._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && Tu(e, null), Lr(), om(e), t !== null && di(t, e, a, !0), e.childLanes = s, null;
  }
  function Lu(t, e) {
    return e = Hu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function s0(t, e, n) {
    return vi(e, t.child, null, n), t = Lu(e, e.pendingProps), t.flags |= 2, an(e), e.memoizedState = null, t;
  }
  function QS(t, e, n) {
    var a = e.pendingProps, s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (At) {
        if (a.mode === "hidden")
          return t = Lu(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, cs(null, t);
        if (Yr(e), (t = Pt) ? (t = _y(
          t,
          Sn
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Aa !== null ? { id: Yn, overflow: qn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Xh(t), n.return = e, e.child = n, be = e, Pt = null)) : t = null, t === null) throw Ca(e);
        return e.lanes = 536870912, null;
      }
      return Lu(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (Yr(e), s)
        if (e.flags & 256)
          e.flags &= -257, e = s0(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (he || di(t, e, n, !1), s = (n & t.childLanes) !== 0, he || s) {
        if (_a.current === null) {
          if (a = Kt, a !== null && (f = yt(a, n), f !== 0 && f !== u.retryLane))
            throw u.retryLane = f, oi(t, f), Pe(a, t, f), uc;
          io();
        }
        e = s0(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Pt = Tn(f.nextSibling), be = e, At = !0, Ma = null, Sn = !1, t !== null && Kh(e, t), e = Lu(e, a), e.flags |= 134221824;
      return e;
    }
    return t = sa(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function al(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function oc(t, e, n, a, s) {
    return hi(e), n = Xr(
      t,
      e,
      n,
      a,
      void 0,
      s
    ), a = Qr(), t !== null && !he ? (Zr(t, e, s), da(t, e, s)) : (At && a && pu(e), e.flags |= 1, ge(t, e, n, s), e.child);
  }
  function u0(t, e, n, a, s, u) {
    return hi(e), e.updateQueue = null, n = cm(
      e,
      a,
      n,
      s
    ), rm(t), a = Qr(), t !== null && !he ? (Zr(t, e, u), da(t, e, u)) : (At && a && pu(e), e.flags |= 1, ge(t, e, n, u), e.child);
  }
  function o0(t, e, n, a, s) {
    if (hi(e), e.stateNode === null) {
      var u = ki, f = n.contextType;
      typeof f == "object" && f !== null && (u = Ee(f)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = lc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, wr(e), f = n.contextType, u.context = typeof f == "object" && f !== null ? Ee(f) : ki, u.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (ic(
        e,
        n,
        f,
        a
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && lc.enqueueReplaceState(u, u.state, null), ls(e, a, u, s), is(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var m = e.memoizedProps, b = bi(n, m);
      u.props = b;
      var C = u.context, N = n.contextType;
      f = ki, typeof N == "object" && N !== null && (f = Ee(N));
      var U = n.getDerivedStateFromProps;
      N = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, N || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m || C !== f) && Jm(
        e,
        u,
        a,
        f
      ), za = !1;
      var A = e.memoizedState;
      u.state = A, ls(e, a, u, s), is(), C = e.memoizedState, m || A !== C || za ? (typeof U == "function" && (ic(
        e,
        n,
        U,
        a
      ), C = e.memoizedState), (b = za || km(
        e,
        n,
        b,
        a,
        A,
        C,
        f
      )) ? (N || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = C), u.props = a, u.state = C, u.context = f, a = b) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, Ur(t, e), f = e.memoizedProps, N = bi(n, f), u.props = N, U = e.pendingProps, A = u.context, C = n.contextType, b = ki, typeof C == "object" && C !== null && (b = Ee(C)), m = n.getDerivedStateFromProps, (C = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== U || A !== b) && Jm(
        e,
        u,
        a,
        b
      ), za = !1, A = e.memoizedState, u.state = A, ls(e, a, u, s), is();
      var z = e.memoizedState;
      f !== U || A !== z || za || t !== null && t.dependencies !== null && Su(t.dependencies) ? (typeof m == "function" && (ic(
        e,
        n,
        m,
        a
      ), z = e.memoizedState), (N = za || km(
        e,
        n,
        N,
        a,
        A,
        z,
        b
      ) || t !== null && t.dependencies !== null && Su(t.dependencies)) ? (C || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, b), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        z,
        b
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = z), u.props = a, u.state = z, u.context = b, a = N) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, al(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = vi(
      e,
      t.child,
      null,
      s
    ), e.child = vi(
      e,
      null,
      n,
      s
    )) : ge(t, e, n, s), e.memoizedState = u.state, t = e.child) : t = da(
      t,
      e,
      s
    ), t;
  }
  function r0(t, e, n, a) {
    return ci(), e.flags |= 256, ge(t, e, n, a), e.child;
  }
  var rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function cc(t) {
    return { baseLanes: t, cachePool: Wh() };
  }
  function fc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= un), t;
  }
  function c0(t, e, n) {
    var a = e.pendingProps, s = !1, u = (e.flags & 128) !== 0, f;
    if ((f = u) || (f = t !== null && t.memoizedState === null ? !1 : (Me.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (At) {
        if (s ? Va(e) : wa(), (t = Pt) ? (t = _y(
          t,
          Sn
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Aa !== null ? { id: Yn, overflow: qn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Xh(t), n.return = e, e.child = n, be = e, Pt = null)) : t = null, t === null) throw Ca(e);
        return ff(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, s ? (wa(), s = e.mode, u = Hu(
        { mode: "hidden", children: u },
        s
      ), a = ri(
        a,
        s,
        n,
        null
      ), u.return = e, a.return = e, u.sibling = a, e.child = u, a = e.child, a.memoizedState = cc(n), a.childLanes = fc(
        t,
        f,
        n
      ), e.memoizedState = rc, cs(null, a)) : (Va(e), dc(e, u));
    }
    var m = t.memoizedState;
    if (m !== null) {
      var b = m.dehydrated;
      if (b !== null)
        return ZS(
          t,
          e,
          u,
          f,
          a,
          b,
          m,
          n
        );
    }
    return s ? (wa(), s = a.fallback, u = e.mode, m = t.child, b = m.sibling, a = sa(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 1206910976, b !== null ? s = sa(b, s) : (s = ri(
      s,
      u,
      n,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, cs(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = cc(n) : (u = s.cachePool, u !== null ? (m = fe._currentValue, u = u.parent !== m ? { parent: m, pool: m } : u) : u = Wh(), s = {
      baseLanes: s.baseLanes | n,
      cachePool: u
    }), a.memoizedState = s, a.childLanes = fc(
      t,
      f,
      n
    ), e.memoizedState = rc, cs(t.child, a)) : (Va(e), n = t.child, t = n.sibling, n = sa(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function dc(t, e) {
    return e = Hu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Hu(t, e) {
    return t = Ke(22, t, null, e), t.lanes = 0, t;
  }
  function Yu(t, e, n) {
    return vi(e, t.child, null, n), t = dc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function ZS(t, e, n, a, s, u, f, m) {
    if (n)
      return e.flags & 256 ? (Va(e), e.flags &= -257, Yu(
        t,
        e,
        m
      )) : e.memoizedState !== null ? (wa(), e.child = t.child, e.flags |= 128, null) : (wa(), u = s.fallback, f = e.mode, s = Hu(
        { mode: "visible", children: s.children },
        f
      ), u = ri(
        u,
        f,
        m,
        null
      ), u.flags |= 2, s.return = e, u.return = e, s.sibling = u, e.child = s, vi(e, t.child, null, m), s = e.child, s.memoizedState = cc(m), s.childLanes = fc(
        t,
        a,
        m
      ), e.memoizedState = rc, cs(null, s));
    if (Va(e), ff(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var b = a.dgst;
      return a = b, a !== "" && (s = Error(r(419)), s.stack = "", s.digest = a, Wl({ value: s, source: null, stack: null })), Yu(
        t,
        e,
        m
      );
    }
    if (he || di(t, e, m, !1), a = (m & t.childLanes) !== 0, he || a) {
      if (_a.current !== null)
        return Yu(
          t,
          e,
          m
        );
      if (a = Kt, a !== null && (s = yt(
        a,
        m
      ), s !== 0 && s !== f.retryLane))
        throw f.retryLane = s, oi(t, s), Pe(a, t, s), uc;
      return cf(u) || io(), Yu(
        t,
        e,
        m
      );
    }
    return cf(u) ? (e.flags |= 192, e.child = t.child, null) : (t = f.treeContext, Pt = Tn(u.nextSibling), be = e, At = !0, Ma = null, Sn = !1, t !== null && Kh(e, t), e = dc(
      e,
      s.children
    ), e.flags |= 134221824, e);
  }
  function f0(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), vu(t.return, e, n);
  }
  function d0(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && Du(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function qu(t, e, n, a, s, u) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: s,
      treeForkCount: u
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = s, f.treeForkCount = u);
  }
  function hc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function mc(t, e, n) {
    var a = e.pendingProps, s = a.revealOrder, u = a.tail;
    a = a.children;
    var f = Me.current;
    if (e.flags & 128)
      return ss(e, f), null;
    var m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, ss(e, f), s === "backwards" && t !== null ? (hc(t), ge(t, e, a, n), hc(t)) : ge(t, e, a, n), a = At ? $l : 0, !m && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && f0(t, n, e);
        else if (t.tag === 19)
          f0(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (s) {
      case "backwards":
        n = d0(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null, hc(e)), qu(
          e,
          !0,
          s,
          null,
          u,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (t = s.alternate, t !== null && Du(t) === null) {
            e.child = s;
            break;
          }
          t = s.sibling, s.sibling = n, n = s, s = t;
        }
        qu(
          e,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        qu(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        n = d0(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), qu(
          e,
          !1,
          s,
          n,
          u,
          a
        );
    }
    return e.child;
  }
  function h0(t, e, n) {
    var a = e.pendingProps;
    return Da(e, e.type, a.value), ge(t, e, a.children, n), e.child;
  }
  function da(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), La |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (di(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = sa(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = sa(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function yc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Su(t)));
  }
  function KS(t, e, n) {
    switch (e.tag) {
      case 3:
        va(e, e.stateNode.containerInfo), Da(e, fe, t.memoizedState.cache), ci();
        break;
      case 27:
      case 5:
        It(e);
        break;
      case 4:
        va(e, e.stateNode.containerInfo);
        break;
      case 10:
        Da(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Yr(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return Va(e), e.flags |= 128, null;
          a = di(
            t,
            e,
            n,
            !1
          );
          var s = e.child.childLanes;
          return a || (n & s) !== 0 ? c0(t, e, n) : (Va(e), t = da(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        Va(e);
        break;
      case 19:
        if (e.flags & 128)
          return mc(
            t,
            e,
            n
          );
        if (s = (t.flags & 128) !== 0, a = (n & e.childLanes) !== 0, a || (di(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), s) {
          if (a)
            return mc(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ss(e, Me.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, i0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        Da(e, fe, t.memoizedState.cache);
    }
    return da(t, e, n);
  }
  function m0(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        he = !0;
      else {
        if (!yc(t, n) && (e.flags & 128) === 0)
          return he = !1, KS(
            t,
            e,
            n
          );
        he = (t.flags & 131072) !== 0;
      }
    else
      he = !1, At && (e.flags & 1048576) !== 0 && Zh(e, $l, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = pi(e.elementType), e.type = t, typeof t == "function")
            xr(t) ? (a = bi(t, a), e.tag = 1, e = o0(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = oc(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === X) {
                e.tag = 11, e = e0(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === ft) {
                e.tag = 14, e = n0(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === st) {
                e.tag = 10, e.type = t, e = h0(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = Ct(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return oc(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, s = bi(
          a,
          e.pendingProps
        ), o0(
          t,
          e,
          a,
          s,
          n
        );
      case 3:
        t: {
          if (va(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          s = u.element, Ur(t, e), ls(e, a, null, n);
          var f = e.memoizedState;
          if (a = f.cache, Da(e, fe, a), a !== u.cache && zr(
            e,
            [fe],
            n,
            !0
          ), is(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = r0(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== s) {
              s = pn(
                Error(r(424)),
                e
              ), Wl(s), e = r0(
                t,
                e,
                a,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Pt = Tn(t.firstChild), be = e, At = !0, Ma = null, Sn = !0, n = im(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (ci(), a === s) {
              e = da(
                t,
                e,
                n
              );
              break t;
            }
            ge(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return al(t, e), t === null ? (n = Hy(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : At || (e.stateNode = vy(
          e.type,
          e.pendingProps,
          Ne.current,
          e
        )) : e.memoizedState = Hy(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return It(e), t === null && At && (a = e.stateNode = Uy(
          e.type,
          e.pendingProps,
          Ne.current
        ), be = e, Sn = !0, s = Pt, Ga(e.type) ? (df = s, Pt = Tn(a.firstChild)) : Pt = s), ge(
          t,
          e,
          e.pendingProps.children,
          n
        ), al(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && At && ((s = a = Pt) && (a = Yb(
          a,
          e.type,
          e.pendingProps,
          Sn
        ), a !== null ? (e.stateNode = a, be = e, Pt = Tn(a.firstChild), Sn = !1, s = !0) : s = !1), s || Ca(e)), It(e), s = e.type, u = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = u.children, nf(s, u) ? a = null : f !== null && nf(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = Xr(
          t,
          e,
          US,
          null,
          null,
          n
        ), Tl._currentValue = s), al(t, e), ge(t, e, a, n), e.child;
      case 6:
        return t === null && At && ((t = n = Pt) && (n = qb(
          n,
          e.pendingProps,
          Sn
        ), n !== null ? (e.stateNode = n, be = e, Pt = null, t = !0) : t = !1), t || Ca(e)), null;
      case 13:
        return c0(t, e, n);
      case 4:
        return va(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = vi(
          e,
          null,
          a,
          n
        ) : ge(t, e, a, n), e.child;
      case 11:
        return e0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return a = e.pendingProps, al(t, e), ge(t, e, a, n), e.child;
      case 8:
        return ge(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return ge(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return h0(t, e, n);
      case 9:
        return s = e.type._context, a = e.pendingProps.children, hi(e), s = Ee(s), a = a(s), e.flags |= 1, ge(t, e, a, n), e.child;
      case 14:
        return n0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return a0(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return mc(t, e, n);
      case 31:
        return QS(t, e, n);
      case 22:
        return i0(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return hi(e), a = Ee(fe), t === null ? (s = _r(), s === null && (s = Kt, u = Rr(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), e.memoizedState = { parent: a, cache: s }, wr(e), Da(e, fe, s)) : ((t.lanes & n) !== 0 && (Ur(t, e), ls(e, null, null, n), is()), s = t.memoizedState, u = e.memoizedState, s.parent !== a ? (s = { parent: a, cache: a }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), Da(e, fe, a)) : (a = u.cache, Da(e, fe, a), a !== s.cache && zr(
          e,
          [fe],
          n,
          !0
        ))), ge(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : At && pu(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : al(t, e), ge(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function ha(t) {
    t.flags |= 4;
  }
  function pc(t, e, n, a, s) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = n === null ? Xy(e, a) : Xy(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), u) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (F0()) t.flags |= 8192;
        else
          throw gi = Eu, Vr;
    } else t.flags &= -16777217;
  }
  function y0(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Qy(e))
      if (F0()) t.flags |= 8192;
      else
        throw gi = Eu, Vr;
  }
  function Gu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? D() : 536870912, t.lanes |= e, ol |= e);
  }
  function fs(t, e) {
    if (!At)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (e = t.tail, n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
      }
  }
  function $t(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags & 1206910976, a |= s.flags & 1206910976, s.return = t, s = s.sibling;
    else
      for (s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags, a |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function kS(t, e, n) {
    var a = e.pendingProps;
    switch (Mr(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $t(e), null;
      case 1:
        return $t(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), ra(fe), Bn(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Pi(e) ? ha(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Dr())), $t(e), null;
      case 26:
        var s = e.type, u = e.memoizedState;
        return t === null ? (ha(e), u !== null ? ($t(e), y0(e, u)) : ($t(e), pc(
          e,
          s,
          null,
          a,
          n
        ))) : u ? u !== t.memoizedState ? (ha(e), $t(e), y0(e, u)) : ($t(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ha(e), $t(e), pc(
          e,
          s,
          t,
          a,
          n
        )), null;
      case 27:
        if (vt(e), n = Ne.current, s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ha(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return $t(e), e.subtreeFlags &= -33554433, null;
          }
          t = Ve.current, Pi(e) ? kh(e) : (t = Uy(s, a, n), e.stateNode = t, ha(e));
        }
        return $t(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (vt(e), s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ha(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return $t(e), e.subtreeFlags &= -33554433, null;
          }
          if (u = Ve.current, Pi(e))
            kh(e);
          else {
            var f = xs(
              Ne.current
            );
            switch (u) {
              case 1:
                u = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                u = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    u = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    u = f.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? f.createElement(s, { is: a.is }) : f.createElement(s);
                }
            }
            u[Wt] = e, u[ce] = a;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = u;
            t: switch (De(u, s, a), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && ha(e);
          }
        }
        return $t(e), e.subtreeFlags &= -33554433, pc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && ha(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = Ne.current, Pi(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, s = be, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            t[Wt] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || my(t.nodeValue, n)), t || Ca(e, !0);
          } else
            t = xs(t).createTextNode(
              a
            ), t[Wt] = e, e.stateNode = t;
        }
        return $t(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Pi(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Wt] = e;
            } else
              ci(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            $t(e), t = !1;
          } else
            n = Dr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (an(e), e) : (an(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return $t(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = Pi(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(r(317));
              s[Wt] = e;
            } else
              ci(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            $t(e), s = !1;
          } else
            s = Dr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return e.flags & 256 ? (an(e), e) : (an(e), null);
        }
        return an(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== s && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Gu(e, e.updateQueue), $t(e), null);
      case 4:
        return Bn(), t === null && $c(e.stateNode.containerInfo), e.flags |= 67108864, $t(e), null;
      case 10:
        return ra(e.type), $t(e), null;
      case 19:
        if (qr(e), a = e.memoizedState, a === null) return $t(e), null;
        if (s = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (s) fs(a, !1);
          else {
            if (le !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Du(t), u !== null) {
                  for (e.flags |= 128, fs(a, !1), t = u.updateQueue, e.updateQueue = t, Gu(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Gh(n, t), n = n.sibling;
                  return ss(
                    e,
                    Me.current & 1 | 2
                  ), At && ua(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && we() > to && (e.flags |= 128, s = !0, fs(a, !1), e.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = Du(u), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, Gu(e, t), fs(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !At)
                return $t(e), null;
            } else
              2 * we() - a.renderingStartTime > to && n !== 536870912 && (e.flags |= 128, s = !0, fs(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        if (a.tail !== null) {
          t = a.tail;
          t: {
            for (n = t; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = we(), t.sibling = null, u = Me.current, u = s ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || At ? ss(e, u) : (n = u, Xt(Ae, e), Xt(Me, n), _e === null && (_e = e)), At && ua(e, a.treeForkCount), t;
        }
        return $t(e), null;
      case 22:
      case 23:
        return an(e), Hr(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && ($t(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : $t(e), n = e.updateQueue, n !== null && Gu(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && re(yi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), ra(fe), $t(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, $t(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function JS(t, e) {
    switch (Mr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return ra(fe), Bn(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return vt(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (an(e), e.alternate === null)
            throw Error(r(340));
          ci();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (an(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          ci();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return qr(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Bn(), null;
      case 10:
        return ra(e.type), null;
      case 22:
      case 23:
        return an(e), Hr(), t !== null && re(yi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return ra(fe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function p0(t, e) {
    switch (Mr(e), e.tag) {
      case 3:
        ra(fe), Bn();
        break;
      case 26:
      case 27:
      case 5:
        vt(e);
        break;
      case 4:
        Bn();
        break;
      case 31:
        e.memoizedState !== null && an(e);
        break;
      case 13:
        an(e);
        break;
      case 19:
        qr(e);
        break;
      case 10:
        ra(e.type);
        break;
      case 22:
      case 23:
        an(e), Hr(), t !== null && re(yi);
        break;
      case 24:
        ra(fe);
    }
  }
  function ds(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var u = n.create, f = n.inst;
            a = u(), f.destroy = a;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (m) {
      Yt(e, e.return, m);
    }
  }
  function Ua(t, e, n) {
    try {
      var a = e.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst, m = f.destroy;
            if (m !== void 0) {
              f.destroy = void 0, s = e;
              var b = n, C = m;
              try {
                C();
              } catch (N) {
                Yt(
                  s,
                  b,
                  N
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (N) {
      Yt(e, e.return, N);
    }
  }
  function g0(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        sm(e, n);
      } catch (a) {
        Yt(t, t.return, a);
      }
    }
  }
  function v0(t, e, n) {
    n.props = bi(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Yt(t, e, a);
    }
  }
  function Gn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            var s = t.stateNode, u = ia(t.memoizedProps, s);
            (s.ref === null || s.ref.name !== u) && (s.ref = My(u)), a = s.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var f = new rn(t);
              p(
                t.child,
                !1,
                Lb,
                f,
                void 0,
                void 0
              ), t.stateNode = f;
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (m) {
      Yt(t, e, m);
    }
  }
  function Ce(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          Yt(t, e, s);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Yt(t, e, s);
        }
      else n.current = null;
  }
  function Xu(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        Ny(
          t.stateNode,
          e[n]
        );
  }
  function S0(t) {
    for (var e = t.return; e !== null && (vc(e) && Ny(t.stateNode, e.stateNode), !gc(e)); )
      e = e.return;
  }
  function hs(t) {
    for (var e = t.return; e !== null && (vc(e) && Hb(t.stateNode, e.stateNode), !gc(e)); )
      e = e.return;
  }
  function gc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function vc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Sc(t) {
    var e = t.type, n = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      Yt(t, t.return, s);
    }
  }
  function bc(t, e, n) {
    try {
      var a = t.stateNode;
      bb(a, t.type, n, e), a[ce] = e;
    } catch (s) {
      Yt(t, t.return, s);
    }
  }
  function b0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ga(t.type) || t.tag === 4;
  }
  function Tc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || b0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ga(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function xc(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(s, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(s), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Hn)), Xu(t, a), Ut = !0;
    else if (s !== 4 && (s === 27 && (Xu(t, a), a = null, Ga(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (xc(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        xc(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function Qu(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? n.insertBefore(s, e) : n.appendChild(s), Xu(t, a), Ut = !0;
    else if (s !== 4 && (s === 27 && (Xu(t, a), a = null, Ga(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (Qu(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Qu(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function T0(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      De(e, a, n), e[Wt] = t, e[ce] = n;
    } catch (u) {
      Yt(t, t.return, u);
    }
  }
  var Zu = !1, ln = null;
  function x0(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Zu = !0);
  }
  var Xn = null;
  function E0() {
    var t = Xn;
    return Xn = null, t;
  }
  var ke = 0;
  function il(t, e, n, a, s) {
    return ke = 0, A0(
      t.child,
      e,
      n,
      a,
      s
    );
  }
  function A0(t, e, n, a, s) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var f = t.stateNode;
        if (a !== null) {
          var m = sf(f);
          a.push(m), m.view && (u = !0);
        } else
          u || sf(f).view && (u = !0);
        Zu = !0, Ey(
          f,
          ke === 0 ? e : e + "_" + ke,
          n
        ), ke++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s || A0(
        t.child,
        e,
        n,
        a,
        s
      ) && (u = !0));
      t = t.sibling;
    }
    return u;
  }
  function Qn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? Ay(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Qn(
        t.child,
        e
      )), t = t.sibling;
  }
  function Ku(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (Ku(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(r(544));
          var n = e.name;
          e = la(e.default, e.share), e !== "none" && (il(
            t,
            n,
            e,
            null,
            !1
          ) || Qn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Ec(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, s = ia(a, n), u = la(
        a.default,
        n.paired ? a.share : a.enter
      );
      u !== "none" ? il(t, s, u, null, !1) ? (Ku(t), n.paired || e || dl(t, a.onEnter)) : Qn(t.child, !1) : Ku(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ec(t, e), t = t.sibling;
    else Ku(t);
  }
  function Ac(t) {
    if (ln !== null && ln.size !== 0) {
      var e = ln;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, a = n.name;
              if (a != null && a !== "auto") {
                var s = e.get(a);
                if (s !== void 0) {
                  var u = la(
                    n.default,
                    n.share
                  );
                  if (u !== "none" && (il(
                    t,
                    a,
                    u,
                    null,
                    !1
                  ) ? (u = t.stateNode, s.paired = u, u.paired = s, dl(t, n.onShare)) : Qn(t.child, !1)), e.delete(a), e.size === 0) break;
                }
              }
            }
            Ac(t);
          }
          t = t.sibling;
        }
    }
  }
  function Mc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = ia(e, t.stateNode), a = ln !== null ? ln.get(n) : void 0, s = la(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      s !== "none" && (il(t, n, s, null, !1) ? a !== void 0 ? (s = t.stateNode, a.paired = s, s.paired = a, ln.delete(n), dl(t, e.onShare)) : dl(t, e.onExit) : Qn(t.child, !1)), ln !== null && Ac(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Mc(t), t = t.sibling;
    else
      ln !== null && Ac(t);
  }
  function M0(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = ia(e, t.stateNode);
        e = la(e.default, e.update), t.flags &= -5, e !== "none" && il(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && M0(t);
      t = t.sibling;
    }
  }
  function Cc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Qn(t.child, !1));
          }
          Cc(t);
        }
        t = t.sibling;
      }
  }
  function ku(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Qn(t.child, !1), Cc(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        ku(t), t = t.sibling;
    else Cc(t);
  }
  function C0(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Qn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && C0(t), t = t.sibling;
  }
  function Dc(t, e, n, a, s, u, f) {
    for (var m = !1; e !== null; ) {
      if (e.tag === 5) {
        var b = e.stateNode;
        if (u !== null && ke < u.length) {
          var C = u[ke], N = sf(b);
          (C.view || N.view) && (m = !0);
          var U;
          if (U = (t.flags & 4) === 0)
            if (N.clip) U = !0;
            else {
              U = C.rect;
              var A = N.rect;
              U = U.y !== A.y || U.x !== A.x || U.height !== A.height || U.width !== A.width;
            }
          U && (t.flags |= 4), N.abs ? N = !C.abs : (C = C.rect, N = N.rect, N = C.height !== N.height || C.width !== N.width), N && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Ey(
          b,
          ke === 0 ? n : n + "_" + ke,
          s
        ), m && (t.flags & 4) !== 0 || (Xn === null && (Xn = []), Xn.push(
          b,
          ke === 0 ? a : a + "_" + ke,
          e.memoizedProps
        )), ke++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && f ? t.flags |= e.flags & 32 : Dc(
        t,
        e.child,
        n,
        a,
        s,
        u,
        f
      ) && (m = !0));
      e = e.sibling;
    }
    return m;
  }
  function D0(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, s = ia(n, a), u = la(n.default, n.update), f;
        f = t.memoizedState, t.memoizedState = null, a = t;
        var m = t.child;
        ke = 0, s = Dc(
          a,
          m,
          s,
          s,
          u,
          f,
          !1
        ), (t.flags & 4) !== 0 && s && dl(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && D0(t);
      t = t.sibling;
    }
  }
  var Te = !1, Lt = !1, Zn = !1, Oc = !1, O0 = typeof WeakSet == "function" ? WeakSet : Set, xe = null, Kn = !1, ms = !1, Ju = !1, zc = !1;
  function FS(t, e, n) {
    if (t = t.containerInfo, tf = xl, t = _h(t), yr(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var s = a.getSelection && a.getSelection();
          if (s && s.rangeCount !== 0) {
            a = s.anchorNode;
            var u = s.anchorOffset, f = s.focusNode;
            s = s.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break t;
            }
            var m = 0, b = -1, C = -1, N = 0, U = 0, A = t, z = null;
            e: for (; ; ) {
              for (var J; A !== a || u !== 0 && A.nodeType !== 3 || (b = m + u), A !== f || s !== 0 && A.nodeType !== 3 || (C = m + s), A.nodeType === 3 && (m += A.nodeValue.length), (J = A.firstChild) !== null; )
                z = A, A = J;
              for (; ; ) {
                if (A === t) break e;
                if (z === a && ++N === u && (b = m), z === f && ++U === s && (C = m), (J = A.nextSibling) !== null) break;
                A = z, z = A.parentNode;
              }
              A = J;
            }
            a = b === -1 || C === -1 ? null : { start: b, end: C };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ef = { focusedElem: t, selectionRange: a }, xl = !1, n = (n & 335544064) === n, xe = e, e = n ? 9270 : 1024; xe !== null; ) {
      if (t = xe, n && (a = t.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          n && Mc(a[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && x0(t), Fu(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && Mc(a), Fu(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && x0(t), Fu(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, xe = a) : (n && M0(t), Fu(n));
      }
    }
    ln = null;
  }
  function Fu(t) {
    for (; xe !== null; ) {
      var e = xe, n = t, a = e.alternate, s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((s & 1024) !== 0 && a !== null) {
            n = void 0, s = a.memoizedProps, a = a.memoizedState;
            var u = e.stateNode;
            try {
              var f = bi(
                e.type,
                s
              );
              n = u.getSnapshotBeforeUpdate(
                f,
                a
              ), u.__reactInternalSnapshotBeforeUpdate = n;
            } catch (m) {
              Yt(e, e.return, m);
            }
          }
          break;
        case 3:
          if ((s & 1024) !== 0) {
            if (a = e.stateNode.containerInfo, n = a.nodeType, n === 9)
              rf(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  rf(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && a !== null && (n = ia(
            a.memoizedProps,
            a.stateNode
          ), s = e.memoizedProps, s = la(s.default, s.update), s !== "none" && il(
            a,
            n,
            s,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((s & 1024) !== 0) throw Error(r(163));
      }
      if (a = e.sibling, a !== null) {
        a.return = e.return, xe = a;
        break;
      }
      xe = e.return;
    }
  }
  function z0(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        kn(t, n), a & 4 && ds(5, n);
        break;
      case 1:
        if (kn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              Yt(n, n.return, f);
            }
          else {
            var s = bi(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                s,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              Yt(
                n,
                n.return,
                f
              );
            }
          }
        a & 64 && g0(n), a & 512 && Gn(n, n.return);
        break;
      case 3:
        if (kn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            sm(t, e);
          } catch (f) {
            Yt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && T0(n);
      case 26:
      case 5:
        kn(t, n), e === null && a & 4 && Sc(n), a & 512 && Gn(n, n.return);
        break;
      case 12:
        kn(t, n);
        break;
      case 31:
        kn(t, n), a & 4 && V0(t, n);
        break;
      case 13:
        kn(t, n), a & 4 && w0(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = ub.bind(
          null,
          n
        ), Gb(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || Te, !a) {
          var u = e !== null && e.memoizedState !== null || Lt;
          e = Te, s = Lt, Te = a, (Lt = u) && !s ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), zn(
            t,
            n,
            a
          )) : kn(t, n), Te = e, Lt = s;
        }
        break;
      case 30:
        kn(t, n), a & 512 && Gn(n, n.return);
        break;
      case 7:
        a & 512 && Gn(n, n.return);
      default:
        kn(t, n);
    }
  }
  function Rc(t, e) {
    for (t = t.child; t !== null; )
      R0(t, e), t = t.sibling;
  }
  function R0(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var a = n.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var s = t.stateNode, u = t.memoizedProps.style, f = u != null && u.hasOwnProperty("display") ? u.display : null;
            s.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (b) {
          Yt(t, t.return, b);
        }
        Nc(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Ut = !0;
        } catch (b) {
          Yt(t, t.return, b);
        }
        break;
      case 18:
        try {
          var m = t.stateNode;
          e ? xy(m, !0) : xy(t.stateNode, !1);
        } catch (b) {
          Yt(t, t.return, b);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Rc(t, e);
        break;
      default:
        Rc(t, e);
    }
  }
  function Nc(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              R0(n, a);
              break t;
            case 22:
              n.memoizedState === null && Nc(n, a);
              break t;
            default:
              Nc(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function N0(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, N0(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && tu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var te = null, Je = !1;
  function Dn(t, e, n) {
    for (n = n.child; n !== null; )
      _0(t, e, n), n = n.sibling;
  }
  function _0(t, e, n) {
    if (Ue && typeof Ue.onCommitFiberUnmount == "function")
      try {
        Ue.onCommitFiberUnmount(ei, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Lt || Ce(n, e), Dn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Lt && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Lt || Ce(n, e), hs(n);
        var a = te, s = Je;
        Ga(n.type) && (te = n.stateNode, Je = !1), Dn(
          t,
          e,
          n
        ), By(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), te = a, Je = s;
        break;
      case 5:
        Lt || Ce(n, e), hs(n);
      case 6:
        if (n.tag === 6 && hs(n), a = te, s = Je, te = null, Dn(
          t,
          e,
          n
        ), te = a, Je = s, te !== null)
          if (Je)
            try {
              (te.nodeType === 9 ? te.body : te.nodeName === "HTML" ? te.ownerDocument.body : te).removeChild(n.stateNode), Ut = !0;
            } catch (u) {
              Yt(
                n,
                e,
                u
              );
            }
          else
            try {
              te.removeChild(n.stateNode), Ut = !0;
            } catch (u) {
              Yt(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        te !== null && (Je ? (t = te, Ty(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), El(t)) : Ty(te, n.stateNode));
        break;
      case 4:
        a = te, s = Je, te = n.stateNode.containerInfo, Je = !0, Dn(
          t,
          e,
          n
        ), te = a, Je = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ua(2, n, e), Lt || Ua(4, n, e), Dn(
          t,
          e,
          n
        );
        break;
      case 1:
        Lt || (Ce(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && v0(
          n,
          e,
          a
        )), Dn(
          t,
          e,
          n
        );
        break;
      case 21:
        Dn(
          t,
          e,
          n
        );
        break;
      case 22:
        Lt = (a = Lt) || n.memoizedState !== null, Dn(
          t,
          e,
          n
        ), Lt = a;
        break;
      case 30:
        Ce(n, e), Dn(
          t,
          e,
          n
        );
        break;
      case 7:
        Lt || Ce(n, e), Dn(
          t,
          e,
          n
        );
        break;
      default:
        Dn(
          t,
          e,
          n
        );
    }
  }
  function V0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        El(t);
      } catch (n) {
        Yt(e, e.return, n);
      }
    }
  }
  function w0(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        El(t);
      } catch (n) {
        Yt(e, e.return, n);
      }
  }
  function PS(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new O0()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new O0()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Pu(t, e) {
    var n = PS(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var s = ob.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function Ye(t, e, n) {
    var a = e.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var u = a[s], f = t, m = e, b = m;
        t: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (Ga(b.type)) {
                te = b.stateNode, Je = !1;
                break t;
              }
              break;
            case 5:
              te = b.stateNode, Je = !1;
              break t;
            case 3:
            case 4:
              te = b.stateNode.containerInfo, Je = !0;
              break t;
          }
          b = b.return;
        }
        if (te === null) throw Error(r(160));
        _0(f, m, u), te = null, Je = !1, f = u.alternate, f !== null && (f.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        U0(e, t, n), e = e.sibling;
  }
  var On = null;
  function U0(t, e, n) {
    var a = t.alternate, s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (s & 4 && (a = t.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var u = 0; u < a.length; u++) {
            var f = a[u];
            f.ref.impl = f.nextImpl;
          }
        Ye(e, t, n), qe(t), s & 4 && (Ua(3, t, t.return), ds(3, t), Ua(5, t, t.return));
        break;
      case 1:
        Ye(e, t, n), qe(t), s & 512 && (Lt || a === null || Ce(a, a.return)), s & 64 && Te && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (u = On, Ye(e, t, n), qe(t), s & 512 && (Lt || a === null || Ce(a, a.return)), s & 4)
          if (s = a !== null ? a.memoizedState : null, n = t.memoizedState, a === null)
            if (n === null)
              if (t.stateNode === null)
                if (Te)
                  t.stateNode = vy(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, s = u.ownerDocument || u;
                    e: switch (e) {
                      case "title":
                        a = s.getElementsByTagName("title")[0], (!a || a[Yl] || a[Wt] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = s.createElement(e), s.head.insertBefore(
                          a,
                          s.querySelector("head > title")
                        )), De(a, e, n), a[Wt] = t, Se(a), e = a;
                        break t;
                      case "link":
                        if (u = Gy(
                          "link",
                          "href",
                          s
                        ).get(e + (n.href || ""))) {
                          for (f = 0; f < u.length; f++)
                            if (a = u[f], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              u.splice(f, 1);
                              break e;
                            }
                        }
                        a = s.createElement(e), De(a, e, n), s.head.appendChild(a);
                        break;
                      case "meta":
                        if (u = Gy(
                          "meta",
                          "content",
                          s
                        ).get(e + (n.content || ""))) {
                          for (f = 0; f < u.length; f++)
                            if (a = u[f], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              u.splice(f, 1);
                              break e;
                            }
                        }
                        a = s.createElement(e), De(a, e, n), s.head.appendChild(a);
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    a[Wt] = t, Se(a), e = a;
                  }
                  t.stateNode = e;
                }
              else
                Te || pf(u, t.type, t.stateNode);
            else
              t.stateNode = qy(
                u,
                n,
                t.memoizedProps
              );
          else
            s !== n ? (s === null ? (e = a.stateNode, e === null || Lt || e.parentNode.removeChild(e)) : s.count--, n === null ? Te || pf(u, t.type, t.stateNode) : qy(u, n, t.memoizedProps)) : n === null && t.stateNode !== null && bc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Ye(e, t, n), qe(t), s & 512 && (Lt || a === null || Ce(a, a.return)), a !== null && s & 4 && bc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = Zn, Zn = !1, Ye(e, t, n), Zn = u, qe(t), s & 512 && (Lt || a === null || Ce(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Yi(e, ""), Ut = !0;
          } catch (N) {
            Yt(t, t.return, N);
          }
        }
        s & 4 && t.stateNode != null && (e = t.memoizedProps, bc(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), s & 1024 && (Oc = !0);
        break;
      case 6:
        if (Ye(e, t, n), qe(t), s & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Ut = !0;
          } catch (N) {
            Yt(t, t.return, N);
          }
        }
        break;
      case 3:
        if (Ut = !1, fo = null, u = On, On = Es(e.containerInfo), Ye(e, t, n), On = u, qe(t), s & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            El(e.containerInfo);
          } catch (N) {
            Yt(t, t.return, N);
          }
        Oc && (Oc = !1, B0(t)), Ut = !1;
        break;
      case 4:
        s = Zn, Zn = Te, a = nh(), u = On, On = Es(
          t.stateNode.containerInfo
        ), Ye(e, t, n), qe(t), On = u, Ut && ms && (Ju = !0), Ut = a, Zn = s;
        break;
      case 12:
        Ye(e, t, n), qe(t);
        break;
      case 31:
        Ye(e, t, n), qe(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Pu(t, e)));
        break;
      case 13:
        Ye(e, t, n), qe(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Iu = we()), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Pu(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var m = Te, b = Lt, C = Zn;
        Te = m || u, Zn = C || u, Lt = b || f, Ye(e, t, n), Lt = b, Zn = C, Te = m, qe(t), s & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || a === null || f || Te || Lt || (e = f || Lt, n = Te, a = Lt, Te = u || Te, Lt = e, Ba(t, 2), Te = n, Lt = a), !u && Zn || Rc(t, u)), s & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, Pu(t, n))));
        break;
      case 19:
        Ye(e, t, n), qe(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Pu(t, e)));
        break;
      case 30:
        s & 512 && (Lt || a === null || Ce(a, a.return)), s = nh(), u = ms, f = (n & 335544064) === n, m = t.memoizedProps, ms = f && la(
          m.default,
          m.update
        ) !== "none", Ye(e, t, n), qe(t), f && a !== null && Ut && (t.flags |= 4), ms = u, Ut = s;
        break;
      case 21:
        break;
      case 7:
        s & 512 && (Lt || a === null || Ce(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        Ye(e, t, n), qe(t);
    }
  }
  function qe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (b0(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var s = t.return; s !== null; ) {
          if (vc(s)) {
            var u = s.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (gc(s)) break;
          s = s.return;
        }
        var f = a;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var m = n.stateNode, b = Tc(t);
            Qu(
              t,
              b,
              m,
              f
            );
            break;
          case 5:
            var C = n.stateNode;
            n.flags & 32 && (Yi(C, ""), n.flags &= -33);
            var N = Tc(t);
            Qu(
              t,
              N,
              C,
              f
            );
            break;
          case 3:
          case 4:
            var U = n.stateNode.containerInfo, A = Tc(t);
            xc(
              t,
              A,
              U,
              f
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (z) {
        Yt(t, t.return, z);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function B0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        B0(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, xl = !0, e.reset(), xl = !1), t = t.sibling;
      }
  }
  function ll(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        j0(e, t), e = e.sibling;
    else D0(e);
  }
  function j0(t, e) {
    var n = t.alternate;
    if (n === null) Ec(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (zc = Kn = !1, E0(), ll(e, t), !Kn && !Ju) {
            if (t = Xn, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var s = t[a + 1];
                Ay(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + s + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), zc = !0;
          }
          Xn = null;
          break;
        case 5:
          ll(e, t);
          break;
        case 4:
          a = Kn, Kn = !1, ll(e, t), Kn && (Ju = !0), Kn = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? Ec(t, !1) : ll(e, t));
          break;
        case 30:
          a = Kn, s = E0(), Kn = !1, ll(e, t), Kn && (t.flags |= 4);
          var u = t.memoizedProps, f = t.stateNode;
          e = ia(u, f), f = ia(n.memoizedProps, f);
          var m = la(u.default, u.update);
          m === "none" ? e = !1 : (u = n.memoizedState, n.memoizedState = null, n = t.child, ke = 0, e = Dc(
            t,
            n,
            e,
            f,
            m,
            u,
            !0
          ), ke !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (dl(
            t,
            t.memoizedProps.onUpdate
          ), Xn = s) : s !== null && (s.push.apply(s, Xn), Xn = s), Kn = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          ll(e, t);
      }
  }
  function kn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        z0(t, e.alternate, e), e = e.sibling;
  }
  function Ba(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, a = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ua(4, n, n.return), Ba(
            n,
            a
          );
          break;
        case 1:
          Ce(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && v0(
            n,
            n.return,
            s
          ), Ba(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && By(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          Ce(n, n.return), n.tag !== 5 && n.tag !== 27 || hs(n), Ba(
            n,
            a
          );
          break;
        case 6:
          hs(n);
          break;
        case 26:
          Ce(n, n.return), s = n.stateNode, n.memoizedState !== null || s === null || Lt || s.parentNode.removeChild(s), Ba(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && Ba(
            n,
            a
          );
          break;
        case 30:
          Ce(n, n.return), Ba(
            n,
            a
          );
          break;
        case 7:
          Ce(n, n.return);
        default:
          Ba(
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function zn(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var a = e.alternate, s = t, u = e, f = u.flags, m = (n & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          zn(
            s,
            u,
            n
          ), ds(4, u);
          break;
        case 1:
          if (zn(
            s,
            u,
            n
          ), a = u, s = a.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (N) {
              Yt(a, a.return, N);
            }
          if (a = u, s = a.updateQueue, s !== null) {
            var b = a.stateNode;
            try {
              var C = s.shared.hiddenCallbacks;
              if (C !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < C.length; s++)
                  lm(C[s], b);
            } catch (N) {
              Yt(a, a.return, N);
            }
          }
          m && f & 64 && g0(u), Gn(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && T0(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || S0(u), zn(
            s,
            u,
            n
          ), m && a === null && f & 4 && Sc(u), Gn(u, u.return);
          break;
        case 6:
          S0(u);
          break;
        case 26:
          b = u.stateNode, u.memoizedState !== null || b === null || Te || pf(
            Es(b.ownerDocument),
            u.type,
            b
          ), zn(
            s,
            u,
            n
          ), m && a === null && f & 4 && Sc(u), Gn(u, u.return);
          break;
        case 12:
          zn(
            s,
            u,
            n
          );
          break;
        case 31:
          zn(
            s,
            u,
            n
          ), m && f & 4 && V0(s, u);
          break;
        case 13:
          zn(
            s,
            u,
            n
          ), m && f & 4 && w0(s, u);
          break;
        case 22:
          u.memoizedState === null && zn(
            s,
            u,
            n
          ), Gn(u, u.return);
          break;
        case 30:
          zn(
            s,
            u,
            n
          ), Gn(u, u.return);
          break;
        case 7:
          Gn(u, u.return);
        default:
          zn(
            s,
            u,
            n
          );
      }
      e = e.sibling;
    }
  }
  function _c(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Il(n));
  }
  function Vc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Il(t));
  }
  function bn(t, e, n, a) {
    var s = (n & 335544064) === n;
    if (e.subtreeFlags & (s ? 10262 : 10256))
      for (e = e.child; e !== null; )
        L0(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else s && C0(e);
  }
  function L0(t, e, n, a) {
    var s = (n & 335544064) === n;
    s && e.alternate === null && e.return !== null && e.return.alternate !== null && ku(e);
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        bn(
          t,
          e,
          n,
          a
        ), u & 2048 && ds(9, e);
        break;
      case 1:
        bn(
          t,
          e,
          n,
          a
        );
        break;
      case 3:
        bn(
          t,
          e,
          n,
          a
        ), s && zc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && Il(u)));
        break;
      case 12:
        if (u & 2048) {
          bn(
            t,
            e,
            n,
            a
          ), u = e.stateNode;
          try {
            var f = e.memoizedProps, m = f.id, b = f.onPostCommit;
            typeof b == "function" && b(
              m,
              e.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (C) {
            Yt(e, e.return, C);
          }
        } else
          bn(
            t,
            e,
            n,
            a
          );
        break;
      case 31:
        bn(
          t,
          e,
          n,
          a
        );
        break;
      case 13:
        bn(
          t,
          e,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        f = e.stateNode, m = e.alternate, e.memoizedState !== null ? (s && m !== null && m.memoizedState === null && ku(m), f._visibility & 2 ? bn(
          t,
          e,
          n,
          a
        ) : ys(
          t,
          e
        )) : (s && m !== null && m.memoizedState !== null && ku(e), f._visibility & 2 ? bn(
          t,
          e,
          n,
          a
        ) : (f._visibility |= 2, sl(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && _c(m, e);
        break;
      case 24:
        bn(
          t,
          e,
          n,
          a
        ), u & 2048 && Vc(e.alternate, e);
        break;
      case 30:
        s && (u = e.alternate, u !== null && (Qn(u.child, !0), Qn(e.child, !0))), bn(
          t,
          e,
          n,
          a
        );
        break;
      default:
        bn(
          t,
          e,
          n,
          a
        );
    }
  }
  function sl(t, e, n, a, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, f = e, m = n, b = a, C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          sl(
            u,
            f,
            m,
            b,
            s
          ), ds(8, f);
          break;
        case 23:
          break;
        case 22:
          var N = f.stateNode;
          f.memoizedState !== null ? N._visibility & 2 ? sl(
            u,
            f,
            m,
            b,
            s
          ) : ys(
            u,
            f
          ) : (N._visibility |= 2, sl(
            u,
            f,
            m,
            b,
            s
          )), s && C & 2048 && _c(
            f.alternate,
            f
          );
          break;
        case 24:
          sl(
            u,
            f,
            m,
            b,
            s
          ), s && C & 2048 && Vc(f.alternate, f);
          break;
        default:
          sl(
            u,
            f,
            m,
            b,
            s
          );
      }
      e = e.sibling;
    }
  }
  function ys(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, s = a.flags;
        switch (a.tag) {
          case 22:
            ys(n, a), s & 2048 && _c(
              a.alternate,
              a
            );
            break;
          case 24:
            ys(n, a), s & 2048 && Vc(a.alternate, a);
            break;
          default:
            ys(n, a);
        }
        e = e.sibling;
      }
  }
  var Ti = 8192;
  function xi(t, e, n) {
    if (t.subtreeFlags & Ti)
      for (t = t.child; t !== null; )
        H0(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function H0(t, e, n) {
    switch (t.tag) {
      case 26:
        xi(
          t,
          e,
          n
        ), t.flags & Ti && (t.memoizedState !== null ? nT(
          n,
          On,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && Ky(n, t)));
        break;
      case 5:
        xi(
          t,
          e,
          n
        ), t.flags & Ti && (t = t.stateNode, (e & 335544128) === e && Ky(n, t));
        break;
      case 3:
      case 4:
        var a = On;
        On = Es(t.stateNode.containerInfo), xi(
          t,
          e,
          n
        ), On = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Ti, Ti = 16777216, xi(
          t,
          e,
          n
        ), Ti = a) : xi(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & Ti) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var s = t.stateNode;
          s.paired = null, ln === null && (ln = /* @__PURE__ */ new Map()), ln.set(a, s);
        }
        xi(
          t,
          e,
          n
        );
        break;
      default:
        xi(
          t,
          e,
          n
        );
    }
  }
  function Y0(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ps(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          xe = a, G0(
            a,
            t
          );
        }
      Y0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        q0(t), t = t.sibling;
  }
  function q0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ps(t), t.flags & 2048 && Ua(9, t, t.return);
        break;
      case 3:
        ps(t);
        break;
      case 12:
        ps(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, $u(t)) : ps(t);
        break;
      default:
        ps(t);
    }
  }
  function $u(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          xe = a, G0(
            a,
            t
          );
        }
      Y0(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ua(8, e, e.return), $u(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, $u(e));
          break;
        default:
          $u(e);
      }
      t = t.sibling;
    }
  }
  function G0(t, e) {
    for (; xe !== null; ) {
      var n = xe;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ua(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Il(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, xe = a;
      else
        t: for (n = t; xe !== null; ) {
          a = xe;
          var s = a.sibling, u = a.return;
          if (N0(a), a === n) {
            xe = null;
            break t;
          }
          if (s !== null) {
            s.return = u, xe = s;
            break t;
          }
          xe = u;
        }
    }
  }
  var $S = {
    getCacheForType: function(t) {
      var e = Ee(fe), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return Ee(fe).controller.signal;
    }
  }, WS = typeof WeakMap == "function" ? WeakMap : Map, jt = 0, Kt = null, Dt = null, Rt = 0, Ht = 0, sn = null, ja = !1, ul = !1, wc = !1, ma = 0, le = 0, La = 0, Ei = 0, Wu = 0, un = 0, ol = 0, gs = null, Fe = null, Uc = !1, Iu = 0, X0 = 0, to = 1 / 0, eo = null, Ha = null, ne = 0, Rn = null, Ai = null, Jn = 0, Bc = 0, jc = null, Q0 = null, rl = null, cl = null, fl = null, vs = 0, no = null;
  function on() {
    return (jt & 2) !== 0 && Rt !== 0 ? Rt & -Rt : tt.T !== null ? kc() : Ze();
  }
  function Z0() {
    if (un === 0)
      if ((Rt & 536870912) === 0 || At) {
        var t = ba;
        ba <<= 1, (ba & 3932160) === 0 && (ba = 262144), un = t;
      } else un = 536870912;
    return t = Ae.current, t !== null && (t.flags |= 32), un;
  }
  function dl(t, e) {
    if (e != null) {
      var n = t.stateNode, a = n.ref;
      a === null && (a = n.ref = My(
        ia(t.memoizedProps, n)
      )), cl === null && (cl = []), cl.push(e.bind(null, a));
    }
  }
  function Pe(t, e, n) {
    (t === Kt && (Ht === 2 || Ht === 9) || t.cancelPendingCommit !== null) && (hl(t, 0), Ya(
      t,
      Rt,
      un,
      !1
    )), H(t, n), ((jt & 2) === 0 || t !== Kt) && (t === Kt && ((jt & 2) === 0 && (Ei |= n), le === 4 && Ya(
      t,
      Rt,
      un,
      !1
    )), Fn(t));
  }
  function K0(t, e, n) {
    if ((jt & 6) !== 0) throw Error(r(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ta(t, e), s = a ? eb(t, e) : Hc(t, e, !0), u = a;
    do {
      if (s === 0) {
        ul && !a && Ya(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !IS(n)) {
          s = Hc(t, e, !1), u = !1;
          continue;
        }
        if (s === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var m = t;
              s = gs;
              var b = m.current.memoizedState.isDehydrated;
              if (b && (hl(m, f).flags |= 256), f = Hc(
                m,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (wc && !b) {
                  m.errorRecoveryDisabledLanes |= u, Ei |= u, s = 4;
                  break t;
                }
                u = Fe, Fe = s, u !== null && (Fe === null ? Fe = u : Fe.push.apply(
                  Fe,
                  u
                ));
              }
              s = f;
            }
            if (u = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          hl(t, 0), Ya(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = s, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              Ya(
                a,
                e,
                un,
                !ja
              );
              break t;
            case 2:
              Fe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (s = Iu + 300 - we(), 10 < s)) {
            if (Ya(
              a,
              e,
              un,
              !ja
            ), ai(a, 0, !0) !== 0) break t;
            Jn = e, a.timeoutHandle = lf(
              k0.bind(
                null,
                a,
                n,
                Fe,
                eo,
                Uc,
                e,
                un,
                Ei,
                ol,
                ja,
                u,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          k0(
            a,
            n,
            Fe,
            eo,
            Uc,
            e,
            un,
            Ei,
            ol,
            ja,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Fn(t);
  }
  function k0(t, e, n, a, s, u, f, m, b, C, N, U, A, z) {
    t.timeoutHandle = -1;
    var J = e.subtreeFlags, et = (u & 335544064) === u;
    if (U = null, (et || J & 8192 || (J & 16785408) === 16785408) && (U = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Hn
    }, ln = null, H0(
      e,
      u,
      U
    ), et && (J = U, et = t.containerInfo, et = (et.nodeType === 9 ? et : et.ownerDocument).__reactViewTransition, et != null && (J.count++, J.waitingForViewTransition = !0, J = Cs.bind(J), et.finished.then(J, J))), J = (u & 62914560) === u ? Iu - we() : (u & 4194048) === u ? X0 - we() : 0, J = aT(
      U,
      J
    ), J !== null)) {
      Jn = u, t.cancelPendingCommit = J(
        ey.bind(
          null,
          t,
          e,
          u,
          n,
          a,
          s,
          f,
          m,
          b,
          C,
          N,
          U,
          null,
          A,
          z
        )
      ), Ya(t, u, f, !C);
      return;
    }
    ey(
      t,
      e,
      u,
      n,
      a,
      s,
      f,
      m,
      b,
      C,
      N,
      U
    );
  }
  function IS(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var s = n[a], u = s.getSnapshot;
          s = s.value;
          try {
            if (!nn(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Ya(t, e, n, a) {
    e = Hl(t, e), e &= ~Wu, e &= ~Ei, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var s = e; 0 < s; ) {
      var u = 31 - Be(s), f = 1 << u;
      a[u] = -1, s &= ~f;
    }
    n !== 0 && bt(t, n, e);
  }
  function ao() {
    return (jt & 6) === 0 ? (Ss(0), !1) : !0;
  }
  function Lc() {
    if (Dt !== null) {
      if (Ht === 0)
        var t = Dt.return;
      else
        t = Dt, oa = fi = null, Kr(t), Ii = null, ns = 0, t = Dt;
      for (; t !== null; )
        p0(t.alternate, t), t = t.return;
      Dt = null;
    }
  }
  function hl(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, Eb(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Jn = 0, Lc(), Kt = t, Dt = n = sa(t.current, null), Rt = e, Ht = 0, sn = null, ja = !1, ul = Ta(t, e), wc = !1, ol = un = Wu = Ei = La = le = 0, Fe = gs = null, Uc = !1, ma = Hl(t, e), fu(), n;
  }
  function J0(t, e) {
    Tt = null, tt.H = Bu, e === Wi || e === xu ? (e = em(), Ht = 3) : e === Vr ? (e = em(), Ht = 4) : Ht = e === uc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, sn = e, Dt === null && (le = 1, ju(
      t,
      pn(e, t.current)
    ));
  }
  function F0() {
    var t = Ae.current;
    return t === null ? !0 : (Rt & 4194048) === Rt ? _e === null : (Rt & 62914560) === Rt || (Rt & 536870912) !== 0 ? t === _e : !1;
  }
  function P0() {
    var t = tt.H;
    return tt.H = Bu, t === null ? Bu : t;
  }
  function $0() {
    var t = tt.A;
    return tt.A = $S, t;
  }
  function io() {
    le = 4, ja || (Rt & 4194048) !== Rt && Ae.current !== null || (ul = !0), (La & 134217727) === 0 && (Ei & 134217727) === 0 || Kt === null || Ya(
      Kt,
      Rt,
      un,
      !1
    );
  }
  function Hc(t, e, n) {
    var a = jt;
    jt |= 2;
    var s = P0(), u = $0();
    (Kt !== t || Rt !== e) && (eo = null, hl(t, e)), e = !1;
    var f = le;
    t: do
      try {
        if (Ht !== 0 && Dt !== null) {
          var m = Dt, b = sn;
          switch (Ht) {
            case 8:
              Lc(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ae.current === null && (e = !0);
              var C = Ht;
              if (Ht = 0, sn = null, ml(t, m, b, C), n && ul) {
                f = 0;
                break t;
              }
              break;
            default:
              C = Ht, Ht = 0, sn = null, ml(t, m, b, C);
          }
        }
        tb(), f = le;
        break;
      } catch (N) {
        J0(t, N);
      }
    while (!0);
    return e && t.shellSuspendCounter++, oa = fi = null, jt = a, tt.H = s, tt.A = u, Dt === null && (Kt = null, Rt = 0, fu()), f;
  }
  function tb() {
    for (; Dt !== null; ) W0(Dt);
  }
  function eb(t, e) {
    var n = jt;
    jt |= 2;
    var a = P0(), s = $0();
    Kt !== t || Rt !== e ? (eo = null, to = we() + 500, hl(t, e)) : ul = Ta(
      t,
      e
    );
    t: do
      try {
        if (Ht !== 0 && Dt !== null) {
          e = Dt;
          var u = sn;
          e: switch (Ht) {
            case 1:
              Ht = 0, sn = null, ml(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Ih(u)) {
                Ht = 0, sn = null, I0(e);
                break;
              }
              e = function() {
                Ht !== 2 && Ht !== 9 || Kt !== t || (Ht = 7), Fn(t);
              }, u.then(e, e);
              break t;
            case 3:
              Ht = 7;
              break t;
            case 4:
              Ht = 5;
              break t;
            case 7:
              Ih(u) ? (Ht = 0, sn = null, I0(e)) : (Ht = 0, sn = null, ml(t, e, u, 7));
              break;
            case 5:
              var f = null;
              switch (Dt.tag) {
                case 26:
                  f = Dt.memoizedState;
                case 5:
                case 27:
                  var m = Dt;
                  if (f ? Qy(f) : m.stateNode.complete) {
                    Ht = 0, sn = null;
                    var b = m.sibling;
                    if (b !== null) Dt = b;
                    else {
                      var C = m.return;
                      C !== null ? (Dt = C, lo(C)) : Dt = null;
                    }
                    break e;
                  }
              }
              Ht = 0, sn = null, ml(t, e, u, 5);
              break;
            case 6:
              Ht = 0, sn = null, ml(t, e, u, 6);
              break;
            case 8:
              Lc(), le = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        nb();
        break;
      } catch (N) {
        J0(t, N);
      }
    while (!0);
    return oa = fi = null, tt.H = a, tt.A = s, jt = n, Dt !== null ? 0 : (Kt = null, Rt = 0, fu(), le);
  }
  function nb() {
    for (; Dt !== null && !Bl(); )
      W0(Dt);
  }
  function W0(t) {
    var e = m0(t.alternate, t, ma);
    t.memoizedProps = t.pendingProps, e === null ? lo(t) : Dt = e;
  }
  function I0(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = u0(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Rt
        );
        break;
      case 11:
        e = u0(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Rt
        );
        break;
      case 5:
        Kr(e);
        var a = e;
        a === be && (At ? (gu(a), a.tag === 5 && a.stateNode != null && (Pt = a.stateNode)) : (gu(a), At = !0));
      default:
        p0(n, e), e = Dt = Gh(e, ma), e = m0(n, e, ma);
    }
    t.memoizedProps = t.pendingProps, e === null ? lo(t) : Dt = e;
  }
  function ml(t, e, n, a) {
    oa = fi = null, Kr(e), Ii = null, ns = 0;
    var s = e.return;
    try {
      if (XS(
        t,
        s,
        e,
        n,
        Rt
      )) {
        le = 1, ju(
          t,
          pn(n, t.current)
        ), Dt = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw Dt = s, u;
      le = 1, ju(
        t,
        pn(n, t.current)
      ), Dt = null;
      return;
    }
    e.flags & 32768 ? (At || a === 1 ? t = !0 : ul || (Rt & 536870912) !== 0 ? t = !1 : (ja = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ae.current, a !== null && a.tag === 13 && (a.flags |= 16384))), ty(e, t)) : lo(e);
  }
  function lo(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ty(
          e,
          ja
        );
        return;
      }
      t = e.return;
      var n = kS(
        e.alternate,
        e,
        ma
      );
      if (n !== null) {
        Dt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Dt = e;
        return;
      }
      Dt = e = t;
    } while (e !== null);
    le === 0 && (le = 5);
  }
  function ty(t, e) {
    do {
      var n = JS(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Dt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Dt = t;
        return;
      }
      Dt = t = n;
    } while (t !== null);
    le = 6, Dt = null;
  }
  function ey(t, e, n, a, s, u, f, m, b, C, N, U) {
    t.cancelPendingCommit = null;
    do
      so();
    while (ne !== 0);
    if ((jt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === Kt && (Dt = Kt = null, Rt = 0), Ai = e, Rn = t, Jn = n, jc = s, Q0 = a, ab(
        t,
        e,
        n,
        f,
        m,
        b,
        U
      );
    }
  }
  function ab(t, e, n, a, s, u, f) {
    var m = e.lanes | e.childLanes;
    if (Bc = m, m |= br, dt(
      t,
      n,
      m,
      a,
      s,
      u
    ), cl = null, (n & 335544064) === n ? (fl = NS(t), a = 10262) : (fl = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, rb(ti, function() {
      return Xc(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Zu = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = tt.T, tt.T = null, s = mt.p, mt.p = 2, u = jt, jt |= 4;
      try {
        FS(t, e, n);
      } finally {
        jt = u, mt.p = s, tt.T = a;
      }
    }
    ne = 1, Zu ? rl = zb(
      f,
      t.containerInfo,
      fl,
      Yc,
      qc,
      lb,
      Gc,
      Xc,
      ib
    ) : (Yc(), qc(), Gc());
  }
  function ib(t) {
    if (ne !== 0) {
      var e = Rn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function lb() {
    ne === 3 && (ne = 0, j0(Ai, Rn), ne = 4);
  }
  function Yc() {
    if (ne === 1) {
      ne = 0;
      var t = Rn, e = Ai, n = Jn, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = tt.T, tt.T = null;
        var s = mt.p;
        mt.p = 2;
        var u = jt;
        jt |= 4;
        try {
          ms = Ju = !1, U0(e, t, n), n = ef;
          var f = _h(t.containerInfo), m = n.focusedElem, b = n.selectionRange;
          if (f !== m && m && m.ownerDocument && Nh(
            m.ownerDocument.documentElement,
            m
          )) {
            if (b !== null && yr(m)) {
              var C = b.start, N = b.end;
              if (N === void 0 && (N = C), "selectionStart" in m)
                m.selectionStart = C, m.selectionEnd = Math.min(
                  N,
                  m.value.length
                );
              else {
                var U = m.ownerDocument || document, A = U && U.defaultView || window;
                if (A.getSelection) {
                  var z = A.getSelection(), J = m.textContent.length, et = Math.min(b.start, J), xt = b.end === void 0 ? et : Math.min(b.end, J);
                  !z.extend && et > xt && (f = xt, xt = et, et = f);
                  var M = Rh(
                    m,
                    et
                  ), x = Rh(
                    m,
                    xt
                  );
                  if (M && x && (z.rangeCount !== 1 || z.anchorNode !== M.node || z.anchorOffset !== M.offset || z.focusNode !== x.node || z.focusOffset !== x.offset)) {
                    var O = U.createRange();
                    O.setStart(M.node, M.offset), z.removeAllRanges(), et > xt ? (z.addRange(O), z.extend(x.node, x.offset)) : (O.setEnd(x.node, x.offset), z.addRange(O));
                  }
                }
              }
            }
            for (U = [], z = m; z = z.parentNode; )
              z.nodeType === 1 && U.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < U.length; m++) {
              var w = U[m];
              w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
            }
          }
          xl = !!tf, ef = tf = null;
        } finally {
          jt = u, mt.p = s, tt.T = a;
        }
      }
      t.current = e, ne = 2;
    }
  }
  function qc() {
    if (ne === 2) {
      ne = 0;
      var t = Rn, e = Ai, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = tt.T, tt.T = null;
        var a = mt.p;
        mt.p = 2;
        var s = jt;
        jt |= 4;
        try {
          z0(t, e.alternate, e);
        } finally {
          jt = s, mt.p = a, tt.T = n;
        }
      }
      ne = 3;
    }
  }
  function Gc() {
    if (ne === 4 || ne === 3) {
      ne = 0;
      var t = rl;
      rl = null, jl();
      var e = Rn, n = Ai, a = Jn, s = Q0, u = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? ne = 5 : (ne = 0, Ai = Rn = null, ny(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (Ha = null), ae(a), n = n.stateNode, Ue && typeof Ue.onCommitFiberRoot == "function")
        try {
          Ue.onCommitFiberRoot(
            ei,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        n = tt.T, u = mt.p, mt.p = 2, tt.T = null;
        try {
          for (var f = e.onRecoverableError, m = 0; m < s.length; m++) {
            var b = s[m];
            f(b.value, {
              componentStack: b.stack
            });
          }
        } finally {
          tt.T = n, mt.p = u;
        }
      }
      if (s = cl, f = fl, fl = null, s !== null && (cl = null, f === null && (f = []), t !== null))
        for (b = 0; b < s.length; b++)
          n = (0, s[b])(
            f
          ), n !== void 0 && t.finished.finally(n);
      (Jn & 3) !== 0 && so(), Fn(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === no ? vs++ : (vs = 0, no = e) : (vs = 0, no = null), Ss(0);
    }
  }
  function ny(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Il(e)));
  }
  function so() {
    return rl !== null && (rl.skipTransition(), rl = null), Yc(), qc(), Gc(), Xc();
  }
  function Xc() {
    if (ne !== 5) return !1;
    var t = Rn, e = Bc;
    Bc = 0;
    var n = ae(Jn), a = tt.T, s = mt.p;
    try {
      mt.p = 32 > n ? 32 : n, tt.T = null, n = jc, jc = null;
      var u = Rn, f = Jn;
      if (ne = 0, Ai = Rn = null, Jn = 0, (jt & 6) !== 0) throw Error(r(331));
      var m = jt;
      if (jt |= 4, q0(u.current), L0(
        u,
        u.current,
        f,
        n
      ), jt = m, Ss(0, !1), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        try {
          Ue.onPostCommitFiberRoot(ei, u);
        } catch {
        }
      return !0;
    } finally {
      mt.p = s, tt.T = a, ny(t, e);
    }
  }
  function ay(t, e, n) {
    e = pn(n, e), e = sc(t.stateNode, e, 2), t = Na(t, e, 2), t !== null && (H(t, 2), Fn(t));
  }
  function Yt(t, e, n) {
    if (t.tag === 3)
      ay(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          ay(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ha === null || !Ha.has(a))) {
            t = pn(n, t), n = Im(2), a = Na(e, n, 2), a !== null && (t0(
              n,
              a,
              e,
              t
            ), H(a, 2), Fn(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Qc(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new WS();
      var s = /* @__PURE__ */ new Set();
      a.set(e, s);
    } else
      s = a.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), a.set(e, s));
    s.has(n) || (wc = !0, s.add(n), t = sb.bind(null, t, e, n), e.then(t, t));
  }
  function sb(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Kt === t && (Rt & n) === n && ((le === 4 || le === 3 && (Rt & 62914560) === Rt && 300 > we() - Iu) && (jt & 2) === 0 ? hl(t, 0) : Wu |= n, ol === Rt && (ol = 0)), Fn(t);
  }
  function iy(t, e) {
    e === 0 && (e = D()), t = oi(t, e), t !== null && (H(t, e), Fn(t));
  }
  function ub(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), iy(t, n);
  }
  function ob(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), iy(t, n);
  }
  function rb(t, e) {
    return ue(t, e);
  }
  var yl = null, pl = null, Zc = !1, uo = !1, Kc = !1, qa = 0;
  function Fn(t) {
    t !== pl && t.next === null && (pl === null ? yl = pl = t : pl = pl.next = t), uo = !0, Zc || (Zc = !0, fb());
  }
  function Ss(t, e) {
    if (!Kc && uo) {
      Kc = !0;
      do
        for (var n = !1, a = yl; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var f = a.suspendedLanes, m = a.pingedLanes;
              u = (1 << 31 - Be(42 | t) + 1) - 1, u &= s & ~(f & ~m), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, oy(a, u));
          } else
            u = Rt, u = ai(
              a,
              a === Kt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ta(a, u) || (n = !0, oy(a, u));
          a = a.next;
        }
      while (n);
      Kc = !1;
    }
  }
  function cb() {
    ly();
  }
  function ly() {
    uo = Zc = !1;
    var t = 0;
    qa !== 0 && xb() && (t = qa);
    for (var e = we(), n = null, a = yl; a !== null; ) {
      var s = a.next, u = sy(a, e);
      u === 0 ? (a.next = null, n === null ? yl = s : n.next = s, s === null && (pl = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (uo = !0)), a = s;
    }
    ne !== 0 && ne !== 5 || Ss(t), qa !== 0 && (qa = 0);
  }
  function sy(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - Be(u), m = 1 << f, b = s[f];
      b === -1 ? ((m & n) === 0 || (m & a) !== 0) && (s[f] = Ws(m, e)) : b <= e && (t.expiredLanes |= m), u &= ~m;
    }
    if (e = Kt, n = Rt, n = ai(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Ht === 2 || Ht === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && tn(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Ta(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && tn(a), ae(n)) {
        case 2:
        case 8:
          n = Fs;
          break;
        case 32:
          n = ti;
          break;
        case 268435456:
          n = Ps;
          break;
        default:
          n = ti;
      }
      return a = uy.bind(null, t), n = ue(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && tn(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function uy(t, e) {
    if (ne !== 0 && ne !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (so() && t.callbackNode !== n)
      return null;
    var a = Rt;
    return a = ai(
      t,
      t === Kt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (K0(t, a, e), sy(t, we()), t.callbackNode != null && t.callbackNode === n ? uy.bind(null, t) : null);
  }
  function oy(t, e) {
    if (so()) return null;
    K0(t, e, !0);
  }
  function fb() {
    Ab(function() {
      (jt & 6) !== 0 ? ue(
        wi,
        cb
      ) : ly();
    });
  }
  function kc() {
    if (qa === 0) {
      var t = mi;
      t === 0 && (t = Ui, Ui <<= 1, (Ui & 261888) === 0 && (Ui = 256)), qa = t;
    }
    return qa;
  }
  function ry(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : au(t);
  }
  function db(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = ry(
        (s[ce] || null).action
      ), f = a.submitter;
      f && (e = (e = f[ce] || null) ? ry(e.formAction) : f.getAttribute("formAction"), e !== null && (u = e, f = null));
      var m = new uu(
        "action",
        "action",
        null,
        a,
        s
      );
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (qa !== 0) {
                  var b = new FormData(s, f);
                  ec(
                    n,
                    {
                      pending: !0,
                      data: b,
                      method: s.method,
                      action: u
                    },
                    null,
                    b
                  );
                }
              } else
                typeof u == "function" && (m.preventDefault(), b = new FormData(s, f), ec(
                  n,
                  {
                    pending: !0,
                    data: b,
                    method: s.method,
                    action: u
                  },
                  u,
                  b
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Jc = 0; Jc < Sr.length; Jc++) {
    var Fc = Sr[Jc], hb = Fc.toLowerCase(), mb = Fc[0].toUpperCase() + Fc.slice(1);
    Cn(
      hb,
      "on" + mb
    );
  }
  Cn(Uh, "onAnimationEnd"), Cn(Bh, "onAnimationIteration"), Cn(jh, "onAnimationStart"), Cn("dblclick", "onDoubleClick"), Cn("focusin", "onFocus"), Cn("focusout", "onBlur"), Cn(ES, "onTransitionRun"), Cn(AS, "onTransitionStart"), Cn(MS, "onTransitionCancel"), Cn(Lh, "onTransitionEnd"), Li("onMouseEnter", ["mouseout", "mouseover"]), Li("onMouseLeave", ["mouseout", "mouseover"]), Li("onPointerEnter", ["pointerout", "pointerover"]), Li("onPointerLeave", ["pointerout", "pointerover"]), li(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), li(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), li("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), li(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), li(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), li(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var bs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), yb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bs)
  );
  function cy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], s = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var m = a[f], b = m.instance, C = m.currentTarget;
            if (m = m.listener, b !== u && s.isPropagationStopped())
              break t;
            u = m, s.currentTarget = C;
            try {
              u(s);
            } catch (N) {
              cu(N);
            }
            s.currentTarget = null, u = b;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (m = a[f], b = m.instance, C = m.currentTarget, m = m.listener, b !== u && s.isPropagationStopped())
              break t;
            u = m, s.currentTarget = C;
            try {
              u(s);
            } catch (N) {
              cu(N);
            }
            s.currentTarget = null, u = b;
          }
      }
    }
  }
  function Ot(t, e) {
    var n = e[Fd];
    n === void 0 && (n = e[Fd] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (fy(e, t, 2, !1), n.add(a));
  }
  function Pc(t, e, n) {
    var a = 0;
    e && (a |= 4), fy(
      n,
      t,
      a,
      e
    );
  }
  var oo = "_reactListening" + Math.random().toString(36).slice(2);
  function $c(t) {
    if (!t[oo]) {
      t[oo] = !0, Wd.forEach(function(n) {
        n !== "selectionchange" && (yb.has(n) || Pc(n, !1, t), Pc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[oo] || (e[oo] = !0, Pc("selectionchange", !1, e));
    }
  }
  function fy(t, e, n, a) {
    switch (tp(e)) {
      case 2:
        var s = uT;
        break;
      case 8:
        s = oT;
        break;
      default:
        s = vf;
    }
    n = s.bind(
      null,
      e,
      n,
      t
    ), s = void 0, !lr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), a ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1);
  }
  function Wc(t, e, n, a, s) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var m = a.stateNode.containerInfo;
          if (m === s) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var b = f.tag;
              if ((b === 3 || b === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = ii(m), f === null) return;
            if (b = f.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              a = u = f;
              continue t;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    fh(function() {
      var C = u, N = ar(n), U = [];
      t: {
        var A = Hh.get(t);
        if (A !== void 0) {
          var z = uu, J = t;
          switch (t) {
            case "keypress":
              if (lu(n) === 0) break t;
            case "keydown":
            case "keyup":
              z = I1;
              break;
            case "focusin":
              J = "focus", z = rr;
              break;
            case "focusout":
              J = "blur", z = rr;
              break;
            case "beforeblur":
            case "afterblur":
              z = rr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = mh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = q1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = iS;
              break;
            case Uh:
            case Bh:
            case jh:
              z = Q1;
              break;
            case Lh:
              z = sS;
              break;
            case "scroll":
            case "scrollend":
              z = H1;
              break;
            case "wheel":
              z = oS;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = K1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = ph;
              break;
            case "submit":
              z = nS;
              break;
            case "toggle":
            case "beforetoggle":
              z = cS;
          }
          var et = (e & 4) !== 0, xt = !et && (t === "scroll" || t === "scrollend"), M = et ? A !== null ? A + "Capture" : null : A;
          et = [];
          for (var x = C, O; x !== null; ) {
            var w = x;
            if (O = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || O === null || M === null || (w = Gl(x, M), w != null && et.push(
              Ts(x, w, O)
            )), xt) break;
            x = x.return;
          }
          0 < et.length && (A = new z(
            A,
            J,
            null,
            n,
            N
          ), U.push({ event: A, listeners: et }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (z = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", z && n !== nr && (J = n.relatedTarget || n.fromElement) && (ii(J) || J[hn]))
            break t;
          (A || z) && (J = N.window === N ? N : (z = N.ownerDocument) ? z.defaultView || z.parentWindow : window, A ? (z = n.relatedTarget || n.toElement, A = C, z = z ? ii(z) : null, z !== null && (xt = h(z), et = z.tag, z !== xt || et !== 5 && et !== 27 && et !== 6) && (z = null)) : (A = null, z = C), A !== z && (et = mh, w = "onMouseLeave", M = "onMouseEnter", x = "mouse", (t === "pointerout" || t === "pointerover") && (et = ph, w = "onPointerLeave", M = "onPointerEnter", x = "pointer"), xt = A == null ? J : ql(A), O = z == null ? J : ql(z), J = new et(
            w,
            x + "leave",
            A,
            n,
            N
          ), J.target = xt, J.relatedTarget = O, w = null, ii(N) === C && (et = new et(
            M,
            x + "enter",
            z,
            n,
            N
          ), et.target = O, et.relatedTarget = xt, w = et), xt = w, et = A && z ? rt(
            A,
            z,
            pb
          ) : null, A !== null && dy(
            U,
            J,
            A,
            et,
            !1
          ), z !== null && xt !== null && dy(
            U,
            xt,
            z,
            et,
            !0
          )));
        }
        t: {
          if (A = C ? ql(C) : window, z = A.nodeName && A.nodeName.toLowerCase(), z === "select" || z === "input" && A.type === "file")
            var I = Ah;
          else if (xh(A))
            if (Mh)
              I = bS;
            else {
              I = vS;
              var Nt = gS;
            }
          else
            z = A.nodeName, !z || z.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? C && er(C.elementType) && (I = Ah) : I = SS;
          if (I && (I = I(t, C))) {
            Eh(
              U,
              I,
              n,
              N
            );
            break t;
          }
          Nt && Nt(t, A, C);
        }
        switch (Nt = C ? ql(C) : window, t) {
          case "focusin":
            (xh(Nt) || Nt.contentEditable === "true") && (Qi = Nt, pr = C, Pl = null);
            break;
          case "focusout":
            Pl = pr = Qi = null;
            break;
          case "mousedown":
            gr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gr = !1, Vh(U, n, N);
            break;
          case "selectionchange":
            if (xS) break;
          case "keydown":
          case "keyup":
            Vh(U, n, N);
        }
        var lt;
        if (fr)
          t: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          Xi ? bh(t, n) && (ht = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ht = "onCompositionStart");
        ht && (gh && n.locale !== "ko" && (Xi || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && Xi && (lt = dh()) : (xa = N, sr = "value" in xa ? xa.value : xa.textContent, Xi = !0)), Nt = ro(C, ht), 0 < Nt.length && (ht = new yh(
          ht,
          t,
          null,
          n,
          N
        ), U.push({ event: ht, listeners: Nt }), lt ? ht.data = lt : (lt = Th(n), lt !== null && (ht.data = lt)))), (lt = dS ? hS(t, n) : mS(t, n)) && (ht = ro(C, "onBeforeInput"), 0 < ht.length && (Nt = new yh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          N
        ), U.push({
          event: Nt,
          listeners: ht
        }), Nt.data = lt)), db(
          U,
          t,
          C,
          n,
          N
        );
      }
      cy(U, e);
    });
  }
  function Ts(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function ro(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t, u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = Gl(t, n), s != null && a.unshift(
        Ts(t, s, u)
      ), s = Gl(t, e), s != null && a.push(
        Ts(t, s, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function pb(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function dy(t, e, n, a, s) {
    for (var u = e._reactName, f = []; n !== null && n !== a; ) {
      var m = n, b = m.alternate, C = m.stateNode;
      if (m = m.tag, b !== null && b === a) break;
      m !== 5 && m !== 26 && m !== 27 || C === null || (b = C, s ? (C = Gl(n, u), C != null && f.unshift(
        Ts(n, C, b)
      )) : s || (C = Gl(n, u), C != null && f.push(
        Ts(n, C, b)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var gb = /\r\n?/g, vb = /\u0000|\uFFFD/g;
  function hy(t) {
    return (typeof t == "string" ? t : "" + t).replace(gb, `
`).replace(vb, "");
  }
  function my(t, e) {
    return e = hy(e), hy(t) === e;
  }
  function qt(t, e, n, a, s, u) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          e === "body" || e === "textarea" && a === "" || Yi(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && Yi(t, "" + a);
        else return;
        break;
      case "className":
        nu(t, "class", a);
        break;
      case "tabIndex":
        nu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        nu(t, n, a);
        break;
      case "style":
        rh(t, a, u);
        return;
      case "data":
        if (e !== "object") {
          nu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = au(a), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (e !== "input" && qt(t, e, "name", s.name, s, null), qt(
            t,
            e,
            "formEncType",
            s.formEncType,
            s,
            null
          ), qt(
            t,
            e,
            "formMethod",
            s.formMethod,
            s,
            null
          ), qt(
            t,
            e,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (qt(t, e, "encType", s.encType, s, null), qt(t, e, "method", s.method, s, null), qt(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = au(a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = Hn);
        return;
      case "onScroll":
        a != null && Ot("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Ot("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(r(60));
            u?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = au(a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
        break;
      case "popover":
        Ot("beforetoggle", t), Ot("toggle", t), eu(t, "popover", a);
        break;
      case "xlinkActuate":
        na(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        na(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        na(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        na(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        na(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        na(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        na(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        na(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        na(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        eu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = j1.get(n) || n, eu(t, n, a);
        else return;
    }
    Ut = !0;
  }
  function Ic(t, e, n, a, s, u) {
    switch (n) {
      case "style":
        rh(t, a, u);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(r(60));
            u?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Yi(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Yi(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && Ot("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Ot("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = Hn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Id.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), u = n.slice(2, s ? n.length - 7 : void 0), e = t[ce] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(u, e, s), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(u, a, s);
              break t;
            }
            Ut = !0, n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : eu(t, n, a);
          }
        return;
    }
    Ut = !0;
  }
  function De(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ot("error", t), Ot("load", t);
        var a = !1, s = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  qt(t, e, u, f, n, null);
              }
          }
        s && qt(t, e, "srcSet", n.srcSet, n, null), a && qt(t, e, "src", n.src, n, null);
        return;
      case "input":
        Ot("invalid", t);
        var m = u = f = s = null, b = null, C = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var N = n[a];
            if (N != null)
              switch (a) {
                case "name":
                  s = N;
                  break;
                case "type":
                  f = N;
                  break;
                case "checked":
                  b = N;
                  break;
                case "defaultChecked":
                  C = N;
                  break;
                case "value":
                  u = N;
                  break;
                case "defaultValue":
                  m = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(r(137, e));
                  break;
                default:
                  qt(t, e, a, N, n, null);
              }
          }
        lh(
          t,
          u,
          m,
          b,
          C,
          f,
          s,
          !1
        );
        return;
      case "select":
        Ot("invalid", t), a = f = u = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (m = n[s], m != null))
            switch (s) {
              case "value":
                u = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                a = m;
              default:
                qt(t, e, s, m, n, null);
            }
        e = u, n = f, t.multiple = !!a, e != null ? Hi(t, !!a, e, !1) : n != null && Hi(t, !!a, n, !0);
        return;
      case "textarea":
        Ot("invalid", t), u = s = a = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (m = n[f], m != null))
            switch (f) {
              case "value":
                a = m;
                break;
              case "defaultValue":
                s = m;
                break;
              case "children":
                u = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(r(91));
                break;
              default:
                qt(t, e, f, m, n, null);
            }
        uh(t, a, s, u);
        return;
      case "option":
        for (b in n)
          n.hasOwnProperty(b) && (a = n[b], a != null) && (b === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : qt(t, e, b, a, n, null));
        return;
      case "dialog":
        Ot("beforetoggle", t), Ot("toggle", t), Ot("cancel", t), Ot("close", t);
        break;
      case "iframe":
      case "object":
        Ot("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < bs.length; a++)
          Ot(bs[a], t);
        break;
      case "image":
        Ot("error", t), Ot("load", t);
        break;
      case "details":
        Ot("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Ot("error", t), Ot("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in n)
          if (n.hasOwnProperty(C) && (a = n[C], a != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                qt(t, e, C, a, n, null);
            }
        return;
      default:
        if (er(e)) {
          for (N in n)
            n.hasOwnProperty(N) && (a = n[N], a !== void 0 && Ic(
              t,
              e,
              N,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && (a = n[m], a != null && qt(t, e, m, a, n, null));
  }
  var Sb = {};
  function bb(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, u = null, f = null, m = null, b = null, C = null, N = null;
        for (z in n) {
          var U = n[z];
          if (n.hasOwnProperty(z) && U != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = U;
              default:
                a.hasOwnProperty(z) || qt(t, e, z, null, a, U);
            }
        }
        for (var A in a) {
          var z = a[A];
          if (U = n[A], a.hasOwnProperty(A) && (z != null || U != null))
            switch (A) {
              case "type":
                z !== U && (Ut = !0), u = z;
                break;
              case "name":
                z !== U && (Ut = !0), s = z;
                break;
              case "checked":
                z !== U && (Ut = !0), C = z;
                break;
              case "defaultChecked":
                z !== U && (Ut = !0), N = z;
                break;
              case "value":
                z !== U && (Ut = !0), f = z;
                break;
              case "defaultValue":
                z !== U && (Ut = !0), m = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(r(137, e));
                break;
              default:
                z !== U && qt(
                  t,
                  e,
                  A,
                  z,
                  a,
                  U
                );
            }
        }
        Io(
          t,
          f,
          m,
          b,
          C,
          N,
          u,
          s
        );
        return;
      case "select":
        z = f = m = A = null;
        for (u in n)
          if (b = n[u], n.hasOwnProperty(u) && b != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                z = b;
              default:
                a.hasOwnProperty(u) || qt(
                  t,
                  e,
                  u,
                  null,
                  a,
                  b
                );
            }
        for (s in a)
          if (u = a[s], b = n[s], a.hasOwnProperty(s) && (u != null || b != null))
            switch (s) {
              case "value":
                u !== b && (Ut = !0), A = u;
                break;
              case "defaultValue":
                u !== b && (Ut = !0), m = u;
                break;
              case "multiple":
                u !== b && (Ut = !0), f = u;
              default:
                u !== b && qt(
                  t,
                  e,
                  s,
                  u,
                  a,
                  b
                );
            }
        e = m, n = f, a = z, A != null ? Hi(t, !!n, A, !1) : !!a != !!n && (e != null ? Hi(t, !!n, e, !0) : Hi(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        z = A = null;
        for (m in n)
          if (s = n[m], n.hasOwnProperty(m) && s != null && !a.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                qt(t, e, m, null, a, s);
            }
        for (f in a)
          if (s = a[f], u = n[f], a.hasOwnProperty(f) && (s != null || u != null))
            switch (f) {
              case "value":
                s !== u && (Ut = !0), A = s;
                break;
              case "defaultValue":
                s !== u && (Ut = !0), z = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== u && qt(t, e, f, s, a, u);
            }
        sh(t, A, z);
        return;
      case "option":
        for (var J in n)
          A = n[J], n.hasOwnProperty(J) && A != null && !a.hasOwnProperty(J) && (J === "selected" ? t.selected = !1 : qt(
            t,
            e,
            J,
            null,
            a,
            A
          ));
        for (b in a)
          A = a[b], z = n[b], a.hasOwnProperty(b) && A !== z && (A != null || z != null) && (b === "selected" ? (A !== z && (Ut = !0), t.selected = A && typeof A != "function" && typeof A != "symbol") : qt(
            t,
            e,
            b,
            A,
            a,
            z
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var et in n)
          A = n[et], n.hasOwnProperty(et) && A != null && !a.hasOwnProperty(et) && qt(t, e, et, null, a, A);
        for (C in a)
          if (A = a[C], z = n[C], a.hasOwnProperty(C) && A !== z && (A != null || z != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(r(137, e));
                break;
              default:
                qt(
                  t,
                  e,
                  C,
                  A,
                  a,
                  z
                );
            }
        return;
      default:
        if (er(e)) {
          for (var xt in n)
            A = n[xt], n.hasOwnProperty(xt) && A !== void 0 && !a.hasOwnProperty(xt) && Ic(
              t,
              e,
              xt,
              void 0,
              a,
              A
            );
          for (N in a)
            A = a[N], z = n[N], !a.hasOwnProperty(N) || A === z || A === void 0 && z === void 0 || Ic(
              t,
              e,
              N,
              A,
              a,
              z
            );
          return;
        }
    }
    for (var M in n)
      A = n[M], n.hasOwnProperty(M) && A != null && !a.hasOwnProperty(M) && qt(t, e, M, null, a, A);
    for (U in a)
      A = a[U], z = n[U], !a.hasOwnProperty(U) || A === z || A == null && z == null || qt(t, e, U, A, a, z);
  }
  function yy(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Tb() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var s = n[a], u = s.transferSize, f = s.initiatorType, m = s.duration;
        if (u && m && yy(f)) {
          for (f = 0, m = s.responseEnd, a += 1; a < n.length; a++) {
            var b = n[a], C = b.startTime;
            if (C > m) break;
            var N = b.transferSize, U = b.initiatorType;
            N && yy(U) && (b = b.responseEnd, f += N * (b < m ? 1 : (m - C) / (b - C)));
          }
          if (--a, e += 8 * (u + f) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var tf = null, ef = null;
  function xs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function py(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function gy(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function vy(t, e, n, a) {
    return n = xs(
      n
    ).createElement(t), n[Wt] = a, n[ce] = e, De(n, t, e), Se(n), n;
  }
  function nf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var af = null;
  function xb() {
    var t = window.event;
    return t && t.type === "popstate" ? t === af ? !1 : (af = t, !0) : (af = null, !1);
  }
  var lf = typeof setTimeout == "function" ? setTimeout : void 0, Eb = typeof clearTimeout == "function" ? clearTimeout : void 0, Sy = typeof Promise == "function" ? Promise : void 0, by = typeof requestAnimationFrame == "function" ? requestAnimationFrame : lf, Ab = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sy < "u" ? function(t) {
    return Sy.resolve(null).then(t).catch(Mb);
  } : lf;
  function Mb(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ga(t) {
    return t === "head";
  }
  function Ty(t, e) {
    var n = e, a = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(s), El(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          hf(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, hf(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, m = u.nodeName;
            u[Yl] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && hf(t.ownerDocument.body);
      n = s;
    } while (n);
    El(e);
  }
  function xy(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = a;
    } while (n);
  }
  function Ey(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var a = 1;
      else
        for (var s = a = 0; s < e.length; s++) {
          var u = e[s];
          0 < u.width && 0 < u.height && a++;
        }
      a === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function Ay(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function Cb(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function sf(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return Cb(e, n, t);
  }
  function Db(t) {
    return t.documentElement.clientHeight;
  }
  function Ob(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function zb(t, e, n, a, s, u, f, m, b) {
    var C = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var N = C.startViewTransition({
        update: function() {
          var A = C.defaultView, z = A.navigation && A.navigation.transition, J = C.fonts.status;
          a();
          var et = [];
          if (J === "loaded" && (Db(C), C.fonts.status === "loading" && et.push(C.fonts.ready)), J = et.length, t !== null)
            for (var xt = t.suspenseyImages, M = 0, x = 0; x < xt.length; x++) {
              var O = xt[x];
              if (!O.complete) {
                var w = O.getBoundingClientRect();
                if (0 < w.bottom && 0 < w.right && w.top < A.innerHeight && w.left < A.innerWidth) {
                  if (M += Zy(O), M > ho) {
                    et.length = J;
                    break;
                  }
                  O = new Promise(
                    Ob.bind(O)
                  ), et.push(O);
                }
              }
            }
          if (0 < et.length)
            return A = Promise.race([
              Promise.all(et),
              new Promise(function(I) {
                return setTimeout(I, 500);
              })
            ]).then(s, s), (z ? Promise.allSettled([z.finished, A]) : A).then(u, u);
          if (s(), z)
            return z.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      C.__reactViewTransition = N;
      var U = [];
      return N.ready.then(
        function() {
          for (var A = C.documentElement.getAnimations({
            subtree: !0
          }), z = 0; z < A.length; z++) {
            var J = A[z], et = J.effect, xt = et.pseudoElement;
            if (xt != null && xt.startsWith("::view-transition")) {
              U.push(J), J = et.getKeyframes();
              for (var M = xt = void 0, x = !0, O = 0; O < J.length; O++) {
                var w = J[O], I = w.width;
                if (xt === void 0) xt = I;
                else if (xt !== I) {
                  x = !1;
                  break;
                }
                if (I = w.height, M === void 0) M = I;
                else if (M !== I) {
                  x = !1;
                  break;
                }
                delete w.width, delete w.height, w.transform === "none" && delete w.transform;
              }
              x && xt !== void 0 && M !== void 0 && (et.setKeyframes(J), x = getComputedStyle(
                et.target,
                et.pseudoElement
              ), x.width !== xt || x.height !== M) && (x = J[0], x.width = xt, x.height = M, x = J[J.length - 1], x.width = xt, x.height = M, et.setKeyframes(J));
            }
          }
          f();
        },
        function(A) {
          C.__reactViewTransition === N && (C.__reactViewTransition = null);
          try {
            typeof A == "object" && A !== null && A.name === "InvalidStateError" && (A.message === "View transition was skipped because document visibility state is hidden." || A.message === "Skipping view transition because document visibility state has become hidden." || A.message === "Skipping view transition because viewport size changed." || A.message === "Transition was aborted because of invalid state") && (A = null), A !== null && b(A);
          } finally {
            a(), s(), f();
          }
        }
      ), N.finished.finally(function() {
        for (var A = 0; A < U.length; A++)
          U[A].cancel();
        C.__reactViewTransition === N && (C.__reactViewTransition = null), m();
      }), N;
    } catch {
      return a(), s(), f(), null;
    }
  }
  function Mi(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  Mi.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : W({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, Mi.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), a = [], s = 0; s < n.length; s++) {
      var u = n[s].effect;
      u !== null && u.target === t && u.pseudoElement === e && a.push(n[s]);
    }
    return a;
  }, Mi.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function My(t) {
    return {
      name: t,
      group: new Mi("group", t),
      imagePair: new Mi("image-pair", t),
      old: new Mi("old", t),
      new: new Mi("new", t)
    };
  }
  function rn(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  rn.prototype.addEventListener = function(t, e, n) {
    var a = null, s = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (Dy(u, t, e, n) === -1) {
        var f = this, m = e;
        n != null && typeof n != "boolean" && n.once === !0 && (m = function(b) {
          f.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, b) : e.handleEvent(b);
        }), a !== null && (s = f.removeEventListener.bind(
          f,
          t,
          e,
          n
        ), a.addEventListener("abort", s, { once: !0 }), s = a.removeEventListener.bind(a, "abort", s)), a = gl(n), u.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: m,
          cleanup: s
        }), p(
          this._fragmentFiber.child,
          !1,
          Rb,
          t,
          m,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function Rb(t, e, n, a) {
    return L(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  rn.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = Dy(
      a,
      t,
      e,
      n
    ), e !== -1)) {
      var s = a[e];
      n = s.attachedListener;
      var u = s.cleanup;
      s = gl(s.optionsOrUseCapture), p(
        this._fragmentFiber.child,
        !1,
        Nb,
        t,
        n,
        s
      ), a.splice(e, 1), u !== null && u();
    }
  };
  function Nb(t, e, n, a) {
    return L(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function gl(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Cy(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Dy(t, e, n, a) {
    if (t.length === 0) return -1;
    a = Cy(a);
    for (var s = 0; s < t.length; s++) {
      var u = t[s];
      if (u.type === e && u.listener === n && Cy(u.optionsOrUseCapture) === a)
        return s;
    }
    return -1;
  }
  rn.prototype.dispatchEvent = function(t) {
    var e = T(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = L(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var a = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          a.addEventListener(
            u.type,
            u.attachedListener,
            gl(u.optionsOrUseCapture)
          );
        }
      if (e.appendChild(a), t = a.dispatchEvent(t), n)
        for (s = 0; s < n.length; s++)
          u = n[s], a.removeEventListener(
            u.type,
            u.attachedListener,
            gl(u.optionsOrUseCapture)
          );
      return e.removeChild(a), t;
    }
    return e.dispatchEvent(t);
  }, rn.prototype.focus = function(t) {
    p(
      this._fragmentFiber.child,
      !0,
      Oy,
      t,
      void 0,
      void 0
    );
  };
  function Oy(t, e) {
    return t.tag === 6 ? !1 : (t = L(t), Xb(t, e));
  }
  rn.prototype.focusLast = function(t) {
    var e = [];
    p(
      this._fragmentFiber.child,
      !0,
      uf,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !Oy(e[n], t); n--) ;
  };
  function uf(t, e) {
    return e.push(t), !1;
  }
  rn.prototype.blur = function() {
    var t = T(
      this._fragmentFiber
    );
    t !== null && (t = L(t), t = xs(t).activeElement, t !== null && p(
      this._fragmentFiber.child,
      !1,
      _b,
      t,
      void 0,
      void 0
    ));
  };
  function _b(t, e) {
    return t.tag === 6 ? !1 : (t = L(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  rn.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), p(
      this._fragmentFiber.child,
      !1,
      Vb,
      t,
      void 0,
      void 0
    );
  };
  function Vb(t, e) {
    return t.tag === 6 || (t = L(t), e.observe(t)), !1;
  }
  rn.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), p(
        this._fragmentFiber.child,
        !1,
        wb,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < Nn.length; n++) {
        var a = Nn[n];
        a.fragmentInstance === this && a.observer === t ? t.unobserve(a.instance) : Nn[e++] = a;
      }
      Nn.length = e;
    }
  };
  function wb(t, e) {
    return t.tag === 6 || (t = L(t), e.unobserve(t)), !1;
  }
  var Nn = [], of = !1;
  function Ub(t, e, n) {
    Nn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), of || (of = !0, Qb(function() {
      of = !1;
      var a = Nn;
      Nn = [];
      for (var s = 0; s < a.length; s++) {
        var u = a[s];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  rn.prototype.getClientRects = function() {
    var t = [];
    return p(
      this._fragmentFiber.child,
      !1,
      Bb,
      t,
      void 0,
      void 0
    ), t;
  };
  function Bb(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = L(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  rn.prototype.getRootNode = function(t) {
    var e = T(
      this._fragmentFiber
    );
    return e === null ? this : L(e).getRootNode(t);
  }, rn.prototype.compareDocumentPosition = function(t) {
    var e = T(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    p(
      this._fragmentFiber.child,
      !1,
      uf,
      n,
      void 0,
      void 0
    );
    var a = L(e);
    if (n.length === 0) {
      if (n = a, V(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (n = e);
      }
      e = this._fragmentFiber;
      var s = a = n.compareDocumentPosition(t);
      return n === t ? s = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = _(e)[1], n === null ? s = Node.DOCUMENT_POSITION_PRECEDING : (t = L(n).compareDocumentPosition(
        t
      ), s = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), s |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = L(n[0]), s = L(n[n.length - 1]);
    var u = V(this._fragmentFiber) ? e.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = e.compareDocumentPosition(t), m = s.compareDocumentPosition(t), b = f & Node.DOCUMENT_POSITION_CONTAINED_BY || m & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return m = a && u && f & Node.DOCUMENT_POSITION_FOLLOWING && m & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || u && s === t || b || m ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !u && s === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || jb(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function jb(t, e, n, a, s) {
    var u = ii(s);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!u)
        t: {
          for (; u !== null; ) {
            if (u.tag === 7 && (u === e || u.alternate === e)) {
              n = !0;
              break t;
            }
            u = u.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return u = s.ownerDocument, s === u || s === u.documentElement || s === u.body;
      t: {
        for (u = e, e = T(e); u !== null; ) {
          if (!(u.tag !== 5 && u.tag !== 3 && u.tag !== 27 || u !== e && u.alternate !== e)) {
            u = !0;
            break t;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!u) && !(e = u === n) && (e = rt(
      n,
      u,
      ut
    ), e === null ? e = !1 : (p(
      e,
      !0,
      K,
      u,
      n
    ), u = G, G = null, e = u !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!u) && !(e = u === a) && (e = rt(
      a,
      u,
      ut
    ), e === null ? e = !1 : (p(
      e,
      !0,
      Q,
      u,
      a
    ), u = G, k = G = null, e = u !== null)), e) : !1;
  }
  function zy(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  rn.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var e = [];
    p(
      this._fragmentFiber.child,
      !1,
      uf,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var a = _(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || T(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = L(a), zy(t, n);
        return;
      }
      if (a = L(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var s = e[a];
      s.tag === 6 ? (s = L(s), zy(s, n)) : L(s).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function Lb(t, e) {
    return t = L(t), Ry(t, e), !1;
  }
  function Ry(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function Ny(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a];
        t.addEventListener(
          s.type,
          s.attachedListener,
          gl(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      for (var f = 0, m = 0; m < Nn.length; m++) {
        var b = Nn[m];
        (b.fragmentInstance !== e || b.observer !== u || b.instance !== t) && (Nn[f++] = b);
      }
      Nn.length = f, u.observe(t);
    }), Ry(t, e));
  }
  function Hb(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a];
        t.removeEventListener(
          s.type,
          s.attachedListener,
          gl(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      typeof u.rootMargin == "string" ? Ub(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function rf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rf(n), tu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Yb(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Yl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Tn(t.nextSibling), t === null) break;
    }
    return null;
  }
  function qb(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Tn(t.nextSibling), t === null)) return null;
    return t;
  }
  function _y(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Tn(t.nextSibling), t === null)) return null;
    return t;
  }
  function cf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function ff(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Gb(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Tn(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var df = null;
  function Vy(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Tn(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function wy(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Xb(t, e) {
    function n() {
      a = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var a = !1;
    try {
      t.ownerDocument.addEventListener("focus", n, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return a;
  }
  function Qb(t) {
    by(function() {
      by(function(e) {
        return t(e);
      });
    });
  }
  function Uy(t, e, n) {
    switch (e = xs(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function By(t, e, n) {
    for (var a in n) {
      var s = n[a];
      n.hasOwnProperty(a) && s != null && qt(t, e, a, null, Sb, s);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Hn && (t.onclick = null), tu(t);
  }
  function hf(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    tu(t);
  }
  var xn = /* @__PURE__ */ new Map(), jy = /* @__PURE__ */ new Set();
  function Es(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ya = mt.d;
  mt.d = {
    f: Zb,
    r: Kb,
    D: kb,
    C: Jb,
    L: Fb,
    m: Pb,
    X: Wb,
    S: $b,
    M: Ib
  };
  function Zb() {
    var t = ya.f(), e = ao();
    return t || e;
  }
  function Kb(t) {
    var e = Bi(t);
    e !== null && e.tag === 5 && e.type === "form" ? Hm(e) : ya.r(t);
  }
  var vl = typeof document > "u" ? null : document;
  function Ly(t, e, n) {
    var a = vl;
    if (a && typeof e == "string" && e) {
      var s = mn(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), jy.has(s) || (jy.add(s), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(s) === null && (e = a.createElement("link"), De(e, "link", t), Se(e), a.head.appendChild(e)));
    }
  }
  function kb(t) {
    ya.D(t), Ly("dns-prefetch", t, null);
  }
  function Jb(t, e) {
    ya.C(t, e), Ly("preconnect", t, e);
  }
  function Fb(t, e, n) {
    ya.L(t, e, n);
    var a = vl;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + mn(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + mn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + mn(
        n.imageSizes
      ) + '"]')) : s += '[href="' + mn(t) + '"]';
      var u = s;
      switch (e) {
        case "style":
          u = Sl(t);
          break;
        case "script":
          u = bl(t);
      }
      if (!(xn.has(u) || (t = W(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), xn.set(u, t), a.querySelector(s) !== null || e === "style" && a.querySelector(As(u)) || e === "script" && a.querySelector(Ms(u))))) {
        var f = a.createElement("link");
        De(f, "link", t), e === "style" && (f[Is] = !0, f.onload = f.onerror = function() {
          $d(f);
        }), Se(f), a.head.appendChild(f);
      }
    }
  }
  function Pb(t, e) {
    ya.m(t, e);
    var n = vl;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", s = 'link[rel="modulepreload"][as="' + mn(a) + '"][href="' + mn(t) + '"]', u = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = bl(t);
      }
      if (!xn.has(u) && (t = W({ rel: "modulepreload", href: t }, e), xn.set(u, t), n.querySelector(s) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ms(u)))
              return;
        }
        a = n.createElement("link"), De(a, "link", t), Se(a), n.head.appendChild(a);
      }
    }
  }
  function $b(t, e, n) {
    ya.S(t, e, n);
    var a = vl;
    if (a && t) {
      var s = ji(a).hoistableStyles, u = Sl(t);
      e = e || "default";
      var f = s.get(u);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = a.querySelector(
          As(u)
        ))
          m.loading = 5;
        else {
          t = W(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = xn.get(u)) && mf(t, n);
          var b = f = a.createElement("link");
          Se(b), De(b, "link", t), b._p = new Promise(function(C, N) {
            b.onload = C, b.onerror = N;
          }), b.addEventListener("load", function() {
            m.loading |= 1;
          }), b.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, co(f, e, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: m
        }, s.set(u, f);
      }
    }
  }
  function Wb(t, e) {
    ya.X(t, e);
    var n = vl;
    if (n && t) {
      var a = ji(n).hoistableScripts, s = bl(t), u = a.get(s);
      u || (u = n.querySelector(Ms(s)), u || (t = W({ src: t, async: !0 }, e), (e = xn.get(s)) && yf(t, e), u = n.createElement("script"), Se(u), De(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function Ib(t, e) {
    ya.M(t, e);
    var n = vl;
    if (n && t) {
      var a = ji(n).hoistableScripts, s = bl(t), u = a.get(s);
      u || (u = n.querySelector(Ms(s)), u || (t = W({ src: t, async: !0, type: "module" }, e), (e = xn.get(s)) && yf(t, e), u = n.createElement("script"), Se(u), De(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function Hy(t, e, n, a) {
    var s = (s = Ne.current) ? Es(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Sl(n.href), e = ji(
          s
        ).hoistableStyles, a = e.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = Sl(n.href);
          var u = ji(
            s
          ).hoistableStyles, f = u.get(t);
          if (f || (s = s.ownerDocument || s, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, f), (u = s.querySelector(
            As(t)
          )) ? u._p || (f.instance = u, f.state.loading = 5) : (u = xn.get(t), u || (u = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, xn.set(t, u)), tT(
            s,
            t,
            u,
            f.state
          ))), e && a === null)
            throw Error(r(528, ""));
          return f;
        }
        if (e && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = bl(n), e = ji(
          s
        ).hoistableScripts, a = e.get(n), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function Sl(t) {
    return 'href="' + mn(t) + '"';
  }
  function As(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Yy(t) {
    return W({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function tT(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[Is] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[Is] = !0, e.onload = e.onerror = $d.bind(null, e), De(e, "link", n), Se(e), t.head.appendChild(e);
    a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function bl(t) {
    return '[src="' + mn(t) + '"]';
  }
  function Ms(t) {
    return "script[async]" + t;
  }
  function qy(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + mn(n.href) + '"]'
          );
          if (a)
            return e.instance = a, Se(a), a;
          var s = W({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Se(a), De(a, "style", s), co(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          s = Sl(n.href);
          var u = t.querySelector(
            As(s)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Se(u), u;
          a = Yy(n), (s = xn.get(s)) && mf(a, s), u = (t.ownerDocument || t).createElement("link"), Se(u);
          var f = u;
          return f._p = new Promise(function(m, b) {
            f.onload = m, f.onerror = b;
          }), De(u, "link", a), e.state.loading |= 4, co(u, n.precedence, t), e.instance = u;
        case "script":
          return u = bl(n.src), (s = t.querySelector(
            Ms(u)
          )) ? (e.instance = s, Se(s), s) : (a = n, (s = xn.get(u)) && (a = W({}, n), yf(a, s)), t = t.ownerDocument || t, s = t.createElement("script"), Se(s), De(s, "link", a), t.head.appendChild(s), e.instance = s);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, co(a, n.precedence, t));
    return e.instance;
  }
  function co(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = a.length ? a[a.length - 1] : null, u = s, f = 0; f < a.length; f++) {
      var m = a[f];
      if (m.dataset.precedence === e) u = m;
      else if (u !== s) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function mf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function yf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var fo = null;
  function Gy(t, e, n) {
    if (fo === null) {
      var a = /* @__PURE__ */ new Map(), s = fo = /* @__PURE__ */ new Map();
      s.set(n, a);
    } else
      s = fo, a = s.get(n), a || (a = /* @__PURE__ */ new Map(), s.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[Yl] || u[Wt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(e) || "";
        f = t + f;
        var m = a.get(f);
        m ? m.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function pf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function eT(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Xy(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Qy(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Zy(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Ky(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Zy(e), t.suspenseyImages.push(e)), t = iT.bind(t), e.decode().then(t, t));
  }
  function nT(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Sl(a.href), u = e.querySelector(
          As(s)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Cs.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, Se(u);
          return;
        }
        u = e.ownerDocument || e, a = Yy(a), (s = xn.get(s)) && mf(a, s), u = u.createElement("link"), Se(u);
        var f = u;
        f._p = new Promise(function(m, b) {
          f.onload = m, f.onerror = b;
        }), De(u, "link", a), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Cs.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var ho = 0;
  function aT(t, e) {
    return t.stylesheets && t.count === 0 && yo(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && yo(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && ho === 0 && (ho = 62500 * Tb());
      var s = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && yo(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > ho ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(s);
      };
    } : null;
  }
  function ky(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) yo(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function Cs() {
    this.count--, ky(this);
  }
  function iT() {
    this.imgCount--, ky(this);
  }
  var mo = null;
  function yo(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, mo = /* @__PURE__ */ new Map(), e.forEach(lT, t), mo = null, Cs.call(t));
  }
  function lT(t, e) {
    if (!(e.state.loading & 4)) {
      var n = mo.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), mo.set(t, n);
        for (var s = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < s.length; u++) {
          var f = s[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      s = e.instance, f = s.getAttribute("data-precedence"), u = n.get(f) || a, u === a && n.set(null, s), n.set(f, s), this.count++, a = Cs.bind(this), s.addEventListener("load", a), s.addEventListener("error", a), u ? u.parentNode.insertBefore(s, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Tl = {
    $$typeof: st,
    Provider: null,
    Consumer: null,
    _currentValue: fn,
    _currentValue2: fn,
    _threadCount: 0
  };
  function sT(t, e, n, a, s, u, f, m, b) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = R(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = R(0), this.hiddenUpdates = R(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jy(t, e, n, a, s, u, f, m, b, C, N, U) {
    return t = new sT(
      t,
      e,
      n,
      f,
      b,
      C,
      N,
      U,
      m
    ), e = 1, u === !0 && (e |= 24), u = Ke(3, null, null, e), t.current = u, u.stateNode = t, e = Rr(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, wr(u), t;
  }
  function Fy(t) {
    return t ? (t = ki, t) : ki;
  }
  function Py(t, e, n, a, s, u) {
    s = Fy(s), a.context === null ? a.context = s : a.pendingContext = s, a = Ra(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = Na(t, a, e), n !== null && (Pe(n, t, e), as(n, t, e));
  }
  function $y(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function gf(t, e) {
    $y(t, e), (t = t.alternate) && $y(t, e);
  }
  function Wy(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = oi(t, 67108864);
      e !== null && Pe(e, t, 67108864), gf(t, 67108864);
    }
  }
  function Iy(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = on();
      e = Zt(e);
      var n = oi(t, e);
      n !== null && Pe(n, t, e), gf(t, e);
    }
  }
  var xl = !0;
  function uT(t, e, n, a) {
    var s = tt.T;
    tt.T = null;
    var u = mt.p;
    try {
      mt.p = 2, vf(t, e, n, a);
    } finally {
      mt.p = u, tt.T = s;
    }
  }
  function oT(t, e, n, a) {
    var s = tt.T;
    tt.T = null;
    var u = mt.p;
    try {
      mt.p = 8, vf(t, e, n, a);
    } finally {
      mt.p = u, tt.T = s;
    }
  }
  function vf(t, e, n, a) {
    if (xl) {
      var s = Sf(a);
      if (s === null)
        Wc(
          t,
          e,
          a,
          po,
          n
        ), ep(t, a);
      else if (cT(
        s,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (ep(t, a), e & 4 && -1 < rT.indexOf(t)) {
        for (; s !== null; ) {
          var u = Bi(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = Mn(u.pendingLanes);
                  if (f !== 0) {
                    var m = u;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var b = 1 << 31 - Be(f);
                      m.entanglements[1] |= b, f &= ~b;
                    }
                    Fn(u), (jt & 6) === 0 && (to = we() + 500, Ss(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = oi(u, 2), m !== null && Pe(m, u, 2), ao(), gf(u, 2);
            }
          if (u = Sf(a), u === null && Wc(
            t,
            e,
            a,
            po,
            n
          ), u === s) break;
          s = u;
        }
        s !== null && a.stopPropagation();
      } else
        Wc(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function Sf(t) {
    return t = ar(t), bf(t);
  }
  var po = null;
  function bf(t) {
    if (po = null, t = ii(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return po = t, null;
  }
  function tp(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Js()) {
          case wi:
            return 2;
          case Fs:
            return 8;
          case ti:
          case Ll:
            return 32;
          case Ps:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Tf = !1, Xa = null, Qa = null, Za = null, Ds = /* @__PURE__ */ new Map(), Os = /* @__PURE__ */ new Map(), Ka = [], rT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ep(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Xa = null;
        break;
      case "dragenter":
      case "dragleave":
        Qa = null;
        break;
      case "mouseover":
      case "mouseout":
        Za = null;
        break;
      case "pointerover":
      case "pointerout":
        Ds.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Os.delete(e.pointerId);
    }
  }
  function zs(t, e, n, a, s, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [s]
    }, e !== null && (e = Bi(e), e !== null && Wy(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function cT(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return Xa = zs(
          Xa,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "dragenter":
        return Qa = zs(
          Qa,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "mouseover":
        return Za = zs(
          Za,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "pointerover":
        var u = s.pointerId;
        return Ds.set(
          u,
          zs(
            Ds.get(u) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
      case "gotpointercapture":
        return u = s.pointerId, Os.set(
          u,
          zs(
            Os.get(u) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
    }
    return !1;
  }
  function np(t) {
    var e = ii(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, ee(t.priority, function() {
              Iy(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = y(n), e !== null) {
            t.blockedOn = e, ee(t.priority, function() {
              Iy(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function go(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Sf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        nr = a, n.target.dispatchEvent(a), nr = null;
      } else
        return e = Bi(n), e !== null && Wy(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function ap(t, e, n) {
    go(t) && n.delete(e);
  }
  function fT() {
    Tf = !1, Xa !== null && go(Xa) && (Xa = null), Qa !== null && go(Qa) && (Qa = null), Za !== null && go(Za) && (Za = null), Ds.forEach(ap), Os.forEach(ap);
  }
  function vo(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Tf || (Tf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      fT
    )));
  }
  var So = null;
  function ip(t) {
    So !== t && (So = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        So === t && (So = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], s = t[e + 2];
          if (typeof a != "function") {
            if (bf(a || n) === null)
              continue;
            break;
          }
          var u = Bi(n);
          u !== null && (t.splice(e, 3), e -= 3, ec(
            u,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: a
            },
            a,
            s
          ));
        }
      }
    ));
  }
  function El(t) {
    function e(b) {
      return vo(b, t);
    }
    Xa !== null && vo(Xa, t), Qa !== null && vo(Qa, t), Za !== null && vo(Za, t), Ds.forEach(e), Os.forEach(e);
    for (var n = 0; n < Ka.length; n++) {
      var a = Ka[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ka.length && (n = Ka[0], n.blockedOn === null); )
      np(n), n.blockedOn === null && Ka.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var s = n[a], u = n[a + 1], f = s[ce] || null;
        if (typeof u == "function")
          f || ip(n);
        else if (f) {
          var m = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, f = u[ce] || null)
              m = f.formAction;
            else if (bf(s) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? n[a + 1] = m : (n.splice(a, 3), a -= 3), ip(n);
        }
      }
  }
  function lp() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(f) {
            return s = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      s !== null && (s(), s = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, s = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null);
      };
    }
  }
  function xf(t) {
    this._internalRoot = t;
  }
  bo.prototype.render = xf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, a = on();
    Py(n, a, t, e, null, null);
  }, bo.prototype.unmount = xf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Py(t.current, 2, null, t, null, null), ao(), e[hn] = null;
    }
  };
  function bo(t) {
    this._internalRoot = t;
  }
  bo.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Ze();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ka.length && e !== 0 && e < Ka[n].priority; n++) ;
      Ka.splice(n, 0, t), n === 0 && np(t);
    }
  };
  var sp = l.version;
  if (sp !== "19.3.1")
    throw Error(
      r(
        527,
        sp,
        "19.3.1"
      )
    );
  mt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = S(e), t = t !== null ? g(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var dT = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: tt,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var To = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!To.isDisabled && To.supportsFiber)
      try {
        ei = To.inject(
          dT
        ), Ue = To;
      } catch {
      }
  }
  return Ns.createRoot = function(t, e) {
    if (!c(t)) throw Error(r(299));
    var n = !1, a = "", s = Fm, u = Pm, f = $m;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = Jy(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      s,
      u,
      f,
      lp
    ), t[hn] = e.current, $c(t), new xf(e);
  }, Ns.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(r(299));
    var a = !1, s = "", u = Fm, f = Pm, m = $m, b = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.formState !== void 0 && (b = n.formState)), e = Jy(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      s,
      b,
      u,
      f,
      m,
      lp
    ), e.context = Fy(null), n = e.current, a = on(), a = Zt(a), s = Ra(a), s.callback = null, Na(n, s, a), n = a, e.current.lanes = n, H(e, n), Fn(e), t[hn] = e.current, $c(t), new bo(e);
  }, Ns.version = "19.3.1", Ns;
}
var pp;
function TT() {
  if (pp) return Af.exports;
  pp = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Af.exports = bT(), Af.exports;
}
var Gg = TT(), B = Td(), xT = qg();
const ET = 1.35, AT = 0.95, MT = 1.22, Oi = 0.8, CT = 0.34, Ff = -6, ws = 0.08, DT = 0.15, OT = 34, zT = 1024, zf = 1400, Pn = 0, Rf = 1, Nf = 2, gp = { add: "Add to order", close: "Close", previous: "Previous plate", next: "Next plate", pause: "Pause belt" }, vp = [
  { ring: "border-chart-1", dot: "bg-chart-1" },
  { ring: "border-chart-2", dot: "bg-chart-2" },
  { ring: "border-chart-3", dot: "bg-chart-3" },
  { ring: "border-chart-4", dot: "bg-chart-4" },
  { ring: "border-chart-5", dot: "bg-chart-5" }
], RT = "[--belt:color-mix(in_oklab,var(--color-foreground)_78%,var(--color-background))] dark:[--belt:color-mix(in_oklab,var(--color-foreground)_16%,var(--color-background))] [--belt-side:color-mix(in_oklab,var(--color-foreground)_92%,var(--color-background))] dark:[--belt-side:color-mix(in_oklab,var(--color-foreground)_7%,var(--color-background))] [--rail:color-mix(in_oklab,var(--color-muted-foreground)_45%,white)] dark:[--rail:color-mix(in_oklab,var(--color-muted-foreground)_72%,var(--color-background))] [--island:color-mix(in_oklab,var(--color-muted-foreground)_16%,var(--color-background))] dark:[--island:color-mix(in_oklab,var(--color-foreground)_13%,var(--color-background))] [--island-low:color-mix(in_oklab,var(--color-muted-foreground)_27%,var(--color-background))] dark:[--island-low:color-mix(in_oklab,var(--color-foreground)_8%,var(--color-background))] [--island-wall:color-mix(in_oklab,var(--color-muted-foreground)_42%,var(--color-background))] dark:[--island-wall:color-mix(in_oklab,var(--color-foreground)_5%,var(--color-background))]";
function NT() {
  return { offset: 0, v: 0, mode: Pn, target: 0, lift: [], vlift: [], z: [], lane: [], raf: 0, last: 0, visible: !0, init: !1, touched: !1, l: 0, center: -1, published: "", px: 0, py: 0, inside: !1, lock: !1, lockX: 0, lockY: 0 };
}
function Ja(i, l, o) {
  return Math.max(l, Math.min(o, i));
}
function Pf(i) {
  return vp[Ja(Math.round(i ?? 1), 1, 5) - 1] ?? vp[0];
}
function Xs(i, l) {
  const { s: o, r } = i;
  let c = (l % i.l + i.l) % i.l;
  if (c < o) return { x: o / 2 - c, z: r, nx: 0, nz: 1, tx: -1, tz: 0 };
  c -= o;
  const h = Math.PI * r;
  if (c < h) {
    const S = c / r, g = Math.sin(S), p = Math.cos(S);
    return { x: -o / 2 - r * g, z: r * p, nx: -g, nz: p, tx: -p, tz: -g };
  }
  if (c -= h, c < o) return { x: -o / 2 + c, z: -r, nx: 0, nz: -1, tx: 1, tz: 0 };
  c -= o;
  const d = Math.min(Math.PI, c / r), y = Math.sin(d), v = Math.cos(d);
  return { x: o / 2 + r * y, z: -r * v, nx: y, nz: -v, tx: v, tz: y };
}
function ga(i, l, o) {
  const r = i.a + i.b * o;
  return { x: i.cx + l * r, y: i.ym + Oi * (i.a * o + i.b * o * o / 2), k: r };
}
function Sp(i, l, o, r) {
  const c = Math.max(1, l) * ET * o, h = Math.min(AT * o, c / (2 * Math.PI)), d = Math.max(0, (c - 2 * Math.PI * h) / 2), y = { width: i, height: 0, d: o, r: h, s: d, l: c, pitch: c / Math.max(1, l), n: Math.max(1, l), kb: r, cx: i / 2, ym: 0, a: (1 + r) / 2, b: (1 - r) / (2 * h), band: MT * o, slats: Math.max(10, Math.round(c / (CT * o))), side: Math.max(3, o * 0.07), edgeTop: 0 };
  let v = 1 / 0, S = -1 / 0, g = 1 / 0;
  for (let p = 0; p < 120; p++) {
    const T = Xs(y, p / 120 * c), V = ga(y, T.x + T.nx * y.band / 2, T.z + T.nz * y.band / 2), _ = ga(y, T.x, T.z), j = _.k * o * Oi / 2;
    g = Math.min(g, V.y), v = Math.min(v, V.y, _.y + Ff / 100 * j * 2 - j * (1 + ws) - OT), S = Math.max(S, V.y + y.side + o * 0.06, _.y + j + o * 0.08);
  }
  return y.ym = Math.ceil(-v) + 2, y.height = Math.ceil(S - v) + 4, y.edgeTop = g + y.ym, y;
}
function _T(i) {
  let l = 0;
  for (let o = 0; o < 120; o++) {
    const r = Xs(i, o / 120 * i.l), c = ga(i, r.x + r.nx * i.band / 2, r.z + r.nz * i.band / 2), h = ga(i, r.x, r.z);
    l = Math.max(l, Math.abs(c.x - i.cx) + 3, Math.abs(h.x - i.cx) + h.k * i.d * (1 + ws) / 2);
  }
  return l;
}
function _f(i, l) {
  let o = "";
  for (let c = 0; c < 168; c++) {
    const h = Xs(i, c / 168 * i.l), d = ga(i, h.x + h.nx * l, h.z + h.nz * l);
    o += `${c ? "L" : "M"}${d.x.toFixed(1)} ${d.y.toFixed(1)}`;
  }
  return `${o}Z`;
}
function bp(i, l, o) {
  const r = i.band * 0.46, c = i.l / i.slats, h = c * 0.2;
  let d = "";
  for (let y = 0; y < i.slats; y++) {
    const v = Xs(i, l + o + y * c), S = ga(i, v.x - v.nx * r, v.z - v.nz * r), g = ga(i, v.x + v.nx * r, v.z + v.nz * r), p = ga(i, v.x + v.tx * h, v.z + v.tz * h);
    d += `M${S.x.toFixed(1)} ${S.y.toFixed(1)}Q${(2 * p.x - (S.x + g.x) / 2).toFixed(1)} ${(2 * p.y - (S.y + g.y) / 2).toFixed(1)} ${g.x.toFixed(1)} ${g.y.toFixed(1)}`;
  }
  return d;
}
function Tp(i, l, o) {
  const r = Xs(i, l - o * i.pitch), c = ga(i, r.x, r.z);
  return { x: c.x, y: c.y, k: c.k, depth: (r.z + i.r) / (2 * i.r) };
}
function xp(i, l) {
  return (Math.round((l - i.s / 2) / i.pitch) % i.n + i.n) % i.n;
}
function VT(i, l) {
  const o = [];
  for (let r = 1; r <= 5; r++) {
    const c = l ? l[r] : i.find((h) => (h.tier ?? 1) === r)?.price;
    c && o.push({ tier: r, label: c });
  }
  return o;
}
function Ep(i) {
  return String(i).padStart(2, "0");
}
function wT({
  items: i,
  eyebrow: l,
  heading: o,
  caption: r,
  action: c,
  speed: h = 26,
  paused: d,
  onPausedChange: y,
  autoplay: v = !1,
  interval: S = 3e3,
  active: g,
  onActiveChange: p,
  onOpenChange: T,
  onAdd: V,
  legend: _,
  labels: j = gp,
  className: L,
  ref: G,
  ...k
}) {
  const K = B.useId().replace(/[^a-zA-Z0-9_-]/g, ""), Q = i.length, ut = B.useRef(null), rt = B.useRef(null), W = B.useRef(null), F = B.useRef(null), ct = B.useRef(null), Z = B.useRef([]), ot = B.useRef([]), gt = B.useRef([]), Ft = B.useRef([]), Bt = B.useRef([]), st = B.useRef(NT()), X = B.useRef({ id: -1, index: -1, x: 0, y: 0, moved: !1, start: 0, lane: 1, lastX: 0, lastT: 0, v: 0 }), at = B.useRef(-1), $ = B.useRef(null), ft = B.useRef(null), St = B.useRef(null), [Gt, $e] = B.useState({ section: 0, stage: 0 }), [ea, E] = B.useState(null), [q, it] = B.useState(!1), [P, zt] = B.useState(null), [Ct, wt] = B.useState(null), [tt, mt] = B.useState(() => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches), [fn, Ia] = B.useState(v), [Un, dn] = B.useState(0), [re, Xt] = B.useState({}), Ve = g !== void 0 ? g : ea, Qe = Ve !== null && Ve >= 0 && Ve < Q ? Ve : null, Ne = d ?? q, We = Gt.section >= zT, va = Gt.section > 0 && Gt.section < 480, Bn = va ? 0.6 : 0.68, It = B.useMemo(() => {
    if (!Gt.stage || Q === 0) return null;
    const D = _T(Sp(1e3, Q, 100, Bn)) / 100, R = We ? 150 : Ja(Gt.section * 0.143, 96, 150), H = (Gt.stage - 8) / (2 * D);
    return Sp(Gt.stage, Q, Math.max(1, Math.floor(Math.min(H, R))), Bn);
  }, [Gt.stage, Gt.section, Q, Bn, We]), vt = B.useRef({
    geo: null,
    active: null,
    paused: !1,
    reduced: !1,
    open: !1,
    count: 0,
    speed: 26,
    activeControlled: !1,
    pausedControlled: !1,
    onActiveChange: void 0,
    onPausedChange: void 0,
    onOpenChange: void 0,
    onAdd: void 0
  });
  vt.current = {
    geo: It,
    active: Qe,
    paused: Ne,
    reduced: tt,
    open: P !== null,
    count: Q,
    speed: Math.max(0, h),
    activeControlled: g !== void 0,
    pausedControlled: d !== void 0,
    onActiveChange: p,
    onPausedChange: y,
    onOpenChange: T,
    onAdd: V
  };
  const Vl = B.useCallback((D) => {
    ut.current = D, typeof G == "function" ? G(D) : G && (G.current = D);
  }, [G]), wl = B.useCallback((D) => {
    const R = vt.current, H = R.geo, dt = st.current, bt = Z.current[D];
    if (!H || !bt) return;
    const Et = Tp(H, dt.offset, D), yt = dt.lift[D] ?? 0;
    bt.style.transform = `translate3d(${(Et.x - H.d / 2).toFixed(2)}px,${(Et.y - H.d * Oi / 2).toFixed(2)}px,0) scale(${Et.k.toFixed(4)})`;
    const Zt = D === R.active ? 2e3 : 100 + Math.round(Et.y);
    dt.z[D] !== Zt && (dt.z[D] = Zt, bt.style.zIndex = String(Zt));
    const ae = Et.depth >= 0.5 ? "front" : "back";
    dt.lane[D] !== ae && (dt.lane[D] = ae, bt.dataset.lane = ae);
    const Ze = ot.current[D];
    Ze && (Ze.style.transform = `translateY(${(Ff * yt).toFixed(3)}%) scale(${(1 + ws * yt).toFixed(4)})`);
    const ee = gt.current[D];
    ee && (ee.style.opacity = (DT * Ja(1 - Et.depth, 0, 1) * (1 - 0.7 * Ja(yt, 0, 1))).toFixed(3));
    const Mt = Ft.current[D];
    Mt && (Mt.style.transform = `translate3d(0,${(H.d * Oi * 0.05 * yt).toFixed(2)}px,0) scale(${(1 + 0.14 * yt).toFixed(3)})`, Mt.style.opacity = (1 - 0.5 * Ja(yt, 0, 1)).toFixed(3));
    const Wt = Bt.current[D];
    Wt && (Wt.style.transform = `scale(${(1 / (Et.k * (1 + ws * yt))).toFixed(4)})`);
  }, []), Ie = B.useCallback(() => {
    const R = vt.current.geo, H = st.current;
    if (!R) return;
    F.current?.setAttribute("d", bp(R, H.offset, 0)), ct.current?.setAttribute("d", bp(R, H.offset, -Math.max(1.4, R.d * 0.024)));
    const dt = (Math.abs(H.v) < 5e-3 ? 0 : H.v).toFixed(2);
    dt !== H.published && (H.published = dt, W.current?.style.setProperty("--belt-v", dt));
    const bt = xp(R, H.offset);
    bt !== H.center && (H.center = bt, dn(bt));
  }, []), jn = B.useCallback(() => {
    for (let D = 0; D < vt.current.count; D++) wl(D);
    Ie();
  }, [wl, Ie]), Sa = B.useCallback((D, R) => {
    const H = vt.current, dt = H.geo, bt = st.current;
    if (!dt) return null;
    let Et = null, yt = -1 / 0;
    for (let Zt = 0; Zt < H.count; Zt++) {
      const ae = Tp(dt, bt.offset, Zt), Ze = Ja(bt.lift[Zt] ?? 0, 0, 1.2), ee = (1 + ws * Ze) * (Zt === H.active ? 1.1 : 1), Mt = dt.d * ae.k * ee / 2, Wt = dt.d * Oi * ae.k * ee / 2, ce = (D - ae.x) / Mt, hn = (R - (ae.y + Ff / 100 * dt.d * Oi * ae.k * Ze)) / Wt;
      if (!(ce * ce + hn * hn > 1)) {
        if (Zt === H.active) return Zt;
        ae.y > yt && (Et = Zt, yt = ae.y);
      }
    }
    return Et;
  }, []), Ul = B.useRef((D) => {
  }), Vi = B.useCallback((D) => {
    const R = st.current, H = vt.current, dt = H.geo;
    if (R.raf = 0, !dt || !R.visible) {
      R.last = 0;
      return;
    }
    const bt = R.last ? Ja((D - R.last) / 1e3, 0, 0.25) : 1 / 60;
    R.last = D;
    const Et = Math.max(1, Math.ceil(bt / 0.017)), yt = bt / Et, Zt = H.paused || H.active !== null || H.open, ae = H.reduced ? 0 : H.speed;
    for (let ee = 0; ee < Et; ee++) {
      if (R.mode === Rf)
        R.v += (5.6 * 5.6 * (R.target - R.offset) - 2 * 5.6 * R.v) * yt, R.offset += R.v * yt, Math.abs(R.target - R.offset) < 0.3 && Math.abs(R.v) < 4 && (R.offset = R.target, R.v = 0, R.mode = Pn);
      else if (R.mode === Pn) {
        if (Zt)
          R.v *= Math.exp(-7.2 * yt), Math.abs(R.v) < 0.02 && (R.v = 0);
        else {
          let Mt = R.v - ae;
          Math.abs(Mt) > Math.max(6, ae * 0.5) ? Mt = Math.sign(Mt) * Math.max(0, Math.abs(Mt) * Math.exp(-2.4 * yt) - 90 * yt) : Mt *= Math.exp(-3.4 * yt), R.v = ae + (Math.abs(Mt) < 0.01 ? 0 : Mt);
        }
        R.offset += R.v * yt;
      }
      for (let Mt = 0; Mt < H.count; Mt++) {
        const Wt = Mt === H.active ? 1 : 0;
        if (H.reduced) {
          R.lift[Mt] = Wt, R.vlift[Mt] = 0;
          continue;
        }
        const ce = R.lift[Mt] ?? 0, hn = (R.vlift[Mt] ?? 0) + (330 * (Wt - ce) - 23 * (R.vlift[Mt] ?? 0)) * yt;
        R.lift[Mt] = ce + hn * yt, R.vlift[Mt] = hn;
      }
    }
    let Ze = R.mode !== Pn || R.v !== 0 || !Zt && ae > 0;
    for (let ee = 0; ee < H.count; ee++) {
      const Mt = ee === H.active ? 1 : 0;
      Math.abs(Mt - (R.lift[ee] ?? 0)) < 2e-3 && Math.abs(R.vlift[ee] ?? 0) < 0.02 ? (R.lift[ee] = Mt, R.vlift[ee] = 0) : Ze = !0;
    }
    if (R.inside && !R.lock && R.mode === Pn && !H.open && X.current.id < 0 && Math.abs(R.v) > 0.3) {
      const ee = Sa(R.px, R.py);
      ee !== null && ee !== H.active && Ul.current(ee);
    }
    jn(), Ze ? R.raf = requestAnimationFrame(Vi) : R.last = 0;
  }, [Sa, jn]), pe = B.useCallback(() => {
    const D = st.current;
    D.raf || !D.visible || (D.last = 0, D.raf = requestAnimationFrame(Vi));
  }, [Vi]), ue = B.useCallback((D) => {
    const R = vt.current;
    R.active !== D && (R.activeControlled || (R.active = D, E(D)), R.onActiveChange?.(D), pe());
  }, [pe]), tn = B.useCallback(() => {
    Ia(!1);
    const D = st.current;
    D.touched = !0, D.mode === Rf && (D.mode = Pn);
    const R = ft.current;
    R !== null && (ft.current = null, vt.current.active === R && ue(null));
  }, [ue]), Bl = B.useCallback((D) => {
    const R = st.current, H = vt.current.geo;
    if (!H) return;
    const dt = H.s / 2 + D * H.pitch;
    if (R.target = dt + Math.round((R.offset - dt) / H.l) * H.l, vt.current.reduced) {
      R.offset = R.target, R.v = 0, R.mode = Pn, jn();
      return;
    }
    R.mode = Rf, pe();
  }, [pe, jn]), jl = () => !!rt.current?.querySelector("[data-dish]:focus-visible");
  Ul.current = (D) => {
    const R = vt.current.active;
    if (D === R) {
      D !== null && ft.current === D && (ft.current = null, Ia(!1));
      return;
    }
    if (D !== null) {
      tn(), ue(D);
      return;
    }
    R !== null && R !== ft.current && !jl() && ue(null);
  };
  const we = B.useCallback((D) => {
    tn(), ue(D);
    const R = st.current;
    R.v = 0, R.mode = Pn, vt.current.open = !0, Ie(), zt(D), vt.current.onOpenChange?.(D);
  }, [tn, ue, Ie]), Js = B.useCallback(() => {
    vt.current.open = !1, zt(null), vt.current.onOpenChange?.(null), pe();
  }, [pe]), wi = (D, R) => {
    if (Q === 0) return;
    const H = (D % Q + Q) % Q;
    tn(), R && Z.current[H]?.focus({ preventScroll: !0 }), ue(H), Bl(H);
  }, Fs = () => {
    tn();
    const D = vt.current, R = !D.paused;
    D.pausedControlled || (D.paused = R, it(R)), D.onPausedChange?.(R), !R && D.active !== null && !jl() && !st.current.inside && ue(null), pe();
  };
  B.useEffect(() => {
    const D = window.matchMedia("(prefers-reduced-motion: reduce)"), R = () => mt(D.matches);
    return R(), D.addEventListener("change", R), () => D.removeEventListener("change", R);
  }, []), B.useEffect(() => {
    Ia(v);
  }, [v]), B.useLayoutEffect(() => {
    const D = ut.current, R = rt.current;
    if (!D || !R) return;
    const H = () => {
      const bt = { section: Math.round(D.clientWidth), stage: Math.round(R.clientWidth) };
      $e((Et) => Et.section === bt.section && Et.stage === bt.stage ? Et : bt);
    };
    H();
    const dt = new ResizeObserver(H);
    return dt.observe(D), dt.observe(R), () => dt.disconnect();
  }, [Q > 0]), B.useLayoutEffect(() => {
    const D = st.current;
    if (It) {
      if (!D.init)
        D.init = !0, D.offset = It.s / 2 - Math.min(vt.current.speed * 1.62, It.pitch * 0.45), D.v = vt.current.reduced || vt.current.paused ? 0 : vt.current.speed;
      else if (D.l > 0 && D.l !== It.l) {
        const R = It.l / D.l;
        D.offset *= R, D.target *= R;
      }
      vt.current.reduced && (D.v = 0, D.mode !== Nf && (D.mode = Pn), D.touched || (D.offset = It.s / 2)), D.l = It.l, D.z = [], D.lane = [], jn(), pe();
    }
  }, [It, i, tt, jn, pe]), B.useEffect(() => {
    pe();
  }, [Qe, Ne, P, tt, h, pe]), B.useEffect(() => {
    const D = ut.current, R = st.current;
    let H = !0;
    const dt = () => {
      const Et = H && !document.hidden;
      Et !== R.visible && (R.visible = Et, Et ? pe() : R.raf && (cancelAnimationFrame(R.raf), R.raf = 0, R.last = 0));
    }, bt = D && typeof IntersectionObserver == "function" ? new IntersectionObserver((Et) => {
      H = Et.some((yt) => yt.isIntersecting), dt();
    }) : null;
    return D && bt && bt.observe(D), document.addEventListener("visibilitychange", dt), dt(), () => {
      bt?.disconnect(), document.removeEventListener("visibilitychange", dt);
    };
  }, [pe]), B.useEffect(() => () => {
    const D = st.current;
    D.raf && cancelAnimationFrame(D.raf), D.raf = 0, D.last = 0;
  }, []);
  const ti = It !== null;
  B.useEffect(() => {
    if (!fn || tt || Ne || P !== null || Q === 0 || !ti) return;
    let D = 0;
    const R = () => {
      const H = vt.current.geo;
      if (!H) return;
      const dt = St.current, bt = dt === null ? xp(H, st.current.offset + vt.current.speed * 0.25) : (dt + 1) % Q;
      St.current = bt, ft.current = bt, ue(bt), Bl(bt), D = window.setTimeout(() => {
        ft.current === bt && (ft.current = null, vt.current.active === bt && ue(null)), D = window.setTimeout(R, Math.max(300, S - zf));
      }, zf);
    };
    return D = window.setTimeout(R, St.current === null ? 1600 : Math.max(300, S - zf)), () => window.clearTimeout(D);
  }, [fn, tt, Ne, P, Q, S, ti, ue, Bl]), B.useLayoutEffect(() => {
    if (P !== null || Ct !== null || $.current === null) return;
    const D = $.current;
    $.current = null, Z.current[D]?.focus({ preventScroll: !0 });
  }, [P, Ct]);
  const Ll = (D) => {
    const R = rt.current?.getBoundingClientRect();
    return { x: D.clientX - (R?.left ?? 0), y: D.clientY - (R?.top ?? 0) };
  }, Ps = (D) => {
    const R = vt.current.geo;
    if (D.button !== 0 || !R) return;
    const H = Ll(D), dt = Sa(H.x, H.y);
    at.current = -1, X.current = { id: D.pointerId, index: dt ?? -1, x: D.clientX, y: D.clientY, moved: !1, start: st.current.offset, lane: H.y >= R.ym ? 1 : -1, lastX: D.clientX, lastT: D.timeStamp, v: 0 };
  }, Po = (D) => {
    const R = st.current, H = X.current, dt = rt.current, bt = vt.current.geo;
    if (!dt || !bt) return;
    const Et = Ll(D);
    if (D.pointerType === "mouse" && (R.px = Et.x, R.py = Et.y, R.inside = !0), H.id === D.pointerId) {
      const yt = D.clientX - H.x, Zt = D.timeStamp;
      if (!H.moved && Math.abs(yt) > 6 && Math.abs(yt) > Math.abs(D.clientY - H.y) && (H.moved = !0, tn(), ue(null), R.mode = Nf, dt.isConnected && dt.setPointerCapture(D.pointerId)), H.moved) {
        const ae = (D.clientX - H.lastX) / Math.max(1, Zt - H.lastT);
        H.v = H.v * 0.6 + ae * 0.4, H.lastX = D.clientX, H.lastT = Zt;
        const Ze = H.lane > 0 ? 1 : 1 / bt.kb;
        R.offset = H.start - H.lane * yt * Ze, R.v = vt.current.reduced ? 0 : -H.lane * H.v * 1e3 * Ze, pe();
      }
      return;
    }
    if (!(D.pointerType !== "mouse" || vt.current.open)) {
      if (R.lock) {
        if (Math.hypot(Et.x - R.lockX, Et.y - R.lockY) < 4) return;
        R.lock = !1;
      }
      Ul.current(Sa(Et.x, Et.y));
    }
  }, $s = (D, R) => {
    const H = X.current;
    if (H.id !== D.pointerId) return;
    const dt = st.current, bt = rt.current;
    if (bt?.hasPointerCapture(D.pointerId) && bt.releasePointerCapture(D.pointerId), X.current = { ...H, id: -1 }, dt.mode === Nf) {
      dt.mode = Pn;
      const yt = Math.exp(-Math.max(0, D.timeStamp - H.lastT) / 70);
      if (dt.v = vt.current.reduced ? 0 : Ja(dt.v * yt, -1400, 1400), D.pointerType === "mouse") {
        const Zt = Ll(D);
        dt.lock = !0, dt.lockX = Zt.x, dt.lockY = Zt.y;
      }
      pe();
      return;
    }
    if (R || H.moved) return;
    const Et = D.pointerType !== "mouse";
    if (H.index < 0) {
      Et && vt.current.active !== null && (tn(), ue(null));
      return;
    }
    tn(), Et && vt.current.active !== H.index ? ue(H.index) : at.current = H.index;
  }, ei = (D) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(D.key) || Q === 0) return;
    D.preventDefault();
    const R = D.target.closest("[data-dish]")?.getAttribute("data-dish"), H = R != null ? Number(R) : Qe ?? Un;
    wi(D.key === "Home" ? 0 : D.key === "End" ? Q - 1 : H + (D.key === "ArrowRight" ? 1 : -1), !0);
  }, Ue = B.useCallback(() => P === null ? null : ot.current[P]?.getBoundingClientRect() ?? null, [P]), Ln = B.useCallback((D) => wt(D ? P : null), [P]), Be = B.useCallback(() => {
    $.current = P, Js();
  }, [P, Js]), $o = B.useCallback(() => {
    const D = P === null ? void 0 : i[P];
    D && vt.current.onAdd?.(D);
  }, [P, i]), je = B.useMemo(() => It ? { outer: _f(It, It.band / 2), inner: _f(It, -It.band / 2), island: _f(It, -It.band / 2 - It.d * 0.035) } : null, [It]), ni = Qe === null ? null : i[Qe] ?? null, Ui = Qe ?? Un, ba = VT(i, _), _t = It, Mn = "inline-flex size-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none", ai = (l || o || ba.length > 0) && /* @__PURE__ */ Y.jsxs("div", { className: We ? "flex flex-col items-start gap-4 text-left" : "flex flex-col items-center gap-2 px-2 text-center", children: [
    l && /* @__PURE__ */ Y.jsx("p", { className: "text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground", children: l }),
    o && /* @__PURE__ */ Y.jsx("h2", { className: `text-balance font-medium tracking-tight ${We ? "text-4xl leading-[1.1] xl:text-[2.75rem]" : "text-2xl md:text-3xl"}`, children: o }),
    ba.length > 0 && /* @__PURE__ */ Y.jsx("ul", { "aria-hidden": "true", "data-legend": !0, className: `mt-1 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[11px] tabular-nums text-muted-foreground ${We ? "justify-start" : "justify-center"} ${va ? "max-w-[15rem]" : ""}`, children: ba.map((D) => /* @__PURE__ */ Y.jsxs("li", { className: "inline-flex items-center gap-1.5", children: [
      /* @__PURE__ */ Y.jsx("span", { className: `size-2.5 rounded-full border-2 bg-transparent ${Pf(D.tier).ring}` }),
      D.label
    ] }, D.tier)) })
  ] }), Ta = /* @__PURE__ */ Y.jsxs("div", { id: `${K}-caption`, "aria-live": "polite", "data-caption": !0, className: We ? "min-h-[3.25rem]" : `mx-auto mt-2 max-w-md px-2 text-center ${va ? "min-h-[3.75rem]" : "min-h-[2.75rem]"}`, children: [
    /* @__PURE__ */ Y.jsx("p", { className: `text-sm ${ni ? "font-medium text-foreground" : "text-muted-foreground"}`, children: ni ? ni.name : r }),
    ni?.description && /* @__PURE__ */ Y.jsx("p", { className: "mt-0.5 text-[13px] leading-snug text-muted-foreground", children: ni.description })
  ] }), Hl = Q > 1 && /* @__PURE__ */ Y.jsxs("div", { className: "relative z-10 mt-1 flex items-center justify-center gap-1.5", children: [
    /* @__PURE__ */ Y.jsx("button", { type: "button", "data-control": "previous", "aria-label": j.previous, onClick: () => wi((vt.current.active ?? st.current.center) - 1, !1), className: Mn, children: /* @__PURE__ */ Y.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ Y.jsx("path", { d: "M10 3.5 5.5 8l4.5 4.5" }) }) }),
    /* @__PURE__ */ Y.jsx("button", { type: "button", "data-control": "pause", "aria-label": j.pause ?? gp.pause, "aria-pressed": Ne, onClick: Fs, className: Mn, children: Ne ? /* @__PURE__ */ Y.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "currentColor", children: /* @__PURE__ */ Y.jsx("path", { d: "M5 3.4v9.2a.6.6 0 0 0 .9.5l7.4-4.6a.6.6 0 0 0 0-1L5.9 2.9a.6.6 0 0 0-.9.5Z" }) }) : /* @__PURE__ */ Y.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "currentColor", children: [
      /* @__PURE__ */ Y.jsx("rect", { x: "4", y: "3", width: "2.6", height: "10", rx: "0.8" }),
      /* @__PURE__ */ Y.jsx("rect", { x: "9.4", y: "3", width: "2.6", height: "10", rx: "0.8" })
    ] }) }),
    /* @__PURE__ */ Y.jsx("button", { type: "button", "data-control": "next", "aria-label": j.next, onClick: () => wi((vt.current.active ?? st.current.center) + 1, !1), className: Mn, children: /* @__PURE__ */ Y.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ Y.jsx("path", { d: "M6 3.5 10.5 8 6 12.5" }) }) })
  ] }), Ws = Q > 0 && /* @__PURE__ */ Y.jsxs(
    "div",
    {
      ref: rt,
      "data-stage": !0,
      role: "group",
      "aria-label": o ?? "Sushi conveyor belt",
      "aria-roledescription": "conveyor belt",
      className: "relative w-full touch-pan-y select-none",
      style: { height: _t ? _t.height : 260, overflowX: "clip" },
      onPointerDown: Ps,
      onPointerMove: Po,
      onPointerUp: (D) => $s(D, !1),
      onPointerCancel: (D) => $s(D, !0),
      onPointerLeave: (D) => {
        if (D.pointerType !== "mouse") return;
        const R = st.current;
        R.inside = !1, R.lock = !1;
        const H = vt.current.active;
        X.current.id < 0 && !vt.current.open && H !== null && H !== ft.current && !jl() && ue(null);
      },
      onBlur: (D) => {
        const R = D.relatedTarget;
        if (R && rt.current?.contains(R) || vt.current.open || st.current.inside) return;
        const H = vt.current.active;
        H !== null && H !== ft.current && ue(null);
      },
      onKeyDown: ei,
      children: [
        _t && /* @__PURE__ */ Y.jsx("div", { "aria-hidden": "true", "data-counter": !0, className: "pointer-events-none absolute inset-x-0", style: { top: Math.max(0, _t.edgeTop - _t.d * 0.34), height: _t.ym - Math.max(0, _t.edgeTop - _t.d * 0.34), background: "linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 9%, transparent) 0 1px, transparent 1px, color-mix(in oklab, var(--color-foreground) 5%, transparent) 40%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 18%, black 82%, transparent)", maskImage: "linear-gradient(to right, transparent, black 18%, black 82%, transparent)" } }),
        /* @__PURE__ */ Y.jsx("div", { ref: W, "data-belt": !0, "aria-hidden": "true", className: "pointer-events-none absolute inset-0", children: _t && je && /* @__PURE__ */ Y.jsxs("svg", { className: "absolute left-0 top-0 overflow-visible", width: _t.width, height: _t.height, viewBox: `0 0 ${_t.width} ${_t.height}`, focusable: "false", children: [
          /* @__PURE__ */ Y.jsxs("defs", { children: [
            /* @__PURE__ */ Y.jsx("filter", { id: `${K}-soft`, x: "-10%", y: "-30%", width: "120%", height: "160%", children: /* @__PURE__ */ Y.jsx("feGaussianBlur", { stdDeviation: (_t.d * 0.06).toFixed(1) }) }),
            /* @__PURE__ */ Y.jsxs("linearGradient", { id: `${K}-island`, x1: "0", x2: "0", y1: "0", y2: "1", children: [
              /* @__PURE__ */ Y.jsx("stop", { offset: "0", style: { stopColor: "var(--island)" } }),
              /* @__PURE__ */ Y.jsx("stop", { offset: "1", style: { stopColor: "var(--island-low)" } })
            ] })
          ] }),
          /* @__PURE__ */ Y.jsx("path", { d: je.outer, transform: `translate(0 ${(_t.side + _t.d * 0.07).toFixed(1)})`, fill: "black", className: "opacity-[0.18] dark:opacity-60", filter: `url(#${K}-soft)` }),
          /* @__PURE__ */ Y.jsx("path", { d: `${je.outer}${je.inner}`, fillRule: "evenodd", transform: `translate(0 ${_t.side.toFixed(1)})`, style: { fill: "var(--belt-side)" } }),
          /* @__PURE__ */ Y.jsx("path", { d: `${je.outer}${je.inner}`, fillRule: "evenodd", style: { fill: "var(--belt)" } }),
          /* @__PURE__ */ Y.jsx("path", { ref: F, fill: "none", stroke: "black", strokeOpacity: 0.42, strokeWidth: Math.max(1, _t.d * 0.013), strokeLinecap: "round" }),
          /* @__PURE__ */ Y.jsx("path", { ref: ct, fill: "none", stroke: "white", strokeOpacity: 0.14, strokeWidth: Math.max(0.8, _t.d * 9e-3), strokeLinecap: "round" }),
          /* @__PURE__ */ Y.jsx("path", { d: je.outer, fill: "none", style: { stroke: "var(--rail)" }, strokeWidth: Math.max(2, _t.d * 0.026) }),
          /* @__PURE__ */ Y.jsx("path", { d: je.outer, fill: "none", stroke: "white", strokeOpacity: 0.55, strokeWidth: Math.max(0.8, _t.d * 8e-3), transform: "translate(0 -0.8)" }),
          /* @__PURE__ */ Y.jsx("path", { d: je.inner, fill: "none", style: { stroke: "var(--rail)" }, strokeWidth: Math.max(1.6, _t.d * 0.02) }),
          /* @__PURE__ */ Y.jsx("path", { d: je.inner, fill: "none", stroke: "white", strokeOpacity: 0.4, strokeWidth: Math.max(0.8, _t.d * 8e-3), transform: "translate(0 -0.7)" }),
          /* @__PURE__ */ Y.jsx("path", { d: je.island, style: { fill: "var(--island-wall)" } }),
          /* @__PURE__ */ Y.jsx("path", { d: je.island, transform: `translate(0 ${(-_t.side * 0.6).toFixed(1)})`, style: { fill: `url(#${K}-island)` } }),
          /* @__PURE__ */ Y.jsx("path", { d: je.island, transform: `translate(0 ${(-_t.side * 0.6 - 0.6).toFixed(1)})`, fill: "none", stroke: "white", strokeOpacity: 0.55, strokeWidth: Math.max(0.8, _t.d * 8e-3), className: "dark:opacity-40" })
        ] }) }),
        _t && i.map((D, R) => {
          const H = Pf(D.tier), dt = Qe === R, bt = !!re[D.id], Et = `url("${D.image}") 0 0 / 100% 100% no-repeat`;
          return /* @__PURE__ */ Y.jsxs(
            "button",
            {
              ref: (yt) => {
                Z.current[R] = yt;
              },
              type: "button",
              "data-dish": R,
              "data-active": dt || void 0,
              tabIndex: R === Ui ? 0 : -1,
              "aria-label": D.name,
              "aria-describedby": `${K}-caption`,
              "aria-haspopup": "dialog",
              "aria-current": dt || void 0,
              className: "absolute left-0 top-0 cursor-pointer rounded-[50%] border-0 bg-transparent p-0 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
              style: { width: _t.d, height: _t.d * Oi, visibility: Ct === R ? "hidden" : void 0 },
              onFocus: () => {
                X.current.id < 0 && (tn(), ue(R));
              },
              onClick: (yt) => {
                const Zt = at.current;
                at.current = -1, (yt.detail === 0 || Zt === R) && we(R);
              },
              children: [
                /* @__PURE__ */ Y.jsx("span", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 opacity-50 dark:opacity-90", children: /* @__PURE__ */ Y.jsx("span", { ref: (yt) => {
                  Ft.current[R] = yt;
                }, className: "absolute inset-x-[5%] bottom-[-9%] top-[16%] rounded-[50%] bg-black", style: { filter: `blur(${Math.max(2, _t.d * 0.045).toFixed(1)}px)` } }) }),
                /* @__PURE__ */ Y.jsxs("span", { ref: (yt) => {
                  ot.current[R] = yt;
                }, "data-lift": !0, className: "absolute inset-0", children: [
                  /* @__PURE__ */ Y.jsx("span", { "aria-hidden": "true", "data-placeholder": !0, className: `absolute rounded-[50%] border border-border bg-card ${bt ? "inset-[3%] shadow-sm" : "inset-[6%]"}`, children: /* @__PURE__ */ Y.jsx("span", { className: "absolute inset-[30%] rounded-[50%] bg-muted-foreground/20" }) }),
                  !bt && /* @__PURE__ */ Y.jsx(
                    "img",
                    {
                      src: D.image,
                      alt: "",
                      draggable: !1,
                      onError: () => Xt((yt) => yt[D.id] ? yt : { ...yt, [D.id]: !0 }),
                      className: "pointer-events-none absolute inset-0 size-full rounded-[50%] select-none object-fill"
                    }
                  ),
                  !bt && /* @__PURE__ */ Y.jsx("span", { ref: (yt) => {
                    gt.current[R] = yt;
                  }, "aria-hidden": "true", className: "pointer-events-none absolute inset-0 rounded-[50%] bg-black", style: { opacity: 0, WebkitMask: Et, mask: Et } }),
                  /* @__PURE__ */ Y.jsx("span", { ref: (yt) => {
                    Bt.current[R] = yt;
                  }, "aria-hidden": "true", className: "pointer-events-none absolute left-1/2 top-0 size-0", children: /* @__PURE__ */ Y.jsxs("span", { "data-chip": !0, className: `absolute bottom-[7px] left-0 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card py-1 pl-2 pr-2.5 text-[11px] font-medium leading-none text-card-foreground shadow-[0_6px_16px_-6px_color-mix(in_oklab,var(--color-foreground)_40%,transparent)] transition-[opacity,translate] duration-300 motion-reduce:transition-none ${dt && Ct !== R ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`, children: [
                    /* @__PURE__ */ Y.jsx("span", { className: `size-1.5 rounded-full ${H.dot}` }),
                    D.name
                  ] }) })
                ] })
              ]
            },
            D.id
          );
        })
      ]
    }
  );
  return /* @__PURE__ */ Y.jsxs(
    "section",
    {
      ...k,
      ref: Vl,
      "data-slot": "sushi-conveyor-menu",
      "data-layout": We ? "wide" : "stack",
      "data-active": Qe ?? "",
      "data-open": P ?? "",
      "data-paused": Ne || void 0,
      "data-center": Un,
      className: `relative isolate w-full overflow-hidden bg-transparent text-foreground ${RT} ${L ?? ""}`,
      children: [
        /* @__PURE__ */ Y.jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 -z-10", style: { background: "radial-gradient(64% 52% at 50% 56%, color-mix(in oklab, var(--color-foreground) 5%, transparent), transparent 72%)" } }),
        We ? /* @__PURE__ */ Y.jsxs("div", { className: "mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,24rem)_minmax(0,1fr)] items-center gap-12 px-10 py-14", children: [
          /* @__PURE__ */ Y.jsxs("div", { className: "flex flex-col items-start gap-6", children: [
            ai,
            Ta,
            c
          ] }),
          /* @__PURE__ */ Y.jsxs("div", { className: "min-w-0", children: [
            Ws,
            Hl
          ] })
        ] }) : /* @__PURE__ */ Y.jsxs("div", { className: "flex w-full flex-col items-center px-4 pb-6 pt-6", children: [
          ai,
          /* @__PURE__ */ Y.jsx("div", { className: "mt-2 w-full min-w-0", children: Ws }),
          Hl,
          Ta,
          c && /* @__PURE__ */ Y.jsx("div", { className: "mt-3 flex justify-center", children: c })
        ] }),
        P !== null && i[P] && /* @__PURE__ */ Y.jsx(
          UT,
          {
            uid: K,
            item: i[P],
            index: P,
            total: Q,
            labels: j,
            reduced: tt,
            broken: !!re[i[P].id],
            source: Ue,
            onLift: Ln,
            onAdd: V ? $o : void 0,
            onClose: Be
          }
        )
      ]
    }
  );
}
function UT({ uid: i, item: l, index: o, total: r, labels: c, reduced: h, broken: d, source: y, onLift: v, onAdd: S, onClose: g }) {
  const p = B.useRef(null), T = B.useRef(null), V = B.useRef(null), _ = B.useRef(0), j = B.useRef(!1), [L, G] = B.useState(!1), [k, K] = B.useState(!1), Q = `${i}-dish-title`, ut = Pf(l.tier);
  B.useLayoutEffect(() => {
    const ct = T.current, Z = y();
    V.current?.focus({ preventScroll: !0 });
    const ot = document.body.style.overflow;
    document.body.style.overflow = "hidden", v(!0);
    let gt = null;
    if (ct && Z && !h && Z.width > 0) {
      const Bt = ct.getBoundingClientRect(), st = Z.width / Bt.width, X = Z.height / Bt.height, at = Z.left + Z.width / 2 - (Bt.left + Bt.width / 2), $ = Z.top + Z.height / 2 - (Bt.top + Bt.height / 2), ft = Math.min(120, Math.abs($) * 0.3 + 40);
      gt = ct.animate([
        { transform: `translate(${at}px, ${$}px) scale(${st}, ${X})` },
        { transform: `translate(${at * 0.42}px, ${$ * 0.42 - ft}px) scale(${(st + 1) / 2 * 1.05}, ${(X + 1) / 2 * 1.05}) rotate(${at > 0 ? -6 : 6}deg)`, offset: 0.5 },
        { transform: "none" }
      ], { duration: 680, easing: "cubic-bezier(.22,.85,.3,1)" });
    }
    const Ft = requestAnimationFrame(() => G(!0));
    return () => {
      cancelAnimationFrame(Ft), gt?.cancel(), window.clearTimeout(_.current), document.body.style.overflow = ot, v(!1);
    };
  }, [y, h, v]);
  const rt = B.useCallback(() => {
    if (j.current) return;
    j.current = !0, G(!1);
    const ct = T.current, Z = y();
    if (!ct || !Z || h || Z.width === 0) {
      g();
      return;
    }
    const ot = ct.getBoundingClientRect(), gt = Z.width / ot.width, Ft = Z.height / ot.height, Bt = Z.left + Z.width / 2 - (ot.left + ot.width / 2), st = Z.top + Z.height / 2 - (ot.top + ot.height / 2), X = ct.animate([
      { transform: "none" },
      { transform: `translate(${Bt * 0.58}px, ${st * 0.58 - 36}px) scale(${(gt + 1) / 2}, ${(Ft + 1) / 2})`, offset: 0.55 },
      { transform: `translate(${Bt}px, ${st}px) scale(${gt}, ${Ft})` }
    ], { duration: 540, easing: "cubic-bezier(.45,0,.55,1)", fill: "forwards" });
    X.onfinish = () => g();
  }, [y, h, g]);
  B.useEffect(() => {
    const ct = (Z) => {
      const ot = p.current;
      if (!(!ot || ot.contains(Z.target))) {
        if (Z.key === "Escape")
          Z.preventDefault(), rt();
        else if (Z.key === "Tab") {
          const gt = ot.querySelector("button");
          gt && (Z.preventDefault(), gt.focus());
        }
      }
    };
    return document.addEventListener("keydown", ct), () => document.removeEventListener("keydown", ct);
  }, [rt]);
  const W = (ct) => {
    if (ct.key === "Escape") {
      ct.preventDefault(), rt();
      return;
    }
    if (ct.key !== "Tab") return;
    const Z = [...p.current?.querySelectorAll("button") ?? []].filter((Ft) => !Ft.disabled), ot = Z[0], gt = Z.at(-1);
    !ot || !gt || (ct.shiftKey && document.activeElement === ot ? (ct.preventDefault(), gt.focus()) : !ct.shiftKey && document.activeElement === gt && (ct.preventDefault(), ot.focus()));
  }, F = () => {
    k || j.current || (S?.(), K(!0), _.current = window.setTimeout(rt, h ? 0 : 450));
  };
  return xT.createPortal(
    /* @__PURE__ */ Y.jsxs("div", { ref: p, role: "dialog", "aria-modal": "true", "aria-labelledby": Q, "data-dish-dialog": !0, className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 text-foreground sm:p-8", onKeyDown: W, children: [
      /* @__PURE__ */ Y.jsx("div", { "aria-hidden": "true", className: `absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300 motion-reduce:transition-none ${L ? "opacity-100" : "opacity-0"}`, onClick: rt }),
      /* @__PURE__ */ Y.jsxs("div", { className: "relative grid w-full max-w-[52rem] items-center gap-6 p-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] sm:gap-10 sm:p-8", children: [
        /* @__PURE__ */ Y.jsx("div", { "aria-hidden": "true", className: `absolute inset-0 rounded-[2rem] border border-border bg-card shadow-2xl transition-[opacity,scale] duration-300 motion-reduce:transition-none ${L ? "scale-100 opacity-100" : "scale-[0.97] opacity-0"}` }),
        /* @__PURE__ */ Y.jsxs("button", { ref: V, type: "button", onClick: rt, className: `absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground outline-none transition-[opacity,color] duration-300 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none ${L ? "opacity-100" : "opacity-0"}`, children: [
          c.close,
          /* @__PURE__ */ Y.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", children: /* @__PURE__ */ Y.jsx("path", { d: "M3.5 3.5l9 9M12.5 3.5l-9 9" }) })
        ] }),
        /* @__PURE__ */ Y.jsxs("div", { ref: T, "data-dish-figure": !0, className: "relative mx-auto aspect-square w-full max-w-[min(42vh,22rem)]", children: [
          /* @__PURE__ */ Y.jsx("span", { "aria-hidden": "true", className: "absolute inset-x-[8%] bottom-[-4%] top-[14%] rounded-full bg-black opacity-25 blur-2xl dark:opacity-70" }),
          d ? /* @__PURE__ */ Y.jsx("span", { "aria-hidden": "true", className: "absolute inset-[3%] rounded-full border border-border bg-muted", children: /* @__PURE__ */ Y.jsx("span", { className: "absolute inset-[30%] rounded-full bg-muted-foreground/25" }) }) : /* @__PURE__ */ Y.jsx("img", { src: l.image, alt: l.name, draggable: !1, className: "relative size-full rounded-full select-none object-contain" })
        ] }),
        /* @__PURE__ */ Y.jsxs("div", { className: `relative flex flex-col gap-3 text-center transition-[opacity,translate] delay-150 duration-500 motion-reduce:transition-none sm:text-left ${L ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`, children: [
          /* @__PURE__ */ Y.jsxs("p", { className: "flex items-center justify-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground sm:justify-start", children: [
            /* @__PURE__ */ Y.jsx("span", { "aria-hidden": "true", className: `size-2 rounded-full ${ut.dot}` }),
            Ep(o + 1),
            " / ",
            Ep(r)
          ] }),
          /* @__PURE__ */ Y.jsx("h3", { id: Q, className: "text-2xl font-medium tracking-tight sm:text-3xl", children: l.name }),
          l.description && /* @__PURE__ */ Y.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: l.description }),
          l.details && l.details.length > 0 && /* @__PURE__ */ Y.jsx("ul", { className: "flex flex-wrap justify-center gap-2 sm:justify-start", children: l.details.map((ct) => /* @__PURE__ */ Y.jsx("li", { className: "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground", children: ct }, ct)) }),
          /* @__PURE__ */ Y.jsxs("div", { className: "mt-2 flex flex-wrap items-center justify-center gap-4 sm:justify-start", children: [
            /* @__PURE__ */ Y.jsx("p", { className: "text-2xl font-semibold tabular-nums tracking-tight", children: l.price }),
            S && /* @__PURE__ */ Y.jsxs("button", { type: "button", "data-add": !0, onClick: F, className: "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm outline-none transition-[translate,box-shadow] hover:-translate-y-px hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none", children: [
              k ? /* @__PURE__ */ Y.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-4", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ Y.jsx("path", { d: "M3.5 8.5l3 3 6-7" }) }) : /* @__PURE__ */ Y.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-4", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", children: /* @__PURE__ */ Y.jsx("path", { d: "M8 3.5v9M3.5 8h9" }) }),
              c.add
            ] })
          ] })
        ] })
      ] })
    ] }),
    document.body
  );
}
const Xg = B.createContext({});
function BT(i) {
  const l = B.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const jT = typeof window < "u", LT = jT ? B.useLayoutEffect : B.useEffect, xd = /* @__PURE__ */ B.createContext(null);
function Ed(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function wo(i, l) {
  const o = i.indexOf(l);
  o > -1 && i.splice(o, 1);
}
const ta = (i, l, o) => o > l ? l : o < i ? i : o;
let Zo = () => {
};
const Pa = {}, Qg = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), Zg = (i) => typeof i == "object" && i !== null, Kg = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function kg(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const An = /* @__NO_SIDE_EFFECTS__ */ (i) => i, Qs = (...i) => i.reduce((l, o) => (r) => o(l(r))), Hs = /* @__NO_SIDE_EFFECTS__ */ (i, l, o) => {
  const r = l - i;
  return r ? (o - i) / r : 1;
};
class Ad {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Ed(this.subscriptions, l), () => wo(this.subscriptions, l);
  }
  notify(l, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, o, r);
      else
        for (let h = 0; h < c; h++) {
          const d = this.subscriptions[h];
          d && d(l, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const cn = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, En = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, Jg = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, Fg = (i, l, o) => (((1 - 3 * o + 3 * l) * i + (3 * o - 6 * l)) * i + 3 * l) * i, HT = 1e-7, YT = 12;
function qT(i, l, o, r, c) {
  let h, d, y = 0;
  do
    d = l + (o - l) / 2, h = Fg(d, r, c) - i, h > 0 ? o = d : l = d;
  while (Math.abs(h) > HT && ++y < YT);
  return d;
}
// @__NO_SIDE_EFFECTS__
function Zs(i, l, o, r) {
  if (i === l && o === r)
    return An;
  const c = (h) => qT(h, 0, 1, i, o);
  return (h) => h === 0 || h === 1 ? h : Fg(c(h), l, r);
}
const Pg = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, $g = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), Wg = /* @__PURE__ */ Zs(0.33, 1.53, 0.69, 0.99), Md = /* @__PURE__ */ $g(Wg), Ig = /* @__PURE__ */ Pg(Md), tv = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * Md(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), Cd = (i) => 1 - Math.sin(Math.acos(i)), ev = /* @__PURE__ */ $g(Cd), nv = /* @__PURE__ */ Pg(Cd), GT = /* @__PURE__ */ Zs(0.42, 0, 1, 1), XT = /* @__PURE__ */ Zs(0, 0, 0.58, 1), av = /* @__PURE__ */ Zs(0.42, 0, 0.58, 1), QT = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", iv = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", ZT = {
  linear: An,
  easeIn: GT,
  easeInOut: av,
  easeOut: XT,
  circIn: Cd,
  circInOut: nv,
  circOut: ev,
  backIn: Md,
  backInOut: Ig,
  backOut: Wg,
  anticipate: tv
}, KT = (i) => typeof i == "string", Ap = (i) => {
  if (/* @__PURE__ */ iv(i)) {
    Zo(i.length === 4);
    const [l, o, r, c] = i;
    return /* @__PURE__ */ Zs(l, o, r, c);
  } else if (KT(i))
    return ZT[i];
  return i;
}, xo = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function kT(i) {
  let l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), r = !1, c = !1;
  const h = /* @__PURE__ */ new WeakSet();
  let d = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function y(S) {
    h.has(S) && (v.schedule(S), i()), S(d);
  }
  const v = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (S, g = !1, p = !1) => {
      const V = p && r ? l : o;
      return g && h.add(S), V.add(S), S;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (S) => {
      o.delete(S), h.delete(S);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (S) => {
      if (d = S, r) {
        c = !0;
        return;
      }
      r = !0;
      const g = l;
      l = o, o = g, l.forEach(y), l.clear(), r = !1, c && (c = !1, v.process(S));
    }
  };
  return v;
}
const JT = 40;
function lv(i, l) {
  let o = !1, r = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, h = () => o = !0, d = xo.reduce((K, Q) => (K[Q] = kT(h), K), {}), { setup: y, read: v, resolveKeyframes: S, preUpdate: g, update: p, preRender: T, render: V, postRender: _ } = d, j = () => {
    const K = Pa.useManualTiming, Q = K ? c.timestamp : performance.now();
    o = !1, K || (c.delta = r ? 1e3 / 60 : Math.max(Math.min(Q - c.timestamp, JT), 1)), c.timestamp = Q, c.isProcessing = !0, y.process(c), v.process(c), S.process(c), g.process(c), p.process(c), T.process(c), V.process(c), _.process(c), c.isProcessing = !1, o && l && (r = !1, i(j));
  }, L = () => {
    o = !0, r = !0, c.isProcessing || i(j);
  };
  return { schedule: xo.reduce((K, Q) => {
    const ut = d[Q];
    return K[Q] = (rt, W = !1, F = !1) => (o || L(), ut.schedule(rt, W, F)), K;
  }, {}), cancel: (K) => {
    for (let Q = 0; Q < xo.length; Q++)
      d[xo[Q]].cancel(K);
  }, state: c, steps: d };
}
const { schedule: Jt, cancel: $a, state: ze, steps: Vf } = /* @__PURE__ */ lv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : An, !0);
let Co;
function FT() {
  Co = void 0;
}
const Ge = {
  now: () => (Co === void 0 && Ge.set(ze.isProcessing || Pa.useManualTiming ? ze.timestamp : performance.now()), Co),
  set: (i) => {
    Co = i, queueMicrotask(FT);
  }
}, sv = (i) => (l) => typeof l == "string" && l.startsWith(i), uv = /* @__PURE__ */ sv("--"), PT = /* @__PURE__ */ sv("var(--"), Dd = (i) => PT(i) ? $T.test(i.split("/*")[0].trim()) : !1, $T = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Mp(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const Rl = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, Ys = {
  ...Rl,
  transform: (i) => ta(0, 1, i)
}, Eo = {
  ...Rl,
  default: 1
}, Us = (i) => Math.round(i * 1e5) / 1e5, Od = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function WT(i) {
  return i == null;
}
const IT = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, zd = (i, l) => (o) => !!(typeof o == "string" && IT.test(o) && o.startsWith(i) || l && !WT(o) && Object.prototype.hasOwnProperty.call(o, l)), ov = (i, l, o) => (r) => {
  if (typeof r != "string")
    return r;
  const [c, h, d, y] = r.match(Od);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(h),
    [o]: parseFloat(d),
    alpha: y !== void 0 ? parseFloat(y) : 1
  };
}, tx = (i) => ta(0, 255, i), wf = {
  ...Rl,
  transform: (i) => Math.round(tx(i))
}, zi = {
  test: /* @__PURE__ */ zd("rgb", "red"),
  parse: /* @__PURE__ */ ov("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: o, alpha: r = 1 }) => "rgba(" + wf.transform(i) + ", " + wf.transform(l) + ", " + wf.transform(o) + ", " + Us(Ys.transform(r)) + ")"
};
function ex(i) {
  let l = "", o = "", r = "", c = "";
  return i.length > 5 ? (l = i.substring(1, 3), o = i.substring(3, 5), r = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), o = i.substring(2, 3), r = i.substring(3, 4), c = i.substring(4, 5), l += l, o += o, r += r, c += c), {
    red: parseInt(l, 16),
    green: parseInt(o, 16),
    blue: parseInt(r, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const $f = {
  test: /* @__PURE__ */ zd("#"),
  parse: ex,
  transform: zi.transform
}, Ks = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), pa = /* @__PURE__ */ Ks("deg"), In = /* @__PURE__ */ Ks("%"), nt = /* @__PURE__ */ Ks("px"), nx = /* @__PURE__ */ Ks("vh"), ax = /* @__PURE__ */ Ks("vw"), Cp = {
  ...In,
  parse: (i) => In.parse(i) / 100,
  transform: (i) => In.transform(i * 100)
}, Ml = {
  test: /* @__PURE__ */ zd("hsl", "hue"),
  parse: /* @__PURE__ */ ov("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: o, alpha: r = 1 }) => "hsla(" + Math.round(i) + ", " + In.transform(Us(l)) + ", " + In.transform(Us(o)) + ", " + Us(Ys.transform(r)) + ")"
}, ye = {
  test: (i) => zi.test(i) || $f.test(i) || Ml.test(i),
  parse: (i) => zi.test(i) ? zi.parse(i) : Ml.test(i) ? Ml.parse(i) : $f.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? zi.transform(i) : Ml.transform(i),
  getAnimatableNone: (i) => {
    const l = ye.parse(i);
    return l.alpha = 0, ye.transform(l);
  }
}, ix = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function lx(i) {
  return isNaN(i) && typeof i == "string" && (i.match(Od)?.length || 0) + (i.match(ix)?.length || 0) > 0;
}
const rv = "number", cv = "color", sx = "var", ux = "var(", Dp = "${}", ox = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ol(i) {
  const l = i.toString(), o = [], r = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let h = 0;
  const y = l.replace(ox, (v) => (ye.test(v) ? (r.color.push(h), c.push(cv), o.push(ye.parse(v))) : v.startsWith(ux) ? (r.var.push(h), c.push(sx), o.push(v)) : (r.number.push(h), c.push(rv), o.push(parseFloat(v))), ++h, Dp)).split(Dp);
  return { values: o, split: y, indexes: r, types: c };
}
function rx(i) {
  return Ol(i).values;
}
function fv({ split: i, types: l }) {
  const o = i.length;
  return (r) => {
    let c = "";
    for (let h = 0; h < o; h++)
      if (c += i[h], r[h] !== void 0) {
        const d = l[h];
        d === rv ? c += Us(r[h]) : d === cv ? c += ye.transform(r[h]) : c += r[h];
      }
    return c;
  };
}
function cx(i) {
  return fv(Ol(i));
}
const fx = (i) => typeof i == "number" ? 0 : ye.test(i) ? ye.getAnimatableNone(i) : i, dx = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : fx(i);
function hx(i) {
  const l = Ol(i);
  return fv(l)(l.values.map((r, c) => dx(r, l.split[c])));
}
const wn = {
  test: lx,
  parse: rx,
  createTransformer: cx,
  getAnimatableNone: hx
};
function Uf(i, l, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? i + (l - i) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? i + (l - i) * (2 / 3 - o) * 6 : i;
}
function mx({ hue: i, saturation: l, lightness: o, alpha: r }) {
  i /= 360, l /= 100, o /= 100;
  let c = 0, h = 0, d = 0;
  if (!l)
    c = h = d = o;
  else {
    const y = o < 0.5 ? o * (1 + l) : o + l - o * l, v = 2 * o - y;
    c = Uf(v, y, i + 1 / 3), h = Uf(v, y, i), d = Uf(v, y, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(d * 255),
    alpha: r
  };
}
function Uo(i, l) {
  return (o) => o > 0 ? l : i;
}
const kt = (i, l, o) => i + (l - i) * o, Bf = (i, l, o) => {
  const r = i * i, c = o * (l * l - r) + r;
  return c < 0 ? 0 : Math.sqrt(c);
}, yx = [$f, zi, Ml], px = (i) => yx.find((l) => l.test(i));
function Op(i) {
  const l = px(i);
  if (!l)
    return !1;
  let o = l.parse(i);
  return l === Ml && (o = mx(o)), o;
}
const zp = (i, l) => {
  const o = Op(i), r = Op(l);
  if (!o || !r)
    return Uo(i, l);
  const c = { ...o };
  return (h) => (c.red = Bf(o.red, r.red, h), c.green = Bf(o.green, r.green, h), c.blue = Bf(o.blue, r.blue, h), c.alpha = kt(o.alpha, r.alpha, h), zi.transform(c));
}, Wf = /* @__PURE__ */ new Set(["none", "hidden"]);
function gx(i, l) {
  return Wf.has(i) ? (o) => o <= 0 ? i : l : (o) => o >= 1 ? l : i;
}
function vx(i, l) {
  return (o) => kt(i, l, o);
}
function Rd(i) {
  return typeof i == "number" ? vx : typeof i == "string" ? Dd(i) ? Uo : ye.test(i) ? zp : Tx : Array.isArray(i) ? dv : typeof i == "object" ? ye.test(i) ? zp : Sx : Uo;
}
function dv(i, l) {
  const o = [...i], r = o.length, c = i.map((h, d) => Rd(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < r; d++)
      o[d] = c[d](h);
    return o;
  };
}
function Sx(i, l) {
  const o = { ...i, ...l }, r = {};
  for (const c in o)
    i[c] !== void 0 && l[c] !== void 0 && (r[c] = Rd(i[c])(i[c], l[c]));
  return (c) => {
    for (const h in r)
      o[h] = r[h](c);
    return o;
  };
}
function bx(i, l) {
  const o = [], r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c], d = i.indexes[h][r[h]], y = i.values[d] ?? 0;
    o[c] = y, r[h]++;
  }
  return o;
}
const Tx = (i, l) => {
  const o = wn.createTransformer(l), r = Ol(i), c = Ol(l);
  return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? Wf.has(i) && !c.values.length || Wf.has(l) && !r.values.length ? gx(i, l) : Qs(dv(bx(r, c), c.values), o) : Uo(i, l);
};
function hv(i, l, o) {
  return typeof i == "number" && typeof l == "number" && typeof o == "number" ? kt(i, l, o) : Rd(i)(i, l);
}
const xx = (i) => {
  const l = ({ timestamp: o }) => i(o);
  return {
    start: (o = !0) => Jt.update(l, o),
    stop: () => $a(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ze.isProcessing ? ze.timestamp : Ge.now()
  };
}, mv = (i, l, o = 10) => {
  let r = "";
  const c = Math.max(Math.round(l / o), 2);
  for (let h = 0; h < c; h++)
    r += Math.round(i(h / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Bo = 2e4;
function Nd(i) {
  let l = 0;
  const o = 50;
  let r = i.next(l);
  for (; !r.done && l < Bo; )
    l += o, r = i.next(l);
  return l >= Bo ? 1 / 0 : l;
}
function Ex(i, l = 100, o) {
  const r = o({ ...i, keyframes: [0, l] }), c = Math.min(Nd(r), Bo);
  return {
    type: "keyframes",
    ease: (h) => r.next(c * h).value / l,
    duration: /* @__PURE__ */ En(c)
  };
}
const se = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function If(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const Ax = 12;
function Mx(i, l, o) {
  let r = o;
  for (let c = 1; c < Ax; c++)
    r = r - i(r) / l(r);
  return r;
}
const jf = 1e-3;
function Cx({ duration: i = se.duration, bounce: l = se.bounce, velocity: o = se.velocity, mass: r = se.mass }) {
  let c, h, d = 1 - l;
  d = ta(se.minDamping, se.maxDamping, d), i = ta(se.minDuration, se.maxDuration, /* @__PURE__ */ En(i)), d < 1 ? (c = (S) => {
    const g = S * d, p = g * i, T = g - o, V = If(S, d), _ = Math.exp(-p);
    return jf - T / V * _;
  }, h = (S) => {
    const p = S * d * i, T = p * o + o, V = Math.pow(d, 2) * Math.pow(S, 2) * i, _ = Math.exp(-p), j = If(Math.pow(S, 2), d);
    return (-c(S) + jf > 0 ? -1 : 1) * ((T - V) * _) / j;
  }) : (c = (S) => {
    const g = Math.exp(-S * i), p = (S - o) * i + 1;
    return -jf + g * p;
  }, h = (S) => {
    const g = Math.exp(-S * i), p = (o - S) * (i * i);
    return g * p;
  });
  const y = 5 / i, v = Mx(c, h, y);
  if (i = /* @__PURE__ */ cn(i), isNaN(v))
    return {
      stiffness: se.stiffness,
      damping: se.damping,
      duration: i
    };
  {
    const S = Math.pow(v, 2) * r;
    return {
      stiffness: S,
      damping: d * 2 * Math.sqrt(r * S),
      duration: i
    };
  }
}
const Dx = ["duration", "bounce"], Ox = ["stiffness", "damping", "mass"];
function Rp(i, l) {
  return l.some((o) => i[o] !== void 0);
}
function zx(i) {
  let l = {
    velocity: se.velocity,
    stiffness: se.stiffness,
    damping: se.damping,
    mass: se.mass,
    isResolvedFromDuration: !1,
    ...i
  };
  if (!Rp(i, Ox) && Rp(i, Dx))
    if (l.velocity = 0, i.visualDuration) {
      const o = i.visualDuration, r = 2 * Math.PI / (o * 1.2), c = r * r, h = 2 * ta(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      l = {
        ...l,
        mass: se.mass,
        stiffness: c,
        damping: h
      };
    } else {
      const o = Cx({ ...i, velocity: 0 });
      l = {
        ...l,
        ...o,
        mass: se.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function jo(i = se.visualDuration, l = se.bounce) {
  const o = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i;
  let { restSpeed: r, restDelta: c } = o;
  const h = o.keyframes[0], d = o.keyframes[o.keyframes.length - 1], y = { done: !1, value: h }, { stiffness: v, damping: S, mass: g, duration: p, velocity: T, isResolvedFromDuration: V } = zx({
    ...o,
    velocity: -/* @__PURE__ */ En(o.velocity || 0)
  }), _ = T || 0, j = S / (2 * Math.sqrt(v * g)), L = d - h, G = /* @__PURE__ */ En(Math.sqrt(v / g)), k = Math.abs(L) < 5;
  r || (r = k ? se.restSpeed.granular : se.restSpeed.default), c || (c = k ? se.restDelta.granular : se.restDelta.default);
  let K, Q, ut, rt, W, F;
  if (j < 1)
    ut = If(G, j), rt = (_ + j * G * L) / ut, K = (Z) => {
      const ot = Math.exp(-j * G * Z);
      return d - ot * (rt * Math.sin(ut * Z) + L * Math.cos(ut * Z));
    }, W = j * G * rt + L * ut, F = j * G * L - rt * ut, Q = (Z) => Math.exp(-j * G * Z) * (W * Math.sin(ut * Z) + F * Math.cos(ut * Z));
  else if (j === 1) {
    K = (ot) => d - Math.exp(-G * ot) * (L + (_ + G * L) * ot);
    const Z = _ + G * L;
    Q = (ot) => Math.exp(-G * ot) * (G * Z * ot - _);
  } else {
    const Z = G * Math.sqrt(j * j - 1);
    K = (Bt) => {
      const st = Math.exp(-j * G * Bt), X = Math.min(Z * Bt, 300);
      return d - st * ((_ + j * G * L) * Math.sinh(X) + Z * L * Math.cosh(X)) / Z;
    };
    const ot = (_ + j * G * L) / Z, gt = j * G * ot - L * Z, Ft = j * G * L - ot * Z;
    Q = (Bt) => {
      const st = Math.exp(-j * G * Bt), X = Math.min(Z * Bt, 300);
      return st * (gt * Math.sinh(X) + Ft * Math.cosh(X));
    };
  }
  const ct = {
    calculatedDuration: V && p || null,
    velocity: (Z) => /* @__PURE__ */ cn(Q(Z)),
    next: (Z) => {
      if (!V && j < 1) {
        const gt = Math.exp(-j * G * Z), Ft = Math.sin(ut * Z), Bt = Math.cos(ut * Z), st = d - gt * (rt * Ft + L * Bt), X = /* @__PURE__ */ cn(gt * (W * Ft + F * Bt));
        return y.done = Math.abs(X) <= r && Math.abs(d - st) <= c, y.value = y.done ? d : st, y;
      }
      const ot = K(Z);
      if (V)
        y.done = Z >= p;
      else {
        const gt = /* @__PURE__ */ cn(Q(Z));
        y.done = Math.abs(gt) <= r && Math.abs(d - ot) <= c;
      }
      return y.value = y.done ? d : ot, y;
    },
    toString: () => {
      const Z = Math.min(Nd(ct), Bo), ot = mv((gt) => ct.next(Z * gt).value, Z, 30);
      return Z + "ms " + ot;
    },
    toTransition: () => {
    }
  };
  return ct;
}
jo.applyToOptions = (i) => {
  const l = Ex(i, 100, jo);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ cn(l.duration), i.type = "keyframes", i;
};
const Rx = 5;
function yv(i, l, o) {
  const r = Math.max(l - Rx, 0);
  return /* @__PURE__ */ Jg(o - i(r), l - r);
}
function td({ keyframes: i, velocity: l = 0, power: o = 0.8, timeConstant: r = 325, bounceDamping: c = 10, bounceStiffness: h = 500, modifyTarget: d, min: y, max: v, restDelta: S = 0.5, restSpeed: g }) {
  const p = i[0], T = {
    done: !1,
    value: p
  }, V = (F) => y !== void 0 && F < y || v !== void 0 && F > v, _ = (F) => y === void 0 ? v : v === void 0 || Math.abs(y - F) < Math.abs(v - F) ? y : v;
  let j = o * l;
  const L = p + j, G = d === void 0 ? L : d(L);
  G !== L && (j = G - p);
  const k = (F) => -j * Math.exp(-F / r), K = (F) => G + k(F), Q = (F) => {
    const ct = k(F), Z = K(F);
    T.done = Math.abs(ct) <= S, T.value = T.done ? G : Z;
  };
  let ut, rt;
  const W = (F) => {
    V(T.value) && (ut = F, rt = jo({
      keyframes: [T.value, _(T.value)],
      velocity: yv(K, F, T.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: h,
      restDelta: S,
      restSpeed: g
    }));
  };
  return W(0), {
    calculatedDuration: null,
    next: (F) => {
      let ct = !1;
      return !rt && ut === void 0 && (ct = !0, Q(F), W(F)), ut !== void 0 && F >= ut ? rt.next(F - ut) : (!ct && Q(F), T);
    }
  };
}
function Nx(i, l, o) {
  const r = [], c = o || Pa.mix || hv, h = i.length - 1;
  for (let d = 0; d < h; d++) {
    let y = c(i[d], i[d + 1]);
    if (l) {
      const v = Array.isArray(l) ? l[d] || An : l;
      y = Qs(v, y);
    }
    r.push(y);
  }
  return r;
}
function _x(i, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const h = i.length;
  if (Zo(h === l.length), h === 1)
    return () => l[0];
  if (h === 2 && l[0] === l[1])
    return () => l[1];
  const d = i[0] === i[1];
  i[0] > i[h - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const y = Nx(l, r, c), v = y.length, S = (g) => {
    if (d && g < i[0])
      return l[0];
    let p = 0;
    if (v > 1)
      for (; p < i.length - 2 && !(g < i[p + 1]); p++)
        ;
    const T = /* @__PURE__ */ Hs(i[p], i[p + 1], g);
    return y[p](T);
  };
  return o ? (g) => S(ta(i[0], i[h - 1], g)) : S;
}
function Vx(i, l) {
  const o = i[i.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = /* @__PURE__ */ Hs(0, l, r);
    i.push(kt(o, 1, c));
  }
}
function wx(i) {
  const l = [0];
  return Vx(l, i.length - 1), l;
}
function Ux(i, l) {
  return i.map((o) => o * l);
}
function Bx(i, l) {
  return i.map(() => l || av).splice(0, i.length - 1);
}
function Bs({ duration: i = 300, keyframes: l, times: o, ease: r = "easeInOut" }) {
  const c = /* @__PURE__ */ QT(r) ? r.map(Ap) : Ap(r), h = {
    done: !1,
    value: l[0]
  }, d = Ux(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === l.length ? o : wx(l),
    i
  ), y = _x(d, l, {
    ease: Array.isArray(c) ? c : Bx(l, c)
  });
  return {
    calculatedDuration: i,
    next: (v) => (h.value = y(v), h.done = v >= i, h)
  };
}
const jx = (i) => i !== null;
function Ko(i, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const h = i.filter(jx), y = c < 0 || l && o !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
  return !y || r === void 0 ? h[y] : r;
}
const Lx = {
  decay: td,
  inertia: td,
  tween: Bs,
  keyframes: Bs,
  spring: jo
};
function pv(i) {
  typeof i.type == "string" && (i.type = Lx[i.type]);
}
class _d {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const Hx = (i) => i / 100;
class Lo extends _d {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: o } = this.options;
      o && o.updatedAt !== Ge.now() && this.tick(Ge.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    pv(l);
    const { type: o = Bs, repeat: r = 0, repeatDelay: c = 0, repeatType: h, velocity: d = 0 } = l;
    let { keyframes: y } = l;
    const v = o || Bs;
    v !== Bs && typeof y[0] != "number" && (this.mixKeyframes = Qs(Hx, hv(y[0], y[1])), y = [0, 100]);
    const S = v({ ...l, keyframes: y });
    h === "mirror" && (this.mirroredGenerator = v({
      ...l,
      keyframes: [...y].reverse(),
      velocity: -d
    })), S.calculatedDuration === null && (S.calculatedDuration = Nd(S));
    const { calculatedDuration: g } = S;
    this.calculatedDuration = g, this.resolvedDuration = g + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = S;
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o;
  }
  tick(l, o = !1) {
    const { generator: r, totalDuration: c, mixKeyframes: h, mirroredGenerator: d, resolvedDuration: y, calculatedDuration: v } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: S = 0, keyframes: g, repeat: p, repeatType: T, repeatDelay: V, type: _, onUpdate: j, finalKeyframe: L } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), o ? this.currentTime = l : this.updateTime(l);
    const G = this.currentTime - S * (this.playbackSpeed >= 0 ? 1 : -1), k = this.playbackSpeed >= 0 ? G < 0 : G > c;
    this.currentTime = Math.max(G, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let K = this.currentTime, Q = r;
    if (p) {
      const F = Math.min(this.currentTime, c) / y;
      let ct = Math.floor(F), Z = F % 1;
      !Z && F >= 1 && (Z = 1), Z === 1 && ct--, ct = Math.min(ct, p + 1), ct % 2 && (T === "reverse" ? (Z = 1 - Z, V && (Z -= V / y)) : T === "mirror" && (Q = d)), K = ta(0, 1, Z) * y;
    }
    let ut;
    k ? (this.delayState.value = g[0], ut = this.delayState) : ut = Q.next(K), h && !k && (ut.value = h(ut.value));
    let { done: rt } = ut;
    !k && v !== null && (rt = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const W = this.holdTime === null && (this.state === "finished" || this.state === "running" && rt);
    return W && _ !== td && (ut.value = Ko(g, this.options, L, this.speed)), j && j(ut.value), W && this.finish(), ut;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return /* @__PURE__ */ En(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ En(l);
  }
  get time() {
    return /* @__PURE__ */ En(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ cn(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(l);
    const o = this.generator.next(l).value;
    return yv((r) => this.generator.next(r).value, l, o);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const o = this.playbackSpeed !== l;
    o && this.driver && this.updateTime(Ge.now()), this.playbackSpeed = l, o && this.driver && (this.time = /* @__PURE__ */ En(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = xx, startTime: o } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = o ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ge.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), l.observe(this);
  }
}
function Yx(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const Ri = (i) => i * 180 / Math.PI, ed = (i) => {
  const l = Ri(Math.atan2(i[1], i[0]));
  return nd(l);
}, qx = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: ed,
  rotateZ: ed,
  skewX: (i) => Ri(Math.atan(i[1])),
  skewY: (i) => Ri(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, nd = (i) => (i = i % 360, i < 0 && (i += 360), i), Np = ed, _p = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), Vp = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), Gx = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: _p,
  scaleY: Vp,
  scale: (i) => (_p(i) + Vp(i)) / 2,
  rotateX: (i) => nd(Ri(Math.atan2(i[6], i[5]))),
  rotateY: (i) => nd(Ri(Math.atan2(-i[2], i[0]))),
  rotateZ: Np,
  rotate: Np,
  skewX: (i) => Ri(Math.atan(i[4])),
  skewY: (i) => Ri(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function ad(i) {
  return i.includes("scale") ? 1 : 0;
}
function id(i, l) {
  if (!i || i === "none")
    return ad(l);
  const o = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o)
    r = Gx, c = o;
  else {
    const y = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = qx, c = y;
  }
  if (!c)
    return ad(l);
  const h = r[l], d = c[1].split(",").map(Qx);
  return typeof h == "function" ? h(d) : d[h];
}
const Xx = (i, l) => {
  const { transform: o = "none" } = getComputedStyle(i);
  return id(o, l);
};
function Qx(i) {
  return parseFloat(i.trim());
}
const Nl = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], _l = /* @__PURE__ */ new Set([...Nl, "pathRotation"]), wp = (i) => i === Rl || i === nt, Zx = /* @__PURE__ */ new Set(["x", "y", "z"]), Kx = Nl.filter((i) => !Zx.has(i));
function kx(i) {
  const l = [];
  return Kx.forEach((o) => {
    const r = i.getValue(o);
    r !== void 0 && (l.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0));
  }), l;
}
const Fa = {
  // Dimensions
  width: ({ x: i }, { paddingLeft: l = "0", paddingRight: o = "0", boxSizing: r }) => {
    const c = i.max - i.min;
    return r === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  height: ({ y: i }, { paddingTop: l = "0", paddingBottom: o = "0", boxSizing: r }) => {
    const c = i.max - i.min;
    return r === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  top: (i, { top: l }) => parseFloat(l),
  left: (i, { left: l }) => parseFloat(l),
  bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min),
  right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min),
  // Transform
  x: (i, { transform: l }) => id(l, "x"),
  y: (i, { transform: l }) => id(l, "y")
};
Fa.translateX = Fa.x;
Fa.translateY = Fa.y;
const Ni = /* @__PURE__ */ new Set();
let ld = !1, sd = !1, ud = !1;
function gv() {
  if (sd) {
    const i = Array.from(Ni).filter((r) => r.needsMeasurement), l = new Set(i.map((r) => r.element)), o = /* @__PURE__ */ new Map();
    l.forEach((r) => {
      const c = kx(r);
      c.length && (o.set(r, c), r.render());
    }), i.forEach((r) => r.measureInitialState()), l.forEach((r) => {
      r.render();
      const c = o.get(r);
      c && c.forEach(([h, d]) => {
        r.getValue(h)?.set(d);
      });
    }), i.forEach((r) => r.measureEndState()), i.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  sd = !1, ld = !1, Ni.forEach((i) => i.complete(ud)), Ni.clear();
}
function vv() {
  Ni.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (sd = !0);
  });
}
function Jx() {
  ud = !0, vv(), gv(), ud = !1;
}
class Vd {
  constructor(l, o, r, c, h, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = o, this.name = r, this.motionValue = c, this.element = h, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Ni.add(this), ld || (ld = !0, Jt.read(vv), Jt.resolveKeyframes(gv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: o, element: r, motionValue: c } = this;
    if (l[0] === null) {
      const h = c?.get(), d = l[l.length - 1];
      if (h !== void 0)
        l[0] = h;
      else if (r && o) {
        const y = r.readValue(o, d);
        y != null && (l[0] = y);
      }
      l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0]);
    }
    Yx(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), Ni.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ni.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Fx = (i) => i.startsWith("--");
function Sv(i, l, o) {
  Fx(l) ? i.style.setProperty(l, o) : i.style[l] = o;
}
const Px = {};
function bv(i, l) {
  const o = /* @__PURE__ */ kg(i);
  return () => Px[l] ?? o();
}
const $x = /* @__PURE__ */ bv(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Tv = /* @__PURE__ */ bv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Vs = ([i, l, o, r]) => `cubic-bezier(${i}, ${l}, ${o}, ${r})`, Up = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Vs([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Vs([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Vs([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Vs([0.33, 1.53, 0.69, 0.99])
};
function xv(i, l) {
  if (i)
    return typeof i == "function" ? Tv() ? mv(i, l) : "ease-out" : /* @__PURE__ */ iv(i) ? Vs(i) : Array.isArray(i) ? i.map((o) => xv(o, l) || Up.easeOut) : Up[i];
}
function Wx(i, l, o, { delay: r = 0, duration: c = 300, repeat: h = 0, repeatType: d = "loop", ease: y = "easeOut", times: v } = {}, S = void 0) {
  const g = {
    [l]: o
  };
  v && (g.offset = v);
  const p = xv(y, c);
  Array.isArray(p) && (g.easing = p);
  const T = {
    delay: r,
    duration: c,
    easing: Array.isArray(p) ? "linear" : p,
    fill: "both",
    iterations: h + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return S && (T.pseudoElement = S), i.animate(g, T);
}
function Ev(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function Ix({ type: i, ...l }) {
  return Ev(i) && Tv() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class Av extends _d {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: o, name: r, keyframes: c, pseudoElement: h, allowFlatten: d = !1, finalKeyframe: y, onComplete: v } = l;
    this.isPseudoElement = !!h, this.allowFlatten = d, this.options = l, Zo(typeof l.type != "string");
    const S = Ix(l);
    this.animation = Wx(o, r, c, S, h), S.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !h) {
        const g = Ko(c, this.options, y, this.speed);
        this.updateMotionValue && this.updateMotionValue(g), Sv(o, r, g), this.animation.cancel();
      }
      v?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const l = this.options?.element;
    !this.isPseudoElement && l?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ En(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ En(l);
  }
  get time() {
    return /* @__PURE__ */ En(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const o = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ cn(l), o && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, rangeStart: o, rangeEnd: r, observe: c }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && $x() ? (this.animation.timeline = l, o && (this.animation.rangeStart = o), r && (this.animation.rangeEnd = r), An) : c(this);
  }
}
const Mv = {
  anticipate: tv,
  backInOut: Ig,
  circInOut: nv
};
function t2(i) {
  return i in Mv;
}
function e2(i) {
  typeof i.ease == "string" && t2(i.ease) && (i.ease = Mv[i.ease]);
}
const Lf = 10;
class n2 extends Av {
  constructor(l) {
    e2(l), pv(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: o, onUpdate: r, onComplete: c, element: h, ...d } = this.options;
    if (!o)
      return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const y = new Lo({
      ...d,
      autoplay: !1
    }), v = Math.max(Lf, Ge.now() - this.startTime), S = ta(0, Lf, v - Lf), g = y.sample(v).value, { name: p } = this.options;
    h && p && Sv(h, p, g), o.setWithVelocity(y.sample(Math.max(0, v - S)).value, g, S), y.stop();
  }
}
const Bp = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(wn.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function a2(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let o = 0; o < i.length; o++)
    if (i[o] !== l)
      return !0;
}
function i2(i, l, o, r) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const h = i[i.length - 1], d = Bp(c, l), y = Bp(h, l);
  return !d || !y ? !1 : a2(i) || (o === "spring" || Ev(o)) && r;
}
function od(i) {
  i.duration = 0, i.type = "keyframes";
}
const Cv = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), l2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function s2(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && l2.test(i[l]))
      return !0;
  return !1;
}
const u2 = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), o2 = /* @__PURE__ */ kg(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function r2(i) {
  const { motionValue: l, name: o, repeatDelay: r, repeatType: c, damping: h, type: d, keyframes: y } = i, v = l?.owner?.current;
  if (!(v instanceof HTMLElement) && !(v instanceof SVGElement))
    return !1;
  const { onUpdate: S, transformTemplate: g } = l.owner.getProps();
  return o2() && o && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Cv.has(o) || u2.has(o) && s2(y)) && (o !== "transform" || !g) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !S && !r && c !== "mirror" && h !== 0 && d !== "inertia";
}
const c2 = 40;
class f2 extends _d {
  constructor({ autoplay: l = !0, delay: o = 0, type: r = "keyframes", repeat: c = 0, repeatDelay: h = 0, repeatType: d = "loop", keyframes: y, name: v, motionValue: S, element: g, ...p }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Ge.now();
    const T = {
      autoplay: l,
      delay: o,
      type: r,
      repeat: c,
      repeatDelay: h,
      repeatType: d,
      name: v,
      motionValue: S,
      element: g,
      ...p
    }, V = g?.KeyframeResolver || Vd;
    this.keyframeResolver = new V(y, (_, j, L) => this.onKeyframesResolved(_, j, T, !L), v, S, g), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, o, r, c) {
    this.keyframeResolver = void 0;
    const { name: h, type: d, velocity: y, delay: v, isHandoff: S, onUpdate: g } = r;
    this.resolvedAt = Ge.now();
    let p = !0;
    i2(l, h, d, y) || (p = !1, (Pa.instantAnimations || !v) && g?.(Ko(l, r, o)), l[0] = l[l.length - 1], od(r), r.repeat = 0);
    const V = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > c2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: o,
      ...r,
      keyframes: l
    }, _ = p && !S && r2(V), j = V.motionValue?.owner?.current;
    let L;
    if (_)
      try {
        L = new n2({
          ...V,
          element: j
        });
      } catch {
        L = new Lo(V);
      }
    else
      L = new Lo(V);
    L.finished.then(() => {
      this.notifyFinished();
    }).catch(An), this.pendingTimeline && (this.stopTimeline = L.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = L;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Jx()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
function Dv(i, l, o, r = 0, c = 1) {
  const h = Array.from(i).sort((S, g) => S.sortNodePosition(g)).indexOf(l), d = i.size, y = (d - 1) * r;
  return typeof o == "function" ? o(h, d) : c === 1 ? h * r : y - h * r;
}
const jp = 30, d2 = (i) => !isNaN(parseFloat(i));
class h2 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, o = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const c = Ge.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const h of this.dependents)
          h.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = o.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = Ge.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = d2(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new Ad());
    const r = this.events[l].add(o);
    return l === "change" ? () => {
      r(), Jt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, o) {
    this.passiveEffect = l, this.stopPassiveEffect = o;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, o, r) {
    this.set(o), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, o = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, o && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = Ge.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > jp)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, jp);
    return /* @__PURE__ */ Jg(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(l) {
    return this.stop(), new Promise((o) => {
      this.hasAnimated = !0, this.animation = l(o), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function zl(i, l) {
  return new h2(i, l);
}
function Ov(i, l) {
  if (i?.inherit && l) {
    const { inherit: o, ...r } = i;
    return { ...l, ...r };
  }
  return i;
}
function wd(i, l) {
  const o = i?.[l] ?? i?.default ?? i;
  return o !== i ? Ov(o, i) : o;
}
const m2 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, y2 = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), p2 = {
  type: "keyframes",
  duration: 0.8
}, g2 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, v2 = (i, { keyframes: l }) => l.length > 2 ? p2 : _l.has(i) ? i.startsWith("scale") ? y2(l[1]) : m2 : g2, S2 = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function b2(i) {
  for (const l in i)
    if (!S2.has(l))
      return !0;
  return !1;
}
const Ud = (i, l, o, r = {}, c, h) => (d) => {
  const y = wd(r, i) || {}, v = y.delay || r.delay || 0;
  let { elapsed: S = 0 } = r;
  S = S - /* @__PURE__ */ cn(v);
  const g = {
    keyframes: Array.isArray(o) ? o : [null, o],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...y,
    delay: -S,
    onUpdate: (T) => {
      l.set(T), y.onUpdate && y.onUpdate(T);
    },
    onComplete: () => {
      d(), y.onComplete && y.onComplete();
    },
    name: i,
    motionValue: l,
    element: h ? void 0 : c
  };
  b2(y) || Object.assign(g, v2(i, g)), g.duration && (g.duration = /* @__PURE__ */ cn(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ cn(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let p = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (od(g), g.delay === 0 && (p = !0)), (Pa.instantAnimations || Pa.skipAnimations || c?.shouldSkipAnimations || y.skipAnimations) && (p = !0, od(g), g.delay = 0), g.allowFlatten = !y.type && !y.ease, p && !h && l.get() !== void 0) {
    const T = Ko(g.keyframes, y);
    if (T !== void 0) {
      Jt.update(() => {
        g.onUpdate(T), g.onComplete();
      });
      return;
    }
  }
  return y.isSync ? new Lo(g) : new f2(g);
}, T2 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function x2(i) {
  const l = T2.exec(i);
  if (!l)
    return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
function zv(i, l, o = 1) {
  const [r, c] = x2(i);
  if (!r)
    return;
  const h = window.getComputedStyle(l).getPropertyValue(r);
  if (h) {
    const d = h.trim();
    return Qg(d) ? parseFloat(d) : d;
  }
  return Dd(c) ? zv(c, l, o + 1) : c;
}
function Lp(i) {
  const l = [{}, {}];
  return i?.values.forEach((o, r) => {
    l[0][r] = o.get(), l[1][r] = o.getVelocity();
  }), l;
}
function Bd(i, l, o, r) {
  if (typeof l == "function") {
    const [c, h] = Lp(r);
    l = l(o !== void 0 ? o : i.custom, c, h);
  }
  if (typeof l == "string" && (l = i.variants && i.variants[l]), typeof l == "function") {
    const [c, h] = Lp(r);
    l = l(o !== void 0 ? o : i.custom, c, h);
  }
  return l;
}
function _i(i, l, o) {
  const r = i.getProps();
  return Bd(r, l, o !== void 0 ? o : r.custom, i);
}
const Rv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Nl
]), rd = (i) => Array.isArray(i);
function E2(i, l, o) {
  i.hasValue(l) ? i.getValue(l).set(o) : i.addValue(l, zl(o));
}
function A2(i) {
  return rd(i) ? i[i.length - 1] || 0 : i;
}
function M2(i, l) {
  const o = _i(i, l);
  let { transitionEnd: r = {}, transition: c = {}, ...h } = o || {};
  h = { ...h, ...r };
  for (const d in h) {
    const y = A2(h[d]);
    E2(i, d, y);
  }
}
const Re = (i) => !!(i && i.getVelocity);
function C2(i) {
  return !!(Re(i) && i.add);
}
function cd(i, l) {
  const o = i.getValue("willChange");
  if (C2(o))
    return o.add(l);
  if (!o && Pa.WillChange) {
    const r = new Pa.WillChange("auto");
    i.addValue("willChange", r), r.add(l);
  }
}
function jd(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const D2 = "framerAppearId", Nv = "data-" + jd(D2);
function _v(i) {
  return i.props[Nv];
}
function O2({ protectedKeys: i, needsAnimating: l }, o) {
  const r = i.hasOwnProperty(o) && l[o] !== !0;
  return l[o] = !1, r;
}
function Vv(i, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...y } = l;
  const v = i.getDefaultTransition();
  h = h ? Ov(h, v) : v;
  const S = h?.reduceMotion, g = h?.skipAnimations;
  r && (h = r);
  const p = [], T = c && i.animationState && i.animationState.getState()[c], V = h?.path;
  V && V.animateVisualElement(i, y, h, o, p);
  for (const _ in y) {
    const j = i.getValue(_, i.latestValues[_] ?? null), L = y[_];
    if (L === void 0 || T && O2(T, _))
      continue;
    const G = {
      delay: o,
      ...wd(h || {}, _)
    };
    g && (G.skipAnimations = !0);
    const k = j.get();
    if (k !== void 0 && !j.isAnimating() && !Array.isArray(L) && L === k && !G.velocity) {
      Jt.update(() => j.set(L));
      continue;
    }
    let K = !1;
    if (window.MotionHandoffAnimation) {
      const rt = _v(i);
      if (rt) {
        const W = window.MotionHandoffAnimation(rt, _, Jt);
        W !== null && (G.startTime = W, K = !0);
      }
    }
    cd(i, _);
    const Q = S ?? i.shouldReduceMotion;
    j.start(Ud(_, j, L, Q && Rv.has(_) ? { type: !1 } : G, i, K));
    const ut = j.animation;
    ut && p.push(ut);
  }
  if (d) {
    const _ = () => Jt.update(() => {
      d && M2(i, d);
    });
    p.length ? Promise.all(p).then(_) : _();
  }
  return p;
}
function fd(i, l, o = {}) {
  const r = _i(i, l, o.type === "exit" ? i.presenceContext?.custom : void 0);
  let { transition: c = i.getDefaultTransition() || {} } = r || {};
  o.transitionOverride && (c = o.transitionOverride);
  const h = r ? () => Promise.all(Vv(i, r, o)) : () => Promise.resolve(), d = i.variantChildren && i.variantChildren.size ? (v = 0) => {
    const { delayChildren: S = 0, staggerChildren: g, staggerDirection: p } = c;
    return z2(i, l, v, S, g, p, o);
  } : () => Promise.resolve(), { when: y } = c;
  if (y) {
    const [v, S] = y === "beforeChildren" ? [h, d] : [d, h];
    return v().then(() => S());
  } else
    return Promise.all([h(), d(o.delay)]);
}
function z2(i, l, o = 0, r = 0, c = 0, h = 1, d) {
  const y = [];
  for (const v of i.variantChildren)
    v.notify("AnimationStart", l), y.push(fd(v, l, {
      ...d,
      delay: o + (typeof r == "function" ? 0 : r) + Dv(i.variantChildren, v, r, c, h)
    }).then(() => v.notify("AnimationComplete", l)));
  return Promise.all(y);
}
function R2(i, l, o = {}) {
  i.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((h) => fd(i, h, o));
    r = Promise.all(c);
  } else if (typeof l == "string")
    r = fd(i, l, o);
  else {
    const c = typeof l == "function" ? _i(i, l, o.custom) : l;
    r = Promise.all(Vv(i, c, o));
  }
  return r.then(() => {
    i.notify("AnimationComplete", l);
  });
}
const N2 = {
  test: (i) => i === "auto",
  parse: (i) => i
}, wv = (i) => (l) => l.test(i), Uv = [Rl, nt, In, pa, ax, nx, N2], Hp = (i) => Uv.find(wv(i));
function _2(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || Kg(i) : !0;
}
const V2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function w2(i) {
  const [l, o] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [r] = o.match(Od) || [];
  if (!r)
    return i;
  const c = o.replace(r, "");
  let h = V2.has(l) ? 1 : 0;
  return r !== o && (h *= 100), l + "(" + h + c + ")";
}
const U2 = /\b([a-z-]*)\(.*?\)/gu, dd = {
  ...wn,
  getAnimatableNone: (i) => {
    const l = i.match(U2);
    return l ? l.map(w2).join(" ") : i;
  }
}, hd = {
  ...wn,
  getAnimatableNone: (i) => {
    const l = wn.parse(i);
    return wn.createTransformer(i)(l.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, Yp = {
  ...Rl,
  transform: Math.round
}, B2 = {
  rotate: pa,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: pa,
  rotateX: pa,
  rotateY: pa,
  rotateZ: pa,
  scale: Eo,
  scaleX: Eo,
  scaleY: Eo,
  scaleZ: Eo,
  skew: pa,
  skewX: pa,
  skewY: pa,
  distance: nt,
  translateX: nt,
  translateY: nt,
  translateZ: nt,
  x: nt,
  y: nt,
  z: nt,
  perspective: nt,
  transformPerspective: nt,
  opacity: Ys,
  originX: Cp,
  originY: Cp,
  originZ: nt
}, Ho = {
  // Border props
  borderWidth: nt,
  borderTopWidth: nt,
  borderRightWidth: nt,
  borderBottomWidth: nt,
  borderLeftWidth: nt,
  borderRadius: nt,
  borderTopLeftRadius: nt,
  borderTopRightRadius: nt,
  borderBottomRightRadius: nt,
  borderBottomLeftRadius: nt,
  // Positioning props
  width: nt,
  maxWidth: nt,
  height: nt,
  maxHeight: nt,
  top: nt,
  right: nt,
  bottom: nt,
  left: nt,
  inset: nt,
  insetBlock: nt,
  insetBlockStart: nt,
  insetBlockEnd: nt,
  insetInline: nt,
  insetInlineStart: nt,
  insetInlineEnd: nt,
  // Spacing props
  padding: nt,
  paddingTop: nt,
  paddingRight: nt,
  paddingBottom: nt,
  paddingLeft: nt,
  paddingBlock: nt,
  paddingBlockStart: nt,
  paddingBlockEnd: nt,
  paddingInline: nt,
  paddingInlineStart: nt,
  paddingInlineEnd: nt,
  margin: nt,
  marginTop: nt,
  marginRight: nt,
  marginBottom: nt,
  marginLeft: nt,
  marginBlock: nt,
  marginBlockStart: nt,
  marginBlockEnd: nt,
  marginInline: nt,
  marginInlineStart: nt,
  marginInlineEnd: nt,
  // Typography
  fontSize: nt,
  // Misc
  backgroundPositionX: nt,
  backgroundPositionY: nt,
  ...B2,
  zIndex: Yp,
  // SVG
  fillOpacity: Ys,
  strokeOpacity: Ys,
  numOctaves: Yp
}, j2 = {
  ...Ho,
  // Color props
  color: ye,
  backgroundColor: ye,
  outlineColor: ye,
  fill: ye,
  stroke: ye,
  // Border props
  borderColor: ye,
  borderTopColor: ye,
  borderRightColor: ye,
  borderBottomColor: ye,
  borderLeftColor: ye,
  filter: dd,
  WebkitFilter: dd,
  mask: hd,
  WebkitMask: hd
}, Bv = (i) => j2[i], L2 = /* @__PURE__ */ new Set([dd, hd]);
function jv(i, l) {
  let o = Bv(i);
  return L2.has(o) || (o = wn), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0;
}
const H2 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Y2(i, l, o) {
  let r = 0, c;
  for (; r < i.length && !c; ) {
    const h = i[r];
    typeof h == "string" && !H2.has(h) && Ol(h).values.length && (c = i[r]), r++;
  }
  if (c && o)
    for (const h of l)
      i[h] = jv(o, c);
}
class q2 extends Vd {
  constructor(l, o, r, c, h) {
    super(l, o, r, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: r } = this;
    if (!o || !o.current)
      return;
    super.readKeyframes();
    for (let g = 0; g < l.length; g++) {
      let p = l[g];
      if (typeof p == "string" && (p = p.trim(), Dd(p))) {
        const T = zv(p, o.current);
        T !== void 0 && (l[g] = T), g === l.length - 1 && (this.finalKeyframe = p);
      }
    }
    if (this.resolveNoneKeyframes(), !Rv.has(r) || l.length !== 2)
      return;
    const [c, h] = l, d = Hp(c), y = Hp(h), v = Mp(c), S = Mp(h);
    if (v !== S && Fa[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== y)
      if (wp(d) && wp(y))
        for (let g = 0; g < l.length; g++) {
          const p = l[g];
          typeof p == "string" && (l[g] = parseFloat(p));
        }
      else Fa[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this, r = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || _2(l[c])) && r.push(c);
    r.length && Y2(l, r, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: r } = this;
    if (!l || !l.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Fa[r](l.measureViewportBox(), window.getComputedStyle(l.current)), o[0] = this.measuredOrigin;
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    const { element: l, name: o, unresolvedKeyframes: r } = this;
    if (!l || !l.current)
      return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const h = r.length - 1, d = r[h];
    r[h] = Fa[o](l.measureViewportBox(), window.getComputedStyle(l.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), this.removedTransforms?.length && this.removedTransforms.forEach(([y, v]) => {
      l.getValue(y).set(v);
    }), this.resolveNoneKeyframes();
  }
}
const Ld = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function Lv(i, l, o) {
  if (i == null)
    return [];
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    let r = document;
    const c = o?.[i] ?? r.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((r) => r != null);
}
const md = (i, l) => l && typeof i == "number" ? l.transform(i) : i;
function G2(i) {
  return Zg(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: Hd } = /* @__PURE__ */ lv(queueMicrotask, !1), Vn = {
  x: !1,
  y: !1
};
function Hv() {
  return Vn.x || Vn.y;
}
function X2(i) {
  return i === "x" || i === "y" ? Vn[i] ? null : (Vn[i] = !0, () => {
    Vn[i] = !1;
  }) : Vn.x || Vn.y ? null : (Vn.x = Vn.y = !0, () => {
    Vn.x = Vn.y = !1;
  });
}
function Yv(i, l) {
  const o = Lv(i), r = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: r.signal
  };
  return [o, c, () => r.abort()];
}
function Q2(i) {
  return !(i.pointerType === "touch" || Hv());
}
function Z2(i, l, o = {}) {
  const [r, c, h] = Yv(i, o);
  return r.forEach((d) => {
    let y = !1, v = !1, S;
    const g = () => {
      d.removeEventListener("pointerleave", _);
    }, p = (L) => {
      S && (S(L), S = void 0), g();
    }, T = (L) => {
      y = !1, window.removeEventListener("pointerup", T), window.removeEventListener("pointercancel", T), v && (v = !1, p(L));
    }, V = () => {
      y = !0, window.addEventListener("pointerup", T, c), window.addEventListener("pointercancel", T, c);
    }, _ = (L) => {
      if (L.pointerType !== "touch") {
        if (y) {
          v = !0;
          return;
        }
        p(L);
      }
    }, j = (L) => {
      if (!Q2(L))
        return;
      v = !1;
      const G = l(d, L);
      typeof G == "function" && (S = G, d.addEventListener("pointerleave", _, c));
    };
    d.addEventListener("pointerenter", j, c), d.addEventListener("pointerdown", V, c);
  }), h;
}
const qv = (i, l) => l ? i === l ? !0 : qv(i, l.parentElement) : !1, Yd = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, K2 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function k2(i) {
  return K2.has(i.tagName) || i.isContentEditable === !0;
}
const J2 = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function F2(i) {
  return J2.has(i.tagName) || i.isContentEditable === !0;
}
const Do = /* @__PURE__ */ new WeakSet();
function qp(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function Hf(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const P2 = (i, l) => {
  const o = i.currentTarget;
  if (!o)
    return;
  const r = qp(() => {
    if (Do.has(o))
      return;
    Hf(o, "down");
    const c = qp(() => {
      Hf(o, "up");
    }), h = () => Hf(o, "cancel");
    o.addEventListener("keyup", c, l), o.addEventListener("blur", h, l);
  });
  o.addEventListener("keydown", r, l), o.addEventListener("blur", () => o.removeEventListener("keydown", r), l);
};
function Gp(i) {
  return Yd(i) && !Hv();
}
const Xp = /* @__PURE__ */ new WeakSet();
function $2(i, l, o = {}) {
  const [r, c, h] = Yv(i, o), d = (y) => {
    const v = y.currentTarget;
    if (!Gp(y) || Xp.has(y))
      return;
    Do.add(v), o.stopPropagation && Xp.add(y);
    const S = l(v, y), g = { ...c, capture: !0 }, p = (_, j) => {
      window.removeEventListener("pointerup", T, g), window.removeEventListener("pointercancel", V, g), Do.has(v) && Do.delete(v), Gp(_) && typeof S == "function" && S(_, { success: j });
    }, T = (_) => {
      p(_, v === window || v === document || o.useGlobalTarget || qv(v, _.target));
    }, V = (_) => {
      p(_, !1);
    };
    window.addEventListener("pointerup", T, g), window.addEventListener("pointercancel", V, g);
  };
  return r.forEach((y) => {
    (o.useGlobalTarget ? window : y).addEventListener("pointerdown", d, c), G2(y) && (y.addEventListener("focus", (S) => P2(S, c)), !k2(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0));
  }), h;
}
function qd(i) {
  return Zg(i) && "ownerSVGElement" in i;
}
const Oo = /* @__PURE__ */ new WeakMap();
let zo;
const Gv = (i, l, o) => (r, c) => c && c[0] ? c[0][i + "Size"] : qd(r) && "getBBox" in r ? r.getBBox()[l] : r[o], W2 = /* @__PURE__ */ Gv("inline", "width", "offsetWidth"), I2 = /* @__PURE__ */ Gv("block", "height", "offsetHeight");
function tE({ target: i, borderBoxSize: l }) {
  Oo.get(i)?.forEach((o) => {
    o(i, {
      get width() {
        return W2(i, l);
      },
      get height() {
        return I2(i, l);
      }
    });
  });
}
function eE(i) {
  i.forEach(tE);
}
function nE() {
  typeof ResizeObserver > "u" || (zo = new ResizeObserver(eE));
}
function aE(i, l) {
  zo || nE();
  const o = Lv(i);
  return o.forEach((r) => {
    let c = Oo.get(r);
    c || (c = /* @__PURE__ */ new Set(), Oo.set(r, c)), c.add(l), zo?.observe(r);
  }), () => {
    o.forEach((r) => {
      const c = Oo.get(r);
      c?.delete(l), c?.size || zo?.unobserve(r);
    });
  };
}
const Ro = /* @__PURE__ */ new Set();
let Cl;
function iE() {
  Cl = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Ro.forEach((l) => l(i));
  }, window.addEventListener("resize", Cl);
}
function lE(i) {
  return Ro.add(i), Cl || iE(), () => {
    Ro.delete(i), !Ro.size && typeof Cl == "function" && (window.removeEventListener("resize", Cl), Cl = void 0);
  };
}
function Qp(i, l) {
  return typeof i == "function" ? lE(i) : aE(i, l);
}
function sE(i) {
  return qd(i) && i.tagName === "svg";
}
const uE = [...Uv, ye, wn], oE = (i) => uE.find(wv(i)), Zp = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Dl = () => ({
  x: Zp(),
  y: Zp()
}), Kp = () => ({ min: 0, max: 0 }), ve = () => ({
  x: Kp(),
  y: Kp()
}), rE = /* @__PURE__ */ new WeakMap();
function ko(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function qs(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Gd = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Xd = ["initial", ...Gd];
function Jo(i) {
  return ko(i.animate) || Xd.some((l) => qs(i[l]));
}
function Xv(i) {
  return !!(Jo(i) || i.variants);
}
function cE(i, l, o) {
  for (const r in l) {
    const c = l[r], h = o[r];
    if (Re(c))
      i.addValue(r, c);
    else if (Re(h))
      i.addValue(r, zl(c, { owner: i }));
    else if (h !== c)
      if (i.hasValue(r)) {
        const d = i.getValue(r);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = i.getStaticValue(r);
        i.addValue(r, zl(d !== void 0 ? d : c, { owner: i }));
      }
  }
  for (const r in o)
    l[r] === void 0 && i.removeValue(r);
  return l;
}
const Yo = { current: null }, Qd = { current: !1 }, fE = typeof window < "u";
function Qv() {
  if (Qd.current = !0, !!fE)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => Yo.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      Yo.current = !1;
}
const kp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let qo = {};
function Zv(i) {
  qo = i;
}
function dE() {
  return qo;
}
class hE {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, o, r) {
    return {};
  }
  constructor({ parent: l, props: o, presenceContext: r, reducedMotionConfig: c, skipAnimations: h, blockInitialAnimation: d, visualState: y }, v = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Vd, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const V = Ge.now();
      this.renderScheduledAt < V && (this.renderScheduledAt = V, Jt.render(this.render, !1, !0));
    };
    const { latestValues: S, renderState: g } = y;
    this.latestValues = S, this.baseTarget = { ...S }, this.initialValues = o.initial ? { ...S } : {}, this.renderState = g, this.parent = l, this.props = o, this.presenceContext = r, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = h, this.options = v, this.blockInitialAnimation = !!d, this.isControllingVariants = Jo(o), this.isVariantNode = Xv(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: p, ...T } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const V in T) {
      const _ = T[V];
      S[V] !== void 0 && Re(_) && _.set(S[V]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        this.values.get(o)?.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    this.current = l, rE.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((o, r) => this.bindToMotionValue(r, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Qd.current || Qv(), this.shouldReduceMotion = Yo.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), $a(this.notifyUpdate), $a(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const o = this.features[l];
      o && (o.unmount(), o.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, o) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), o.accelerate && Cv.has(l) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: y, times: v, ease: S, duration: g } = o.accelerate, p = new Av({
        element: this.current,
        name: l,
        keyframes: y,
        times: v,
        ease: S,
        duration: /* @__PURE__ */ cn(g)
      }), T = d(p);
      this.valueSubscriptions.set(l, () => {
        T(), p.cancel();
      });
      return;
    }
    const r = _l.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (d) => {
      this.latestValues[l] = d, this.props.onUpdate && Jt.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let h;
    typeof window < "u" && window.MotionCheckAppearSync && (h = window.MotionCheckAppearSync(this, l, o)), this.valueSubscriptions.set(l, () => {
      c(), h && h();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in qo) {
      const o = qo[l];
      if (!o)
        continue;
      const { isEnabled: r, Feature: c } = o;
      if (!this.features[l] && c && r(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), h.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ve();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, o) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
    for (let r = 0; r < kp.length; r++) {
      const c = kp[r];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const h = "on" + c, d = l[h];
      d && (this.propEventSubscriptions[c] = this.on(c, d));
    }
    this.prevMotionValues = cE(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o)
      return o.variantChildren && o.variantChildren.add(l), () => o.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, o) {
    const r = this.values.get(l);
    o !== r && (r && this.removeValue(l), this.bindToMotionValue(l, o), this.values.set(l, o), this.latestValues[l] = o.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    o && (o(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let r = this.values.get(l);
    return r === void 0 && o !== void 0 && (r = zl(o === null ? void 0 : o, { owner: this }), this.addValue(l, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, o) {
    let r = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return r != null && (typeof r == "string" && (Qg(r) || Kg(r)) ? r = parseFloat(r) : !oE(r) && wn.test(o) && (r = jv(l, o)), this.setBaseTarget(l, Re(r) ? r.get() : r)), Re(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    const { initial: o } = this.props;
    let r;
    if (typeof o == "string" || typeof o == "object") {
      const h = Bd(this.props, o, this.presenceContext?.custom);
      h && (r = h[l]);
    }
    if (o && r !== void 0)
      return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !Re(c) ? c : this.initialValues[l] !== void 0 && r === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, o) {
    return this.events[l] || (this.events[l] = new Ad()), this.events[l].add(o);
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
  scheduleRenderMicrotask() {
    Hd.render(this.render);
  }
}
class Kv extends hE {
  constructor() {
    super(...arguments), this.KeyframeResolver = q2;
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    const r = l.style;
    return r ? r[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: r }) {
    delete o[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    Re(l) && (this.childSubscription = l.on("change", (o) => {
      this.current && (this.current.textContent = `${o}`);
    }));
  }
}
class Wa {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function kv({ top: i, left: l, right: o, bottom: r }) {
  return {
    x: { min: l, max: o },
    y: { min: i, max: r }
  };
}
function mE({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function yE(i, l) {
  if (!l)
    return i;
  const o = l({ x: i.left, y: i.top }), r = l({ x: i.right, y: i.bottom });
  return {
    top: o.y,
    left: o.x,
    bottom: r.y,
    right: r.x
  };
}
function Yf(i) {
  return i === void 0 || i === 1;
}
function yd({ scale: i, scaleX: l, scaleY: o }) {
  return !Yf(i) || !Yf(l) || !Yf(o);
}
function Di(i) {
  return yd(i) || Jv(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function Jv(i) {
  return Jp(i.x) || Jp(i.y);
}
function Jp(i) {
  return i && i !== "0%";
}
function Go(i, l, o) {
  const r = i - o, c = l * r;
  return o + c;
}
function Fp(i, l, o, r, c) {
  return c !== void 0 && (i = Go(i, c, r)), Go(i, o, r) + l;
}
function pd(i, l = 0, o = 1, r, c) {
  i.min = Fp(i.min, l, o, r, c), i.max = Fp(i.max, l, o, r, c);
}
function Fv(i, { x: l, y: o }) {
  pd(i.x, l.translate, l.scale, l.originPoint), pd(i.y, o.translate, o.scale, o.originPoint);
}
const Pp = 0.999999999999, $p = 1.0000000000001;
function pE(i, l, o, r = !1) {
  const c = o.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let h, d;
  for (let y = 0; y < c; y++) {
    h = o[y], d = h.projectionDelta;
    const { visualElement: v } = h.options;
    v && v.props.style && v.props.style.display === "contents" || (r && h.options.layoutScroll && h.scroll && h !== h.root && (Wn(i.x, -h.scroll.offset.x), Wn(i.y, -h.scroll.offset.y)), d && (l.x *= d.x.scale, l.y *= d.y.scale, Fv(i, d)), r && Di(h.latestValues) && No(i, h.latestValues, h.layout?.layoutBox));
  }
  l.x < $p && l.x > Pp && (l.x = 1), l.y < $p && l.y > Pp && (l.y = 1);
}
function Wn(i, l) {
  i.min += l, i.max += l;
}
function Wp(i, l, o, r, c = 0.5) {
  const h = kt(i.min, i.max, c);
  pd(i, l, o, h, r);
}
function Ip(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function No(i, l, o) {
  const r = o ?? i;
  Wp(i.x, Ip(l.x, r.x), l.scaleX, l.scale, l.originX), Wp(i.y, Ip(l.y, r.y), l.scaleY, l.scale, l.originY);
}
function Pv(i, l) {
  return kv(yE(i.getBoundingClientRect(), l));
}
function gE(i, l, o) {
  const r = Pv(i, o), { scroll: c } = l;
  return c && (Wn(r.x, c.offset.x), Wn(r.y, c.offset.y)), r;
}
const vE = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, SE = Nl.length;
function bE(i, l, o) {
  let r = "", c = !0;
  for (let d = 0; d < SE; d++) {
    const y = Nl[d], v = i[y];
    if (v === void 0)
      continue;
    let S = !0;
    if (typeof v == "number")
      S = v === (y.startsWith("scale") ? 1 : 0);
    else {
      const g = parseFloat(v);
      S = y.startsWith("scale") ? g === 1 : g === 0;
    }
    if (!S || o) {
      const g = md(v, Ho[y]);
      if (!S) {
        c = !1;
        const p = vE[y] || y;
        r += `${p}(${g}) `;
      }
      o && (l[y] = g);
    }
  }
  const h = i.pathRotation;
  return h && (c = !1, r += `rotate(${md(h, Ho.pathRotation)}) `), r = r.trim(), o ? r = o(l, c ? "" : r) : c && (r = "none"), r;
}
function Zd(i, l, o) {
  const { style: r, vars: c, transformOrigin: h } = i;
  let d = !1, y = !1;
  for (const v in l) {
    const S = l[v];
    if (_l.has(v)) {
      d = !0;
      continue;
    } else if (uv(v)) {
      c[v] = S;
      continue;
    } else {
      const g = md(S, Ho[v]);
      v.startsWith("origin") ? (y = !0, h[v] = g) : r[v] = g;
    }
  }
  if (l.transform || (d || o ? r.transform = bE(l, i.transform, o) : r.transform && (r.transform = "none")), y) {
    const { originX: v = "50%", originY: S = "50%", originZ: g = 0 } = h;
    r.transformOrigin = `${v} ${S} ${g}`;
  }
}
function $v(i, { style: l, vars: o }, r, c) {
  const h = i.style;
  let d;
  for (d in l)
    h[d] = l[d];
  c?.applyProjectionStyles(h, r);
  for (d in o)
    h.setProperty(d, o[d]);
}
function tg(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const _s = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (nt.test(i))
        i = parseFloat(i);
      else
        return i;
    const o = tg(i, l.target.x), r = tg(i, l.target.y);
    return `${o}% ${r}%`;
  }
}, TE = {
  correct: (i, { treeScale: l, projectionDelta: o }) => {
    const r = i, c = wn.parse(i);
    if (c.length > 5)
      return r;
    const h = wn.createTransformer(i), d = typeof c[0] != "number" ? 1 : 0, y = o.x.scale * l.x, v = o.y.scale * l.y;
    c[0 + d] /= y, c[1 + d] /= v;
    const S = kt(y, v, 0.5);
    return typeof c[2 + d] == "number" && (c[2 + d] /= S), typeof c[3 + d] == "number" && (c[3 + d] /= S), h(c);
  }
}, gd = {
  borderRadius: {
    ..._s,
    applyTo: [...Ld]
  },
  borderTopLeftRadius: _s,
  borderTopRightRadius: _s,
  borderBottomLeftRadius: _s,
  borderBottomRightRadius: _s,
  boxShadow: TE
};
function Wv(i, { layout: l, layoutId: o }) {
  return _l.has(i) || i.startsWith("origin") || (l || o !== void 0) && (!!gd[i] || i === "opacity");
}
function Kd(i, l, o) {
  const r = i.style, c = l?.style, h = {};
  if (!r)
    return h;
  for (const d in r)
    (Re(r[d]) || c && Re(c[d]) || Wv(d, i) || o?.getValue(d)?.liveStyle !== void 0) && (h[d] = r[d]);
  return h;
}
function xE(i) {
  return window.getComputedStyle(i);
}
class EE extends Kv {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = $v;
  }
  mount(l) {
    Zo(!!l.style), super.mount(l);
  }
  readValueFromInstance(l, o) {
    if (_l.has(o))
      return this.projection?.isProjecting ? ad(o) : Xx(l, o);
    {
      const r = xE(l), c = (uv(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return Pv(l, o);
  }
  build(l, o, r) {
    Zd(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return Kd(l, o, r);
  }
}
const AE = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, ME = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function CE(i, l, o = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const h = c ? AE : ME;
  i[h.offset] = `${-r}`, i[h.array] = `${l} ${o}`;
}
const DE = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Iv(i, {
  attrX: l,
  attrY: o,
  attrScale: r,
  pathLength: c,
  pathSpacing: h = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...y
}, v, S, g) {
  if (Zd(i, y, S), v) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: p, style: T } = i;
  p.transform && (T.transform = p.transform, delete p.transform), (T.transform || p.transformOrigin) && (T.transformOrigin = p.transformOrigin ?? "50% 50%", delete p.transformOrigin), T.transform && (T.transformBox = g?.transformBox ?? "fill-box", delete p.transformBox);
  for (const V of DE)
    p[V] !== void 0 && (T[V] = p[V], delete p[V]);
  l !== void 0 && (p.x = l), o !== void 0 && (p.y = o), r !== void 0 && (p.scale = r), c !== void 0 && CE(p, c, h, d, !1);
}
const t1 = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), e1 = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function OE(i, l, o, r) {
  $v(i, l, void 0, r);
  for (const c in l.attrs)
    i.setAttribute(t1.has(c) ? c : jd(c), l.attrs[c]);
}
function n1(i, l, o) {
  const r = Kd(i, l, o);
  for (const c in i)
    if (Re(i[c]) || Re(l[c])) {
      const h = Nl.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[h] = i[c];
    }
  return r;
}
class zE extends Kv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ve;
  }
  getBaseTargetFromProps(l, o) {
    return l[o];
  }
  readValueFromInstance(l, o) {
    if (_l.has(o)) {
      const r = Bv(o);
      return r && r.default || 0;
    }
    return o = t1.has(o) ? o : jd(o), l.getAttribute(o);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return n1(l, o, r);
  }
  build(l, o, r) {
    Iv(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    OE(l, o, r, c);
  }
  mount(l) {
    this.isSVGTag = e1(l.tagName), super.mount(l);
  }
}
const RE = Xd.length;
function a1(i) {
  if (!i)
    return;
  if (!i.isControllingVariants) {
    const o = i.parent ? a1(i.parent) || {} : {};
    return i.props.initial !== void 0 && (o.initial = i.props.initial), o;
  }
  const l = {};
  for (let o = 0; o < RE; o++) {
    const r = Xd[o], c = i.props[r];
    (qs(c) || c === !1) && (l[r] = c);
  }
  return l;
}
function i1(i, l) {
  if (!Array.isArray(l))
    return !1;
  const o = l.length;
  if (o !== i.length)
    return !1;
  for (let r = 0; r < o; r++)
    if (l[r] !== i[r])
      return !1;
  return !0;
}
const NE = [...Gd].reverse(), _E = Gd.length;
function VE(i) {
  return (l) => Promise.all(l.map(({ animation: o, options: r }) => R2(i, o, r)));
}
function wE(i) {
  let l = VE(i), o = eg(), r = !0, c = !1;
  const h = (S) => (g, p) => {
    const T = _i(i, p, S === "exit" ? i.presenceContext?.custom : void 0);
    if (T) {
      const { transition: V, transitionEnd: _, ...j } = T;
      g = { ...g, ...j, ..._ };
    }
    return g;
  };
  function d(S) {
    l = S(i);
  }
  function y(S) {
    const { props: g } = i, p = a1(i.parent) || {}, T = [], V = /* @__PURE__ */ new Set();
    let _ = {}, j = 1 / 0;
    for (let G = 0; G < _E; G++) {
      const k = NE[G], K = o[k], Q = g[k] !== void 0 ? g[k] : p[k], ut = qs(Q), rt = k === S ? K.isActive : null;
      rt === !1 && (j = G);
      let W = Q === p[k] && Q !== g[k] && ut;
      if (W && (r || c) && i.manuallyAnimateOnMount && (W = !1), K.protectedKeys = { ..._ }, // If it isn't active and hasn't *just* been set as inactive
      !K.isActive && rt === null || // If we didn't and don't have any defined prop for this animation type
      !Q && !K.prevProp || // Or if the prop doesn't define an animation
      ko(Q) || typeof Q == "boolean")
        continue;
      if (k === "exit" && K.isActive && rt !== !0) {
        K.prevResolvedValues && (_ = {
          ..._,
          ...K.prevResolvedValues
        });
        continue;
      }
      const F = UE(K.prevProp, Q);
      let ct = F || // If we're making this variant active, we want to always make it active
      k === S && K.isActive && !W && ut || // If we removed a higher-priority variant (i is in reverse order)
      G > j && ut, Z = !1;
      const ot = Array.isArray(Q) ? Q : [Q];
      let gt = ot.reduce(h(k), {});
      rt === !1 && (gt = {});
      const { prevResolvedValues: Ft = {} } = K, Bt = {
        ...Ft,
        ...gt
      }, st = ($) => {
        ct = !0, V.has($) && (Z = !0, V.delete($)), K.needsAnimating[$] = !0;
        const ft = i.getValue($);
        ft && (ft.liveStyle = !1);
      };
      for (const $ in Bt) {
        const ft = gt[$], St = Ft[$];
        if (_.hasOwnProperty($))
          continue;
        let Gt = !1;
        rd(ft) && rd(St) ? Gt = !i1(ft, St) || F : Gt = ft !== St, Gt ? ft != null ? st($) : V.add($) : ft !== void 0 && V.has($) ? st($) : K.protectedKeys[$] = !0;
      }
      K.prevProp = Q, K.prevResolvedValues = gt, K.isActive && (_ = { ..._, ...gt }), (r || c) && i.blockInitialAnimation && (ct = !1);
      const X = W && F;
      ct && (!X || Z) && T.push(...ot.map(($) => {
        const ft = { type: k };
        if (typeof $ == "string" && (r || c) && !X && i.manuallyAnimateOnMount && i.parent) {
          const { parent: St } = i, Gt = _i(St, $);
          if (St.enteringChildren && Gt) {
            const { delayChildren: $e } = Gt.transition || {};
            ft.delay = Dv(St.enteringChildren, i, $e);
          }
        }
        return {
          animation: $,
          options: ft
        };
      }));
    }
    if (V.size) {
      const G = {};
      if (typeof g.initial != "boolean") {
        const k = _i(i, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        k && k.transition && (G.transition = k.transition);
      }
      V.forEach((k) => {
        const K = i.getBaseTarget(k), Q = i.getValue(k);
        Q && (Q.liveStyle = !0), G[k] = K ?? null;
      }), T.push({ animation: G });
    }
    let L = !!T.length;
    return r && (g.initial === !1 || g.initial === g.animate) && !i.manuallyAnimateOnMount && (L = !1), r = !1, c = !1, L ? l(T) : Promise.resolve();
  }
  function v(S, g) {
    if (o[S].isActive === g)
      return Promise.resolve();
    i.variantChildren?.forEach((T) => T.animationState?.setActive(S, g)), o[S].isActive = g;
    const p = y(S);
    for (const T in o)
      o[T].protectedKeys = {};
    return p;
  }
  return {
    animateChanges: y,
    setActive: v,
    setAnimateFunction: d,
    getState: () => o,
    reset: () => {
      o = eg(), c = !0;
    }
  };
}
function UE(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !i1(l, i) : !1;
}
function Ci(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function eg() {
  return {
    animate: Ci(!0),
    whileInView: Ci(),
    whileHover: Ci(),
    whileTap: Ci(),
    whileDrag: Ci(),
    whileFocus: Ci(),
    exit: Ci()
  };
}
function vd(i, l) {
  i.min = l.min, i.max = l.max;
}
function _n(i, l) {
  vd(i.x, l.x), vd(i.y, l.y);
}
function ng(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const l1 = 1e-4, BE = 1 - l1, jE = 1 + l1, s1 = 0.01, LE = 0 - s1, HE = 0 + s1;
function Xe(i) {
  return i.max - i.min;
}
function YE(i, l, o) {
  return Math.abs(i - l) <= o;
}
function ag(i, l, o, r = 0.5) {
  i.origin = r, i.originPoint = kt(l.min, l.max, i.origin), i.scale = Xe(o) / Xe(l), i.translate = kt(o.min, o.max, i.origin) - i.originPoint, (i.scale >= BE && i.scale <= jE || isNaN(i.scale)) && (i.scale = 1), (i.translate >= LE && i.translate <= HE || isNaN(i.translate)) && (i.translate = 0);
}
function js(i, l, o, r) {
  ag(i.x, l.x, o.x, r ? r.originX : void 0), ag(i.y, l.y, o.y, r ? r.originY : void 0);
}
function ig(i, l, o, r = 0) {
  const c = r ? kt(o.min, o.max, r) : o.min;
  i.min = c + l.min, i.max = i.min + Xe(l);
}
function qE(i, l, o, r) {
  ig(i.x, l.x, o.x, r?.x), ig(i.y, l.y, o.y, r?.y);
}
function lg(i, l, o, r = 0) {
  const c = r ? kt(o.min, o.max, r) : o.min;
  i.min = l.min - c, i.max = i.min + Xe(l);
}
function Xo(i, l, o, r) {
  lg(i.x, l.x, o.x, r?.x), lg(i.y, l.y, o.y, r?.y);
}
function sg(i, l, o, r, c) {
  return i -= l, i = Go(i, 1 / o, r), c !== void 0 && (i = Go(i, 1 / c, r)), i;
}
function GE(i, l = 0, o = 1, r = 0.5, c, h = i, d = i) {
  if (In.test(l) && (l = parseFloat(l), l = kt(d.min, d.max, l / 100) - d.min), typeof l != "number")
    return;
  let y = kt(h.min, h.max, r);
  i === h && (y -= l), i.min = sg(i.min, l, o, y, c), i.max = sg(i.max, l, o, y, c);
}
function ug(i, l, [o, r, c], h, d) {
  GE(i, l[o], l[r], l[c], l.scale, h, d);
}
const XE = ["x", "scaleX", "originX"], QE = ["y", "scaleY", "originY"];
function og(i, l, o, r) {
  ug(i.x, l, XE, o ? o.x : void 0, r ? r.x : void 0), ug(i.y, l, QE, o ? o.y : void 0, r ? r.y : void 0);
}
function rg(i) {
  return i.translate === 0 && i.scale === 1;
}
function u1(i) {
  return rg(i.x) && rg(i.y);
}
function cg(i, l) {
  return i.min === l.min && i.max === l.max;
}
function ZE(i, l) {
  return cg(i.x, l.x) && cg(i.y, l.y);
}
function fg(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function o1(i, l) {
  return fg(i.x, l.x) && fg(i.y, l.y);
}
function dg(i) {
  return Xe(i.x) / Xe(i.y);
}
function hg(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function $n(i) {
  return [i("x"), i("y")];
}
function KE(i, l, o) {
  let r = "";
  const c = i.x.translate / l.x, h = i.y.translate / l.y, d = o?.z || 0;
  if ((c || h || d) && (r = `translate3d(${c}px, ${h}px, ${d}px) `), (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `), o) {
    const { transformPerspective: S, rotate: g, pathRotation: p, rotateX: T, rotateY: V, skewX: _, skewY: j } = o;
    S && (r = `perspective(${S}px) ${r}`), g && (r += `rotate(${g}deg) `), p && (r += `rotate(${p}deg) `), T && (r += `rotateX(${T}deg) `), V && (r += `rotateY(${V}deg) `), _ && (r += `skewX(${_}deg) `), j && (r += `skewY(${j}deg) `);
  }
  const y = i.x.scale * l.x, v = i.y.scale * l.y;
  return (y !== 1 || v !== 1) && (r += `scale(${y}, ${v})`), r || "none";
}
const kE = Ld.length, mg = (i) => typeof i == "string" ? parseFloat(i) : i, yg = (i) => typeof i == "number" || nt.test(i);
function JE(i, l, o, r, c, h) {
  c ? (i.opacity = kt(0, o.opacity ?? 1, FE(r)), i.opacityExit = kt(l.opacity ?? 1, 0, PE(r))) : h && (i.opacity = kt(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let d = 0; d < kE; d++) {
    const y = Ld[d];
    let v = pg(l, y), S = pg(o, y);
    if (v === void 0 && S === void 0)
      continue;
    v || (v = 0), S || (S = 0), v === 0 || S === 0 || yg(v) === yg(S) ? (i[y] = Math.max(kt(mg(v), mg(S), r), 0), (In.test(S) || In.test(v)) && (i[y] += "%")) : i[y] = S;
  }
  (l.rotate || o.rotate) && (i.rotate = kt(l.rotate || 0, o.rotate || 0, r));
}
function pg(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const FE = /* @__PURE__ */ r1(0, 0.5, ev), PE = /* @__PURE__ */ r1(0.5, 0.95, An);
function r1(i, l, o) {
  return (r) => r < i ? 0 : r > l ? 1 : o(/* @__PURE__ */ Hs(i, l, r));
}
function $E(i, l, o) {
  const r = Re(i) ? i : zl(i);
  return r.start(Ud("", r, l, o)), r.animation;
}
function Gs(i, l, o, r = { passive: !0 }) {
  return i.addEventListener(l, o, r), () => i.removeEventListener(l, o, r);
}
const WE = (i, l) => i.depth - l.depth;
class IE {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    Ed(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    wo(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(WE), this.isDirty = !1, this.children.forEach(l);
  }
}
function tA(i, l) {
  const o = Ge.now(), r = ({ timestamp: c }) => {
    const h = c - o;
    h >= l && ($a(r), i(h - l));
  };
  return Jt.setup(r, !0), () => $a(r);
}
function _o(i) {
  return Re(i) ? i.get() : i;
}
class eA {
  constructor() {
    this.members = [];
  }
  add(l) {
    Ed(this.members, l);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r === l || r === this.lead || r === this.prevLead)
        continue;
      const c = r.instance;
      (!c || c.isConnected === !1) && !r.snapshot && (wo(this.members, r), r.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (wo(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    for (let o = this.members.indexOf(l) - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1)
        return this.promote(r), !0;
    }
    return !1;
  }
  promote(l, o) {
    const r = this.lead;
    if (l !== r && (this.prevLead = r, this.lead = l, l.show(), r)) {
      r.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: c } = r.options, { layoutDependency: h } = l.options;
      (c === void 0 || c !== h) && (l.resumeFrom = r, o && (r.preserveOpacity = !0), r.snapshot && (l.snapshot = r.snapshot, l.snapshot.latestValues = r.animationValues || r.latestValues), l.root?.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      l.options.onExitComplete?.(), l.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const Vo = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, qf = ["", "X", "Y", "Z"], nA = 1e3;
let aA = 0;
function Gf(i, l, o, r) {
  const { latestValues: c } = l;
  c[i] && (o[i] = c[i], l.setStaticValue(i, 0), r && (r[i] = 0));
}
function c1(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const o = _v(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: h } = i.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Jt, !(c || h));
  }
  const { parent: r } = i;
  r && !r.hasCheckedOptimisedAppear && c1(r);
}
function f1({ attachResizeListener: i, defaultParent: l, measureScroll: o, checkIsScrollRoot: r, resetTransform: c }) {
  return class {
    constructor(d = {}, y = l?.()) {
      this.id = aA++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(sA), this.nodes.forEach(dA), this.nodes.forEach(hA), this.nodes.forEach(uA);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = y ? y.root || y : this, this.path = y ? [...y.path, y] : [], this.parent = y, this.depth = y ? y.depth + 1 : 0;
      for (let v = 0; v < this.path.length; v++)
        this.path[v].shouldResetTransform = !0;
      this.root === this && (this.nodes = new IE());
    }
    addEventListener(d, y) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new Ad()), this.eventHandlers.get(d).add(y);
    }
    notifyListeners(d, ...y) {
      const v = this.eventHandlers.get(d);
      v && v.notify(...y);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    /**
     * Lifecycles
     */
    mount(d) {
      if (this.instance)
        return;
      this.isSVG = qd(d) && !sE(d), this.instance = d;
      const { layoutId: y, layout: v, visualElement: S } = this.options;
      if (S && !S.current && S.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (v || y) && (this.isLayoutDirty = !0), i) {
        let g, p = 0;
        const T = () => this.root.updateBlockedByResize = !1;
        Jt.read(() => {
          p = window.innerWidth;
        }), i(d, () => {
          const V = window.innerWidth;
          V !== p && (p = V, this.root.updateBlockedByResize = !0, g && g(), g = tA(T, 250), Vo.hasAnimatedSinceResize && (Vo.hasAnimatedSinceResize = !1, this.nodes.forEach(Sg)));
        });
      }
      y && this.root.registerSharedNode(y, this), this.options.animate !== !1 && S && (y || v) && this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: p, hasRelativeLayoutChanged: T, layout: V }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const _ = this.options.transition || S.getDefaultTransition() || vA, { onLayoutAnimationStart: j, onLayoutAnimationComplete: L } = S.getProps(), G = !this.targetLayout || !o1(this.targetLayout, V), k = !p && T;
        if (this.options.layoutRoot || this.resumeFrom || k || p && (G || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const K = {
            ...wd(_, "layout"),
            onPlay: j,
            onComplete: L
          };
          (S.shouldReduceMotion || this.options.layoutRoot) && (K.delay = 0, K.type = !1), this.startAnimation(K), this.setAnimationOrigin(g, k, K.path);
        } else
          p || Sg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = V;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), $a(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(mA), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && c1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        p.shouldResetTransform = !0, (typeof p.latestValues.x == "string" || typeof p.latestValues.y == "string") && (p.isLayoutDirty = !0), p.updateScroll("snapshot"), p.options.layoutRoot && p.willUpdate(!1);
      }
      const { layoutId: y, layout: v } = this.options;
      if (y === void 0 && !v)
        return;
      const S = this.getTransformTemplate();
      this.prevTransformTemplateValue = S ? S(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const v = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), v && this.nodes.forEach(rA), this.nodes.forEach(gg);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(vg);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(cA), this.nodes.forEach(fA), this.nodes.forEach(iA), this.nodes.forEach(lA)) : this.nodes.forEach(vg), this.clearAllSnapshots();
      const y = Ge.now();
      ze.delta = ta(0, 1e3 / 60, y - ze.timestamp), ze.timestamp = y, ze.isProcessing = !0, Vf.update.process(ze), Vf.preRender.process(ze), Vf.render.process(ze), ze.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Hd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(oA), this.sharedNodes.forEach(yA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Jt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Jt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Xe(this.snapshot.measuredBox.x) && !Xe(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let v = 0; v < this.path.length; v++)
          this.path[v].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = ve()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: y } = this.options;
      y && y.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0);
    }
    updateScroll(d = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (y = !1), y && this.instance) {
        const v = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: v,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : v
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, y = this.projectionDelta && !u1(this.projectionDelta), v = this.getTransformTemplate(), S = v ? v(this.latestValues, "") : void 0, g = S !== this.prevTransformTemplateValue;
      d && this.instance && (y || Di(this.latestValues) || g) && (c(this.instance, S), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const y = this.measurePageBox();
      let v = this.removeElementScroll(y);
      return d && (v = this.removeTransform(v)), SA(v), {
        animationId: this.root.animationId,
        measuredBox: y,
        layoutBox: v,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: d } = this.options;
      if (!d)
        return ve();
      const y = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(bA))) {
        const { scroll: S } = this.root;
        S && (Wn(y.x, S.offset.x), Wn(y.y, S.offset.y));
      }
      return y;
    }
    removeElementScroll(d) {
      const y = ve();
      if (_n(y, d), this.scroll?.wasRoot)
        return y;
      for (let v = 0; v < this.path.length; v++) {
        const S = this.path[v], { scroll: g, options: p } = S;
        S !== this.root && g && p.layoutScroll && (g.wasRoot && _n(y, d), Wn(y.x, g.offset.x), Wn(y.y, g.offset.y));
      }
      return y;
    }
    applyTransform(d, y = !1, v) {
      const S = v || ve();
      _n(S, d);
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        !y && p.options.layoutScroll && p.scroll && p !== p.root && (Wn(S.x, -p.scroll.offset.x), Wn(S.y, -p.scroll.offset.y)), Di(p.latestValues) && No(S, p.latestValues, p.layout?.layoutBox);
      }
      return Di(this.latestValues) && No(S, this.latestValues, this.layout?.layoutBox), S;
    }
    removeTransform(d) {
      const y = ve();
      _n(y, d);
      for (let v = 0; v < this.path.length; v++) {
        const S = this.path[v];
        if (!Di(S.latestValues))
          continue;
        let g;
        S.instance && (yd(S.latestValues) && S.updateSnapshot(), g = ve(), _n(g, S.measurePageBox())), og(y, S.latestValues, S.snapshot?.layoutBox, g);
      }
      return Di(this.latestValues) && og(y, this.latestValues), y;
    }
    setTargetDelta(d) {
      this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ze.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const v = !!this.resumingFrom || this !== y;
      if (!(d || v && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: p } = this.options;
      if (!this.layout || !(g || p))
        return;
      this.resolvedRelativeTargetAt = ze.timestamp;
      const T = this.getClosestProjectingParent();
      T && this.linkedParentVersion !== T.layoutVersion && !T.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && T && T.layout ? this.createRelativeTarget(T, this.layout.layoutBox, T.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ve(), this.targetWithTransforms = ve()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), qE(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : _n(this.target, this.layout.layoutBox), Fv(this.target, this.targetDelta)) : _n(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && T && !!T.resumingFrom == !!this.resumingFrom && !T.options.layoutScroll && T.target && this.animationProgress !== 1 ? this.createRelativeTarget(T, this.target, T.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || yd(this.parent.latestValues) || Jv(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(d, y, v) {
      this.relativeParent = d, this.linkedParentVersion = d.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ve(), this.relativeTargetOrigin = ve(), Xo(this.relativeTargetOrigin, y, v, this.options.layoutAnchor || void 0), _n(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const d = this.getLead(), y = !!this.resumingFrom || this !== d;
      let v = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (v = !1), y && (this.isSharedProjectionDirty || this.isTransformDirty) && (v = !1), this.resolvedRelativeTargetAt === ze.timestamp && (v = !1), v)
        return;
      const { layout: S, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(S || g))
        return;
      _n(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x, T = this.treeScale.y;
      pE(this.layoutCorrected, this.treeScale, this.path, y), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = ve());
      const { target: V } = d;
      if (!V) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ng(this.prevProjectionDelta.x, this.projectionDelta.x), ng(this.prevProjectionDelta.y, this.projectionDelta.y)), js(this.projectionDelta, this.layoutCorrected, V, this.latestValues), (this.treeScale.x !== p || this.treeScale.y !== T || !hg(this.projectionDelta.x, this.prevProjectionDelta.x) || !hg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", V));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      if (this.options.visualElement?.scheduleRender(), d) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Dl(), this.projectionDelta = Dl(), this.projectionDeltaWithTransform = Dl();
    }
    setAnimationOrigin(d, y = !1, v) {
      const S = this.snapshot, g = S ? S.latestValues : {}, p = { ...this.latestValues }, T = Dl();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !y;
      const V = ve(), _ = S ? S.source : void 0, j = this.layout ? this.layout.source : void 0, L = _ !== j, G = this.getStack(), k = !G || G.members.length <= 1, K = !!(L && !k && this.options.crossfade === !0 && !this.path.some(gA));
      this.animationProgress = 0;
      let Q;
      const ut = v?.interpolateProjection(d);
      this.mixTargetDelta = (rt) => {
        const W = rt / 1e3, F = ut?.(W);
        F ? (T.x.translate = F.x, T.x.scale = kt(d.x.scale, 1, W), T.x.origin = d.x.origin, T.x.originPoint = d.x.originPoint, T.y.translate = F.y, T.y.scale = kt(d.y.scale, 1, W), T.y.origin = d.y.origin, T.y.originPoint = d.y.originPoint) : (bg(T.x, d.x, W), bg(T.y, d.y, W)), this.setTargetDelta(T), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xo(V, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), pA(this.relativeTarget, this.relativeTargetOrigin, V, W), Q && ZE(this.relativeTarget, Q) && (this.isProjectionDirty = !1), Q || (Q = ve()), _n(Q, this.relativeTarget)), L && (this.animationValues = p, JE(p, g, this.latestValues, W, K, k)), F && F.rotate !== void 0 && (this.animationValues || (this.animationValues = p), this.animationValues.pathRotation = F.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = W;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && ($a(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Jt.update(() => {
        Vo.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = zl(0)), this.motionValue.jump(0, !1), this.currentAnimation = $E(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (y) => {
            this.mixTargetDelta(y), d.onUpdate && d.onUpdate(y);
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(nA), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let { targetWithTransforms: y, target: v, layout: S, latestValues: g } = d;
      if (!(!y || !v || !S)) {
        if (this !== d && this.layout && S && d1(this.options.animationType, this.layout.layoutBox, S.layoutBox)) {
          v = this.target || ve();
          const p = Xe(this.layout.layoutBox.x);
          v.x.min = d.target.x.min, v.x.max = v.x.min + p;
          const T = Xe(this.layout.layoutBox.y);
          v.y.min = d.target.y.min, v.y.max = v.y.min + T;
        }
        _n(y, v), No(y, g), js(this.projectionDeltaWithTransform, this.layoutCorrected, y, g);
      }
    }
    registerSharedNode(d, y) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new eA()), this.sharedNodes.get(d).add(y);
      const S = y.options.initialPromotionConfig;
      y.promote({
        transition: S ? S.transition : void 0,
        preserveFollowOpacity: S && S.shouldPreserveFollowOpacity ? S.shouldPreserveFollowOpacity(y) : void 0
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d)
        return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: y, preserveFollowOpacity: v } = {}) {
      const S = this.getStack();
      S && S.promote(this, v), d && (this.projectionDelta = void 0, this.needsReset = !0), y && this.setOptions({ transition: y });
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d)
        return;
      let y = !1;
      const { latestValues: v } = d;
      if ((v.z || v.rotate || v.rotateX || v.rotateY || v.rotateZ || v.skewX || v.skewY) && (y = !0), !y)
        return;
      const S = {};
      v.z && Gf("z", d, S, this.animationValues);
      for (let g = 0; g < qf.length; g++)
        Gf(`rotate${qf[g]}`, d, S, this.animationValues), Gf(`skew${qf[g]}`, d, S, this.animationValues);
      d.render();
      for (const g in S)
        d.setStaticValue(g, S[g]), this.animationValues && (this.animationValues[g] = S[g]);
      d.scheduleRender();
    }
    applyProjectionStyles(d, y) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const v = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = _o(y?.pointerEvents) || "", d.transform = v ? v(this.latestValues, "") : "none";
        return;
      }
      const S = this.getLead();
      if (!this.projectionDelta || !this.layout || !S.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = _o(y?.pointerEvents) || ""), this.hasProjected && !Di(this.latestValues) && (d.transform = v ? v({}, "") : "none", this.hasProjected = !1);
        return;
      }
      d.visibility = "";
      const g = S.animationValues || S.latestValues;
      this.applyTransformsToTarget();
      let p = KE(this.projectionDeltaWithTransform, this.treeScale, g);
      v && (p = v(g, p)), d.transform = p;
      const { x: T, y: V } = this.projectionDelta;
      d.transformOrigin = `${T.origin * 100}% ${V.origin * 100}% 0`, S.animationValues ? d.opacity = S === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : d.opacity = S === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const _ in gd) {
        if (g[_] === void 0)
          continue;
        const { correct: j, applyTo: L, isCSSVariable: G } = gd[_], k = p === "none" ? g[_] : j(g[_], S);
        if (L) {
          const K = L.length;
          for (let Q = 0; Q < K; Q++)
            d[L[Q]] = k;
        } else
          G ? this.options.visualElement.renderState.vars[_] = k : d[_] = k;
      }
      this.options.layoutId && (d.pointerEvents = S === this ? _o(y?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => d.currentAnimation?.stop()), this.root.nodes.forEach(gg), this.root.sharedNodes.clear();
    }
  };
}
function iA(i) {
  i.updateLayout();
}
function lA(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: r } = i.layout, { animationType: c } = i.options, h = l.source !== i.layout.source;
    if (c === "size")
      $n((g) => {
        const p = h ? l.measuredBox[g] : l.layoutBox[g], T = Xe(p);
        p.min = o[g].min, p.max = p.min + T;
      });
    else if (c === "x" || c === "y") {
      const g = c === "x" ? "y" : "x";
      vd(h ? l.measuredBox[g] : l.layoutBox[g], o[g]);
    } else d1(c, l.layoutBox, o) && $n((g) => {
      const p = h ? l.measuredBox[g] : l.layoutBox[g], T = Xe(o[g]);
      p.max = p.min + T, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[g].max = i.relativeTarget[g].min + T);
    });
    const d = Dl();
    js(d, o, l.layoutBox);
    const y = Dl();
    h ? js(y, i.applyTransform(r, !0), l.measuredBox) : js(y, o, l.layoutBox);
    const v = !u1(d);
    let S = !1;
    if (!i.resumeFrom) {
      const g = i.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: p, layout: T } = g;
        if (p && T) {
          const V = i.options.layoutAnchor || void 0, _ = ve();
          Xo(_, l.layoutBox, p.layoutBox, V);
          const j = ve();
          Xo(j, o, T.layoutBox, V), o1(_, j) || (S = !0), g.options.layoutRoot && (i.relativeTarget = j, i.relativeTargetOrigin = _, i.relativeParent = g);
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: y,
      layoutDelta: d,
      hasLayoutChanged: v,
      hasRelativeLayoutChanged: S
    });
  } else if (i.isLead()) {
    const { onExitComplete: o } = i.options;
    o && o();
  }
  i.options.transition = void 0;
}
function sA(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function uA(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function oA(i) {
  i.clearSnapshot();
}
function gg(i) {
  i.clearMeasurements();
}
function rA(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function vg(i) {
  i.isLayoutDirty = !1;
}
function cA(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.layout, i.isLayoutDirty = !0);
}
function fA(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function Sg(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function dA(i) {
  i.resolveTargetDelta();
}
function hA(i) {
  i.calcProjection();
}
function mA(i) {
  i.resetSkewAndRotation();
}
function yA(i) {
  i.removeLeadSnapshot();
}
function bg(i, l, o) {
  i.translate = kt(l.translate, 0, o), i.scale = kt(l.scale, 1, o), i.origin = l.origin, i.originPoint = l.originPoint;
}
function Tg(i, l, o, r) {
  i.min = kt(l.min, o.min, r), i.max = kt(l.max, o.max, r);
}
function pA(i, l, o, r) {
  Tg(i.x, l.x, o.x, r), Tg(i.y, l.y, o.y, r);
}
function gA(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const vA = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, xg = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), Eg = xg("applewebkit/") && !xg("chrome/") ? Math.round : An;
function Ag(i) {
  i.min = Eg(i.min), i.max = Eg(i.max);
}
function SA(i) {
  Ag(i.x), Ag(i.y);
}
function d1(i, l, o) {
  return i === "position" || i === "preserve-aspect" && !YE(dg(l), dg(o), 0.2);
}
function bA(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const TA = f1({
  attachResizeListener: (i, l) => Gs(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Xf = {
  current: void 0
}, h1 = f1({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!Xf.current) {
      const i = new TA({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), Xf.current = i;
    }
    return Xf.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), m1 = B.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function xA(i = !0) {
  const l = B.useContext(xd);
  if (l === null)
    return [!0, null];
  const { isPresent: o, onExitComplete: r, register: c } = l, h = B.useId();
  B.useEffect(() => {
    if (i)
      return c(h);
  }, [i]);
  const d = B.useCallback(() => i && r && r(h), [h, r, i]);
  return !o && r ? [!1, d] : [!0];
}
const y1 = B.createContext({ strict: !1 }), Mg = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let Cg = !1;
function EA() {
  if (Cg)
    return;
  const i = {};
  for (const l in Mg)
    i[l] = {
      isEnabled: (o) => Mg[l].some((r) => !!o[r])
    };
  Zv(i), Cg = !0;
}
function p1() {
  return EA(), dE();
}
function AA(i) {
  const l = p1();
  for (const o in i)
    l[o] = {
      ...l[o],
      ...i[o]
    };
  Zv(l);
}
const MA = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function Qo(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || MA.has(i);
}
let g1 = (i) => !Qo(i);
function CA(i) {
  typeof i == "function" && (g1 = (l) => l.startsWith("on") ? !Qo(l) : i(l));
}
try {
  CA(require("@emotion/is-prop-valid").default);
} catch {
}
function DA(i, l, o) {
  const r = {};
  for (const c in i)
    c === "values" && typeof i.values == "object" || Re(i[c]) || (g1(c) || o === !0 && Qo(c) || !l && !Qo(c) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && c.startsWith("onDrag")) && (r[c] = i[c]);
  return r;
}
const Fo = /* @__PURE__ */ B.createContext({});
function OA(i, l) {
  if (Jo(i)) {
    const { initial: o, animate: r } = i;
    return {
      initial: o === !1 || qs(o) ? o : void 0,
      animate: qs(r) ? r : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function zA(i) {
  const { initial: l, animate: o } = OA(i, B.useContext(Fo));
  return B.useMemo(() => ({ initial: l, animate: o }), [Dg(l), Dg(o)]);
}
function Dg(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const kd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function v1(i, l, o) {
  for (const r in l)
    !Re(l[r]) && !Wv(r, o) && (i[r] = l[r]);
}
function RA({ transformTemplate: i }, l) {
  return B.useMemo(() => {
    const o = kd();
    return Zd(o, l, i), Object.assign({}, o.vars, o.style);
  }, [l]);
}
function NA(i, l) {
  const o = i.style || {}, r = {};
  return v1(r, o, i), Object.assign(r, RA(i, l)), r;
}
function _A(i, l) {
  const o = {}, r = NA(i, l);
  return i.drag && i.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0), o.style = r, o;
}
const S1 = () => ({
  ...kd(),
  attrs: {}
});
function VA(i, l, o, r) {
  const c = B.useMemo(() => {
    const h = S1();
    return Iv(h, l, e1(r), i.transformTemplate, i.style), {
      ...h.attrs,
      style: { ...h.style }
    };
  }, [l]);
  if (i.style) {
    const h = {};
    v1(h, i.style, i), c.style = { ...h, ...c.style };
  }
  return c;
}
const wA = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Jd(i) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof i != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    i.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(wA.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function UA(i, l, o, { latestValues: r }, c, h = !1, d) {
  const v = (d ?? Jd(i) ? VA : _A)(l, r, c, i), S = DA(l, typeof i == "string", h), g = i !== B.Fragment ? { ...S, ...v, ref: o } : {}, { children: p } = l, T = B.useMemo(() => Re(p) ? p.get() : p, [p]);
  return B.createElement(i, {
    ...g,
    children: T
  });
}
function BA({ scrapeMotionValuesFromProps: i, createRenderState: l }, o, r, c) {
  return {
    latestValues: jA(o, r, c, i),
    renderState: l()
  };
}
function jA(i, l, o, r) {
  const c = {}, h = r(i, {});
  for (const T in h)
    c[T] = _o(h[T]);
  let { initial: d, animate: y } = i;
  const v = Jo(i), S = Xv(i);
  l && S && !v && i.inherit !== !1 && (d === void 0 && (d = l.initial), y === void 0 && (y = l.animate));
  let g = o ? o.initial === !1 : !1;
  g = g || d === !1;
  const p = g ? y : d;
  if (p && typeof p != "boolean" && !ko(p)) {
    const T = Array.isArray(p) ? p : [p];
    for (let V = 0; V < T.length; V++) {
      const _ = Bd(i, T[V]);
      if (_) {
        const { transitionEnd: j, transition: L, ...G } = _;
        for (const k in G) {
          let K = G[k];
          if (Array.isArray(K)) {
            const Q = g ? K.length - 1 : 0;
            K = K[Q];
          }
          K !== null && (c[k] = K);
        }
        for (const k in j)
          c[k] = j[k];
      }
    }
  }
  return c;
}
const b1 = (i) => (l, o) => {
  const r = B.useContext(Fo), c = B.useContext(xd), h = () => BA(i, l, r, c);
  return o ? h() : BT(h);
}, LA = /* @__PURE__ */ b1({
  scrapeMotionValuesFromProps: Kd,
  createRenderState: kd
}), HA = /* @__PURE__ */ b1({
  scrapeMotionValuesFromProps: n1,
  createRenderState: S1
}), YA = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function qA(i, l, o) {
  const r = B.useRef(o);
  B.useInsertionEffect(() => {
    r.current = o;
  });
  const c = B.useRef(null);
  return B.useCallback((h) => {
    h && i.onMount?.(h), l && (h ? l.mount(h) : l.unmount());
    const d = r.current;
    if (typeof d == "function")
      if (h) {
        const y = d(h);
        typeof y == "function" && (c.current = y);
      } else c.current ? (c.current(), c.current = null) : d(h);
    else d && (d.current = h);
  }, [l]);
}
const T1 = B.createContext({});
function Al(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function GA(i, l, o, r, c, h) {
  const { visualElement: d } = B.useContext(Fo), y = B.useContext(y1), v = B.useContext(xd), S = B.useContext(m1), g = S.reducedMotion, p = S.skipAnimations, T = B.useRef(null), V = B.useRef(!1);
  r = r || y.renderer, !T.current && r && (T.current = r(i, {
    visualState: l,
    parent: d,
    props: o,
    presenceContext: v,
    blockInitialAnimation: v ? v.initial === !1 : !1,
    reducedMotionConfig: g,
    skipAnimations: p,
    isSVG: h
  }), V.current && T.current && (T.current.manuallyAnimateOnMount = !0));
  const _ = T.current, j = B.useContext(T1);
  _ && !_.projection && c && (_.type === "html" || _.type === "svg") && XA(T.current, o, c, j);
  const L = B.useRef(!1);
  B.useInsertionEffect(() => {
    _ && L.current && _.update(o, v);
  });
  const G = o[Nv], k = B.useRef(!!G && typeof window < "u" && !window.MotionHandoffIsComplete?.(G) && window.MotionHasOptimisedAnimation?.(G));
  return LT(() => {
    V.current = !0, _ && (L.current = !0, window.MotionIsMounted = !0, _.updateFeatures(), _.scheduleRenderMicrotask(), k.current && _.animationState && _.animationState.animateChanges());
  }), B.useEffect(() => {
    _ && (!k.current && _.animationState && _.animationState.animateChanges(), k.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(G);
    }), k.current = !1), _.enteringChildren = void 0);
  }), _;
}
function XA(i, l, o, r) {
  const { layoutId: c, layout: h, drag: d, dragConstraints: y, layoutScroll: v, layoutRoot: S, layoutAnchor: g, layoutCrossfade: p } = l;
  i.projection = new o(i.latestValues, l["data-framer-portal-id"] ? void 0 : x1(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: h,
    alwaysMeasureLayout: !!d || y && Al(y),
    visualElement: i,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof h == "string" ? h : "both",
    initialPromotionConfig: r,
    crossfade: p,
    layoutScroll: v,
    layoutRoot: S,
    layoutAnchor: g
  });
}
function x1(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : x1(i.parent);
}
function Qf(i, { forwardMotionProps: l = !1, type: o } = {}, r, c) {
  r && AA(r);
  const h = o ? o === "svg" : Jd(i), d = h ? HA : LA;
  function y(S, g) {
    let p;
    const T = {
      ...B.useContext(m1),
      ...S,
      layoutId: QA(S)
    }, { isStatic: V } = T, _ = zA(S), j = d(S, V);
    if (!V && typeof window < "u") {
      ZA();
      const L = KA(T);
      p = L.MeasureLayout, _.visualElement = GA(i, j, T, c, L.ProjectionNode, h);
    }
    return Y.jsxs(Fo.Provider, { value: _, children: [p && _.visualElement ? Y.jsx(p, { visualElement: _.visualElement, ...T }) : null, UA(i, S, qA(j, _.visualElement, g), j, V, l, h)] });
  }
  y.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const v = B.forwardRef(y);
  return v[YA] = i, v;
}
function QA({ layoutId: i }) {
  const l = B.useContext(Xg).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function ZA(i, l) {
  B.useContext(y1).strict;
}
function KA(i) {
  const l = p1(), { drag: o, layout: r } = l;
  if (!o && !r)
    return {};
  const c = { ...o, ...r };
  return {
    MeasureLayout: o?.isEnabled(i) || r?.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function kA(i, l) {
  if (typeof Proxy > "u")
    return Qf;
  const o = /* @__PURE__ */ new Map(), r = (h, d) => Qf(h, d, i, l), c = (h, d) => r(h, d);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (h, d) => d === "create" ? r : (o.has(d) || o.set(d, Qf(d, void 0, i, l)), o.get(d))
  });
}
const JA = (i, l) => l.isSVG ?? Jd(i) ? new zE(l) : new EE(l, {
  allowProjection: i !== B.Fragment
});
class FA extends Wa {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = wE(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    ko(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let PA = 0;
class $A extends Wa {
  constructor() {
    super(...arguments), this.id = PA++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: o } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r)
      return;
    if (l && r === !1) {
      if (this.isExitComplete) {
        const { initial: h, custom: d } = this.node.getProps();
        if (typeof h == "string" || typeof h == "object" && h !== null && !Array.isArray(h)) {
          const y = _i(this.node, h, d);
          if (y) {
            const { transition: v, transitionEnd: S, ...g } = y;
            for (const p in g)
              this.node.getValue(p)?.jump(g[p]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    o && !l && c.then(() => {
      this.isExitComplete = !0, o(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const WA = {
  animation: {
    Feature: FA
  },
  exit: {
    Feature: $A
  }
};
function ks(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const IA = (i) => (l) => Yd(l) && i(l, ks(l));
function Ls(i, l, o, r) {
  return Gs(i, l, IA(o), r);
}
const E1 = ({ current: i }) => i ? i.ownerDocument.defaultView : null, Og = (i, l) => Math.abs(i - l);
function t3(i, l) {
  const o = Og(i.x, l.x), r = Og(i.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const zg = /* @__PURE__ */ new Set(["auto", "scroll"]);
class A1 {
  constructor(l, o, { transformPagePoint: r, contextWindow: c = window, dragSnapToOrigin: h = !1, distanceThreshold: d = 3, element: y } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (_) => {
      this.handleScroll(_.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Ao(this.lastRawMoveEventInfo, this.transformPagePoint));
      const _ = Zf(this.lastMoveEventInfo, this.history), j = this.startEvent !== null, L = t3(_.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!j && !L)
        return;
      const { point: G } = _, { timestamp: k } = ze;
      this.history.push({ ...G, timestamp: k });
      const { onStart: K, onMove: Q } = this.handlers;
      j || (K && K(this.lastMoveEvent, _), this.startEvent = this.lastMoveEvent), Q && Q(this.lastMoveEvent, _);
    }, this.handlePointerMove = (_, j) => {
      this.lastMoveEvent = _, this.lastRawMoveEventInfo = j, this.lastMoveEventInfo = Ao(j, this.transformPagePoint), Jt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (_, j) => {
      this.end();
      const { onEnd: L, onSessionEnd: G, resumeAnimation: k } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && k && k(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const K = Zf(_.type === "pointercancel" ? this.lastMoveEventInfo : Ao(j, this.transformPagePoint), this.history);
      this.startEvent && L && L(_, K), G && G(_, K);
    }, !Yd(l))
      return;
    this.dragSnapToOrigin = h, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = d, this.contextWindow = c || window;
    const v = ks(l), S = Ao(v, this.transformPagePoint), { point: g } = S, { timestamp: p } = ze;
    this.history = [{ ...g, timestamp: p }];
    const { onSessionStart: T } = o;
    T && T(l, Zf(S, this.history));
    const V = { passive: !0, capture: !0 };
    this.removeListeners = Qs(Ls(this.contextWindow, "pointermove", this.handlePointerMove, V), Ls(this.contextWindow, "pointerup", this.handlePointerUp, V), Ls(this.contextWindow, "pointercancel", this.handlePointerUp, V)), y && this.startScrollTracking(y);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o; ) {
      const r = getComputedStyle(o);
      (zg.has(r.overflowX) || zg.has(r.overflowY)) && this.scrollPositions.set(o, {
        x: o.scrollLeft,
        y: o.scrollTop
      }), o = o.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(l) {
    const o = this.scrollPositions.get(l);
    if (!o)
      return;
    const r = l === window, c = r ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, h = { x: c.x - o.x, y: c.y - o.y };
    h.x === 0 && h.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += h.x, this.lastMoveEventInfo.point.y += h.y) : this.history.length > 0 && (this.history[0].x -= h.x, this.history[0].y -= h.y), this.scrollPositions.set(l, c), Jt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), $a(this.updatePoint);
  }
}
function Ao(i, l) {
  return l ? { point: l(i.point) } : i;
}
function Rg(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Zf({ point: i }, l) {
  return {
    point: i,
    delta: Rg(i, M1(l)),
    offset: Rg(i, e3(l)),
    velocity: n3(l, 0.1)
  };
}
function e3(i) {
  return i[0];
}
function M1(i) {
  return i[i.length - 1];
}
function n3(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let o = i.length - 1, r = null;
  const c = M1(i);
  for (; o >= 0 && (r = i[o], !(c.timestamp - r.timestamp > /* @__PURE__ */ cn(l))); )
    o--;
  if (!r)
    return { x: 0, y: 0 };
  r === i[0] && i.length > 2 && c.timestamp - r.timestamp > /* @__PURE__ */ cn(l) * 2 && (r = i[1]);
  const h = /* @__PURE__ */ En(c.timestamp - r.timestamp);
  if (h === 0)
    return { x: 0, y: 0 };
  const d = {
    x: (c.x - r.x) / h,
    y: (c.y - r.y) / h
  };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function a3(i, { min: l, max: o }, r) {
  return l !== void 0 && i < l ? i = r ? kt(l, i, r.min) : Math.max(i, l) : o !== void 0 && i > o && (i = r ? kt(o, i, r.max) : Math.min(i, o)), i;
}
function Ng(i, l, o) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0
  };
}
function i3(i, { top: l, left: o, bottom: r, right: c }) {
  return {
    x: Ng(i.x, o, c),
    y: Ng(i.y, l, r)
  };
}
function _g(i, l) {
  let o = l.min - i.min, r = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([o, r] = [r, o]), { min: o, max: r };
}
function l3(i, l) {
  return {
    x: _g(i.x, l.x),
    y: _g(i.y, l.y)
  };
}
function s3(i, l) {
  let o = 0.5;
  const r = Xe(i), c = Xe(l);
  return c > r ? o = /* @__PURE__ */ Hs(l.min, l.max - r, i.min) : r > c && (o = /* @__PURE__ */ Hs(i.min, i.max - c, l.min)), ta(0, 1, o);
}
function u3(i, l) {
  const o = {};
  return l.min !== void 0 && (o.min = l.min - i.min), l.max !== void 0 && (o.max = l.max - i.min), o;
}
const Sd = 0.35;
function o3(i = Sd) {
  return i === !1 ? i = 0 : i === !0 && (i = Sd), {
    x: Vg(i, "left", "right"),
    y: Vg(i, "top", "bottom")
  };
}
function Vg(i, l, o) {
  return {
    min: wg(i, l),
    max: wg(i, o)
  };
}
function wg(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const r3 = /* @__PURE__ */ new WeakMap();
class c3 {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ve(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const h = (p) => {
      o && this.snapToCursor(ks(p).point), this.stopAnimation();
    }, d = (p, T) => {
      const { drag: V, dragPropagation: _, onDragStart: j } = this.getProps();
      if (V && !_ && (this.openDragLock && this.openDragLock(), this.openDragLock = X2(V), !this.openDragLock))
        return;
      this.latestPointerEvent = p, this.latestPanInfo = T, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $n((G) => {
        let k = this.getAxisMotionValue(G).get() || 0;
        if (In.test(k)) {
          const { projection: K } = this.visualElement;
          if (K && K.layout) {
            const Q = K.layout.layoutBox[G];
            Q && (k = Xe(Q) * (parseFloat(k) / 100));
          }
        }
        this.originPoint[G] = k;
      }), j && Jt.update(() => j(p, T), !1, !0), cd(this.visualElement, "transform");
      const { animationState: L } = this.visualElement;
      L && L.setActive("whileDrag", !0);
    }, y = (p, T) => {
      this.latestPointerEvent = p, this.latestPanInfo = T;
      const { dragPropagation: V, dragDirectionLock: _, onDirectionLock: j, onDrag: L } = this.getProps();
      if (!V && !this.openDragLock)
        return;
      const { offset: G } = T;
      if (_ && this.currentDirection === null) {
        this.currentDirection = d3(G), this.currentDirection !== null && j && j(this.currentDirection);
        return;
      }
      this.updateAxis("x", T.point, G), this.updateAxis("y", T.point, G), this.visualElement.render(), L && Jt.update(() => L(p, T), !1, !0);
    }, v = (p, T) => {
      this.latestPointerEvent = p, this.latestPanInfo = T, this.stop(p, T), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, S = () => {
      const { dragSnapToOrigin: p } = this.getProps();
      (p || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new A1(l, {
      onSessionStart: h,
      onStart: d,
      onMove: y,
      onSessionEnd: v,
      resumeAnimation: S
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: g,
      distanceThreshold: r,
      contextWindow: E1(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, o) {
    const r = l || this.latestPointerEvent, c = o || this.latestPanInfo, h = this.isDragging;
    if (this.cancel(), !h || !c || !r)
      return;
    const { velocity: d } = c;
    this.startAnimation(d);
    const { onDragEnd: y } = this.getProps();
    y && Jt.postRender(() => y(r, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o && o.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(l, o, r) {
    const { drag: c } = this.getProps();
    if (!r || !Mo(l, c, this.currentDirection))
      return;
    const h = this.getAxisMotionValue(l);
    let d = this.originPoint[l] + r[l];
    this.constraints && this.constraints[l] && (d = a3(d, this.constraints[l], this.elastic[l])), h.set(d);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: o } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && Al(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && r ? this.constraints = i3(r.layoutBox, l) : this.constraints = !1, this.elastic = o3(o), c !== this.constraints && !Al(l) && r && this.constraints && !this.hasMutatedConstraints && $n((h) => {
      this.constraints !== !1 && this.getAxisMotionValue(h) && (this.constraints[h] = u3(r.layoutBox[h], this.constraints[h]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !Al(l))
      return !1;
    const r = l.current, { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const h = gE(r, c.root, this.visualElement.getTransformPagePoint());
    let d = l3(c.layout.layoutBox, h);
    if (o) {
      const y = o(mE(d));
      this.hasMutatedConstraints = !!y, y && (d = kv(y));
    }
    return d;
  }
  startAnimation(l) {
    const { drag: o, dragMomentum: r, dragElastic: c, dragTransition: h, dragSnapToOrigin: d, onDragTransitionEnd: y } = this.getProps(), v = this.constraints || {}, S = $n((g) => {
      if (!Mo(g, o, this.currentDirection))
        return;
      let p = v && v[g] || {};
      (d === !0 || d === g) && (p = { min: 0, max: 0 });
      const T = c ? 200 : 1e6, V = c ? 40 : 1e7, _ = {
        type: "inertia",
        velocity: r ? l[g] : 0,
        bounceStiffness: T,
        bounceDamping: V,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...h,
        ...p
      };
      return this.startAxisValueAnimation(g, _);
    });
    return Promise.all(S).then(y);
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return cd(this.visualElement, l), r.start(Ud(l, r, 0, o, this.visualElement, !1));
  }
  stopAnimation() {
    $n((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`, c = this.visualElement.getProps()[o];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  snapToCursor(l) {
    $n((o) => {
      const { drag: r } = this.getProps();
      if (!Mo(o, r, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, h = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: d, max: y } = c.layout.layoutBox[o], v = h.get() || 0;
        h.set(l[o] - kt(d, y, 0.5) + v);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: o } = this.getProps(), { projection: r } = this.visualElement;
    if (!Al(o) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    $n((d) => {
      const y = this.getAxisMotionValue(d);
      if (y && this.constraints !== !1) {
        const v = y.get();
        c[d] = s3({ min: v, max: v }, this.constraints[d]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    this.visualElement.current.style.transform = h ? h({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), $n((d) => {
      if (!Mo(d, l, null))
        return;
      const y = this.getAxisMotionValue(d), { min: v, max: S } = this.constraints[d];
      y.set(kt(v, S, c[d]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    r3.set(this.visualElement, this);
    const l = this.visualElement.current, o = Ls(l, "pointerdown", (S) => {
      const { drag: g, dragListener: p = !0 } = this.getProps(), T = S.target, V = T !== l && F2(T);
      g && p && !V && this.start(S);
    });
    let r;
    const c = () => {
      const { dragConstraints: S } = this.getProps();
      Al(S) && S.current && (this.constraints = this.resolveRefConstraints(), r || (r = f3(l, S.current, () => this.scalePositionWithinConstraints())));
    }, { projection: h } = this.visualElement, d = h.addEventListener("measure", c);
    h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()), Jt.read(c);
    const y = Gs(window, "resize", () => this.scalePositionWithinConstraints()), v = h.addEventListener("didUpdate", (({ delta: S, hasLayoutChanged: g }) => {
      this.isDragging && g && ($n((p) => {
        const T = this.getAxisMotionValue(p);
        T && (this.originPoint[p] += S[p].translate, T.set(T.get() + S[p].translate));
      }), this.visualElement.render());
    }));
    return () => {
      y(), o(), d(), v && v(), r && r();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: o = !1, dragDirectionLock: r = !1, dragPropagation: c = !1, dragConstraints: h = !1, dragElastic: d = Sd, dragMomentum: y = !0 } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: d,
      dragMomentum: y
    };
  }
}
function Ug(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function f3(i, l, o) {
  const r = Qp(i, Ug(o)), c = Qp(l, Ug(o));
  return () => {
    r(), c();
  };
}
function Mo(i, l, o) {
  return (l === !0 || l === i) && (o === null || o === i);
}
function d3(i, l = 10) {
  let o = null;
  return Math.abs(i.y) > l ? o = "y" : Math.abs(i.x) > l && (o = "x"), o;
}
class h3 extends Wa {
  constructor(l) {
    super(l), this.removeGroupControls = An, this.removeListeners = An, this.controls = new c3(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || An;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: o } = this.node.prevProps || {};
    l !== o && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Kf = (i) => (l, o) => {
  i && Jt.update(() => i(l, o), !1, !0);
};
class m3 extends Wa {
  constructor() {
    super(...arguments), this.removePointerDownListener = An;
  }
  onPointerDown(l) {
    this.session = new A1(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: E1(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: o, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Kf(l),
      onStart: Kf(o),
      onMove: Kf(r),
      onEnd: (h, d) => {
        delete this.session, c && Jt.postRender(() => c(h, d));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ls(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let kf = !1;
class y3 extends B.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r, layoutId: c } = this.props, { projection: h } = l;
    h && (o.group && o.group.add(h), r && r.register && c && r.register(h), kf && h.root.didUpdate(), h.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), h.setOptions({
      ...h.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Vo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: o, visualElement: r, drag: c, isPresent: h } = this.props, { projection: d } = r;
    return d && (d.isPresent = h, l.layoutDependency !== o && d.setOptions({
      ...d.options,
      layoutDependency: o
    }), kf = !0, c || l.layoutDependency !== o || o === void 0 || l.isPresent !== h ? d.willUpdate() : this.safeToRemove(), l.isPresent !== h && (h ? d.promote() : d.relegate() || Jt.postRender(() => {
      const y = d.getStack();
      (!y || !y.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: o } = this.props, { projection: r } = l;
    r && (r.options.layoutAnchor = o, r.root.didUpdate(), Hd.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r } = this.props, { projection: c } = l;
    kf = !0, c && (c.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(c), r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function C1(i) {
  const [l, o] = xA(), r = B.useContext(Xg);
  return Y.jsx(y3, { ...i, layoutGroup: r, switchLayoutGroup: B.useContext(T1), isPresent: l, safeToRemove: o });
}
const p3 = {
  pan: {
    Feature: m3
  },
  drag: {
    Feature: h3,
    ProjectionNode: h1,
    MeasureLayout: C1
  }
};
function Bg(i, l, o) {
  const { props: r } = i;
  i.animationState && r.whileHover && i.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o, h = r[c];
  h && Jt.postRender(() => h(l, ks(l)));
}
class g3 extends Wa {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = Z2(l, (o, r) => (Bg(this.node, r, "Start"), (c) => Bg(this.node, c, "End"))));
  }
  unmount() {
  }
}
class v3 extends Wa {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Qs(Gs(this.node.current, "focus", () => this.onFocus()), Gs(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function jg(i, l, o) {
  const { props: r } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && r.whileTap && i.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o), h = r[c];
  h && Jt.postRender(() => h(l, ks(l)));
}
class S3 extends Wa {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = $2(l, (c, h) => (jg(this.node, h, "Start"), (d, { success: y }) => jg(this.node, d, y ? "End" : "Cancel")), {
      useGlobalTarget: o,
      stopPropagation: r?.tap === !1
    });
  }
  unmount() {
  }
}
const bd = /* @__PURE__ */ new WeakMap(), Jf = /* @__PURE__ */ new WeakMap(), b3 = (i) => {
  const l = bd.get(i.target);
  l && l(i);
}, T3 = (i) => {
  i.forEach(b3);
};
function x3({ root: i, ...l }) {
  const o = i || document;
  Jf.has(o) || Jf.set(o, {});
  const r = Jf.get(o), c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(T3, { root: i, ...l })), r[c];
}
function E3(i, l, o) {
  const r = x3(l);
  return bd.set(i, o), r.observe(i), () => {
    bd.delete(i), r.unobserve(i);
  };
}
const A3 = {
  some: 0,
  all: 1
};
class M3 extends Wa {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: o, margin: r, amount: c = "some", once: h } = l, d = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : A3[c]
    }, y = (v) => {
      const { isIntersecting: S } = v;
      if (this.isInView === S || (this.isInView = S, h && !S && this.hasEnteredView))
        return;
      S && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", S);
      const { onViewportEnter: g, onViewportLeave: p } = this.node.getProps(), T = S ? g : p;
      T && T(v);
    };
    this.stopObserver = E3(this.node.current, d, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(C3(l, o)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function C3({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (o) => i[o] !== l[o];
}
const D3 = {
  inView: {
    Feature: M3
  },
  tap: {
    Feature: S3
  },
  focus: {
    Feature: v3
  },
  hover: {
    Feature: g3
  }
}, O3 = {
  layout: {
    ProjectionNode: h1,
    MeasureLayout: C1
  }
}, z3 = {
  ...WA,
  ...D3,
  ...p3,
  ...O3
}, Lg = /* @__PURE__ */ kA(z3, JA);
function R3() {
  !Qd.current && Qv();
  const [i] = B.useState(Yo.current);
  return i;
}
function N3({ links: i }) {
  const [l, o] = B.useState(!1), r = B.useRef(null), c = B.useRef(null), h = B.useRef(null), d = R3();
  return B.useEffect(() => {
    if (!l) return;
    h.current?.focus({ preventScroll: !0 });
    function y(S) {
      r.current?.contains(S.target) || o(!1);
    }
    function v(S) {
      S.key === "Escape" && (o(!1), c.current?.focus());
    }
    return document.addEventListener("pointerdown", y), document.addEventListener("keydown", v), () => {
      document.removeEventListener("pointerdown", y), document.removeEventListener("keydown", v);
    };
  }, [l]), /* @__PURE__ */ Y.jsxs(
    Lg.nav,
    {
      ref: r,
      className: "phone-liquid-menu",
      "aria-label": "Mobile navigation",
      onBlur: (y) => {
        y.currentTarget.contains(y.relatedTarget) || o(!1);
      },
      initial: !1,
      animate: { width: l ? 280 : 150, borderRadius: l ? 32 : 72 },
      transition: { duration: d ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] },
      children: [
        /* @__PURE__ */ Y.jsx(
          Lg.div,
          {
            className: "phone-menu-links",
            id: "phone-nav-links",
            inert: !l,
            initial: !1,
            animate: { height: l ? "auto" : 0, opacity: l ? 1 : 0 },
            transition: { duration: d ? 0 : 0.35 },
            children: i.map((y, v) => /* @__PURE__ */ Y.jsx(
              "a",
              {
                ref: v === 0 ? h : void 0,
                href: y.href,
                "aria-current": y.hasAttribute("aria-current") ? "page" : void 0,
                children: y.textContent
              },
              y.href
            ))
          }
        ),
        /* @__PURE__ */ Y.jsxs("button", { ref: c, "aria-expanded": l, "aria-controls": "phone-nav-links", onClick: () => o(!l), children: [
          "Menu ",
          /* @__PURE__ */ Y.jsx("span", { "aria-hidden": "true", children: l ? "×" : "☰" })
        ] })
      ]
    }
  );
}
const _3 = [
  ["mushroom", "Spicy Garlic Mushroom", 790],
  ["chicken-strips", "Chicken Tender Strips", 690],
  ["fish-chips", "Fish & Chips", 790],
  ["club", "Club Sandwich", 790],
  ["cheesy-chicken", "Cheesy Grilled Chicken Sandwich", 840],
  ["steak-sandwich", "Beef Steak Sandwich", 890],
  ["special", "Barock Special Sandwich", 990]
], V3 = [690, 790, 840, 890, 990], w3 = _3.map(([i, l, o]) => ({
  id: i,
  name: l,
  price: `BDT ${o}`,
  tier: V3.indexOf(o) + 1,
  image: `./assets/menu-dishes/${i}.webp`
})), Hg = document.getElementById("menu-conveyor");
Hg && Gg.createRoot(Hg).render(/* @__PURE__ */ Y.jsx(wT, { items: w3, legend: {}, eyebrow: "From the BAROCK kitchen", heading: "Appetizers & sandwiches", caption: "Pick a plate to explore a dish." }));
const D1 = matchMedia("(max-width: 767px)"), Yg = Array.from(document.querySelectorAll("#mobile-menu a")), O1 = document.createElement("div");
document.body.append(O1);
const U3 = Gg.createRoot(O1);
function z1() {
  U3.render(D1.matches && Yg.length ? /* @__PURE__ */ Y.jsx(N3, { links: Yg }) : null);
}
z1();
D1.addEventListener("change", z1);
