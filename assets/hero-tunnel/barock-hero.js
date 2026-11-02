var Fc = { exports: {} }, Zl = {};
var jg;
function QT() {
  if (jg) return Zl;
  jg = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(o, f, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), f.key !== void 0 && (h = "" + f.key), "key" in f) {
      d = {};
      for (var y in f)
        y !== "key" && (d[y] = f[y]);
    } else d = f;
    return f = d.ref, {
      $$typeof: i,
      type: o,
      key: h,
      ref: f !== void 0 ? f : null,
      props: d
    };
  }
  return Zl.Fragment = l, Zl.jsx = r, Zl.jsxs = r, Zl;
}
var Yg;
function ZT() {
  return Yg || (Yg = 1, Fc.exports = QT()), Fc.exports;
}
var qt = ZT(), Pc = { exports: {} }, Kl = {}, kc = { exports: {} }, Wc = {};
var qg;
function KT() {
  return qg || (qg = 1, (function(i) {
    function l(L, et) {
      var K = L.length;
      L.push(et);
      t: for (; 0 < K; ) {
        var ot = K - 1 >>> 1, ft = L[ot];
        if (0 < f(ft, et))
          L[ot] = et, L[K] = ft, K = ot;
        else break t;
      }
    }
    function r(L) {
      return L.length === 0 ? null : L[0];
    }
    function o(L) {
      if (L.length === 0) return null;
      var et = L[0], K = L.pop();
      if (K !== et) {
        L[0] = K;
        t: for (var ot = 0, ft = L.length, It = ft >>> 1; ot < It; ) {
          var ke = 2 * (ot + 1) - 1, Ta = L[ke], A = ke + 1, w = L[A];
          if (0 > f(Ta, K))
            A < ft && 0 > f(w, Ta) ? (L[ot] = w, L[A] = K, ot = A) : (L[ot] = Ta, L[ke] = K, ot = ke);
          else if (A < ft && 0 > f(w, K))
            L[ot] = w, L[A] = K, ot = A;
          else break t;
        }
      }
      return et;
    }
    function f(L, et) {
      var K = L.sortIndex - et.sortIndex;
      return K !== 0 ? K : L.id - et.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      i.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, y = h.now();
      i.unstable_now = function() {
        return h.now() - y;
      };
    }
    var S = [], p = [], v = 1, g = null, b = 3, V = !1, z = !1, B = !1, U = !1, H = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function X(L) {
      for (var et = r(p); et !== null; ) {
        if (et.callback === null) o(p);
        else if (et.startTime <= L)
          o(p), et.sortIndex = et.expirationTime, l(S, et);
        else break;
        et = r(p);
      }
    }
    function nt(L) {
      if (B = !1, X(L), !z)
        if (r(S) !== null)
          z = !0, ct || (ct = !0, Ot());
        else {
          var et = r(p);
          et !== null && Rt(nt, et.startTime - L);
        }
    }
    var ct = !1, Z = -1, G = 5, xt = -1;
    function W() {
      return U ? !0 : !(i.unstable_now() - xt < G);
    }
    function vt() {
      if (U = !1, ct) {
        var L = i.unstable_now();
        xt = L;
        var et = !0;
        try {
          t: {
            z = !1, B && (B = !1, Y(Z), Z = -1), V = !0;
            var K = b;
            try {
              e: {
                for (X(L), g = r(S); g !== null && !(g.expirationTime > L && W()); ) {
                  var ot = g.callback;
                  if (typeof ot == "function") {
                    g.callback = null, b = g.priorityLevel;
                    var ft = ot(
                      g.expirationTime <= L
                    );
                    if (L = i.unstable_now(), typeof ft == "function") {
                      g.callback = ft, X(L), et = !0;
                      break e;
                    }
                    g === r(S) && o(S), X(L);
                  } else o(S);
                  g = r(S);
                }
                if (g !== null) et = !0;
                else {
                  var It = r(p);
                  It !== null && Rt(
                    nt,
                    It.startTime - L
                  ), et = !1;
                }
              }
              break t;
            } finally {
              g = null, b = K, V = !1;
            }
            et = void 0;
          }
        } finally {
          et ? Ot() : ct = !1;
        }
      }
    }
    var Ot;
    if (typeof q == "function")
      Ot = function() {
        q(vt);
      };
    else if (typeof MessageChannel < "u") {
      var de = new MessageChannel(), Wt = de.port2;
      de.port1.onmessage = vt, Ot = function() {
        Wt.postMessage(null);
      };
    } else
      Ot = function() {
        H(vt, 0);
      };
    function Rt(L, et) {
      Z = H(function() {
        L(i.unstable_now());
      }, et);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, i.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : G = 0 < L ? Math.floor(1e3 / L) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, i.unstable_next = function(L) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var et = 3;
          break;
        default:
          et = b;
      }
      var K = b;
      b = et;
      try {
        return L();
      } finally {
        b = K;
      }
    }, i.unstable_requestPaint = function() {
      U = !0;
    }, i.unstable_runWithPriority = function(L, et) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var K = b;
      b = L;
      try {
        return et();
      } finally {
        b = K;
      }
    }, i.unstable_scheduleCallback = function(L, et, K) {
      var ot = i.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ot + K : ot) : K = ot, L) {
        case 1:
          var ft = -1;
          break;
        case 2:
          ft = 250;
          break;
        case 5:
          ft = 1073741823;
          break;
        case 4:
          ft = 1e4;
          break;
        default:
          ft = 5e3;
      }
      return ft = K + ft, L = {
        id: v++,
        callback: et,
        priorityLevel: L,
        startTime: K,
        expirationTime: ft,
        sortIndex: -1
      }, K > ot ? (L.sortIndex = K, l(p, L), r(S) === null && L === r(p) && (B ? (Y(Z), Z = -1) : B = !0, Rt(nt, K - ot))) : (L.sortIndex = ft, l(S, L), z || V || (z = !0, ct || (ct = !0, Ot()))), L;
    }, i.unstable_shouldYield = W, i.unstable_wrapCallback = function(L) {
      var et = b;
      return function() {
        var K = b;
        b = et;
        try {
          return L.apply(this, arguments);
        } finally {
          b = K;
        }
      };
    };
  })(Wc)), Wc;
}
var Gg;
function JT() {
  return Gg || (Gg = 1, kc.exports = KT()), kc.exports;
}
var Ic = { exports: {} }, it = {};
var Xg;
function FT() {
  if (Xg) return it;
  Xg = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), f = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), g = /* @__PURE__ */ Symbol.for("react.activity"), b = /* @__PURE__ */ Symbol.for("react.view_transition"), V = Symbol.iterator;
  function z(A) {
    return A === null || typeof A != "object" ? null : (A = V && A[V] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var B = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, U = Object.assign, H = {};
  function Y(A, w, I) {
    this.props = A, this.context = w, this.refs = H, this.updater = I || B;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(A, w) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, w, "setState");
  }, Y.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function q() {
  }
  q.prototype = Y.prototype;
  function X(A, w, I) {
    this.props = A, this.context = w, this.refs = H, this.updater = I || B;
  }
  var nt = X.prototype = new q();
  nt.constructor = X, U(nt, Y.prototype), nt.isPureReactComponent = !0;
  var ct = Array.isArray;
  function Z() {
  }
  var G = { H: null, A: null, T: null, S: null }, xt = Object.prototype.hasOwnProperty;
  function W(A, w, I) {
    var $ = I.ref;
    return {
      $$typeof: i,
      type: A,
      key: w,
      ref: $ !== void 0 ? $ : null,
      props: I
    };
  }
  function vt(A, w) {
    return W(A.type, w, A.props);
  }
  function Ot(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i;
  }
  function de(A) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(I) {
      return w[I];
    });
  }
  var Wt = /\/+/g;
  function Rt(A, w) {
    return typeof A == "object" && A !== null && A.key != null ? de("" + A.key) : w.toString(36);
  }
  function L(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(Z, Z) : (A.status = "pending", A.then(
          function(w) {
            A.status === "pending" && (A.status = "fulfilled", A.value = w);
          },
          function(w) {
            A.status === "pending" && (A.status = "rejected", A.reason = w);
          }
        )), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function et(A, w, I, $, pt) {
    var St = typeof A;
    (St === "undefined" || St === "boolean") && (A = null);
    var bt = !1;
    if (A === null) bt = !0;
    else
      switch (St) {
        case "bigint":
        case "string":
        case "number":
          bt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case i:
            case l:
              bt = !0;
              break;
            case v:
              return bt = A._init, et(
                bt(A._payload),
                w,
                I,
                $,
                pt
              );
          }
      }
    if (bt)
      return pt = pt(A), bt = $ === "" ? "." + Rt(A, 0) : $, ct(pt) ? (I = "", bt != null && (I = bt.replace(Wt, "$&/") + "/"), et(pt, w, I, "", function(Mn) {
        return Mn;
      })) : pt != null && (Ot(pt) && (pt = vt(
        pt,
        I + (pt.key == null || A && A.key === pt.key ? "" : ("" + pt.key).replace(
          Wt,
          "$&/"
        ) + "/") + bt
      )), w.push(pt)), 1;
    bt = 0;
    var P = $ === "" ? "." : $ + ":";
    if (ct(A))
      for (var at = 0; at < A.length; at++)
        $ = A[at], St = P + Rt($, at), bt += et(
          $,
          w,
          I,
          St,
          pt
        );
    else if (at = z(A), typeof at == "function")
      for (A = at.call(A), at = 0; !($ = A.next()).done; )
        $ = $.value, St = P + Rt($, at++), bt += et(
          $,
          w,
          I,
          St,
          pt
        );
    else if (St === "object") {
      if (typeof A.then == "function")
        return et(
          L(A),
          w,
          I,
          $,
          pt
        );
      throw w = String(A), Error(
        "Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return bt;
  }
  function K(A, w, I) {
    if (A == null) return A;
    var $ = [], pt = 0;
    return et(A, $, "", "", function(St) {
      return w.call(I, St, pt++);
    }), $;
  }
  function ot(A) {
    if (A._status === -1) {
      var w = A._result, I = w();
      I.then(
        function($) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = $, I.status === void 0 && (I.status = "fulfilled", I.value = $));
        },
        function($) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = $, I.status === void 0 && (I.status = "rejected", I.reason = $));
        }
      ), A._status === -1 && (A._status = 0, A._result = I);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var ft = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var w = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(w)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  };
  function It(A) {
    var w = G.T, I = {};
    I.types = w !== null ? w.types : null, G.T = I;
    try {
      var $ = A(), pt = G.S;
      pt !== null && pt(I, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(Z, ft);
    } catch (St) {
      ft(St);
    } finally {
      w !== null && I.types !== null && (w.types = I.types), G.T = w;
    }
  }
  function ke(A) {
    var w = G.T;
    if (w !== null) {
      var I = w.types;
      I === null ? w.types = [A] : I.indexOf(A) === -1 && I.push(A);
    } else It(ke.bind(null, A));
  }
  var Ta = {
    map: K,
    forEach: function(A, w, I) {
      K(
        A,
        function() {
          w.apply(this, arguments);
        },
        I
      );
    },
    count: function(A) {
      var w = 0;
      return K(A, function() {
        w++;
      }), w;
    },
    toArray: function(A) {
      return K(A, function(w) {
        return w;
      }) || [];
    },
    only: function(A) {
      if (!Ot(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return it.Activity = g, it.Children = Ta, it.Component = Y, it.Fragment = r, it.Profiler = f, it.PureComponent = X, it.StrictMode = o, it.Suspense = S, it.ViewTransition = b, it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, it.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return G.H.useMemoCache(A);
    }
  }, it.addTransitionType = ke, it.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, it.cacheSignal = function() {
    return null;
  }, it.cloneElement = function(A, w, I) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var $ = U({}, A.props), pt = A.key;
    if (w != null)
      for (St in w.key !== void 0 && (pt = "" + w.key), w)
        !xt.call(w, St) || St === "key" || St === "__self" || St === "__source" || St === "ref" && w.ref === void 0 || ($[St] = w[St]);
    var St = arguments.length - 2;
    if (St === 1) $.children = I;
    else if (1 < St) {
      for (var bt = Array(St), P = 0; P < St; P++)
        bt[P] = arguments[P + 2];
      $.children = bt;
    }
    return W(A.type, pt, $);
  }, it.createContext = function(A) {
    return A = {
      $$typeof: h,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: d,
      _context: A
    }, A;
  }, it.createElement = function(A, w, I) {
    var $, pt = {}, St = null;
    if (w != null)
      for ($ in w.key !== void 0 && (St = "" + w.key), w)
        xt.call(w, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (pt[$] = w[$]);
    var bt = arguments.length - 2;
    if (bt === 1) pt.children = I;
    else if (1 < bt) {
      for (var P = Array(bt), at = 0; at < bt; at++)
        P[at] = arguments[at + 2];
      pt.children = P;
    }
    if (A && A.defaultProps)
      for ($ in bt = A.defaultProps, bt)
        pt[$] === void 0 && (pt[$] = bt[$]);
    return W(A, St, pt);
  }, it.createRef = function() {
    return { current: null };
  }, it.forwardRef = function(A) {
    return { $$typeof: y, render: A };
  }, it.isValidElement = Ot, it.lazy = function(A) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: A },
      _init: ot
    };
  }, it.memo = function(A, w) {
    return {
      $$typeof: p,
      type: A,
      compare: w === void 0 ? null : w
    };
  }, it.startTransition = It, it.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, it.use = function(A) {
    return G.H.use(A);
  }, it.useActionState = function(A, w, I) {
    return G.H.useActionState(A, w, I);
  }, it.useCallback = function(A, w) {
    return G.H.useCallback(A, w);
  }, it.useContext = function(A) {
    return G.H.useContext(A);
  }, it.useDebugValue = function() {
  }, it.useDeferredValue = function(A, w) {
    return G.H.useDeferredValue(A, w);
  }, it.useEffect = function(A, w) {
    return G.H.useEffect(A, w);
  }, it.useEffectEvent = function(A) {
    return G.H.useEffectEvent(A);
  }, it.useId = function() {
    return G.H.useId();
  }, it.useImperativeHandle = function(A, w, I) {
    return G.H.useImperativeHandle(A, w, I);
  }, it.useInsertionEffect = function(A, w) {
    return G.H.useInsertionEffect(A, w);
  }, it.useLayoutEffect = function(A, w) {
    return G.H.useLayoutEffect(A, w);
  }, it.useMemo = function(A, w) {
    return G.H.useMemo(A, w);
  }, it.useOptimistic = function(A, w) {
    return G.H.useOptimistic(A, w);
  }, it.useReducer = function(A, w, I) {
    return G.H.useReducer(A, w, I);
  }, it.useRef = function(A) {
    return G.H.useRef(A);
  }, it.useState = function(A) {
    return G.H.useState(A);
  }, it.useSyncExternalStore = function(A, w, I) {
    return G.H.useSyncExternalStore(
      A,
      w,
      I
    );
  }, it.useTransition = function() {
    return G.H.useTransition();
  }, it.version = "19.3.1", it;
}
var Qg;
function qf() {
  return Qg || (Qg = 1, Ic.exports = FT()), Ic.exports;
}
var $c = { exports: {} }, ce = {};
var Zg;
function PT() {
  if (Zg) return ce;
  Zg = 1;
  var i = qf();
  function l(v) {
    var g = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        g += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + v + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var o = {
    d: {
      f: r,
      r: function() {
        throw Error(l(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, f = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.recoverable"), h = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function y(v, g, b) {
    var V = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: V == null ? null : V === h ? h : "" + V,
      children: v,
      containerInfo: g,
      implementation: b
    };
  }
  var S = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, g) {
    if (v === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, ce.browser = function(v) {
    return { $$typeof: d, _reason: v };
  }, ce.createPortal = function(v, g) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(l(299));
    return y(v, g, null, b);
  }, ce.flushSync = function(v) {
    var g = S.T, b = o.p;
    try {
      if (S.T = null, o.p = 2, v) return v();
    } finally {
      S.T = g, o.p = b, o.d.f();
    }
  }, ce.preconnect = function(v, g) {
    typeof v == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(v, g));
  }, ce.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v);
  }, ce.preinit = function(v, g) {
    if (typeof v == "string" && g && typeof g.as == "string") {
      var b = g.as, V = p(b, g.crossOrigin), z = typeof g.integrity == "string" ? g.integrity : void 0, B = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      b === "style" ? o.d.S(
        v,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: V,
          integrity: z,
          fetchPriority: B
        }
      ) : b === "script" && o.d.X(v, {
        crossOrigin: V,
        integrity: z,
        fetchPriority: B,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, ce.preinitModule = function(v, g) {
    if (typeof v == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var b = p(
            g.as,
            g.crossOrigin
          );
          o.d.M(v, {
            crossOrigin: b,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
          });
        }
      } else g == null && o.d.M(v);
  }, ce.preload = function(v, g) {
    if (typeof v == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var b = g.as, V = p(b, g.crossOrigin);
      o.d.L(v, b, {
        crossOrigin: V,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, ce.preloadModule = function(v, g) {
    if (typeof v == "string")
      if (g) {
        var b = p(g.as, g.crossOrigin);
        o.d.m(v, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
        });
      } else o.d.m(v);
  }, ce.requestFormReset = function(v) {
    o.d.r(v);
  }, ce.unstable_batchedUpdates = function(v, g) {
    return v(g);
  }, ce.useFormState = function(v, g, b) {
    return S.H.useFormState(v, g, b);
  }, ce.useFormStatus = function() {
    return S.H.useHostTransitionStatus();
  }, ce.version = "19.3.1", ce;
}
var Kg;
function kT() {
  if (Kg) return $c.exports;
  Kg = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), $c.exports = PT(), $c.exports;
}
var Jg;
function WT() {
  if (Jg) return Kl;
  Jg = 1;
  var i = JT(), l = qf(), r = kT();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function d(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function h(t) {
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
  function S(t) {
    if (d(t) !== t)
      throw Error(o(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (e = d(t), e === null) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var s = u.alternate;
      if (s === null) {
        if (a = u.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (u.child === s.child) {
        for (s = u.child; s; ) {
          if (s === n) return S(u), t;
          if (s === a) return S(u), e;
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== a.return) n = u, a = s;
      else {
        for (var c = !1, m = u.child; m; ) {
          if (m === n) {
            c = !0, n = u, a = s;
            break;
          }
          if (m === a) {
            c = !0, a = u, n = s;
            break;
          }
          m = m.sibling;
        }
        if (!c) {
          for (m = s.child; m; ) {
            if (m === n) {
              c = !0, n = s, a = u;
              break;
            }
            if (m === a) {
              c = !0, a = s, n = u;
              break;
            }
            m = m.sibling;
          }
          if (!c) throw Error(o(189));
        }
      }
      if (n.alternate !== a) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = v(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function g(t, e, n, a, u, s) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, a, u, s) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && g(
        t.child,
        e,
        n,
        a,
        u,
        s
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function b(t) {
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
  function z(t) {
    var e = [null, null], n = b(t);
    return n === null || B(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function B(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && B(
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
  function U(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(o(559));
    }
  }
  var H = null, Y = null;
  function q(t, e, n) {
    return t === n ? !0 : t === e ? (H = t, !0) : !1;
  }
  function X(t, e, n) {
    return t === n ? (Y = t, !1) : t === e ? (Y !== null && (H = t), !0) : !1;
  }
  function nt(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function ct(t, e, n) {
    for (var a = 0, u = t; u; u = n(u)) a++;
    u = 0;
    for (var s = e; s; s = n(s)) u++;
    for (; 0 < a - u; ) t = n(t), a--;
    for (; 0 < u - a; ) e = n(e), u--;
    for (; a--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var Z = Object.assign, G = /* @__PURE__ */ Symbol.for("react.element"), xt = /* @__PURE__ */ Symbol.for("react.transitional.element"), W = /* @__PURE__ */ Symbol.for("react.portal"), vt = /* @__PURE__ */ Symbol.for("react.fragment"), Ot = /* @__PURE__ */ Symbol.for("react.strict_mode"), de = /* @__PURE__ */ Symbol.for("react.profiler"), Wt = /* @__PURE__ */ Symbol.for("react.consumer"), Rt = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), et = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), ot = /* @__PURE__ */ Symbol.for("react.memo"), ft = /* @__PURE__ */ Symbol.for("react.lazy"), It = /* @__PURE__ */ Symbol.for("react.activity"), ke = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Ta = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), A = /* @__PURE__ */ Symbol.for("react.view_transition"), w = /* @__PURE__ */ Symbol.for("react.recoverable"), I = Symbol.iterator;
  function $(t) {
    return t === null || typeof t != "object" ? null : (t = I && t[I] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var pt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function St(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === pt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case vt:
        return "Fragment";
      case de:
        return "Profiler";
      case Ot:
        return "StrictMode";
      case et:
        return "Suspense";
      case K:
        return "SuspenseList";
      case It:
        return "Activity";
      case A:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case W:
          return "Portal";
        case Rt:
          return t.displayName || "Context";
        case Wt:
          return (t._context.displayName || "Context") + ".Consumer";
        case L:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ot:
          return e = t.displayName || null, e !== null ? e : St(t.type) || "Memo";
        case ft:
          e = t._payload, t = t._init;
          try {
            return St(t(e));
          } catch {
          }
      }
    return null;
  }
  var bt = Array.isArray, P = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, at = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Mn = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ho = [], Wa = -1;
  function sn(t) {
    return { current: t };
  }
  function ae(t) {
    0 > Wa || (t.current = ho[Wa], ho[Wa] = null, Wa--);
  }
  function Ut(t, e) {
    Wa++, ho[Wa] = t.current, t.current = e;
  }
  var on = sn(null), Wi = sn(null), qn = sn(null), su = sn(null);
  function ou(t, e) {
    switch (Ut(qn, e), Ut(Wi, t), Ut(on, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Fy(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Fy(e), t = Py(e, t);
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
    ae(on), Ut(on, t);
  }
  function Ia() {
    ae(on), ae(Wi), ae(qn);
  }
  function mo(t) {
    var e = t.memoizedState;
    e !== null && (ji._currentValue = e.memoizedState, Ut(su, t)), e = on.current;
    var n = Py(e, t.type);
    e !== n && (Ut(Wi, t), Ut(on, n));
  }
  function ru(t) {
    Wi.current === t && (ae(on), ae(Wi)), su.current === t && (ae(su), ji._currentValue = Mn);
  }
  var yo, yh;
  function Gn(t) {
    if (yo === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        yo = e && e[1] || "", yh = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + yo + t + yh;
  }
  var go = !1;
  function vo(t, e) {
    if (!t || go) return "";
    go = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var N = function() {
                throw Error();
              };
              if (Object.defineProperty(N.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, []);
                } catch (j) {
                  var M = j;
                }
                Reflect.construct(t, [], N);
              } else {
                try {
                  N.call();
                } catch (j) {
                  M = j;
                }
                N = !1;
                try {
                  var O = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), N = !0, new t();
                } finally {
                  N && (O !== void 0 ? Object.defineProperty(t.prototype, "props", O) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                M = j;
              }
              (N = t()) && typeof N.catch == "function" && N.catch(function() {
              });
            }
          } catch (j) {
            if (j && M && typeof j.stack == "string")
              return [j.stack, M.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = a.DetermineComponentFrameRoot(), c = s[0], m = s[1];
      if (c && m) {
        var T = c.split(`
`), C = m.split(`
`);
        for (u = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < C.length && !C[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === T.length || u === C.length)
          for (a = T.length - 1, u = C.length - 1; 1 <= a && 0 <= u && T[a] !== C[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (T[a] !== C[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || T[a] !== C[u]) {
                  var R = `
` + T[a].replace(" at new ", " at ");
                  return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), R;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      go = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Gn(n) : "";
  }
  function Fp(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Gn(t.type);
      case 16:
        return Gn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Gn("Suspense Fallback") : Gn("Suspense");
      case 19:
        return Gn("SuspenseList");
      case 0:
      case 15:
        return vo(t.type, !1);
      case 11:
        return vo(t.type.render, !1);
      case 1:
        return vo(t.type, !0);
      case 31:
        return Gn("Activity");
      case 30:
        return Gn("ViewTransition");
      default:
        return "";
    }
  }
  function gh(t) {
    try {
      var e = "", n = null;
      do
        e += Fp(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var po = Object.prototype.hasOwnProperty, So = i.unstable_scheduleCallback, To = i.unstable_cancelCallback, Pp = i.unstable_shouldYield, kp = i.unstable_requestPaint, xe = i.unstable_now, Wp = i.unstable_getCurrentPriorityLevel, vh = i.unstable_ImmediatePriority, ph = i.unstable_UserBlockingPriority, cu = i.unstable_NormalPriority, Ip = i.unstable_LowPriority, Sh = i.unstable_IdlePriority, $p = i.log, t1 = i.unstable_setDisableYieldValue, Ii = null, Oe = null;
  function Xn(t) {
    if (typeof $p == "function" && t1(t), Oe && typeof Oe.setStrictMode == "function")
      try {
        Oe.setStrictMode(Ii, t);
      } catch {
      }
  }
  var Re = Math.clz32 ? Math.clz32 : a1, e1 = Math.log, n1 = Math.LN2;
  function a1(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (e1(t) / n1 | 0) | 0;
  }
  var fu = 256, hu = 262144, du = 4194304;
  function ba(t) {
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
  function mu(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0, s = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var m = a & 134217727;
    return m !== 0 ? (a = m & ~s, a !== 0 ? u = ba(a) : (c &= m, c !== 0 ? u = ba(c) : n || (n = m & ~t, n !== 0 && (u = ba(n))))) : (m = a & ~s, m !== 0 ? u = ba(m) : c !== 0 ? u = ba(c) : n || (n = a & ~t, n !== 0 && (u = ba(n)))), u === 0 ? 0 : e !== 0 && e !== u && (e & s) === 0 && (s = u & -u, n = e & -e, s >= n || s === 32 && (n & 4194048) !== 0) ? e : u;
  }
  function $i(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Th(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - Re(n), u = 1 << a;
        e |= t[a], n &= ~u;
      }
    return e;
  }
  function i1(t, e) {
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
  function bh() {
    var t = du;
    return du <<= 1, (du & 62914560) === 0 && (du = 4194304), t;
  }
  function bo(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function tl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function l1(t, e, n, a, u, s) {
    var c = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var m = t.entanglements, T = t.expirationTimes, C = t.hiddenUpdates;
    for (n = c & ~n; 0 < n; ) {
      var R = 31 - Re(n), N = 1 << R;
      m[R] = 0, T[R] = -1;
      var M = C[R];
      if (M !== null)
        for (C[R] = null, R = 0; R < M.length; R++) {
          var O = M[R];
          O !== null && (O.lane &= -536870913);
        }
      n &= ~N;
    }
    a !== 0 && Eh(t, a, 0), s !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(c & ~e));
  }
  function Eh(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Re(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function Ah(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - Re(n), u = 1 << a;
      u & e | t[a] & e && (t[a] |= e), n &= ~u;
    }
  }
  function Mh(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Eo(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Eo(t) {
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
  function Ao(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Dh() {
    var t = at.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ng(t.type));
  }
  function Ch(t, e) {
    var n = at.p;
    try {
      return at.p = t, e();
    } finally {
      at.p = n;
    }
  }
  var Dn = Math.random().toString(36).slice(2), ie = "__reactFiber$" + Dn, be = "__reactProps$" + Dn, $a = "__reactContainer$" + Dn, xh = "__reactEvents$" + Dn, u1 = "__reactListeners$" + Dn, s1 = "__reactHandles$" + Dn, Oh = "__reactResources$" + Dn, el = "__reactMarker$" + Dn, yu = "__reactLoad$" + Dn;
  function gu(t) {
    delete t[ie], delete t[be], delete t[u1], delete t[s1];
  }
  function Ea(t) {
    var e;
    if (e = t[ie]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[$a] || n[ie]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = hg(t); t !== null; ) {
            if (n = t[ie]) return n;
            t = hg(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function ti(t) {
    if (t = t[ie] || t[$a]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function nl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function ei(t) {
    var e = t[Oh];
    return e || (e = t[Oh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function $t(t) {
    t[el] = !0;
  }
  function Rh(t) {
    t[yu] = void 0;
  }
  var zh = /* @__PURE__ */ new Set(), _h = {};
  function Aa(t, e) {
    ni(t, e), ni(t + "Capture", e);
  }
  function ni(t, e) {
    for (_h[t] = e, t = 0; t < e.length; t++)
      zh.add(e[t]);
  }
  var o1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Nh = {}, Vh = {};
  function r1(t) {
    return po.call(Vh, t) ? !0 : po.call(Nh, t) ? !1 : o1.test(t) ? Vh[t] = !0 : (Nh[t] = !0, !1);
  }
  var Tt = !1;
  function Uh() {
    var t = Tt;
    return Tt = !1, t;
  }
  function vu(t, e, n) {
    if (r1(e))
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
  function pu(t, e, n) {
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
  function Cn(t, e, n, a) {
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
  function ze(t) {
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
  function Bh(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function c1(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, s = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(c) {
          n = "" + c, s.call(this, c);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(c) {
          n = "" + c;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Mo(t) {
    if (!t._valueTracker) {
      var e = Bh(t) ? "checked" : "value";
      t._valueTracker = c1(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function wh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = Bh(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var f1 = /[\n"\\]/g;
  function je(t) {
    return t.replace(
      f1,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Do(t, e, n, a, u, s, c, m) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), e != null ? c === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ze(e)) : t.value !== "" + ze(e) && (t.value = "" + ze(e)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), e != null ? c === "number" && t.value == e ? Co(t, ze(t.value)) : Co(t, ze(e)) : n != null ? Co(t, ze(n)) : a != null && t.removeAttribute("value"), u == null && s != null && (t.defaultChecked = !!s), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + ze(m) : t.removeAttribute("name");
  }
  function Hh(t, e, n, a, u, s, c, m) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || e != null)) {
        Mo(t);
        return;
      }
      n = n != null ? "" + ze(n) : "", e = e != null ? "" + ze(e) : n, m || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = m ? t.checked : !!a, t.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c), Mo(t);
  }
  function Co(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function ai(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var u = 0; u < n.length; u++)
        e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        u = e.hasOwnProperty("$" + t[n].value), t[n].selected !== u && (t[n].selected = u), u && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + ze(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          t[u].selected = !0, a && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Lh(t, e, n) {
    if (e != null && (e = "" + ze(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + ze(n) : "";
  }
  function jh(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if (bt(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = ze(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Mo(t);
  }
  function ii(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var h1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Yh(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || h1.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function qh(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(o(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", Tt = !0);
      for (var u in e)
        a = e[u], e.hasOwnProperty(u) && n[u] !== a && (Yh(t, u, a), Tt = !0);
    } else
      for (var s in e)
        e.hasOwnProperty(s) && Yh(t, s, e[s]);
  }
  function xo(t) {
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
  var d1 = /* @__PURE__ */ new Map([
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
  ]), m1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Su(t) {
    return m1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function rn() {
  }
  var Oo = null;
  function Ro(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var li = null, ui = null;
  function Gh(t) {
    var e = ti(t);
    if (e && (t = e.stateNode)) {
      var n = t[be] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Do(
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
              'input[name="' + je(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var u = a[be] || null;
                if (!u) throw Error(o(90));
                Do(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && wh(a);
          }
          break t;
        case "textarea":
          Lh(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && ai(t, !!n.multiple, e, !1);
      }
    }
  }
  var zo = !1;
  function Xh(t, e, n) {
    if (zo) return t(e, n);
    zo = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (zo = !1, (li !== null || ui !== null) && (Ss(), li && (e = li, t = ui, ui = li = null, Gh(e), t)))
        for (e = 0; e < t.length; e++) Gh(t[e]);
    }
  }
  function al(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[be] || null;
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
        o(231, e, typeof n)
      );
    return n;
  }
  var xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _o = !1;
  if (xn)
    try {
      var il = {};
      Object.defineProperty(il, "passive", {
        get: function() {
          _o = !0;
        }
      }), window.addEventListener("test", il, il), window.removeEventListener("test", il, il);
    } catch {
      _o = !1;
    }
  var Qn = null, No = null, Tu = null;
  function Qh() {
    if (Tu) return Tu;
    var t, e = No, n = e.length, a, u = "value" in Qn ? Qn.value : Qn.textContent, s = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++) ;
    var c = n - t;
    for (a = 1; a <= c && e[n - a] === u[s - a]; a++) ;
    return Tu = u.slice(t, 1 < a ? 1 - a : void 0);
  }
  function bu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Eu() {
    return !0;
  }
  function Zh() {
    return !1;
  }
  function ye(t) {
    function e(n, a, u, s, c) {
      this._reactName = n, this._targetInst = u, this.type = a, this.nativeEvent = s, this.target = c, this.currentTarget = null;
      for (var m in t)
        t.hasOwnProperty(m) && (n = t[m], this[m] = n ? n(s) : s[m]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Eu : Zh, this.isPropagationStopped = Zh, this;
    }
    return Z(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Eu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Eu);
      },
      persist: function() {
      },
      isPersistent: Eu
    }), e;
  }
  var Zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Au = ye(Zn), ll = Z({}, Zn, { view: 0, detail: 0 }), y1 = ye(ll), Vo, Uo, ul, Mu = Z({}, ll, {
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
    getModifierState: wo,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ul && (ul && t.type === "mousemove" ? (Vo = t.screenX - ul.screenX, Uo = t.screenY - ul.screenY) : Uo = Vo = 0, ul = t), Vo);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Uo;
    }
  }), Kh = ye(Mu), g1 = Z({}, Mu, { dataTransfer: 0 }), v1 = ye(g1), p1 = Z({}, ll, { relatedTarget: 0 }), Bo = ye(p1), S1 = Z({}, Zn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), T1 = ye(S1), b1 = Z({}, Zn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), E1 = ye(b1), A1 = Z({}, Zn, { data: 0 }), Jh = ye(A1), M1 = {
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
  }, D1 = {
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
  }, C1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function x1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = C1[t]) ? !!e[t] : !1;
  }
  function wo() {
    return x1;
  }
  var O1 = Z({}, ll, {
    key: function(t) {
      if (t.key) {
        var e = M1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = bu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? D1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wo,
    charCode: function(t) {
      return t.type === "keypress" ? bu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? bu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), R1 = ye(O1), z1 = Z({}, Mu, {
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
  }), Fh = ye(z1), _1 = Z({}, Zn, { submitter: 0 }), N1 = ye(_1), V1 = Z({}, ll, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wo
  }), U1 = ye(V1), B1 = Z({}, Zn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), w1 = ye(B1), H1 = Z({}, Mu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), L1 = ye(H1), j1 = Z({}, Zn, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Y1 = ye(j1), q1 = [9, 13, 27, 32], Ho = xn && "CompositionEvent" in window, sl = null;
  xn && "documentMode" in document && (sl = document.documentMode);
  var G1 = xn && "TextEvent" in window && !sl, Ph = xn && (!Ho || sl && 8 < sl && 11 >= sl), kh = " ", Wh = !1;
  function Ih(t, e) {
    switch (t) {
      case "keyup":
        return q1.indexOf(e.keyCode) !== -1;
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
  function $h(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var si = !1;
  function X1(t, e) {
    switch (t) {
      case "compositionend":
        return $h(e);
      case "keypress":
        return e.which !== 32 ? null : (Wh = !0, kh);
      case "textInput":
        return t = e.data, t === kh && Wh ? null : t;
      default:
        return null;
    }
  }
  function Q1(t, e) {
    if (si)
      return t === "compositionend" || !Ho && Ih(t, e) ? (t = Qh(), Tu = No = Qn = null, si = !1, t) : null;
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
        return Ph && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Z1 = {
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
  function td(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Z1[t.type] : e === "textarea";
  }
  function ed(t, e, n, a) {
    li ? ui ? ui.push(a) : ui = [a] : li = a, e = Ds(e, "onChange"), 0 < e.length && (n = new Au(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var ol = null, rl = null;
  function K1(t) {
    Gy(t, 0);
  }
  function Du(t) {
    var e = nl(t);
    if (wh(e)) return t;
  }
  function nd(t, e) {
    if (t === "change") return e;
  }
  var ad = !1;
  if (xn) {
    var Lo;
    if (xn) {
      var jo = "oninput" in document;
      if (!jo) {
        var id = document.createElement("div");
        id.setAttribute("oninput", "return;"), jo = typeof id.oninput == "function";
      }
      Lo = jo;
    } else Lo = !1;
    ad = Lo && (!document.documentMode || 9 < document.documentMode);
  }
  function ld() {
    ol && (ol.detachEvent("onpropertychange", ud), rl = ol = null);
  }
  function ud(t) {
    if (t.propertyName === "value" && Du(rl)) {
      var e = [];
      ed(
        e,
        rl,
        t,
        Ro(t)
      ), Xh(K1, e);
    }
  }
  function J1(t, e, n) {
    t === "focusin" ? (ld(), ol = e, rl = n, ol.attachEvent("onpropertychange", ud)) : t === "focusout" && ld();
  }
  function F1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Du(rl);
  }
  function P1(t, e) {
    if (t === "click") return Du(e);
  }
  function k1(t, e) {
    if (t === "input" || t === "change")
      return Du(e);
  }
  function W1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var _e = typeof Object.is == "function" ? Object.is : W1;
  function cl(t, e) {
    if (_e(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var u = n[a];
      if (!po.call(e, u) || !_e(t[u], e[u]))
        return !1;
    }
    return !0;
  }
  function Yo(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function sd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function od(t, e) {
    var n = sd(t);
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
      n = sd(n);
    }
  }
  function rd(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? rd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function cd(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Yo(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Yo(t.document);
    }
    return e;
  }
  function qo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var I1 = xn && "documentMode" in document && 11 >= document.documentMode, oi = null, Go = null, fl = null, Xo = !1;
  function fd(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xo || oi == null || oi !== Yo(a) || (a = oi, "selectionStart" in a && qo(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), fl && cl(fl, a) || (fl = a, a = Ds(Go, "onSelect"), 0 < a.length && (e = new Au(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = oi)));
  }
  function Ma(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var ri = {
    animationend: Ma("Animation", "AnimationEnd"),
    animationiteration: Ma("Animation", "AnimationIteration"),
    animationstart: Ma("Animation", "AnimationStart"),
    transitionrun: Ma("Transition", "TransitionRun"),
    transitionstart: Ma("Transition", "TransitionStart"),
    transitioncancel: Ma("Transition", "TransitionCancel"),
    transitionend: Ma("Transition", "TransitionEnd")
  }, Qo = {}, hd = {};
  xn && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
  function Da(t) {
    if (Qo[t]) return Qo[t];
    if (!ri[t]) return t;
    var e = ri[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in hd)
        return Qo[t] = e[n];
    return t;
  }
  var dd = Da("animationend"), md = Da("animationiteration"), yd = Da("animationstart"), $1 = Da("transitionrun"), tS = Da("transitionstart"), eS = Da("transitioncancel"), gd = Da("transitionend"), vd = /* @__PURE__ */ new Map(), Zo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Zo.push("scrollEnd");
  function We(t, e) {
    vd.set(t, e), Aa(e, [t]);
  }
  var nS = 0;
  function On(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = en.identifierPrefix;
    var n = nS++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function pd(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = Ri;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var u = t[n[a]];
        if (u != null) {
          if (u === "none") return "none";
          e = e == null ? u : e + (" " + u);
        }
      }
    return e ?? t.default;
  }
  function Rn(t, e) {
    return t = pd(t), e = pd(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var Cu = typeof reportError == "function" ? reportError : function(t) {
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
  }, Ye = [], ci = 0, Ko = 0;
  function xu() {
    for (var t = ci, e = Ko = ci = 0; e < t; ) {
      var n = Ye[e];
      Ye[e++] = null;
      var a = Ye[e];
      Ye[e++] = null;
      var u = Ye[e];
      Ye[e++] = null;
      var s = Ye[e];
      if (Ye[e++] = null, a !== null && u !== null) {
        var c = a.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
      }
      s !== 0 && Sd(n, u, s);
    }
  }
  function Ou(t, e, n, a) {
    Ye[ci++] = t, Ye[ci++] = e, Ye[ci++] = n, Ye[ci++] = a, Ko |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Jo(t, e, n, a) {
    return Ou(t, e, n, a), Ru(t);
  }
  function Ca(t, e) {
    return Ou(t, null, null, e), Ru(t);
  }
  function Sd(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var u = !1, s = t.return; s !== null; )
      s.childLanes |= n, a = s.alternate, a !== null && (a.childLanes |= n), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (u = !0)), t = s, s = s.return;
    return t.tag === 3 ? (s = t.stateNode, u && e !== null && (u = 31 - Re(n), t = s.hiddenUpdates, a = t[u], a === null ? t[u] = [e] : a.push(e), e.lane = n | 536870912), s) : null;
  }
  function Ru(t) {
    if (50 < Vl)
      throw Vl = 0, ps = null, Error(o(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var fi = {};
  function aS(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ee(t, e, n, a) {
    return new aS(t, e, n, a);
  }
  function Fo(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function zn(t, e) {
    var n = t.alternate;
    return n === null ? (n = Ee(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Td(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function zu(t, e, n, a, u, s) {
    var c = 0;
    if (a = t, typeof a == "function") Fo(a) && (c = 1);
    else if (typeof a == "string")
      c = _T(
        t,
        n,
        on.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case It:
          return t = Ee(31, n, e, u), t.elementType = It, t.lanes = s, t;
        case vt:
          return xa(n.children, u, s, e);
        case Ot:
          c = 8, u |= 24;
          break;
        case de:
          return t = Ee(12, n, e, u | 2), t.elementType = de, t.lanes = s, t;
        case et:
          return t = Ee(13, n, e, u), t.elementType = et, t.lanes = s, t;
        case K:
          return t = Ee(19, n, e, u), t.elementType = K, t.lanes = s, t;
        case ke:
        case A:
          return t = u | 32, t = Ee(30, n, e, t), t.elementType = A, t.lanes = s, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Rt:
                c = 10;
                break t;
              case Wt:
                c = 9;
                break t;
              case L:
                c = 11;
                break t;
              case ot:
                c = 14;
                break t;
              case ft:
                c = 16, a = null;
                break t;
            }
          c = 29, n = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Ee(c, n, e, u), e.elementType = t, e.type = a, e.lanes = s, e;
  }
  function xa(t, e, n, a) {
    return t = Ee(7, t, a, e), t.lanes = n, t;
  }
  function Po(t, e, n) {
    return t = Ee(6, t, null, e), t.lanes = n, t;
  }
  function bd(t) {
    var e = Ee(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function ko(t, e, n) {
    return e = Ee(
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
  var Ed = /* @__PURE__ */ new WeakMap();
  function qe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Ed.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: gh(e)
      }, Ed.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: gh(e)
    };
  }
  var hi = [], di = 0, _u = null, hl = 0, Ge = [], Xe = 0, Kn = null, cn = 1, fn = "";
  function _n(t, e) {
    hi[di++] = hl, hi[di++] = _u, _u = t, hl = e;
  }
  function Ad(t, e, n) {
    Ge[Xe++] = cn, Ge[Xe++] = fn, Ge[Xe++] = Kn, Kn = t;
    var a = cn;
    t = fn;
    var u = 32 - Re(a) - 1;
    a &= ~(1 << u), n += 1;
    var s = 32 - Re(e) + u;
    if (30 < s) {
      var c = u - u % 5;
      s = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, cn = 1 << 32 - Re(e) + u | n << u | a, fn = s + t;
    } else
      cn = 1 << s | n << u | a, fn = t;
  }
  function Nu(t) {
    t.return !== null && (_n(t, 1), Ad(t, 1, 0));
  }
  function Wo(t) {
    for (; t === _u; )
      _u = hi[--di], hi[di] = null, hl = hi[--di], hi[di] = null;
    for (; t === Kn; )
      Kn = Ge[--Xe], Ge[Xe] = null, fn = Ge[--Xe], Ge[Xe] = null, cn = Ge[--Xe], Ge[Xe] = null;
  }
  function Md(t, e) {
    Ge[Xe++] = cn, Ge[Xe++] = fn, Ge[Xe++] = Kn, cn = e.id, fn = e.overflow, Kn = t;
  }
  var te = null, Bt = null, rt = !1, Jn = null, Qe = !1, Io = Error(o(519));
  function Fn(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw dl(qe(e, t)), Io;
  }
  function Dd(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[ie] = t, e[be] = a, n) {
      case "dialog":
        dt("cancel", e), dt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Bl.length; n++)
          dt(Bl[n], e);
        break;
      case "source":
        dt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        dt("error", e), dt("load", e);
        break;
      case "details":
        dt("toggle", e);
        break;
      case "input":
        dt("invalid", e), Hh(
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
        dt("invalid", e);
        break;
      case "textarea":
        dt("invalid", e), jh(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Ky(e.textContent, n) ? (a.popover != null && (dt("beforetoggle", e), dt("toggle", e)), a.onScroll != null && dt("scroll", e), a.onScrollEnd != null && dt("scrollend", e), a.onClick != null && (e.onclick = rn), e = !0) : e = !1, e || Fn(t, !0);
  }
  function Vu(t) {
    for (te = t.return; te; )
      switch (te.tag) {
        case 5:
        case 31:
        case 13:
          Qe = !1;
          return;
        case 27:
        case 3:
          Qe = !0;
          return;
        default:
          te = te.return;
      }
  }
  function mi(t) {
    if (t !== te) return !1;
    if (!rt) return Vu(t), rt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Oc(t.type, t.memoizedProps)), n = !n), n && Bt && Fn(t), Vu(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Bt = fg(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Bt = fg(t);
    } else
      e === 27 ? (e = Bt, ca(t.type) ? (t = Hc, Hc = null, Bt = t) : Bt = e) : Bt = te ? Ke(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Oa() {
    Bt = te = null, rt = !1;
  }
  function $o() {
    var t = Jn;
    return t !== null && (De === null ? De = t : De.push.apply(
      De,
      t
    ), Jn = null), t;
  }
  function dl(t) {
    Jn === null ? Jn = [t] : Jn.push(t);
  }
  var tr = sn(null), Ra = null, Nn = null;
  function Pn(t, e, n) {
    Ut(tr, e._currentValue), e._currentValue = n;
  }
  function Vn(t) {
    t._currentValue = tr.current, ae(tr);
  }
  function Uu(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function er(t, e, n, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var s = u.dependencies;
      if (s !== null) {
        var c = u.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var m = s;
          s = u;
          for (var T = 0; T < e.length; T++)
            if (m.context === e[T]) {
              s.lanes |= n, m = s.alternate, m !== null && (m.lanes |= n), Uu(
                s.return,
                n,
                t
              ), a || (c = null);
              break t;
            }
          s = m.next;
        }
      } else if (u.tag === 18) {
        if (c = u.return, c === null) throw Error(o(341));
        c.lanes |= n, s = c.alternate, s !== null && (s.lanes |= n), Uu(c, n, t), c = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= n, c = u.alternate, c !== null && (c.lanes |= n), Uu(
          u.return,
          n,
          t
        ), c = u.child, c = c !== null ? c.sibling : null) : c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (u = c.sibling, u !== null) {
            u.return = c.return, c = u;
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function za(t, e, n, a) {
    t = null;
    for (var u = e, s = !1; u !== null; ) {
      if (!s) {
        if ((u.flags & 524288) !== 0) s = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(o(387));
        if (c = c.memoizedProps, c !== null) {
          var m = u.type;
          _e(u.pendingProps.value, c.value) || (t !== null ? t.push(m) : t = [m]);
        }
      } else if (u === su.current) {
        if (c = u.alternate, c === null) throw Error(o(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(ji) : t = [ji]);
      }
      u = u.return;
    }
    return t !== null && er(
      e,
      t,
      n,
      a
    ), e.flags |= 262144, t !== null;
  }
  function Bu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!_e(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function _a(t) {
    Ra = t, Nn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function le(t) {
    return Cd(Ra, t);
  }
  function wu(t, e) {
    return Ra === null && _a(t), Cd(t, e);
  }
  function Cd(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Nn === null) {
      if (t === null) throw Error(o(308));
      Nn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Nn = Nn.next = e;
    return n;
  }
  var iS = typeof AbortController < "u" ? AbortController : function() {
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
  }, lS = i.unstable_scheduleCallback, uS = i.unstable_NormalPriority, Qt = {
    $$typeof: Rt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function nr() {
    return {
      controller: new iS(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ml(t) {
    t.refCount--, t.refCount === 0 && lS(uS, function() {
      t.controller.abort();
    });
  }
  function xd(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var yl = null;
  function sS(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var gl = null, ar = 0, Na = 0, yi = null;
  function oS(t, e) {
    if (gl === null) {
      var n = gl = [];
      ar = 0, Na = Sc(), yi = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return ar++, e.then(Od, Od), e;
  }
  function Od() {
    if (--ar === 0 && (yl = null, gl !== null)) {
      yi !== null && (yi.status = "fulfilled");
      var t = gl;
      gl = null, Na = 0, yi = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function rS(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        n.push(u);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var u = 0; u < n.length; u++) (0, n[u])(e);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < n.length; u++)
          (0, n[u])(void 0);
      }
    ), a;
  }
  var Rd = P.S;
  P.S = function(t, e) {
    if (by = xe(), typeof e == "object" && e !== null && typeof e.then == "function" && oS(t, e), yl !== null)
      for (var n = Vi; n !== null; )
        xd(n, yl), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = Vi; a !== null; )
        xd(a, n), a = a.next;
      if (Na !== 0) {
        a = yl, a === null && (a = yl = []);
        for (var u = 0; u < n.length; u++) {
          var s = n[u];
          a.indexOf(s) === -1 && a.push(s);
        }
      }
    }
    Rd !== null && Rd(t, e);
  };
  var Va = sn(null);
  function ir() {
    var t = Va.current;
    return t !== null ? t : _t.pooledCache;
  }
  function Hu(t, e) {
    e === null ? Ut(Va, Va.current) : Ut(Va, e.pool);
  }
  function zd() {
    var t = ir();
    return t === null ? null : { parent: Qt._currentValue, pool: t };
  }
  var gi = Error(o(460)), lr = Error(o(474)), Lu = Error(o(542)), ju = { then: function() {
  } };
  function _d(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Nd(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(rn, rn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Ud(t), t === void 0 && !("reason" in e) ? Error(o(600)) : t;
      default:
        if (typeof e.status == "string") e.then(rn, rn);
        else {
          if (t = _t, t !== null && 100 < t.shellSuspendCounter)
            throw Error(o(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Ud(t), t;
        }
        throw Ba = e, gi;
    }
  }
  function Ua(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ba = n, gi) : n;
    }
  }
  var Ba = null;
  function Vd() {
    if (Ba === null) throw Error(o(459));
    var t = Ba;
    return Ba = null, t;
  }
  function Ud(t) {
    if (t === gi || t === Lu)
      throw Error(o(483));
  }
  var vi = null, vl = 0;
  function Yu(t) {
    var e = vl;
    return vl += 1, vi === null && (vi = []), Nd(vi, t, e);
  }
  function kn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function qu(t, e) {
    throw e.$$typeof === G ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Bd(t) {
    function e(D, E) {
      if (t) {
        var x = D.deletions;
        x === null ? (D.deletions = [E], D.flags |= 16) : x.push(E);
      }
    }
    function n(D, E) {
      if (!t) return null;
      for (; E !== null; )
        e(D, E), E = E.sibling;
      return null;
    }
    function a(D) {
      for (var E = /* @__PURE__ */ new Map(); D !== null; )
        D.key === null ? E.set(D.index, D) : E.set(D.key, D), D = D.sibling;
      return E;
    }
    function u(D, E) {
      return D = zn(D, E), D.index = 0, D.sibling = null, D;
    }
    function s(D, E, x) {
      return D.index = x, t ? (x = D.alternate, x !== null ? (x = x.index, x < E ? (D.flags |= 2, E) : x) : (D.flags |= 134217730, E)) : (D.flags |= 1048576, E);
    }
    function c(D) {
      return t && D.alternate === null && (D.flags |= 134217730), D;
    }
    function m(D, E, x, _) {
      return E === null || E.tag !== 6 ? (E = Po(x, D.mode, _), E.return = D, E) : (E = u(E, x), E.return = D, E);
    }
    function T(D, E, x, _) {
      var Q = x.type;
      return Q === vt ? (D = R(
        D,
        E,
        x.props.children,
        _,
        x.key
      ), kn(D, x), D) : E !== null && (E.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ft && Ua(Q) === E.type) ? (E = u(E, x.props), kn(E, x), E.return = D, E) : (E = zu(
        x.type,
        x.key,
        x.props,
        null,
        D.mode,
        _
      ), kn(E, x), E.return = D, E);
    }
    function C(D, E, x, _) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== x.containerInfo || E.stateNode.implementation !== x.implementation ? (E = ko(x, D.mode, _), E.return = D, E) : (E = u(E, x.children || []), E.return = D, E);
    }
    function R(D, E, x, _, Q) {
      return E === null || E.tag !== 7 ? (E = xa(
        x,
        D.mode,
        _,
        Q
      ), E.return = D, E) : (E = u(E, x), E.return = D, E);
    }
    function N(D, E, x) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Po(
          "" + E,
          D.mode,
          x
        ), E.return = D, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case xt:
            return x = zu(
              E.type,
              E.key,
              E.props,
              null,
              D.mode,
              x
            ), kn(x, E), x.return = D, x;
          case W:
            return E = ko(
              E,
              D.mode,
              x
            ), E.return = D, E;
          case ft:
            return E = Ua(E), N(D, E, x);
        }
        if (bt(E) || $(E))
          return E = xa(
            E,
            D.mode,
            x,
            null
          ), E.return = D, E;
        if (typeof E.then == "function")
          return N(D, Yu(E), x);
        if (E.$$typeof === Rt)
          return N(
            D,
            wu(D, E),
            x
          );
        qu(D, E);
      }
      return null;
    }
    function M(D, E, x, _) {
      var Q = E !== null ? E.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return Q !== null ? null : m(D, E, "" + x, _);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case xt:
            return x.key === Q ? T(D, E, x, _) : null;
          case W:
            return x.key === Q ? C(D, E, x, _) : null;
          case ft:
            return x = Ua(x), M(D, E, x, _);
        }
        if (bt(x) || $(x))
          return Q !== null ? null : R(D, E, x, _, null);
        if (typeof x.then == "function")
          return M(
            D,
            E,
            Yu(x),
            _
          );
        if (x.$$typeof === Rt)
          return M(
            D,
            E,
            wu(D, x),
            _
          );
        qu(D, x);
      }
      return null;
    }
    function O(D, E, x, _, Q) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return D = D.get(x) || null, m(E, D, "" + _, Q);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case xt:
            return D = D.get(
              _.key === null ? x : _.key
            ) || null, T(E, D, _, Q);
          case W:
            return D = D.get(
              _.key === null ? x : _.key
            ) || null, C(E, D, _, Q);
          case ft:
            return _ = Ua(_), O(
              D,
              E,
              x,
              _,
              Q
            );
        }
        if (bt(_) || $(_))
          return D = D.get(x) || null, R(E, D, _, Q, null);
        if (typeof _.then == "function")
          return O(
            D,
            E,
            x,
            Yu(_),
            Q
          );
        if (_.$$typeof === Rt)
          return O(
            D,
            E,
            x,
            wu(E, _),
            Q
          );
        qu(E, _);
      }
      return null;
    }
    function j(D, E, x, _) {
      for (var Q = null, yt = null, k = E, tt = E = 0, Jt = null; k !== null && tt < x.length; tt++) {
        k.index > tt ? (Jt = k, k = null) : Jt = k.sibling;
        var gt = M(
          D,
          k,
          x[tt],
          _
        );
        if (gt === null) {
          k === null && (k = Jt);
          break;
        }
        t && k && gt.alternate === null && e(D, k), E = s(gt, E, tt), yt === null ? Q = gt : yt.sibling = gt, yt = gt, k = Jt;
      }
      if (tt === x.length)
        return n(D, k), rt && _n(D, tt), Q;
      if (k === null) {
        for (; tt < x.length; tt++)
          k = N(D, x[tt], _), k !== null && (E = s(
            k,
            E,
            tt
          ), yt === null ? Q = k : yt.sibling = k, yt = k);
        return rt && _n(D, tt), Q;
      }
      for (k = a(k); tt < x.length; tt++)
        Jt = O(
          k,
          D,
          tt,
          x[tt],
          _
        ), Jt !== null && (t && (gt = Jt.alternate, gt !== null && k.delete(gt.key === null ? tt : gt.key)), E = s(
          Jt,
          E,
          tt
        ), yt === null ? Q = Jt : yt.sibling = Jt, yt = Jt);
      return t && k.forEach(function(ya) {
        return e(D, ya);
      }), rt && _n(D, tt), Q;
    }
    function J(D, E, x, _) {
      if (x == null) throw Error(o(151));
      for (var Q = null, yt = null, k = E, tt = E = 0, Jt = null, gt = x.next(); k !== null && !gt.done; tt++, gt = x.next()) {
        k.index > tt ? (Jt = k, k = null) : Jt = k.sibling;
        var ya = M(D, k, gt.value, _);
        if (ya === null) {
          k === null && (k = Jt);
          break;
        }
        t && k && ya.alternate === null && e(D, k), E = s(ya, E, tt), yt === null ? Q = ya : yt.sibling = ya, yt = ya, k = Jt;
      }
      if (gt.done)
        return n(D, k), rt && _n(D, tt), Q;
      if (k === null) {
        for (; !gt.done; tt++, gt = x.next())
          gt = N(D, gt.value, _), gt !== null && (E = s(gt, E, tt), yt === null ? Q = gt : yt.sibling = gt, yt = gt);
        return rt && _n(D, tt), Q;
      }
      for (k = a(k); !gt.done; tt++, gt = x.next())
        gt = O(k, D, tt, gt.value, _), gt !== null && (t && (Jt = gt.alternate, Jt !== null && k.delete(
          Jt.key === null ? tt : Jt.key
        )), E = s(gt, E, tt), yt === null ? Q = gt : yt.sibling = gt, yt = gt);
      return t && k.forEach(function(XT) {
        return e(D, XT);
      }), rt && _n(D, tt), Q;
    }
    function st(D, E, x, _) {
      if (typeof x == "object" && x !== null && x.type === vt && x.key === null && x.props.ref === void 0 && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case xt:
            t: {
              for (var Q = x.key; E !== null; ) {
                if (E.key === Q) {
                  if (Q = x.type, Q === vt) {
                    if (E.tag === 7) {
                      n(
                        D,
                        E.sibling
                      ), _ = u(
                        E,
                        x.props.children
                      ), kn(_, x), _.return = D, D = _;
                      break t;
                    }
                  } else if (E.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ft && Ua(Q) === E.type) {
                    n(
                      D,
                      E.sibling
                    ), _ = u(E, x.props), kn(_, x), _.return = D, D = _;
                    break t;
                  }
                  n(D, E);
                  break;
                } else e(D, E);
                E = E.sibling;
              }
              x.type === vt ? (_ = xa(
                x.props.children,
                D.mode,
                _,
                x.key
              ), kn(_, x), _.return = D, D = _) : (_ = zu(
                x.type,
                x.key,
                x.props,
                null,
                D.mode,
                _
              ), kn(_, x), _.return = D, D = _);
            }
            return c(D);
          case W:
            t: {
              for (Q = x.key; E !== null; ) {
                if (E.key === Q)
                  if (E.tag === 4 && E.stateNode.containerInfo === x.containerInfo && E.stateNode.implementation === x.implementation) {
                    n(
                      D,
                      E.sibling
                    ), _ = u(E, x.children || []), _.return = D, D = _;
                    break t;
                  } else {
                    n(D, E);
                    break;
                  }
                else e(D, E);
                E = E.sibling;
              }
              _ = ko(x, D.mode, _), _.return = D, D = _;
            }
            return c(D);
          case ft:
            return x = Ua(x), st(
              D,
              E,
              x,
              _
            );
        }
        if (bt(x))
          return j(
            D,
            E,
            x,
            _
          );
        if ($(x)) {
          if (Q = $(x), typeof Q != "function") throw Error(o(150));
          return x = Q.call(x), J(
            D,
            E,
            x,
            _
          );
        }
        if (typeof x.then == "function")
          return st(
            D,
            E,
            Yu(x),
            _
          );
        if (x.$$typeof === Rt)
          return st(
            D,
            E,
            wu(D, x),
            _
          );
        qu(D, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, E !== null && E.tag === 6 ? (n(D, E.sibling), _ = u(E, x), _.return = D, D = _) : (n(D, E), _ = Po(x, D.mode, _), _.return = D, D = _), c(D)) : n(D, E);
    }
    return function(D, E, x, _) {
      try {
        vl = 0;
        var Q = st(
          D,
          E,
          x,
          _
        );
        return vi = null, Q;
      } catch (k) {
        if (k === gi || k === Lu) throw k;
        var yt = Ee(29, k, null, D.mode);
        return yt.lanes = _, yt.return = D, yt;
      }
    };
  }
  var wa = Bd(!0), wd = Bd(!1), Wn = !1;
  function ur(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function sr(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function In(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function $n(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Et & 2) !== 0) {
      var u = a.pending;
      return u === null ? e.next = e : (e.next = u.next, u.next = e), a.pending = e, e = Ru(t), Sd(t, null, n), e;
    }
    return Ou(t, a, e, n), Ru(t);
  }
  function pl(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Ah(t, n);
    }
  }
  function or(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var u = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var c = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? u = s = c : s = s.next = c, n = n.next;
        } while (n !== null);
        s === null ? u = s = e : s = s.next = e;
      } else u = s = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: s,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var rr = !1;
  function Sl() {
    if (rr) {
      var t = yi;
      if (t !== null) throw t;
    }
  }
  function Tl(t, e, n, a) {
    rr = !1;
    var u = t.updateQueue;
    Wn = !1;
    var s = u.firstBaseUpdate, c = u.lastBaseUpdate, m = u.shared.pending;
    if (m !== null) {
      u.shared.pending = null;
      var T = m, C = T.next;
      T.next = null, c === null ? s = C : c.next = C, c = T;
      var R = t.alternate;
      R !== null && (R = R.updateQueue, m = R.lastBaseUpdate, m !== c && (m === null ? R.firstBaseUpdate = C : m.next = C, R.lastBaseUpdate = T));
    }
    if (s !== null) {
      var N = u.baseState;
      c = 0, R = C = T = null, m = s;
      do {
        var M = m.lane & -536870913, O = M !== m.lane;
        if (O ? (mt & M) === M : (a & M) === M) {
          M !== 0 && M === Na && (rr = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          t: {
            var j = t, J = m;
            M = e;
            var st = n;
            switch (J.tag) {
              case 1:
                if (j = J.payload, typeof j == "function") {
                  N = j.call(st, N, M);
                  break t;
                }
                N = j;
                break t;
              case 3:
                j.flags = j.flags & -65537 | 128;
              case 0:
                if (j = J.payload, M = typeof j == "function" ? j.call(st, N, M) : j, M == null) break t;
                N = Z({}, N, M);
                break t;
              case 2:
                Wn = !0;
            }
          }
          M = m.callback, M !== null && (t.flags |= 64, O && (t.flags |= 8192), O = u.callbacks, O === null ? u.callbacks = [M] : O.push(M));
        } else
          O = {
            lane: M,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, R === null ? (C = R = O, T = N) : R = R.next = O, c |= M;
        if (m = m.next, m === null) {
          if (m = u.shared.pending, m === null)
            break;
          O = m, m = O.next, O.next = null, u.lastBaseUpdate = O, u.shared.pending = null;
        }
      } while (!0);
      R === null && (T = N), u.baseState = T, u.firstBaseUpdate = C, u.lastBaseUpdate = R, s === null && (u.shared.lanes = 0), ua |= c, t.lanes = c, t.memoizedState = N;
    }
  }
  function Hd(t, e) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(e);
  }
  function Ld(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        Hd(n[t], e);
  }
  var ta = sn(null), Gu = sn(0);
  function jd(t, e) {
    t = Ln, Ut(Gu, t), Ut(ta, e), Ln = t | e.baseLanes;
  }
  function cr() {
    Ut(Gu, Ln), Ut(ta, ta.current);
  }
  function fr() {
    Ln = Gu.current, ae(ta), ae(Gu);
  }
  var ue = sn(null), me = null;
  function ea(t) {
    var e = t.alternate;
    Ut(se, se.current & 1), Ut(ue, t), me === null && (e === null || ta.current !== null || e.memoizedState !== null) && (me = t);
  }
  function hr(t) {
    Ut(se, se.current), Ut(ue, t), me === null && (me = t);
  }
  function Yd(t) {
    t.tag === 22 ? (Ut(se, se.current), Ut(ue, t), me === null && (me = t)) : na();
  }
  function na() {
    Ut(se, se.current), Ut(ue, ue.current);
  }
  function Ne(t) {
    ae(ue), me === t && (me = null), ae(se);
  }
  var se = sn(0);
  function bl(t, e) {
    Ut(ue, ue.current), Ut(se, e);
  }
  function dr(t) {
    ae(se), ae(ue), me === t && (me = null);
  }
  function Xu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Bc(n) || wc(n)))
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
  var Un = 0, ut = null, zt = null, Zt = null, Qu = !1, pi = !1, Ha = !1, Zu = 0, El = 0, Si = null, cS = 0;
  function jt() {
    throw Error(o(321));
  }
  function mr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!_e(t[n], e[n])) return !1;
    return !0;
  }
  function yr(t, e, n, a, u, s) {
    return Un = s, ut = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, P.H = t === null || t.memoizedState === null ? Am : Mm, Ha = !1, s = n(a, u), Ha = !1, pi && (s = Gd(
      e,
      n,
      a,
      u
    )), qd(t), s;
  }
  function qd(t) {
    P.H = Iu;
    var e = zt !== null && zt.next !== null;
    if (Un = 0, Zt = zt = ut = null, Qu = !1, El = 0, Si = null, e) throw Error(o(300));
    t === null || Kt || (t = t.dependencies, t !== null && Bu(t) && (Kt = !0));
  }
  function Gd(t, e, n, a) {
    ut = t;
    var u = 0;
    do {
      if (pi && (Si = null), El = 0, pi = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Zt = zt = null, t.updateQueue != null) {
        var s = t.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      P.H = pS, s = e(n, a);
    } while (pi);
    return s;
  }
  function fS() {
    var t = P.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Al(e) : e, t = t.useState()[0], (zt !== null ? zt.memoizedState : null) !== t && (ut.flags |= 1024), e;
  }
  function gr() {
    var t = Zu !== 0;
    return Zu = 0, t;
  }
  function vr(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function pr(t) {
    if (Qu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Qu = !1;
    }
    Un = 0, Zt = zt = ut = null, pi = !1, El = Zu = 0, Si = null;
  }
  function ge() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Zt === null ? ut.memoizedState = Zt = t : Zt = Zt.next = t, Zt;
  }
  function Xt() {
    if (zt === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = zt.next;
    var e = Zt === null ? ut.memoizedState : Zt.next;
    if (e !== null)
      Zt = e, zt = t;
    else {
      if (t === null)
        throw ut.alternate === null ? Error(o(467)) : Error(o(310));
      zt = t, t = {
        memoizedState: zt.memoizedState,
        baseState: zt.baseState,
        baseQueue: zt.baseQueue,
        queue: zt.queue,
        next: null
      }, Zt === null ? ut.memoizedState = Zt = t : Zt = Zt.next = t;
    }
    return Zt;
  }
  function Ku() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Al(t) {
    var e = El;
    return El += 1, Si === null && (Si = []), t = Nd(Si, t, e), e = ut, (Zt === null ? e.memoizedState : Zt.next) === null && (e = e.alternate, P.H = e === null || e.memoizedState === null ? Am : Mm), t;
  }
  function Ju(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Al(t);
      if (t.$$typeof === w) return;
      if (t.$$typeof === Rt) return le(t);
    }
    throw Error(o(438, String(t)));
  }
  function Sr(t) {
    var e = null, n = ut.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = ut.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Ku(), ut.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = Ta;
    return e.index++, n;
  }
  function Bn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Fu(t) {
    var e = Xt();
    return Tr(e, zt, t);
  }
  function Tr(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = n;
    var u = t.baseQueue, s = a.pending;
    if (s !== null) {
      if (u !== null) {
        var c = u.next;
        u.next = s.next, s.next = c;
      }
      e.baseQueue = u = s, a.pending = null;
    }
    if (s = t.baseState, u === null) t.memoizedState = s;
    else {
      e = u.next;
      var m = c = null, T = null, C = e, R = !1;
      do {
        var N = C.lane & -536870913;
        if (N !== C.lane ? (mt & N) === N : (Un & N) === N) {
          var M = C.revertLane;
          if (M === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), N === Na && (R = !0);
          else if ((Un & M) === M) {
            C = C.next, M === Na && (R = !0);
            continue;
          } else
            N = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, T === null ? (m = T = N, c = s) : T = T.next = N, ut.lanes |= M, ua |= M;
          N = C.action, Ha && n(s, N), s = C.hasEagerState ? C.eagerState : n(s, N);
        } else
          M = {
            lane: N,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, T === null ? (m = T = M, c = s) : T = T.next = M, ut.lanes |= N, ua |= N;
        C = C.next;
      } while (C !== null && C !== e);
      if (T === null ? c = s : T.next = m, !_e(s, t.memoizedState) && (Kt = !0, R && (n = yi, n !== null)))
        throw n;
      t.memoizedState = s, t.baseState = c, t.baseQueue = T, a.lastRenderedState = s;
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function br(t) {
    var e = Xt(), n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, u = n.pending, s = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var c = u = u.next;
      do
        s = t(s, c.action), c = c.next;
      while (c !== u);
      _e(s, e.memoizedState) || (Kt = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s;
    }
    return [s, a];
  }
  function Xd(t, e, n) {
    var a = ut, u = Xt(), s = rt;
    if (s) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var c = !_e(
      (zt || u).memoizedState,
      n
    );
    if (c && (u.memoizedState = n, Kt = !0), u = u.queue, Mr(Kd.bind(null, a, u, t), [
      t
    ]), t = u.getSnapshot !== e || c || Zt !== null && (Zt.memoizedState.tag & 1) !== 0, Ti(
      t ? 9 : 8,
      { destroy: void 0 },
      Zd.bind(null, a, u, n, e),
      null
    ), t) {
      if (a.flags |= 2048, _t === null) throw Error(o(349));
      s || (Un & 127) !== 0 || Qd(a, e, n);
    }
    return n;
  }
  function Qd(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = ut.updateQueue, e === null ? (e = Ku(), ut.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Zd(t, e, n, a) {
    e.value = n, e.getSnapshot = a, Jd(e) && Fd(t);
  }
  function Kd(t, e, n) {
    return n(function() {
      Jd(e) && Fd(t);
    });
  }
  function Jd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !_e(t, n);
    } catch {
      return !0;
    }
  }
  function Fd(t) {
    var e = Ca(t, 2);
    e !== null && Ce(e, t, 2);
  }
  function Er(t) {
    var e = ge();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Ha) {
        Xn(!0);
        try {
          n();
        } finally {
          Xn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bn,
      lastRenderedState: t
    }, e;
  }
  function Pd(t, e, n, a) {
    return t.baseState = n, Tr(
      t,
      zt,
      typeof a == "function" ? a : Bn
    );
  }
  function hS(t, e, n, a, u) {
    if (Wu(t)) throw Error(o(485));
    if (t = e.action, t !== null) {
      var s = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          s.listeners.push(c);
        }
      };
      P.T !== null ? n(!0) : s.isTransition = !1, a(s), n = e.pending, n === null ? (s.next = e.pending = s, kd(e, s)) : (s.next = n.next, e.pending = n.next = s);
    }
  }
  function kd(t, e) {
    var n = e.action, a = e.payload, u = t.state;
    if (e.isTransition) {
      var s = P.T, c = {};
      c.types = s !== null ? s.types : null, P.T = c;
      try {
        var m = n(u, a), T = P.S;
        T !== null && T(c, m), Wd(t, e, m);
      } catch (C) {
        Ar(t, e, C);
      } finally {
        s !== null && c.types !== null && (s.types = c.types), P.T = s;
      }
    } else
      try {
        s = n(u, a), Wd(t, e, s);
      } catch (C) {
        Ar(t, e, C);
      }
  }
  function Wd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Id(t, e, a);
      },
      function(a) {
        return Ar(t, e, a);
      }
    ) : Id(t, e, n);
  }
  function Id(t, e, n) {
    e.status = "fulfilled", e.value = n, $d(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, kd(t, n)));
  }
  function Ar(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, $d(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function $d(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function tm(t, e) {
    return e;
  }
  function em(t, e) {
    if (rt) {
      var n = _t.formState;
      if (n !== null) {
        t: {
          var a = ut;
          if (rt) {
            if (Bt) {
              e: {
                for (var u = Bt, s = Qe; u.nodeType !== 8; ) {
                  if (!s) {
                    u = null;
                    break e;
                  }
                  if (u = Ke(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break e;
                  }
                }
                s = u.data, u = s === "F!" || s === "F" ? u : null;
              }
              if (u) {
                Bt = Ke(
                  u.nextSibling
                ), a = u.data === "F!";
                break t;
              }
            }
            Fn(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = ge(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tm,
      lastRenderedState: e
    }, n.queue = a, n = Tm.bind(
      null,
      ut,
      a
    ), a.dispatch = n, a = Er(!1), s = Rr.bind(
      null,
      ut,
      !1,
      a.queue
    ), a = ge(), u = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = u, n = hS.bind(
      null,
      ut,
      u,
      s,
      n
    ), u.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function nm(t) {
    var e = Xt();
    return am(e, zt, t);
  }
  function am(t, e, n) {
    if (e = Tr(
      t,
      e,
      tm
    )[0], t = Fu(Bn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = Al(e);
      } catch (c) {
        throw c === gi ? Lu : c;
      }
    else a = e;
    e = Xt();
    var u = e.queue, s = u.dispatch;
    return n !== e.memoizedState && (ut.flags |= 2048, Ti(
      9,
      { destroy: void 0 },
      dS.bind(null, u, n),
      null
    )), [a, s, t];
  }
  function dS(t, e) {
    t.action = e;
  }
  function im(t) {
    var e = Xt(), n = zt;
    if (n !== null)
      return am(e, n, t);
    Xt(), e = e.memoizedState, n = Xt();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Ti(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = ut.updateQueue, e === null && (e = Ku(), ut.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function lm() {
    return Xt().memoizedState;
  }
  function Pu(t, e, n, a) {
    var u = ge();
    ut.flags |= t, u.memoizedState = Ti(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function ku(t, e, n, a) {
    var u = Xt();
    a = a === void 0 ? null : a;
    var s = u.memoizedState.inst;
    zt !== null && a !== null && mr(a, zt.memoizedState.deps) ? u.memoizedState = Ti(e, s, n, a) : (ut.flags |= t, u.memoizedState = Ti(
      1 | e,
      s,
      n,
      a
    ));
  }
  function um(t, e) {
    Pu(8390656, 8, t, e);
  }
  function Mr(t, e) {
    ku(2048, 8, t, e);
  }
  function mS(t) {
    ut.flags |= 4;
    var e = ut.updateQueue;
    if (e === null)
      e = Ku(), ut.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function sm(t) {
    var e = Xt().memoizedState;
    return mS({ ref: e, nextImpl: t }), function() {
      if ((Et & 2) !== 0) throw Error(o(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function om(t, e) {
    return ku(4, 2, t, e);
  }
  function rm(t, e) {
    return ku(4, 4, t, e);
  }
  function cm(t, e) {
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
  function fm(t, e, n) {
    n = n != null ? n.concat([t]) : null, ku(4, 4, cm.bind(null, e, t), n);
  }
  function Dr() {
  }
  function hm(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && mr(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function dm(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && mr(e, a[1]))
      return a[0];
    if (a = t(), Ha) {
      Xn(!0);
      try {
        t();
      } finally {
        Xn(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function Cr(t, e, n) {
    return n === void 0 || (Un & 1073741824) !== 0 && (mt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Ay(), ut.lanes |= t, ua |= t, n);
  }
  function mm(t, e, n, a) {
    return _e(n, e) ? n : ta.current !== null ? (t = Cr(t, n, a), _e(t, e) || (Kt = !0), t) : (Un & 106) === 0 || (Un & 1073741824) !== 0 && (mt & 261930) === 0 ? (Kt = !0, t.memoizedState = n) : (t = Ay(), ut.lanes |= t, ua |= t, e);
  }
  function ym(t, e, n, a, u) {
    var s = at.p;
    at.p = s !== 0 && 8 > s ? s : 8;
    var c = P.T, m = {};
    m.types = c !== null ? c.types : null, P.T = m, Rr(t, !1, e, n);
    try {
      var T = u(), C = P.S;
      if (C !== null && C(m, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var R = rS(
          T,
          a
        );
        Ml(
          t,
          e,
          R,
          we(t)
        );
      } else
        Ml(
          t,
          e,
          a,
          we(t)
        );
    } catch (N) {
      Ml(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: N },
        we()
      );
    } finally {
      at.p = s, c !== null && m.types !== null && (c.types = m.types), P.T = c;
    }
  }
  function yS() {
  }
  function xr(t, e, n, a) {
    if (t.tag !== 5) throw Error(o(476));
    var u = gm(t).queue;
    ym(
      t,
      u,
      e,
      Mn,
      n === null ? yS : function() {
        return vm(t), n(a);
      }
    );
  }
  function gm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Mn,
      baseState: Mn,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bn,
        lastRenderedState: Mn
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
        lastRenderedReducer: Bn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function vm(t) {
    var e = gm(t);
    e.next === null && (e = t.alternate.memoizedState), Ml(
      t,
      e.next.queue,
      {},
      we()
    );
  }
  function Or() {
    return le(ji);
  }
  function pm() {
    return Xt().memoizedState;
  }
  function Sm() {
    return Xt().memoizedState;
  }
  function gS(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = we();
          t = In(n);
          var a = $n(e, t, n);
          a !== null && (Ce(a, e, n), pl(a, e, n)), e = { cache: nr() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function vS(t, e, n) {
    var a = we();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Wu(t) ? bm(e, n) : (n = Jo(t, e, n, a), n !== null && (Ce(n, t, a), Em(n, e, a)));
  }
  function Tm(t, e, n) {
    var a = we();
    Ml(t, e, n, a);
  }
  function Ml(t, e, n, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Wu(t)) bm(e, u);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null))
        try {
          var c = e.lastRenderedState, m = s(c, n);
          if (u.hasEagerState = !0, u.eagerState = m, _e(m, c))
            return Ou(t, e, u, 0), _t === null && xu(), !1;
        } catch {
        }
      if (n = Jo(t, e, u, a), n !== null)
        return Ce(n, t, a), Em(n, e, a), !0;
    }
    return !1;
  }
  function Rr(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: Sc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Wu(t)) {
      if (e) throw Error(o(479));
    } else
      e = Jo(
        t,
        n,
        a,
        2
      ), e !== null && Ce(e, t, 2);
  }
  function Wu(t) {
    var e = t.alternate;
    return t === ut || e !== null && e === ut;
  }
  function bm(t, e) {
    pi = Qu = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Em(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Ah(t, n);
    }
  }
  var Iu = {
    readContext: le,
    use: Ju,
    useCallback: jt,
    useContext: jt,
    useEffect: jt,
    useImperativeHandle: jt,
    useLayoutEffect: jt,
    useInsertionEffect: jt,
    useMemo: jt,
    useReducer: jt,
    useRef: jt,
    useState: jt,
    useDebugValue: jt,
    useDeferredValue: jt,
    useTransition: jt,
    useSyncExternalStore: jt,
    useId: jt,
    useHostTransitionStatus: jt,
    useFormState: jt,
    useActionState: jt,
    useOptimistic: jt,
    useMemoCache: jt,
    useCacheRefresh: jt,
    useEffectEvent: jt
  }, Am = {
    readContext: le,
    use: Ju,
    useCallback: function(t, e) {
      return ge().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: le,
    useEffect: um,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Pu(
        4194308,
        4,
        cm.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return Pu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Pu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = ge();
      e = e === void 0 ? null : e;
      var a = t();
      if (Ha) {
        Xn(!0);
        try {
          t();
        } finally {
          Xn(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = ge();
      if (n !== void 0) {
        var u = n(e);
        if (Ha) {
          Xn(!0);
          try {
            n(e);
          } finally {
            Xn(!1);
          }
        }
      } else u = e;
      return a.memoizedState = a.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, a.queue = t, t = t.dispatch = vS.bind(
        null,
        ut,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = ge();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Er(t);
      var e = t.queue, n = Tm.bind(null, ut, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Dr,
    useDeferredValue: function(t, e) {
      var n = ge();
      return Cr(n, t, e);
    },
    useTransition: function() {
      var t = Er(!1);
      return t = ym.bind(
        null,
        ut,
        t.queue,
        !0,
        !1
      ), ge().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = ut, u = ge();
      if (rt) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = e(), _t === null)
          throw Error(o(349));
        (mt & 127) !== 0 || Qd(a, e, n);
      }
      u.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return u.queue = s, um(Kd.bind(null, a, s, t), [
        t
      ]), a.flags |= 2048, Ti(
        9,
        { destroy: void 0 },
        Zd.bind(
          null,
          a,
          s,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = ge(), e = _t.identifierPrefix;
      if (rt) {
        var n = fn, a = cn;
        n = (a & ~(1 << 32 - Re(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Zu++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = cS++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Or,
    useFormState: em,
    useActionState: em,
    useOptimistic: function(t) {
      var e = ge();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Rr.bind(
        null,
        ut,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Sr,
    useCacheRefresh: function() {
      return ge().memoizedState = gS.bind(
        null,
        ut
      );
    },
    useEffectEvent: function(t) {
      var e = ge(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Et & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Mm = {
    readContext: le,
    use: Ju,
    useCallback: hm,
    useContext: le,
    useEffect: Mr,
    useImperativeHandle: fm,
    useInsertionEffect: om,
    useLayoutEffect: rm,
    useMemo: dm,
    useReducer: Fu,
    useRef: lm,
    useState: function() {
      return Fu(Bn);
    },
    useDebugValue: Dr,
    useDeferredValue: function(t, e) {
      var n = Xt();
      return mm(
        n,
        zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Fu(Bn)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Al(t),
        e
      ];
    },
    useSyncExternalStore: Xd,
    useId: pm,
    useHostTransitionStatus: Or,
    useFormState: nm,
    useActionState: nm,
    useOptimistic: function(t, e) {
      var n = Xt();
      return Pd(n, zt, t, e);
    },
    useMemoCache: Sr,
    useCacheRefresh: Sm,
    useEffectEvent: sm
  }, pS = {
    readContext: le,
    use: Ju,
    useCallback: hm,
    useContext: le,
    useEffect: Mr,
    useImperativeHandle: fm,
    useInsertionEffect: om,
    useLayoutEffect: rm,
    useMemo: dm,
    useReducer: br,
    useRef: lm,
    useState: function() {
      return br(Bn);
    },
    useDebugValue: Dr,
    useDeferredValue: function(t, e) {
      var n = Xt();
      return zt === null ? Cr(n, t, e) : mm(
        n,
        zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = br(Bn)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Al(t),
        e
      ];
    },
    useSyncExternalStore: Xd,
    useId: pm,
    useHostTransitionStatus: Or,
    useFormState: im,
    useActionState: im,
    useOptimistic: function(t, e) {
      var n = Xt();
      return zt !== null ? Pd(n, zt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Sr,
    useCacheRefresh: Sm,
    useEffectEvent: sm
  };
  function zr(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : Z({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var _r = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = we(), u = In(a);
      u.payload = e, n != null && (u.callback = n), e = $n(t, u, a), e !== null && (Ce(e, t, a), pl(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = we(), u = In(a);
      u.tag = 1, u.payload = e, n != null && (u.callback = n), e = $n(t, u, a), e !== null && (Ce(e, t, a), pl(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = we(), a = In(n);
      a.tag = 2, e != null && (a.callback = e), e = $n(t, a, n), e !== null && (Ce(e, t, n), pl(e, t, n));
    }
  };
  function Dm(t, e, n, a, u, s, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, s, c) : e.prototype && e.prototype.isPureReactComponent ? !cl(n, a) || !cl(u, s) : !0;
  }
  function Cm(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && _r.enqueueReplaceState(e, e.state, null);
  }
  function La(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = Z({}, n));
      for (var u in t)
        n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  function xm(t) {
    Cu(t);
  }
  function Om(t) {
    console.error(t);
  }
  function Rm(t) {
    Cu(t);
  }
  function $u(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function zm(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Nr(t, e, n) {
    return n = In(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      $u(t, e);
    }, n;
  }
  function _m(t) {
    return t = In(t), t.tag = 3, t;
  }
  function Nm(t, e, n, a) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var s = a.value;
      t.payload = function() {
        return u(s);
      }, t.callback = function() {
        zm(e, n, a);
      };
    }
    var c = n.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      zm(e, n, a), typeof u != "function" && (sa === null ? sa = /* @__PURE__ */ new Set([this]) : sa.add(this));
      var m = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function SS(t, e, n, a, u) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && za(
        e,
        n,
        u,
        !0
      ), n = ue.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return me === null ? Ts() : n.alternate === null && Yt === 0 && (Yt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, a === ju ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), gc(t, a, u)), !1;
          case 22:
            return n.flags |= 65536, a === ju ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), gc(t, a, u)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return gc(t, a, u), Ts(), !1;
    }
    if (rt)
      return e = ue.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, a !== Io && (t = Error(o(422), { cause: a }), dl(qe(t, n)))) : (a !== Io && (e = Error(o(423), {
        cause: a
      }), dl(
        qe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = qe(a, n), u = Nr(
        t.stateNode,
        a,
        u
      ), or(t, u), Yt !== 4 && (Yt = 2)), !1;
    var s = Error(o(520), { cause: a });
    if (s = qe(s, n), Nl === null ? Nl = [s] : Nl.push(s), Yt !== 4 && (Yt = 2), e === null) return !0;
    a = qe(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = u & -u, n.lanes |= t, t = Nr(n.stateNode, a, t), or(n, t), !1;
        case 1:
          if (e = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (sa === null || !sa.has(s))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = _m(u), Nm(
              u,
              t,
              n,
              a
            ), or(n, u), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Vr = Error(o(461)), Kt = !1;
  function Pt(t, e, n, a) {
    e.child = t === null ? wd(e, null, n, a) : wa(
      e,
      t.child,
      n,
      a
    );
  }
  function Vm(t, e, n, a, u) {
    n = n.render;
    var s = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var m in a)
        m !== "ref" && (c[m] = a[m]);
    } else c = a;
    return _a(e), a = yr(
      t,
      e,
      n,
      c,
      s,
      u
    ), m = gr(), t !== null && !Kt ? (vr(t, e, u), wn(t, e, u)) : (rt && m && Nu(e), e.flags |= 1, Pt(t, e, a, u), e.child);
  }
  function Um(t, e, n, a, u) {
    if (t === null) {
      var s = n.type;
      return typeof s == "function" && !Fo(s) && s.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = s, Bm(
        t,
        e,
        s,
        a,
        u
      )) : (t = zu(
        n.type,
        null,
        a,
        e,
        e.mode,
        u
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (s = t.child, !qr(t, u)) {
      var c = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : cl, n(c, a) && t.ref === e.ref)
        return wn(t, e, u);
    }
    return e.flags |= 1, t = zn(s, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Bm(t, e, n, a, u) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (cl(s, a) && t.ref === e.ref)
        if (Kt = !1, e.pendingProps = a = s, qr(t, u))
          (t.flags & 131072) !== 0 && (Kt = !0);
        else
          return e.lanes = t.lanes, wn(t, e, u);
    }
    return Ur(
      t,
      e,
      n,
      a,
      u
    );
  }
  function wm(t, e, n, a) {
    var u = a.children, s = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, u = 0; a !== null; )
            u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~s;
        } else a = 0, e.child = null;
        return Hm(
          t,
          e,
          s,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Hu(
          e,
          s !== null ? s.cachePool : null
        ), s !== null ? jd(e, s) : cr(), Yd(e);
      else
        return a = e.lanes = 536870912, Hm(
          t,
          e,
          s !== null ? s.baseLanes | n : n,
          n,
          a
        );
    } else
      s !== null ? (Hu(e, s.cachePool), jd(e, s), na(), e.memoizedState = null) : (t !== null && Hu(e, null), cr(), na());
    return Pt(t, e, u, n), e.child;
  }
  function Dl(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Hm(t, e, n, a, u) {
    var s = ir();
    return s = s === null ? null : { parent: Qt._currentValue, pool: s }, e.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, t !== null && Hu(e, null), cr(), Yd(e), t !== null && za(t, e, a, !0), e.childLanes = u, null;
  }
  function ts(t, e) {
    return e = es(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Lm(t, e, n) {
    return wa(e, t.child, null, n), t = ts(e, e.pendingProps), t.flags |= 2, Ne(e), e.memoizedState = null, t;
  }
  function TS(t, e, n) {
    var a = e.pendingProps, u = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (rt) {
        if (a.mode === "hidden")
          return t = ts(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Dl(null, t);
        if (hr(e), (t = Bt) ? (t = cg(
          t,
          Qe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Kn !== null ? { id: cn, overflow: fn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = bd(t), n.return = e, e.child = n, te = e, Bt = null)) : t = null, t === null) throw Fn(e);
        return e.lanes = 536870912, null;
      }
      return ts(e, a);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var c = s.dehydrated;
      if (hr(e), u)
        if (e.flags & 256)
          e.flags &= -257, e = Lm(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(o(558));
      else if (Kt || za(t, e, n, !1), u = (n & t.childLanes) !== 0, Kt || u) {
        if (ta.current === null) {
          if (a = _t, a !== null && (c = Mh(a, n), c !== 0 && c !== s.retryLane))
            throw s.retryLane = c, Ca(t, c), Ce(a, t, c), Vr;
          Ts();
        }
        e = Lm(
          t,
          e,
          n
        );
      } else
        t = s.treeContext, Bt = Ke(c.nextSibling), te = e, rt = !0, Jn = null, Qe = !1, t !== null && Md(e, t), e = ts(e, a), e.flags |= 134221824;
      return e;
    }
    return t = zn(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function bi(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Ur(t, e, n, a, u) {
    return _a(e), n = yr(
      t,
      e,
      n,
      a,
      void 0,
      u
    ), a = gr(), t !== null && !Kt ? (vr(t, e, u), wn(t, e, u)) : (rt && a && Nu(e), e.flags |= 1, Pt(t, e, n, u), e.child);
  }
  function jm(t, e, n, a, u, s) {
    return _a(e), e.updateQueue = null, n = Gd(
      e,
      a,
      n,
      u
    ), qd(t), a = gr(), t !== null && !Kt ? (vr(t, e, s), wn(t, e, s)) : (rt && a && Nu(e), e.flags |= 1, Pt(t, e, n, s), e.child);
  }
  function Ym(t, e, n, a, u) {
    if (_a(e), e.stateNode === null) {
      var s = fi, c = n.contextType;
      typeof c == "object" && c !== null && (s = le(c)), s = new n(a, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = _r, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = a, s.state = e.memoizedState, s.refs = {}, ur(e), c = n.contextType, s.context = typeof c == "object" && c !== null ? le(c) : fi, s.state = e.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (zr(
        e,
        n,
        c,
        a
      ), s.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (c = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), c !== s.state && _r.enqueueReplaceState(s, s.state, null), Tl(e, a, s, u), Sl(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      s = e.stateNode;
      var m = e.memoizedProps, T = La(n, m);
      s.props = T;
      var C = s.context, R = n.contextType;
      c = fi, typeof R == "object" && R !== null && (c = le(R));
      var N = n.getDerivedStateFromProps;
      R = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, R || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m || C !== c) && Cm(
        e,
        s,
        a,
        c
      ), Wn = !1;
      var M = e.memoizedState;
      s.state = M, Tl(e, a, s, u), Sl(), C = e.memoizedState, m || M !== C || Wn ? (typeof N == "function" && (zr(
        e,
        n,
        N,
        a
      ), C = e.memoizedState), (T = Wn || Dm(
        e,
        n,
        T,
        a,
        M,
        C,
        c
      )) ? (R || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = C), s.props = a, s.state = C, s.context = c, a = T) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      s = e.stateNode, sr(t, e), c = e.memoizedProps, R = La(n, c), s.props = R, N = e.pendingProps, M = s.context, C = n.contextType, T = fi, typeof C == "object" && C !== null && (T = le(C)), m = n.getDerivedStateFromProps, (C = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (c !== N || M !== T) && Cm(
        e,
        s,
        a,
        T
      ), Wn = !1, M = e.memoizedState, s.state = M, Tl(e, a, s, u), Sl();
      var O = e.memoizedState;
      c !== N || M !== O || Wn || t !== null && t.dependencies !== null && Bu(t.dependencies) ? (typeof m == "function" && (zr(
        e,
        n,
        m,
        a
      ), O = e.memoizedState), (R = Wn || Dm(
        e,
        n,
        R,
        a,
        M,
        O,
        T
      ) || t !== null && t.dependencies !== null && Bu(t.dependencies)) ? (C || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, O, T), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        a,
        O,
        T
      )), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || c === t.memoizedProps && M === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && M === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = O), s.props = a, s.state = O, s.context = T, a = R) : (typeof s.componentDidUpdate != "function" || c === t.memoizedProps && M === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && M === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return s = a, bi(t, e), a = (e.flags & 128) !== 0, s || a ? (s = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && a ? (e.child = wa(
      e,
      t.child,
      null,
      u
    ), e.child = wa(
      e,
      null,
      n,
      u
    )) : Pt(t, e, n, u), e.memoizedState = s.state, t = e.child) : t = wn(
      t,
      e,
      u
    ), t;
  }
  function qm(t, e, n, a) {
    return Oa(), e.flags |= 256, Pt(t, e, n, a), e.child;
  }
  var Br = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function wr(t) {
    return { baseLanes: t, cachePool: zd() };
  }
  function Hr(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Be), t;
  }
  function Gm(t, e, n) {
    var a = e.pendingProps, u = !1, s = (e.flags & 128) !== 0, c;
    if ((c = s) || (c = t !== null && t.memoizedState === null ? !1 : (se.current & 2) !== 0), c && (u = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (rt) {
        if (u ? ea(e) : na(), (t = Bt) ? (t = cg(
          t,
          Qe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Kn !== null ? { id: cn, overflow: fn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = bd(t), n.return = e, e.child = n, te = e, Bt = null)) : t = null, t === null) throw Fn(e);
        return wc(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return s = a.children, a = a.fallback, u ? (na(), u = e.mode, s = es(
        { mode: "hidden", children: s },
        u
      ), a = xa(
        a,
        u,
        n,
        null
      ), s.return = e, a.return = e, s.sibling = a, e.child = s, a = e.child, a.memoizedState = wr(n), a.childLanes = Hr(
        t,
        c,
        n
      ), e.memoizedState = Br, Dl(null, a)) : (ea(e), Lr(e, s));
    }
    var m = t.memoizedState;
    if (m !== null) {
      var T = m.dehydrated;
      if (T !== null)
        return bS(
          t,
          e,
          s,
          c,
          a,
          T,
          m,
          n
        );
    }
    return u ? (na(), u = a.fallback, s = e.mode, m = t.child, T = m.sibling, a = zn(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 1206910976, T !== null ? u = zn(T, u) : (u = xa(
      u,
      s,
      n,
      null
    ), u.flags |= 2), u.return = e, a.return = e, a.sibling = u, e.child = a, Dl(null, a), a = e.child, u = t.child.memoizedState, u === null ? u = wr(n) : (s = u.cachePool, s !== null ? (m = Qt._currentValue, s = s.parent !== m ? { parent: m, pool: m } : s) : s = zd(), u = {
      baseLanes: u.baseLanes | n,
      cachePool: s
    }), a.memoizedState = u, a.childLanes = Hr(
      t,
      c,
      n
    ), e.memoizedState = Br, Dl(t.child, a)) : (ea(e), n = t.child, t = n.sibling, n = zn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Lr(t, e) {
    return e = es(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function es(t, e) {
    return t = Ee(22, t, null, e), t.lanes = 0, t;
  }
  function ns(t, e, n) {
    return wa(e, t.child, null, n), t = Lr(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function bS(t, e, n, a, u, s, c, m) {
    if (n)
      return e.flags & 256 ? (ea(e), e.flags &= -257, ns(
        t,
        e,
        m
      )) : e.memoizedState !== null ? (na(), e.child = t.child, e.flags |= 128, null) : (na(), s = u.fallback, c = e.mode, u = es(
        { mode: "visible", children: u.children },
        c
      ), s = xa(
        s,
        c,
        m,
        null
      ), s.flags |= 2, u.return = e, s.return = e, u.sibling = s, e.child = u, wa(e, t.child, null, m), u = e.child, u.memoizedState = wr(m), u.childLanes = Hr(
        t,
        a,
        m
      ), e.memoizedState = Br, Dl(null, u));
    if (ea(e), wc(s)) {
      if (a = s.nextSibling && s.nextSibling.dataset, a) var T = a.dgst;
      return a = T, a !== "" && (u = Error(o(419)), u.stack = "", u.digest = a, dl({ value: u, source: null, stack: null })), ns(
        t,
        e,
        m
      );
    }
    if (Kt || za(t, e, m, !1), a = (m & t.childLanes) !== 0, Kt || a) {
      if (ta.current !== null)
        return ns(
          t,
          e,
          m
        );
      if (a = _t, a !== null && (u = Mh(
        a,
        m
      ), u !== 0 && u !== c.retryLane))
        throw c.retryLane = u, Ca(t, u), Ce(a, t, u), Vr;
      return Bc(s) || Ts(), ns(
        t,
        e,
        m
      );
    }
    return Bc(s) ? (e.flags |= 192, e.child = t.child, null) : (t = c.treeContext, Bt = Ke(s.nextSibling), te = e, rt = !0, Jn = null, Qe = !1, t !== null && Md(e, t), e = Lr(
      e,
      u.children
    ), e.flags |= 134221824, e);
  }
  function Xm(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Uu(t.return, e, n);
  }
  function Qm(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && Xu(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function as(t, e, n, a, u, s) {
    var c = t.memoizedState;
    c === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: u,
      treeForkCount: s
    } : (c.isBackwards = e, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = n, c.tailMode = u, c.treeForkCount = s);
  }
  function jr(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function Yr(t, e, n) {
    var a = e.pendingProps, u = a.revealOrder, s = a.tail;
    a = a.children;
    var c = se.current;
    if (e.flags & 128)
      return bl(e, c), null;
    var m = (c & 2) !== 0;
    if (m ? (c = c & 1 | 2, e.flags |= 128) : c &= 1, bl(e, c), u === "backwards" && t !== null ? (jr(t), Pt(t, e, a, n), jr(t)) : Pt(t, e, a, n), a = rt ? hl : 0, !m && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Xm(t, n, e);
        else if (t.tag === 19)
          Xm(t, n, e);
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
    switch (u) {
      case "backwards":
        n = Qm(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null, jr(e)), as(
          e,
          !0,
          u,
          null,
          s,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Xu(t) === null) {
            e.child = u;
            break;
          }
          t = u.sibling, u.sibling = n, n = u, u = t;
        }
        as(
          e,
          !0,
          n,
          null,
          s,
          a
        );
        break;
      case "together":
        as(
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
        n = Qm(e.child), n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), as(
          e,
          !1,
          u,
          n,
          s,
          a
        );
    }
    return e.child;
  }
  function Zm(t, e, n) {
    var a = e.pendingProps;
    return Pn(e, e.type, a.value), Pt(t, e, a.children, n), e.child;
  }
  function wn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), ua |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (za(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(o(153));
    if (e.child !== null) {
      for (t = e.child, n = zn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = zn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function qr(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Bu(t)));
  }
  function ES(t, e, n) {
    switch (e.tag) {
      case 3:
        ou(e, e.stateNode.containerInfo), Pn(e, Qt, t.memoizedState.cache), Oa();
        break;
      case 27:
      case 5:
        mo(e);
        break;
      case 4:
        ou(e, e.stateNode.containerInfo);
        break;
      case 10:
        Pn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, hr(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return ea(e), e.flags |= 128, null;
          a = za(
            t,
            e,
            n,
            !1
          );
          var u = e.child.childLanes;
          return a || (n & u) !== 0 ? Gm(t, e, n) : (ea(e), t = wn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        ea(e);
        break;
      case 19:
        if (e.flags & 128)
          return Yr(
            t,
            e,
            n
          );
        if (u = (t.flags & 128) !== 0, a = (n & e.childLanes) !== 0, a || (za(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), u) {
          if (a)
            return Yr(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), bl(e, se.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, wm(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        Pn(e, Qt, t.memoizedState.cache);
    }
    return wn(t, e, n);
  }
  function Km(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Kt = !0;
      else {
        if (!qr(t, n) && (e.flags & 128) === 0)
          return Kt = !1, ES(
            t,
            e,
            n
          );
        Kt = (t.flags & 131072) !== 0;
      }
    else
      Kt = !1, rt && (e.flags & 1048576) !== 0 && Ad(e, hl, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Ua(e.elementType), e.type = t, typeof t == "function")
            Fo(t) ? (a = La(t, a), e.tag = 1, e = Ym(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = Ur(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === L) {
                e.tag = 11, e = Vm(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (u === ot) {
                e.tag = 14, e = Um(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (u === Rt) {
                e.tag = 10, e.type = t, e = Zm(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = St(t) || t, Error(o(306, e, ""));
          }
        }
        return e;
      case 0:
        return Ur(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, u = La(
          a,
          e.pendingProps
        ), Ym(
          t,
          e,
          a,
          u,
          n
        );
      case 3:
        t: {
          if (ou(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          a = e.pendingProps;
          var s = e.memoizedState;
          u = s.element, sr(t, e), Tl(e, a, null, n);
          var c = e.memoizedState;
          if (a = c.cache, Pn(e, Qt, a), a !== s.cache && er(
            e,
            [Qt],
            n,
            !0
          ), Sl(), a = c.element, s.isDehydrated)
            if (s = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
              e = qm(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== u) {
              u = qe(
                Error(o(424)),
                e
              ), dl(u), e = qm(
                t,
                e,
                a,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Bt = Ke(t.firstChild), te = e, rt = !0, Jn = null, Qe = !0, n = wd(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Oa(), a === u) {
              e = wn(
                t,
                e,
                n
              );
              break t;
            }
            Pt(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return bi(t, e), t === null ? (n = vg(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : rt || (e.stateNode = ky(
          e.type,
          e.pendingProps,
          qn.current,
          e
        )) : e.memoizedState = vg(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return mo(e), t === null && rt && (a = e.stateNode = dg(
          e.type,
          e.pendingProps,
          qn.current
        ), te = e, Qe = !0, u = Bt, ca(e.type) ? (Hc = u, Bt = Ke(a.firstChild)) : Bt = u), Pt(
          t,
          e,
          e.pendingProps.children,
          n
        ), bi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && rt && ((u = a = Bt) && (a = gT(
          a,
          e.type,
          e.pendingProps,
          Qe
        ), a !== null ? (e.stateNode = a, te = e, Bt = Ke(a.firstChild), Qe = !1, u = !0) : u = !1), u || Fn(e)), mo(e), u = e.type, s = e.pendingProps, c = t !== null ? t.memoizedProps : null, a = s.children, Oc(u, s) ? a = null : c !== null && Oc(u, c) && (e.flags |= 32), e.memoizedState !== null && (u = yr(
          t,
          e,
          fS,
          null,
          null,
          n
        ), ji._currentValue = u), bi(t, e), Pt(t, e, a, n), e.child;
      case 6:
        return t === null && rt && ((t = n = Bt) && (n = vT(
          n,
          e.pendingProps,
          Qe
        ), n !== null ? (e.stateNode = n, te = e, Bt = null, t = !0) : t = !1), t || Fn(e)), null;
      case 13:
        return Gm(t, e, n);
      case 4:
        return ou(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = wa(
          e,
          null,
          a,
          n
        ) : Pt(t, e, a, n), e.child;
      case 11:
        return Vm(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return a = e.pendingProps, bi(t, e), Pt(t, e, a, n), e.child;
      case 8:
        return Pt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return Pt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return Zm(t, e, n);
      case 9:
        return u = e.type._context, a = e.pendingProps.children, _a(e), u = le(u), a = a(u), e.flags |= 1, Pt(t, e, a, n), e.child;
      case 14:
        return Um(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return Bm(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return Yr(t, e, n);
      case 31:
        return TS(t, e, n);
      case 22:
        return wm(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return _a(e), a = le(Qt), t === null ? (u = ir(), u === null && (u = _t, s = nr(), u.pooledCache = s, s.refCount++, s !== null && (u.pooledCacheLanes |= n), u = s), e.memoizedState = { parent: a, cache: u }, ur(e), Pn(e, Qt, u)) : ((t.lanes & n) !== 0 && (sr(t, e), Tl(e, null, null, n), Sl()), u = t.memoizedState, s = e.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Pn(e, Qt, a)) : (a = s.cache, Pn(e, Qt, a), a !== u.cache && er(
          e,
          [Qt],
          n,
          !0
        ))), Pt(
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
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : rt && Nu(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : bi(t, e), Pt(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function Hn(t) {
    t.flags |= 4;
  }
  function Gr(t, e, n, a, u) {
    var s;
    if ((s = (t.mode & 32) !== 0) && (s = n === null ? bg(e, a) : bg(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), s) {
      if (t.flags |= 16777216, (u & 335544128) === u)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (xy()) t.flags |= 8192;
        else
          throw Ba = ju, lr;
    } else t.flags &= -16777217;
  }
  function Jm(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Eg(e))
      if (xy()) t.flags |= 8192;
      else
        throw Ba = ju, lr;
  }
  function is(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? bh() : 536870912, t.lanes |= e, Ci |= e);
  }
  function Cl(t, e) {
    if (!rt)
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
  function wt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, a |= u.subtreeFlags & 1206910976, a |= u.flags & 1206910976, u.return = t, u = u.sibling;
    else
      for (u = t.child; u !== null; )
        n |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function AS(t, e, n) {
    var a = e.pendingProps;
    switch (Wo(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return wt(e), null;
      case 1:
        return wt(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Vn(Qt), Ia(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (mi(e) ? Hn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, $o())), wt(e), null;
      case 26:
        var u = e.type, s = e.memoizedState;
        return t === null ? (Hn(e), s !== null ? (wt(e), Jm(e, s)) : (wt(e), Gr(
          e,
          u,
          null,
          a,
          n
        ))) : s ? s !== t.memoizedState ? (Hn(e), wt(e), Jm(e, s)) : (wt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Hn(e), wt(e), Gr(
          e,
          u,
          t,
          a,
          n
        )), null;
      case 27:
        if (ru(e), n = qn.current, u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Hn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(o(166));
            return wt(e), e.subtreeFlags &= -33554433, null;
          }
          t = on.current, mi(e) ? Dd(e) : (t = dg(u, a, n), e.stateNode = t, Hn(e));
        }
        return wt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (ru(e), u = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Hn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(o(166));
            return wt(e), e.subtreeFlags &= -33554433, null;
          }
          if (s = on.current, mi(e))
            Dd(e);
          else {
            var c = Hl(
              qn.current
            );
            switch (s) {
              case 1:
                s = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                s = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    s = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    s = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    s = c.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof a.is == "string" ? c.createElement("select", {
                      is: a.is
                    }) : c.createElement("select"), a.multiple ? s.multiple = !0 : a.size && (s.size = a.size);
                    break;
                  default:
                    s = typeof a.is == "string" ? c.createElement(u, { is: a.is }) : c.createElement(u);
                }
            }
            s[ie] = e, s[be] = a;
            t: for (c = e.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                s.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === e) break t;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === e)
                  break t;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            e.stateNode = s;
            t: switch (re(s, u, a), u) {
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
            a && Hn(e);
          }
        }
        return wt(e), e.subtreeFlags &= -33554433, Gr(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Hn(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(o(166));
          if (t = qn.current, mi(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, u = te, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            t[ie] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Ky(t.nodeValue, n)), t || Fn(e, !0);
          } else
            t = Hl(t).createTextNode(
              a
            ), t[ie] = e, e.stateNode = t;
        }
        return wt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = mi(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[ie] = e;
            } else
              Oa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            wt(e), t = !1;
          } else
            n = $o(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Ne(e), e) : (Ne(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(o(558));
        }
        return wt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = mi(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[ie] = e;
            } else
              Oa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            wt(e), u = !1;
          } else
            u = $o(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return e.flags & 256 ? (Ne(e), e) : (Ne(e), null);
        }
        return Ne(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), s = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), s !== u && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), is(e, e.updateQueue), wt(e), null);
      case 4:
        return Ia(), t === null && Ac(e.stateNode.containerInfo), e.flags |= 67108864, wt(e), null;
      case 10:
        return Vn(e.type), wt(e), null;
      case 19:
        if (dr(e), a = e.memoizedState, a === null) return wt(e), null;
        if (u = (e.flags & 128) !== 0, s = a.rendering, s === null)
          if (u) Cl(a, !1);
          else {
            if (Yt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (s = Xu(t), s !== null) {
                  for (e.flags |= 128, Cl(a, !1), t = s.updateQueue, e.updateQueue = t, is(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Td(n, t), n = n.sibling;
                  return bl(
                    e,
                    se.current & 1 | 2
                  ), rt && _n(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && xe() > gs && (e.flags |= 128, u = !0, Cl(a, !1), e.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = Xu(s), t !== null) {
              if (e.flags |= 128, u = !0, t = t.updateQueue, e.updateQueue = t, is(e, t), Cl(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !s.alternate && !rt)
                return wt(e), null;
            } else
              2 * xe() - a.renderingStartTime > gs && n !== 536870912 && (e.flags |= 128, u = !0, Cl(a, !1), e.lanes = 4194304);
          a.isBackwards ? (s.sibling = e.child, e.child = s) : (t = a.last, t !== null ? t.sibling = s : e.child = s, a.last = s);
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
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = xe(), t.sibling = null, s = se.current, s = u ? s & 1 | 2 : s & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || rt ? bl(e, s) : (n = s, Ut(ue, e), Ut(se, n), me === null && (me = e)), rt && _n(e, a.treeForkCount), t;
        }
        return wt(e), null;
      case 22:
      case 23:
        return Ne(e), fr(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (wt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : wt(e), n = e.updateQueue, n !== null && is(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && ae(Va), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Vn(Qt), wt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, wt(e), null;
    }
    throw Error(o(156, e.tag));
  }
  function MS(t, e) {
    switch (Wo(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Vn(Qt), Ia(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return ru(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ne(e), e.alternate === null)
            throw Error(o(340));
          Oa();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ne(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(o(340));
          Oa();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return dr(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Ia(), null;
      case 10:
        return Vn(e.type), null;
      case 22:
      case 23:
        return Ne(e), fr(), t !== null && ae(Va), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Vn(Qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fm(t, e) {
    switch (Wo(e), e.tag) {
      case 3:
        Vn(Qt), Ia();
        break;
      case 26:
      case 27:
      case 5:
        ru(e);
        break;
      case 4:
        Ia();
        break;
      case 31:
        e.memoizedState !== null && Ne(e);
        break;
      case 13:
        Ne(e);
        break;
      case 19:
        dr(e);
        break;
      case 10:
        Vn(e.type);
        break;
      case 22:
      case 23:
        Ne(e), fr(), t !== null && ae(Va);
        break;
      case 24:
        Vn(Qt);
    }
  }
  function xl(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var s = n.create, c = n.inst;
            a = s(), c.destroy = a;
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (m) {
      Dt(e, e.return, m);
    }
  }
  function aa(t, e, n) {
    try {
      var a = e.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var s = u.next;
        a = s;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst, m = c.destroy;
            if (m !== void 0) {
              c.destroy = void 0, u = e;
              var T = n, C = m;
              try {
                C();
              } catch (R) {
                Dt(
                  u,
                  T,
                  R
                );
              }
            }
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (R) {
      Dt(e, e.return, R);
    }
  }
  function Pm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Ld(e, n);
      } catch (a) {
        Dt(t, t.return, a);
      }
    }
  }
  function km(t, e, n) {
    n.props = La(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Dt(t, e, a);
    }
  }
  function hn(t, e) {
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
            var u = t.stateNode, s = On(t.memoizedProps, u);
            (u.ref === null || u.ref.name !== s) && (u.ref = ag(s)), a = u.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var c = new He(t);
              g(
                t.child,
                !1,
                mT,
                c,
                void 0,
                void 0
              ), t.stateNode = c;
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (m) {
      Dt(t, e, m);
    }
  }
  function oe(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          Dt(t, e, u);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Dt(t, e, u);
        }
      else n.current = null;
  }
  function ls(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        rg(
          t.stateNode,
          e[n]
        );
  }
  function Wm(t) {
    for (var e = t.return; e !== null && (Qr(e) && rg(t.stateNode, e.stateNode), !Xr(e)); )
      e = e.return;
  }
  function Ol(t) {
    for (var e = t.return; e !== null && (Qr(e) && yT(t.stateNode, e.stateNode), !Xr(e)); )
      e = e.return;
  }
  function Xr(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Qr(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Zr(t) {
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
    } catch (u) {
      Dt(t, t.return, u);
    }
  }
  function Kr(t, e, n) {
    try {
      var a = t.stateNode;
      kS(a, t.type, n, e), a[be] = e;
    } catch (u) {
      Dt(t, t.return, u);
    }
  }
  function Im(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ca(t.type) || t.tag === 4;
  }
  function Jr(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Im(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ca(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Fr(t, e, n, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(u, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(u), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = rn)), ls(t, a), Tt = !0;
    else if (u !== 4 && (u === 27 && (ls(t, a), a = null, ca(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (Fr(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Fr(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function us(t, e, n, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      u = t.stateNode, e ? n.insertBefore(u, e) : n.appendChild(u), ls(t, a), Tt = !0;
    else if (u !== 4 && (u === 27 && (ls(t, a), a = null, ca(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (us(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        us(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function $m(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      re(e, a, n), e[ie] = t, e[be] = n;
    } catch (s) {
      Dt(t, t.return, s);
    }
  }
  var ss = !1, Ve = null;
  function ty(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (ss = !0);
  }
  var dn = null;
  function ey() {
    var t = dn;
    return dn = null, t;
  }
  var Ae = 0;
  function Ei(t, e, n, a, u) {
    return Ae = 0, ny(
      t.child,
      e,
      n,
      a,
      u
    );
  }
  function ny(t, e, n, a, u) {
    for (var s = !1; t !== null; ) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (a !== null) {
          var m = _c(c);
          a.push(m), m.view && (s = !0);
        } else
          s || _c(c).view && (s = !0);
        ss = !0, eg(
          c,
          Ae === 0 ? e : e + "_" + Ae,
          n
        ), Ae++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && u || ny(
        t.child,
        e,
        n,
        a,
        u
      ) && (s = !0));
      t = t.sibling;
    }
    return s;
  }
  function mn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? ng(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || mn(
        t.child,
        e
      )), t = t.sibling;
  }
  function os(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (os(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(o(544));
          var n = e.name;
          e = Rn(e.default, e.share), e !== "none" && (Ei(
            t,
            n,
            e,
            null,
            !1
          ) || mn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Pr(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, u = On(a, n), s = Rn(
        a.default,
        n.paired ? a.share : a.enter
      );
      s !== "none" ? Ei(t, u, s, null, !1) ? (os(t), n.paired || e || zi(t, a.onEnter)) : mn(t.child, !1) : os(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Pr(t, e), t = t.sibling;
    else os(t);
  }
  function kr(t) {
    if (Ve !== null && Ve.size !== 0) {
      var e = Ve;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, a = n.name;
              if (a != null && a !== "auto") {
                var u = e.get(a);
                if (u !== void 0) {
                  var s = Rn(
                    n.default,
                    n.share
                  );
                  if (s !== "none" && (Ei(
                    t,
                    a,
                    s,
                    null,
                    !1
                  ) ? (s = t.stateNode, u.paired = s, s.paired = u, zi(t, n.onShare)) : mn(t.child, !1)), e.delete(a), e.size === 0) break;
                }
              }
            }
            kr(t);
          }
          t = t.sibling;
        }
    }
  }
  function Wr(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = On(e, t.stateNode), a = Ve !== null ? Ve.get(n) : void 0, u = Rn(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      u !== "none" && (Ei(t, n, u, null, !1) ? a !== void 0 ? (u = t.stateNode, a.paired = u, u.paired = a, Ve.delete(n), zi(t, e.onShare)) : zi(t, e.onExit) : mn(t.child, !1)), Ve !== null && kr(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Wr(t), t = t.sibling;
    else
      Ve !== null && kr(t);
  }
  function ay(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = On(e, t.stateNode);
        e = Rn(e.default, e.update), t.flags &= -5, e !== "none" && Ei(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && ay(t);
      t = t.sibling;
    }
  }
  function Ir(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, mn(t.child, !1));
          }
          Ir(t);
        }
        t = t.sibling;
      }
  }
  function rs(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, mn(t.child, !1), Ir(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        rs(t), t = t.sibling;
    else Ir(t);
  }
  function iy(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? mn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && iy(t), t = t.sibling;
  }
  function $r(t, e, n, a, u, s, c) {
    for (var m = !1; e !== null; ) {
      if (e.tag === 5) {
        var T = e.stateNode;
        if (s !== null && Ae < s.length) {
          var C = s[Ae], R = _c(T);
          (C.view || R.view) && (m = !0);
          var N;
          if (N = (t.flags & 4) === 0)
            if (R.clip) N = !0;
            else {
              N = C.rect;
              var M = R.rect;
              N = N.y !== M.y || N.x !== M.x || N.height !== M.height || N.width !== M.width;
            }
          N && (t.flags |= 4), R.abs ? R = !C.abs : (C = C.rect, R = R.rect, R = C.height !== R.height || C.width !== R.width), R && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && eg(
          T,
          Ae === 0 ? n : n + "_" + Ae,
          u
        ), m && (t.flags & 4) !== 0 || (dn === null && (dn = []), dn.push(
          T,
          Ae === 0 ? a : a + "_" + Ae,
          e.memoizedProps
        )), Ae++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && c ? t.flags |= e.flags & 32 : $r(
        t,
        e.child,
        n,
        a,
        u,
        s,
        c
      ) && (m = !0));
      e = e.sibling;
    }
    return m;
  }
  function ly(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, u = On(n, a), s = Rn(n.default, n.update), c;
        c = t.memoizedState, t.memoizedState = null, a = t;
        var m = t.child;
        Ae = 0, u = $r(
          a,
          m,
          u,
          u,
          s,
          c,
          !1
        ), (t.flags & 4) !== 0 && u && zi(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && ly(t);
      t = t.sibling;
    }
  }
  var ee = !1, At = !1, yn = !1, tc = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, ne = null, gn = !1, Rl = !1, cs = !1, ec = !1;
  function DS(t, e, n) {
    if (t = t.containerInfo, Cc = Yi, t = cd(t), qo(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var s = u.anchorOffset, c = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break t;
            }
            var m = 0, T = -1, C = -1, R = 0, N = 0, M = t, O = null;
            e: for (; ; ) {
              for (var j; M !== a || s !== 0 && M.nodeType !== 3 || (T = m + s), M !== c || u !== 0 && M.nodeType !== 3 || (C = m + u), M.nodeType === 3 && (m += M.nodeValue.length), (j = M.firstChild) !== null; )
                O = M, M = j;
              for (; ; ) {
                if (M === t) break e;
                if (O === a && ++R === s && (T = m), O === c && ++N === u && (C = m), (j = M.nextSibling) !== null) break;
                M = O, O = M.parentNode;
              }
              M = j;
            }
            a = T === -1 || C === -1 ? null : { start: T, end: C };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (xc = { focusedElem: t, selectionRange: a }, Yi = !1, n = (n & 335544064) === n, ne = e, e = n ? 9270 : 1024; ne !== null; ) {
      if (t = ne, n && (a = t.deletions, a !== null))
        for (s = 0; s < a.length; s++)
          n && Wr(a[s]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && ty(t), fs(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && Wr(a), fs(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && ty(t), fs(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, ne = a) : (n && ay(t), fs(n));
      }
    }
    Ve = null;
  }
  function fs(t) {
    for (; ne !== null; ) {
      var e = ne, n = t, a = e.alternate, u = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && a !== null) {
            n = void 0, u = a.memoizedProps, a = a.memoizedState;
            var s = e.stateNode;
            try {
              var c = La(
                e.type,
                u
              );
              n = s.getSnapshotBeforeUpdate(
                c,
                a
              ), s.__reactInternalSnapshotBeforeUpdate = n;
            } catch (m) {
              Dt(e, e.return, m);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (a = e.stateNode.containerInfo, n = a.nodeType, n === 9)
              Uc(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Uc(a);
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
          n && a !== null && (n = On(
            a.memoizedProps,
            a.stateNode
          ), u = e.memoizedProps, u = Rn(u.default, u.update), u !== "none" && Ei(
            a,
            n,
            u,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(o(163));
      }
      if (a = e.sibling, a !== null) {
        a.return = e.return, ne = a;
        break;
      }
      ne = e.return;
    }
  }
  function sy(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        vn(t, n), a & 4 && xl(5, n);
        break;
      case 1:
        if (vn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (c) {
              Dt(n, n.return, c);
            }
          else {
            var u = La(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                u,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              Dt(
                n,
                n.return,
                c
              );
            }
          }
        a & 64 && Pm(n), a & 512 && hn(n, n.return);
        break;
      case 3:
        if (vn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
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
            Ld(t, e);
          } catch (c) {
            Dt(n, n.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && $m(n);
      case 26:
      case 5:
        vn(t, n), e === null && a & 4 && Zr(n), a & 512 && hn(n, n.return);
        break;
      case 12:
        vn(t, n);
        break;
      case 31:
        vn(t, n), a & 4 && fy(t, n);
        break;
      case 13:
        vn(t, n), a & 4 && hy(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = HS.bind(
          null,
          n
        ), pT(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || ee, !a) {
          var s = e !== null && e.memoizedState !== null || At;
          e = ee, u = At, ee = a, (At = s) && !u ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), tn(
            t,
            n,
            a
          )) : vn(t, n), ee = e, At = u;
        }
        break;
      case 30:
        vn(t, n), a & 512 && hn(n, n.return);
        break;
      case 7:
        a & 512 && hn(n, n.return);
      default:
        vn(t, n);
    }
  }
  function nc(t, e) {
    for (t = t.child; t !== null; )
      oy(t, e), t = t.sibling;
  }
  function oy(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var a = n.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var u = t.stateNode, s = t.memoizedProps.style, c = s != null && s.hasOwnProperty("display") ? s.display : null;
            u.style.display = c == null || typeof c == "boolean" ? "" : ("" + c).trim();
          }
        } catch (T) {
          Dt(t, t.return, T);
        }
        ac(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Tt = !0;
        } catch (T) {
          Dt(t, t.return, T);
        }
        break;
      case 18:
        try {
          var m = t.stateNode;
          e ? tg(m, !0) : tg(t.stateNode, !1);
        } catch (T) {
          Dt(t, t.return, T);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && nc(t, e);
        break;
      default:
        nc(t, e);
    }
  }
  function ac(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              oy(n, a);
              break t;
            case 22:
              n.memoizedState === null && ac(n, a);
              break t;
            default:
              ac(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function ry(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, ry(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && gu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ht = null, Me = !1;
  function Ie(t, e, n) {
    for (n = n.child; n !== null; )
      cy(t, e, n), n = n.sibling;
  }
  function cy(t, e, n) {
    if (Oe && typeof Oe.onCommitFiberUnmount == "function")
      try {
        Oe.onCommitFiberUnmount(Ii, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        At || oe(n, e), Ie(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !At && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        At || oe(n, e), Ol(n);
        var a = Ht, u = Me;
        ca(n.type) && (Ht = n.stateNode, Me = !1), Ie(
          t,
          e,
          n
        ), mg(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Ht = a, Me = u;
        break;
      case 5:
        At || oe(n, e), Ol(n);
      case 6:
        if (n.tag === 6 && Ol(n), a = Ht, u = Me, Ht = null, Ie(
          t,
          e,
          n
        ), Ht = a, Me = u, Ht !== null)
          if (Me)
            try {
              (Ht.nodeType === 9 ? Ht.body : Ht.nodeName === "HTML" ? Ht.ownerDocument.body : Ht).removeChild(n.stateNode), Tt = !0;
            } catch (s) {
              Dt(
                n,
                e,
                s
              );
            }
          else
            try {
              Ht.removeChild(n.stateNode), Tt = !0;
            } catch (s) {
              Dt(
                n,
                e,
                s
              );
            }
        break;
      case 18:
        Ht !== null && (Me ? (t = Ht, $y(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), qi(t)) : $y(Ht, n.stateNode));
        break;
      case 4:
        a = Ht, u = Me, Ht = n.stateNode.containerInfo, Me = !0, Ie(
          t,
          e,
          n
        ), Ht = a, Me = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        aa(2, n, e), At || aa(4, n, e), Ie(
          t,
          e,
          n
        );
        break;
      case 1:
        At || (oe(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && km(
          n,
          e,
          a
        )), Ie(
          t,
          e,
          n
        );
        break;
      case 21:
        Ie(
          t,
          e,
          n
        );
        break;
      case 22:
        At = (a = At) || n.memoizedState !== null, Ie(
          t,
          e,
          n
        ), At = a;
        break;
      case 30:
        oe(n, e), Ie(
          t,
          e,
          n
        );
        break;
      case 7:
        At || oe(n, e), Ie(
          t,
          e,
          n
        );
        break;
      default:
        Ie(
          t,
          e,
          n
        );
    }
  }
  function fy(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        qi(t);
      } catch (n) {
        Dt(e, e.return, n);
      }
    }
  }
  function hy(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        qi(t);
      } catch (n) {
        Dt(e, e.return, n);
      }
  }
  function CS(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new uy()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new uy()), e;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function hs(t, e) {
    var n = CS(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var u = LS.bind(null, t, a);
        a.then(u, u);
      }
    });
  }
  function ve(t, e, n) {
    var a = e.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var s = a[u], c = t, m = e, T = m;
        t: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (ca(T.type)) {
                Ht = T.stateNode, Me = !1;
                break t;
              }
              break;
            case 5:
              Ht = T.stateNode, Me = !1;
              break t;
            case 3:
            case 4:
              Ht = T.stateNode.containerInfo, Me = !0;
              break t;
          }
          T = T.return;
        }
        if (Ht === null) throw Error(o(160));
        cy(c, m, s), Ht = null, Me = !1, c = s.alternate, c !== null && (c.return = null), s.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        dy(e, t, n), e = e.sibling;
  }
  var $e = null;
  function dy(t, e, n) {
    var a = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (a = t.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var s = 0; s < a.length; s++) {
            var c = a[s];
            c.ref.impl = c.nextImpl;
          }
        ve(e, t, n), pe(t), u & 4 && (aa(3, t, t.return), xl(3, t), aa(5, t, t.return));
        break;
      case 1:
        ve(e, t, n), pe(t), u & 512 && (At || a === null || oe(a, a.return)), u & 64 && ee && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (s = $e, ve(e, t, n), pe(t), u & 512 && (At || a === null || oe(a, a.return)), u & 4)
          if (u = a !== null ? a.memoizedState : null, n = t.memoizedState, a === null)
            if (n === null)
              if (t.stateNode === null)
                if (ee)
                  t.stateNode = ky(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, u = s.ownerDocument || s;
                    e: switch (e) {
                      case "title":
                        a = u.getElementsByTagName("title")[0], (!a || a[el] || a[ie] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = u.createElement(e), u.head.insertBefore(
                          a,
                          u.querySelector("head > title")
                        )), re(a, e, n), a[ie] = t, $t(a), e = a;
                        break t;
                      case "link":
                        if (s = Tg(
                          "link",
                          "href",
                          u
                        ).get(e + (n.href || ""))) {
                          for (c = 0; c < s.length; c++)
                            if (a = s[c], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              s.splice(c, 1);
                              break e;
                            }
                        }
                        a = u.createElement(e), re(a, e, n), u.head.appendChild(a);
                        break;
                      case "meta":
                        if (s = Tg(
                          "meta",
                          "content",
                          u
                        ).get(e + (n.content || ""))) {
                          for (c = 0; c < s.length; c++)
                            if (a = s[c], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              s.splice(c, 1);
                              break e;
                            }
                        }
                        a = u.createElement(e), re(a, e, n), u.head.appendChild(a);
                        break;
                      default:
                        throw Error(o(468, e));
                    }
                    a[ie] = t, $t(a), e = a;
                  }
                  t.stateNode = e;
                }
              else
                ee || qc(s, t.type, t.stateNode);
            else
              t.stateNode = Sg(
                s,
                n,
                t.memoizedProps
              );
          else
            u !== n ? (u === null ? (e = a.stateNode, e === null || At || e.parentNode.removeChild(e)) : u.count--, n === null ? ee || qc(s, t.type, t.stateNode) : Sg(s, n, t.memoizedProps)) : n === null && t.stateNode !== null && Kr(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        ve(e, t, n), pe(t), u & 512 && (At || a === null || oe(a, a.return)), a !== null && u & 4 && Kr(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (s = yn, yn = !1, ve(e, t, n), yn = s, pe(t), u & 512 && (At || a === null || oe(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            ii(e, ""), Tt = !0;
          } catch (R) {
            Dt(t, t.return, R);
          }
        }
        u & 4 && t.stateNode != null && (e = t.memoizedProps, Kr(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (tc = !0);
        break;
      case 6:
        if (ve(e, t, n), pe(t), u & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Tt = !0;
          } catch (R) {
            Dt(t, t.return, R);
          }
        }
        break;
      case 3:
        if (Tt = !1, xs = null, s = $e, $e = Ll(e.containerInfo), ve(e, t, n), $e = s, pe(t), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            qi(e.containerInfo);
          } catch (R) {
            Dt(t, t.return, R);
          }
        tc && (tc = !1, my(t)), Tt = !1;
        break;
      case 4:
        u = yn, yn = ee, a = Uh(), s = $e, $e = Ll(
          t.stateNode.containerInfo
        ), ve(e, t, n), pe(t), $e = s, Tt && Rl && (cs = !0), Tt = a, yn = u;
        break;
      case 12:
        ve(e, t, n), pe(t);
        break;
      case 31:
        ve(e, t, n), pe(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, hs(t, e)));
        break;
      case 13:
        ve(e, t, n), pe(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ys = xe()), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, hs(t, e)));
        break;
      case 22:
        s = t.memoizedState !== null, c = a !== null && a.memoizedState !== null;
        var m = ee, T = At, C = yn;
        ee = m || s, yn = C || s, At = T || c, ve(e, t, n), At = T, yn = C, ee = m, pe(t), u & 8192 && (e = t.stateNode, e._visibility = s ? e._visibility & -2 : e._visibility | 1, !s || a === null || c || ee || At || (e = c || At, n = ee, a = At, ee = s || ee, At = e, ia(t, 2), ee = n, At = a), !s && yn || nc(t, s)), u & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, hs(t, n))));
        break;
      case 19:
        ve(e, t, n), pe(t), u & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, hs(t, e)));
        break;
      case 30:
        u & 512 && (At || a === null || oe(a, a.return)), u = Uh(), s = Rl, c = (n & 335544064) === n, m = t.memoizedProps, Rl = c && Rn(
          m.default,
          m.update
        ) !== "none", ve(e, t, n), pe(t), c && a !== null && Tt && (t.flags |= 4), Rl = s, Tt = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (At || a === null || oe(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        ve(e, t, n), pe(t);
    }
  }
  function pe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Im(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var u = t.return; u !== null; ) {
          if (Qr(u)) {
            var s = u.stateNode;
            a === null ? a = [s] : a.push(s);
          }
          if (Xr(u)) break;
          u = u.return;
        }
        var c = a;
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var m = n.stateNode, T = Jr(t);
            us(
              t,
              T,
              m,
              c
            );
            break;
          case 5:
            var C = n.stateNode;
            n.flags & 32 && (ii(C, ""), n.flags &= -33);
            var R = Jr(t);
            us(
              t,
              R,
              C,
              c
            );
            break;
          case 3:
          case 4:
            var N = n.stateNode.containerInfo, M = Jr(t);
            Fr(
              t,
              M,
              N,
              c
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (O) {
        Dt(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function my(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        my(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, Yi = !0, e.reset(), Yi = !1), t = t.sibling;
      }
  }
  function Ai(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        yy(e, t), e = e.sibling;
    else ly(e);
  }
  function yy(t, e) {
    var n = t.alternate;
    if (n === null) Pr(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (ec = gn = !1, ey(), Ai(e, t), !gn && !cs) {
            if (t = dn, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var u = t[a + 1];
                ng(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + u + ")"
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
            )), ec = !0;
          }
          dn = null;
          break;
        case 5:
          Ai(e, t);
          break;
        case 4:
          a = gn, gn = !1, Ai(e, t), gn && (cs = !0), gn = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? Pr(t, !1) : Ai(e, t));
          break;
        case 30:
          a = gn, u = ey(), gn = !1, Ai(e, t), gn && (t.flags |= 4);
          var s = t.memoizedProps, c = t.stateNode;
          e = On(s, c), c = On(n.memoizedProps, c);
          var m = Rn(s.default, s.update);
          m === "none" ? e = !1 : (s = n.memoizedState, n.memoizedState = null, n = t.child, Ae = 0, e = $r(
            t,
            n,
            e,
            c,
            m,
            s,
            !0
          ), Ae !== (s === null ? 0 : s.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (zi(
            t,
            t.memoizedProps.onUpdate
          ), dn = u) : u !== null && (u.push.apply(u, dn), dn = u), gn = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Ai(e, t);
      }
  }
  function vn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        sy(t, e.alternate, e), e = e.sibling;
  }
  function ia(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, a = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          aa(4, n, n.return), ia(
            n,
            a
          );
          break;
        case 1:
          oe(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && km(
            n,
            n.return,
            u
          ), ia(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && mg(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          oe(n, n.return), n.tag !== 5 && n.tag !== 27 || Ol(n), ia(
            n,
            a
          );
          break;
        case 6:
          Ol(n);
          break;
        case 26:
          oe(n, n.return), u = n.stateNode, n.memoizedState !== null || u === null || At || u.parentNode.removeChild(u), ia(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && ia(
            n,
            a
          );
          break;
        case 30:
          oe(n, n.return), ia(
            n,
            a
          );
          break;
        case 7:
          oe(n, n.return);
        default:
          ia(
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function tn(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var a = e.alternate, u = t, s = e, c = s.flags, m = (n & 1) !== 0;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          tn(
            u,
            s,
            n
          ), xl(4, s);
          break;
        case 1:
          if (tn(
            u,
            s,
            n
          ), a = s, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (R) {
              Dt(a, a.return, R);
            }
          if (a = s, u = a.updateQueue, u !== null) {
            var T = a.stateNode;
            try {
              var C = u.shared.hiddenCallbacks;
              if (C !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < C.length; u++)
                  Hd(C[u], T);
            } catch (R) {
              Dt(a, a.return, R);
            }
          }
          m && c & 64 && Pm(s), hn(s, s.return);
          break;
        case 27:
          (n & 2) !== 0 && $m(s);
        case 5:
          s.tag !== 5 && s.tag !== 27 || Wm(s), tn(
            u,
            s,
            n
          ), m && a === null && c & 4 && Zr(s), hn(s, s.return);
          break;
        case 6:
          Wm(s);
          break;
        case 26:
          T = s.stateNode, s.memoizedState !== null || T === null || ee || qc(
            Ll(T.ownerDocument),
            s.type,
            T
          ), tn(
            u,
            s,
            n
          ), m && a === null && c & 4 && Zr(s), hn(s, s.return);
          break;
        case 12:
          tn(
            u,
            s,
            n
          );
          break;
        case 31:
          tn(
            u,
            s,
            n
          ), m && c & 4 && fy(u, s);
          break;
        case 13:
          tn(
            u,
            s,
            n
          ), m && c & 4 && hy(u, s);
          break;
        case 22:
          s.memoizedState === null && tn(
            u,
            s,
            n
          ), hn(s, s.return);
          break;
        case 30:
          tn(
            u,
            s,
            n
          ), hn(s, s.return);
          break;
        case 7:
          hn(s, s.return);
        default:
          tn(
            u,
            s,
            n
          );
      }
      e = e.sibling;
    }
  }
  function ic(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && ml(n));
  }
  function lc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ml(t));
  }
  function Ze(t, e, n, a) {
    var u = (n & 335544064) === n;
    if (e.subtreeFlags & (u ? 10262 : 10256))
      for (e = e.child; e !== null; )
        gy(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else u && iy(e);
  }
  function gy(t, e, n, a) {
    var u = (n & 335544064) === n;
    u && e.alternate === null && e.return !== null && e.return.alternate !== null && rs(e);
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ze(
          t,
          e,
          n,
          a
        ), s & 2048 && xl(9, e);
        break;
      case 1:
        Ze(
          t,
          e,
          n,
          a
        );
        break;
      case 3:
        Ze(
          t,
          e,
          n,
          a
        ), u && ec && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), s & 2048 && (s = null, e.alternate !== null && (s = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== s && (e.refCount++, s != null && ml(s)));
        break;
      case 12:
        if (s & 2048) {
          Ze(
            t,
            e,
            n,
            a
          ), s = e.stateNode;
          try {
            var c = e.memoizedProps, m = c.id, T = c.onPostCommit;
            typeof T == "function" && T(
              m,
              e.alternate === null ? "mount" : "update",
              s.passiveEffectDuration,
              -0
            );
          } catch (C) {
            Dt(e, e.return, C);
          }
        } else
          Ze(
            t,
            e,
            n,
            a
          );
        break;
      case 31:
        Ze(
          t,
          e,
          n,
          a
        );
        break;
      case 13:
        Ze(
          t,
          e,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        c = e.stateNode, m = e.alternate, e.memoizedState !== null ? (u && m !== null && m.memoizedState === null && rs(m), c._visibility & 2 ? Ze(
          t,
          e,
          n,
          a
        ) : zl(
          t,
          e
        )) : (u && m !== null && m.memoizedState !== null && rs(e), c._visibility & 2 ? Ze(
          t,
          e,
          n,
          a
        ) : (c._visibility |= 2, Mi(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), s & 2048 && ic(m, e);
        break;
      case 24:
        Ze(
          t,
          e,
          n,
          a
        ), s & 2048 && lc(e.alternate, e);
        break;
      case 30:
        u && (s = e.alternate, s !== null && (mn(s.child, !0), mn(e.child, !0))), Ze(
          t,
          e,
          n,
          a
        );
        break;
      default:
        Ze(
          t,
          e,
          n,
          a
        );
    }
  }
  function Mi(t, e, n, a, u) {
    for (u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var s = t, c = e, m = n, T = a, C = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Mi(
            s,
            c,
            m,
            T,
            u
          ), xl(8, c);
          break;
        case 23:
          break;
        case 22:
          var R = c.stateNode;
          c.memoizedState !== null ? R._visibility & 2 ? Mi(
            s,
            c,
            m,
            T,
            u
          ) : zl(
            s,
            c
          ) : (R._visibility |= 2, Mi(
            s,
            c,
            m,
            T,
            u
          )), u && C & 2048 && ic(
            c.alternate,
            c
          );
          break;
        case 24:
          Mi(
            s,
            c,
            m,
            T,
            u
          ), u && C & 2048 && lc(c.alternate, c);
          break;
        default:
          Mi(
            s,
            c,
            m,
            T,
            u
          );
      }
      e = e.sibling;
    }
  }
  function zl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, u = a.flags;
        switch (a.tag) {
          case 22:
            zl(n, a), u & 2048 && ic(
              a.alternate,
              a
            );
            break;
          case 24:
            zl(n, a), u & 2048 && lc(a.alternate, a);
            break;
          default:
            zl(n, a);
        }
        e = e.sibling;
      }
  }
  var ja = 8192;
  function Ya(t, e, n) {
    if (t.subtreeFlags & ja)
      for (t = t.child; t !== null; )
        vy(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function vy(t, e, n) {
    switch (t.tag) {
      case 26:
        Ya(
          t,
          e,
          n
        ), t.flags & ja && (t.memoizedState !== null ? NT(
          n,
          $e,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && Mg(n, t)));
        break;
      case 5:
        Ya(
          t,
          e,
          n
        ), t.flags & ja && (t = t.stateNode, (e & 335544128) === e && Mg(n, t));
        break;
      case 3:
      case 4:
        var a = $e;
        $e = Ll(t.stateNode.containerInfo), Ya(
          t,
          e,
          n
        ), $e = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = ja, ja = 16777216, Ya(
          t,
          e,
          n
        ), ja = a) : Ya(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & ja) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var u = t.stateNode;
          u.paired = null, Ve === null && (Ve = /* @__PURE__ */ new Map()), Ve.set(a, u);
        }
        Ya(
          t,
          e,
          n
        );
        break;
      default:
        Ya(
          t,
          e,
          n
        );
    }
  }
  function py(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function _l(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ne = a, Ty(
            a,
            t
          );
        }
      py(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Sy(t), t = t.sibling;
  }
  function Sy(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _l(t), t.flags & 2048 && aa(9, t, t.return);
        break;
      case 3:
        _l(t);
        break;
      case 12:
        _l(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ds(t)) : _l(t);
        break;
      default:
        _l(t);
    }
  }
  function ds(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ne = a, Ty(
            a,
            t
          );
        }
      py(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          aa(8, e, e.return), ds(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, ds(e));
          break;
        default:
          ds(e);
      }
      t = t.sibling;
    }
  }
  function Ty(t, e) {
    for (; ne !== null; ) {
      var n = ne;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          aa(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ml(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ne = a;
      else
        t: for (n = t; ne !== null; ) {
          a = ne;
          var u = a.sibling, s = a.return;
          if (ry(a), a === n) {
            ne = null;
            break t;
          }
          if (u !== null) {
            u.return = s, ne = u;
            break t;
          }
          ne = s;
        }
    }
  }
  var xS = {
    getCacheForType: function(t) {
      var e = le(Qt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return le(Qt).controller.signal;
    }
  }, OS = typeof WeakMap == "function" ? WeakMap : Map, Et = 0, _t = null, ht = null, mt = 0, Mt = 0, Ue = null, la = !1, Di = !1, uc = !1, Ln = 0, Yt = 0, ua = 0, qa = 0, ms = 0, Be = 0, Ci = 0, Nl = null, De = null, sc = !1, ys = 0, by = 0, gs = 1 / 0, vs = null, sa = null, Lt = 0, en = null, Ga = null, pn = 0, oc = 0, rc = null, Ey = null, xi = null, Oi = null, Ri = null, Vl = 0, ps = null;
  function we() {
    return (Et & 2) !== 0 && mt !== 0 ? mt & -mt : P.T !== null ? Sc() : Dh();
  }
  function Ay() {
    if (Be === 0)
      if ((mt & 536870912) === 0 || rt) {
        var t = hu;
        hu <<= 1, (hu & 3932160) === 0 && (hu = 262144), Be = t;
      } else Be = 536870912;
    return t = ue.current, t !== null && (t.flags |= 32), Be;
  }
  function zi(t, e) {
    if (e != null) {
      var n = t.stateNode, a = n.ref;
      a === null && (a = n.ref = ag(
        On(t.memoizedProps, n)
      )), Oi === null && (Oi = []), Oi.push(e.bind(null, a));
    }
  }
  function Ce(t, e, n) {
    (t === _t && (Mt === 2 || Mt === 9) || t.cancelPendingCommit !== null) && (_i(t, 0), oa(
      t,
      mt,
      Be,
      !1
    )), tl(t, n), ((Et & 2) === 0 || t !== _t) && (t === _t && ((Et & 2) === 0 && (qa |= n), Yt === 4 && oa(
      t,
      mt,
      Be,
      !1
    )), Sn(t));
  }
  function My(t, e, n) {
    if ((Et & 6) !== 0) throw Error(o(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || $i(t, e), u = a ? _S(t, e) : fc(t, e, !0), s = a;
    do {
      if (u === 0) {
        Di && !a && oa(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, s && !RS(n)) {
          u = fc(t, e, !1), s = !1;
          continue;
        }
        if (u === 2) {
          if (s = e, t.errorRecoveryDisabledLanes & s)
            var c = 0;
          else
            c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            e = c;
            t: {
              var m = t;
              u = Nl;
              var T = m.current.memoizedState.isDehydrated;
              if (T && (_i(m, c).flags |= 256), c = fc(
                m,
                c,
                !1
              ), c !== 2 && c !== 6) {
                if (uc && !T) {
                  m.errorRecoveryDisabledLanes |= s, qa |= s, u = 4;
                  break t;
                }
                s = De, De = u, s !== null && (De === null ? De = s : De.push.apply(
                  De,
                  s
                ));
              }
              u = c;
            }
            if (s = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          _i(t, 0), oa(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, s = u, s) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              oa(
                a,
                e,
                Be,
                !la
              );
              break t;
            case 2:
              De = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && (u = ys + 300 - xe(), 10 < u)) {
            if (oa(
              a,
              e,
              Be,
              !la
            ), mu(a, 0, !0) !== 0) break t;
            pn = e, a.timeoutHandle = zc(
              Dy.bind(
                null,
                a,
                n,
                De,
                vs,
                sc,
                e,
                Be,
                qa,
                Ci,
                la,
                s,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break t;
          }
          Dy(
            a,
            n,
            De,
            vs,
            sc,
            e,
            Be,
            qa,
            Ci,
            la,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Sn(t);
  }
  function Dy(t, e, n, a, u, s, c, m, T, C, R, N, M, O) {
    t.timeoutHandle = -1;
    var j = e.subtreeFlags, J = (s & 335544064) === s;
    if (N = null, (J || j & 8192 || (j & 16785408) === 16785408) && (N = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: rn
    }, Ve = null, vy(
      e,
      s,
      N
    ), J && (j = N, J = t.containerInfo, J = (J.nodeType === 9 ? J : J.ownerDocument).__reactViewTransition, J != null && (j.count++, j.waitingForViewTransition = !0, j = ql.bind(j), J.finished.then(j, j))), j = (s & 62914560) === s ? ys - xe() : (s & 4194048) === s ? by - xe() : 0, j = VT(
      N,
      j
    ), j !== null)) {
      pn = s, t.cancelPendingCommit = j(
        Vy.bind(
          null,
          t,
          e,
          s,
          n,
          a,
          u,
          c,
          m,
          T,
          C,
          R,
          N,
          null,
          M,
          O
        )
      ), oa(t, s, c, !C);
      return;
    }
    Vy(
      t,
      e,
      s,
      n,
      a,
      u,
      c,
      m,
      T,
      C,
      R,
      N
    );
  }
  function RS(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var u = n[a], s = u.getSnapshot;
          u = u.value;
          try {
            if (!_e(s(), u)) return !1;
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
  function oa(t, e, n, a) {
    e = Th(t, e), e &= ~ms, e &= ~qa, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var u = e; 0 < u; ) {
      var s = 31 - Re(u), c = 1 << s;
      a[s] = -1, u &= ~c;
    }
    n !== 0 && Eh(t, n, e);
  }
  function Ss() {
    return (Et & 6) === 0 ? (Ul(0), !1) : !0;
  }
  function cc() {
    if (ht !== null) {
      if (Mt === 0)
        var t = ht.return;
      else
        t = ht, Nn = Ra = null, pr(t), vi = null, vl = 0, t = ht;
      for (; t !== null; )
        Fm(t.alternate, t), t = t.return;
      ht = null;
    }
  }
  function _i(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, $S(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), pn = 0, cc(), _t = t, ht = n = zn(t.current, null), mt = e, Mt = 0, Ue = null, la = !1, Di = $i(t, e), uc = !1, Ci = Be = ms = qa = ua = Yt = 0, De = Nl = null, sc = !1, Ln = Th(t, e), xu(), n;
  }
  function Cy(t, e) {
    ut = null, P.H = Iu, e === gi || e === Lu ? (e = Vd(), Mt = 3) : e === lr ? (e = Vd(), Mt = 4) : Mt = e === Vr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ue = e, ht === null && (Yt = 1, $u(
      t,
      qe(e, t.current)
    ));
  }
  function xy() {
    var t = ue.current;
    return t === null ? !0 : (mt & 4194048) === mt ? me === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? t === me : !1;
  }
  function Oy() {
    var t = P.H;
    return P.H = Iu, t === null ? Iu : t;
  }
  function Ry() {
    var t = P.A;
    return P.A = xS, t;
  }
  function Ts() {
    Yt = 4, la || (mt & 4194048) !== mt && ue.current !== null || (Di = !0), (ua & 134217727) === 0 && (qa & 134217727) === 0 || _t === null || oa(
      _t,
      mt,
      Be,
      !1
    );
  }
  function fc(t, e, n) {
    var a = Et;
    Et |= 2;
    var u = Oy(), s = Ry();
    (_t !== t || mt !== e) && (vs = null, _i(t, e)), e = !1;
    var c = Yt;
    t: do
      try {
        if (Mt !== 0 && ht !== null) {
          var m = ht, T = Ue;
          switch (Mt) {
            case 8:
              cc(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ue.current === null && (e = !0);
              var C = Mt;
              if (Mt = 0, Ue = null, Ni(t, m, T, C), n && Di) {
                c = 0;
                break t;
              }
              break;
            default:
              C = Mt, Mt = 0, Ue = null, Ni(t, m, T, C);
          }
        }
        zS(), c = Yt;
        break;
      } catch (R) {
        Cy(t, R);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Nn = Ra = null, Et = a, P.H = u, P.A = s, ht === null && (_t = null, mt = 0, xu()), c;
  }
  function zS() {
    for (; ht !== null; ) zy(ht);
  }
  function _S(t, e) {
    var n = Et;
    Et |= 2;
    var a = Oy(), u = Ry();
    _t !== t || mt !== e ? (vs = null, gs = xe() + 500, _i(t, e)) : Di = $i(
      t,
      e
    );
    t: do
      try {
        if (Mt !== 0 && ht !== null) {
          e = ht;
          var s = Ue;
          e: switch (Mt) {
            case 1:
              Mt = 0, Ue = null, Ni(t, e, s, 1);
              break;
            case 2:
            case 9:
              if (_d(s)) {
                Mt = 0, Ue = null, _y(e);
                break;
              }
              e = function() {
                Mt !== 2 && Mt !== 9 || _t !== t || (Mt = 7), Sn(t);
              }, s.then(e, e);
              break t;
            case 3:
              Mt = 7;
              break t;
            case 4:
              Mt = 5;
              break t;
            case 7:
              _d(s) ? (Mt = 0, Ue = null, _y(e)) : (Mt = 0, Ue = null, Ni(t, e, s, 7));
              break;
            case 5:
              var c = null;
              switch (ht.tag) {
                case 26:
                  c = ht.memoizedState;
                case 5:
                case 27:
                  var m = ht;
                  if (c ? Eg(c) : m.stateNode.complete) {
                    Mt = 0, Ue = null;
                    var T = m.sibling;
                    if (T !== null) ht = T;
                    else {
                      var C = m.return;
                      C !== null ? (ht = C, bs(C)) : ht = null;
                    }
                    break e;
                  }
              }
              Mt = 0, Ue = null, Ni(t, e, s, 5);
              break;
            case 6:
              Mt = 0, Ue = null, Ni(t, e, s, 6);
              break;
            case 8:
              cc(), Yt = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        NS();
        break;
      } catch (R) {
        Cy(t, R);
      }
    while (!0);
    return Nn = Ra = null, P.H = a, P.A = u, Et = n, ht !== null ? 0 : (_t = null, mt = 0, xu(), Yt);
  }
  function NS() {
    for (; ht !== null && !Pp(); )
      zy(ht);
  }
  function zy(t) {
    var e = Km(t.alternate, t, Ln);
    t.memoizedProps = t.pendingProps, e === null ? bs(t) : ht = e;
  }
  function _y(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = jm(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          mt
        );
        break;
      case 11:
        e = jm(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          mt
        );
        break;
      case 5:
        pr(e);
        var a = e;
        a === te && (rt ? (Vu(a), a.tag === 5 && a.stateNode != null && (Bt = a.stateNode)) : (Vu(a), rt = !0));
      default:
        Fm(n, e), e = ht = Td(e, Ln), e = Km(n, e, Ln);
    }
    t.memoizedProps = t.pendingProps, e === null ? bs(t) : ht = e;
  }
  function Ni(t, e, n, a) {
    Nn = Ra = null, pr(e), vi = null, vl = 0;
    var u = e.return;
    try {
      if (SS(
        t,
        u,
        e,
        n,
        mt
      )) {
        Yt = 1, $u(
          t,
          qe(n, t.current)
        ), ht = null;
        return;
      }
    } catch (s) {
      if (u !== null) throw ht = u, s;
      Yt = 1, $u(
        t,
        qe(n, t.current)
      ), ht = null;
      return;
    }
    e.flags & 32768 ? (rt || a === 1 ? t = !0 : Di || (mt & 536870912) !== 0 ? t = !1 : (la = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ue.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ny(e, t)) : bs(e);
  }
  function bs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Ny(
          e,
          la
        );
        return;
      }
      t = e.return;
      var n = AS(
        e.alternate,
        e,
        Ln
      );
      if (n !== null) {
        ht = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        ht = e;
        return;
      }
      ht = e = t;
    } while (e !== null);
    Yt === 0 && (Yt = 5);
  }
  function Ny(t, e) {
    do {
      var n = MS(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, ht = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        ht = t;
        return;
      }
      ht = t = n;
    } while (t !== null);
    Yt = 6, ht = null;
  }
  function Vy(t, e, n, a, u, s, c, m, T, C, R, N) {
    t.cancelPendingCommit = null;
    do
      Es();
    while (Lt !== 0);
    if ((Et & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      t === _t && (ht = _t = null, mt = 0), Ga = e, en = t, pn = n, rc = u, Ey = a, VS(
        t,
        e,
        n,
        c,
        m,
        T,
        N
      );
    }
  }
  function VS(t, e, n, a, u, s, c) {
    var m = e.lanes | e.childLanes;
    if (oc = m, m |= Ko, l1(
      t,
      n,
      m,
      a,
      u,
      s
    ), Oi = null, (n & 335544064) === n ? (Ri = sS(t), a = 10262) : (Ri = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, jS(cu, function() {
      return yc(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), ss = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = P.T, P.T = null, u = at.p, at.p = 2, s = Et, Et |= 4;
      try {
        DS(t, e, n);
      } finally {
        Et = s, at.p = u, P.T = a;
      }
    }
    Lt = 1, ss ? xi = lT(
      c,
      t.containerInfo,
      Ri,
      hc,
      dc,
      BS,
      mc,
      yc,
      US
    ) : (hc(), dc(), mc());
  }
  function US(t) {
    if (Lt !== 0) {
      var e = en.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function BS() {
    Lt === 3 && (Lt = 0, yy(Ga, en), Lt = 4);
  }
  function hc() {
    if (Lt === 1) {
      Lt = 0;
      var t = en, e = Ga, n = pn, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = P.T, P.T = null;
        var u = at.p;
        at.p = 2;
        var s = Et;
        Et |= 4;
        try {
          Rl = cs = !1, dy(e, t, n), n = xc;
          var c = cd(t.containerInfo), m = n.focusedElem, T = n.selectionRange;
          if (c !== m && m && m.ownerDocument && rd(
            m.ownerDocument.documentElement,
            m
          )) {
            if (T !== null && qo(m)) {
              var C = T.start, R = T.end;
              if (R === void 0 && (R = C), "selectionStart" in m)
                m.selectionStart = C, m.selectionEnd = Math.min(
                  R,
                  m.value.length
                );
              else {
                var N = m.ownerDocument || document, M = N && N.defaultView || window;
                if (M.getSelection) {
                  var O = M.getSelection(), j = m.textContent.length, J = Math.min(T.start, j), st = T.end === void 0 ? J : Math.min(T.end, j);
                  !O.extend && J > st && (c = st, st = J, J = c);
                  var D = od(
                    m,
                    J
                  ), E = od(
                    m,
                    st
                  );
                  if (D && E && (O.rangeCount !== 1 || O.anchorNode !== D.node || O.anchorOffset !== D.offset || O.focusNode !== E.node || O.focusOffset !== E.offset)) {
                    var x = N.createRange();
                    x.setStart(D.node, D.offset), O.removeAllRanges(), J > st ? (O.addRange(x), O.extend(E.node, E.offset)) : (x.setEnd(E.node, E.offset), O.addRange(x));
                  }
                }
              }
            }
            for (N = [], O = m; O = O.parentNode; )
              O.nodeType === 1 && N.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < N.length; m++) {
              var _ = N[m];
              _.element.scrollLeft = _.left, _.element.scrollTop = _.top;
            }
          }
          Yi = !!Cc, xc = Cc = null;
        } finally {
          Et = s, at.p = u, P.T = a;
        }
      }
      t.current = e, Lt = 2;
    }
  }
  function dc() {
    if (Lt === 2) {
      Lt = 0;
      var t = en, e = Ga, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = P.T, P.T = null;
        var a = at.p;
        at.p = 2;
        var u = Et;
        Et |= 4;
        try {
          sy(t, e.alternate, e);
        } finally {
          Et = u, at.p = a, P.T = n;
        }
      }
      Lt = 3;
    }
  }
  function mc() {
    if (Lt === 4 || Lt === 3) {
      Lt = 0;
      var t = xi;
      xi = null, kp();
      var e = en, n = Ga, a = pn, u = Ey, s = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & s) !== 0 || (n.flags & s) !== 0 ? Lt = 5 : (Lt = 0, Ga = en = null, Uy(e, e.pendingLanes)), s = e.pendingLanes, s === 0 && (sa = null), Ao(a), n = n.stateNode, Oe && typeof Oe.onCommitFiberRoot == "function")
        try {
          Oe.onCommitFiberRoot(
            Ii,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        n = P.T, s = at.p, at.p = 2, P.T = null;
        try {
          for (var c = e.onRecoverableError, m = 0; m < u.length; m++) {
            var T = u[m];
            c(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          P.T = n, at.p = s;
        }
      }
      if (u = Oi, c = Ri, Ri = null, u !== null && (Oi = null, c === null && (c = []), t !== null))
        for (T = 0; T < u.length; T++)
          n = (0, u[T])(
            c
          ), n !== void 0 && t.finished.finally(n);
      (pn & 3) !== 0 && Es(), Sn(e), s = e.pendingLanes, (a & 261930) !== 0 && (s & 42) !== 0 ? e === ps ? Vl++ : (Vl = 0, ps = e) : (Vl = 0, ps = null), Ul(0);
    }
  }
  function Uy(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ml(e)));
  }
  function Es() {
    return xi !== null && (xi.skipTransition(), xi = null), hc(), dc(), mc(), yc();
  }
  function yc() {
    if (Lt !== 5) return !1;
    var t = en, e = oc;
    oc = 0;
    var n = Ao(pn), a = P.T, u = at.p;
    try {
      at.p = 32 > n ? 32 : n, P.T = null, n = rc, rc = null;
      var s = en, c = pn;
      if (Lt = 0, Ga = en = null, pn = 0, (Et & 6) !== 0) throw Error(o(331));
      var m = Et;
      if (Et |= 4, Sy(s.current), gy(
        s,
        s.current,
        c,
        n
      ), Et = m, Ul(0, !1), Oe && typeof Oe.onPostCommitFiberRoot == "function")
        try {
          Oe.onPostCommitFiberRoot(Ii, s);
        } catch {
        }
      return !0;
    } finally {
      at.p = u, P.T = a, Uy(t, e);
    }
  }
  function By(t, e, n) {
    e = qe(n, e), e = Nr(t.stateNode, e, 2), t = $n(t, e, 2), t !== null && (tl(t, 2), Sn(t));
  }
  function Dt(t, e, n) {
    if (t.tag === 3)
      By(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          By(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (sa === null || !sa.has(a))) {
            t = qe(n, t), n = _m(2), a = $n(e, n, 2), a !== null && (Nm(
              n,
              a,
              e,
              t
            ), tl(a, 2), Sn(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function gc(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new OS();
      var u = /* @__PURE__ */ new Set();
      a.set(e, u);
    } else
      u = a.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(e, u));
    u.has(n) || (uc = !0, u.add(n), t = wS.bind(null, t, e, n), e.then(t, t));
  }
  function wS(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, _t === t && (mt & n) === n && ((Yt === 4 || Yt === 3 && (mt & 62914560) === mt && 300 > xe() - ys) && (Et & 2) === 0 ? _i(t, 0) : ms |= n, Ci === mt && (Ci = 0)), Sn(t);
  }
  function wy(t, e) {
    e === 0 && (e = bh()), t = Ca(t, e), t !== null && (tl(t, e), Sn(t));
  }
  function HS(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), wy(t, n);
  }
  function LS(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(e), wy(t, n);
  }
  function jS(t, e) {
    return So(t, e);
  }
  var Vi = null, Ui = null, vc = !1, As = !1, pc = !1, ra = 0;
  function Sn(t) {
    t !== Ui && t.next === null && (Ui === null ? Vi = Ui = t : Ui = Ui.next = t), As = !0, vc || (vc = !0, qS());
  }
  function Ul(t, e) {
    if (!pc && As) {
      pc = !0;
      do
        for (var n = !1, a = Vi; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var s = 0;
            else {
              var c = a.suspendedLanes, m = a.pingedLanes;
              s = (1 << 31 - Re(42 | t) + 1) - 1, s &= u & ~(c & ~m), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, Yy(a, s));
          } else
            s = mt, s = mu(
              a,
              a === _t ? s : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (s & 3) === 0 || $i(a, s) || (n = !0, Yy(a, s));
          a = a.next;
        }
      while (n);
      pc = !1;
    }
  }
  function YS() {
    Hy();
  }
  function Hy() {
    As = vc = !1;
    var t = 0;
    ra !== 0 && IS() && (t = ra);
    for (var e = xe(), n = null, a = Vi; a !== null; ) {
      var u = a.next, s = Ly(a, e);
      s === 0 ? (a.next = null, n === null ? Vi = u : n.next = u, u === null && (Ui = n)) : (n = a, (t !== 0 || (s & 3) !== 0) && (As = !0)), a = u;
    }
    Lt !== 0 && Lt !== 5 || Ul(t), ra !== 0 && (ra = 0);
  }
  function Ly(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var c = 31 - Re(s), m = 1 << c, T = u[c];
      T === -1 ? ((m & n) === 0 || (m & a) !== 0) && (u[c] = i1(m, e)) : T <= e && (t.expiredLanes |= m), s &= ~m;
    }
    if (e = _t, n = mt, n = mu(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Mt === 2 || Mt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && To(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || $i(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && To(a), Ao(n)) {
        case 2:
        case 8:
          n = ph;
          break;
        case 32:
          n = cu;
          break;
        case 268435456:
          n = Sh;
          break;
        default:
          n = cu;
      }
      return a = jy.bind(null, t), n = So(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && To(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function jy(t, e) {
    if (Lt !== 0 && Lt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Es() && t.callbackNode !== n)
      return null;
    var a = mt;
    return a = mu(
      t,
      t === _t ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (My(t, a, e), Ly(t, xe()), t.callbackNode != null && t.callbackNode === n ? jy.bind(null, t) : null);
  }
  function Yy(t, e) {
    if (Es()) return null;
    My(t, e, !0);
  }
  function qS() {
    tT(function() {
      (Et & 6) !== 0 ? So(
        vh,
        YS
      ) : Hy();
    });
  }
  function Sc() {
    if (ra === 0) {
      var t = Na;
      t === 0 && (t = fu, fu <<= 1, (fu & 261888) === 0 && (fu = 256)), ra = t;
    }
    return ra;
  }
  function qy(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Su(t);
  }
  function GS(t, e, n, a, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var s = qy(
        (u[be] || null).action
      ), c = a.submitter;
      c && (e = (e = c[be] || null) ? qy(e.formAction) : c.getAttribute("formAction"), e !== null && (s = e, c = null));
      var m = new Au(
        "action",
        "action",
        null,
        a,
        u
      );
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (ra !== 0) {
                  var T = new FormData(u, c);
                  xr(
                    n,
                    {
                      pending: !0,
                      data: T,
                      method: u.method,
                      action: s
                    },
                    null,
                    T
                  );
                }
              } else
                typeof s == "function" && (m.preventDefault(), T = new FormData(u, c), xr(
                  n,
                  {
                    pending: !0,
                    data: T,
                    method: u.method,
                    action: s
                  },
                  s,
                  T
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Tc = 0; Tc < Zo.length; Tc++) {
    var bc = Zo[Tc], XS = bc.toLowerCase(), QS = bc[0].toUpperCase() + bc.slice(1);
    We(
      XS,
      "on" + QS
    );
  }
  We(dd, "onAnimationEnd"), We(md, "onAnimationIteration"), We(yd, "onAnimationStart"), We("dblclick", "onDoubleClick"), We("focusin", "onFocus"), We("focusout", "onBlur"), We($1, "onTransitionRun"), We(tS, "onTransitionStart"), We(eS, "onTransitionCancel"), We(gd, "onTransitionEnd"), ni("onMouseEnter", ["mouseout", "mouseover"]), ni("onMouseLeave", ["mouseout", "mouseover"]), ni("onPointerEnter", ["pointerout", "pointerover"]), ni("onPointerLeave", ["pointerout", "pointerover"]), Aa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Aa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Aa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Aa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Aa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Aa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Bl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ZS = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bl)
  );
  function Gy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], u = a.event;
      a = a.listeners;
      t: {
        var s = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var m = a[c], T = m.instance, C = m.currentTarget;
            if (m = m.listener, T !== s && u.isPropagationStopped())
              break t;
            s = m, u.currentTarget = C;
            try {
              s(u);
            } catch (R) {
              Cu(R);
            }
            u.currentTarget = null, s = T;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (m = a[c], T = m.instance, C = m.currentTarget, m = m.listener, T !== s && u.isPropagationStopped())
              break t;
            s = m, u.currentTarget = C;
            try {
              s(u);
            } catch (R) {
              Cu(R);
            }
            u.currentTarget = null, s = T;
          }
      }
    }
  }
  function dt(t, e) {
    var n = e[xh];
    n === void 0 && (n = e[xh] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (Xy(e, t, 2, !1), n.add(a));
  }
  function Ec(t, e, n) {
    var a = 0;
    e && (a |= 4), Xy(
      n,
      t,
      a,
      e
    );
  }
  var Ms = "_reactListening" + Math.random().toString(36).slice(2);
  function Ac(t) {
    if (!t[Ms]) {
      t[Ms] = !0, zh.forEach(function(n) {
        n !== "selectionchange" && (ZS.has(n) || Ec(n, !1, t), Ec(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ms] || (e[Ms] = !0, Ec("selectionchange", !1, e));
    }
  }
  function Xy(t, e, n, a) {
    switch (Ng(e)) {
      case 2:
        var u = HT;
        break;
      case 8:
        u = LT;
        break;
      default:
        u = Xc;
    }
    n = u.bind(
      null,
      e,
      n,
      t
    ), u = void 0, !_o || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), a ? u !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: u
    }) : t.addEventListener(e, n, !0) : u !== void 0 ? t.addEventListener(e, n, {
      passive: u
    }) : t.addEventListener(e, n, !1);
  }
  function Mc(t, e, n, a, u) {
    var s = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var m = a.stateNode.containerInfo;
          if (m === u) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var T = c.tag;
              if ((T === 3 || T === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; m !== null; ) {
            if (c = Ea(m), c === null) return;
            if (T = c.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              a = s = c;
              continue t;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    Xh(function() {
      var C = s, R = Ro(n), N = [];
      t: {
        var M = vd.get(t);
        if (M !== void 0) {
          var O = Au, j = t;
          switch (t) {
            case "keypress":
              if (bu(n) === 0) break t;
            case "keydown":
            case "keyup":
              O = R1;
              break;
            case "focusin":
              j = "focus", O = Bo;
              break;
            case "focusout":
              j = "blur", O = Bo;
              break;
            case "beforeblur":
            case "afterblur":
              O = Bo;
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
              O = Kh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = v1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = U1;
              break;
            case dd:
            case md:
            case yd:
              O = T1;
              break;
            case gd:
              O = w1;
              break;
            case "scroll":
            case "scrollend":
              O = y1;
              break;
            case "wheel":
              O = L1;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = E1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Fh;
              break;
            case "submit":
              O = N1;
              break;
            case "toggle":
            case "beforetoggle":
              O = Y1;
          }
          var J = (e & 4) !== 0, st = !J && (t === "scroll" || t === "scrollend"), D = J ? M !== null ? M + "Capture" : null : M;
          J = [];
          for (var E = C, x; E !== null; ) {
            var _ = E;
            if (x = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || x === null || D === null || (_ = al(E, D), _ != null && J.push(
              wl(E, _, x)
            )), st) break;
            E = E.return;
          }
          0 < J.length && (M = new O(
            M,
            j,
            null,
            n,
            R
          ), N.push({ event: M, listeners: J }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (O = t === "mouseover" || t === "pointerover", M = t === "mouseout" || t === "pointerout", O && n !== Oo && (j = n.relatedTarget || n.fromElement) && (Ea(j) || j[$a]))
            break t;
          (M || O) && (j = R.window === R ? R : (O = R.ownerDocument) ? O.defaultView || O.parentWindow : window, M ? (O = n.relatedTarget || n.toElement, M = C, O = O ? Ea(O) : null, O !== null && (st = d(O), J = O.tag, O !== st || J !== 5 && J !== 27 && J !== 6) && (O = null)) : (M = null, O = C), M !== O && (J = Kh, _ = "onMouseLeave", D = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && (J = Fh, _ = "onPointerLeave", D = "onPointerEnter", E = "pointer"), st = M == null ? j : nl(M), x = O == null ? j : nl(O), j = new J(
            _,
            E + "leave",
            M,
            n,
            R
          ), j.target = st, j.relatedTarget = x, _ = null, Ea(R) === C && (J = new J(
            D,
            E + "enter",
            O,
            n,
            R
          ), J.target = x, J.relatedTarget = st, _ = J), st = _, J = M && O ? ct(
            M,
            O,
            KS
          ) : null, M !== null && Qy(
            N,
            j,
            M,
            J,
            !1
          ), O !== null && st !== null && Qy(
            N,
            st,
            O,
            J,
            !0
          )));
        }
        t: {
          if (M = C ? nl(C) : window, O = M.nodeName && M.nodeName.toLowerCase(), O === "select" || O === "input" && M.type === "file")
            var Q = nd;
          else if (td(M))
            if (ad)
              Q = k1;
            else {
              Q = F1;
              var yt = J1;
            }
          else
            O = M.nodeName, !O || O.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? C && xo(C.elementType) && (Q = nd) : Q = P1;
          if (Q && (Q = Q(t, C))) {
            ed(
              N,
              Q,
              n,
              R
            );
            break t;
          }
          yt && yt(t, M, C);
        }
        switch (yt = C ? nl(C) : window, t) {
          case "focusin":
            (td(yt) || yt.contentEditable === "true") && (oi = yt, Go = C, fl = null);
            break;
          case "focusout":
            fl = Go = oi = null;
            break;
          case "mousedown":
            Xo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xo = !1, fd(N, n, R);
            break;
          case "selectionchange":
            if (I1) break;
          case "keydown":
          case "keyup":
            fd(N, n, R);
        }
        var k;
        if (Ho)
          t: {
            switch (t) {
              case "compositionstart":
                var tt = "onCompositionStart";
                break t;
              case "compositionend":
                tt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                tt = "onCompositionUpdate";
                break t;
            }
            tt = void 0;
          }
        else
          si ? Ih(t, n) && (tt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (tt = "onCompositionStart");
        tt && (Ph && n.locale !== "ko" && (si || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && si && (k = Qh()) : (Qn = R, No = "value" in Qn ? Qn.value : Qn.textContent, si = !0)), yt = Ds(C, tt), 0 < yt.length && (tt = new Jh(
          tt,
          t,
          null,
          n,
          R
        ), N.push({ event: tt, listeners: yt }), k ? tt.data = k : (k = $h(n), k !== null && (tt.data = k)))), (k = G1 ? X1(t, n) : Q1(t, n)) && (tt = Ds(C, "onBeforeInput"), 0 < tt.length && (yt = new Jh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          R
        ), N.push({
          event: yt,
          listeners: tt
        }), yt.data = k)), GS(
          N,
          t,
          C,
          n,
          R
        );
      }
      Gy(N, e);
    });
  }
  function wl(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Ds(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var u = t, s = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || s === null || (u = al(t, n), u != null && a.unshift(
        wl(t, u, s)
      ), u = al(t, e), u != null && a.push(
        wl(t, u, s)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function KS(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Qy(t, e, n, a, u) {
    for (var s = e._reactName, c = []; n !== null && n !== a; ) {
      var m = n, T = m.alternate, C = m.stateNode;
      if (m = m.tag, T !== null && T === a) break;
      m !== 5 && m !== 26 && m !== 27 || C === null || (T = C, u ? (C = al(n, s), C != null && c.unshift(
        wl(n, C, T)
      )) : u || (C = al(n, s), C != null && c.push(
        wl(n, C, T)
      ))), n = n.return;
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var JS = /\r\n?/g, FS = /\u0000|\uFFFD/g;
  function Zy(t) {
    return (typeof t == "string" ? t : "" + t).replace(JS, `
`).replace(FS, "");
  }
  function Ky(t, e) {
    return e = Zy(e), Zy(t) === e;
  }
  function Ct(t, e, n, a, u, s) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          e === "body" || e === "textarea" && a === "" || ii(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && ii(t, "" + a);
        else return;
        break;
      case "className":
        pu(t, "class", a);
        break;
      case "tabIndex":
        pu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        pu(t, n, a);
        break;
      case "style":
        qh(t, a, s);
        return;
      case "data":
        if (e !== "object") {
          pu(t, "data", a);
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
        a = Su(a), t.setAttribute(n, a);
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
          typeof s == "function" && (n === "formAction" ? (e !== "input" && Ct(t, e, "name", u.name, u, null), Ct(
            t,
            e,
            "formEncType",
            u.formEncType,
            u,
            null
          ), Ct(
            t,
            e,
            "formMethod",
            u.formMethod,
            u,
            null
          ), Ct(
            t,
            e,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (Ct(t, e, "encType", u.encType, u, null), Ct(t, e, "method", u.method, u, null), Ct(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Su(a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = rn);
        return;
      case "onScroll":
        a != null && dt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && dt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (u.children != null) throw Error(o(60));
            s?.__html !== n && (t.innerHTML = n);
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
        n = Su(a), t.setAttributeNS(
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
        dt("beforetoggle", t), dt("toggle", t), vu(t, "popover", a);
        break;
      case "xlinkActuate":
        Cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Cn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Cn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Cn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Cn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        vu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = d1.get(n) || n, vu(t, n, a);
        else return;
    }
    Tt = !0;
  }
  function Dc(t, e, n, a, u, s) {
    switch (n) {
      case "style":
        qh(t, a, s);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (u.children != null) throw Error(o(60));
            s?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") ii(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          ii(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && dt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && dt("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = rn);
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
        if (!_h.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), s = n.slice(2, u ? n.length - 7 : void 0), e = t[be] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(s, e, u), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(s, a, u);
              break t;
            }
            Tt = !0, n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : vu(t, n, a);
          }
        return;
    }
    Tt = !0;
  }
  function re(t, e, n) {
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
        dt("error", t), dt("load", t);
        var a = !1, u = !1, s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var c = n[s];
            if (c != null)
              switch (s) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Ct(t, e, s, c, n, null);
              }
          }
        u && Ct(t, e, "srcSet", n.srcSet, n, null), a && Ct(t, e, "src", n.src, n, null);
        return;
      case "input":
        dt("invalid", t);
        var m = s = c = u = null, T = null, C = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var R = n[a];
            if (R != null)
              switch (a) {
                case "name":
                  u = R;
                  break;
                case "type":
                  c = R;
                  break;
                case "checked":
                  T = R;
                  break;
                case "defaultChecked":
                  C = R;
                  break;
                case "value":
                  s = R;
                  break;
                case "defaultValue":
                  m = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(o(137, e));
                  break;
                default:
                  Ct(t, e, a, R, n, null);
              }
          }
        Hh(
          t,
          s,
          m,
          T,
          C,
          c,
          u,
          !1
        );
        return;
      case "select":
        dt("invalid", t), a = c = s = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (m = n[u], m != null))
            switch (u) {
              case "value":
                s = m;
                break;
              case "defaultValue":
                c = m;
                break;
              case "multiple":
                a = m;
              default:
                Ct(t, e, u, m, n, null);
            }
        e = s, n = c, t.multiple = !!a, e != null ? ai(t, !!a, e, !1) : n != null && ai(t, !!a, n, !0);
        return;
      case "textarea":
        dt("invalid", t), s = u = a = null;
        for (c in n)
          if (n.hasOwnProperty(c) && (m = n[c], m != null))
            switch (c) {
              case "value":
                a = m;
                break;
              case "defaultValue":
                u = m;
                break;
              case "children":
                s = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(o(91));
                break;
              default:
                Ct(t, e, c, m, n, null);
            }
        jh(t, a, u, s);
        return;
      case "option":
        for (T in n)
          n.hasOwnProperty(T) && (a = n[T], a != null) && (T === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Ct(t, e, T, a, n, null));
        return;
      case "dialog":
        dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Bl.length; a++)
          dt(Bl[a], t);
        break;
      case "image":
        dt("error", t), dt("load", t);
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        dt("error", t), dt("load", t);
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
                throw Error(o(137, e));
              default:
                Ct(t, e, C, a, n, null);
            }
        return;
      default:
        if (xo(e)) {
          for (R in n)
            n.hasOwnProperty(R) && (a = n[R], a !== void 0 && Dc(
              t,
              e,
              R,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && (a = n[m], a != null && Ct(t, e, m, a, n, null));
  }
  var PS = {};
  function kS(t, e, n, a) {
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
        var u = null, s = null, c = null, m = null, T = null, C = null, R = null;
        for (O in n) {
          var N = n[O];
          if (n.hasOwnProperty(O) && N != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = N;
              default:
                a.hasOwnProperty(O) || Ct(t, e, O, null, a, N);
            }
        }
        for (var M in a) {
          var O = a[M];
          if (N = n[M], a.hasOwnProperty(M) && (O != null || N != null))
            switch (M) {
              case "type":
                O !== N && (Tt = !0), s = O;
                break;
              case "name":
                O !== N && (Tt = !0), u = O;
                break;
              case "checked":
                O !== N && (Tt = !0), C = O;
                break;
              case "defaultChecked":
                O !== N && (Tt = !0), R = O;
                break;
              case "value":
                O !== N && (Tt = !0), c = O;
                break;
              case "defaultValue":
                O !== N && (Tt = !0), m = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, e));
                break;
              default:
                O !== N && Ct(
                  t,
                  e,
                  M,
                  O,
                  a,
                  N
                );
            }
        }
        Do(
          t,
          c,
          m,
          T,
          C,
          R,
          s,
          u
        );
        return;
      case "select":
        O = c = m = M = null;
        for (s in n)
          if (T = n[s], n.hasOwnProperty(s) && T != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                O = T;
              default:
                a.hasOwnProperty(s) || Ct(
                  t,
                  e,
                  s,
                  null,
                  a,
                  T
                );
            }
        for (u in a)
          if (s = a[u], T = n[u], a.hasOwnProperty(u) && (s != null || T != null))
            switch (u) {
              case "value":
                s !== T && (Tt = !0), M = s;
                break;
              case "defaultValue":
                s !== T && (Tt = !0), m = s;
                break;
              case "multiple":
                s !== T && (Tt = !0), c = s;
              default:
                s !== T && Ct(
                  t,
                  e,
                  u,
                  s,
                  a,
                  T
                );
            }
        e = m, n = c, a = O, M != null ? ai(t, !!n, M, !1) : !!a != !!n && (e != null ? ai(t, !!n, e, !0) : ai(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        O = M = null;
        for (m in n)
          if (u = n[m], n.hasOwnProperty(m) && u != null && !a.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ct(t, e, m, null, a, u);
            }
        for (c in a)
          if (u = a[c], s = n[c], a.hasOwnProperty(c) && (u != null || s != null))
            switch (c) {
              case "value":
                u !== s && (Tt = !0), M = u;
                break;
              case "defaultValue":
                u !== s && (Tt = !0), O = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== s && Ct(t, e, c, u, a, s);
            }
        Lh(t, M, O);
        return;
      case "option":
        for (var j in n)
          M = n[j], n.hasOwnProperty(j) && M != null && !a.hasOwnProperty(j) && (j === "selected" ? t.selected = !1 : Ct(
            t,
            e,
            j,
            null,
            a,
            M
          ));
        for (T in a)
          M = a[T], O = n[T], a.hasOwnProperty(T) && M !== O && (M != null || O != null) && (T === "selected" ? (M !== O && (Tt = !0), t.selected = M && typeof M != "function" && typeof M != "symbol") : Ct(
            t,
            e,
            T,
            M,
            a,
            O
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
        for (var J in n)
          M = n[J], n.hasOwnProperty(J) && M != null && !a.hasOwnProperty(J) && Ct(t, e, J, null, a, M);
        for (C in a)
          if (M = a[C], O = n[C], a.hasOwnProperty(C) && M !== O && (M != null || O != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(o(137, e));
                break;
              default:
                Ct(
                  t,
                  e,
                  C,
                  M,
                  a,
                  O
                );
            }
        return;
      default:
        if (xo(e)) {
          for (var st in n)
            M = n[st], n.hasOwnProperty(st) && M !== void 0 && !a.hasOwnProperty(st) && Dc(
              t,
              e,
              st,
              void 0,
              a,
              M
            );
          for (R in a)
            M = a[R], O = n[R], !a.hasOwnProperty(R) || M === O || M === void 0 && O === void 0 || Dc(
              t,
              e,
              R,
              M,
              a,
              O
            );
          return;
        }
    }
    for (var D in n)
      M = n[D], n.hasOwnProperty(D) && M != null && !a.hasOwnProperty(D) && Ct(t, e, D, null, a, M);
    for (N in a)
      M = a[N], O = n[N], !a.hasOwnProperty(N) || M === O || M == null && O == null || Ct(t, e, N, M, a, O);
  }
  function Jy(t) {
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
  function WS() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var u = n[a], s = u.transferSize, c = u.initiatorType, m = u.duration;
        if (s && m && Jy(c)) {
          for (c = 0, m = u.responseEnd, a += 1; a < n.length; a++) {
            var T = n[a], C = T.startTime;
            if (C > m) break;
            var R = T.transferSize, N = T.initiatorType;
            R && Jy(N) && (T = T.responseEnd, c += R * (T < m ? 1 : (m - C) / (T - C)));
          }
          if (--a, e += 8 * (s + c) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Cc = null, xc = null;
  function Hl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Fy(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Py(t, e) {
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
  function ky(t, e, n, a) {
    return n = Hl(
      n
    ).createElement(t), n[ie] = a, n[be] = e, re(n, t, e), $t(n), n;
  }
  function Oc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = null;
  function IS() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Rc ? !1 : (Rc = t, !0) : (Rc = null, !1);
  }
  var zc = typeof setTimeout == "function" ? setTimeout : void 0, $S = typeof clearTimeout == "function" ? clearTimeout : void 0, Wy = typeof Promise == "function" ? Promise : void 0, Iy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : zc, tT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wy < "u" ? function(t) {
    return Wy.resolve(null).then(t).catch(eT);
  } : zc;
  function eT(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ca(t) {
    return t === "head";
  }
  function $y(t, e) {
    var n = e, a = 0;
    do {
      var u = n.nextSibling;
      if (t.removeChild(n), u && u.nodeType === 8)
        if (n = u.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(u), qi(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          Lc(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, Lc(n);
          for (var s = n.firstChild; s; ) {
            var c = s.nextSibling, m = s.nodeName;
            s[el] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = c;
          }
        } else
          n === "body" && Lc(t.ownerDocument.body);
      n = u;
    } while (n);
    qi(e);
  }
  function tg(t, e) {
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
  function eg(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var a = 1;
      else
        for (var u = a = 0; u < e.length; u++) {
          var s = e[u];
          0 < s.width && 0 < s.height && a++;
        }
      a === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function ng(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function nT(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function _c(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return nT(e, n, t);
  }
  function aT(t) {
    return t.documentElement.clientHeight;
  }
  function iT(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function lT(t, e, n, a, u, s, c, m, T) {
    var C = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var R = C.startViewTransition({
        update: function() {
          var M = C.defaultView, O = M.navigation && M.navigation.transition, j = C.fonts.status;
          a();
          var J = [];
          if (j === "loaded" && (aT(C), C.fonts.status === "loading" && J.push(C.fonts.ready)), j = J.length, t !== null)
            for (var st = t.suspenseyImages, D = 0, E = 0; E < st.length; E++) {
              var x = st[E];
              if (!x.complete) {
                var _ = x.getBoundingClientRect();
                if (0 < _.bottom && 0 < _.right && _.top < M.innerHeight && _.left < M.innerWidth) {
                  if (D += Ag(x), D > Os) {
                    J.length = j;
                    break;
                  }
                  x = new Promise(
                    iT.bind(x)
                  ), J.push(x);
                }
              }
            }
          if (0 < J.length)
            return M = Promise.race([
              Promise.all(J),
              new Promise(function(Q) {
                return setTimeout(Q, 500);
              })
            ]).then(u, u), (O ? Promise.allSettled([O.finished, M]) : M).then(s, s);
          if (u(), O)
            return O.finished.then(
              s,
              s
            );
          s();
        },
        types: n
      });
      C.__reactViewTransition = R;
      var N = [];
      return R.ready.then(
        function() {
          for (var M = C.documentElement.getAnimations({
            subtree: !0
          }), O = 0; O < M.length; O++) {
            var j = M[O], J = j.effect, st = J.pseudoElement;
            if (st != null && st.startsWith("::view-transition")) {
              N.push(j), j = J.getKeyframes();
              for (var D = st = void 0, E = !0, x = 0; x < j.length; x++) {
                var _ = j[x], Q = _.width;
                if (st === void 0) st = Q;
                else if (st !== Q) {
                  E = !1;
                  break;
                }
                if (Q = _.height, D === void 0) D = Q;
                else if (D !== Q) {
                  E = !1;
                  break;
                }
                delete _.width, delete _.height, _.transform === "none" && delete _.transform;
              }
              E && st !== void 0 && D !== void 0 && (J.setKeyframes(j), E = getComputedStyle(
                J.target,
                J.pseudoElement
              ), E.width !== st || E.height !== D) && (E = j[0], E.width = st, E.height = D, E = j[j.length - 1], E.width = st, E.height = D, J.setKeyframes(j));
            }
          }
          c();
        },
        function(M) {
          C.__reactViewTransition === R && (C.__reactViewTransition = null);
          try {
            typeof M == "object" && M !== null && M.name === "InvalidStateError" && (M.message === "View transition was skipped because document visibility state is hidden." || M.message === "Skipping view transition because document visibility state has become hidden." || M.message === "Skipping view transition because viewport size changed." || M.message === "Transition was aborted because of invalid state") && (M = null), M !== null && T(M);
          } finally {
            a(), u(), c();
          }
        }
      ), R.finished.finally(function() {
        for (var M = 0; M < N.length; M++)
          N[M].cancel();
        C.__reactViewTransition === R && (C.__reactViewTransition = null), m();
      }), R;
    } catch {
      return a(), u(), c(), null;
    }
  }
  function Xa(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  Xa.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : Z({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, Xa.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), a = [], u = 0; u < n.length; u++) {
      var s = n[u].effect;
      s !== null && s.target === t && s.pseudoElement === e && a.push(n[u]);
    }
    return a;
  }, Xa.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function ag(t) {
    return {
      name: t,
      group: new Xa("group", t),
      imagePair: new Xa("image-pair", t),
      old: new Xa("old", t),
      new: new Xa("new", t)
    };
  }
  function He(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  He.prototype.addEventListener = function(t, e, n) {
    var a = null, u = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var s = this._eventListeners;
      if (lg(s, t, e, n) === -1) {
        var c = this, m = e;
        n != null && typeof n != "boolean" && n.once === !0 && (m = function(T) {
          c.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, T) : e.handleEvent(T);
        }), a !== null && (u = c.removeEventListener.bind(
          c,
          t,
          e,
          n
        ), a.addEventListener("abort", u, { once: !0 }), u = a.removeEventListener.bind(a, "abort", u)), a = Bi(n), s.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: m,
          cleanup: u
        }), g(
          this._fragmentFiber.child,
          !1,
          uT,
          t,
          m,
          a
        );
      }
      this._eventListeners = s;
    }
  };
  function uT(t, e, n, a) {
    return U(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  He.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = lg(
      a,
      t,
      e,
      n
    ), e !== -1)) {
      var u = a[e];
      n = u.attachedListener;
      var s = u.cleanup;
      u = Bi(u.optionsOrUseCapture), g(
        this._fragmentFiber.child,
        !1,
        sT,
        t,
        n,
        u
      ), a.splice(e, 1), s !== null && s();
    }
  };
  function sT(t, e, n, a) {
    return U(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function Bi(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function ig(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function lg(t, e, n, a) {
    if (t.length === 0) return -1;
    a = ig(a);
    for (var u = 0; u < t.length; u++) {
      var s = t[u];
      if (s.type === e && s.listener === n && ig(s.optionsOrUseCapture) === a)
        return u;
    }
    return -1;
  }
  He.prototype.dispatchEvent = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = U(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var a = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var u = 0; u < n.length; u++) {
          var s = n[u];
          a.addEventListener(
            s.type,
            s.attachedListener,
            Bi(s.optionsOrUseCapture)
          );
        }
      if (e.appendChild(a), t = a.dispatchEvent(t), n)
        for (u = 0; u < n.length; u++)
          s = n[u], a.removeEventListener(
            s.type,
            s.attachedListener,
            Bi(s.optionsOrUseCapture)
          );
      return e.removeChild(a), t;
    }
    return e.dispatchEvent(t);
  }, He.prototype.focus = function(t) {
    g(
      this._fragmentFiber.child,
      !0,
      ug,
      t,
      void 0,
      void 0
    );
  };
  function ug(t, e) {
    return t.tag === 6 ? !1 : (t = U(t), ST(t, e));
  }
  He.prototype.focusLast = function(t) {
    var e = [];
    g(
      this._fragmentFiber.child,
      !0,
      Nc,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !ug(e[n], t); n--) ;
  };
  function Nc(t, e) {
    return e.push(t), !1;
  }
  He.prototype.blur = function() {
    var t = b(
      this._fragmentFiber
    );
    t !== null && (t = U(t), t = Hl(t).activeElement, t !== null && g(
      this._fragmentFiber.child,
      !1,
      oT,
      t,
      void 0,
      void 0
    ));
  };
  function oT(t, e) {
    return t.tag === 6 ? !1 : (t = U(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  He.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), g(
      this._fragmentFiber.child,
      !1,
      rT,
      t,
      void 0,
      void 0
    );
  };
  function rT(t, e) {
    return t.tag === 6 || (t = U(t), e.observe(t)), !1;
  }
  He.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), g(
        this._fragmentFiber.child,
        !1,
        cT,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < nn.length; n++) {
        var a = nn[n];
        a.fragmentInstance === this && a.observer === t ? t.unobserve(a.instance) : nn[e++] = a;
      }
      nn.length = e;
    }
  };
  function cT(t, e) {
    return t.tag === 6 || (t = U(t), e.unobserve(t)), !1;
  }
  var nn = [], Vc = !1;
  function fT(t, e, n) {
    nn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Vc || (Vc = !0, TT(function() {
      Vc = !1;
      var a = nn;
      nn = [];
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        s.observer.unobserve(s.instance);
      }
    }));
  }
  He.prototype.getClientRects = function() {
    var t = [];
    return g(
      this._fragmentFiber.child,
      !1,
      hT,
      t,
      void 0,
      void 0
    ), t;
  };
  function hT(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = U(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  He.prototype.getRootNode = function(t) {
    var e = b(
      this._fragmentFiber
    );
    return e === null ? this : U(e).getRootNode(t);
  }, He.prototype.compareDocumentPosition = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    g(
      this._fragmentFiber.child,
      !1,
      Nc,
      n,
      void 0,
      void 0
    );
    var a = U(e);
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
      var u = a = n.compareDocumentPosition(t);
      return n === t ? u = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = z(e)[1], n === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (t = U(n).compareDocumentPosition(
        t
      ), u = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = U(n[0]), u = U(n[n.length - 1]);
    var s = V(this._fragmentFiber) ? e.parentElement : a;
    if (s == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = s.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, s = s.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c = e.compareDocumentPosition(t), m = u.compareDocumentPosition(t), T = c & Node.DOCUMENT_POSITION_CONTAINED_BY || m & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return m = a && s && c & Node.DOCUMENT_POSITION_FOLLOWING && m & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || s && u === t || T || m ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !s && u === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || dT(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function dT(t, e, n, a, u) {
    var s = Ea(u);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!s)
        t: {
          for (; s !== null; ) {
            if (s.tag === 7 && (s === e || s.alternate === e)) {
              n = !0;
              break t;
            }
            s = s.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (s === null)
        return s = u.ownerDocument, u === s || u === s.documentElement || u === s.body;
      t: {
        for (s = e, e = b(e); s !== null; ) {
          if (!(s.tag !== 5 && s.tag !== 3 && s.tag !== 27 || s !== e && s.alternate !== e)) {
            s = !0;
            break t;
          }
          s = s.return;
        }
        s = !1;
      }
      return s;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!s) && !(e = s === n) && (e = ct(
      n,
      s,
      nt
    ), e === null ? e = !1 : (g(
      e,
      !0,
      q,
      s,
      n
    ), s = H, H = null, e = s !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!s) && !(e = s === a) && (e = ct(
      a,
      s,
      nt
    ), e === null ? e = !1 : (g(
      e,
      !0,
      X,
      s,
      a
    ), s = H, Y = H = null, e = s !== null)), e) : !1;
  }
  function sg(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  He.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(o(566));
    var e = [];
    g(
      this._fragmentFiber.child,
      !1,
      Nc,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var a = z(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || b(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = U(a), sg(t, n);
        return;
      }
      if (a = U(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var u = e[a];
      u.tag === 6 ? (u = U(u), sg(u, n)) : U(u).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function mT(t, e) {
    return t = U(t), og(t, e), !1;
  }
  function og(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function rg(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var u = n[a];
        t.addEventListener(
          u.type,
          u.attachedListener,
          Bi(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(s) {
      for (var c = 0, m = 0; m < nn.length; m++) {
        var T = nn[m];
        (T.fragmentInstance !== e || T.observer !== s || T.instance !== t) && (nn[c++] = T);
      }
      nn.length = c, s.observe(t);
    }), og(t, e));
  }
  function yT(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var u = n[a];
        t.removeEventListener(
          u.type,
          u.attachedListener,
          Bi(u.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(s) {
      typeof s.rootMargin == "string" ? fT(
        e,
        s,
        t
      ) : s.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Uc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Uc(n), gu(n);
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
  function gT(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[el])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (s = t.getAttribute("rel"), s === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (s !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (s = t.getAttribute("src"), (s !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && s && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var s = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === s)
          return t;
      } else return t;
      if (t = Ke(t.nextSibling), t === null) break;
    }
    return null;
  }
  function vT(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ke(t.nextSibling), t === null)) return null;
    return t;
  }
  function cg(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ke(t.nextSibling), t === null)) return null;
    return t;
  }
  function Bc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function wc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function pT(t, e) {
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
  function Ke(t) {
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
  var Hc = null;
  function fg(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Ke(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function hg(t) {
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
  function ST(t, e) {
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
  function TT(t) {
    Iy(function() {
      Iy(function(e) {
        return t(e);
      });
    });
  }
  function dg(t, e, n) {
    switch (e = Hl(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(o(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(o(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function mg(t, e, n) {
    for (var a in n) {
      var u = n[a];
      n.hasOwnProperty(a) && u != null && Ct(t, e, a, null, PS, u);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === rn && (t.onclick = null), gu(t);
  }
  function Lc(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    gu(t);
  }
  var Je = /* @__PURE__ */ new Map(), yg = /* @__PURE__ */ new Set();
  function Ll(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var jn = at.d;
  at.d = {
    f: bT,
    r: ET,
    D: AT,
    C: MT,
    L: DT,
    m: CT,
    X: OT,
    S: xT,
    M: RT
  };
  function bT() {
    var t = jn.f(), e = Ss();
    return t || e;
  }
  function ET(t) {
    var e = ti(t);
    e !== null && e.tag === 5 && e.type === "form" ? vm(e) : jn.r(t);
  }
  var wi = typeof document > "u" ? null : document;
  function gg(t, e, n) {
    var a = wi;
    if (a && typeof e == "string" && e) {
      var u = je(e);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), yg.has(u) || (yg.add(u), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(u) === null && (e = a.createElement("link"), re(e, "link", t), $t(e), a.head.appendChild(e)));
    }
  }
  function AT(t) {
    jn.D(t), gg("dns-prefetch", t, null);
  }
  function MT(t, e) {
    jn.C(t, e), gg("preconnect", t, e);
  }
  function DT(t, e, n) {
    jn.L(t, e, n);
    var a = wi;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + je(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + je(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + je(
        n.imageSizes
      ) + '"]')) : u += '[href="' + je(t) + '"]';
      var s = u;
      switch (e) {
        case "style":
          s = Hi(t);
          break;
        case "script":
          s = Li(t);
      }
      if (!(Je.has(s) || (t = Z(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Je.set(s, t), a.querySelector(u) !== null || e === "style" && a.querySelector(jl(s)) || e === "script" && a.querySelector(Yl(s))))) {
        var c = a.createElement("link");
        re(c, "link", t), e === "style" && (c[yu] = !0, c.onload = c.onerror = function() {
          Rh(c);
        }), $t(c), a.head.appendChild(c);
      }
    }
  }
  function CT(t, e) {
    jn.m(t, e);
    var n = wi;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + je(a) + '"][href="' + je(t) + '"]', s = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Li(t);
      }
      if (!Je.has(s) && (t = Z({ rel: "modulepreload", href: t }, e), Je.set(s, t), n.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Yl(s)))
              return;
        }
        a = n.createElement("link"), re(a, "link", t), $t(a), n.head.appendChild(a);
      }
    }
  }
  function xT(t, e, n) {
    jn.S(t, e, n);
    var a = wi;
    if (a && t) {
      var u = ei(a).hoistableStyles, s = Hi(t);
      e = e || "default";
      var c = u.get(s);
      if (!c) {
        var m = { loading: 0, preload: null };
        if (c = a.querySelector(
          jl(s)
        ))
          m.loading = 5;
        else {
          t = Z(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Je.get(s)) && jc(t, n);
          var T = c = a.createElement("link");
          $t(T), re(T, "link", t), T._p = new Promise(function(C, R) {
            T.onload = C, T.onerror = R;
          }), T.addEventListener("load", function() {
            m.loading |= 1;
          }), T.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, Cs(c, e, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: m
        }, u.set(s, c);
      }
    }
  }
  function OT(t, e) {
    jn.X(t, e);
    var n = wi;
    if (n && t) {
      var a = ei(n).hoistableScripts, u = Li(t), s = a.get(u);
      s || (s = n.querySelector(Yl(u)), s || (t = Z({ src: t, async: !0 }, e), (e = Je.get(u)) && Yc(t, e), s = n.createElement("script"), $t(s), re(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(u, s));
    }
  }
  function RT(t, e) {
    jn.M(t, e);
    var n = wi;
    if (n && t) {
      var a = ei(n).hoistableScripts, u = Li(t), s = a.get(u);
      s || (s = n.querySelector(Yl(u)), s || (t = Z({ src: t, async: !0, type: "module" }, e), (e = Je.get(u)) && Yc(t, e), s = n.createElement("script"), $t(s), re(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(u, s));
    }
  }
  function vg(t, e, n, a) {
    var u = (u = qn.current) ? Ll(u) : null;
    if (!u) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Hi(n.href), e = ei(
          u
        ).hoistableStyles, a = e.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = Hi(n.href);
          var s = ei(
            u
          ).hoistableStyles, c = s.get(t);
          if (c || (u = u.ownerDocument || u, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(t, c), (s = u.querySelector(
            jl(t)
          )) ? s._p || (c.instance = s, c.state.loading = 5) : (s = Je.get(t), s || (s = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Je.set(t, s)), zT(
            u,
            t,
            s,
            c.state
          ))), e && a === null)
            throw Error(o(528, ""));
          return c;
        }
        if (e && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = Li(n), e = ei(
          u
        ).hoistableScripts, a = e.get(n), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, t));
    }
  }
  function Hi(t) {
    return 'href="' + je(t) + '"';
  }
  function jl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function pg(t) {
    return Z({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function zT(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[yu] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[yu] = !0, e.onload = e.onerror = Rh.bind(null, e), re(e, "link", n), $t(e), t.head.appendChild(e);
    a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Li(t) {
    return '[src="' + je(t) + '"]';
  }
  function Yl(t) {
    return "script[async]" + t;
  }
  function Sg(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + je(n.href) + '"]'
          );
          if (a)
            return e.instance = a, $t(a), a;
          var u = Z({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), $t(a), re(a, "style", u), Cs(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          u = Hi(n.href);
          var s = t.querySelector(
            jl(u)
          );
          if (s)
            return e.state.loading |= 4, e.instance = s, $t(s), s;
          a = pg(n), (u = Je.get(u)) && jc(a, u), s = (t.ownerDocument || t).createElement("link"), $t(s);
          var c = s;
          return c._p = new Promise(function(m, T) {
            c.onload = m, c.onerror = T;
          }), re(s, "link", a), e.state.loading |= 4, Cs(s, n.precedence, t), e.instance = s;
        case "script":
          return s = Li(n.src), (u = t.querySelector(
            Yl(s)
          )) ? (e.instance = u, $t(u), u) : (a = n, (u = Je.get(s)) && (a = Z({}, n), Yc(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), $t(u), re(u, "link", a), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Cs(a, n.precedence, t));
    return e.instance;
  }
  function Cs(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, s = u, c = 0; c < a.length; c++) {
      var m = a[c];
      if (m.dataset.precedence === e) s = m;
      else if (s !== u) break;
    }
    s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function jc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Yc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var xs = null;
  function Tg(t, e, n) {
    if (xs === null) {
      var a = /* @__PURE__ */ new Map(), u = xs = /* @__PURE__ */ new Map();
      u.set(n, a);
    } else
      u = xs, a = u.get(n), a || (a = /* @__PURE__ */ new Map(), u.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
      var s = n[u];
      if (!(s[el] || s[ie] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = s.getAttribute(e) || "";
        c = t + c;
        var m = a.get(c);
        m ? m.push(s) : a.set(c, [s]);
      }
    }
    return a;
  }
  function qc(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function _T(t, e, n) {
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
  function bg(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Eg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Ag(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Mg(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Ag(e), t.suspenseyImages.push(e)), t = UT.bind(t), e.decode().then(t, t));
  }
  function NT(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = Hi(a.href), s = e.querySelector(
          jl(u)
        );
        if (s) {
          e = s._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ql.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = s, $t(s);
          return;
        }
        s = e.ownerDocument || e, a = pg(a), (u = Je.get(u)) && jc(a, u), s = s.createElement("link"), $t(s);
        var c = s;
        c._p = new Promise(function(m, T) {
          c.onload = m, c.onerror = T;
        }), re(s, "link", a), n.instance = s;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = ql.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Os = 0;
  function VT(t, e) {
    return t.stylesheets && t.count === 0 && zs(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && zs(t, t.stylesheets), t.unsuspend) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Os === 0 && (Os = 62500 * WS());
      var u = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && zs(t, t.stylesheets), t.unsuspend)) {
            var s = t.unsuspend;
            t.unsuspend = null, s();
          }
        },
        (t.imgBytes > Os ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function Dg(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) zs(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function ql() {
    this.count--, Dg(this);
  }
  function UT() {
    this.imgCount--, Dg(this);
  }
  var Rs = null;
  function zs(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Rs = /* @__PURE__ */ new Map(), e.forEach(BT, t), Rs = null, ql.call(t));
  }
  function BT(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Rs.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Rs.set(t, n);
        for (var u = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < u.length; s++) {
          var c = u[s];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (n.set(c.dataset.precedence, c), a = c);
        }
        a && n.set(null, a);
      }
      u = e.instance, c = u.getAttribute("data-precedence"), s = n.get(c) || a, s === a && n.set(null, u), n.set(c, u), this.count++, a = ql.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), s ? s.parentNode.insertBefore(u, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ji = {
    $$typeof: Rt,
    Provider: null,
    Consumer: null,
    _currentValue: Mn,
    _currentValue2: Mn,
    _threadCount: 0
  };
  function wT(t, e, n, a, u, s, c, m, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = bo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bo(0), this.hiddenUpdates = bo(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = s, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Cg(t, e, n, a, u, s, c, m, T, C, R, N) {
    return t = new wT(
      t,
      e,
      n,
      c,
      T,
      C,
      R,
      N,
      m
    ), e = 1, s === !0 && (e |= 24), s = Ee(3, null, null, e), t.current = s, s.stateNode = t, e = nr(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, ur(s), t;
  }
  function xg(t) {
    return t ? (t = fi, t) : fi;
  }
  function Og(t, e, n, a, u, s) {
    u = xg(u), a.context === null ? a.context = u : a.pendingContext = u, a = In(e), a.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (a.callback = s), n = $n(t, a, e), n !== null && (Ce(n, t, e), pl(n, t, e));
  }
  function Rg(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Gc(t, e) {
    Rg(t, e), (t = t.alternate) && Rg(t, e);
  }
  function zg(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ca(t, 67108864);
      e !== null && Ce(e, t, 67108864), Gc(t, 67108864);
    }
  }
  function _g(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = we();
      e = Eo(e);
      var n = Ca(t, e);
      n !== null && Ce(n, t, e), Gc(t, e);
    }
  }
  var Yi = !0;
  function HT(t, e, n, a) {
    var u = P.T;
    P.T = null;
    var s = at.p;
    try {
      at.p = 2, Xc(t, e, n, a);
    } finally {
      at.p = s, P.T = u;
    }
  }
  function LT(t, e, n, a) {
    var u = P.T;
    P.T = null;
    var s = at.p;
    try {
      at.p = 8, Xc(t, e, n, a);
    } finally {
      at.p = s, P.T = u;
    }
  }
  function Xc(t, e, n, a) {
    if (Yi) {
      var u = Qc(a);
      if (u === null)
        Mc(
          t,
          e,
          a,
          _s,
          n
        ), Vg(t, a);
      else if (YT(
        u,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (Vg(t, a), e & 4 && -1 < jT.indexOf(t)) {
        for (; u !== null; ) {
          var s = ti(u);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var c = ba(s.pendingLanes);
                  if (c !== 0) {
                    var m = s;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; c; ) {
                      var T = 1 << 31 - Re(c);
                      m.entanglements[1] |= T, c &= ~T;
                    }
                    Sn(s), (Et & 6) === 0 && (gs = xe() + 500, Ul(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = Ca(s, 2), m !== null && Ce(m, s, 2), Ss(), Gc(s, 2);
            }
          if (s = Qc(a), s === null && Mc(
            t,
            e,
            a,
            _s,
            n
          ), s === u) break;
          u = s;
        }
        u !== null && a.stopPropagation();
      } else
        Mc(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function Qc(t) {
    return t = Ro(t), Zc(t);
  }
  var _s = null;
  function Zc(t) {
    if (_s = null, t = Ea(t), t !== null) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = h(e), t !== null) return t;
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
    return _s = t, null;
  }
  function Ng(t) {
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
        switch (Wp()) {
          case vh:
            return 2;
          case ph:
            return 8;
          case cu:
          case Ip:
            return 32;
          case Sh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Kc = !1, fa = null, ha = null, da = null, Gl = /* @__PURE__ */ new Map(), Xl = /* @__PURE__ */ new Map(), ma = [], jT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Vg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        fa = null;
        break;
      case "dragenter":
      case "dragleave":
        ha = null;
        break;
      case "mouseover":
      case "mouseout":
        da = null;
        break;
      case "pointerover":
      case "pointerout":
        Gl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xl.delete(e.pointerId);
    }
  }
  function Ql(t, e, n, a, u, s) {
    return t === null || t.nativeEvent !== s ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: s,
      targetContainers: [u]
    }, e !== null && (e = ti(e), e !== null && zg(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
  }
  function YT(t, e, n, a, u) {
    switch (e) {
      case "focusin":
        return fa = Ql(
          fa,
          t,
          e,
          n,
          a,
          u
        ), !0;
      case "dragenter":
        return ha = Ql(
          ha,
          t,
          e,
          n,
          a,
          u
        ), !0;
      case "mouseover":
        return da = Ql(
          da,
          t,
          e,
          n,
          a,
          u
        ), !0;
      case "pointerover":
        var s = u.pointerId;
        return Gl.set(
          s,
          Ql(
            Gl.get(s) || null,
            t,
            e,
            n,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return s = u.pointerId, Xl.set(
          s,
          Ql(
            Xl.get(s) || null,
            t,
            e,
            n,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Ug(t) {
    var e = Ea(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = h(n), e !== null) {
            t.blockedOn = e, Ch(t.priority, function() {
              _g(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = y(n), e !== null) {
            t.blockedOn = e, Ch(t.priority, function() {
              _g(n);
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
  function Ns(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Qc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Oo = a, n.target.dispatchEvent(a), Oo = null;
      } else
        return e = ti(n), e !== null && zg(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Bg(t, e, n) {
    Ns(t) && n.delete(e);
  }
  function qT() {
    Kc = !1, fa !== null && Ns(fa) && (fa = null), ha !== null && Ns(ha) && (ha = null), da !== null && Ns(da) && (da = null), Gl.forEach(Bg), Xl.forEach(Bg);
  }
  function Vs(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Kc || (Kc = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      qT
    )));
  }
  var Us = null;
  function wg(t) {
    Us !== t && (Us = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Us === t && (Us = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], u = t[e + 2];
          if (typeof a != "function") {
            if (Zc(a || n) === null)
              continue;
            break;
          }
          var s = ti(n);
          s !== null && (t.splice(e, 3), e -= 3, xr(
            s,
            {
              pending: !0,
              data: u,
              method: n.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function qi(t) {
    function e(T) {
      return Vs(T, t);
    }
    fa !== null && Vs(fa, t), ha !== null && Vs(ha, t), da !== null && Vs(da, t), Gl.forEach(e), Xl.forEach(e);
    for (var n = 0; n < ma.length; n++) {
      var a = ma[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ma.length && (n = ma[0], n.blockedOn === null); )
      Ug(n), n.blockedOn === null && ma.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var u = n[a], s = n[a + 1], c = u[be] || null;
        if (typeof s == "function")
          c || wg(n);
        else if (c) {
          var m = null;
          if (s && s.hasAttribute("formAction")) {
            if (u = s, c = s[be] || null)
              m = c.formAction;
            else if (Zc(u) !== null) continue;
          } else m = c.action;
          typeof m == "function" ? n[a + 1] = m : (n.splice(a, 3), a -= 3), wg(n);
        }
      }
  }
  function Hg() {
    function t(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(c) {
            return u = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      u !== null && (u(), u = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
      };
    }
  }
  function Jc(t) {
    this._internalRoot = t;
  }
  Bs.prototype.render = Jc.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(o(409));
    var n = e.current, a = we();
    Og(n, a, t, e, null, null);
  }, Bs.prototype.unmount = Jc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Og(t.current, 2, null, t, null, null), Ss(), e[$a] = null;
    }
  };
  function Bs(t) {
    this._internalRoot = t;
  }
  Bs.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Dh();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < ma.length && e !== 0 && e < ma[n].priority; n++) ;
      ma.splice(n, 0, t), n === 0 && Ug(t);
    }
  };
  var Lg = l.version;
  if (Lg !== "19.3.1")
    throw Error(
      o(
        527,
        Lg,
        "19.3.1"
      )
    );
  at.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = p(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var GT = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: P,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ws.isDisabled && ws.supportsFiber)
      try {
        Ii = ws.inject(
          GT
        ), Oe = ws;
      } catch {
      }
  }
  return Kl.createRoot = function(t, e) {
    if (!f(t)) throw Error(o(299));
    var n = !1, a = "", u = xm, s = Om, c = Rm;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), e = Cg(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      u,
      s,
      c,
      Hg
    ), t[$a] = e.current, Ac(t), new Jc(e);
  }, Kl.hydrateRoot = function(t, e, n) {
    if (!f(t)) throw Error(o(299));
    var a = !1, u = "", s = xm, c = Om, m = Rm, T = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = Cg(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      u,
      T,
      s,
      c,
      m,
      Hg
    ), e.context = xg(null), n = e.current, a = we(), a = Eo(a), u = In(a), u.callback = null, $n(n, u, a), n = a, e.current.lanes = n, tl(e, n), Sn(e), t[$a] = e.current, Ac(t), new Bs(e);
  }, Kl.version = "19.3.1", Kl;
}
var Fg;
function IT() {
  if (Fg) return Pc.exports;
  Fg = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Pc.exports = WT(), Pc.exports;
}
var $T = IT(), lt = qf();
const cv = lt.createContext({});
function tb(i) {
  const l = lt.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const eb = typeof window < "u", nb = eb ? lt.useLayoutEffect : lt.useEffect, Gf = /* @__PURE__ */ lt.createContext(null);
function Xf(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function ks(i, l) {
  const r = i.indexOf(l);
  r > -1 && i.splice(r, 1);
}
const An = (i, l, r) => r > l ? l : r < i ? i : r;
let so = () => {
};
const va = {}, fv = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), hv = (i) => typeof i == "object" && i !== null, dv = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function mv(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const Pe = /* @__NO_SIDE_EFFECTS__ */ (i) => i, au = (...i) => i.reduce((l, r) => (o) => r(l(o))), $l = /* @__NO_SIDE_EFFECTS__ */ (i, l, r) => {
  const o = l - i;
  return o ? (r - i) / o : 1;
};
class Qf {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Xf(this.subscriptions, l), () => ks(this.subscriptions, l);
  }
  notify(l, r, o) {
    const f = this.subscriptions.length;
    if (f)
      if (f === 1)
        this.subscriptions[0](l, r, o);
      else
        for (let d = 0; d < f; d++) {
          const h = this.subscriptions[d];
          h && h(l, r, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Le = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, Fe = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, yv = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, gv = (i, l, r) => (((1 - 3 * r + 3 * l) * i + (3 * r - 6 * l)) * i + 3 * l) * i, ab = 1e-7, ib = 12;
function lb(i, l, r, o, f) {
  let d, h, y = 0;
  do
    h = l + (r - l) / 2, d = gv(h, o, f) - i, d > 0 ? r = h : l = h;
  while (Math.abs(d) > ab && ++y < ib);
  return h;
}
// @__NO_SIDE_EFFECTS__
function iu(i, l, r, o) {
  if (i === l && r === o)
    return Pe;
  const f = (d) => lb(d, 0, 1, i, r);
  return (d) => d === 0 || d === 1 ? d : gv(f(d), l, o);
}
const vv = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, pv = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), Sv = /* @__PURE__ */ iu(0.33, 1.53, 0.69, 0.99), Zf = /* @__PURE__ */ pv(Sv), Tv = /* @__PURE__ */ vv(Zf), bv = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * Zf(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), Kf = (i) => 1 - Math.sin(Math.acos(i)), Ev = /* @__PURE__ */ pv(Kf), Av = /* @__PURE__ */ vv(Kf), ub = /* @__PURE__ */ iu(0.42, 0, 1, 1), sb = /* @__PURE__ */ iu(0, 0, 0.58, 1), Mv = /* @__PURE__ */ iu(0.42, 0, 0.58, 1), ob = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", Dv = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", rb = {
  linear: Pe,
  easeIn: ub,
  easeInOut: Mv,
  easeOut: sb,
  circIn: Kf,
  circInOut: Av,
  circOut: Ev,
  backIn: Zf,
  backInOut: Tv,
  backOut: Sv,
  anticipate: bv
}, cb = (i) => typeof i == "string", Pg = (i) => {
  if (/* @__PURE__ */ Dv(i)) {
    so(i.length === 4);
    const [l, r, o, f] = i;
    return /* @__PURE__ */ iu(l, r, o, f);
  } else if (cb(i))
    return rb[i];
  return i;
}, Hs = [
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
function fb(i) {
  let l = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), o = !1, f = !1;
  const d = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function y(p) {
    d.has(p) && (S.schedule(p), i()), p(h);
  }
  const S = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (p, v = !1, g = !1) => {
      const V = g && o ? l : r;
      return v && d.add(p), V.add(p), p;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (p) => {
      r.delete(p), d.delete(p);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (p) => {
      if (h = p, o) {
        f = !0;
        return;
      }
      o = !0;
      const v = l;
      l = r, r = v, l.forEach(y), l.clear(), o = !1, f && (f = !1, S.process(p));
    }
  };
  return S;
}
const hb = 40;
function Cv(i, l) {
  let r = !1, o = !0;
  const f = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, d = () => r = !0, h = Hs.reduce((q, X) => (q[X] = fb(d), q), {}), { setup: y, read: S, resolveKeyframes: p, preUpdate: v, update: g, preRender: b, render: V, postRender: z } = h, B = () => {
    const q = va.useManualTiming, X = q ? f.timestamp : performance.now();
    r = !1, q || (f.delta = o ? 1e3 / 60 : Math.max(Math.min(X - f.timestamp, hb), 1)), f.timestamp = X, f.isProcessing = !0, y.process(f), S.process(f), p.process(f), v.process(f), g.process(f), b.process(f), V.process(f), z.process(f), f.isProcessing = !1, r && l && (o = !1, i(B));
  }, U = () => {
    r = !0, o = !0, f.isProcessing || i(B);
  };
  return { schedule: Hs.reduce((q, X) => {
    const nt = h[X];
    return q[X] = (ct, Z = !1, G = !1) => (r || U(), nt.schedule(ct, Z, G)), q;
  }, {}), cancel: (q) => {
    for (let X = 0; X < Hs.length; X++)
      h[Hs[X]].cancel(q);
  }, state: f, steps: h };
}
const { schedule: Vt, cancel: pa, state: fe, steps: tf } = /* @__PURE__ */ Cv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Pe, !0);
let Gs;
function db() {
  Gs = void 0;
}
const Se = {
  now: () => (Gs === void 0 && Se.set(fe.isProcessing || va.useManualTiming ? fe.timestamp : performance.now()), Gs),
  set: (i) => {
    Gs = i, queueMicrotask(db);
  }
}, xv = (i) => (l) => typeof l == "string" && l.startsWith(i), Ov = /* @__PURE__ */ xv("--"), mb = /* @__PURE__ */ xv("var(--"), Jf = (i) => mb(i) ? yb.test(i.split("/*")[0].trim()) : !1, yb = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function kg(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const Fi = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, tu = {
  ...Fi,
  transform: (i) => An(0, 1, i)
}, Ls = {
  ...Fi,
  default: 1
}, Pl = (i) => Math.round(i * 1e5) / 1e5, Ff = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function gb(i) {
  return i == null;
}
const vb = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Pf = (i, l) => (r) => !!(typeof r == "string" && vb.test(r) && r.startsWith(i) || l && !gb(r) && Object.prototype.hasOwnProperty.call(r, l)), Rv = (i, l, r) => (o) => {
  if (typeof o != "string")
    return o;
  const [f, d, h, y] = o.match(Ff);
  return {
    [i]: parseFloat(f),
    [l]: parseFloat(d),
    [r]: parseFloat(h),
    alpha: y !== void 0 ? parseFloat(y) : 1
  };
}, pb = (i) => An(0, 255, i), ef = {
  ...Fi,
  transform: (i) => Math.round(pb(i))
}, Ja = {
  test: /* @__PURE__ */ Pf("rgb", "red"),
  parse: /* @__PURE__ */ Rv("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: r, alpha: o = 1 }) => "rgba(" + ef.transform(i) + ", " + ef.transform(l) + ", " + ef.transform(r) + ", " + Pl(tu.transform(o)) + ")"
};
function Sb(i) {
  let l = "", r = "", o = "", f = "";
  return i.length > 5 ? (l = i.substring(1, 3), r = i.substring(3, 5), o = i.substring(5, 7), f = i.substring(7, 9)) : (l = i.substring(1, 2), r = i.substring(2, 3), o = i.substring(3, 4), f = i.substring(4, 5), l += l, r += r, o += o, f += f), {
    red: parseInt(l, 16),
    green: parseInt(r, 16),
    blue: parseInt(o, 16),
    alpha: f ? parseInt(f, 16) / 255 : 1
  };
}
const vf = {
  test: /* @__PURE__ */ Pf("#"),
  parse: Sb,
  transform: Ja.transform
}, lu = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), Yn = /* @__PURE__ */ lu("deg"), En = /* @__PURE__ */ lu("%"), F = /* @__PURE__ */ lu("px"), Tb = /* @__PURE__ */ lu("vh"), bb = /* @__PURE__ */ lu("vw"), Wg = {
  ...En,
  parse: (i) => En.parse(i) / 100,
  transform: (i) => En.transform(i * 100)
}, Xi = {
  test: /* @__PURE__ */ Pf("hsl", "hue"),
  parse: /* @__PURE__ */ Rv("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: r, alpha: o = 1 }) => "hsla(" + Math.round(i) + ", " + En.transform(Pl(l)) + ", " + En.transform(Pl(r)) + ", " + Pl(tu.transform(o)) + ")"
}, Ft = {
  test: (i) => Ja.test(i) || vf.test(i) || Xi.test(i),
  parse: (i) => Ja.test(i) ? Ja.parse(i) : Xi.test(i) ? Xi.parse(i) : vf.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? Ja.transform(i) : Xi.transform(i),
  getAnimatableNone: (i) => {
    const l = Ft.parse(i);
    return l.alpha = 0, Ft.transform(l);
  }
}, Eb = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ab(i) {
  return isNaN(i) && typeof i == "string" && (i.match(Ff)?.length || 0) + (i.match(Eb)?.length || 0) > 0;
}
const zv = "number", _v = "color", Mb = "var", Db = "var(", Ig = "${}", Cb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ki(i) {
  const l = i.toString(), r = [], o = {
    color: [],
    number: [],
    var: []
  }, f = [];
  let d = 0;
  const y = l.replace(Cb, (S) => (Ft.test(S) ? (o.color.push(d), f.push(_v), r.push(Ft.parse(S))) : S.startsWith(Db) ? (o.var.push(d), f.push(Mb), r.push(S)) : (o.number.push(d), f.push(zv), r.push(parseFloat(S))), ++d, Ig)).split(Ig);
  return { values: r, split: y, indexes: o, types: f };
}
function xb(i) {
  return Ki(i).values;
}
function Nv({ split: i, types: l }) {
  const r = i.length;
  return (o) => {
    let f = "";
    for (let d = 0; d < r; d++)
      if (f += i[d], o[d] !== void 0) {
        const h = l[d];
        h === zv ? f += Pl(o[d]) : h === _v ? f += Ft.transform(o[d]) : f += o[d];
      }
    return f;
  };
}
function Ob(i) {
  return Nv(Ki(i));
}
const Rb = (i) => typeof i == "number" ? 0 : Ft.test(i) ? Ft.getAnimatableNone(i) : i, zb = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : Rb(i);
function _b(i) {
  const l = Ki(i);
  return Nv(l)(l.values.map((o, f) => zb(o, l.split[f])));
}
const un = {
  test: Ab,
  parse: xb,
  createTransformer: Ob,
  getAnimatableNone: _b
};
function nf(i, l, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? i + (l - i) * 6 * r : r < 1 / 2 ? l : r < 2 / 3 ? i + (l - i) * (2 / 3 - r) * 6 : i;
}
function Nb({ hue: i, saturation: l, lightness: r, alpha: o }) {
  i /= 360, l /= 100, r /= 100;
  let f = 0, d = 0, h = 0;
  if (!l)
    f = d = h = r;
  else {
    const y = r < 0.5 ? r * (1 + l) : r + l - r * l, S = 2 * r - y;
    f = nf(S, y, i + 1 / 3), d = nf(S, y, i), h = nf(S, y, i - 1 / 3);
  }
  return {
    red: Math.round(f * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: o
  };
}
function Ws(i, l) {
  return (r) => r > 0 ? l : i;
}
const Nt = (i, l, r) => i + (l - i) * r, af = (i, l, r) => {
  const o = i * i, f = r * (l * l - o) + o;
  return f < 0 ? 0 : Math.sqrt(f);
}, Vb = [vf, Ja, Xi], Ub = (i) => Vb.find((l) => l.test(i));
function $g(i) {
  const l = Ub(i);
  if (!l)
    return !1;
  let r = l.parse(i);
  return l === Xi && (r = Nb(r)), r;
}
const t0 = (i, l) => {
  const r = $g(i), o = $g(l);
  if (!r || !o)
    return Ws(i, l);
  const f = { ...r };
  return (d) => (f.red = af(r.red, o.red, d), f.green = af(r.green, o.green, d), f.blue = af(r.blue, o.blue, d), f.alpha = Nt(r.alpha, o.alpha, d), Ja.transform(f));
}, pf = /* @__PURE__ */ new Set(["none", "hidden"]);
function Bb(i, l) {
  return pf.has(i) ? (r) => r <= 0 ? i : l : (r) => r >= 1 ? l : i;
}
function wb(i, l) {
  return (r) => Nt(i, l, r);
}
function kf(i) {
  return typeof i == "number" ? wb : typeof i == "string" ? Jf(i) ? Ws : Ft.test(i) ? t0 : jb : Array.isArray(i) ? Vv : typeof i == "object" ? Ft.test(i) ? t0 : Hb : Ws;
}
function Vv(i, l) {
  const r = [...i], o = r.length, f = i.map((d, h) => kf(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < o; h++)
      r[h] = f[h](d);
    return r;
  };
}
function Hb(i, l) {
  const r = { ...i, ...l }, o = {};
  for (const f in r)
    i[f] !== void 0 && l[f] !== void 0 && (o[f] = kf(i[f])(i[f], l[f]));
  return (f) => {
    for (const d in o)
      r[d] = o[d](f);
    return r;
  };
}
function Lb(i, l) {
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let f = 0; f < l.values.length; f++) {
    const d = l.types[f], h = i.indexes[d][o[d]], y = i.values[h] ?? 0;
    r[f] = y, o[d]++;
  }
  return r;
}
const jb = (i, l) => {
  const r = un.createTransformer(l), o = Ki(i), f = Ki(l);
  return o.indexes.var.length === f.indexes.var.length && o.indexes.color.length === f.indexes.color.length && o.indexes.number.length >= f.indexes.number.length ? pf.has(i) && !f.values.length || pf.has(l) && !o.values.length ? Bb(i, l) : au(Vv(Lb(o, f), f.values), r) : Ws(i, l);
};
function Uv(i, l, r) {
  return typeof i == "number" && typeof l == "number" && typeof r == "number" ? Nt(i, l, r) : kf(i)(i, l);
}
const Yb = (i) => {
  const l = ({ timestamp: r }) => i(r);
  return {
    start: (r = !0) => Vt.update(l, r),
    stop: () => pa(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => fe.isProcessing ? fe.timestamp : Se.now()
  };
}, Bv = (i, l, r = 10) => {
  let o = "";
  const f = Math.max(Math.round(l / r), 2);
  for (let d = 0; d < f; d++)
    o += Math.round(i(d / (f - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, Is = 2e4;
function Wf(i) {
  let l = 0;
  const r = 50;
  let o = i.next(l);
  for (; !o.done && l < Is; )
    l += r, o = i.next(l);
  return l >= Is ? 1 / 0 : l;
}
function qb(i, l = 100, r) {
  const o = r({ ...i, keyframes: [0, l] }), f = Math.min(Wf(o), Is);
  return {
    type: "keyframes",
    ease: (d) => o.next(f * d).value / l,
    duration: /* @__PURE__ */ Fe(f)
  };
}
const Gt = {
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
function Sf(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const Gb = 12;
function Xb(i, l, r) {
  let o = r;
  for (let f = 1; f < Gb; f++)
    o = o - i(o) / l(o);
  return o;
}
const lf = 1e-3;
function Qb({ duration: i = Gt.duration, bounce: l = Gt.bounce, velocity: r = Gt.velocity, mass: o = Gt.mass }) {
  let f, d, h = 1 - l;
  h = An(Gt.minDamping, Gt.maxDamping, h), i = An(Gt.minDuration, Gt.maxDuration, /* @__PURE__ */ Fe(i)), h < 1 ? (f = (p) => {
    const v = p * h, g = v * i, b = v - r, V = Sf(p, h), z = Math.exp(-g);
    return lf - b / V * z;
  }, d = (p) => {
    const g = p * h * i, b = g * r + r, V = Math.pow(h, 2) * Math.pow(p, 2) * i, z = Math.exp(-g), B = Sf(Math.pow(p, 2), h);
    return (-f(p) + lf > 0 ? -1 : 1) * ((b - V) * z) / B;
  }) : (f = (p) => {
    const v = Math.exp(-p * i), g = (p - r) * i + 1;
    return -lf + v * g;
  }, d = (p) => {
    const v = Math.exp(-p * i), g = (r - p) * (i * i);
    return v * g;
  });
  const y = 5 / i, S = Xb(f, d, y);
  if (i = /* @__PURE__ */ Le(i), isNaN(S))
    return {
      stiffness: Gt.stiffness,
      damping: Gt.damping,
      duration: i
    };
  {
    const p = Math.pow(S, 2) * o;
    return {
      stiffness: p,
      damping: h * 2 * Math.sqrt(o * p),
      duration: i
    };
  }
}
const Zb = ["duration", "bounce"], Kb = ["stiffness", "damping", "mass"];
function e0(i, l) {
  return l.some((r) => i[r] !== void 0);
}
function Jb(i) {
  let l = {
    velocity: Gt.velocity,
    stiffness: Gt.stiffness,
    damping: Gt.damping,
    mass: Gt.mass,
    isResolvedFromDuration: !1,
    ...i
  };
  if (!e0(i, Kb) && e0(i, Zb))
    if (l.velocity = 0, i.visualDuration) {
      const r = i.visualDuration, o = 2 * Math.PI / (r * 1.2), f = o * o, d = 2 * An(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(f);
      l = {
        ...l,
        mass: Gt.mass,
        stiffness: f,
        damping: d
      };
    } else {
      const r = Qb({ ...i, velocity: 0 });
      l = {
        ...l,
        ...r,
        mass: Gt.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function $s(i = Gt.visualDuration, l = Gt.bounce) {
  const r = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i;
  let { restSpeed: o, restDelta: f } = r;
  const d = r.keyframes[0], h = r.keyframes[r.keyframes.length - 1], y = { done: !1, value: d }, { stiffness: S, damping: p, mass: v, duration: g, velocity: b, isResolvedFromDuration: V } = Jb({
    ...r,
    velocity: -/* @__PURE__ */ Fe(r.velocity || 0)
  }), z = b || 0, B = p / (2 * Math.sqrt(S * v)), U = h - d, H = /* @__PURE__ */ Fe(Math.sqrt(S / v)), Y = Math.abs(U) < 5;
  o || (o = Y ? Gt.restSpeed.granular : Gt.restSpeed.default), f || (f = Y ? Gt.restDelta.granular : Gt.restDelta.default);
  let q, X, nt, ct, Z, G;
  if (B < 1)
    nt = Sf(H, B), ct = (z + B * H * U) / nt, q = (W) => {
      const vt = Math.exp(-B * H * W);
      return h - vt * (ct * Math.sin(nt * W) + U * Math.cos(nt * W));
    }, Z = B * H * ct + U * nt, G = B * H * U - ct * nt, X = (W) => Math.exp(-B * H * W) * (Z * Math.sin(nt * W) + G * Math.cos(nt * W));
  else if (B === 1) {
    q = (vt) => h - Math.exp(-H * vt) * (U + (z + H * U) * vt);
    const W = z + H * U;
    X = (vt) => Math.exp(-H * vt) * (H * W * vt - z);
  } else {
    const W = H * Math.sqrt(B * B - 1);
    q = (Wt) => {
      const Rt = Math.exp(-B * H * Wt), L = Math.min(W * Wt, 300);
      return h - Rt * ((z + B * H * U) * Math.sinh(L) + W * U * Math.cosh(L)) / W;
    };
    const vt = (z + B * H * U) / W, Ot = B * H * vt - U * W, de = B * H * U - vt * W;
    X = (Wt) => {
      const Rt = Math.exp(-B * H * Wt), L = Math.min(W * Wt, 300);
      return Rt * (Ot * Math.sinh(L) + de * Math.cosh(L));
    };
  }
  const xt = {
    calculatedDuration: V && g || null,
    velocity: (W) => /* @__PURE__ */ Le(X(W)),
    next: (W) => {
      if (!V && B < 1) {
        const Ot = Math.exp(-B * H * W), de = Math.sin(nt * W), Wt = Math.cos(nt * W), Rt = h - Ot * (ct * de + U * Wt), L = /* @__PURE__ */ Le(Ot * (Z * de + G * Wt));
        return y.done = Math.abs(L) <= o && Math.abs(h - Rt) <= f, y.value = y.done ? h : Rt, y;
      }
      const vt = q(W);
      if (V)
        y.done = W >= g;
      else {
        const Ot = /* @__PURE__ */ Le(X(W));
        y.done = Math.abs(Ot) <= o && Math.abs(h - vt) <= f;
      }
      return y.value = y.done ? h : vt, y;
    },
    toString: () => {
      const W = Math.min(Wf(xt), Is), vt = Bv((Ot) => xt.next(W * Ot).value, W, 30);
      return W + "ms " + vt;
    },
    toTransition: () => {
    }
  };
  return xt;
}
$s.applyToOptions = (i) => {
  const l = qb(i, 100, $s);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ Le(l.duration), i.type = "keyframes", i;
};
const Fb = 5;
function wv(i, l, r) {
  const o = Math.max(l - Fb, 0);
  return /* @__PURE__ */ yv(r - i(o), l - o);
}
function Tf({ keyframes: i, velocity: l = 0, power: r = 0.8, timeConstant: o = 325, bounceDamping: f = 10, bounceStiffness: d = 500, modifyTarget: h, min: y, max: S, restDelta: p = 0.5, restSpeed: v }) {
  const g = i[0], b = {
    done: !1,
    value: g
  }, V = (G) => y !== void 0 && G < y || S !== void 0 && G > S, z = (G) => y === void 0 ? S : S === void 0 || Math.abs(y - G) < Math.abs(S - G) ? y : S;
  let B = r * l;
  const U = g + B, H = h === void 0 ? U : h(U);
  H !== U && (B = H - g);
  const Y = (G) => -B * Math.exp(-G / o), q = (G) => H + Y(G), X = (G) => {
    const xt = Y(G), W = q(G);
    b.done = Math.abs(xt) <= p, b.value = b.done ? H : W;
  };
  let nt, ct;
  const Z = (G) => {
    V(b.value) && (nt = G, ct = $s({
      keyframes: [b.value, z(b.value)],
      velocity: wv(q, G, b.value),
      // TODO: This should be passing * 1000
      damping: f,
      stiffness: d,
      restDelta: p,
      restSpeed: v
    }));
  };
  return Z(0), {
    calculatedDuration: null,
    next: (G) => {
      let xt = !1;
      return !ct && nt === void 0 && (xt = !0, X(G), Z(G)), nt !== void 0 && G >= nt ? ct.next(G - nt) : (!xt && X(G), b);
    }
  };
}
function Pb(i, l, r) {
  const o = [], f = r || va.mix || Uv, d = i.length - 1;
  for (let h = 0; h < d; h++) {
    let y = f(i[h], i[h + 1]);
    if (l) {
      const S = Array.isArray(l) ? l[h] || Pe : l;
      y = au(S, y);
    }
    o.push(y);
  }
  return o;
}
function kb(i, l, { clamp: r = !0, ease: o, mixer: f } = {}) {
  const d = i.length;
  if (so(d === l.length), d === 1)
    return () => l[0];
  if (d === 2 && l[0] === l[1])
    return () => l[1];
  const h = i[0] === i[1];
  i[0] > i[d - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const y = Pb(l, o, f), S = y.length, p = (v) => {
    if (h && v < i[0])
      return l[0];
    let g = 0;
    if (S > 1)
      for (; g < i.length - 2 && !(v < i[g + 1]); g++)
        ;
    const b = /* @__PURE__ */ $l(i[g], i[g + 1], v);
    return y[g](b);
  };
  return r ? (v) => p(An(i[0], i[d - 1], v)) : p;
}
function Wb(i, l) {
  const r = i[i.length - 1];
  for (let o = 1; o <= l; o++) {
    const f = /* @__PURE__ */ $l(0, l, o);
    i.push(Nt(r, 1, f));
  }
}
function Ib(i) {
  const l = [0];
  return Wb(l, i.length - 1), l;
}
function $b(i, l) {
  return i.map((r) => r * l);
}
function tE(i, l) {
  return i.map(() => l || Mv).splice(0, i.length - 1);
}
function kl({ duration: i = 300, keyframes: l, times: r, ease: o = "easeInOut" }) {
  const f = /* @__PURE__ */ ob(o) ? o.map(Pg) : Pg(o), d = {
    done: !1,
    value: l[0]
  }, h = $b(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === l.length ? r : Ib(l),
    i
  ), y = kb(h, l, {
    ease: Array.isArray(f) ? f : tE(l, f)
  });
  return {
    calculatedDuration: i,
    next: (S) => (d.value = y(S), d.done = S >= i, d)
  };
}
const eE = (i) => i !== null;
function oo(i, { repeat: l, repeatType: r = "loop" }, o, f = 1) {
  const d = i.filter(eE), y = f < 0 || l && r !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
  return !y || o === void 0 ? d[y] : o;
}
const nE = {
  decay: Tf,
  inertia: Tf,
  tween: kl,
  keyframes: kl,
  spring: $s
};
function Hv(i) {
  typeof i.type == "string" && (i.type = nE[i.type]);
}
class If {
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
  then(l, r) {
    return this.finished.then(l, r);
  }
}
const aE = (i) => i / 100;
class to extends If {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: r } = this.options;
      r && r.updatedAt !== Se.now() && this.tick(Se.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    Hv(l);
    const { type: r = kl, repeat: o = 0, repeatDelay: f = 0, repeatType: d, velocity: h = 0 } = l;
    let { keyframes: y } = l;
    const S = r || kl;
    S !== kl && typeof y[0] != "number" && (this.mixKeyframes = au(aE, Uv(y[0], y[1])), y = [0, 100]);
    const p = S({ ...l, keyframes: y });
    d === "mirror" && (this.mirroredGenerator = S({
      ...l,
      keyframes: [...y].reverse(),
      velocity: -h
    })), p.calculatedDuration === null && (p.calculatedDuration = Wf(p));
    const { calculatedDuration: v } = p;
    this.calculatedDuration = v, this.resolvedDuration = v + f, this.totalDuration = this.resolvedDuration * (o + 1) - f, this.generator = p;
  }
  updateTime(l) {
    const r = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(l, r = !1) {
    const { generator: o, totalDuration: f, mixKeyframes: d, mirroredGenerator: h, resolvedDuration: y, calculatedDuration: S } = this;
    if (this.startTime === null)
      return o.next(0);
    const { delay: p = 0, keyframes: v, repeat: g, repeatType: b, repeatDelay: V, type: z, onUpdate: B, finalKeyframe: U } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - f / this.speed, this.startTime)), r ? this.currentTime = l : this.updateTime(l);
    const H = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1), Y = this.playbackSpeed >= 0 ? H < 0 : H > f;
    this.currentTime = Math.max(H, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = f);
    let q = this.currentTime, X = o;
    if (g) {
      const G = Math.min(this.currentTime, f) / y;
      let xt = Math.floor(G), W = G % 1;
      !W && G >= 1 && (W = 1), W === 1 && xt--, xt = Math.min(xt, g + 1), xt % 2 && (b === "reverse" ? (W = 1 - W, V && (W -= V / y)) : b === "mirror" && (X = h)), q = An(0, 1, W) * y;
    }
    let nt;
    Y ? (this.delayState.value = v[0], nt = this.delayState) : nt = X.next(q), d && !Y && (nt.value = d(nt.value));
    let { done: ct } = nt;
    !Y && S !== null && (ct = this.playbackSpeed >= 0 ? this.currentTime >= f : this.currentTime <= 0);
    const Z = this.holdTime === null && (this.state === "finished" || this.state === "running" && ct);
    return Z && z !== Tf && (nt.value = oo(v, this.options, U, this.speed)), B && B(nt.value), Z && this.finish(), nt;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, r) {
    return this.finished.then(l, r);
  }
  get duration() {
    return /* @__PURE__ */ Fe(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Fe(l);
  }
  get time() {
    return /* @__PURE__ */ Fe(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ Le(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
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
    const r = this.generator.next(l).value;
    return wv((o) => this.generator.next(o).value, l, r);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const r = this.playbackSpeed !== l;
    r && this.driver && this.updateTime(Se.now()), this.playbackSpeed = l, r && this.driver && (this.time = /* @__PURE__ */ Fe(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = Yb, startTime: r } = this.options;
    this.driver || (this.driver = l((f) => this.tick(f))), this.options.onPlay?.();
    const o = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = r ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Se.now()), this.holdTime = this.currentTime;
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
function iE(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const Fa = (i) => i * 180 / Math.PI, bf = (i) => {
  const l = Fa(Math.atan2(i[1], i[0]));
  return Ef(l);
}, lE = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: bf,
  rotateZ: bf,
  skewX: (i) => Fa(Math.atan(i[1])),
  skewY: (i) => Fa(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, Ef = (i) => (i = i % 360, i < 0 && (i += 360), i), n0 = bf, a0 = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), i0 = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), uE = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: a0,
  scaleY: i0,
  scale: (i) => (a0(i) + i0(i)) / 2,
  rotateX: (i) => Ef(Fa(Math.atan2(i[6], i[5]))),
  rotateY: (i) => Ef(Fa(Math.atan2(-i[2], i[0]))),
  rotateZ: n0,
  rotate: n0,
  skewX: (i) => Fa(Math.atan(i[4])),
  skewY: (i) => Fa(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function Af(i) {
  return i.includes("scale") ? 1 : 0;
}
function Mf(i, l) {
  if (!i || i === "none")
    return Af(l);
  const r = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, f;
  if (r)
    o = uE, f = r;
  else {
    const y = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = lE, f = y;
  }
  if (!f)
    return Af(l);
  const d = o[l], h = f[1].split(",").map(oE);
  return typeof d == "function" ? d(h) : h[d];
}
const sE = (i, l) => {
  const { transform: r = "none" } = getComputedStyle(i);
  return Mf(r, l);
};
function oE(i) {
  return parseFloat(i.trim());
}
const Pi = [
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
], ki = /* @__PURE__ */ new Set([...Pi, "pathRotation"]), l0 = (i) => i === Fi || i === F, rE = /* @__PURE__ */ new Set(["x", "y", "z"]), cE = Pi.filter((i) => !rE.has(i));
function fE(i) {
  const l = [];
  return cE.forEach((r) => {
    const o = i.getValue(r);
    o !== void 0 && (l.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
  }), l;
}
const ga = {
  // Dimensions
  width: ({ x: i }, { paddingLeft: l = "0", paddingRight: r = "0", boxSizing: o }) => {
    const f = i.max - i.min;
    return o === "border-box" ? f : f - parseFloat(l) - parseFloat(r);
  },
  height: ({ y: i }, { paddingTop: l = "0", paddingBottom: r = "0", boxSizing: o }) => {
    const f = i.max - i.min;
    return o === "border-box" ? f : f - parseFloat(l) - parseFloat(r);
  },
  top: (i, { top: l }) => parseFloat(l),
  left: (i, { left: l }) => parseFloat(l),
  bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min),
  right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min),
  // Transform
  x: (i, { transform: l }) => Mf(l, "x"),
  y: (i, { transform: l }) => Mf(l, "y")
};
ga.translateX = ga.x;
ga.translateY = ga.y;
const Pa = /* @__PURE__ */ new Set();
let Df = !1, Cf = !1, xf = !1;
function Lv() {
  if (Cf) {
    const i = Array.from(Pa).filter((o) => o.needsMeasurement), l = new Set(i.map((o) => o.element)), r = /* @__PURE__ */ new Map();
    l.forEach((o) => {
      const f = fE(o);
      f.length && (r.set(o, f), o.render());
    }), i.forEach((o) => o.measureInitialState()), l.forEach((o) => {
      o.render();
      const f = r.get(o);
      f && f.forEach(([d, h]) => {
        o.getValue(d)?.set(h);
      });
    }), i.forEach((o) => o.measureEndState()), i.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  Cf = !1, Df = !1, Pa.forEach((i) => i.complete(xf)), Pa.clear();
}
function jv() {
  Pa.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Cf = !0);
  });
}
function hE() {
  xf = !0, jv(), Lv(), xf = !1;
}
class $f {
  constructor(l, r, o, f, d, h = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = r, this.name = o, this.motionValue = f, this.element = d, this.isAsync = h;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Pa.add(this), Df || (Df = !0, Vt.read(jv), Vt.resolveKeyframes(Lv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: r, element: o, motionValue: f } = this;
    if (l[0] === null) {
      const d = f?.get(), h = l[l.length - 1];
      if (d !== void 0)
        l[0] = d;
      else if (o && r) {
        const y = o.readValue(r, h);
        y != null && (l[0] = y);
      }
      l[0] === void 0 && (l[0] = h), f && d === void 0 && f.set(l[0]);
    }
    iE(l);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), Pa.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Pa.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const dE = (i) => i.startsWith("--");
function Yv(i, l, r) {
  dE(l) ? i.style.setProperty(l, r) : i.style[l] = r;
}
const mE = {};
function qv(i, l) {
  const r = /* @__PURE__ */ mv(i);
  return () => mE[l] ?? r();
}
const yE = /* @__PURE__ */ qv(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Gv = /* @__PURE__ */ qv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Fl = ([i, l, r, o]) => `cubic-bezier(${i}, ${l}, ${r}, ${o})`, u0 = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Fl([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Fl([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Fl([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Fl([0.33, 1.53, 0.69, 0.99])
};
function Xv(i, l) {
  if (i)
    return typeof i == "function" ? Gv() ? Bv(i, l) : "ease-out" : /* @__PURE__ */ Dv(i) ? Fl(i) : Array.isArray(i) ? i.map((r) => Xv(r, l) || u0.easeOut) : u0[i];
}
function gE(i, l, r, { delay: o = 0, duration: f = 300, repeat: d = 0, repeatType: h = "loop", ease: y = "easeOut", times: S } = {}, p = void 0) {
  const v = {
    [l]: r
  };
  S && (v.offset = S);
  const g = Xv(y, f);
  Array.isArray(g) && (v.easing = g);
  const b = {
    delay: o,
    duration: f,
    easing: Array.isArray(g) ? "linear" : g,
    fill: "both",
    iterations: d + 1,
    direction: h === "reverse" ? "alternate" : "normal"
  };
  return p && (b.pseudoElement = p), i.animate(v, b);
}
function Qv(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function vE({ type: i, ...l }) {
  return Qv(i) && Gv() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class Zv extends If {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: r, name: o, keyframes: f, pseudoElement: d, allowFlatten: h = !1, finalKeyframe: y, onComplete: S } = l;
    this.isPseudoElement = !!d, this.allowFlatten = h, this.options = l, so(typeof l.type != "string");
    const p = vE(l);
    this.animation = gE(r, o, f, p, d), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !d) {
        const v = oo(f, this.options, y, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), Yv(r, o, v), this.animation.cancel();
      }
      S?.(), this.notifyFinished();
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
    return /* @__PURE__ */ Fe(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Fe(l);
  }
  get time() {
    return /* @__PURE__ */ Fe(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const r = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Le(l), r && this.animation.pause();
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
  attachTimeline({ timeline: l, rangeStart: r, rangeEnd: o, observe: f }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && yE() ? (this.animation.timeline = l, r && (this.animation.rangeStart = r), o && (this.animation.rangeEnd = o), Pe) : f(this);
  }
}
const Kv = {
  anticipate: bv,
  backInOut: Tv,
  circInOut: Av
};
function pE(i) {
  return i in Kv;
}
function SE(i) {
  typeof i.ease == "string" && pE(i.ease) && (i.ease = Kv[i.ease]);
}
const uf = 10;
class TE extends Zv {
  constructor(l) {
    SE(l), Hv(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
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
    const { motionValue: r, onUpdate: o, onComplete: f, element: d, ...h } = this.options;
    if (!r)
      return;
    if (l !== void 0) {
      r.set(l);
      return;
    }
    const y = new to({
      ...h,
      autoplay: !1
    }), S = Math.max(uf, Se.now() - this.startTime), p = An(0, uf, S - uf), v = y.sample(S).value, { name: g } = this.options;
    d && g && Yv(d, g, v), r.setWithVelocity(y.sample(Math.max(0, S - p)).value, v, p), y.stop();
  }
}
const s0 = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(un.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function bE(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let r = 0; r < i.length; r++)
    if (i[r] !== l)
      return !0;
}
function EE(i, l, r, o) {
  const f = i[0];
  if (f === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const d = i[i.length - 1], h = s0(f, l), y = s0(d, l);
  return !h || !y ? !1 : bE(i) || (r === "spring" || Qv(r)) && o;
}
function Of(i) {
  i.duration = 0, i.type = "keyframes";
}
const Jv = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), AE = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ME(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && AE.test(i[l]))
      return !0;
  return !1;
}
const DE = /* @__PURE__ */ new Set([
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
]), CE = /* @__PURE__ */ mv(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function xE(i) {
  const { motionValue: l, name: r, repeatDelay: o, repeatType: f, damping: d, type: h, keyframes: y } = i, S = l?.owner?.current;
  if (!(S instanceof HTMLElement) && !(S instanceof SVGElement))
    return !1;
  const { onUpdate: p, transformTemplate: v } = l.owner.getProps();
  return CE() && r && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Jv.has(r) || DE.has(r) && ME(y)) && (r !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !p && !o && f !== "mirror" && d !== 0 && h !== "inertia";
}
const OE = 40;
class RE extends If {
  constructor({ autoplay: l = !0, delay: r = 0, type: o = "keyframes", repeat: f = 0, repeatDelay: d = 0, repeatType: h = "loop", keyframes: y, name: S, motionValue: p, element: v, ...g }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Se.now();
    const b = {
      autoplay: l,
      delay: r,
      type: o,
      repeat: f,
      repeatDelay: d,
      repeatType: h,
      name: S,
      motionValue: p,
      element: v,
      ...g
    }, V = v?.KeyframeResolver || $f;
    this.keyframeResolver = new V(y, (z, B, U) => this.onKeyframesResolved(z, B, b, !U), S, p, v), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, r, o, f) {
    this.keyframeResolver = void 0;
    const { name: d, type: h, velocity: y, delay: S, isHandoff: p, onUpdate: v } = o;
    this.resolvedAt = Se.now();
    let g = !0;
    EE(l, d, h, y) || (g = !1, (va.instantAnimations || !S) && v?.(oo(l, o, r)), l[0] = l[l.length - 1], Of(o), o.repeat = 0);
    const V = {
      startTime: f ? this.resolvedAt ? this.resolvedAt - this.createdAt > OE ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: r,
      ...o,
      keyframes: l
    }, z = g && !p && xE(V), B = V.motionValue?.owner?.current;
    let U;
    if (z)
      try {
        U = new TE({
          ...V,
          element: B
        });
      } catch {
        U = new to(V);
      }
    else
      U = new to(V);
    U.finished.then(() => {
      this.notifyFinished();
    }).catch(Pe), this.pendingTimeline && (this.stopTimeline = U.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = U;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, r) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), hE()), this._animation;
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
function Fv(i, l, r, o = 0, f = 1) {
  const d = Array.from(i).sort((p, v) => p.sortNodePosition(v)).indexOf(l), h = i.size, y = (h - 1) * o;
  return typeof r == "function" ? r(d, h) : f === 1 ? d * o : y - d * o;
}
const o0 = 30, zE = (i) => !isNaN(parseFloat(i));
class _E {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, r = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o) => {
      const f = Se.now();
      if (this.updatedAt !== f && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const d of this.dependents)
          d.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = r.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = Se.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = zE(this.current));
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
  on(l, r) {
    this.events[l] || (this.events[l] = new Qf());
    const o = this.events[l].add(r);
    return l === "change" ? () => {
      o(), Vt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, r) {
    this.passiveEffect = l, this.stopPassiveEffect = r;
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
  setWithVelocity(l, r, o) {
    this.set(r), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, r = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
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
    const l = Se.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > o0)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, o0);
    return /* @__PURE__ */ yv(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
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
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = l(r), this.events.animationStart && this.events.animationStart.notify();
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
function Ji(i, l) {
  return new _E(i, l);
}
function Pv(i, l) {
  if (i?.inherit && l) {
    const { inherit: r, ...o } = i;
    return { ...l, ...o };
  }
  return i;
}
function th(i, l) {
  const r = i?.[l] ?? i?.default ?? i;
  return r !== i ? Pv(r, i) : r;
}
const NE = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, VE = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), UE = {
  type: "keyframes",
  duration: 0.8
}, BE = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, wE = (i, { keyframes: l }) => l.length > 2 ? UE : ki.has(i) ? i.startsWith("scale") ? VE(l[1]) : NE : BE, HE = /* @__PURE__ */ new Set([
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
function LE(i) {
  for (const l in i)
    if (!HE.has(l))
      return !0;
  return !1;
}
const eh = (i, l, r, o = {}, f, d) => (h) => {
  const y = th(o, i) || {}, S = y.delay || o.delay || 0;
  let { elapsed: p = 0 } = o;
  p = p - /* @__PURE__ */ Le(S);
  const v = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...y,
    delay: -p,
    onUpdate: (b) => {
      l.set(b), y.onUpdate && y.onUpdate(b);
    },
    onComplete: () => {
      h(), y.onComplete && y.onComplete();
    },
    name: i,
    motionValue: l,
    element: d ? void 0 : f
  };
  LE(y) || Object.assign(v, wE(i, v)), v.duration && (v.duration = /* @__PURE__ */ Le(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ Le(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let g = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Of(v), v.delay === 0 && (g = !0)), (va.instantAnimations || va.skipAnimations || f?.shouldSkipAnimations || y.skipAnimations) && (g = !0, Of(v), v.delay = 0), v.allowFlatten = !y.type && !y.ease, g && !d && l.get() !== void 0) {
    const b = oo(v.keyframes, y);
    if (b !== void 0) {
      Vt.update(() => {
        v.onUpdate(b), v.onComplete();
      });
      return;
    }
  }
  return y.isSync ? new to(v) : new RE(v);
}, jE = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function YE(i) {
  const l = jE.exec(i);
  if (!l)
    return [,];
  const [, r, o, f] = l;
  return [`--${r ?? o}`, f];
}
function kv(i, l, r = 1) {
  const [o, f] = YE(i);
  if (!o)
    return;
  const d = window.getComputedStyle(l).getPropertyValue(o);
  if (d) {
    const h = d.trim();
    return fv(h) ? parseFloat(h) : h;
  }
  return Jf(f) ? kv(f, l, r + 1) : f;
}
function r0(i) {
  const l = [{}, {}];
  return i?.values.forEach((r, o) => {
    l[0][o] = r.get(), l[1][o] = r.getVelocity();
  }), l;
}
function nh(i, l, r, o) {
  if (typeof l == "function") {
    const [f, d] = r0(o);
    l = l(r !== void 0 ? r : i.custom, f, d);
  }
  if (typeof l == "string" && (l = i.variants && i.variants[l]), typeof l == "function") {
    const [f, d] = r0(o);
    l = l(r !== void 0 ? r : i.custom, f, d);
  }
  return l;
}
function ka(i, l, r) {
  const o = i.getProps();
  return nh(o, l, r !== void 0 ? r : o.custom, i);
}
const Wv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Pi
]), Rf = (i) => Array.isArray(i);
function qE(i, l, r) {
  i.hasValue(l) ? i.getValue(l).set(r) : i.addValue(l, Ji(r));
}
function GE(i) {
  return Rf(i) ? i[i.length - 1] || 0 : i;
}
function XE(i, l) {
  const r = ka(i, l);
  let { transitionEnd: o = {}, transition: f = {}, ...d } = r || {};
  d = { ...d, ...o };
  for (const h in d) {
    const y = GE(d[h]);
    qE(i, h, y);
  }
}
const he = (i) => !!(i && i.getVelocity);
function QE(i) {
  return !!(he(i) && i.add);
}
function zf(i, l) {
  const r = i.getValue("willChange");
  if (QE(r))
    return r.add(l);
  if (!r && va.WillChange) {
    const o = new va.WillChange("auto");
    i.addValue("willChange", o), o.add(l);
  }
}
function ah(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const ZE = "framerAppearId", Iv = "data-" + ah(ZE);
function $v(i) {
  return i.props[Iv];
}
function KE({ protectedKeys: i, needsAnimating: l }, r) {
  const o = i.hasOwnProperty(r) && l[r] !== !0;
  return l[r] = !1, o;
}
function tp(i, l, { delay: r = 0, transitionOverride: o, type: f } = {}) {
  let { transition: d, transitionEnd: h, ...y } = l;
  const S = i.getDefaultTransition();
  d = d ? Pv(d, S) : S;
  const p = d?.reduceMotion, v = d?.skipAnimations;
  o && (d = o);
  const g = [], b = f && i.animationState && i.animationState.getState()[f], V = d?.path;
  V && V.animateVisualElement(i, y, d, r, g);
  for (const z in y) {
    const B = i.getValue(z, i.latestValues[z] ?? null), U = y[z];
    if (U === void 0 || b && KE(b, z))
      continue;
    const H = {
      delay: r,
      ...th(d || {}, z)
    };
    v && (H.skipAnimations = !0);
    const Y = B.get();
    if (Y !== void 0 && !B.isAnimating() && !Array.isArray(U) && U === Y && !H.velocity) {
      Vt.update(() => B.set(U));
      continue;
    }
    let q = !1;
    if (window.MotionHandoffAnimation) {
      const ct = $v(i);
      if (ct) {
        const Z = window.MotionHandoffAnimation(ct, z, Vt);
        Z !== null && (H.startTime = Z, q = !0);
      }
    }
    zf(i, z);
    const X = p ?? i.shouldReduceMotion;
    B.start(eh(z, B, U, X && Wv.has(z) ? { type: !1 } : H, i, q));
    const nt = B.animation;
    nt && g.push(nt);
  }
  if (h) {
    const z = () => Vt.update(() => {
      h && XE(i, h);
    });
    g.length ? Promise.all(g).then(z) : z();
  }
  return g;
}
function _f(i, l, r = {}) {
  const o = ka(i, l, r.type === "exit" ? i.presenceContext?.custom : void 0);
  let { transition: f = i.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (f = r.transitionOverride);
  const d = o ? () => Promise.all(tp(i, o, r)) : () => Promise.resolve(), h = i.variantChildren && i.variantChildren.size ? (S = 0) => {
    const { delayChildren: p = 0, staggerChildren: v, staggerDirection: g } = f;
    return JE(i, l, S, p, v, g, r);
  } : () => Promise.resolve(), { when: y } = f;
  if (y) {
    const [S, p] = y === "beforeChildren" ? [d, h] : [h, d];
    return S().then(() => p());
  } else
    return Promise.all([d(), h(r.delay)]);
}
function JE(i, l, r = 0, o = 0, f = 0, d = 1, h) {
  const y = [];
  for (const S of i.variantChildren)
    S.notify("AnimationStart", l), y.push(_f(S, l, {
      ...h,
      delay: r + (typeof o == "function" ? 0 : o) + Fv(i.variantChildren, S, o, f, d)
    }).then(() => S.notify("AnimationComplete", l)));
  return Promise.all(y);
}
function FE(i, l, r = {}) {
  i.notify("AnimationStart", l);
  let o;
  if (Array.isArray(l)) {
    const f = l.map((d) => _f(i, d, r));
    o = Promise.all(f);
  } else if (typeof l == "string")
    o = _f(i, l, r);
  else {
    const f = typeof l == "function" ? ka(i, l, r.custom) : l;
    o = Promise.all(tp(i, f, r));
  }
  return o.then(() => {
    i.notify("AnimationComplete", l);
  });
}
const PE = {
  test: (i) => i === "auto",
  parse: (i) => i
}, ep = (i) => (l) => l.test(i), np = [Fi, F, En, Yn, bb, Tb, PE], c0 = (i) => np.find(ep(i));
function kE(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || dv(i) : !0;
}
const WE = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function IE(i) {
  const [l, r] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [o] = r.match(Ff) || [];
  if (!o)
    return i;
  const f = r.replace(o, "");
  let d = WE.has(l) ? 1 : 0;
  return o !== r && (d *= 100), l + "(" + d + f + ")";
}
const $E = /\b([a-z-]*)\(.*?\)/gu, Nf = {
  ...un,
  getAnimatableNone: (i) => {
    const l = i.match($E);
    return l ? l.map(IE).join(" ") : i;
  }
}, Vf = {
  ...un,
  getAnimatableNone: (i) => {
    const l = un.parse(i);
    return un.createTransformer(i)(l.map((o) => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o));
  }
}, f0 = {
  ...Fi,
  transform: Math.round
}, tA = {
  rotate: Yn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Yn,
  rotateX: Yn,
  rotateY: Yn,
  rotateZ: Yn,
  scale: Ls,
  scaleX: Ls,
  scaleY: Ls,
  scaleZ: Ls,
  skew: Yn,
  skewX: Yn,
  skewY: Yn,
  distance: F,
  translateX: F,
  translateY: F,
  translateZ: F,
  x: F,
  y: F,
  z: F,
  perspective: F,
  transformPerspective: F,
  opacity: tu,
  originX: Wg,
  originY: Wg,
  originZ: F
}, eo = {
  // Border props
  borderWidth: F,
  borderTopWidth: F,
  borderRightWidth: F,
  borderBottomWidth: F,
  borderLeftWidth: F,
  borderRadius: F,
  borderTopLeftRadius: F,
  borderTopRightRadius: F,
  borderBottomRightRadius: F,
  borderBottomLeftRadius: F,
  // Positioning props
  width: F,
  maxWidth: F,
  height: F,
  maxHeight: F,
  top: F,
  right: F,
  bottom: F,
  left: F,
  inset: F,
  insetBlock: F,
  insetBlockStart: F,
  insetBlockEnd: F,
  insetInline: F,
  insetInlineStart: F,
  insetInlineEnd: F,
  // Spacing props
  padding: F,
  paddingTop: F,
  paddingRight: F,
  paddingBottom: F,
  paddingLeft: F,
  paddingBlock: F,
  paddingBlockStart: F,
  paddingBlockEnd: F,
  paddingInline: F,
  paddingInlineStart: F,
  paddingInlineEnd: F,
  margin: F,
  marginTop: F,
  marginRight: F,
  marginBottom: F,
  marginLeft: F,
  marginBlock: F,
  marginBlockStart: F,
  marginBlockEnd: F,
  marginInline: F,
  marginInlineStart: F,
  marginInlineEnd: F,
  // Typography
  fontSize: F,
  // Misc
  backgroundPositionX: F,
  backgroundPositionY: F,
  ...tA,
  zIndex: f0,
  // SVG
  fillOpacity: tu,
  strokeOpacity: tu,
  numOctaves: f0
}, eA = {
  ...eo,
  // Color props
  color: Ft,
  backgroundColor: Ft,
  outlineColor: Ft,
  fill: Ft,
  stroke: Ft,
  // Border props
  borderColor: Ft,
  borderTopColor: Ft,
  borderRightColor: Ft,
  borderBottomColor: Ft,
  borderLeftColor: Ft,
  filter: Nf,
  WebkitFilter: Nf,
  mask: Vf,
  WebkitMask: Vf
}, ap = (i) => eA[i], nA = /* @__PURE__ */ new Set([Nf, Vf]);
function ip(i, l) {
  let r = ap(i);
  return nA.has(r) || (r = un), r.getAnimatableNone ? r.getAnimatableNone(l) : void 0;
}
const aA = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function iA(i, l, r) {
  let o = 0, f;
  for (; o < i.length && !f; ) {
    const d = i[o];
    typeof d == "string" && !aA.has(d) && Ki(d).values.length && (f = i[o]), o++;
  }
  if (f && r)
    for (const d of l)
      i[d] = ip(r, f);
}
class lA extends $f {
  constructor(l, r, o, f, d) {
    super(l, r, o, f, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: r, name: o } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let v = 0; v < l.length; v++) {
      let g = l[v];
      if (typeof g == "string" && (g = g.trim(), Jf(g))) {
        const b = kv(g, r.current);
        b !== void 0 && (l[v] = b), v === l.length - 1 && (this.finalKeyframe = g);
      }
    }
    if (this.resolveNoneKeyframes(), !Wv.has(o) || l.length !== 2)
      return;
    const [f, d] = l, h = c0(f), y = c0(d), S = kg(f), p = kg(d);
    if (S !== p && ga[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (h !== y)
      if (l0(h) && l0(y))
        for (let v = 0; v < l.length; v++) {
          const g = l[v];
          typeof g == "string" && (l[v] = parseFloat(g));
        }
      else ga[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: r } = this, o = [];
    for (let f = 0; f < l.length; f++)
      (l[f] === null || kE(l[f])) && o.push(f);
    o.length && iA(l, o, r);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: r, name: o } = this;
    if (!l || !l.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ga[o](l.measureViewportBox(), window.getComputedStyle(l.current)), r[0] = this.measuredOrigin;
    const f = r[r.length - 1];
    f !== void 0 && l.getValue(o, f).jump(f, !1);
  }
  measureEndState() {
    const { element: l, name: r, unresolvedKeyframes: o } = this;
    if (!l || !l.current)
      return;
    const f = l.getValue(r);
    f && f.jump(this.measuredOrigin, !1);
    const d = o.length - 1, h = o[d];
    o[d] = ga[r](l.measureViewportBox(), window.getComputedStyle(l.current)), h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h), this.removedTransforms?.length && this.removedTransforms.forEach(([y, S]) => {
      l.getValue(y).set(S);
    }), this.resolveNoneKeyframes();
  }
}
const ih = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function lp(i, l, r) {
  if (i == null)
    return [];
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    let o = document;
    const f = r?.[i] ?? o.querySelectorAll(i);
    return f ? Array.from(f) : [];
  }
  return Array.from(i).filter((o) => o != null);
}
const Uf = (i, l) => l && typeof i == "number" ? l.transform(i) : i;
function uA(i) {
  return hv(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: lh } = /* @__PURE__ */ Cv(queueMicrotask, !1), ln = {
  x: !1,
  y: !1
};
function up() {
  return ln.x || ln.y;
}
function sA(i) {
  return i === "x" || i === "y" ? ln[i] ? null : (ln[i] = !0, () => {
    ln[i] = !1;
  }) : ln.x || ln.y ? null : (ln.x = ln.y = !0, () => {
    ln.x = ln.y = !1;
  });
}
function sp(i, l) {
  const r = lp(i), o = new AbortController(), f = {
    passive: !0,
    ...l,
    signal: o.signal
  };
  return [r, f, () => o.abort()];
}
function oA(i) {
  return !(i.pointerType === "touch" || up());
}
function rA(i, l, r = {}) {
  const [o, f, d] = sp(i, r);
  return o.forEach((h) => {
    let y = !1, S = !1, p;
    const v = () => {
      h.removeEventListener("pointerleave", z);
    }, g = (U) => {
      p && (p(U), p = void 0), v();
    }, b = (U) => {
      y = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), S && (S = !1, g(U));
    }, V = () => {
      y = !0, window.addEventListener("pointerup", b, f), window.addEventListener("pointercancel", b, f);
    }, z = (U) => {
      if (U.pointerType !== "touch") {
        if (y) {
          S = !0;
          return;
        }
        g(U);
      }
    }, B = (U) => {
      if (!oA(U))
        return;
      S = !1;
      const H = l(h, U);
      typeof H == "function" && (p = H, h.addEventListener("pointerleave", z, f));
    };
    h.addEventListener("pointerenter", B, f), h.addEventListener("pointerdown", V, f);
  }), d;
}
const op = (i, l) => l ? i === l ? !0 : op(i, l.parentElement) : !1, uh = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, cA = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function fA(i) {
  return cA.has(i.tagName) || i.isContentEditable === !0;
}
const hA = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function dA(i) {
  return hA.has(i.tagName) || i.isContentEditable === !0;
}
const Xs = /* @__PURE__ */ new WeakSet();
function h0(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function sf(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const mA = (i, l) => {
  const r = i.currentTarget;
  if (!r)
    return;
  const o = h0(() => {
    if (Xs.has(r))
      return;
    sf(r, "down");
    const f = h0(() => {
      sf(r, "up");
    }), d = () => sf(r, "cancel");
    r.addEventListener("keyup", f, l), r.addEventListener("blur", d, l);
  });
  r.addEventListener("keydown", o, l), r.addEventListener("blur", () => r.removeEventListener("keydown", o), l);
};
function d0(i) {
  return uh(i) && !up();
}
const m0 = /* @__PURE__ */ new WeakSet();
function yA(i, l, r = {}) {
  const [o, f, d] = sp(i, r), h = (y) => {
    const S = y.currentTarget;
    if (!d0(y) || m0.has(y))
      return;
    Xs.add(S), r.stopPropagation && m0.add(y);
    const p = l(S, y), v = { ...f, capture: !0 }, g = (z, B) => {
      window.removeEventListener("pointerup", b, v), window.removeEventListener("pointercancel", V, v), Xs.has(S) && Xs.delete(S), d0(z) && typeof p == "function" && p(z, { success: B });
    }, b = (z) => {
      g(z, S === window || S === document || r.useGlobalTarget || op(S, z.target));
    }, V = (z) => {
      g(z, !1);
    };
    window.addEventListener("pointerup", b, v), window.addEventListener("pointercancel", V, v);
  };
  return o.forEach((y) => {
    (r.useGlobalTarget ? window : y).addEventListener("pointerdown", h, f), uA(y) && (y.addEventListener("focus", (p) => mA(p, f)), !fA(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0));
  }), d;
}
function sh(i) {
  return hv(i) && "ownerSVGElement" in i;
}
const Qs = /* @__PURE__ */ new WeakMap();
let Zs;
const rp = (i, l, r) => (o, f) => f && f[0] ? f[0][i + "Size"] : sh(o) && "getBBox" in o ? o.getBBox()[l] : o[r], gA = /* @__PURE__ */ rp("inline", "width", "offsetWidth"), vA = /* @__PURE__ */ rp("block", "height", "offsetHeight");
function pA({ target: i, borderBoxSize: l }) {
  Qs.get(i)?.forEach((r) => {
    r(i, {
      get width() {
        return gA(i, l);
      },
      get height() {
        return vA(i, l);
      }
    });
  });
}
function SA(i) {
  i.forEach(pA);
}
function TA() {
  typeof ResizeObserver > "u" || (Zs = new ResizeObserver(SA));
}
function bA(i, l) {
  Zs || TA();
  const r = lp(i);
  return r.forEach((o) => {
    let f = Qs.get(o);
    f || (f = /* @__PURE__ */ new Set(), Qs.set(o, f)), f.add(l), Zs?.observe(o);
  }), () => {
    r.forEach((o) => {
      const f = Qs.get(o);
      f?.delete(l), f?.size || Zs?.unobserve(o);
    });
  };
}
const Ks = /* @__PURE__ */ new Set();
let Qi;
function EA() {
  Qi = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Ks.forEach((l) => l(i));
  }, window.addEventListener("resize", Qi);
}
function AA(i) {
  return Ks.add(i), Qi || EA(), () => {
    Ks.delete(i), !Ks.size && typeof Qi == "function" && (window.removeEventListener("resize", Qi), Qi = void 0);
  };
}
function y0(i, l) {
  return typeof i == "function" ? AA(i) : bA(i, l);
}
function MA(i) {
  return sh(i) && i.tagName === "svg";
}
const DA = [...np, Ft, un], CA = (i) => DA.find(ep(i)), g0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Zi = () => ({
  x: g0(),
  y: g0()
}), v0 = () => ({ min: 0, max: 0 }), kt = () => ({
  x: v0(),
  y: v0()
}), xA = /* @__PURE__ */ new WeakMap();
function ro(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function eu(i) {
  return typeof i == "string" || Array.isArray(i);
}
const oh = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], rh = ["initial", ...oh];
function co(i) {
  return ro(i.animate) || rh.some((l) => eu(i[l]));
}
function cp(i) {
  return !!(co(i) || i.variants);
}
function OA(i, l, r) {
  for (const o in l) {
    const f = l[o], d = r[o];
    if (he(f))
      i.addValue(o, f);
    else if (he(d))
      i.addValue(o, Ji(f, { owner: i }));
    else if (d !== f)
      if (i.hasValue(o)) {
        const h = i.getValue(o);
        h.liveStyle === !0 ? h.jump(f) : h.hasAnimated || h.set(f);
      } else {
        const h = i.getStaticValue(o);
        i.addValue(o, Ji(h !== void 0 ? h : f, { owner: i }));
      }
  }
  for (const o in r)
    l[o] === void 0 && i.removeValue(o);
  return l;
}
const no = { current: null }, ch = { current: !1 }, RA = typeof window < "u";
function fp() {
  if (ch.current = !0, !!RA)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => no.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      no.current = !1;
}
const p0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let ao = {};
function hp(i) {
  ao = i;
}
function zA() {
  return ao;
}
class _A {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, r, o) {
    return {};
  }
  constructor({ parent: l, props: r, presenceContext: o, reducedMotionConfig: f, skipAnimations: d, blockInitialAnimation: h, visualState: y }, S = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = $f, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const V = Se.now();
      this.renderScheduledAt < V && (this.renderScheduledAt = V, Vt.render(this.render, !1, !0));
    };
    const { latestValues: p, renderState: v } = y;
    this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = r.initial ? { ...p } : {}, this.renderState = v, this.parent = l, this.props = r, this.presenceContext = o, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = f, this.skipAnimationsConfig = d, this.options = S, this.blockInitialAnimation = !!h, this.isControllingVariants = co(r), this.isVariantNode = cp(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: g, ...b } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const V in b) {
      const z = b[V];
      p[V] !== void 0 && he(z) && z.set(p[V]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const r in this.initialValues)
        this.values.get(r)?.jump(this.initialValues[r]), this.latestValues[r] = this.initialValues[r];
    this.current = l, xA.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (ch.current || fp(), this.shouldReduceMotion = no.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), pa(this.notifyUpdate), pa(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const r = this.features[l];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, r) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), r.accelerate && Jv.has(l) && this.current instanceof HTMLElement) {
      const { factory: h, keyframes: y, times: S, ease: p, duration: v } = r.accelerate, g = new Zv({
        element: this.current,
        name: l,
        keyframes: y,
        times: S,
        ease: p,
        duration: /* @__PURE__ */ Le(v)
      }), b = h(g);
      this.valueSubscriptions.set(l, () => {
        b(), g.cancel();
      });
      return;
    }
    const o = ki.has(l);
    o && this.onBindTransform && this.onBindTransform();
    const f = r.on("change", (h) => {
      this.latestValues[l] = h, this.props.onUpdate && Vt.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let d;
    typeof window < "u" && window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, l, r)), this.valueSubscriptions.set(l, () => {
      f(), d && d();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in ao) {
      const r = ao[l];
      if (!r)
        continue;
      const { isEnabled: o, Feature: f } = r;
      if (!this.features[l] && f && o(this.props) && (this.features[l] = new f(this)), this.features[l]) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), d.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : kt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, r) {
    this.latestValues[l] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, r) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let o = 0; o < p0.length; o++) {
      const f = p0[o];
      this.propEventSubscriptions[f] && (this.propEventSubscriptions[f](), delete this.propEventSubscriptions[f]);
      const d = "on" + f, h = l[d];
      h && (this.propEventSubscriptions[f] = this.on(f, h));
    }
    this.prevMotionValues = OA(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(l), () => r.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, r) {
    const o = this.values.get(l);
    r !== o && (o && this.removeValue(l), this.bindToMotionValue(l, r), this.values.set(l, r), this.latestValues[l] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const r = this.valueSubscriptions.get(l);
    r && (r(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, r) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let o = this.values.get(l);
    return o === void 0 && r !== void 0 && (o = Ji(r === null ? void 0 : r, { owner: this }), this.addValue(l, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, r) {
    let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return o != null && (typeof o == "string" && (fv(o) || dv(o)) ? o = parseFloat(o) : !CA(o) && un.test(r) && (o = ip(l, r)), this.setBaseTarget(l, he(o) ? o.get() : o)), he(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, r) {
    this.baseTarget[l] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const d = nh(this.props, r, this.presenceContext?.custom);
      d && (o = d[l]);
    }
    if (r && o !== void 0)
      return o;
    const f = this.getBaseTargetFromProps(this.props, l);
    return f !== void 0 && !he(f) ? f : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, r) {
    return this.events[l] || (this.events[l] = new Qf()), this.events[l].add(r);
  }
  notify(l, ...r) {
    this.events[l] && this.events[l].notify(...r);
  }
  scheduleRenderMicrotask() {
    lh.render(this.render);
  }
}
class dp extends _A {
  constructor() {
    super(...arguments), this.KeyframeResolver = lA;
  }
  sortInstanceNodePosition(l, r) {
    return l.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, r) {
    const o = l.style;
    return o ? o[r] : void 0;
  }
  removeValueFromRenderState(l, { vars: r, style: o }) {
    delete r[l], delete o[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    he(l) && (this.childSubscription = l.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class Sa {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function mp({ top: i, left: l, right: r, bottom: o }) {
  return {
    x: { min: l, max: r },
    y: { min: i, max: o }
  };
}
function NA({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function VA(i, l) {
  if (!l)
    return i;
  const r = l({ x: i.left, y: i.top }), o = l({ x: i.right, y: i.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: o.y,
    right: o.x
  };
}
function of(i) {
  return i === void 0 || i === 1;
}
function Bf({ scale: i, scaleX: l, scaleY: r }) {
  return !of(i) || !of(l) || !of(r);
}
function Za(i) {
  return Bf(i) || yp(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function yp(i) {
  return S0(i.x) || S0(i.y);
}
function S0(i) {
  return i && i !== "0%";
}
function io(i, l, r) {
  const o = i - r, f = l * o;
  return r + f;
}
function T0(i, l, r, o, f) {
  return f !== void 0 && (i = io(i, f, o)), io(i, r, o) + l;
}
function wf(i, l = 0, r = 1, o, f) {
  i.min = T0(i.min, l, r, o, f), i.max = T0(i.max, l, r, o, f);
}
function gp(i, { x: l, y: r }) {
  wf(i.x, l.translate, l.scale, l.originPoint), wf(i.y, r.translate, r.scale, r.originPoint);
}
const b0 = 0.999999999999, E0 = 1.0000000000001;
function UA(i, l, r, o = !1) {
  const f = r.length;
  if (!f)
    return;
  l.x = l.y = 1;
  let d, h;
  for (let y = 0; y < f; y++) {
    d = r[y], h = d.projectionDelta;
    const { visualElement: S } = d.options;
    S && S.props.style && S.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && (bn(i.x, -d.scroll.offset.x), bn(i.y, -d.scroll.offset.y)), h && (l.x *= h.x.scale, l.y *= h.y.scale, gp(i, h)), o && Za(d.latestValues) && Js(i, d.latestValues, d.layout?.layoutBox));
  }
  l.x < E0 && l.x > b0 && (l.x = 1), l.y < E0 && l.y > b0 && (l.y = 1);
}
function bn(i, l) {
  i.min += l, i.max += l;
}
function A0(i, l, r, o, f = 0.5) {
  const d = Nt(i.min, i.max, f);
  wf(i, l, r, d, o);
}
function M0(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function Js(i, l, r) {
  const o = r ?? i;
  A0(i.x, M0(l.x, o.x), l.scaleX, l.scale, l.originX), A0(i.y, M0(l.y, o.y), l.scaleY, l.scale, l.originY);
}
function vp(i, l) {
  return mp(VA(i.getBoundingClientRect(), l));
}
function BA(i, l, r) {
  const o = vp(i, r), { scroll: f } = l;
  return f && (bn(o.x, f.offset.x), bn(o.y, f.offset.y)), o;
}
const wA = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, HA = Pi.length;
function LA(i, l, r) {
  let o = "", f = !0;
  for (let h = 0; h < HA; h++) {
    const y = Pi[h], S = i[y];
    if (S === void 0)
      continue;
    let p = !0;
    if (typeof S == "number")
      p = S === (y.startsWith("scale") ? 1 : 0);
    else {
      const v = parseFloat(S);
      p = y.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!p || r) {
      const v = Uf(S, eo[y]);
      if (!p) {
        f = !1;
        const g = wA[y] || y;
        o += `${g}(${v}) `;
      }
      r && (l[y] = v);
    }
  }
  const d = i.pathRotation;
  return d && (f = !1, o += `rotate(${Uf(d, eo.pathRotation)}) `), o = o.trim(), r ? o = r(l, f ? "" : o) : f && (o = "none"), o;
}
function fh(i, l, r) {
  const { style: o, vars: f, transformOrigin: d } = i;
  let h = !1, y = !1;
  for (const S in l) {
    const p = l[S];
    if (ki.has(S)) {
      h = !0;
      continue;
    } else if (Ov(S)) {
      f[S] = p;
      continue;
    } else {
      const v = Uf(p, eo[S]);
      S.startsWith("origin") ? (y = !0, d[S] = v) : o[S] = v;
    }
  }
  if (l.transform || (h || r ? o.transform = LA(l, i.transform, r) : o.transform && (o.transform = "none")), y) {
    const { originX: S = "50%", originY: p = "50%", originZ: v = 0 } = d;
    o.transformOrigin = `${S} ${p} ${v}`;
  }
}
function pp(i, { style: l, vars: r }, o, f) {
  const d = i.style;
  let h;
  for (h in l)
    d[h] = l[h];
  f?.applyProjectionStyles(d, o);
  for (h in r)
    d.setProperty(h, r[h]);
}
function D0(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const Jl = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (F.test(i))
        i = parseFloat(i);
      else
        return i;
    const r = D0(i, l.target.x), o = D0(i, l.target.y);
    return `${r}% ${o}%`;
  }
}, jA = {
  correct: (i, { treeScale: l, projectionDelta: r }) => {
    const o = i, f = un.parse(i);
    if (f.length > 5)
      return o;
    const d = un.createTransformer(i), h = typeof f[0] != "number" ? 1 : 0, y = r.x.scale * l.x, S = r.y.scale * l.y;
    f[0 + h] /= y, f[1 + h] /= S;
    const p = Nt(y, S, 0.5);
    return typeof f[2 + h] == "number" && (f[2 + h] /= p), typeof f[3 + h] == "number" && (f[3 + h] /= p), d(f);
  }
}, Hf = {
  borderRadius: {
    ...Jl,
    applyTo: [...ih]
  },
  borderTopLeftRadius: Jl,
  borderTopRightRadius: Jl,
  borderBottomLeftRadius: Jl,
  borderBottomRightRadius: Jl,
  boxShadow: jA
};
function Sp(i, { layout: l, layoutId: r }) {
  return ki.has(i) || i.startsWith("origin") || (l || r !== void 0) && (!!Hf[i] || i === "opacity");
}
function hh(i, l, r) {
  const o = i.style, f = l?.style, d = {};
  if (!o)
    return d;
  for (const h in o)
    (he(o[h]) || f && he(f[h]) || Sp(h, i) || r?.getValue(h)?.liveStyle !== void 0) && (d[h] = o[h]);
  return d;
}
function YA(i) {
  return window.getComputedStyle(i);
}
class qA extends dp {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = pp;
  }
  mount(l) {
    so(!!l.style), super.mount(l);
  }
  readValueFromInstance(l, r) {
    if (ki.has(r))
      return this.projection?.isProjecting ? Af(r) : sE(l, r);
    {
      const o = YA(l), f = (Ov(r) ? o.getPropertyValue(r) : o[r]) || 0;
      return typeof f == "string" ? f.trim() : f;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: r }) {
    return vp(l, r);
  }
  build(l, r, o) {
    fh(l, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, r, o) {
    return hh(l, r, o);
  }
}
const GA = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, XA = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function QA(i, l, r = 1, o = 0, f = !0) {
  i.pathLength = 1;
  const d = f ? GA : XA;
  i[d.offset] = `${-o}`, i[d.array] = `${l} ${r}`;
}
const ZA = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Tp(i, {
  attrX: l,
  attrY: r,
  attrScale: o,
  pathLength: f,
  pathSpacing: d = 1,
  pathOffset: h = 0,
  // This is object creation, which we try to avoid per-frame.
  ...y
}, S, p, v) {
  if (fh(i, y, p), S) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: g, style: b } = i;
  g.transform && (b.transform = g.transform, delete g.transform), (b.transform || g.transformOrigin) && (b.transformOrigin = g.transformOrigin ?? "50% 50%", delete g.transformOrigin), b.transform && (b.transformBox = v?.transformBox ?? "fill-box", delete g.transformBox);
  for (const V of ZA)
    g[V] !== void 0 && (b[V] = g[V], delete g[V]);
  l !== void 0 && (g.x = l), r !== void 0 && (g.y = r), o !== void 0 && (g.scale = o), f !== void 0 && QA(g, f, d, h, !1);
}
const bp = /* @__PURE__ */ new Set([
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
]), Ep = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function KA(i, l, r, o) {
  pp(i, l, void 0, o);
  for (const f in l.attrs)
    i.setAttribute(bp.has(f) ? f : ah(f), l.attrs[f]);
}
function Ap(i, l, r) {
  const o = hh(i, l, r);
  for (const f in i)
    if (he(i[f]) || he(l[f])) {
      const d = Pi.indexOf(f) !== -1 ? "attr" + f.charAt(0).toUpperCase() + f.substring(1) : f;
      o[d] = i[f];
    }
  return o;
}
class JA extends dp {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = kt;
  }
  getBaseTargetFromProps(l, r) {
    return l[r];
  }
  readValueFromInstance(l, r) {
    if (ki.has(r)) {
      const o = ap(r);
      return o && o.default || 0;
    }
    return r = bp.has(r) ? r : ah(r), l.getAttribute(r);
  }
  scrapeMotionValuesFromProps(l, r, o) {
    return Ap(l, r, o);
  }
  build(l, r, o) {
    Tp(l, r, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(l, r, o, f) {
    KA(l, r, o, f);
  }
  mount(l) {
    this.isSVGTag = Ep(l.tagName), super.mount(l);
  }
}
const FA = rh.length;
function Mp(i) {
  if (!i)
    return;
  if (!i.isControllingVariants) {
    const r = i.parent ? Mp(i.parent) || {} : {};
    return i.props.initial !== void 0 && (r.initial = i.props.initial), r;
  }
  const l = {};
  for (let r = 0; r < FA; r++) {
    const o = rh[r], f = i.props[o];
    (eu(f) || f === !1) && (l[o] = f);
  }
  return l;
}
function Dp(i, l) {
  if (!Array.isArray(l))
    return !1;
  const r = l.length;
  if (r !== i.length)
    return !1;
  for (let o = 0; o < r; o++)
    if (l[o] !== i[o])
      return !1;
  return !0;
}
const PA = [...oh].reverse(), kA = oh.length;
function WA(i) {
  return (l) => Promise.all(l.map(({ animation: r, options: o }) => FE(i, r, o)));
}
function IA(i) {
  let l = WA(i), r = C0(), o = !0, f = !1;
  const d = (p) => (v, g) => {
    const b = ka(i, g, p === "exit" ? i.presenceContext?.custom : void 0);
    if (b) {
      const { transition: V, transitionEnd: z, ...B } = b;
      v = { ...v, ...B, ...z };
    }
    return v;
  };
  function h(p) {
    l = p(i);
  }
  function y(p) {
    const { props: v } = i, g = Mp(i.parent) || {}, b = [], V = /* @__PURE__ */ new Set();
    let z = {}, B = 1 / 0;
    for (let H = 0; H < kA; H++) {
      const Y = PA[H], q = r[Y], X = v[Y] !== void 0 ? v[Y] : g[Y], nt = eu(X), ct = Y === p ? q.isActive : null;
      ct === !1 && (B = H);
      let Z = X === g[Y] && X !== v[Y] && nt;
      if (Z && (o || f) && i.manuallyAnimateOnMount && (Z = !1), q.protectedKeys = { ...z }, // If it isn't active and hasn't *just* been set as inactive
      !q.isActive && ct === null || // If we didn't and don't have any defined prop for this animation type
      !X && !q.prevProp || // Or if the prop doesn't define an animation
      ro(X) || typeof X == "boolean")
        continue;
      if (Y === "exit" && q.isActive && ct !== !0) {
        q.prevResolvedValues && (z = {
          ...z,
          ...q.prevResolvedValues
        });
        continue;
      }
      const G = $A(q.prevProp, X);
      let xt = G || // If we're making this variant active, we want to always make it active
      Y === p && q.isActive && !Z && nt || // If we removed a higher-priority variant (i is in reverse order)
      H > B && nt, W = !1;
      const vt = Array.isArray(X) ? X : [X];
      let Ot = vt.reduce(d(Y), {});
      ct === !1 && (Ot = {});
      const { prevResolvedValues: de = {} } = q, Wt = {
        ...de,
        ...Ot
      }, Rt = (K) => {
        xt = !0, V.has(K) && (W = !0, V.delete(K)), q.needsAnimating[K] = !0;
        const ot = i.getValue(K);
        ot && (ot.liveStyle = !1);
      };
      for (const K in Wt) {
        const ot = Ot[K], ft = de[K];
        if (z.hasOwnProperty(K))
          continue;
        let It = !1;
        Rf(ot) && Rf(ft) ? It = !Dp(ot, ft) || G : It = ot !== ft, It ? ot != null ? Rt(K) : V.add(K) : ot !== void 0 && V.has(K) ? Rt(K) : q.protectedKeys[K] = !0;
      }
      q.prevProp = X, q.prevResolvedValues = Ot, q.isActive && (z = { ...z, ...Ot }), (o || f) && i.blockInitialAnimation && (xt = !1);
      const L = Z && G;
      xt && (!L || W) && b.push(...vt.map((K) => {
        const ot = { type: Y };
        if (typeof K == "string" && (o || f) && !L && i.manuallyAnimateOnMount && i.parent) {
          const { parent: ft } = i, It = ka(ft, K);
          if (ft.enteringChildren && It) {
            const { delayChildren: ke } = It.transition || {};
            ot.delay = Fv(ft.enteringChildren, i, ke);
          }
        }
        return {
          animation: K,
          options: ot
        };
      }));
    }
    if (V.size) {
      const H = {};
      if (typeof v.initial != "boolean") {
        const Y = ka(i, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        Y && Y.transition && (H.transition = Y.transition);
      }
      V.forEach((Y) => {
        const q = i.getBaseTarget(Y), X = i.getValue(Y);
        X && (X.liveStyle = !0), H[Y] = q ?? null;
      }), b.push({ animation: H });
    }
    let U = !!b.length;
    return o && (v.initial === !1 || v.initial === v.animate) && !i.manuallyAnimateOnMount && (U = !1), o = !1, f = !1, U ? l(b) : Promise.resolve();
  }
  function S(p, v) {
    if (r[p].isActive === v)
      return Promise.resolve();
    i.variantChildren?.forEach((b) => b.animationState?.setActive(p, v)), r[p].isActive = v;
    const g = y(p);
    for (const b in r)
      r[b].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: y,
    setActive: S,
    setAnimateFunction: h,
    getState: () => r,
    reset: () => {
      r = C0(), f = !0;
    }
  };
}
function $A(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !Dp(l, i) : !1;
}
function Qa(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function C0() {
  return {
    animate: Qa(!0),
    whileInView: Qa(),
    whileHover: Qa(),
    whileTap: Qa(),
    whileDrag: Qa(),
    whileFocus: Qa(),
    exit: Qa()
  };
}
function Lf(i, l) {
  i.min = l.min, i.max = l.max;
}
function an(i, l) {
  Lf(i.x, l.x), Lf(i.y, l.y);
}
function x0(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const Cp = 1e-4, t2 = 1 - Cp, e2 = 1 + Cp, xp = 0.01, n2 = 0 - xp, a2 = 0 + xp;
function Te(i) {
  return i.max - i.min;
}
function i2(i, l, r) {
  return Math.abs(i - l) <= r;
}
function O0(i, l, r, o = 0.5) {
  i.origin = o, i.originPoint = Nt(l.min, l.max, i.origin), i.scale = Te(r) / Te(l), i.translate = Nt(r.min, r.max, i.origin) - i.originPoint, (i.scale >= t2 && i.scale <= e2 || isNaN(i.scale)) && (i.scale = 1), (i.translate >= n2 && i.translate <= a2 || isNaN(i.translate)) && (i.translate = 0);
}
function Wl(i, l, r, o) {
  O0(i.x, l.x, r.x, o ? o.originX : void 0), O0(i.y, l.y, r.y, o ? o.originY : void 0);
}
function R0(i, l, r, o = 0) {
  const f = o ? Nt(r.min, r.max, o) : r.min;
  i.min = f + l.min, i.max = i.min + Te(l);
}
function l2(i, l, r, o) {
  R0(i.x, l.x, r.x, o?.x), R0(i.y, l.y, r.y, o?.y);
}
function z0(i, l, r, o = 0) {
  const f = o ? Nt(r.min, r.max, o) : r.min;
  i.min = l.min - f, i.max = i.min + Te(l);
}
function lo(i, l, r, o) {
  z0(i.x, l.x, r.x, o?.x), z0(i.y, l.y, r.y, o?.y);
}
function _0(i, l, r, o, f) {
  return i -= l, i = io(i, 1 / r, o), f !== void 0 && (i = io(i, 1 / f, o)), i;
}
function u2(i, l = 0, r = 1, o = 0.5, f, d = i, h = i) {
  if (En.test(l) && (l = parseFloat(l), l = Nt(h.min, h.max, l / 100) - h.min), typeof l != "number")
    return;
  let y = Nt(d.min, d.max, o);
  i === d && (y -= l), i.min = _0(i.min, l, r, y, f), i.max = _0(i.max, l, r, y, f);
}
function N0(i, l, [r, o, f], d, h) {
  u2(i, l[r], l[o], l[f], l.scale, d, h);
}
const s2 = ["x", "scaleX", "originX"], o2 = ["y", "scaleY", "originY"];
function V0(i, l, r, o) {
  N0(i.x, l, s2, r ? r.x : void 0, o ? o.x : void 0), N0(i.y, l, o2, r ? r.y : void 0, o ? o.y : void 0);
}
function U0(i) {
  return i.translate === 0 && i.scale === 1;
}
function Op(i) {
  return U0(i.x) && U0(i.y);
}
function B0(i, l) {
  return i.min === l.min && i.max === l.max;
}
function r2(i, l) {
  return B0(i.x, l.x) && B0(i.y, l.y);
}
function w0(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function Rp(i, l) {
  return w0(i.x, l.x) && w0(i.y, l.y);
}
function H0(i) {
  return Te(i.x) / Te(i.y);
}
function L0(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function Tn(i) {
  return [i("x"), i("y")];
}
function c2(i, l, r) {
  let o = "";
  const f = i.x.translate / l.x, d = i.y.translate / l.y, h = r?.z || 0;
  if ((f || d || h) && (o = `translate3d(${f}px, ${d}px, ${h}px) `), (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `), r) {
    const { transformPerspective: p, rotate: v, pathRotation: g, rotateX: b, rotateY: V, skewX: z, skewY: B } = r;
    p && (o = `perspective(${p}px) ${o}`), v && (o += `rotate(${v}deg) `), g && (o += `rotate(${g}deg) `), b && (o += `rotateX(${b}deg) `), V && (o += `rotateY(${V}deg) `), z && (o += `skewX(${z}deg) `), B && (o += `skewY(${B}deg) `);
  }
  const y = i.x.scale * l.x, S = i.y.scale * l.y;
  return (y !== 1 || S !== 1) && (o += `scale(${y}, ${S})`), o || "none";
}
const f2 = ih.length, j0 = (i) => typeof i == "string" ? parseFloat(i) : i, Y0 = (i) => typeof i == "number" || F.test(i);
function h2(i, l, r, o, f, d) {
  f ? (i.opacity = Nt(0, r.opacity ?? 1, d2(o)), i.opacityExit = Nt(l.opacity ?? 1, 0, m2(o))) : d && (i.opacity = Nt(l.opacity ?? 1, r.opacity ?? 1, o));
  for (let h = 0; h < f2; h++) {
    const y = ih[h];
    let S = q0(l, y), p = q0(r, y);
    if (S === void 0 && p === void 0)
      continue;
    S || (S = 0), p || (p = 0), S === 0 || p === 0 || Y0(S) === Y0(p) ? (i[y] = Math.max(Nt(j0(S), j0(p), o), 0), (En.test(p) || En.test(S)) && (i[y] += "%")) : i[y] = p;
  }
  (l.rotate || r.rotate) && (i.rotate = Nt(l.rotate || 0, r.rotate || 0, o));
}
function q0(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const d2 = /* @__PURE__ */ zp(0, 0.5, Ev), m2 = /* @__PURE__ */ zp(0.5, 0.95, Pe);
function zp(i, l, r) {
  return (o) => o < i ? 0 : o > l ? 1 : r(/* @__PURE__ */ $l(i, l, o));
}
function y2(i, l, r) {
  const o = he(i) ? i : Ji(i);
  return o.start(eh("", o, l, r)), o.animation;
}
function nu(i, l, r, o = { passive: !0 }) {
  return i.addEventListener(l, r, o), () => i.removeEventListener(l, r, o);
}
const g2 = (i, l) => i.depth - l.depth;
class v2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    Xf(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    ks(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(g2), this.isDirty = !1, this.children.forEach(l);
  }
}
function p2(i, l) {
  const r = Se.now(), o = ({ timestamp: f }) => {
    const d = f - r;
    d >= l && (pa(o), i(d - l));
  };
  return Vt.setup(o, !0), () => pa(o);
}
function Fs(i) {
  return he(i) ? i.get() : i;
}
class S2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    Xf(this.members, l);
    for (let r = this.members.length - 1; r >= 0; r--) {
      const o = this.members[r];
      if (o === l || o === this.lead || o === this.prevLead)
        continue;
      const f = o.instance;
      (!f || f.isConnected === !1) && !o.snapshot && (ks(this.members, o), o.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (ks(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(l) {
    for (let r = this.members.indexOf(l) - 1; r >= 0; r--) {
      const o = this.members[r];
      if (o.isPresent !== !1 && o.instance?.isConnected !== !1)
        return this.promote(o), !0;
    }
    return !1;
  }
  promote(l, r) {
    const o = this.lead;
    if (l !== o && (this.prevLead = o, this.lead = l, l.show(), o)) {
      o.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: f } = o.options, { layoutDependency: d } = l.options;
      (f === void 0 || f !== d) && (l.resumeFrom = o, r && (o.preserveOpacity = !0), o.snapshot && (l.snapshot = o.snapshot, l.snapshot.latestValues = o.animationValues || o.latestValues), l.root?.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && o.hide();
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
const Ps = {
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
}, rf = ["", "X", "Y", "Z"], T2 = 1e3;
let b2 = 0;
function cf(i, l, r, o) {
  const { latestValues: f } = l;
  f[i] && (r[i] = f[i], l.setStaticValue(i, 0), o && (o[i] = 0));
}
function _p(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const r = $v(l);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: f, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(r, "transform", Vt, !(f || d));
  }
  const { parent: o } = i;
  o && !o.hasCheckedOptimisedAppear && _p(o);
}
function Np({ attachResizeListener: i, defaultParent: l, measureScroll: r, checkIsScrollRoot: o, resetTransform: f }) {
  return class {
    constructor(h = {}, y = l?.()) {
      this.id = b2++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(M2), this.nodes.forEach(z2), this.nodes.forEach(_2), this.nodes.forEach(D2);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = h, this.root = y ? y.root || y : this, this.path = y ? [...y.path, y] : [], this.parent = y, this.depth = y ? y.depth + 1 : 0;
      for (let S = 0; S < this.path.length; S++)
        this.path[S].shouldResetTransform = !0;
      this.root === this && (this.nodes = new v2());
    }
    addEventListener(h, y) {
      return this.eventHandlers.has(h) || this.eventHandlers.set(h, new Qf()), this.eventHandlers.get(h).add(y);
    }
    notifyListeners(h, ...y) {
      const S = this.eventHandlers.get(h);
      S && S.notify(...y);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    /**
     * Lifecycles
     */
    mount(h) {
      if (this.instance)
        return;
      this.isSVG = sh(h) && !MA(h), this.instance = h;
      const { layoutId: y, layout: S, visualElement: p } = this.options;
      if (p && !p.current && p.mount(h), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (S || y) && (this.isLayoutDirty = !0), i) {
        let v, g = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        Vt.read(() => {
          g = window.innerWidth;
        }), i(h, () => {
          const V = window.innerWidth;
          V !== g && (g = V, this.root.updateBlockedByResize = !0, v && v(), v = p2(b, 250), Ps.hasAnimatedSinceResize && (Ps.hasAnimatedSinceResize = !1, this.nodes.forEach(Q0)));
        });
      }
      y && this.root.registerSharedNode(y, this), this.options.animate !== !1 && p && (y || S) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: g, hasRelativeLayoutChanged: b, layout: V }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const z = this.options.transition || p.getDefaultTransition() || w2, { onLayoutAnimationStart: B, onLayoutAnimationComplete: U } = p.getProps(), H = !this.targetLayout || !Rp(this.targetLayout, V), Y = !g && b;
        if (this.options.layoutRoot || this.resumeFrom || Y || g && (H || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const q = {
            ...th(z, "layout"),
            onPlay: B,
            onComplete: U
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (q.delay = 0, q.type = !1), this.startAnimation(q), this.setAnimationOrigin(v, Y, q.path);
        } else
          g || Q0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = V;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), pa(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(N2), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && _p(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const g = this.path[v];
        g.shouldResetTransform = !0, (typeof g.latestValues.x == "string" || typeof g.latestValues.y == "string") && (g.isLayoutDirty = !0), g.updateScroll("snapshot"), g.options.layoutRoot && g.willUpdate(!1);
      }
      const { layoutId: y, layout: S } = this.options;
      if (y === void 0 && !S)
        return;
      const p = this.getTransformTemplate();
      this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), h && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const S = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), S && this.nodes.forEach(x2), this.nodes.forEach(G0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(X0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(O2), this.nodes.forEach(R2), this.nodes.forEach(E2), this.nodes.forEach(A2)) : this.nodes.forEach(X0), this.clearAllSnapshots();
      const y = Se.now();
      fe.delta = An(0, 1e3 / 60, y - fe.timestamp), fe.timestamp = y, fe.isProcessing = !0, tf.update.process(fe), tf.preRender.process(fe), tf.render.process(fe), fe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, lh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(C2), this.sharedNodes.forEach(V2);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Vt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Vt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Te(this.snapshot.measuredBox.x) && !Te(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let S = 0; S < this.path.length; S++)
          this.path[S].updateScroll();
      const h = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = kt()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: y } = this.options;
      y && y.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0);
    }
    updateScroll(h = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (y = !1), y && this.instance) {
        const S = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: S,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : S
        };
      }
    }
    resetTransform() {
      if (!f)
        return;
      const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, y = this.projectionDelta && !Op(this.projectionDelta), S = this.getTransformTemplate(), p = S ? S(this.latestValues, "") : void 0, v = p !== this.prevTransformTemplateValue;
      h && this.instance && (y || Za(this.latestValues) || v) && (f(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(h = !0) {
      const y = this.measurePageBox();
      let S = this.removeElementScroll(y);
      return h && (S = this.removeTransform(S)), H2(S), {
        animationId: this.root.animationId,
        measuredBox: y,
        layoutBox: S,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: h } = this.options;
      if (!h)
        return kt();
      const y = h.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(L2))) {
        const { scroll: p } = this.root;
        p && (bn(y.x, p.offset.x), bn(y.y, p.offset.y));
      }
      return y;
    }
    removeElementScroll(h) {
      const y = kt();
      if (an(y, h), this.scroll?.wasRoot)
        return y;
      for (let S = 0; S < this.path.length; S++) {
        const p = this.path[S], { scroll: v, options: g } = p;
        p !== this.root && v && g.layoutScroll && (v.wasRoot && an(y, h), bn(y.x, v.offset.x), bn(y.y, v.offset.y));
      }
      return y;
    }
    applyTransform(h, y = !1, S) {
      const p = S || kt();
      an(p, h);
      for (let v = 0; v < this.path.length; v++) {
        const g = this.path[v];
        !y && g.options.layoutScroll && g.scroll && g !== g.root && (bn(p.x, -g.scroll.offset.x), bn(p.y, -g.scroll.offset.y)), Za(g.latestValues) && Js(p, g.latestValues, g.layout?.layoutBox);
      }
      return Za(this.latestValues) && Js(p, this.latestValues, this.layout?.layoutBox), p;
    }
    removeTransform(h) {
      const y = kt();
      an(y, h);
      for (let S = 0; S < this.path.length; S++) {
        const p = this.path[S];
        if (!Za(p.latestValues))
          continue;
        let v;
        p.instance && (Bf(p.latestValues) && p.updateSnapshot(), v = kt(), an(v, p.measurePageBox())), V0(y, p.latestValues, p.snapshot?.layoutBox, v);
      }
      return Za(this.latestValues) && V0(y, this.latestValues), y;
    }
    setTargetDelta(h) {
      this.targetDelta = h, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== fe.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const S = !!this.resumingFrom || this !== y;
      if (!(h || S && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: g } = this.options;
      if (!this.layout || !(v || g))
        return;
      this.resolvedRelativeTargetAt = fe.timestamp;
      const b = this.getClosestProjectingParent();
      b && this.linkedParentVersion !== b.layoutVersion && !b.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = kt(), this.targetWithTransforms = kt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), l2(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : an(this.target, this.layout.layoutBox), gp(this.target, this.targetDelta)) : an(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Bf(this.parent.latestValues) || yp(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(h, y, S) {
      this.relativeParent = h, this.linkedParentVersion = h.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = kt(), this.relativeTargetOrigin = kt(), lo(this.relativeTargetOrigin, y, S, this.options.layoutAnchor || void 0), an(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const h = this.getLead(), y = !!this.resumingFrom || this !== h;
      let S = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (S = !1), y && (this.isSharedProjectionDirty || this.isTransformDirty) && (S = !1), this.resolvedRelativeTargetAt === fe.timestamp && (S = !1), S)
        return;
      const { layout: p, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || v))
        return;
      an(this.layoutCorrected, this.layout.layoutBox);
      const g = this.treeScale.x, b = this.treeScale.y;
      UA(this.layoutCorrected, this.treeScale, this.path, y), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = kt());
      const { target: V } = h;
      if (!V) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (x0(this.prevProjectionDelta.x, this.projectionDelta.x), x0(this.prevProjectionDelta.y, this.projectionDelta.y)), Wl(this.projectionDelta, this.layoutCorrected, V, this.latestValues), (this.treeScale.x !== g || this.treeScale.y !== b || !L0(this.projectionDelta.x, this.prevProjectionDelta.x) || !L0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", V));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      if (this.options.visualElement?.scheduleRender(), h) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Zi(), this.projectionDelta = Zi(), this.projectionDeltaWithTransform = Zi();
    }
    setAnimationOrigin(h, y = !1, S) {
      const p = this.snapshot, v = p ? p.latestValues : {}, g = { ...this.latestValues }, b = Zi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !y;
      const V = kt(), z = p ? p.source : void 0, B = this.layout ? this.layout.source : void 0, U = z !== B, H = this.getStack(), Y = !H || H.members.length <= 1, q = !!(U && !Y && this.options.crossfade === !0 && !this.path.some(B2));
      this.animationProgress = 0;
      let X;
      const nt = S?.interpolateProjection(h);
      this.mixTargetDelta = (ct) => {
        const Z = ct / 1e3, G = nt?.(Z);
        G ? (b.x.translate = G.x, b.x.scale = Nt(h.x.scale, 1, Z), b.x.origin = h.x.origin, b.x.originPoint = h.x.originPoint, b.y.translate = G.y, b.y.scale = Nt(h.y.scale, 1, Z), b.y.origin = h.y.origin, b.y.originPoint = h.y.originPoint) : (Z0(b.x, h.x, Z), Z0(b.y, h.y, Z)), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (lo(V, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), U2(this.relativeTarget, this.relativeTargetOrigin, V, Z), X && r2(this.relativeTarget, X) && (this.isProjectionDirty = !1), X || (X = kt()), an(X, this.relativeTarget)), U && (this.animationValues = g, h2(g, v, this.latestValues, Z, q, Y)), G && G.rotate !== void 0 && (this.animationValues || (this.animationValues = g), this.animationValues.pathRotation = G.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Z;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (pa(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Vt.update(() => {
        Ps.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Ji(0)), this.motionValue.jump(0, !1), this.currentAnimation = y2(this.motionValue, [0, 1e3], {
          ...h,
          velocity: 0,
          isSync: !0,
          onUpdate: (y) => {
            this.mixTargetDelta(y), h.onUpdate && h.onUpdate(y);
          },
          onComplete: () => {
            h.onComplete && h.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const h = this.getStack();
      h && h.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(T2), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let { targetWithTransforms: y, target: S, layout: p, latestValues: v } = h;
      if (!(!y || !S || !p)) {
        if (this !== h && this.layout && p && Vp(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
          S = this.target || kt();
          const g = Te(this.layout.layoutBox.x);
          S.x.min = h.target.x.min, S.x.max = S.x.min + g;
          const b = Te(this.layout.layoutBox.y);
          S.y.min = h.target.y.min, S.y.max = S.y.min + b;
        }
        an(y, S), Js(y, v), Wl(this.projectionDeltaWithTransform, this.layoutCorrected, y, v);
      }
    }
    registerSharedNode(h, y) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new S2()), this.sharedNodes.get(h).add(y);
      const p = y.options.initialPromotionConfig;
      y.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(y) : void 0
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h)
        return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: y, preserveFollowOpacity: S } = {}) {
      const p = this.getStack();
      p && p.promote(this, S), h && (this.projectionDelta = void 0, this.needsReset = !0), y && this.setOptions({ transition: y });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h)
        return;
      let y = !1;
      const { latestValues: S } = h;
      if ((S.z || S.rotate || S.rotateX || S.rotateY || S.rotateZ || S.skewX || S.skewY) && (y = !0), !y)
        return;
      const p = {};
      S.z && cf("z", h, p, this.animationValues);
      for (let v = 0; v < rf.length; v++)
        cf(`rotate${rf[v]}`, h, p, this.animationValues), cf(`skew${rf[v]}`, h, p, this.animationValues);
      h.render();
      for (const v in p)
        h.setStaticValue(v, p[v]), this.animationValues && (this.animationValues[v] = p[v]);
      h.scheduleRender();
    }
    applyProjectionStyles(h, y) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        h.visibility = "hidden";
        return;
      }
      const S = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, h.visibility = "", h.opacity = "", h.pointerEvents = Fs(y?.pointerEvents) || "", h.transform = S ? S(this.latestValues, "") : "none";
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = Fs(y?.pointerEvents) || ""), this.hasProjected && !Za(this.latestValues) && (h.transform = S ? S({}, "") : "none", this.hasProjected = !1);
        return;
      }
      h.visibility = "";
      const v = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let g = c2(this.projectionDeltaWithTransform, this.treeScale, v);
      S && (g = S(v, g)), h.transform = g;
      const { x: b, y: V } = this.projectionDelta;
      h.transformOrigin = `${b.origin * 100}% ${V.origin * 100}% 0`, p.animationValues ? h.opacity = p === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : h.opacity = p === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const z in Hf) {
        if (v[z] === void 0)
          continue;
        const { correct: B, applyTo: U, isCSSVariable: H } = Hf[z], Y = g === "none" ? v[z] : B(v[z], p);
        if (U) {
          const q = U.length;
          for (let X = 0; X < q; X++)
            h[U[X]] = Y;
        } else
          H ? this.options.visualElement.renderState.vars[z] = Y : h[z] = Y;
      }
      this.options.layoutId && (h.pointerEvents = p === this ? Fs(y?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((h) => h.currentAnimation?.stop()), this.root.nodes.forEach(G0), this.root.sharedNodes.clear();
    }
  };
}
function E2(i) {
  i.updateLayout();
}
function A2(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = i.layout, { animationType: f } = i.options, d = l.source !== i.layout.source;
    if (f === "size")
      Tn((v) => {
        const g = d ? l.measuredBox[v] : l.layoutBox[v], b = Te(g);
        g.min = r[v].min, g.max = g.min + b;
      });
    else if (f === "x" || f === "y") {
      const v = f === "x" ? "y" : "x";
      Lf(d ? l.measuredBox[v] : l.layoutBox[v], r[v]);
    } else Vp(f, l.layoutBox, r) && Tn((v) => {
      const g = d ? l.measuredBox[v] : l.layoutBox[v], b = Te(r[v]);
      g.max = g.min + b, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[v].max = i.relativeTarget[v].min + b);
    });
    const h = Zi();
    Wl(h, r, l.layoutBox);
    const y = Zi();
    d ? Wl(y, i.applyTransform(o, !0), l.measuredBox) : Wl(y, r, l.layoutBox);
    const S = !Op(h);
    let p = !1;
    if (!i.resumeFrom) {
      const v = i.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: g, layout: b } = v;
        if (g && b) {
          const V = i.options.layoutAnchor || void 0, z = kt();
          lo(z, l.layoutBox, g.layoutBox, V);
          const B = kt();
          lo(B, r, b.layoutBox, V), Rp(z, B) || (p = !0), v.options.layoutRoot && (i.relativeTarget = B, i.relativeTargetOrigin = z, i.relativeParent = v);
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: r,
      snapshot: l,
      delta: y,
      layoutDelta: h,
      hasLayoutChanged: S,
      hasRelativeLayoutChanged: p
    });
  } else if (i.isLead()) {
    const { onExitComplete: r } = i.options;
    r && r();
  }
  i.options.transition = void 0;
}
function M2(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function D2(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function C2(i) {
  i.clearSnapshot();
}
function G0(i) {
  i.clearMeasurements();
}
function x2(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function X0(i) {
  i.isLayoutDirty = !1;
}
function O2(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.layout, i.isLayoutDirty = !0);
}
function R2(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function Q0(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function z2(i) {
  i.resolveTargetDelta();
}
function _2(i) {
  i.calcProjection();
}
function N2(i) {
  i.resetSkewAndRotation();
}
function V2(i) {
  i.removeLeadSnapshot();
}
function Z0(i, l, r) {
  i.translate = Nt(l.translate, 0, r), i.scale = Nt(l.scale, 1, r), i.origin = l.origin, i.originPoint = l.originPoint;
}
function K0(i, l, r, o) {
  i.min = Nt(l.min, r.min, o), i.max = Nt(l.max, r.max, o);
}
function U2(i, l, r, o) {
  K0(i.x, l.x, r.x, o), K0(i.y, l.y, r.y, o);
}
function B2(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const w2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, J0 = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), F0 = J0("applewebkit/") && !J0("chrome/") ? Math.round : Pe;
function P0(i) {
  i.min = F0(i.min), i.max = F0(i.max);
}
function H2(i) {
  P0(i.x), P0(i.y);
}
function Vp(i, l, r) {
  return i === "position" || i === "preserve-aspect" && !i2(H0(l), H0(r), 0.2);
}
function L2(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const j2 = Np({
  attachResizeListener: (i, l) => nu(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), ff = {
  current: void 0
}, Up = Np({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!ff.current) {
      const i = new j2({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), ff.current = i;
    }
    return ff.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), Bp = lt.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function Y2(i = !0) {
  const l = lt.useContext(Gf);
  if (l === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: o, register: f } = l, d = lt.useId();
  lt.useEffect(() => {
    if (i)
      return f(d);
  }, [i]);
  const h = lt.useCallback(() => i && o && o(d), [d, o, i]);
  return !r && o ? [!1, h] : [!0];
}
const wp = lt.createContext({ strict: !1 }), k0 = {
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
let W0 = !1;
function q2() {
  if (W0)
    return;
  const i = {};
  for (const l in k0)
    i[l] = {
      isEnabled: (r) => k0[l].some((o) => !!r[o])
    };
  hp(i), W0 = !0;
}
function Hp() {
  return q2(), zA();
}
function G2(i) {
  const l = Hp();
  for (const r in i)
    l[r] = {
      ...l[r],
      ...i[r]
    };
  hp(l);
}
const X2 = /* @__PURE__ */ new Set([
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
function uo(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || X2.has(i);
}
let Lp = (i) => !uo(i);
function Q2(i) {
  typeof i == "function" && (Lp = (l) => l.startsWith("on") ? !uo(l) : i(l));
}
try {
  Q2(require("@emotion/is-prop-valid").default);
} catch {
}
function Z2(i, l, r) {
  const o = {};
  for (const f in i)
    f === "values" && typeof i.values == "object" || he(i[f]) || (Lp(f) || r === !0 && uo(f) || !l && !uo(f) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && f.startsWith("onDrag")) && (o[f] = i[f]);
  return o;
}
const fo = /* @__PURE__ */ lt.createContext({});
function K2(i, l) {
  if (co(i)) {
    const { initial: r, animate: o } = i;
    return {
      initial: r === !1 || eu(r) ? r : void 0,
      animate: eu(o) ? o : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function J2(i) {
  const { initial: l, animate: r } = K2(i, lt.useContext(fo));
  return lt.useMemo(() => ({ initial: l, animate: r }), [I0(l), I0(r)]);
}
function I0(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const dh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function jp(i, l, r) {
  for (const o in l)
    !he(l[o]) && !Sp(o, r) && (i[o] = l[o]);
}
function F2({ transformTemplate: i }, l) {
  return lt.useMemo(() => {
    const r = dh();
    return fh(r, l, i), Object.assign({}, r.vars, r.style);
  }, [l]);
}
function P2(i, l) {
  const r = i.style || {}, o = {};
  return jp(o, r, i), Object.assign(o, F2(i, l)), o;
}
function k2(i, l) {
  const r = {}, o = P2(i, l);
  return i.drag && i.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const Yp = () => ({
  ...dh(),
  attrs: {}
});
function W2(i, l, r, o) {
  const f = lt.useMemo(() => {
    const d = Yp();
    return Tp(d, l, Ep(o), i.transformTemplate, i.style), {
      ...d.attrs,
      style: { ...d.style }
    };
  }, [l]);
  if (i.style) {
    const d = {};
    jp(d, i.style, i), f.style = { ...d, ...f.style };
  }
  return f;
}
const I2 = [
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
function mh(i) {
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
      !!(I2.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function $2(i, l, r, { latestValues: o }, f, d = !1, h) {
  const S = (h ?? mh(i) ? W2 : k2)(l, o, f, i), p = Z2(l, typeof i == "string", d), v = i !== lt.Fragment ? { ...p, ...S, ref: r } : {}, { children: g } = l, b = lt.useMemo(() => he(g) ? g.get() : g, [g]);
  return lt.createElement(i, {
    ...v,
    children: b
  });
}
function t3({ scrapeMotionValuesFromProps: i, createRenderState: l }, r, o, f) {
  return {
    latestValues: e3(r, o, f, i),
    renderState: l()
  };
}
function e3(i, l, r, o) {
  const f = {}, d = o(i, {});
  for (const b in d)
    f[b] = Fs(d[b]);
  let { initial: h, animate: y } = i;
  const S = co(i), p = cp(i);
  l && p && !S && i.inherit !== !1 && (h === void 0 && (h = l.initial), y === void 0 && (y = l.animate));
  let v = r ? r.initial === !1 : !1;
  v = v || h === !1;
  const g = v ? y : h;
  if (g && typeof g != "boolean" && !ro(g)) {
    const b = Array.isArray(g) ? g : [g];
    for (let V = 0; V < b.length; V++) {
      const z = nh(i, b[V]);
      if (z) {
        const { transitionEnd: B, transition: U, ...H } = z;
        for (const Y in H) {
          let q = H[Y];
          if (Array.isArray(q)) {
            const X = v ? q.length - 1 : 0;
            q = q[X];
          }
          q !== null && (f[Y] = q);
        }
        for (const Y in B)
          f[Y] = B[Y];
      }
    }
  }
  return f;
}
const qp = (i) => (l, r) => {
  const o = lt.useContext(fo), f = lt.useContext(Gf), d = () => t3(i, l, o, f);
  return r ? d() : tb(d);
}, n3 = /* @__PURE__ */ qp({
  scrapeMotionValuesFromProps: hh,
  createRenderState: dh
}), a3 = /* @__PURE__ */ qp({
  scrapeMotionValuesFromProps: Ap,
  createRenderState: Yp
}), i3 = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function l3(i, l, r) {
  const o = lt.useRef(r);
  lt.useInsertionEffect(() => {
    o.current = r;
  });
  const f = lt.useRef(null);
  return lt.useCallback((d) => {
    d && i.onMount?.(d), l && (d ? l.mount(d) : l.unmount());
    const h = o.current;
    if (typeof h == "function")
      if (d) {
        const y = h(d);
        typeof y == "function" && (f.current = y);
      } else f.current ? (f.current(), f.current = null) : h(d);
    else h && (h.current = d);
  }, [l]);
}
const Gp = lt.createContext({});
function Gi(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function u3(i, l, r, o, f, d) {
  const { visualElement: h } = lt.useContext(fo), y = lt.useContext(wp), S = lt.useContext(Gf), p = lt.useContext(Bp), v = p.reducedMotion, g = p.skipAnimations, b = lt.useRef(null), V = lt.useRef(!1);
  o = o || y.renderer, !b.current && o && (b.current = o(i, {
    visualState: l,
    parent: h,
    props: r,
    presenceContext: S,
    blockInitialAnimation: S ? S.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: g,
    isSVG: d
  }), V.current && b.current && (b.current.manuallyAnimateOnMount = !0));
  const z = b.current, B = lt.useContext(Gp);
  z && !z.projection && f && (z.type === "html" || z.type === "svg") && s3(b.current, r, f, B);
  const U = lt.useRef(!1);
  lt.useInsertionEffect(() => {
    z && U.current && z.update(r, S);
  });
  const H = r[Iv], Y = lt.useRef(!!H && typeof window < "u" && !window.MotionHandoffIsComplete?.(H) && window.MotionHasOptimisedAnimation?.(H));
  return nb(() => {
    V.current = !0, z && (U.current = !0, window.MotionIsMounted = !0, z.updateFeatures(), z.scheduleRenderMicrotask(), Y.current && z.animationState && z.animationState.animateChanges());
  }), lt.useEffect(() => {
    z && (!Y.current && z.animationState && z.animationState.animateChanges(), Y.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(H);
    }), Y.current = !1), z.enteringChildren = void 0);
  }), z;
}
function s3(i, l, r, o) {
  const { layoutId: f, layout: d, drag: h, dragConstraints: y, layoutScroll: S, layoutRoot: p, layoutAnchor: v, layoutCrossfade: g } = l;
  i.projection = new r(i.latestValues, l["data-framer-portal-id"] ? void 0 : Xp(i.parent)), i.projection.setOptions({
    layoutId: f,
    layout: d,
    alwaysMeasureLayout: !!h || y && Gi(y),
    visualElement: i,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof d == "string" ? d : "both",
    initialPromotionConfig: o,
    crossfade: g,
    layoutScroll: S,
    layoutRoot: p,
    layoutAnchor: v
  });
}
function Xp(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : Xp(i.parent);
}
function hf(i, { forwardMotionProps: l = !1, type: r } = {}, o, f) {
  o && G2(o);
  const d = r ? r === "svg" : mh(i), h = d ? a3 : n3;
  function y(p, v) {
    let g;
    const b = {
      ...lt.useContext(Bp),
      ...p,
      layoutId: o3(p)
    }, { isStatic: V } = b, z = J2(p), B = h(p, V);
    if (!V && typeof window < "u") {
      r3();
      const U = c3(b);
      g = U.MeasureLayout, z.visualElement = u3(i, B, b, f, U.ProjectionNode, d);
    }
    return qt.jsxs(fo.Provider, { value: z, children: [g && z.visualElement ? qt.jsx(g, { visualElement: z.visualElement, ...b }) : null, $2(i, p, l3(B, z.visualElement, v), B, V, l, d)] });
  }
  y.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const S = lt.forwardRef(y);
  return S[i3] = i, S;
}
function o3({ layoutId: i }) {
  const l = lt.useContext(cv).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function r3(i, l) {
  lt.useContext(wp).strict;
}
function c3(i) {
  const l = Hp(), { drag: r, layout: o } = l;
  if (!r && !o)
    return {};
  const f = { ...r, ...o };
  return {
    MeasureLayout: r?.isEnabled(i) || o?.isEnabled(i) ? f.MeasureLayout : void 0,
    ProjectionNode: f.ProjectionNode
  };
}
function f3(i, l) {
  if (typeof Proxy > "u")
    return hf;
  const r = /* @__PURE__ */ new Map(), o = (d, h) => hf(d, h, i, l), f = (d, h) => o(d, h);
  return new Proxy(f, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (d, h) => h === "create" ? o : (r.has(h) || r.set(h, hf(h, void 0, i, l)), r.get(h))
  });
}
const h3 = (i, l) => l.isSVG ?? mh(i) ? new JA(l) : new qA(l, {
  allowProjection: i !== lt.Fragment
});
class d3 extends Sa {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = IA(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    ro(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    l !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let m3 = 0;
class y3 extends Sa {
  constructor() {
    super(...arguments), this.id = m3++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: r } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === o)
      return;
    if (l && o === !1) {
      if (this.isExitComplete) {
        const { initial: d, custom: h } = this.node.getProps();
        if (typeof d == "string" || typeof d == "object" && d !== null && !Array.isArray(d)) {
          const y = ka(this.node, d, h);
          if (y) {
            const { transition: S, transitionEnd: p, ...v } = y;
            for (const g in v)
              this.node.getValue(g)?.jump(v[g]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const f = this.node.animationState.setActive("exit", !l);
    r && !l && f.then(() => {
      this.isExitComplete = !0, r(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const g3 = {
  animation: {
    Feature: d3
  },
  exit: {
    Feature: y3
  }
};
function uu(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const v3 = (i) => (l) => uh(l) && i(l, uu(l));
function Il(i, l, r, o) {
  return nu(i, l, v3(r), o);
}
const Qp = ({ current: i }) => i ? i.ownerDocument.defaultView : null, $0 = (i, l) => Math.abs(i - l);
function p3(i, l) {
  const r = $0(i.x, l.x), o = $0(i.y, l.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
const tv = /* @__PURE__ */ new Set(["auto", "scroll"]);
class Zp {
  constructor(l, r, { transformPagePoint: o, contextWindow: f = window, dragSnapToOrigin: d = !1, distanceThreshold: h = 3, element: y } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (z) => {
      this.handleScroll(z.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = js(this.lastRawMoveEventInfo, this.transformPagePoint));
      const z = df(this.lastMoveEventInfo, this.history), B = this.startEvent !== null, U = p3(z.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!B && !U)
        return;
      const { point: H } = z, { timestamp: Y } = fe;
      this.history.push({ ...H, timestamp: Y });
      const { onStart: q, onMove: X } = this.handlers;
      B || (q && q(this.lastMoveEvent, z), this.startEvent = this.lastMoveEvent), X && X(this.lastMoveEvent, z);
    }, this.handlePointerMove = (z, B) => {
      this.lastMoveEvent = z, this.lastRawMoveEventInfo = B, this.lastMoveEventInfo = js(B, this.transformPagePoint), Vt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (z, B) => {
      this.end();
      const { onEnd: U, onSessionEnd: H, resumeAnimation: Y } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && Y && Y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const q = df(z.type === "pointercancel" ? this.lastMoveEventInfo : js(B, this.transformPagePoint), this.history);
      this.startEvent && U && U(z, q), H && H(z, q);
    }, !uh(l))
      return;
    this.dragSnapToOrigin = d, this.handlers = r, this.transformPagePoint = o, this.distanceThreshold = h, this.contextWindow = f || window;
    const S = uu(l), p = js(S, this.transformPagePoint), { point: v } = p, { timestamp: g } = fe;
    this.history = [{ ...v, timestamp: g }];
    const { onSessionStart: b } = r;
    b && b(l, df(p, this.history));
    const V = { passive: !0, capture: !0 };
    this.removeListeners = au(Il(this.contextWindow, "pointermove", this.handlePointerMove, V), Il(this.contextWindow, "pointerup", this.handlePointerUp, V), Il(this.contextWindow, "pointercancel", this.handlePointerUp, V)), y && this.startScrollTracking(y);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let r = l.parentElement;
    for (; r; ) {
      const o = getComputedStyle(r);
      (tv.has(o.overflowX) || tv.has(o.overflowY)) && this.scrollPositions.set(r, {
        x: r.scrollLeft,
        y: r.scrollTop
      }), r = r.parentElement;
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
    const r = this.scrollPositions.get(l);
    if (!r)
      return;
    const o = l === window, f = o ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, d = { x: f.x - r.x, y: f.y - r.y };
    d.x === 0 && d.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x, this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x, this.history[0].y -= d.y), this.scrollPositions.set(l, f), Vt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), pa(this.updatePoint);
  }
}
function js(i, l) {
  return l ? { point: l(i.point) } : i;
}
function ev(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function df({ point: i }, l) {
  return {
    point: i,
    delta: ev(i, Kp(l)),
    offset: ev(i, S3(l)),
    velocity: T3(l, 0.1)
  };
}
function S3(i) {
  return i[0];
}
function Kp(i) {
  return i[i.length - 1];
}
function T3(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let r = i.length - 1, o = null;
  const f = Kp(i);
  for (; r >= 0 && (o = i[r], !(f.timestamp - o.timestamp > /* @__PURE__ */ Le(l))); )
    r--;
  if (!o)
    return { x: 0, y: 0 };
  o === i[0] && i.length > 2 && f.timestamp - o.timestamp > /* @__PURE__ */ Le(l) * 2 && (o = i[1]);
  const d = /* @__PURE__ */ Fe(f.timestamp - o.timestamp);
  if (d === 0)
    return { x: 0, y: 0 };
  const h = {
    x: (f.x - o.x) / d,
    y: (f.y - o.y) / d
  };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function b3(i, { min: l, max: r }, o) {
  return l !== void 0 && i < l ? i = o ? Nt(l, i, o.min) : Math.max(i, l) : r !== void 0 && i > r && (i = o ? Nt(r, i, o.max) : Math.min(i, r)), i;
}
function nv(i, l, r) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: r !== void 0 ? i.max + r - (i.max - i.min) : void 0
  };
}
function E3(i, { top: l, left: r, bottom: o, right: f }) {
  return {
    x: nv(i.x, r, f),
    y: nv(i.y, l, o)
  };
}
function av(i, l) {
  let r = l.min - i.min, o = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([r, o] = [o, r]), { min: r, max: o };
}
function A3(i, l) {
  return {
    x: av(i.x, l.x),
    y: av(i.y, l.y)
  };
}
function M3(i, l) {
  let r = 0.5;
  const o = Te(i), f = Te(l);
  return f > o ? r = /* @__PURE__ */ $l(l.min, l.max - o, i.min) : o > f && (r = /* @__PURE__ */ $l(i.min, i.max - f, l.min)), An(0, 1, r);
}
function D3(i, l) {
  const r = {};
  return l.min !== void 0 && (r.min = l.min - i.min), l.max !== void 0 && (r.max = l.max - i.min), r;
}
const jf = 0.35;
function C3(i = jf) {
  return i === !1 ? i = 0 : i === !0 && (i = jf), {
    x: iv(i, "left", "right"),
    y: iv(i, "top", "bottom")
  };
}
function iv(i, l, r) {
  return {
    min: lv(i, l),
    max: lv(i, r)
  };
}
function lv(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const x3 = /* @__PURE__ */ new WeakMap();
class O3 {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = kt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: r = !1, distanceThreshold: o } = {}) {
    const { presenceContext: f } = this.visualElement;
    if (f && f.isPresent === !1)
      return;
    const d = (g) => {
      r && this.snapToCursor(uu(g).point), this.stopAnimation();
    }, h = (g, b) => {
      const { drag: V, dragPropagation: z, onDragStart: B } = this.getProps();
      if (V && !z && (this.openDragLock && this.openDragLock(), this.openDragLock = sA(V), !this.openDragLock))
        return;
      this.latestPointerEvent = g, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Tn((H) => {
        let Y = this.getAxisMotionValue(H).get() || 0;
        if (En.test(Y)) {
          const { projection: q } = this.visualElement;
          if (q && q.layout) {
            const X = q.layout.layoutBox[H];
            X && (Y = Te(X) * (parseFloat(Y) / 100));
          }
        }
        this.originPoint[H] = Y;
      }), B && Vt.update(() => B(g, b), !1, !0), zf(this.visualElement, "transform");
      const { animationState: U } = this.visualElement;
      U && U.setActive("whileDrag", !0);
    }, y = (g, b) => {
      this.latestPointerEvent = g, this.latestPanInfo = b;
      const { dragPropagation: V, dragDirectionLock: z, onDirectionLock: B, onDrag: U } = this.getProps();
      if (!V && !this.openDragLock)
        return;
      const { offset: H } = b;
      if (z && this.currentDirection === null) {
        this.currentDirection = z3(H), this.currentDirection !== null && B && B(this.currentDirection);
        return;
      }
      this.updateAxis("x", b.point, H), this.updateAxis("y", b.point, H), this.visualElement.render(), U && Vt.update(() => U(g, b), !1, !0);
    }, S = (g, b) => {
      this.latestPointerEvent = g, this.latestPanInfo = b, this.stop(g, b), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, p = () => {
      const { dragSnapToOrigin: g } = this.getProps();
      (g || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new Zp(l, {
      onSessionStart: d,
      onStart: h,
      onMove: y,
      onSessionEnd: S,
      resumeAnimation: p
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: o,
      contextWindow: Qp(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, r) {
    const o = l || this.latestPointerEvent, f = r || this.latestPanInfo, d = this.isDragging;
    if (this.cancel(), !d || !f || !o)
      return;
    const { velocity: h } = f;
    this.startAnimation(h);
    const { onDragEnd: y } = this.getProps();
    y && Vt.postRender(() => y(o, f));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: r } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: o } = this.getProps();
    !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1);
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
  updateAxis(l, r, o) {
    const { drag: f } = this.getProps();
    if (!o || !Ys(l, f, this.currentDirection))
      return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + o[l];
    this.constraints && this.constraints[l] && (h = b3(h, this.constraints[l], this.elastic[l])), d.set(h);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, f = this.constraints;
    l && Gi(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = E3(o.layoutBox, l) : this.constraints = !1, this.elastic = C3(r), f !== this.constraints && !Gi(l) && o && this.constraints && !this.hasMutatedConstraints && Tn((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = D3(o.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: r } = this.getProps();
    if (!l || !Gi(l))
      return !1;
    const o = l.current, { projection: f } = this.visualElement;
    if (!f || !f.layout)
      return !1;
    f.root && (f.root.scroll = void 0, f.root.updateScroll());
    const d = BA(o, f.root, this.visualElement.getTransformPagePoint());
    let h = A3(f.layout.layoutBox, d);
    if (r) {
      const y = r(NA(h));
      this.hasMutatedConstraints = !!y, y && (h = mp(y));
    }
    return h;
  }
  startAnimation(l) {
    const { drag: r, dragMomentum: o, dragElastic: f, dragTransition: d, dragSnapToOrigin: h, onDragTransitionEnd: y } = this.getProps(), S = this.constraints || {}, p = Tn((v) => {
      if (!Ys(v, r, this.currentDirection))
        return;
      let g = S && S[v] || {};
      (h === !0 || h === v) && (g = { min: 0, max: 0 });
      const b = f ? 200 : 1e6, V = f ? 40 : 1e7, z = {
        type: "inertia",
        velocity: o ? l[v] : 0,
        bounceStiffness: b,
        bounceDamping: V,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...d,
        ...g
      };
      return this.startAxisValueAnimation(v, z);
    });
    return Promise.all(p).then(y);
  }
  startAxisValueAnimation(l, r) {
    const o = this.getAxisMotionValue(l);
    return zf(this.visualElement, l), o.start(eh(l, o, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    Tn((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const r = `_drag${l.toUpperCase()}`, f = this.visualElement.getProps()[r];
    return f || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  snapToCursor(l) {
    Tn((r) => {
      const { drag: o } = this.getProps();
      if (!Ys(r, o, this.currentDirection))
        return;
      const { projection: f } = this.visualElement, d = this.getAxisMotionValue(r);
      if (f && f.layout) {
        const { min: h, max: y } = f.layout.layoutBox[r], S = d.get() || 0;
        d.set(l[r] - Nt(h, y, 0.5) + S);
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
    const { drag: l, dragConstraints: r } = this.getProps(), { projection: o } = this.visualElement;
    if (!Gi(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const f = { x: 0, y: 0 };
    Tn((h) => {
      const y = this.getAxisMotionValue(h);
      if (y && this.constraints !== !1) {
        const S = y.get();
        f[h] = M3({ min: S, max: S }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), Tn((h) => {
      if (!Ys(h, l, null))
        return;
      const y = this.getAxisMotionValue(h), { min: S, max: p } = this.constraints[h];
      y.set(Nt(S, p, f[h]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    x3.set(this.visualElement, this);
    const l = this.visualElement.current, r = Il(l, "pointerdown", (p) => {
      const { drag: v, dragListener: g = !0 } = this.getProps(), b = p.target, V = b !== l && dA(b);
      v && g && !V && this.start(p);
    });
    let o;
    const f = () => {
      const { dragConstraints: p } = this.getProps();
      Gi(p) && p.current && (this.constraints = this.resolveRefConstraints(), o || (o = R3(l, p.current, () => this.scalePositionWithinConstraints())));
    }, { projection: d } = this.visualElement, h = d.addEventListener("measure", f);
    d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), Vt.read(f);
    const y = nu(window, "resize", () => this.scalePositionWithinConstraints()), S = d.addEventListener("didUpdate", (({ delta: p, hasLayoutChanged: v }) => {
      this.isDragging && v && (Tn((g) => {
        const b = this.getAxisMotionValue(g);
        b && (this.originPoint[g] += p[g].translate, b.set(b.get() + p[g].translate));
      }), this.visualElement.render());
    }));
    return () => {
      y(), r(), h(), S && S(), o && o();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: o = !1, dragPropagation: f = !1, dragConstraints: d = !1, dragElastic: h = jf, dragMomentum: y = !0 } = l;
    return {
      ...l,
      drag: r,
      dragDirectionLock: o,
      dragPropagation: f,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: y
    };
  }
}
function uv(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function R3(i, l, r) {
  const o = y0(i, uv(r)), f = y0(l, uv(r));
  return () => {
    o(), f();
  };
}
function Ys(i, l, r) {
  return (l === !0 || l === i) && (r === null || r === i);
}
function z3(i, l = 10) {
  let r = null;
  return Math.abs(i.y) > l ? r = "y" : Math.abs(i.x) > l && (r = "x"), r;
}
class _3 extends Sa {
  constructor(l) {
    super(l), this.removeGroupControls = Pe, this.removeListeners = Pe, this.controls = new O3(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Pe;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: r } = this.node.prevProps || {};
    l !== r && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const mf = (i) => (l, r) => {
  i && Vt.update(() => i(l, r), !1, !0);
};
class N3 extends Sa {
  constructor() {
    super(...arguments), this.removePointerDownListener = Pe;
  }
  onPointerDown(l) {
    this.session = new Zp(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Qp(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: r, onPan: o, onPanEnd: f } = this.node.getProps();
    return {
      onSessionStart: mf(l),
      onStart: mf(r),
      onMove: mf(o),
      onEnd: (d, h) => {
        delete this.session, f && Vt.postRender(() => f(d, h));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Il(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let yf = !1;
class V3 extends lt.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: o, layoutId: f } = this.props, { projection: d } = l;
    d && (r.group && r.group.add(d), o && o.register && f && o.register(d), yf && d.root.didUpdate(), d.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), d.setOptions({
      ...d.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Ps.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: r, visualElement: o, drag: f, isPresent: d } = this.props, { projection: h } = o;
    return h && (h.isPresent = d, l.layoutDependency !== r && h.setOptions({
      ...h.options,
      layoutDependency: r
    }), yf = !0, f || l.layoutDependency !== r || r === void 0 || l.isPresent !== d ? h.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? h.promote() : h.relegate() || Vt.postRender(() => {
      const y = h.getStack();
      (!y || !y.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: r } = this.props, { projection: o } = l;
    o && (o.options.layoutAnchor = r, o.root.didUpdate(), lh.postRender(() => {
      !o.currentAnimation && o.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: o } = this.props, { projection: f } = l;
    yf = !0, f && (f.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(f), o && o.deregister && o.deregister(f));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function Jp(i) {
  const [l, r] = Y2(), o = lt.useContext(cv);
  return qt.jsx(V3, { ...i, layoutGroup: o, switchLayoutGroup: lt.useContext(Gp), isPresent: l, safeToRemove: r });
}
const U3 = {
  pan: {
    Feature: N3
  },
  drag: {
    Feature: _3,
    ProjectionNode: Up,
    MeasureLayout: Jp
  }
};
function sv(i, l, r) {
  const { props: o } = i;
  i.animationState && o.whileHover && i.animationState.setActive("whileHover", r === "Start");
  const f = "onHover" + r, d = o[f];
  d && Vt.postRender(() => d(l, uu(l)));
}
class B3 extends Sa {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = rA(l, (r, o) => (sv(this.node, o, "Start"), (f) => sv(this.node, f, "End"))));
  }
  unmount() {
  }
}
class w3 extends Sa {
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
    this.unmount = au(nu(this.node.current, "focus", () => this.onFocus()), nu(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function ov(i, l, r) {
  const { props: o } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && o.whileTap && i.animationState.setActive("whileTap", r === "Start");
  const f = "onTap" + (r === "End" ? "" : r), d = o[f];
  d && Vt.postRender(() => d(l, uu(l)));
}
class H3 extends Sa {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: r, propagate: o } = this.node.props;
    this.unmount = yA(l, (f, d) => (ov(this.node, d, "Start"), (h, { success: y }) => ov(this.node, h, y ? "End" : "Cancel")), {
      useGlobalTarget: r,
      stopPropagation: o?.tap === !1
    });
  }
  unmount() {
  }
}
const Yf = /* @__PURE__ */ new WeakMap(), gf = /* @__PURE__ */ new WeakMap(), L3 = (i) => {
  const l = Yf.get(i.target);
  l && l(i);
}, j3 = (i) => {
  i.forEach(L3);
};
function Y3({ root: i, ...l }) {
  const r = i || document;
  gf.has(r) || gf.set(r, {});
  const o = gf.get(r), f = JSON.stringify(l);
  return o[f] || (o[f] = new IntersectionObserver(j3, { root: i, ...l })), o[f];
}
function q3(i, l, r) {
  const o = Y3(l);
  return Yf.set(i, r), o.observe(i), () => {
    Yf.delete(i), o.unobserve(i);
  };
}
const G3 = {
  some: 0,
  all: 1
};
class X3 extends Sa {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: r, margin: o, amount: f = "some", once: d } = l, h = {
      root: r ? r.current : void 0,
      rootMargin: o,
      threshold: typeof f == "number" ? f : G3[f]
    }, y = (S) => {
      const { isIntersecting: p } = S;
      if (this.isInView === p || (this.isInView = p, d && !p && this.hasEnteredView))
        return;
      p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
      const { onViewportEnter: v, onViewportLeave: g } = this.node.getProps(), b = p ? v : g;
      b && b(S);
    };
    this.stopObserver = q3(this.node.current, h, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(Q3(l, r)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function Q3({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (r) => i[r] !== l[r];
}
const Z3 = {
  inView: {
    Feature: X3
  },
  tap: {
    Feature: H3
  },
  focus: {
    Feature: w3
  },
  hover: {
    Feature: B3
  }
}, K3 = {
  layout: {
    ProjectionNode: Up,
    MeasureLayout: Jp
  }
}, J3 = {
  ...g3,
  ...Z3,
  ...U3,
  ...K3
}, Ka = /* @__PURE__ */ f3(J3, h3);
function F3() {
  !ch.current && fp();
  const [i] = lt.useState(no.current);
  return i;
}
const qs = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
}, P3 = ({ children: i, href: l, reduceMotion: r }) => /* @__PURE__ */ qt.jsx(
  Ka.a,
  {
    href: l,
    whileHover: r ? void 0 : { y: -2 },
    whileTap: r ? void 0 : { scale: 0.98 },
    className: "barock-marquee__button mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold",
    children: i
  }
);
function k3({
  tagline: i,
  title: l,
  description: r,
  ctaText: o,
  ctaHref: f,
  images: d,
  className: h = ""
}) {
  const y = F3() ?? !1, S = ["barock-marquee-hero relative flex h-[100svh] min-h-[620px] w-full flex-col items-center justify-center overflow-hidden px-4 text-center", h].filter(Boolean).join(" ");
  return /* @__PURE__ */ qt.jsxs("section", { className: S, "aria-labelledby": "barock-hero-title", children: [
    /* @__PURE__ */ qt.jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,rgba(17,105,98,.38),transparent_62%)]" }),
    /* @__PURE__ */ qt.jsxs("div", { className: "barock-marquee__copy z-10 flex flex-col items-center", children: [
      /* @__PURE__ */ qt.jsx(
        Ka.div,
        {
          initial: y ? !1 : "hidden",
          animate: "show",
          variants: qs,
          className: "barock-marquee__tagline mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm",
          children: i
        }
      ),
      /* @__PURE__ */ qt.jsx(
        Ka.h1,
        {
          id: "barock-hero-title",
          initial: y ? !1 : "hidden",
          animate: "show",
          variants: { hidden: {}, show: { transition: { staggerChildren: y ? 0 : 0.1 } } },
          className: "barock-marquee__title font-bold tracking-tight",
          children: typeof l == "string" ? l.split(" ").map((p, v) => /* @__PURE__ */ qt.jsxs(Ka.span, { variants: qs, className: "inline-block", children: [
            p,
            " "
          ] }, `${p}-${v}`)) : l
        }
      ),
      /* @__PURE__ */ qt.jsx(
        Ka.p,
        {
          initial: y ? !1 : "hidden",
          animate: "show",
          variants: qs,
          transition: y ? { delay: 0 } : { delay: 0.35 },
          className: "barock-marquee__description mt-6 max-w-xl text-lg",
          children: r
        }
      ),
      /* @__PURE__ */ qt.jsx(
        Ka.div,
        {
          initial: y ? !1 : "hidden",
          animate: "show",
          variants: qs,
          transition: y ? { delay: 0 } : { delay: 0.45 },
          children: /* @__PURE__ */ qt.jsx(P3, { href: f, reduceMotion: y, children: o })
        }
      )
    ] }),
    /* @__PURE__ */ qt.jsx("div", { className: "barock-marquee__gallery absolute bottom-0 left-0 h-1/3 w-full md:h-2/5", role: "group", "aria-label": "BAROCK CAFÉ photo highlights", children: /* @__PURE__ */ qt.jsx(
      Ka.div,
      {
        className: "flex w-max",
        animate: y ? void 0 : { x: ["0%", "-50%"] },
        transition: y ? void 0 : { ease: "linear", duration: 44, repeat: 1 / 0 },
        children: [0, 1].map((p) => /* @__PURE__ */ qt.jsx("div", { className: "flex shrink-0 gap-4 pr-4", "aria-hidden": p === 1, children: d.map((v, g) => /* @__PURE__ */ qt.jsx(
          "div",
          {
            className: "relative aspect-[3/4] h-48 flex-shrink-0 select-none md:h-64",
            style: { rotate: `${g % 2 === 0 ? -2 : 3}deg` },
            children: /* @__PURE__ */ qt.jsx(
              "img",
              {
                src: v.src,
                alt: p === 0 ? v.alt : "",
                "aria-hidden": p === 1 ? !0 : void 0,
                draggable: !1,
                loading: "eager",
                decoding: "async",
                className: "h-full w-full rounded-2xl object-cover shadow-md shadow-black/40"
              }
            )
          },
          `${p}-${v.src}`
        )) }, p))
      }
    ) })
  ] });
}
const rv = document.getElementById("barock-marquee-hero");
rv && $T.createRoot(rv).render(
  /* @__PURE__ */ qt.jsx(
    k3,
    {
      tagline: "BAROCK CAFÉ · GULSHAN-02, DHAKA",
      title: /* @__PURE__ */ qt.jsxs(qt.Fragment, { children: [
        "Every Moment,",
        /* @__PURE__ */ qt.jsx("br", {}),
        "Perfectly Yours."
      ] }),
      description: "Coffee, cuisine and evening hospitality beneath the golden lights of BAROCK.",
      ctaText: "Explore Our Menu",
      ctaHref: "./menu.html",
      images: [
        { src: "/assets/brand-photography/entrance-sign-640.webp", alt: "Illuminated BAROCK CAFÉ entrance at night" },
        { src: "/assets/brand-photography/bar-counter-640.webp", alt: "BAROCK CAFÉ teal bar and espresso counter" },
        { src: "/assets/brand-photography/barista-640.webp", alt: "BAROCK barista preparing a drink" },
        { src: "/assets/brand-photography/cappuccino-640.webp", alt: "Cappuccino served at BAROCK CAFÉ" },
        { src: "/assets/brand-photography/terrace-640.webp", alt: "BAROCK CAFÉ terrace beneath the trees" },
        { src: "/assets/brand-photography/goldie-640.webp", alt: "BAROCK signature Goldie drink" },
        { src: "/assets/brand-photography/green-refresher-640.webp", alt: "A green sparkling refresher at BAROCK" },
        { src: "/assets/photography-new/exterior-640.webp", alt: "BAROCK CAFÉ glowing in Gulshan after dark" }
      ]
    }
  )
);
