const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const contactForm = document.querySelector("[data-contact-form]");
const toast = document.querySelector("[data-toast]");
const year = document.querySelector("[data-year]");
const revealItems = document.querySelectorAll(".reveal");
const web3FormsEndpoint = ["https://api.web3forms.com", "submit"].join("/");
const web3FormsAccessKey = ["9a69aef0", "2ec6", "43c9", "b2c4", "f59c89d8107d"].join("-");
const defaultCafeImage = "./assets/site/hero-coffee.svg";

function waitForCriticalImage(image, onReady = () => {}) {
  if (!image) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let settled = false;

    const finish = () => {
      if (settled) {
        return;
      }

      settled = true;
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", finish);
      onReady();
      resolve();
    };

    const decode = () => {
      if (typeof image.decode === "function" && image.naturalWidth > 0) {
        image.decode().catch(() => undefined).finally(finish);
      } else {
        finish();
      }
    };

    const handleLoad = () => decode();

    if (image.complete) {
      decode();
      return;
    }

    image.addEventListener("load", handleLoad, { once: true });
    image.addEventListener("error", finish, { once: true });
  });
}

function signalHeroReady() {
  const wasReady = document.body.classList.contains("hero-ready");
  document.body.classList.add("hero-ready");

  if (!wasReady) {
    window.dispatchEvent(new CustomEvent("barock:hero-ready"));
  }
}

function initHomeLoader() {
  const loader = document.querySelector("[data-site-loader]");
  const loaderLogo = document.querySelector("[data-loader-logo]");

  if (!loader) {
    signalHeroReady();
    document.documentElement.classList.remove("barock-loader-pending");
    return;
  }

  if (document.documentElement.classList.contains("barock-loader-seen")) {
    loader.remove();
    signalHeroReady();
    return;
  }

  const criticalImages = [
    loaderLogo,
    ...document.querySelectorAll("[data-loader-critical]"),
  ].filter(Boolean);
  const safetyTimeoutMs = 3000;
  let safetyTimer = 0;
  let exitTimer = 0;
  let finalized = false;
  let completedAssets = 0;

  const updateProgress = () => {
    completedAssets += 1;
    const progress = Math.min(96, 8 + (completedAssets / Math.max(criticalImages.length, 1)) * 88);
    loader.style.setProperty("--loader-progress", progress.toFixed(2));
  };

  loader.style.setProperty("--loader-progress", "8");

  const safetyTimeout = new Promise((resolve) => {
    safetyTimer = window.setTimeout(resolve, safetyTimeoutMs);
  });

  const criticalAssetsReady = Promise.all(
    criticalImages.map((image) => waitForCriticalImage(image, updateProgress)),
  );

  const finalizeLoader = () => {
    if (finalized) {
      return;
    }

    finalized = true;
    window.clearTimeout(exitTimer);
    signalHeroReady();
    document.documentElement.classList.remove("barock-loader-pending");
    document.documentElement.classList.add("barock-loader-seen");
    loader.remove();
  };

  const exitLoader = () => {
    window.clearTimeout(safetyTimer);
    loader.style.setProperty("--loader-progress", "100");
    signalHeroReady();

    try {
      sessionStorage.setItem("barockLoaderSeen", "true");
    } catch (error) {
      // The loader still exits when session storage is unavailable.
    }

    loader.addEventListener(
      "transitionend",
      (event) => {
        if (event.target === loader && event.propertyName === "opacity") {
          finalizeLoader();
        }
      },
      { once: true },
    );

    window.requestAnimationFrame(() => loader.classList.add("is-exiting"));
    exitTimer = window.setTimeout(finalizeLoader, 520);
  };

  Promise.race([criticalAssetsReady, safetyTimeout]).then(exitLoader);
}

initHomeLoader();

document.addEventListener("visibilitychange", () => {
  document.body.classList.toggle("hero-motion-paused", document.hidden);
});

year.textContent = new Date().getFullYear();

function initScrollProgress() {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  const bar = document.createElement("span");
  bar.className = "scroll-progress__bar";
  progress.appendChild(bar);
  document.body.prepend(progress);
  let progressFrame = 0;

  const updateProgress = () => {
    progressFrame = 0;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? window.scrollY / scrollable : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, percentage))})`;
    document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 18);
  };
  const queueProgressUpdate = () => {
    if (!progressFrame) {
      progressFrame = window.requestAnimationFrame(updateProgress);
    }
  };

  updateProgress();
  window.addEventListener("scroll", queueProgressUpdate, { passive: true });
  window.addEventListener("resize", queueProgressUpdate);
}

initScrollProgress();

function initImageFallbacks() {
  document.querySelectorAll("img").forEach((image) => {
    if (image.dataset.fallbackListener === "true") {
      return;
    }

    image.dataset.fallbackListener = "true";
    image.addEventListener(
      "error",
      () => {
        if (image.dataset.fallbackApplied === "true") {
          return;
        }

        image.dataset.fallbackApplied = "true";
        image.closest("picture")?.querySelectorAll("source").forEach((source) => source.remove());
        image.removeAttribute("srcset");
        image.src = defaultCafeImage;
      },
      { once: true },
    );

    if (image.complete && image.naturalWidth === 0) {
      image.dispatchEvent(new Event("error"));
    }
  });
}

initImageFallbacks();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.16,
  },
);

revealItems.forEach((item) => revealObserver.observe(item));

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

function initNavigation() {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  const desktopLinks = [...header.querySelectorAll(".nav-links a")];
  const links = mobileMenu ? [...mobileMenu.querySelectorAll("a")] : [];
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const eventController = new AbortController();
  const eventSignal = eventController.signal;
  const listen = (target, type, handler, options = {}) => {
    target?.addEventListener(type, handler, { ...options, signal: eventSignal });
  };
  let navState = "closed";
  let closeTimer = 0;
  let scrollY = 0;
  let linkCenters = [];
  let pointerX = 0;
  let magnificationFrame = 0;
  let resizeFrame = 0;

  const resetMagnification = () => {
    window.cancelAnimationFrame(magnificationFrame);
    magnificationFrame = 0;
    desktopLinks.forEach((link) => link.style.removeProperty("--nav-scale"));
  };

  const measureLinks = () => {
    linkCenters = desktopLinks.map((link) => {
      const rect = link.getBoundingClientRect();
      return rect.left + rect.width / 2;
    });
  };

  const renderMagnification = () => {
    magnificationFrame = 0;

    if (!finePointer.matches || reducedMotion.matches) {
      resetMagnification();
      return;
    }

    const influenceRadius = 150;
    const maximumLift = 0.1;

    desktopLinks.forEach((link, index) => {
      const distance = Math.abs(pointerX - linkCenters[index]);
      const progress = Math.max(0, 1 - distance / influenceRadius);
      const falloff = progress > 0 ? (1 - Math.cos(progress * Math.PI)) / 2 : 0;
      link.style.setProperty("--nav-scale", (1 + maximumLift * falloff).toFixed(4));
    });
  };

  listen(header, "pointermove", (event) => {
    if (!finePointer.matches || reducedMotion.matches || event.pointerType === "touch") {
      return;
    }

    pointerX = event.clientX;
    if (!magnificationFrame) {
      magnificationFrame = window.requestAnimationFrame(renderMagnification);
    }
  });

  listen(header, "pointerleave", resetMagnification);
  listen(header, "pointerout", (event) => {
    if (!header.contains(event.relatedTarget)) {
      resetMagnification();
    }
  });
  listen(finePointer, "change", () => {
    resetMagnification();
    measureLinks();
  });
  listen(reducedMotion, "change", resetMagnification);
  measureLinks();
  document.fonts?.ready.then(measureLinks);

  if (!menuToggle || !mobileMenu) {
    listen(window, "resize", () => {
      if (!resizeFrame) {
        resizeFrame = window.requestAnimationFrame(() => {
          resizeFrame = 0;
          measureLinks();
        });
      }
    });
    listen(window, "pagehide", () => eventController.abort(), { once: true });
    return;
  }

  const backdrop = document.createElement("button");

  backdrop.type = "button";
  backdrop.className = "mobile-menu-backdrop";
  backdrop.setAttribute("aria-label", "Close navigation");
  backdrop.setAttribute("tabindex", "-1");
  document.body.appendChild(backdrop);

  links.forEach((link, index) => {
    link.style.setProperty("--item-index", index);
    link.style.setProperty("--reverse-index", links.length - index - 1);
  });

  const lockScroll = () => {
    scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.documentElement.classList.add("mobile-menu-open");
    document.body.classList.add("mobile-menu-open");
  };

  const unlockScroll = () => {
    document.documentElement.classList.remove("mobile-menu-open");
    document.body.classList.remove("mobile-menu-open");
    window.scrollTo(0, scrollY);
  };

  const setToggleState = (isOpen) => {
    menuToggle.classList.toggle("is-active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  };

  const openMenu = () => {
    if (navState === "open" || navState === "opening") {
      return;
    }

    window.clearTimeout(closeTimer);
    navState = "opening";
    lockScroll();
    setToggleState(true);
    mobileMenu.classList.remove("is-closing");
    mobileMenu.classList.add("is-opening");
    backdrop.classList.add("is-visible");
    mobileMenu.classList.add("is-open");

    window.setTimeout(() => {
      navState = "open";
      mobileMenu.classList.remove("is-opening");
    }, 380);
  };

  const closeMenu = ({ restoreFocus = true } = {}) => {
    if (navState === "closed" || navState === "closing") {
      return;
    }

    window.clearTimeout(closeTimer);
    navState = "closing";
    mobileMenu.classList.remove("is-opening", "is-open");
    mobileMenu.classList.add("is-closing");
    backdrop.classList.remove("is-visible");
    setToggleState(false);

    closeTimer = window.setTimeout(() => {
      navState = "closed";
      mobileMenu.classList.remove("is-closing");
      unlockScroll();
      if (restoreFocus) {
        menuToggle.focus({ preventScroll: true });
      }
    }, 300);
  };

  listen(menuToggle, "click", () => {
    if (navState === "open" || navState === "opening") {
      closeMenu();
    } else {
      openMenu();
    }
  });

  listen(mobileMenu, "click", (event) => {
    if (event.target.closest("a")) {
      closeMenu({ restoreFocus: false });
    }
  });

  listen(backdrop, "click", () => closeMenu());

  listen(window, "keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  listen(window, "resize", () => {
    if (!resizeFrame) {
      resizeFrame = window.requestAnimationFrame(() => {
        resizeFrame = 0;
        measureLinks();
        if (window.innerWidth > 960) {
          closeMenu({ restoreFocus: false });
        }
      });
    }
  });

  listen(window, "pagehide", () => {
    window.clearTimeout(closeTimer);
    window.cancelAnimationFrame(magnificationFrame);
    window.cancelAnimationFrame(resizeFrame);
    eventController.abort();
    backdrop.remove();
  }, { once: true });
}

initNavigation();

function initSelectionFan() {
  const fan = document.querySelector("[data-selection-fan]");

  if (!fan) {
    return;
  }

  const stage = fan.querySelector("[data-selection-fan-stage]");
  const cards = [...fan.querySelectorAll(".selection-fan-card")];
  const previousButton = fan.querySelector("[data-selection-previous]");
  const nextButton = fan.querySelector("[data-selection-next]");
  const status = fan.querySelector("[data-selection-status]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const gsapApi = window.gsap;
  const eventController = new AbortController();
  const eventSignal = eventController.signal;
  const listen = (target, type, handler, options = {}) => {
    target.addEventListener(type, handler, { ...options, signal: eventSignal });
  };
  const swipeThreshold = 48;
  const fastSwipeMinimumDistance = 30;
  const fastSwipeVelocity = 0.55;
  let activeIndex = 0;
  let pointerStartX = 0;
  let pointerStartY = 0;
  let pointerCurrentX = 0;
  let pointerCurrentY = 0;
  let pointerStartTime = 0;
  let pointerId = null;
  let gestureAxis = "idle";
  let suppressClickUntil = 0;
  let isTransitioning = false;
  let transitionTimer = 0;
  let resizeFrame = 0;
  let hasEntered = false;
  let cardStates = [];
  let entranceObserver = null;

  const getOffset = (index) => {
    let offset = index - activeIndex;
    const midpoint = Math.floor(cards.length / 2);

    if (offset > midpoint) {
      offset -= cards.length;
    } else if (offset < -midpoint) {
      offset += cards.length;
    }

    return offset;
  };

  const getLayout = () => {
    const width = stage.clientWidth;

    if (width <= 640) {
      return { spread: Math.min(112, width * 0.3), angle: 7, rise: 18, visible: 1 };
    }

    if (width <= 980) {
      return { spread: Math.min(140, width * 0.17), angle: 6.2, rise: 17, visible: 2 };
    }

    return { spread: Math.min(168, width * 0.137), angle: 5.5, rise: 16, visible: 3 };
  };

  const getCardState = (card, index, layout) => {
    const offset = getOffset(index);
    const distance = Math.abs(offset);
    const hidden = distance > layout.visible;
    const scale = distance === 0 ? 1.055 : Math.max(0.79, 0.96 - distance * 0.055);

    return {
      card,
      offset,
      hidden,
      x: offset * layout.spread,
      y: distance * layout.rise + distance * distance * 4,
      rotation: offset * layout.angle,
      scale,
      opacity: hidden ? 0 : Math.max(0.48, 1 - distance * 0.17),
      zIndex: cards.length + 2 - distance,
    };
  };

  const setCardAccessibility = (state, index) => {
    const isActive = index === activeIndex;
    const image = state.card.querySelector("img");

    state.card.classList.toggle("is-active", isActive);
    state.card.setAttribute("aria-hidden", String(state.hidden));
    state.card.tabIndex = state.hidden ? -1 : 0;
    state.card.style.pointerEvents = state.hidden ? "none" : "auto";

    if (image) {
      const shouldLoadNow = Math.abs(state.offset) <= 1;
      image.loading = shouldLoadNow ? "eager" : "lazy";
      image.fetchPriority = isActive ? "high" : "auto";
    }
  };

  const applyStateWithoutGsap = (state) => {
    state.card.style.zIndex = String(state.zIndex);
    state.card.style.opacity = String(state.opacity);
    state.card.style.transform = `translate3d(calc(-50% + ${state.x}px), ${state.y}px, 0) rotate(${state.rotation}deg) scale(${state.scale})`;
  };

  const render = ({ animate = true, entrance = false } = {}) => {
    const layout = getLayout();
    cardStates = cards.map((card, index) => getCardState(card, index, layout));

    cardStates.forEach((state, index) => {
      setCardAccessibility(state, index);

      if (!gsapApi) {
        applyStateWithoutGsap(state);
        return;
      }

      state.card.style.zIndex = String(state.zIndex);
      const target = {
        xPercent: -50,
        x: state.x,
        y: state.y,
        rotation: state.rotation,
        scale: state.scale,
        opacity: state.opacity,
        duration: animate && !reducedMotion.matches ? 0.72 : 0,
        ease: "power3.out",
        overwrite: "auto",
      };

      if (entrance && !reducedMotion.matches) {
        gsapApi.set(state.card, {
          xPercent: -50,
          x: state.x,
          y: state.y + 72,
          rotation: state.rotation * 1.55,
          scale: state.scale * 0.9,
          opacity: 0,
        });
        gsapApi.to(state.card, { ...target, delay: 0.05 + Math.abs(state.offset) * 0.055 });
      } else {
        gsapApi.to(state.card, target);
      }
    });

    status.textContent = `${activeIndex + 1} / ${cards.length}`;
  };

  const selectCard = (index) => {
    activeIndex = (index + cards.length) % cards.length;
    render({ animate: true });
  };

  const unlockTransition = () => {
    window.clearTimeout(transitionTimer);
    transitionTimer = 0;
    isTransitioning = false;
    fan.removeAttribute("aria-busy");
  };

  const lockTransition = () => {
    isTransitioning = true;
    fan.setAttribute("aria-busy", "true");
    window.clearTimeout(transitionTimer);
    transitionTimer = window.setTimeout(unlockTransition, reducedMotion.matches ? 40 : 760);
  };

  const cycle = (direction) => {
    if (isTransitioning) {
      return false;
    }

    lockTransition();
    selectCard(activeIndex + (direction === "left" ? 1 : -1));
    return true;
  };

  const applyDragFeedback = (distance) => {
    if (!gsapApi || reducedMotion.matches) {
      return;
    }

    const feedback = Math.max(-90, Math.min(90, distance)) * 0.22;

    cardStates.forEach((state) => {
      gsapApi.to(state.card, {
        x: state.x + feedback,
        rotation: state.rotation + feedback * 0.012,
        duration: 0.08,
        ease: "none",
        overwrite: "auto",
      });
    });
  };

  const snapBack = () => {
    render({ animate: true });
  };

  const applyHover = (isHovering) => {
    if (!gsapApi || reducedMotion.matches) {
      return;
    }

    cardStates.forEach((state) => {
      const neighborPush = isHovering && state.offset !== 0
        ? Math.sign(state.offset) * (Math.abs(state.offset) === 1 ? 13 : 7)
        : 0;
      const activeLift = isHovering && state.offset === 0 ? -11 : 0;

      gsapApi.to(state.card, {
        x: state.x + neighborPush,
        y: state.y + activeLift,
        duration: 0.34,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  };

  listen(previousButton, "click", () => cycle("right"));
  listen(nextButton, "click", () => cycle("left"));

  listen(fan, "keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      cycle(event.key === "ArrowLeft" ? "right" : "left");
    }
  });

  cards.forEach((card) => {
    const image = card.querySelector("img");

    if (image) {
      image.draggable = false;
    }

    listen(card, "dragstart", (event) => event.preventDefault());
    listen(card, "mouseenter", () => {
      if (card.classList.contains("is-active")) {
        applyHover(true);
      }
    });
    listen(card, "mouseleave", () => applyHover(false));
    listen(card, "focus", () => {
      if (card.classList.contains("is-active")) {
        applyHover(true);
      }
    });
    listen(card, "blur", () => applyHover(false));
    listen(card, "click", (event) => {
      if (Date.now() < suppressClickUntil) {
        event.preventDefault();
      }
    });
  });

  const resetGesture = ({ snap = false } = {}) => {
    if (snap && gestureAxis === "horizontal") {
      snapBack();
    }

    const capturedPointerId = pointerId;
    pointerId = null;

    if (capturedPointerId !== null && stage.hasPointerCapture?.(capturedPointerId)) {
      stage.releasePointerCapture(capturedPointerId);
    }

    gestureAxis = "idle";
    fan.classList.remove("is-dragging");
  };

  listen(stage, "pointerdown", (event) => {
    if (isTransitioning || !event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) {
      return;
    }

    pointerId = event.pointerId;
    pointerStartX = event.clientX;
    pointerStartY = event.clientY;
    pointerCurrentX = event.clientX;
    pointerCurrentY = event.clientY;
    pointerStartTime = performance.now();
    gestureAxis = "pending";
    fan.classList.add("is-dragging");
    stage.setPointerCapture?.(event.pointerId);
  });

  listen(stage, "pointermove", (event) => {
    if (event.pointerId !== pointerId) {
      return;
    }

    pointerCurrentX = event.clientX;
    pointerCurrentY = event.clientY;
    const deltaX = pointerCurrentX - pointerStartX;
    const deltaY = pointerCurrentY - pointerStartY;
    const horizontalDistance = Math.abs(deltaX);
    const verticalDistance = Math.abs(deltaY);

    if (gestureAxis === "pending" && Math.max(horizontalDistance, verticalDistance) >= 8) {
      if (horizontalDistance > verticalDistance * 1.15) {
        gestureAxis = "horizontal";
      } else if (verticalDistance > horizontalDistance) {
        gestureAxis = "vertical";
        fan.classList.remove("is-dragging");
      }
    }

    if (gestureAxis !== "horizontal") {
      return;
    }

    event.preventDefault();
    applyDragFeedback(deltaX);

    if (horizontalDistance > 8) {
      suppressClickUntil = Date.now() + 450;
    }
  }, { passive: false });

  listen(stage, "pointerup", (event) => {
    if (event.pointerId !== pointerId) {
      return;
    }

    const deltaX = event.clientX - pointerStartX;
    const deltaY = event.clientY - pointerStartY;
    const duration = Math.max(1, performance.now() - pointerStartTime);
    const horizontalDistance = Math.abs(deltaX);
    const velocity = horizontalDistance / duration;
    const isHorizontal = gestureAxis === "horizontal" && horizontalDistance > Math.abs(deltaY) * 1.15;
    const passedDistance = horizontalDistance >= swipeThreshold;
    const passedVelocity = horizontalDistance >= fastSwipeMinimumDistance && velocity >= fastSwipeVelocity;

    if (isHorizontal && horizontalDistance > 8) {
      suppressClickUntil = Date.now() + 450;
    }

    resetGesture();

    if (isHorizontal && (passedDistance || passedVelocity)) {
      cycle(deltaX < 0 ? "left" : "right");
    } else if (isHorizontal) {
      snapBack();
    }
  });

  listen(stage, "pointercancel", (event) => {
    if (event.pointerId === pointerId) {
      resetGesture({ snap: true });
    }
  });

  listen(stage, "lostpointercapture", (event) => {
    if (event.pointerId === pointerId) {
      resetGesture({ snap: true });
    }
  });

  listen(window, "resize", () => {
    if (resizeFrame) {
      return;
    }

    resizeFrame = window.requestAnimationFrame(() => {
      resizeFrame = 0;
      render({ animate: false });
    });
  });

  listen(reducedMotion, "change", () => {
    unlockTransition();
    resetGesture({ snap: true });
    render({ animate: false });
  });

  entranceObserver = new IntersectionObserver(
    (entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting) || hasEntered) {
        return;
      }

      hasEntered = true;
      render({ animate: true, entrance: true });
      observer.disconnect();
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.16 },
  );

  render({ animate: false });
  cards.forEach((card) => {
    card.style.opacity = "0";
  });
  entranceObserver.observe(fan);

  listen(window, "pagehide", () => {
    window.clearTimeout(transitionTimer);
    window.cancelAnimationFrame(resizeFrame);
    entranceObserver?.disconnect();
    eventController.abort();
  }, { once: true });
}

initSelectionFan();

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const defaultButtonText = submitButton.textContent;
  const nameInput = contactForm.elements.name;
  const phoneInput = contactForm.elements.phone;
  const messageInput = contactForm.elements.message;

  nameInput.value = nameInput.value.trim();
  phoneInput.value = phoneInput.value.trim();
  messageInput.value = messageInput.value.trim();

  if (!nameInput.value || !phoneInput.value || !messageInput.value) {
    showToast("Please complete all fields before sending.");
    return;
  }

  const formData = new FormData(contactForm);

  formData.append("access_key", web3FormsAccessKey);
  formData.append("subject", "New message from Barock Cafe Website");

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    const response = await fetch(web3FormsEndpoint, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Message failed");
    }

    contactForm.reset();
    showToast("Thanks! Your message has been sent.");
  } catch (error) {
    showToast("Sorry, something went wrong. Please try again.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = defaultButtonText;
  }
});
