import "./index.css";
import { createRoot } from "react-dom/client";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

const target = document.getElementById("barock-marquee-hero");
if (target) createRoot(target).render(
  <AnimatedMarqueeHero
    tagline="BAROCK CAFÉ · GULSHAN-02, DHAKA"
    title={<>Every Moment,<br />Perfectly Yours.</>}
    description="Coffee, cuisine and evening hospitality beneath the golden lights of BAROCK."
    ctaText="Explore Our Menu"
    ctaHref="./menu.html"
    images={[
      { src: "/assets/brand-photography/entrance-sign-640.webp", alt: "Illuminated BAROCK CAFÉ entrance at night" },
      { src: "/assets/brand-photography/bar-counter-640.webp", alt: "BAROCK CAFÉ teal bar and espresso counter" },
      { src: "/assets/brand-photography/barista-640.webp", alt: "BAROCK barista preparing a drink" },
      { src: "/assets/brand-photography/cappuccino-640.webp", alt: "Cappuccino served at BAROCK CAFÉ" },
      { src: "/assets/brand-photography/terrace-640.webp", alt: "BAROCK CAFÉ terrace beneath the trees" },
      { src: "/assets/brand-photography/goldie-640.webp", alt: "BAROCK signature Goldie drink" },
      { src: "/assets/brand-photography/green-refresher-640.webp", alt: "A green sparkling refresher at BAROCK" },
      { src: "/assets/photography-new/exterior-640.webp", alt: "BAROCK CAFÉ glowing in Gulshan after dark" },
    ]}
  />,
);
