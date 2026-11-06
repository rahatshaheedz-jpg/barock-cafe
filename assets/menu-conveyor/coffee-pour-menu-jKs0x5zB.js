import { r as T, j as p } from "./menu-conveyor-BSzR5ya9.js";
const Ei = T.createContext({});
function Po(t) {
  const e = T.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const So = typeof window < "u", Mo = So ? T.useLayoutEffect : T.useEffect, $n = /* @__PURE__ */ T.createContext(null);
function Fn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function be(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const lt = (t, e, n) => n > e ? e : n < t ? t : n;
let Re = () => {
};
const gt = {}, Di = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), ji = (t) => typeof t == "object" && t !== null, Ri = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function Li(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const et = /* @__NO_SIDE_EFFECTS__ */ (t) => t, Jt = (...t) => t.reduce((e, n) => (s) => n(e(s))), Xt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const s = e - t;
  return s ? (n - t) / s : 1;
};
class In {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Fn(this.subscriptions, e), () => be(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const J = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, tt = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, $i = /* @__NO_SIDE_EFFECTS__ */ (t, e) => e ? t * (1e3 / e) : 0, Fi = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, ko = 1e-7, Co = 12;
function Vo(t, e, n, s, i) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = Fi(r, s, i) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > ko && ++a < Co);
  return r;
}
// @__NO_SIDE_EFFECTS__
function te(t, e, n, s) {
  if (t === e && n === s)
    return et;
  const i = (o) => Vo(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : Fi(i(o), e, s);
}
const Ii = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Bi = /* @__NO_SIDE_EFFECTS__ */ (t) => (e) => 1 - t(1 - e), Oi = /* @__PURE__ */ te(0.33, 1.53, 0.69, 0.99), Bn = /* @__PURE__ */ Bi(Oi), Wi = /* @__PURE__ */ Ii(Bn), Ni = (t) => t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * Bn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), On = (t) => 1 - Math.sin(Math.acos(t)), Ui = /* @__PURE__ */ Bi(On), _i = /* @__PURE__ */ Ii(On), Eo = /* @__PURE__ */ te(0.42, 0, 1, 1), Do = /* @__PURE__ */ te(0, 0, 0.58, 1), Gi = /* @__PURE__ */ te(0.42, 0, 0.58, 1), jo = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] != "number", Ki = /* @__NO_SIDE_EFFECTS__ */ (t) => Array.isArray(t) && typeof t[0] == "number", Ro = {
  linear: et,
  easeIn: Eo,
  easeInOut: Gi,
  easeOut: Do,
  circIn: On,
  circInOut: _i,
  circOut: Ui,
  backIn: Bn,
  backInOut: Wi,
  backOut: Oi,
  anticipate: Ni
}, Lo = (t) => typeof t == "string", us = (t) => {
  if (/* @__PURE__ */ Ki(t)) {
    Re(t.length === 4);
    const [e, n, s, i] = t;
    return /* @__PURE__ */ te(e, n, s, i);
  } else if (Lo(t))
    return Ro[t];
  return t;
}, se = [
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
function $o(t) {
  let e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = !1, i = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let r = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(c) {
    o.has(c) && (l.schedule(c), t()), c(r);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, u = !1, h = !1) => {
      const x = h && s ? e : n;
      return u && o.add(c), x.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      n.delete(c), o.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (r = c, s) {
        i = !0;
        return;
      }
      s = !0;
      const u = e;
      e = n, n = u, e.forEach(a), e.clear(), s = !1, i && (i = !1, l.process(c));
    }
  };
  return l;
}
const Fo = 40;
function zi(t, e) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = se.reduce((b, w) => (b[w] = $o(o), b), {}), { setup: a, read: l, resolveKeyframes: c, preUpdate: u, update: h, preRender: d, render: x, postRender: f } = r, y = () => {
    const b = gt.useManualTiming, w = b ? i.timestamp : performance.now();
    n = !1, b || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(w - i.timestamp, Fo), 1)), i.timestamp = w, i.isProcessing = !0, a.process(i), l.process(i), c.process(i), u.process(i), h.process(i), d.process(i), x.process(i), f.process(i), i.isProcessing = !1, n && e && (s = !1, t(y));
  }, m = () => {
    n = !0, s = !0, i.isProcessing || t(y);
  };
  return { schedule: se.reduce((b, w) => {
    const S = r[w];
    return b[w] = (D, E = !1, C = !1) => (n || m(), S.schedule(D, E, C)), b;
  }, {}), cancel: (b) => {
    for (let w = 0; w < se.length; w++)
      r[se[w]].cancel(b);
  }, state: i, steps: r };
}
const { schedule: B, cancel: yt, state: H, steps: We } = /* @__PURE__ */ zi(typeof requestAnimationFrame < "u" ? requestAnimationFrame : et, !0);
let le;
function Io() {
  le = void 0;
}
const Y = {
  now: () => (le === void 0 && Y.set(H.isProcessing || gt.useManualTiming ? H.timestamp : performance.now()), le),
  set: (t) => {
    le = t, queueMicrotask(Io);
  }
}, Hi = (t) => (e) => typeof e == "string" && e.startsWith(t), Xi = /* @__PURE__ */ Hi("--"), Bo = /* @__PURE__ */ Hi("var(--"), Wn = (t) => Bo(t) ? Oo.test(t.split("/*")[0].trim()) : !1, Oo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function hs(t) {
  return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--");
}
const It = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, qt = {
  ...It,
  transform: (t) => lt(0, 1, t)
}, ie = {
  ...It,
  default: 1
}, Gt = (t) => Math.round(t * 1e5) / 1e5, Nn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Wo(t) {
  return t == null;
}
const No = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Un = (t, e) => (n) => !!(typeof n == "string" && No.test(n) && n.startsWith(t) || e && !Wo(n) && Object.prototype.hasOwnProperty.call(n, e)), qi = (t, e, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, o, r, a] = s.match(Nn);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Uo = (t) => lt(0, 255, t), Ne = {
  ...It,
  transform: (t) => Math.round(Uo(t))
}, At = {
  test: /* @__PURE__ */ Un("rgb", "red"),
  parse: /* @__PURE__ */ qi("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + Ne.transform(t) + ", " + Ne.transform(e) + ", " + Ne.transform(n) + ", " + Gt(qt.transform(s)) + ")"
};
function _o(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const on = {
  test: /* @__PURE__ */ Un("#"),
  parse: _o,
  transform: At.transform
}, ee = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), ct = /* @__PURE__ */ ee("deg"), at = /* @__PURE__ */ ee("%"), A = /* @__PURE__ */ ee("px"), Go = /* @__PURE__ */ ee("vh"), Ko = /* @__PURE__ */ ee("vw"), fs = {
  ...at,
  parse: (t) => at.parse(t) / 100,
  transform: (t) => at.transform(t * 100)
}, Vt = {
  test: /* @__PURE__ */ Un("hsl", "hue"),
  parse: /* @__PURE__ */ qi("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + at.transform(Gt(e)) + ", " + at.transform(Gt(n)) + ", " + Gt(qt.transform(s)) + ")"
}, G = {
  test: (t) => At.test(t) || on.test(t) || Vt.test(t),
  parse: (t) => At.test(t) ? At.parse(t) : Vt.test(t) ? Vt.parse(t) : on.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? At.transform(t) : Vt.transform(t),
  getAnimatableNone: (t) => {
    const e = G.parse(t);
    return e.alpha = 0, G.transform(e);
  }
}, zo = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ho(t) {
  return isNaN(t) && typeof t == "string" && (t.match(Nn)?.length || 0) + (t.match(zo)?.length || 0) > 0;
}
const Yi = "number", Zi = "color", Xo = "var", qo = "var(", ds = "${}", Yo = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Lt(t) {
  const e = t.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = e.replace(Yo, (l) => (G.test(l) ? (s.color.push(o), i.push(Zi), n.push(G.parse(l))) : l.startsWith(qo) ? (s.var.push(o), i.push(Xo), n.push(l)) : (s.number.push(o), i.push(Yi), n.push(parseFloat(l))), ++o, ds)).split(ds);
  return { values: n, split: a, indexes: s, types: i };
}
function Zo(t) {
  return Lt(t).values;
}
function Qi({ split: t, types: e }) {
  const n = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < n; o++)
      if (i += t[o], s[o] !== void 0) {
        const r = e[o];
        r === Yi ? i += Gt(s[o]) : r === Zi ? i += G.transform(s[o]) : i += s[o];
      }
    return i;
  };
}
function Qo(t) {
  return Qi(Lt(t));
}
const Jo = (t) => typeof t == "number" ? 0 : G.test(t) ? G.getAnimatableNone(t) : t, ta = (t, e) => typeof t == "number" ? e?.trim().endsWith("/") ? t : 0 : Jo(t);
function ea(t) {
  const e = Lt(t);
  return Qi(e)(e.values.map((s, i) => ta(s, e.split[i])));
}
const it = {
  test: Ho,
  parse: Zo,
  createTransformer: Qo,
  getAnimatableNone: ea
};
function Ue(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function na({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!e)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = Ue(l, a, t + 1 / 3), o = Ue(l, a, t), r = Ue(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
function we(t, e) {
  return (n) => n > 0 ? e : t;
}
const I = (t, e, n) => t + (e - t) * n, _e = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, sa = [on, At, Vt], ia = (t) => sa.find((e) => e.test(t));
function ps(t) {
  const e = ia(t);
  if (!e)
    return !1;
  let n = e.parse(t);
  return e === Vt && (n = na(n)), n;
}
const ms = (t, e) => {
  const n = ps(t), s = ps(e);
  if (!n || !s)
    return we(t, e);
  const i = { ...n };
  return (o) => (i.red = _e(n.red, s.red, o), i.green = _e(n.green, s.green, o), i.blue = _e(n.blue, s.blue, o), i.alpha = I(n.alpha, s.alpha, o), At.transform(i));
}, an = /* @__PURE__ */ new Set(["none", "hidden"]);
function ra(t, e) {
  return an.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function oa(t, e) {
  return (n) => I(t, e, n);
}
function _n(t) {
  return typeof t == "number" ? oa : typeof t == "string" ? Wn(t) ? we : G.test(t) ? ms : ca : Array.isArray(t) ? Ji : typeof t == "object" ? G.test(t) ? ms : aa : we;
}
function Ji(t, e) {
  const n = [...t], s = n.length, i = t.map((o, r) => _n(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function aa(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = _n(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function la(t, e) {
  const n = [], s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i], r = t.indexes[o][s[o]], a = t.values[r] ?? 0;
    n[i] = a, s[o]++;
  }
  return n;
}
const ca = (t, e) => {
  const n = it.createTransformer(e), s = Lt(t), i = Lt(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? an.has(t) && !i.values.length || an.has(e) && !s.values.length ? ra(t, e) : Jt(Ji(la(s, i), i.values), n) : we(t, e);
};
function tr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? I(t, e, n) : _n(t)(t, e);
}
const ua = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => B.update(e, n),
    stop: () => yt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => H.isProcessing ? H.timestamp : Y.now()
  };
}, er = (t, e, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < i; o++)
    s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, Te = 2e4;
function Gn(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < Te; )
    e += n, s = t.next(e);
  return e >= Te ? 1 / 0 : e;
}
function ha(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }), i = Math.min(Gn(s), Te);
  return {
    type: "keyframes",
    ease: (o) => s.next(i * o).value / e,
    duration: /* @__PURE__ */ tt(i)
  };
}
const _ = {
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
function ln(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const fa = 12;
function da(t, e, n) {
  let s = n;
  for (let i = 1; i < fa; i++)
    s = s - t(s) / e(s);
  return s;
}
const Ge = 1e-3;
function pa({ duration: t = _.duration, bounce: e = _.bounce, velocity: n = _.velocity, mass: s = _.mass }) {
  let i, o, r = 1 - e;
  r = lt(_.minDamping, _.maxDamping, r), t = lt(_.minDuration, _.maxDuration, /* @__PURE__ */ tt(t)), r < 1 ? (i = (c) => {
    const u = c * r, h = u * t, d = u - n, x = ln(c, r), f = Math.exp(-h);
    return Ge - d / x * f;
  }, o = (c) => {
    const h = c * r * t, d = h * n + n, x = Math.pow(r, 2) * Math.pow(c, 2) * t, f = Math.exp(-h), y = ln(Math.pow(c, 2), r);
    return (-i(c) + Ge > 0 ? -1 : 1) * ((d - x) * f) / y;
  }) : (i = (c) => {
    const u = Math.exp(-c * t), h = (c - n) * t + 1;
    return -Ge + u * h;
  }, o = (c) => {
    const u = Math.exp(-c * t), h = (n - c) * (t * t);
    return u * h;
  });
  const a = 5 / t, l = da(i, o, a);
  if (t = /* @__PURE__ */ J(t), isNaN(l))
    return {
      stiffness: _.stiffness,
      damping: _.damping,
      duration: t
    };
  {
    const c = Math.pow(l, 2) * s;
    return {
      stiffness: c,
      damping: r * 2 * Math.sqrt(s * c),
      duration: t
    };
  }
}
const ma = ["duration", "bounce"], ga = ["stiffness", "damping", "mass"];
function gs(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function ya(t) {
  let e = {
    velocity: _.velocity,
    stiffness: _.stiffness,
    damping: _.damping,
    mass: _.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!gs(t, ga) && gs(t, ma))
    if (e.velocity = 0, t.visualDuration) {
      const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * lt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = {
        ...e,
        mass: _.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = pa({ ...t, velocity: 0 });
      e = {
        ...e,
        ...n,
        mass: _.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Ae(t = _.visualDuration, e = _.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: c, mass: u, duration: h, velocity: d, isResolvedFromDuration: x } = ya({
    ...n,
    velocity: -/* @__PURE__ */ tt(n.velocity || 0)
  }), f = d || 0, y = c / (2 * Math.sqrt(l * u)), m = r - o, g = /* @__PURE__ */ tt(Math.sqrt(l / u)), v = Math.abs(m) < 5;
  s || (s = v ? _.restSpeed.granular : _.restSpeed.default), i || (i = v ? _.restDelta.granular : _.restDelta.default);
  let b, w, S, D, E, C;
  if (y < 1)
    S = ln(g, y), D = (f + y * g * m) / S, b = (k) => {
      const P = Math.exp(-y * g * k);
      return r - P * (D * Math.sin(S * k) + m * Math.cos(S * k));
    }, E = y * g * D + m * S, C = y * g * m - D * S, w = (k) => Math.exp(-y * g * k) * (E * Math.sin(S * k) + C * Math.cos(S * k));
  else if (y === 1) {
    b = (P) => r - Math.exp(-g * P) * (m + (f + g * m) * P);
    const k = f + g * m;
    w = (P) => Math.exp(-g * P) * (g * k * P - f);
  } else {
    const k = g * Math.sqrt(y * y - 1);
    b = ($) => {
      const V = Math.exp(-y * g * $), N = Math.min(k * $, 300);
      return r - V * ((f + y * g * m) * Math.sinh(N) + k * m * Math.cosh(N)) / k;
    };
    const P = (f + y * g * m) / k, L = y * g * P - m * k, j = y * g * m - P * k;
    w = ($) => {
      const V = Math.exp(-y * g * $), N = Math.min(k * $, 300);
      return V * (L * Math.sinh(N) + j * Math.cosh(N));
    };
  }
  const W = {
    calculatedDuration: x && h || null,
    velocity: (k) => /* @__PURE__ */ J(w(k)),
    next: (k) => {
      if (!x && y < 1) {
        const L = Math.exp(-y * g * k), j = Math.sin(S * k), $ = Math.cos(S * k), V = r - L * (D * j + m * $), N = /* @__PURE__ */ J(L * (E * j + C * $));
        return a.done = Math.abs(N) <= s && Math.abs(r - V) <= i, a.value = a.done ? r : V, a;
      }
      const P = b(k);
      if (x)
        a.done = k >= h;
      else {
        const L = /* @__PURE__ */ J(w(k));
        a.done = Math.abs(L) <= s && Math.abs(r - P) <= i;
      }
      return a.value = a.done ? r : P, a;
    },
    toString: () => {
      const k = Math.min(Gn(W), Te), P = er((L) => W.next(k * L).value, k, 30);
      return k + "ms " + P;
    },
    toTransition: () => {
    }
  };
  return W;
}
Ae.applyToOptions = (t) => {
  const e = ha(t, 100, Ae);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ J(e.duration), t.type = "keyframes", t;
};
const xa = 5;
function nr(t, e, n) {
  const s = Math.max(e - xa, 0);
  return /* @__PURE__ */ $i(n - t(s), e - s);
}
function cn({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const h = t[0], d = {
    done: !1,
    value: h
  }, x = (C) => a !== void 0 && C < a || l !== void 0 && C > l, f = (C) => a === void 0 ? l : l === void 0 || Math.abs(a - C) < Math.abs(l - C) ? a : l;
  let y = n * e;
  const m = h + y, g = r === void 0 ? m : r(m);
  g !== m && (y = g - h);
  const v = (C) => -y * Math.exp(-C / s), b = (C) => g + v(C), w = (C) => {
    const W = v(C), k = b(C);
    d.done = Math.abs(W) <= c, d.value = d.done ? g : k;
  };
  let S, D;
  const E = (C) => {
    x(d.value) && (S = C, D = Ae({
      keyframes: [d.value, f(d.value)],
      velocity: nr(b, C, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: c,
      restSpeed: u
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (C) => {
      let W = !1;
      return !D && S === void 0 && (W = !0, w(C), E(C)), S !== void 0 && C >= S ? D.next(C - S) : (!W && w(C), d);
    }
  };
}
function va(t, e, n) {
  const s = [], i = n || gt.mix || tr, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || et : e;
      a = Jt(l, a);
    }
    s.push(a);
  }
  return s;
}
function ba(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if (Re(o === e.length), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = va(e, s, i), l = a.length, c = (u) => {
    if (r && u < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(u < t[h + 1]); h++)
        ;
    const d = /* @__PURE__ */ Xt(t[h], t[h + 1], u);
    return a[h](d);
  };
  return n ? (u) => c(lt(t[0], t[o - 1], u)) : c;
}
function wa(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = /* @__PURE__ */ Xt(0, e, s);
    t.push(I(n, 1, i));
  }
}
function Ta(t) {
  const e = [0];
  return wa(e, t.length - 1), e;
}
function Aa(t, e) {
  return t.map((n) => n * e);
}
function Pa(t, e) {
  return t.map(() => e || Gi).splice(0, t.length - 1);
}
function Kt({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = /* @__PURE__ */ jo(s) ? s.map(us) : us(s), o = {
    done: !1,
    value: e[0]
  }, r = Aa(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Ta(e),
    t
  ), a = ba(r, e, {
    ease: Array.isArray(i) ? i : Pa(e, i)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Sa = (t) => t !== null;
function Le(t, { repeat: e, repeatType: n = "loop" }, s, i = 1) {
  const o = t.filter(Sa), a = i < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || s === void 0 ? o[a] : s;
}
const Ma = {
  decay: cn,
  inertia: cn,
  tween: Kt,
  keyframes: Kt,
  spring: Ae
};
function sr(t) {
  typeof t.type == "string" && (t.type = Ma[t.type]);
}
class Kn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
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
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const ka = (t) => t / 100;
class Pe extends Kn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Y.now() && this.tick(Y.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    sr(e);
    const { type: n = Kt, repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const l = n || Kt;
    l !== Kt && typeof a[0] != "number" && (this.mixKeyframes = Jt(ka, tr(a[0], a[1])), a = [0, 100]);
    const c = l({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -r
    })), c.calculatedDuration === null && (c.calculatedDuration = Gn(c));
    const { calculatedDuration: u } = c;
    this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (s + 1) - i, this.generator = c;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: s, totalDuration: i, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return s.next(0);
    const { delay: c = 0, keyframes: u, repeat: h, repeatType: d, repeatDelay: x, type: f, onUpdate: y, finalKeyframe: m } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), v = this.playbackSpeed >= 0 ? g < 0 : g > i;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let b = this.currentTime, w = s;
    if (h) {
      const C = Math.min(this.currentTime, i) / a;
      let W = Math.floor(C), k = C % 1;
      !k && C >= 1 && (k = 1), k === 1 && W--, W = Math.min(W, h + 1), W % 2 && (d === "reverse" ? (k = 1 - k, x && (k -= x / a)) : d === "mirror" && (w = r)), b = lt(0, 1, k) * a;
    }
    let S;
    v ? (this.delayState.value = u[0], S = this.delayState) : S = w.next(b), o && !v && (S.value = o(S.value));
    let { done: D } = S;
    !v && l !== null && (D = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
    return E && f !== cn && (S.value = Le(u, this.options, m, this.speed)), y && y(S.value), E && this.finish(), S;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ tt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ tt(e);
  }
  get time() {
    return /* @__PURE__ */ tt(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ J(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const e = this.currentTime;
    if (e <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(e);
    const n = this.generator.next(e).value;
    return nr((s) => this.generator.next(s).value, e, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    n && this.driver && this.updateTime(Y.now()), this.playbackSpeed = e, n && this.driver && (this.time = /* @__PURE__ */ tt(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = ua, startTime: n } = this.options;
    this.driver || (this.driver = e((i) => this.tick(i))), this.options.onPlay?.();
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = n ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Y.now()), this.holdTime = this.currentTime;
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
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
  }
}
function Ca(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const Pt = (t) => t * 180 / Math.PI, un = (t) => {
  const e = Pt(Math.atan2(t[1], t[0]));
  return hn(e);
}, Va = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: un,
  rotateZ: un,
  skewX: (t) => Pt(Math.atan(t[1])),
  skewY: (t) => Pt(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, hn = (t) => (t = t % 360, t < 0 && (t += 360), t), ys = un, xs = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), vs = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), Ea = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: xs,
  scaleY: vs,
  scale: (t) => (xs(t) + vs(t)) / 2,
  rotateX: (t) => hn(Pt(Math.atan2(t[6], t[5]))),
  rotateY: (t) => hn(Pt(Math.atan2(-t[2], t[0]))),
  rotateZ: ys,
  rotate: ys,
  skewX: (t) => Pt(Math.atan(t[4])),
  skewY: (t) => Pt(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function fn(t) {
  return t.includes("scale") ? 1 : 0;
}
function dn(t, e) {
  if (!t || t === "none")
    return fn(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n)
    s = Ea, i = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = Va, i = a;
  }
  if (!i)
    return fn(e);
  const o = s[e], r = i[1].split(",").map(ja);
  return typeof o == "function" ? o(r) : r[o];
}
const Da = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return dn(n, e);
};
function ja(t) {
  return parseFloat(t.trim());
}
const Bt = [
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
], Ot = /* @__PURE__ */ new Set([...Bt, "pathRotation"]), bs = (t) => t === It || t === A, Ra = /* @__PURE__ */ new Set(["x", "y", "z"]), La = Bt.filter((t) => !Ra.has(t));
function $a(t) {
  const e = [];
  return La.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const dt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0", boxSizing: s }) => {
    const i = t.max - t.min;
    return s === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0", boxSizing: s }) => {
    const i = t.max - t.min;
    return s === "border-box" ? i : i - parseFloat(e) - parseFloat(n);
  },
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => dn(e, "x"),
  y: (t, { transform: e }) => dn(e, "y")
};
dt.translateX = dt.x;
dt.translateY = dt.y;
const St = /* @__PURE__ */ new Set();
let pn = !1, mn = !1, gn = !1;
function ir() {
  if (mn) {
    const t = Array.from(St).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const i = $a(s);
      i.length && (n.set(s, i), s.render());
    }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([o, r]) => {
        s.getValue(o)?.set(r);
      });
    }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  mn = !1, pn = !1, St.forEach((t) => t.complete(gn)), St.clear();
}
function rr() {
  St.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (mn = !0);
  });
}
function Fa() {
  gn = !0, rr(), ir(), gn = !1;
}
class zn {
  constructor(e, n, s, i, o, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (St.add(this), pn || (pn = !0, B.read(rr), B.resolveKeyframes(ir))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    if (e[0] === null) {
      const o = i?.get(), r = e[e.length - 1];
      if (o !== void 0)
        e[0] = o;
      else if (s && n) {
        const a = s.readValue(n, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0]);
    }
    Ca(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), St.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (St.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Ia = (t) => t.startsWith("--");
function or(t, e, n) {
  Ia(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const Ba = {};
function ar(t, e) {
  const n = /* @__PURE__ */ Li(t);
  return () => Ba[e] ?? n();
}
const Oa = /* @__PURE__ */ ar(() => window.ScrollTimeline !== void 0, "scrollTimeline"), lr = /* @__PURE__ */ ar(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Nt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, ws = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Nt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Nt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Nt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Nt([0.33, 1.53, 0.69, 0.99])
};
function cr(t, e) {
  if (t)
    return typeof t == "function" ? lr() ? er(t, e) : "ease-out" : /* @__PURE__ */ Ki(t) ? Nt(t) : Array.isArray(t) ? t.map((n) => cr(n, e) || ws.easeOut) : ws[t];
}
function Wa(t, e, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeOut", times: l } = {}, c = void 0) {
  const u = {
    [e]: n
  };
  l && (u.offset = l);
  const h = cr(a, i);
  Array.isArray(h) && (u.easing = h);
  const d = {
    delay: s,
    duration: i,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  };
  return c && (d.pseudoElement = c), t.animate(u, d);
}
function ur(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Na({ type: t, ...e }) {
  return ur(t) && lr() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class hr extends Kn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e)
      return;
    const { element: n, name: s, keyframes: i, pseudoElement: o, allowFlatten: r = !1, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, Re(typeof e.type != "string");
    const c = Na(e);
    this.animation = Wa(n, s, i, c, o), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const u = Le(i, this.options, a, this.speed);
        this.updateMotionValue && this.updateMotionValue(u), or(n, s, u), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
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
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
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
    const e = this.options?.element;
    !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ tt(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ tt(e);
  }
  get time() {
    return /* @__PURE__ */ tt(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    const n = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ J(e), n && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, rangeStart: n, rangeEnd: s, observe: i }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Oa() ? (this.animation.timeline = e, n && (this.animation.rangeStart = n), s && (this.animation.rangeEnd = s), et) : i(this);
  }
}
const fr = {
  anticipate: Ni,
  backInOut: Wi,
  circInOut: _i
};
function Ua(t) {
  return t in fr;
}
function _a(t) {
  typeof t.ease == "string" && Ua(t.ease) && (t.ease = fr[t.ease]);
}
const Ke = 10;
class Ga extends hr {
  constructor(e) {
    _a(e), sr(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: s, onComplete: i, element: o, ...r } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new Pe({
      ...r,
      autoplay: !1
    }), l = Math.max(Ke, Y.now() - this.startTime), c = lt(0, Ke, l - Ke), u = a.sample(l).value, { name: h } = this.options;
    o && h && or(o, h, u), n.setWithVelocity(a.sample(Math.max(0, l - c)).value, u, c), a.stop();
  }
}
const Ts = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(it.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Ka(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function za(t, e, n, s) {
  const i = t[0];
  if (i === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = Ts(i, e), a = Ts(o, e);
  return !r || !a ? !1 : Ka(t) || (n === "spring" || ur(n)) && s;
}
function yn(t) {
  t.duration = 0, t.type = "keyframes";
}
const dr = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Ha = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Xa(t) {
  for (let e = 0; e < t.length; e++)
    if (typeof t[e] == "string" && Ha.test(t[e]))
      return !0;
  return !1;
}
const qa = /* @__PURE__ */ new Set([
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
]), Ya = /* @__PURE__ */ Li(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Za(t) {
  const { motionValue: e, name: n, repeatDelay: s, repeatType: i, damping: o, type: r, keyframes: a } = t, l = e?.owner?.current;
  if (!(l instanceof HTMLElement) && !(l instanceof SVGElement))
    return !1;
  const { onUpdate: c, transformTemplate: u } = e.owner.getProps();
  return Ya() && n && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (dr.has(n) || qa.has(n) && Xa(a)) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !s && i !== "mirror" && o !== 0 && r !== "inertia";
}
const Qa = 40;
class Ja extends Kn {
  constructor({ autoplay: e = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: a, name: l, motionValue: c, element: u, ...h }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Y.now();
    const d = {
      autoplay: e,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: o,
      repeatType: r,
      name: l,
      motionValue: c,
      element: u,
      ...h
    }, x = u?.KeyframeResolver || zn;
    this.keyframeResolver = new x(a, (f, y, m) => this.onKeyframesResolved(f, y, d, !m), l, c, u), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: l, isHandoff: c, onUpdate: u } = s;
    this.resolvedAt = Y.now();
    let h = !0;
    za(e, o, r, a) || (h = !1, (gt.instantAnimations || !l) && u?.(Le(e, s, n)), e[0] = e[e.length - 1], yn(s), s.repeat = 0);
    const x = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Qa ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...s,
      keyframes: e
    }, f = h && !c && Za(x), y = x.motionValue?.owner?.current;
    let m;
    if (f)
      try {
        m = new Ga({
          ...x,
          element: y
        });
      } catch {
        m = new Pe(x);
      }
    else
      m = new Pe(x);
    m.finished.then(() => {
      this.notifyFinished();
    }).catch(et), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Fa()), this._animation;
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
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
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
function pr(t, e, n, s = 0, i = 1) {
  const o = Array.from(t).sort((c, u) => c.sortNodePosition(u)).indexOf(e), r = t.size, a = (r - 1) * s;
  return typeof n == "function" ? n(o, r) : i === 1 ? o * s : a - o * s;
}
const As = 30, tl = (t) => !isNaN(parseFloat(t));
class el {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s) => {
      const i = Y.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = Y.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = tl(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
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
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new In());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), B.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
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
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
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
    const e = Y.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > As)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, As);
    return /* @__PURE__ */ $i(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
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
function $t(t, e) {
  return new el(t, e);
}
function mr(t, e) {
  if (t?.inherit && e) {
    const { inherit: n, ...s } = t;
    return { ...e, ...s };
  }
  return t;
}
function Hn(t, e) {
  const n = t?.[e] ?? t?.default ?? t;
  return n !== t ? mr(n, t) : n;
}
const nl = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, sl = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), il = {
  type: "keyframes",
  duration: 0.8
}, rl = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ol = (t, { keyframes: e }) => e.length > 2 ? il : Ot.has(t) ? t.startsWith("scale") ? sl(e[1]) : nl : rl, al = /* @__PURE__ */ new Set([
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
function ll(t) {
  for (const e in t)
    if (!al.has(e))
      return !0;
  return !1;
}
const Xn = (t, e, n, s = {}, i, o) => (r) => {
  const a = Hn(s, t) || {}, l = a.delay || s.delay || 0;
  let { elapsed: c = 0 } = s;
  c = c - /* @__PURE__ */ J(l);
  const u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -c,
    onUpdate: (d) => {
      e.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : i
  };
  ll(a) || Object.assign(u, ol(t, u)), u.duration && (u.duration = /* @__PURE__ */ J(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ J(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (yn(u), u.delay === 0 && (h = !0)), (gt.instantAnimations || gt.skipAnimations || i?.shouldSkipAnimations || a.skipAnimations) && (h = !0, yn(u), u.delay = 0), u.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
    const d = Le(u.keyframes, a);
    if (d !== void 0) {
      B.update(() => {
        u.onUpdate(d), u.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Pe(u) : new Ja(u);
}, cl = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function ul(t) {
  const e = cl.exec(t);
  if (!e)
    return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function gr(t, e, n = 1) {
  const [s, i] = ul(t);
  if (!s)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return Di(r) ? parseFloat(r) : r;
  }
  return Wn(i) ? gr(i, e, n + 1) : i;
}
function Ps(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function qn(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = Ps(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = Ps(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function Mt(t, e, n) {
  const s = t.getProps();
  return qn(s, e, n !== void 0 ? n : s.custom, t);
}
const yr = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Bt
]), xn = (t) => Array.isArray(t);
function hl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, $t(n));
}
function fl(t) {
  return xn(t) ? t[t.length - 1] || 0 : t;
}
function dl(t, e) {
  const n = Mt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = fl(o[r]);
    hl(t, r, a);
  }
}
const X = (t) => !!(t && t.getVelocity);
function pl(t) {
  return !!(X(t) && t.add);
}
function vn(t, e) {
  const n = t.getValue("willChange");
  if (pl(n))
    return n.add(e);
  if (!n && gt.WillChange) {
    const s = new gt.WillChange("auto");
    t.addValue("willChange", s), s.add(e);
  }
}
function Yn(t) {
  return t.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
const ml = "framerAppearId", xr = "data-" + Yn(ml);
function vr(t) {
  return t.props[xr];
}
function gl({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function br(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o, transitionEnd: r, ...a } = e;
  const l = t.getDefaultTransition();
  o = o ? mr(o, l) : l;
  const c = o?.reduceMotion, u = o?.skipAnimations;
  s && (o = s);
  const h = [], d = i && t.animationState && t.animationState.getState()[i], x = o?.path;
  x && x.animateVisualElement(t, a, o, n, h);
  for (const f in a) {
    const y = t.getValue(f, t.latestValues[f] ?? null), m = a[f];
    if (m === void 0 || d && gl(d, f))
      continue;
    const g = {
      delay: n,
      ...Hn(o || {}, f)
    };
    u && (g.skipAnimations = !0);
    const v = y.get();
    if (v !== void 0 && !y.isAnimating() && !Array.isArray(m) && m === v && !g.velocity) {
      B.update(() => y.set(m));
      continue;
    }
    let b = !1;
    if (window.MotionHandoffAnimation) {
      const D = vr(t);
      if (D) {
        const E = window.MotionHandoffAnimation(D, f, B);
        E !== null && (g.startTime = E, b = !0);
      }
    }
    vn(t, f);
    const w = c ?? t.shouldReduceMotion;
    y.start(Xn(f, y, m, w && yr.has(f) ? { type: !1 } : g, t, b));
    const S = y.animation;
    S && h.push(S);
  }
  if (r) {
    const f = () => B.update(() => {
      r && dl(t, r);
    });
    h.length ? Promise.all(h).then(f) : f();
  }
  return h;
}
function bn(t, e, n = {}) {
  const s = Mt(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(br(t, s, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: h } = i;
    return yl(t, e, l, c, u, h, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [l, c] = a === "beforeChildren" ? [o, r] : [r, o];
    return l().then(() => c());
  } else
    return Promise.all([o(), r(n.delay)]);
}
function yl(t, e, n = 0, s = 0, i = 0, o = 1, r) {
  const a = [];
  for (const l of t.variantChildren)
    l.notify("AnimationStart", e), a.push(bn(l, e, {
      ...r,
      delay: n + (typeof s == "function" ? 0 : s) + pr(t.variantChildren, l, s, i, o)
    }).then(() => l.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function xl(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => bn(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string")
    s = bn(t, e, n);
  else {
    const i = typeof e == "function" ? Mt(t, e, n.custom) : e;
    s = Promise.all(br(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const vl = {
  test: (t) => t === "auto",
  parse: (t) => t
}, wr = (t) => (e) => e.test(t), Tr = [It, A, at, ct, Ko, Go, vl], Ss = (t) => Tr.find(wr(t));
function bl(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Ri(t) : !0;
}
const wl = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Tl(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(Nn) || [];
  if (!s)
    return t;
  const i = n.replace(s, "");
  let o = wl.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const Al = /\b([a-z-]*)\(.*?\)/gu, wn = {
  ...it,
  getAnimatableNone: (t) => {
    const e = t.match(Al);
    return e ? e.map(Tl).join(" ") : t;
  }
}, Tn = {
  ...it,
  getAnimatableNone: (t) => {
    const e = it.parse(t);
    return it.createTransformer(t)(e.map((s) => typeof s == "number" ? 0 : typeof s == "object" ? { ...s, alpha: 1 } : s));
  }
}, Ms = {
  ...It,
  transform: Math.round
}, Pl = {
  rotate: ct,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: ct,
  rotateX: ct,
  rotateY: ct,
  rotateZ: ct,
  scale: ie,
  scaleX: ie,
  scaleY: ie,
  scaleZ: ie,
  skew: ct,
  skewX: ct,
  skewY: ct,
  distance: A,
  translateX: A,
  translateY: A,
  translateZ: A,
  x: A,
  y: A,
  z: A,
  perspective: A,
  transformPerspective: A,
  opacity: qt,
  originX: fs,
  originY: fs,
  originZ: A
}, Se = {
  // Border props
  borderWidth: A,
  borderTopWidth: A,
  borderRightWidth: A,
  borderBottomWidth: A,
  borderLeftWidth: A,
  borderRadius: A,
  borderTopLeftRadius: A,
  borderTopRightRadius: A,
  borderBottomRightRadius: A,
  borderBottomLeftRadius: A,
  // Positioning props
  width: A,
  maxWidth: A,
  height: A,
  maxHeight: A,
  top: A,
  right: A,
  bottom: A,
  left: A,
  inset: A,
  insetBlock: A,
  insetBlockStart: A,
  insetBlockEnd: A,
  insetInline: A,
  insetInlineStart: A,
  insetInlineEnd: A,
  // Spacing props
  padding: A,
  paddingTop: A,
  paddingRight: A,
  paddingBottom: A,
  paddingLeft: A,
  paddingBlock: A,
  paddingBlockStart: A,
  paddingBlockEnd: A,
  paddingInline: A,
  paddingInlineStart: A,
  paddingInlineEnd: A,
  margin: A,
  marginTop: A,
  marginRight: A,
  marginBottom: A,
  marginLeft: A,
  marginBlock: A,
  marginBlockStart: A,
  marginBlockEnd: A,
  marginInline: A,
  marginInlineStart: A,
  marginInlineEnd: A,
  // Typography
  fontSize: A,
  // Misc
  backgroundPositionX: A,
  backgroundPositionY: A,
  ...Pl,
  zIndex: Ms,
  // SVG
  fillOpacity: qt,
  strokeOpacity: qt,
  numOctaves: Ms
}, Sl = {
  ...Se,
  // Color props
  color: G,
  backgroundColor: G,
  outlineColor: G,
  fill: G,
  stroke: G,
  // Border props
  borderColor: G,
  borderTopColor: G,
  borderRightColor: G,
  borderBottomColor: G,
  borderLeftColor: G,
  filter: wn,
  WebkitFilter: wn,
  mask: Tn,
  WebkitMask: Tn
}, Ar = (t) => Sl[t], Ml = /* @__PURE__ */ new Set([wn, Tn]);
function Pr(t, e) {
  let n = Ar(t);
  return Ml.has(n) || (n = it), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const kl = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Cl(t, e, n) {
  let s = 0, i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !kl.has(o) && Lt(o).values.length && (i = t[s]), s++;
  }
  if (i && n)
    for (const o of e)
      t[o] = Pr(n, i);
}
class Vl extends zn {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let u = 0; u < e.length; u++) {
      let h = e[u];
      if (typeof h == "string" && (h = h.trim(), Wn(h))) {
        const d = gr(h, n.current);
        d !== void 0 && (e[u] = d), u === e.length - 1 && (this.finalKeyframe = h);
      }
    }
    if (this.resolveNoneKeyframes(), !yr.has(s) || e.length !== 2)
      return;
    const [i, o] = e, r = Ss(i), a = Ss(o), l = hs(i), c = hs(o);
    if (l !== c && dt[s]) {
      this.needsMeasurement = !0;
      return;
    }
    if (r !== a)
      if (bs(r) && bs(a))
        for (let u = 0; u < e.length; u++) {
          const h = e[u];
          typeof h == "string" && (e[u] = parseFloat(h));
        }
      else dt[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, s = [];
    for (let i = 0; i < e.length; i++)
      (e[i] === null || bl(e[i])) && s.push(i);
    s.length && Cl(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = dt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current)
      return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1, r = s[o];
    s[o] = dt[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([a, l]) => {
      e.getValue(a).set(l);
    }), this.resolveNoneKeyframes();
  }
}
const Zn = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function Sr(t, e, n) {
  if (t == null)
    return [];
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let s = document;
    const i = n?.[t] ?? s.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t).filter((s) => s != null);
}
const An = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function El(t) {
  return ji(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
}
const { schedule: Qn } = /* @__PURE__ */ zi(queueMicrotask, !1), st = {
  x: !1,
  y: !1
};
function Mr() {
  return st.x || st.y;
}
function Dl(t) {
  return t === "x" || t === "y" ? st[t] ? null : (st[t] = !0, () => {
    st[t] = !1;
  }) : st.x || st.y ? null : (st.x = st.y = !0, () => {
    st.x = st.y = !1;
  });
}
function kr(t, e) {
  const n = Sr(t), s = new AbortController(), i = {
    passive: !0,
    ...e,
    signal: s.signal
  };
  return [n, i, () => s.abort()];
}
function jl(t) {
  return !(t.pointerType === "touch" || Mr());
}
function Rl(t, e, n = {}) {
  const [s, i, o] = kr(t, n);
  return s.forEach((r) => {
    let a = !1, l = !1, c;
    const u = () => {
      r.removeEventListener("pointerleave", f);
    }, h = (m) => {
      c && (c(m), c = void 0), u();
    }, d = (m) => {
      a = !1, window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d), l && (l = !1, h(m));
    }, x = () => {
      a = !0, window.addEventListener("pointerup", d, i), window.addEventListener("pointercancel", d, i);
    }, f = (m) => {
      if (m.pointerType !== "touch") {
        if (a) {
          l = !0;
          return;
        }
        h(m);
      }
    }, y = (m) => {
      if (!jl(m))
        return;
      l = !1;
      const g = e(r, m);
      typeof g == "function" && (c = g, r.addEventListener("pointerleave", f, i));
    };
    r.addEventListener("pointerenter", y, i), r.addEventListener("pointerdown", x, i);
  }), o;
}
const Cr = (t, e) => e ? t === e ? !0 : Cr(t, e.parentElement) : !1, Jn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Ll = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function $l(t) {
  return Ll.has(t.tagName) || t.isContentEditable === !0;
}
const Fl = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Il(t) {
  return Fl.has(t.tagName) || t.isContentEditable === !0;
}
const ce = /* @__PURE__ */ new WeakSet();
function ks(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function ze(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Bl = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const s = ks(() => {
    if (ce.has(n))
      return;
    ze(n, "down");
    const i = ks(() => {
      ze(n, "up");
    }), o = () => ze(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e);
};
function Cs(t) {
  return Jn(t) && !Mr();
}
const Vs = /* @__PURE__ */ new WeakSet();
function Ol(t, e, n = {}) {
  const [s, i, o] = kr(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!Cs(a) || Vs.has(a))
      return;
    ce.add(l), n.stopPropagation && Vs.add(a);
    const c = e(l, a), u = { ...i, capture: !0 }, h = (f, y) => {
      window.removeEventListener("pointerup", d, u), window.removeEventListener("pointercancel", x, u), ce.has(l) && ce.delete(l), Cs(f) && typeof c == "function" && c(f, { success: y });
    }, d = (f) => {
      h(f, l === window || l === document || n.useGlobalTarget || Cr(l, f.target));
    }, x = (f) => {
      h(f, !1);
    };
    window.addEventListener("pointerup", d, u), window.addEventListener("pointercancel", x, u);
  };
  return s.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i), El(a) && (a.addEventListener("focus", (c) => Bl(c, i)), !$l(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function ts(t) {
  return ji(t) && "ownerSVGElement" in t;
}
const ue = /* @__PURE__ */ new WeakMap();
let he;
const Vr = (t, e, n) => (s, i) => i && i[0] ? i[0][t + "Size"] : ts(s) && "getBBox" in s ? s.getBBox()[e] : s[n], Wl = /* @__PURE__ */ Vr("inline", "width", "offsetWidth"), Nl = /* @__PURE__ */ Vr("block", "height", "offsetHeight");
function Ul({ target: t, borderBoxSize: e }) {
  ue.get(t)?.forEach((n) => {
    n(t, {
      get width() {
        return Wl(t, e);
      },
      get height() {
        return Nl(t, e);
      }
    });
  });
}
function _l(t) {
  t.forEach(Ul);
}
function Gl() {
  typeof ResizeObserver > "u" || (he = new ResizeObserver(_l));
}
function Kl(t, e) {
  he || Gl();
  const n = Sr(t);
  return n.forEach((s) => {
    let i = ue.get(s);
    i || (i = /* @__PURE__ */ new Set(), ue.set(s, i)), i.add(e), he?.observe(s);
  }), () => {
    n.forEach((s) => {
      const i = ue.get(s);
      i?.delete(e), i?.size || he?.unobserve(s);
    });
  };
}
const fe = /* @__PURE__ */ new Set();
let Et;
function zl() {
  Et = () => {
    const t = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    fe.forEach((e) => e(t));
  }, window.addEventListener("resize", Et);
}
function Hl(t) {
  return fe.add(t), Et || zl(), () => {
    fe.delete(t), !fe.size && typeof Et == "function" && (window.removeEventListener("resize", Et), Et = void 0);
  };
}
function Es(t, e) {
  return typeof t == "function" ? Hl(t) : Kl(t, e);
}
function Xl(t) {
  return ts(t) && t.tagName === "svg";
}
const ql = [...Tr, G, it], Yl = (t) => ql.find(wr(t)), Ds = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Dt = () => ({
  x: Ds(),
  y: Ds()
}), js = () => ({ min: 0, max: 0 }), z = () => ({
  x: js(),
  y: js()
}), Zl = /* @__PURE__ */ new WeakMap();
function $e(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Yt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const es = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ns = ["initial", ...es];
function Fe(t) {
  return $e(t.animate) || ns.some((e) => Yt(t[e]));
}
function Er(t) {
  return !!(Fe(t) || t.variants);
}
function Ql(t, e, n) {
  for (const s in e) {
    const i = e[s], o = n[s];
    if (X(i))
      t.addValue(s, i);
    else if (X(o))
      t.addValue(s, $t(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, $t(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n)
    e[s] === void 0 && t.removeValue(s);
  return e;
}
const Me = { current: null }, ss = { current: !1 }, Jl = typeof window < "u";
function Dr() {
  if (ss.current = !0, !!Jl)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Me.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      Me.current = !1;
}
const Rs = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let ke = {};
function jr(t) {
  ke = t;
}
function tc() {
  return ke;
}
class ec {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, skipAnimations: o, blockInitialAnimation: r, visualState: a }, l = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = zn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const x = Y.now();
      this.renderScheduledAt < x && (this.renderScheduledAt = x, B.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: u } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = o, this.options = l, this.blockInitialAnimation = !!r, this.isControllingVariants = Fe(n), this.isVariantNode = Er(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const x in d) {
      const f = d[x];
      c[x] !== void 0 && X(f) && f.set(c[x]);
    }
  }
  mount(e) {
    if (this.hasBeenMounted)
      for (const n in this.initialValues)
        this.values.get(n)?.jump(this.initialValues[n]), this.latestValues[n] = this.initialValues[n];
    this.current = e, Zl.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (ss.current || Dr(), this.shouldReduceMotion = Me.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), yt(this.notifyUpdate), yt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), n.accelerate && dr.has(e) && this.current instanceof HTMLElement) {
      const { factory: r, keyframes: a, times: l, ease: c, duration: u } = n.accelerate, h = new hr({
        element: this.current,
        name: e,
        keyframes: a,
        times: l,
        ease: c,
        duration: /* @__PURE__ */ J(u)
      }), d = r(h);
      this.valueSubscriptions.set(e, () => {
        d(), h.cancel();
      });
      return;
    }
    const s = Ot.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && B.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    typeof window < "u" && window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      i(), o && o();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in ke) {
      const n = ke[e];
      if (!n)
        continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : z();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < Rs.length; s++) {
      const i = Rs[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = Ql(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
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
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = $t(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (Di(s) || Ri(s)) ? s = parseFloat(s) : !Yl(s) && it.test(n) && (s = Pr(e, n)), this.setBaseTarget(e, X(s) ? s.get() : s)), X(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const o = qn(this.props, n, this.presenceContext?.custom);
      o && (s = o[e]);
    }
    if (n && s !== void 0)
      return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !X(i) ? i : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new In()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    Qn.render(this.render);
  }
}
class Rr extends ec {
  constructor() {
    super(...arguments), this.KeyframeResolver = Vl;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    const s = e.style;
    return s ? s[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    X(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class xt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
function Lr({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s }
  };
}
function nc({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function sc(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
function He(t) {
  return t === void 0 || t === 1;
}
function Pn({ scale: t, scaleX: e, scaleY: n }) {
  return !He(t) || !He(e) || !He(n);
}
function wt(t) {
  return Pn(t) || $r(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function $r(t) {
  return Ls(t.x) || Ls(t.y);
}
function Ls(t) {
  return t && t !== "0%";
}
function Ce(t, e, n) {
  const s = t - n, i = e * s;
  return n + i;
}
function $s(t, e, n, s, i) {
  return i !== void 0 && (t = Ce(t, i, s)), Ce(t, n, s) + e;
}
function Sn(t, e = 0, n = 1, s, i) {
  t.min = $s(t.min, e, n, s, i), t.max = $s(t.max, e, n, s, i);
}
function Fr(t, { x: e, y: n }) {
  Sn(t.x, e.translate, e.scale, e.originPoint), Sn(t.y, n.translate, n.scale, n.originPoint);
}
const Fs = 0.999999999999, Is = 1.0000000000001;
function ic(t, e, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && (ot(t.x, -o.scroll.offset.x), ot(t.y, -o.scroll.offset.y)), r && (e.x *= r.x.scale, e.y *= r.y.scale, Fr(t, r)), s && wt(o.latestValues) && de(t, o.latestValues, o.layout?.layoutBox));
  }
  e.x < Is && e.x > Fs && (e.x = 1), e.y < Is && e.y > Fs && (e.y = 1);
}
function ot(t, e) {
  t.min += e, t.max += e;
}
function Bs(t, e, n, s, i = 0.5) {
  const o = I(t.min, t.max, i);
  Sn(t, e, n, o, s);
}
function Os(t, e) {
  return typeof t == "string" ? parseFloat(t) / 100 * (e.max - e.min) : t;
}
function de(t, e, n) {
  const s = n ?? t;
  Bs(t.x, Os(e.x, s.x), e.scaleX, e.scale, e.originX), Bs(t.y, Os(e.y, s.y), e.scaleY, e.scale, e.originY);
}
function Ir(t, e) {
  return Lr(sc(t.getBoundingClientRect(), e));
}
function rc(t, e, n) {
  const s = Ir(t, n), { scroll: i } = e;
  return i && (ot(s.x, i.offset.x), ot(s.y, i.offset.y)), s;
}
const oc = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ac = Bt.length;
function lc(t, e, n) {
  let s = "", i = !0;
  for (let r = 0; r < ac; r++) {
    const a = Bt[r], l = t[a];
    if (l === void 0)
      continue;
    let c = !0;
    if (typeof l == "number")
      c = l === (a.startsWith("scale") ? 1 : 0);
    else {
      const u = parseFloat(l);
      c = a.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!c || n) {
      const u = An(l, Se[a]);
      if (!c) {
        i = !1;
        const h = oc[a] || a;
        s += `${h}(${u}) `;
      }
      n && (e[a] = u);
    }
  }
  const o = t.pathRotation;
  return o && (i = !1, s += `rotate(${An(o, Se.pathRotation)}) `), s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s;
}
function is(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const c = e[l];
    if (Ot.has(l)) {
      r = !0;
      continue;
    } else if (Xi(l)) {
      i[l] = c;
      continue;
    } else {
      const u = An(c, Se[l]);
      l.startsWith("origin") ? (a = !0, o[l] = u) : s[l] = u;
    }
  }
  if (e.transform || (r || n ? s.transform = lc(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;
    s.transformOrigin = `${l} ${c} ${u}`;
  }
}
function Br(t, { style: e, vars: n }, s, i) {
  const o = t.style;
  let r;
  for (r in e)
    o[r] = e[r];
  i?.applyProjectionStyles(o, s);
  for (r in n)
    o.setProperty(r, n[r]);
}
function Ws(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Wt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (A.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Ws(t, e.target.x), s = Ws(t, e.target.y);
    return `${n}% ${s}%`;
  }
}, cc = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const s = t, i = it.parse(t);
    if (i.length > 5)
      return s;
    const o = it.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    i[0 + r] /= a, i[1 + r] /= l;
    const c = I(a, l, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= c), typeof i[3 + r] == "number" && (i[3 + r] /= c), o(i);
  }
}, Mn = {
  borderRadius: {
    ...Wt,
    applyTo: [...Zn]
  },
  borderTopLeftRadius: Wt,
  borderTopRightRadius: Wt,
  borderBottomLeftRadius: Wt,
  borderBottomRightRadius: Wt,
  boxShadow: cc
};
function Or(t, { layout: e, layoutId: n }) {
  return Ot.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Mn[t] || t === "opacity");
}
function rs(t, e, n) {
  const s = t.style, i = e?.style, o = {};
  if (!s)
    return o;
  for (const r in s)
    (X(s[r]) || i && X(i[r]) || Or(r, t) || n?.getValue(r)?.liveStyle !== void 0) && (o[r] = s[r]);
  return o;
}
function uc(t) {
  return window.getComputedStyle(t);
}
class hc extends Rr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Br;
  }
  mount(e) {
    Re(!!e.style), super.mount(e);
  }
  readValueFromInstance(e, n) {
    if (Ot.has(n))
      return this.projection?.isProjecting ? fn(n) : Da(e, n);
    {
      const s = uc(e), i = (Xi(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Ir(e, n);
  }
  build(e, n, s) {
    is(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return rs(e, n, s);
  }
}
const fc = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, dc = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function pc(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? fc : dc;
  t[o.offset] = `${-s}`, t[o.array] = `${e} ${n}`;
}
const mc = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Wr(t, {
  attrX: e,
  attrY: n,
  attrScale: s,
  pathLength: i,
  pathSpacing: o = 1,
  pathOffset: r = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, c, u) {
  if (is(t, a, c), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: d } = t;
  h.transform && (d.transform = h.transform, delete h.transform), (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), d.transform && (d.transformBox = u?.transformBox ?? "fill-box", delete h.transformBox);
  for (const x of mc)
    h[x] !== void 0 && (d[x] = h[x], delete h[x]);
  e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), s !== void 0 && (h.scale = s), i !== void 0 && pc(h, i, o, r, !1);
}
const Nr = /* @__PURE__ */ new Set([
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
]), Ur = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function gc(t, e, n, s) {
  Br(t, e, void 0, s);
  for (const i in e.attrs)
    t.setAttribute(Nr.has(i) ? i : Yn(i), e.attrs[i]);
}
function _r(t, e, n) {
  const s = rs(t, e, n);
  for (const i in t)
    if (X(t[i]) || X(e[i])) {
      const o = Bt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
  return s;
}
class yc extends Rr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = z;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Ot.has(n)) {
      const s = Ar(n);
      return s && s.default || 0;
    }
    return n = Nr.has(n) ? n : Yn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return _r(e, n, s);
  }
  build(e, n, s) {
    Wr(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    gc(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = Ur(e.tagName), super.mount(e);
  }
}
const xc = ns.length;
function Gr(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Gr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < xc; n++) {
    const s = ns[n], i = t.props[s];
    (Yt(i) || i === !1) && (e[s] = i);
  }
  return e;
}
function Kr(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
const vc = [...es].reverse(), bc = es.length;
function wc(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => xl(t, n, s)));
}
function Tc(t) {
  let e = wc(t), n = Ns(), s = !0, i = !1;
  const o = (c) => (u, h) => {
    const d = Mt(t, h, c === "exit" ? t.presenceContext?.custom : void 0);
    if (d) {
      const { transition: x, transitionEnd: f, ...y } = d;
      u = { ...u, ...y, ...f };
    }
    return u;
  };
  function r(c) {
    e = c(t);
  }
  function a(c) {
    const { props: u } = t, h = Gr(t.parent) || {}, d = [], x = /* @__PURE__ */ new Set();
    let f = {}, y = 1 / 0;
    for (let g = 0; g < bc; g++) {
      const v = vc[g], b = n[v], w = u[v] !== void 0 ? u[v] : h[v], S = Yt(w), D = v === c ? b.isActive : null;
      D === !1 && (y = g);
      let E = w === h[v] && w !== u[v] && S;
      if (E && (s || i) && t.manuallyAnimateOnMount && (E = !1), b.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && D === null || // If we didn't and don't have any defined prop for this animation type
      !w && !b.prevProp || // Or if the prop doesn't define an animation
      $e(w) || typeof w == "boolean")
        continue;
      if (v === "exit" && b.isActive && D !== !0) {
        b.prevResolvedValues && (f = {
          ...f,
          ...b.prevResolvedValues
        });
        continue;
      }
      const C = Ac(b.prevProp, w);
      let W = C || // If we're making this variant active, we want to always make it active
      v === c && b.isActive && !E && S || // If we removed a higher-priority variant (i is in reverse order)
      g > y && S, k = !1;
      const P = Array.isArray(w) ? w : [w];
      let L = P.reduce(o(v), {});
      D === !1 && (L = {});
      const { prevResolvedValues: j = {} } = b, $ = {
        ...j,
        ...L
      }, V = (O) => {
        W = !0, x.has(O) && (k = !0, x.delete(O)), b.needsAnimating[O] = !0;
        const q = t.getValue(O);
        q && (q.liveStyle = !1);
      };
      for (const O in $) {
        const q = L[O], F = j[O];
        if (f.hasOwnProperty(O))
          continue;
        let U = !1;
        xn(q) && xn(F) ? U = !Kr(q, F) || C : U = q !== F, U ? q != null ? V(O) : x.add(O) : q !== void 0 && x.has(O) ? V(O) : b.protectedKeys[O] = !0;
      }
      b.prevProp = w, b.prevResolvedValues = L, b.isActive && (f = { ...f, ...L }), (s || i) && t.blockInitialAnimation && (W = !1);
      const N = E && C;
      W && (!N || k) && d.push(...P.map((O) => {
        const q = { type: v };
        if (typeof O == "string" && (s || i) && !N && t.manuallyAnimateOnMount && t.parent) {
          const { parent: F } = t, U = Mt(F, O);
          if (F.enteringChildren && U) {
            const { delayChildren: vt } = U.transition || {};
            q.delay = pr(F.enteringChildren, t, vt);
          }
        }
        return {
          animation: O,
          options: q
        };
      }));
    }
    if (x.size) {
      const g = {};
      if (typeof u.initial != "boolean") {
        const v = Mt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        v && v.transition && (g.transition = v.transition);
      }
      x.forEach((v) => {
        const b = t.getBaseTarget(v), w = t.getValue(v);
        w && (w.liveStyle = !0), g[v] = b ?? null;
      }), d.push({ animation: g });
    }
    let m = !!d.length;
    return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (m = !1), s = !1, i = !1, m ? e(d) : Promise.resolve();
  }
  function l(c, u) {
    if (n[c].isActive === u)
      return Promise.resolve();
    t.variantChildren?.forEach((d) => d.animationState?.setActive(c, u)), n[c].isActive = u;
    const h = a(c);
    for (const d in n)
      n[d].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: r,
    getState: () => n,
    reset: () => {
      n = Ns(), i = !0;
    }
  };
}
function Ac(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Kr(e, t) : !1;
}
function bt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ns() {
  return {
    animate: bt(!0),
    whileInView: bt(),
    whileHover: bt(),
    whileTap: bt(),
    whileDrag: bt(),
    whileFocus: bt(),
    exit: bt()
  };
}
function kn(t, e) {
  t.min = e.min, t.max = e.max;
}
function nt(t, e) {
  kn(t.x, e.x), kn(t.y, e.y);
}
function Us(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
const zr = 1e-4, Pc = 1 - zr, Sc = 1 + zr, Hr = 0.01, Mc = 0 - Hr, kc = 0 + Hr;
function Z(t) {
  return t.max - t.min;
}
function Cc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function _s(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = I(e.min, e.max, t.origin), t.scale = Z(n) / Z(e), t.translate = I(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Pc && t.scale <= Sc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Mc && t.translate <= kc || isNaN(t.translate)) && (t.translate = 0);
}
function zt(t, e, n, s) {
  _s(t.x, e.x, n.x, s ? s.originX : void 0), _s(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Gs(t, e, n, s = 0) {
  const i = s ? I(n.min, n.max, s) : n.min;
  t.min = i + e.min, t.max = t.min + Z(e);
}
function Vc(t, e, n, s) {
  Gs(t.x, e.x, n.x, s?.x), Gs(t.y, e.y, n.y, s?.y);
}
function Ks(t, e, n, s = 0) {
  const i = s ? I(n.min, n.max, s) : n.min;
  t.min = e.min - i, t.max = t.min + Z(e);
}
function Ve(t, e, n, s) {
  Ks(t.x, e.x, n.x, s?.x), Ks(t.y, e.y, n.y, s?.y);
}
function zs(t, e, n, s, i) {
  return t -= e, t = Ce(t, 1 / n, s), i !== void 0 && (t = Ce(t, 1 / i, s)), t;
}
function Ec(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (at.test(e) && (e = parseFloat(e), e = I(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = I(o.min, o.max, s);
  t === o && (a -= e), t.min = zs(t.min, e, n, a, i), t.max = zs(t.max, e, n, a, i);
}
function Hs(t, e, [n, s, i], o, r) {
  Ec(t, e[n], e[s], e[i], e.scale, o, r);
}
const Dc = ["x", "scaleX", "originX"], jc = ["y", "scaleY", "originY"];
function Xs(t, e, n, s) {
  Hs(t.x, e, Dc, n ? n.x : void 0, s ? s.x : void 0), Hs(t.y, e, jc, n ? n.y : void 0, s ? s.y : void 0);
}
function qs(t) {
  return t.translate === 0 && t.scale === 1;
}
function Xr(t) {
  return qs(t.x) && qs(t.y);
}
function Ys(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Rc(t, e) {
  return Ys(t.x, e.x) && Ys(t.y, e.y);
}
function Zs(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function qr(t, e) {
  return Zs(t.x, e.x) && Zs(t.y, e.y);
}
function Qs(t) {
  return Z(t.x) / Z(t.y);
}
function Js(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
function rt(t) {
  return [t("x"), t("y")];
}
function Lc(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, r = n?.z || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: c, rotate: u, pathRotation: h, rotateX: d, rotateY: x, skewX: f, skewY: y } = n;
    c && (s = `perspective(${c}px) ${s}`), u && (s += `rotate(${u}deg) `), h && (s += `rotate(${h}deg) `), d && (s += `rotateX(${d}deg) `), x && (s += `rotateY(${x}deg) `), f && (s += `skewX(${f}deg) `), y && (s += `skewY(${y}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const $c = Zn.length, ti = (t) => typeof t == "string" ? parseFloat(t) : t, ei = (t) => typeof t == "number" || A.test(t);
function Fc(t, e, n, s, i, o) {
  i ? (t.opacity = I(0, n.opacity ?? 1, Ic(s)), t.opacityExit = I(e.opacity ?? 1, 0, Bc(s))) : o && (t.opacity = I(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < $c; r++) {
    const a = Zn[r];
    let l = ni(e, a), c = ni(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || ei(l) === ei(c) ? (t[a] = Math.max(I(ti(l), ti(c), s), 0), (at.test(c) || at.test(l)) && (t[a] += "%")) : t[a] = c;
  }
  (e.rotate || n.rotate) && (t.rotate = I(e.rotate || 0, n.rotate || 0, s));
}
function ni(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Ic = /* @__PURE__ */ Yr(0, 0.5, Ui), Bc = /* @__PURE__ */ Yr(0.5, 0.95, et);
function Yr(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(/* @__PURE__ */ Xt(t, e, s));
}
function Oc(t, e, n) {
  const s = X(t) ? t : $t(t);
  return s.start(Xn("", s, e, n)), s.animation;
}
function Zt(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s);
}
const Wc = (t, e) => t.depth - e.depth;
class Nc {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    Fn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    be(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Wc), this.isDirty = !1, this.children.forEach(e);
  }
}
function Uc(t, e) {
  const n = Y.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (yt(s), t(o - e));
  };
  return B.setup(s, !0), () => yt(s);
}
function pe(t) {
  return X(t) ? t.get() : t;
}
class _c {
  constructor() {
    this.members = [];
  }
  add(e) {
    Fn(this.members, e);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const s = this.members[n];
      if (s === e || s === this.lead || s === this.prevLead)
        continue;
      const i = s.instance;
      (!i || i.isConnected === !1) && !s.snapshot && (be(this.members, s), s.unmount());
    }
    e.scheduleRender();
  }
  remove(e) {
    if (be(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    for (let n = this.members.indexOf(e) - 1; n >= 0; n--) {
      const s = this.members[n];
      if (s.isPresent !== !1 && s.instance?.isConnected !== !1)
        return this.promote(s), !0;
    }
    return !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.updateSnapshot(), e.scheduleRender();
      const { layoutDependency: i } = s.options, { layoutDependency: o } = e.options;
      (i === void 0 || i !== o) && (e.resumeFrom = s, n && (s.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => e.instance && e.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const me = {
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
}, Xe = ["", "X", "Y", "Z"], Gc = 1e3;
let Kc = 0;
function qe(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0));
}
function Zr(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = vr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", B, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && Zr(s);
}
function Qr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = e?.()) {
      this.id = Kc++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Xc), this.nodes.forEach(tu), this.nodes.forEach(eu), this.nodes.forEach(qc);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Nc());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new In()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r) {
      if (this.instance)
        return;
      this.isSVG = ts(r) && !Xl(r), this.instance = r;
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), t) {
        let u, h = 0;
        const d = () => this.root.updateBlockedByResize = !1;
        B.read(() => {
          h = window.innerWidth;
        }), t(r, () => {
          const x = window.innerWidth;
          x !== h && (h = x, this.root.updateBlockedByResize = !0, u && u(), u = Uc(d, 250), me.hasAnimatedSinceResize && (me.hasAnimatedSinceResize = !1, this.nodes.forEach(ri)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: h, hasRelativeLayoutChanged: d, layout: x }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const f = this.options.transition || c.getDefaultTransition() || ou, { onLayoutAnimationStart: y, onLayoutAnimationComplete: m } = c.getProps(), g = !this.targetLayout || !qr(this.targetLayout, x), v = !h && d;
        if (this.options.layoutRoot || this.resumeFrom || v || h && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const b = {
            ...Hn(f, "layout"),
            onPlay: y,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b), this.setAnimationOrigin(u, v, b.path);
        } else
          h || ri(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = x;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), yt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(nu), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Zr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        h.shouldResetTransform = !0, (typeof h.latestValues.x == "string" || typeof h.latestValues.y == "string") && (h.isLayoutDirty = !0), h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const l = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), l && this.nodes.forEach(Zc), this.nodes.forEach(si);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ii);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Qc), this.nodes.forEach(Jc), this.nodes.forEach(zc), this.nodes.forEach(Hc)) : this.nodes.forEach(ii), this.clearAllSnapshots();
      const a = Y.now();
      H.delta = lt(0, 1e3 / 60, a - H.timestamp), H.timestamp = a, H.isProcessing = !0, We.update.process(H), We.preRender.process(H), We.render.process(H), H.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Qn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Yc), this.sharedNodes.forEach(su);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, B.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      B.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Z(this.snapshot.measuredBox.x) && !Z(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = z()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && this.instance) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Xr(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      r && this.instance && (a || wt(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), au(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r)
        return z();
      const a = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(lu))) {
        const { scroll: c } = this.root;
        c && (ot(a.x, c.offset.x), ot(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      const a = z();
      if (nt(a, r), this.scroll?.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: h } = c;
        c !== this.root && u && h.layoutScroll && (u.wasRoot && nt(a, r), ot(a.x, u.offset.x), ot(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1, l) {
      const c = l || z();
      nt(c, r);
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        !a && h.options.layoutScroll && h.scroll && h !== h.root && (ot(c.x, -h.scroll.offset.x), ot(c.y, -h.scroll.offset.y)), wt(h.latestValues) && de(c, h.latestValues, h.layout?.layoutBox);
      }
      return wt(this.latestValues) && de(c, this.latestValues, this.layout?.layoutBox), c;
    }
    removeTransform(r) {
      const a = z();
      nt(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!wt(c.latestValues))
          continue;
        let u;
        c.instance && (Pn(c.latestValues) && c.updateSnapshot(), u = z(), nt(u, c.measurePageBox())), Xs(a, c.latestValues, c.snapshot?.layoutBox, u);
      }
      return wt(this.latestValues) && Xs(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== H.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: h } = this.options;
      if (!this.layout || !(u || h))
        return;
      this.resolvedRelativeTargetAt = H.timestamp;
      const d = this.getClosestProjectingParent();
      d && this.linkedParentVersion !== d.layoutVersion && !d.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && d && d.layout ? this.createRelativeTarget(d, this.layout.layoutBox, d.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = z(), this.targetWithTransforms = z()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Vc(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : nt(this.target, this.layout.layoutBox), Fr(this.target, this.targetDelta)) : nt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? this.createRelativeTarget(d, this.target, d.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Pn(this.parent.latestValues) || $r(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(r, a, l) {
      this.relativeParent = r, this.linkedParentVersion = r.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = z(), this.relativeTargetOrigin = z(), Ve(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0), nt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === H.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || u))
        return;
      nt(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, d = this.treeScale.y;
      ic(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = z());
      const { target: x } = r;
      if (!x) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Us(this.prevProjectionDelta.x, this.projectionDelta.x), Us(this.prevProjectionDelta.y, this.projectionDelta.y)), zt(this.projectionDelta, this.layoutCorrected, x, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== d || !Js(this.projectionDelta.x, this.prevProjectionDelta.x) || !Js(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", x));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if (this.options.visualElement?.scheduleRender(), r) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Dt(), this.projectionDelta = Dt(), this.projectionDeltaWithTransform = Dt();
    }
    setAnimationOrigin(r, a = !1, l) {
      const c = this.snapshot, u = c ? c.latestValues : {}, h = { ...this.latestValues }, d = Dt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const x = z(), f = c ? c.source : void 0, y = this.layout ? this.layout.source : void 0, m = f !== y, g = this.getStack(), v = !g || g.members.length <= 1, b = !!(m && !v && this.options.crossfade === !0 && !this.path.some(ru));
      this.animationProgress = 0;
      let w;
      const S = l?.interpolateProjection(r);
      this.mixTargetDelta = (D) => {
        const E = D / 1e3, C = S?.(E);
        C ? (d.x.translate = C.x, d.x.scale = I(r.x.scale, 1, E), d.x.origin = r.x.origin, d.x.originPoint = r.x.originPoint, d.y.translate = C.y, d.y.scale = I(r.y.scale, 1, E), d.y.origin = r.y.origin, d.y.originPoint = r.y.originPoint) : (oi(d.x, r.x, E), oi(d.y, r.y, E)), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ve(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), iu(this.relativeTarget, this.relativeTargetOrigin, x, E), w && Rc(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = z()), nt(w, this.relativeTarget)), m && (this.animationValues = h, Fc(h, u, this.latestValues, E, b, v)), C && C.rotate !== void 0 && (this.animationValues || (this.animationValues = h), this.animationValues.pathRotation = C.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = E;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (yt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = B.update(() => {
        me.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = $t(0)), this.motionValue.jump(0, !1), this.currentAnimation = Oc(this.motionValue, [0, 1e3], {
          ...r,
          velocity: 0,
          isSync: !0,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Gc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = r;
      if (!(!a || !l || !c)) {
        if (this !== r && this.layout && c && Jr(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || z();
          const h = Z(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const d = Z(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + d;
        }
        nt(a, l), de(a, u), zt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new _c()), this.sharedNodes.get(r).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const c = {};
      l.z && qe("z", r, c, this.animationValues);
      for (let u = 0; u < Xe.length; u++)
        qe(`rotate${Xe[u]}`, r, c, this.animationValues), qe(`skew${Xe[u]}`, r, c, this.animationValues);
      r.render();
      for (const u in c)
        r.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = pe(a?.pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = pe(a?.pointerEvents) || ""), this.hasProjected && !wt(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      r.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let h = Lc(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (h = l(u, h)), r.transform = h;
      const { x: d, y: x } = this.projectionDelta;
      r.transformOrigin = `${d.origin * 100}% ${x.origin * 100}% 0`, c.animationValues ? r.opacity = c === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : r.opacity = c === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const f in Mn) {
        if (u[f] === void 0)
          continue;
        const { correct: y, applyTo: m, isCSSVariable: g } = Mn[f], v = h === "none" ? u[f] : y(u[f], c);
        if (m) {
          const b = m.length;
          for (let w = 0; w < b; w++)
            r[m[w]] = v;
        } else
          g ? this.options.visualElement.renderState.vars[f] = v : r[f] = v;
      }
      this.options.layoutId && (r.pointerEvents = c === this ? pe(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => r.currentAnimation?.stop()), this.root.nodes.forEach(si), this.root.sharedNodes.clear();
    }
  };
}
function zc(t) {
  t.updateLayout();
}
function Hc(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: s } = t.layout, { animationType: i } = t.options, o = e.source !== t.layout.source;
    if (i === "size")
      rt((u) => {
        const h = o ? e.measuredBox[u] : e.layoutBox[u], d = Z(h);
        h.min = n[u].min, h.max = h.min + d;
      });
    else if (i === "x" || i === "y") {
      const u = i === "x" ? "y" : "x";
      kn(o ? e.measuredBox[u] : e.layoutBox[u], n[u]);
    } else Jr(i, e.layoutBox, n) && rt((u) => {
      const h = o ? e.measuredBox[u] : e.layoutBox[u], d = Z(n[u]);
      h.max = h.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[u].max = t.relativeTarget[u].min + d);
    });
    const r = Dt();
    zt(r, n, e.layoutBox);
    const a = Dt();
    o ? zt(a, t.applyTransform(s, !0), e.measuredBox) : zt(a, n, e.layoutBox);
    const l = !Xr(r);
    let c = !1;
    if (!t.resumeFrom) {
      const u = t.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: h, layout: d } = u;
        if (h && d) {
          const x = t.options.layoutAnchor || void 0, f = z();
          Ve(f, e.layoutBox, h.layoutBox, x);
          const y = z();
          Ve(y, n, d.layoutBox, x), qr(f, y) || (c = !0), u.options.layoutRoot && (t.relativeTarget = y, t.relativeTargetOrigin = f, t.relativeParent = u);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: r,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function Xc(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function qc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Yc(t) {
  t.clearSnapshot();
}
function si(t) {
  t.clearMeasurements();
}
function Zc(t) {
  t.isLayoutDirty = !0, t.updateLayout();
}
function ii(t) {
  t.isLayoutDirty = !1;
}
function Qc(t) {
  t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0);
}
function Jc(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function ri(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function tu(t) {
  t.resolveTargetDelta();
}
function eu(t) {
  t.calcProjection();
}
function nu(t) {
  t.resetSkewAndRotation();
}
function su(t) {
  t.removeLeadSnapshot();
}
function oi(t, e, n) {
  t.translate = I(e.translate, 0, n), t.scale = I(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function ai(t, e, n, s) {
  t.min = I(e.min, n.min, s), t.max = I(e.max, n.max, s);
}
function iu(t, e, n, s) {
  ai(t.x, e.x, n.x, s), ai(t.y, e.y, n.y, s);
}
function ru(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const ou = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, li = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), ci = li("applewebkit/") && !li("chrome/") ? Math.round : et;
function ui(t) {
  t.min = ci(t.min), t.max = ci(t.max);
}
function au(t) {
  ui(t.x), ui(t.y);
}
function Jr(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Cc(Qs(e), Qs(n), 0.2);
}
function lu(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const cu = Qr({
  attachResizeListener: (t, e) => Zt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Ye = {
  current: void 0
}, to = Qr({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Ye.current) {
      const t = new cu({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Ye.current = t;
    }
    return Ye.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), eo = T.createContext({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function uu(t = !0) {
  const e = T.useContext($n);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e, o = T.useId();
  T.useEffect(() => {
    if (t)
      return i(o);
  }, [t]);
  const r = T.useCallback(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const no = T.createContext({ strict: !1 }), hi = {
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
let fi = !1;
function hu() {
  if (fi)
    return;
  const t = {};
  for (const e in hi)
    t[e] = {
      isEnabled: (n) => hi[e].some((s) => !!n[s])
    };
  jr(t), fi = !0;
}
function so() {
  return hu(), tc();
}
function fu(t) {
  const e = so();
  for (const n in t)
    e[n] = {
      ...e[n],
      ...t[n]
    };
  jr(e);
}
const du = /* @__PURE__ */ new Set([
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
function Ee(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || du.has(t);
}
let io = (t) => !Ee(t);
function pu(t) {
  typeof t == "function" && (io = (e) => e.startsWith("on") ? !Ee(e) : t(e));
}
try {
  pu(require("@emotion/is-prop-valid").default);
} catch {
}
function mu(t, e, n) {
  const s = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || X(t[i]) || (io(i) || n === !0 && Ee(i) || !e && !Ee(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s;
}
const Ie = /* @__PURE__ */ T.createContext({});
function gu(t, e) {
  if (Fe(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Yt(n) ? n : void 0,
      animate: Yt(s) ? s : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function yu(t) {
  const { initial: e, animate: n } = gu(t, T.useContext(Ie));
  return T.useMemo(() => ({ initial: e, animate: n }), [di(e), di(n)]);
}
function di(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const os = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ro(t, e, n) {
  for (const s in e)
    !X(e[s]) && !Or(s, n) && (t[s] = e[s]);
}
function xu({ transformTemplate: t }, e) {
  return T.useMemo(() => {
    const n = os();
    return is(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function vu(t, e) {
  const n = t.style || {}, s = {};
  return ro(s, n, t), Object.assign(s, xu(t, e)), s;
}
function bu(t, e) {
  const n = {}, s = vu(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const oo = () => ({
  ...os(),
  attrs: {}
});
function wu(t, e, n, s) {
  const i = T.useMemo(() => {
    const o = oo();
    return Wr(o, e, Ur(s), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    ro(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
const Tu = [
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
function as(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Tu.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function Au(t, e, n, { latestValues: s }, i, o = !1, r) {
  const l = (r ?? as(t) ? wu : bu)(e, s, i, t), c = mu(e, typeof t == "string", o), u = t !== T.Fragment ? { ...c, ...l, ref: n } : {}, { children: h } = e, d = T.useMemo(() => X(h) ? h.get() : h, [h]);
  return T.createElement(t, {
    ...u,
    children: d
  });
}
function Pu({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return {
    latestValues: Su(n, s, i, t),
    renderState: e()
  };
}
function Su(t, e, n, s) {
  const i = {}, o = s(t, {});
  for (const d in o)
    i[d] = pe(o[d]);
  let { initial: r, animate: a } = t;
  const l = Fe(t), c = Er(t);
  e && c && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const h = u ? a : r;
  if (h && typeof h != "boolean" && !$e(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let x = 0; x < d.length; x++) {
      const f = qn(t, d[x]);
      if (f) {
        const { transitionEnd: y, transition: m, ...g } = f;
        for (const v in g) {
          let b = g[v];
          if (Array.isArray(b)) {
            const w = u ? b.length - 1 : 0;
            b = b[w];
          }
          b !== null && (i[v] = b);
        }
        for (const v in y)
          i[v] = y[v];
      }
    }
  }
  return i;
}
const ao = (t) => (e, n) => {
  const s = T.useContext(Ie), i = T.useContext($n), o = () => Pu(t, e, s, i);
  return n ? o() : Po(o);
}, Mu = /* @__PURE__ */ ao({
  scrapeMotionValuesFromProps: rs,
  createRenderState: os
}), ku = /* @__PURE__ */ ao({
  scrapeMotionValuesFromProps: _r,
  createRenderState: oo
}), Cu = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function Vu(t, e, n) {
  const s = T.useRef(n);
  T.useInsertionEffect(() => {
    s.current = n;
  });
  const i = T.useRef(null);
  return T.useCallback((o) => {
    o && t.onMount?.(o), e && (o ? e.mount(o) : e.unmount());
    const r = s.current;
    if (typeof r == "function")
      if (o) {
        const a = r(o);
        typeof a == "function" && (i.current = a);
      } else i.current ? (i.current(), i.current = null) : r(o);
    else r && (r.current = o);
  }, [e]);
}
const lo = T.createContext({});
function Ct(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Eu(t, e, n, s, i, o) {
  const { visualElement: r } = T.useContext(Ie), a = T.useContext(no), l = T.useContext($n), c = T.useContext(eo), u = c.reducedMotion, h = c.skipAnimations, d = T.useRef(null), x = T.useRef(!1);
  s = s || a.renderer, !d.current && s && (d.current = s(t, {
    visualState: e,
    parent: r,
    props: n,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: u,
    skipAnimations: h,
    isSVG: o
  }), x.current && d.current && (d.current.manuallyAnimateOnMount = !0));
  const f = d.current, y = T.useContext(lo);
  f && !f.projection && i && (f.type === "html" || f.type === "svg") && Du(d.current, n, i, y);
  const m = T.useRef(!1);
  T.useInsertionEffect(() => {
    f && m.current && f.update(n, l);
  });
  const g = n[xr], v = T.useRef(!!g && typeof window < "u" && !window.MotionHandoffIsComplete?.(g) && window.MotionHasOptimisedAnimation?.(g));
  return Mo(() => {
    x.current = !0, f && (m.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), f.scheduleRenderMicrotask(), v.current && f.animationState && f.animationState.animateChanges());
  }), T.useEffect(() => {
    f && (!v.current && f.animationState && f.animationState.animateChanges(), v.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(g);
    }), v.current = !1), f.enteringChildren = void 0);
  }), f;
}
function Du(t, e, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: c, layoutAnchor: u, layoutCrossfade: h } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : co(t.parent)), t.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!r || a && Ct(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: s,
    crossfade: h,
    layoutScroll: l,
    layoutRoot: c,
    layoutAnchor: u
  });
}
function co(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : co(t.parent);
}
function Ze(t, { forwardMotionProps: e = !1, type: n } = {}, s, i) {
  s && fu(s);
  const o = n ? n === "svg" : as(t), r = o ? ku : Mu;
  function a(c, u) {
    let h;
    const d = {
      ...T.useContext(eo),
      ...c,
      layoutId: ju(c)
    }, { isStatic: x } = d, f = yu(c), y = r(c, x);
    if (!x && typeof window < "u") {
      Ru();
      const m = Lu(d);
      h = m.MeasureLayout, f.visualElement = Eu(t, y, d, i, m.ProjectionNode, o);
    }
    return p.jsxs(Ie.Provider, { value: f, children: [h && f.visualElement ? p.jsx(h, { visualElement: f.visualElement, ...d }) : null, Au(t, c, Vu(y, f.visualElement, u), y, x, e, o)] });
  }
  a.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const l = T.forwardRef(a);
  return l[Cu] = t, l;
}
function ju({ layoutId: t }) {
  const e = T.useContext(Ei).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Ru(t, e) {
  T.useContext(no).strict;
}
function Lu(t) {
  const e = so(), { drag: n, layout: s } = e;
  if (!n && !s)
    return {};
  const i = { ...n, ...s };
  return {
    MeasureLayout: n?.isEnabled(t) || s?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
function $u(t, e) {
  if (typeof Proxy > "u")
    return Ze;
  const n = /* @__PURE__ */ new Map(), s = (o, r) => Ze(o, r, t, e), i = (o, r) => s(o, r);
  return new Proxy(i, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, r) => r === "create" ? s : (n.has(r) || n.set(r, Ze(r, void 0, t, e)), n.get(r))
  });
}
const Fu = (t, e) => e.isSVG ?? as(t) ? new yc(e) : new hc(e, {
  allowProjection: t !== T.Fragment
});
class Iu extends xt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = Tc(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    $e(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Bu = 0;
class Ou extends xt {
  constructor() {
    super(...arguments), this.id = Bu++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s)
      return;
    if (e && s === !1) {
      if (this.isExitComplete) {
        const { initial: o, custom: r } = this.node.getProps();
        if (typeof o == "string" || typeof o == "object" && o !== null && !Array.isArray(o)) {
          const a = Mt(this.node, o, r);
          if (a) {
            const { transition: l, transitionEnd: c, ...u } = a;
            for (const h in u)
              this.node.getValue(h)?.jump(u[h]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => {
      this.isExitComplete = !0, n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Wu = {
  animation: {
    Feature: Iu
  },
  exit: {
    Feature: Ou
  }
};
function ne(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const Nu = (t) => (e) => Jn(e) && t(e, ne(e));
function Ht(t, e, n, s) {
  return Zt(t, e, Nu(n), s);
}
const uo = ({ current: t }) => t ? t.ownerDocument.defaultView : null, pi = (t, e) => Math.abs(t - e);
function Uu(t, e) {
  const n = pi(t.x, e.x), s = pi(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
const mi = /* @__PURE__ */ new Set(["auto", "scroll"]);
class ho {
  constructor(e, n, { transformPagePoint: s, contextWindow: i = window, dragSnapToOrigin: o = !1, distanceThreshold: r = 3, element: a } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (f) => {
      this.handleScroll(f.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = re(this.lastRawMoveEventInfo, this.transformPagePoint));
      const f = Qe(this.lastMoveEventInfo, this.history), y = this.startEvent !== null, m = Uu(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!y && !m)
        return;
      const { point: g } = f, { timestamp: v } = H;
      this.history.push({ ...g, timestamp: v });
      const { onStart: b, onMove: w } = this.handlers;
      y || (b && b(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, y) => {
      this.lastMoveEvent = f, this.lastRawMoveEventInfo = y, this.lastMoveEventInfo = re(y, this.transformPagePoint), B.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, y) => {
      this.end();
      const { onEnd: m, onSessionEnd: g, resumeAnimation: v } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = Qe(f.type === "pointercancel" ? this.lastMoveEventInfo : re(y, this.transformPagePoint), this.history);
      this.startEvent && m && m(f, b), g && g(f, b);
    }, !Jn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.distanceThreshold = r, this.contextWindow = i || window;
    const l = ne(e), c = re(l, this.transformPagePoint), { point: u } = c, { timestamp: h } = H;
    this.history = [{ ...u, timestamp: h }];
    const { onSessionStart: d } = n;
    d && d(e, Qe(c, this.history));
    const x = { passive: !0, capture: !0 };
    this.removeListeners = Jt(Ht(this.contextWindow, "pointermove", this.handlePointerMove, x), Ht(this.contextWindow, "pointerup", this.handlePointerUp, x), Ht(this.contextWindow, "pointercancel", this.handlePointerUp, x)), a && this.startScrollTracking(a);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(e) {
    let n = e.parentElement;
    for (; n; ) {
      const s = getComputedStyle(n);
      (mi.has(s.overflowX) || mi.has(s.overflowY)) && this.scrollPositions.set(n, {
        x: n.scrollLeft,
        y: n.scrollTop
      }), n = n.parentElement;
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
  handleScroll(e) {
    const n = this.scrollPositions.get(e);
    if (!n)
      return;
    const s = e === window, i = s ? { x: window.scrollX, y: window.scrollY } : {
      x: e.scrollLeft,
      y: e.scrollTop
    }, o = { x: i.x - n.x, y: i.y - n.y };
    o.x === 0 && o.y === 0 || (s ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += o.x, this.lastMoveEventInfo.point.y += o.y) : this.history.length > 0 && (this.history[0].x -= o.x, this.history[0].y -= o.y), this.scrollPositions.set(e, i), B.update(this.updatePoint, !0));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), yt(this.updatePoint);
  }
}
function re(t, e) {
  return e ? { point: e(t.point) } : t;
}
function gi(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Qe({ point: t }, e) {
  return {
    point: t,
    delta: gi(t, fo(e)),
    offset: gi(t, _u(e)),
    velocity: Gu(e, 0.1)
  };
}
function _u(t) {
  return t[0];
}
function fo(t) {
  return t[t.length - 1];
}
function Gu(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const i = fo(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > /* @__PURE__ */ J(e))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  s === t[0] && t.length > 2 && i.timestamp - s.timestamp > /* @__PURE__ */ J(e) * 2 && (s = t[1]);
  const o = /* @__PURE__ */ tt(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Ku(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? I(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? I(n, t, s.max) : Math.min(t, n)), t;
}
function yi(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function zu(t, { top: e, left: n, bottom: s, right: i }) {
  return {
    x: yi(t.x, n, i),
    y: yi(t.y, e, s)
  };
}
function xi(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function Hu(t, e) {
  return {
    x: xi(t.x, e.x),
    y: xi(t.y, e.y)
  };
}
function Xu(t, e) {
  let n = 0.5;
  const s = Z(t), i = Z(e);
  return i > s ? n = /* @__PURE__ */ Xt(e.min, e.max - s, t.min) : s > i && (n = /* @__PURE__ */ Xt(t.min, t.max - i, e.min)), lt(0, 1, n);
}
function qu(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Cn = 0.35;
function Yu(t = Cn) {
  return t === !1 ? t = 0 : t === !0 && (t = Cn), {
    x: vi(t, "left", "right"),
    y: vi(t, "top", "bottom")
  };
}
function vi(t, e, n) {
  return {
    min: bi(t, e),
    max: bi(t, n)
  };
}
function bi(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Zu = /* @__PURE__ */ new WeakMap();
class Qu {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = z(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: s } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const o = (h) => {
      n && this.snapToCursor(ne(h).point), this.stopAnimation();
    }, r = (h, d) => {
      const { drag: x, dragPropagation: f, onDragStart: y } = this.getProps();
      if (x && !f && (this.openDragLock && this.openDragLock(), this.openDragLock = Dl(x), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = d, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), rt((g) => {
        let v = this.getAxisMotionValue(g).get() || 0;
        if (at.test(v)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const w = b.layout.layoutBox[g];
            w && (v = Z(w) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[g] = v;
      }), y && B.update(() => y(h, d), !1, !0), vn(this.visualElement, "transform");
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, a = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d;
      const { dragPropagation: x, dragDirectionLock: f, onDirectionLock: y, onDrag: m } = this.getProps();
      if (!x && !this.openDragLock)
        return;
      const { offset: g } = d;
      if (f && this.currentDirection === null) {
        this.currentDirection = th(g), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, g), this.updateAxis("y", d.point, g), this.visualElement.render(), m && B.update(() => m(h, d), !1, !0);
    }, l = (h, d) => {
      this.latestPointerEvent = h, this.latestPanInfo = d, this.stop(h, d), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, c = () => {
      const { dragSnapToOrigin: h } = this.getProps();
      (h || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new ho(e, {
      onSessionStart: o,
      onStart: r,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: s,
      contextWindow: uo(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const s = e || this.latestPointerEvent, i = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !i || !s)
      return;
    const { velocity: r } = i;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && B.postRender(() => a(s, i));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
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
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !oe(e, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (r = Ku(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
    e && Ct(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = zu(s.layoutBox, e) : this.constraints = !1, this.elastic = Yu(n), i !== this.constraints && !Ct(e) && s && this.constraints && !this.hasMutatedConstraints && rt((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = qu(s.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Ct(e))
      return !1;
    const s = e.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    i.root && (i.root.scroll = void 0, i.root.updateScroll());
    const o = rc(s, i.root, this.visualElement.getTransformPagePoint());
    let r = Hu(i.layout.layoutBox, o);
    if (n) {
      const a = n(nc(r));
      this.hasMutatedConstraints = !!a, a && (r = Lr(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = rt((u) => {
      if (!oe(u, n, this.currentDirection))
        return;
      let h = l && l[u] || {};
      (r === !0 || r === u) && (h = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, x = i ? 40 : 1e7, f = {
        type: "inertia",
        velocity: s ? e[u] : 0,
        bounceStiffness: d,
        bounceDamping: x,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(u, f);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return vn(this.visualElement, e), s.start(Xn(e, s, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    rt((e) => this.getAxisMotionValue(e).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps()[n];
    return i || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
  }
  snapToCursor(e) {
    rt((n) => {
      const { drag: s } = this.getProps();
      if (!oe(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n], l = o.get() || 0;
        o.set(e[n] - I(r, a, 0.5) + l);
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
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!Ct(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    rt((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = Xu({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.constraints = !1, this.resolveConstraints(), rt((r) => {
      if (!oe(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: c } = this.constraints[r];
      a.set(I(l, c, i[r]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Zu.set(this.visualElement, this);
    const e = this.visualElement.current, n = Ht(e, "pointerdown", (c) => {
      const { drag: u, dragListener: h = !0 } = this.getProps(), d = c.target, x = d !== e && Il(d);
      u && h && !x && this.start(c);
    });
    let s;
    const i = () => {
      const { dragConstraints: c } = this.getProps();
      Ct(c) && c.current && (this.constraints = this.resolveRefConstraints(), s || (s = Ju(e, c.current, () => this.scalePositionWithinConstraints())));
    }, { projection: o } = this.visualElement, r = o.addEventListener("measure", i);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), B.read(i);
    const a = Zt(window, "resize", () => this.scalePositionWithinConstraints()), l = o.addEventListener("didUpdate", (({ delta: c, hasLayoutChanged: u }) => {
      this.isDragging && u && (rt((h) => {
        const d = this.getAxisMotionValue(h);
        d && (this.originPoint[h] += c[h].translate, d.set(d.get() + c[h].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), n(), r(), l && l(), s && s();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = Cn, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function wi(t) {
  let e = !0;
  return () => {
    if (e) {
      e = !1;
      return;
    }
    t();
  };
}
function Ju(t, e, n) {
  const s = Es(t, wi(n)), i = Es(e, wi(n));
  return () => {
    s(), i();
  };
}
function oe(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function th(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class eh extends xt {
  constructor(e) {
    super(e), this.removeGroupControls = et, this.removeListeners = et, this.controls = new Qu(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || et;
  }
  update() {
    const { dragControls: e } = this.node.getProps(), { dragControls: n } = this.node.prevProps || {};
    e !== n && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Je = (t) => (e, n) => {
  t && B.update(() => t(e, n), !1, !0);
};
class nh extends xt {
  constructor() {
    super(...arguments), this.removePointerDownListener = et;
  }
  onPointerDown(e) {
    this.session = new ho(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: uo(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Je(e),
      onStart: Je(n),
      onMove: Je(s),
      onEnd: (o, r) => {
        delete this.session, i && B.postRender(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ht(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let tn = !1;
class sh extends T.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
    o && (n.group && n.group.add(o), s && s.register && i && s.register(o), tn && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), me.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, { projection: r } = s;
    return r && (r.isPresent = o, e.layoutDependency !== n && r.setOptions({
      ...r.options,
      layoutDependency: n
    }), tn = !0, i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || B.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: e, layoutAnchor: n } = this.props, { projection: s } = e;
    s && (s.options.layoutAnchor = n, s.root.didUpdate(), Qn.postRender(() => {
      !s.currentAnimation && s.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = e;
    tn = !0, i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function po(t) {
  const [e, n] = uu(), s = T.useContext(Ei);
  return p.jsx(sh, { ...t, layoutGroup: s, switchLayoutGroup: T.useContext(lo), isPresent: e, safeToRemove: n });
}
const ih = {
  pan: {
    Feature: nh
  },
  drag: {
    Feature: eh,
    ProjectionNode: to,
    MeasureLayout: po
  }
};
function Ti(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && B.postRender(() => o(e, ne(e)));
}
class rh extends xt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Rl(e, (n, s) => (Ti(this.node, s, "Start"), (i) => Ti(this.node, i, "End"))));
  }
  unmount() {
  }
}
class oh extends xt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Jt(Zt(this.node.current, "focus", () => this.onFocus()), Zt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Ai(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && B.postRender(() => o(e, ne(e)));
}
class ah extends xt {
  mount() {
    const { current: e } = this.node;
    if (!e)
      return;
    const { globalTapTarget: n, propagate: s } = this.node.props;
    this.unmount = Ol(e, (i, o) => (Ai(this.node, o, "Start"), (r, { success: a }) => Ai(this.node, r, a ? "End" : "Cancel")), {
      useGlobalTarget: n,
      stopPropagation: s?.tap === !1
    });
  }
  unmount() {
  }
}
const Vn = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), lh = (t) => {
  const e = Vn.get(t.target);
  e && e(t);
}, ch = (t) => {
  t.forEach(lh);
};
function uh({ root: t, ...e }) {
  const n = t || document;
  en.has(n) || en.set(n, {});
  const s = en.get(n), i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(ch, { root: t, ...e })), s[i];
}
function hh(t, e, n) {
  const s = uh(e);
  return Vn.set(t, n), s.observe(t), () => {
    Vn.delete(t), s.unobserve(t);
  };
}
const fh = {
  some: 0,
  all: 1
};
class dh extends xt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : fh[i]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, o && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), d = c ? u : h;
      d && d(l);
    };
    this.stopObserver = hh(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(ph(e, n)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function ph({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const mh = {
  inView: {
    Feature: dh
  },
  tap: {
    Feature: ah
  },
  focus: {
    Feature: oh
  },
  hover: {
    Feature: rh
  }
}, gh = {
  layout: {
    ProjectionNode: to,
    MeasureLayout: po
  }
}, yh = {
  ...Wu,
  ...mh,
  ...ih,
  ...gh
}, xh = /* @__PURE__ */ $u(yh, Fu);
function vh() {
  !ss.current && Dr();
  const [t] = T.useState(Me.current);
  return t;
}
const bh = [
  {
    id: "espresso",
    name: "Espresso",
    subtitle: "30 ml · bold",
    description: "a short, intense shot with golden crema",
    vessel: "demitasse",
    layers: [{ type: "espresso", amount: 0.72 }],
    crema: !0
  },
  {
    id: "americano",
    name: "Americano",
    subtitle: "240 ml · smooth",
    description: "espresso over hot water",
    vessel: "glass-mug",
    layers: [
      { type: "water", amount: 0.54 },
      { type: "espresso", amount: 0.24 }
    ],
    crema: !0,
    blend: 0.9
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    subtitle: "180 ml · velvety",
    description: "espresso with steamed milk and foam",
    vessel: "cup",
    layers: [
      { type: "espresso", amount: 0.3 },
      { type: "milk", amount: 0.44 }
    ],
    foam: 0.14,
    art: "heart"
  },
  {
    id: "latte",
    name: "Latte",
    subtitle: "300 ml · mellow",
    description: "espresso with lots of steamed milk and microfoam",
    vessel: "tall-glass",
    layers: [
      { type: "espresso", amount: 0.25 },
      { type: "milk", amount: 0.51 }
    ],
    foam: 0.11,
    blend: 0.15
  }
], De = 360, ae = 400, ht = 330, jt = 180, Qt = -ht - 10, R = 0.34, K = 14, Ft = {
  demitasse: {
    outer: { top: -86, r: 46, bot: -14, rb: 27, c: 53 },
    // shallow on purpose: an opaque cup only shows liquid near the rim
    inner: { top: -86, r: 41, bot: -60, rb: 33, c: 42 },
    glass: !1,
    glaze: "terra",
    saucer: { y: -6, r: 90 },
    handle: "M41 -74C66 -80 76 -56 60 -44C52 -38 42 -37 34 -39",
    handleW: 8,
    height: 92,
    shadowR: 90,
    streamX: 0.12,
    streamW: 3
  },
  "glass-mug": {
    outer: { top: -170, r: 58, bot: 0, rb: 52, c: 55 },
    inner: { top: -170, r: 53.5, bot: -16, rb: 46.5, c: 50 },
    glass: !0,
    handle: "M55 -148C94 -148 98 -130 98 -100C98 -64 92 -42 53 -40",
    handleW: 13,
    height: 172,
    shadowR: 62,
    streamX: 0.14,
    streamW: 4.2
  },
  cup: {
    outer: { top: -114, r: 80, bot: -16, rb: 38, c: 95 },
    inner: { top: -114, r: 74.5, bot: -76, rb: 57, c: 74 },
    glass: !1,
    glaze: "cream",
    saucer: { y: -6, r: 132 },
    handle: "M75 -98C112 -106 126 -68 98 -52C88 -46 78 -45 66 -47",
    handleW: 11,
    height: 120,
    shadowR: 132,
    streamX: 0.13,
    streamW: 4
  },
  "tall-glass": {
    outer: { top: -238, r: 48, bot: 0, rb: 39, c: 43.5 },
    inner: { top: -238, r: 44.5, bot: -24, rb: 35, c: 39.8 },
    glass: !0,
    height: 240,
    shadowR: 48,
    streamX: 0.12,
    streamW: 4
  }
}, M = (t) => Math.round(t * 10) / 10, Q = (t, e, n) => Math.min(n, Math.max(e, t)), ft = (t, e, n) => t + (e - t) * n, mo = (t) => (t.top + t.bot) / 2, ge = (t, e) => (1 - e) * (1 - e) * t.r + 2 * e * (1 - e) * t.c + e * e * t.rb;
function je(t) {
  const e = mo(t);
  return `M${-t.r} ${t.top}A${t.r} ${M(t.r * R)} 0 0 1 ${t.r} ${t.top}Q${t.c} ${e} ${t.rb} ${t.bot}A${t.rb} ${M(t.rb * R)} 0 0 1 ${-t.rb} ${t.bot}Q${-t.c} ${e} ${-t.r} ${t.top}Z`;
}
function nn(t) {
  const e = mo(t);
  return `M${-t.r} ${t.top}Q${-t.c} ${e} ${-t.rb} ${t.bot}A${t.rb} ${M(t.rb * R)} 0 0 0 ${t.rb} ${t.bot}Q${t.c} ${e} ${t.r} ${t.top}A${t.r} ${M(t.r * R)} 0 0 1 ${-t.r} ${t.top}Z`;
}
function kt(t, e, n, s) {
  return `M${-t} ${e}A${t} ${M(t * R)} 0 0 0 ${t} ${e}L${n} ${s}A${n} ${M(n * R)} 0 0 1 ${-n} ${s}Z`;
}
function ut(t, e, n, s) {
  const i = ft(t.top, t.bot, n), o = ft(t.top, t.bot, s), r = (i + o) / 2;
  return `M${M(e * ge(t, n))} ${M(i)}Q${M(e * ge(t, (n + s) / 2) * 1.02)} ${M(r)} ${M(e * ge(t, s))} ${M(o)}`;
}
const go = (t, e, n) => [
  ft(t[0], e[0], n),
  ft(t[1], e[1], n),
  ft(t[2], e[2], n)
];
function Pi(t, e) {
  if (e <= t[0][0]) return t[0][1];
  for (let n = 1; n < t.length; n++) {
    const [s, i] = t[n];
    if (e <= s) {
      const [o, r] = t[n - 1];
      return go(r, i, (e - o) / (s - o || 1));
    }
  }
  return t[t.length - 1][1];
}
const yo = [248, 242, 232], wh = [
  [0, [236, 230, 218]],
  [0.3, [172, 104, 50]],
  [0.7, [100, 54, 25]],
  [1, [40, 21, 11]]
], Th = [
  [0.3, [108, 62, 32]],
  [0.55, [168, 112, 66]],
  [0.75, [208, 165, 118]],
  [0.9, [236, 217, 190]],
  [1, yo]
];
function ye(t, e, n) {
  const s = t + e + n || 1;
  t /= s, e /= s, n /= s;
  const i = t + e > 1e-4 ? 1 - Math.pow(1 - t / (t + e), 2) : 1;
  let o = Pi(wh, i);
  const r = i < 0.35 ? ft(0.18, 0.88, i / 0.35) : ft(0.88, 1, Math.min(1, (i - 0.35) / 0.35));
  if (n > 1e-3) {
    const a = [[0, o], ...Th.map(([l, c]) => [l, go(yo, c, i)])];
    o = Pi(a, n);
  }
  return [o, 1 - (1 - r) * (1 - Math.min(1, n * 3))];
}
const xe = (t) => `rgb(${t[0] | 0},${t[1] | 0},${t[2] | 0})`, pt = {
  espresso: { fill: "rgb(58,30,14)", a: 1, hi: 0.35 },
  water: { fill: "rgb(188,204,208)", a: 0.7, hi: 1 },
  milk: { fill: "rgb(250,245,236)", a: 1, hi: 0.9 }
}, En = {
  espresso: "rgb(60,30,14)",
  water: "rgb(230,225,215)",
  milk: "rgb(252,247,238)"
}, Dn = { espresso: 0, water: 1, milk: 2 }, Ah = { espresso: 0.3, water: 0.1, milk: 0.18 }, Ph = { espresso: 0.9, water: 0.5, milk: 0.8 }, ve = 3e3, xo = 2600, Rt = 220, ls = 26, Be = 6, vo = 3, jn = 32;
function Sh(t, e) {
  const n = Ft[e.vessel] ?? Ft.cup;
  return {
    key: t,
    item: e,
    geo: n,
    mode: "wait",
    wait: 0,
    x: De + 160,
    y: ht,
    vx: 0,
    vy: 0,
    a: 0,
    va: 0,
    pivot: 0,
    opacity: 1,
    fallT: 0,
    level: 0,
    cells: new Float32Array(K * 3),
    pours: [],
    next: 0,
    pourT: 0,
    parts: [],
    ripples: [],
    tendrils: [],
    w1: 0,
    v1: 0,
    w2: 0,
    v2: 0,
    w3: 0,
    mix: 0,
    swirlCol: En.milk,
    crema: 0,
    foam: 0,
    art: 0,
    artV: 0,
    spill: 0,
    dirty: !0
  };
}
const bo = (t) => t.foam ?? (t.crema ? 0.035 : 0), Rn = (t, e) => ft(t.inner.bot, t.inner.top, e), Ln = (t, e) => ge(t.inner, 1 - e), Ut = (t) => 1 - Math.pow(1 - Q(t, 0, 1), 3);
function wo(t, e, n) {
  const s = Dn[e], i = t.level, o = Math.min(0.96, i + n), r = t.cells;
  for (let a = 0; a < K && !(a / K >= o); a++) {
    const l = a * 3, c = Q(i * K - a, 0, 1), u = Q(o * K - a, 0, 1);
    if (u > c) {
      const h = (u - c) / u;
      for (let d = 0; d < 3; d++) r[l + d] *= 1 - h;
      r[l + s] += h;
    }
    if (c > 0) {
      const h = Math.max(0, o - (a + 0.5) / K), d = Math.min(0.4, Ph[e] * n * K * 0.5 * Math.exp(-h / Ah[e]));
      for (let x = 0; x < 3; x++) r[l + x] *= 1 - d;
      r[l + s] += d;
    }
  }
  t.level = o, t.dirty = !0;
}
function To(t, e) {
  const n = t.cells;
  let s = 0;
  const i = [0, 0, 0];
  for (let o = 0; o < K; o++) {
    const r = Q(t.level * K - o, 0, 1);
    if (r <= 0) break;
    s += r;
    for (let a = 0; a < 3; a++) i[a] += n[o * 3 + a] * r;
  }
  if (!(s <= 0)) {
    for (let o = 0; o < K && !(o / K >= t.level); o++)
      for (let r = 0; r < 3; r++) n[o * 3 + r] += (i[r] / s - n[o * 3 + r]) * e;
    t.dirty = !0;
  }
}
function Ao(t, e) {
  const n = t.cells, s = Math.min(K - 1, Math.ceil(t.level * K) - 1);
  for (let i = 0; i < s; i++)
    for (let o = 0; o < 3; o++) {
      const r = (n[(i + 1) * 3 + o] - n[i * 3 + o]) * e;
      n[i * 3 + o] += r, n[(i + 1) * 3 + o] -= r;
    }
}
function Mh(t, e) {
  let n = 0, s = 0;
  for (let i = 0; i < K; i++) {
    const o = Q(t.level * K - i, 0, 1);
    if (o <= 0) break;
    n += o, s += t.cells[i * 3 + e] * o;
  }
  return n ? s / n : 1;
}
const _t = (t) => Math.max(0, Math.min(K - 1, Math.ceil(t.level * K) - 1)), Tt = (t, e, n) => t.w1 * e + t.w2 * Math.cos(Math.PI * e) + t.w3 * Math.sin(3 * Math.PI * e - n * 9);
function sn(t, e, n) {
  t.v1 += n * e * 40, t.v2 -= n * 50, t.w3 = Math.min(2.2, t.w3 + n * 0.9);
}
function kh(t) {
  for (const e of t.item.layers)
    for (let n = 0; n < e.amount; n += 0.01) wo(t, e.type, Math.min(0.01, e.amount - n));
  To(t, 1 - Math.exp(-(t.item.blend ?? 1) * 5.4));
  for (let e = 0; e < 40; e++) Ao(t, 0.1);
  t.crema = 1, t.foam = 1, t.art = 1, t.next = t.item.layers.length;
}
function Ch(t, e) {
  const n = t.item.layers[e], s = t.geo.inner.r, i = e % 2 === 0 ? -1 : 1;
  t.pours.push({
    type: n.type,
    amount: n.amount,
    rate: n.amount / Q(n.amount * 2.6, 0.7, 1.6),
    poured: 0,
    x: i * t.geo.streamX * s,
    w: t.geo.streamW * (n.type === "milk" ? 1.9 : n.type === "water" ? 1.5 : 1.3),
    phase: n.type === "espresso" ? "lead" : "fall",
    timer: 0,
    head: Qt,
    headV: Rt,
    tail: Qt,
    tailV: Rt,
    drips: n.type === "espresso" ? 2 : 1,
    lead: n.type === "espresso" ? 2 : 0,
    rippleT: 0,
    slot: t.pours.filter((o) => o.phase !== "done").length > 0 ? (t.pours[t.pours.length - 1].slot + 1) % 2 : 0
  });
}
function Si(t, e) {
  t.parts.push({ x: e.x + (Math.random() - 0.5), y: Qt + 10, vx: 0, vy: Rt * 0.6, r: e.w * 0.5 + 0.6, col: pt[e.type].fill, drop: !0 });
}
function rn(t, e, n, s, i, o) {
  for (let r = 0; r < i && t.parts.length < ls; r++)
    t.parts.push({
      x: e + (Math.random() - 0.5) * 4,
      y: n - 1,
      vx: (Math.random() - 0.5) * 150 * o,
      vy: -(80 + Math.random() * 180) * o,
      r: 0.8 + Math.random() * 1.5,
      col: s,
      drop: !1
    });
  t.ripples.length >= Be && t.ripples.shift(), t.ripples.push({ x: e, age: 0 });
}
function Vh(t, e, n, s) {
  const i = t.geo, o = t.item;
  let r = !1;
  if (t.mode === "wait")
    return t.wait -= e, t.wait <= 0 && (t.mode = "enter"), !0;
  if (t.mode === "enter" || t.mode === "rest") {
    const f = -130 * (t.x - jt) - 15.5 * t.vx;
    t.vx += f * e, t.x += t.vx * e;
    const y = Q(-f * 11e-5, -0.14, 0.14);
    t.va += (-240 * (t.a - y) - 15 * t.va) * e, t.a += t.va * e, t.mode === "enter" && (r = !0, Math.abs(t.x - jt) < 0.4 && Math.abs(t.vx) < 8 && Math.abs(t.a) < 3e-3 && Math.abs(t.va) < 0.04 && (t.x = jt, t.vx = 0, t.a = 0, t.va = 0, t.mode = "rest"));
  } else if (t.mode === "fall") {
    if (t.fallT += e, t.vy += xo * e, t.x += t.vx * e, t.y += t.vy * e, t.a += t.va * e, r = !0, t.level > 0.2 && Math.abs(t.a) > 0.3 && s.length < jn)
      for (t.spill += e * 60 * t.level; t.spill > 1 && s.length < jn; ) {
        t.spill -= 1;
        const f = Math.sign(t.a) || -1, y = f < 0 ? -i.inner.r : i.inner.r, m = i.inner.top + t.pivot, g = Math.cos(t.a), v = Math.sin(t.a), b = g * y - v * m, w = v * y + g * m, [S] = ye(t.cells[_t(t) * 3], t.cells[_t(t) * 3 + 1], t.cells[_t(t) * 3 + 2]);
        s.push({
          x: t.x + b,
          y: t.y - t.pivot + w,
          vx: t.vx - t.va * w + f * (30 + Math.random() * 60),
          vy: t.vy + t.va * b - 60 - Math.random() * 80,
          r: 1.2 + Math.random() * 2.2,
          col: xe(S),
          drop: !0
        }), t.level = Math.max(0.05, t.level - 4e-3);
      }
  } else t.mode === "fadeIn" ? (t.opacity = Math.min(1, t.opacity + e / 0.3), t.opacity >= 1 && (t.mode = "rest"), r = !0) : t.mode === "fadeOut" && (t.opacity = Math.max(0, t.opacity - e / 0.25), r = !0);
  if ((t.mode === "rest" || t.mode === "enter" && Math.abs(t.x - jt) < 16) && t.next < o.layers.length) {
    t.pourT += e;
    const f = t.pours[t.pours.length - 1], y = f && f.type === "espresso" && o.layers[t.next].type === "milk";
    (f ? y ? f.poured >= f.amount * 0.6 : f.phase === "drips" || f.phase === "done" : t.pourT > 0.02) && Ch(t, t.next++), r = !0;
  }
  const l = t.level + bo(o) * Ut(t.foam), c = Rn(i, l), u = Ln(i, l);
  let h = !1;
  for (const f of t.pours) {
    if (f.phase === "done") continue;
    r = !0, f.timer += e;
    const y = c + Tt(t, f.x / u, n);
    if (f.phase === "lead" && (f.lead > 0 && f.timer > 0.08 ? (Si(t, f), f.lead--, f.timer = 0) : f.lead === 0 && f.timer > 0.1 && (f.phase = "fall")), f.phase === "fall" && (f.headV += ve * e, f.head += f.headV * e, f.head >= y)) {
      f.phase = "flow";
      const m = t.cells[_t(t) * 3 + Dn[f.type]];
      rn(t, f.x, y, pt[f.type].fill, t.level > 0.02 ? 6 : 3, 1), sn(t, f.x / u, t.level > 0.02 ? 1 : 0.3), t.level > 0.02 && m < 0.85 && (t.swirlCol = En[f.type]);
    }
    if (f.phase === "flow" || f.phase === "tail") {
      if (f.poured < f.amount) {
        const m = Math.min(f.rate * e, f.amount - f.poured), g = t.level > 0.03 && Mh(t, Dn[f.type]) < 0.8;
        wo(t, f.type, m), f.poured += m, g && (t.mix = Math.min(1, t.mix + e * 3), t.swirlCol = En[f.type], i.glass && t.tendrils.length < vo && Math.random() < e * 3.2 && t.tendrils.push({ x: f.x, age: 0, dir: Math.random() < 0.5 ? -1 : 1, ph: Math.random() * 6, col: pt[f.type].fill })), h = !0;
      }
      f.rippleT += e, f.rippleT > 0.085 && (f.rippleT = 0, rn(t, f.x, y, pt[f.type].fill, 1, 0.7), sn(t, f.x / u, 0.12)), f.phase === "flow" && f.poured >= f.amount && (f.phase = "tail");
    }
    f.phase === "tail" && (f.tailV += ve * e, f.tail += f.tailV * e, f.tail >= y && (f.phase = "drips", f.timer = 0)), f.phase === "drips" && (f.drips > 0 && f.timer > 0.12 + Math.random() * 0.1 ? (Si(t, f), f.drips--, f.timer = 0) : f.drips === 0 && f.timer > 0.1 && (f.phase = "done"));
  }
  for (let f = t.parts.length - 1; f >= 0; f--) {
    const y = t.parts[f];
    y.vy += ve * e, y.x += y.vx * e, y.y += y.vy * e;
    const m = c + Tt(t, Q(y.x / u, -1, 1), n);
    y.vy > 0 && y.y >= m && (y.drop ? (rn(t, y.x, m, y.col, 3, 0.6), sn(t, y.x / u, 0.35)) : t.ripples.length < Be && Math.random() < 0.3 && t.ripples.push({ x: y.x, age: 0 }), t.parts.splice(f, 1));
  }
  t.parts.length && (r = !0);
  for (let f = t.ripples.length - 1; f >= 0; f--)
    t.ripples[f].age += e, t.ripples[f].age > 0.7 && t.ripples.splice(f, 1);
  for (let f = t.tendrils.length - 1; f >= 0; f--)
    t.tendrils[f].age += e, t.tendrils[f].age > 1.8 && t.tendrils.splice(f, 1);
  (t.ripples.length || t.tendrils.length) && (r = !0);
  const d = Q(-Math.tan(t.a), -0.9, 0.9) * u * (t.mode === "fall" ? 0.8 : 1);
  if (t.v1 += (-70 * (t.w1 - d) - 3.2 * t.v1) * e, t.w1 += t.v1 * e, t.v2 += (-190 * t.w2 - 5 * t.v2) * e, t.w2 += t.v2 * e, t.w3 *= Math.exp(-2.6 * e), t.mode !== "fall") {
    const f = u * R * 0.8;
    t.w2 = Q(t.w2, -f, f);
  }
  Math.abs(t.w1 - d) + Math.abs(t.v1) * 0.1 + Math.abs(t.w2) + Math.abs(t.v2) * 0.1 + t.w3 > 0.02 && (r = !0);
  const x = t.next < o.layers.length || t.pours.some((f) => f.phase !== "done");
  return h || (t.mix = Math.max(0, t.mix - e * 0.85)), t.mix > 0 && (To(t, 1 - Math.exp(-(o.blend ?? 1) * t.mix * 3.2 * e)), Ao(t, Math.min(0.25, t.mix * e * 6 * Math.sqrt(o.blend ?? 1))), r = !0), o.crema && t.level > 0.05 && t.crema < 1 && (t.crema = Math.min(1, t.crema + e / (x ? 2.4 : 0.9)), r = !0), !x && t.level > 0 && t.foam < 1 && t.mode !== "fall" && (t.foam = Math.min(1, t.foam + e / 0.75), r = !0), o.art === "heart" && t.foam > 0.35 && t.mix < 0.5 && t.mode !== "fall" && (t.artV += (-120 * (t.art - 1) - 13 * t.artV) * e, t.art += t.artV * e, Math.abs(t.art - 1) + Math.abs(t.artV) * 0.05 > 2e-3 ? r = !0 : t.art = 1), r;
}
const mt = 36, Mi = Array.from({ length: mt + 1 }, (t, e) => Math.cos(e / mt * Math.PI * 2 + Math.PI)), ki = Array.from({ length: mt + 1 }, (t, e) => Math.sin(e / mt * Math.PI * 2 + Math.PI));
function Eh(t, e, n) {
  const s = t.phase === "tail" ? t.tail : Qt;
  if (t.phase === "lead" || t.phase === "drips" || t.phase === "done" || e - s < 1) return ["", ""];
  const i = [], o = [], r = 12;
  let a = "";
  for (let h = 0; h <= r; h++) {
    const d = ft(s, e, h / r), x = Math.sqrt(Rt * Rt + 2 * ve * Math.max(0, d - Qt)), f = t.w / 2 * Math.max(0.62, Math.pow(Rt / x, 0.3)), y = Math.sin(d * 0.045 + n * 14) * 0.5 * (h / r);
    i.push(`${M(t.x - f + y)} ${M(d)}`), o.unshift(`${M(t.x + f + y)} ${M(d)}`), h === 1 && (a = `M${M(t.x - f * 0.35 + y)} ${M(d)}`);
  }
  const l = t.phase === "fall" ? `A1 1 0 0 0 ${o[0]}` : `L${o[0]}`, c = `M${i.join("L")}${l}L${o.slice(1).join("L")}Z`, u = t.w / 2 * 0.55;
  return [c, `${a}L${M(t.x - u * 0.35)} ${M(e - 2)}`];
}
function Ci(t, e) {
  const n = t.el;
  if (!n) return;
  const s = t.geo, i = t.item;
  n.root.setAttribute("opacity", t.opacity.toFixed(3)), n.body.setAttribute(
    "transform",
    `translate(${M(t.x)} ${M(t.y)}) rotate(${(t.a * 180 / Math.PI).toFixed(2)} 0 ${-t.pivot})`
  );
  const o = t.mode === "fall" ? Math.max(0, 1 - t.fallT * 6) : 1;
  n.shadow.setAttribute("transform", `translate(${M(t.x)} ${ht})`), n.shadow.setAttribute("opacity", o.toFixed(3));
  const r = bo(i) * Ut(t.foam), a = t.level + r, l = Rn(s, a), c = Ln(s, a) * 1.02, u = c * R;
  if (n.liquid.setAttribute("opacity", Q(t.level * 50, 0, 1).toFixed(3)), t.level <= 0) return;
  const h = [];
  let d = "";
  for (let m = 0; m <= mt; m++) {
    const g = Mi[m], v = `${M(c * g)} ${M(l + u * ki[m] + Tt(t, g, e))}`;
    h.push(v), m <= mt / 2 && (d += (m ? "L" : "M") + v);
  }
  const x = `M${h.join("L")}Z`;
  n.surf.setAttribute("d", x), n.sclip.setAttribute("d", x);
  const f = `${d}L${M(c + 40)} ${s.inner.bot + 40}L${M(-c - 40)} ${s.inner.bot + 40}Z`;
  if (n.liq.setAttribute("d", f), n.depth?.setAttribute("d", f), s.glass && r > 2e-3) {
    const m = Rn(s, t.level), g = Ln(s, t.level) * 1.02;
    let v = "";
    for (let b = mt / 2; b <= mt; b++) {
      const w = Mi[b];
      v += `L${M(g * w)} ${M(m + g * R * ki[b] + Tt(t, w, e))}`;
    }
    n.foam.setAttribute("d", `${d}${v}Z`);
  } else
    n.foam.setAttribute("d", "");
  if (t.dirty) {
    t.dirty = !1;
    for (let b = 0; b < K; b++) {
      const [w, S] = ye(t.cells[b * 3], t.cells[b * 3 + 1], t.cells[b * 3 + 2]);
      n.stops[b].setAttribute("stop-color", xe(w)), n.stops[b].setAttribute("stop-opacity", S.toFixed(3));
    }
    const m = _t(t), [g, v] = ye(t.cells[m * 3], t.cells[m * 3 + 1], t.cells[m * 3 + 2]);
    if (n.surf.setAttribute("fill", xe(g)), n.surf.setAttribute("fill-opacity", Math.min(1, v + 0.08).toFixed(3)), n.depth?.setAttribute("opacity", (v * 0.9).toFixed(3)), n.base) {
      const [b, w] = ye(t.cells[0], t.cells[1], t.cells[2]);
      n.base.setAttribute("fill", xe(b)), n.base.setAttribute("fill-opacity", (w * 0.45).toFixed(3));
    }
  }
  if (n.decor.setAttribute(
    "transform",
    `matrix(${M(c)} ${(t.w1 / 1).toFixed(2)} 0 ${M(u)} 0 ${M(l + t.w2)})`
  ), n.crema?.setAttribute("opacity", Ut(t.crema).toFixed(3)), n.foamTop?.setAttribute("opacity", Ut(t.foam).toFixed(3)), n.art) {
    const m = Math.max(0, t.art);
    n.art.setAttribute("opacity", Q(t.art * 1.6, 0, 1).toFixed(3)), n.art.setAttribute("transform", `translate(0 0.08) scale(${m.toFixed(3)})`);
  }
  const y = Q(t.mix * 1.2, 0, 1) * 0.8;
  for (let m = 0; m < n.swirl.length; m++) {
    if (y < 0.01) {
      n.swirl[m].setAttribute("d", "");
      continue;
    }
    let g = "";
    const v = e * 2.6 + m * Math.PI;
    for (let b = 0; b <= 22; b++) {
      const w = b / 22, S = v + w * Math.PI * 2.4, D = (0.12 + 0.72 * w) * 0.9, E = Math.cos(S) * D;
      g += `${b ? "L" : "M"}${M(c * E)} ${M(l + u * Math.sin(S) * D + Tt(t, E, e))}`;
    }
    n.swirl[m].setAttribute("d", g), n.swirl[m].setAttribute("stroke", t.swirlCol), n.swirl[m].setAttribute("opacity", y.toFixed(3));
  }
  for (let m = 0; m < n.tendrils.length; m++) {
    const g = t.tendrils[m];
    if (!g) {
      n.tendrils[m].setAttribute("d", "");
      continue;
    }
    const v = Ut(g.age / 0.7), b = (l - s.inner.bot) * 0.85 * v;
    let w = "";
    for (let S = 0; S <= 10; S++) {
      const D = S / 10, E = g.x + g.dir * D * D * c * 0.6 * v + Math.sin(D * 5 + g.age * 3.5 + g.ph) * D * 8;
      w += `${S ? "L" : "M"}${M(E)} ${M(l + 2 + D * b)}`;
    }
    n.tendrils[m].setAttribute("d", w), n.tendrils[m].setAttribute("stroke", g.col), n.tendrils[m].setAttribute("opacity", (0.6 * (1 - g.age / 1.8)).toFixed(3));
  }
  for (let m = 0; m < Be; m++) {
    const g = t.ripples[m], v = n.ripples[m];
    if (!g) {
      v.setAttribute("opacity", "0");
      continue;
    }
    const b = 2 + g.age * c * 1.3;
    v.setAttribute("cx", M(g.x).toString()), v.setAttribute("cy", M(l + Tt(t, Q(g.x / c, -1, 1), e)).toString()), v.setAttribute("rx", M(b).toString()), v.setAttribute("ry", M(b * R).toString()), v.setAttribute("opacity", (0.55 * (1 - g.age / 0.7)).toFixed(3));
  }
  for (let m = 0; m < 2; m++) {
    const g = t.pours.find((D) => D.slot === m && D.phase !== "done" && D.phase !== "drips"), v = n.streams[m];
    if (!g || t.mode === "fall") {
      v.path.setAttribute("d", ""), v.hi.setAttribute("d", "");
      continue;
    }
    const b = g.phase === "fall" ? g.head : l + Tt(t, g.x / c, e) + 1, [w, S] = Eh(g, b, e);
    v.path.setAttribute("d", w), v.hi.setAttribute("d", S), v.hi.setAttribute("stroke-opacity", pt[g.type].hi.toFixed(2)), v.stops[0].setAttribute("stop-color", pt[g.type].fill), v.stops[1].setAttribute("stop-color", pt[g.type].fill), v.stops[1].setAttribute("stop-opacity", pt[g.type].a.toFixed(2));
  }
  for (let m = 0; m < ls; m++) {
    const g = t.parts[m], v = n.parts[m];
    if (!g) {
      v.setAttribute("r", "0");
      continue;
    }
    v.setAttribute("cx", M(g.x).toString()), v.setAttribute("cy", M(g.y).toString()), v.setAttribute("r", g.r.toFixed(2)), v.setAttribute("fill", g.col);
  }
}
function Dh(t) {
  const e = (s) => t.querySelector(`[data-k="${s}"]`), n = (s) => Array.from(t.querySelectorAll(`[data-k="${s}"]`));
  return {
    root: t,
    shadow: e("shadow"),
    body: e("body"),
    liquid: e("liquid"),
    liq: e("liq"),
    depth: e("depth"),
    foam: e("foam"),
    surf: e("surf"),
    sclip: e("sclip"),
    decor: e("decor"),
    crema: e("crema"),
    foamTop: e("foamtop"),
    art: e("art"),
    base: e("base"),
    stops: n("stop"),
    swirl: n("swirl"),
    tendrils: n("tendril"),
    ripples: n("ripple"),
    streams: [0, 1].map((s) => ({
      path: e(`stream${s}`),
      hi: e(`streamhi${s}`),
      stops: n(`sstop${s}`)
    })),
    parts: n("part")
  };
}
const cs = {
  cream: { body: "cerCream", rim: "#fbf7f0", rimLine: "#5b331b", inner: "innerCream", edge: "edgeCream", saucer: "saucerCream", handle: "handleCream", ao: "aoCream" },
  terra: { body: "cerTerra", rim: "#f7efe3", rimLine: "", inner: "innerCream", edge: "edgeTerra", saucer: "saucerCream", handle: "handleTerra", ao: "aoTerra" }
};
function jh({ g: t, id: e }) {
  if (!t.saucer) return null;
  const { y: n, r: s } = t.saucer, i = cs[t.glaze ?? "cream"], o = t.outer;
  return /* @__PURE__ */ p.jsxs("g", { children: [
    /* @__PURE__ */ p.jsx("path", { d: kt(s, n, s * 0.985, n + 7), fill: `url(#${e(i.edge)})` }),
    /* @__PURE__ */ p.jsx("path", { d: kt(s * 0.985, n + 7, s * 0.6, n + 11), fill: "rgba(70,45,25,0.18)" }),
    /* @__PURE__ */ p.jsx("ellipse", { cx: 0, cy: n, rx: s, ry: s * R, fill: `url(#${e(i.saucer)})` }),
    /* @__PURE__ */ p.jsx("ellipse", { cx: 0, cy: n - 0.6, rx: s * 0.985, ry: s * R * 0.985, fill: "none", stroke: "rgba(255,255,255,0.9)", strokeWidth: 1 }),
    t.glaze === "cream" && /* @__PURE__ */ p.jsx("ellipse", { cx: 0, cy: n, rx: s * 0.93, ry: s * R * 0.93, fill: "none", stroke: i.rimLine, strokeOpacity: 0.55, strokeWidth: 1.4 }),
    /* @__PURE__ */ p.jsx("ellipse", { cx: 0, cy: n + 1.6, rx: s * 0.76, ry: s * R * 0.76, fill: "none", stroke: "rgba(110,80,55,0.16)", strokeWidth: 1.4 }),
    /* @__PURE__ */ p.jsx("ellipse", { cx: 0, cy: n + 0.6, rx: s * 0.76, ry: s * R * 0.76, fill: "none", stroke: "rgba(255,255,255,0.75)", strokeWidth: 1 }),
    /* @__PURE__ */ p.jsx("ellipse", { cx: 0, cy: n + 2, rx: s * 0.44, ry: s * R * 0.44, fill: "rgba(120,90,60,0.08)" }),
    /* @__PURE__ */ p.jsx("ellipse", { cx: 7, cy: o.bot + 4, rx: o.rb * 1.75, ry: o.rb * R * 1.9, fill: `url(#${e("shadow")})` }),
    /* @__PURE__ */ p.jsx("ellipse", { cx: 1, cy: o.bot + 2.5, rx: o.rb * 1.05, ry: o.rb * R * 1.1, fill: "rgba(60,35,18,0.32)", filter: `url(#${e("blur2")})` })
  ] });
}
function Rh({ g: t, id: e }) {
  const n = t.outer, s = t.inner;
  if (t.glass)
    return /* @__PURE__ */ p.jsxs("g", { children: [
      t.handle && /* @__PURE__ */ p.jsx($h, { d: t.handle, w: t.handleW, mask: e("hmask") }),
      /* @__PURE__ */ p.jsx("path", { d: je(s), fill: "rgba(255,250,240,0.2)" }),
      /* @__PURE__ */ p.jsx("path", { d: `M${-s.r} ${s.top}A${s.r} ${M(s.r * R)} 0 0 1 ${s.r} ${s.top}`, fill: "none", stroke: "rgba(90,58,32,0.3)", strokeWidth: 1 }),
      /* @__PURE__ */ p.jsx("path", { d: ut(s, -0.97, 0.04, 0.95), fill: "none", stroke: "rgba(90,58,32,0.12)", strokeWidth: 1.4 }),
      /* @__PURE__ */ p.jsx("path", { d: ut(s, 0.97, 0.04, 0.95), fill: "none", stroke: "rgba(90,58,32,0.12)", strokeWidth: 1.4 })
    ] });
  const i = cs[t.glaze ?? "cream"], o = n.rb * 0.86;
  return /* @__PURE__ */ p.jsxs("g", { children: [
    /* @__PURE__ */ p.jsx(jh, { g: t, id: e }),
    /* @__PURE__ */ p.jsx("path", { d: kt(o, n.bot - 2, o * 0.97, n.bot + 4), fill: `url(#${e(i.body)})` }),
    /* @__PURE__ */ p.jsx("path", { d: kt(o * 0.97, n.bot + 3, o * 0.97, n.bot + 4), fill: "rgba(60,35,18,0.35)" }),
    t.handle && /* @__PURE__ */ p.jsxs("g", { children: [
      /* @__PURE__ */ p.jsx("path", { d: t.handle, fill: "none", stroke: `url(#${e(i.handle)})`, strokeWidth: t.handleW, strokeLinecap: "round" }),
      /* @__PURE__ */ p.jsx("path", { d: t.handle, fill: "none", stroke: "rgba(255,255,255,0.55)", strokeWidth: t.handleW * 0.22, strokeLinecap: "round", transform: "translate(-0.6 -1.6)", filter: `url(#${e("blur1")})` }),
      /* @__PURE__ */ p.jsx("path", { d: t.handle, fill: "none", stroke: "rgba(60,30,15,0.18)", strokeWidth: t.handleW * 0.25, strokeLinecap: "round", transform: "translate(0.8 2)", filter: `url(#${e("blur1")})` })
    ] }),
    /* @__PURE__ */ p.jsx("ellipse", { cx: 0, cy: n.top, rx: n.r, ry: n.r * R, fill: i.rim }),
    /* @__PURE__ */ p.jsx("ellipse", { cx: 0, cy: s.top + 0.8, rx: s.r, ry: s.r * R, fill: `url(#${e(i.inner)})` }),
    /* @__PURE__ */ p.jsx("ellipse", { cx: 0, cy: s.top + 0.8, rx: s.r, ry: s.r * R, fill: "none", stroke: "rgba(90,60,35,0.18)", strokeWidth: 1 })
  ] });
}
function Lh({ g: t, id: e }) {
  const n = t.outer, s = t.inner, i = n.bot - n.top;
  if (t.glass)
    return /* @__PURE__ */ p.jsxs("g", { children: [
      /* @__PURE__ */ p.jsx("path", { d: `${je(n)}${je(s)}`, fillRule: "evenodd", fill: `url(#${e("glassWall")})` }),
      /* @__PURE__ */ p.jsx("path", { "data-k": "base", d: kt(s.rb, s.bot, n.rb, n.bot), fill: "transparent" }),
      /* @__PURE__ */ p.jsx("path", { d: kt(s.rb, s.bot, n.rb, n.bot), fill: `url(#${e("glassBase")})` }),
      /* @__PURE__ */ p.jsx("path", { d: `M${-s.rb} ${s.bot}A${s.rb} ${M(s.rb * R)} 0 0 0 ${s.rb} ${s.bot}`, fill: "none", stroke: "rgba(255,255,255,0.75)", strokeWidth: 1 }),
      /* @__PURE__ */ p.jsx("path", { d: `M${-n.rb + 1} ${n.bot - 1}A${n.rb - 1} ${M((n.rb - 1) * R)} 0 0 0 ${n.rb - 1} ${n.bot - 1}`, fill: "none", stroke: "rgba(255,255,255,0.7)", strokeWidth: 1.2 }),
      /* @__PURE__ */ p.jsx("path", { d: `M${-n.rb} ${n.bot}A${n.rb} ${M(n.rb * R)} 0 0 0 ${n.rb} ${n.bot}`, fill: "none", stroke: "rgba(80,50,28,0.4)", strokeWidth: 0.9 }),
      /* @__PURE__ */ p.jsx("path", { d: nn(n), fill: `url(#${e("glassFace")})` }),
      /* @__PURE__ */ p.jsx("path", { d: ut(n, -0.78, 0.05, 0.86), fill: "none", stroke: "white", strokeOpacity: 0.55, strokeWidth: 5, strokeLinecap: "round", filter: `url(#${e("blur2")})` }),
      /* @__PURE__ */ p.jsx("path", { d: ut(n, -0.8, 0.07, 0.8), fill: "none", stroke: "white", strokeOpacity: 0.9, strokeWidth: 1.1, strokeLinecap: "round" }),
      /* @__PURE__ */ p.jsx("path", { d: ut(n, 0.84, 0.08, 0.42), fill: "none", stroke: "white", strokeOpacity: 0.6, strokeWidth: 1.6, strokeLinecap: "round" }),
      /* @__PURE__ */ p.jsx("path", { d: ut(n, 0.86, 0.55, 0.62), fill: "none", stroke: "white", strokeOpacity: 0.5, strokeWidth: 1.2, strokeLinecap: "round" }),
      /* @__PURE__ */ p.jsx("ellipse", { cx: 0, cy: n.top, rx: n.r, ry: n.r * R, fill: "none", stroke: "rgba(255,255,255,0.95)", strokeWidth: 1.4 }),
      /* @__PURE__ */ p.jsx("ellipse", { cx: 0, cy: s.top + 0.6, rx: s.r, ry: s.r * R, fill: "none", stroke: "rgba(90,58,32,0.32)", strokeWidth: 0.8 }),
      /* @__PURE__ */ p.jsx("path", { d: `M${-n.r} ${n.top + 1.4}A${n.r} ${M(n.r * R)} 0 0 0 ${n.r} ${n.top + 1.4}`, fill: "none", stroke: "rgba(90,58,32,0.26)", strokeWidth: 0.9 })
    ] });
  const o = cs[t.glaze ?? "cream"];
  return /* @__PURE__ */ p.jsxs("g", { children: [
    /* @__PURE__ */ p.jsx("path", { d: nn(n), fill: `url(#${e(o.body)})` }),
    /* @__PURE__ */ p.jsx("path", { d: nn(n), fill: `url(#${e(o.ao)})` }),
    /* @__PURE__ */ p.jsx("path", { d: ut(n, 0.93, 0.35, 0.92), fill: "none", stroke: "rgba(255,236,214,0.4)", strokeWidth: 3, filter: `url(#${e("blur2")})` }),
    /* @__PURE__ */ p.jsx("path", { d: ut(n, -0.6, 0.12, 0.78), fill: "none", stroke: "white", strokeOpacity: t.glaze === "terra" ? 0.45 : 0.85, strokeWidth: i * 0.09, strokeLinecap: "round", filter: `url(#${e("blur3")})` }),
    /* @__PURE__ */ p.jsx("path", { d: ut(n, -0.62, 0.16, 0.5), fill: "none", stroke: "white", strokeOpacity: 0.8, strokeWidth: 1.4, strokeLinecap: "round", filter: `url(#${e("blur05")})` }),
    /* @__PURE__ */ p.jsx("path", { d: kt(n.r, n.top, s.r, s.top + 0.8), fill: o.rim }),
    /* @__PURE__ */ p.jsx("path", { d: `M${-s.r} ${s.top + 0.8}A${s.r} ${M(s.r * R)} 0 0 0 ${s.r} ${s.top + 0.8}`, fill: "none", stroke: "rgba(90,60,35,0.22)", strokeWidth: 0.8 }),
    /* @__PURE__ */ p.jsx("path", { d: `M${-n.r + 2} ${n.top + 0.6}A${n.r - 2} ${M((n.r - 2) * R)} 0 0 0 ${n.r - 2} ${n.top + 0.6}`, fill: "none", stroke: "white", strokeOpacity: 0.9, strokeWidth: 0.9 }),
    o.rimLine && /* @__PURE__ */ p.jsx("path", { d: `M${-n.r + 0.6} ${n.top + 1.6}A${n.r - 0.6} ${M((n.r - 0.6) * R)} 0 0 0 ${n.r - 0.6} ${n.top + 1.6}`, fill: "none", stroke: o.rimLine, strokeOpacity: 0.85, strokeWidth: 1.7 }),
    t.glaze === "terra" && /* @__PURE__ */ p.jsx("path", { d: `M${-n.r} ${n.top + 3}A${n.r} ${M(n.r * R)} 0 0 0 ${n.r} ${n.top + 3}`, fill: "none", stroke: "#f3e7d6", strokeOpacity: 0.9, strokeWidth: 2.6 })
  ] });
}
function $h({ d: t, w: e, mask: n }) {
  return /* @__PURE__ */ p.jsxs("g", { children: [
    /* @__PURE__ */ p.jsxs("mask", { id: n, maskUnits: "userSpaceOnUse", x: -200, y: -300, width: 400, height: 400, children: [
      /* @__PURE__ */ p.jsx("path", { d: t, fill: "none", stroke: "white", strokeWidth: e, strokeLinecap: "round" }),
      /* @__PURE__ */ p.jsx("path", { d: t, fill: "none", stroke: "black", strokeWidth: e - 2.8, strokeLinecap: "round" })
    ] }),
    /* @__PURE__ */ p.jsx("path", { d: t, fill: "none", stroke: "rgba(255,250,240,0.35)", strokeWidth: e, strokeLinecap: "round" }),
    /* @__PURE__ */ p.jsx("path", { d: t, fill: "none", stroke: "rgba(80,52,30,0.5)", strokeWidth: e, strokeLinecap: "round", mask: `url(#${n})` }),
    /* @__PURE__ */ p.jsx("path", { d: t, fill: "none", stroke: "rgba(150,110,75,0.12)", strokeWidth: e * 0.3, strokeLinecap: "round" }),
    /* @__PURE__ */ p.jsx("path", { d: t, fill: "none", stroke: "white", strokeOpacity: 0.95, strokeWidth: 1.1, strokeLinecap: "round", transform: "translate(-1.6 -1.2)" })
  ] });
}
function Fh({ g: t, id: e }) {
  const n = t.shadowR;
  return /* @__PURE__ */ p.jsxs("g", { "data-k": "shadow", children: [
    /* @__PURE__ */ p.jsx("ellipse", { cx: 10, cy: 4, rx: n * 1.25, ry: n * R * 1.3, fill: `url(#${e("shadow")})`, opacity: t.glass ? 0.55 : 0.8 }),
    /* @__PURE__ */ p.jsx("ellipse", { cx: 2, cy: t.saucer ? 6 : 1, rx: n * 0.98, ry: n * R * 0.9, fill: "rgba(62,34,14,0.36)", filter: `url(#${e("blur3")})`, opacity: t.glass ? 0.6 : 1 }),
    t.glass && /* @__PURE__ */ p.jsx("ellipse", { cx: n * 0.55, cy: 5, rx: n * 0.55, ry: n * R * 0.5, fill: "rgba(232,160,90,0.3)", filter: `url(#${e("blur3")})` })
  ] });
}
const Ih = "M0 0.78C-0.5 0.36 -0.98 0.02 -0.68 -0.48C-0.46 -0.82 -0.1 -0.74 0 -0.4C0.1 -0.74 0.46 -0.82 0.68 -0.48C0.98 0.02 0.5 0.36 0 0.78Z", Bh = T.memo(function({
  cup: e,
  id: n,
  register: s
}) {
  const i = e.item, o = Ft[i.vessel] ?? Ft.cup, r = e.key, a = n(`liq${r}`), l = n(`clip-${i.vessel}`), c = n(`sclip${r}`), u = i.foam ? n("foamBand") : n("cremaBand");
  return /* @__PURE__ */ p.jsxs("g", { ref: (h) => s(r, h), children: [
    /* @__PURE__ */ p.jsxs("defs", { children: [
      /* @__PURE__ */ p.jsx("linearGradient", { id: a, gradientUnits: "userSpaceOnUse", x1: 0, y1: o.inner.bot, x2: 0, y2: o.inner.top, children: Array.from({ length: K }, (h, d) => /* @__PURE__ */ p.jsx("stop", { "data-k": "stop", offset: (d + 0.5) / K, stopColor: "#3a1e0e" }, d)) }),
      [0, 1].map((h) => /* @__PURE__ */ p.jsxs("linearGradient", { id: n(`st${r}-${h}`), gradientUnits: "userSpaceOnUse", x1: 0, y1: -ht, x2: 0, y2: -ht + 70, children: [
        /* @__PURE__ */ p.jsx("stop", { "data-k": `sstop${h}`, offset: 0, stopOpacity: 0, stopColor: "#3a1e0e" }),
        /* @__PURE__ */ p.jsx("stop", { "data-k": `sstop${h}`, offset: 1, stopColor: "#3a1e0e" })
      ] }, h)),
      /* @__PURE__ */ p.jsx("clipPath", { id: c, children: /* @__PURE__ */ p.jsx("path", { "data-k": "sclip" }) })
    ] }),
    /* @__PURE__ */ p.jsx(Fh, { g: o, id: n }),
    /* @__PURE__ */ p.jsxs("g", { "data-k": "body", transform: `translate(${De + 160} ${ht})`, children: [
      /* @__PURE__ */ p.jsx(Rh, { g: o, id: n }),
      /* @__PURE__ */ p.jsxs("g", { "data-k": "liquid", opacity: 0, clipPath: `url(#${l})`, children: [
        /* @__PURE__ */ p.jsx("path", { "data-k": "liq", fill: `url(#${a})` }),
        o.glass && /* @__PURE__ */ p.jsx("path", { "data-k": "depth", fill: `url(#${n("liqDepth")})` }),
        o.glass && /* @__PURE__ */ p.jsx("g", { filter: `url(#${n("blur3")})`, fill: "none", strokeLinecap: "round", children: Array.from({ length: vo }, (h, d) => /* @__PURE__ */ p.jsx("path", { "data-k": "tendril", strokeWidth: 6 - d }, d)) }),
        /* @__PURE__ */ p.jsx("path", { "data-k": "foam", fill: `url(#${u})` }),
        /* @__PURE__ */ p.jsx("path", { "data-k": "surf", fill: "#3a1e0e" }),
        /* @__PURE__ */ p.jsx("g", { clipPath: `url(#${c})`, children: /* @__PURE__ */ p.jsxs("g", { "data-k": "decor", children: [
          /* @__PURE__ */ p.jsx("circle", { r: 1.1, fill: `url(#${n("sheen")})` }),
          i.crema && /* @__PURE__ */ p.jsxs("g", { "data-k": "crema", opacity: 0, children: [
            /* @__PURE__ */ p.jsx("circle", { r: 1.1, fill: `url(#${n("crema")})` }),
            /* @__PURE__ */ p.jsx("ellipse", { cx: -0.3, cy: -0.1, rx: 0.16, ry: 0.1, fill: "rgba(110,55,22,0.35)" }),
            /* @__PURE__ */ p.jsx("ellipse", { cx: 0.28, cy: 0.25, rx: 0.12, ry: 0.08, fill: "rgba(110,55,22,0.3)" }),
            /* @__PURE__ */ p.jsx("ellipse", { cx: 0.1, cy: -0.4, rx: 0.1, ry: 0.06, fill: "rgba(110,55,22,0.25)" }),
            /* @__PURE__ */ p.jsx("ellipse", { cx: -0.1, cy: 0.1, rx: 0.42, ry: 0.32, fill: "rgba(240,195,130,0.22)" }),
            Vi.map(([h, d, x], f) => /* @__PURE__ */ p.jsx("circle", { cx: h, cy: d, r: x, fill: "rgba(255,236,205,0.55)" }, f))
          ] }),
          !!i.foam && i.art !== "heart" && /* @__PURE__ */ p.jsxs("g", { "data-k": "foamtop", opacity: 0, children: [
            /* @__PURE__ */ p.jsx("circle", { r: 1.1, fill: `url(#${n("foamTop")})` }),
            Vi.map(([h, d, x], f) => /* @__PURE__ */ p.jsx("circle", { cx: h * 0.95, cy: d, r: x * 0.8, fill: "rgba(200,170,130,0.35)" }, f))
          ] }),
          i.art === "heart" && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
            /* @__PURE__ */ p.jsx("g", { "data-k": "foamtop", opacity: 0, children: /* @__PURE__ */ p.jsx("circle", { r: 1.1, fill: `url(#${n("artBase")})` }) }),
            /* @__PURE__ */ p.jsxs("g", { "data-k": "art", opacity: 0, children: [
              /* @__PURE__ */ p.jsx("path", { d: Ih, fill: `url(#${n("heart")})`, transform: "scale(0.62)" }),
              /* @__PURE__ */ p.jsx("path", { d: "M0 0.48C0.02 0.2 -0.02 -0.05 0 -0.28", fill: "none", stroke: "rgba(170,110,60,0.35)", strokeWidth: 0.035, transform: "scale(0.62)" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("g", { fill: "none", strokeLinecap: "round", filter: `url(#${n("blur1")})`, children: [
          /* @__PURE__ */ p.jsx("path", { "data-k": "swirl", strokeWidth: 3.2 }),
          /* @__PURE__ */ p.jsx("path", { "data-k": "swirl", strokeWidth: 2.2 })
        ] }),
        /* @__PURE__ */ p.jsx("g", { fill: "none", stroke: "rgba(255,250,240,1)", strokeWidth: 0.9, children: Array.from({ length: Be }, (h, d) => /* @__PURE__ */ p.jsx("ellipse", { "data-k": "ripple", opacity: 0 }, d)) })
      ] }),
      [0, 1].map((h) => /* @__PURE__ */ p.jsxs("g", { children: [
        /* @__PURE__ */ p.jsx("path", { "data-k": `stream${h}`, fill: `url(#${n(`st${r}-${h}`)})` }),
        /* @__PURE__ */ p.jsx("path", { "data-k": `streamhi${h}`, fill: "none", stroke: "white", strokeWidth: 0.9, strokeLinecap: "round" })
      ] }, h)),
      /* @__PURE__ */ p.jsx("g", { children: Array.from({ length: ls }, (h, d) => /* @__PURE__ */ p.jsx("circle", { "data-k": "part", r: 0 }, d)) }),
      /* @__PURE__ */ p.jsx(Lh, { g: o, id: n })
    ] })
  ] });
}), Vi = [
  [-0.82, -0.3, 0.035],
  [-0.88, 0.1, 0.028],
  [-0.7, 0.55, 0.03],
  [0.86, -0.2, 0.03],
  [0.8, 0.4, 0.036],
  [0.55, 0.72, 0.026],
  [-0.4, -0.84, 0.024],
  [0.3, -0.88, 0.028],
  [-0.2, 0.9, 0.025]
];
function Oh({ id: t }) {
  const e = (i, o, r = !1) => /* @__PURE__ */ p.jsx("linearGradient", { id: t(i), x1: 0, y1: 0, x2: r ? 0 : 1, y2: r ? 1 : 0, children: o.map(([a, l]) => /* @__PURE__ */ p.jsx("stop", { offset: a, stopColor: l }, a)) }), n = (i, o, r = 0.5, a = 0.5, l = 0.5) => /* @__PURE__ */ p.jsx("radialGradient", { id: t(i), cx: r, cy: a, r: l, children: o.map(([c, u]) => /* @__PURE__ */ p.jsx("stop", { offset: c, stopColor: u }, c)) }), s = (i, o) => /* @__PURE__ */ p.jsx("filter", { id: t(i), x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ p.jsx("feGaussianBlur", { stdDeviation: o }) });
  return /* @__PURE__ */ p.jsxs("defs", { children: [
    s("blur05", 0.5),
    s("blur1", 1),
    s("blur2", 2),
    s("blur3", 3.2),
    e("cerCream", [[0, "#c3b49e"], [0.1, "#ddd1c0"], [0.3, "#f6f0e6"], [0.42, "#fffdf9"], [0.62, "#f1e8dc"], [0.85, "#d7c9b6"], [1, "#bba98f"]]),
    e("cerTerra", [[0, "#7c3f22"], [0.12, "#9a5230"], [0.32, "#c27447"], [0.44, "#cf8556"], [0.64, "#ac6136"], [0.86, "#8b4a2a"], [1, "#723a20"]]),
    e("handleCream", [[0, "#efe6da"], [0.5, "#d9ccba"], [1, "#b5a48c"]]),
    e("handleTerra", [[0, "#b8693e"], [0.5, "#9a5230"], [1, "#743b20"]]),
    e("edgeCream", [[0, "#b9a990"], [0.3, "#e7ded1"], [0.55, "#ddd2c2"], [1, "#b7a68d"]]),
    e("edgeTerra", [[0, "#7a3e22"], [0.3, "#b8693e"], [0.55, "#a65d35"], [1, "#743b20"]]),
    ["aoCream", "aoTerra"].map((i) => /* @__PURE__ */ p.jsxs("linearGradient", { id: t(i), x1: 0, y1: 0, x2: 0, y2: 1, children: [
      /* @__PURE__ */ p.jsx("stop", { offset: 0, stopColor: i === "aoCream" ? "rgb(96,64,38)" : "rgb(70,30,12)", stopOpacity: 0 }),
      /* @__PURE__ */ p.jsx("stop", { offset: 0.55, stopColor: i === "aoCream" ? "rgb(96,64,38)" : "rgb(70,30,12)", stopOpacity: 0 }),
      /* @__PURE__ */ p.jsx("stop", { offset: 1, stopColor: i === "aoCream" ? "rgb(96,64,38)" : "rgb(70,30,12)", stopOpacity: i === "aoCream" ? 0.28 : 0.38 })
    ] }, i)),
    n("innerCream", [[0, "#fffdf9"], [0.55, "#f1e9dd"], [0.85, "#dccfbd"], [1, "#c9b9a2"]], 0.42, 0.18, 0.75),
    n("saucerCream", [[0, "#fffefb"], [0.5, "#f6f0e7"], [0.8, "#e9e0d3"], [0.93, "#ddd1c0"], [1, "#efe7dc"]], 0.45, 0.4, 0.55),
    n("shadow", [[0, "rgba(70,40,18,0.48)"], [0.5, "rgba(70,40,18,0.18)"], [1, "rgba(70,40,18,0)"]]),
    e("glassWall", [[0, "rgba(72,44,22,0.5)"], [0.05, "rgba(255,255,255,0.62)"], [0.13, "rgba(255,255,255,0.16)"], [0.5, "rgba(255,255,255,0.08)"], [0.84, "rgba(255,255,255,0.16)"], [0.94, "rgba(255,255,255,0.58)"], [1, "rgba(72,44,22,0.48)"]]),
    e("glassFace", [[0, "rgba(255,255,255,0)"], [0.1, "rgba(255,255,255,0.22)"], [0.18, "rgba(255,255,255,0.05)"], [0.6, "rgba(255,255,255,0)"], [0.88, "rgba(255,255,255,0.14)"], [1, "rgba(255,255,255,0)"]]),
    /* @__PURE__ */ p.jsxs("linearGradient", { id: t("glassBase"), x1: 0, y1: 0, x2: 0, y2: 1, children: [
      /* @__PURE__ */ p.jsx("stop", { offset: 0, stopColor: "white", stopOpacity: 0.35 }),
      /* @__PURE__ */ p.jsx("stop", { offset: 0.5, stopColor: "white", stopOpacity: 0.05 }),
      /* @__PURE__ */ p.jsx("stop", { offset: 1, stopColor: "rgb(90,66,46)", stopOpacity: 0.18 })
    ] }),
    e("liqDepth", [[0, "rgba(18,8,3,0.55)"], [0.16, "rgba(18,8,3,0.1)"], [0.38, "rgba(255,230,200,0.08)"], [0.62, "rgba(18,8,3,0)"], [0.84, "rgba(18,8,3,0.12)"], [1, "rgba(18,8,3,0.6)"]]),
    n("sheen", [[0, "rgba(255,255,255,0.28)"], [0.6, "rgba(255,255,255,0.06)"], [1, "rgba(255,255,255,0)"]], 0.38, 0.3, 0.6),
    n("crema", [[0, "#dba468"], [0.45, "#c88a4f"], [0.8, "#a0602f"], [1, "#6e3a1a"]], 0.45, 0.42, 0.5),
    n("foamTop", [[0, "#fffdf8"], [0.6, "#f7efe3"], [0.86, "#ead9c1"], [1, "#cfae86"]]),
    n("artBase", [[0, "#b87d4c"], [0.55, "#a66b3d"], [0.74, "#8d552c"], [0.83, "#c39467"], [0.88, "#f1e5d3"], [1, "#f7efe3"]]),
    n("heart", [[0, "#fffdf9"], [0.7, "#f8f0e4"], [1, "#e8d6bb"]]),
    /* @__PURE__ */ p.jsxs("linearGradient", { id: t("foamBand"), x1: 0, y1: 1, x2: 0, y2: 0, children: [
      /* @__PURE__ */ p.jsx("stop", { offset: 0, stopColor: "#dcc19e" }),
      /* @__PURE__ */ p.jsx("stop", { offset: 0.5, stopColor: "#f3e8d8" }),
      /* @__PURE__ */ p.jsx("stop", { offset: 1, stopColor: "#fdf9f2" })
    ] }),
    /* @__PURE__ */ p.jsxs("linearGradient", { id: t("cremaBand"), x1: 0, y1: 1, x2: 0, y2: 0, children: [
      /* @__PURE__ */ p.jsx("stop", { offset: 0, stopColor: "#7a4220" }),
      /* @__PURE__ */ p.jsx("stop", { offset: 1, stopColor: "#c98a51" })
    ] }),
    Object.keys(Ft).map((i) => /* @__PURE__ */ p.jsx("clipPath", { id: t(`clip-${i}`), children: /* @__PURE__ */ p.jsx("path", { d: je(Ft[i].inner) }) }, i))
  ] });
}
function Uh({
  items: t = bh,
  defaultValue: e,
  value: n,
  onValueChange: s,
  className: i
}) {
  const [o, r] = T.useState(e ?? t[0]?.id), a = n ?? o, l = t.find((P) => P.id === a) ?? t[0], c = vh() ?? !1, u = T.useId().replace(/[^a-zA-Z0-9_-]/g, ""), h = T.useCallback((P) => `cpm${u}-${P}`, [u]), [d, x] = T.useState([]), f = T.useRef(/* @__PURE__ */ new Map()), y = T.useRef([]), m = T.useRef(null), g = T.useRef(0), v = T.useRef(null), b = T.useRef(!0), w = T.useRef(1), S = T.useRef(null), D = T.useRef([]), E = T.useCallback(() => {
    if (g.current || !b.current || document.hidden) return;
    let P = performance.now();
    const L = (j) => {
      const $ = Math.min(0.03333333333333333, (j - P) / 1e3);
      P = j;
      const V = j / 1e3;
      let N = !1, Oe = !1;
      for (const F of f.current.values())
        N = Vh(F, $, V, y.current) || N, F.mode === "fall" && F.y - F.pivot - F.geo.height > ae + 20 || F.mode === "fadeOut" && F.opacity <= 0 ? (f.current.delete(F.key), Oe = !0) : Ci(F, V);
      const O = y.current;
      for (let F = O.length - 1; F >= 0; F--) {
        const U = O[F];
        U.vy += xo * $, U.x += U.vx * $, U.y += U.vy * $, U.y > ae + 20 && O.splice(F, 1);
      }
      const q = m.current?.children;
      if (q)
        for (let F = 0; F < q.length; F++) {
          const U = O[F], vt = q[F];
          if (!U) {
            vt.setAttribute("r", "0");
            continue;
          }
          vt.setAttribute("cx", M(U.x).toString()), vt.setAttribute("cy", M(U.y).toString()), vt.setAttribute("r", U.r.toFixed(2)), vt.setAttribute("fill", U.col);
        }
      O.length && (N = !0), Oe && x((F) => F.filter((U) => f.current.has(U.key))), g.current = N ? requestAnimationFrame(L) : 0;
    };
    g.current = requestAnimationFrame(L);
  }, []);
  T.useEffect(() => () => {
    cancelAnimationFrame(g.current), g.current = 0;
  }, []), T.useEffect(() => {
    const P = () => {
      cancelAnimationFrame(g.current), g.current = 0, b.current && !document.hidden && E();
    }, L = new IntersectionObserver(([j]) => {
      b.current = j.isIntersecting, P();
    });
    return v.current && L.observe(v.current), document.addEventListener("visibilitychange", P), () => {
      L.disconnect(), document.removeEventListener("visibilitychange", P), cancelAnimationFrame(g.current), g.current = 0;
    };
  }, [E]), T.useEffect(() => {
    if (!l) return;
    if ([...f.current.values()].some((V) => V.mode !== "fall" && V.mode !== "fadeOut") && S.current === l.id) {
      E();
      return;
    }
    S.current = l.id;
    let L = 0;
    for (const V of [...f.current.values()]) {
      if (V.mode === "fall" || V.mode === "fadeOut") {
        L++;
        continue;
      }
      if (V.mode === "wait") {
        f.current.delete(V.key);
        continue;
      }
      if (c) {
        V.mode = "fadeOut";
        continue;
      }
      const N = V.geo.height * 0.45 - V.pivot;
      V.x += N * Math.sin(V.a), V.y += N - N * Math.cos(V.a), V.pivot += N, V.mode = "fall", V.vy = -150 - Math.random() * 60, V.vx = -30 - Math.random() * 50 + V.vx * 0.3, V.va = (Math.random() < 0.75 ? -1 : 1) * (1.3 + Math.random() * 1.4) + V.va * 0.3, V.pours = [], V.next = V.item.layers.length, L++;
    }
    const j = [...f.current.values()].filter((V) => V.mode === "fall");
    for (const V of j.slice(0, Math.max(0, j.length - 3))) f.current.delete(V.key);
    const $ = Sh(w.current++, l);
    c ? ($.mode = "fadeIn", $.opacity = 0, $.x = jt, kh($)) : $.wait = L ? 0.14 : 0.05, f.current.set($.key, $), x((V) => [...V.filter((N) => f.current.has(N.key)), { key: $.key, item: l }]), E();
  }, [l, c, E]);
  const C = T.useCallback(
    (P, L) => {
      const j = f.current.get(P);
      j && L && (j.el = Dh(L), j.dirty = !0, Ci(j, performance.now() / 1e3), E());
    },
    [E]
  ), W = (P) => {
    P !== a && (n === void 0 && r(P), s?.(P));
  }, k = (P) => {
    const L = t.findIndex(($) => $.id === a);
    let j = -1;
    P.key === "ArrowDown" || P.key === "ArrowRight" ? j = (L + 1) % t.length : P.key === "ArrowUp" || P.key === "ArrowLeft" ? j = (L - 1 + t.length) % t.length : P.key === "Home" ? j = 0 : P.key === "End" && (j = t.length - 1), !(j < 0) && (P.preventDefault(), W(t[j].id), D.current[j]?.focus());
  };
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      ref: v,
      "data-coffee-pour": !0,
      className: [
        "relative grid w-full items-center gap-5 rounded-[32px] bg-[#0a211b] p-4 text-[#f4efe6] sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-10 sm:p-10",
        i
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ p.jsx(
          "div",
          {
            role: "radiogroup",
            "aria-label": "Coffee menu",
            onKeyDown: k,
            className: "grid grid-cols-2 gap-1.5 sm:flex sm:flex-col sm:gap-1",
            children: t.map((P, L) => {
              const j = P.id === l?.id;
              return /* @__PURE__ */ p.jsxs(
                "button",
                {
                  ref: ($) => {
                    D.current[L] = $;
                  },
                  type: "button",
                  role: "radio",
                  "aria-checked": j,
                  tabIndex: j ? 0 : -1,
                  onPointerEnter: ($) => $.pointerType === "mouse" && W(P.id),
                  onFocus: () => W(P.id),
                  onClick: () => W(P.id),
                  className: "group relative rounded-2xl px-3.5 py-3 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#d6b25e]/60 sm:px-6 sm:py-4",
                  children: [
                    j && /* @__PURE__ */ p.jsx(
                      xh.span,
                      {
                        layoutId: `${u}-pill`,
                        className: "absolute inset-0 rounded-2xl bg-[#164438] shadow-[inset_0_1px_0_rgba(244,239,230,0.12),inset_0_0_0_1px_rgba(214,178,94,0.4),0_14px_30px_-16px_rgba(0,0,0,0.5)]",
                        transition: c ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }
                      }
                    ),
                    /* @__PURE__ */ p.jsx("span", { className: "relative flex", children: /* @__PURE__ */ p.jsxs("span", { className: "flex min-w-0 flex-col", children: [
                      /* @__PURE__ */ p.jsx(
                        "span",
                        {
                          className: [
                            "truncate text-[19px] leading-tight font-medium tracking-[-0.025em] transition-colors duration-300 sm:text-[34px] sm:leading-[1.1]",
                            j ? "text-[#f1d58b]" : "text-[#b9c9c6] group-hover:text-[#f4efe6]"
                          ].join(" "),
                          children: P.name
                        }
                      ),
                      P.subtitle && /* @__PURE__ */ p.jsx(
                        "span",
                        {
                          className: [
                            "mt-0.5 truncate text-[11.5px] tracking-tight transition-colors duration-300 sm:mt-1 sm:text-[13px]",
                            j ? "text-[#f4efe6]" : "text-[#b9c9c6]"
                          ].join(" "),
                          children: P.subtitle
                        }
                      )
                    ] }) })
                  ]
                },
                P.id
              );
            })
          }
        ),
        /* @__PURE__ */ p.jsxs("div", { className: "relative aspect-[9/10] w-full overflow-hidden rounded-[26px] bg-[radial-gradient(80%_62%_at_50%_42%,#245444_0%,#164438_45%,#103c30_80%,#0a211b_100%)] shadow-[inset_0_1px_0_rgba(244,239,230,0.12),inset_0_0_0_1px_rgba(214,178,94,0.18),0_30px_60px_-30px_rgba(0,0,0,0.5)]", children: [
          /* @__PURE__ */ p.jsxs("svg", { viewBox: `0 0 ${De} ${ae}`, className: "absolute inset-0 h-full w-full", "aria-hidden": "true", children: [
            /* @__PURE__ */ p.jsx(Oh, { id: h }),
            /* @__PURE__ */ p.jsxs("linearGradient", { id: h("table"), x1: 0, y1: 0, x2: 0, y2: 1, children: [
              /* @__PURE__ */ p.jsx("stop", { offset: 0, stopColor: "rgb(110,66,30)", stopOpacity: 0 }),
              /* @__PURE__ */ p.jsx("stop", { offset: 1, stopColor: "rgb(110,66,30)", stopOpacity: 0.14 })
            ] }),
            /* @__PURE__ */ p.jsxs("radialGradient", { id: h("pool"), children: [
              /* @__PURE__ */ p.jsx("stop", { offset: 0, stopColor: "rgb(255,248,236)", stopOpacity: 0.45 }),
              /* @__PURE__ */ p.jsx("stop", { offset: 1, stopColor: "rgb(255,248,236)", stopOpacity: 0 })
            ] }),
            /* @__PURE__ */ p.jsx("rect", { x: 0, y: ht - 36, width: De, height: ae - ht + 36, fill: `url(#${h("table")})` }),
            /* @__PURE__ */ p.jsx("ellipse", { cx: jt, cy: ht + 2, rx: 170, ry: 46, fill: `url(#${h("pool")})` }),
            [...d].reverse().map((P) => /* @__PURE__ */ p.jsx(Bh, { cup: P, id: h, register: C }, P.key)),
            /* @__PURE__ */ p.jsx("g", { ref: m, children: Array.from({ length: jn }, (P, L) => /* @__PURE__ */ p.jsx("circle", { r: 0 }, L)) })
          ] }),
          /* @__PURE__ */ p.jsx("p", { "aria-live": "polite", className: "sr-only", children: l ? `${l.name}: ${l.description ?? l.subtitle ?? ""}` : "" })
        ] })
      ]
    }
  );
}
export {
  Uh as CoffeePourMenu,
  bh as DEFAULT_COFFEE_ITEMS,
  Uh as default
};
