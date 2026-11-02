"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroImage { src: string; alt: string }
interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: ReactNode;
  description: string;
  ctaText: string;
  ctaHref: string;
  images: HeroImage[];
  className?: string;
}

const REVEAL = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

const ActionButton = ({ children, href, reduceMotion }: { children: ReactNode; href: string; reduceMotion: boolean }) => (
  <motion.a
    href={href}
    whileHover={reduceMotion ? undefined : { y: -2 }}
    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    className="barock-marquee__button mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold"
  >
    {children}
  </motion.a>
);

export function AnimatedMarqueeHero({
  tagline, title, description, ctaText, ctaHref, images, className = "",
}: AnimatedMarqueeHeroProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const combinedClassName = ["barock-marquee-hero relative flex h-[100svh] min-h-[620px] w-full flex-col items-center justify-center overflow-hidden px-4 text-center", className].filter(Boolean).join(" ");

  return (
    <section className={combinedClassName} aria-labelledby="barock-hero-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_32%,rgba(17,105,98,.38),transparent_62%)]" />
      <div className="barock-marquee__copy z-10 flex flex-col items-center">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          variants={REVEAL}
          className="barock-marquee__tagline mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
        >
          {tagline}
        </motion.div>

        <motion.h1
          id="barock-hero-title"
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }}
          className="barock-marquee__title font-bold tracking-tight"
        >
          {typeof title === "string" ? title.split(" ").map((word, index) => (
            <motion.span key={`${word}-${index}`} variants={REVEAL} className="inline-block">
              {word}&nbsp;
            </motion.span>
          )) : title}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          variants={REVEAL}
          transition={reduceMotion ? { delay: 0 } : { delay: 0.35 }}
          className="barock-marquee__description mt-6 max-w-xl text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          variants={REVEAL}
          transition={reduceMotion ? { delay: 0 } : { delay: 0.45 }}
        >
          <ActionButton href={ctaHref} reduceMotion={reduceMotion}>{ctaText}</ActionButton>
        </motion.div>
      </div>

      <div className="barock-marquee__gallery absolute bottom-0 left-0 h-1/3 w-full md:h-2/5" role="group" aria-label="BAROCK CAFÉ photo highlights">
        <motion.div
          className="flex w-max"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={reduceMotion ? undefined : { ease: "linear", duration: 44, repeat: Infinity }}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-4 pr-4" aria-hidden={copy === 1}>
              {images.map((image, index) => (
                <div
                  key={`${copy}-${image.src}`}
                  className="relative aspect-[3/4] h-48 flex-shrink-0 select-none md:h-64"
                  style={{ rotate: `${index % 2 === 0 ? -2 : 3}deg` }}
                >
                  <img
                    src={image.src}
                    alt={copy === 0 ? image.alt : ""}
                    aria-hidden={copy === 1 ? true : undefined}
                    draggable={false}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full rounded-2xl object-cover shadow-md shadow-black/40"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
