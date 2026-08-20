(() => {
  const pageCount = 11;
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

  function initBook(book) {
    const stage = book.closest("[data-book-stage]");
    const surface = book.querySelector("[data-book-surface]");
    const spread = book.querySelector("[data-book-spread]");
    const cover = book.querySelector("[data-book-cover]");
    const leftImage = book.querySelector("[data-book-left]");
    const rightImage = book.querySelector("[data-book-right]");
    const mobileImage = book.querySelector("[data-book-mobile]");
    const turner = book.querySelector("[data-book-turner]");
    const turnFront = book.querySelector("[data-turn-front]");
    const turnBack = book.querySelector("[data-turn-back]");
    const previousButton = stage?.querySelector("[data-book-previous]");
    const nextButton = stage?.querySelector("[data-book-next]");
    const status = stage?.querySelector("[data-book-status]");
    const fullscreenButton = stage?.querySelector("[data-book-fullscreen]");
    const hint = book.querySelector("[data-book-hint]");

    if (!stage || !surface || !spread || !cover || !leftImage || !rightImage || !mobileImage || !turner || !turnFront || !turnBack || !previousButton || !nextButton || !status) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const loadedPages = new Set([0]);
    let currentPage = 0;
    let isAnimating = false;
    let settleTimer = 0;
    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let gestureAxis = "idle";

    const normalizeDesktopPage = (index) => {
      if (index <= 0) return 0;
      return index % 2 === 1 ? index : index - 1;
    };

    const loadPage = (index) => {
      if (index < 0 || index >= pageCount || loadedPages.has(index)) return;
      const preload = new Image();
      preload.decoding = "async";
      preload.src = pagePath(index);
      loadedPages.add(index);
    };

    const preloadNearby = () => {
      [-1, 0, 1, 2].forEach((offset) => loadPage(currentPage + offset));
    };

    const setImage = (image, index) => {
      const frame = image.closest("figure");
      if (index < 0 || index >= pageCount) {
        image.removeAttribute("src");
        image.alt = "";
        frame?.setAttribute("hidden", "");
        return;
      }

      frame?.removeAttribute("hidden");
      if (!image.src.endsWith(pagePath(index).replace("./", "/"))) image.src = pagePath(index);
      image.alt = `BAROCK CAFE menu page ${index + 1} of ${pageCount}: ${pageLabels[index]}`;
      image.loading = Math.abs(index - currentPage) <= 2 ? "eager" : "lazy";
    };

    const updateControls = () => {
      const desktopStart = normalizeDesktopPage(currentPage);
      const atEnd = mobileQuery.matches ? currentPage >= pageCount - 1 : desktopStart >= pageCount - 2;
      previousButton.disabled = isAnimating || currentPage === 0;
      nextButton.disabled = isAnimating || atEnd;
      status.textContent = !mobileQuery.matches && desktopStart > 0
        ? `${String(desktopStart + 1).padStart(2, "0")}-${String(Math.min(desktopStart + 2, pageCount)).padStart(2, "0")} / ${pageCount}`
        : `${String(currentPage + 1).padStart(2, "0")} / ${pageCount}`;
    };

    const setAnimating = (active) => {
      isAnimating = active;
      book.classList.toggle("is-turning", active);
      book.setAttribute("aria-busy", String(active));
      updateControls();
    };

    const resetTurner = () => {
      turner.className = "menu-book__turner";
      turnFront.removeAttribute("src");
      turnBack.removeAttribute("src");
    };

    const render = () => {
      book.classList.remove("is-opening", "is-closing");
      if (mobileQuery.matches) {
        setImage(mobileImage, currentPage);
        book.classList.toggle("is-open", currentPage > 0);
      } else if (currentPage === 0) {
        book.classList.remove("is-open");
        cover.hidden = false;
        spread.setAttribute("aria-hidden", "true");
      } else {
        currentPage = normalizeDesktopPage(currentPage);
        setImage(leftImage, currentPage);
        setImage(rightImage, currentPage + 1);
        cover.hidden = true;
        spread.setAttribute("aria-hidden", "false");
        book.classList.add("is-open");
      }
      setAnimating(false);
      preloadNearby();
    };

    const finishTurn = (nextPage) => {
      window.clearTimeout(settleTimer);
      currentPage = nextPage;
      resetTurner();
      render();
    };

    const settleOnAnimationEnd = (element, nextPage, fallbackMs = 860) => {
      const complete = (event) => {
        if (event && event.target !== element) return;
        element.removeEventListener("animationend", complete);
        finishTurn(nextPage);
      };
      element.addEventListener("animationend", complete);
      settleTimer = window.setTimeout(() => complete(), fallbackMs);
    };

    const openCover = () => {
      if (isAnimating || currentPage !== 0) return;
      hint?.classList.add("is-hidden");
      if (mobileQuery.matches) {
        turnTo(1, "next");
        return;
      }
      if (reducedMotion.matches) {
        currentPage = 1;
        render();
        return;
      }

      setAnimating(true);
      setImage(leftImage, 1);
      setImage(rightImage, 2);
      spread.setAttribute("aria-hidden", "false");
      book.classList.add("is-opening");
      settleOnAnimationEnd(cover, 1);
    };

    const closeCover = () => {
      if (isAnimating || currentPage === 0) return;
      if (reducedMotion.matches) {
        currentPage = 0;
        render();
        return;
      }

      setAnimating(true);
      cover.hidden = false;
      book.classList.add("is-closing");
      settleOnAnimationEnd(cover, 0);
    };

    const turnTo = (nextPage, direction) => {
      if (isAnimating || nextPage < 0 || nextPage >= pageCount || nextPage === currentPage) return;
      if (currentPage === 0 && direction === "next" && !mobileQuery.matches) {
        openCover();
        return;
      }
      if (nextPage === 0 && !mobileQuery.matches) {
        closeCover();
        return;
      }

      hint?.classList.add("is-hidden");
      if (reducedMotion.matches) {
        currentPage = nextPage;
        render();
        return;
      }

      setAnimating(true);
      if (mobileQuery.matches) {
        turnFront.src = pagePath(currentPage);
        turnBack.src = pagePath(nextPage);
      } else {
        const currentSpread = normalizeDesktopPage(currentPage);
        const nextSpread = normalizeDesktopPage(nextPage);
        if (direction === "next") {
          setImage(leftImage, currentSpread);
          setImage(rightImage, nextSpread + 1);
          turnFront.src = pagePath(currentSpread + 1);
          turnBack.src = pagePath(nextSpread);
        } else {
          setImage(leftImage, nextSpread);
          setImage(rightImage, currentSpread + 1);
          turnFront.src = pagePath(currentSpread);
          turnBack.src = pagePath(nextSpread + 1);
        }
      }

      turner.className = `menu-book__turner is-active is-${direction}`;
      settleOnAnimationEnd(turner, mobileQuery.matches ? nextPage : normalizeDesktopPage(nextPage));
    };

    const next = () => {
      const step = mobileQuery.matches || currentPage === 0 ? 1 : 2;
      turnTo(Math.min(pageCount - 1, currentPage + step), "next");
    };

    const previous = () => {
      if (currentPage === 0) return;
      const nextPage = mobileQuery.matches ? currentPage - 1 : currentPage <= 1 ? 0 : currentPage - 2;
      turnTo(Math.max(0, nextPage), "previous");
    };

    cover.addEventListener("click", openCover);
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

    surface.addEventListener("pointerdown", (event) => {
      if (!mobileQuery.matches || isAnimating || !event.isPrimary) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      startTime = performance.now();
      gestureAxis = "pending";
      surface.setPointerCapture?.(pointerId);
    });

    surface.addEventListener("pointermove", (event) => {
      if (event.pointerId !== pointerId || gestureAxis === "vertical") return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      if (gestureAxis === "pending" && Math.max(Math.abs(deltaX), Math.abs(deltaY)) > 9) {
        gestureAxis = Math.abs(deltaX) > Math.abs(deltaY) * 1.2 ? "horizontal" : "vertical";
      }
    });

    const resetPointer = () => {
      if (pointerId !== null && surface.hasPointerCapture?.(pointerId)) surface.releasePointerCapture(pointerId);
      pointerId = null;
      gestureAxis = "idle";
    };

    surface.addEventListener("pointerup", (event) => {
      if (event.pointerId !== pointerId) return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      const duration = Math.max(1, performance.now() - startTime);
      const velocity = Math.abs(deltaX) / duration;
      const isSwipe = gestureAxis === "horizontal" && Math.abs(deltaX) > Math.abs(deltaY) * 1.2 && (Math.abs(deltaX) >= 50 || (Math.abs(deltaX) >= 28 && velocity > 0.55));
      const isTap = Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10;
      resetPointer();
      if (isSwipe) {
        deltaX < 0 ? next() : previous();
      } else if (isTap) {
        const rect = surface.getBoundingClientRect();
        const ratio = (event.clientX - rect.left) / rect.width;
        if (currentPage === 0) next();
        else if (ratio <= 0.28) previous();
        else if (ratio >= 0.72) next();
      }
    });

    surface.addEventListener("pointercancel", resetPointer);

    if (fullscreenButton) {
      const updateFullscreenLabel = () => {
        fullscreenButton.textContent = document.fullscreenElement ? "Exit Fullscreen" : "View Fullscreen";
      };
      fullscreenButton.addEventListener("click", async () => {
        try {
          if (document.fullscreenElement) await document.exitFullscreen();
          else if (stage.requestFullscreen) await stage.requestFullscreen();
        } catch {
          // Browser policy can reject fullscreen without affecting book navigation.
        } finally {
          window.setTimeout(updateFullscreenLabel, 80);
        }
      });
      document.addEventListener("fullscreenchange", updateFullscreenLabel);
    }

    mobileQuery.addEventListener("change", () => {
      window.clearTimeout(settleTimer);
      resetTurner();
      currentPage = mobileQuery.matches ? currentPage : normalizeDesktopPage(currentPage);
      render();
    });

    render();
    window.setTimeout(() => {
      loadPage(1);
      loadPage(2);
    }, 180);
  }

  document.querySelectorAll("[data-menu-book]").forEach(initBook);
})();
