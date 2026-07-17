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

  function initVelarisBackground() {
    const canvas = hero.querySelector("[data-hero-velaris]");

    if (!canvas || !pin) {
      return;
    }

    if (!("ResizeObserver" in window) || !("IntersectionObserver" in window) || !("MutationObserver" in window)) {
      hero.classList.add("velaris-fallback");
      return;
    }

    const mobileFallback = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lowMemoryDevice = typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 2;
    const frameInterval = 1000 / 30;
    const maximumDpr = 1.25;
    const maximumPixels = 3000000;
    const colors = {
      deepTeal: new Float32Array([11 / 255, 63 / 255, 60 / 255]),
      enamel: new Float32Array([20 / 255, 168 / 255, 159 / 255]),
      coffeeGold: new Float32Array([139 / 255, 99 / 255, 47 / 255]),
      antiqueGold: new Float32Array([210 / 255, 163 / 255, 95 / 255]),
    };
    const vertexSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;

      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
    const fragmentSource = `
      precision mediump float;

      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec3 u_color_one;
      uniform vec3 u_color_two;
      uniform vec3 u_color_three;
      uniform vec3 u_color_four;

      float hash(vec2 point) {
        return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 point) {
        vec2 cell = floor(point);
        vec2 local = fract(point);
        vec2 curve = local * local * (3.0 - 2.0 * local);
        float a = hash(cell);
        float b = hash(cell + vec2(1.0, 0.0));
        float c = hash(cell + vec2(0.0, 1.0));
        float d = hash(cell + vec2(1.0, 1.0));
        return mix(mix(a, b, curve.x), mix(c, d, curve.x), curve.y);
      }

      void main() {
        vec2 uv = v_uv;
        float aspect = u_resolution.x / max(u_resolution.y, 1.0);
        vec2 point = vec2(uv.x * aspect, uv.y) * 2.15;
        float time = u_time * 0.045;
        float broad = noise(point + vec2(time, -time * 0.62));
        float detail = noise(point * 2.05 + vec2(-time * 0.54, time * 0.38));
        float flow = smoothstep(0.18, 0.88, broad * 0.72 + detail * 0.28);
        float ribbon = smoothstep(0.28, 0.78, detail + (uv.x - uv.y) * 0.16);
        vec3 teal = mix(u_color_one, u_color_two, flow);
        vec3 gold = mix(u_color_three, u_color_four, ribbon);
        vec3 color = mix(teal, gold, smoothstep(0.42, 0.78, flow + ribbon * 0.16));
        gl_FragColor = vec4(color, 0.34);
      }
    `;
    let gl = null;
    let program = null;
    let buffer = null;
    let locations = null;
    let renderFrame = 0;
    let resizeFrame = 0;
    let initializeTimer = 0;
    let lastRenderTime = 0;
    let startTime = 0;
    let heroVisible = false;
    let heroReady = document.body.classList.contains("hero-ready");
    let contextLost = false;
    let failed = false;
    let warned = false;
    let restoreAttempts = 0;
    let observedWidth = 0;
    let observedHeight = 0;

    const warnOnce = (message, error) => {
      if (warned) {
        return;
      }

      warned = true;
      console.warn(`[BAROCK hero] ${message}`, error || "");
    };

    const isBlocked = () => (
      document.hidden
      || !heroVisible
      || !heroReady
      || reducedMotion.matches
      || mobileFallback.matches
      || lowMemoryDevice
      || document.documentElement.classList.contains("mobile-menu-open")
      || document.body.classList.contains("mobile-menu-open")
      || document.body.classList.contains("menu-modal-open")
      || document.documentElement.classList.contains("barock-loader-pending")
    );

    const stopRendering = () => {
      if (renderFrame) {
        window.cancelAnimationFrame(renderFrame);
        renderFrame = 0;
      }
      canvas.dataset.rendering = "false";
    };

    const showFallback = () => {
      stopRendering();
      hero.classList.remove("has-velaris");
      hero.classList.add("velaris-fallback");
    };

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const message = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error(message || "Shader compilation failed.");
      }

      return shader;
    };

    const releaseResources = () => {
      if (!gl || contextLost) {
        program = null;
        buffer = null;
        locations = null;
        return;
      }

      if (buffer) {
        gl.deleteBuffer(buffer);
      }
      if (program) {
        gl.deleteProgram(program);
      }
      program = null;
      buffer = null;
      locations = null;
    };

    const createResources = () => {
      const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
      const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
      const nextProgram = gl.createProgram();
      gl.attachShader(nextProgram, vertexShader);
      gl.attachShader(nextProgram, fragmentShader);
      gl.linkProgram(nextProgram);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);

      if (!gl.getProgramParameter(nextProgram, gl.LINK_STATUS)) {
        const message = gl.getProgramInfoLog(nextProgram);
        gl.deleteProgram(nextProgram);
        throw new Error(message || "Shader program linking failed.");
      }

      program = nextProgram;
      buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW,
      );

      locations = {
        position: gl.getAttribLocation(program, "a_position"),
        resolution: gl.getUniformLocation(program, "u_resolution"),
        time: gl.getUniformLocation(program, "u_time"),
        colorOne: gl.getUniformLocation(program, "u_color_one"),
        colorTwo: gl.getUniformLocation(program, "u_color_two"),
        colorThree: gl.getUniformLocation(program, "u_color_three"),
        colorFour: gl.getUniformLocation(program, "u_color_four"),
      };

      gl.useProgram(program);
      gl.enableVertexAttribArray(locations.position);
      gl.vertexAttribPointer(locations.position, 2, gl.FLOAT, false, 0, 0);
      gl.uniform3fv(locations.colorOne, colors.deepTeal);
      gl.uniform3fv(locations.colorTwo, colors.enamel);
      gl.uniform3fv(locations.colorThree, colors.coffeeGold);
      gl.uniform3fv(locations.colorFour, colors.antiqueGold);
    };

    const resizeCanvas = () => {
      resizeFrame = 0;

      if (!gl || contextLost || failed || !observedWidth || !observedHeight) {
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, maximumDpr);
      const pixelScale = Math.min(1, Math.sqrt(maximumPixels / (observedWidth * observedHeight * dpr * dpr)));
      const width = Math.max(1, Math.round(observedWidth * dpr * pixelScale));
      const height = Math.max(1, Math.round(observedHeight * dpr * pixelScale));

      if (canvas.width === width && canvas.height === height) {
        return;
      }

      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.useProgram(program);
      gl.uniform2f(locations.resolution, width, height);
    };

    const draw = (now) => {
      renderFrame = 0;

      if (isBlocked() || failed || contextLost || !program) {
        return;
      }

      if (!startTime) {
        startTime = now;
      }

      if (now - lastRenderTime >= frameInterval) {
        lastRenderTime = now - ((now - lastRenderTime) % frameInterval);
        gl.useProgram(program);
        gl.uniform1f(locations.time, (now - startTime) / 1000);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      renderFrame = window.requestAnimationFrame(draw);
    };

    const updateRendering = () => {
      if (isBlocked() || failed || contextLost || !program) {
        stopRendering();
        return;
      }

      hero.classList.remove("velaris-fallback");
      hero.classList.add("has-velaris");
      if (!renderFrame) {
        lastRenderTime = 0;
        canvas.dataset.rendering = "true";
        renderFrame = window.requestAnimationFrame(draw);
      }
    };

    const initialize = () => {
      if (failed || contextLost || mobileFallback.matches || reducedMotion.matches || lowMemoryDevice || program) {
        showFallback();
        return;
      }

      try {
        gl = canvas.getContext("webgl", {
          alpha: true,
          antialias: false,
          depth: false,
          stencil: false,
          premultipliedAlpha: false,
          preserveDrawingBuffer: false,
          powerPreference: "low-power",
        });

        if (!gl) {
          throw new Error("WebGL is unavailable.");
        }

        createResources();
        resizeCanvas();
        updateRendering();
      } catch (error) {
        failed = true;
        releaseResources();
        showFallback();
        warnOnce("WebGL background unavailable; using the CSS fallback.", error);
      }
    };

    const scheduleInitialize = () => {
      if (initializeTimer || program || failed || contextLost || mobileFallback.matches || reducedMotion.matches || lowMemoryDevice) {
        return;
      }

      initializeTimer = window.setTimeout(() => {
        initializeTimer = 0;
        initialize();
      }, 0);
    };

    const handleCapabilityChange = () => {
      if (mobileFallback.matches || reducedMotion.matches || lowMemoryDevice) {
        releaseResources();
        gl = null;
        canvas.width = 1;
        canvas.height = 1;
        showFallback();
        return;
      }

      scheduleInitialize();
      updateRendering();
    };

    const handleContextLost = (event) => {
      event.preventDefault();
      contextLost = true;
      stopRendering();
      program = null;
      buffer = null;
      locations = null;
      showFallback();
    };

    const handleContextRestored = () => {
      if (restoreAttempts >= 1 || failed || mobileFallback.matches || reducedMotion.matches) {
        failed = true;
        showFallback();
        warnOnce("WebGL context could not be safely restored; using the CSS fallback.");
        return;
      }

      restoreAttempts += 1;
      contextLost = false;
      try {
        createResources();
        resizeCanvas();
        updateRendering();
      } catch (error) {
        failed = true;
        showFallback();
        warnOnce("WebGL context restoration failed; using the CSS fallback.", error);
      }
    };

    const resizeObserver = new ResizeObserver(([entry]) => {
      observedWidth = Math.round(entry.contentRect.width);
      observedHeight = Math.round(entry.contentRect.height);
      if (!resizeFrame) {
        resizeFrame = window.requestAnimationFrame(resizeCanvas);
      }
    });
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        updateRendering();
      },
      { rootMargin: "80px 0px", threshold: 0.01 },
    );
    const stateObserver = new MutationObserver(() => {
      if (heroReady && !document.documentElement.classList.contains("barock-loader-pending")) {
        scheduleInitialize();
      }
      updateRendering();
    });
    const handleHeroReady = () => {
      heroReady = true;
      if (!document.documentElement.classList.contains("barock-loader-pending")) {
        scheduleInitialize();
      }
      updateRendering();
    };
    const handleVisibilityChange = () => updateRendering();
    const destroy = () => {
      stopRendering();
      window.clearTimeout(initializeTimer);
      window.cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      stateObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("barock:hero-ready", handleHeroReady);
      mobileFallback.removeEventListener?.("change", handleCapabilityChange);
      reducedMotion.removeEventListener?.("change", handleCapabilityChange);
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);
      releaseResources();
      gl = null;
    };

    canvas.addEventListener("webglcontextlost", handleContextLost);
    canvas.addEventListener("webglcontextrestored", handleContextRestored);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("barock:hero-ready", handleHeroReady);
    mobileFallback.addEventListener?.("change", handleCapabilityChange);
    reducedMotion.addEventListener?.("change", handleCapabilityChange);
    resizeObserver.observe(pin);
    visibilityObserver.observe(hero);
    stateObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    stateObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("pagehide", destroy, { once: true });

    observedWidth = pin.clientWidth;
    observedHeight = pin.clientHeight;
    if (mobileFallback.matches || reducedMotion.matches || lowMemoryDevice) {
      canvas.width = 1;
      canvas.height = 1;
      showFallback();
    } else if (heroReady && !document.documentElement.classList.contains("barock-loader-pending")) {
      scheduleInitialize();
    }
  }

  if (!window.gsap || !window.ScrollTrigger) {
    window.setTimeout(initVelarisBackground, 0);
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

  window.setTimeout(initVelarisBackground, 0);

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
