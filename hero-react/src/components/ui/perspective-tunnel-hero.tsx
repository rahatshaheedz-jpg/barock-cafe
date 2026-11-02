"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../../index.css";

const IMAGES = [
  { src: "/assets/brand-photography/entrance-sign-640.webp", title: "The BAROCK Entrance" },
  { src: "/assets/brand-photography/bar-counter-640.webp", title: "The Teal Bar" },
  { src: "/assets/brand-photography/barista-640.webp", title: "Coffee, Crafted" },
  { src: "/assets/brand-photography/cappuccino-640.webp", title: "BAROCK Classics" },
  { src: "/assets/brand-photography/terrace-640.webp", title: "The Terrace" },
  { src: "/assets/brand-photography/goldie-640.webp", title: "A Golden Moment" },
  { src: "/assets/brand-photography/green-refresher-640.webp", title: "Fresh Creations" },
  { src: "/assets/brand-photography/black-coffee.webp", title: "Coffee & Ceremony" },
  { src: "/assets/photography-new/exterior-640.webp", title: "Gulshan After Dark" },
];

interface TunnelCardData {
  item: (typeof IMAGES)[number];
  angleCos: number;
  angleSin: number;
  radiusFactorX: number;
  radiusFactorY: number;
  rotationZ: number;
  index: number;
}

const TUNNEL_CARDS: TunnelCardData[] = IMAGES.map((item, index) => {
  const angle = index * 137.5 * (Math.PI / 180);
  return {
    item,
    angleCos: Math.cos(angle),
    angleSin: Math.sin(angle),
    radiusFactorX: 0.28 + (index % 3) * 0.08,
    radiusFactorY: 0.26 + (index % 2) * 0.09,
    rotationZ: (index % 2 === 0 ? 1 : -1) * (3 + (index % 5) * 2),
    index,
  };
});

const SPRING = { stiffness: 60, damping: 25, mass: 0.5 };
interface Stage { width: number; height: number; isMobile: boolean }
interface Pointer { x: MotionValue<number>; y: MotionValue<number> }

function useCameraParallax(enabled: boolean): Pointer {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING);
  const y = useSpring(rawY, SPRING);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      rawX.set((event.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, rawX, rawY]);

  return { x, y };
}

function TunnelCard({
  card, progress, pointer, total, stage,
}: {
  card: TunnelCardData;
  progress: MotionValue<number>;
  pointer: Pointer;
  total: number;
  stage: Stage;
}) {
  const start = (card.index / total) * 0.45;
  const localProgress = useTransform(progress, [start, start + 0.55], [0, 1]);
  const z = useTransform(localProgress, [0, 1], [stage.isMobile ? -1200 : -1700, stage.isMobile ? 350 : 500]);
  const opacity = useTransform(localProgress, [0, 0.18, 0.82, 0.98], [0, 1, 1, 0]);
  const width = stage.isMobile
    ? Math.max(130, Math.min(180, stage.width * 0.38))
    : Math.max(180, Math.min(270, stage.width * 0.18));
  const x = card.angleCos * stage.width * card.radiusFactorX;
  const y = card.angleSin * stage.height * card.radiusFactorY;
  const pan = stage.isMobile ? 20 : 45;
  const transform = useTransform(
    [z, pointer.x, pointer.y],
    ([depth, px, py]: number[]) =>
      `translate3d(calc(-50% + ${x - px * pan}px), calc(-50% + ${y - py * pan}px), ${depth}px) rotateZ(${card.rotationZ}deg)`,
  );

  return (
    <motion.div
      style={{ width, transform, opacity, zIndex: card.index + 1 }}
      className="pointer-events-auto absolute left-1/2 top-1/2 aspect-[4/5] select-none will-change-transform"
    >
      <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl shadow-black/80 ring-1 ring-white/15 transition-all duration-500 hover:ring-amber-200/70 hover:shadow-amber-500/20">
        <img
          src={card.item.src}
          alt={card.item.title}
          draggable={false}
          loading={card.index < 3 ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 sm:p-5">
          <span className="font-mono text-xs uppercase tracking-widest text-white/95 drop-shadow-md sm:text-sm">
            {card.item.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PerspectiveTunnelHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [stage, setStage] = useState<Stage>({ width: 1440, height: 900, isMobile: false });
  const rawProgress = useMotionValue(0);
  const progress = useSpring(rawProgress, { stiffness: reducedMotion ? 1000 : 80, damping: reducedMotion ? 100 : 30, restDelta: 0.0001 });
  const pointer = useCameraParallax(!reducedMotion);

  useEffect(() => {
    const measure = () => setStage({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 768,
    });
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      const current = rawProgress.get();
      if ((event.deltaY > 0 && current >= 1) || (event.deltaY < 0 && current <= 0)) return;
      event.preventDefault();
      rawProgress.set(Math.min(1, Math.max(0, current + event.deltaY * 0.0008)));
    };
    let lastTouchY: number | null = null;
    const onTouchStart = (event: TouchEvent) => { lastTouchY = event.touches[0]?.clientY ?? null; };
    const onTouchMove = (event: TouchEvent) => {
      const nextY = event.touches[0]?.clientY;
      if (lastTouchY === null || nextY === undefined) return;
      const delta = lastTouchY - nextY;
      lastTouchY = nextY;
      const current = rawProgress.get();
      if ((delta > 0 && current >= 1) || (delta < 0 && current <= 0)) return;
      event.preventDefault();
      rawProgress.set(Math.min(1, Math.max(0, current + delta * 0.0015)));
    };
    element.addEventListener("wheel", onWheel, { passive: false });
    element.addEventListener("touchstart", onTouchStart, { passive: true });
    element.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      element.removeEventListener("wheel", onWheel);
      element.removeEventListener("touchstart", onTouchStart);
      element.removeEventListener("touchmove", onTouchMove);
    };
  }, [rawProgress]);

  const titleScale = useTransform(progress, [0, 0.5, 1], [0.82, 1, 1.16]);
  const titleOpacity = useTransform(progress, [0, 0.12, 0.85, 1], [1, 1, 1, 0]);
  const promptOpacity = useTransform(progress, [0, 0.12], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="barock-tunnel-stage dark relative flex h-[100svh] w-full select-none items-center justify-center overflow-hidden bg-[#050707] text-[#f4eedf]"
      style={{ perspective: stage.isMobile ? "900px" : "1200px", transformStyle: "preserve-3d" }}
      role="region"
      aria-label="BAROCK CAFÉ immersive photo gallery. Scroll to explore."
      tabIndex={0}
      onKeyDown={(event) => {
        const current = rawProgress.get();
        if (["ArrowDown", "PageDown", " "].includes(event.key) && current < 1) { event.preventDefault(); rawProgress.set(Math.min(1, current + 0.1)); }
        if (["ArrowUp", "PageUp"].includes(event.key) && current > 0) { event.preventDefault(); rawProgress.set(Math.max(0, current - 0.1)); }
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(125,211,199,.2)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_55%,transparent_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,105,98,0.22)_0%,transparent_70%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute h-[48vmin] w-[48vmin] rounded-full border border-teal-200/15" />
      <div aria-hidden="true" className="pointer-events-none absolute h-[76vmin] w-[76vmin] rounded-full border border-dashed border-amber-100/10" />

      <motion.div style={{ scale: titleScale, opacity: titleOpacity }} className="pointer-events-none z-0 flex max-w-3xl flex-col items-center px-6 text-center">
        <p className="barock-tunnel__eyebrow mb-4 font-mono text-xs uppercase tracking-[0.34em] text-[#d4b65f] sm:text-sm">Gulshan-02 · Dhaka</p>
        <h1 id="barock-hero-title" className="barock-tunnel__title bg-gradient-to-b from-[#f4eedf] via-[#dce8df] to-[#81c7ba] bg-clip-text text-5xl font-semibold leading-[0.92] tracking-tight text-transparent sm:text-7xl md:text-8xl">
          BAROCK CAFÉ
        </h1>
        <p className="barock-tunnel__tagline mt-5 font-serif text-xl italic text-[#d4b65f] sm:text-2xl">Every Moment, Perfectly Yours.</p>
        <p className="barock-tunnel__description mt-4 max-w-[36ch] text-sm leading-relaxed text-[#e4e0d6] sm:text-base">Coffee, cuisine and evening hospitality beneath the golden lights of BAROCK.</p>
        <span className="barock-tunnel__hours mt-6 rounded-full border border-teal-100/25 bg-black/30 px-4 py-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-[#f4eedf] sm:text-xs">DAILY · 8:00 AM–2:00 AM</span>
      </motion.div>

      <motion.div style={{ opacity: promptOpacity }} className="pointer-events-none absolute bottom-8 z-20 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#d8d3c7] sm:text-xs">
        <span>Scroll to Explore</span><div className="h-6 w-px bg-gradient-to-b from-[#d4b65f] to-transparent" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        {TUNNEL_CARDS.map((card) => (
          <TunnelCard key={card.item.src} card={card} progress={progress} pointer={pointer} total={TUNNEL_CARDS.length} stage={stage} />
        ))}
      </div>
    </div>
  );
}
