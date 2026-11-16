function Oh(T) {
  return T && T.__esModule && Object.prototype.hasOwnProperty.call(T, "default") ? T.default : T;
}
var Fo = { exports: {} }, Vn = {};
var zv;
function Nh() {
  if (zv) return Vn;
  zv = 1;
  var T = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.fragment");
  function p(r, C, V) {
    var Tt = null;
    if (V !== void 0 && (Tt = "" + V), C.key !== void 0 && (Tt = "" + C.key), "key" in C) {
      V = {};
      for (var at in C)
        at !== "key" && (V[at] = C[at]);
    } else V = C;
    return C = V.ref, {
      $$typeof: T,
      type: r,
      key: Tt,
      ref: C !== void 0 ? C : null,
      props: V
    };
  }
  return Vn.Fragment = H, Vn.jsx = p, Vn.jsxs = p, Vn;
}
var _v;
function ph() {
  return _v || (_v = 1, Fo.exports = Nh()), Fo.exports;
}
var N = ph(), Wo = { exports: {} }, Kn = {}, Io = { exports: {} }, Po = {};
var xv;
function Ah() {
  return xv || (xv = 1, (function(T) {
    function H(A, G) {
      var Z = A.length;
      A.push(G);
      t: for (; 0 < Z; ) {
        var ut = Z - 1 >>> 1, bt = A[ut];
        if (0 < C(bt, G))
          A[ut] = G, A[Z] = bt, Z = ut;
        else break t;
      }
    }
    function p(A) {
      return A.length === 0 ? null : A[0];
    }
    function r(A) {
      if (A.length === 0) return null;
      var G = A[0], Z = A.pop();
      if (Z !== G) {
        A[0] = Z;
        t: for (var ut = 0, bt = A.length, Wt = bt >>> 1; ut < Wt; ) {
          var se = 2 * (ut + 1) - 1, He = A[se], s = se + 1, O = A[s];
          if (0 > C(He, Z))
            s < bt && 0 > C(O, He) ? (A[ut] = O, A[s] = Z, ut = s) : (A[ut] = He, A[se] = Z, ut = se);
          else if (s < bt && 0 > C(O, Z))
            A[ut] = O, A[s] = Z, ut = s;
          else break t;
        }
      }
      return G;
    }
    function C(A, G) {
      var Z = A.sortIndex - G.sortIndex;
      return Z !== 0 ? Z : A.id - G.id;
    }
    if (T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var V = performance;
      T.unstable_now = function() {
        return V.now();
      };
    } else {
      var Tt = Date, at = Tt.now();
      T.unstable_now = function() {
        return Tt.now() - at;
      };
    }
    var K = [], rt = [], R = 1, E = null, Y = 3, Rt = !1, wt = !1, Bt = !1, Et = !1, Ft = typeof setTimeout == "function" ? setTimeout : null, ol = typeof clearTimeout == "function" ? clearTimeout : null, yl = typeof setImmediate < "u" ? setImmediate : null;
    function zt(A) {
      for (var G = p(rt); G !== null; ) {
        if (G.callback === null) r(rt);
        else if (G.startTime <= A)
          r(rt), G.sortIndex = G.expirationTime, H(K, G);
        else break;
        G = p(rt);
      }
    }
    function zl(A) {
      if (Bt = !1, zt(A), !wt)
        if (p(K) !== null)
          wt = !0, Ut || (Ut = !0, At());
        else {
          var G = p(rt);
          G !== null && F(zl, G.startTime - A);
        }
    }
    var Ut = !1, P = -1, dt = 5, ht = -1;
    function W() {
      return Et ? !0 : !(T.unstable_now() - ht < dt);
    }
    function _t() {
      if (Et = !1, Ut) {
        var A = T.unstable_now();
        ht = A;
        var G = !0;
        try {
          t: {
            wt = !1, Bt && (Bt = !1, ol(P), P = -1), Rt = !0;
            var Z = Y;
            try {
              l: {
                for (zt(A), E = p(K); E !== null && !(E.expirationTime > A && W()); ) {
                  var ut = E.callback;
                  if (typeof ut == "function") {
                    E.callback = null, Y = E.priorityLevel;
                    var bt = ut(
                      E.expirationTime <= A
                    );
                    if (A = T.unstable_now(), typeof bt == "function") {
                      E.callback = bt, zt(A), G = !0;
                      break l;
                    }
                    E === p(K) && r(K), zt(A);
                  } else r(K);
                  E = p(K);
                }
                if (E !== null) G = !0;
                else {
                  var Wt = p(rt);
                  Wt !== null && F(
                    zl,
                    Wt.startTime - A
                  ), G = !1;
                }
              }
              break t;
            } finally {
              E = null, Y = Z, Rt = !1;
            }
            G = void 0;
          }
        } finally {
          G ? At() : Ut = !1;
        }
      }
    }
    var At;
    if (typeof yl == "function")
      At = function() {
        yl(_t);
      };
    else if (typeof MessageChannel < "u") {
      var sl = new MessageChannel(), tl = sl.port2;
      sl.port1.onmessage = _t, At = function() {
        tl.postMessage(null);
      };
    } else
      At = function() {
        Ft(_t, 0);
      };
    function F(A, G) {
      P = Ft(function() {
        A(T.unstable_now());
      }, G);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, T.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : dt = 0 < A ? Math.floor(1e3 / A) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, T.unstable_next = function(A) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = Y;
      }
      var Z = Y;
      Y = G;
      try {
        return A();
      } finally {
        Y = Z;
      }
    }, T.unstable_requestPaint = function() {
      Et = !0;
    }, T.unstable_runWithPriority = function(A, G) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var Z = Y;
      Y = A;
      try {
        return G();
      } finally {
        Y = Z;
      }
    }, T.unstable_scheduleCallback = function(A, G, Z) {
      var ut = T.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ut + Z : ut) : Z = ut, A) {
        case 1:
          var bt = -1;
          break;
        case 2:
          bt = 250;
          break;
        case 5:
          bt = 1073741823;
          break;
        case 4:
          bt = 1e4;
          break;
        default:
          bt = 5e3;
      }
      return bt = Z + bt, A = {
        id: R++,
        callback: G,
        priorityLevel: A,
        startTime: Z,
        expirationTime: bt,
        sortIndex: -1
      }, Z > ut ? (A.sortIndex = Z, H(rt, A), p(K) === null && A === p(rt) && (Bt ? (ol(P), P = -1) : Bt = !0, F(zl, Z - ut))) : (A.sortIndex = bt, H(K, A), wt || Rt || (wt = !0, Ut || (Ut = !0, At()))), A;
    }, T.unstable_shouldYield = W, T.unstable_wrapCallback = function(A) {
      var G = Y;
      return function() {
        var Z = Y;
        Y = G;
        try {
          return A.apply(this, arguments);
        } finally {
          Y = Z;
        }
      };
    };
  })(Po)), Po;
}
var Ov;
function Mh() {
  return Ov || (Ov = 1, Io.exports = Ah()), Io.exports;
}
var ts = { exports: {} }, k = {};
var Nv;
function Dh() {
  if (Nv) return k;
  Nv = 1;
  var T = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), C = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), Tt = /* @__PURE__ */ Symbol.for("react.context"), at = /* @__PURE__ */ Symbol.for("react.forward_ref"), K = /* @__PURE__ */ Symbol.for("react.suspense"), rt = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), E = /* @__PURE__ */ Symbol.for("react.activity"), Y = /* @__PURE__ */ Symbol.for("react.view_transition"), Rt = Symbol.iterator;
  function wt(s) {
    return s === null || typeof s != "object" ? null : (s = Rt && s[Rt] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var Bt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Et = Object.assign, Ft = {};
  function ol(s, O, X) {
    this.props = s, this.context = O, this.refs = Ft, this.updater = X || Bt;
  }
  ol.prototype.isReactComponent = {}, ol.prototype.setState = function(s, O) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, O, "setState");
  }, ol.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function yl() {
  }
  yl.prototype = ol.prototype;
  function zt(s, O, X) {
    this.props = s, this.context = O, this.refs = Ft, this.updater = X || Bt;
  }
  var zl = zt.prototype = new yl();
  zl.constructor = zt, Et(zl, ol.prototype), zl.isPureReactComponent = !0;
  var Ut = Array.isArray;
  function P() {
  }
  var dt = { H: null, A: null, T: null, S: null }, ht = Object.prototype.hasOwnProperty;
  function W(s, O, X) {
    var D = X.ref;
    return {
      $$typeof: T,
      type: s,
      key: O,
      ref: D !== void 0 ? D : null,
      props: X
    };
  }
  function _t(s, O) {
    return W(s.type, O, s.props);
  }
  function At(s) {
    return typeof s == "object" && s !== null && s.$$typeof === T;
  }
  function sl(s) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(X) {
      return O[X];
    });
  }
  var tl = /\/+/g;
  function F(s, O) {
    return typeof s == "object" && s !== null && s.key != null ? sl("" + s.key) : O.toString(36);
  }
  function A(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(P, P) : (s.status = "pending", s.then(
          function(O) {
            s.status === "pending" && (s.status = "fulfilled", s.value = O);
          },
          function(O) {
            s.status === "pending" && (s.status = "rejected", s.reason = O);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function G(s, O, X, D, vt) {
    var ft = typeof s;
    (ft === "undefined" || ft === "boolean") && (s = null);
    var xt = !1;
    if (s === null) xt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          xt = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case T:
            case H:
              xt = !0;
              break;
            case R:
              return xt = s._init, G(
                xt(s._payload),
                O,
                X,
                D,
                vt
              );
          }
      }
    if (xt)
      return vt = vt(s), xt = D === "" ? "." + F(s, 0) : D, Ut(vt) ? (X = "", xt != null && (X = xt.replace(tl, "$&/") + "/"), G(vt, O, X, "", function(Il) {
        return Il;
      })) : vt != null && (At(vt) && (vt = _t(
        vt,
        X + (vt.key == null || s && s.key === vt.key ? "" : ("" + vt.key).replace(
          tl,
          "$&/"
        ) + "/") + xt
      )), O.push(vt)), 1;
    xt = 0;
    var j = D === "" ? "." : D + ":";
    if (Ut(s))
      for (var J = 0; J < s.length; J++)
        D = s[J], ft = j + F(D, J), xt += G(
          D,
          O,
          X,
          ft,
          vt
        );
    else if (J = wt(s), typeof J == "function")
      for (s = J.call(s), J = 0; !(D = s.next()).done; )
        D = D.value, ft = j + F(D, J++), xt += G(
          D,
          O,
          X,
          ft,
          vt
        );
    else if (ft === "object") {
      if (typeof s.then == "function")
        return G(
          A(s),
          O,
          X,
          D,
          vt
        );
      throw O = String(s), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return xt;
  }
  function Z(s, O, X) {
    if (s == null) return s;
    var D = [], vt = 0;
    return G(s, D, "", "", function(ft) {
      return O.call(X, ft, vt++);
    }), D;
  }
  function ut(s) {
    if (s._status === -1) {
      var O = s._result, X = O();
      X.then(
        function(D) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = D, X.status === void 0 && (X.status = "fulfilled", X.value = D));
        },
        function(D) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = D, X.status === void 0 && (X.status = "rejected", X.reason = D));
        }
      ), s._status === -1 && (s._status = 0, s._result = X);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var bt = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function Wt(s) {
    var O = dt.T, X = {};
    X.types = O !== null ? O.types : null, dt.T = X;
    try {
      var D = s(), vt = dt.S;
      vt !== null && vt(X, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(P, bt);
    } catch (ft) {
      bt(ft);
    } finally {
      O !== null && X.types !== null && (O.types = X.types), dt.T = O;
    }
  }
  function se(s) {
    var O = dt.T;
    if (O !== null) {
      var X = O.types;
      X === null ? O.types = [s] : X.indexOf(s) === -1 && X.push(s);
    } else Wt(se.bind(null, s));
  }
  var He = {
    map: Z,
    forEach: function(s, O, X) {
      Z(
        s,
        function() {
          O.apply(this, arguments);
        },
        X
      );
    },
    count: function(s) {
      var O = 0;
      return Z(s, function() {
        O++;
      }), O;
    },
    toArray: function(s) {
      return Z(s, function(O) {
        return O;
      }) || [];
    },
    only: function(s) {
      if (!At(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return k.Activity = E, k.Children = He, k.Component = ol, k.Fragment = p, k.Profiler = C, k.PureComponent = zt, k.StrictMode = r, k.Suspense = K, k.ViewTransition = Y, k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = dt, k.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return dt.H.useMemoCache(s);
    }
  }, k.addTransitionType = se, k.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, k.cacheSignal = function() {
    return null;
  }, k.cloneElement = function(s, O, X) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var D = Et({}, s.props), vt = s.key;
    if (O != null)
      for (ft in O.key !== void 0 && (vt = "" + O.key), O)
        !ht.call(O, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && O.ref === void 0 || (D[ft] = O[ft]);
    var ft = arguments.length - 2;
    if (ft === 1) D.children = X;
    else if (1 < ft) {
      for (var xt = Array(ft), j = 0; j < ft; j++)
        xt[j] = arguments[j + 2];
      D.children = xt;
    }
    return W(s.type, vt, D);
  }, k.createContext = function(s) {
    return s = {
      $$typeof: Tt,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: V,
      _context: s
    }, s;
  }, k.createElement = function(s, O, X) {
    var D, vt = {}, ft = null;
    if (O != null)
      for (D in O.key !== void 0 && (ft = "" + O.key), O)
        ht.call(O, D) && D !== "key" && D !== "__self" && D !== "__source" && (vt[D] = O[D]);
    var xt = arguments.length - 2;
    if (xt === 1) vt.children = X;
    else if (1 < xt) {
      for (var j = Array(xt), J = 0; J < xt; J++)
        j[J] = arguments[J + 2];
      vt.children = j;
    }
    if (s && s.defaultProps)
      for (D in xt = s.defaultProps, xt)
        vt[D] === void 0 && (vt[D] = xt[D]);
    return W(s, ft, vt);
  }, k.createRef = function() {
    return { current: null };
  }, k.forwardRef = function(s) {
    return { $$typeof: at, render: s };
  }, k.isValidElement = At, k.lazy = function(s) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: s },
      _init: ut
    };
  }, k.memo = function(s, O) {
    return {
      $$typeof: rt,
      type: s,
      compare: O === void 0 ? null : O
    };
  }, k.startTransition = Wt, k.unstable_useCacheRefresh = function() {
    return dt.H.useCacheRefresh();
  }, k.use = function(s) {
    return dt.H.use(s);
  }, k.useActionState = function(s, O, X) {
    return dt.H.useActionState(s, O, X);
  }, k.useCallback = function(s, O) {
    return dt.H.useCallback(s, O);
  }, k.useContext = function(s) {
    return dt.H.useContext(s);
  }, k.useDebugValue = function() {
  }, k.useDeferredValue = function(s, O) {
    return dt.H.useDeferredValue(s, O);
  }, k.useEffect = function(s, O) {
    return dt.H.useEffect(s, O);
  }, k.useEffectEvent = function(s) {
    return dt.H.useEffectEvent(s);
  }, k.useId = function() {
    return dt.H.useId();
  }, k.useImperativeHandle = function(s, O, X) {
    return dt.H.useImperativeHandle(s, O, X);
  }, k.useInsertionEffect = function(s, O) {
    return dt.H.useInsertionEffect(s, O);
  }, k.useLayoutEffect = function(s, O) {
    return dt.H.useLayoutEffect(s, O);
  }, k.useMemo = function(s, O) {
    return dt.H.useMemo(s, O);
  }, k.useOptimistic = function(s, O) {
    return dt.H.useOptimistic(s, O);
  }, k.useReducer = function(s, O, X) {
    return dt.H.useReducer(s, O, X);
  }, k.useRef = function(s) {
    return dt.H.useRef(s);
  }, k.useState = function(s) {
    return dt.H.useState(s);
  }, k.useSyncExternalStore = function(s, O, X) {
    return dt.H.useSyncExternalStore(
      s,
      O,
      X
    );
  }, k.useTransition = function() {
    return dt.H.useTransition();
  }, k.version = "19.3.1", k;
}
var pv;
function fs() {
  return pv || (pv = 1, ts.exports = Dh()), ts.exports;
}
var ls = { exports: {} }, El = {};
var Av;
function Ch() {
  if (Av) return El;
  Av = 1;
  var T = fs();
  function H(R) {
    var E = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Y = 2; Y < arguments.length; Y++)
        E += "&args[]=" + encodeURIComponent(arguments[Y]);
    }
    return "Minified React error #" + R + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function p() {
  }
  var r = {
    d: {
      f: p,
      r: function() {
        throw Error(H(522));
      },
      D: p,
      C: p,
      L: p,
      m: p,
      X: p,
      S: p,
      M: p
    },
    p: 0,
    findDOMNode: null
  }, C = /* @__PURE__ */ Symbol.for("react.portal"), V = /* @__PURE__ */ Symbol.for("react.recoverable"), Tt = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function at(R, E, Y) {
    var Rt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: C,
      key: Rt == null ? null : Rt === Tt ? Tt : "" + Rt,
      children: R,
      containerInfo: E,
      implementation: Y
    };
  }
  var K = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function rt(R, E) {
    if (R === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return El.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, El.browser = function(R) {
    return { $$typeof: V, _reason: R };
  }, El.createPortal = function(R, E) {
    var Y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(H(299));
    return at(R, E, null, Y);
  }, El.flushSync = function(R) {
    var E = K.T, Y = r.p;
    try {
      if (K.T = null, r.p = 2, R) return R();
    } finally {
      K.T = E, r.p = Y, r.d.f();
    }
  }, El.preconnect = function(R, E) {
    typeof R == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, r.d.C(R, E));
  }, El.prefetchDNS = function(R) {
    typeof R == "string" && r.d.D(R);
  }, El.preinit = function(R, E) {
    if (typeof R == "string" && E && typeof E.as == "string") {
      var Y = E.as, Rt = rt(Y, E.crossOrigin), wt = typeof E.integrity == "string" ? E.integrity : void 0, Bt = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      Y === "style" ? r.d.S(
        R,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: Rt,
          integrity: wt,
          fetchPriority: Bt
        }
      ) : Y === "script" && r.d.X(R, {
        crossOrigin: Rt,
        integrity: wt,
        fetchPriority: Bt,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, El.preinitModule = function(R, E) {
    if (typeof R == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var Y = rt(
            E.as,
            E.crossOrigin
          );
          r.d.M(R, {
            crossOrigin: Y,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0
          });
        }
      } else E == null && r.d.M(R);
  }, El.preload = function(R, E) {
    if (typeof R == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var Y = E.as, Rt = rt(Y, E.crossOrigin);
      r.d.L(R, Y, {
        crossOrigin: Rt,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, El.preloadModule = function(R, E) {
    if (typeof R == "string")
      if (E) {
        var Y = rt(E.as, E.crossOrigin);
        r.d.m(R, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: Y,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0
        });
      } else r.d.m(R);
  }, El.requestFormReset = function(R) {
    r.d.r(R);
  }, El.unstable_batchedUpdates = function(R, E) {
    return R(E);
  }, El.useFormState = function(R, E, Y) {
    return K.H.useFormState(R, E, Y);
  }, El.useFormStatus = function() {
    return K.H.useHostTransitionStatus();
  }, El.version = "19.3.1", El;
}
var Mv;
function Xv() {
  if (Mv) return ls.exports;
  Mv = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (H) {
        console.error(H);
      }
  }
  return T(), ls.exports = Ch(), ls.exports;
}
var Dv;
function Rh() {
  if (Dv) return Kn;
  Dv = 1;
  var T = Mh(), H = fs(), p = Xv();
  function r(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function C(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function V(t) {
    for (var l = t, e = l; e && !e.alternate; )
      l = e, (l.flags & 4098) !== 0 && (t = l.return), e = l.return;
    for (; l.return; ) l = l.return;
    return l.tag === 3 ? t : null;
  }
  function Tt(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function at(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function K(t) {
    if (V(t) !== t)
      throw Error(r(188));
  }
  function rt(t) {
    var l = t.alternate;
    if (!l) {
      if (l = V(t), l === null) throw Error(r(188));
      return l !== t ? null : t;
    }
    for (var e = t, u = l; ; ) {
      var a = e.return;
      if (a === null) break;
      var n = a.alternate;
      if (n === null) {
        if (u = a.return, u !== null) {
          e = u;
          continue;
        }
        break;
      }
      if (a.child === n.child) {
        for (n = a.child; n; ) {
          if (n === e) return K(a), t;
          if (n === u) return K(a), l;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (e.return !== u.return) e = a, u = n;
      else {
        for (var i = !1, c = a.child; c; ) {
          if (c === e) {
            i = !0, e = a, u = n;
            break;
          }
          if (c === u) {
            i = !0, u = a, e = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              i = !0, e = n, u = a;
              break;
            }
            if (c === u) {
              i = !0, u = n, e = a;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (e.alternate !== u) throw Error(r(190));
    }
    if (e.tag !== 3) throw Error(r(188));
    return e.stateNode.current === e ? t : l;
  }
  function R(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = R(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  function E(t, l, e, u, a, n) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && e(t, u, a, n) || (t.tag !== 22 || t.memoizedState === null) && (l || t.tag !== 5 && t.tag !== 27) && E(
        t.child,
        l,
        e,
        u,
        a,
        n
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function Y(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function Rt(t) {
    var l = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (l = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return l;
  }
  function wt(t) {
    var l = [null, null], e = Y(t);
    return e === null || Bt(
      l,
      t,
      e.child,
      { foundSelf: !1 }
    ), l;
  }
  function Bt(t, l, e, u) {
    for (; e !== null; ) {
      if (e === l) u.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (u.foundSelf) return t[1] = e, !0;
        t[0] = e;
      } else if ((e.tag !== 22 || e.memoizedState === null) && Bt(
        t,
        l,
        e.child,
        u
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function Et(t) {
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
  var Ft = null, ol = null;
  function yl(t, l, e) {
    return t === e ? !0 : t === l ? (Ft = t, !0) : !1;
  }
  function zt(t, l, e) {
    return t === e ? (ol = t, !1) : t === l ? (ol !== null && (Ft = t), !0) : !1;
  }
  function zl(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function Ut(t, l, e) {
    for (var u = 0, a = t; a; a = e(a)) u++;
    a = 0;
    for (var n = l; n; n = e(n)) a++;
    for (; 0 < u - a; ) t = e(t), u--;
    for (; 0 < a - u; ) l = e(l), a--;
    for (; u--; ) {
      if (t === l || l !== null && t === l.alternate)
        return t;
      t = e(t), l = e(l);
    }
    return null;
  }
  var P = Object.assign, dt = /* @__PURE__ */ Symbol.for("react.element"), ht = /* @__PURE__ */ Symbol.for("react.transitional.element"), W = /* @__PURE__ */ Symbol.for("react.portal"), _t = /* @__PURE__ */ Symbol.for("react.fragment"), At = /* @__PURE__ */ Symbol.for("react.strict_mode"), sl = /* @__PURE__ */ Symbol.for("react.profiler"), tl = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), A = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), ut = /* @__PURE__ */ Symbol.for("react.memo"), bt = /* @__PURE__ */ Symbol.for("react.lazy"), Wt = /* @__PURE__ */ Symbol.for("react.activity"), se = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), He = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), s = /* @__PURE__ */ Symbol.for("react.view_transition"), O = /* @__PURE__ */ Symbol.for("react.recoverable"), X = Symbol.iterator;
  function D(t) {
    return t === null || typeof t != "object" ? null : (t = X && t[X] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var vt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ft(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === vt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case _t:
        return "Fragment";
      case sl:
        return "Profiler";
      case At:
        return "StrictMode";
      case G:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case Wt:
        return "Activity";
      case s:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case W:
          return "Portal";
        case F:
          return t.displayName || "Context";
        case tl:
          return (t._context.displayName || "Context") + ".Consumer";
        case A:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ut:
          return l = t.displayName || null, l !== null ? l : ft(t.type) || "Memo";
        case bt:
          l = t._payload, t = t._init;
          try {
            return ft(t(l));
          } catch {
          }
      }
    return null;
  }
  var xt = Array.isArray, j = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Il = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pu = [], be = -1;
  function Pl(t) {
    return { current: t };
  }
  function ll(t) {
    0 > be || (t.current = pu[be], pu[be] = null, be--);
  }
  function Ht(t, l) {
    be++, pu[be] = t.current, t.current = l;
  }
  var Ol = Pl(null), Hl = Pl(null), _l = Pl(null), Ql = Pl(null);
  function je(t, l) {
    switch (Ht(_l, l), Ht(Hl, t), Ht(Ol, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Cd(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = Cd(l), t = Rd(l, t);
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
    ll(Ol), Ht(Ol, t);
  }
  function Se() {
    ll(Ol), ll(Hl), ll(_l);
  }
  function Zt(t) {
    var l = t.memoizedState;
    l !== null && (La._currentValue = l.memoizedState, Ht(Ql, t)), l = Ol.current;
    var e = Rd(l, t.type);
    l !== e && (Ht(Hl, t), Ht(Ol, e));
  }
  function I(t) {
    Hl.current === t && (ll(Ol), ll(Hl)), Ql.current === t && (ll(Ql), La._currentValue = Il);
  }
  var wa, Ja;
  function Zl(t) {
    if (wa === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        wa = l && l[1] || "", Ja = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + wa + t + Ja;
  }
  var Te = !1;
  function We(t, l) {
    if (!t || Te) return "";
    Te = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (M) {
                  var d = M;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (M) {
                  d = M;
                }
                _ = !1;
                try {
                  var g = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), _ = !0, new t();
                } finally {
                  _ && (g !== void 0 ? Object.defineProperty(t.prototype, "props", g) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                d = M;
              }
              (_ = t()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (M) {
            if (M && d && typeof M.stack == "string")
              return [M.stack, d.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var f = i.split(`
`), m = c.split(`
`);
        for (a = u = 0; u < f.length && !f[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; a < m.length && !m[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (u === f.length || a === m.length)
          for (u = f.length - 1, a = m.length - 1; 1 <= u && 0 <= a && f[u] !== m[a]; )
            a--;
        for (; 1 <= u && 0 <= a; u--, a--)
          if (f[u] !== m[a]) {
            if (u !== 1 || a !== 1)
              do
                if (u--, a--, 0 > a || f[u] !== m[a]) {
                  var S = `
` + f[u].replace(" at new ", " at ");
                  return t.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", t.displayName)), S;
                }
              while (1 <= u && 0 <= a);
            break;
          }
      }
    } finally {
      Te = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? Zl(e) : "";
  }
  function $a(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Zl(t.type);
      case 16:
        return Zl("Lazy");
      case 13:
        return t.child !== l && l !== null ? Zl("Suspense Fallback") : Zl("Suspense");
      case 19:
        return Zl("SuspenseList");
      case 0:
      case 15:
        return We(t.type, !1);
      case 11:
        return We(t.type.render, !1);
      case 1:
        return We(t.type, !0);
      case 31:
        return Zl("Activity");
      case 30:
        return Zl("ViewTransition");
      default:
        return "";
    }
  }
  function la(t) {
    try {
      var l = "", e = null;
      do
        l += $a(t, e), e = t, t = t.return;
      while (t);
      return l;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var cl = Object.prototype.hasOwnProperty, It = T.unstable_scheduleCallback, Ll = T.unstable_cancelCallback, ka = T.unstable_shouldYield, Fa = T.unstable_requestPaint, Nl = T.unstable_now, $n = T.unstable_getCurrentPriorityLevel, ea = T.unstable_ImmediatePriority, kn = T.unstable_UserBlockingPriority, Au = T.unstable_NormalPriority, Wa = T.unstable_LowPriority, Fn = T.unstable_IdlePriority, zc = T.log, Wn = T.unstable_setDisableYieldValue, Mu = null, pl = null;
  function Ee(t) {
    if (typeof zc == "function" && Wn(t), pl && typeof pl.setStrictMode == "function")
      try {
        pl.setStrictMode(Mu, t);
      } catch {
      }
  }
  var Al = Math.clz32 ? Math.clz32 : Du, _c = Math.log, Ml = Math.LN2;
  function Du(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (_c(t) / Ml | 0) | 0;
  }
  var ua = 256, Ie = 262144, gt = 4194304;
  function re(t) {
    var l = t & 42;
    if (l !== 0) return l;
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
  function Cu(t, l, e) {
    var u = t.pendingLanes;
    if (u === 0) return 0;
    var a = 0, n = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~n, u !== 0 ? a = re(u) : (i &= c, i !== 0 ? a = re(i) : e || (e = c & ~t, e !== 0 && (a = re(e))))) : (c = u & ~n, c !== 0 ? a = re(c) : i !== 0 ? a = re(i) : e || (e = u & ~t, e !== 0 && (a = re(e)))), a === 0 ? 0 : l !== 0 && l !== a && (l & n) === 0 && (n = a & -a, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : a;
  }
  function Pe(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Ia(t, l) {
    (l & 8) !== 0 && (l |= l & 32);
    var e = t.entangledLanes;
    if (e !== 0)
      for (t = t.entanglements, e &= l; 0 < e; ) {
        var u = 31 - Al(e), a = 1 << u;
        l |= t[u], e &= ~a;
      }
    return l;
  }
  function In(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
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
        return l + 5e3;
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
  function y() {
    var t = gt;
    return gt <<= 1, (gt & 62914560) === 0 && (gt = 4194304), t;
  }
  function b(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function x(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function L(t, l, e, u, a, n) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, f = t.expirationTimes, m = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var S = 31 - Al(e), _ = 1 << S;
      c[S] = 0, f[S] = -1;
      var d = m[S];
      if (d !== null)
        for (m[S] = null, S = 0; S < d.length; S++) {
          var g = d[S];
          g !== null && (g.lane &= -536870913);
        }
      e &= ~_;
    }
    u !== 0 && tt(t, u, 0), n !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function tt(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var u = 31 - Al(l);
    t.entangledLanes |= l, t.entanglements[u] = t.entanglements[u] | 1073741824 | e & 261930;
  }
  function nt(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var u = 31 - Al(e), a = 1 << u;
      a & l | t[u] & l && (t[u] |= l), e &= ~a;
    }
  }
  function $(t, l) {
    var e = l & -l;
    return e = (e & 42) !== 0 ? 1 : qt(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
  }
  function qt(t) {
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
  function Jt(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function jl() {
    var t = J.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : yv(t.type));
  }
  function Vt(t, l) {
    var e = J.p;
    try {
      return J.p = t, l();
    } finally {
      J.p = e;
    }
  }
  var ct = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + ct, el = "__reactProps$" + ct, te = "__reactContainer$" + ct, ss = "__reactEvents$" + ct, Qv = "__reactListeners$" + ct, Zv = "__reactHandles$" + ct, rs = "__reactResources$" + ct, Pa = "__reactMarker$" + ct, Pn = "__reactLoad$" + ct;
  function ti(t) {
    delete t[Qt], delete t[el], delete t[Qv], delete t[Zv];
  }
  function Ru(t) {
    var l;
    if (l = t[Qt]) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[te] || e[Qt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = kd(t); t !== null; ) {
            if (e = t[Qt]) return e;
            t = kd(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function aa(t) {
    if (t = t[Qt] || t[te]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function tn(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(r(33));
  }
  function na(t) {
    var l = t[rs];
    return l || (l = t[rs] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function rl(t) {
    t[Pa] = !0;
  }
  function ds(t) {
    t[Pn] = void 0;
  }
  var vs = /* @__PURE__ */ new Set(), ms = {};
  function Uu(t, l) {
    ia(t, l), ia(t + "Capture", l);
  }
  function ia(t, l) {
    for (ms[t] = l, t = 0; t < l.length; t++)
      vs.add(l[t]);
  }
  var Lv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ys = {}, hs = {};
  function Vv(t) {
    return cl.call(hs, t) ? !0 : cl.call(ys, t) ? !1 : Lv.test(t) ? hs[t] = !0 : (ys[t] = !0, !1);
  }
  var Ot = !1;
  function gs() {
    var t = Ot;
    return Ot = !1, t;
  }
  function li(t, l, e) {
    if (Vv(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var u = l.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, e);
      }
  }
  function ei(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, e);
    }
  }
  function Be(t, l, e, u) {
    if (u === null) t.removeAttribute(e);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, u);
    }
  }
  function Vl(t) {
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
  function bs(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Kv(t, l, e) {
    var u = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    );
    if (!t.hasOwnProperty(l) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var a = u.get, n = u.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(i) {
          e = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(t, l, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(i) {
          e = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function xc(t) {
    if (!t._valueTracker) {
      var l = bs(t) ? "checked" : "value";
      t._valueTracker = Kv(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function Ss(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), u = "";
    return t && (u = bs(t) ? t.checked ? "true" : "false" : t.value), t = u, t !== e ? (l.setValue(t), !0) : !1;
  }
  var wv = /[\n"\\]/g;
  function le(t) {
    return t.replace(
      wv,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Oc(t, l, e, u, a, n, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + Vl(l)) : t.value !== "" + Vl(l) && (t.value = "" + Vl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? i === "number" && t.value == l ? Nc(t, Vl(t.value)) : Nc(t, Vl(l)) : e != null ? Nc(t, Vl(e)) : u != null && t.removeAttribute("value"), a == null && n != null && (t.defaultChecked = !!n), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + Vl(c) : t.removeAttribute("name");
  }
  function Ts(t, l, e, u, a, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null)) {
        xc(t);
        return;
      }
      e = e != null ? "" + Vl(e) : "", l = l != null ? "" + Vl(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    u = u ?? a, u = typeof u != "function" && typeof u != "symbol" && !!u, t.checked = c ? t.checked : !!u, t.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), xc(t);
  }
  function Nc(t, l) {
    t.defaultValue !== "" + l && (t.defaultValue = "" + l);
  }
  function ca(t, l, e, u) {
    if (t = t.options, l) {
      l = {};
      for (var a = 0; a < e.length; a++)
        l["$" + e[a]] = !0;
      for (e = 0; e < t.length; e++)
        a = l.hasOwnProperty("$" + t[e].value), t[e].selected !== a && (t[e].selected = a), a && u && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + Vl(e), l = null, a = 0; a < t.length; a++) {
        if (t[a].value === e) {
          t[a].selected = !0, u && (t[a].defaultSelected = !0);
          return;
        }
        l !== null || t[a].disabled || (l = t[a]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Es(t, l, e) {
    if (l != null && (l = "" + Vl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + Vl(e) : "";
  }
  function zs(t, l, e, u) {
    if (l == null) {
      if (u != null) {
        if (e != null) throw Error(r(92));
        if (xt(u)) {
          if (1 < u.length) throw Error(r(93));
          u = u[0];
        }
        e = u;
      }
      e == null && (e = ""), l = e;
    }
    e = Vl(l), t.defaultValue = e, u = t.textContent, u === e && u !== "" && u !== null && (t.value = u), xc(t);
  }
  function fa(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Jv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _s(t, l, e) {
    var u = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? u ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : u ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Jv.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function xs(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(r(62));
    if (t = t.style, e != null) {
      for (var u in e)
        !e.hasOwnProperty(u) || l != null && l.hasOwnProperty(u) || (u.indexOf("--") === 0 ? t.setProperty(u, "") : u === "float" ? t.cssFloat = "" : t[u] = "", Ot = !0);
      for (var a in l)
        u = l[a], l.hasOwnProperty(a) && e[a] !== u && (_s(t, a, u), Ot = !0);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && _s(t, n, l[n]);
  }
  function pc(t) {
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
  var $v = /* @__PURE__ */ new Map([
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
  ]), kv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ui(t) {
    return kv.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ze() {
  }
  var Ac = null;
  function Mc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var oa = null, sa = null;
  function Os(t) {
    var l = aa(t);
    if (l && (t = l.stateNode)) {
      var e = t[el] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (Oc(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + le(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var u = e[l];
              if (u !== t && u.form === t.form) {
                var a = u[el] || null;
                if (!a) throw Error(r(90));
                Oc(
                  u,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              u = e[l], u.form === t.form && Ss(u);
          }
          break t;
        case "textarea":
          Es(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && ca(t, !!e.multiple, l, !1);
      }
    }
  }
  var Dc = !1;
  function Ns(t, l, e) {
    if (Dc) return t(l, e);
    Dc = !0;
    try {
      var u = t(l);
      return u;
    } finally {
      if (Dc = !1, (oa !== null || sa !== null) && (uc(), oa && (l = oa, t = sa, sa = oa = null, Os(l), t)))
        for (l = 0; l < t.length; l++) Os(t[l]);
    }
  }
  function ln(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var u = e[el] || null;
    if (u === null) return null;
    e = u[l];
    t: switch (l) {
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
        (u = !u.disabled) || (t = t.type, u = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !u;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        r(231, l, typeof e)
      );
    return e;
  }
  var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Cc = !1;
  if (qe)
    try {
      var en = {};
      Object.defineProperty(en, "passive", {
        get: function() {
          Cc = !0;
        }
      }), window.addEventListener("test", en, en), window.removeEventListener("test", en, en);
    } catch {
      Cc = !1;
    }
  var tu = null, Rc = null, ai = null;
  function ps() {
    if (ai) return ai;
    var t, l = Rc, e = l.length, u, a = "value" in tu ? tu.value : tu.textContent, n = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++) ;
    var i = e - t;
    for (u = 1; u <= i && l[e - u] === a[n - u]; u++) ;
    return ai = a.slice(t, 1 < u ? 1 - u : void 0);
  }
  function ni(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function ii() {
    return !0;
  }
  function As() {
    return !1;
  }
  function Dl(t) {
    function l(e, u, a, n, i) {
      this._reactName = e, this._targetInst = a, this.type = u, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? ii : As, this.isPropagationStopped = As, this;
    }
    return P(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = ii);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = ii);
      },
      persist: function() {
      },
      isPersistent: ii
    }), l;
  }
  var lu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ci = Dl(lu), un = P({}, lu, { view: 0, detail: 0 }), Fv = Dl(un), Uc, Hc, an, fi = P({}, un, {
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
    getModifierState: Bc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== an && (an && t.type === "mousemove" ? (Uc = t.screenX - an.screenX, Hc = t.screenY - an.screenY) : Hc = Uc = 0, an = t), Uc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Hc;
    }
  }), Ms = Dl(fi), Wv = P({}, fi, { dataTransfer: 0 }), Iv = Dl(Wv), Pv = P({}, un, { relatedTarget: 0 }), jc = Dl(Pv), tm = P({}, lu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), lm = Dl(tm), em = P({}, lu, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), um = Dl(em), am = P({}, lu, { data: 0 }), Ds = Dl(am), nm = {
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
  }, im = {
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
  }, cm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function fm(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = cm[t]) ? !!l[t] : !1;
  }
  function Bc() {
    return fm;
  }
  var om = P({}, un, {
    key: function(t) {
      if (t.key) {
        var l = nm[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = ni(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? im[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Bc,
    charCode: function(t) {
      return t.type === "keypress" ? ni(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? ni(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), sm = Dl(om), rm = P({}, fi, {
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
  }), Cs = Dl(rm), dm = P({}, lu, { submitter: 0 }), vm = Dl(dm), mm = P({}, un, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Bc
  }), ym = Dl(mm), hm = P({}, lu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), gm = Dl(hm), bm = P({}, fi, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Sm = Dl(bm), Tm = P({}, lu, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Em = Dl(Tm), zm = [9, 13, 27, 32], qc = qe && "CompositionEvent" in window, nn = null;
  qe && "documentMode" in document && (nn = document.documentMode);
  var _m = qe && "TextEvent" in window && !nn, Rs = qe && (!qc || nn && 8 < nn && 11 >= nn), Us = " ", Hs = !1;
  function js(t, l) {
    switch (t) {
      case "keyup":
        return zm.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bs(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ra = !1;
  function xm(t, l) {
    switch (t) {
      case "compositionend":
        return Bs(l);
      case "keypress":
        return l.which !== 32 ? null : (Hs = !0, Us);
      case "textInput":
        return t = l.data, t === Us && Hs ? null : t;
      default:
        return null;
    }
  }
  function Om(t, l) {
    if (ra)
      return t === "compositionend" || !qc && js(t, l) ? (t = ps(), ai = Rc = tu = null, ra = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Rs && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var Nm = {
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
  function qs(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!Nm[t.type] : l === "textarea";
  }
  function Ys(t, l, e, u) {
    oa ? sa ? sa.push(u) : sa = [u] : oa = u, l = oc(l, "onChange"), 0 < l.length && (e = new ci(
      "onChange",
      "change",
      null,
      e,
      u
    ), t.push({ event: e, listeners: l }));
  }
  var cn = null, fn = null;
  function pm(t) {
    Od(t, 0);
  }
  function oi(t) {
    var l = tn(t);
    if (Ss(l)) return t;
  }
  function Gs(t, l) {
    if (t === "change") return l;
  }
  var Xs = !1;
  if (qe) {
    var Yc;
    if (qe) {
      var Gc = "oninput" in document;
      if (!Gc) {
        var Qs = document.createElement("div");
        Qs.setAttribute("oninput", "return;"), Gc = typeof Qs.oninput == "function";
      }
      Yc = Gc;
    } else Yc = !1;
    Xs = Yc && (!document.documentMode || 9 < document.documentMode);
  }
  function Zs() {
    cn && (cn.detachEvent("onpropertychange", Ls), fn = cn = null);
  }
  function Ls(t) {
    if (t.propertyName === "value" && oi(fn)) {
      var l = [];
      Ys(
        l,
        fn,
        t,
        Mc(t)
      ), Ns(pm, l);
    }
  }
  function Am(t, l, e) {
    t === "focusin" ? (Zs(), cn = l, fn = e, cn.attachEvent("onpropertychange", Ls)) : t === "focusout" && Zs();
  }
  function Mm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return oi(fn);
  }
  function Dm(t, l) {
    if (t === "click") return oi(l);
  }
  function Cm(t, l) {
    if (t === "input" || t === "change")
      return oi(l);
  }
  function Rm(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var Kl = typeof Object.is == "function" ? Object.is : Rm;
  function on(t, l) {
    if (Kl(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), u = Object.keys(l);
    if (e.length !== u.length) return !1;
    for (u = 0; u < e.length; u++) {
      var a = e[u];
      if (!cl.call(l, a) || !Kl(t[a], l[a]))
        return !1;
    }
    return !0;
  }
  function Xc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Vs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ks(t, l) {
    var e = Vs(t);
    t = 0;
    for (var u; e; ) {
      if (e.nodeType === 3) {
        if (u = t + e.textContent.length, t <= l && u >= l)
          return { node: e, offset: l - t };
        t = u;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Vs(e);
    }
  }
  function ws(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? ws(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Js(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Xc(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Xc(t.document);
    }
    return l;
  }
  function Qc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Um = qe && "documentMode" in document && 11 >= document.documentMode, da = null, Zc = null, sn = null, Lc = !1;
  function $s(t, l, e) {
    var u = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Lc || da == null || da !== Xc(u) || (u = da, "selectionStart" in u && Qc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), sn && on(sn, u) || (sn = u, u = oc(Zc, "onSelect"), 0 < u.length && (l = new ci(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: u }), l.target = da)));
  }
  function Hu(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var va = {
    animationend: Hu("Animation", "AnimationEnd"),
    animationiteration: Hu("Animation", "AnimationIteration"),
    animationstart: Hu("Animation", "AnimationStart"),
    transitionrun: Hu("Transition", "TransitionRun"),
    transitionstart: Hu("Transition", "TransitionStart"),
    transitioncancel: Hu("Transition", "TransitionCancel"),
    transitionend: Hu("Transition", "TransitionEnd")
  }, Vc = {}, ks = {};
  qe && (ks = document.createElement("div").style, "AnimationEvent" in window || (delete va.animationend.animation, delete va.animationiteration.animation, delete va.animationstart.animation), "TransitionEvent" in window || delete va.transitionend.transition);
  function ju(t) {
    if (Vc[t]) return Vc[t];
    if (!va[t]) return t;
    var l = va[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in ks)
        return Vc[t] = l[e];
    return t;
  }
  var Fs = ju("animationend"), Ws = ju("animationiteration"), Is = ju("animationstart"), Hm = ju("transitionrun"), jm = ju("transitionstart"), Bm = ju("transitioncancel"), Ps = ju("transitionend"), tr = /* @__PURE__ */ new Map(), Kc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Kc.push("scrollEnd");
  function de(t, l) {
    tr.set(t, l), Uu(l, [t]);
  }
  var qm = 0;
  function Ye(t, l) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (l.autoName !== null) return l.autoName;
    t = he.identifierPrefix;
    var e = qm++;
    return t = "_" + t + "t_" + e.toString(32) + "_", l.autoName = t;
  }
  function lr(t) {
    if (t == null || typeof t == "string")
      return t;
    var l = null, e = Ua;
    if (e !== null)
      for (var u = 0; u < e.length; u++) {
        var a = t[e[u]];
        if (a != null) {
          if (a === "none") return "none";
          l = l == null ? a : l + (" " + a);
        }
      }
    return l ?? t.default;
  }
  function Ge(t, l) {
    return t = lr(t), l = lr(l), l == null ? t === "auto" ? null : t : l === "auto" ? null : l;
  }
  var si = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, ee = [], ma = 0, wc = 0;
  function ri() {
    for (var t = ma, l = wc = ma = 0; l < t; ) {
      var e = ee[l];
      ee[l++] = null;
      var u = ee[l];
      ee[l++] = null;
      var a = ee[l];
      ee[l++] = null;
      var n = ee[l];
      if (ee[l++] = null, u !== null && a !== null) {
        var i = u.pending;
        i === null ? a.next = a : (a.next = i.next, i.next = a), u.pending = a;
      }
      n !== 0 && er(e, a, n);
    }
  }
  function di(t, l, e, u) {
    ee[ma++] = t, ee[ma++] = l, ee[ma++] = e, ee[ma++] = u, wc |= u, t.lanes |= u, t = t.alternate, t !== null && (t.lanes |= u);
  }
  function Jc(t, l, e, u) {
    return di(t, l, e, u), vi(t);
  }
  function Bu(t, l) {
    return di(t, null, null, l), vi(t);
  }
  function er(t, l, e) {
    t.lanes |= e;
    var u = t.alternate;
    u !== null && (u.lanes |= e);
    for (var a = !1, n = t.return; n !== null; )
      n.childLanes |= e, u = n.alternate, u !== null && (u.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (a = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, a && l !== null && (a = 31 - Al(e), t = n.hiddenUpdates, u = t[a], u === null ? t[a] = [l] : u.push(l), l.lane = e | 536870912), n) : null;
  }
  function vi(t) {
    if (50 < Rn)
      throw Rn = 0, ec = null, Error(r(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ya = {};
  function Ym(t, l, e, u) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Bl(t, l, e, u) {
    return new Ym(t, l, e, u);
  }
  function $c(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Xe(t, l) {
    var e = t.alternate;
    return e === null ? (e = Bl(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 1206910976, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function ur(t, l) {
    t.flags &= 1206910978;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function mi(t, l, e, u, a, n) {
    var i = 0;
    if (u = t, typeof u == "function") $c(u) && (i = 1);
    else if (typeof u == "string")
      i = dh(
        t,
        e,
        Ol.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (u) {
        case Wt:
          return t = Bl(31, e, l, a), t.elementType = Wt, t.lanes = n, t;
        case _t:
          return qu(e.children, a, n, l);
        case At:
          i = 8, a |= 24;
          break;
        case sl:
          return t = Bl(12, e, l, a | 2), t.elementType = sl, t.lanes = n, t;
        case G:
          return t = Bl(13, e, l, a), t.elementType = G, t.lanes = n, t;
        case Z:
          return t = Bl(19, e, l, a), t.elementType = Z, t.lanes = n, t;
        case se:
        case s:
          return t = a | 32, t = Bl(30, e, l, t), t.elementType = s, t.lanes = n, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof u == "object" && u !== null)
            switch (u.$$typeof) {
              case F:
                i = 10;
                break t;
              case tl:
                i = 9;
                break t;
              case A:
                i = 11;
                break t;
              case ut:
                i = 14;
                break t;
              case bt:
                i = 16, u = null;
                break t;
            }
          i = 29, e = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), u = null;
      }
    return l = Bl(i, e, l, a), l.elementType = t, l.type = u, l.lanes = n, l;
  }
  function qu(t, l, e, u) {
    return t = Bl(7, t, u, l), t.lanes = e, t;
  }
  function kc(t, l, e) {
    return t = Bl(6, t, null, l), t.lanes = e, t;
  }
  function ar(t) {
    var l = Bl(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Fc(t, l, e) {
    return l = Bl(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var nr = /* @__PURE__ */ new WeakMap();
  function ue(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = nr.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: la(l)
      }, nr.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: la(l)
    };
  }
  var ha = [], ga = 0, yi = null, rn = 0, ae = [], ne = 0, eu = null, _e = 1, xe = "";
  function Qe(t, l) {
    ha[ga++] = rn, ha[ga++] = yi, yi = t, rn = l;
  }
  function ir(t, l, e) {
    ae[ne++] = _e, ae[ne++] = xe, ae[ne++] = eu, eu = t;
    var u = _e;
    t = xe;
    var a = 32 - Al(u) - 1;
    u &= ~(1 << a), e += 1;
    var n = 32 - Al(l) + a;
    if (30 < n) {
      var i = a - a % 5;
      n = (u & (1 << i) - 1).toString(32), u >>= i, a -= i, _e = 1 << 32 - Al(l) + a | e << a | u, xe = n + t;
    } else
      _e = 1 << n | e << a | u, xe = t;
  }
  function hi(t) {
    t.return !== null && (Qe(t, 1), ir(t, 1, 0));
  }
  function Wc(t) {
    for (; t === yi; )
      yi = ha[--ga], ha[ga] = null, rn = ha[--ga], ha[ga] = null;
    for (; t === eu; )
      eu = ae[--ne], ae[ne] = null, xe = ae[--ne], ae[ne] = null, _e = ae[--ne], ae[ne] = null;
  }
  function cr(t, l) {
    ae[ne++] = _e, ae[ne++] = xe, ae[ne++] = eu, _e = l.id, xe = l.overflow, eu = t;
  }
  var dl = null, Gt = null, it = !1, uu = null, ie = !1, Ic = Error(r(519));
  function au(t) {
    var l = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw dn(ue(l, t)), Ic;
  }
  function fr(t) {
    var l = t.stateNode, e = t.type, u = t.memoizedProps;
    switch (l[Qt] = t, l[el] = u, e) {
      case "dialog":
        st("cancel", l), st("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        st("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Hn.length; e++)
          st(Hn[e], l);
        break;
      case "source":
        st("error", l);
        break;
      case "img":
      case "image":
      case "link":
        st("error", l), st("load", l);
        break;
      case "details":
        st("toggle", l);
        break;
      case "input":
        st("invalid", l), Ts(
          l,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        st("invalid", l);
        break;
      case "textarea":
        st("invalid", l), zs(l, u.value, u.defaultValue, u.children);
    }
    e = u.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || u.suppressHydrationWarning === !0 || Md(l.textContent, e) ? (u.popover != null && (st("beforetoggle", l), st("toggle", l)), u.onScroll != null && st("scroll", l), u.onScrollEnd != null && st("scrollend", l), u.onClick != null && (l.onclick = ze), l = !0) : l = !1, l || au(t, !0);
  }
  function gi(t) {
    for (dl = t.return; dl; )
      switch (dl.tag) {
        case 5:
        case 31:
        case 13:
          ie = !1;
          return;
        case 27:
        case 3:
          ie = !0;
          return;
        default:
          dl = dl.return;
      }
  }
  function ba(t) {
    if (t !== dl) return !1;
    if (!it) return gi(t), it = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || Do(t.type, t.memoizedProps)), e = !e), e && Gt && au(t), gi(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Gt = $d(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Gt = $d(t);
    } else
      l === 27 ? (l = Gt, Tu(t.type) ? (t = Go, Go = null, Gt = t) : Gt = l) : Gt = dl ? fe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Yu() {
    Gt = dl = null, it = !1;
  }
  function Pc() {
    var t = uu;
    return t !== null && (Gl === null ? Gl = t : Gl.push.apply(
      Gl,
      t
    ), uu = null), t;
  }
  function dn(t) {
    uu === null ? uu = [t] : uu.push(t);
  }
  var tf = Pl(null), Gu = null, Ze = null;
  function nu(t, l, e) {
    Ht(tf, l._currentValue), l._currentValue = e;
  }
  function Le(t) {
    t._currentValue = tf.current, ll(tf);
  }
  function bi(t, l, e) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, u !== null && (u.childLanes |= l)) : u !== null && (u.childLanes & l) !== l && (u.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function lf(t, l, e, u) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var n = a.dependencies;
      if (n !== null) {
        var i = a.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var c = n;
          n = a;
          for (var f = 0; f < l.length; f++)
            if (c.context === l[f]) {
              n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), bi(
                n.return,
                e,
                t
              ), u || (i = null);
              break t;
            }
          n = c.next;
        }
      } else if (a.tag === 18) {
        if (i = a.return, i === null) throw Error(r(341));
        i.lanes |= e, n = i.alternate, n !== null && (n.lanes |= e), bi(i, e, t), i = null;
      } else
        a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= e, i = a.alternate, i !== null && (i.lanes |= e), bi(
          a.return,
          e,
          t
        ), i = a.child, i = i !== null ? i.sibling : null) : i = a.child;
      if (i !== null) i.return = a;
      else
        for (i = a; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (a = i.sibling, a !== null) {
            a.return = i.return, i = a;
            break;
          }
          i = i.return;
        }
      a = i;
    }
  }
  function Xu(t, l, e, u) {
    t = null;
    for (var a = l, n = !1; a !== null; ) {
      if (!n) {
        if ((a.flags & 524288) !== 0) n = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error(r(387));
        if (i = i.memoizedProps, i !== null) {
          var c = a.type;
          Kl(a.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (a === Ql.current) {
        if (i = a.alternate, i === null) throw Error(r(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(La) : t = [La]);
      }
      a = a.return;
    }
    return t !== null && lf(
      l,
      t,
      e,
      u
    ), l.flags |= 262144, t !== null;
  }
  function Si(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Kl(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Qu(t) {
    Gu = t, Ze = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function hl(t) {
    return or(Gu, t);
  }
  function Ti(t, l) {
    return Gu === null && Qu(t), or(t, l);
  }
  function or(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, Ze === null) {
      if (t === null) throw Error(r(308));
      Ze = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Ze = Ze.next = l;
    return e;
  }
  var Gm = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, u) {
        t.push(u);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, Xm = T.unstable_scheduleCallback, Qm = T.unstable_NormalPriority, ul = {
    $$typeof: F,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ef() {
    return {
      controller: new Gm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function vn(t) {
    t.refCount--, t.refCount === 0 && Xm(Qm, function() {
      t.controller.abort();
    });
  }
  function sr(t, l) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var e = t.transitionTypes;
      for (e === null && (e = t.transitionTypes = []), t = 0; t < l.length; t++) {
        var u = l[t];
        e.indexOf(u) === -1 && e.push(u);
      }
    }
  }
  var mn = null;
  function Zm(t) {
    var l = t.transitionTypes;
    return t.transitionTypes = null, l;
  }
  var yn = null, uf = 0, Zu = 0, Sa = null;
  function Lm(t, l) {
    if (yn === null) {
      var e = yn = [];
      uf = 0, Zu = Eo(), Sa = {
        status: "pending",
        value: void 0,
        then: function(u) {
          e.push(u);
        }
      };
    }
    return uf++, l.then(rr, rr), l;
  }
  function rr() {
    if (--uf === 0 && (mn = null, yn !== null)) {
      Sa !== null && (Sa.status = "fulfilled");
      var t = yn;
      yn = null, Zu = 0, Sa = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Vm(t, l) {
    var e = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        e.push(a);
      }
    };
    return t.then(
      function() {
        u.status = "fulfilled", u.value = l;
        for (var a = 0; a < e.length; a++) (0, e[a])(l);
      },
      function(a) {
        for (u.status = "rejected", u.reason = a, a = 0; a < e.length; a++)
          (0, e[a])(void 0);
      }
    ), u;
  }
  var dr = j.S;
  j.S = function(t, l) {
    if (ad = Nl(), typeof l == "object" && l !== null && typeof l.then == "function" && Lm(t, l), mn !== null)
      for (var e = qa; e !== null; )
        sr(e, mn), e = e.next;
    if (e = t.types, e !== null) {
      for (var u = qa; u !== null; )
        sr(u, e), u = u.next;
      if (Zu !== 0) {
        u = mn, u === null && (u = mn = []);
        for (var a = 0; a < e.length; a++) {
          var n = e[a];
          u.indexOf(n) === -1 && u.push(n);
        }
      }
    }
    dr !== null && dr(t, l);
  };
  var Lu = Pl(null);
  function af() {
    var t = Lu.current;
    return t !== null ? t : Yt.pooledCache;
  }
  function Ei(t, l) {
    l === null ? Ht(Lu, Lu.current) : Ht(Lu, l.pool);
  }
  function vr() {
    var t = af();
    return t === null ? null : { parent: ul._currentValue, pool: t };
  }
  var Ta = Error(r(460)), nf = Error(r(474)), zi = Error(r(542)), _i = { then: function() {
  } };
  function mr(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function yr(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(ze, ze), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, gr(t), t === void 0 && !("reason" in l) ? Error(r(600)) : t;
      default:
        if (typeof l.status == "string") l.then(ze, ze);
        else {
          if (t = Yt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = l, t.status = "pending", t.then(
            function(u) {
              if (l.status === "pending") {
                var a = l;
                a.status = "fulfilled", a.value = u;
              }
            },
            function(u) {
              if (l.status === "pending") {
                var a = l;
                a.status = "rejected", a.reason = u;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, gr(t), t;
        }
        throw Ku = l, Ta;
    }
  }
  function Vu(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ku = e, Ta) : e;
    }
  }
  var Ku = null;
  function hr() {
    if (Ku === null) throw Error(r(459));
    var t = Ku;
    return Ku = null, t;
  }
  function gr(t) {
    if (t === Ta || t === zi)
      throw Error(r(483));
  }
  var Ea = null, hn = 0;
  function xi(t) {
    var l = hn;
    return hn += 1, Ea === null && (Ea = []), yr(Ea, t, l);
  }
  function iu(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function Oi(t, l) {
    throw l.$$typeof === dt ? Error(r(525)) : (t = Object.prototype.toString.call(l), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function br(t) {
    function l(v, o) {
      if (t) {
        var h = v.deletions;
        h === null ? (v.deletions = [o], v.flags |= 16) : h.push(o);
      }
    }
    function e(v, o) {
      if (!t) return null;
      for (; o !== null; )
        l(v, o), o = o.sibling;
      return null;
    }
    function u(v) {
      for (var o = /* @__PURE__ */ new Map(); v !== null; )
        v.key === null ? o.set(v.index, v) : o.set(v.key, v), v = v.sibling;
      return o;
    }
    function a(v, o) {
      return v = Xe(v, o), v.index = 0, v.sibling = null, v;
    }
    function n(v, o, h) {
      return v.index = h, t ? (h = v.alternate, h !== null ? (h = h.index, h < o ? (v.flags |= 2, o) : h) : (v.flags |= 134217730, o)) : (v.flags |= 1048576, o);
    }
    function i(v) {
      return t && v.alternate === null && (v.flags |= 134217730), v;
    }
    function c(v, o, h, z) {
      return o === null || o.tag !== 6 ? (o = kc(h, v.mode, z), o.return = v, o) : (o = a(o, h), o.return = v, o);
    }
    function f(v, o, h, z) {
      var U = h.type;
      return U === _t ? (v = S(
        v,
        o,
        h.props.children,
        z,
        h.key
      ), iu(v, h), v) : o !== null && (o.elementType === U || typeof U == "object" && U !== null && U.$$typeof === bt && Vu(U) === o.type) ? (o = a(o, h.props), iu(o, h), o.return = v, o) : (o = mi(
        h.type,
        h.key,
        h.props,
        null,
        v.mode,
        z
      ), iu(o, h), o.return = v, o);
    }
    function m(v, o, h, z) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = Fc(h, v.mode, z), o.return = v, o) : (o = a(o, h.children || []), o.return = v, o);
    }
    function S(v, o, h, z, U) {
      return o === null || o.tag !== 7 ? (o = qu(
        h,
        v.mode,
        z,
        U
      ), o.return = v, o) : (o = a(o, h), o.return = v, o);
    }
    function _(v, o, h) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = kc(
          "" + o,
          v.mode,
          h
        ), o.return = v, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case ht:
            return h = mi(
              o.type,
              o.key,
              o.props,
              null,
              v.mode,
              h
            ), iu(h, o), h.return = v, h;
          case W:
            return o = Fc(
              o,
              v.mode,
              h
            ), o.return = v, o;
          case bt:
            return o = Vu(o), _(v, o, h);
        }
        if (xt(o) || D(o))
          return o = qu(
            o,
            v.mode,
            h,
            null
          ), o.return = v, o;
        if (typeof o.then == "function")
          return _(v, xi(o), h);
        if (o.$$typeof === F)
          return _(
            v,
            Ti(v, o),
            h
          );
        Oi(v, o);
      }
      return null;
    }
    function d(v, o, h, z) {
      var U = o !== null ? o.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return U !== null ? null : c(v, o, "" + h, z);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ht:
            return h.key === U ? f(v, o, h, z) : null;
          case W:
            return h.key === U ? m(v, o, h, z) : null;
          case bt:
            return h = Vu(h), d(v, o, h, z);
        }
        if (xt(h) || D(h))
          return U !== null ? null : S(v, o, h, z, null);
        if (typeof h.then == "function")
          return d(
            v,
            o,
            xi(h),
            z
          );
        if (h.$$typeof === F)
          return d(
            v,
            o,
            Ti(v, h),
            z
          );
        Oi(v, h);
      }
      return null;
    }
    function g(v, o, h, z, U) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return v = v.get(h) || null, c(o, v, "" + z, U);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ht:
            return v = v.get(
              z.key === null ? h : z.key
            ) || null, f(o, v, z, U);
          case W:
            return v = v.get(
              z.key === null ? h : z.key
            ) || null, m(o, v, z, U);
          case bt:
            return z = Vu(z), g(
              v,
              o,
              h,
              z,
              U
            );
        }
        if (xt(z) || D(z))
          return v = v.get(h) || null, S(o, v, z, U, null);
        if (typeof z.then == "function")
          return g(
            v,
            o,
            h,
            xi(z),
            U
          );
        if (z.$$typeof === F)
          return g(
            v,
            o,
            h,
            Ti(o, z),
            U
          );
        Oi(o, z);
      }
      return null;
    }
    function M(v, o, h, z) {
      for (var U = null, yt = null, Q = o, w = o = 0, il = null; Q !== null && w < h.length; w++) {
        Q.index > w ? (il = Q, Q = null) : il = Q.sibling;
        var St = d(
          v,
          Q,
          h[w],
          z
        );
        if (St === null) {
          Q === null && (Q = il);
          break;
        }
        t && Q && St.alternate === null && l(v, Q), o = n(St, o, w), yt === null ? U = St : yt.sibling = St, yt = St, Q = il;
      }
      if (w === h.length)
        return e(v, Q), it && Qe(v, w), U;
      if (Q === null) {
        for (; w < h.length; w++)
          Q = _(v, h[w], z), Q !== null && (o = n(
            Q,
            o,
            w
          ), yt === null ? U = Q : yt.sibling = Q, yt = Q);
        return it && Qe(v, w), U;
      }
      for (Q = u(Q); w < h.length; w++)
        il = g(
          Q,
          v,
          w,
          h[w],
          z
        ), il !== null && (t && (St = il.alternate, St !== null && Q.delete(St.key === null ? w : St.key)), o = n(
          il,
          o,
          w
        ), yt === null ? U = il : yt.sibling = il, yt = il);
      return t && Q.forEach(function(Ou) {
        return l(v, Ou);
      }), it && Qe(v, w), U;
    }
    function q(v, o, h, z) {
      if (h == null) throw Error(r(151));
      for (var U = null, yt = null, Q = o, w = o = 0, il = null, St = h.next(); Q !== null && !St.done; w++, St = h.next()) {
        Q.index > w ? (il = Q, Q = null) : il = Q.sibling;
        var Ou = d(v, Q, St.value, z);
        if (Ou === null) {
          Q === null && (Q = il);
          break;
        }
        t && Q && Ou.alternate === null && l(v, Q), o = n(Ou, o, w), yt === null ? U = Ou : yt.sibling = Ou, yt = Ou, Q = il;
      }
      if (St.done)
        return e(v, Q), it && Qe(v, w), U;
      if (Q === null) {
        for (; !St.done; w++, St = h.next())
          St = _(v, St.value, z), St !== null && (o = n(St, o, w), yt === null ? U = St : yt.sibling = St, yt = St);
        return it && Qe(v, w), U;
      }
      for (Q = u(Q); !St.done; w++, St = h.next())
        St = g(Q, v, w, St.value, z), St !== null && (t && (il = St.alternate, il !== null && Q.delete(
          il.key === null ? w : il.key
        )), o = n(St, o, w), yt === null ? U = St : yt.sibling = St, yt = St);
      return t && Q.forEach(function(xh) {
        return l(v, xh);
      }), it && Qe(v, w), U;
    }
    function et(v, o, h, z) {
      if (typeof h == "object" && h !== null && h.type === _t && h.key === null && h.props.ref === void 0 && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ht:
            t: {
              for (var U = h.key; o !== null; ) {
                if (o.key === U) {
                  if (U = h.type, U === _t) {
                    if (o.tag === 7) {
                      e(
                        v,
                        o.sibling
                      ), z = a(
                        o,
                        h.props.children
                      ), iu(z, h), z.return = v, v = z;
                      break t;
                    }
                  } else if (o.elementType === U || typeof U == "object" && U !== null && U.$$typeof === bt && Vu(U) === o.type) {
                    e(
                      v,
                      o.sibling
                    ), z = a(o, h.props), iu(z, h), z.return = v, v = z;
                    break t;
                  }
                  e(v, o);
                  break;
                } else l(v, o);
                o = o.sibling;
              }
              h.type === _t ? (z = qu(
                h.props.children,
                v.mode,
                z,
                h.key
              ), iu(z, h), z.return = v, v = z) : (z = mi(
                h.type,
                h.key,
                h.props,
                null,
                v.mode,
                z
              ), iu(z, h), z.return = v, v = z);
            }
            return i(v);
          case W:
            t: {
              for (U = h.key; o !== null; ) {
                if (o.key === U)
                  if (o.tag === 4 && o.stateNode.containerInfo === h.containerInfo && o.stateNode.implementation === h.implementation) {
                    e(
                      v,
                      o.sibling
                    ), z = a(o, h.children || []), z.return = v, v = z;
                    break t;
                  } else {
                    e(v, o);
                    break;
                  }
                else l(v, o);
                o = o.sibling;
              }
              z = Fc(h, v.mode, z), z.return = v, v = z;
            }
            return i(v);
          case bt:
            return h = Vu(h), et(
              v,
              o,
              h,
              z
            );
        }
        if (xt(h))
          return M(
            v,
            o,
            h,
            z
          );
        if (D(h)) {
          if (U = D(h), typeof U != "function") throw Error(r(150));
          return h = U.call(h), q(
            v,
            o,
            h,
            z
          );
        }
        if (typeof h.then == "function")
          return et(
            v,
            o,
            xi(h),
            z
          );
        if (h.$$typeof === F)
          return et(
            v,
            o,
            Ti(v, h),
            z
          );
        Oi(v, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, o !== null && o.tag === 6 ? (e(v, o.sibling), z = a(o, h), z.return = v, v = z) : (e(v, o), z = kc(h, v.mode, z), z.return = v, v = z), i(v)) : e(v, o);
    }
    return function(v, o, h, z) {
      try {
        hn = 0;
        var U = et(
          v,
          o,
          h,
          z
        );
        return Ea = null, U;
      } catch (Q) {
        if (Q === Ta || Q === zi) throw Q;
        var yt = Bl(29, Q, null, v.mode);
        return yt.lanes = z, yt.return = v, yt;
      }
    };
  }
  var wu = br(!0), Sr = br(!1), cu = !1;
  function cf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ff(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function fu(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ou(t, l, e) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (Nt & 2) !== 0) {
      var a = u.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), u.pending = l, l = vi(t), er(t, null, e), l;
    }
    return di(t, u, l, e), vi(t);
  }
  function gn(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, nt(t, e);
    }
  }
  function of(t, l) {
    var e = t.updateQueue, u = t.alternate;
    if (u !== null && (u = u.updateQueue, e === u)) {
      var a = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? a = n = i : n = n.next = i, e = e.next;
        } while (e !== null);
        n === null ? a = n = l : n = n.next = l;
      } else a = n = l;
      e = {
        baseState: u.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var sf = !1;
  function bn() {
    if (sf) {
      var t = Sa;
      if (t !== null) throw t;
    }
  }
  function Sn(t, l, e, u) {
    sf = !1;
    var a = t.updateQueue;
    cu = !1;
    var n = a.firstBaseUpdate, i = a.lastBaseUpdate, c = a.shared.pending;
    if (c !== null) {
      a.shared.pending = null;
      var f = c, m = f.next;
      f.next = null, i === null ? n = m : i.next = m, i = f;
      var S = t.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== i && (c === null ? S.firstBaseUpdate = m : c.next = m, S.lastBaseUpdate = f));
    }
    if (n !== null) {
      var _ = a.baseState;
      i = 0, S = m = f = null, c = n;
      do {
        var d = c.lane & -536870913, g = d !== c.lane;
        if (g ? (mt & d) === d : (u & d) === d) {
          d !== 0 && d === Zu && (sf = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var M = t, q = c;
            d = l;
            var et = e;
            switch (q.tag) {
              case 1:
                if (M = q.payload, typeof M == "function") {
                  _ = M.call(et, _, d);
                  break t;
                }
                _ = M;
                break t;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = q.payload, d = typeof M == "function" ? M.call(et, _, d) : M, d == null) break t;
                _ = P({}, _, d);
                break t;
              case 2:
                cu = !0;
            }
          }
          d = c.callback, d !== null && (t.flags |= 64, g && (t.flags |= 8192), g = a.callbacks, g === null ? a.callbacks = [d] : g.push(d));
        } else
          g = {
            lane: d,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (m = S = g, f = _) : S = S.next = g, i |= d;
        if (c = c.next, c === null) {
          if (c = a.shared.pending, c === null)
            break;
          g = c, c = g.next, g.next = null, a.lastBaseUpdate = g, a.shared.pending = null;
        }
      } while (!0);
      S === null && (f = _), a.baseState = f, a.firstBaseUpdate = m, a.lastBaseUpdate = S, n === null && (a.shared.lanes = 0), hu |= i, t.lanes = i, t.memoizedState = _;
    }
  }
  function Tr(t, l) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(l);
  }
  function Er(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        Tr(e[t], l);
  }
  var su = Pl(null), Ni = Pl(0);
  function zr(t, l) {
    t = $e, Ht(Ni, t), Ht(su, l), $e = t | l.baseLanes;
  }
  function rf() {
    Ht(Ni, $e), Ht(su, su.current);
  }
  function df() {
    $e = Ni.current, ll(su), ll(Ni);
  }
  var gl = Pl(null), xl = null;
  function ru(t) {
    var l = t.alternate;
    Ht(bl, bl.current & 1), Ht(gl, t), xl === null && (l === null || su.current !== null || l.memoizedState !== null) && (xl = t);
  }
  function vf(t) {
    Ht(bl, bl.current), Ht(gl, t), xl === null && (xl = t);
  }
  function _r(t) {
    t.tag === 22 ? (Ht(bl, bl.current), Ht(gl, t), xl === null && (xl = t)) : du();
  }
  function du() {
    Ht(bl, bl.current), Ht(gl, gl.current);
  }
  function wl(t) {
    ll(gl), xl === t && (xl = null), ll(bl);
  }
  var bl = Pl(0);
  function Tn(t, l) {
    Ht(gl, gl.current), Ht(bl, l);
  }
  function mf(t) {
    ll(bl), ll(gl), xl === t && (xl = null);
  }
  function pi(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || qo(e) || Yo(e)))
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== "independent") {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var Ve = 0, lt = null, jt = null, al = null, Ai = !1, za = !1, Ju = !1, Mi = 0, En = 0, _a = null, Km = 0;
  function $t() {
    throw Error(r(321));
  }
  function yf(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!Kl(t[e], l[e])) return !1;
    return !0;
  }
  function hf(t, l, e, u, a, n) {
    return Ve = n, lt = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, j.H = t === null || t.memoizedState === null ? i0 : c0, Ju = !1, n = e(u, a), Ju = !1, za && (n = Or(
      l,
      e,
      u,
      a
    )), xr(t), n;
  }
  function xr(t) {
    j.H = Bi;
    var l = jt !== null && jt.next !== null;
    if (Ve = 0, al = jt = lt = null, Ai = !1, En = 0, _a = null, l) throw Error(r(300));
    t === null || nl || (t = t.dependencies, t !== null && Si(t) && (nl = !0));
  }
  function Or(t, l, e, u) {
    lt = t;
    var a = 0;
    do {
      if (za && (_a = null), En = 0, za = !1, 25 <= a) throw Error(r(301));
      if (a += 1, al = jt = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      j.H = Pm, n = l(e, u);
    } while (za);
    return n;
  }
  function wm() {
    var t = j.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? zn(l) : l, t = t.useState()[0], (jt !== null ? jt.memoizedState : null) !== t && (lt.flags |= 1024), l;
  }
  function gf() {
    var t = Mi !== 0;
    return Mi = 0, t;
  }
  function bf(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function Sf(t) {
    if (Ai) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      Ai = !1;
    }
    Ve = 0, al = jt = lt = null, za = !1, En = Mi = 0, _a = null;
  }
  function Cl() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return al === null ? lt.memoizedState = al = t : al = al.next = t, al;
  }
  function Pt() {
    if (jt === null) {
      var t = lt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = jt.next;
    var l = al === null ? lt.memoizedState : al.next;
    if (l !== null)
      al = l, jt = t;
    else {
      if (t === null)
        throw lt.alternate === null ? Error(r(467)) : Error(r(310));
      jt = t, t = {
        memoizedState: jt.memoizedState,
        baseState: jt.baseState,
        baseQueue: jt.baseQueue,
        queue: jt.queue,
        next: null
      }, al === null ? lt.memoizedState = al = t : al = al.next = t;
    }
    return al;
  }
  function Di() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function zn(t) {
    var l = En;
    return En += 1, _a === null && (_a = []), t = yr(_a, t, l), l = lt, (al === null ? l.memoizedState : al.next) === null && (l = l.alternate, j.H = l === null || l.memoizedState === null ? i0 : c0), t;
  }
  function Ci(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return zn(t);
      if (t.$$typeof === O) return;
      if (t.$$typeof === F) return hl(t);
    }
    throw Error(r(438, String(t)));
  }
  function Tf(t) {
    var l = null, e = lt.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var u = lt.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (l = {
        data: u.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = Di(), lt.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), u = 0; u < t; u++)
        e[u] = He;
    return l.index++, e;
  }
  function Ke(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function Ri(t) {
    var l = Pt();
    return Ef(l, jt, t);
  }
  function Ef(t, l, e) {
    var u = t.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = e;
    var a = t.baseQueue, n = u.pending;
    if (n !== null) {
      if (a !== null) {
        var i = a.next;
        a.next = n.next, n.next = i;
      }
      l.baseQueue = a = n, u.pending = null;
    }
    if (n = t.baseState, a === null) t.memoizedState = n;
    else {
      l = a.next;
      var c = i = null, f = null, m = l, S = !1;
      do {
        var _ = m.lane & -536870913;
        if (_ !== m.lane ? (mt & _) === _ : (Ve & _) === _) {
          var d = m.revertLane;
          if (d === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), _ === Zu && (S = !0);
          else if ((Ve & d) === d) {
            m = m.next, d === Zu && (S = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, f === null ? (c = f = _, i = n) : f = f.next = _, lt.lanes |= d, hu |= d;
          _ = m.action, Ju && e(n, _), n = m.hasEagerState ? m.eagerState : e(n, _);
        } else
          d = {
            lane: _,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, f === null ? (c = f = d, i = n) : f = f.next = d, lt.lanes |= _, hu |= _;
        m = m.next;
      } while (m !== null && m !== l);
      if (f === null ? i = n : f.next = c, !Kl(n, t.memoizedState) && (nl = !0, S && (e = Sa, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = i, t.baseQueue = f, u.lastRenderedState = n;
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function zf(t) {
    var l = Pt(), e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = t;
    var u = e.dispatch, a = e.pending, n = l.memoizedState;
    if (a !== null) {
      e.pending = null;
      var i = a = a.next;
      do
        n = t(n, i.action), i = i.next;
      while (i !== a);
      Kl(n, l.memoizedState) || (nl = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, u];
  }
  function Nr(t, l, e) {
    var u = lt, a = Pt(), n = it;
    if (n) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = l();
    var i = !Kl(
      (jt || a).memoizedState,
      e
    );
    if (i && (a.memoizedState = e, nl = !0), a = a.queue, Of(Mr.bind(null, u, a, t), [
      t
    ]), t = a.getSnapshot !== l || i || al !== null && (al.memoizedState.tag & 1) !== 0, xa(
      t ? 9 : 8,
      { destroy: void 0 },
      Ar.bind(null, u, a, e, l),
      null
    ), t) {
      if (u.flags |= 2048, Yt === null) throw Error(r(349));
      n || (Ve & 127) !== 0 || pr(u, l, e);
    }
    return e;
  }
  function pr(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = lt.updateQueue, l === null ? (l = Di(), lt.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Ar(t, l, e, u) {
    l.value = e, l.getSnapshot = u, Dr(l) && Cr(t);
  }
  function Mr(t, l, e) {
    return e(function() {
      Dr(l) && Cr(t);
    });
  }
  function Dr(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !Kl(t, e);
    } catch {
      return !0;
    }
  }
  function Cr(t) {
    var l = Bu(t, 2);
    l !== null && Xl(l, t, 2);
  }
  function _f(t) {
    var l = Cl();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), Ju) {
        Ee(!0);
        try {
          e();
        } finally {
          Ee(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ke,
      lastRenderedState: t
    }, l;
  }
  function Rr(t, l, e, u) {
    return t.baseState = e, Ef(
      t,
      jt,
      typeof u == "function" ? u : Ke
    );
  }
  function Jm(t, l, e, u, a) {
    if (ji(t)) throw Error(r(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: a,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      j.T !== null ? e(!0) : n.isTransition = !1, u(n), e = l.pending, e === null ? (n.next = l.pending = n, Ur(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function Ur(t, l) {
    var e = l.action, u = l.payload, a = t.state;
    if (l.isTransition) {
      var n = j.T, i = {};
      i.types = n !== null ? n.types : null, j.T = i;
      try {
        var c = e(a, u), f = j.S;
        f !== null && f(i, c), Hr(t, l, c);
      } catch (m) {
        xf(t, l, m);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), j.T = n;
      }
    } else
      try {
        n = e(a, u), Hr(t, l, n);
      } catch (m) {
        xf(t, l, m);
      }
  }
  function Hr(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(u) {
        jr(t, l, u);
      },
      function(u) {
        return xf(t, l, u);
      }
    ) : jr(t, l, e);
  }
  function jr(t, l, e) {
    l.status = "fulfilled", l.value = e, Br(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Ur(t, e)));
  }
  function xf(t, l, e) {
    var u = t.pending;
    if (t.pending = null, u !== null) {
      u = u.next;
      do
        l.status = "rejected", l.reason = e, Br(l), l = l.next;
      while (l !== u);
    }
    t.action = null;
  }
  function Br(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function qr(t, l) {
    return l;
  }
  function Yr(t, l) {
    if (it) {
      var e = Yt.formState;
      if (e !== null) {
        t: {
          var u = lt;
          if (it) {
            if (Gt) {
              l: {
                for (var a = Gt, n = ie; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break l;
                  }
                  if (a = fe(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break l;
                  }
                }
                n = a.data, a = n === "F!" || n === "F" ? a : null;
              }
              if (a) {
                Gt = fe(
                  a.nextSibling
                ), u = a.data === "F!";
                break t;
              }
            }
            au(u);
          }
          u = !1;
        }
        u && (l = e[0]);
      }
    }
    return e = Cl(), e.memoizedState = e.baseState = l, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qr,
      lastRenderedState: l
    }, e.queue = u, e = u0.bind(
      null,
      lt,
      u
    ), u.dispatch = e, u = _f(!1), n = Df.bind(
      null,
      lt,
      !1,
      u.queue
    ), u = Cl(), a = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, u.queue = a, e = Jm.bind(
      null,
      lt,
      a,
      n,
      e
    ), a.dispatch = e, u.memoizedState = t, [l, e, !1];
  }
  function Gr(t) {
    var l = Pt();
    return Xr(l, jt, t);
  }
  function Xr(t, l, e) {
    if (l = Ef(
      t,
      l,
      qr
    )[0], t = Ri(Ke)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var u = zn(l);
      } catch (i) {
        throw i === Ta ? zi : i;
      }
    else u = l;
    l = Pt();
    var a = l.queue, n = a.dispatch;
    return e !== l.memoizedState && (lt.flags |= 2048, xa(
      9,
      { destroy: void 0 },
      $m.bind(null, a, e),
      null
    )), [u, n, t];
  }
  function $m(t, l) {
    t.action = l;
  }
  function Qr(t) {
    var l = Pt(), e = jt;
    if (e !== null)
      return Xr(l, e, t);
    Pt(), l = l.memoizedState, e = Pt();
    var u = e.queue.dispatch;
    return e.memoizedState = t, [l, u, !1];
  }
  function xa(t, l, e, u) {
    return t = { tag: t, create: e, deps: u, inst: l, next: null }, l = lt.updateQueue, l === null && (l = Di(), lt.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (u = e.next, e.next = t, t.next = u, l.lastEffect = t), t;
  }
  function Zr() {
    return Pt().memoizedState;
  }
  function Ui(t, l, e, u) {
    var a = Cl();
    lt.flags |= t, a.memoizedState = xa(
      1 | l,
      { destroy: void 0 },
      e,
      u === void 0 ? null : u
    );
  }
  function Hi(t, l, e, u) {
    var a = Pt();
    u = u === void 0 ? null : u;
    var n = a.memoizedState.inst;
    jt !== null && u !== null && yf(u, jt.memoizedState.deps) ? a.memoizedState = xa(l, n, e, u) : (lt.flags |= t, a.memoizedState = xa(
      1 | l,
      n,
      e,
      u
    ));
  }
  function Lr(t, l) {
    Ui(8390656, 8, t, l);
  }
  function Of(t, l) {
    Hi(2048, 8, t, l);
  }
  function km(t) {
    lt.flags |= 4;
    var l = lt.updateQueue;
    if (l === null)
      l = Di(), lt.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function Vr(t) {
    var l = Pt().memoizedState;
    return km({ ref: l, nextImpl: t }), function() {
      if ((Nt & 2) !== 0) throw Error(r(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function Kr(t, l) {
    return Hi(4, 2, t, l);
  }
  function wr(t, l) {
    return Hi(4, 4, t, l);
  }
  function Jr(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function $r(t, l, e) {
    e = e != null ? e.concat([t]) : null, Hi(4, 4, Jr.bind(null, l, t), e);
  }
  function Nf() {
  }
  function kr(t, l) {
    var e = Pt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    return l !== null && yf(l, u[1]) ? u[0] : (e.memoizedState = [t, l], t);
  }
  function Fr(t, l) {
    var e = Pt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    if (l !== null && yf(l, u[1]))
      return u[0];
    if (u = t(), Ju) {
      Ee(!0);
      try {
        t();
      } finally {
        Ee(!1);
      }
    }
    return e.memoizedState = [u, l], u;
  }
  function pf(t, l, e) {
    return e === void 0 || (Ve & 1073741824) !== 0 && (mt & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = id(), lt.lanes |= t, hu |= t, e);
  }
  function Wr(t, l, e, u) {
    return Kl(e, l) ? e : su.current !== null ? (t = pf(t, e, u), Kl(t, l) || (nl = !0), t) : (Ve & 106) === 0 || (Ve & 1073741824) !== 0 && (mt & 261930) === 0 ? (nl = !0, t.memoizedState = e) : (t = id(), lt.lanes |= t, hu |= t, l);
  }
  function Ir(t, l, e, u, a) {
    var n = J.p;
    J.p = n !== 0 && 8 > n ? n : 8;
    var i = j.T, c = {};
    c.types = i !== null ? i.types : null, j.T = c, Df(t, !1, l, e);
    try {
      var f = a(), m = j.S;
      if (m !== null && m(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var S = Vm(
          f,
          u
        );
        _n(
          t,
          l,
          S,
          Fl(t)
        );
      } else
        _n(
          t,
          l,
          u,
          Fl(t)
        );
    } catch (_) {
      _n(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: _ },
        Fl()
      );
    } finally {
      J.p = n, i !== null && c.types !== null && (i.types = c.types), j.T = i;
    }
  }
  function Fm() {
  }
  function Af(t, l, e, u) {
    if (t.tag !== 5) throw Error(r(476));
    var a = Pr(t).queue;
    Ir(
      t,
      a,
      l,
      Il,
      e === null ? Fm : function() {
        return t0(t), e(u);
      }
    );
  }
  function Pr(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: Il,
      baseState: Il,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ke,
        lastRenderedState: Il
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ke,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function t0(t) {
    var l = Pr(t);
    l.next === null && (l = t.alternate.memoizedState), _n(
      t,
      l.next.queue,
      {},
      Fl()
    );
  }
  function Mf() {
    return hl(La);
  }
  function l0() {
    return Pt().memoizedState;
  }
  function e0() {
    return Pt().memoizedState;
  }
  function Wm(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = Fl();
          t = fu(e);
          var u = ou(l, t, e);
          u !== null && (Xl(u, l, e), gn(u, l, e)), l = { cache: ef() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Im(t, l, e) {
    var u = Fl();
    e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ji(t) ? a0(l, e) : (e = Jc(t, l, e, u), e !== null && (Xl(e, t, u), n0(e, l, u)));
  }
  function u0(t, l, e) {
    var u = Fl();
    _n(t, l, e, u);
  }
  function _n(t, l, e, u) {
    var a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ji(t)) a0(l, a);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var i = l.lastRenderedState, c = n(i, e);
          if (a.hasEagerState = !0, a.eagerState = c, Kl(c, i))
            return di(t, l, a, 0), Yt === null && ri(), !1;
        } catch {
        }
      if (e = Jc(t, l, a, u), e !== null)
        return Xl(e, t, u), n0(e, l, u), !0;
    }
    return !1;
  }
  function Df(t, l, e, u) {
    if (u = {
      lane: 2,
      revertLane: Eo(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ji(t)) {
      if (l) throw Error(r(479));
    } else
      l = Jc(
        t,
        e,
        u,
        2
      ), l !== null && Xl(l, t, 2);
  }
  function ji(t) {
    var l = t.alternate;
    return t === lt || l !== null && l === lt;
  }
  function a0(t, l) {
    za = Ai = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function n0(t, l, e) {
    if ((e & 4194048) !== 0) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, nt(t, e);
    }
  }
  var Bi = {
    readContext: hl,
    use: Ci,
    useCallback: $t,
    useContext: $t,
    useEffect: $t,
    useImperativeHandle: $t,
    useLayoutEffect: $t,
    useInsertionEffect: $t,
    useMemo: $t,
    useReducer: $t,
    useRef: $t,
    useState: $t,
    useDebugValue: $t,
    useDeferredValue: $t,
    useTransition: $t,
    useSyncExternalStore: $t,
    useId: $t,
    useHostTransitionStatus: $t,
    useFormState: $t,
    useActionState: $t,
    useOptimistic: $t,
    useMemoCache: $t,
    useCacheRefresh: $t,
    useEffectEvent: $t
  }, i0 = {
    readContext: hl,
    use: Ci,
    useCallback: function(t, l) {
      return Cl().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: hl,
    useEffect: Lr,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, Ui(
        4194308,
        4,
        Jr.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return Ui(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      Ui(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = Cl();
      l = l === void 0 ? null : l;
      var u = t();
      if (Ju) {
        Ee(!0);
        try {
          t();
        } finally {
          Ee(!1);
        }
      }
      return e.memoizedState = [u, l], u;
    },
    useReducer: function(t, l, e) {
      var u = Cl();
      if (e !== void 0) {
        var a = e(l);
        if (Ju) {
          Ee(!0);
          try {
            e(l);
          } finally {
            Ee(!1);
          }
        }
      } else a = l;
      return u.memoizedState = u.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, u.queue = t, t = t.dispatch = Im.bind(
        null,
        lt,
        t
      ), [u.memoizedState, t];
    },
    useRef: function(t) {
      var l = Cl();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = _f(t);
      var l = t.queue, e = u0.bind(null, lt, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: Nf,
    useDeferredValue: function(t, l) {
      var e = Cl();
      return pf(e, t, l);
    },
    useTransition: function() {
      var t = _f(!1);
      return t = Ir.bind(
        null,
        lt,
        t.queue,
        !0,
        !1
      ), Cl().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var u = lt, a = Cl();
      if (it) {
        if (e === void 0)
          throw Error(r(407));
        e = e();
      } else {
        if (e = l(), Yt === null)
          throw Error(r(349));
        (mt & 127) !== 0 || pr(u, l, e);
      }
      a.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return a.queue = n, Lr(Mr.bind(null, u, n, t), [
        t
      ]), u.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        Ar.bind(
          null,
          u,
          n,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = Cl(), l = Yt.identifierPrefix;
      if (it) {
        var e = xe, u = _e;
        e = (u & ~(1 << 32 - Al(u) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = Mi++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = Km++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: Mf,
    useFormState: Yr,
    useActionState: Yr,
    useOptimistic: function(t) {
      var l = Cl();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = Df.bind(
        null,
        lt,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: Tf,
    useCacheRefresh: function() {
      return Cl().memoizedState = Wm.bind(
        null,
        lt
      );
    },
    useEffectEvent: function(t) {
      var l = Cl(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((Nt & 2) !== 0)
          throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, c0 = {
    readContext: hl,
    use: Ci,
    useCallback: kr,
    useContext: hl,
    useEffect: Of,
    useImperativeHandle: $r,
    useInsertionEffect: Kr,
    useLayoutEffect: wr,
    useMemo: Fr,
    useReducer: Ri,
    useRef: Zr,
    useState: function() {
      return Ri(Ke);
    },
    useDebugValue: Nf,
    useDeferredValue: function(t, l) {
      var e = Pt();
      return Wr(
        e,
        jt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = Ri(Ke)[0], l = Pt().memoizedState;
      return [
        typeof t == "boolean" ? t : zn(t),
        l
      ];
    },
    useSyncExternalStore: Nr,
    useId: l0,
    useHostTransitionStatus: Mf,
    useFormState: Gr,
    useActionState: Gr,
    useOptimistic: function(t, l) {
      var e = Pt();
      return Rr(e, jt, t, l);
    },
    useMemoCache: Tf,
    useCacheRefresh: e0,
    useEffectEvent: Vr
  }, Pm = {
    readContext: hl,
    use: Ci,
    useCallback: kr,
    useContext: hl,
    useEffect: Of,
    useImperativeHandle: $r,
    useInsertionEffect: Kr,
    useLayoutEffect: wr,
    useMemo: Fr,
    useReducer: zf,
    useRef: Zr,
    useState: function() {
      return zf(Ke);
    },
    useDebugValue: Nf,
    useDeferredValue: function(t, l) {
      var e = Pt();
      return jt === null ? pf(e, t, l) : Wr(
        e,
        jt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = zf(Ke)[0], l = Pt().memoizedState;
      return [
        typeof t == "boolean" ? t : zn(t),
        l
      ];
    },
    useSyncExternalStore: Nr,
    useId: l0,
    useHostTransitionStatus: Mf,
    useFormState: Qr,
    useActionState: Qr,
    useOptimistic: function(t, l) {
      var e = Pt();
      return jt !== null ? Rr(e, jt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: Tf,
    useCacheRefresh: e0,
    useEffectEvent: Vr
  };
  function Cf(t, l, e, u) {
    l = t.memoizedState, e = e(u, l), e = e == null ? l : P({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var Rf = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var u = Fl(), a = fu(u);
      a.payload = l, e != null && (a.callback = e), l = ou(t, a, u), l !== null && (Xl(l, t, u), gn(l, t, u));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var u = Fl(), a = fu(u);
      a.tag = 1, a.payload = l, e != null && (a.callback = e), l = ou(t, a, u), l !== null && (Xl(l, t, u), gn(l, t, u));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = Fl(), u = fu(e);
      u.tag = 2, l != null && (u.callback = l), l = ou(t, u, e), l !== null && (Xl(l, t, e), gn(l, t, e));
    }
  };
  function f0(t, l, e, u, a, n, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, n, i) : l.prototype && l.prototype.isPureReactComponent ? !on(e, u) || !on(a, n) : !0;
  }
  function o0(t, l, e, u) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, u), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, u), l.state !== t && Rf.enqueueReplaceState(l, l.state, null);
  }
  function $u(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var u in l)
        u !== "ref" && (e[u] = l[u]);
    }
    if (t = t.defaultProps) {
      e === l && (e = P({}, e));
      for (var a in t)
        e[a] === void 0 && (e[a] = t[a]);
    }
    return e;
  }
  function s0(t) {
    si(t);
  }
  function r0(t) {
    console.error(t);
  }
  function d0(t) {
    si(t);
  }
  function qi(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function v0(t, l, e) {
    try {
      var u = t.onCaughtError;
      u(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Uf(t, l, e) {
    return e = fu(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      qi(t, l);
    }, e;
  }
  function m0(t) {
    return t = fu(t), t.tag = 3, t;
  }
  function y0(t, l, e, u) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = u.value;
      t.payload = function() {
        return a(n);
      }, t.callback = function() {
        v0(l, e, u);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      v0(l, e, u), typeof a != "function" && (gu === null ? gu = /* @__PURE__ */ new Set([this]) : gu.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function ty(t, l, e, u, a) {
    if (e.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (l = e.alternate, l !== null && Xu(
        l,
        e,
        a,
        !0
      ), e = gl.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return xl === null ? ac() : e.alternate === null && kt === 0 && (kt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = a, u === _i ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([u]) : l.add(u), bo(t, u, a)), !1;
          case 22:
            return e.flags |= 65536, u === _i ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([u]) : e.add(u)), bo(t, u, a)), !1;
        }
        throw Error(r(435, e.tag));
      }
      return bo(t, u, a), ac(), !1;
    }
    if (it)
      return l = gl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, u !== Ic && (t = Error(r(422), { cause: u }), dn(ue(t, e)))) : (u !== Ic && (l = Error(r(423), {
        cause: u
      }), dn(
        ue(l, e)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, u = ue(u, e), a = Uf(
        t.stateNode,
        u,
        a
      ), of(t, a), kt !== 4 && (kt = 2)), !1;
    var n = Error(r(520), { cause: u });
    if (n = ue(n, e), Cn === null ? Cn = [n] : Cn.push(n), kt !== 4 && (kt = 2), l === null) return !0;
    u = ue(u, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = a & -a, e.lanes |= t, t = Uf(e.stateNode, u, t), of(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (gu === null || !gu.has(n))))
            return e.flags |= 65536, a &= -a, e.lanes |= a, a = m0(a), y0(
              a,
              t,
              e,
              u
            ), of(e, a), !1;
          break;
        case 22:
          if (e.memoizedState !== null)
            return e.flags |= 65536, !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Hf = Error(r(461)), nl = !1;
  function fl(t, l, e, u) {
    l.child = t === null ? Sr(l, null, e, u) : wu(
      l,
      t.child,
      e,
      u
    );
  }
  function h0(t, l, e, u, a) {
    e = e.render;
    var n = l.ref;
    if ("ref" in u) {
      var i = {};
      for (var c in u)
        c !== "ref" && (i[c] = u[c]);
    } else i = u;
    return Qu(l), u = hf(
      t,
      l,
      e,
      i,
      n,
      a
    ), c = gf(), t !== null && !nl ? (bf(t, l, a), we(t, l, a)) : (it && c && hi(l), l.flags |= 1, fl(t, l, u, a), l.child);
  }
  function g0(t, l, e, u, a) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !$c(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, b0(
        t,
        l,
        n,
        u,
        a
      )) : (t = mi(
        e.type,
        null,
        u,
        l,
        l.mode,
        a
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !Zf(t, a)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : on, e(i, u) && t.ref === l.ref)
        return we(t, l, a);
    }
    return l.flags |= 1, t = Xe(n, u), t.ref = l.ref, t.return = l, l.child = t;
  }
  function b0(t, l, e, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (on(n, u) && t.ref === l.ref)
        if (nl = !1, l.pendingProps = u = n, Zf(t, a))
          (t.flags & 131072) !== 0 && (nl = !0);
        else
          return l.lanes = t.lanes, we(t, l, a);
    }
    return jf(
      t,
      l,
      e,
      u,
      a
    );
  }
  function S0(t, l, e, u) {
    var a = u.children, n = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, t !== null) {
          for (u = l.child = t.child, a = 0; u !== null; )
            a = a | u.lanes | u.childLanes, u = u.sibling;
          u = a & ~n;
        } else u = 0, l.child = null;
        return T0(
          t,
          l,
          n,
          e,
          u
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ei(
          l,
          n !== null ? n.cachePool : null
        ), n !== null ? zr(l, n) : rf(), _r(l);
      else
        return u = l.lanes = 536870912, T0(
          t,
          l,
          n !== null ? n.baseLanes | e : e,
          e,
          u
        );
    } else
      n !== null ? (Ei(l, n.cachePool), zr(l, n), du(), l.memoizedState = null) : (t !== null && Ei(l, null), rf(), du());
    return fl(t, l, a, e), l.child;
  }
  function xn(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function T0(t, l, e, u, a) {
    var n = af();
    return n = n === null ? null : { parent: ul._currentValue, pool: n }, l.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, t !== null && Ei(l, null), rf(), _r(l), t !== null && Xu(t, l, u, !0), l.childLanes = a, null;
  }
  function Yi(t, l) {
    return l = Gi(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function E0(t, l, e) {
    return wu(l, t.child, null, e), t = Yi(l, l.pendingProps), t.flags |= 2, wl(l), l.memoizedState = null, t;
  }
  function ly(t, l, e) {
    var u = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (it) {
        if (u.mode === "hidden")
          return t = Yi(l, u), l.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, xn(null, t);
        if (vf(l), (t = Gt) ? (t = Jd(
          t,
          ie
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: eu !== null ? { id: _e, overflow: xe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = ar(t), e.return = l, l.child = e, dl = l, Gt = null)) : t = null, t === null) throw au(l);
        return l.lanes = 536870912, null;
      }
      return Yi(l, u);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (vf(l), a)
        if (l.flags & 256)
          l.flags &= -257, l = E0(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(r(558));
      else if (nl || Xu(t, l, e, !1), a = (e & t.childLanes) !== 0, nl || a) {
        if (su.current === null) {
          if (u = Yt, u !== null && (i = $(u, e), i !== 0 && i !== n.retryLane))
            throw n.retryLane = i, Bu(t, i), Xl(u, t, i), Hf;
          ac();
        }
        l = E0(
          t,
          l,
          e
        );
      } else
        t = n.treeContext, Gt = fe(i.nextSibling), dl = l, it = !0, uu = null, ie = !1, t !== null && cr(l, t), l = Yi(l, u), l.flags |= 134221824;
      return l;
    }
    return t = Xe(t.child, {
      mode: u.mode,
      children: u.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Oa(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(r(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function jf(t, l, e, u, a) {
    return Qu(l), e = hf(
      t,
      l,
      e,
      u,
      void 0,
      a
    ), u = gf(), t !== null && !nl ? (bf(t, l, a), we(t, l, a)) : (it && u && hi(l), l.flags |= 1, fl(t, l, e, a), l.child);
  }
  function z0(t, l, e, u, a, n) {
    return Qu(l), l.updateQueue = null, e = Or(
      l,
      u,
      e,
      a
    ), xr(t), u = gf(), t !== null && !nl ? (bf(t, l, n), we(t, l, n)) : (it && u && hi(l), l.flags |= 1, fl(t, l, e, n), l.child);
  }
  function _0(t, l, e, u, a) {
    if (Qu(l), l.stateNode === null) {
      var n = ya, i = e.contextType;
      typeof i == "object" && i !== null && (n = hl(i)), n = new e(u, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Rf, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = u, n.state = l.memoizedState, n.refs = {}, cf(l), i = e.contextType, n.context = typeof i == "object" && i !== null ? hl(i) : ya, n.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Cf(
        l,
        e,
        i,
        u
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && Rf.enqueueReplaceState(n, n.state, null), Sn(l, u, n, a), bn(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !0;
    } else if (t === null) {
      n = l.stateNode;
      var c = l.memoizedProps, f = $u(e, c);
      n.props = f;
      var m = n.context, S = e.contextType;
      i = ya, typeof S == "object" && S !== null && (i = hl(S));
      var _ = e.getDerivedStateFromProps;
      S = typeof _ == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || m !== i) && o0(
        l,
        n,
        u,
        i
      ), cu = !1;
      var d = l.memoizedState;
      n.state = d, Sn(l, u, n, a), bn(), m = l.memoizedState, c || d !== m || cu ? (typeof _ == "function" && (Cf(
        l,
        e,
        _,
        u
      ), m = l.memoizedState), (f = cu || f0(
        l,
        e,
        f,
        u,
        d,
        m,
        i
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = u, l.memoizedState = m), n.props = u, n.state = m, n.context = i, u = f) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !1);
    } else {
      n = l.stateNode, ff(t, l), i = l.memoizedProps, S = $u(e, i), n.props = S, _ = l.pendingProps, d = n.context, m = e.contextType, f = ya, typeof m == "object" && m !== null && (f = hl(m)), c = e.getDerivedStateFromProps, (m = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== _ || d !== f) && o0(
        l,
        n,
        u,
        f
      ), cu = !1, d = l.memoizedState, n.state = d, Sn(l, u, n, a), bn();
      var g = l.memoizedState;
      i !== _ || d !== g || cu || t !== null && t.dependencies !== null && Si(t.dependencies) ? (typeof c == "function" && (Cf(
        l,
        e,
        c,
        u
      ), g = l.memoizedState), (S = cu || f0(
        l,
        e,
        S,
        u,
        d,
        g,
        f
      ) || t !== null && t.dependencies !== null && Si(t.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, g, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        g,
        f
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (l.flags |= 1024), l.memoizedProps = u, l.memoizedState = g), n.props = u, n.state = g, n.context = f, u = S) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && d === t.memoizedState || (l.flags |= 1024), u = !1);
    }
    return n = u, Oa(t, l), u = (l.flags & 128) !== 0, n || u ? (n = l.stateNode, e = u && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && u ? (l.child = wu(
      l,
      t.child,
      null,
      a
    ), l.child = wu(
      l,
      null,
      e,
      a
    )) : fl(t, l, e, a), l.memoizedState = n.state, t = l.child) : t = we(
      t,
      l,
      a
    ), t;
  }
  function x0(t, l, e, u) {
    return Yu(), l.flags |= 256, fl(t, l, e, u), l.child;
  }
  var Bf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function qf(t) {
    return { baseLanes: t, cachePool: vr() };
  }
  function Yf(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= kl), t;
  }
  function O0(t, l, e) {
    var u = l.pendingProps, a = !1, n = (l.flags & 128) !== 0, i;
    if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (bl.current & 2) !== 0), i && (a = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (it) {
        if (a ? ru(l) : du(), (t = Gt) ? (t = Jd(
          t,
          ie
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: eu !== null ? { id: _e, overflow: xe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = ar(t), e.return = l, l.child = e, dl = l, Gt = null)) : t = null, t === null) throw au(l);
        return Yo(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      return n = u.children, u = u.fallback, a ? (du(), a = l.mode, n = Gi(
        { mode: "hidden", children: n },
        a
      ), u = qu(
        u,
        a,
        e,
        null
      ), n.return = l, u.return = l, n.sibling = u, l.child = n, u = l.child, u.memoizedState = qf(e), u.childLanes = Yf(
        t,
        i,
        e
      ), l.memoizedState = Bf, xn(null, u)) : (ru(l), Gf(l, n));
    }
    var c = t.memoizedState;
    if (c !== null) {
      var f = c.dehydrated;
      if (f !== null)
        return ey(
          t,
          l,
          n,
          i,
          u,
          f,
          c,
          e
        );
    }
    return a ? (du(), a = u.fallback, n = l.mode, c = t.child, f = c.sibling, u = Xe(c, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = c.subtreeFlags & 1206910976, f !== null ? a = Xe(f, a) : (a = qu(
      a,
      n,
      e,
      null
    ), a.flags |= 2), a.return = l, u.return = l, u.sibling = a, l.child = u, xn(null, u), u = l.child, a = t.child.memoizedState, a === null ? a = qf(e) : (n = a.cachePool, n !== null ? (c = ul._currentValue, n = n.parent !== c ? { parent: c, pool: c } : n) : n = vr(), a = {
      baseLanes: a.baseLanes | e,
      cachePool: n
    }), u.memoizedState = a, u.childLanes = Yf(
      t,
      i,
      e
    ), l.memoizedState = Bf, xn(t.child, u)) : (ru(l), e = t.child, t = e.sibling, e = Xe(e, {
      mode: "visible",
      children: u.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Gf(t, l) {
    return l = Gi(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function Gi(t, l) {
    return t = Bl(22, t, null, l), t.lanes = 0, t;
  }
  function Xi(t, l, e) {
    return wu(l, t.child, null, e), t = Gf(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function ey(t, l, e, u, a, n, i, c) {
    if (e)
      return l.flags & 256 ? (ru(l), l.flags &= -257, Xi(
        t,
        l,
        c
      )) : l.memoizedState !== null ? (du(), l.child = t.child, l.flags |= 128, null) : (du(), n = a.fallback, i = l.mode, a = Gi(
        { mode: "visible", children: a.children },
        i
      ), n = qu(
        n,
        i,
        c,
        null
      ), n.flags |= 2, a.return = l, n.return = l, a.sibling = n, l.child = a, wu(l, t.child, null, c), a = l.child, a.memoizedState = qf(c), a.childLanes = Yf(
        t,
        u,
        c
      ), l.memoizedState = Bf, xn(null, a));
    if (ru(l), Yo(n)) {
      if (u = n.nextSibling && n.nextSibling.dataset, u) var f = u.dgst;
      return u = f, u !== "" && (a = Error(r(419)), a.stack = "", a.digest = u, dn({ value: a, source: null, stack: null })), Xi(
        t,
        l,
        c
      );
    }
    if (nl || Xu(t, l, c, !1), u = (c & t.childLanes) !== 0, nl || u) {
      if (su.current !== null)
        return Xi(
          t,
          l,
          c
        );
      if (u = Yt, u !== null && (a = $(
        u,
        c
      ), a !== 0 && a !== i.retryLane))
        throw i.retryLane = a, Bu(t, a), Xl(u, t, a), Hf;
      return qo(n) || ac(), Xi(
        t,
        l,
        c
      );
    }
    return qo(n) ? (l.flags |= 192, l.child = t.child, null) : (t = i.treeContext, Gt = fe(n.nextSibling), dl = l, it = !0, uu = null, ie = !1, t !== null && cr(l, t), l = Gf(
      l,
      a.children
    ), l.flags |= 134221824, l);
  }
  function N0(t, l, e) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l), bi(t.return, l, e);
  }
  function p0(t) {
    for (var l = null; t !== null; ) {
      var e = t.alternate;
      e !== null && pi(e) === null && (l = t), t = t.sibling;
    }
    return l;
  }
  function Qi(t, l, e, u, a, n) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: e,
      tailMode: a,
      treeForkCount: n
    } : (i.isBackwards = l, i.rendering = null, i.renderingStartTime = 0, i.last = u, i.tail = e, i.tailMode = a, i.treeForkCount = n);
  }
  function Xf(t) {
    var l = t.child;
    for (t.child = null; l !== null; ) {
      var e = l.sibling;
      l.sibling = t.child, t.child = l, l = e;
    }
  }
  function Qf(t, l, e) {
    var u = l.pendingProps, a = u.revealOrder, n = u.tail;
    u = u.children;
    var i = bl.current;
    if (l.flags & 128)
      return Tn(l, i), null;
    var c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, Tn(l, i), a === "backwards" && t !== null ? (Xf(t), fl(t, l, u, e), Xf(t)) : fl(t, l, u, e), u = it ? rn : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && N0(t, e, l);
        else if (t.tag === 19)
          N0(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (a) {
      case "backwards":
        e = p0(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null, Xf(l)), Qi(
          l,
          !0,
          a,
          null,
          n,
          u
        );
        break;
      case "unstable_legacy-backwards":
        for (e = null, a = l.child, l.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && pi(t) === null) {
            l.child = a;
            break;
          }
          t = a.sibling, a.sibling = e, e = a, a = t;
        }
        Qi(
          l,
          !0,
          e,
          null,
          n,
          u
        );
        break;
      case "together":
        Qi(
          l,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      case "independent":
        l.memoizedState = null;
        break;
      default:
        e = p0(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null), Qi(
          l,
          !1,
          a,
          e,
          n,
          u
        );
    }
    return l.child;
  }
  function A0(t, l, e) {
    var u = l.pendingProps;
    return nu(l, l.type, u.value), fl(t, l, u.children, e), l.child;
  }
  function we(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), hu |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (Xu(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(r(153));
    if (l.child !== null) {
      for (t = l.child, e = Xe(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = Xe(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Zf(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Si(t)));
  }
  function uy(t, l, e) {
    switch (l.tag) {
      case 3:
        je(l, l.stateNode.containerInfo), nu(l, ul, t.memoizedState.cache), Yu();
        break;
      case 27:
      case 5:
        Zt(l);
        break;
      case 4:
        je(l, l.stateNode.containerInfo);
        break;
      case 10:
        nu(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 31:
        if (l.memoizedState !== null)
          return l.flags |= 128, vf(l), null;
        break;
      case 13:
        var u = l.memoizedState;
        if (u !== null) {
          if (u.dehydrated !== null)
            return ru(l), l.flags |= 128, null;
          u = Xu(
            t,
            l,
            e,
            !1
          );
          var a = l.child.childLanes;
          return u || (e & a) !== 0 ? O0(t, l, e) : (ru(l), t = we(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        }
        ru(l);
        break;
      case 19:
        if (l.flags & 128)
          return Qf(
            t,
            l,
            e
          );
        if (a = (t.flags & 128) !== 0, u = (e & l.childLanes) !== 0, u || (Xu(
          t,
          l,
          e,
          !1
        ), u = (e & l.childLanes) !== 0), a) {
          if (u)
            return Qf(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Tn(l, bl.current), u) break;
        return null;
      case 22:
        return l.lanes = 0, S0(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        nu(l, ul, t.memoizedState.cache);
    }
    return we(t, l, e);
  }
  function M0(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        nl = !0;
      else {
        if (!Zf(t, e) && (l.flags & 128) === 0)
          return nl = !1, uy(
            t,
            l,
            e
          );
        nl = (t.flags & 131072) !== 0;
      }
    else
      nl = !1, it && (l.flags & 1048576) !== 0 && ir(l, rn, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var u = l.pendingProps;
          if (t = Vu(l.elementType), l.type = t, typeof t == "function")
            $c(t) ? (u = $u(t, u), l.tag = 1, l = _0(
              null,
              l,
              t,
              u,
              e
            )) : (l.tag = 0, l = jf(
              null,
              l,
              t,
              u,
              e
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === A) {
                l.tag = 11, l = h0(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              } else if (a === ut) {
                l.tag = 14, l = g0(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              } else if (a === F) {
                l.tag = 10, l.type = t, l = A0(
                  null,
                  l,
                  e
                );
                break t;
              }
            }
            throw l = ft(t) || t, Error(r(306, l, ""));
          }
        }
        return l;
      case 0:
        return jf(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return u = l.type, a = $u(
          u,
          l.pendingProps
        ), _0(
          t,
          l,
          u,
          a,
          e
        );
      case 3:
        t: {
          if (je(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          u = l.pendingProps;
          var n = l.memoizedState;
          a = n.element, ff(t, l), Sn(l, u, null, e);
          var i = l.memoizedState;
          if (u = i.cache, nu(l, ul, u), u !== n.cache && lf(
            l,
            [ul],
            e,
            !0
          ), bn(), u = i.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = x0(
                t,
                l,
                u,
                e
              );
              break t;
            } else if (u !== a) {
              a = ue(
                Error(r(424)),
                l
              ), dn(a), l = x0(
                t,
                l,
                u,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Gt = fe(t.firstChild), dl = l, it = !0, uu = null, ie = !0, e = Sr(
                l,
                null,
                u,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 134221824, e = e.sibling;
          else {
            if (Yu(), u === a) {
              l = we(
                t,
                l,
                e
              );
              break t;
            }
            fl(t, l, u, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Oa(t, l), t === null ? (e = tv(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : it || (l.stateNode = Ud(
          l.type,
          l.pendingProps,
          _l.current,
          l
        )) : l.memoizedState = tv(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Zt(l), t === null && it && (u = l.stateNode = Fd(
          l.type,
          l.pendingProps,
          _l.current
        ), dl = l, ie = !0, a = Gt, Tu(l.type) ? (Go = a, Gt = fe(u.firstChild)) : Gt = a), fl(
          t,
          l,
          l.pendingProps.children,
          e
        ), Oa(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && it && ((a = u = Gt) && (u = Wy(
          u,
          l.type,
          l.pendingProps,
          ie
        ), u !== null ? (l.stateNode = u, dl = l, Gt = fe(u.firstChild), ie = !1, a = !0) : a = !1), a || au(l)), Zt(l), a = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, u = n.children, Do(a, n) ? u = null : i !== null && Do(a, i) && (l.flags |= 32), l.memoizedState !== null && (a = hf(
          t,
          l,
          wm,
          null,
          null,
          e
        ), La._currentValue = a), Oa(t, l), fl(t, l, u, e), l.child;
      case 6:
        return t === null && it && ((t = e = Gt) && (e = Iy(
          e,
          l.pendingProps,
          ie
        ), e !== null ? (l.stateNode = e, dl = l, Gt = null, t = !0) : t = !1), t || au(l)), null;
      case 13:
        return O0(t, l, e);
      case 4:
        return je(
          l,
          l.stateNode.containerInfo
        ), u = l.pendingProps, t === null ? l.child = wu(
          l,
          null,
          u,
          e
        ) : fl(t, l, u, e), l.child;
      case 11:
        return h0(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return u = l.pendingProps, Oa(t, l), fl(t, l, u, e), l.child;
      case 8:
        return fl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return fl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return A0(t, l, e);
      case 9:
        return a = l.type._context, u = l.pendingProps.children, Qu(l), a = hl(a), u = u(a), l.flags |= 1, fl(t, l, u, e), l.child;
      case 14:
        return g0(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return b0(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Qf(t, l, e);
      case 31:
        return ly(t, l, e);
      case 22:
        return S0(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return Qu(l), u = hl(ul), t === null ? (a = af(), a === null && (a = Yt, n = ef(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= e), a = n), l.memoizedState = { parent: u, cache: a }, cf(l), nu(l, ul, a)) : ((t.lanes & e) !== 0 && (ff(t, l), Sn(l, null, null, e), bn()), a = t.memoizedState, n = l.memoizedState, a.parent !== u ? (a = { parent: u, cache: u }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), nu(l, ul, u)) : (u = n.cache, nu(l, ul, u), u !== a.cache && lf(
          l,
          [ul],
          e,
          !0
        ))), fl(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 30:
        return l.stateNode === null && (l.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), u = l.pendingProps, u.name != null && u.name !== "auto" ? l.flags |= t === null ? 18882560 : 18874368 : it && hi(l), t !== null && t.memoizedProps.name !== u.name ? l.flags |= 4194816 : Oa(t, l), fl(t, l, u.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(r(156, l.tag));
  }
  function Je(t) {
    t.flags |= 4;
  }
  function Lf(t, l, e, u, a) {
    var n;
    if ((n = (t.mode & 32) !== 0) && (n = e === null ? av(l, u) : av(l, u) && (u.src !== e.src || u.srcSet !== e.srcSet)), n) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (sd()) t.flags |= 8192;
        else
          throw Ku = _i, nf;
    } else t.flags &= -16777217;
  }
  function D0(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !nv(l))
      if (sd()) t.flags |= 8192;
      else
        throw Ku = _i, nf;
  }
  function Zi(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? y() : 536870912, t.lanes |= l, Da |= l);
  }
  function On(t, l) {
    if (!it)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var e = t.tail, u = null; e !== null; )
            e.alternate !== null && (u = e), e = e.sibling;
          u === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : u.sibling = null;
          break;
        default:
          for (l = t.tail, e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
      }
  }
  function Xt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, u = 0;
    if (l)
      for (var a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, u |= a.subtreeFlags & 1206910976, u |= a.flags & 1206910976, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, u |= a.subtreeFlags, u |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= u, t.childLanes = e, l;
  }
  function ay(t, l, e) {
    var u = l.pendingProps;
    switch (Wc(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Xt(l), null;
      case 1:
        return Xt(l), null;
      case 3:
        return e = l.stateNode, u = null, t !== null && (u = t.memoizedState.cache), l.memoizedState.cache !== u && (l.flags |= 2048), Le(ul), Se(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (ba(l) ? Je(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Pc())), Xt(l), null;
      case 26:
        var a = l.type, n = l.memoizedState;
        return t === null ? (Je(l), n !== null ? (Xt(l), D0(l, n)) : (Xt(l), Lf(
          l,
          a,
          null,
          u,
          e
        ))) : n ? n !== t.memoizedState ? (Je(l), Xt(l), D0(l, n)) : (Xt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== u && Je(l), Xt(l), Lf(
          l,
          a,
          t,
          u,
          e
        )), null;
      case 27:
        if (I(l), e = _l.current, a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && Je(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(r(166));
            return Xt(l), l.subtreeFlags &= -33554433, null;
          }
          t = Ol.current, ba(l) ? fr(l) : (t = Fd(a, u, e), l.stateNode = t, Je(l));
        }
        return Xt(l), l.subtreeFlags &= -33554433, null;
      case 5:
        if (I(l), a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && Je(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(r(166));
            return Xt(l), l.subtreeFlags &= -33554433, null;
          }
          if (n = Ol.current, ba(l))
            fr(l);
          else {
            var i = Bn(
              _l.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof u.is == "string" ? i.createElement("select", {
                      is: u.is
                    }) : i.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? i.createElement(a, { is: u.is }) : i.createElement(a);
                }
            }
            n[Qt] = l, n[el] = u;
            t: for (i = l.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === l) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === l)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            l.stateNode = n;
            t: switch (Tl(n, a, u), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break t;
              case "img":
                u = !0;
                break t;
              default:
                u = !1;
            }
            u && Je(l);
          }
        }
        return Xt(l), l.subtreeFlags &= -33554433, Lf(
          l,
          l.type,
          t === null ? null : t.memoizedProps,
          l.pendingProps,
          e
        ), null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== u && Je(l);
        else {
          if (typeof u != "string" && l.stateNode === null)
            throw Error(r(166));
          if (t = _l.current, ba(l)) {
            if (t = l.stateNode, e = l.memoizedProps, u = null, a = dl, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  u = a.memoizedProps;
              }
            t[Qt] = l, t = !!(t.nodeValue === e || u !== null && u.suppressHydrationWarning === !0 || Md(t.nodeValue, e)), t || au(l, !0);
          } else
            t = Bn(t).createTextNode(
              u
            ), t[Qt] = l, l.stateNode = t;
        }
        return Xt(l), null;
      case 31:
        if (e = l.memoizedState, t === null || t.memoizedState !== null) {
          if (u = ba(l), e !== null) {
            if (t === null) {
              if (!u) throw Error(r(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Qt] = l;
            } else
              Yu(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Xt(l), t = !1;
          } else
            e = Pc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (wl(l), l) : (wl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Xt(l), null;
      case 13:
        if (u = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = ba(l), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[Qt] = l;
            } else
              Yu(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Xt(l), a = !1;
          } else
            a = Pc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (wl(l), l) : (wl(l), null);
        }
        return wl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = u !== null, t = t !== null && t.memoizedState !== null, e && (u = l.child, a = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (a = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== a && (u.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Zi(l, l.updateQueue), Xt(l), null);
      case 4:
        return Se(), t === null && Oo(l.stateNode.containerInfo), l.flags |= 67108864, Xt(l), null;
      case 10:
        return Le(l.type), Xt(l), null;
      case 19:
        if (mf(l), u = l.memoizedState, u === null) return Xt(l), null;
        if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
          if (a) On(u, !1);
          else {
            if (kt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = pi(t), n !== null) {
                  for (l.flags |= 128, On(u, !1), t = n.updateQueue, l.updateQueue = t, Zi(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    ur(e, t), e = e.sibling;
                  return Tn(
                    l,
                    bl.current & 1 | 2
                  ), it && Qe(l, u.treeForkCount), l.child;
                }
                t = t.sibling;
              }
            u.tail !== null && Nl() > tc && (l.flags |= 128, a = !0, On(u, !1), l.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = pi(n), t !== null) {
              if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, Zi(l, t), On(u, !0), u.tail === null && u.tailMode !== "collapsed" && u.tailMode !== "visible" && !n.alternate && !it)
                return Xt(l), null;
            } else
              2 * Nl() - u.renderingStartTime > tc && e !== 536870912 && (l.flags |= 128, a = !0, On(u, !1), l.lanes = 4194304);
          u.isBackwards ? (n.sibling = l.child, l.child = n) : (t = u.last, t !== null ? t.sibling = n : l.child = n, u.last = n);
        }
        if (u.tail !== null) {
          t = u.tail;
          t: {
            for (e = t; e !== null; ) {
              if (e.alternate !== null) {
                e = !1;
                break t;
              }
              e = e.sibling;
            }
            e = !0;
          }
          return u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Nl(), t.sibling = null, n = bl.current, n = a ? n & 1 | 2 : n & 1, u.tailMode === "visible" || u.tailMode === "collapsed" || !e || it ? Tn(l, n) : (e = n, Ht(gl, l), Ht(bl, e), xl === null && (xl = l)), it && Qe(l, u.treeForkCount), t;
        }
        return Xt(l), null;
      case 22:
      case 23:
        return wl(l), df(), u = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== u && (l.flags |= 8192) : u && (l.flags |= 8192), u ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Xt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Xt(l), e = l.updateQueue, e !== null && Zi(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== e && (l.flags |= 2048), t !== null && ll(Lu), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Le(ul), Xt(l), null;
      case 25:
        return null;
      case 30:
        return l.flags |= 33554432, Xt(l), null;
    }
    throw Error(r(156, l.tag));
  }
  function ny(t, l) {
    switch (Wc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Le(ul), Se(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return I(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (wl(l), l.alternate === null)
            throw Error(r(340));
          Yu();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (wl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(r(340));
          Yu();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return mf(l), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, t = l.memoizedState, t !== null && (t.rendering = null, t.tail = null), l.flags |= 4, l) : null;
      case 4:
        return Se(), null;
      case 10:
        return Le(l.type), null;
      case 22:
      case 23:
        return wl(l), df(), t !== null && ll(Lu), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Le(ul), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function C0(t, l) {
    switch (Wc(l), l.tag) {
      case 3:
        Le(ul), Se();
        break;
      case 26:
      case 27:
      case 5:
        I(l);
        break;
      case 4:
        Se();
        break;
      case 31:
        l.memoizedState !== null && wl(l);
        break;
      case 13:
        wl(l);
        break;
      case 19:
        mf(l);
        break;
      case 10:
        Le(l.type);
        break;
      case 22:
      case 23:
        wl(l), df(), t !== null && ll(Lu);
        break;
      case 24:
        Le(ul);
    }
  }
  function Nn(t, l) {
    try {
      var e = l.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var a = u.next;
        e = a;
        do {
          if ((e.tag & t) === t) {
            u = void 0;
            var n = e.create, i = e.inst;
            u = n(), i.destroy = u;
          }
          e = e.next;
        } while (e !== a);
      }
    } catch (c) {
      Dt(l, l.return, c);
    }
  }
  function vu(t, l, e) {
    try {
      var u = l.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        u = n;
        do {
          if ((u.tag & t) === t) {
            var i = u.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, a = l;
              var f = e, m = c;
              try {
                m();
              } catch (S) {
                Dt(
                  a,
                  f,
                  S
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (S) {
      Dt(l, l.return, S);
    }
  }
  function R0(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Er(l, e);
      } catch (u) {
        Dt(t, t.return, u);
      }
    }
  }
  function U0(t, l, e) {
    e.props = $u(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (u) {
      Dt(t, l, u);
    }
  }
  function Oe(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = t.stateNode;
            break;
          case 30:
            var a = t.stateNode, n = Ye(t.memoizedProps, a);
            (a.ref === null || a.ref.name !== n) && (a.ref = Xd(n)), u = a.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var i = new Wl(t);
              E(
                t.child,
                !1,
                ky,
                i,
                void 0,
                void 0
              ), t.stateNode = i;
            }
            u = t.stateNode;
            break;
          default:
            u = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(u) : e.current = u;
      }
    } catch (c) {
      Dt(t, l, c);
    }
  }
  function Sl(t, l) {
    var e = t.ref, u = t.refCleanup;
    if (e !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (a) {
          Dt(t, l, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (a) {
          Dt(t, l, a);
        }
      else e.current = null;
  }
  function Li(t, l) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && l !== null)
      for (var e = 0; e < l.length; e++)
        wd(
          t.stateNode,
          l[e]
        );
  }
  function H0(t) {
    for (var l = t.return; l !== null && (Kf(l) && wd(t.stateNode, l.stateNode), !Vf(l)); )
      l = l.return;
  }
  function pn(t) {
    for (var l = t.return; l !== null && (Kf(l) && Fy(t.stateNode, l.stateNode), !Vf(l)); )
      l = l.return;
  }
  function Vf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Kf(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function wf(t) {
    var l = t.type, e = t.memoizedProps, u = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && u.focus();
          break t;
        case "img":
          e.src ? u.src = e.src : e.srcSet && (u.srcset = e.srcSet);
      }
    } catch (a) {
      Dt(t, t.return, a);
    }
  }
  function Jf(t, l, e) {
    try {
      var u = t.stateNode;
      Cy(u, t.type, e, l), u[el] = l;
    } catch (a) {
      Dt(t, t.return, a);
    }
  }
  function j0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Tu(t.type) || t.tag === 4;
  }
  function $f(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || j0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Tu(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function kf(t, l, e, u) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(a, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(a), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = ze)), Li(t, u), Ot = !0;
    else if (a !== 4 && (a === 27 && (Li(t, u), u = null, Tu(t.type) && (e = t.stateNode, l = null)), t = t.child, t !== null))
      for (kf(
        t,
        l,
        e,
        u
      ), t = t.sibling; t !== null; )
        kf(
          t,
          l,
          e,
          u
        ), t = t.sibling;
  }
  function Vi(t, l, e, u) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? e.insertBefore(a, l) : e.appendChild(a), Li(t, u), Ot = !0;
    else if (a !== 4 && (a === 27 && (Li(t, u), u = null, Tu(t.type) && (e = t.stateNode)), t = t.child, t !== null))
      for (Vi(
        t,
        l,
        e,
        u
      ), t = t.sibling; t !== null; )
        Vi(
          t,
          l,
          e,
          u
        ), t = t.sibling;
  }
  function B0(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var u = t.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      Tl(l, u, e), l[Qt] = t, l[el] = e;
    } catch (n) {
      Dt(t, t.return, n);
    }
  }
  var Ki = !1, Jl = null;
  function q0(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Ki = !0);
  }
  var Ne = null;
  function Y0() {
    var t = Ne;
    return Ne = null, t;
  }
  var ql = 0;
  function Na(t, l, e, u, a) {
    return ql = 0, G0(
      t.child,
      l,
      e,
      u,
      a
    );
  }
  function G0(t, l, e, u, a) {
    for (var n = !1; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (u !== null) {
          var c = Uo(i);
          u.push(c), c.view && (n = !0);
        } else
          n || Uo(i).view && (n = !0);
        Ki = !0, Yd(
          i,
          ql === 0 ? l : l + "_" + ql,
          e
        ), ql++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && a || G0(
        t.child,
        l,
        e,
        u,
        a
      ) && (n = !0));
      t = t.sibling;
    }
    return n;
  }
  function pe(t, l) {
    for (; t !== null; )
      t.tag === 5 ? Gd(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || pe(
        t.child,
        l
      )), t = t.sibling;
  }
  function wi(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (wi(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var l = t.memoizedProps;
          if (l.name == null || l.name === "auto")
            throw Error(r(544));
          var e = l.name;
          l = Ge(l.default, l.share), l !== "none" && (Na(
            t,
            e,
            l,
            null,
            !1
          ) || pe(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Ff(t, l) {
    if (t.tag === 30) {
      var e = t.stateNode, u = t.memoizedProps, a = Ye(u, e), n = Ge(
        u.default,
        e.paired ? u.share : u.enter
      );
      n !== "none" ? Na(t, a, n, null, !1) ? (wi(t), e.paired || l || Ha(t, u.onEnter)) : pe(t.child, !1) : wi(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ff(t, l), t = t.sibling;
    else wi(t);
  }
  function Wf(t) {
    if (Jl !== null && Jl.size !== 0) {
      var l = Jl;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var e = t.memoizedProps, u = e.name;
              if (u != null && u !== "auto") {
                var a = l.get(u);
                if (a !== void 0) {
                  var n = Ge(
                    e.default,
                    e.share
                  );
                  if (n !== "none" && (Na(
                    t,
                    u,
                    n,
                    null,
                    !1
                  ) ? (n = t.stateNode, a.paired = n, n.paired = a, Ha(t, e.onShare)) : pe(t.child, !1)), l.delete(u), l.size === 0) break;
                }
              }
            }
            Wf(t);
          }
          t = t.sibling;
        }
    }
  }
  function If(t) {
    if (t.tag === 30) {
      var l = t.memoizedProps, e = Ye(l, t.stateNode), u = Jl !== null ? Jl.get(e) : void 0, a = Ge(
        l.default,
        u !== void 0 ? l.share : l.exit
      );
      a !== "none" && (Na(t, e, a, null, !1) ? u !== void 0 ? (a = t.stateNode, u.paired = a, a.paired = u, Jl.delete(e), Ha(t, l.onShare)) : Ha(t, l.onExit) : pe(t.child, !1)), Jl !== null && Wf(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        If(t), t = t.sibling;
    else
      Jl !== null && Wf(t);
  }
  function X0(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var l = t.memoizedProps, e = Ye(l, t.stateNode);
        l = Ge(l.default, l.update), t.flags &= -5, l !== "none" && Na(
          t,
          e,
          l,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && X0(t);
      t = t.sibling;
    }
  }
  function Pf(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var l = t.stateNode;
            l.paired !== null && (l.paired = null, pe(t.child, !1));
          }
          Pf(t);
        }
        t = t.sibling;
      }
  }
  function Ji(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, pe(t.child, !1), Pf(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ji(t), t = t.sibling;
    else Pf(t);
  }
  function Q0(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? pe(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Q0(t), t = t.sibling;
  }
  function to(t, l, e, u, a, n, i) {
    for (var c = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (n !== null && ql < n.length) {
          var m = n[ql], S = Uo(f);
          (m.view || S.view) && (c = !0);
          var _;
          if (_ = (t.flags & 4) === 0)
            if (S.clip) _ = !0;
            else {
              _ = m.rect;
              var d = S.rect;
              _ = _.y !== d.y || _.x !== d.x || _.height !== d.height || _.width !== d.width;
            }
          _ && (t.flags |= 4), S.abs ? S = !m.abs : (m = m.rect, S = S.rect, S = m.height !== S.height || m.width !== S.width), S && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Yd(
          f,
          ql === 0 ? e : e + "_" + ql,
          a
        ), c && (t.flags & 4) !== 0 || (Ne === null && (Ne = []), Ne.push(
          f,
          ql === 0 ? u : u + "_" + ql,
          l.memoizedProps
        )), ql++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && i ? t.flags |= l.flags & 32 : to(
        t,
        l.child,
        e,
        u,
        a,
        n,
        i
      ) && (c = !0));
      l = l.sibling;
    }
    return c;
  }
  function Z0(t, l) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, u = t.stateNode, a = Ye(e, u), n = Ge(e.default, e.update), i;
        i = t.memoizedState, t.memoizedState = null, u = t;
        var c = t.child;
        ql = 0, a = to(
          u,
          c,
          a,
          a,
          n,
          i,
          !1
        ), (t.flags & 4) !== 0 && a && Ha(t, e.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Z0(t);
      t = t.sibling;
    }
  }
  var vl = !1, pt = !1, Ae = !1, lo = !1, L0 = typeof WeakSet == "function" ? WeakSet : Set, ml = null, Me = !1, An = !1, $i = !1, eo = !1;
  function iy(t, l, e) {
    if (t = t.containerInfo, Ao = Va, t = Js(t), Qc(t)) {
      if ("selectionStart" in t)
        var u = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          u = (u = t.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, i.nodeType;
            } catch {
              u = null;
              break t;
            }
            var c = 0, f = -1, m = -1, S = 0, _ = 0, d = t, g = null;
            l: for (; ; ) {
              for (var M; d !== u || n !== 0 && d.nodeType !== 3 || (f = c + n), d !== i || a !== 0 && d.nodeType !== 3 || (m = c + a), d.nodeType === 3 && (c += d.nodeValue.length), (M = d.firstChild) !== null; )
                g = d, d = M;
              for (; ; ) {
                if (d === t) break l;
                if (g === u && ++S === n && (f = c), g === i && ++_ === a && (m = c), (M = d.nextSibling) !== null) break;
                d = g, g = d.parentNode;
              }
              d = M;
            }
            u = f === -1 || m === -1 ? null : { start: f, end: m };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Mo = { focusedElem: t, selectionRange: u }, Va = !1, e = (e & 335544064) === e, ml = l, l = e ? 9270 : 1024; ml !== null; ) {
      if (t = ml, e && (u = t.deletions, u !== null))
        for (n = 0; n < u.length; n++)
          e && If(u[n]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        e && q0(t), ki(e);
      else {
        if (t.tag === 22) {
          if (u = t.alternate, t.memoizedState !== null) {
            u !== null && u.memoizedState === null && e && If(u), ki(e);
            continue;
          } else if (u !== null && u.memoizedState !== null) {
            e && q0(t), ki(e);
            continue;
          }
        }
        u = t.child, (t.subtreeFlags & l) !== 0 && u !== null ? (u.return = t, ml = u) : (e && X0(t), ki(e));
      }
    }
    Jl = null;
  }
  function ki(t) {
    for (; ml !== null; ) {
      var l = ml, e = t, u = l.alternate, a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((a & 1024) !== 0 && u !== null) {
            e = void 0, a = u.memoizedProps, u = u.memoizedState;
            var n = l.stateNode;
            try {
              var i = $u(
                l.type,
                a
              );
              e = n.getSnapshotBeforeUpdate(
                i,
                u
              ), n.__reactInternalSnapshotBeforeUpdate = e;
            } catch (c) {
              Dt(l, l.return, c);
            }
          }
          break;
        case 3:
          if ((a & 1024) !== 0) {
            if (u = l.stateNode.containerInfo, e = u.nodeType, e === 9)
              Bo(u);
            else if (e === 1)
              switch (u.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Bo(u);
                  break;
                default:
                  u.textContent = "";
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
          e && u !== null && (e = Ye(
            u.memoizedProps,
            u.stateNode
          ), a = l.memoizedProps, a = Ge(a.default, a.update), a !== "none" && Na(
            u,
            e,
            a,
            u.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((a & 1024) !== 0) throw Error(r(163));
      }
      if (u = l.sibling, u !== null) {
        u.return = l.return, ml = u;
        break;
      }
      ml = l.return;
    }
  }
  function V0(t, l, e) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        De(t, e), u & 4 && Nn(5, e);
        break;
      case 1:
        if (De(t, e), u & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              Dt(e, e.return, i);
            }
          else {
            var a = $u(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                a,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              Dt(
                e,
                e.return,
                i
              );
            }
          }
        u & 64 && R0(e), u & 512 && Oe(e, e.return);
        break;
      case 3:
        if (De(t, e), u & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Er(t, l);
          } catch (i) {
            Dt(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && u & 4 && B0(e);
      case 26:
      case 5:
        De(t, e), l === null && u & 4 && wf(e), u & 512 && Oe(e, e.return);
        break;
      case 12:
        De(t, e);
        break;
      case 31:
        De(t, e), u & 4 && $0(t, e);
        break;
      case 13:
        De(t, e), u & 4 && k0(t, e), u & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = by.bind(
          null,
          e
        ), Py(t, e))));
        break;
      case 22:
        if (u = e.memoizedState !== null || vl, !u) {
          var n = l !== null && l.memoizedState !== null || pt;
          l = vl, a = pt, vl = u, (pt = n) && !a ? (u = 2, (e.subtreeFlags & 8772) !== 0 && (u |= 1), ye(
            t,
            e,
            u
          )) : De(t, e), vl = l, pt = a;
        }
        break;
      case 30:
        De(t, e), u & 512 && Oe(e, e.return);
        break;
      case 7:
        u & 512 && Oe(e, e.return);
      default:
        De(t, e);
    }
  }
  function uo(t, l) {
    for (t = t.child; t !== null; )
      K0(t, l), t = t.sibling;
  }
  function K0(t, l) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var e = t.stateNode;
          if (l) {
            var u = e.style;
            typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
          } else {
            var a = t.stateNode, n = t.memoizedProps.style, i = n != null && n.hasOwnProperty("display") ? n.display : null;
            a.style.display = i == null || typeof i == "boolean" ? "" : ("" + i).trim();
          }
        } catch (f) {
          Dt(t, t.return, f);
        }
        ao(t, l);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = l ? "" : t.memoizedProps, Ot = !0;
        } catch (f) {
          Dt(t, t.return, f);
        }
        break;
      case 18:
        try {
          var c = t.stateNode;
          l ? qd(c, !0) : qd(t.stateNode, !1);
        } catch (f) {
          Dt(t, t.return, f);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && uo(t, l);
        break;
      default:
        uo(t, l);
    }
  }
  function ao(t, l) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var e = t, u = l;
          switch (e.tag) {
            case 4:
              K0(e, u);
              break t;
            case 22:
              e.memoizedState === null && ao(e, u);
              break t;
            default:
              ao(e, u);
          }
        }
        t = t.sibling;
      }
  }
  function w0(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, w0(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && ti(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Lt = null, Yl = !1;
  function ve(t, l, e) {
    for (e = e.child; e !== null; )
      J0(t, l, e), e = e.sibling;
  }
  function J0(t, l, e) {
    if (pl && typeof pl.onCommitFiberUnmount == "function")
      try {
        pl.onCommitFiberUnmount(Mu, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        pt || Sl(e, l), ve(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !pt && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        pt || Sl(e, l), pn(e);
        var u = Lt, a = Yl;
        Tu(e.type) && (Lt = e.stateNode, Yl = !1), ve(
          t,
          l,
          e
        ), Wd(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), Lt = u, Yl = a;
        break;
      case 5:
        pt || Sl(e, l), pn(e);
      case 6:
        if (e.tag === 6 && pn(e), u = Lt, a = Yl, Lt = null, ve(
          t,
          l,
          e
        ), Lt = u, Yl = a, Lt !== null)
          if (Yl)
            try {
              (Lt.nodeType === 9 ? Lt.body : Lt.nodeName === "HTML" ? Lt.ownerDocument.body : Lt).removeChild(e.stateNode), Ot = !0;
            } catch (n) {
              Dt(
                e,
                l,
                n
              );
            }
          else
            try {
              Lt.removeChild(e.stateNode), Ot = !0;
            } catch (n) {
              Dt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        Lt !== null && (Yl ? (t = Lt, Bd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Ka(t)) : Bd(Lt, e.stateNode));
        break;
      case 4:
        u = Lt, a = Yl, Lt = e.stateNode.containerInfo, Yl = !0, ve(
          t,
          l,
          e
        ), Lt = u, Yl = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vu(2, e, l), pt || vu(4, e, l), ve(
          t,
          l,
          e
        );
        break;
      case 1:
        pt || (Sl(e, l), u = e.stateNode, typeof u.componentWillUnmount == "function" && U0(
          e,
          l,
          u
        )), ve(
          t,
          l,
          e
        );
        break;
      case 21:
        ve(
          t,
          l,
          e
        );
        break;
      case 22:
        pt = (u = pt) || e.memoizedState !== null, ve(
          t,
          l,
          e
        ), pt = u;
        break;
      case 30:
        Sl(e, l), ve(
          t,
          l,
          e
        );
        break;
      case 7:
        pt || Sl(e, l), ve(
          t,
          l,
          e
        );
        break;
      default:
        ve(
          t,
          l,
          e
        );
    }
  }
  function $0(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ka(t);
      } catch (e) {
        Dt(l, l.return, e);
      }
    }
  }
  function k0(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ka(t);
      } catch (e) {
        Dt(l, l.return, e);
      }
  }
  function cy(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new L0()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new L0()), l;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Fi(t, l) {
    var e = cy(t);
    l.forEach(function(u) {
      if (!e.has(u)) {
        e.add(u);
        var a = Sy.bind(null, t, u);
        u.then(a, a);
      }
    });
  }
  function Rl(t, l, e) {
    var u = l.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var n = u[a], i = t, c = l, f = c;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Tu(f.type)) {
                Lt = f.stateNode, Yl = !1;
                break t;
              }
              break;
            case 5:
              Lt = f.stateNode, Yl = !1;
              break t;
            case 3:
            case 4:
              Lt = f.stateNode.containerInfo, Yl = !0;
              break t;
          }
          f = f.return;
        }
        if (Lt === null) throw Error(r(160));
        J0(i, c, n), Lt = null, Yl = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        F0(l, t, e), l = l.sibling;
  }
  var me = null;
  function F0(t, l, e) {
    var u = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (a & 4 && (u = t.updateQueue, u = u !== null ? u.events : null, u !== null))
          for (var n = 0; n < u.length; n++) {
            var i = u[n];
            i.ref.impl = i.nextImpl;
          }
        Rl(l, t, e), Ul(t), a & 4 && (vu(3, t, t.return), Nn(3, t), vu(5, t, t.return));
        break;
      case 1:
        Rl(l, t, e), Ul(t), a & 512 && (pt || u === null || Sl(u, u.return)), a & 64 && vl && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? l : e.concat(l))));
        break;
      case 26:
        if (n = me, Rl(l, t, e), Ul(t), a & 512 && (pt || u === null || Sl(u, u.return)), a & 4)
          if (a = u !== null ? u.memoizedState : null, e = t.memoizedState, u === null)
            if (e === null)
              if (t.stateNode === null)
                if (vl)
                  t.stateNode = Ud(
                    t.type,
                    t.memoizedProps,
                    l.containerInfo,
                    t
                  );
                else {
                  t: {
                    l = t.type, e = t.memoizedProps, a = n.ownerDocument || n;
                    l: switch (l) {
                      case "title":
                        u = a.getElementsByTagName("title")[0], (!u || u[Pa] || u[Qt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = a.createElement(l), a.head.insertBefore(
                          u,
                          a.querySelector("head > title")
                        )), Tl(u, l, e), u[Qt] = t, rl(u), l = u;
                        break t;
                      case "link":
                        if (n = uv(
                          "link",
                          "href",
                          a
                        ).get(l + (e.href || ""))) {
                          for (i = 0; i < n.length; i++)
                            if (u = n[i], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                              n.splice(i, 1);
                              break l;
                            }
                        }
                        u = a.createElement(l), Tl(u, l, e), a.head.appendChild(u);
                        break;
                      case "meta":
                        if (n = uv(
                          "meta",
                          "content",
                          a
                        ).get(l + (e.content || ""))) {
                          for (i = 0; i < n.length; i++)
                            if (u = n[i], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                              n.splice(i, 1);
                              break l;
                            }
                        }
                        u = a.createElement(l), Tl(u, l, e), a.head.appendChild(u);
                        break;
                      default:
                        throw Error(r(468, l));
                    }
                    u[Qt] = t, rl(u), l = u;
                  }
                  t.stateNode = l;
                }
              else
                vl || Lo(n, t.type, t.stateNode);
            else
              t.stateNode = ev(
                n,
                e,
                t.memoizedProps
              );
          else
            a !== e ? (a === null ? (l = u.stateNode, l === null || pt || l.parentNode.removeChild(l)) : a.count--, e === null ? vl || Lo(n, t.type, t.stateNode) : ev(n, e, t.memoizedProps)) : e === null && t.stateNode !== null && Jf(
              t,
              t.memoizedProps,
              u.memoizedProps
            );
        break;
      case 27:
        Rl(l, t, e), Ul(t), a & 512 && (pt || u === null || Sl(u, u.return)), u !== null && a & 4 && Jf(
          t,
          t.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (n = Ae, Ae = !1, Rl(l, t, e), Ae = n, Ul(t), a & 512 && (pt || u === null || Sl(u, u.return)), t.flags & 32) {
          l = t.stateNode;
          try {
            fa(l, ""), Ot = !0;
          } catch (S) {
            Dt(t, t.return, S);
          }
        }
        a & 4 && t.stateNode != null && (l = t.memoizedProps, Jf(
          t,
          l,
          u !== null ? u.memoizedProps : l
        )), a & 1024 && (lo = !0);
        break;
      case 6:
        if (Rl(l, t, e), Ul(t), a & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          l = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = l, Ot = !0;
          } catch (S) {
            Dt(t, t.return, S);
          }
        }
        break;
      case 3:
        if (Ot = !1, rc = null, n = me, me = qn(l.containerInfo), Rl(l, t, e), me = n, Ul(t), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Ka(l.containerInfo);
          } catch (S) {
            Dt(t, t.return, S);
          }
        lo && (lo = !1, W0(t)), Ot = !1;
        break;
      case 4:
        a = Ae, Ae = vl, u = gs(), n = me, me = qn(
          t.stateNode.containerInfo
        ), Rl(l, t, e), Ul(t), me = n, Ot && An && ($i = !0), Ot = u, Ae = a;
        break;
      case 12:
        Rl(l, t, e), Ul(t);
        break;
      case 31:
        Rl(l, t, e), Ul(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Fi(t, l)));
        break;
      case 13:
        Rl(l, t, e), Ul(t), t.child.flags & 8192 && t.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Pi = Nl()), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Fi(t, l)));
        break;
      case 22:
        n = t.memoizedState !== null, i = u !== null && u.memoizedState !== null;
        var c = vl, f = pt, m = Ae;
        vl = c || n, Ae = m || n, pt = f || i, Rl(l, t, e), pt = f, Ae = m, vl = c, Ul(t), a & 8192 && (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, !n || u === null || i || vl || pt || (l = i || pt, e = vl, u = pt, vl = n || vl, pt = l, mu(t, 2), vl = e, pt = u), !n && Ae || uo(t, n)), a & 4 && (l = t.updateQueue, l !== null && (e = l.retryQueue, e !== null && (l.retryQueue = null, Fi(t, e))));
        break;
      case 19:
        Rl(l, t, e), Ul(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Fi(t, l)));
        break;
      case 30:
        a & 512 && (pt || u === null || Sl(u, u.return)), a = gs(), n = An, i = (e & 335544064) === e, c = t.memoizedProps, An = i && Ge(
          c.default,
          c.update
        ) !== "none", Rl(l, t, e), Ul(t), i && u !== null && Ot && (t.flags |= 4), An = n, Ot = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (pt || u === null || Sl(u, u.return)), u && u.stateNode !== null && (u.stateNode._fragmentFiber = t);
      default:
        Rl(l, t, e), Ul(t);
    }
  }
  function Ul(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, u = t.return; u !== null; ) {
          if (j0(u)) {
            e = u;
            break;
          }
          u = u.return;
        }
        u = null;
        for (var a = t.return; a !== null; ) {
          if (Kf(a)) {
            var n = a.stateNode;
            u === null ? u = [n] : u.push(n);
          }
          if (Vf(a)) break;
          a = a.return;
        }
        var i = u;
        if (e == null) throw Error(r(160));
        switch (e.tag) {
          case 27:
            var c = e.stateNode, f = $f(t);
            Vi(
              t,
              f,
              c,
              i
            );
            break;
          case 5:
            var m = e.stateNode;
            e.flags & 32 && (fa(m, ""), e.flags &= -33);
            var S = $f(t);
            Vi(
              t,
              S,
              m,
              i
            );
            break;
          case 3:
          case 4:
            var _ = e.stateNode.containerInfo, d = $f(t);
            kf(
              t,
              d,
              _,
              i
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (g) {
        Dt(t, t.return, g);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function W0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        W0(l), l.tag === 5 && l.flags & 1024 && (l = l.stateNode, Va = !0, l.reset(), Va = !1), t = t.sibling;
      }
  }
  function pa(t, l) {
    if (l.subtreeFlags & 9270)
      for (l = l.child; l !== null; )
        I0(l, t), l = l.sibling;
    else Z0(l);
  }
  function I0(t, l) {
    var e = t.alternate;
    if (e === null) Ff(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (eo = Me = !1, Y0(), pa(l, t), !Me && !$i) {
            if (t = Ne, t !== null)
              for (var u = 0; u < t.length; u += 3) {
                e = t[u];
                var a = t[u + 1];
                Gd(e, t[u + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + a + ")"
                  }
                );
              }
            t = l.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
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
            )), eo = !0;
          }
          Ne = null;
          break;
        case 5:
          pa(l, t);
          break;
        case 4:
          u = Me, Me = !1, pa(l, t), Me && ($i = !0), Me = u;
          break;
        case 22:
          t.memoizedState === null && (e.memoizedState !== null ? Ff(t, !1) : pa(l, t));
          break;
        case 30:
          u = Me, a = Y0(), Me = !1, pa(l, t), Me && (t.flags |= 4);
          var n = t.memoizedProps, i = t.stateNode;
          l = Ye(n, i), i = Ye(e.memoizedProps, i);
          var c = Ge(n.default, n.update);
          c === "none" ? l = !1 : (n = e.memoizedState, e.memoizedState = null, e = t.child, ql = 0, l = to(
            t,
            e,
            l,
            i,
            c,
            n,
            !0
          ), ql !== (n === null ? 0 : n.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && l ? (Ha(
            t,
            t.memoizedProps.onUpdate
          ), Ne = a) : a !== null && (a.push.apply(a, Ne), Ne = a), Me = (t.flags & 32) !== 0 ? !0 : u;
          break;
        default:
          pa(l, t);
      }
  }
  function De(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        V0(t, l.alternate, l), l = l.sibling;
  }
  function mu(t, l) {
    for (t = t.child; t !== null; ) {
      var e = t, u = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          vu(4, e, e.return), mu(
            e,
            u
          );
          break;
        case 1:
          Sl(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && U0(
            e,
            e.return,
            a
          ), mu(
            e,
            u
          );
          break;
        case 27:
          (u & 2) !== 0 && Wd(
            e.stateNode,
            e.type,
            e.memoizedProps
          );
        case 5:
          Sl(e, e.return), e.tag !== 5 && e.tag !== 27 || pn(e), mu(
            e,
            u
          );
          break;
        case 6:
          pn(e);
          break;
        case 26:
          Sl(e, e.return), a = e.stateNode, e.memoizedState !== null || a === null || pt || a.parentNode.removeChild(a), mu(
            e,
            u
          );
          break;
        case 22:
          e.memoizedState === null && mu(
            e,
            u
          );
          break;
        case 30:
          Sl(e, e.return), mu(
            e,
            u
          );
          break;
        case 7:
          Sl(e, e.return);
        default:
          mu(
            e,
            u
          );
      }
      t = t.sibling;
    }
  }
  function ye(t, l, e) {
    for (e = (l.subtreeFlags & 8772) !== 0 ? e : e & -2, l = l.child; l !== null; ) {
      var u = l.alternate, a = t, n = l, i = n.flags, c = (e & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ye(
            a,
            n,
            e
          ), Nn(4, n);
          break;
        case 1:
          if (ye(
            a,
            n,
            e
          ), u = n, a = u.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (S) {
              Dt(u, u.return, S);
            }
          if (u = n, a = u.updateQueue, a !== null) {
            var f = u.stateNode;
            try {
              var m = a.shared.hiddenCallbacks;
              if (m !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < m.length; a++)
                  Tr(m[a], f);
            } catch (S) {
              Dt(u, u.return, S);
            }
          }
          c && i & 64 && R0(n), Oe(n, n.return);
          break;
        case 27:
          (e & 2) !== 0 && B0(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || H0(n), ye(
            a,
            n,
            e
          ), c && u === null && i & 4 && wf(n), Oe(n, n.return);
          break;
        case 6:
          H0(n);
          break;
        case 26:
          f = n.stateNode, n.memoizedState !== null || f === null || vl || Lo(
            qn(f.ownerDocument),
            n.type,
            f
          ), ye(
            a,
            n,
            e
          ), c && u === null && i & 4 && wf(n), Oe(n, n.return);
          break;
        case 12:
          ye(
            a,
            n,
            e
          );
          break;
        case 31:
          ye(
            a,
            n,
            e
          ), c && i & 4 && $0(a, n);
          break;
        case 13:
          ye(
            a,
            n,
            e
          ), c && i & 4 && k0(a, n);
          break;
        case 22:
          n.memoizedState === null && ye(
            a,
            n,
            e
          ), Oe(n, n.return);
          break;
        case 30:
          ye(
            a,
            n,
            e
          ), Oe(n, n.return);
          break;
        case 7:
          Oe(n, n.return);
        default:
          ye(
            a,
            n,
            e
          );
      }
      l = l.sibling;
    }
  }
  function no(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && vn(e));
  }
  function io(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && vn(t));
  }
  function ce(t, l, e, u) {
    var a = (e & 335544064) === e;
    if (l.subtreeFlags & (a ? 10262 : 10256))
      for (l = l.child; l !== null; )
        P0(
          t,
          l,
          e,
          u
        ), l = l.sibling;
    else a && Q0(l);
  }
  function P0(t, l, e, u) {
    var a = (e & 335544064) === e;
    a && l.alternate === null && l.return !== null && l.return.alternate !== null && Ji(l);
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ce(
          t,
          l,
          e,
          u
        ), n & 2048 && Nn(9, l);
        break;
      case 1:
        ce(
          t,
          l,
          e,
          u
        );
        break;
      case 3:
        ce(
          t,
          l,
          e,
          u
        ), a && eo && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), n & 2048 && (n = null, l.alternate !== null && (n = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== n && (l.refCount++, n != null && vn(n)));
        break;
      case 12:
        if (n & 2048) {
          ce(
            t,
            l,
            e,
            u
          ), n = l.stateNode;
          try {
            var i = l.memoizedProps, c = i.id, f = i.onPostCommit;
            typeof f == "function" && f(
              c,
              l.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (m) {
            Dt(l, l.return, m);
          }
        } else
          ce(
            t,
            l,
            e,
            u
          );
        break;
      case 31:
        ce(
          t,
          l,
          e,
          u
        );
        break;
      case 13:
        ce(
          t,
          l,
          e,
          u
        );
        break;
      case 23:
        break;
      case 22:
        i = l.stateNode, c = l.alternate, l.memoizedState !== null ? (a && c !== null && c.memoizedState === null && Ji(c), i._visibility & 2 ? ce(
          t,
          l,
          e,
          u
        ) : Mn(
          t,
          l
        )) : (a && c !== null && c.memoizedState !== null && Ji(l), i._visibility & 2 ? ce(
          t,
          l,
          e,
          u
        ) : (i._visibility |= 2, Aa(
          t,
          l,
          e,
          u,
          (l.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && no(c, l);
        break;
      case 24:
        ce(
          t,
          l,
          e,
          u
        ), n & 2048 && io(l.alternate, l);
        break;
      case 30:
        a && (n = l.alternate, n !== null && (pe(n.child, !0), pe(l.child, !0))), ce(
          t,
          l,
          e,
          u
        );
        break;
      default:
        ce(
          t,
          l,
          e,
          u
        );
    }
  }
  function Aa(t, l, e, u, a) {
    for (a = a && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var n = t, i = l, c = e, f = u, m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Aa(
            n,
            i,
            c,
            f,
            a
          ), Nn(8, i);
          break;
        case 23:
          break;
        case 22:
          var S = i.stateNode;
          i.memoizedState !== null ? S._visibility & 2 ? Aa(
            n,
            i,
            c,
            f,
            a
          ) : Mn(
            n,
            i
          ) : (S._visibility |= 2, Aa(
            n,
            i,
            c,
            f,
            a
          )), a && m & 2048 && no(
            i.alternate,
            i
          );
          break;
        case 24:
          Aa(
            n,
            i,
            c,
            f,
            a
          ), a && m & 2048 && io(i.alternate, i);
          break;
        default:
          Aa(
            n,
            i,
            c,
            f,
            a
          );
      }
      l = l.sibling;
    }
  }
  function Mn(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, u = l, a = u.flags;
        switch (u.tag) {
          case 22:
            Mn(e, u), a & 2048 && no(
              u.alternate,
              u
            );
            break;
          case 24:
            Mn(e, u), a & 2048 && io(u.alternate, u);
            break;
          default:
            Mn(e, u);
        }
        l = l.sibling;
      }
  }
  var ku = 8192;
  function Fu(t, l, e) {
    if (t.subtreeFlags & ku)
      for (t = t.child; t !== null; )
        td(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function td(t, l, e) {
    switch (t.tag) {
      case 26:
        Fu(
          t,
          l,
          e
        ), t.flags & ku && (t.memoizedState !== null ? vh(
          e,
          me,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (l & 335544128) === l && cv(e, t)));
        break;
      case 5:
        Fu(
          t,
          l,
          e
        ), t.flags & ku && (t = t.stateNode, (l & 335544128) === l && cv(e, t));
        break;
      case 3:
      case 4:
        var u = me;
        me = qn(t.stateNode.containerInfo), Fu(
          t,
          l,
          e
        ), me = u;
        break;
      case 22:
        t.memoizedState === null && (u = t.alternate, u !== null && u.memoizedState !== null ? (u = ku, ku = 16777216, Fu(
          t,
          l,
          e
        ), ku = u) : Fu(
          t,
          l,
          e
        ));
        break;
      case 30:
        if ((t.flags & ku) !== 0 && (u = t.memoizedProps.name, u != null && u !== "auto")) {
          var a = t.stateNode;
          a.paired = null, Jl === null && (Jl = /* @__PURE__ */ new Map()), Jl.set(u, a);
        }
        Fu(
          t,
          l,
          e
        );
        break;
      default:
        Fu(
          t,
          l,
          e
        );
    }
  }
  function ld(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function Dn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          ml = u, ud(
            u,
            t
          );
        }
      ld(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ed(t), t = t.sibling;
  }
  function ed(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Dn(t), t.flags & 2048 && vu(9, t, t.return);
        break;
      case 3:
        Dn(t);
        break;
      case 12:
        Dn(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Wi(t)) : Dn(t);
        break;
      default:
        Dn(t);
    }
  }
  function Wi(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          ml = u, ud(
            u,
            t
          );
        }
      ld(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          vu(8, l, l.return), Wi(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, Wi(l));
          break;
        default:
          Wi(l);
      }
      t = t.sibling;
    }
  }
  function ud(t, l) {
    for (; ml !== null; ) {
      var e = ml;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          vu(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var u = e.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          vn(e.memoizedState.cache);
      }
      if (u = e.child, u !== null) u.return = e, ml = u;
      else
        t: for (e = t; ml !== null; ) {
          u = ml;
          var a = u.sibling, n = u.return;
          if (w0(u), u === e) {
            ml = null;
            break t;
          }
          if (a !== null) {
            a.return = n, ml = a;
            break t;
          }
          ml = n;
        }
    }
  }
  var fy = {
    getCacheForType: function(t) {
      var l = hl(ul), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return hl(ul).controller.signal;
    }
  }, oy = typeof WeakMap == "function" ? WeakMap : Map, Nt = 0, Yt = null, ot = null, mt = 0, Mt = 0, $l = null, yu = !1, Ma = !1, co = !1, $e = 0, kt = 0, hu = 0, Wu = 0, Ii = 0, kl = 0, Da = 0, Cn = null, Gl = null, fo = !1, Pi = 0, ad = 0, tc = 1 / 0, lc = null, gu = null, Kt = 0, he = null, Iu = null, Ce = 0, oo = 0, so = null, nd = null, Ca = null, Ra = null, Ua = null, Rn = 0, ec = null;
  function Fl() {
    return (Nt & 2) !== 0 && mt !== 0 ? mt & -mt : j.T !== null ? Eo() : jl();
  }
  function id() {
    if (kl === 0)
      if ((mt & 536870912) === 0 || it) {
        var t = Ie;
        Ie <<= 1, (Ie & 3932160) === 0 && (Ie = 262144), kl = t;
      } else kl = 536870912;
    return t = gl.current, t !== null && (t.flags |= 32), kl;
  }
  function Ha(t, l) {
    if (l != null) {
      var e = t.stateNode, u = e.ref;
      u === null && (u = e.ref = Xd(
        Ye(t.memoizedProps, e)
      )), Ra === null && (Ra = []), Ra.push(l.bind(null, u));
    }
  }
  function Xl(t, l, e) {
    (t === Yt && (Mt === 2 || Mt === 9) || t.cancelPendingCommit !== null) && (ja(t, 0), bu(
      t,
      mt,
      kl,
      !1
    )), x(t, e), ((Nt & 2) === 0 || t !== Yt) && (t === Yt && ((Nt & 2) === 0 && (Wu |= e), kt === 4 && bu(
      t,
      mt,
      kl,
      !1
    )), Re(t));
  }
  function cd(t, l, e) {
    if ((Nt & 6) !== 0) throw Error(r(327));
    var u = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || Pe(t, l), a = u ? dy(t, l) : vo(t, l, !0), n = u;
    do {
      if (a === 0) {
        Ma && !u && bu(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !sy(e)) {
          a = vo(t, l, !1), n = !1;
          continue;
        }
        if (a === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var c = t;
              a = Cn;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (ja(c, i).flags |= 256), i = vo(
                c,
                i,
                !1
              ), i !== 2 && i !== 6) {
                if (co && !f) {
                  c.errorRecoveryDisabledLanes |= n, Wu |= n, a = 4;
                  break t;
                }
                n = Gl, Gl = a, n !== null && (Gl === null ? Gl = n : Gl.push.apply(
                  Gl,
                  n
                ));
              }
              a = i;
            }
            if (n = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          ja(t, 0), bu(t, l, 0, !0);
          break;
        }
        t: {
          switch (u = t, n = a, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((l & 4194048) !== l && (l & 62914560) !== l)
                break;
            case 6:
              bu(
                u,
                l,
                kl,
                !yu
              );
              break t;
            case 2:
              Gl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((l & 62914560) === l && (a = Pi + 300 - Nl(), 10 < a)) {
            if (bu(
              u,
              l,
              kl,
              !yu
            ), Cu(u, 0, !0) !== 0) break t;
            Ce = l, u.timeoutHandle = Ro(
              fd.bind(
                null,
                u,
                e,
                Gl,
                lc,
                fo,
                l,
                kl,
                Wu,
                Da,
                yu,
                n,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          fd(
            u,
            e,
            Gl,
            lc,
            fo,
            l,
            kl,
            Wu,
            Da,
            yu,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Re(t);
  }
  function fd(t, l, e, u, a, n, i, c, f, m, S, _, d, g) {
    t.timeoutHandle = -1;
    var M = l.subtreeFlags, q = (n & 335544064) === n;
    if (_ = null, (q || M & 8192 || (M & 16785408) === 16785408) && (_ = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: ze
    }, Jl = null, td(
      l,
      n,
      _
    ), q && (M = _, q = t.containerInfo, q = (q.nodeType === 9 ? q : q.ownerDocument).__reactViewTransition, q != null && (M.count++, M.waitingForViewTransition = !0, M = Xn.bind(M), q.finished.then(M, M))), M = (n & 62914560) === n ? Pi - Nl() : (n & 4194048) === n ? ad - Nl() : 0, M = mh(
      _,
      M
    ), M !== null)) {
      Ce = n, t.cancelPendingCommit = M(
        hd.bind(
          null,
          t,
          l,
          n,
          e,
          u,
          a,
          i,
          c,
          f,
          m,
          S,
          _,
          null,
          d,
          g
        )
      ), bu(t, n, i, !m);
      return;
    }
    hd(
      t,
      l,
      n,
      e,
      u,
      a,
      i,
      c,
      f,
      m,
      S,
      _
    );
  }
  function sy(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var u = 0; u < e.length; u++) {
          var a = e[u], n = a.getSnapshot;
          a = a.value;
          try {
            if (!Kl(n(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function bu(t, l, e, u) {
    l = Ia(t, l), l &= ~Ii, l &= ~Wu, t.suspendedLanes |= l, t.pingedLanes &= ~l, u && (t.warmLanes |= l), u = t.expirationTimes;
    for (var a = l; 0 < a; ) {
      var n = 31 - Al(a), i = 1 << n;
      u[n] = -1, a &= ~i;
    }
    e !== 0 && tt(t, e, l);
  }
  function uc() {
    return (Nt & 6) === 0 ? (Un(0), !1) : !0;
  }
  function ro() {
    if (ot !== null) {
      if (Mt === 0)
        var t = ot.return;
      else
        t = ot, Ze = Gu = null, Sf(t), Ea = null, hn = 0, t = ot;
      for (; t !== null; )
        C0(t.alternate, t), t = t.return;
      ot = null;
    }
  }
  function ja(t, l) {
    var e = t.timeoutHandle;
    return e !== -1 && (t.timeoutHandle = -1, Hy(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Ce = 0, ro(), Yt = t, ot = e = Xe(t.current, null), mt = l, Mt = 0, $l = null, yu = !1, Ma = Pe(t, l), co = !1, Da = kl = Ii = Wu = hu = kt = 0, Gl = Cn = null, fo = !1, $e = Ia(t, l), ri(), e;
  }
  function od(t, l) {
    lt = null, j.H = Bi, l === Ta || l === zi ? (l = hr(), Mt = 3) : l === nf ? (l = hr(), Mt = 4) : Mt = l === Hf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, $l = l, ot === null && (kt = 1, qi(
      t,
      ue(l, t.current)
    ));
  }
  function sd() {
    var t = gl.current;
    return t === null ? !0 : (mt & 4194048) === mt ? xl === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? t === xl : !1;
  }
  function rd() {
    var t = j.H;
    return j.H = Bi, t === null ? Bi : t;
  }
  function dd() {
    var t = j.A;
    return j.A = fy, t;
  }
  function ac() {
    kt = 4, yu || (mt & 4194048) !== mt && gl.current !== null || (Ma = !0), (hu & 134217727) === 0 && (Wu & 134217727) === 0 || Yt === null || bu(
      Yt,
      mt,
      kl,
      !1
    );
  }
  function vo(t, l, e) {
    var u = Nt;
    Nt |= 2;
    var a = rd(), n = dd();
    (Yt !== t || mt !== l) && (lc = null, ja(t, l)), l = !1;
    var i = kt;
    t: do
      try {
        if (Mt !== 0 && ot !== null) {
          var c = ot, f = $l;
          switch (Mt) {
            case 8:
              ro(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              gl.current === null && (l = !0);
              var m = Mt;
              if (Mt = 0, $l = null, Ba(t, c, f, m), e && Ma) {
                i = 0;
                break t;
              }
              break;
            default:
              m = Mt, Mt = 0, $l = null, Ba(t, c, f, m);
          }
        }
        ry(), i = kt;
        break;
      } catch (S) {
        od(t, S);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Ze = Gu = null, Nt = u, j.H = a, j.A = n, ot === null && (Yt = null, mt = 0, ri()), i;
  }
  function ry() {
    for (; ot !== null; ) vd(ot);
  }
  function dy(t, l) {
    var e = Nt;
    Nt |= 2;
    var u = rd(), a = dd();
    Yt !== t || mt !== l ? (lc = null, tc = Nl() + 500, ja(t, l)) : Ma = Pe(
      t,
      l
    );
    t: do
      try {
        if (Mt !== 0 && ot !== null) {
          l = ot;
          var n = $l;
          l: switch (Mt) {
            case 1:
              Mt = 0, $l = null, Ba(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (mr(n)) {
                Mt = 0, $l = null, md(l);
                break;
              }
              l = function() {
                Mt !== 2 && Mt !== 9 || Yt !== t || (Mt = 7), Re(t);
              }, n.then(l, l);
              break t;
            case 3:
              Mt = 7;
              break t;
            case 4:
              Mt = 5;
              break t;
            case 7:
              mr(n) ? (Mt = 0, $l = null, md(l)) : (Mt = 0, $l = null, Ba(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (ot.tag) {
                case 26:
                  i = ot.memoizedState;
                case 5:
                case 27:
                  var c = ot;
                  if (i ? nv(i) : c.stateNode.complete) {
                    Mt = 0, $l = null;
                    var f = c.sibling;
                    if (f !== null) ot = f;
                    else {
                      var m = c.return;
                      m !== null ? (ot = m, nc(m)) : ot = null;
                    }
                    break l;
                  }
              }
              Mt = 0, $l = null, Ba(t, l, n, 5);
              break;
            case 6:
              Mt = 0, $l = null, Ba(t, l, n, 6);
              break;
            case 8:
              ro(), kt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        vy();
        break;
      } catch (S) {
        od(t, S);
      }
    while (!0);
    return Ze = Gu = null, j.H = u, j.A = a, Nt = e, ot !== null ? 0 : (Yt = null, mt = 0, ri(), kt);
  }
  function vy() {
    for (; ot !== null && !ka(); )
      vd(ot);
  }
  function vd(t) {
    var l = M0(t.alternate, t, $e);
    t.memoizedProps = t.pendingProps, l === null ? nc(t) : ot = l;
  }
  function md(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = z0(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          mt
        );
        break;
      case 11:
        l = z0(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          mt
        );
        break;
      case 5:
        Sf(l);
        var u = l;
        u === dl && (it ? (gi(u), u.tag === 5 && u.stateNode != null && (Gt = u.stateNode)) : (gi(u), it = !0));
      default:
        C0(e, l), l = ot = ur(l, $e), l = M0(e, l, $e);
    }
    t.memoizedProps = t.pendingProps, l === null ? nc(t) : ot = l;
  }
  function Ba(t, l, e, u) {
    Ze = Gu = null, Sf(l), Ea = null, hn = 0;
    var a = l.return;
    try {
      if (ty(
        t,
        a,
        l,
        e,
        mt
      )) {
        kt = 1, qi(
          t,
          ue(e, t.current)
        ), ot = null;
        return;
      }
    } catch (n) {
      if (a !== null) throw ot = a, n;
      kt = 1, qi(
        t,
        ue(e, t.current)
      ), ot = null;
      return;
    }
    l.flags & 32768 ? (it || u === 1 ? t = !0 : Ma || (mt & 536870912) !== 0 ? t = !1 : (yu = t = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = gl.current, u !== null && u.tag === 13 && (u.flags |= 16384))), yd(l, t)) : nc(l);
  }
  function nc(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        yd(
          l,
          yu
        );
        return;
      }
      t = l.return;
      var e = ay(
        l.alternate,
        l,
        $e
      );
      if (e !== null) {
        ot = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        ot = l;
        return;
      }
      ot = l = t;
    } while (l !== null);
    kt === 0 && (kt = 5);
  }
  function yd(t, l) {
    do {
      var e = ny(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, ot = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        ot = t;
        return;
      }
      ot = t = e;
    } while (t !== null);
    kt = 6, ot = null;
  }
  function hd(t, l, e, u, a, n, i, c, f, m, S, _) {
    t.cancelPendingCommit = null;
    do
      ic();
    while (Kt !== 0);
    if ((Nt & 6) !== 0) throw Error(r(327));
    if (l !== null) {
      if (l === t.current) throw Error(r(177));
      t === Yt && (ot = Yt = null, mt = 0), Iu = l, he = t, Ce = e, so = a, nd = u, my(
        t,
        l,
        e,
        i,
        c,
        f,
        _
      );
    }
  }
  function my(t, l, e, u, a, n, i) {
    var c = l.lanes | l.childLanes;
    if (oo = c, c |= wc, L(
      t,
      e,
      c,
      u,
      a,
      n
    ), Ra = null, (e & 335544064) === e ? (Ua = Zm(t), u = 10262) : (Ua = null, u = 10256), (l.subtreeFlags & u) !== 0 || (l.flags & u) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Ty(Au, function() {
      return go(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Ki = !1, u = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || u) {
      u = j.T, j.T = null, a = J.p, J.p = 2, n = Nt, Nt |= 4;
      try {
        iy(t, l, e);
      } finally {
        Nt = n, J.p = a, j.T = u;
      }
    }
    Kt = 1, Ki ? Ca = Xy(
      i,
      t.containerInfo,
      Ua,
      mo,
      yo,
      hy,
      ho,
      go,
      yy
    ) : (mo(), yo(), ho());
  }
  function yy(t) {
    if (Kt !== 0) {
      var l = he.onRecoverableError;
      l(t, { componentStack: null });
    }
  }
  function hy() {
    Kt === 3 && (Kt = 0, I0(Iu, he), Kt = 4);
  }
  function mo() {
    if (Kt === 1) {
      Kt = 0;
      var t = he, l = Iu, e = Ce, u = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || u) {
        u = j.T, j.T = null;
        var a = J.p;
        J.p = 2;
        var n = Nt;
        Nt |= 4;
        try {
          An = $i = !1, F0(l, t, e), e = Mo;
          var i = Js(t.containerInfo), c = e.focusedElem, f = e.selectionRange;
          if (i !== c && c && c.ownerDocument && ws(
            c.ownerDocument.documentElement,
            c
          )) {
            if (f !== null && Qc(c)) {
              var m = f.start, S = f.end;
              if (S === void 0 && (S = m), "selectionStart" in c)
                c.selectionStart = m, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var _ = c.ownerDocument || document, d = _ && _.defaultView || window;
                if (d.getSelection) {
                  var g = d.getSelection(), M = c.textContent.length, q = Math.min(f.start, M), et = f.end === void 0 ? q : Math.min(f.end, M);
                  !g.extend && q > et && (i = et, et = q, q = i);
                  var v = Ks(
                    c,
                    q
                  ), o = Ks(
                    c,
                    et
                  );
                  if (v && o && (g.rangeCount !== 1 || g.anchorNode !== v.node || g.anchorOffset !== v.offset || g.focusNode !== o.node || g.focusOffset !== o.offset)) {
                    var h = _.createRange();
                    h.setStart(v.node, v.offset), g.removeAllRanges(), q > et ? (g.addRange(h), g.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset), g.addRange(h));
                  }
                }
              }
            }
            for (_ = [], g = c; g = g.parentNode; )
              g.nodeType === 1 && _.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < _.length; c++) {
              var z = _[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          Va = !!Ao, Mo = Ao = null;
        } finally {
          Nt = n, J.p = a, j.T = u;
        }
      }
      t.current = l, Kt = 2;
    }
  }
  function yo() {
    if (Kt === 2) {
      Kt = 0;
      var t = he, l = Iu, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = j.T, j.T = null;
        var u = J.p;
        J.p = 2;
        var a = Nt;
        Nt |= 4;
        try {
          V0(t, l.alternate, l);
        } finally {
          Nt = a, J.p = u, j.T = e;
        }
      }
      Kt = 3;
    }
  }
  function ho() {
    if (Kt === 4 || Kt === 3) {
      Kt = 0;
      var t = Ca;
      Ca = null, Fa();
      var l = he, e = Iu, u = Ce, a = nd, n = (u & 335544064) === u ? 10262 : 10256;
      if ((e.subtreeFlags & n) !== 0 || (e.flags & n) !== 0 ? Kt = 5 : (Kt = 0, Iu = he = null, gd(l, l.pendingLanes)), n = l.pendingLanes, n === 0 && (gu = null), Jt(u), e = e.stateNode, pl && typeof pl.onCommitFiberRoot == "function")
        try {
          pl.onCommitFiberRoot(
            Mu,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = j.T, n = J.p, J.p = 2, j.T = null;
        try {
          for (var i = l.onRecoverableError, c = 0; c < a.length; c++) {
            var f = a[c];
            i(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          j.T = e, J.p = n;
        }
      }
      if (a = Ra, i = Ua, Ua = null, a !== null && (Ra = null, i === null && (i = []), t !== null))
        for (f = 0; f < a.length; f++)
          e = (0, a[f])(
            i
          ), e !== void 0 && t.finished.finally(e);
      (Ce & 3) !== 0 && ic(), Re(l), n = l.pendingLanes, (u & 261930) !== 0 && (n & 42) !== 0 ? l === ec ? Rn++ : (Rn = 0, ec = l) : (Rn = 0, ec = null), Un(0);
    }
  }
  function gd(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, vn(l)));
  }
  function ic() {
    return Ca !== null && (Ca.skipTransition(), Ca = null), mo(), yo(), ho(), go();
  }
  function go() {
    if (Kt !== 5) return !1;
    var t = he, l = oo;
    oo = 0;
    var e = Jt(Ce), u = j.T, a = J.p;
    try {
      J.p = 32 > e ? 32 : e, j.T = null, e = so, so = null;
      var n = he, i = Ce;
      if (Kt = 0, Iu = he = null, Ce = 0, (Nt & 6) !== 0) throw Error(r(331));
      var c = Nt;
      if (Nt |= 4, ed(n.current), P0(
        n,
        n.current,
        i,
        e
      ), Nt = c, Un(0, !1), pl && typeof pl.onPostCommitFiberRoot == "function")
        try {
          pl.onPostCommitFiberRoot(Mu, n);
        } catch {
        }
      return !0;
    } finally {
      J.p = a, j.T = u, gd(t, l);
    }
  }
  function bd(t, l, e) {
    l = ue(e, l), l = Uf(t.stateNode, l, 2), t = ou(t, l, 2), t !== null && (x(t, 2), Re(t));
  }
  function Dt(t, l, e) {
    if (t.tag === 3)
      bd(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          bd(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var u = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (gu === null || !gu.has(u))) {
            t = ue(e, t), e = m0(2), u = ou(l, e, 2), u !== null && (y0(
              e,
              u,
              l,
              t
            ), x(u, 2), Re(u));
            break;
          }
        }
        l = l.return;
      }
  }
  function bo(t, l, e) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new oy();
      var a = /* @__PURE__ */ new Set();
      u.set(l, a);
    } else
      a = u.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), u.set(l, a));
    a.has(e) || (co = !0, a.add(e), t = gy.bind(null, t, l, e), l.then(t, t));
  }
  function gy(t, l, e) {
    var u = t.pingCache;
    u !== null && u.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, Yt === t && (mt & e) === e && ((kt === 4 || kt === 3 && (mt & 62914560) === mt && 300 > Nl() - Pi) && (Nt & 2) === 0 ? ja(t, 0) : Ii |= e, Da === mt && (Da = 0)), Re(t);
  }
  function Sd(t, l) {
    l === 0 && (l = y()), t = Bu(t, l), t !== null && (x(t, l), Re(t));
  }
  function by(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Sd(t, e);
  }
  function Sy(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var u = t.stateNode, a = t.memoizedState;
        a !== null && (e = a.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      case 22:
        u = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    u !== null && u.delete(l), Sd(t, e);
  }
  function Ty(t, l) {
    return It(t, l);
  }
  var qa = null, Ya = null, So = !1, cc = !1, To = !1, Su = 0;
  function Re(t) {
    t !== Ya && t.next === null && (Ya === null ? qa = Ya = t : Ya = Ya.next = t), cc = !0, So || (So = !0, zy());
  }
  function Un(t, l) {
    if (!To && cc) {
      To = !0;
      do
        for (var e = !1, u = qa; u !== null; ) {
          if (t !== 0) {
            var a = u.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var i = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - Al(42 | t) + 1) - 1, n &= a & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, _d(u, n));
          } else
            n = mt, n = Cu(
              u,
              u === Yt ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Pe(u, n) || (e = !0, _d(u, n));
          u = u.next;
        }
      while (e);
      To = !1;
    }
  }
  function Ey() {
    Td();
  }
  function Td() {
    cc = So = !1;
    var t = 0;
    Su !== 0 && Uy() && (t = Su);
    for (var l = Nl(), e = null, u = qa; u !== null; ) {
      var a = u.next, n = Ed(u, l);
      n === 0 ? (u.next = null, e === null ? qa = a : e.next = a, a === null && (Ya = e)) : (e = u, (t !== 0 || (n & 3) !== 0) && (cc = !0)), u = a;
    }
    Kt !== 0 && Kt !== 5 || Un(t), Su !== 0 && (Su = 0);
  }
  function Ed(t, l) {
    for (var e = t.suspendedLanes, u = t.pingedLanes, a = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - Al(n), c = 1 << i, f = a[i];
      f === -1 ? ((c & e) === 0 || (c & u) !== 0) && (a[i] = In(c, l)) : f <= l && (t.expiredLanes |= c), n &= ~c;
    }
    if (l = Yt, e = mt, e = Cu(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u = t.callbackNode, e === 0 || t === l && (Mt === 2 || Mt === 9) || t.cancelPendingCommit !== null)
      return u !== null && u !== null && Ll(u), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Pe(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (u !== null && Ll(u), Jt(e)) {
        case 2:
        case 8:
          e = kn;
          break;
        case 32:
          e = Au;
          break;
        case 268435456:
          e = Fn;
          break;
        default:
          e = Au;
      }
      return u = zd.bind(null, t), e = It(e, u), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return u !== null && u !== null && Ll(u), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function zd(t, l) {
    if (Kt !== 0 && Kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (ic() && t.callbackNode !== e)
      return null;
    var u = mt;
    return u = Cu(
      t,
      t === Yt ? u : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u === 0 ? null : (cd(t, u, l), Ed(t, Nl()), t.callbackNode != null && t.callbackNode === e ? zd.bind(null, t) : null);
  }
  function _d(t, l) {
    if (ic()) return null;
    cd(t, l, !0);
  }
  function zy() {
    jy(function() {
      (Nt & 6) !== 0 ? It(
        ea,
        Ey
      ) : Td();
    });
  }
  function Eo() {
    if (Su === 0) {
      var t = Zu;
      t === 0 && (t = ua, ua <<= 1, (ua & 261888) === 0 && (ua = 256)), Su = t;
    }
    return Su;
  }
  function xd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ui(t);
  }
  function _y(t, l, e, u, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var n = xd(
        (a[el] || null).action
      ), i = u.submitter;
      i && (l = (l = i[el] || null) ? xd(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
      var c = new ci(
        "action",
        "action",
        null,
        u,
        a
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (Su !== 0) {
                  var f = new FormData(a, i);
                  Af(
                    e,
                    {
                      pending: !0,
                      data: f,
                      method: a.method,
                      action: n
                    },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), f = new FormData(a, i), Af(
                  e,
                  {
                    pending: !0,
                    data: f,
                    method: a.method,
                    action: n
                  },
                  n,
                  f
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var zo = 0; zo < Kc.length; zo++) {
    var _o = Kc[zo], xy = _o.toLowerCase(), Oy = _o[0].toUpperCase() + _o.slice(1);
    de(
      xy,
      "on" + Oy
    );
  }
  de(Fs, "onAnimationEnd"), de(Ws, "onAnimationIteration"), de(Is, "onAnimationStart"), de("dblclick", "onDoubleClick"), de("focusin", "onFocus"), de("focusout", "onBlur"), de(Hm, "onTransitionRun"), de(jm, "onTransitionStart"), de(Bm, "onTransitionCancel"), de(Ps, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), Uu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Uu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Uu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Uu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Uu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Uu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ny = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn)
  );
  function Od(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var u = t[e], a = u.event;
      u = u.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = u.length - 1; 0 <= i; i--) {
            var c = u[i], f = c.instance, m = c.currentTarget;
            if (c = c.listener, f !== n && a.isPropagationStopped())
              break t;
            n = c, a.currentTarget = m;
            try {
              n(a);
            } catch (S) {
              si(S);
            }
            a.currentTarget = null, n = f;
          }
        else
          for (i = 0; i < u.length; i++) {
            if (c = u[i], f = c.instance, m = c.currentTarget, c = c.listener, f !== n && a.isPropagationStopped())
              break t;
            n = c, a.currentTarget = m;
            try {
              n(a);
            } catch (S) {
              si(S);
            }
            a.currentTarget = null, n = f;
          }
      }
    }
  }
  function st(t, l) {
    var e = l[ss];
    e === void 0 && (e = l[ss] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    e.has(u) || (Nd(l, t, 2, !1), e.add(u));
  }
  function xo(t, l, e) {
    var u = 0;
    l && (u |= 4), Nd(
      e,
      t,
      u,
      l
    );
  }
  var fc = "_reactListening" + Math.random().toString(36).slice(2);
  function Oo(t) {
    if (!t[fc]) {
      t[fc] = !0, vs.forEach(function(e) {
        e !== "selectionchange" && (Ny.has(e) || xo(e, !1, t), xo(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[fc] || (l[fc] = !0, xo("selectionchange", !1, l));
    }
  }
  function Nd(t, l, e, u) {
    switch (yv(l)) {
      case 2:
        var a = bh;
        break;
      case 8:
        a = Sh;
        break;
      default:
        a = Ko;
    }
    e = a.bind(
      null,
      l,
      e,
      t
    ), a = void 0, !Cc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), u ? a !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: a
    }) : t.addEventListener(l, e, !0) : a !== void 0 ? t.addEventListener(l, e, {
      passive: a
    }) : t.addEventListener(l, e, !1);
  }
  function No(t, l, e, u, a) {
    var n = u;
    if ((l & 1) === 0 && (l & 2) === 0 && u !== null)
      t: for (; ; ) {
        if (u === null) return;
        var i = u.tag;
        if (i === 3 || i === 4) {
          var c = u.stateNode.containerInfo;
          if (c === a) break;
          if (i === 4)
            for (i = u.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === a)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = Ru(c), i === null) return;
            if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              u = n = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Ns(function() {
      var m = n, S = Mc(e), _ = [];
      t: {
        var d = tr.get(t);
        if (d !== void 0) {
          var g = ci, M = t;
          switch (t) {
            case "keypress":
              if (ni(e) === 0) break t;
            case "keydown":
            case "keyup":
              g = sm;
              break;
            case "focusin":
              M = "focus", g = jc;
              break;
            case "focusout":
              M = "blur", g = jc;
              break;
            case "beforeblur":
            case "afterblur":
              g = jc;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Ms;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Iv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = ym;
              break;
            case Fs:
            case Ws:
            case Is:
              g = lm;
              break;
            case Ps:
              g = gm;
              break;
            case "scroll":
            case "scrollend":
              g = Fv;
              break;
            case "wheel":
              g = Sm;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = um;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Cs;
              break;
            case "submit":
              g = vm;
              break;
            case "toggle":
            case "beforetoggle":
              g = Em;
          }
          var q = (l & 4) !== 0, et = !q && (t === "scroll" || t === "scrollend"), v = q ? d !== null ? d + "Capture" : null : d;
          q = [];
          for (var o = m, h; o !== null; ) {
            var z = o;
            if (h = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || h === null || v === null || (z = ln(o, v), z != null && q.push(
              jn(o, z, h)
            )), et) break;
            o = o.return;
          }
          0 < q.length && (d = new g(
            d,
            M,
            null,
            e,
            S
          ), _.push({ event: d, listeners: q }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (g = t === "mouseover" || t === "pointerover", d = t === "mouseout" || t === "pointerout", g && e !== Ac && (M = e.relatedTarget || e.fromElement) && (Ru(M) || M[te]))
            break t;
          (d || g) && (M = S.window === S ? S : (g = S.ownerDocument) ? g.defaultView || g.parentWindow : window, d ? (g = e.relatedTarget || e.toElement, d = m, g = g ? Ru(g) : null, g !== null && (et = V(g), q = g.tag, g !== et || q !== 5 && q !== 27 && q !== 6) && (g = null)) : (d = null, g = m), d !== g && (q = Ms, z = "onMouseLeave", v = "onMouseEnter", o = "mouse", (t === "pointerout" || t === "pointerover") && (q = Cs, z = "onPointerLeave", v = "onPointerEnter", o = "pointer"), et = d == null ? M : tn(d), h = g == null ? M : tn(g), M = new q(
            z,
            o + "leave",
            d,
            e,
            S
          ), M.target = et, M.relatedTarget = h, z = null, Ru(S) === m && (q = new q(
            v,
            o + "enter",
            g,
            e,
            S
          ), q.target = h, q.relatedTarget = et, z = q), et = z, q = d && g ? Ut(
            d,
            g,
            py
          ) : null, d !== null && pd(
            _,
            M,
            d,
            q,
            !1
          ), g !== null && et !== null && pd(
            _,
            et,
            g,
            q,
            !0
          )));
        }
        t: {
          if (d = m ? tn(m) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file")
            var U = Gs;
          else if (qs(d))
            if (Xs)
              U = Cm;
            else {
              U = Mm;
              var yt = Am;
            }
          else
            g = d.nodeName, !g || g.toLowerCase() !== "input" || d.type !== "checkbox" && d.type !== "radio" ? m && pc(m.elementType) && (U = Gs) : U = Dm;
          if (U && (U = U(t, m))) {
            Ys(
              _,
              U,
              e,
              S
            );
            break t;
          }
          yt && yt(t, d, m);
        }
        switch (yt = m ? tn(m) : window, t) {
          case "focusin":
            (qs(yt) || yt.contentEditable === "true") && (da = yt, Zc = m, sn = null);
            break;
          case "focusout":
            sn = Zc = da = null;
            break;
          case "mousedown":
            Lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Lc = !1, $s(_, e, S);
            break;
          case "selectionchange":
            if (Um) break;
          case "keydown":
          case "keyup":
            $s(_, e, S);
        }
        var Q;
        if (qc)
          t: {
            switch (t) {
              case "compositionstart":
                var w = "onCompositionStart";
                break t;
              case "compositionend":
                w = "onCompositionEnd";
                break t;
              case "compositionupdate":
                w = "onCompositionUpdate";
                break t;
            }
            w = void 0;
          }
        else
          ra ? js(t, e) && (w = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (w = "onCompositionStart");
        w && (Rs && e.locale !== "ko" && (ra || w !== "onCompositionStart" ? w === "onCompositionEnd" && ra && (Q = ps()) : (tu = S, Rc = "value" in tu ? tu.value : tu.textContent, ra = !0)), yt = oc(m, w), 0 < yt.length && (w = new Ds(
          w,
          t,
          null,
          e,
          S
        ), _.push({ event: w, listeners: yt }), Q ? w.data = Q : (Q = Bs(e), Q !== null && (w.data = Q)))), (Q = _m ? xm(t, e) : Om(t, e)) && (w = oc(m, "onBeforeInput"), 0 < w.length && (yt = new Ds(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          S
        ), _.push({
          event: yt,
          listeners: w
        }), yt.data = Q)), _y(
          _,
          t,
          m,
          e,
          S
        );
      }
      Od(_, l);
    });
  }
  function jn(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function oc(t, l) {
    for (var e = l + "Capture", u = []; t !== null; ) {
      var a = t, n = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || n === null || (a = ln(t, e), a != null && u.unshift(
        jn(t, a, n)
      ), a = ln(t, l), a != null && u.push(
        jn(t, a, n)
      )), t.tag === 3) return u;
      t = t.return;
    }
    return [];
  }
  function py(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function pd(t, l, e, u, a) {
    for (var n = l._reactName, i = []; e !== null && e !== u; ) {
      var c = e, f = c.alternate, m = c.stateNode;
      if (c = c.tag, f !== null && f === u) break;
      c !== 5 && c !== 26 && c !== 27 || m === null || (f = m, a ? (m = ln(e, n), m != null && i.unshift(
        jn(e, m, f)
      )) : a || (m = ln(e, n), m != null && i.push(
        jn(e, m, f)
      ))), e = e.return;
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var Ay = /\r\n?/g, My = /\u0000|\uFFFD/g;
  function Ad(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ay, `
`).replace(My, "");
  }
  function Md(t, l) {
    return l = Ad(l), Ad(t) === l;
  }
  function Ct(t, l, e, u, a, n) {
    switch (e) {
      case "children":
        if (typeof u == "string")
          l === "body" || l === "textarea" && u === "" || fa(t, u);
        else if (typeof u == "number" || typeof u == "bigint")
          l !== "body" && fa(t, "" + u);
        else return;
        break;
      case "className":
        ei(t, "class", u);
        break;
      case "tabIndex":
        ei(t, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ei(t, e, u);
        break;
      case "style":
        xs(t, u, n);
        return;
      case "data":
        if (l !== "object") {
          ei(t, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        u = ui(u), t.setAttribute(e, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (l !== "input" && Ct(t, l, "name", a.name, a, null), Ct(
            t,
            l,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Ct(
            t,
            l,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Ct(
            t,
            l,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Ct(t, l, "encType", a.encType, a, null), Ct(t, l, "method", a.method, a, null), Ct(t, l, "target", a.target, a, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        u = ui(u), t.setAttribute(e, u);
        break;
      case "onClick":
        u != null && (t.onclick = ze);
        return;
      case "onScroll":
        u != null && st("scroll", t);
        return;
      case "onScrollEnd":
        u != null && st("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(r(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(r(60));
            n?.__html !== e && (t.innerHTML = e);
          }
        }
        break;
      case "multiple":
        t.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        t.muted = u && typeof u != "function" && typeof u != "symbol";
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
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = ui(u), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
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
        u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, u) : t.removeAttribute(e);
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
        u && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        u === !0 ? t.setAttribute(e, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, u) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? t.setAttribute(e, u) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? t.removeAttribute(e) : t.setAttribute(e, u);
        break;
      case "popover":
        st("beforetoggle", t), st("toggle", t), li(t, "popover", u);
        break;
      case "xlinkActuate":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Be(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Be(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Be(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Be(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        li(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")
          e = $v.get(e) || e, li(t, e, u);
        else return;
    }
    Ot = !0;
  }
  function po(t, l, e, u, a, n) {
    switch (e) {
      case "style":
        xs(t, u, n);
        return;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(r(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(r(60));
            n?.__html !== e && (t.innerHTML = e);
          }
        }
        break;
      case "children":
        if (typeof u == "string") fa(t, u);
        else if (typeof u == "number" || typeof u == "bigint")
          fa(t, "" + u);
        else return;
        break;
      case "onScroll":
        u != null && st("scroll", t);
        return;
      case "onScrollEnd":
        u != null && st("scrollend", t);
        return;
      case "onClick":
        u != null && (t.onclick = ze);
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
        if (!ms.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (a = e.endsWith("Capture"), n = e.slice(2, a ? e.length - 7 : void 0), l = t[el] || null, l = l != null ? l[e] : null, typeof l == "function" && t.removeEventListener(n, l, a), typeof u == "function")) {
              typeof l != "function" && l !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(n, u, a);
              break t;
            }
            Ot = !0, e in t ? t[e] = u : u === !0 ? t.setAttribute(e, "") : li(t, e, u);
          }
        return;
    }
    Ot = !0;
  }
  function Tl(t, l, e) {
    switch (l) {
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
        st("error", t), st("load", t);
        var u = !1, a = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, l));
                default:
                  Ct(t, l, n, i, e, null);
              }
          }
        a && Ct(t, l, "srcSet", e.srcSet, e, null), u && Ct(t, l, "src", e.src, e, null);
        return;
      case "input":
        st("invalid", t);
        var c = n = i = a = null, f = null, m = null;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var S = e[u];
            if (S != null)
              switch (u) {
                case "name":
                  a = S;
                  break;
                case "type":
                  i = S;
                  break;
                case "checked":
                  f = S;
                  break;
                case "defaultChecked":
                  m = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(r(137, l));
                  break;
                default:
                  Ct(t, l, u, S, e, null);
              }
          }
        Ts(
          t,
          n,
          c,
          f,
          m,
          i,
          a,
          !1
        );
        return;
      case "select":
        st("invalid", t), u = i = n = null;
        for (a in e)
          if (e.hasOwnProperty(a) && (c = e[a], c != null))
            switch (a) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                u = c;
              default:
                Ct(t, l, a, c, e, null);
            }
        l = n, e = i, t.multiple = !!u, l != null ? ca(t, !!u, l, !1) : e != null && ca(t, !!u, e, !0);
        return;
      case "textarea":
        st("invalid", t), n = a = u = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                a = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                Ct(t, l, i, c, e, null);
            }
        zs(t, u, a, n);
        return;
      case "option":
        for (f in e)
          e.hasOwnProperty(f) && (u = e[f], u != null) && (f === "selected" ? t.selected = u && typeof u != "function" && typeof u != "symbol" : Ct(t, l, f, u, e, null));
        return;
      case "dialog":
        st("beforetoggle", t), st("toggle", t), st("cancel", t), st("close", t);
        break;
      case "iframe":
      case "object":
        st("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Hn.length; u++)
          st(Hn[u], t);
        break;
      case "image":
        st("error", t), st("load", t);
        break;
      case "details":
        st("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        st("error", t), st("load", t);
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
        for (m in e)
          if (e.hasOwnProperty(m) && (u = e[m], u != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, l));
              default:
                Ct(t, l, m, u, e, null);
            }
        return;
      default:
        if (pc(l)) {
          for (S in e)
            e.hasOwnProperty(S) && (u = e[S], u !== void 0 && po(
              t,
              l,
              S,
              u,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (u = e[c], u != null && Ct(t, l, c, u, e, null));
  }
  var Dy = {};
  function Cy(t, l, e, u) {
    switch (l) {
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
        var a = null, n = null, i = null, c = null, f = null, m = null, S = null;
        for (g in e) {
          var _ = e[g];
          if (e.hasOwnProperty(g) && _ != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = _;
              default:
                u.hasOwnProperty(g) || Ct(t, l, g, null, u, _);
            }
        }
        for (var d in u) {
          var g = u[d];
          if (_ = e[d], u.hasOwnProperty(d) && (g != null || _ != null))
            switch (d) {
              case "type":
                g !== _ && (Ot = !0), n = g;
                break;
              case "name":
                g !== _ && (Ot = !0), a = g;
                break;
              case "checked":
                g !== _ && (Ot = !0), m = g;
                break;
              case "defaultChecked":
                g !== _ && (Ot = !0), S = g;
                break;
              case "value":
                g !== _ && (Ot = !0), i = g;
                break;
              case "defaultValue":
                g !== _ && (Ot = !0), c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(r(137, l));
                break;
              default:
                g !== _ && Ct(
                  t,
                  l,
                  d,
                  g,
                  u,
                  _
                );
            }
        }
        Oc(
          t,
          i,
          c,
          f,
          m,
          S,
          n,
          a
        );
        return;
      case "select":
        g = i = c = d = null;
        for (n in e)
          if (f = e[n], e.hasOwnProperty(n) && f != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                u.hasOwnProperty(n) || Ct(
                  t,
                  l,
                  n,
                  null,
                  u,
                  f
                );
            }
        for (a in u)
          if (n = u[a], f = e[a], u.hasOwnProperty(a) && (n != null || f != null))
            switch (a) {
              case "value":
                n !== f && (Ot = !0), d = n;
                break;
              case "defaultValue":
                n !== f && (Ot = !0), c = n;
                break;
              case "multiple":
                n !== f && (Ot = !0), i = n;
              default:
                n !== f && Ct(
                  t,
                  l,
                  a,
                  n,
                  u,
                  f
                );
            }
        l = c, e = i, u = g, d != null ? ca(t, !!e, d, !1) : !!u != !!e && (l != null ? ca(t, !!e, l, !0) : ca(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        g = d = null;
        for (c in e)
          if (a = e[c], e.hasOwnProperty(c) && a != null && !u.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ct(t, l, c, null, u, a);
            }
        for (i in u)
          if (a = u[i], n = e[i], u.hasOwnProperty(i) && (a != null || n != null))
            switch (i) {
              case "value":
                a !== n && (Ot = !0), d = a;
                break;
              case "defaultValue":
                a !== n && (Ot = !0), g = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== n && Ct(t, l, i, a, u, n);
            }
        Es(t, d, g);
        return;
      case "option":
        for (var M in e)
          d = e[M], e.hasOwnProperty(M) && d != null && !u.hasOwnProperty(M) && (M === "selected" ? t.selected = !1 : Ct(
            t,
            l,
            M,
            null,
            u,
            d
          ));
        for (f in u)
          d = u[f], g = e[f], u.hasOwnProperty(f) && d !== g && (d != null || g != null) && (f === "selected" ? (d !== g && (Ot = !0), t.selected = d && typeof d != "function" && typeof d != "symbol") : Ct(
            t,
            l,
            f,
            d,
            u,
            g
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
        for (var q in e)
          d = e[q], e.hasOwnProperty(q) && d != null && !u.hasOwnProperty(q) && Ct(t, l, q, null, u, d);
        for (m in u)
          if (d = u[m], g = e[m], u.hasOwnProperty(m) && d !== g && (d != null || g != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (d != null)
                  throw Error(r(137, l));
                break;
              default:
                Ct(
                  t,
                  l,
                  m,
                  d,
                  u,
                  g
                );
            }
        return;
      default:
        if (pc(l)) {
          for (var et in e)
            d = e[et], e.hasOwnProperty(et) && d !== void 0 && !u.hasOwnProperty(et) && po(
              t,
              l,
              et,
              void 0,
              u,
              d
            );
          for (S in u)
            d = u[S], g = e[S], !u.hasOwnProperty(S) || d === g || d === void 0 && g === void 0 || po(
              t,
              l,
              S,
              d,
              u,
              g
            );
          return;
        }
    }
    for (var v in e)
      d = e[v], e.hasOwnProperty(v) && d != null && !u.hasOwnProperty(v) && Ct(t, l, v, null, u, d);
    for (_ in u)
      d = u[_], g = e[_], !u.hasOwnProperty(_) || d === g || d == null && g == null || Ct(t, l, _, d, u, g);
  }
  function Dd(t) {
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
  function Ry() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), u = 0; u < e.length; u++) {
        var a = e[u], n = a.transferSize, i = a.initiatorType, c = a.duration;
        if (n && c && Dd(i)) {
          for (i = 0, c = a.responseEnd, u += 1; u < e.length; u++) {
            var f = e[u], m = f.startTime;
            if (m > c) break;
            var S = f.transferSize, _ = f.initiatorType;
            S && Dd(_) && (f = f.responseEnd, i += S * (f < c ? 1 : (c - m) / (f - m)));
          }
          if (--u, l += 8 * (n + i) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Ao = null, Mo = null;
  function Bn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Cd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Rd(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Ud(t, l, e, u) {
    return e = Bn(
      e
    ).createElement(t), e[Qt] = u, e[el] = l, Tl(e, t, l), rl(e), e;
  }
  function Do(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Co = null;
  function Uy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Co ? !1 : (Co = t, !0) : (Co = null, !1);
  }
  var Ro = typeof setTimeout == "function" ? setTimeout : void 0, Hy = typeof clearTimeout == "function" ? clearTimeout : void 0, Hd = typeof Promise == "function" ? Promise : void 0, jd = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Ro, jy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hd < "u" ? function(t) {
    return Hd.resolve(null).then(t).catch(By);
  } : Ro;
  function By(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Tu(t) {
    return t === "head";
  }
  function Bd(t, l) {
    var e = l, u = 0;
    do {
      var a = e.nextSibling;
      if (t.removeChild(e), a && a.nodeType === 8)
        if (e = a.data, e === "/$" || e === "/&") {
          if (u === 0) {
            t.removeChild(a), Ka(l);
            return;
          }
          u--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          u++;
        else if (e === "html")
          Xo(
            t.ownerDocument.documentElement
          );
        else if (e === "head") {
          e = t.ownerDocument.head, Xo(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Pa] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && Xo(t.ownerDocument.body);
      e = a;
    } while (e);
    Ka(l);
  }
  function qd(t, l) {
    var e = t;
    t = 0;
    do {
      var u = e.nextSibling;
      if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), u && u.nodeType === 8)
        if (e = u.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
      e = u;
    } while (e);
  }
  function Yd(t, l, e) {
    if (l = CSS.escape(l) !== l ? "r-" + btoa(l).replace(/=/g, "") : l, t.style.viewTransitionName = l, e != null && (t.style.viewTransitionClass = e), e = getComputedStyle(t), e.display === "inline") {
      if (l = t.getClientRects(), l.length === 1) var u = 1;
      else
        for (var a = u = 0; a < l.length; a++) {
          var n = l[a];
          0 < n.width && 0 < n.height && u++;
        }
      u === 1 && (t = t.style, t.display = l.length === 1 ? "inline-block" : "block", t.marginTop = "-" + e.paddingTop, t.marginBottom = "-" + e.paddingBottom);
    }
  }
  function Gd(t, l) {
    t = t.style, l = l.style;
    var e = l != null ? l.hasOwnProperty("viewTransitionName") ? l.viewTransitionName : l.hasOwnProperty("view-transition-name") ? l["view-transition-name"] : null : null;
    t.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = l != null ? l.hasOwnProperty("viewTransitionClass") ? l.viewTransitionClass : l.hasOwnProperty("view-transition-class") ? l["view-transition-class"] : null : null, t.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), t.display === "inline-block" && (l == null ? t.display = t.margin = "" : (e = l.display, t.display = e == null || typeof e == "boolean" ? "" : e, e = l.margin, e != null ? t.margin = e : (e = l.hasOwnProperty("marginTop") ? l.marginTop : l["margin-top"], t.marginTop = e == null || typeof e == "boolean" ? "" : e, l = l.hasOwnProperty("marginBottom") ? l.marginBottom : l["margin-bottom"], t.marginBottom = l == null || typeof l == "boolean" ? "" : l)));
  }
  function qy(t, l, e) {
    return e = e.ownerDocument.defaultView, {
      rect: t,
      abs: l.position === "absolute" || l.position === "fixed",
      clip: l.clipPath !== "none" || l.overflow !== "visible" || l.filter !== "none" || l.mask !== "none" || l.mask !== "none" || l.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= e.innerHeight && t.left <= e.innerWidth
    };
  }
  function Uo(t) {
    var l = t.getBoundingClientRect(), e = getComputedStyle(t);
    return qy(l, e, t);
  }
  function Yy(t) {
    return t.documentElement.clientHeight;
  }
  function Gy(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Xy(t, l, e, u, a, n, i, c, f) {
    var m = l.nodeType === 9 ? l : l.ownerDocument;
    try {
      var S = m.startViewTransition({
        update: function() {
          var d = m.defaultView, g = d.navigation && d.navigation.transition, M = m.fonts.status;
          u();
          var q = [];
          if (M === "loaded" && (Yy(m), m.fonts.status === "loading" && q.push(m.fonts.ready)), M = q.length, t !== null)
            for (var et = t.suspenseyImages, v = 0, o = 0; o < et.length; o++) {
              var h = et[o];
              if (!h.complete) {
                var z = h.getBoundingClientRect();
                if (0 < z.bottom && 0 < z.right && z.top < d.innerHeight && z.left < d.innerWidth) {
                  if (v += iv(h), v > dc) {
                    q.length = M;
                    break;
                  }
                  h = new Promise(
                    Gy.bind(h)
                  ), q.push(h);
                }
              }
            }
          if (0 < q.length)
            return d = Promise.race([
              Promise.all(q),
              new Promise(function(U) {
                return setTimeout(U, 500);
              })
            ]).then(a, a), (g ? Promise.allSettled([g.finished, d]) : d).then(n, n);
          if (a(), g)
            return g.finished.then(
              n,
              n
            );
          n();
        },
        types: e
      });
      m.__reactViewTransition = S;
      var _ = [];
      return S.ready.then(
        function() {
          for (var d = m.documentElement.getAnimations({
            subtree: !0
          }), g = 0; g < d.length; g++) {
            var M = d[g], q = M.effect, et = q.pseudoElement;
            if (et != null && et.startsWith("::view-transition")) {
              _.push(M), M = q.getKeyframes();
              for (var v = et = void 0, o = !0, h = 0; h < M.length; h++) {
                var z = M[h], U = z.width;
                if (et === void 0) et = U;
                else if (et !== U) {
                  o = !1;
                  break;
                }
                if (U = z.height, v === void 0) v = U;
                else if (v !== U) {
                  o = !1;
                  break;
                }
                delete z.width, delete z.height, z.transform === "none" && delete z.transform;
              }
              o && et !== void 0 && v !== void 0 && (q.setKeyframes(M), o = getComputedStyle(
                q.target,
                q.pseudoElement
              ), o.width !== et || o.height !== v) && (o = M[0], o.width = et, o.height = v, o = M[M.length - 1], o.width = et, o.height = v, q.setKeyframes(M));
            }
          }
          i();
        },
        function(d) {
          m.__reactViewTransition === S && (m.__reactViewTransition = null);
          try {
            typeof d == "object" && d !== null && d.name === "InvalidStateError" && (d.message === "View transition was skipped because document visibility state is hidden." || d.message === "Skipping view transition because document visibility state has become hidden." || d.message === "Skipping view transition because viewport size changed." || d.message === "Transition was aborted because of invalid state") && (d = null), d !== null && f(d);
          } finally {
            u(), a(), i();
          }
        }
      ), S.finished.finally(function() {
        for (var d = 0; d < _.length; d++)
          _[d].cancel();
        m.__reactViewTransition === S && (m.__reactViewTransition = null), c();
      }), S;
    } catch {
      return u(), a(), i(), null;
    }
  }
  function Pu(t, l) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + l + ")";
  }
  Pu.prototype.animate = function(t, l) {
    return l = typeof l == "number" ? { duration: l } : P({}, l), l.pseudoElement = this._selector, this._scope.animate(t, l);
  }, Pu.prototype.getAnimations = function() {
    for (var t = this._scope, l = this._selector, e = t.getAnimations({ subtree: !0 }), u = [], a = 0; a < e.length; a++) {
      var n = e[a].effect;
      n !== null && n.target === t && n.pseudoElement === l && u.push(e[a]);
    }
    return u;
  }, Pu.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Xd(t) {
    return {
      name: t,
      group: new Pu("group", t),
      imagePair: new Pu("image-pair", t),
      old: new Pu("old", t),
      new: new Pu("new", t)
    };
  }
  function Wl(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Wl.prototype.addEventListener = function(t, l, e) {
    var u = null, a = null;
    if (!(e != null && typeof e != "boolean" && (u = e.signal || null, u !== null && u.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (Zd(n, t, l, e) === -1) {
        var i = this, c = l;
        e != null && typeof e != "boolean" && e.once === !0 && (c = function(f) {
          i.removeEventListener(
            t,
            l,
            e
          ), typeof l == "function" ? l.call(this, f) : l.handleEvent(f);
        }), u !== null && (a = i.removeEventListener.bind(
          i,
          t,
          l,
          e
        ), u.addEventListener("abort", a, { once: !0 }), a = u.removeEventListener.bind(u, "abort", a)), u = Ga(e), n.push({
          type: t,
          listener: l,
          optionsOrUseCapture: e,
          attachedListener: c,
          cleanup: a
        }), E(
          this._fragmentFiber.child,
          !1,
          Qy,
          t,
          c,
          u
        );
      }
      this._eventListeners = n;
    }
  };
  function Qy(t, l, e, u) {
    return Et(t).addEventListener(
      l,
      e,
      u
    ), !1;
  }
  Wl.prototype.removeEventListener = function(t, l, e) {
    var u = this._eventListeners;
    if (u !== null && (l = Zd(
      u,
      t,
      l,
      e
    ), l !== -1)) {
      var a = u[l];
      e = a.attachedListener;
      var n = a.cleanup;
      a = Ga(a.optionsOrUseCapture), E(
        this._fragmentFiber.child,
        !1,
        Zy,
        t,
        e,
        a
      ), u.splice(l, 1), n !== null && n();
    }
  };
  function Zy(t, l, e, u) {
    return Et(t).removeEventListener(
      l,
      e,
      u
    ), !1;
  }
  function Ga(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Qd(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Zd(t, l, e, u) {
    if (t.length === 0) return -1;
    u = Qd(u);
    for (var a = 0; a < t.length; a++) {
      var n = t[a];
      if (n.type === l && n.listener === e && Qd(n.optionsOrUseCapture) === u)
        return a;
    }
    return -1;
  }
  Wl.prototype.dispatchEvent = function(t) {
    var l = Y(
      this._fragmentFiber
    );
    if (l === null) return !0;
    l = Et(l);
    var e = this._eventListeners;
    if (e !== null && 0 < e.length || !t.bubbles) {
      var u = l.nodeType === 9 ? l.createComment("") : document.createTextNode("");
      if (e)
        for (var a = 0; a < e.length; a++) {
          var n = e[a];
          u.addEventListener(
            n.type,
            n.attachedListener,
            Ga(n.optionsOrUseCapture)
          );
        }
      if (l.appendChild(u), t = u.dispatchEvent(t), e)
        for (a = 0; a < e.length; a++)
          n = e[a], u.removeEventListener(
            n.type,
            n.attachedListener,
            Ga(n.optionsOrUseCapture)
          );
      return l.removeChild(u), t;
    }
    return l.dispatchEvent(t);
  }, Wl.prototype.focus = function(t) {
    E(
      this._fragmentFiber.child,
      !0,
      Ld,
      t,
      void 0,
      void 0
    );
  };
  function Ld(t, l) {
    return t.tag === 6 ? !1 : (t = Et(t), th(t, l));
  }
  Wl.prototype.focusLast = function(t) {
    var l = [];
    E(
      this._fragmentFiber.child,
      !0,
      Ho,
      l,
      void 0,
      void 0
    );
    for (var e = l.length - 1; 0 <= e && !Ld(l[e], t); e--) ;
  };
  function Ho(t, l) {
    return l.push(t), !1;
  }
  Wl.prototype.blur = function() {
    var t = Y(
      this._fragmentFiber
    );
    t !== null && (t = Et(t), t = Bn(t).activeElement, t !== null && E(
      this._fragmentFiber.child,
      !1,
      Ly,
      t,
      void 0,
      void 0
    ));
  };
  function Ly(t, l) {
    return t.tag === 6 ? !1 : (t = Et(t), t === l || t.contains(l) ? (l.blur(), !0) : !1);
  }
  Wl.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), E(
      this._fragmentFiber.child,
      !1,
      Vy,
      t,
      void 0,
      void 0
    );
  };
  function Vy(t, l) {
    return t.tag === 6 || (t = Et(t), l.observe(t)), !1;
  }
  Wl.prototype.unobserveUsing = function(t) {
    var l = this._observers;
    if (l !== null && l.has(t)) {
      l.delete(t), E(
        this._fragmentFiber.child,
        !1,
        Ky,
        t,
        void 0,
        void 0
      );
      for (var e = l = 0; e < ge.length; e++) {
        var u = ge[e];
        u.fragmentInstance === this && u.observer === t ? t.unobserve(u.instance) : ge[l++] = u;
      }
      ge.length = l;
    }
  };
  function Ky(t, l) {
    return t.tag === 6 || (t = Et(t), l.unobserve(t)), !1;
  }
  var ge = [], jo = !1;
  function wy(t, l, e) {
    ge.push({
      fragmentInstance: t,
      observer: l,
      instance: e
    }), jo || (jo = !0, lh(function() {
      jo = !1;
      var u = ge;
      ge = [];
      for (var a = 0; a < u.length; a++) {
        var n = u[a];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  Wl.prototype.getClientRects = function() {
    var t = [];
    return E(
      this._fragmentFiber.child,
      !1,
      Jy,
      t,
      void 0,
      void 0
    ), t;
  };
  function Jy(t, l) {
    if (t.tag === 6) {
      t = t.stateNode;
      var e = t.ownerDocument.createRange();
      e.selectNodeContents(t), l.push.apply(l, e.getClientRects());
    } else
      t = Et(t), l.push.apply(l, t.getClientRects());
    return !1;
  }
  Wl.prototype.getRootNode = function(t) {
    var l = Y(
      this._fragmentFiber
    );
    return l === null ? this : Et(l).getRootNode(t);
  }, Wl.prototype.compareDocumentPosition = function(t) {
    var l = Y(
      this._fragmentFiber
    );
    if (l === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var e = [];
    E(
      this._fragmentFiber.child,
      !1,
      Ho,
      e,
      void 0,
      void 0
    );
    var u = Et(l);
    if (e.length === 0) {
      if (e = u, Rt(this._fragmentFiber)) {
        t: {
          for (l = this._fragmentFiber.return; l !== null; ) {
            if (l.tag === 4) {
              l = l.stateNode.containerInfo;
              break t;
            }
            if (l.tag === 3 || l.tag === 5 || l.tag === 27)
              break;
            l = l.return;
          }
          l = null;
        }
        l != null && (e = l);
      }
      l = this._fragmentFiber;
      var a = u = e.compareDocumentPosition(t);
      return e === t ? a = Node.DOCUMENT_POSITION_CONTAINS : u & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = wt(l)[1], e === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (t = Et(e).compareDocumentPosition(
        t
      ), a = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    l = Et(e[0]), a = Et(e[e.length - 1]);
    var n = Rt(this._fragmentFiber) ? l.parentElement : u;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    u = n.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var i = l.compareDocumentPosition(t), c = a.compareDocumentPosition(t), f = i & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = u && n && i & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, l = u && l === t || n && a === t || f || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !u && l === t || !n && a === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : i, l & Node.DOCUMENT_POSITION_DISCONNECTED || l & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || $y(
      l,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      t
    ) ? l : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function $y(t, l, e, u, a) {
    var n = Ru(a);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (e = !!n)
        t: {
          for (; n !== null; ) {
            if (n.tag === 7 && (n === l || n.alternate === l)) {
              e = !0;
              break t;
            }
            n = n.return;
          }
          e = !1;
        }
      return e;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null)
        return n = a.ownerDocument, a === n || a === n.documentElement || a === n.body;
      t: {
        for (n = l, l = Y(l); n !== null; ) {
          if (!(n.tag !== 5 && n.tag !== 3 && n.tag !== 27 || n !== l && n.alternate !== l)) {
            n = !0;
            break t;
          }
          n = n.return;
        }
        n = !1;
      }
      return n;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((l = !!n) && !(l = n === e) && (l = Ut(
      e,
      n,
      zl
    ), l === null ? l = !1 : (E(
      l,
      !0,
      yl,
      n,
      e
    ), n = Ft, Ft = null, l = n !== null)), l) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((l = !!n) && !(l = n === u) && (l = Ut(
      u,
      n,
      zl
    ), l === null ? l = !1 : (E(
      l,
      !0,
      zt,
      n,
      u
    ), n = Ft, ol = Ft = null, l = n !== null)), l) : !1;
  }
  function Vd(t, l) {
    var e = t.ownerDocument.createRange();
    e.selectNodeContents(t), t = e.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      l ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Wl.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var l = [];
    E(
      this._fragmentFiber.child,
      !1,
      Ho,
      l,
      void 0,
      void 0
    );
    var e = t !== !1;
    if (l.length === 0) {
      var u = wt(
        this._fragmentFiber
      );
      if (u = e ? u[1] || u[0] || Y(this._fragmentFiber) : u[0] || u[1], u === null) return;
      if (u.tag === 6) {
        t = Et(u), Vd(t, e);
        return;
      }
      if (u = Et(u), u.nodeType !== 9) {
        if (u.nodeType === 11) {
          e = "host" in u ? u.host : null, e !== null && e.scrollIntoView(t);
          return;
        }
        u.scrollIntoView(t);
      }
    }
    for (u = e ? l.length - 1 : 0; u !== (e ? -1 : l.length); ) {
      var a = l[u];
      a.tag === 6 ? (a = Et(a), Vd(a, e)) : Et(a).scrollIntoView(t), u += e ? -1 : 1;
    }
  };
  function ky(t, l) {
    return t = Et(t), Kd(t, l), !1;
  }
  function Kd(t, l) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(l);
  }
  function wd(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var u = 0; u < e.length; u++) {
        var a = e[u];
        t.addEventListener(
          a.type,
          a.attachedListener,
          Ga(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(n) {
      for (var i = 0, c = 0; c < ge.length; c++) {
        var f = ge[c];
        (f.fragmentInstance !== l || f.observer !== n || f.instance !== t) && (ge[i++] = f);
      }
      ge.length = i, n.observe(t);
    }), Kd(t, l));
  }
  function Fy(t, l) {
    var e = l._eventListeners;
    if (e !== null)
      for (var u = 0; u < e.length; u++) {
        var a = e[u];
        t.removeEventListener(
          a.type,
          a.attachedListener,
          Ga(a.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (e = l._observers, e !== null && e.forEach(function(n) {
      typeof n.rootMargin == "string" ? wy(
        l,
        n,
        t
      ) : n.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(l));
  }
  function Bo(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bo(e), ti(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function Wy(t, l, e, u) {
    for (; t.nodeType === 1; ) {
      var a = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!u && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (u) {
        if (!t[Pa])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (n !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === n)
          return t;
      } else return t;
      if (t = fe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Iy(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = fe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Jd(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = fe(t.nextSibling), t === null)) return null;
    return t;
  }
  function qo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Yo(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Py(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading")
      l();
    else {
      var u = function() {
        l(), e.removeEventListener("DOMContentLoaded", u);
      };
      e.addEventListener("DOMContentLoaded", u), t._reactRetry = u;
    }
  }
  function fe(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F")
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var Go = null;
  function $d(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0)
            return fe(t.nextSibling);
          l--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function kd(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else e !== "/$" && e !== "/&" || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function th(t, l) {
    function e() {
      u = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var u = !1;
    try {
      t.ownerDocument.addEventListener("focus", e, !0), (t.focus || HTMLElement.prototype.focus).call(t, l);
    } finally {
      t.ownerDocument.removeEventListener("focus", e, !0);
    }
    return u;
  }
  function lh(t) {
    jd(function() {
      jd(function(l) {
        return t(l);
      });
    });
  }
  function Fd(t, l, e) {
    switch (l = Bn(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Wd(t, l, e) {
    for (var u in e) {
      var a = e[u];
      e.hasOwnProperty(u) && a != null && Ct(t, l, u, null, Dy, a);
    }
    e.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === ze && (t.onclick = null), ti(t);
  }
  function Xo(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    ti(t);
  }
  var oe = /* @__PURE__ */ new Map(), Id = /* @__PURE__ */ new Set();
  function qn(t) {
    if (typeof t.getRootNode == "function") {
      var l = t.getRootNode();
      if (l.nodeType === 9 || l.nodeType === 11) return l;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ke = J.d;
  J.d = {
    f: eh,
    r: uh,
    D: ah,
    C: nh,
    L: ih,
    m: ch,
    X: oh,
    S: fh,
    M: sh
  };
  function eh() {
    var t = ke.f(), l = uc();
    return t || l;
  }
  function uh(t) {
    var l = aa(t);
    l !== null && l.tag === 5 && l.type === "form" ? t0(l) : ke.r(t);
  }
  var Xa = typeof document > "u" ? null : document;
  function Pd(t, l, e) {
    var u = Xa;
    if (u && typeof l == "string" && l) {
      var a = le(l);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof e == "string" && (a += '[crossorigin="' + e + '"]'), Id.has(a) || (Id.add(a), t = { rel: t, crossOrigin: e, href: l }, u.querySelector(a) === null && (l = u.createElement("link"), Tl(l, "link", t), rl(l), u.head.appendChild(l)));
    }
  }
  function ah(t) {
    ke.D(t), Pd("dns-prefetch", t, null);
  }
  function nh(t, l) {
    ke.C(t, l), Pd("preconnect", t, l);
  }
  function ih(t, l, e) {
    ke.L(t, l, e);
    var u = Xa;
    if (u && t && l) {
      var a = 'link[rel="preload"][as="' + le(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (a += '[imagesrcset="' + le(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (a += '[imagesizes="' + le(
        e.imageSizes
      ) + '"]')) : a += '[href="' + le(t) + '"]';
      var n = a;
      switch (l) {
        case "style":
          n = Qa(t);
          break;
        case "script":
          n = Za(t);
      }
      if (!(oe.has(n) || (t = P(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), oe.set(n, t), u.querySelector(a) !== null || l === "style" && u.querySelector(Yn(n)) || l === "script" && u.querySelector(Gn(n))))) {
        var i = u.createElement("link");
        Tl(i, "link", t), l === "style" && (i[Pn] = !0, i.onload = i.onerror = function() {
          ds(i);
        }), rl(i), u.head.appendChild(i);
      }
    }
  }
  function ch(t, l) {
    ke.m(t, l);
    var e = Xa;
    if (e && t) {
      var u = l && typeof l.as == "string" ? l.as : "script", a = 'link[rel="modulepreload"][as="' + le(u) + '"][href="' + le(t) + '"]', n = a;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Za(t);
      }
      if (!oe.has(n) && (t = P({ rel: "modulepreload", href: t }, l), oe.set(n, t), e.querySelector(a) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Gn(n)))
              return;
        }
        u = e.createElement("link"), Tl(u, "link", t), rl(u), e.head.appendChild(u);
      }
    }
  }
  function fh(t, l, e) {
    ke.S(t, l, e);
    var u = Xa;
    if (u && t) {
      var a = na(u).hoistableStyles, n = Qa(t);
      l = l || "default";
      var i = a.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = u.querySelector(
          Yn(n)
        ))
          c.loading = 5;
        else {
          t = P(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = oe.get(n)) && Qo(t, e);
          var f = i = u.createElement("link");
          rl(f), Tl(f, "link", t), f._p = new Promise(function(m, S) {
            f.onload = m, f.onerror = S;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, sc(i, l, u);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, a.set(n, i);
      }
    }
  }
  function oh(t, l) {
    ke.X(t, l);
    var e = Xa;
    if (e && t) {
      var u = na(e).hoistableScripts, a = Za(t), n = u.get(a);
      n || (n = e.querySelector(Gn(a)), n || (t = P({ src: t, async: !0 }, l), (l = oe.get(a)) && Zo(t, l), n = e.createElement("script"), rl(n), Tl(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function sh(t, l) {
    ke.M(t, l);
    var e = Xa;
    if (e && t) {
      var u = na(e).hoistableScripts, a = Za(t), n = u.get(a);
      n || (n = e.querySelector(Gn(a)), n || (t = P({ src: t, async: !0, type: "module" }, l), (l = oe.get(a)) && Zo(t, l), n = e.createElement("script"), rl(n), Tl(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function tv(t, l, e, u) {
    var a = (a = _l.current) ? qn(a) : null;
    if (!a) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (e = Qa(e.href), l = na(
          a
        ).hoistableStyles, u = l.get(e), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = Qa(e.href);
          var n = na(
            a
          ).hoistableStyles, i = n.get(t);
          if (i || (a = a.ownerDocument || a, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, i), (n = a.querySelector(
            Yn(t)
          )) ? n._p || (i.instance = n, i.state.loading = 5) : (n = oe.get(t), n || (n = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, oe.set(t, n)), rh(
            a,
            t,
            n,
            i.state
          ))), l && u === null)
            throw Error(r(528, ""));
          return i;
        }
        if (l && u !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (e = Za(e), l = na(
          a
        ).hoistableScripts, u = l.get(e), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function Qa(t) {
    return 'href="' + le(t) + '"';
  }
  function Yn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function lv(t) {
    return P({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function rh(t, l, e, u) {
    if (l = t.querySelector(
      'link[rel="preload"][as="style"][' + l + "]"
    )) {
      if (l[Pn] !== !0) {
        u.loading = 1;
        return;
      }
    } else
      l = t.createElement("link"), l[Pn] = !0, l.onload = l.onerror = ds.bind(null, l), Tl(l, "link", e), rl(l), t.head.appendChild(l);
    u.preload = l, l.addEventListener("load", function() {
      return u.loading |= 1;
    }), l.addEventListener("error", function() {
      return u.loading |= 2;
    });
  }
  function Za(t) {
    return '[src="' + le(t) + '"]';
  }
  function Gn(t) {
    return "script[async]" + t;
  }
  function ev(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var u = t.querySelector(
            'style[data-href~="' + le(e.href) + '"]'
          );
          if (u)
            return l.instance = u, rl(u), u;
          var a = P({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return u = (t.ownerDocument || t).createElement(
            "style"
          ), rl(u), Tl(u, "style", a), sc(u, e.precedence, t), l.instance = u;
        case "stylesheet":
          a = Qa(e.href);
          var n = t.querySelector(
            Yn(a)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, rl(n), n;
          u = lv(e), (a = oe.get(a)) && Qo(u, a), n = (t.ownerDocument || t).createElement("link"), rl(n);
          var i = n;
          return i._p = new Promise(function(c, f) {
            i.onload = c, i.onerror = f;
          }), Tl(n, "link", u), l.state.loading |= 4, sc(n, e.precedence, t), l.instance = n;
        case "script":
          return n = Za(e.src), (a = t.querySelector(
            Gn(n)
          )) ? (l.instance = a, rl(a), a) : (u = e, (a = oe.get(n)) && (u = P({}, e), Zo(u, a)), t = t.ownerDocument || t, a = t.createElement("script"), rl(a), Tl(a, "link", u), t.head.appendChild(a), l.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (u = l.instance, l.state.loading |= 4, sc(u, e.precedence, t));
    return l.instance;
  }
  function sc(t, l, e) {
    for (var u = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = u.length ? u[u.length - 1] : null, n = a, i = 0; i < u.length; i++) {
      var c = u[i];
      if (c.dataset.precedence === l) n = c;
      else if (n !== a) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function Qo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function Zo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var rc = null;
  function uv(t, l, e) {
    if (rc === null) {
      var u = /* @__PURE__ */ new Map(), a = rc = /* @__PURE__ */ new Map();
      a.set(e, u);
    } else
      a = rc, u = a.get(e), u || (u = /* @__PURE__ */ new Map(), a.set(e, u));
    if (u.has(t)) return u;
    for (u.set(t, null), e = e.getElementsByTagName(t), a = 0; a < e.length; a++) {
      var n = e[a];
      if (!(n[Pa] || n[Qt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var c = u.get(i);
        c ? c.push(n) : u.set(i, [n]);
      }
    }
    return u;
  }
  function Lo(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function dh(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        return l.rel === "stylesheet" ? (t = l.disabled, typeof l.precedence == "string" && t == null) : !0;
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function av(t, l) {
    return t === "img" && l.src != null && l.src !== "" && l.onLoad == null && l.loading !== "lazy";
  }
  function nv(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function iv(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function cv(t, l) {
    typeof l.decode == "function" && (t.imgCount++, l.complete || (t.imgBytes += iv(l), t.suspenseyImages.push(l)), t = yh.bind(t), l.decode().then(t, t));
  }
  function vh(t, l, e, u) {
    if (e.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var a = Qa(u.href), n = l.querySelector(
          Yn(a)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Xn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, rl(n);
          return;
        }
        n = l.ownerDocument || l, u = lv(u), (a = oe.get(a)) && Qo(u, a), n = n.createElement("link"), rl(n);
        var i = n;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Tl(n, "link", u), e.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = Xn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var dc = 0;
  function mh(t, l) {
    return t.stylesheets && t.count === 0 && mc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var u = setTimeout(function() {
        if (t.stylesheets && mc(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && dc === 0 && (dc = 62500 * Ry());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && mc(t, t.stylesheets), t.unsuspend)) {
            var n = t.unsuspend;
            t.unsuspend = null, n();
          }
        },
        (t.imgBytes > dc ? 50 : 800) + l
      );
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(u), clearTimeout(a);
      };
    } : null;
  }
  function fv(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) mc(t, t.stylesheets);
      else if (t.unsuspend) {
        var l = t.unsuspend;
        t.unsuspend = null, l();
      }
    }
  }
  function Xn() {
    this.count--, fv(this);
  }
  function yh() {
    this.imgCount--, fv(this);
  }
  var vc = null;
  function mc(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, vc = /* @__PURE__ */ new Map(), l.forEach(hh, t), vc = null, Xn.call(t));
  }
  function hh(t, l) {
    if (!(l.state.loading & 4)) {
      var e = vc.get(t);
      if (e) var u = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), vc.set(t, e);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < a.length; n++) {
          var i = a[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), u = i);
        }
        u && e.set(null, u);
      }
      a = l.instance, i = a.getAttribute("data-precedence"), n = e.get(i) || u, n === u && e.set(null, a), e.set(i, a), this.count++, u = Xn.bind(this), a.addEventListener("load", u), a.addEventListener("error", u), n ? n.parentNode.insertBefore(a, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), l.state.loading |= 4;
    }
  }
  var La = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: Il,
    _currentValue2: Il,
    _threadCount: 0
  };
  function gh(t, l, e, u, a, n, i, c, f) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = b(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = b(0), this.hiddenUpdates = b(null), this.identifierPrefix = u, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ov(t, l, e, u, a, n, i, c, f, m, S, _) {
    return t = new gh(
      t,
      l,
      e,
      i,
      f,
      m,
      S,
      _,
      c
    ), l = 1, n === !0 && (l |= 24), n = Bl(3, null, null, l), t.current = n, n.stateNode = t, l = ef(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: e,
      cache: l
    }, cf(n), t;
  }
  function sv(t) {
    return t ? (t = ya, t) : ya;
  }
  function rv(t, l, e, u, a, n) {
    a = sv(a), u.context === null ? u.context = a : u.pendingContext = a, u = fu(l), u.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (u.callback = n), e = ou(t, u, l), e !== null && (Xl(e, t, l), gn(e, t, l));
  }
  function dv(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Vo(t, l) {
    dv(t, l), (t = t.alternate) && dv(t, l);
  }
  function vv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Bu(t, 67108864);
      l !== null && Xl(l, t, 67108864), Vo(t, 67108864);
    }
  }
  function mv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Fl();
      l = qt(l);
      var e = Bu(t, l);
      e !== null && Xl(e, t, l), Vo(t, l);
    }
  }
  var Va = !0;
  function bh(t, l, e, u) {
    var a = j.T;
    j.T = null;
    var n = J.p;
    try {
      J.p = 2, Ko(t, l, e, u);
    } finally {
      J.p = n, j.T = a;
    }
  }
  function Sh(t, l, e, u) {
    var a = j.T;
    j.T = null;
    var n = J.p;
    try {
      J.p = 8, Ko(t, l, e, u);
    } finally {
      J.p = n, j.T = a;
    }
  }
  function Ko(t, l, e, u) {
    if (Va) {
      var a = wo(u);
      if (a === null)
        No(
          t,
          l,
          u,
          yc,
          e
        ), hv(t, u);
      else if (Eh(
        a,
        t,
        l,
        e,
        u
      ))
        u.stopPropagation();
      else if (hv(t, u), l & 4 && -1 < Th.indexOf(t)) {
        for (; a !== null; ) {
          var n = aa(a);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = re(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << 31 - Al(i);
                      c.entanglements[1] |= f, i &= ~f;
                    }
                    Re(n), (Nt & 6) === 0 && (tc = Nl() + 500, Un(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Bu(n, 2), c !== null && Xl(c, n, 2), uc(), Vo(n, 2);
            }
          if (n = wo(u), n === null && No(
            t,
            l,
            u,
            yc,
            e
          ), n === a) break;
          a = n;
        }
        a !== null && u.stopPropagation();
      } else
        No(
          t,
          l,
          u,
          null,
          e
        );
    }
  }
  function wo(t) {
    return t = Mc(t), Jo(t);
  }
  var yc = null;
  function Jo(t) {
    if (yc = null, t = Ru(t), t !== null) {
      var l = V(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = Tt(l), t !== null) return t;
          t = null;
        } else if (e === 31) {
          if (t = at(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return yc = t, null;
  }
  function yv(t) {
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
        switch ($n()) {
          case ea:
            return 2;
          case kn:
            return 8;
          case Au:
          case Wa:
            return 32;
          case Fn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $o = !1, Eu = null, zu = null, _u = null, Qn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), xu = [], Th = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function hv(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Eu = null;
        break;
      case "dragenter":
      case "dragleave":
        zu = null;
        break;
      case "mouseover":
      case "mouseout":
        _u = null;
        break;
      case "pointerover":
      case "pointerout":
        Qn.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zn.delete(l.pointerId);
    }
  }
  function Ln(t, l, e, u, a, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [a]
    }, l !== null && (l = aa(l), l !== null && vv(l)), t) : (t.eventSystemFlags |= u, l = t.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), t);
  }
  function Eh(t, l, e, u, a) {
    switch (l) {
      case "focusin":
        return Eu = Ln(
          Eu,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "dragenter":
        return zu = Ln(
          zu,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "mouseover":
        return _u = Ln(
          _u,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "pointerover":
        var n = a.pointerId;
        return Qn.set(
          n,
          Ln(
            Qn.get(n) || null,
            t,
            l,
            e,
            u,
            a
          )
        ), !0;
      case "gotpointercapture":
        return n = a.pointerId, Zn.set(
          n,
          Ln(
            Zn.get(n) || null,
            t,
            l,
            e,
            u,
            a
          )
        ), !0;
    }
    return !1;
  }
  function gv(t) {
    var l = Ru(t.target);
    if (l !== null) {
      var e = V(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = Tt(e), l !== null) {
            t.blockedOn = l, Vt(t.priority, function() {
              mv(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = at(e), l !== null) {
            t.blockedOn = l, Vt(t.priority, function() {
              mv(e);
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function hc(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = wo(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var u = new e.constructor(
          e.type,
          e
        );
        Ac = u, e.target.dispatchEvent(u), Ac = null;
      } else
        return l = aa(e), l !== null && vv(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function bv(t, l, e) {
    hc(t) && e.delete(l);
  }
  function zh() {
    $o = !1, Eu !== null && hc(Eu) && (Eu = null), zu !== null && hc(zu) && (zu = null), _u !== null && hc(_u) && (_u = null), Qn.forEach(bv), Zn.forEach(bv);
  }
  function gc(t, l) {
    t.blockedOn === l && (t.blockedOn = null, $o || ($o = !0, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      zh
    )));
  }
  var bc = null;
  function Sv(t) {
    bc !== t && (bc = t, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      function() {
        bc === t && (bc = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], u = t[l + 1], a = t[l + 2];
          if (typeof u != "function") {
            if (Jo(u || e) === null)
              continue;
            break;
          }
          var n = aa(e);
          n !== null && (t.splice(l, 3), l -= 3, Af(
            n,
            {
              pending: !0,
              data: a,
              method: e.method,
              action: u
            },
            u,
            a
          ));
        }
      }
    ));
  }
  function Ka(t) {
    function l(f) {
      return gc(f, t);
    }
    Eu !== null && gc(Eu, t), zu !== null && gc(zu, t), _u !== null && gc(_u, t), Qn.forEach(l), Zn.forEach(l);
    for (var e = 0; e < xu.length; e++) {
      var u = xu[e];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < xu.length && (e = xu[0], e.blockedOn === null); )
      gv(e), e.blockedOn === null && xu.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (u = 0; u < e.length; u += 3) {
        var a = e[u], n = e[u + 1], i = a[el] || null;
        if (typeof n == "function")
          i || Sv(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (a = n, i = n[el] || null)
              c = i.formAction;
            else if (Jo(a) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[u + 1] = c : (e.splice(u, 3), u -= 3), Sv(e);
        }
      }
  }
  function Tv() {
    function t(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return a = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      a !== null && (a(), a = null), u || setTimeout(e, 20);
    }
    function e() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, a = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
        u = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), a !== null && (a(), a = null);
      };
    }
  }
  function ko(t) {
    this._internalRoot = t;
  }
  Sc.prototype.render = ko.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(r(409));
    var e = l.current, u = Fl();
    rv(e, u, t, l, null, null);
  }, Sc.prototype.unmount = ko.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      rv(t.current, 2, null, t, null, null), uc(), l[te] = null;
    }
  };
  function Sc(t) {
    this._internalRoot = t;
  }
  Sc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = jl();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < xu.length && l !== 0 && l < xu[e].priority; e++) ;
      xu.splice(e, 0, t), e === 0 && gv(t);
    }
  };
  var Ev = H.version;
  if (Ev !== "19.3.1")
    throw Error(
      r(
        527,
        Ev,
        "19.3.1"
      )
    );
  J.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = rt(l), t = t !== null ? R(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var _h = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tc.isDisabled && Tc.supportsFiber)
      try {
        Mu = Tc.inject(
          _h
        ), pl = Tc;
      } catch {
      }
  }
  return Kn.createRoot = function(t, l) {
    if (!C(t)) throw Error(r(299));
    var e = !1, u = "", a = s0, n = r0, i = d0;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = ov(
      t,
      1,
      !1,
      null,
      null,
      e,
      u,
      null,
      a,
      n,
      i,
      Tv
    ), t[te] = l.current, Oo(t), new ko(l);
  }, Kn.hydrateRoot = function(t, l, e) {
    if (!C(t)) throw Error(r(299));
    var u = !1, a = "", n = s0, i = r0, c = d0, f = null;
    return e != null && (e.unstable_strictMode === !0 && (u = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (f = e.formState)), l = ov(
      t,
      1,
      !0,
      l,
      e ?? null,
      u,
      a,
      f,
      n,
      i,
      c,
      Tv
    ), l.context = sv(null), e = l.current, u = Fl(), u = qt(u), a = fu(u), a.callback = null, ou(e, a, u), e = u, l.current.lanes = e, x(l, e), Re(l), t[te] = l.current, Oo(t), new Sc(l);
  }, Kn.version = "19.3.1", Kn;
}
var Cv;
function Uh() {
  if (Cv) return Wo.exports;
  Cv = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (H) {
        console.error(H);
      }
  }
  return T(), Wo.exports = Rh(), Wo.exports;
}
var os = Uh(), B = fs();
const Wh = /* @__PURE__ */ Oh(B);
var Hh = Xv();
const jh = 1.35, Bh = 0.95, qh = 1.22, ta = 0.8, Yh = 0.34, is = -6, wn = 0.08, Gh = 0.15, Xh = 34, Qh = 1024, es = 1400, Ue = 0, us = 1, as = 2, Rv = { add: "Add to order", close: "Close", previous: "Previous plate", next: "Next plate", pause: "Pause belt" }, Uv = [
  { ring: "border-chart-1", dot: "bg-chart-1" },
  { ring: "border-chart-2", dot: "bg-chart-2" },
  { ring: "border-chart-3", dot: "bg-chart-3" },
  { ring: "border-chart-4", dot: "bg-chart-4" },
  { ring: "border-chart-5", dot: "bg-chart-5" }
], Zh = "[--belt:color-mix(in_oklab,var(--color-foreground)_78%,var(--color-background))] dark:[--belt:color-mix(in_oklab,var(--color-foreground)_16%,var(--color-background))] [--belt-side:color-mix(in_oklab,var(--color-foreground)_92%,var(--color-background))] dark:[--belt-side:color-mix(in_oklab,var(--color-foreground)_7%,var(--color-background))] [--rail:color-mix(in_oklab,var(--color-muted-foreground)_45%,white)] dark:[--rail:color-mix(in_oklab,var(--color-muted-foreground)_72%,var(--color-background))] [--island:color-mix(in_oklab,var(--color-muted-foreground)_16%,var(--color-background))] dark:[--island:color-mix(in_oklab,var(--color-foreground)_13%,var(--color-background))] [--island-low:color-mix(in_oklab,var(--color-muted-foreground)_27%,var(--color-background))] dark:[--island-low:color-mix(in_oklab,var(--color-foreground)_8%,var(--color-background))] [--island-wall:color-mix(in_oklab,var(--color-muted-foreground)_42%,var(--color-background))] dark:[--island-wall:color-mix(in_oklab,var(--color-foreground)_5%,var(--color-background))]";
function Lh() {
  return { offset: 0, v: 0, mode: Ue, target: 0, lift: [], vlift: [], z: [], lane: [], raf: 0, last: 0, visible: !0, init: !1, touched: !1, l: 0, center: -1, published: "", px: 0, py: 0, inside: !1, lock: !1, lockX: 0, lockY: 0 };
}
function Nu(T, H, p) {
  return Math.max(H, Math.min(p, T));
}
function cs(T) {
  return Uv[Nu(Math.round(T ?? 1), 1, 5) - 1] ?? Uv[0];
}
function Jn(T, H) {
  const { s: p, r } = T;
  let C = (H % T.l + T.l) % T.l;
  if (C < p) return { x: p / 2 - C, z: r, nx: 0, nz: 1, tx: -1, tz: 0 };
  C -= p;
  const V = Math.PI * r;
  if (C < V) {
    const rt = C / r, R = Math.sin(rt), E = Math.cos(rt);
    return { x: -p / 2 - r * R, z: r * E, nx: -R, nz: E, tx: -E, tz: -R };
  }
  if (C -= V, C < p) return { x: -p / 2 + C, z: -r, nx: 0, nz: -1, tx: 1, tz: 0 };
  C -= p;
  const Tt = Math.min(Math.PI, C / r), at = Math.sin(Tt), K = Math.cos(Tt);
  return { x: p / 2 + r * at, z: -r * K, nx: at, nz: -K, tx: K, tz: at };
}
function Fe(T, H, p) {
  const r = T.a + T.b * p;
  return { x: T.cx + H * r, y: T.ym + ta * (T.a * p + T.b * p * p / 2), k: r };
}
function Hv(T, H, p, r) {
  const C = Math.max(1, H) * jh * p, V = Math.min(Bh * p, C / (2 * Math.PI)), Tt = Math.max(0, (C - 2 * Math.PI * V) / 2), at = { width: T, height: 0, d: p, r: V, s: Tt, l: C, pitch: C / Math.max(1, H), n: Math.max(1, H), kb: r, cx: T / 2, ym: 0, a: (1 + r) / 2, b: (1 - r) / (2 * V), band: qh * p, slats: Math.max(10, Math.round(C / (Yh * p))), side: Math.max(3, p * 0.07), edgeTop: 0 };
  let K = 1 / 0, rt = -1 / 0, R = 1 / 0;
  for (let E = 0; E < 120; E++) {
    const Y = Jn(at, E / 120 * C), Rt = Fe(at, Y.x + Y.nx * at.band / 2, Y.z + Y.nz * at.band / 2), wt = Fe(at, Y.x, Y.z), Bt = wt.k * p * ta / 2;
    R = Math.min(R, Rt.y), K = Math.min(K, Rt.y, wt.y + is / 100 * Bt * 2 - Bt * (1 + wn) - Xh), rt = Math.max(rt, Rt.y + at.side + p * 0.06, wt.y + Bt + p * 0.08);
  }
  return at.ym = Math.ceil(-K) + 2, at.height = Math.ceil(rt - K) + 4, at.edgeTop = R + at.ym, at;
}
function Vh(T) {
  let H = 0;
  for (let p = 0; p < 120; p++) {
    const r = Jn(T, p / 120 * T.l), C = Fe(T, r.x + r.nx * T.band / 2, r.z + r.nz * T.band / 2), V = Fe(T, r.x, r.z);
    H = Math.max(H, Math.abs(C.x - T.cx) + 3, Math.abs(V.x - T.cx) + V.k * T.d * (1 + wn) / 2);
  }
  return H;
}
function ns(T, H) {
  let p = "";
  for (let C = 0; C < 168; C++) {
    const V = Jn(T, C / 168 * T.l), Tt = Fe(T, V.x + V.nx * H, V.z + V.nz * H);
    p += `${C ? "L" : "M"}${Tt.x.toFixed(1)} ${Tt.y.toFixed(1)}`;
  }
  return `${p}Z`;
}
function jv(T, H, p) {
  const r = T.band * 0.46, C = T.l / T.slats, V = C * 0.2;
  let Tt = "";
  for (let at = 0; at < T.slats; at++) {
    const K = Jn(T, H + p + at * C), rt = Fe(T, K.x - K.nx * r, K.z - K.nz * r), R = Fe(T, K.x + K.nx * r, K.z + K.nz * r), E = Fe(T, K.x + K.tx * V, K.z + K.tz * V);
    Tt += `M${rt.x.toFixed(1)} ${rt.y.toFixed(1)}Q${(2 * E.x - (rt.x + R.x) / 2).toFixed(1)} ${(2 * E.y - (rt.y + R.y) / 2).toFixed(1)} ${R.x.toFixed(1)} ${R.y.toFixed(1)}`;
  }
  return Tt;
}
function Bv(T, H, p) {
  const r = Jn(T, H - p * T.pitch), C = Fe(T, r.x, r.z);
  return { x: C.x, y: C.y, k: C.k, depth: (r.z + T.r) / (2 * T.r) };
}
function qv(T, H) {
  return (Math.round((H - T.s / 2) / T.pitch) % T.n + T.n) % T.n;
}
function Kh(T, H) {
  const p = [];
  for (let r = 1; r <= 5; r++) {
    const C = H ? H[r] : T.find((V) => (V.tier ?? 1) === r)?.price;
    C && p.push({ tier: r, label: C });
  }
  return p;
}
function Yv(T) {
  return String(T).padStart(2, "0");
}
function wh({
  items: T,
  eyebrow: H,
  heading: p,
  caption: r,
  action: C,
  speed: V = 26,
  paused: Tt,
  onPausedChange: at,
  autoplay: K = !1,
  interval: rt = 3e3,
  active: R,
  onActiveChange: E,
  onOpenChange: Y,
  onAdd: Rt,
  legend: wt,
  labels: Bt = Rv,
  className: Et,
  ref: Ft,
  ...ol
}) {
  const yl = B.useId().replace(/[^a-zA-Z0-9_-]/g, ""), zt = T.length, zl = B.useRef(null), Ut = B.useRef(null), P = B.useRef(null), dt = B.useRef(null), ht = B.useRef(null), W = B.useRef([]), _t = B.useRef([]), At = B.useRef([]), sl = B.useRef([]), tl = B.useRef([]), F = B.useRef(Lh()), A = B.useRef({ id: -1, index: -1, x: 0, y: 0, moved: !1, start: 0, lane: 1, lastX: 0, lastT: 0, v: 0 }), G = B.useRef(-1), Z = B.useRef(null), ut = B.useRef(null), bt = B.useRef(null), [Wt, se] = B.useState({ section: 0, stage: 0 }), [He, s] = B.useState(null), [O, X] = B.useState(!1), [D, vt] = B.useState(null), [ft, xt] = B.useState(null), [j, J] = B.useState(() => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches), [Il, pu] = B.useState(K), [be, Pl] = B.useState(0), [ll, Ht] = B.useState({}), Ol = R !== void 0 ? R : He, Hl = Ol !== null && Ol >= 0 && Ol < zt ? Ol : null, _l = Tt ?? O, Ql = Wt.section >= Qh, je = Wt.section > 0 && Wt.section < 480, Se = je ? 0.6 : 0.68, Zt = B.useMemo(() => {
    if (!Wt.stage || zt === 0) return null;
    const y = Vh(Hv(1e3, zt, 100, Se)) / 100, b = Ql ? 150 : Nu(Wt.section * 0.143, 96, 150), x = (Wt.stage - (je ? 40 : 8)) / (2 * y);
    return Hv(Wt.stage, zt, Math.max(1, Math.floor(Math.min(x, b))), Se);
  }, [Wt.stage, Wt.section, zt, Se, Ql]), I = B.useRef({
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
  I.current = {
    geo: Zt,
    active: Hl,
    paused: _l,
    reduced: j,
    open: D !== null,
    count: zt,
    speed: Math.max(0, V),
    activeControlled: R !== void 0,
    pausedControlled: Tt !== void 0,
    onActiveChange: E,
    onPausedChange: at,
    onOpenChange: Y,
    onAdd: Rt
  };
  const wa = B.useCallback((y) => {
    zl.current = y, typeof Ft == "function" ? Ft(y) : Ft && (Ft.current = y);
  }, [Ft]), Ja = B.useCallback((y) => {
    const b = I.current, x = b.geo, L = F.current, tt = W.current[y];
    if (!x || !tt) return;
    const nt = Bv(x, L.offset, y), $ = L.lift[y] ?? 0;
    tt.style.transform = `translate3d(${(nt.x - x.d / 2).toFixed(2)}px,${(nt.y - x.d * ta / 2).toFixed(2)}px,0) scale(${nt.k.toFixed(4)})`;
    const qt = y === b.active ? 2e3 : 100 + Math.round(nt.y);
    L.z[y] !== qt && (L.z[y] = qt, tt.style.zIndex = String(qt));
    const Jt = nt.depth >= 0.5 ? "front" : "back";
    L.lane[y] !== Jt && (L.lane[y] = Jt, tt.dataset.lane = Jt);
    const jl = _t.current[y];
    jl && (jl.style.transform = `translateY(${(is * $).toFixed(3)}%) scale(${(1 + wn * $).toFixed(4)})`);
    const Vt = At.current[y];
    Vt && (Vt.style.opacity = (Gh * Nu(1 - nt.depth, 0, 1) * (1 - 0.7 * Nu($, 0, 1))).toFixed(3));
    const ct = sl.current[y];
    ct && (ct.style.transform = `translate3d(0,${(x.d * ta * 0.05 * $).toFixed(2)}px,0) scale(${(1 + 0.14 * $).toFixed(3)})`, ct.style.opacity = (1 - 0.5 * Nu($, 0, 1)).toFixed(3));
    const Qt = tl.current[y];
    Qt && (Qt.style.transform = `scale(${(1 / (nt.k * (1 + wn * $))).toFixed(4)})`);
  }, []), Zl = B.useCallback(() => {
    const b = I.current.geo, x = F.current;
    if (!b) return;
    dt.current?.setAttribute("d", jv(b, x.offset, 0)), ht.current?.setAttribute("d", jv(b, x.offset, -Math.max(1.4, b.d * 0.024)));
    const L = (Math.abs(x.v) < 5e-3 ? 0 : x.v).toFixed(2);
    L !== x.published && (x.published = L, P.current?.style.setProperty("--belt-v", L));
    const tt = qv(b, x.offset);
    tt !== x.center && (x.center = tt, Pl(tt));
  }, []), Te = B.useCallback(() => {
    for (let y = 0; y < I.current.count; y++) Ja(y);
    Zl();
  }, [Ja, Zl]), We = B.useCallback((y, b) => {
    const x = I.current, L = x.geo, tt = F.current;
    if (!L) return null;
    let nt = null, $ = -1 / 0;
    for (let qt = 0; qt < x.count; qt++) {
      const Jt = Bv(L, tt.offset, qt), jl = Nu(tt.lift[qt] ?? 0, 0, 1.2), Vt = (1 + wn * jl) * (qt === x.active ? 1.1 : 1), ct = L.d * Jt.k * Vt / 2, Qt = L.d * ta * Jt.k * Vt / 2, el = (y - Jt.x) / ct, te = (b - (Jt.y + is / 100 * L.d * ta * Jt.k * jl)) / Qt;
      if (!(el * el + te * te > 1)) {
        if (qt === x.active) return qt;
        Jt.y > $ && (nt = qt, $ = Jt.y);
      }
    }
    return nt;
  }, []), $a = B.useRef((y) => {
  }), la = B.useCallback((y) => {
    const b = F.current, x = I.current, L = x.geo;
    if (b.raf = 0, !L || !b.visible) {
      b.last = 0;
      return;
    }
    const tt = b.last ? Nu((y - b.last) / 1e3, 0, 0.25) : 1 / 60;
    b.last = y;
    const nt = Math.max(1, Math.ceil(tt / 0.017)), $ = tt / nt, qt = x.paused || x.active !== null || x.open, Jt = x.reduced ? 0 : x.speed;
    for (let Vt = 0; Vt < nt; Vt++) {
      if (b.mode === us)
        b.v += (5.6 * 5.6 * (b.target - b.offset) - 2 * 5.6 * b.v) * $, b.offset += b.v * $, Math.abs(b.target - b.offset) < 0.3 && Math.abs(b.v) < 4 && (b.offset = b.target, b.v = 0, b.mode = Ue);
      else if (b.mode === Ue) {
        if (qt)
          b.v *= Math.exp(-7.2 * $), Math.abs(b.v) < 0.02 && (b.v = 0);
        else {
          let ct = b.v - Jt;
          Math.abs(ct) > Math.max(6, Jt * 0.5) ? ct = Math.sign(ct) * Math.max(0, Math.abs(ct) * Math.exp(-2.4 * $) - 90 * $) : ct *= Math.exp(-3.4 * $), b.v = Jt + (Math.abs(ct) < 0.01 ? 0 : ct);
        }
        b.offset += b.v * $;
      }
      for (let ct = 0; ct < x.count; ct++) {
        const Qt = ct === x.active ? 1 : 0;
        if (x.reduced) {
          b.lift[ct] = Qt, b.vlift[ct] = 0;
          continue;
        }
        const el = b.lift[ct] ?? 0, te = (b.vlift[ct] ?? 0) + (330 * (Qt - el) - 23 * (b.vlift[ct] ?? 0)) * $;
        b.lift[ct] = el + te * $, b.vlift[ct] = te;
      }
    }
    let jl = b.mode !== Ue || b.v !== 0 || !qt && Jt > 0;
    for (let Vt = 0; Vt < x.count; Vt++) {
      const ct = Vt === x.active ? 1 : 0;
      Math.abs(ct - (b.lift[Vt] ?? 0)) < 2e-3 && Math.abs(b.vlift[Vt] ?? 0) < 0.02 ? (b.lift[Vt] = ct, b.vlift[Vt] = 0) : jl = !0;
    }
    if (b.inside && !b.lock && b.mode === Ue && !x.open && A.current.id < 0 && Math.abs(b.v) > 0.3) {
      const Vt = We(b.px, b.py);
      Vt !== null && Vt !== x.active && $a.current(Vt);
    }
    Te(), jl ? b.raf = requestAnimationFrame(la) : b.last = 0;
  }, [We, Te]), cl = B.useCallback(() => {
    const y = F.current;
    y.raf || !y.visible || (y.last = 0, y.raf = requestAnimationFrame(la));
  }, [la]), It = B.useCallback((y) => {
    const b = I.current;
    b.active !== y && (b.activeControlled || (b.active = y, s(y)), b.onActiveChange?.(y), cl());
  }, [cl]), Ll = B.useCallback(() => {
    pu(!1);
    const y = F.current;
    y.touched = !0, y.mode === us && (y.mode = Ue);
    const b = ut.current;
    b !== null && (ut.current = null, I.current.active === b && It(null));
  }, [It]), ka = B.useCallback((y) => {
    const b = F.current, x = I.current.geo;
    if (!x) return;
    const L = x.s / 2 + y * x.pitch;
    if (b.target = L + Math.round((b.offset - L) / x.l) * x.l, I.current.reduced) {
      b.offset = b.target, b.v = 0, b.mode = Ue, Te();
      return;
    }
    b.mode = us, cl();
  }, [cl, Te]), Fa = () => !!Ut.current?.querySelector("[data-dish]:focus-visible");
  $a.current = (y) => {
    const b = I.current.active;
    if (y === b) {
      y !== null && ut.current === y && (ut.current = null, pu(!1));
      return;
    }
    if (y !== null) {
      Ll(), It(y);
      return;
    }
    b !== null && b !== ut.current && !Fa() && It(null);
  };
  const Nl = B.useCallback((y) => {
    Ll(), It(y);
    const b = F.current;
    b.v = 0, b.mode = Ue, I.current.open = !0, Zl(), vt(y), I.current.onOpenChange?.(y);
  }, [Ll, It, Zl]), $n = B.useCallback(() => {
    I.current.open = !1, vt(null), I.current.onOpenChange?.(null), cl();
  }, [cl]), ea = (y, b) => {
    if (zt === 0) return;
    const x = (y % zt + zt) % zt;
    Ll(), b && W.current[x]?.focus({ preventScroll: !0 }), It(x), ka(x);
  }, kn = () => {
    Ll();
    const y = I.current, b = !y.paused;
    y.pausedControlled || (y.paused = b, X(b)), y.onPausedChange?.(b), !b && y.active !== null && !Fa() && !F.current.inside && It(null), cl();
  };
  B.useEffect(() => {
    const y = window.matchMedia("(prefers-reduced-motion: reduce)"), b = () => J(y.matches);
    return b(), y.addEventListener("change", b), () => y.removeEventListener("change", b);
  }, []), B.useEffect(() => {
    pu(K);
  }, [K]), B.useLayoutEffect(() => {
    const y = zl.current, b = Ut.current;
    if (!y || !b) return;
    const x = () => {
      const tt = { section: Math.round(y.clientWidth), stage: Math.round(b.clientWidth) };
      se((nt) => nt.section === tt.section && nt.stage === tt.stage ? nt : tt);
    };
    x();
    const L = new ResizeObserver(x);
    return L.observe(y), L.observe(b), () => L.disconnect();
  }, [zt > 0]), B.useLayoutEffect(() => {
    const y = F.current;
    if (Zt) {
      if (!y.init)
        y.init = !0, y.offset = Zt.s / 2 - Math.min(I.current.speed * 1.62, Zt.pitch * 0.45), y.v = I.current.reduced || I.current.paused ? 0 : I.current.speed;
      else if (y.l > 0 && y.l !== Zt.l) {
        const b = Zt.l / y.l;
        y.offset *= b, y.target *= b;
      }
      I.current.reduced && (y.v = 0, y.mode !== as && (y.mode = Ue), y.touched || (y.offset = Zt.s / 2)), y.l = Zt.l, y.z = [], y.lane = [], Te(), cl();
    }
  }, [Zt, T, j, Te, cl]), B.useEffect(() => {
    cl();
  }, [Hl, _l, D, j, V, cl]), B.useEffect(() => {
    const y = zl.current, b = F.current;
    let x = !0;
    const L = () => {
      const nt = x && !document.hidden;
      nt !== b.visible && (b.visible = nt, nt ? cl() : b.raf && (cancelAnimationFrame(b.raf), b.raf = 0, b.last = 0));
    }, tt = y && typeof IntersectionObserver == "function" ? new IntersectionObserver((nt) => {
      x = nt.some(($) => $.isIntersecting), L();
    }) : null;
    return y && tt && tt.observe(y), document.addEventListener("visibilitychange", L), L(), () => {
      tt?.disconnect(), document.removeEventListener("visibilitychange", L);
    };
  }, [cl]), B.useEffect(() => () => {
    const y = F.current;
    y.raf && cancelAnimationFrame(y.raf), y.raf = 0, y.last = 0;
  }, []);
  const Au = Zt !== null;
  B.useEffect(() => {
    if (!Il || j || _l || D !== null || zt === 0 || !Au) return;
    let y = 0;
    const b = () => {
      const x = I.current.geo;
      if (!x) return;
      const L = bt.current, tt = L === null ? qv(x, F.current.offset + I.current.speed * 0.25) : (L + 1) % zt;
      bt.current = tt, ut.current = tt, It(tt), ka(tt), y = window.setTimeout(() => {
        ut.current === tt && (ut.current = null, I.current.active === tt && It(null)), y = window.setTimeout(b, Math.max(300, rt - es));
      }, es);
    };
    return y = window.setTimeout(b, bt.current === null ? 1600 : Math.max(300, rt - es)), () => window.clearTimeout(y);
  }, [Il, j, _l, D, zt, rt, Au, It, ka]), B.useLayoutEffect(() => {
    if (D !== null || ft !== null || Z.current === null) return;
    const y = Z.current;
    Z.current = null, W.current[y]?.focus({ preventScroll: !0 });
  }, [D, ft]);
  const Wa = (y) => {
    const b = Ut.current?.getBoundingClientRect();
    return { x: y.clientX - (b?.left ?? 0), y: y.clientY - (b?.top ?? 0) };
  }, Fn = (y) => {
    const b = I.current.geo;
    if (y.button !== 0 || !b) return;
    const x = Wa(y), L = We(x.x, x.y);
    G.current = -1, A.current = { id: y.pointerId, index: L ?? -1, x: y.clientX, y: y.clientY, moved: !1, start: F.current.offset, lane: x.y >= b.ym ? 1 : -1, lastX: y.clientX, lastT: y.timeStamp, v: 0 };
  }, zc = (y) => {
    const b = F.current, x = A.current, L = Ut.current, tt = I.current.geo;
    if (!L || !tt) return;
    const nt = Wa(y);
    if (y.pointerType === "mouse" && (b.px = nt.x, b.py = nt.y, b.inside = !0), x.id === y.pointerId) {
      const $ = y.clientX - x.x, qt = y.timeStamp;
      if (!x.moved && Math.abs($) > 6 && Math.abs($) > Math.abs(y.clientY - x.y) && (x.moved = !0, Ll(), It(null), b.mode = as, L.isConnected && L.setPointerCapture(y.pointerId)), x.moved) {
        const Jt = (y.clientX - x.lastX) / Math.max(1, qt - x.lastT);
        x.v = x.v * 0.6 + Jt * 0.4, x.lastX = y.clientX, x.lastT = qt;
        const jl = x.lane > 0 ? 1 : 1 / tt.kb;
        b.offset = x.start - x.lane * $ * jl, b.v = I.current.reduced ? 0 : -x.lane * x.v * 1e3 * jl, cl();
      }
      return;
    }
    if (!(y.pointerType !== "mouse" || I.current.open)) {
      if (b.lock) {
        if (Math.hypot(nt.x - b.lockX, nt.y - b.lockY) < 4) return;
        b.lock = !1;
      }
      $a.current(We(nt.x, nt.y));
    }
  }, Wn = (y, b) => {
    const x = A.current;
    if (x.id !== y.pointerId) return;
    const L = F.current, tt = Ut.current;
    if (tt?.hasPointerCapture(y.pointerId) && tt.releasePointerCapture(y.pointerId), A.current = { ...x, id: -1 }, L.mode === as) {
      L.mode = Ue;
      const $ = Math.exp(-Math.max(0, y.timeStamp - x.lastT) / 70);
      if (L.v = I.current.reduced ? 0 : Nu(L.v * $, -1400, 1400), y.pointerType === "mouse") {
        const qt = Wa(y);
        L.lock = !0, L.lockX = qt.x, L.lockY = qt.y;
      }
      cl();
      return;
    }
    if (b || x.moved) return;
    const nt = y.pointerType !== "mouse";
    if (x.index < 0) {
      nt && I.current.active !== null && (Ll(), It(null));
      return;
    }
    Ll(), nt && I.current.active !== x.index ? It(x.index) : G.current = x.index;
  }, Mu = (y) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(y.key) || zt === 0) return;
    y.preventDefault();
    const b = y.target.closest("[data-dish]")?.getAttribute("data-dish"), x = b != null ? Number(b) : Hl ?? be;
    ea(y.key === "Home" ? 0 : y.key === "End" ? zt - 1 : x + (y.key === "ArrowRight" ? 1 : -1), !0);
  }, pl = B.useCallback(() => D === null ? null : _t.current[D]?.getBoundingClientRect() ?? null, [D]), Ee = B.useCallback((y) => xt(y ? D : null), [D]), Al = B.useCallback(() => {
    Z.current = D, $n();
  }, [D, $n]), _c = B.useCallback(() => {
    const y = D === null ? void 0 : T[D];
    y && I.current.onAdd?.(y);
  }, [D, T]), Ml = B.useMemo(() => Zt ? { outer: ns(Zt, Zt.band / 2), inner: ns(Zt, -Zt.band / 2), island: ns(Zt, -Zt.band / 2 - Zt.d * 0.035) } : null, [Zt]), Du = Hl === null ? null : T[Hl] ?? null, ua = Hl ?? be, Ie = Kh(T, wt), gt = Zt, re = "inline-flex size-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none", Cu = (H || p || Ie.length > 0) && /* @__PURE__ */ N.jsxs("div", { className: Ql ? "flex flex-col items-start gap-4 text-left" : "flex flex-col items-center gap-2 px-2 text-center", children: [
    H && /* @__PURE__ */ N.jsx("p", { className: "text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground", children: H }),
    p && /* @__PURE__ */ N.jsx("h2", { className: `text-balance font-medium tracking-tight ${Ql ? "text-4xl leading-[1.1] xl:text-[2.75rem]" : "text-2xl md:text-3xl"}`, children: p }),
    Ie.length > 0 && /* @__PURE__ */ N.jsx("ul", { "aria-hidden": "true", "data-legend": !0, className: `mt-1 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[11px] tabular-nums text-muted-foreground ${Ql ? "justify-start" : "justify-center"} ${je ? "max-w-[15rem]" : ""}`, children: Ie.map((y) => /* @__PURE__ */ N.jsxs("li", { className: "inline-flex items-center gap-1.5", children: [
      /* @__PURE__ */ N.jsx("span", { className: `size-2.5 rounded-full border-2 bg-transparent ${cs(y.tier).ring}` }),
      y.label
    ] }, y.tier)) })
  ] }), Pe = /* @__PURE__ */ N.jsxs("div", { id: `${yl}-caption`, "aria-live": "polite", "data-caption": !0, className: Ql ? "min-h-[3.25rem]" : `mx-auto mt-2 max-w-md px-2 text-center ${je ? "min-h-[3.75rem]" : "min-h-[2.75rem]"}`, children: [
    /* @__PURE__ */ N.jsx("p", { className: `text-sm ${Du ? "font-medium text-foreground" : "text-muted-foreground"}`, children: Du ? Du.name : r }),
    Du?.description && /* @__PURE__ */ N.jsx("p", { className: "mt-0.5 text-[13px] leading-snug text-muted-foreground", children: Du.description })
  ] }), Ia = zt > 1 && /* @__PURE__ */ N.jsxs("div", { className: "relative z-10 mt-1 flex items-center justify-center gap-1.5", children: [
    /* @__PURE__ */ N.jsx("button", { type: "button", "data-control": "previous", "aria-label": Bt.previous, onClick: () => ea((I.current.active ?? F.current.center) - 1, !1), className: re, children: /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ N.jsx("path", { d: "M10 3.5 5.5 8l4.5 4.5" }) }) }),
    /* @__PURE__ */ N.jsx("button", { type: "button", "data-control": "pause", "aria-label": Bt.pause ?? Rv.pause, "aria-pressed": _l, onClick: kn, className: re, children: _l ? /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "currentColor", children: /* @__PURE__ */ N.jsx("path", { d: "M5 3.4v9.2a.6.6 0 0 0 .9.5l7.4-4.6a.6.6 0 0 0 0-1L5.9 2.9a.6.6 0 0 0-.9.5Z" }) }) : /* @__PURE__ */ N.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "currentColor", children: [
      /* @__PURE__ */ N.jsx("rect", { x: "4", y: "3", width: "2.6", height: "10", rx: "0.8" }),
      /* @__PURE__ */ N.jsx("rect", { x: "9.4", y: "3", width: "2.6", height: "10", rx: "0.8" })
    ] }) }),
    /* @__PURE__ */ N.jsx("button", { type: "button", "data-control": "next", "aria-label": Bt.next, onClick: () => ea((I.current.active ?? F.current.center) + 1, !1), className: re, children: /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ N.jsx("path", { d: "M6 3.5 10.5 8 6 12.5" }) }) })
  ] }), In = zt > 0 && /* @__PURE__ */ N.jsxs(
    "div",
    {
      ref: Ut,
      "data-stage": !0,
      role: "group",
      "aria-label": p ?? "Sushi conveyor belt",
      "aria-roledescription": "conveyor belt",
      className: "relative w-full touch-pan-y select-none",
      style: { height: gt ? gt.height : 260, overflowX: "clip" },
      onPointerDown: Fn,
      onPointerMove: zc,
      onPointerUp: (y) => Wn(y, !1),
      onPointerCancel: (y) => Wn(y, !0),
      onPointerLeave: (y) => {
        if (y.pointerType !== "mouse") return;
        const b = F.current;
        b.inside = !1, b.lock = !1;
        const x = I.current.active;
        A.current.id < 0 && !I.current.open && x !== null && x !== ut.current && !Fa() && It(null);
      },
      onBlur: (y) => {
        const b = y.relatedTarget;
        if (b && Ut.current?.contains(b) || I.current.open || F.current.inside) return;
        const x = I.current.active;
        x !== null && x !== ut.current && It(null);
      },
      onKeyDown: Mu,
      children: [
        gt && /* @__PURE__ */ N.jsx("div", { "aria-hidden": "true", "data-counter": !0, className: "pointer-events-none absolute inset-x-0", style: { top: Math.max(0, gt.edgeTop - gt.d * 0.34), height: gt.ym - Math.max(0, gt.edgeTop - gt.d * 0.34), background: "linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 9%, transparent) 0 1px, transparent 1px, color-mix(in oklab, var(--color-foreground) 5%, transparent) 40%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 18%, black 82%, transparent)", maskImage: "linear-gradient(to right, transparent, black 18%, black 82%, transparent)" } }),
        /* @__PURE__ */ N.jsx("div", { ref: P, "data-belt": !0, "aria-hidden": "true", className: "pointer-events-none absolute inset-0", children: gt && Ml && /* @__PURE__ */ N.jsxs("svg", { className: "absolute left-0 top-0 overflow-visible", width: gt.width, height: gt.height, viewBox: `0 0 ${gt.width} ${gt.height}`, focusable: "false", children: [
          /* @__PURE__ */ N.jsxs("defs", { children: [
            /* @__PURE__ */ N.jsx("filter", { id: `${yl}-soft`, x: "-10%", y: "-30%", width: "120%", height: "160%", children: /* @__PURE__ */ N.jsx("feGaussianBlur", { stdDeviation: (gt.d * 0.06).toFixed(1) }) }),
            /* @__PURE__ */ N.jsxs("linearGradient", { id: `${yl}-island`, x1: "0", x2: "0", y1: "0", y2: "1", children: [
              /* @__PURE__ */ N.jsx("stop", { offset: "0", style: { stopColor: "var(--island)" } }),
              /* @__PURE__ */ N.jsx("stop", { offset: "1", style: { stopColor: "var(--island-low)" } })
            ] })
          ] }),
          /* @__PURE__ */ N.jsx("path", { d: Ml.outer, transform: `translate(0 ${(gt.side + gt.d * 0.07).toFixed(1)})`, fill: "black", className: "opacity-[0.18] dark:opacity-60", filter: `url(#${yl}-soft)` }),
          /* @__PURE__ */ N.jsx("path", { d: `${Ml.outer}${Ml.inner}`, fillRule: "evenodd", transform: `translate(0 ${gt.side.toFixed(1)})`, style: { fill: "var(--belt-side)" } }),
          /* @__PURE__ */ N.jsx("path", { d: `${Ml.outer}${Ml.inner}`, fillRule: "evenodd", style: { fill: "var(--belt)" } }),
          /* @__PURE__ */ N.jsx("path", { ref: dt, fill: "none", stroke: "black", strokeOpacity: 0.42, strokeWidth: Math.max(1, gt.d * 0.013), strokeLinecap: "round" }),
          /* @__PURE__ */ N.jsx("path", { ref: ht, fill: "none", stroke: "white", strokeOpacity: 0.14, strokeWidth: Math.max(0.8, gt.d * 9e-3), strokeLinecap: "round" }),
          /* @__PURE__ */ N.jsx("path", { d: Ml.outer, fill: "none", style: { stroke: "var(--rail)" }, strokeWidth: Math.max(2, gt.d * 0.026) }),
          /* @__PURE__ */ N.jsx("path", { d: Ml.outer, fill: "none", stroke: "white", strokeOpacity: 0.55, strokeWidth: Math.max(0.8, gt.d * 8e-3), transform: "translate(0 -0.8)" }),
          /* @__PURE__ */ N.jsx("path", { d: Ml.inner, fill: "none", style: { stroke: "var(--rail)" }, strokeWidth: Math.max(1.6, gt.d * 0.02) }),
          /* @__PURE__ */ N.jsx("path", { d: Ml.inner, fill: "none", stroke: "white", strokeOpacity: 0.4, strokeWidth: Math.max(0.8, gt.d * 8e-3), transform: "translate(0 -0.7)" }),
          /* @__PURE__ */ N.jsx("path", { d: Ml.island, style: { fill: "var(--island-wall)" } }),
          /* @__PURE__ */ N.jsx("path", { d: Ml.island, transform: `translate(0 ${(-gt.side * 0.6).toFixed(1)})`, style: { fill: `url(#${yl}-island)` } }),
          /* @__PURE__ */ N.jsx("path", { d: Ml.island, transform: `translate(0 ${(-gt.side * 0.6 - 0.6).toFixed(1)})`, fill: "none", stroke: "white", strokeOpacity: 0.55, strokeWidth: Math.max(0.8, gt.d * 8e-3), className: "dark:opacity-40" })
        ] }) }),
        gt && T.map((y, b) => {
          const x = cs(y.tier), L = Hl === b, tt = !!ll[y.id], nt = `url("${y.image}") 0 0 / 100% 100% no-repeat`;
          return /* @__PURE__ */ N.jsxs(
            "button",
            {
              ref: ($) => {
                W.current[b] = $;
              },
              type: "button",
              "data-dish": b,
              "data-active": L || void 0,
              tabIndex: b === ua ? 0 : -1,
              "aria-label": y.name,
              "aria-describedby": `${yl}-caption`,
              "aria-haspopup": "dialog",
              "aria-current": L || void 0,
              className: "absolute left-0 top-0 cursor-pointer rounded-[50%] border-0 bg-transparent p-0 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
              style: { width: gt.d, height: gt.d * ta, visibility: ft === b ? "hidden" : void 0 },
              onFocus: () => {
                A.current.id < 0 && (Ll(), It(b));
              },
              onClick: ($) => {
                const qt = G.current;
                G.current = -1, ($.detail === 0 || qt === b) && Nl(b);
              },
              children: [
                /* @__PURE__ */ N.jsx("span", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 opacity-50 dark:opacity-90", children: /* @__PURE__ */ N.jsx("span", { ref: ($) => {
                  sl.current[b] = $;
                }, className: "absolute inset-x-[5%] bottom-[-9%] top-[16%] rounded-[50%] bg-black", style: { filter: `blur(${Math.max(2, gt.d * 0.045).toFixed(1)}px)` } }) }),
                /* @__PURE__ */ N.jsxs("span", { ref: ($) => {
                  _t.current[b] = $;
                }, "data-lift": !0, className: "absolute inset-0", children: [
                  /* @__PURE__ */ N.jsx("span", { "aria-hidden": "true", "data-placeholder": !0, className: `absolute rounded-[50%] border border-border bg-card ${tt ? "inset-[3%] shadow-sm" : "inset-[6%]"}`, children: /* @__PURE__ */ N.jsx("span", { className: "absolute inset-[30%] rounded-[50%] bg-muted-foreground/20" }) }),
                  !tt && /* @__PURE__ */ N.jsx(
                    "img",
                    {
                      src: y.image,
                      alt: "",
                      draggable: !1,
                      onError: () => Ht(($) => $[y.id] ? $ : { ...$, [y.id]: !0 }),
                      className: "pointer-events-none absolute inset-0 size-full rounded-[50%] select-none object-fill"
                    }
                  ),
                  !tt && /* @__PURE__ */ N.jsx("span", { ref: ($) => {
                    At.current[b] = $;
                  }, "aria-hidden": "true", className: "pointer-events-none absolute inset-0 rounded-[50%] bg-black", style: { opacity: 0, WebkitMask: nt, mask: nt } }),
                  /* @__PURE__ */ N.jsx("span", { ref: ($) => {
                    tl.current[b] = $;
                  }, "aria-hidden": "true", className: "pointer-events-none absolute left-1/2 top-0 size-0", children: /* @__PURE__ */ N.jsxs("span", { "data-chip": !0, className: `absolute bottom-[7px] left-0 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card py-1 pl-2 pr-2.5 text-[11px] font-medium leading-none text-card-foreground shadow-[0_6px_16px_-6px_color-mix(in_oklab,var(--color-foreground)_40%,transparent)] transition-[opacity,translate] duration-300 motion-reduce:transition-none ${L && ft !== b ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`, children: [
                    /* @__PURE__ */ N.jsx("span", { className: `size-1.5 rounded-full ${x.dot}` }),
                    y.name
                  ] }) })
                ] })
              ]
            },
            y.id
          );
        })
      ]
    }
  );
  return /* @__PURE__ */ N.jsxs(
    "section",
    {
      ...ol,
      ref: wa,
      "data-slot": "sushi-conveyor-menu",
      "data-layout": Ql ? "wide" : "stack",
      "data-active": Hl ?? "",
      "data-open": D ?? "",
      "data-paused": _l || void 0,
      "data-center": be,
      className: `relative isolate w-full overflow-hidden bg-transparent text-foreground ${Zh} ${Et ?? ""}`,
      children: [
        /* @__PURE__ */ N.jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 -z-10", style: { background: "radial-gradient(64% 52% at 50% 56%, color-mix(in oklab, var(--color-foreground) 5%, transparent), transparent 72%)" } }),
        Ql ? /* @__PURE__ */ N.jsxs("div", { className: "mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,24rem)_minmax(0,1fr)] items-center gap-12 px-10 py-14", children: [
          /* @__PURE__ */ N.jsxs("div", { className: "flex flex-col items-start gap-6", children: [
            Cu,
            Pe,
            C
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "min-w-0", children: [
            In,
            Ia
          ] })
        ] }) : /* @__PURE__ */ N.jsxs("div", { className: "flex w-full flex-col items-center px-4 pb-6 pt-6", children: [
          Cu,
          /* @__PURE__ */ N.jsx("div", { className: "mt-2 w-full min-w-0", children: In }),
          Ia,
          Pe,
          C && /* @__PURE__ */ N.jsx("div", { className: "mt-3 flex justify-center", children: C })
        ] }),
        D !== null && T[D] && /* @__PURE__ */ N.jsx(
          Jh,
          {
            uid: yl,
            item: T[D],
            index: D,
            total: zt,
            labels: Bt,
            reduced: j,
            broken: !!ll[T[D].id],
            source: pl,
            onLift: Ee,
            onAdd: Rt ? _c : void 0,
            onClose: Al
          }
        )
      ]
    }
  );
}
function Jh({ uid: T, item: H, index: p, total: r, labels: C, reduced: V, broken: Tt, source: at, onLift: K, onAdd: rt, onClose: R }) {
  const E = B.useRef(null), Y = B.useRef(null), Rt = B.useRef(null), wt = B.useRef(0), Bt = B.useRef(!1), [Et, Ft] = B.useState(!1), [ol, yl] = B.useState(!1), zt = `${T}-dish-title`, zl = cs(H.tier);
  B.useLayoutEffect(() => {
    const ht = Y.current, W = at();
    Rt.current?.focus({ preventScroll: !0 });
    const _t = document.body.style.overflow;
    document.body.style.overflow = "hidden", K(!0);
    let At = null;
    if (ht && W && !V && W.width > 0) {
      const tl = ht.getBoundingClientRect(), F = W.width / tl.width, A = W.height / tl.height, G = W.left + W.width / 2 - (tl.left + tl.width / 2), Z = W.top + W.height / 2 - (tl.top + tl.height / 2), ut = Math.min(120, Math.abs(Z) * 0.3 + 40);
      At = ht.animate([
        { transform: `translate(${G}px, ${Z}px) scale(${F}, ${A})` },
        { transform: `translate(${G * 0.42}px, ${Z * 0.42 - ut}px) scale(${(F + 1) / 2 * 1.05}, ${(A + 1) / 2 * 1.05}) rotate(${G > 0 ? -6 : 6}deg)`, offset: 0.5 },
        { transform: "none" }
      ], { duration: 680, easing: "cubic-bezier(.22,.85,.3,1)" });
    }
    const sl = requestAnimationFrame(() => Ft(!0));
    return () => {
      cancelAnimationFrame(sl), At?.cancel(), window.clearTimeout(wt.current), document.body.style.overflow = _t, K(!1);
    };
  }, [at, V, K]);
  const Ut = B.useCallback(() => {
    if (Bt.current) return;
    Bt.current = !0, Ft(!1);
    const ht = Y.current, W = at();
    if (!ht || !W || V || W.width === 0) {
      R();
      return;
    }
    const _t = ht.getBoundingClientRect(), At = W.width / _t.width, sl = W.height / _t.height, tl = W.left + W.width / 2 - (_t.left + _t.width / 2), F = W.top + W.height / 2 - (_t.top + _t.height / 2), A = ht.animate([
      { transform: "none" },
      { transform: `translate(${tl * 0.58}px, ${F * 0.58 - 36}px) scale(${(At + 1) / 2}, ${(sl + 1) / 2})`, offset: 0.55 },
      { transform: `translate(${tl}px, ${F}px) scale(${At}, ${sl})` }
    ], { duration: 540, easing: "cubic-bezier(.45,0,.55,1)", fill: "forwards" });
    A.onfinish = () => R();
  }, [at, V, R]);
  B.useEffect(() => {
    const ht = (W) => {
      const _t = E.current;
      if (!(!_t || _t.contains(W.target))) {
        if (W.key === "Escape")
          W.preventDefault(), Ut();
        else if (W.key === "Tab") {
          const At = _t.querySelector("button");
          At && (W.preventDefault(), At.focus());
        }
      }
    };
    return document.addEventListener("keydown", ht), () => document.removeEventListener("keydown", ht);
  }, [Ut]);
  const P = (ht) => {
    if (ht.key === "Escape") {
      ht.preventDefault(), Ut();
      return;
    }
    if (ht.key !== "Tab") return;
    const W = [...E.current?.querySelectorAll("button") ?? []].filter((sl) => !sl.disabled), _t = W[0], At = W.at(-1);
    !_t || !At || (ht.shiftKey && document.activeElement === _t ? (ht.preventDefault(), At.focus()) : !ht.shiftKey && document.activeElement === At && (ht.preventDefault(), _t.focus()));
  }, dt = () => {
    ol || Bt.current || (rt?.(), yl(!0), wt.current = window.setTimeout(Ut, V ? 0 : 450));
  };
  return Hh.createPortal(
    /* @__PURE__ */ N.jsxs("div", { ref: E, role: "dialog", "aria-modal": "true", "aria-labelledby": zt, "data-dish-dialog": !0, className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 text-foreground sm:p-8", onKeyDown: P, children: [
      /* @__PURE__ */ N.jsx("div", { "aria-hidden": "true", className: `absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300 motion-reduce:transition-none ${Et ? "opacity-100" : "opacity-0"}`, onClick: Ut }),
      /* @__PURE__ */ N.jsxs("div", { className: "relative grid w-full max-w-[52rem] items-center gap-6 p-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] sm:gap-10 sm:p-8", children: [
        /* @__PURE__ */ N.jsx("div", { "aria-hidden": "true", className: `absolute inset-0 rounded-[2rem] border border-border bg-card shadow-2xl transition-[opacity,scale] duration-300 motion-reduce:transition-none ${Et ? "scale-100 opacity-100" : "scale-[0.97] opacity-0"}` }),
        /* @__PURE__ */ N.jsxs("button", { ref: Rt, type: "button", onClick: Ut, className: `absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground outline-none transition-[opacity,color] duration-300 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none ${Et ? "opacity-100" : "opacity-0"}`, children: [
          C.close,
          /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", children: /* @__PURE__ */ N.jsx("path", { d: "M3.5 3.5l9 9M12.5 3.5l-9 9" }) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { ref: Y, "data-dish-figure": !0, className: "relative mx-auto aspect-square w-full max-w-[min(42vh,22rem)]", children: [
          /* @__PURE__ */ N.jsx("span", { "aria-hidden": "true", className: "absolute inset-x-[8%] bottom-[-4%] top-[14%] rounded-full bg-black opacity-25 blur-2xl dark:opacity-70" }),
          Tt ? /* @__PURE__ */ N.jsx("span", { "aria-hidden": "true", className: "absolute inset-[3%] rounded-full border border-border bg-muted", children: /* @__PURE__ */ N.jsx("span", { className: "absolute inset-[30%] rounded-full bg-muted-foreground/25" }) }) : /* @__PURE__ */ N.jsx("img", { src: H.image, alt: H.name, draggable: !1, className: "relative size-full rounded-full select-none object-contain" })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: `relative flex flex-col gap-3 text-center transition-[opacity,translate] delay-150 duration-500 motion-reduce:transition-none sm:text-left ${Et ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`, children: [
          /* @__PURE__ */ N.jsxs("p", { className: "flex items-center justify-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground sm:justify-start", children: [
            /* @__PURE__ */ N.jsx("span", { "aria-hidden": "true", className: `size-2 rounded-full ${zl.dot}` }),
            Yv(p + 1),
            " / ",
            Yv(r)
          ] }),
          /* @__PURE__ */ N.jsx("h3", { id: zt, className: "text-2xl font-medium tracking-tight sm:text-3xl", children: H.name }),
          H.description && /* @__PURE__ */ N.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: H.description }),
          H.details && H.details.length > 0 && /* @__PURE__ */ N.jsx("ul", { className: "flex flex-wrap justify-center gap-2 sm:justify-start", children: H.details.map((ht) => /* @__PURE__ */ N.jsx("li", { className: "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground", children: ht }, ht)) }),
          /* @__PURE__ */ N.jsxs("div", { className: "mt-2 flex flex-wrap items-center justify-center gap-4 sm:justify-start", children: [
            /* @__PURE__ */ N.jsx("p", { className: "text-2xl font-semibold tabular-nums tracking-tight", children: H.price }),
            rt && /* @__PURE__ */ N.jsxs("button", { type: "button", "data-add": !0, onClick: dt, className: "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm outline-none transition-[translate,box-shadow] hover:-translate-y-px hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none", children: [
              ol ? /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-4", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ N.jsx("path", { d: "M3.5 8.5l3 3 6-7" }) }) : /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-4", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", children: /* @__PURE__ */ N.jsx("path", { d: "M8 3.5v9M3.5 8h9" }) }),
              C.add
            ] })
          ] })
        ] })
      ] })
    ] }),
    document.body
  );
}
const $h = [
  ["mushroom", "Spicy Garlic Mushroom", 790],
  ["chicken-strips", "Chicken Tender Strips", 690],
  ["fish-chips", "Fish & Chips", 790],
  ["club", "Club Sandwich", 790],
  ["cheesy-chicken", "Cheesy Grilled Chicken Sandwich", 840],
  ["steak-sandwich", "Beef Steak Sandwich", 890],
  ["special", "Barock Special Sandwich", 990]
], kh = [690, 790, 840, 890, 990], Fh = $h.map(([T, H, p]) => ({
  id: T,
  name: H,
  price: `BDT ${p}`,
  tier: kh.indexOf(p) + 1,
  image: `./assets/menu-dishes/${T}.webp`
})), Gv = document.getElementById("menu-conveyor");
Gv && os.createRoot(Gv).render(/* @__PURE__ */ N.jsx(wh, { items: Fh, legend: {}, eyebrow: "From the BAROCK kitchen", heading: "Appetizers & sandwiches", caption: "Pick a plate to explore a dish." }));
const Ec = document.getElementById("coffee-pour");
if (Ec) {
  const T = async () => {
    try {
      const { CoffeePourMenu: p, DEFAULT_COFFEE_ITEMS: r } = await import("./coffee-pour-menu-Cvmlh2zc.js");
      os.createRoot(Ec).render(/* @__PURE__ */ N.jsx(p, { items: r.map((C) => ({ ...C, subtitle: void 0 })) }));
    } catch {
      const p = document.createElement("button");
      p.textContent = "Load coffee preview", p.className = "button", p.addEventListener("click", T, { once: !0 }), Ec.replaceChildren(p);
    }
  }, H = new IntersectionObserver((p) => {
    p.some((r) => r.isIntersecting) && (H.disconnect(), T());
  }, { rootMargin: "200px" });
  H.observe(Ec);
}
if (document.querySelector("[data-menu-viewer]")) {
  const T = document.querySelector("[data-menu-viewer]");
  if (T) {
    const H = new IntersectionObserver(async (p) => {
      if (p.some((r) => r.isIntersecting)) {
        H.disconnect();
        try {
          const { default: r } = await import("./book-slider-8Xhs0_v0.js"), C = document.createElement("div");
          C.className = "menu-journal-desktop", T.before(C), os.createRoot(C).render(/* @__PURE__ */ N.jsx(r, {})), T.hidden = !0, T.style.display = "none";
          const V = T.querySelector("a[download]");
          if (V) {
            const Tt = V.cloneNode(!0);
            Tt.classList.add("menu-journal-desktop"), C.after(Tt);
          }
        } catch {
        }
      }
    }, { rootMargin: "200px" });
    H.observe(T);
  }
}
export {
  Wh as R,
  N as j,
  B as r
};
