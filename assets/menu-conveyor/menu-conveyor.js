var ko = { exports: {} }, Ln = {};
var Tv;
function _h() {
  if (Tv) return Ln;
  Tv = 1;
  var E = /* @__PURE__ */ Symbol.for("react.transitional.element"), Y = /* @__PURE__ */ Symbol.for("react.fragment");
  function D(d, B, w) {
    var Nt = null;
    if (w !== void 0 && (Nt = "" + w), B.key !== void 0 && (Nt = "" + B.key), "key" in B) {
      w = {};
      for (var at in B)
        at !== "key" && (w[at] = B[at]);
    } else w = B;
    return B = w.ref, {
      $$typeof: E,
      type: d,
      key: Nt,
      ref: B !== void 0 ? B : null,
      props: w
    };
  }
  return Ln.Fragment = Y, Ln.jsx = D, Ln.jsxs = D, Ln;
}
var Ev;
function xh() {
  return Ev || (Ev = 1, ko.exports = _h()), ko.exports;
}
var N = xh(), Fo = { exports: {} }, Kn = {}, Wo = { exports: {} }, Io = {};
var zv;
function Oh() {
  return zv || (zv = 1, (function(E) {
    function Y(A, G) {
      var Z = A.length;
      A.push(G);
      t: for (; 0 < Z; ) {
        var ut = Z - 1 >>> 1, bt = A[ut];
        if (0 < B(bt, G))
          A[ut] = G, A[Z] = bt, Z = ut;
        else break t;
      }
    }
    function D(A) {
      return A.length === 0 ? null : A[0];
    }
    function d(A) {
      if (A.length === 0) return null;
      var G = A[0], Z = A.pop();
      if (Z !== G) {
        A[0] = Z;
        t: for (var ut = 0, bt = A.length, Wt = bt >>> 1; ut < Wt; ) {
          var se = 2 * (ut + 1) - 1, He = A[se], s = se + 1, O = A[s];
          if (0 > B(He, Z))
            s < bt && 0 > B(O, He) ? (A[ut] = O, A[s] = Z, ut = s) : (A[ut] = He, A[se] = Z, ut = se);
          else if (s < bt && 0 > B(O, Z))
            A[ut] = O, A[s] = Z, ut = s;
          else break t;
        }
      }
      return G;
    }
    function B(A, G) {
      var Z = A.sortIndex - G.sortIndex;
      return Z !== 0 ? Z : A.id - G.id;
    }
    if (E.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      E.unstable_now = function() {
        return w.now();
      };
    } else {
      var Nt = Date, at = Nt.now();
      E.unstable_now = function() {
        return Nt.now() - at;
      };
    }
    var L = [], rt = [], C = 1, T = null, q = 3, Rt = !1, wt = !1, Bt = !1, Tt = !1, Ft = typeof setTimeout == "function" ? setTimeout : null, ol = typeof clearTimeout == "function" ? clearTimeout : null, yl = typeof setImmediate < "u" ? setImmediate : null;
    function Et(A) {
      for (var G = D(rt); G !== null; ) {
        if (G.callback === null) d(rt);
        else if (G.startTime <= A)
          d(rt), G.sortIndex = G.expirationTime, Y(L, G);
        else break;
        G = D(rt);
      }
    }
    function zl(A) {
      if (Bt = !1, Et(A), !wt)
        if (D(L) !== null)
          wt = !0, Ut || (Ut = !0, pt());
        else {
          var G = D(rt);
          G !== null && F(zl, G.startTime - A);
        }
    }
    var Ut = !1, P = -1, dt = 5, ht = -1;
    function W() {
      return Tt ? !0 : !(E.unstable_now() - ht < dt);
    }
    function zt() {
      if (Tt = !1, Ut) {
        var A = E.unstable_now();
        ht = A;
        var G = !0;
        try {
          t: {
            wt = !1, Bt && (Bt = !1, ol(P), P = -1), Rt = !0;
            var Z = q;
            try {
              l: {
                for (Et(A), T = D(L); T !== null && !(T.expirationTime > A && W()); ) {
                  var ut = T.callback;
                  if (typeof ut == "function") {
                    T.callback = null, q = T.priorityLevel;
                    var bt = ut(
                      T.expirationTime <= A
                    );
                    if (A = E.unstable_now(), typeof bt == "function") {
                      T.callback = bt, Et(A), G = !0;
                      break l;
                    }
                    T === D(L) && d(L), Et(A);
                  } else d(L);
                  T = D(L);
                }
                if (T !== null) G = !0;
                else {
                  var Wt = D(rt);
                  Wt !== null && F(
                    zl,
                    Wt.startTime - A
                  ), G = !1;
                }
              }
              break t;
            } finally {
              T = null, q = Z, Rt = !1;
            }
            G = void 0;
          }
        } finally {
          G ? pt() : Ut = !1;
        }
      }
    }
    var pt;
    if (typeof yl == "function")
      pt = function() {
        yl(zt);
      };
    else if (typeof MessageChannel < "u") {
      var sl = new MessageChannel(), tl = sl.port2;
      sl.port1.onmessage = zt, pt = function() {
        tl.postMessage(null);
      };
    } else
      pt = function() {
        Ft(zt, 0);
      };
    function F(A, G) {
      P = Ft(function() {
        A(E.unstable_now());
      }, G);
    }
    E.unstable_IdlePriority = 5, E.unstable_ImmediatePriority = 1, E.unstable_LowPriority = 4, E.unstable_NormalPriority = 3, E.unstable_Profiling = null, E.unstable_UserBlockingPriority = 2, E.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, E.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : dt = 0 < A ? Math.floor(1e3 / A) : 5;
    }, E.unstable_getCurrentPriorityLevel = function() {
      return q;
    }, E.unstable_next = function(A) {
      switch (q) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = q;
      }
      var Z = q;
      q = G;
      try {
        return A();
      } finally {
        q = Z;
      }
    }, E.unstable_requestPaint = function() {
      Tt = !0;
    }, E.unstable_runWithPriority = function(A, G) {
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
      var Z = q;
      q = A;
      try {
        return G();
      } finally {
        q = Z;
      }
    }, E.unstable_scheduleCallback = function(A, G, Z) {
      var ut = E.unstable_now();
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
        id: C++,
        callback: G,
        priorityLevel: A,
        startTime: Z,
        expirationTime: bt,
        sortIndex: -1
      }, Z > ut ? (A.sortIndex = Z, Y(rt, A), D(L) === null && A === D(rt) && (Bt ? (ol(P), P = -1) : Bt = !0, F(zl, Z - ut))) : (A.sortIndex = bt, Y(L, A), wt || Rt || (wt = !0, Ut || (Ut = !0, pt()))), A;
    }, E.unstable_shouldYield = W, E.unstable_wrapCallback = function(A) {
      var G = q;
      return function() {
        var Z = q;
        q = G;
        try {
          return A.apply(this, arguments);
        } finally {
          q = Z;
        }
      };
    };
  })(Io)), Io;
}
var _v;
function Nh() {
  return _v || (_v = 1, Wo.exports = Oh()), Wo.exports;
}
var Po = { exports: {} }, k = {};
var xv;
function Ah() {
  if (xv) return k;
  xv = 1;
  var E = /* @__PURE__ */ Symbol.for("react.transitional.element"), Y = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), d = /* @__PURE__ */ Symbol.for("react.strict_mode"), B = /* @__PURE__ */ Symbol.for("react.profiler"), w = /* @__PURE__ */ Symbol.for("react.consumer"), Nt = /* @__PURE__ */ Symbol.for("react.context"), at = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), rt = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), T = /* @__PURE__ */ Symbol.for("react.activity"), q = /* @__PURE__ */ Symbol.for("react.view_transition"), Rt = Symbol.iterator;
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
  }, Tt = Object.assign, Ft = {};
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
  function Et(s, O, X) {
    this.props = s, this.context = O, this.refs = Ft, this.updater = X || Bt;
  }
  var zl = Et.prototype = new yl();
  zl.constructor = Et, Tt(zl, ol.prototype), zl.isPureReactComponent = !0;
  var Ut = Array.isArray;
  function P() {
  }
  var dt = { H: null, A: null, T: null, S: null }, ht = Object.prototype.hasOwnProperty;
  function W(s, O, X) {
    var M = X.ref;
    return {
      $$typeof: E,
      type: s,
      key: O,
      ref: M !== void 0 ? M : null,
      props: X
    };
  }
  function zt(s, O) {
    return W(s.type, O, s.props);
  }
  function pt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === E;
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
  function G(s, O, X, M, vt) {
    var ft = typeof s;
    (ft === "undefined" || ft === "boolean") && (s = null);
    var _t = !1;
    if (s === null) _t = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          _t = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case E:
            case Y:
              _t = !0;
              break;
            case C:
              return _t = s._init, G(
                _t(s._payload),
                O,
                X,
                M,
                vt
              );
          }
      }
    if (_t)
      return vt = vt(s), _t = M === "" ? "." + F(s, 0) : M, Ut(vt) ? (X = "", _t != null && (X = _t.replace(tl, "$&/") + "/"), G(vt, O, X, "", function(Il) {
        return Il;
      })) : vt != null && (pt(vt) && (vt = zt(
        vt,
        X + (vt.key == null || s && s.key === vt.key ? "" : ("" + vt.key).replace(
          tl,
          "$&/"
        ) + "/") + _t
      )), O.push(vt)), 1;
    _t = 0;
    var U = M === "" ? "." : M + ":";
    if (Ut(s))
      for (var J = 0; J < s.length; J++)
        M = s[J], ft = U + F(M, J), _t += G(
          M,
          O,
          X,
          ft,
          vt
        );
    else if (J = wt(s), typeof J == "function")
      for (s = J.call(s), J = 0; !(M = s.next()).done; )
        M = M.value, ft = U + F(M, J++), _t += G(
          M,
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
          M,
          vt
        );
      throw O = String(s), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return _t;
  }
  function Z(s, O, X) {
    if (s == null) return s;
    var M = [], vt = 0;
    return G(s, M, "", "", function(ft) {
      return O.call(X, ft, vt++);
    }), M;
  }
  function ut(s) {
    if (s._status === -1) {
      var O = s._result, X = O();
      X.then(
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = M, X.status === void 0 && (X.status = "fulfilled", X.value = M));
        },
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = M, X.status === void 0 && (X.status = "rejected", X.reason = M));
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
      var M = s(), vt = dt.S;
      vt !== null && vt(X, M), typeof M == "object" && M !== null && typeof M.then == "function" && M.then(P, bt);
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
      if (!pt(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return k.Activity = T, k.Children = He, k.Component = ol, k.Fragment = D, k.Profiler = B, k.PureComponent = Et, k.StrictMode = d, k.Suspense = L, k.ViewTransition = q, k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = dt, k.__COMPILER_RUNTIME = {
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
    var M = Tt({}, s.props), vt = s.key;
    if (O != null)
      for (ft in O.key !== void 0 && (vt = "" + O.key), O)
        !ht.call(O, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && O.ref === void 0 || (M[ft] = O[ft]);
    var ft = arguments.length - 2;
    if (ft === 1) M.children = X;
    else if (1 < ft) {
      for (var _t = Array(ft), U = 0; U < ft; U++)
        _t[U] = arguments[U + 2];
      M.children = _t;
    }
    return W(s.type, vt, M);
  }, k.createContext = function(s) {
    return s = {
      $$typeof: Nt,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: w,
      _context: s
    }, s;
  }, k.createElement = function(s, O, X) {
    var M, vt = {}, ft = null;
    if (O != null)
      for (M in O.key !== void 0 && (ft = "" + O.key), O)
        ht.call(O, M) && M !== "key" && M !== "__self" && M !== "__source" && (vt[M] = O[M]);
    var _t = arguments.length - 2;
    if (_t === 1) vt.children = X;
    else if (1 < _t) {
      for (var U = Array(_t), J = 0; J < _t; J++)
        U[J] = arguments[J + 2];
      vt.children = U;
    }
    if (s && s.defaultProps)
      for (M in _t = s.defaultProps, _t)
        vt[M] === void 0 && (vt[M] = _t[M]);
    return W(s, ft, vt);
  }, k.createRef = function() {
    return { current: null };
  }, k.forwardRef = function(s) {
    return { $$typeof: at, render: s };
  }, k.isValidElement = pt, k.lazy = function(s) {
    return {
      $$typeof: C,
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
var Ov;
function cs() {
  return Ov || (Ov = 1, Po.exports = Ah()), Po.exports;
}
var ts = { exports: {} }, El = {};
var Nv;
function ph() {
  if (Nv) return El;
  Nv = 1;
  var E = cs();
  function Y(C) {
    var T = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var q = 2; q < arguments.length; q++)
        T += "&args[]=" + encodeURIComponent(arguments[q]);
    }
    return "Minified React error #" + C + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function D() {
  }
  var d = {
    d: {
      f: D,
      r: function() {
        throw Error(Y(522));
      },
      D,
      C: D,
      L: D,
      m: D,
      X: D,
      S: D,
      M: D
    },
    p: 0,
    findDOMNode: null
  }, B = /* @__PURE__ */ Symbol.for("react.portal"), w = /* @__PURE__ */ Symbol.for("react.recoverable"), Nt = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function at(C, T, q) {
    var Rt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: Rt == null ? null : Rt === Nt ? Nt : "" + Rt,
      children: C,
      containerInfo: T,
      implementation: q
    };
  }
  var L = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function rt(C, T) {
    if (C === "font") return "";
    if (typeof T == "string")
      return T === "use-credentials" ? T : "";
  }
  return El.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, El.browser = function(C) {
    return { $$typeof: w, _reason: C };
  }, El.createPortal = function(C, T) {
    var q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
      throw Error(Y(299));
    return at(C, T, null, q);
  }, El.flushSync = function(C) {
    var T = L.T, q = d.p;
    try {
      if (L.T = null, d.p = 2, C) return C();
    } finally {
      L.T = T, d.p = q, d.d.f();
    }
  }, El.preconnect = function(C, T) {
    typeof C == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, d.d.C(C, T));
  }, El.prefetchDNS = function(C) {
    typeof C == "string" && d.d.D(C);
  }, El.preinit = function(C, T) {
    if (typeof C == "string" && T && typeof T.as == "string") {
      var q = T.as, Rt = rt(q, T.crossOrigin), wt = typeof T.integrity == "string" ? T.integrity : void 0, Bt = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      q === "style" ? d.d.S(
        C,
        typeof T.precedence == "string" ? T.precedence : void 0,
        {
          crossOrigin: Rt,
          integrity: wt,
          fetchPriority: Bt
        }
      ) : q === "script" && d.d.X(C, {
        crossOrigin: Rt,
        integrity: wt,
        fetchPriority: Bt,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, El.preinitModule = function(C, T) {
    if (typeof C == "string")
      if (typeof T == "object" && T !== null) {
        if (T.as == null || T.as === "script") {
          var q = rt(
            T.as,
            T.crossOrigin
          );
          d.d.M(C, {
            crossOrigin: q,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
            nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
          });
        }
      } else T == null && d.d.M(C);
  }, El.preload = function(C, T) {
    if (typeof C == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var q = T.as, Rt = rt(q, T.crossOrigin);
      d.d.L(C, q, {
        crossOrigin: Rt,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0,
        type: typeof T.type == "string" ? T.type : void 0,
        fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
        referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
        imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
        imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
        media: typeof T.media == "string" ? T.media : void 0
      });
    }
  }, El.preloadModule = function(C, T) {
    if (typeof C == "string")
      if (T) {
        var q = rt(T.as, T.crossOrigin);
        d.d.m(C, {
          as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
          crossOrigin: q,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0
        });
      } else d.d.m(C);
  }, El.requestFormReset = function(C) {
    d.d.r(C);
  }, El.unstable_batchedUpdates = function(C, T) {
    return C(T);
  }, El.useFormState = function(C, T, q) {
    return L.H.useFormState(C, T, q);
  }, El.useFormStatus = function() {
    return L.H.useHostTransitionStatus();
  }, El.version = "19.3.1", El;
}
var Av;
function Yv() {
  if (Av) return ts.exports;
  Av = 1;
  function E() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (Y) {
        console.error(Y);
      }
  }
  return E(), ts.exports = ph(), ts.exports;
}
var pv;
function Mh() {
  if (pv) return Kn;
  pv = 1;
  var E = Nh(), Y = cs(), D = Yv();
  function d(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function B(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function w(t) {
    for (var l = t, e = l; e && !e.alternate; )
      l = e, (l.flags & 4098) !== 0 && (t = l.return), e = l.return;
    for (; l.return; ) l = l.return;
    return l.tag === 3 ? t : null;
  }
  function Nt(t) {
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
  function L(t) {
    if (w(t) !== t)
      throw Error(d(188));
  }
  function rt(t) {
    var l = t.alternate;
    if (!l) {
      if (l = w(t), l === null) throw Error(d(188));
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
          if (n === e) return L(a), t;
          if (n === u) return L(a), l;
          n = n.sibling;
        }
        throw Error(d(188));
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
          if (!i) throw Error(d(189));
        }
      }
      if (e.alternate !== u) throw Error(d(190));
    }
    if (e.tag !== 3) throw Error(d(188));
    return e.stateNode.current === e ? t : l;
  }
  function C(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = C(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  function T(t, l, e, u, a, n) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && e(t, u, a, n) || (t.tag !== 22 || t.memoizedState === null) && (l || t.tag !== 5 && t.tag !== 27) && T(
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
  function q(t) {
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
    var l = [null, null], e = q(t);
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
  function Tt(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(d(559));
    }
  }
  var Ft = null, ol = null;
  function yl(t, l, e) {
    return t === e ? !0 : t === l ? (Ft = t, !0) : !1;
  }
  function Et(t, l, e) {
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
  var P = Object.assign, dt = /* @__PURE__ */ Symbol.for("react.element"), ht = /* @__PURE__ */ Symbol.for("react.transitional.element"), W = /* @__PURE__ */ Symbol.for("react.portal"), zt = /* @__PURE__ */ Symbol.for("react.fragment"), pt = /* @__PURE__ */ Symbol.for("react.strict_mode"), sl = /* @__PURE__ */ Symbol.for("react.profiler"), tl = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), A = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), ut = /* @__PURE__ */ Symbol.for("react.memo"), bt = /* @__PURE__ */ Symbol.for("react.lazy"), Wt = /* @__PURE__ */ Symbol.for("react.activity"), se = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), He = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), s = /* @__PURE__ */ Symbol.for("react.view_transition"), O = /* @__PURE__ */ Symbol.for("react.recoverable"), X = Symbol.iterator;
  function M(t) {
    return t === null || typeof t != "object" ? null : (t = X && t[X] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var vt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ft(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === vt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case zt:
        return "Fragment";
      case sl:
        return "Profiler";
      case pt:
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
  var _t = Array.isArray, U = Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = D.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Il = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Au = [], be = -1;
  function Pl(t) {
    return { current: t };
  }
  function ll(t) {
    0 > be || (t.current = Au[be], Au[be] = null, be--);
  }
  function Ht(t, l) {
    be++, Au[be] = t.current, t.current = l;
  }
  var Ol = Pl(null), Hl = Pl(null), _l = Pl(null), Ql = Pl(null);
  function je(t, l) {
    switch (Ht(_l, l), Ht(Hl, t), Ht(Ol, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Md(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = Md(l), t = Dd(l, t);
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
    l !== null && (Va._currentValue = l.memoizedState, Ht(Ql, t)), l = Ol.current;
    var e = Dd(l, t.type);
    l !== e && (Ht(Hl, t), Ht(Ol, e));
  }
  function I(t) {
    Hl.current === t && (ll(Ol), ll(Hl)), Ql.current === t && (ll(Ql), Va._currentValue = Il);
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
                } catch (p) {
                  var r = p;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (p) {
                  r = p;
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
              } catch (p) {
                r = p;
              }
              (_ = t()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (p) {
            if (p && r && typeof p.stack == "string")
              return [p.stack, r.stack];
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
  var cl = Object.prototype.hasOwnProperty, It = E.unstable_scheduleCallback, Vl = E.unstable_cancelCallback, ka = E.unstable_shouldYield, Fa = E.unstable_requestPaint, Nl = E.unstable_now, $n = E.unstable_getCurrentPriorityLevel, ea = E.unstable_ImmediatePriority, kn = E.unstable_UserBlockingPriority, pu = E.unstable_NormalPriority, Wa = E.unstable_LowPriority, Fn = E.unstable_IdlePriority, Ec = E.log, Wn = E.unstable_setDisableYieldValue, Mu = null, Al = null;
  function Ee(t) {
    if (typeof Ec == "function" && Wn(t), Al && typeof Al.setStrictMode == "function")
      try {
        Al.setStrictMode(Mu, t);
      } catch {
      }
  }
  var pl = Math.clz32 ? Math.clz32 : Du, zc = Math.log, Ml = Math.LN2;
  function Du(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (zc(t) / Ml | 0) | 0;
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
        var u = 31 - pl(e), a = 1 << u;
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
  function V(t, l, e, u, a, n) {
    var i = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, f = t.expirationTimes, m = t.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var S = 31 - pl(e), _ = 1 << S;
      c[S] = 0, f[S] = -1;
      var r = m[S];
      if (r !== null)
        for (m[S] = null, S = 0; S < r.length; S++) {
          var g = r[S];
          g !== null && (g.lane &= -536870913);
        }
      e &= ~_;
    }
    u !== 0 && tt(t, u, 0), n !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function tt(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var u = 31 - pl(l);
    t.entangledLanes |= l, t.entanglements[u] = t.entanglements[u] | 1073741824 | e & 261930;
  }
  function nt(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var u = 31 - pl(e), a = 1 << u;
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
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : vv(t.type));
  }
  function Lt(t, l) {
    var e = J.p;
    try {
      return J.p = t, l();
    } finally {
      J.p = e;
    }
  }
  var ct = Math.random().toString(36).slice(2), Qt = "__reactFiber$" + ct, el = "__reactProps$" + ct, te = "__reactContainer$" + ct, fs = "__reactEvents$" + ct, Gv = "__reactListeners$" + ct, Xv = "__reactHandles$" + ct, os = "__reactResources$" + ct, Pa = "__reactMarker$" + ct, Pn = "__reactLoad$" + ct;
  function ti(t) {
    delete t[Qt], delete t[el], delete t[Gv], delete t[Xv];
  }
  function Ru(t) {
    var l;
    if (l = t[Qt]) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[te] || e[Qt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = Jd(t); t !== null; ) {
            if (e = t[Qt]) return e;
            t = Jd(t);
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
    throw Error(d(33));
  }
  function na(t) {
    var l = t[os];
    return l || (l = t[os] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function rl(t) {
    t[Pa] = !0;
  }
  function ss(t) {
    t[Pn] = void 0;
  }
  var rs = /* @__PURE__ */ new Set(), ds = {};
  function Uu(t, l) {
    ia(t, l), ia(t + "Capture", l);
  }
  function ia(t, l) {
    for (ds[t] = l, t = 0; t < l.length; t++)
      rs.add(l[t]);
  }
  var Qv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), vs = {}, ms = {};
  function Zv(t) {
    return cl.call(ms, t) ? !0 : cl.call(vs, t) ? !1 : Qv.test(t) ? ms[t] = !0 : (vs[t] = !0, !1);
  }
  var xt = !1;
  function ys() {
    var t = xt;
    return xt = !1, t;
  }
  function li(t, l, e) {
    if (Zv(l))
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
  function Ll(t) {
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
  function hs(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Vv(t, l, e) {
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
  function _c(t) {
    if (!t._valueTracker) {
      var l = hs(t) ? "checked" : "value";
      t._valueTracker = Vv(
        t,
        l,
        "" + t[l]
      );
    }
  }
  function gs(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), u = "";
    return t && (u = hs(t) ? t.checked ? "true" : "false" : t.value), t = u, t !== e ? (l.setValue(t), !0) : !1;
  }
  var Lv = /[\n"\\]/g;
  function le(t) {
    return t.replace(
      Lv,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function xc(t, l, e, u, a, n, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + Ll(l)) : t.value !== "" + Ll(l) && (t.value = "" + Ll(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? i === "number" && t.value == l ? Oc(t, Ll(t.value)) : Oc(t, Ll(l)) : e != null ? Oc(t, Ll(e)) : u != null && t.removeAttribute("value"), a == null && n != null && (t.defaultChecked = !!n), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + Ll(c) : t.removeAttribute("name");
  }
  function bs(t, l, e, u, a, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null)) {
        _c(t);
        return;
      }
      e = e != null ? "" + Ll(e) : "", l = l != null ? "" + Ll(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    u = u ?? a, u = typeof u != "function" && typeof u != "symbol" && !!u, t.checked = c ? t.checked : !!u, t.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), _c(t);
  }
  function Oc(t, l) {
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
      for (e = "" + Ll(e), l = null, a = 0; a < t.length; a++) {
        if (t[a].value === e) {
          t[a].selected = !0, u && (t[a].defaultSelected = !0);
          return;
        }
        l !== null || t[a].disabled || (l = t[a]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Ss(t, l, e) {
    if (l != null && (l = "" + Ll(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + Ll(e) : "";
  }
  function Ts(t, l, e, u) {
    if (l == null) {
      if (u != null) {
        if (e != null) throw Error(d(92));
        if (_t(u)) {
          if (1 < u.length) throw Error(d(93));
          u = u[0];
        }
        e = u;
      }
      e == null && (e = ""), l = e;
    }
    e = Ll(l), t.defaultValue = e, u = t.textContent, u === e && u !== "" && u !== null && (t.value = u), _c(t);
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
  var Kv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Es(t, l, e) {
    var u = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? u ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : u ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Kv.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function zs(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(d(62));
    if (t = t.style, e != null) {
      for (var u in e)
        !e.hasOwnProperty(u) || l != null && l.hasOwnProperty(u) || (u.indexOf("--") === 0 ? t.setProperty(u, "") : u === "float" ? t.cssFloat = "" : t[u] = "", xt = !0);
      for (var a in l)
        u = l[a], l.hasOwnProperty(a) && e[a] !== u && (Es(t, a, u), xt = !0);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && Es(t, n, l[n]);
  }
  function Nc(t) {
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
  var wv = /* @__PURE__ */ new Map([
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
  ]), Jv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ui(t) {
    return Jv.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function ze() {
  }
  var Ac = null;
  function pc(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var oa = null, sa = null;
  function _s(t) {
    var l = aa(t);
    if (l && (t = l.stateNode)) {
      var e = t[el] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (xc(
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
                if (!a) throw Error(d(90));
                xc(
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
              u = e[l], u.form === t.form && gs(u);
          }
          break t;
        case "textarea":
          Ss(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && ca(t, !!e.multiple, l, !1);
      }
    }
  }
  var Mc = !1;
  function xs(t, l, e) {
    if (Mc) return t(l, e);
    Mc = !0;
    try {
      var u = t(l);
      return u;
    } finally {
      if (Mc = !1, (oa !== null || sa !== null) && (uc(), oa && (l = oa, t = sa, sa = oa = null, _s(l), t)))
        for (l = 0; l < t.length; l++) _s(t[l]);
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
        d(231, l, typeof e)
      );
    return e;
  }
  var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Dc = !1;
  if (qe)
    try {
      var en = {};
      Object.defineProperty(en, "passive", {
        get: function() {
          Dc = !0;
        }
      }), window.addEventListener("test", en, en), window.removeEventListener("test", en, en);
    } catch {
      Dc = !1;
    }
  var tu = null, Cc = null, ai = null;
  function Os() {
    if (ai) return ai;
    var t, l = Cc, e = l.length, u, a = "value" in tu ? tu.value : tu.textContent, n = a.length;
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
  function Ns() {
    return !1;
  }
  function Dl(t) {
    function l(e, u, a, n, i) {
      this._reactName = e, this._targetInst = a, this.type = u, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? ii : Ns, this.isPropagationStopped = Ns, this;
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
  }, ci = Dl(lu), un = P({}, lu, { view: 0, detail: 0 }), $v = Dl(un), Rc, Uc, an, fi = P({}, un, {
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
    getModifierState: jc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== an && (an && t.type === "mousemove" ? (Rc = t.screenX - an.screenX, Uc = t.screenY - an.screenY) : Uc = Rc = 0, an = t), Rc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Uc;
    }
  }), As = Dl(fi), kv = P({}, fi, { dataTransfer: 0 }), Fv = Dl(kv), Wv = P({}, un, { relatedTarget: 0 }), Hc = Dl(Wv), Iv = P({}, lu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Pv = Dl(Iv), tm = P({}, lu, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), lm = Dl(tm), em = P({}, lu, { data: 0 }), ps = Dl(em), um = {
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
  }, am = {
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
  }, nm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function im(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = nm[t]) ? !!l[t] : !1;
  }
  function jc() {
    return im;
  }
  var cm = P({}, un, {
    key: function(t) {
      if (t.key) {
        var l = um[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = ni(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? am[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jc,
    charCode: function(t) {
      return t.type === "keypress" ? ni(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? ni(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), fm = Dl(cm), om = P({}, fi, {
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
  }), Ms = Dl(om), sm = P({}, lu, { submitter: 0 }), rm = Dl(sm), dm = P({}, un, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jc
  }), vm = Dl(dm), mm = P({}, lu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ym = Dl(mm), hm = P({}, fi, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gm = Dl(hm), bm = P({}, lu, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Sm = Dl(bm), Tm = [9, 13, 27, 32], Bc = qe && "CompositionEvent" in window, nn = null;
  qe && "documentMode" in document && (nn = document.documentMode);
  var Em = qe && "TextEvent" in window && !nn, Ds = qe && (!Bc || nn && 8 < nn && 11 >= nn), Cs = " ", Rs = !1;
  function Us(t, l) {
    switch (t) {
      case "keyup":
        return Tm.indexOf(l.keyCode) !== -1;
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
  function Hs(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ra = !1;
  function zm(t, l) {
    switch (t) {
      case "compositionend":
        return Hs(l);
      case "keypress":
        return l.which !== 32 ? null : (Rs = !0, Cs);
      case "textInput":
        return t = l.data, t === Cs && Rs ? null : t;
      default:
        return null;
    }
  }
  function _m(t, l) {
    if (ra)
      return t === "compositionend" || !Bc && Us(t, l) ? (t = Os(), ai = Cc = tu = null, ra = !1, t) : null;
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
        return Ds && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var xm = {
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
  function js(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!xm[t.type] : l === "textarea";
  }
  function Bs(t, l, e, u) {
    oa ? sa ? sa.push(u) : sa = [u] : oa = u, l = oc(l, "onChange"), 0 < l.length && (e = new ci(
      "onChange",
      "change",
      null,
      e,
      u
    ), t.push({ event: e, listeners: l }));
  }
  var cn = null, fn = null;
  function Om(t) {
    _d(t, 0);
  }
  function oi(t) {
    var l = tn(t);
    if (gs(l)) return t;
  }
  function qs(t, l) {
    if (t === "change") return l;
  }
  var Ys = !1;
  if (qe) {
    var qc;
    if (qe) {
      var Yc = "oninput" in document;
      if (!Yc) {
        var Gs = document.createElement("div");
        Gs.setAttribute("oninput", "return;"), Yc = typeof Gs.oninput == "function";
      }
      qc = Yc;
    } else qc = !1;
    Ys = qc && (!document.documentMode || 9 < document.documentMode);
  }
  function Xs() {
    cn && (cn.detachEvent("onpropertychange", Qs), fn = cn = null);
  }
  function Qs(t) {
    if (t.propertyName === "value" && oi(fn)) {
      var l = [];
      Bs(
        l,
        fn,
        t,
        pc(t)
      ), xs(Om, l);
    }
  }
  function Nm(t, l, e) {
    t === "focusin" ? (Xs(), cn = l, fn = e, cn.attachEvent("onpropertychange", Qs)) : t === "focusout" && Xs();
  }
  function Am(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return oi(fn);
  }
  function pm(t, l) {
    if (t === "click") return oi(l);
  }
  function Mm(t, l) {
    if (t === "input" || t === "change")
      return oi(l);
  }
  function Dm(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var Kl = typeof Object.is == "function" ? Object.is : Dm;
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
  function Gc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Zs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Vs(t, l) {
    var e = Zs(t);
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
      e = Zs(e);
    }
  }
  function Ls(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Ls(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function Ks(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Gc(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Gc(t.document);
    }
    return l;
  }
  function Xc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Cm = qe && "documentMode" in document && 11 >= document.documentMode, da = null, Qc = null, sn = null, Zc = !1;
  function ws(t, l, e) {
    var u = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Zc || da == null || da !== Gc(u) || (u = da, "selectionStart" in u && Xc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), sn && on(sn, u) || (sn = u, u = oc(Qc, "onSelect"), 0 < u.length && (l = new ci(
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
  }, Vc = {}, Js = {};
  qe && (Js = document.createElement("div").style, "AnimationEvent" in window || (delete va.animationend.animation, delete va.animationiteration.animation, delete va.animationstart.animation), "TransitionEvent" in window || delete va.transitionend.transition);
  function ju(t) {
    if (Vc[t]) return Vc[t];
    if (!va[t]) return t;
    var l = va[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Js)
        return Vc[t] = l[e];
    return t;
  }
  var $s = ju("animationend"), ks = ju("animationiteration"), Fs = ju("animationstart"), Rm = ju("transitionrun"), Um = ju("transitionstart"), Hm = ju("transitioncancel"), Ws = ju("transitionend"), Is = /* @__PURE__ */ new Map(), Lc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Lc.push("scrollEnd");
  function de(t, l) {
    Is.set(t, l), Uu(l, [t]);
  }
  var jm = 0;
  function Ye(t, l) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (l.autoName !== null) return l.autoName;
    t = he.identifierPrefix;
    var e = jm++;
    return t = "_" + t + "t_" + e.toString(32) + "_", l.autoName = t;
  }
  function Ps(t) {
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
    return t = Ps(t), l = Ps(l), l == null ? t === "auto" ? null : t : l === "auto" ? null : l;
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
  }, ee = [], ma = 0, Kc = 0;
  function ri() {
    for (var t = ma, l = Kc = ma = 0; l < t; ) {
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
      n !== 0 && tr(e, a, n);
    }
  }
  function di(t, l, e, u) {
    ee[ma++] = t, ee[ma++] = l, ee[ma++] = e, ee[ma++] = u, Kc |= u, t.lanes |= u, t = t.alternate, t !== null && (t.lanes |= u);
  }
  function wc(t, l, e, u) {
    return di(t, l, e, u), vi(t);
  }
  function Bu(t, l) {
    return di(t, null, null, l), vi(t);
  }
  function tr(t, l, e) {
    t.lanes |= e;
    var u = t.alternate;
    u !== null && (u.lanes |= e);
    for (var a = !1, n = t.return; n !== null; )
      n.childLanes |= e, u = n.alternate, u !== null && (u.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (a = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, a && l !== null && (a = 31 - pl(e), t = n.hiddenUpdates, u = t[a], u === null ? t[a] = [l] : u.push(l), l.lane = e | 536870912), n) : null;
  }
  function vi(t) {
    if (50 < Rn)
      throw Rn = 0, ec = null, Error(d(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ya = {};
  function Bm(t, l, e, u) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Bl(t, l, e, u) {
    return new Bm(t, l, e, u);
  }
  function Jc(t) {
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
  function lr(t, l) {
    t.flags &= 1206910978;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function mi(t, l, e, u, a, n) {
    var i = 0;
    if (u = t, typeof u == "function") Jc(u) && (i = 1);
    else if (typeof u == "string")
      i = sh(
        t,
        e,
        Ol.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (u) {
        case Wt:
          return t = Bl(31, e, l, a), t.elementType = Wt, t.lanes = n, t;
        case zt:
          return qu(e.children, a, n, l);
        case pt:
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
            d(130, t === null ? "null" : typeof t, "")
          ), u = null;
      }
    return l = Bl(i, e, l, a), l.elementType = t, l.type = u, l.lanes = n, l;
  }
  function qu(t, l, e, u) {
    return t = Bl(7, t, u, l), t.lanes = e, t;
  }
  function $c(t, l, e) {
    return t = Bl(6, t, null, l), t.lanes = e, t;
  }
  function er(t) {
    var l = Bl(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function kc(t, l, e) {
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
  var ur = /* @__PURE__ */ new WeakMap();
  function ue(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = ur.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: la(l)
      }, ur.set(t, l), l);
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
  function ar(t, l, e) {
    ae[ne++] = _e, ae[ne++] = xe, ae[ne++] = eu, eu = t;
    var u = _e;
    t = xe;
    var a = 32 - pl(u) - 1;
    u &= ~(1 << a), e += 1;
    var n = 32 - pl(l) + a;
    if (30 < n) {
      var i = a - a % 5;
      n = (u & (1 << i) - 1).toString(32), u >>= i, a -= i, _e = 1 << 32 - pl(l) + a | e << a | u, xe = n + t;
    } else
      _e = 1 << n | e << a | u, xe = t;
  }
  function hi(t) {
    t.return !== null && (Qe(t, 1), ar(t, 1, 0));
  }
  function Fc(t) {
    for (; t === yi; )
      yi = ha[--ga], ha[ga] = null, rn = ha[--ga], ha[ga] = null;
    for (; t === eu; )
      eu = ae[--ne], ae[ne] = null, xe = ae[--ne], ae[ne] = null, _e = ae[--ne], ae[ne] = null;
  }
  function nr(t, l) {
    ae[ne++] = _e, ae[ne++] = xe, ae[ne++] = eu, _e = l.id, xe = l.overflow, eu = t;
  }
  var dl = null, Gt = null, it = !1, uu = null, ie = !1, Wc = Error(d(519));
  function au(t) {
    var l = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw dn(ue(l, t)), Wc;
  }
  function ir(t) {
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
        st("invalid", l), bs(
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
        st("invalid", l), Ts(l, u.value, u.defaultValue, u.children);
    }
    e = u.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || u.suppressHydrationWarning === !0 || Ad(l.textContent, e) ? (u.popover != null && (st("beforetoggle", l), st("toggle", l)), u.onScroll != null && st("scroll", l), u.onScrollEnd != null && st("scrollend", l), u.onClick != null && (l.onclick = ze), l = !0) : l = !1, l || au(t, !0);
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
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || Mo(t.type, t.memoizedProps)), e = !e), e && Gt && au(t), gi(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(d(317));
      Gt = wd(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(d(317));
      Gt = wd(t);
    } else
      l === 27 ? (l = Gt, Tu(t.type) ? (t = Yo, Yo = null, Gt = t) : Gt = l) : Gt = dl ? fe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Yu() {
    Gt = dl = null, it = !1;
  }
  function Ic() {
    var t = uu;
    return t !== null && (Gl === null ? Gl = t : Gl.push.apply(
      Gl,
      t
    ), uu = null), t;
  }
  function dn(t) {
    uu === null ? uu = [t] : uu.push(t);
  }
  var Pc = Pl(null), Gu = null, Ze = null;
  function nu(t, l, e) {
    Ht(Pc, l._currentValue), l._currentValue = e;
  }
  function Ve(t) {
    t._currentValue = Pc.current, ll(Pc);
  }
  function bi(t, l, e) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, u !== null && (u.childLanes |= l)) : u !== null && (u.childLanes & l) !== l && (u.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function tf(t, l, e, u) {
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
        if (i = a.return, i === null) throw Error(d(341));
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
        if (i === null) throw Error(d(387));
        if (i = i.memoizedProps, i !== null) {
          var c = a.type;
          Kl(a.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (a === Ql.current) {
        if (i = a.alternate, i === null) throw Error(d(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(Va) : t = [Va]);
      }
      a = a.return;
    }
    return t !== null && tf(
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
    return cr(Gu, t);
  }
  function Ti(t, l) {
    return Gu === null && Qu(t), cr(t, l);
  }
  function cr(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, Ze === null) {
      if (t === null) throw Error(d(308));
      Ze = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Ze = Ze.next = l;
    return e;
  }
  var qm = typeof AbortController < "u" ? AbortController : function() {
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
  }, Ym = E.unstable_scheduleCallback, Gm = E.unstable_NormalPriority, ul = {
    $$typeof: F,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function lf() {
    return {
      controller: new qm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function vn(t) {
    t.refCount--, t.refCount === 0 && Ym(Gm, function() {
      t.controller.abort();
    });
  }
  function fr(t, l) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var e = t.transitionTypes;
      for (e === null && (e = t.transitionTypes = []), t = 0; t < l.length; t++) {
        var u = l[t];
        e.indexOf(u) === -1 && e.push(u);
      }
    }
  }
  var mn = null;
  function Xm(t) {
    var l = t.transitionTypes;
    return t.transitionTypes = null, l;
  }
  var yn = null, ef = 0, Zu = 0, Sa = null;
  function Qm(t, l) {
    if (yn === null) {
      var e = yn = [];
      ef = 0, Zu = To(), Sa = {
        status: "pending",
        value: void 0,
        then: function(u) {
          e.push(u);
        }
      };
    }
    return ef++, l.then(or, or), l;
  }
  function or() {
    if (--ef === 0 && (mn = null, yn !== null)) {
      Sa !== null && (Sa.status = "fulfilled");
      var t = yn;
      yn = null, Zu = 0, Sa = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Zm(t, l) {
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
  var sr = U.S;
  U.S = function(t, l) {
    if (ed = Nl(), typeof l == "object" && l !== null && typeof l.then == "function" && Qm(t, l), mn !== null)
      for (var e = qa; e !== null; )
        fr(e, mn), e = e.next;
    if (e = t.types, e !== null) {
      for (var u = qa; u !== null; )
        fr(u, e), u = u.next;
      if (Zu !== 0) {
        u = mn, u === null && (u = mn = []);
        for (var a = 0; a < e.length; a++) {
          var n = e[a];
          u.indexOf(n) === -1 && u.push(n);
        }
      }
    }
    sr !== null && sr(t, l);
  };
  var Vu = Pl(null);
  function uf() {
    var t = Vu.current;
    return t !== null ? t : Yt.pooledCache;
  }
  function Ei(t, l) {
    l === null ? Ht(Vu, Vu.current) : Ht(Vu, l.pool);
  }
  function rr() {
    var t = uf();
    return t === null ? null : { parent: ul._currentValue, pool: t };
  }
  var Ta = Error(d(460)), af = Error(d(474)), zi = Error(d(542)), _i = { then: function() {
  } };
  function dr(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function vr(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(ze, ze), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, yr(t), t === void 0 && !("reason" in l) ? Error(d(600)) : t;
      default:
        if (typeof l.status == "string") l.then(ze, ze);
        else {
          if (t = Yt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(d(482));
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
            throw t = l.reason, yr(t), t;
        }
        throw Ku = l, Ta;
    }
  }
  function Lu(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Ku = e, Ta) : e;
    }
  }
  var Ku = null;
  function mr() {
    if (Ku === null) throw Error(d(459));
    var t = Ku;
    return Ku = null, t;
  }
  function yr(t) {
    if (t === Ta || t === zi)
      throw Error(d(483));
  }
  var Ea = null, hn = 0;
  function xi(t) {
    var l = hn;
    return hn += 1, Ea === null && (Ea = []), vr(Ea, t, l);
  }
  function iu(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function Oi(t, l) {
    throw l.$$typeof === dt ? Error(d(525)) : (t = Object.prototype.toString.call(l), Error(
      d(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function hr(t) {
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
      return o === null || o.tag !== 6 ? (o = $c(h, v.mode, z), o.return = v, o) : (o = a(o, h), o.return = v, o);
    }
    function f(v, o, h, z) {
      var R = h.type;
      return R === zt ? (v = S(
        v,
        o,
        h.props.children,
        z,
        h.key
      ), iu(v, h), v) : o !== null && (o.elementType === R || typeof R == "object" && R !== null && R.$$typeof === bt && Lu(R) === o.type) ? (o = a(o, h.props), iu(o, h), o.return = v, o) : (o = mi(
        h.type,
        h.key,
        h.props,
        null,
        v.mode,
        z
      ), iu(o, h), o.return = v, o);
    }
    function m(v, o, h, z) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = kc(h, v.mode, z), o.return = v, o) : (o = a(o, h.children || []), o.return = v, o);
    }
    function S(v, o, h, z, R) {
      return o === null || o.tag !== 7 ? (o = qu(
        h,
        v.mode,
        z,
        R
      ), o.return = v, o) : (o = a(o, h), o.return = v, o);
    }
    function _(v, o, h) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = $c(
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
            return o = kc(
              o,
              v.mode,
              h
            ), o.return = v, o;
          case bt:
            return o = Lu(o), _(v, o, h);
        }
        if (_t(o) || M(o))
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
    function r(v, o, h, z) {
      var R = o !== null ? o.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return R !== null ? null : c(v, o, "" + h, z);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ht:
            return h.key === R ? f(v, o, h, z) : null;
          case W:
            return h.key === R ? m(v, o, h, z) : null;
          case bt:
            return h = Lu(h), r(v, o, h, z);
        }
        if (_t(h) || M(h))
          return R !== null ? null : S(v, o, h, z, null);
        if (typeof h.then == "function")
          return r(
            v,
            o,
            xi(h),
            z
          );
        if (h.$$typeof === F)
          return r(
            v,
            o,
            Ti(v, h),
            z
          );
        Oi(v, h);
      }
      return null;
    }
    function g(v, o, h, z, R) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return v = v.get(h) || null, c(o, v, "" + z, R);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ht:
            return v = v.get(
              z.key === null ? h : z.key
            ) || null, f(o, v, z, R);
          case W:
            return v = v.get(
              z.key === null ? h : z.key
            ) || null, m(o, v, z, R);
          case bt:
            return z = Lu(z), g(
              v,
              o,
              h,
              z,
              R
            );
        }
        if (_t(z) || M(z))
          return v = v.get(h) || null, S(o, v, z, R, null);
        if (typeof z.then == "function")
          return g(
            v,
            o,
            h,
            xi(z),
            R
          );
        if (z.$$typeof === F)
          return g(
            v,
            o,
            h,
            Ti(o, z),
            R
          );
        Oi(o, z);
      }
      return null;
    }
    function p(v, o, h, z) {
      for (var R = null, yt = null, Q = o, K = o = 0, il = null; Q !== null && K < h.length; K++) {
        Q.index > K ? (il = Q, Q = null) : il = Q.sibling;
        var St = r(
          v,
          Q,
          h[K],
          z
        );
        if (St === null) {
          Q === null && (Q = il);
          break;
        }
        t && Q && St.alternate === null && l(v, Q), o = n(St, o, K), yt === null ? R = St : yt.sibling = St, yt = St, Q = il;
      }
      if (K === h.length)
        return e(v, Q), it && Qe(v, K), R;
      if (Q === null) {
        for (; K < h.length; K++)
          Q = _(v, h[K], z), Q !== null && (o = n(
            Q,
            o,
            K
          ), yt === null ? R = Q : yt.sibling = Q, yt = Q);
        return it && Qe(v, K), R;
      }
      for (Q = u(Q); K < h.length; K++)
        il = g(
          Q,
          v,
          K,
          h[K],
          z
        ), il !== null && (t && (St = il.alternate, St !== null && Q.delete(St.key === null ? K : St.key)), o = n(
          il,
          o,
          K
        ), yt === null ? R = il : yt.sibling = il, yt = il);
      return t && Q.forEach(function(Ou) {
        return l(v, Ou);
      }), it && Qe(v, K), R;
    }
    function j(v, o, h, z) {
      if (h == null) throw Error(d(151));
      for (var R = null, yt = null, Q = o, K = o = 0, il = null, St = h.next(); Q !== null && !St.done; K++, St = h.next()) {
        Q.index > K ? (il = Q, Q = null) : il = Q.sibling;
        var Ou = r(v, Q, St.value, z);
        if (Ou === null) {
          Q === null && (Q = il);
          break;
        }
        t && Q && Ou.alternate === null && l(v, Q), o = n(Ou, o, K), yt === null ? R = Ou : yt.sibling = Ou, yt = Ou, Q = il;
      }
      if (St.done)
        return e(v, Q), it && Qe(v, K), R;
      if (Q === null) {
        for (; !St.done; K++, St = h.next())
          St = _(v, St.value, z), St !== null && (o = n(St, o, K), yt === null ? R = St : yt.sibling = St, yt = St);
        return it && Qe(v, K), R;
      }
      for (Q = u(Q); !St.done; K++, St = h.next())
        St = g(Q, v, K, St.value, z), St !== null && (t && (il = St.alternate, il !== null && Q.delete(
          il.key === null ? K : il.key
        )), o = n(St, o, K), yt === null ? R = St : yt.sibling = St, yt = St);
      return t && Q.forEach(function(zh) {
        return l(v, zh);
      }), it && Qe(v, K), R;
    }
    function et(v, o, h, z) {
      if (typeof h == "object" && h !== null && h.type === zt && h.key === null && h.props.ref === void 0 && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ht:
            t: {
              for (var R = h.key; o !== null; ) {
                if (o.key === R) {
                  if (R = h.type, R === zt) {
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
                  } else if (o.elementType === R || typeof R == "object" && R !== null && R.$$typeof === bt && Lu(R) === o.type) {
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
              h.type === zt ? (z = qu(
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
              for (R = h.key; o !== null; ) {
                if (o.key === R)
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
              z = kc(h, v.mode, z), z.return = v, v = z;
            }
            return i(v);
          case bt:
            return h = Lu(h), et(
              v,
              o,
              h,
              z
            );
        }
        if (_t(h))
          return p(
            v,
            o,
            h,
            z
          );
        if (M(h)) {
          if (R = M(h), typeof R != "function") throw Error(d(150));
          return h = R.call(h), j(
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
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, o !== null && o.tag === 6 ? (e(v, o.sibling), z = a(o, h), z.return = v, v = z) : (e(v, o), z = $c(h, v.mode, z), z.return = v, v = z), i(v)) : e(v, o);
    }
    return function(v, o, h, z) {
      try {
        hn = 0;
        var R = et(
          v,
          o,
          h,
          z
        );
        return Ea = null, R;
      } catch (Q) {
        if (Q === Ta || Q === zi) throw Q;
        var yt = Bl(29, Q, null, v.mode);
        return yt.lanes = z, yt.return = v, yt;
      }
    };
  }
  var wu = hr(!0), gr = hr(!1), cu = !1;
  function nf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function cf(t, l) {
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
    if (u = u.shared, (Ot & 2) !== 0) {
      var a = u.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), u.pending = l, l = vi(t), tr(t, null, e), l;
    }
    return di(t, u, l, e), vi(t);
  }
  function gn(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, nt(t, e);
    }
  }
  function ff(t, l) {
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
  var of = !1;
  function bn() {
    if (of) {
      var t = Sa;
      if (t !== null) throw t;
    }
  }
  function Sn(t, l, e, u) {
    of = !1;
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
        var r = c.lane & -536870913, g = r !== c.lane;
        if (g ? (mt & r) === r : (u & r) === r) {
          r !== 0 && r === Zu && (of = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var p = t, j = c;
            r = l;
            var et = e;
            switch (j.tag) {
              case 1:
                if (p = j.payload, typeof p == "function") {
                  _ = p.call(et, _, r);
                  break t;
                }
                _ = p;
                break t;
              case 3:
                p.flags = p.flags & -65537 | 128;
              case 0:
                if (p = j.payload, r = typeof p == "function" ? p.call(et, _, r) : p, r == null) break t;
                _ = P({}, _, r);
                break t;
              case 2:
                cu = !0;
            }
          }
          r = c.callback, r !== null && (t.flags |= 64, g && (t.flags |= 8192), g = a.callbacks, g === null ? a.callbacks = [r] : g.push(r));
        } else
          g = {
            lane: r,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (m = S = g, f = _) : S = S.next = g, i |= r;
        if (c = c.next, c === null) {
          if (c = a.shared.pending, c === null)
            break;
          g = c, c = g.next, g.next = null, a.lastBaseUpdate = g, a.shared.pending = null;
        }
      } while (!0);
      S === null && (f = _), a.baseState = f, a.firstBaseUpdate = m, a.lastBaseUpdate = S, n === null && (a.shared.lanes = 0), hu |= i, t.lanes = i, t.memoizedState = _;
    }
  }
  function br(t, l) {
    if (typeof t != "function")
      throw Error(d(191, t));
    t.call(l);
  }
  function Sr(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        br(e[t], l);
  }
  var su = Pl(null), Ni = Pl(0);
  function Tr(t, l) {
    t = $e, Ht(Ni, t), Ht(su, l), $e = t | l.baseLanes;
  }
  function sf() {
    Ht(Ni, $e), Ht(su, su.current);
  }
  function rf() {
    $e = Ni.current, ll(su), ll(Ni);
  }
  var gl = Pl(null), xl = null;
  function ru(t) {
    var l = t.alternate;
    Ht(bl, bl.current & 1), Ht(gl, t), xl === null && (l === null || su.current !== null || l.memoizedState !== null) && (xl = t);
  }
  function df(t) {
    Ht(bl, bl.current), Ht(gl, t), xl === null && (xl = t);
  }
  function Er(t) {
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
  function vf(t) {
    ll(bl), ll(gl), xl === t && (xl = null);
  }
  function Ai(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || Bo(e) || qo(e)))
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
  var Le = 0, lt = null, jt = null, al = null, pi = !1, za = !1, Ju = !1, Mi = 0, En = 0, _a = null, Vm = 0;
  function $t() {
    throw Error(d(321));
  }
  function mf(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!Kl(t[e], l[e])) return !1;
    return !0;
  }
  function yf(t, l, e, u, a, n) {
    return Le = n, lt = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, U.H = t === null || t.memoizedState === null ? a0 : n0, Ju = !1, n = e(u, a), Ju = !1, za && (n = _r(
      l,
      e,
      u,
      a
    )), zr(t), n;
  }
  function zr(t) {
    U.H = Bi;
    var l = jt !== null && jt.next !== null;
    if (Le = 0, al = jt = lt = null, pi = !1, En = 0, _a = null, l) throw Error(d(300));
    t === null || nl || (t = t.dependencies, t !== null && Si(t) && (nl = !0));
  }
  function _r(t, l, e, u) {
    lt = t;
    var a = 0;
    do {
      if (za && (_a = null), En = 0, za = !1, 25 <= a) throw Error(d(301));
      if (a += 1, al = jt = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      U.H = Wm, n = l(e, u);
    } while (za);
    return n;
  }
  function Lm() {
    var t = U.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? zn(l) : l, t = t.useState()[0], (jt !== null ? jt.memoizedState : null) !== t && (lt.flags |= 1024), l;
  }
  function hf() {
    var t = Mi !== 0;
    return Mi = 0, t;
  }
  function gf(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function bf(t) {
    if (pi) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      pi = !1;
    }
    Le = 0, al = jt = lt = null, za = !1, En = Mi = 0, _a = null;
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
        throw lt.alternate === null ? Error(d(467)) : Error(d(310));
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
    return En += 1, _a === null && (_a = []), t = vr(_a, t, l), l = lt, (al === null ? l.memoizedState : al.next) === null && (l = l.alternate, U.H = l === null || l.memoizedState === null ? a0 : n0), t;
  }
  function Ci(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return zn(t);
      if (t.$$typeof === O) return;
      if (t.$$typeof === F) return hl(t);
    }
    throw Error(d(438, String(t)));
  }
  function Sf(t) {
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
    return Tf(l, jt, t);
  }
  function Tf(t, l, e) {
    var u = t.queue;
    if (u === null) throw Error(d(311));
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
        if (_ !== m.lane ? (mt & _) === _ : (Le & _) === _) {
          var r = m.revertLane;
          if (r === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), _ === Zu && (S = !0);
          else if ((Le & r) === r) {
            m = m.next, r === Zu && (S = !0);
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
            }, f === null ? (c = f = _, i = n) : f = f.next = _, lt.lanes |= r, hu |= r;
          _ = m.action, Ju && e(n, _), n = m.hasEagerState ? m.eagerState : e(n, _);
        } else
          r = {
            lane: _,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, f === null ? (c = f = r, i = n) : f = f.next = r, lt.lanes |= _, hu |= _;
        m = m.next;
      } while (m !== null && m !== l);
      if (f === null ? i = n : f.next = c, !Kl(n, t.memoizedState) && (nl = !0, S && (e = Sa, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = i, t.baseQueue = f, u.lastRenderedState = n;
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function Ef(t) {
    var l = Pt(), e = l.queue;
    if (e === null) throw Error(d(311));
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
  function xr(t, l, e) {
    var u = lt, a = Pt(), n = it;
    if (n) {
      if (e === void 0) throw Error(d(407));
      e = e();
    } else e = l();
    var i = !Kl(
      (jt || a).memoizedState,
      e
    );
    if (i && (a.memoizedState = e, nl = !0), a = a.queue, xf(Ar.bind(null, u, a, t), [
      t
    ]), t = a.getSnapshot !== l || i || al !== null && (al.memoizedState.tag & 1) !== 0, xa(
      t ? 9 : 8,
      { destroy: void 0 },
      Nr.bind(null, u, a, e, l),
      null
    ), t) {
      if (u.flags |= 2048, Yt === null) throw Error(d(349));
      n || (Le & 127) !== 0 || Or(u, l, e);
    }
    return e;
  }
  function Or(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = lt.updateQueue, l === null ? (l = Di(), lt.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function Nr(t, l, e, u) {
    l.value = e, l.getSnapshot = u, pr(l) && Mr(t);
  }
  function Ar(t, l, e) {
    return e(function() {
      pr(l) && Mr(t);
    });
  }
  function pr(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !Kl(t, e);
    } catch {
      return !0;
    }
  }
  function Mr(t) {
    var l = Bu(t, 2);
    l !== null && Xl(l, t, 2);
  }
  function zf(t) {
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
  function Dr(t, l, e, u) {
    return t.baseState = e, Tf(
      t,
      jt,
      typeof u == "function" ? u : Ke
    );
  }
  function Km(t, l, e, u, a) {
    if (ji(t)) throw Error(d(485));
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
      U.T !== null ? e(!0) : n.isTransition = !1, u(n), e = l.pending, e === null ? (n.next = l.pending = n, Cr(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function Cr(t, l) {
    var e = l.action, u = l.payload, a = t.state;
    if (l.isTransition) {
      var n = U.T, i = {};
      i.types = n !== null ? n.types : null, U.T = i;
      try {
        var c = e(a, u), f = U.S;
        f !== null && f(i, c), Rr(t, l, c);
      } catch (m) {
        _f(t, l, m);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), U.T = n;
      }
    } else
      try {
        n = e(a, u), Rr(t, l, n);
      } catch (m) {
        _f(t, l, m);
      }
  }
  function Rr(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(u) {
        Ur(t, l, u);
      },
      function(u) {
        return _f(t, l, u);
      }
    ) : Ur(t, l, e);
  }
  function Ur(t, l, e) {
    l.status = "fulfilled", l.value = e, Hr(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, Cr(t, e)));
  }
  function _f(t, l, e) {
    var u = t.pending;
    if (t.pending = null, u !== null) {
      u = u.next;
      do
        l.status = "rejected", l.reason = e, Hr(l), l = l.next;
      while (l !== u);
    }
    t.action = null;
  }
  function Hr(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function jr(t, l) {
    return l;
  }
  function Br(t, l) {
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
      lastRenderedReducer: jr,
      lastRenderedState: l
    }, e.queue = u, e = l0.bind(
      null,
      lt,
      u
    ), u.dispatch = e, u = zf(!1), n = Mf.bind(
      null,
      lt,
      !1,
      u.queue
    ), u = Cl(), a = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, u.queue = a, e = Km.bind(
      null,
      lt,
      a,
      n,
      e
    ), a.dispatch = e, u.memoizedState = t, [l, e, !1];
  }
  function qr(t) {
    var l = Pt();
    return Yr(l, jt, t);
  }
  function Yr(t, l, e) {
    if (l = Tf(
      t,
      l,
      jr
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
      wm.bind(null, a, e),
      null
    )), [u, n, t];
  }
  function wm(t, l) {
    t.action = l;
  }
  function Gr(t) {
    var l = Pt(), e = jt;
    if (e !== null)
      return Yr(l, e, t);
    Pt(), l = l.memoizedState, e = Pt();
    var u = e.queue.dispatch;
    return e.memoizedState = t, [l, u, !1];
  }
  function xa(t, l, e, u) {
    return t = { tag: t, create: e, deps: u, inst: l, next: null }, l = lt.updateQueue, l === null && (l = Di(), lt.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (u = e.next, e.next = t, t.next = u, l.lastEffect = t), t;
  }
  function Xr() {
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
    jt !== null && u !== null && mf(u, jt.memoizedState.deps) ? a.memoizedState = xa(l, n, e, u) : (lt.flags |= t, a.memoizedState = xa(
      1 | l,
      n,
      e,
      u
    ));
  }
  function Qr(t, l) {
    Ui(8390656, 8, t, l);
  }
  function xf(t, l) {
    Hi(2048, 8, t, l);
  }
  function Jm(t) {
    lt.flags |= 4;
    var l = lt.updateQueue;
    if (l === null)
      l = Di(), lt.updateQueue = l, l.events = [t];
    else {
      var e = l.events;
      e === null ? l.events = [t] : e.push(t);
    }
  }
  function Zr(t) {
    var l = Pt().memoizedState;
    return Jm({ ref: l, nextImpl: t }), function() {
      if ((Ot & 2) !== 0) throw Error(d(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function Vr(t, l) {
    return Hi(4, 2, t, l);
  }
  function Lr(t, l) {
    return Hi(4, 4, t, l);
  }
  function Kr(t, l) {
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
  function wr(t, l, e) {
    e = e != null ? e.concat([t]) : null, Hi(4, 4, Kr.bind(null, l, t), e);
  }
  function Of() {
  }
  function Jr(t, l) {
    var e = Pt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    return l !== null && mf(l, u[1]) ? u[0] : (e.memoizedState = [t, l], t);
  }
  function $r(t, l) {
    var e = Pt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    if (l !== null && mf(l, u[1]))
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
  function Nf(t, l, e) {
    return e === void 0 || (Le & 1073741824) !== 0 && (mt & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = ad(), lt.lanes |= t, hu |= t, e);
  }
  function kr(t, l, e, u) {
    return Kl(e, l) ? e : su.current !== null ? (t = Nf(t, e, u), Kl(t, l) || (nl = !0), t) : (Le & 106) === 0 || (Le & 1073741824) !== 0 && (mt & 261930) === 0 ? (nl = !0, t.memoizedState = e) : (t = ad(), lt.lanes |= t, hu |= t, l);
  }
  function Fr(t, l, e, u, a) {
    var n = J.p;
    J.p = n !== 0 && 8 > n ? n : 8;
    var i = U.T, c = {};
    c.types = i !== null ? i.types : null, U.T = c, Mf(t, !1, l, e);
    try {
      var f = a(), m = U.S;
      if (m !== null && m(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var S = Zm(
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
      J.p = n, i !== null && c.types !== null && (i.types = c.types), U.T = i;
    }
  }
  function $m() {
  }
  function Af(t, l, e, u) {
    if (t.tag !== 5) throw Error(d(476));
    var a = Wr(t).queue;
    Fr(
      t,
      a,
      l,
      Il,
      e === null ? $m : function() {
        return Ir(t), e(u);
      }
    );
  }
  function Wr(t) {
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
  function Ir(t) {
    var l = Wr(t);
    l.next === null && (l = t.alternate.memoizedState), _n(
      t,
      l.next.queue,
      {},
      Fl()
    );
  }
  function pf() {
    return hl(Va);
  }
  function Pr() {
    return Pt().memoizedState;
  }
  function t0() {
    return Pt().memoizedState;
  }
  function km(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = Fl();
          t = fu(e);
          var u = ou(l, t, e);
          u !== null && (Xl(u, l, e), gn(u, l, e)), l = { cache: lf() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Fm(t, l, e) {
    var u = Fl();
    e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ji(t) ? e0(l, e) : (e = wc(t, l, e, u), e !== null && (Xl(e, t, u), u0(e, l, u)));
  }
  function l0(t, l, e) {
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
    if (ji(t)) e0(l, a);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var i = l.lastRenderedState, c = n(i, e);
          if (a.hasEagerState = !0, a.eagerState = c, Kl(c, i))
            return di(t, l, a, 0), Yt === null && ri(), !1;
        } catch {
        }
      if (e = wc(t, l, a, u), e !== null)
        return Xl(e, t, u), u0(e, l, u), !0;
    }
    return !1;
  }
  function Mf(t, l, e, u) {
    if (u = {
      lane: 2,
      revertLane: To(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ji(t)) {
      if (l) throw Error(d(479));
    } else
      l = wc(
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
  function e0(t, l) {
    za = pi = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function u0(t, l, e) {
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
  }, a0 = {
    readContext: hl,
    use: Ci,
    useCallback: function(t, l) {
      return Cl().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: hl,
    useEffect: Qr,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, Ui(
        4194308,
        4,
        Kr.bind(null, l, t),
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
      }, u.queue = t, t = t.dispatch = Fm.bind(
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
      t = zf(t);
      var l = t.queue, e = l0.bind(null, lt, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: Of,
    useDeferredValue: function(t, l) {
      var e = Cl();
      return Nf(e, t, l);
    },
    useTransition: function() {
      var t = zf(!1);
      return t = Fr.bind(
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
          throw Error(d(407));
        e = e();
      } else {
        if (e = l(), Yt === null)
          throw Error(d(349));
        (mt & 127) !== 0 || Or(u, l, e);
      }
      a.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return a.queue = n, Qr(Ar.bind(null, u, n, t), [
        t
      ]), u.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        Nr.bind(
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
        e = (u & ~(1 << 32 - pl(u) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = Mi++, 0 < e && (l += "H" + e.toString(32)), l += "_";
      } else
        e = Vm++, l = "_" + l + "r_" + e.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: pf,
    useFormState: Br,
    useActionState: Br,
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
      return l.queue = e, l = Mf.bind(
        null,
        lt,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: Sf,
    useCacheRefresh: function() {
      return Cl().memoizedState = km.bind(
        null,
        lt
      );
    },
    useEffectEvent: function(t) {
      var l = Cl(), e = { impl: t };
      return l.memoizedState = e, function() {
        if ((Ot & 2) !== 0)
          throw Error(d(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, n0 = {
    readContext: hl,
    use: Ci,
    useCallback: Jr,
    useContext: hl,
    useEffect: xf,
    useImperativeHandle: wr,
    useInsertionEffect: Vr,
    useLayoutEffect: Lr,
    useMemo: $r,
    useReducer: Ri,
    useRef: Xr,
    useState: function() {
      return Ri(Ke);
    },
    useDebugValue: Of,
    useDeferredValue: function(t, l) {
      var e = Pt();
      return kr(
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
    useSyncExternalStore: xr,
    useId: Pr,
    useHostTransitionStatus: pf,
    useFormState: qr,
    useActionState: qr,
    useOptimistic: function(t, l) {
      var e = Pt();
      return Dr(e, jt, t, l);
    },
    useMemoCache: Sf,
    useCacheRefresh: t0,
    useEffectEvent: Zr
  }, Wm = {
    readContext: hl,
    use: Ci,
    useCallback: Jr,
    useContext: hl,
    useEffect: xf,
    useImperativeHandle: wr,
    useInsertionEffect: Vr,
    useLayoutEffect: Lr,
    useMemo: $r,
    useReducer: Ef,
    useRef: Xr,
    useState: function() {
      return Ef(Ke);
    },
    useDebugValue: Of,
    useDeferredValue: function(t, l) {
      var e = Pt();
      return jt === null ? Nf(e, t, l) : kr(
        e,
        jt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = Ef(Ke)[0], l = Pt().memoizedState;
      return [
        typeof t == "boolean" ? t : zn(t),
        l
      ];
    },
    useSyncExternalStore: xr,
    useId: Pr,
    useHostTransitionStatus: pf,
    useFormState: Gr,
    useActionState: Gr,
    useOptimistic: function(t, l) {
      var e = Pt();
      return jt !== null ? Dr(e, jt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: Sf,
    useCacheRefresh: t0,
    useEffectEvent: Zr
  };
  function Df(t, l, e, u) {
    l = t.memoizedState, e = e(u, l), e = e == null ? l : P({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var Cf = {
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
  function i0(t, l, e, u, a, n, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, n, i) : l.prototype && l.prototype.isPureReactComponent ? !on(e, u) || !on(a, n) : !0;
  }
  function c0(t, l, e, u) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, u), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, u), l.state !== t && Cf.enqueueReplaceState(l, l.state, null);
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
  function f0(t) {
    si(t);
  }
  function o0(t) {
    console.error(t);
  }
  function s0(t) {
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
  function r0(t, l, e) {
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
  function Rf(t, l, e) {
    return e = fu(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      qi(t, l);
    }, e;
  }
  function d0(t) {
    return t = fu(t), t.tag = 3, t;
  }
  function v0(t, l, e, u) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = u.value;
      t.payload = function() {
        return a(n);
      }, t.callback = function() {
        r0(l, e, u);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      r0(l, e, u), typeof a != "function" && (gu === null ? gu = /* @__PURE__ */ new Set([this]) : gu.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Im(t, l, e, u, a) {
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
            return xl === null ? ac() : e.alternate === null && kt === 0 && (kt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = a, u === _i ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([u]) : l.add(u), go(t, u, a)), !1;
          case 22:
            return e.flags |= 65536, u === _i ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([u]) : e.add(u)), go(t, u, a)), !1;
        }
        throw Error(d(435, e.tag));
      }
      return go(t, u, a), ac(), !1;
    }
    if (it)
      return l = gl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, u !== Wc && (t = Error(d(422), { cause: u }), dn(ue(t, e)))) : (u !== Wc && (l = Error(d(423), {
        cause: u
      }), dn(
        ue(l, e)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, u = ue(u, e), a = Rf(
        t.stateNode,
        u,
        a
      ), ff(t, a), kt !== 4 && (kt = 2)), !1;
    var n = Error(d(520), { cause: u });
    if (n = ue(n, e), Cn === null ? Cn = [n] : Cn.push(n), kt !== 4 && (kt = 2), l === null) return !0;
    u = ue(u, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = a & -a, e.lanes |= t, t = Rf(e.stateNode, u, t), ff(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (gu === null || !gu.has(n))))
            return e.flags |= 65536, a &= -a, e.lanes |= a, a = d0(a), v0(
              a,
              t,
              e,
              u
            ), ff(e, a), !1;
          break;
        case 22:
          if (e.memoizedState !== null)
            return e.flags |= 65536, !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Uf = Error(d(461)), nl = !1;
  function fl(t, l, e, u) {
    l.child = t === null ? gr(l, null, e, u) : wu(
      l,
      t.child,
      e,
      u
    );
  }
  function m0(t, l, e, u, a) {
    e = e.render;
    var n = l.ref;
    if ("ref" in u) {
      var i = {};
      for (var c in u)
        c !== "ref" && (i[c] = u[c]);
    } else i = u;
    return Qu(l), u = yf(
      t,
      l,
      e,
      i,
      n,
      a
    ), c = hf(), t !== null && !nl ? (gf(t, l, a), we(t, l, a)) : (it && c && hi(l), l.flags |= 1, fl(t, l, u, a), l.child);
  }
  function y0(t, l, e, u, a) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !Jc(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, h0(
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
    if (n = t.child, !Qf(t, a)) {
      var i = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : on, e(i, u) && t.ref === l.ref)
        return we(t, l, a);
    }
    return l.flags |= 1, t = Xe(n, u), t.ref = l.ref, t.return = l, l.child = t;
  }
  function h0(t, l, e, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (on(n, u) && t.ref === l.ref)
        if (nl = !1, l.pendingProps = u = n, Qf(t, a))
          (t.flags & 131072) !== 0 && (nl = !0);
        else
          return l.lanes = t.lanes, we(t, l, a);
    }
    return Hf(
      t,
      l,
      e,
      u,
      a
    );
  }
  function g0(t, l, e, u) {
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
        return b0(
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
        ), n !== null ? Tr(l, n) : sf(), Er(l);
      else
        return u = l.lanes = 536870912, b0(
          t,
          l,
          n !== null ? n.baseLanes | e : e,
          e,
          u
        );
    } else
      n !== null ? (Ei(l, n.cachePool), Tr(l, n), du(), l.memoizedState = null) : (t !== null && Ei(l, null), sf(), du());
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
  function b0(t, l, e, u, a) {
    var n = uf();
    return n = n === null ? null : { parent: ul._currentValue, pool: n }, l.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, t !== null && Ei(l, null), sf(), Er(l), t !== null && Xu(t, l, u, !0), l.childLanes = a, null;
  }
  function Yi(t, l) {
    return l = Gi(
      { mode: l.mode, children: l.children },
      t.mode
    ), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function S0(t, l, e) {
    return wu(l, t.child, null, e), t = Yi(l, l.pendingProps), t.flags |= 2, wl(l), l.memoizedState = null, t;
  }
  function Pm(t, l, e) {
    var u = l.pendingProps, a = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (it) {
        if (u.mode === "hidden")
          return t = Yi(l, u), l.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, xn(null, t);
        if (df(l), (t = Gt) ? (t = Kd(
          t,
          ie
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: eu !== null ? { id: _e, overflow: xe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = er(t), e.return = l, l.child = e, dl = l, Gt = null)) : t = null, t === null) throw au(l);
        return l.lanes = 536870912, null;
      }
      return Yi(l, u);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (df(l), a)
        if (l.flags & 256)
          l.flags &= -257, l = S0(
            t,
            l,
            e
          );
        else if (l.memoizedState !== null)
          l.child = t.child, l.flags |= 128, l = null;
        else throw Error(d(558));
      else if (nl || Xu(t, l, e, !1), a = (e & t.childLanes) !== 0, nl || a) {
        if (su.current === null) {
          if (u = Yt, u !== null && (i = $(u, e), i !== 0 && i !== n.retryLane))
            throw n.retryLane = i, Bu(t, i), Xl(u, t, i), Uf;
          ac();
        }
        l = S0(
          t,
          l,
          e
        );
      } else
        t = n.treeContext, Gt = fe(i.nextSibling), dl = l, it = !0, uu = null, ie = !1, t !== null && nr(l, t), l = Yi(l, u), l.flags |= 134221824;
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
        throw Error(d(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function Hf(t, l, e, u, a) {
    return Qu(l), e = yf(
      t,
      l,
      e,
      u,
      void 0,
      a
    ), u = hf(), t !== null && !nl ? (gf(t, l, a), we(t, l, a)) : (it && u && hi(l), l.flags |= 1, fl(t, l, e, a), l.child);
  }
  function T0(t, l, e, u, a, n) {
    return Qu(l), l.updateQueue = null, e = _r(
      l,
      u,
      e,
      a
    ), zr(t), u = hf(), t !== null && !nl ? (gf(t, l, n), we(t, l, n)) : (it && u && hi(l), l.flags |= 1, fl(t, l, e, n), l.child);
  }
  function E0(t, l, e, u, a) {
    if (Qu(l), l.stateNode === null) {
      var n = ya, i = e.contextType;
      typeof i == "object" && i !== null && (n = hl(i)), n = new e(u, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Cf, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = u, n.state = l.memoizedState, n.refs = {}, nf(l), i = e.contextType, n.context = typeof i == "object" && i !== null ? hl(i) : ya, n.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Df(
        l,
        e,
        i,
        u
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && Cf.enqueueReplaceState(n, n.state, null), Sn(l, u, n, a), bn(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !0;
    } else if (t === null) {
      n = l.stateNode;
      var c = l.memoizedProps, f = $u(e, c);
      n.props = f;
      var m = n.context, S = e.contextType;
      i = ya, typeof S == "object" && S !== null && (i = hl(S));
      var _ = e.getDerivedStateFromProps;
      S = typeof _ == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || m !== i) && c0(
        l,
        n,
        u,
        i
      ), cu = !1;
      var r = l.memoizedState;
      n.state = r, Sn(l, u, n, a), bn(), m = l.memoizedState, c || r !== m || cu ? (typeof _ == "function" && (Df(
        l,
        e,
        _,
        u
      ), m = l.memoizedState), (f = cu || i0(
        l,
        e,
        f,
        u,
        r,
        m,
        i
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = u, l.memoizedState = m), n.props = u, n.state = m, n.context = i, u = f) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !1);
    } else {
      n = l.stateNode, cf(t, l), i = l.memoizedProps, S = $u(e, i), n.props = S, _ = l.pendingProps, r = n.context, m = e.contextType, f = ya, typeof m == "object" && m !== null && (f = hl(m)), c = e.getDerivedStateFromProps, (m = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== _ || r !== f) && c0(
        l,
        n,
        u,
        f
      ), cu = !1, r = l.memoizedState, n.state = r, Sn(l, u, n, a), bn();
      var g = l.memoizedState;
      i !== _ || r !== g || cu || t !== null && t.dependencies !== null && Si(t.dependencies) ? (typeof c == "function" && (Df(
        l,
        e,
        c,
        u
      ), g = l.memoizedState), (S = cu || i0(
        l,
        e,
        S,
        u,
        r,
        g,
        f
      ) || t !== null && t.dependencies !== null && Si(t.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, g, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        g,
        f
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && r === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && r === t.memoizedState || (l.flags |= 1024), l.memoizedProps = u, l.memoizedState = g), n.props = u, n.state = g, n.context = f, u = S) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && r === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && r === t.memoizedState || (l.flags |= 1024), u = !1);
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
  function z0(t, l, e, u) {
    return Yu(), l.flags |= 256, fl(t, l, e, u), l.child;
  }
  var jf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Bf(t) {
    return { baseLanes: t, cachePool: rr() };
  }
  function qf(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= kl), t;
  }
  function _0(t, l, e) {
    var u = l.pendingProps, a = !1, n = (l.flags & 128) !== 0, i;
    if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (bl.current & 2) !== 0), i && (a = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (it) {
        if (a ? ru(l) : du(), (t = Gt) ? (t = Kd(
          t,
          ie
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: eu !== null ? { id: _e, overflow: xe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = er(t), e.return = l, l.child = e, dl = l, Gt = null)) : t = null, t === null) throw au(l);
        return qo(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      return n = u.children, u = u.fallback, a ? (du(), a = l.mode, n = Gi(
        { mode: "hidden", children: n },
        a
      ), u = qu(
        u,
        a,
        e,
        null
      ), n.return = l, u.return = l, n.sibling = u, l.child = n, u = l.child, u.memoizedState = Bf(e), u.childLanes = qf(
        t,
        i,
        e
      ), l.memoizedState = jf, xn(null, u)) : (ru(l), Yf(l, n));
    }
    var c = t.memoizedState;
    if (c !== null) {
      var f = c.dehydrated;
      if (f !== null)
        return ty(
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
    ), a.flags |= 2), a.return = l, u.return = l, u.sibling = a, l.child = u, xn(null, u), u = l.child, a = t.child.memoizedState, a === null ? a = Bf(e) : (n = a.cachePool, n !== null ? (c = ul._currentValue, n = n.parent !== c ? { parent: c, pool: c } : n) : n = rr(), a = {
      baseLanes: a.baseLanes | e,
      cachePool: n
    }), u.memoizedState = a, u.childLanes = qf(
      t,
      i,
      e
    ), l.memoizedState = jf, xn(t.child, u)) : (ru(l), e = t.child, t = e.sibling, e = Xe(e, {
      mode: "visible",
      children: u.children
    }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Yf(t, l) {
    return l = Gi(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function Gi(t, l) {
    return t = Bl(22, t, null, l), t.lanes = 0, t;
  }
  function Xi(t, l, e) {
    return wu(l, t.child, null, e), t = Yf(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function ty(t, l, e, u, a, n, i, c) {
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
      ), n.flags |= 2, a.return = l, n.return = l, a.sibling = n, l.child = a, wu(l, t.child, null, c), a = l.child, a.memoizedState = Bf(c), a.childLanes = qf(
        t,
        u,
        c
      ), l.memoizedState = jf, xn(null, a));
    if (ru(l), qo(n)) {
      if (u = n.nextSibling && n.nextSibling.dataset, u) var f = u.dgst;
      return u = f, u !== "" && (a = Error(d(419)), a.stack = "", a.digest = u, dn({ value: a, source: null, stack: null })), Xi(
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
        throw i.retryLane = a, Bu(t, a), Xl(u, t, a), Uf;
      return Bo(n) || ac(), Xi(
        t,
        l,
        c
      );
    }
    return Bo(n) ? (l.flags |= 192, l.child = t.child, null) : (t = i.treeContext, Gt = fe(n.nextSibling), dl = l, it = !0, uu = null, ie = !1, t !== null && nr(l, t), l = Yf(
      l,
      a.children
    ), l.flags |= 134221824, l);
  }
  function x0(t, l, e) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l), bi(t.return, l, e);
  }
  function O0(t) {
    for (var l = null; t !== null; ) {
      var e = t.alternate;
      e !== null && Ai(e) === null && (l = t), t = t.sibling;
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
  function Gf(t) {
    var l = t.child;
    for (t.child = null; l !== null; ) {
      var e = l.sibling;
      l.sibling = t.child, t.child = l, l = e;
    }
  }
  function Xf(t, l, e) {
    var u = l.pendingProps, a = u.revealOrder, n = u.tail;
    u = u.children;
    var i = bl.current;
    if (l.flags & 128)
      return Tn(l, i), null;
    var c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, Tn(l, i), a === "backwards" && t !== null ? (Gf(t), fl(t, l, u, e), Gf(t)) : fl(t, l, u, e), u = it ? rn : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = l.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && x0(t, e, l);
        else if (t.tag === 19)
          x0(t, e, l);
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
        e = O0(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null, Gf(l)), Qi(
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
          if (t = a.alternate, t !== null && Ai(t) === null) {
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
        e = O0(l.child), e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null), Qi(
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
  function N0(t, l, e) {
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
      throw Error(d(153));
    if (l.child !== null) {
      for (t = l.child, e = Xe(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = Xe(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Qf(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Si(t)));
  }
  function ly(t, l, e) {
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
          return l.flags |= 128, df(l), null;
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
          return u || (e & a) !== 0 ? _0(t, l, e) : (ru(l), t = we(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        }
        ru(l);
        break;
      case 19:
        if (l.flags & 128)
          return Xf(
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
            return Xf(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Tn(l, bl.current), u) break;
        return null;
      case 22:
        return l.lanes = 0, g0(
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
  function A0(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        nl = !0;
      else {
        if (!Qf(t, e) && (l.flags & 128) === 0)
          return nl = !1, ly(
            t,
            l,
            e
          );
        nl = (t.flags & 131072) !== 0;
      }
    else
      nl = !1, it && (l.flags & 1048576) !== 0 && ar(l, rn, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var u = l.pendingProps;
          if (t = Lu(l.elementType), l.type = t, typeof t == "function")
            Jc(t) ? (u = $u(t, u), l.tag = 1, l = E0(
              null,
              l,
              t,
              u,
              e
            )) : (l.tag = 0, l = Hf(
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
                l.tag = 11, l = m0(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              } else if (a === ut) {
                l.tag = 14, l = y0(
                  null,
                  l,
                  t,
                  u,
                  e
                );
                break t;
              } else if (a === F) {
                l.tag = 10, l.type = t, l = N0(
                  null,
                  l,
                  e
                );
                break t;
              }
            }
            throw l = ft(t) || t, Error(d(306, l, ""));
          }
        }
        return l;
      case 0:
        return Hf(
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
        ), E0(
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
          ), t === null) throw Error(d(387));
          u = l.pendingProps;
          var n = l.memoizedState;
          a = n.element, cf(t, l), Sn(l, u, null, e);
          var i = l.memoizedState;
          if (u = i.cache, nu(l, ul, u), u !== n.cache && tf(
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
              l = z0(
                t,
                l,
                u,
                e
              );
              break t;
            } else if (u !== a) {
              a = ue(
                Error(d(424)),
                l
              ), dn(a), l = z0(
                t,
                l,
                u,
                e
              );
              break t;
            } else
              for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Gt = fe(t.firstChild), dl = l, it = !0, uu = null, ie = !0, e = gr(
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
        return Oa(t, l), t === null ? (e = Id(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : it || (l.stateNode = Cd(
          l.type,
          l.pendingProps,
          _l.current,
          l
        )) : l.memoizedState = Id(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Zt(l), t === null && it && (u = l.stateNode = $d(
          l.type,
          l.pendingProps,
          _l.current
        ), dl = l, ie = !0, a = Gt, Tu(l.type) ? (Yo = a, Gt = fe(u.firstChild)) : Gt = a), fl(
          t,
          l,
          l.pendingProps.children,
          e
        ), Oa(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && it && ((a = u = Gt) && (u = ky(
          u,
          l.type,
          l.pendingProps,
          ie
        ), u !== null ? (l.stateNode = u, dl = l, Gt = fe(u.firstChild), ie = !1, a = !0) : a = !1), a || au(l)), Zt(l), a = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, u = n.children, Mo(a, n) ? u = null : i !== null && Mo(a, i) && (l.flags |= 32), l.memoizedState !== null && (a = yf(
          t,
          l,
          Lm,
          null,
          null,
          e
        ), Va._currentValue = a), Oa(t, l), fl(t, l, u, e), l.child;
      case 6:
        return t === null && it && ((t = e = Gt) && (e = Fy(
          e,
          l.pendingProps,
          ie
        ), e !== null ? (l.stateNode = e, dl = l, Gt = null, t = !0) : t = !1), t || au(l)), null;
      case 13:
        return _0(t, l, e);
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
        return m0(
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
        return N0(t, l, e);
      case 9:
        return a = l.type._context, u = l.pendingProps.children, Qu(l), a = hl(a), u = u(a), l.flags |= 1, fl(t, l, u, e), l.child;
      case 14:
        return y0(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return h0(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return Xf(t, l, e);
      case 31:
        return Pm(t, l, e);
      case 22:
        return g0(
          t,
          l,
          e,
          l.pendingProps
        );
      case 24:
        return Qu(l), u = hl(ul), t === null ? (a = uf(), a === null && (a = Yt, n = lf(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= e), a = n), l.memoizedState = { parent: u, cache: a }, nf(l), nu(l, ul, a)) : ((t.lanes & e) !== 0 && (cf(t, l), Sn(l, null, null, e), bn()), a = t.memoizedState, n = l.memoizedState, a.parent !== u ? (a = { parent: u, cache: u }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), nu(l, ul, u)) : (u = n.cache, nu(l, ul, u), u !== a.cache && tf(
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
    throw Error(d(156, l.tag));
  }
  function Je(t) {
    t.flags |= 4;
  }
  function Zf(t, l, e, u, a) {
    var n;
    if ((n = (t.mode & 32) !== 0) && (n = e === null ? ev(l, u) : ev(l, u) && (u.src !== e.src || u.srcSet !== e.srcSet)), n) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (fd()) t.flags |= 8192;
        else
          throw Ku = _i, af;
    } else t.flags &= -16777217;
  }
  function p0(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !uv(l))
      if (fd()) t.flags |= 8192;
      else
        throw Ku = _i, af;
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
  function ey(t, l, e) {
    var u = l.pendingProps;
    switch (Fc(l), l.tag) {
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
        return e = l.stateNode, u = null, t !== null && (u = t.memoizedState.cache), l.memoizedState.cache !== u && (l.flags |= 2048), Ve(ul), Se(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (ba(l) ? Je(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ic())), Xt(l), null;
      case 26:
        var a = l.type, n = l.memoizedState;
        return t === null ? (Je(l), n !== null ? (Xt(l), p0(l, n)) : (Xt(l), Zf(
          l,
          a,
          null,
          u,
          e
        ))) : n ? n !== t.memoizedState ? (Je(l), Xt(l), p0(l, n)) : (Xt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== u && Je(l), Xt(l), Zf(
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
              throw Error(d(166));
            return Xt(l), l.subtreeFlags &= -33554433, null;
          }
          t = Ol.current, ba(l) ? ir(l) : (t = $d(a, u, e), l.stateNode = t, Je(l));
        }
        return Xt(l), l.subtreeFlags &= -33554433, null;
      case 5:
        if (I(l), a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && Je(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(d(166));
            return Xt(l), l.subtreeFlags &= -33554433, null;
          }
          if (n = Ol.current, ba(l))
            ir(l);
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
        return Xt(l), l.subtreeFlags &= -33554433, Zf(
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
            throw Error(d(166));
          if (t = _l.current, ba(l)) {
            if (t = l.stateNode, e = l.memoizedProps, u = null, a = dl, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  u = a.memoizedProps;
              }
            t[Qt] = l, t = !!(t.nodeValue === e || u !== null && u.suppressHydrationWarning === !0 || Ad(t.nodeValue, e)), t || au(l, !0);
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
              if (!u) throw Error(d(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(d(557));
              t[Qt] = l;
            } else
              Yu(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Xt(l), t = !1;
          } else
            e = Ic(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = !0;
          if (!t)
            return l.flags & 256 ? (wl(l), l) : (wl(l), null);
          if ((l.flags & 128) !== 0)
            throw Error(d(558));
        }
        return Xt(l), null;
      case 13:
        if (u = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = ba(l), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(d(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(d(317));
              a[Qt] = l;
            } else
              Yu(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Xt(l), a = !1;
          } else
            a = Ic(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (wl(l), l) : (wl(l), null);
        }
        return wl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = u !== null, t = t !== null && t.memoizedState !== null, e && (u = l.child, a = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (a = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== a && (u.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Zi(l, l.updateQueue), Xt(l), null);
      case 4:
        return Se(), t === null && xo(l.stateNode.containerInfo), l.flags |= 67108864, Xt(l), null;
      case 10:
        return Ve(l.type), Xt(l), null;
      case 19:
        if (vf(l), u = l.memoizedState, u === null) return Xt(l), null;
        if (a = (l.flags & 128) !== 0, n = u.rendering, n === null)
          if (a) On(u, !1);
          else {
            if (kt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = Ai(t), n !== null) {
                  for (l.flags |= 128, On(u, !1), t = n.updateQueue, l.updateQueue = t, Zi(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    lr(e, t), e = e.sibling;
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
            if (t = Ai(n), t !== null) {
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
        return wl(l), rf(), u = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== u && (l.flags |= 8192) : u && (l.flags |= 8192), u ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Xt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Xt(l), e = l.updateQueue, e !== null && Zi(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== e && (l.flags |= 2048), t !== null && ll(Vu), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Ve(ul), Xt(l), null;
      case 25:
        return null;
      case 30:
        return l.flags |= 33554432, Xt(l), null;
    }
    throw Error(d(156, l.tag));
  }
  function uy(t, l) {
    switch (Fc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Ve(ul), Se(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return I(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (wl(l), l.alternate === null)
            throw Error(d(340));
          Yu();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (wl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(d(340));
          Yu();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return vf(l), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, t = l.memoizedState, t !== null && (t.rendering = null, t.tail = null), l.flags |= 4, l) : null;
      case 4:
        return Se(), null;
      case 10:
        return Ve(l.type), null;
      case 22:
      case 23:
        return wl(l), rf(), t !== null && ll(Vu), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Ve(ul), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function M0(t, l) {
    switch (Fc(l), l.tag) {
      case 3:
        Ve(ul), Se();
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
        vf(l);
        break;
      case 10:
        Ve(l.type);
        break;
      case 22:
      case 23:
        wl(l), rf(), t !== null && ll(Vu);
        break;
      case 24:
        Ve(ul);
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
  function D0(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Sr(l, e);
      } catch (u) {
        Dt(t, t.return, u);
      }
    }
  }
  function C0(t, l, e) {
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
            (a.ref === null || a.ref.name !== n) && (a.ref = Yd(n)), u = a.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var i = new Wl(t);
              T(
                t.child,
                !1,
                Jy,
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
  function Vi(t, l) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && l !== null)
      for (var e = 0; e < l.length; e++)
        Ld(
          t.stateNode,
          l[e]
        );
  }
  function R0(t) {
    for (var l = t.return; l !== null && (Lf(l) && Ld(t.stateNode, l.stateNode), !Vf(l)); )
      l = l.return;
  }
  function An(t) {
    for (var l = t.return; l !== null && (Lf(l) && $y(t.stateNode, l.stateNode), !Vf(l)); )
      l = l.return;
  }
  function Vf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Lf(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Kf(t) {
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
  function wf(t, l, e) {
    try {
      var u = t.stateNode;
      My(u, t.type, e, l), u[el] = l;
    } catch (a) {
      Dt(t, t.return, a);
    }
  }
  function U0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Tu(t.type) || t.tag === 4;
  }
  function Jf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || U0(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Tu(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function $f(t, l, e, u) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(a, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(a), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = ze)), Vi(t, u), xt = !0;
    else if (a !== 4 && (a === 27 && (Vi(t, u), u = null, Tu(t.type) && (e = t.stateNode, l = null)), t = t.child, t !== null))
      for ($f(
        t,
        l,
        e,
        u
      ), t = t.sibling; t !== null; )
        $f(
          t,
          l,
          e,
          u
        ), t = t.sibling;
  }
  function Li(t, l, e, u) {
    var a = t.tag;
    if (a === 5 || a === 6)
      a = t.stateNode, l ? e.insertBefore(a, l) : e.appendChild(a), Vi(t, u), xt = !0;
    else if (a !== 4 && (a === 27 && (Vi(t, u), u = null, Tu(t.type) && (e = t.stateNode)), t = t.child, t !== null))
      for (Li(
        t,
        l,
        e,
        u
      ), t = t.sibling; t !== null; )
        Li(
          t,
          l,
          e,
          u
        ), t = t.sibling;
  }
  function H0(t) {
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
  function j0(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Ki = !0);
  }
  var Ne = null;
  function B0() {
    var t = Ne;
    return Ne = null, t;
  }
  var ql = 0;
  function Na(t, l, e, u, a) {
    return ql = 0, q0(
      t.child,
      l,
      e,
      u,
      a
    );
  }
  function q0(t, l, e, u, a) {
    for (var n = !1; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (u !== null) {
          var c = Ro(i);
          u.push(c), c.view && (n = !0);
        } else
          n || Ro(i).view && (n = !0);
        Ki = !0, Bd(
          i,
          ql === 0 ? l : l + "_" + ql,
          e
        ), ql++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && a || q0(
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
  function Ae(t, l) {
    for (; t !== null; )
      t.tag === 5 ? qd(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && l || Ae(
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
            throw Error(d(544));
          var e = l.name;
          l = Ge(l.default, l.share), l !== "none" && (Na(
            t,
            e,
            l,
            null,
            !1
          ) || Ae(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function kf(t, l) {
    if (t.tag === 30) {
      var e = t.stateNode, u = t.memoizedProps, a = Ye(u, e), n = Ge(
        u.default,
        e.paired ? u.share : u.enter
      );
      n !== "none" ? Na(t, a, n, null, !1) ? (wi(t), e.paired || l || Ha(t, u.onEnter)) : Ae(t.child, !1) : wi(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        kf(t, l), t = t.sibling;
    else wi(t);
  }
  function Ff(t) {
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
                  ) ? (n = t.stateNode, a.paired = n, n.paired = a, Ha(t, e.onShare)) : Ae(t.child, !1)), l.delete(u), l.size === 0) break;
                }
              }
            }
            Ff(t);
          }
          t = t.sibling;
        }
    }
  }
  function Wf(t) {
    if (t.tag === 30) {
      var l = t.memoizedProps, e = Ye(l, t.stateNode), u = Jl !== null ? Jl.get(e) : void 0, a = Ge(
        l.default,
        u !== void 0 ? l.share : l.exit
      );
      a !== "none" && (Na(t, e, a, null, !1) ? u !== void 0 ? (a = t.stateNode, u.paired = a, a.paired = u, Jl.delete(e), Ha(t, l.onShare)) : Ha(t, l.onExit) : Ae(t.child, !1)), Jl !== null && Ff(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Wf(t), t = t.sibling;
    else
      Jl !== null && Ff(t);
  }
  function Y0(t) {
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
        (t.subtreeFlags & 33554432) !== 0 && Y0(t);
      t = t.sibling;
    }
  }
  function If(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var l = t.stateNode;
            l.paired !== null && (l.paired = null, Ae(t.child, !1));
          }
          If(t);
        }
        t = t.sibling;
      }
  }
  function Ji(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Ae(t.child, !1), If(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ji(t), t = t.sibling;
    else If(t);
  }
  function G0(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Ae(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && G0(t), t = t.sibling;
  }
  function Pf(t, l, e, u, a, n, i) {
    for (var c = !1; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (n !== null && ql < n.length) {
          var m = n[ql], S = Ro(f);
          (m.view || S.view) && (c = !0);
          var _;
          if (_ = (t.flags & 4) === 0)
            if (S.clip) _ = !0;
            else {
              _ = m.rect;
              var r = S.rect;
              _ = _.y !== r.y || _.x !== r.x || _.height !== r.height || _.width !== r.width;
            }
          _ && (t.flags |= 4), S.abs ? S = !m.abs : (m = m.rect, S = S.rect, S = m.height !== S.height || m.width !== S.width), S && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Bd(
          f,
          ql === 0 ? e : e + "_" + ql,
          a
        ), c && (t.flags & 4) !== 0 || (Ne === null && (Ne = []), Ne.push(
          f,
          ql === 0 ? u : u + "_" + ql,
          l.memoizedProps
        )), ql++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && i ? t.flags |= l.flags & 32 : Pf(
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
  function X0(t, l) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, u = t.stateNode, a = Ye(e, u), n = Ge(e.default, e.update), i;
        i = t.memoizedState, t.memoizedState = null, u = t;
        var c = t.child;
        ql = 0, a = Pf(
          u,
          c,
          a,
          a,
          n,
          i,
          !1
        ), (t.flags & 4) !== 0 && a && Ha(t, e.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && X0(t);
      t = t.sibling;
    }
  }
  var vl = !1, At = !1, pe = !1, to = !1, Q0 = typeof WeakSet == "function" ? WeakSet : Set, ml = null, Me = !1, pn = !1, $i = !1, lo = !1;
  function ay(t, l, e) {
    if (t = t.containerInfo, Ao = La, t = Ks(t), Xc(t)) {
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
            var c = 0, f = -1, m = -1, S = 0, _ = 0, r = t, g = null;
            l: for (; ; ) {
              for (var p; r !== u || n !== 0 && r.nodeType !== 3 || (f = c + n), r !== i || a !== 0 && r.nodeType !== 3 || (m = c + a), r.nodeType === 3 && (c += r.nodeValue.length), (p = r.firstChild) !== null; )
                g = r, r = p;
              for (; ; ) {
                if (r === t) break l;
                if (g === u && ++S === n && (f = c), g === i && ++_ === a && (m = c), (p = r.nextSibling) !== null) break;
                r = g, g = r.parentNode;
              }
              r = p;
            }
            u = f === -1 || m === -1 ? null : { start: f, end: m };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (po = { focusedElem: t, selectionRange: u }, La = !1, e = (e & 335544064) === e, ml = l, l = e ? 9270 : 1024; ml !== null; ) {
      if (t = ml, e && (u = t.deletions, u !== null))
        for (n = 0; n < u.length; n++)
          e && Wf(u[n]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        e && j0(t), ki(e);
      else {
        if (t.tag === 22) {
          if (u = t.alternate, t.memoizedState !== null) {
            u !== null && u.memoizedState === null && e && Wf(u), ki(e);
            continue;
          } else if (u !== null && u.memoizedState !== null) {
            e && j0(t), ki(e);
            continue;
          }
        }
        u = t.child, (t.subtreeFlags & l) !== 0 && u !== null ? (u.return = t, ml = u) : (e && Y0(t), ki(e));
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
              jo(u);
            else if (e === 1)
              switch (u.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  jo(u);
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
          if ((a & 1024) !== 0) throw Error(d(163));
      }
      if (u = l.sibling, u !== null) {
        u.return = l.return, ml = u;
        break;
      }
      ml = l.return;
    }
  }
  function Z0(t, l, e) {
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
        u & 64 && D0(e), u & 512 && Oe(e, e.return);
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
            Sr(t, l);
          } catch (i) {
            Dt(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && u & 4 && H0(e);
      case 26:
      case 5:
        De(t, e), l === null && u & 4 && Kf(e), u & 512 && Oe(e, e.return);
        break;
      case 12:
        De(t, e);
        break;
      case 31:
        De(t, e), u & 4 && w0(t, e);
        break;
      case 13:
        De(t, e), u & 4 && J0(t, e), u & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = hy.bind(
          null,
          e
        ), Wy(t, e))));
        break;
      case 22:
        if (u = e.memoizedState !== null || vl, !u) {
          var n = l !== null && l.memoizedState !== null || At;
          l = vl, a = At, vl = u, (At = n) && !a ? (u = 2, (e.subtreeFlags & 8772) !== 0 && (u |= 1), ye(
            t,
            e,
            u
          )) : De(t, e), vl = l, At = a;
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
  function eo(t, l) {
    for (t = t.child; t !== null; )
      V0(t, l), t = t.sibling;
  }
  function V0(t, l) {
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
        uo(t, l);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = l ? "" : t.memoizedProps, xt = !0;
        } catch (f) {
          Dt(t, t.return, f);
        }
        break;
      case 18:
        try {
          var c = t.stateNode;
          l ? jd(c, !0) : jd(t.stateNode, !1);
        } catch (f) {
          Dt(t, t.return, f);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && eo(t, l);
        break;
      default:
        eo(t, l);
    }
  }
  function uo(t, l) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var e = t, u = l;
          switch (e.tag) {
            case 4:
              V0(e, u);
              break t;
            case 22:
              e.memoizedState === null && uo(e, u);
              break t;
            default:
              uo(e, u);
          }
        }
        t = t.sibling;
      }
  }
  function L0(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, L0(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && ti(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Vt = null, Yl = !1;
  function ve(t, l, e) {
    for (e = e.child; e !== null; )
      K0(t, l, e), e = e.sibling;
  }
  function K0(t, l, e) {
    if (Al && typeof Al.onCommitFiberUnmount == "function")
      try {
        Al.onCommitFiberUnmount(Mu, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        At || Sl(e, l), ve(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !At && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        At || Sl(e, l), An(e);
        var u = Vt, a = Yl;
        Tu(e.type) && (Vt = e.stateNode, Yl = !1), ve(
          t,
          l,
          e
        ), kd(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), Vt = u, Yl = a;
        break;
      case 5:
        At || Sl(e, l), An(e);
      case 6:
        if (e.tag === 6 && An(e), u = Vt, a = Yl, Vt = null, ve(
          t,
          l,
          e
        ), Vt = u, Yl = a, Vt !== null)
          if (Yl)
            try {
              (Vt.nodeType === 9 ? Vt.body : Vt.nodeName === "HTML" ? Vt.ownerDocument.body : Vt).removeChild(e.stateNode), xt = !0;
            } catch (n) {
              Dt(
                e,
                l,
                n
              );
            }
          else
            try {
              Vt.removeChild(e.stateNode), xt = !0;
            } catch (n) {
              Dt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        Vt !== null && (Yl ? (t = Vt, Hd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Ka(t)) : Hd(Vt, e.stateNode));
        break;
      case 4:
        u = Vt, a = Yl, Vt = e.stateNode.containerInfo, Yl = !0, ve(
          t,
          l,
          e
        ), Vt = u, Yl = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vu(2, e, l), At || vu(4, e, l), ve(
          t,
          l,
          e
        );
        break;
      case 1:
        At || (Sl(e, l), u = e.stateNode, typeof u.componentWillUnmount == "function" && C0(
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
        At = (u = At) || e.memoizedState !== null, ve(
          t,
          l,
          e
        ), At = u;
        break;
      case 30:
        Sl(e, l), ve(
          t,
          l,
          e
        );
        break;
      case 7:
        At || Sl(e, l), ve(
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
  function w0(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ka(t);
      } catch (e) {
        Dt(l, l.return, e);
      }
    }
  }
  function J0(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ka(t);
      } catch (e) {
        Dt(l, l.return, e);
      }
  }
  function ny(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Q0()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Q0()), l;
      default:
        throw Error(d(435, t.tag));
    }
  }
  function Fi(t, l) {
    var e = ny(t);
    l.forEach(function(u) {
      if (!e.has(u)) {
        e.add(u);
        var a = gy.bind(null, t, u);
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
                Vt = f.stateNode, Yl = !1;
                break t;
              }
              break;
            case 5:
              Vt = f.stateNode, Yl = !1;
              break t;
            case 3:
            case 4:
              Vt = f.stateNode.containerInfo, Yl = !0;
              break t;
          }
          f = f.return;
        }
        if (Vt === null) throw Error(d(160));
        K0(i, c, n), Vt = null, Yl = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null; )
        $0(l, t, e), l = l.sibling;
  }
  var me = null;
  function $0(t, l, e) {
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
        Rl(l, t, e), Ul(t), a & 512 && (At || u === null || Sl(u, u.return)), a & 64 && vl && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? l : e.concat(l))));
        break;
      case 26:
        if (n = me, Rl(l, t, e), Ul(t), a & 512 && (At || u === null || Sl(u, u.return)), a & 4)
          if (a = u !== null ? u.memoizedState : null, e = t.memoizedState, u === null)
            if (e === null)
              if (t.stateNode === null)
                if (vl)
                  t.stateNode = Cd(
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
                        if (n = lv(
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
                        if (n = lv(
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
                        throw Error(d(468, l));
                    }
                    u[Qt] = t, rl(u), l = u;
                  }
                  t.stateNode = l;
                }
              else
                vl || Zo(n, t.type, t.stateNode);
            else
              t.stateNode = tv(
                n,
                e,
                t.memoizedProps
              );
          else
            a !== e ? (a === null ? (l = u.stateNode, l === null || At || l.parentNode.removeChild(l)) : a.count--, e === null ? vl || Zo(n, t.type, t.stateNode) : tv(n, e, t.memoizedProps)) : e === null && t.stateNode !== null && wf(
              t,
              t.memoizedProps,
              u.memoizedProps
            );
        break;
      case 27:
        Rl(l, t, e), Ul(t), a & 512 && (At || u === null || Sl(u, u.return)), u !== null && a & 4 && wf(
          t,
          t.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (n = pe, pe = !1, Rl(l, t, e), pe = n, Ul(t), a & 512 && (At || u === null || Sl(u, u.return)), t.flags & 32) {
          l = t.stateNode;
          try {
            fa(l, ""), xt = !0;
          } catch (S) {
            Dt(t, t.return, S);
          }
        }
        a & 4 && t.stateNode != null && (l = t.memoizedProps, wf(
          t,
          l,
          u !== null ? u.memoizedProps : l
        )), a & 1024 && (to = !0);
        break;
      case 6:
        if (Rl(l, t, e), Ul(t), a & 4) {
          if (t.stateNode === null)
            throw Error(d(162));
          l = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = l, xt = !0;
          } catch (S) {
            Dt(t, t.return, S);
          }
        }
        break;
      case 3:
        if (xt = !1, rc = null, n = me, me = qn(l.containerInfo), Rl(l, t, e), me = n, Ul(t), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Ka(l.containerInfo);
          } catch (S) {
            Dt(t, t.return, S);
          }
        to && (to = !1, k0(t)), xt = !1;
        break;
      case 4:
        a = pe, pe = vl, u = ys(), n = me, me = qn(
          t.stateNode.containerInfo
        ), Rl(l, t, e), Ul(t), me = n, xt && pn && ($i = !0), xt = u, pe = a;
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
        var c = vl, f = At, m = pe;
        vl = c || n, pe = m || n, At = f || i, Rl(l, t, e), At = f, pe = m, vl = c, Ul(t), a & 8192 && (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, !n || u === null || i || vl || At || (l = i || At, e = vl, u = At, vl = n || vl, At = l, mu(t, 2), vl = e, At = u), !n && pe || eo(t, n)), a & 4 && (l = t.updateQueue, l !== null && (e = l.retryQueue, e !== null && (l.retryQueue = null, Fi(t, e))));
        break;
      case 19:
        Rl(l, t, e), Ul(t), a & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, Fi(t, l)));
        break;
      case 30:
        a & 512 && (At || u === null || Sl(u, u.return)), a = ys(), n = pn, i = (e & 335544064) === e, c = t.memoizedProps, pn = i && Ge(
          c.default,
          c.update
        ) !== "none", Rl(l, t, e), Ul(t), i && u !== null && xt && (t.flags |= 4), pn = n, xt = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (At || u === null || Sl(u, u.return)), u && u.stateNode !== null && (u.stateNode._fragmentFiber = t);
      default:
        Rl(l, t, e), Ul(t);
    }
  }
  function Ul(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, u = t.return; u !== null; ) {
          if (U0(u)) {
            e = u;
            break;
          }
          u = u.return;
        }
        u = null;
        for (var a = t.return; a !== null; ) {
          if (Lf(a)) {
            var n = a.stateNode;
            u === null ? u = [n] : u.push(n);
          }
          if (Vf(a)) break;
          a = a.return;
        }
        var i = u;
        if (e == null) throw Error(d(160));
        switch (e.tag) {
          case 27:
            var c = e.stateNode, f = Jf(t);
            Li(
              t,
              f,
              c,
              i
            );
            break;
          case 5:
            var m = e.stateNode;
            e.flags & 32 && (fa(m, ""), e.flags &= -33);
            var S = Jf(t);
            Li(
              t,
              S,
              m,
              i
            );
            break;
          case 3:
          case 4:
            var _ = e.stateNode.containerInfo, r = Jf(t);
            $f(
              t,
              r,
              _,
              i
            );
            break;
          default:
            throw Error(d(161));
        }
      } catch (g) {
        Dt(t, t.return, g);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function k0(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        k0(l), l.tag === 5 && l.flags & 1024 && (l = l.stateNode, La = !0, l.reset(), La = !1), t = t.sibling;
      }
  }
  function Aa(t, l) {
    if (l.subtreeFlags & 9270)
      for (l = l.child; l !== null; )
        F0(l, t), l = l.sibling;
    else X0(l);
  }
  function F0(t, l) {
    var e = t.alternate;
    if (e === null) kf(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (lo = Me = !1, B0(), Aa(l, t), !Me && !$i) {
            if (t = Ne, t !== null)
              for (var u = 0; u < t.length; u += 3) {
                e = t[u];
                var a = t[u + 1];
                qd(e, t[u + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
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
            )), lo = !0;
          }
          Ne = null;
          break;
        case 5:
          Aa(l, t);
          break;
        case 4:
          u = Me, Me = !1, Aa(l, t), Me && ($i = !0), Me = u;
          break;
        case 22:
          t.memoizedState === null && (e.memoizedState !== null ? kf(t, !1) : Aa(l, t));
          break;
        case 30:
          u = Me, a = B0(), Me = !1, Aa(l, t), Me && (t.flags |= 4);
          var n = t.memoizedProps, i = t.stateNode;
          l = Ye(n, i), i = Ye(e.memoizedProps, i);
          var c = Ge(n.default, n.update);
          c === "none" ? l = !1 : (n = e.memoizedState, e.memoizedState = null, e = t.child, ql = 0, l = Pf(
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
          Aa(l, t);
      }
  }
  function De(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Z0(t, l.alternate, l), l = l.sibling;
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
          typeof a.componentWillUnmount == "function" && C0(
            e,
            e.return,
            a
          ), mu(
            e,
            u
          );
          break;
        case 27:
          (u & 2) !== 0 && kd(
            e.stateNode,
            e.type,
            e.memoizedProps
          );
        case 5:
          Sl(e, e.return), e.tag !== 5 && e.tag !== 27 || An(e), mu(
            e,
            u
          );
          break;
        case 6:
          An(e);
          break;
        case 26:
          Sl(e, e.return), a = e.stateNode, e.memoizedState !== null || a === null || At || a.parentNode.removeChild(a), mu(
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
                  br(m[a], f);
            } catch (S) {
              Dt(u, u.return, S);
            }
          }
          c && i & 64 && D0(n), Oe(n, n.return);
          break;
        case 27:
          (e & 2) !== 0 && H0(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || R0(n), ye(
            a,
            n,
            e
          ), c && u === null && i & 4 && Kf(n), Oe(n, n.return);
          break;
        case 6:
          R0(n);
          break;
        case 26:
          f = n.stateNode, n.memoizedState !== null || f === null || vl || Zo(
            qn(f.ownerDocument),
            n.type,
            f
          ), ye(
            a,
            n,
            e
          ), c && u === null && i & 4 && Kf(n), Oe(n, n.return);
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
          ), c && i & 4 && w0(a, n);
          break;
        case 13:
          ye(
            a,
            n,
            e
          ), c && i & 4 && J0(a, n);
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
  function ao(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && vn(e));
  }
  function no(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && vn(t));
  }
  function ce(t, l, e, u) {
    var a = (e & 335544064) === e;
    if (l.subtreeFlags & (a ? 10262 : 10256))
      for (l = l.child; l !== null; )
        W0(
          t,
          l,
          e,
          u
        ), l = l.sibling;
    else a && G0(l);
  }
  function W0(t, l, e, u) {
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
        ), a && lo && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), n & 2048 && (n = null, l.alternate !== null && (n = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== n && (l.refCount++, n != null && vn(n)));
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
        ) : (i._visibility |= 2, pa(
          t,
          l,
          e,
          u,
          (l.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && ao(c, l);
        break;
      case 24:
        ce(
          t,
          l,
          e,
          u
        ), n & 2048 && no(l.alternate, l);
        break;
      case 30:
        a && (n = l.alternate, n !== null && (Ae(n.child, !0), Ae(l.child, !0))), ce(
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
  function pa(t, l, e, u, a) {
    for (a = a && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var n = t, i = l, c = e, f = u, m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          pa(
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
          i.memoizedState !== null ? S._visibility & 2 ? pa(
            n,
            i,
            c,
            f,
            a
          ) : Mn(
            n,
            i
          ) : (S._visibility |= 2, pa(
            n,
            i,
            c,
            f,
            a
          )), a && m & 2048 && ao(
            i.alternate,
            i
          );
          break;
        case 24:
          pa(
            n,
            i,
            c,
            f,
            a
          ), a && m & 2048 && no(i.alternate, i);
          break;
        default:
          pa(
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
            Mn(e, u), a & 2048 && ao(
              u.alternate,
              u
            );
            break;
          case 24:
            Mn(e, u), a & 2048 && no(u.alternate, u);
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
        I0(
          t,
          l,
          e
        ), t = t.sibling;
  }
  function I0(t, l, e) {
    switch (t.tag) {
      case 26:
        Fu(
          t,
          l,
          e
        ), t.flags & ku && (t.memoizedState !== null ? rh(
          e,
          me,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (l & 335544128) === l && nv(e, t)));
        break;
      case 5:
        Fu(
          t,
          l,
          e
        ), t.flags & ku && (t = t.stateNode, (l & 335544128) === l && nv(e, t));
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
  function P0(t) {
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
          ml = u, ld(
            u,
            t
          );
        }
      P0(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        td(t), t = t.sibling;
  }
  function td(t) {
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
          ml = u, ld(
            u,
            t
          );
        }
      P0(t);
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
  function ld(t, l) {
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
          if (L0(u), u === e) {
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
  var iy = {
    getCacheForType: function(t) {
      var l = hl(ul), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    },
    cacheSignal: function() {
      return hl(ul).controller.signal;
    }
  }, cy = typeof WeakMap == "function" ? WeakMap : Map, Ot = 0, Yt = null, ot = null, mt = 0, Mt = 0, $l = null, yu = !1, Ma = !1, io = !1, $e = 0, kt = 0, hu = 0, Wu = 0, Ii = 0, kl = 0, Da = 0, Cn = null, Gl = null, co = !1, Pi = 0, ed = 0, tc = 1 / 0, lc = null, gu = null, Kt = 0, he = null, Iu = null, Ce = 0, fo = 0, oo = null, ud = null, Ca = null, Ra = null, Ua = null, Rn = 0, ec = null;
  function Fl() {
    return (Ot & 2) !== 0 && mt !== 0 ? mt & -mt : U.T !== null ? To() : jl();
  }
  function ad() {
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
      u === null && (u = e.ref = Yd(
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
    )), x(t, e), ((Ot & 2) === 0 || t !== Yt) && (t === Yt && ((Ot & 2) === 0 && (Wu |= e), kt === 4 && bu(
      t,
      mt,
      kl,
      !1
    )), Re(t));
  }
  function nd(t, l, e) {
    if ((Ot & 6) !== 0) throw Error(d(327));
    var u = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || Pe(t, l), a = u ? sy(t, l) : ro(t, l, !0), n = u;
    do {
      if (a === 0) {
        Ma && !u && bu(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !fy(e)) {
          a = ro(t, l, !1), n = !1;
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
              if (f && (ja(c, i).flags |= 256), i = ro(
                c,
                i,
                !1
              ), i !== 2 && i !== 6) {
                if (io && !f) {
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
              throw Error(d(345));
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
              throw Error(d(329));
          }
          if ((l & 62914560) === l && (a = Pi + 300 - Nl(), 10 < a)) {
            if (bu(
              u,
              l,
              kl,
              !yu
            ), Cu(u, 0, !0) !== 0) break t;
            Ce = l, u.timeoutHandle = Co(
              id.bind(
                null,
                u,
                e,
                Gl,
                lc,
                co,
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
          id(
            u,
            e,
            Gl,
            lc,
            co,
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
  function id(t, l, e, u, a, n, i, c, f, m, S, _, r, g) {
    t.timeoutHandle = -1;
    var p = l.subtreeFlags, j = (n & 335544064) === n;
    if (_ = null, (j || p & 8192 || (p & 16785408) === 16785408) && (_ = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: ze
    }, Jl = null, I0(
      l,
      n,
      _
    ), j && (p = _, j = t.containerInfo, j = (j.nodeType === 9 ? j : j.ownerDocument).__reactViewTransition, j != null && (p.count++, p.waitingForViewTransition = !0, p = Xn.bind(p), j.finished.then(p, p))), p = (n & 62914560) === n ? Pi - Nl() : (n & 4194048) === n ? ed - Nl() : 0, p = dh(
      _,
      p
    ), p !== null)) {
      Ce = n, t.cancelPendingCommit = p(
        md.bind(
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
          r,
          g
        )
      ), bu(t, n, i, !m);
      return;
    }
    md(
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
  function fy(t) {
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
      var n = 31 - pl(a), i = 1 << n;
      u[n] = -1, a &= ~i;
    }
    e !== 0 && tt(t, e, l);
  }
  function uc() {
    return (Ot & 6) === 0 ? (Un(0), !1) : !0;
  }
  function so() {
    if (ot !== null) {
      if (Mt === 0)
        var t = ot.return;
      else
        t = ot, Ze = Gu = null, bf(t), Ea = null, hn = 0, t = ot;
      for (; t !== null; )
        M0(t.alternate, t), t = t.return;
      ot = null;
    }
  }
  function ja(t, l) {
    var e = t.timeoutHandle;
    return e !== -1 && (t.timeoutHandle = -1, Ry(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Ce = 0, so(), Yt = t, ot = e = Xe(t.current, null), mt = l, Mt = 0, $l = null, yu = !1, Ma = Pe(t, l), io = !1, Da = kl = Ii = Wu = hu = kt = 0, Gl = Cn = null, co = !1, $e = Ia(t, l), ri(), e;
  }
  function cd(t, l) {
    lt = null, U.H = Bi, l === Ta || l === zi ? (l = mr(), Mt = 3) : l === af ? (l = mr(), Mt = 4) : Mt = l === Uf ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, $l = l, ot === null && (kt = 1, qi(
      t,
      ue(l, t.current)
    ));
  }
  function fd() {
    var t = gl.current;
    return t === null ? !0 : (mt & 4194048) === mt ? xl === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? t === xl : !1;
  }
  function od() {
    var t = U.H;
    return U.H = Bi, t === null ? Bi : t;
  }
  function sd() {
    var t = U.A;
    return U.A = iy, t;
  }
  function ac() {
    kt = 4, yu || (mt & 4194048) !== mt && gl.current !== null || (Ma = !0), (hu & 134217727) === 0 && (Wu & 134217727) === 0 || Yt === null || bu(
      Yt,
      mt,
      kl,
      !1
    );
  }
  function ro(t, l, e) {
    var u = Ot;
    Ot |= 2;
    var a = od(), n = sd();
    (Yt !== t || mt !== l) && (lc = null, ja(t, l)), l = !1;
    var i = kt;
    t: do
      try {
        if (Mt !== 0 && ot !== null) {
          var c = ot, f = $l;
          switch (Mt) {
            case 8:
              so(), i = 6;
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
        oy(), i = kt;
        break;
      } catch (S) {
        cd(t, S);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Ze = Gu = null, Ot = u, U.H = a, U.A = n, ot === null && (Yt = null, mt = 0, ri()), i;
  }
  function oy() {
    for (; ot !== null; ) rd(ot);
  }
  function sy(t, l) {
    var e = Ot;
    Ot |= 2;
    var u = od(), a = sd();
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
              if (dr(n)) {
                Mt = 0, $l = null, dd(l);
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
              dr(n) ? (Mt = 0, $l = null, dd(l)) : (Mt = 0, $l = null, Ba(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (ot.tag) {
                case 26:
                  i = ot.memoizedState;
                case 5:
                case 27:
                  var c = ot;
                  if (i ? uv(i) : c.stateNode.complete) {
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
              so(), kt = 6;
              break t;
            default:
              throw Error(d(462));
          }
        }
        ry();
        break;
      } catch (S) {
        cd(t, S);
      }
    while (!0);
    return Ze = Gu = null, U.H = u, U.A = a, Ot = e, ot !== null ? 0 : (Yt = null, mt = 0, ri(), kt);
  }
  function ry() {
    for (; ot !== null && !ka(); )
      rd(ot);
  }
  function rd(t) {
    var l = A0(t.alternate, t, $e);
    t.memoizedProps = t.pendingProps, l === null ? nc(t) : ot = l;
  }
  function dd(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = T0(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          mt
        );
        break;
      case 11:
        l = T0(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          mt
        );
        break;
      case 5:
        bf(l);
        var u = l;
        u === dl && (it ? (gi(u), u.tag === 5 && u.stateNode != null && (Gt = u.stateNode)) : (gi(u), it = !0));
      default:
        M0(e, l), l = ot = lr(l, $e), l = A0(e, l, $e);
    }
    t.memoizedProps = t.pendingProps, l === null ? nc(t) : ot = l;
  }
  function Ba(t, l, e, u) {
    Ze = Gu = null, bf(l), Ea = null, hn = 0;
    var a = l.return;
    try {
      if (Im(
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
    l.flags & 32768 ? (it || u === 1 ? t = !0 : Ma || (mt & 536870912) !== 0 ? t = !1 : (yu = t = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = gl.current, u !== null && u.tag === 13 && (u.flags |= 16384))), vd(l, t)) : nc(l);
  }
  function nc(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        vd(
          l,
          yu
        );
        return;
      }
      t = l.return;
      var e = ey(
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
  function vd(t, l) {
    do {
      var e = uy(t.alternate, t);
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
  function md(t, l, e, u, a, n, i, c, f, m, S, _) {
    t.cancelPendingCommit = null;
    do
      ic();
    while (Kt !== 0);
    if ((Ot & 6) !== 0) throw Error(d(327));
    if (l !== null) {
      if (l === t.current) throw Error(d(177));
      t === Yt && (ot = Yt = null, mt = 0), Iu = l, he = t, Ce = e, oo = a, ud = u, dy(
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
  function dy(t, l, e, u, a, n, i) {
    var c = l.lanes | l.childLanes;
    if (fo = c, c |= Kc, V(
      t,
      e,
      c,
      u,
      a,
      n
    ), Ra = null, (e & 335544064) === e ? (Ua = Xm(t), u = 10262) : (Ua = null, u = 10256), (l.subtreeFlags & u) !== 0 || (l.flags & u) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, by(pu, function() {
      return ho(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Ki = !1, u = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || u) {
      u = U.T, U.T = null, a = J.p, J.p = 2, n = Ot, Ot |= 4;
      try {
        ay(t, l, e);
      } finally {
        Ot = n, J.p = a, U.T = u;
      }
    }
    Kt = 1, Ki ? Ca = Yy(
      i,
      t.containerInfo,
      Ua,
      vo,
      mo,
      my,
      yo,
      ho,
      vy
    ) : (vo(), mo(), yo());
  }
  function vy(t) {
    if (Kt !== 0) {
      var l = he.onRecoverableError;
      l(t, { componentStack: null });
    }
  }
  function my() {
    Kt === 3 && (Kt = 0, F0(Iu, he), Kt = 4);
  }
  function vo() {
    if (Kt === 1) {
      Kt = 0;
      var t = he, l = Iu, e = Ce, u = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || u) {
        u = U.T, U.T = null;
        var a = J.p;
        J.p = 2;
        var n = Ot;
        Ot |= 4;
        try {
          pn = $i = !1, $0(l, t, e), e = po;
          var i = Ks(t.containerInfo), c = e.focusedElem, f = e.selectionRange;
          if (i !== c && c && c.ownerDocument && Ls(
            c.ownerDocument.documentElement,
            c
          )) {
            if (f !== null && Xc(c)) {
              var m = f.start, S = f.end;
              if (S === void 0 && (S = m), "selectionStart" in c)
                c.selectionStart = m, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var _ = c.ownerDocument || document, r = _ && _.defaultView || window;
                if (r.getSelection) {
                  var g = r.getSelection(), p = c.textContent.length, j = Math.min(f.start, p), et = f.end === void 0 ? j : Math.min(f.end, p);
                  !g.extend && j > et && (i = et, et = j, j = i);
                  var v = Vs(
                    c,
                    j
                  ), o = Vs(
                    c,
                    et
                  );
                  if (v && o && (g.rangeCount !== 1 || g.anchorNode !== v.node || g.anchorOffset !== v.offset || g.focusNode !== o.node || g.focusOffset !== o.offset)) {
                    var h = _.createRange();
                    h.setStart(v.node, v.offset), g.removeAllRanges(), j > et ? (g.addRange(h), g.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset), g.addRange(h));
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
          La = !!Ao, po = Ao = null;
        } finally {
          Ot = n, J.p = a, U.T = u;
        }
      }
      t.current = l, Kt = 2;
    }
  }
  function mo() {
    if (Kt === 2) {
      Kt = 0;
      var t = he, l = Iu, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = U.T, U.T = null;
        var u = J.p;
        J.p = 2;
        var a = Ot;
        Ot |= 4;
        try {
          Z0(t, l.alternate, l);
        } finally {
          Ot = a, J.p = u, U.T = e;
        }
      }
      Kt = 3;
    }
  }
  function yo() {
    if (Kt === 4 || Kt === 3) {
      Kt = 0;
      var t = Ca;
      Ca = null, Fa();
      var l = he, e = Iu, u = Ce, a = ud, n = (u & 335544064) === u ? 10262 : 10256;
      if ((e.subtreeFlags & n) !== 0 || (e.flags & n) !== 0 ? Kt = 5 : (Kt = 0, Iu = he = null, yd(l, l.pendingLanes)), n = l.pendingLanes, n === 0 && (gu = null), Jt(u), e = e.stateNode, Al && typeof Al.onCommitFiberRoot == "function")
        try {
          Al.onCommitFiberRoot(
            Mu,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = U.T, n = J.p, J.p = 2, U.T = null;
        try {
          for (var i = l.onRecoverableError, c = 0; c < a.length; c++) {
            var f = a[c];
            i(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          U.T = e, J.p = n;
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
  function yd(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, vn(l)));
  }
  function ic() {
    return Ca !== null && (Ca.skipTransition(), Ca = null), vo(), mo(), yo(), ho();
  }
  function ho() {
    if (Kt !== 5) return !1;
    var t = he, l = fo;
    fo = 0;
    var e = Jt(Ce), u = U.T, a = J.p;
    try {
      J.p = 32 > e ? 32 : e, U.T = null, e = oo, oo = null;
      var n = he, i = Ce;
      if (Kt = 0, Iu = he = null, Ce = 0, (Ot & 6) !== 0) throw Error(d(331));
      var c = Ot;
      if (Ot |= 4, td(n.current), W0(
        n,
        n.current,
        i,
        e
      ), Ot = c, Un(0, !1), Al && typeof Al.onPostCommitFiberRoot == "function")
        try {
          Al.onPostCommitFiberRoot(Mu, n);
        } catch {
        }
      return !0;
    } finally {
      J.p = a, U.T = u, yd(t, l);
    }
  }
  function hd(t, l, e) {
    l = ue(e, l), l = Rf(t.stateNode, l, 2), t = ou(t, l, 2), t !== null && (x(t, 2), Re(t));
  }
  function Dt(t, l, e) {
    if (t.tag === 3)
      hd(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          hd(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var u = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (gu === null || !gu.has(u))) {
            t = ue(e, t), e = d0(2), u = ou(l, e, 2), u !== null && (v0(
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
  function go(t, l, e) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new cy();
      var a = /* @__PURE__ */ new Set();
      u.set(l, a);
    } else
      a = u.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), u.set(l, a));
    a.has(e) || (io = !0, a.add(e), t = yy.bind(null, t, l, e), l.then(t, t));
  }
  function yy(t, l, e) {
    var u = t.pingCache;
    u !== null && u.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, Yt === t && (mt & e) === e && ((kt === 4 || kt === 3 && (mt & 62914560) === mt && 300 > Nl() - Pi) && (Ot & 2) === 0 ? ja(t, 0) : Ii |= e, Da === mt && (Da = 0)), Re(t);
  }
  function gd(t, l) {
    l === 0 && (l = y()), t = Bu(t, l), t !== null && (x(t, l), Re(t));
  }
  function hy(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), gd(t, e);
  }
  function gy(t, l) {
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
        throw Error(d(314));
    }
    u !== null && u.delete(l), gd(t, e);
  }
  function by(t, l) {
    return It(t, l);
  }
  var qa = null, Ya = null, bo = !1, cc = !1, So = !1, Su = 0;
  function Re(t) {
    t !== Ya && t.next === null && (Ya === null ? qa = Ya = t : Ya = Ya.next = t), cc = !0, bo || (bo = !0, Ty());
  }
  function Un(t, l) {
    if (!So && cc) {
      So = !0;
      do
        for (var e = !1, u = qa; u !== null; ) {
          if (t !== 0) {
            var a = u.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var i = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - pl(42 | t) + 1) - 1, n &= a & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, Ed(u, n));
          } else
            n = mt, n = Cu(
              u,
              u === Yt ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Pe(u, n) || (e = !0, Ed(u, n));
          u = u.next;
        }
      while (e);
      So = !1;
    }
  }
  function Sy() {
    bd();
  }
  function bd() {
    cc = bo = !1;
    var t = 0;
    Su !== 0 && Cy() && (t = Su);
    for (var l = Nl(), e = null, u = qa; u !== null; ) {
      var a = u.next, n = Sd(u, l);
      n === 0 ? (u.next = null, e === null ? qa = a : e.next = a, a === null && (Ya = e)) : (e = u, (t !== 0 || (n & 3) !== 0) && (cc = !0)), u = a;
    }
    Kt !== 0 && Kt !== 5 || Un(t), Su !== 0 && (Su = 0);
  }
  function Sd(t, l) {
    for (var e = t.suspendedLanes, u = t.pingedLanes, a = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - pl(n), c = 1 << i, f = a[i];
      f === -1 ? ((c & e) === 0 || (c & u) !== 0) && (a[i] = In(c, l)) : f <= l && (t.expiredLanes |= c), n &= ~c;
    }
    if (l = Yt, e = mt, e = Cu(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u = t.callbackNode, e === 0 || t === l && (Mt === 2 || Mt === 9) || t.cancelPendingCommit !== null)
      return u !== null && u !== null && Vl(u), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Pe(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (u !== null && Vl(u), Jt(e)) {
        case 2:
        case 8:
          e = kn;
          break;
        case 32:
          e = pu;
          break;
        case 268435456:
          e = Fn;
          break;
        default:
          e = pu;
      }
      return u = Td.bind(null, t), e = It(e, u), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return u !== null && u !== null && Vl(u), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Td(t, l) {
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
    ), u === 0 ? null : (nd(t, u, l), Sd(t, Nl()), t.callbackNode != null && t.callbackNode === e ? Td.bind(null, t) : null);
  }
  function Ed(t, l) {
    if (ic()) return null;
    nd(t, l, !0);
  }
  function Ty() {
    Uy(function() {
      (Ot & 6) !== 0 ? It(
        ea,
        Sy
      ) : bd();
    });
  }
  function To() {
    if (Su === 0) {
      var t = Zu;
      t === 0 && (t = ua, ua <<= 1, (ua & 261888) === 0 && (ua = 256)), Su = t;
    }
    return Su;
  }
  function zd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : ui(t);
  }
  function Ey(t, l, e, u, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var n = zd(
        (a[el] || null).action
      ), i = u.submitter;
      i && (l = (l = i[el] || null) ? zd(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
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
  for (var Eo = 0; Eo < Lc.length; Eo++) {
    var zo = Lc[Eo], zy = zo.toLowerCase(), _y = zo[0].toUpperCase() + zo.slice(1);
    de(
      zy,
      "on" + _y
    );
  }
  de($s, "onAnimationEnd"), de(ks, "onAnimationIteration"), de(Fs, "onAnimationStart"), de("dblclick", "onDoubleClick"), de("focusin", "onFocus"), de("focusout", "onBlur"), de(Rm, "onTransitionRun"), de(Um, "onTransitionStart"), de(Hm, "onTransitionCancel"), de(Ws, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), Uu(
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
  ), xy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hn)
  );
  function _d(t, l) {
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
    var e = l[fs];
    e === void 0 && (e = l[fs] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    e.has(u) || (xd(l, t, 2, !1), e.add(u));
  }
  function _o(t, l, e) {
    var u = 0;
    l && (u |= 4), xd(
      e,
      t,
      u,
      l
    );
  }
  var fc = "_reactListening" + Math.random().toString(36).slice(2);
  function xo(t) {
    if (!t[fc]) {
      t[fc] = !0, rs.forEach(function(e) {
        e !== "selectionchange" && (xy.has(e) || _o(e, !1, t), _o(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[fc] || (l[fc] = !0, _o("selectionchange", !1, l));
    }
  }
  function xd(t, l, e, u) {
    switch (vv(l)) {
      case 2:
        var a = hh;
        break;
      case 8:
        a = gh;
        break;
      default:
        a = Lo;
    }
    e = a.bind(
      null,
      l,
      e,
      t
    ), a = void 0, !Dc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), u ? a !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: a
    }) : t.addEventListener(l, e, !0) : a !== void 0 ? t.addEventListener(l, e, {
      passive: a
    }) : t.addEventListener(l, e, !1);
  }
  function Oo(t, l, e, u, a) {
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
    xs(function() {
      var m = n, S = pc(e), _ = [];
      t: {
        var r = Is.get(t);
        if (r !== void 0) {
          var g = ci, p = t;
          switch (t) {
            case "keypress":
              if (ni(e) === 0) break t;
            case "keydown":
            case "keyup":
              g = fm;
              break;
            case "focusin":
              p = "focus", g = Hc;
              break;
            case "focusout":
              p = "blur", g = Hc;
              break;
            case "beforeblur":
            case "afterblur":
              g = Hc;
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
              g = As;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Fv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = vm;
              break;
            case $s:
            case ks:
            case Fs:
              g = Pv;
              break;
            case Ws:
              g = ym;
              break;
            case "scroll":
            case "scrollend":
              g = $v;
              break;
            case "wheel":
              g = gm;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = lm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Ms;
              break;
            case "submit":
              g = rm;
              break;
            case "toggle":
            case "beforetoggle":
              g = Sm;
          }
          var j = (l & 4) !== 0, et = !j && (t === "scroll" || t === "scrollend"), v = j ? r !== null ? r + "Capture" : null : r;
          j = [];
          for (var o = m, h; o !== null; ) {
            var z = o;
            if (h = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || h === null || v === null || (z = ln(o, v), z != null && j.push(
              jn(o, z, h)
            )), et) break;
            o = o.return;
          }
          0 < j.length && (r = new g(
            r,
            p,
            null,
            e,
            S
          ), _.push({ event: r, listeners: j }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (g = t === "mouseover" || t === "pointerover", r = t === "mouseout" || t === "pointerout", g && e !== Ac && (p = e.relatedTarget || e.fromElement) && (Ru(p) || p[te]))
            break t;
          (r || g) && (p = S.window === S ? S : (g = S.ownerDocument) ? g.defaultView || g.parentWindow : window, r ? (g = e.relatedTarget || e.toElement, r = m, g = g ? Ru(g) : null, g !== null && (et = w(g), j = g.tag, g !== et || j !== 5 && j !== 27 && j !== 6) && (g = null)) : (r = null, g = m), r !== g && (j = As, z = "onMouseLeave", v = "onMouseEnter", o = "mouse", (t === "pointerout" || t === "pointerover") && (j = Ms, z = "onPointerLeave", v = "onPointerEnter", o = "pointer"), et = r == null ? p : tn(r), h = g == null ? p : tn(g), p = new j(
            z,
            o + "leave",
            r,
            e,
            S
          ), p.target = et, p.relatedTarget = h, z = null, Ru(S) === m && (j = new j(
            v,
            o + "enter",
            g,
            e,
            S
          ), j.target = h, j.relatedTarget = et, z = j), et = z, j = r && g ? Ut(
            r,
            g,
            Oy
          ) : null, r !== null && Od(
            _,
            p,
            r,
            j,
            !1
          ), g !== null && et !== null && Od(
            _,
            et,
            g,
            j,
            !0
          )));
        }
        t: {
          if (r = m ? tn(m) : window, g = r.nodeName && r.nodeName.toLowerCase(), g === "select" || g === "input" && r.type === "file")
            var R = qs;
          else if (js(r))
            if (Ys)
              R = Mm;
            else {
              R = Am;
              var yt = Nm;
            }
          else
            g = r.nodeName, !g || g.toLowerCase() !== "input" || r.type !== "checkbox" && r.type !== "radio" ? m && Nc(m.elementType) && (R = qs) : R = pm;
          if (R && (R = R(t, m))) {
            Bs(
              _,
              R,
              e,
              S
            );
            break t;
          }
          yt && yt(t, r, m);
        }
        switch (yt = m ? tn(m) : window, t) {
          case "focusin":
            (js(yt) || yt.contentEditable === "true") && (da = yt, Qc = m, sn = null);
            break;
          case "focusout":
            sn = Qc = da = null;
            break;
          case "mousedown":
            Zc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zc = !1, ws(_, e, S);
            break;
          case "selectionchange":
            if (Cm) break;
          case "keydown":
          case "keyup":
            ws(_, e, S);
        }
        var Q;
        if (Bc)
          t: {
            switch (t) {
              case "compositionstart":
                var K = "onCompositionStart";
                break t;
              case "compositionend":
                K = "onCompositionEnd";
                break t;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break t;
            }
            K = void 0;
          }
        else
          ra ? Us(t, e) && (K = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (K = "onCompositionStart");
        K && (Ds && e.locale !== "ko" && (ra || K !== "onCompositionStart" ? K === "onCompositionEnd" && ra && (Q = Os()) : (tu = S, Cc = "value" in tu ? tu.value : tu.textContent, ra = !0)), yt = oc(m, K), 0 < yt.length && (K = new ps(
          K,
          t,
          null,
          e,
          S
        ), _.push({ event: K, listeners: yt }), Q ? K.data = Q : (Q = Hs(e), Q !== null && (K.data = Q)))), (Q = Em ? zm(t, e) : _m(t, e)) && (K = oc(m, "onBeforeInput"), 0 < K.length && (yt = new ps(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          S
        ), _.push({
          event: yt,
          listeners: K
        }), yt.data = Q)), Ey(
          _,
          t,
          m,
          e,
          S
        );
      }
      _d(_, l);
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
  function Oy(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Od(t, l, e, u, a) {
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
  var Ny = /\r\n?/g, Ay = /\u0000|\uFFFD/g;
  function Nd(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ny, `
`).replace(Ay, "");
  }
  function Ad(t, l) {
    return l = Nd(l), Nd(t) === l;
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
        zs(t, u, n);
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
            throw Error(d(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(d(60));
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
          e = wv.get(e) || e, li(t, e, u);
        else return;
    }
    xt = !0;
  }
  function No(t, l, e, u, a, n) {
    switch (e) {
      case "style":
        zs(t, u, n);
        return;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(d(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(d(60));
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
        if (!ds.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (a = e.endsWith("Capture"), n = e.slice(2, a ? e.length - 7 : void 0), l = t[el] || null, l = l != null ? l[e] : null, typeof l == "function" && t.removeEventListener(n, l, a), typeof u == "function")) {
              typeof l != "function" && l !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(n, u, a);
              break t;
            }
            xt = !0, e in t ? t[e] = u : u === !0 ? t.setAttribute(e, "") : li(t, e, u);
          }
        return;
    }
    xt = !0;
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
                  throw Error(d(137, l));
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
                    throw Error(d(137, l));
                  break;
                default:
                  Ct(t, l, u, S, e, null);
              }
          }
        bs(
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
                if (c != null) throw Error(d(91));
                break;
              default:
                Ct(t, l, i, c, e, null);
            }
        Ts(t, u, a, n);
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
                throw Error(d(137, l));
              default:
                Ct(t, l, m, u, e, null);
            }
        return;
      default:
        if (Nc(l)) {
          for (S in e)
            e.hasOwnProperty(S) && (u = e[S], u !== void 0 && No(
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
  var py = {};
  function My(t, l, e, u) {
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
        for (var r in u) {
          var g = u[r];
          if (_ = e[r], u.hasOwnProperty(r) && (g != null || _ != null))
            switch (r) {
              case "type":
                g !== _ && (xt = !0), n = g;
                break;
              case "name":
                g !== _ && (xt = !0), a = g;
                break;
              case "checked":
                g !== _ && (xt = !0), m = g;
                break;
              case "defaultChecked":
                g !== _ && (xt = !0), S = g;
                break;
              case "value":
                g !== _ && (xt = !0), i = g;
                break;
              case "defaultValue":
                g !== _ && (xt = !0), c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(d(137, l));
                break;
              default:
                g !== _ && Ct(
                  t,
                  l,
                  r,
                  g,
                  u,
                  _
                );
            }
        }
        xc(
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
        g = i = c = r = null;
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
                n !== f && (xt = !0), r = n;
                break;
              case "defaultValue":
                n !== f && (xt = !0), c = n;
                break;
              case "multiple":
                n !== f && (xt = !0), i = n;
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
        l = c, e = i, u = g, r != null ? ca(t, !!e, r, !1) : !!u != !!e && (l != null ? ca(t, !!e, l, !0) : ca(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        g = r = null;
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
                a !== n && (xt = !0), r = a;
                break;
              case "defaultValue":
                a !== n && (xt = !0), g = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(d(91));
                break;
              default:
                a !== n && Ct(t, l, i, a, u, n);
            }
        Ss(t, r, g);
        return;
      case "option":
        for (var p in e)
          r = e[p], e.hasOwnProperty(p) && r != null && !u.hasOwnProperty(p) && (p === "selected" ? t.selected = !1 : Ct(
            t,
            l,
            p,
            null,
            u,
            r
          ));
        for (f in u)
          r = u[f], g = e[f], u.hasOwnProperty(f) && r !== g && (r != null || g != null) && (f === "selected" ? (r !== g && (xt = !0), t.selected = r && typeof r != "function" && typeof r != "symbol") : Ct(
            t,
            l,
            f,
            r,
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
        for (var j in e)
          r = e[j], e.hasOwnProperty(j) && r != null && !u.hasOwnProperty(j) && Ct(t, l, j, null, u, r);
        for (m in u)
          if (r = u[m], g = e[m], u.hasOwnProperty(m) && r !== g && (r != null || g != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null)
                  throw Error(d(137, l));
                break;
              default:
                Ct(
                  t,
                  l,
                  m,
                  r,
                  u,
                  g
                );
            }
        return;
      default:
        if (Nc(l)) {
          for (var et in e)
            r = e[et], e.hasOwnProperty(et) && r !== void 0 && !u.hasOwnProperty(et) && No(
              t,
              l,
              et,
              void 0,
              u,
              r
            );
          for (S in u)
            r = u[S], g = e[S], !u.hasOwnProperty(S) || r === g || r === void 0 && g === void 0 || No(
              t,
              l,
              S,
              r,
              u,
              g
            );
          return;
        }
    }
    for (var v in e)
      r = e[v], e.hasOwnProperty(v) && r != null && !u.hasOwnProperty(v) && Ct(t, l, v, null, u, r);
    for (_ in u)
      r = u[_], g = e[_], !u.hasOwnProperty(_) || r === g || r == null && g == null || Ct(t, l, _, r, u, g);
  }
  function pd(t) {
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
  function Dy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), u = 0; u < e.length; u++) {
        var a = e[u], n = a.transferSize, i = a.initiatorType, c = a.duration;
        if (n && c && pd(i)) {
          for (i = 0, c = a.responseEnd, u += 1; u < e.length; u++) {
            var f = e[u], m = f.startTime;
            if (m > c) break;
            var S = f.transferSize, _ = f.initiatorType;
            S && pd(_) && (f = f.responseEnd, i += S * (f < c ? 1 : (c - m) / (f - m)));
          }
          if (--u, l += 8 * (n + i) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Ao = null, po = null;
  function Bn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Md(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Dd(t, l) {
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
  function Cd(t, l, e, u) {
    return e = Bn(
      e
    ).createElement(t), e[Qt] = u, e[el] = l, Tl(e, t, l), rl(e), e;
  }
  function Mo(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Do = null;
  function Cy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Do ? !1 : (Do = t, !0) : (Do = null, !1);
  }
  var Co = typeof setTimeout == "function" ? setTimeout : void 0, Ry = typeof clearTimeout == "function" ? clearTimeout : void 0, Rd = typeof Promise == "function" ? Promise : void 0, Ud = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Co, Uy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rd < "u" ? function(t) {
    return Rd.resolve(null).then(t).catch(Hy);
  } : Co;
  function Hy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Tu(t) {
    return t === "head";
  }
  function Hd(t, l) {
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
          Go(
            t.ownerDocument.documentElement
          );
        else if (e === "head") {
          e = t.ownerDocument.head, Go(e);
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Pa] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = i;
          }
        } else
          e === "body" && Go(t.ownerDocument.body);
      e = a;
    } while (e);
    Ka(l);
  }
  function jd(t, l) {
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
  function Bd(t, l, e) {
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
  function qd(t, l) {
    t = t.style, l = l.style;
    var e = l != null ? l.hasOwnProperty("viewTransitionName") ? l.viewTransitionName : l.hasOwnProperty("view-transition-name") ? l["view-transition-name"] : null : null;
    t.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = l != null ? l.hasOwnProperty("viewTransitionClass") ? l.viewTransitionClass : l.hasOwnProperty("view-transition-class") ? l["view-transition-class"] : null : null, t.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), t.display === "inline-block" && (l == null ? t.display = t.margin = "" : (e = l.display, t.display = e == null || typeof e == "boolean" ? "" : e, e = l.margin, e != null ? t.margin = e : (e = l.hasOwnProperty("marginTop") ? l.marginTop : l["margin-top"], t.marginTop = e == null || typeof e == "boolean" ? "" : e, l = l.hasOwnProperty("marginBottom") ? l.marginBottom : l["margin-bottom"], t.marginBottom = l == null || typeof l == "boolean" ? "" : l)));
  }
  function jy(t, l, e) {
    return e = e.ownerDocument.defaultView, {
      rect: t,
      abs: l.position === "absolute" || l.position === "fixed",
      clip: l.clipPath !== "none" || l.overflow !== "visible" || l.filter !== "none" || l.mask !== "none" || l.mask !== "none" || l.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= e.innerHeight && t.left <= e.innerWidth
    };
  }
  function Ro(t) {
    var l = t.getBoundingClientRect(), e = getComputedStyle(t);
    return jy(l, e, t);
  }
  function By(t) {
    return t.documentElement.clientHeight;
  }
  function qy(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Yy(t, l, e, u, a, n, i, c, f) {
    var m = l.nodeType === 9 ? l : l.ownerDocument;
    try {
      var S = m.startViewTransition({
        update: function() {
          var r = m.defaultView, g = r.navigation && r.navigation.transition, p = m.fonts.status;
          u();
          var j = [];
          if (p === "loaded" && (By(m), m.fonts.status === "loading" && j.push(m.fonts.ready)), p = j.length, t !== null)
            for (var et = t.suspenseyImages, v = 0, o = 0; o < et.length; o++) {
              var h = et[o];
              if (!h.complete) {
                var z = h.getBoundingClientRect();
                if (0 < z.bottom && 0 < z.right && z.top < r.innerHeight && z.left < r.innerWidth) {
                  if (v += av(h), v > dc) {
                    j.length = p;
                    break;
                  }
                  h = new Promise(
                    qy.bind(h)
                  ), j.push(h);
                }
              }
            }
          if (0 < j.length)
            return r = Promise.race([
              Promise.all(j),
              new Promise(function(R) {
                return setTimeout(R, 500);
              })
            ]).then(a, a), (g ? Promise.allSettled([g.finished, r]) : r).then(n, n);
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
          for (var r = m.documentElement.getAnimations({
            subtree: !0
          }), g = 0; g < r.length; g++) {
            var p = r[g], j = p.effect, et = j.pseudoElement;
            if (et != null && et.startsWith("::view-transition")) {
              _.push(p), p = j.getKeyframes();
              for (var v = et = void 0, o = !0, h = 0; h < p.length; h++) {
                var z = p[h], R = z.width;
                if (et === void 0) et = R;
                else if (et !== R) {
                  o = !1;
                  break;
                }
                if (R = z.height, v === void 0) v = R;
                else if (v !== R) {
                  o = !1;
                  break;
                }
                delete z.width, delete z.height, z.transform === "none" && delete z.transform;
              }
              o && et !== void 0 && v !== void 0 && (j.setKeyframes(p), o = getComputedStyle(
                j.target,
                j.pseudoElement
              ), o.width !== et || o.height !== v) && (o = p[0], o.width = et, o.height = v, o = p[p.length - 1], o.width = et, o.height = v, j.setKeyframes(p));
            }
          }
          i();
        },
        function(r) {
          m.__reactViewTransition === S && (m.__reactViewTransition = null);
          try {
            typeof r == "object" && r !== null && r.name === "InvalidStateError" && (r.message === "View transition was skipped because document visibility state is hidden." || r.message === "Skipping view transition because document visibility state has become hidden." || r.message === "Skipping view transition because viewport size changed." || r.message === "Transition was aborted because of invalid state") && (r = null), r !== null && f(r);
          } finally {
            u(), a(), i();
          }
        }
      ), S.finished.finally(function() {
        for (var r = 0; r < _.length; r++)
          _[r].cancel();
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
  function Yd(t) {
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
      if (Xd(n, t, l, e) === -1) {
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
        }), T(
          this._fragmentFiber.child,
          !1,
          Gy,
          t,
          c,
          u
        );
      }
      this._eventListeners = n;
    }
  };
  function Gy(t, l, e, u) {
    return Tt(t).addEventListener(
      l,
      e,
      u
    ), !1;
  }
  Wl.prototype.removeEventListener = function(t, l, e) {
    var u = this._eventListeners;
    if (u !== null && (l = Xd(
      u,
      t,
      l,
      e
    ), l !== -1)) {
      var a = u[l];
      e = a.attachedListener;
      var n = a.cleanup;
      a = Ga(a.optionsOrUseCapture), T(
        this._fragmentFiber.child,
        !1,
        Xy,
        t,
        e,
        a
      ), u.splice(l, 1), n !== null && n();
    }
  };
  function Xy(t, l, e, u) {
    return Tt(t).removeEventListener(
      l,
      e,
      u
    ), !1;
  }
  function Ga(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Gd(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Xd(t, l, e, u) {
    if (t.length === 0) return -1;
    u = Gd(u);
    for (var a = 0; a < t.length; a++) {
      var n = t[a];
      if (n.type === l && n.listener === e && Gd(n.optionsOrUseCapture) === u)
        return a;
    }
    return -1;
  }
  Wl.prototype.dispatchEvent = function(t) {
    var l = q(
      this._fragmentFiber
    );
    if (l === null) return !0;
    l = Tt(l);
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
    T(
      this._fragmentFiber.child,
      !0,
      Qd,
      t,
      void 0,
      void 0
    );
  };
  function Qd(t, l) {
    return t.tag === 6 ? !1 : (t = Tt(t), Iy(t, l));
  }
  Wl.prototype.focusLast = function(t) {
    var l = [];
    T(
      this._fragmentFiber.child,
      !0,
      Uo,
      l,
      void 0,
      void 0
    );
    for (var e = l.length - 1; 0 <= e && !Qd(l[e], t); e--) ;
  };
  function Uo(t, l) {
    return l.push(t), !1;
  }
  Wl.prototype.blur = function() {
    var t = q(
      this._fragmentFiber
    );
    t !== null && (t = Tt(t), t = Bn(t).activeElement, t !== null && T(
      this._fragmentFiber.child,
      !1,
      Qy,
      t,
      void 0,
      void 0
    ));
  };
  function Qy(t, l) {
    return t.tag === 6 ? !1 : (t = Tt(t), t === l || t.contains(l) ? (l.blur(), !0) : !1);
  }
  Wl.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), T(
      this._fragmentFiber.child,
      !1,
      Zy,
      t,
      void 0,
      void 0
    );
  };
  function Zy(t, l) {
    return t.tag === 6 || (t = Tt(t), l.observe(t)), !1;
  }
  Wl.prototype.unobserveUsing = function(t) {
    var l = this._observers;
    if (l !== null && l.has(t)) {
      l.delete(t), T(
        this._fragmentFiber.child,
        !1,
        Vy,
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
  function Vy(t, l) {
    return t.tag === 6 || (t = Tt(t), l.unobserve(t)), !1;
  }
  var ge = [], Ho = !1;
  function Ly(t, l, e) {
    ge.push({
      fragmentInstance: t,
      observer: l,
      instance: e
    }), Ho || (Ho = !0, Py(function() {
      Ho = !1;
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
    return T(
      this._fragmentFiber.child,
      !1,
      Ky,
      t,
      void 0,
      void 0
    ), t;
  };
  function Ky(t, l) {
    if (t.tag === 6) {
      t = t.stateNode;
      var e = t.ownerDocument.createRange();
      e.selectNodeContents(t), l.push.apply(l, e.getClientRects());
    } else
      t = Tt(t), l.push.apply(l, t.getClientRects());
    return !1;
  }
  Wl.prototype.getRootNode = function(t) {
    var l = q(
      this._fragmentFiber
    );
    return l === null ? this : Tt(l).getRootNode(t);
  }, Wl.prototype.compareDocumentPosition = function(t) {
    var l = q(
      this._fragmentFiber
    );
    if (l === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var e = [];
    T(
      this._fragmentFiber.child,
      !1,
      Uo,
      e,
      void 0,
      void 0
    );
    var u = Tt(l);
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
      return e === t ? a = Node.DOCUMENT_POSITION_CONTAINS : u & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = wt(l)[1], e === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (t = Tt(e).compareDocumentPosition(
        t
      ), a = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    l = Tt(e[0]), a = Tt(e[e.length - 1]);
    var n = Rt(this._fragmentFiber) ? l.parentElement : u;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    u = n.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var i = l.compareDocumentPosition(t), c = a.compareDocumentPosition(t), f = i & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = u && n && i & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, l = u && l === t || n && a === t || f || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !u && l === t || !n && a === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : i, l & Node.DOCUMENT_POSITION_DISCONNECTED || l & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || wy(
      l,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      t
    ) ? l : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function wy(t, l, e, u, a) {
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
        for (n = l, l = q(l); n !== null; ) {
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
    ), l === null ? l = !1 : (T(
      l,
      !0,
      yl,
      n,
      e
    ), n = Ft, Ft = null, l = n !== null)), l) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((l = !!n) && !(l = n === u) && (l = Ut(
      u,
      n,
      zl
    ), l === null ? l = !1 : (T(
      l,
      !0,
      Et,
      n,
      u
    ), n = Ft, ol = Ft = null, l = n !== null)), l) : !1;
  }
  function Zd(t, l) {
    var e = t.ownerDocument.createRange();
    e.selectNodeContents(t), t = e.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      l ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Wl.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(d(566));
    var l = [];
    T(
      this._fragmentFiber.child,
      !1,
      Uo,
      l,
      void 0,
      void 0
    );
    var e = t !== !1;
    if (l.length === 0) {
      var u = wt(
        this._fragmentFiber
      );
      if (u = e ? u[1] || u[0] || q(this._fragmentFiber) : u[0] || u[1], u === null) return;
      if (u.tag === 6) {
        t = Tt(u), Zd(t, e);
        return;
      }
      if (u = Tt(u), u.nodeType !== 9) {
        if (u.nodeType === 11) {
          e = "host" in u ? u.host : null, e !== null && e.scrollIntoView(t);
          return;
        }
        u.scrollIntoView(t);
      }
    }
    for (u = e ? l.length - 1 : 0; u !== (e ? -1 : l.length); ) {
      var a = l[u];
      a.tag === 6 ? (a = Tt(a), Zd(a, e)) : Tt(a).scrollIntoView(t), u += e ? -1 : 1;
    }
  };
  function Jy(t, l) {
    return t = Tt(t), Vd(t, l), !1;
  }
  function Vd(t, l) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(l);
  }
  function Ld(t, l) {
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
    }), Vd(t, l));
  }
  function $y(t, l) {
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
      typeof n.rootMargin == "string" ? Ly(
        l,
        n,
        t
      ) : n.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(l));
  }
  function jo(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          jo(e), ti(e);
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
  function ky(t, l, e, u) {
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
  function Fy(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = fe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Kd(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = fe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Bo(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function qo(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Wy(t, l) {
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
  var Yo = null;
  function wd(t) {
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
  function Jd(t) {
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
  function Iy(t, l) {
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
  function Py(t) {
    Ud(function() {
      Ud(function(l) {
        return t(l);
      });
    });
  }
  function $d(t, l, e) {
    switch (l = Bn(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(d(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(d(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(d(454));
        return t;
      default:
        throw Error(d(451));
    }
  }
  function kd(t, l, e) {
    for (var u in e) {
      var a = e[u];
      e.hasOwnProperty(u) && a != null && Ct(t, l, u, null, py, a);
    }
    e.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === ze && (t.onclick = null), ti(t);
  }
  function Go(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    ti(t);
  }
  var oe = /* @__PURE__ */ new Map(), Fd = /* @__PURE__ */ new Set();
  function qn(t) {
    if (typeof t.getRootNode == "function") {
      var l = t.getRootNode();
      if (l.nodeType === 9 || l.nodeType === 11) return l;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ke = J.d;
  J.d = {
    f: th,
    r: lh,
    D: eh,
    C: uh,
    L: ah,
    m: nh,
    X: ch,
    S: ih,
    M: fh
  };
  function th() {
    var t = ke.f(), l = uc();
    return t || l;
  }
  function lh(t) {
    var l = aa(t);
    l !== null && l.tag === 5 && l.type === "form" ? Ir(l) : ke.r(t);
  }
  var Xa = typeof document > "u" ? null : document;
  function Wd(t, l, e) {
    var u = Xa;
    if (u && typeof l == "string" && l) {
      var a = le(l);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof e == "string" && (a += '[crossorigin="' + e + '"]'), Fd.has(a) || (Fd.add(a), t = { rel: t, crossOrigin: e, href: l }, u.querySelector(a) === null && (l = u.createElement("link"), Tl(l, "link", t), rl(l), u.head.appendChild(l)));
    }
  }
  function eh(t) {
    ke.D(t), Wd("dns-prefetch", t, null);
  }
  function uh(t, l) {
    ke.C(t, l), Wd("preconnect", t, l);
  }
  function ah(t, l, e) {
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
          ss(i);
        }), rl(i), u.head.appendChild(i);
      }
    }
  }
  function nh(t, l) {
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
  function ih(t, l, e) {
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
          ), (e = oe.get(n)) && Xo(t, e);
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
  function ch(t, l) {
    ke.X(t, l);
    var e = Xa;
    if (e && t) {
      var u = na(e).hoistableScripts, a = Za(t), n = u.get(a);
      n || (n = e.querySelector(Gn(a)), n || (t = P({ src: t, async: !0 }, l), (l = oe.get(a)) && Qo(t, l), n = e.createElement("script"), rl(n), Tl(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function fh(t, l) {
    ke.M(t, l);
    var e = Xa;
    if (e && t) {
      var u = na(e).hoistableScripts, a = Za(t), n = u.get(a);
      n || (n = e.querySelector(Gn(a)), n || (t = P({ src: t, async: !0, type: "module" }, l), (l = oe.get(a)) && Qo(t, l), n = e.createElement("script"), rl(n), Tl(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function Id(t, l, e, u) {
    var a = (a = _l.current) ? qn(a) : null;
    if (!a) throw Error(d(446));
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
          }, oe.set(t, n)), oh(
            a,
            t,
            n,
            i.state
          ))), l && u === null)
            throw Error(d(528, ""));
          return i;
        }
        if (l && u !== null)
          throw Error(d(529, ""));
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
        throw Error(d(444, t));
    }
  }
  function Qa(t) {
    return 'href="' + le(t) + '"';
  }
  function Yn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Pd(t) {
    return P({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function oh(t, l, e, u) {
    if (l = t.querySelector(
      'link[rel="preload"][as="style"][' + l + "]"
    )) {
      if (l[Pn] !== !0) {
        u.loading = 1;
        return;
      }
    } else
      l = t.createElement("link"), l[Pn] = !0, l.onload = l.onerror = ss.bind(null, l), Tl(l, "link", e), rl(l), t.head.appendChild(l);
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
  function tv(t, l, e) {
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
          u = Pd(e), (a = oe.get(a)) && Xo(u, a), n = (t.ownerDocument || t).createElement("link"), rl(n);
          var i = n;
          return i._p = new Promise(function(c, f) {
            i.onload = c, i.onerror = f;
          }), Tl(n, "link", u), l.state.loading |= 4, sc(n, e.precedence, t), l.instance = n;
        case "script":
          return n = Za(e.src), (a = t.querySelector(
            Gn(n)
          )) ? (l.instance = a, rl(a), a) : (u = e, (a = oe.get(n)) && (u = P({}, e), Qo(u, a)), t = t.ownerDocument || t, a = t.createElement("script"), rl(a), Tl(a, "link", u), t.head.appendChild(a), l.instance = a);
        case "void":
          return null;
        default:
          throw Error(d(443, l.type));
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
  function Xo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function Qo(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var rc = null;
  function lv(t, l, e) {
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
  function Zo(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function sh(t, l, e) {
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
  function ev(t, l) {
    return t === "img" && l.src != null && l.src !== "" && l.onLoad == null && l.loading !== "lazy";
  }
  function uv(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function av(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function nv(t, l) {
    typeof l.decode == "function" && (t.imgCount++, l.complete || (t.imgBytes += av(l), t.suspenseyImages.push(l)), t = vh.bind(t), l.decode().then(t, t));
  }
  function rh(t, l, e, u) {
    if (e.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var a = Qa(u.href), n = l.querySelector(
          Yn(a)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Xn.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = n, rl(n);
          return;
        }
        n = l.ownerDocument || l, u = Pd(u), (a = oe.get(a)) && Xo(u, a), n = n.createElement("link"), rl(n);
        var i = n;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Tl(n, "link", u), e.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = Xn.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
    }
  }
  var dc = 0;
  function dh(t, l) {
    return t.stylesheets && t.count === 0 && mc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
      var u = setTimeout(function() {
        if (t.stylesheets && mc(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && dc === 0 && (dc = 62500 * Dy());
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
  function iv(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) mc(t, t.stylesheets);
      else if (t.unsuspend) {
        var l = t.unsuspend;
        t.unsuspend = null, l();
      }
    }
  }
  function Xn() {
    this.count--, iv(this);
  }
  function vh() {
    this.imgCount--, iv(this);
  }
  var vc = null;
  function mc(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, vc = /* @__PURE__ */ new Map(), l.forEach(mh, t), vc = null, Xn.call(t));
  }
  function mh(t, l) {
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
  var Va = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: Il,
    _currentValue2: Il,
    _threadCount: 0
  };
  function yh(t, l, e, u, a, n, i, c, f) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = b(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = b(0), this.hiddenUpdates = b(null), this.identifierPrefix = u, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function cv(t, l, e, u, a, n, i, c, f, m, S, _) {
    return t = new yh(
      t,
      l,
      e,
      i,
      f,
      m,
      S,
      _,
      c
    ), l = 1, n === !0 && (l |= 24), n = Bl(3, null, null, l), t.current = n, n.stateNode = t, l = lf(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: e,
      cache: l
    }, nf(n), t;
  }
  function fv(t) {
    return t ? (t = ya, t) : ya;
  }
  function ov(t, l, e, u, a, n) {
    a = fv(a), u.context === null ? u.context = a : u.pendingContext = a, u = fu(l), u.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (u.callback = n), e = ou(t, u, l), e !== null && (Xl(e, t, l), gn(e, t, l));
  }
  function sv(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Vo(t, l) {
    sv(t, l), (t = t.alternate) && sv(t, l);
  }
  function rv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Bu(t, 67108864);
      l !== null && Xl(l, t, 67108864), Vo(t, 67108864);
    }
  }
  function dv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Fl();
      l = qt(l);
      var e = Bu(t, l);
      e !== null && Xl(e, t, l), Vo(t, l);
    }
  }
  var La = !0;
  function hh(t, l, e, u) {
    var a = U.T;
    U.T = null;
    var n = J.p;
    try {
      J.p = 2, Lo(t, l, e, u);
    } finally {
      J.p = n, U.T = a;
    }
  }
  function gh(t, l, e, u) {
    var a = U.T;
    U.T = null;
    var n = J.p;
    try {
      J.p = 8, Lo(t, l, e, u);
    } finally {
      J.p = n, U.T = a;
    }
  }
  function Lo(t, l, e, u) {
    if (La) {
      var a = Ko(u);
      if (a === null)
        Oo(
          t,
          l,
          u,
          yc,
          e
        ), mv(t, u);
      else if (Sh(
        a,
        t,
        l,
        e,
        u
      ))
        u.stopPropagation();
      else if (mv(t, u), l & 4 && -1 < bh.indexOf(t)) {
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
                      var f = 1 << 31 - pl(i);
                      c.entanglements[1] |= f, i &= ~f;
                    }
                    Re(n), (Ot & 6) === 0 && (tc = Nl() + 500, Un(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Bu(n, 2), c !== null && Xl(c, n, 2), uc(), Vo(n, 2);
            }
          if (n = Ko(u), n === null && Oo(
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
        Oo(
          t,
          l,
          u,
          null,
          e
        );
    }
  }
  function Ko(t) {
    return t = pc(t), wo(t);
  }
  var yc = null;
  function wo(t) {
    if (yc = null, t = Ru(t), t !== null) {
      var l = w(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = Nt(l), t !== null) return t;
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
  function vv(t) {
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
          case pu:
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
  var Jo = !1, Eu = null, zu = null, _u = null, Qn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), xu = [], bh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function mv(t, l) {
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
  function Vn(t, l, e, u, a, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [a]
    }, l !== null && (l = aa(l), l !== null && rv(l)), t) : (t.eventSystemFlags |= u, l = t.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), t);
  }
  function Sh(t, l, e, u, a) {
    switch (l) {
      case "focusin":
        return Eu = Vn(
          Eu,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "dragenter":
        return zu = Vn(
          zu,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "mouseover":
        return _u = Vn(
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
          Vn(
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
          Vn(
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
  function yv(t) {
    var l = Ru(t.target);
    if (l !== null) {
      var e = w(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = Nt(e), l !== null) {
            t.blockedOn = l, Lt(t.priority, function() {
              dv(e);
            });
            return;
          }
        } else if (l === 31) {
          if (l = at(e), l !== null) {
            t.blockedOn = l, Lt(t.priority, function() {
              dv(e);
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
      var e = Ko(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var u = new e.constructor(
          e.type,
          e
        );
        Ac = u, e.target.dispatchEvent(u), Ac = null;
      } else
        return l = aa(e), l !== null && rv(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function hv(t, l, e) {
    hc(t) && e.delete(l);
  }
  function Th() {
    Jo = !1, Eu !== null && hc(Eu) && (Eu = null), zu !== null && hc(zu) && (zu = null), _u !== null && hc(_u) && (_u = null), Qn.forEach(hv), Zn.forEach(hv);
  }
  function gc(t, l) {
    t.blockedOn === l && (t.blockedOn = null, Jo || (Jo = !0, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      Th
    )));
  }
  var bc = null;
  function gv(t) {
    bc !== t && (bc = t, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      function() {
        bc === t && (bc = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], u = t[l + 1], a = t[l + 2];
          if (typeof u != "function") {
            if (wo(u || e) === null)
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
      yv(e), e.blockedOn === null && xu.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (u = 0; u < e.length; u += 3) {
        var a = e[u], n = e[u + 1], i = a[el] || null;
        if (typeof n == "function")
          i || gv(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (a = n, i = n[el] || null)
              c = i.formAction;
            else if (wo(a) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[u + 1] = c : (e.splice(u, 3), u -= 3), gv(e);
        }
      }
  }
  function bv() {
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
  function $o(t) {
    this._internalRoot = t;
  }
  Sc.prototype.render = $o.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(d(409));
    var e = l.current, u = Fl();
    ov(e, u, t, l, null, null);
  }, Sc.prototype.unmount = $o.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      ov(t.current, 2, null, t, null, null), uc(), l[te] = null;
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
      xu.splice(e, 0, t), e === 0 && yv(t);
    }
  };
  var Sv = Y.version;
  if (Sv !== "19.3.1")
    throw Error(
      d(
        527,
        Sv,
        "19.3.1"
      )
    );
  J.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(d(188)) : (t = Object.keys(t).join(","), Error(d(268, t)));
    return t = rt(l), t = t !== null ? C(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Eh = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tc.isDisabled && Tc.supportsFiber)
      try {
        Mu = Tc.inject(
          Eh
        ), Al = Tc;
      } catch {
      }
  }
  return Kn.createRoot = function(t, l) {
    if (!B(t)) throw Error(d(299));
    var e = !1, u = "", a = f0, n = o0, i = s0;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = cv(
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
      bv
    ), t[te] = l.current, xo(t), new $o(l);
  }, Kn.hydrateRoot = function(t, l, e) {
    if (!B(t)) throw Error(d(299));
    var u = !1, a = "", n = f0, i = o0, c = s0, f = null;
    return e != null && (e.unstable_strictMode === !0 && (u = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (f = e.formState)), l = cv(
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
      bv
    ), l.context = fv(null), e = l.current, u = Fl(), u = qt(u), a = fu(u), a.callback = null, ou(e, a, u), e = u, l.current.lanes = e, x(l, e), Re(l), t[te] = l.current, xo(t), new Sc(l);
  }, Kn.version = "19.3.1", Kn;
}
var Mv;
function Dh() {
  if (Mv) return Fo.exports;
  Mv = 1;
  function E() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (Y) {
        console.error(Y);
      }
  }
  return E(), Fo.exports = Mh(), Fo.exports;
}
var Ch = Dh(), H = cs(), Rh = Yv();
const Uh = 1.35, Hh = 0.95, jh = 1.22, ta = 0.8, Bh = 0.34, ns = -6, wn = 0.08, qh = 0.15, Yh = 34, Gh = 1024, ls = 1400, Ue = 0, es = 1, us = 2, Dv = { add: "Add to order", close: "Close", previous: "Previous plate", next: "Next plate", pause: "Pause belt" }, Cv = [
  { ring: "border-chart-1", dot: "bg-chart-1" },
  { ring: "border-chart-2", dot: "bg-chart-2" },
  { ring: "border-chart-3", dot: "bg-chart-3" },
  { ring: "border-chart-4", dot: "bg-chart-4" },
  { ring: "border-chart-5", dot: "bg-chart-5" }
], Xh = "[--belt:color-mix(in_oklab,var(--color-foreground)_78%,var(--color-background))] dark:[--belt:color-mix(in_oklab,var(--color-foreground)_16%,var(--color-background))] [--belt-side:color-mix(in_oklab,var(--color-foreground)_92%,var(--color-background))] dark:[--belt-side:color-mix(in_oklab,var(--color-foreground)_7%,var(--color-background))] [--rail:color-mix(in_oklab,var(--color-muted-foreground)_45%,white)] dark:[--rail:color-mix(in_oklab,var(--color-muted-foreground)_72%,var(--color-background))] [--island:color-mix(in_oklab,var(--color-muted-foreground)_16%,var(--color-background))] dark:[--island:color-mix(in_oklab,var(--color-foreground)_13%,var(--color-background))] [--island-low:color-mix(in_oklab,var(--color-muted-foreground)_27%,var(--color-background))] dark:[--island-low:color-mix(in_oklab,var(--color-foreground)_8%,var(--color-background))] [--island-wall:color-mix(in_oklab,var(--color-muted-foreground)_42%,var(--color-background))] dark:[--island-wall:color-mix(in_oklab,var(--color-foreground)_5%,var(--color-background))]";
function Qh() {
  return { offset: 0, v: 0, mode: Ue, target: 0, lift: [], vlift: [], z: [], lane: [], raf: 0, last: 0, visible: !0, init: !1, touched: !1, l: 0, center: -1, published: "", px: 0, py: 0, inside: !1, lock: !1, lockX: 0, lockY: 0 };
}
function Nu(E, Y, D) {
  return Math.max(Y, Math.min(D, E));
}
function is(E) {
  return Cv[Nu(Math.round(E ?? 1), 1, 5) - 1] ?? Cv[0];
}
function Jn(E, Y) {
  const { s: D, r: d } = E;
  let B = (Y % E.l + E.l) % E.l;
  if (B < D) return { x: D / 2 - B, z: d, nx: 0, nz: 1, tx: -1, tz: 0 };
  B -= D;
  const w = Math.PI * d;
  if (B < w) {
    const rt = B / d, C = Math.sin(rt), T = Math.cos(rt);
    return { x: -D / 2 - d * C, z: d * T, nx: -C, nz: T, tx: -T, tz: -C };
  }
  if (B -= w, B < D) return { x: -D / 2 + B, z: -d, nx: 0, nz: -1, tx: 1, tz: 0 };
  B -= D;
  const Nt = Math.min(Math.PI, B / d), at = Math.sin(Nt), L = Math.cos(Nt);
  return { x: D / 2 + d * at, z: -d * L, nx: at, nz: -L, tx: L, tz: at };
}
function Fe(E, Y, D) {
  const d = E.a + E.b * D;
  return { x: E.cx + Y * d, y: E.ym + ta * (E.a * D + E.b * D * D / 2), k: d };
}
function Rv(E, Y, D, d) {
  const B = Math.max(1, Y) * Uh * D, w = Math.min(Hh * D, B / (2 * Math.PI)), Nt = Math.max(0, (B - 2 * Math.PI * w) / 2), at = { width: E, height: 0, d: D, r: w, s: Nt, l: B, pitch: B / Math.max(1, Y), n: Math.max(1, Y), kb: d, cx: E / 2, ym: 0, a: (1 + d) / 2, b: (1 - d) / (2 * w), band: jh * D, slats: Math.max(10, Math.round(B / (Bh * D))), side: Math.max(3, D * 0.07), edgeTop: 0 };
  let L = 1 / 0, rt = -1 / 0, C = 1 / 0;
  for (let T = 0; T < 120; T++) {
    const q = Jn(at, T / 120 * B), Rt = Fe(at, q.x + q.nx * at.band / 2, q.z + q.nz * at.band / 2), wt = Fe(at, q.x, q.z), Bt = wt.k * D * ta / 2;
    C = Math.min(C, Rt.y), L = Math.min(L, Rt.y, wt.y + ns / 100 * Bt * 2 - Bt * (1 + wn) - Yh), rt = Math.max(rt, Rt.y + at.side + D * 0.06, wt.y + Bt + D * 0.08);
  }
  return at.ym = Math.ceil(-L) + 2, at.height = Math.ceil(rt - L) + 4, at.edgeTop = C + at.ym, at;
}
function Zh(E) {
  let Y = 0;
  for (let D = 0; D < 120; D++) {
    const d = Jn(E, D / 120 * E.l), B = Fe(E, d.x + d.nx * E.band / 2, d.z + d.nz * E.band / 2), w = Fe(E, d.x, d.z);
    Y = Math.max(Y, Math.abs(B.x - E.cx) + 3, Math.abs(w.x - E.cx) + w.k * E.d * (1 + wn) / 2);
  }
  return Y;
}
function as(E, Y) {
  let D = "";
  for (let B = 0; B < 168; B++) {
    const w = Jn(E, B / 168 * E.l), Nt = Fe(E, w.x + w.nx * Y, w.z + w.nz * Y);
    D += `${B ? "L" : "M"}${Nt.x.toFixed(1)} ${Nt.y.toFixed(1)}`;
  }
  return `${D}Z`;
}
function Uv(E, Y, D) {
  const d = E.band * 0.46, B = E.l / E.slats, w = B * 0.2;
  let Nt = "";
  for (let at = 0; at < E.slats; at++) {
    const L = Jn(E, Y + D + at * B), rt = Fe(E, L.x - L.nx * d, L.z - L.nz * d), C = Fe(E, L.x + L.nx * d, L.z + L.nz * d), T = Fe(E, L.x + L.tx * w, L.z + L.tz * w);
    Nt += `M${rt.x.toFixed(1)} ${rt.y.toFixed(1)}Q${(2 * T.x - (rt.x + C.x) / 2).toFixed(1)} ${(2 * T.y - (rt.y + C.y) / 2).toFixed(1)} ${C.x.toFixed(1)} ${C.y.toFixed(1)}`;
  }
  return Nt;
}
function Hv(E, Y, D) {
  const d = Jn(E, Y - D * E.pitch), B = Fe(E, d.x, d.z);
  return { x: B.x, y: B.y, k: B.k, depth: (d.z + E.r) / (2 * E.r) };
}
function jv(E, Y) {
  return (Math.round((Y - E.s / 2) / E.pitch) % E.n + E.n) % E.n;
}
function Vh(E, Y) {
  const D = [];
  for (let d = 1; d <= 5; d++) {
    const B = Y ? Y[d] : E.find((w) => (w.tier ?? 1) === d)?.price;
    B && D.push({ tier: d, label: B });
  }
  return D;
}
function Bv(E) {
  return String(E).padStart(2, "0");
}
function Lh({
  items: E,
  eyebrow: Y,
  heading: D,
  caption: d,
  action: B,
  speed: w = 26,
  paused: Nt,
  onPausedChange: at,
  autoplay: L = !1,
  interval: rt = 3e3,
  active: C,
  onActiveChange: T,
  onOpenChange: q,
  onAdd: Rt,
  legend: wt,
  labels: Bt = Dv,
  className: Tt,
  ref: Ft,
  ...ol
}) {
  const yl = H.useId().replace(/[^a-zA-Z0-9_-]/g, ""), Et = E.length, zl = H.useRef(null), Ut = H.useRef(null), P = H.useRef(null), dt = H.useRef(null), ht = H.useRef(null), W = H.useRef([]), zt = H.useRef([]), pt = H.useRef([]), sl = H.useRef([]), tl = H.useRef([]), F = H.useRef(Qh()), A = H.useRef({ id: -1, index: -1, x: 0, y: 0, moved: !1, start: 0, lane: 1, lastX: 0, lastT: 0, v: 0 }), G = H.useRef(-1), Z = H.useRef(null), ut = H.useRef(null), bt = H.useRef(null), [Wt, se] = H.useState({ section: 0, stage: 0 }), [He, s] = H.useState(null), [O, X] = H.useState(!1), [M, vt] = H.useState(null), [ft, _t] = H.useState(null), [U, J] = H.useState(() => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches), [Il, Au] = H.useState(L), [be, Pl] = H.useState(0), [ll, Ht] = H.useState({}), Ol = C !== void 0 ? C : He, Hl = Ol !== null && Ol >= 0 && Ol < Et ? Ol : null, _l = Nt ?? O, Ql = Wt.section >= Gh, je = Wt.section > 0 && Wt.section < 480, Se = je ? 0.6 : 0.68, Zt = H.useMemo(() => {
    if (!Wt.stage || Et === 0) return null;
    const y = Zh(Rv(1e3, Et, 100, Se)) / 100, b = Ql ? 150 : Nu(Wt.section * 0.143, 96, 150), x = (Wt.stage - (je ? 40 : 8)) / (2 * y);
    return Rv(Wt.stage, Et, Math.max(1, Math.floor(Math.min(x, b))), Se);
  }, [Wt.stage, Wt.section, Et, Se, Ql]), I = H.useRef({
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
    reduced: U,
    open: M !== null,
    count: Et,
    speed: Math.max(0, w),
    activeControlled: C !== void 0,
    pausedControlled: Nt !== void 0,
    onActiveChange: T,
    onPausedChange: at,
    onOpenChange: q,
    onAdd: Rt
  };
  const wa = H.useCallback((y) => {
    zl.current = y, typeof Ft == "function" ? Ft(y) : Ft && (Ft.current = y);
  }, [Ft]), Ja = H.useCallback((y) => {
    const b = I.current, x = b.geo, V = F.current, tt = W.current[y];
    if (!x || !tt) return;
    const nt = Hv(x, V.offset, y), $ = V.lift[y] ?? 0;
    tt.style.transform = `translate3d(${(nt.x - x.d / 2).toFixed(2)}px,${(nt.y - x.d * ta / 2).toFixed(2)}px,0) scale(${nt.k.toFixed(4)})`;
    const qt = y === b.active ? 2e3 : 100 + Math.round(nt.y);
    V.z[y] !== qt && (V.z[y] = qt, tt.style.zIndex = String(qt));
    const Jt = nt.depth >= 0.5 ? "front" : "back";
    V.lane[y] !== Jt && (V.lane[y] = Jt, tt.dataset.lane = Jt);
    const jl = zt.current[y];
    jl && (jl.style.transform = `translateY(${(ns * $).toFixed(3)}%) scale(${(1 + wn * $).toFixed(4)})`);
    const Lt = pt.current[y];
    Lt && (Lt.style.opacity = (qh * Nu(1 - nt.depth, 0, 1) * (1 - 0.7 * Nu($, 0, 1))).toFixed(3));
    const ct = sl.current[y];
    ct && (ct.style.transform = `translate3d(0,${(x.d * ta * 0.05 * $).toFixed(2)}px,0) scale(${(1 + 0.14 * $).toFixed(3)})`, ct.style.opacity = (1 - 0.5 * Nu($, 0, 1)).toFixed(3));
    const Qt = tl.current[y];
    Qt && (Qt.style.transform = `scale(${(1 / (nt.k * (1 + wn * $))).toFixed(4)})`);
  }, []), Zl = H.useCallback(() => {
    const b = I.current.geo, x = F.current;
    if (!b) return;
    dt.current?.setAttribute("d", Uv(b, x.offset, 0)), ht.current?.setAttribute("d", Uv(b, x.offset, -Math.max(1.4, b.d * 0.024)));
    const V = (Math.abs(x.v) < 5e-3 ? 0 : x.v).toFixed(2);
    V !== x.published && (x.published = V, P.current?.style.setProperty("--belt-v", V));
    const tt = jv(b, x.offset);
    tt !== x.center && (x.center = tt, Pl(tt));
  }, []), Te = H.useCallback(() => {
    for (let y = 0; y < I.current.count; y++) Ja(y);
    Zl();
  }, [Ja, Zl]), We = H.useCallback((y, b) => {
    const x = I.current, V = x.geo, tt = F.current;
    if (!V) return null;
    let nt = null, $ = -1 / 0;
    for (let qt = 0; qt < x.count; qt++) {
      const Jt = Hv(V, tt.offset, qt), jl = Nu(tt.lift[qt] ?? 0, 0, 1.2), Lt = (1 + wn * jl) * (qt === x.active ? 1.1 : 1), ct = V.d * Jt.k * Lt / 2, Qt = V.d * ta * Jt.k * Lt / 2, el = (y - Jt.x) / ct, te = (b - (Jt.y + ns / 100 * V.d * ta * Jt.k * jl)) / Qt;
      if (!(el * el + te * te > 1)) {
        if (qt === x.active) return qt;
        Jt.y > $ && (nt = qt, $ = Jt.y);
      }
    }
    return nt;
  }, []), $a = H.useRef((y) => {
  }), la = H.useCallback((y) => {
    const b = F.current, x = I.current, V = x.geo;
    if (b.raf = 0, !V || !b.visible) {
      b.last = 0;
      return;
    }
    const tt = b.last ? Nu((y - b.last) / 1e3, 0, 0.25) : 1 / 60;
    b.last = y;
    const nt = Math.max(1, Math.ceil(tt / 0.017)), $ = tt / nt, qt = x.paused || x.active !== null || x.open, Jt = x.reduced ? 0 : x.speed;
    for (let Lt = 0; Lt < nt; Lt++) {
      if (b.mode === es)
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
    for (let Lt = 0; Lt < x.count; Lt++) {
      const ct = Lt === x.active ? 1 : 0;
      Math.abs(ct - (b.lift[Lt] ?? 0)) < 2e-3 && Math.abs(b.vlift[Lt] ?? 0) < 0.02 ? (b.lift[Lt] = ct, b.vlift[Lt] = 0) : jl = !0;
    }
    if (b.inside && !b.lock && b.mode === Ue && !x.open && A.current.id < 0 && Math.abs(b.v) > 0.3) {
      const Lt = We(b.px, b.py);
      Lt !== null && Lt !== x.active && $a.current(Lt);
    }
    Te(), jl ? b.raf = requestAnimationFrame(la) : b.last = 0;
  }, [We, Te]), cl = H.useCallback(() => {
    const y = F.current;
    y.raf || !y.visible || (y.last = 0, y.raf = requestAnimationFrame(la));
  }, [la]), It = H.useCallback((y) => {
    const b = I.current;
    b.active !== y && (b.activeControlled || (b.active = y, s(y)), b.onActiveChange?.(y), cl());
  }, [cl]), Vl = H.useCallback(() => {
    Au(!1);
    const y = F.current;
    y.touched = !0, y.mode === es && (y.mode = Ue);
    const b = ut.current;
    b !== null && (ut.current = null, I.current.active === b && It(null));
  }, [It]), ka = H.useCallback((y) => {
    const b = F.current, x = I.current.geo;
    if (!x) return;
    const V = x.s / 2 + y * x.pitch;
    if (b.target = V + Math.round((b.offset - V) / x.l) * x.l, I.current.reduced) {
      b.offset = b.target, b.v = 0, b.mode = Ue, Te();
      return;
    }
    b.mode = es, cl();
  }, [cl, Te]), Fa = () => !!Ut.current?.querySelector("[data-dish]:focus-visible");
  $a.current = (y) => {
    const b = I.current.active;
    if (y === b) {
      y !== null && ut.current === y && (ut.current = null, Au(!1));
      return;
    }
    if (y !== null) {
      Vl(), It(y);
      return;
    }
    b !== null && b !== ut.current && !Fa() && It(null);
  };
  const Nl = H.useCallback((y) => {
    Vl(), It(y);
    const b = F.current;
    b.v = 0, b.mode = Ue, I.current.open = !0, Zl(), vt(y), I.current.onOpenChange?.(y);
  }, [Vl, It, Zl]), $n = H.useCallback(() => {
    I.current.open = !1, vt(null), I.current.onOpenChange?.(null), cl();
  }, [cl]), ea = (y, b) => {
    if (Et === 0) return;
    const x = (y % Et + Et) % Et;
    Vl(), b && W.current[x]?.focus({ preventScroll: !0 }), It(x), ka(x);
  }, kn = () => {
    Vl();
    const y = I.current, b = !y.paused;
    y.pausedControlled || (y.paused = b, X(b)), y.onPausedChange?.(b), !b && y.active !== null && !Fa() && !F.current.inside && It(null), cl();
  };
  H.useEffect(() => {
    const y = window.matchMedia("(prefers-reduced-motion: reduce)"), b = () => J(y.matches);
    return b(), y.addEventListener("change", b), () => y.removeEventListener("change", b);
  }, []), H.useEffect(() => {
    Au(L);
  }, [L]), H.useLayoutEffect(() => {
    const y = zl.current, b = Ut.current;
    if (!y || !b) return;
    const x = () => {
      const tt = { section: Math.round(y.clientWidth), stage: Math.round(b.clientWidth) };
      se((nt) => nt.section === tt.section && nt.stage === tt.stage ? nt : tt);
    };
    x();
    const V = new ResizeObserver(x);
    return V.observe(y), V.observe(b), () => V.disconnect();
  }, [Et > 0]), H.useLayoutEffect(() => {
    const y = F.current;
    if (Zt) {
      if (!y.init)
        y.init = !0, y.offset = Zt.s / 2 - Math.min(I.current.speed * 1.62, Zt.pitch * 0.45), y.v = I.current.reduced || I.current.paused ? 0 : I.current.speed;
      else if (y.l > 0 && y.l !== Zt.l) {
        const b = Zt.l / y.l;
        y.offset *= b, y.target *= b;
      }
      I.current.reduced && (y.v = 0, y.mode !== us && (y.mode = Ue), y.touched || (y.offset = Zt.s / 2)), y.l = Zt.l, y.z = [], y.lane = [], Te(), cl();
    }
  }, [Zt, E, U, Te, cl]), H.useEffect(() => {
    cl();
  }, [Hl, _l, M, U, w, cl]), H.useEffect(() => {
    const y = zl.current, b = F.current;
    let x = !0;
    const V = () => {
      const nt = x && !document.hidden;
      nt !== b.visible && (b.visible = nt, nt ? cl() : b.raf && (cancelAnimationFrame(b.raf), b.raf = 0, b.last = 0));
    }, tt = y && typeof IntersectionObserver == "function" ? new IntersectionObserver((nt) => {
      x = nt.some(($) => $.isIntersecting), V();
    }) : null;
    return y && tt && tt.observe(y), document.addEventListener("visibilitychange", V), V(), () => {
      tt?.disconnect(), document.removeEventListener("visibilitychange", V);
    };
  }, [cl]), H.useEffect(() => () => {
    const y = F.current;
    y.raf && cancelAnimationFrame(y.raf), y.raf = 0, y.last = 0;
  }, []);
  const pu = Zt !== null;
  H.useEffect(() => {
    if (!Il || U || _l || M !== null || Et === 0 || !pu) return;
    let y = 0;
    const b = () => {
      const x = I.current.geo;
      if (!x) return;
      const V = bt.current, tt = V === null ? jv(x, F.current.offset + I.current.speed * 0.25) : (V + 1) % Et;
      bt.current = tt, ut.current = tt, It(tt), ka(tt), y = window.setTimeout(() => {
        ut.current === tt && (ut.current = null, I.current.active === tt && It(null)), y = window.setTimeout(b, Math.max(300, rt - ls));
      }, ls);
    };
    return y = window.setTimeout(b, bt.current === null ? 1600 : Math.max(300, rt - ls)), () => window.clearTimeout(y);
  }, [Il, U, _l, M, Et, rt, pu, It, ka]), H.useLayoutEffect(() => {
    if (M !== null || ft !== null || Z.current === null) return;
    const y = Z.current;
    Z.current = null, W.current[y]?.focus({ preventScroll: !0 });
  }, [M, ft]);
  const Wa = (y) => {
    const b = Ut.current?.getBoundingClientRect();
    return { x: y.clientX - (b?.left ?? 0), y: y.clientY - (b?.top ?? 0) };
  }, Fn = (y) => {
    const b = I.current.geo;
    if (y.button !== 0 || !b) return;
    const x = Wa(y), V = We(x.x, x.y);
    G.current = -1, A.current = { id: y.pointerId, index: V ?? -1, x: y.clientX, y: y.clientY, moved: !1, start: F.current.offset, lane: x.y >= b.ym ? 1 : -1, lastX: y.clientX, lastT: y.timeStamp, v: 0 };
  }, Ec = (y) => {
    const b = F.current, x = A.current, V = Ut.current, tt = I.current.geo;
    if (!V || !tt) return;
    const nt = Wa(y);
    if (y.pointerType === "mouse" && (b.px = nt.x, b.py = nt.y, b.inside = !0), x.id === y.pointerId) {
      const $ = y.clientX - x.x, qt = y.timeStamp;
      if (!x.moved && Math.abs($) > 6 && Math.abs($) > Math.abs(y.clientY - x.y) && (x.moved = !0, Vl(), It(null), b.mode = us, V.isConnected && V.setPointerCapture(y.pointerId)), x.moved) {
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
    const V = F.current, tt = Ut.current;
    if (tt?.hasPointerCapture(y.pointerId) && tt.releasePointerCapture(y.pointerId), A.current = { ...x, id: -1 }, V.mode === us) {
      V.mode = Ue;
      const $ = Math.exp(-Math.max(0, y.timeStamp - x.lastT) / 70);
      if (V.v = I.current.reduced ? 0 : Nu(V.v * $, -1400, 1400), y.pointerType === "mouse") {
        const qt = Wa(y);
        V.lock = !0, V.lockX = qt.x, V.lockY = qt.y;
      }
      cl();
      return;
    }
    if (b || x.moved) return;
    const nt = y.pointerType !== "mouse";
    if (x.index < 0) {
      nt && I.current.active !== null && (Vl(), It(null));
      return;
    }
    Vl(), nt && I.current.active !== x.index ? It(x.index) : G.current = x.index;
  }, Mu = (y) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(y.key) || Et === 0) return;
    y.preventDefault();
    const b = y.target.closest("[data-dish]")?.getAttribute("data-dish"), x = b != null ? Number(b) : Hl ?? be;
    ea(y.key === "Home" ? 0 : y.key === "End" ? Et - 1 : x + (y.key === "ArrowRight" ? 1 : -1), !0);
  }, Al = H.useCallback(() => M === null ? null : zt.current[M]?.getBoundingClientRect() ?? null, [M]), Ee = H.useCallback((y) => _t(y ? M : null), [M]), pl = H.useCallback(() => {
    Z.current = M, $n();
  }, [M, $n]), zc = H.useCallback(() => {
    const y = M === null ? void 0 : E[M];
    y && I.current.onAdd?.(y);
  }, [M, E]), Ml = H.useMemo(() => Zt ? { outer: as(Zt, Zt.band / 2), inner: as(Zt, -Zt.band / 2), island: as(Zt, -Zt.band / 2 - Zt.d * 0.035) } : null, [Zt]), Du = Hl === null ? null : E[Hl] ?? null, ua = Hl ?? be, Ie = Vh(E, wt), gt = Zt, re = "inline-flex size-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none", Cu = (Y || D || Ie.length > 0) && /* @__PURE__ */ N.jsxs("div", { className: Ql ? "flex flex-col items-start gap-4 text-left" : "flex flex-col items-center gap-2 px-2 text-center", children: [
    Y && /* @__PURE__ */ N.jsx("p", { className: "text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground", children: Y }),
    D && /* @__PURE__ */ N.jsx("h2", { className: `text-balance font-medium tracking-tight ${Ql ? "text-4xl leading-[1.1] xl:text-[2.75rem]" : "text-2xl md:text-3xl"}`, children: D }),
    Ie.length > 0 && /* @__PURE__ */ N.jsx("ul", { "aria-hidden": "true", "data-legend": !0, className: `mt-1 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[11px] tabular-nums text-muted-foreground ${Ql ? "justify-start" : "justify-center"} ${je ? "max-w-[15rem]" : ""}`, children: Ie.map((y) => /* @__PURE__ */ N.jsxs("li", { className: "inline-flex items-center gap-1.5", children: [
      /* @__PURE__ */ N.jsx("span", { className: `size-2.5 rounded-full border-2 bg-transparent ${is(y.tier).ring}` }),
      y.label
    ] }, y.tier)) })
  ] }), Pe = /* @__PURE__ */ N.jsxs("div", { id: `${yl}-caption`, "aria-live": "polite", "data-caption": !0, className: Ql ? "min-h-[3.25rem]" : `mx-auto mt-2 max-w-md px-2 text-center ${je ? "min-h-[3.75rem]" : "min-h-[2.75rem]"}`, children: [
    /* @__PURE__ */ N.jsx("p", { className: `text-sm ${Du ? "font-medium text-foreground" : "text-muted-foreground"}`, children: Du ? Du.name : d }),
    Du?.description && /* @__PURE__ */ N.jsx("p", { className: "mt-0.5 text-[13px] leading-snug text-muted-foreground", children: Du.description })
  ] }), Ia = Et > 1 && /* @__PURE__ */ N.jsxs("div", { className: "relative z-10 mt-1 flex items-center justify-center gap-1.5", children: [
    /* @__PURE__ */ N.jsx("button", { type: "button", "data-control": "previous", "aria-label": Bt.previous, onClick: () => ea((I.current.active ?? F.current.center) - 1, !1), className: re, children: /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ N.jsx("path", { d: "M10 3.5 5.5 8l4.5 4.5" }) }) }),
    /* @__PURE__ */ N.jsx("button", { type: "button", "data-control": "pause", "aria-label": Bt.pause ?? Dv.pause, "aria-pressed": _l, onClick: kn, className: re, children: _l ? /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "currentColor", children: /* @__PURE__ */ N.jsx("path", { d: "M5 3.4v9.2a.6.6 0 0 0 .9.5l7.4-4.6a.6.6 0 0 0 0-1L5.9 2.9a.6.6 0 0 0-.9.5Z" }) }) : /* @__PURE__ */ N.jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "currentColor", children: [
      /* @__PURE__ */ N.jsx("rect", { x: "4", y: "3", width: "2.6", height: "10", rx: "0.8" }),
      /* @__PURE__ */ N.jsx("rect", { x: "9.4", y: "3", width: "2.6", height: "10", rx: "0.8" })
    ] }) }),
    /* @__PURE__ */ N.jsx("button", { type: "button", "data-control": "next", "aria-label": Bt.next, onClick: () => ea((I.current.active ?? F.current.center) + 1, !1), className: re, children: /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ N.jsx("path", { d: "M6 3.5 10.5 8 6 12.5" }) }) })
  ] }), In = Et > 0 && /* @__PURE__ */ N.jsxs(
    "div",
    {
      ref: Ut,
      "data-stage": !0,
      role: "group",
      "aria-label": D ?? "Sushi conveyor belt",
      "aria-roledescription": "conveyor belt",
      className: "relative w-full touch-pan-y select-none",
      style: { height: gt ? gt.height : 260, overflowX: "clip" },
      onPointerDown: Fn,
      onPointerMove: Ec,
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
        gt && E.map((y, b) => {
          const x = is(y.tier), V = Hl === b, tt = !!ll[y.id], nt = `url("${y.image}") 0 0 / 100% 100% no-repeat`;
          return /* @__PURE__ */ N.jsxs(
            "button",
            {
              ref: ($) => {
                W.current[b] = $;
              },
              type: "button",
              "data-dish": b,
              "data-active": V || void 0,
              tabIndex: b === ua ? 0 : -1,
              "aria-label": y.name,
              "aria-describedby": `${yl}-caption`,
              "aria-haspopup": "dialog",
              "aria-current": V || void 0,
              className: "absolute left-0 top-0 cursor-pointer rounded-[50%] border-0 bg-transparent p-0 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
              style: { width: gt.d, height: gt.d * ta, visibility: ft === b ? "hidden" : void 0 },
              onFocus: () => {
                A.current.id < 0 && (Vl(), It(b));
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
                  zt.current[b] = $;
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
                    pt.current[b] = $;
                  }, "aria-hidden": "true", className: "pointer-events-none absolute inset-0 rounded-[50%] bg-black", style: { opacity: 0, WebkitMask: nt, mask: nt } }),
                  /* @__PURE__ */ N.jsx("span", { ref: ($) => {
                    tl.current[b] = $;
                  }, "aria-hidden": "true", className: "pointer-events-none absolute left-1/2 top-0 size-0", children: /* @__PURE__ */ N.jsxs("span", { "data-chip": !0, className: `absolute bottom-[7px] left-0 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card py-1 pl-2 pr-2.5 text-[11px] font-medium leading-none text-card-foreground shadow-[0_6px_16px_-6px_color-mix(in_oklab,var(--color-foreground)_40%,transparent)] transition-[opacity,translate] duration-300 motion-reduce:transition-none ${V && ft !== b ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`, children: [
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
      "data-open": M ?? "",
      "data-paused": _l || void 0,
      "data-center": be,
      className: `relative isolate w-full overflow-hidden bg-transparent text-foreground ${Xh} ${Tt ?? ""}`,
      children: [
        /* @__PURE__ */ N.jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute inset-0 -z-10", style: { background: "radial-gradient(64% 52% at 50% 56%, color-mix(in oklab, var(--color-foreground) 5%, transparent), transparent 72%)" } }),
        Ql ? /* @__PURE__ */ N.jsxs("div", { className: "mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,24rem)_minmax(0,1fr)] items-center gap-12 px-10 py-14", children: [
          /* @__PURE__ */ N.jsxs("div", { className: "flex flex-col items-start gap-6", children: [
            Cu,
            Pe,
            B
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
          B && /* @__PURE__ */ N.jsx("div", { className: "mt-3 flex justify-center", children: B })
        ] }),
        M !== null && E[M] && /* @__PURE__ */ N.jsx(
          Kh,
          {
            uid: yl,
            item: E[M],
            index: M,
            total: Et,
            labels: Bt,
            reduced: U,
            broken: !!ll[E[M].id],
            source: Al,
            onLift: Ee,
            onAdd: Rt ? zc : void 0,
            onClose: pl
          }
        )
      ]
    }
  );
}
function Kh({ uid: E, item: Y, index: D, total: d, labels: B, reduced: w, broken: Nt, source: at, onLift: L, onAdd: rt, onClose: C }) {
  const T = H.useRef(null), q = H.useRef(null), Rt = H.useRef(null), wt = H.useRef(0), Bt = H.useRef(!1), [Tt, Ft] = H.useState(!1), [ol, yl] = H.useState(!1), Et = `${E}-dish-title`, zl = is(Y.tier);
  H.useLayoutEffect(() => {
    const ht = q.current, W = at();
    Rt.current?.focus({ preventScroll: !0 });
    const zt = document.body.style.overflow;
    document.body.style.overflow = "hidden", L(!0);
    let pt = null;
    if (ht && W && !w && W.width > 0) {
      const tl = ht.getBoundingClientRect(), F = W.width / tl.width, A = W.height / tl.height, G = W.left + W.width / 2 - (tl.left + tl.width / 2), Z = W.top + W.height / 2 - (tl.top + tl.height / 2), ut = Math.min(120, Math.abs(Z) * 0.3 + 40);
      pt = ht.animate([
        { transform: `translate(${G}px, ${Z}px) scale(${F}, ${A})` },
        { transform: `translate(${G * 0.42}px, ${Z * 0.42 - ut}px) scale(${(F + 1) / 2 * 1.05}, ${(A + 1) / 2 * 1.05}) rotate(${G > 0 ? -6 : 6}deg)`, offset: 0.5 },
        { transform: "none" }
      ], { duration: 680, easing: "cubic-bezier(.22,.85,.3,1)" });
    }
    const sl = requestAnimationFrame(() => Ft(!0));
    return () => {
      cancelAnimationFrame(sl), pt?.cancel(), window.clearTimeout(wt.current), document.body.style.overflow = zt, L(!1);
    };
  }, [at, w, L]);
  const Ut = H.useCallback(() => {
    if (Bt.current) return;
    Bt.current = !0, Ft(!1);
    const ht = q.current, W = at();
    if (!ht || !W || w || W.width === 0) {
      C();
      return;
    }
    const zt = ht.getBoundingClientRect(), pt = W.width / zt.width, sl = W.height / zt.height, tl = W.left + W.width / 2 - (zt.left + zt.width / 2), F = W.top + W.height / 2 - (zt.top + zt.height / 2), A = ht.animate([
      { transform: "none" },
      { transform: `translate(${tl * 0.58}px, ${F * 0.58 - 36}px) scale(${(pt + 1) / 2}, ${(sl + 1) / 2})`, offset: 0.55 },
      { transform: `translate(${tl}px, ${F}px) scale(${pt}, ${sl})` }
    ], { duration: 540, easing: "cubic-bezier(.45,0,.55,1)", fill: "forwards" });
    A.onfinish = () => C();
  }, [at, w, C]);
  H.useEffect(() => {
    const ht = (W) => {
      const zt = T.current;
      if (!(!zt || zt.contains(W.target))) {
        if (W.key === "Escape")
          W.preventDefault(), Ut();
        else if (W.key === "Tab") {
          const pt = zt.querySelector("button");
          pt && (W.preventDefault(), pt.focus());
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
    const W = [...T.current?.querySelectorAll("button") ?? []].filter((sl) => !sl.disabled), zt = W[0], pt = W.at(-1);
    !zt || !pt || (ht.shiftKey && document.activeElement === zt ? (ht.preventDefault(), pt.focus()) : !ht.shiftKey && document.activeElement === pt && (ht.preventDefault(), zt.focus()));
  }, dt = () => {
    ol || Bt.current || (rt?.(), yl(!0), wt.current = window.setTimeout(Ut, w ? 0 : 450));
  };
  return Rh.createPortal(
    /* @__PURE__ */ N.jsxs("div", { ref: T, role: "dialog", "aria-modal": "true", "aria-labelledby": Et, "data-dish-dialog": !0, className: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 text-foreground sm:p-8", onKeyDown: P, children: [
      /* @__PURE__ */ N.jsx("div", { "aria-hidden": "true", className: `absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-300 motion-reduce:transition-none ${Tt ? "opacity-100" : "opacity-0"}`, onClick: Ut }),
      /* @__PURE__ */ N.jsxs("div", { className: "relative grid w-full max-w-[52rem] items-center gap-6 p-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] sm:gap-10 sm:p-8", children: [
        /* @__PURE__ */ N.jsx("div", { "aria-hidden": "true", className: `absolute inset-0 rounded-[2rem] border border-border bg-card shadow-2xl transition-[opacity,scale] duration-300 motion-reduce:transition-none ${Tt ? "scale-100 opacity-100" : "scale-[0.97] opacity-0"}` }),
        /* @__PURE__ */ N.jsxs("button", { ref: Rt, type: "button", onClick: Ut, className: `absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground outline-none transition-[opacity,color] duration-300 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none ${Tt ? "opacity-100" : "opacity-0"}`, children: [
          B.close,
          /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-3.5", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", children: /* @__PURE__ */ N.jsx("path", { d: "M3.5 3.5l9 9M12.5 3.5l-9 9" }) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { ref: q, "data-dish-figure": !0, className: "relative mx-auto aspect-square w-full max-w-[min(42vh,22rem)]", children: [
          /* @__PURE__ */ N.jsx("span", { "aria-hidden": "true", className: "absolute inset-x-[8%] bottom-[-4%] top-[14%] rounded-full bg-black opacity-25 blur-2xl dark:opacity-70" }),
          Nt ? /* @__PURE__ */ N.jsx("span", { "aria-hidden": "true", className: "absolute inset-[3%] rounded-full border border-border bg-muted", children: /* @__PURE__ */ N.jsx("span", { className: "absolute inset-[30%] rounded-full bg-muted-foreground/25" }) }) : /* @__PURE__ */ N.jsx("img", { src: Y.image, alt: Y.name, draggable: !1, className: "relative size-full rounded-full select-none object-contain" })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: `relative flex flex-col gap-3 text-center transition-[opacity,translate] delay-150 duration-500 motion-reduce:transition-none sm:text-left ${Tt ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`, children: [
          /* @__PURE__ */ N.jsxs("p", { className: "flex items-center justify-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground sm:justify-start", children: [
            /* @__PURE__ */ N.jsx("span", { "aria-hidden": "true", className: `size-2 rounded-full ${zl.dot}` }),
            Bv(D + 1),
            " / ",
            Bv(d)
          ] }),
          /* @__PURE__ */ N.jsx("h3", { id: Et, className: "text-2xl font-medium tracking-tight sm:text-3xl", children: Y.name }),
          Y.description && /* @__PURE__ */ N.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: Y.description }),
          Y.details && Y.details.length > 0 && /* @__PURE__ */ N.jsx("ul", { className: "flex flex-wrap justify-center gap-2 sm:justify-start", children: Y.details.map((ht) => /* @__PURE__ */ N.jsx("li", { className: "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground", children: ht }, ht)) }),
          /* @__PURE__ */ N.jsxs("div", { className: "mt-2 flex flex-wrap items-center justify-center gap-4 sm:justify-start", children: [
            /* @__PURE__ */ N.jsx("p", { className: "text-2xl font-semibold tabular-nums tracking-tight", children: Y.price }),
            rt && /* @__PURE__ */ N.jsxs("button", { type: "button", "data-add": !0, onClick: dt, className: "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm outline-none transition-[translate,box-shadow] hover:-translate-y-px hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none", children: [
              ol ? /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-4", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ N.jsx("path", { d: "M3.5 8.5l3 3 6-7" }) }) : /* @__PURE__ */ N.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", className: "size-4", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", children: /* @__PURE__ */ N.jsx("path", { d: "M8 3.5v9M3.5 8h9" }) }),
              B.add
            ] })
          ] })
        ] })
      ] })
    ] }),
    document.body
  );
}
const wh = [
  ["mushroom", "Spicy Garlic Mushroom", 790],
  ["chicken-strips", "Chicken Tender Strips", 690],
  ["fish-chips", "Fish & Chips", 790],
  ["club", "Club Sandwich", 790],
  ["cheesy-chicken", "Cheesy Grilled Chicken Sandwich", 840],
  ["steak-sandwich", "Beef Steak Sandwich", 890],
  ["special", "Barock Special Sandwich", 990]
], Jh = [690, 790, 840, 890, 990], $h = wh.map(([E, Y, D]) => ({
  id: E,
  name: Y,
  price: `BDT ${D}`,
  tier: Jh.indexOf(D) + 1,
  image: `./assets/menu-dishes/${E}.webp`
})), qv = document.getElementById("menu-conveyor");
qv && Ch.createRoot(qv).render(/* @__PURE__ */ N.jsx(Lh, { items: $h, legend: {}, eyebrow: "From the BAROCK kitchen", heading: "Appetizers & sandwiches", caption: "Pick a plate to explore a dish." }));
