import { r as i, j as n } from "./menu-conveyor-Bf1qyxBe.js";
const g = 5, X = 80, U = 174;
function b(s, l, a) {
  return s < l ? l : s > a ? a : s;
}
function B(s, l) {
  return s < 640 ? 0.5 : 1;
}
function re(s, l) {
  if (s <= 0 || l <= 0) return 0;
  const a = s < 640;
  return Math.round(Math.min(s * (a ? 0.94 : 0.8), l * 0.9 * B(s), 980));
}
function se(s, l) {
  const a = Math.abs(s), p = a < 1 ? a : 1, L = s < 0 ? -1 : 1, j = a > 1 ? a - 1 : 0, R = L * (p * (l * 0.5 + l * 0.03) + j * l * 0.055), T = -(p * l * 0.42 + j * l * 0.06), A = p * p, o = s > 0 ? g + (U - g) * A : g + (X - g) * p, x = s < 0 ? -(g + (U - g) * A) : -(g + (X - g) * p), d = (Y) => b((Math.abs(Y) - g) / 95, 0, 0.62);
  return {
    x: R,
    z: T,
    left: o,
    right: x,
    shadeLeft: d(o),
    shadeRight: d(x),
    opacity: b(7.2 - a, 0, 1),
    hidden: a > 7.2
  };
}
function ae(s, l, a) {
  return b(Math.round(s + b(l * 0.18, -1.5, 1.5)), 0, Math.max(0, a - 1));
}
function ne(s) {
  return s <= 0 ? 0 : Math.round(560 * Math.sqrt(Math.min(s, 12)));
}
function ce(s) {
  return s < 0.5 ? 4 * s * s * s : 1 - Math.pow(-2 * s + 2, 3) / 2;
}
function ie(s) {
  return 1 - Math.pow(1 - s, 3);
}
const oe = '@font-face{font-family:JSC Hand;font-style:normal;font-weight:600;font-display:swap;src:url(data:font/woff2;base64,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) format("woff2")}', le = oe + ".jsc-root{position:relative;width:100%;display:grid;grid-template-rows:auto minmax(0,1fr) auto;overflow:hidden;background:radial-gradient(120% 80% at 50% 35%,#3f4565 0%,#363b58 55%,#2d3149 100%);color:#f4f2ee;font-family:ui-rounded,'SF Pro Rounded',system-ui,-apple-system,'Segoe UI',sans-serif;outline:none;user-select:none;-webkit-user-select:none;container-type:inline-size}.jsc-root:focus-visible{box-shadow:inset 0 0 0 2px rgba(255,255,255,.55)}.jsc-top{position:relative;padding:max(14px,1.6cqi) max(14px,1.8cqi) 0;display:flex;justify-content:space-between;align-items:flex-start}.jsc-group{display:flex;gap:max(8px,.8cqi)}.jsc-chip{display:grid;place-items:center;width:clamp(34px,3.4cqi,46px);height:clamp(34px,3.4cqi,46px);border-radius:50%;border:0;padding:0;cursor:pointer;color:#f4f2ee;background:rgba(255,255,255,.08);box-shadow:inset 0 0 0 1px rgba(255,255,255,.07);transition:background .2s}.jsc-chip:hover{background:rgba(255,255,255,.16)}.jsc-chip[aria-pressed=true]{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.85)}.jsc-chip svg{width:46%;height:46%}.jsc-head{position:absolute;left:50%;top:max(40px,4.4cqi);transform:translateX(-50%);text-align:center;white-space:nowrap;pointer-events:none}.jsc-title{margin:0;font-weight:700;font-size:clamp(22px,2.7cqi,40px);letter-spacing:-.01em;line-height:1.1}.jsc-meta{display:inline-flex;align-items:center;gap:.45em;margin-top:.55em;font-size:clamp(11px,1cqi,14px);font-weight:600;opacity:.82}.jsc-meta svg{width:1.15em;height:1.15em}.jsc-stage{position:relative;margin-top:clamp(64px,7cqi,104px);touch-action:pan-y;cursor:grab}.jsc-stage[data-drag]{cursor:grabbing}.jsc-floor{position:absolute;left:50%;top:50%;width:calc(var(--jsc-w) * 1.55);height:calc(var(--jsc-h) * .62);transform:translate(-50%,calc(var(--jsc-h) * .2));background:#20243a;opacity:.55;filter:blur(calc(var(--jsc-w) * .03));border-radius:calc(var(--jsc-w) * .04);pointer-events:none}.jsc-view{position:absolute;inset:0;perspective:calc(var(--jsc-w) * 2.3);perspective-origin:50% 46%}.jsc-scene{position:absolute;left:50%;top:50%;width:0;height:0;transform-style:preserve-3d}.jsc-item{position:absolute;left:0;top:0;transform-style:preserve-3d;visibility:hidden}.jsc-page{position:absolute;top:calc(var(--jsc-h) * -.5);width:calc(var(--jsc-w) * .5);height:var(--jsc-h);overflow:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden;background:#efebe3;box-shadow:0 1px 0 rgba(255,255,255,.35) inset}.jsc-page[data-side=l]{left:calc(var(--jsc-w) * -.5);transform-origin:100% 50%;border-radius:calc(var(--jsc-w) * .034) 0 0 calc(var(--jsc-w) * .034)}.jsc-page[data-side=r]{left:0;transform-origin:0 50%;border-radius:0 calc(var(--jsc-w) * .034) calc(var(--jsc-w) * .034) 0}.jsc-sheet{position:absolute;top:0;width:var(--jsc-w);height:var(--jsc-h);pointer-events:none}.jsc-page[data-side=l]>.jsc-sheet{left:0}.jsc-page[data-side=r]>.jsc-sheet{left:calc(var(--jsc-w) * -.5)}.jsc-bg{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;display:block}.jsc-gutter{position:absolute;inset:0}.jsc-page[data-side=l] .jsc-gutter{background:linear-gradient(90deg,rgba(255,255,255,0) 82%,rgba(20,18,30,.08) 93%,rgba(20,18,30,.26))}.jsc-page[data-side=r] .jsc-gutter{background:linear-gradient(270deg,rgba(255,255,255,0) 82%,rgba(20,18,30,.08) 93%,rgba(20,18,30,.26))}.jsc-shade{position:absolute;inset:0;background:#141729;opacity:var(--jsc-s,0)}.jsc-print{position:absolute;margin:0;background:#fbfaf6;padding:3.5% 3.5% 0;box-shadow:0 .4em 1em rgba(18,16,30,.28),0 .1em .2em rgba(18,16,30,.2);font-size:calc(var(--jsc-w) * .01)}.jsc-print img{display:block;width:100%;height:auto;max-width:none;aspect-ratio:4/5;object-fit:cover}.jsc-print figcaption{font-family:'JSC Hand',cursive;font-weight:600;color:#2a2c3e;text-align:center;font-size:calc(var(--jsc-w) * .024);line-height:1;padding:.32em 0 .4em}.jsc-print[data-tape]{padding:0;background:none}.jsc-print[data-tape]::before{content:'';position:absolute;left:50%;top:-6%;width:46%;height:11%;transform:translateX(-50%) rotate(-3deg);background:rgba(236,226,196,.78);box-shadow:0 1px 2px rgba(0,0,0,.12)}.jsc-print[data-tape] figcaption{position:absolute;left:0;right:0;bottom:-1.1em;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.55)}.jsc-note{position:absolute;font-family:'JSC Hand',cursive;font-weight:600;line-height:1.02;color:#272a3f}.jsc-note[data-style=card]{background:#f6f1e6;padding:.7em .85em .8em;box-shadow:0 .3em .9em rgba(18,16,30,.25);clip-path:polygon(0 3%,7% 0,18% 2%,31% 0,46% 2%,60% 0,74% 2%,88% 0,100% 2%,99% 100%,84% 98%,69% 100%,52% 98%,37% 100%,21% 98%,6% 100%,1% 97%)}.jsc-note[data-style=ink]{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.45),0 0 12px rgba(0,0,0,.25)}.jsc-note b{display:block;font-weight:600;font-size:calc(var(--jsc-w) * .048);margin-bottom:.12em}.jsc-note span{display:block;font-size:calc(var(--jsc-w) * .028)}.jsc-bar{display:flex;justify-content:center;gap:clamp(12px,1.4cqi,20px);padding:clamp(14px,1.8cqi,28px) 0 clamp(22px,3cqi,44px);position:relative;z-index:2}.jsc-btn{display:grid;place-items:center;width:clamp(40px,3.6cqi,52px);height:clamp(40px,3.6cqi,52px);border-radius:50%;border:0;padding:0;cursor:pointer;color:#262a40;background:#fff;box-shadow:0 4px 14px rgba(10,12,28,.28);transition:transform .2s cubic-bezier(.2,.7,.2,1)}.jsc-btn:hover{transform:translateY(-2px)}.jsc-btn:active{transform:scale(.94)}.jsc-btn svg{width:44%;height:44%}.jsc-chip:focus-visible,.jsc-btn:focus-visible{outline:2px solid #fff;outline-offset:3px}.jsc-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (prefers-reduced-motion:reduce){.jsc-btn,.jsc-chip{transition:none}}";
function de({ spread: s, active: l = !1 }) {
  return /* @__PURE__ */ n.jsxs("div", { className: "jsc-sheet", style: { background: s.paper }, children: [
    s.image ? /* @__PURE__ */ n.jsx("img", { className: "jsc-bg", fetchPriority: l ? "high" : "low", src: s.image, alt: "", draggable: !1, decoding: "async", style: { maxWidth: "none", objectPosition: s.imagePosition } }) : null,
    s.prints?.map((a, p) => /* @__PURE__ */ n.jsxs(
      "figure",
      {
        className: "jsc-print",
        "data-tape": a.tape ? "" : void 0,
        style: { left: a.x + "%", top: a.y + "%", width: a.w + "%", transform: "rotate(" + (a.rotate ?? 0) + "deg)" },
        children: [
          /* @__PURE__ */ n.jsx("img", { src: a.src, alt: "", draggable: !1, decoding: "async", style: { maxWidth: "none" } }),
          a.caption ? /* @__PURE__ */ n.jsx("figcaption", { children: a.caption }) : null
        ]
      },
      p
    )),
    s.notes?.map((a, p) => /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "jsc-note",
        "data-style": a.style ?? "card",
        style: { left: a.x + "%", top: a.y + "%", width: a.w + "%", transform: "rotate(" + (a.rotate ?? 0) + "deg)" },
        children: [
          a.title ? /* @__PURE__ */ n.jsx("b", { children: a.title }) : null,
          a.body ? /* @__PURE__ */ n.jsx("span", { children: a.body }) : null
        ]
      },
      p
    ))
  ] });
}
function fe({
  spreads: s,
  title: l = "Journal",
  meta: a,
  height: p = "100svh",
  initialIndex: L = 0,
  autoPlay: j = 2600,
  onIndexChange: R,
  onAction: T,
  className: A
}) {
  const o = s.length, x = b(Math.round(L), 0, Math.max(0, o - 1)), [d, Y] = i.useState(x), [D, Z] = i.useState(!1), [I, E] = i.useState(!1), M = i.useRef(null), S = i.useRef(null), V = i.useRef([]), F = i.useRef([]), W = i.useRef(0), h = i.useRef(x), m = i.useRef(x), w = i.useRef(null), y = i.useRef(0), N = i.useRef(null), z = i.useRef(!1), Q = i.useRef(!1), J = i.useRef(R);
  J.current = R;
  const k = i.useCallback(() => {
    const t = W.current;
    if (t)
      for (let e = 0; e < V.current.length; e++) {
        const r = V.current[e];
        if (!r) continue;
        const c = se(e - h.current, t);
        if (c.hidden) {
          r.style.visibility = "hidden";
          continue;
        }
        r.style.visibility = "visible", r.style.opacity = String(c.opacity), r.style.transform = "translate3d(" + c.x.toFixed(2) + "px,0," + c.z.toFixed(2) + "px)";
        const f = F.current[e * 2], v = F.current[e * 2 + 1];
        f && (f.style.transform = "rotateY(" + (c.left - (f.classList.contains("jsc-phone-half") ? g : 0)).toFixed(2) + "deg)", f.style.setProperty("--jsc-s", c.shadeLeft.toFixed(3))), v && (v.style.transform = "rotateY(" + (c.right + (v.classList.contains("jsc-phone-half") ? g : 0)).toFixed(2) + "deg)", v.style.setProperty("--jsc-s", c.shadeRight.toFixed(3)));
      }
  }, []), G = i.useCallback(
    (t) => {
      y.current = 0;
      const e = w.current;
      if (e) {
        const r = e.dur > 0 ? b((t - e.t0) / e.dur, 0, 1) : 1;
        h.current = e.from + (e.to - e.from) * e.ease(r), r >= 1 && (w.current = null);
      }
      k(), w.current && (y.current = requestAnimationFrame(G));
    },
    [k]
  ), P = i.useCallback(() => {
    y.current || (y.current = requestAnimationFrame(G));
  }, [G]), u = i.useCallback(
    (t, e = ce) => {
      const r = b(t, 0, Math.max(0, o - 1));
      r !== m.current && (m.current = r, Y(r), J.current?.(r));
      const c = Q.current ? 0 : ne(Math.abs(r - h.current));
      w.current = { from: h.current, to: r, t0: performance.now(), dur: c, ease: e }, P();
    },
    [o, P]
  );
  i.useEffect(() => {
    const t = window.matchMedia("(prefers-reduced-motion: reduce)"), e = () => {
      Q.current = t.matches, Z(t.matches);
    };
    return e(), t.addEventListener("change", e), () => t.removeEventListener("change", e);
  }, []), i.useEffect(() => {
    const t = S.current, e = M.current;
    if (!t || !e) return;
    const r = new ResizeObserver(([c]) => {
      const { width: f, height: v } = c.contentRect, K = re(f, v);
      W.current = K, e.style.setProperty("--jsc-w", K + "px"), e.style.setProperty("--jsc-h", Math.round(K / B(f)) + "px"), k();
    });
    return r.observe(t), () => {
      r.disconnect(), cancelAnimationFrame(y.current), y.current = 0;
    };
  }, [k]), i.useEffect(() => {
    h.current > o - 1 ? u(o - 1) : k();
  }, [o, u, k]), i.useEffect(() => {
    const t = M.current;
    if (!j || D || o < 2 || !t) return;
    let e = !0;
    const r = new IntersectionObserver(([f]) => {
      e = f.isIntersecting;
    });
    r.observe(t);
    const c = window.setInterval(() => {
      z.current || !e || document.hidden || N.current || u(m.current >= o - 1 ? 0 : m.current + 1);
    }, j);
    return () => {
      window.clearInterval(c), r.disconnect();
    };
  }, [j, D, o, u]);
  const q = () => {
    z.current = !0;
  }, H = (t) => {
    t.button !== 0 || o < 1 || (q(), w.current = null, N.current = { id: t.pointerId, x: t.clientX, from: h.current, lastX: t.clientX, lastT: t.timeStamp, v: 0, moved: !1 });
  }, _ = (t) => {
    const e = N.current, r = W.current;
    if (!e || e.id !== t.pointerId || !r) return;
    const c = t.clientX - e.x;
    if (!e.moved && Math.abs(c) > 6 && (e.moved = !0, E(!0), t.currentTarget.setPointerCapture(t.pointerId)), !e.moved) return;
    const f = Math.max(1, t.timeStamp - e.lastT);
    e.v = e.v * 0.6 + -(t.clientX - e.lastX) / (r * 0.42) / (f / 1e3) * 0.4, e.lastX = t.clientX, e.lastT = t.timeStamp, h.current = b(e.from - c / (r * 0.42), -0.3, o - 0.7), P();
  }, O = (t) => {
    const e = N.current;
    if (!e || e.id !== t.pointerId) return;
    if (N.current = null, E(!1), e.moved) {
      u(ae(h.current, e.v, o), ie);
      return;
    }
    const r = t.target.closest("[data-i]"), c = r ? Number(r.getAttribute("data-i")) : m.current;
    u(c);
  }, $ = (t) => {
    const e = { ArrowRight: 1, ArrowDown: 1, PageDown: 1, ArrowLeft: -1, ArrowUp: -1, PageUp: -1 };
    if (t.target === t.currentTarget) {
      if (t.key in e) u(m.current + e[t.key]);
      else if (t.key === "Home") u(0);
      else if (t.key === "End") u(o - 1);
      else return;
      t.preventDefault(), q();
    }
  }, ee = i.useRef({ acc: 0, at: 0 });
  i.useEffect(() => {
    const t = S.current;
    if (!t) return;
    const e = (r) => {
      if (Math.abs(r.deltaX) <= Math.abs(r.deltaY)) return;
      const c = ee.current;
      c.acc += r.deltaX, !(Math.abs(c.acc) < 40 || r.timeStamp - c.at < 320) && (z.current = !0, c.at = r.timeStamp, u(m.current + (c.acc > 0 ? 1 : -1)), c.acc = 0);
    };
    return t.addEventListener("wheel", e, { passive: !0 }), () => t.removeEventListener("wheel", e);
  }, [u]);
  const C = s[d], te = a ?? o * 2 + " Pages";
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: M,
      className: "jsc-root" + (A ? " " + A : ""),
      style: { height: p },
      tabIndex: 0,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": l,
      onKeyDown: $,
      children: [
        /* @__PURE__ */ n.jsx("style", { children: le + ".jsc-root{background:#0a211b;color:#f4efe6}.jsc-page{background:#0a211b}.jsc-menu-page{width:100%;height:100%;object-fit:contain;padding:4px;box-sizing:border-box}.jsc-bar{align-items:center}.jsc-btn{background:#164438;color:#f1d58b}.jsc-btn:disabled{opacity:.4}.jsc-floor{background:#050e0b}.jsc-bg{object-fit:contain}.jsc-page.jsc-phone-half{box-shadow:none}@media(max-width:767px){.jsc-root{height:calc(188vw + 200px)!important;max-height:none}.jsc-stage{margin-top:100px}.jsc-head{white-space:normal;width:95%}}" }),
        /* @__PURE__ */ n.jsx("div", { className: "jsc-top", children: /* @__PURE__ */ n.jsxs("div", { className: "jsc-head", children: [
          /* @__PURE__ */ n.jsx("h2", { className: "jsc-title", children: l }),
          /* @__PURE__ */ n.jsx("p", { children: te })
        ] }) }),
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            ref: S,
            className: "jsc-stage",
            "data-drag": I ? "" : void 0,
            onPointerDown: H,
            onPointerMove: _,
            onPointerUp: O,
            onPointerCancel: O,
            children: [
              /* @__PURE__ */ n.jsx("div", { className: "jsc-floor", "aria-hidden": "true" }),
              /* @__PURE__ */ n.jsx("div", { className: "jsc-view", children: /* @__PURE__ */ n.jsx("div", { className: "jsc-scene", children: s.map((t, e) => /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: (r) => {
                    V.current[e] = r;
                  },
                  className: "jsc-item",
                  "data-i": e,
                  role: "group",
                  "aria-roledescription": "spread",
                  "aria-label": (t.label ?? "Spread " + (e + 1)) + ", " + (e + 1) + " of " + o,
                  "aria-hidden": e !== d,
                  children: [
                    t.alt ? /* @__PURE__ */ n.jsx("span", { className: "jsc-sr", children: t.alt }) : null,
                    ["l", "r"].map((r, c) => /* @__PURE__ */ n.jsxs(
                      "div",
                      {
                        ref: (f) => {
                          F.current[e * 2 + c] = f;
                        },
                        className: "jsc-page" + (t.image ? " jsc-phone-half" : ""),
                        "data-side": r,
                        children: [
                          t.image && Math.abs(e - d) <= 2 ? /* @__PURE__ */ n.jsx(de, { spread: t, active: e === d }) : null,
                          (r === "l" ? t.leftImage : t.rightImage) && /* @__PURE__ */ n.jsx("img", { className: "jsc-menu-page", src: r === "l" ? t.leftImage : t.rightImage, alt: t.label, loading: "lazy", draggable: !1 }),
                          !t.image && /* @__PURE__ */ n.jsx("div", { className: "jsc-gutter" }),
                          !t.image && /* @__PURE__ */ n.jsx("div", { className: "jsc-shade" })
                        ]
                      },
                      r
                    ))
                  ]
                },
                t.id ?? e
              )) }) })
            ]
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: "jsc-bar", children: [
          /* @__PURE__ */ n.jsx("button", { className: "jsc-btn", "aria-label": "Previous pages", disabled: d === 0, onClick: () => {
            q(), u(d - 1);
          }, children: "←" }),
          /* @__PURE__ */ n.jsx("span", { children: C?.label }),
          /* @__PURE__ */ n.jsx("button", { className: "jsc-btn", "aria-label": "Next pages", disabled: d === o - 1, onClick: () => {
            q(), u(d + 1);
          }, children: "→" })
        ] }),
        /* @__PURE__ */ n.jsx("p", { className: "jsc-sr", "aria-live": "polite", children: C ? (C.label ?? "Spread " + (d + 1)) + ", " + (d + 1) + " of " + o : "" })
      ]
    }
  );
}
export {
  b as clamp,
  fe as default,
  ne as durationFor,
  ce as easeInOut,
  ie as easeOut,
  se as poseFor,
  ae as settle,
  B as spreadAspect,
  re as spreadWidth
};
