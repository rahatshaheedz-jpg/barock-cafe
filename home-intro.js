(() => {
  const hero = document.querySelector("[data-cinematic-hero]");

  if (!hero) {
    return;
  }

  const pin = hero.querySelector("[data-hero-pin]");
  const background = hero.querySelector("[data-hero-background] img");
  const product = hero.querySelector("[data-hero-product-wrap]");
  const introCopy = hero.querySelector("[data-hero-intro-copy]");
  const revealCopy = hero.querySelector("[data-hero-reveal-copy]");
  const scrollCue = hero.querySelector("[data-hero-scroll]");
  const monogram = hero.querySelector(".hero-cinematic__monogram");
  const wash = hero.querySelector(".hero-cinematic__wash");
  const milk = hero.querySelector('[data-hero-layer="milk"]');
  const espresso = hero.querySelector('[data-hero-layer="espresso"]');
  const ice = hero.querySelector('[data-hero-layer="ice"]');
  const beans = hero.querySelector('[data-hero-layer="beans"]');
  const layers = [milk, espresso, ice, beans].filter(Boolean);
  const mobileView = window.matchMedia("(max-width: 760px)");

  if (!window.gsap || !window.ScrollTrigger) {
    revealCopy?.remove();
    return;
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  hero.classList.add("is-enhanced");

  const context = gsap.context(() => {
    gsap.set(revealCopy, { autoAlpha: 0 });

    const entrance = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
    });

    if (mobileView.matches) {
      entrance
        .from(background, { scale: 1.04, autoAlpha: 0, duration: 0.72 })
        .from(monogram, { scale: 0.94, autoAlpha: 0, duration: 0.62 }, 0.04)
        .from(product, { y: 24, scale: 0.97, autoAlpha: 0, duration: 0.78 }, 0.08)
        .from([ice, beans].filter(Boolean), { y: 14, autoAlpha: 0, duration: 0.55, stagger: 0.06 }, 0.18)
        .from(introCopy.children, { y: 18, autoAlpha: 0, duration: 0.5, stagger: 0.06 }, 0.18);
    } else {
      entrance
        .from(background, { scale: 1.14, autoAlpha: 0, duration: 1.15 })
        .from(monogram, { scale: 0.78, autoAlpha: 0, duration: 1.1 }, 0.08)
        .from(product, { yPercent: 16, scale: 0.78, rotation: -3, autoAlpha: 0, duration: 1.25 }, 0.12)
        .from(layers, {
          xPercent: (index) => (index % 2 === 0 ? -12 : 12),
          yPercent: (index) => (index < 2 ? -10 : 14),
          scale: 0.82,
          autoAlpha: 0,
          duration: 1.05,
          stagger: 0.08,
        }, 0.2)
        .from(introCopy.children, { y: 28, autoAlpha: 0, duration: 0.72, stagger: 0.08 }, 0.34);
    }

    const finishEntranceOnScroll = (self) => {
      if (self.progress > 0.01 && entrance.isActive()) {
        entrance.progress(1).pause();
      }
    };

    const playEntrance = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        entrance.progress(1).pause();
        return;
      }

      entrance.play(0);
    };

    if (document.body.classList.contains("hero-ready")) {
      playEntrance();
    } else {
      window.addEventListener("barock:hero-ready", playEntrance, { once: true });
    }

    const media = gsap.matchMedia();

    media.add("(min-width: 761px) and (prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=230%",
          pin,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: finishEntranceOnScroll,
        },
      });

      timeline
        .to(scrollCue, { autoAlpha: 0, duration: 0.08 }, 0)
        .to(background, { scale: 1.18, yPercent: 5, duration: 0.78 }, 0)
        .to(monogram, { scale: 1.08, rotation: 9, autoAlpha: 0.72, duration: 0.8 }, 0)
        .to(introCopy, { xPercent: -20, yPercent: -8, autoAlpha: 0, duration: 0.28 }, 0.08)
        .to(product, { y: -28, scale: 1.16, rotation: 1.2, duration: 0.58 }, 0.04)
        .to(milk, { xPercent: -11, yPercent: -17, rotation: -7, scale: 1.08, duration: 0.72 }, 0)
        .to(espresso, { xPercent: 9, yPercent: -9, rotation: 10, scale: 1.12, duration: 0.68 }, 0.02)
        .to(ice, { xPercent: 12, yPercent: 18, rotation: -8, scale: 1.1, duration: 0.72 }, 0)
        .to(beans, { xPercent: -9, yPercent: 21, rotation: 7, scale: 1.14, duration: 0.72 }, 0)
        .fromTo(revealCopy, { x: 64, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.24 }, 0.39)
        .to(product, { x: -340, scale: 1.02, duration: 0.28 }, 0.43)
        .to(revealCopy, { y: -28, autoAlpha: 0, duration: 0.18 }, 0.82)
        .to(layers, { autoAlpha: 0, scale: 1.22, duration: 0.2, stagger: 0.015 }, 0.79)
        .to(product, { x: 0, y: 64, scale: 0.76, duration: 0.2 }, 0.8)
        .to(monogram, { autoAlpha: 0.18, scale: 1.18, duration: 0.2 }, 0.8)
        .to(wash, { autoAlpha: 0.96, duration: 0.2 }, 0.8);

      return () => timeline.scrollTrigger?.kill();
    });

    media.add("(max-width: 760px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.set(revealCopy, { display: "none" });
    });

    media.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([background, product, introCopy, ...layers], { clearProps: "all" });
      gsap.set(revealCopy, { display: "none" });
    });
  }, hero);

  const refreshAfterAssets = async () => {
    const images = [background, product?.querySelector("img")].filter(Boolean);
    await Promise.all(images.map((image) => {
      if (image.complete) {
        return image.decode?.().catch(() => undefined);
      }

      return new Promise((resolve) => {
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
      });
    }));

    await document.fonts?.ready;
    ScrollTrigger.refresh();
  };

  refreshAfterAssets();

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => hero.classList.toggle("is-motion-paused", !entry.isIntersecting),
    { rootMargin: "80px 0px", threshold: 0.01 },
  );
  visibilityObserver.observe(hero);

  window.addEventListener("pagehide", () => {
    visibilityObserver.disconnect();
    context.revert();
  }, { once: true });
})();
