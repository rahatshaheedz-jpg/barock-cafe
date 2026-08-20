(() => {
  const pageCount = 11;
  const transitionMs = 500;
  const pagePath = (index) => `./assets/menu-book/page-${String(index + 1).padStart(2, "0")}.webp`;
  const pageLabels = [
    "cover",
    "the story of BAROCK",
    "coffee, hot chocolate, and iced coffee",
    "tea, iced tea, matcha, and frappe",
    "smoothies, milkshakes, and signature mocktails",
    "beverages, juices, and kids zone",
    "soup, salad, and appetizers",
    "sandwiches, burgers, and fajitas",
    "alambre, pizza, and pasta",
    "seafood and straight from the butcher",
    "back cover and restaurant details",
  ];

  function initSlider(book) {
    const stage = book.closest("[data-book-stage]");
    const viewport = book.querySelector("[data-book-surface]");
    const slider = book.querySelector("[data-book-slider]");
    const previousButton = stage?.querySelector("[data-book-previous]");
    const nextButton = stage?.querySelector("[data-book-next]");
    const status = stage?.querySelector("[data-book-status]");
    const fullscreenButton = stage?.querySelector("[data-book-fullscreen]");
    const hint = book.querySelector("[data-book-hint]");

    if (!stage || !viewport || !slider || !previousButton || !nextButton || !status) return;

    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pageLoads = new Map();
    const pageImages = new Map();
    const slides = {
      previous: createSlide("previous"),
      current: createSlide("current"),
      next: createSlide("next"),
    };

    let currentPage = 0;
    let isAnimating = false;
    let assetsReady = false;
    let transitionTimer = 0;
    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let gestureAxis = "idle";

    slider.append(slides.previous, slides.current, slides.next);

    function createSlide(role) {
      const slide = document.createElement("div");
      slide.className = `menu-book__slide menu-book__slide--${role}`;
      slide.dataset.slideRole = role;
      slide.setAttribute("aria-hidden", role === "current" ? "false" : "true");
      return slide;
    }

    const normalizeDesktopPage = (index) => {
      if (index <= 0) return 0;
      return index % 2 === 1 ? index : index - 1;
    };

    const adjacentPage = (index, direction) => {
      if (mobileQuery.matches) return index + (direction === "next" ? 1 : -1);
      if (direction === "next") return index === 0 ? 1 : index + 2;
      return index <= 1 ? 0 : index - 2;
    };

    const loadPage = (index) => {
      if (index < 0 || index >= pageCount) return Promise.resolve();
      if (pageLoads.has(index)) return pageLoads.get(index);

      const load = new Promise((resolve) => {
        const image = getPageImage(index);
        let settled = false;
        const complete = async () => {
          if (settled) return;
          settled = true;
          try {
            if (image.decode) await image.decode();
          } catch {
            // A completed load still provides a safe cached fallback when decode is unavailable.
          }
          resolve();
        };

        image.addEventListener("load", complete, { once: true });
        image.addEventListener("error", complete, { once: true });
        if (image.complete) complete();
      });

      pageLoads.set(index, load);
      return load;
    };

    function getPageImage(index) {
      if (pageImages.has(index)) return pageImages.get(index);

      const image = new Image(1427, 2095);
      image.src = pagePath(index);
      image.alt = `BAROCK CAFE menu page ${index + 1} of ${pageCount}: ${pageLabels[index]}`;
      image.decoding = "async";
      image.loading = "eager";
      image.draggable = false;
      pageImages.set(index, image);
      return image;
    }

    const createPage = (index, position) => {
      const figure = document.createElement("figure");
      figure.className = `menu-book__page menu-book__page--${position}`;

      if (index < 0 || index >= pageCount) {
        figure.classList.add("is-empty");
        figure.setAttribute("aria-hidden", "true");
        return figure;
      }

      figure.append(getPageImage(index));
      return figure;
    };

    const renderSlide = (slide, index) => {
      slide.replaceChildren();
      slide.dataset.pageIndex = String(index);

      if (index < 0 || index >= pageCount) {
        slide.classList.add("is-empty");
        slide.setAttribute("aria-hidden", "true");
        return;
      }

      slide.classList.remove("is-empty", "is-cover");
      if (mobileQuery.matches) {
        slide.append(createPage(index, "single"));
        return;
      }

      const spreadStart = normalizeDesktopPage(index);
      const isCover = spreadStart === 0;
      slide.classList.toggle("is-cover", isCover);
      slide.append(
        createPage(isCover ? -1 : spreadStart, "left"),
        createPage(isCover ? 0 : spreadStart + 1, "right"),
      );

      if (!isCover) {
        const gutter = document.createElement("span");
        gutter.className = "menu-book__gutter";
        gutter.setAttribute("aria-hidden", "true");
        slide.append(gutter);
      }
    };

    const setRole = (slide, role) => {
      slide.className = `menu-book__slide menu-book__slide--${role}`;
      slide.dataset.slideRole = role;
      slide.setAttribute("aria-hidden", role === "current" ? "false" : "true");
    };

    const renderAllSlides = () => {
      renderSlide(slides.previous, adjacentPage(currentPage, "previous"));
      renderSlide(slides.current, currentPage);
      renderSlide(slides.next, adjacentPage(currentPage, "next"));
    };

    const updateControls = () => {
      const atStart = currentPage === 0;
      const atEnd = mobileQuery.matches ? currentPage >= pageCount - 1 : currentPage >= pageCount - 2;
      previousButton.disabled = !assetsReady || isAnimating || atStart;
      nextButton.disabled = !assetsReady || isAnimating || atEnd;
      status.textContent = !mobileQuery.matches && currentPage > 0
        ? `${String(currentPage + 1).padStart(2, "0")}-${String(Math.min(currentPage + 2, pageCount)).padStart(2, "0")} / ${pageCount}`
        : `${String(currentPage + 1).padStart(2, "0")} / ${pageCount}`;
    };

    const setAnimating = (active) => {
      isAnimating = active;
      book.classList.toggle("is-sliding", active);
      book.setAttribute("aria-busy", String(active || !assetsReady));
      updateControls();
    };

    const finishSlide = (direction, nextPage) => {
      window.clearTimeout(transitionTimer);
      currentPage = nextPage;
      slider.classList.add("is-resetting");

      if (direction === "next") {
        const recycled = slides.previous;
        slides.previous = slides.current;
        slides.current = slides.next;
        slides.next = recycled;
      } else {
        const recycled = slides.next;
        slides.next = slides.current;
        slides.current = slides.previous;
        slides.previous = recycled;
      }

      setRole(slides.previous, "previous");
      setRole(slides.current, "current");
      setRole(slides.next, "next");
      renderSlide(
        direction === "next" ? slides.next : slides.previous,
        adjacentPage(currentPage, direction),
      );
      slider.classList.remove("is-moving-next", "is-moving-previous");

      window.requestAnimationFrame(() => {
        slider.classList.remove("is-resetting");
        setAnimating(false);
      });
    };

    const slideTo = (direction) => {
      if (!assetsReady || isAnimating) return;
      const nextPage = adjacentPage(currentPage, direction);
      if (nextPage < 0 || nextPage >= pageCount) return;

      hint?.classList.add("is-hidden");
      if (reducedMotion.matches) {
        currentPage = nextPage;
        renderAllSlides();
        updateControls();
        return;
      }

      setAnimating(true);
      const incoming = direction === "next" ? slides.next : slides.previous;
      let completed = false;
      const complete = (event) => {
        if (completed || (event && event.target !== incoming) || (event && event.propertyName !== "transform")) return;
        completed = true;
        incoming.removeEventListener("transitionend", complete);
        finishSlide(direction, nextPage);
      };

      incoming.addEventListener("transitionend", complete);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          slider.classList.add(`is-moving-${direction}`);
          transitionTimer = window.setTimeout(() => complete(), transitionMs + 140);
        });
      });
    };

    const next = () => slideTo("next");
    const previous = () => slideTo("previous");

    previousButton.addEventListener("click", previous);
    nextButton.addEventListener("click", next);
    book.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      }
    });

    viewport.addEventListener("pointerdown", (event) => {
      if (!mobileQuery.matches || isAnimating || !assetsReady || !event.isPrimary) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      startTime = performance.now();
      gestureAxis = "pending";
      viewport.setPointerCapture?.(pointerId);
    });

    viewport.addEventListener("pointermove", (event) => {
      if (event.pointerId !== pointerId || gestureAxis === "vertical") return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      if (gestureAxis === "pending" && Math.max(Math.abs(deltaX), Math.abs(deltaY)) > 9) {
        gestureAxis = Math.abs(deltaX) > Math.abs(deltaY) * 1.2 ? "horizontal" : "vertical";
      }
    });

    const resetPointer = () => {
      if (pointerId !== null && viewport.hasPointerCapture?.(pointerId)) viewport.releasePointerCapture(pointerId);
      pointerId = null;
      gestureAxis = "idle";
    };

    viewport.addEventListener("pointerup", (event) => {
      if (event.pointerId !== pointerId) return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      const duration = Math.max(1, performance.now() - startTime);
      const velocity = Math.abs(deltaX) / duration;
      const horizontal = gestureAxis === "horizontal" && Math.abs(deltaX) > Math.abs(deltaY) * 1.2;
      const isSwipe = horizontal && (Math.abs(deltaX) >= 50 || (Math.abs(deltaX) >= 28 && velocity > 0.55));
      resetPointer();
      if (isSwipe) deltaX < 0 ? next() : previous();
    });

    viewport.addEventListener("pointercancel", resetPointer);

    if (fullscreenButton) {
      const updateFullscreenLabel = () => {
        fullscreenButton.textContent = document.fullscreenElement ? "Exit Fullscreen" : "View Fullscreen";
      };
      fullscreenButton.addEventListener("click", async () => {
        try {
          if (document.fullscreenElement) await document.exitFullscreen();
          else if (stage.requestFullscreen) await stage.requestFullscreen();
        } catch {
          // Browser policy can reject fullscreen without affecting navigation.
        } finally {
          window.setTimeout(updateFullscreenLabel, 80);
        }
      });
      document.addEventListener("fullscreenchange", updateFullscreenLabel);
    }

    mobileQuery.addEventListener("change", () => {
      window.clearTimeout(transitionTimer);
      slider.classList.remove("is-moving-next", "is-moving-previous", "is-resetting");
      currentPage = mobileQuery.matches ? currentPage : normalizeDesktopPage(currentPage);
      renderAllSlides();
      setAnimating(false);
    });

    book.classList.add("is-loading");
    renderAllSlides();
    setAnimating(false);

    Promise.all(Array.from({ length: pageCount }, (_, index) => loadPage(index))).then(() => {
      assetsReady = true;
      book.classList.remove("is-loading");
      setAnimating(false);
    });
  }

  document.querySelectorAll("[data-menu-book]").forEach(initSlider);
})();
