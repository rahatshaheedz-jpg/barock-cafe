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

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuToggle && mobileMenu) {
  const closeNavigation = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    mobileMenu.classList.remove("is-open");
    document.documentElement.classList.remove("mobile-menu-open");
  };

  menuToggle.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
    mobileMenu.classList.toggle("is-open", willOpen);
    document.documentElement.classList.toggle("mobile-menu-open", willOpen);
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

function initMenuBook() {
  const book = document.querySelector("[data-menu-book]");
  const stage = document.querySelector("[data-book-stage]");
  if (!book || !stage) return;

  const surface = book.querySelector("[data-book-surface]");
  const spread = book.querySelector("[data-book-spread]");
  const cover = book.querySelector("[data-book-cover]");
  const leftImage = book.querySelector("[data-book-left]");
  const rightImage = book.querySelector("[data-book-right]");
  const mobileImage = book.querySelector("[data-book-mobile]");
  const turner = book.querySelector("[data-book-turner]");
  const turnFront = book.querySelector("[data-turn-front]");
  const turnBack = book.querySelector("[data-turn-back]");
  const previousButton = stage.querySelector("[data-book-previous]");
  const nextButton = stage.querySelector("[data-book-next]");
  const status = stage.querySelector("[data-book-status]");
  const fullscreenButton = stage.querySelector("[data-book-fullscreen]");
  const hint = book.querySelector("[data-book-hint]");
  const mobileQuery = window.matchMedia("(max-width: 768px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const loadedPages = new Set([0]);
  let currentPage = 0;
  let isAnimating = false;
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
    const radius = mobileQuery.matches ? 1 : 2;
    for (let offset = -radius; offset <= radius + 1; offset += 1) loadPage(currentPage + offset);
  };

  const setImage = (image, index) => {
    if (index < 0 || index >= pageCount) {
      image.removeAttribute("src");
      image.alt = "";
      image.closest("figure")?.setAttribute("hidden", "");
      return;
    }
    image.closest("figure")?.removeAttribute("hidden");
    image.src = pagePath(index);
    image.alt = `BAROCK CAFE menu page ${index + 1} of ${pageCount}: ${pageLabels[index]}`;
    image.loading = Math.abs(index - currentPage) <= 1 ? "eager" : "lazy";
  };

  const updateControls = () => {
    previousButton.disabled = currentPage === 0;
    const desktopStart = normalizeDesktopPage(currentPage);
    const isAtEnd = mobileQuery.matches ? currentPage >= pageCount - 1 : desktopStart >= pageCount - 2;
    nextButton.disabled = isAtEnd;
    status.textContent = !mobileQuery.matches && desktopStart > 0
      ? `${String(desktopStart + 1).padStart(2, "0")}-${String(Math.min(desktopStart + 2, pageCount)).padStart(2, "0")} / ${pageCount}`
      : `${String(currentPage + 1).padStart(2, "0")} / ${pageCount}`;
  };

  const render = () => {
    if (mobileQuery.matches) {
      setImage(mobileImage, currentPage);
      book.classList.toggle("is-open", currentPage > 0);
    } else if (currentPage === 0) {
      book.classList.remove("is-open", "is-opening");
      cover.hidden = false;
      spread.setAttribute("aria-hidden", "true");
    } else {
      const spreadStart = normalizeDesktopPage(currentPage);
      currentPage = spreadStart;
      setImage(leftImage, spreadStart);
      setImage(rightImage, spreadStart + 1);
      cover.hidden = true;
      spread.setAttribute("aria-hidden", "false");
      book.classList.add("is-open");
      book.classList.remove("is-opening");
    }
    updateControls();
    preloadNearby();
  };

  const finishTurn = (nextPage) => {
    currentPage = nextPage;
    turner.className = "menu-book__turner";
    turnFront.removeAttribute("src");
    turnBack.removeAttribute("src");
    isAnimating = false;
    render();
  };

  const openCover = () => {
    if (isAnimating || currentPage !== 0) return;
    isAnimating = true;
    hint.classList.add("is-hidden");
    if (mobileQuery.matches || reducedMotion.matches) {
      finishTurn(1);
      return;
    }
    setImage(leftImage, 1);
    setImage(rightImage, 2);
    spread.setAttribute("aria-hidden", "false");
    book.classList.add("is-opening");
    window.setTimeout(() => finishTurn(1), 680);
  };

  const turnTo = (nextPage, direction) => {
    if (isAnimating || nextPage < 0 || nextPage >= pageCount || nextPage === currentPage) return;
    if (currentPage === 0 && direction === "next") {
      openCover();
      return;
    }
    isAnimating = true;
    hint.classList.add("is-hidden");
    if (reducedMotion.matches) {
      finishTurn(nextPage);
      return;
    }
    if (mobileQuery.matches) {
      turnFront.src = pagePath(currentPage);
      turnBack.src = pagePath(nextPage);
      turner.className = `menu-book__turner is-active is-${direction}`;
      window.setTimeout(() => finishTurn(nextPage), 560);
      return;
    }
    const currentSpread = normalizeDesktopPage(currentPage);
    const nextSpread = normalizeDesktopPage(nextPage);
    turnFront.src = pagePath(direction === "next" ? currentSpread + 1 : currentSpread);
    turnBack.src = pagePath(direction === "next" ? nextSpread : nextSpread + 1);
    setImage(leftImage, nextSpread);
    setImage(rightImage, nextSpread + 1);
    turner.className = `menu-book__turner is-active is-${direction}`;
    window.setTimeout(() => finishTurn(nextSpread), 680);
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
    if (event.key === "ArrowRight") { event.preventDefault(); next(); }
    else if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
  });

  surface.addEventListener("pointerdown", (event) => {
    if (!mobileQuery.matches || isAnimating || !event.isPrimary) return;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    startTime = Date.now();
    gestureAxis = "pending";
  });

  surface.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId || gestureAxis === "vertical") return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    if (gestureAxis === "pending" && Math.max(Math.abs(deltaX), Math.abs(deltaY)) > 9) {
      gestureAxis = Math.abs(deltaX) > Math.abs(deltaY) * 1.2 ? "horizontal" : "vertical";
    }
  });

  surface.addEventListener("pointerup", (event) => {
    if (event.pointerId !== pointerId) return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    const duration = Math.max(1, Date.now() - startTime);
    const velocity = Math.abs(deltaX) / duration;
    const isSwipe = gestureAxis === "horizontal" && Math.abs(deltaX) > Math.abs(deltaY) * 1.2 && (Math.abs(deltaX) >= 50 || (Math.abs(deltaX) >= 28 && velocity > .55));
    const isTap = Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10;
    pointerId = null;
    gestureAxis = "idle";
    if (isSwipe) deltaX < 0 ? next() : previous();
    else if (isTap) {
      const rect = surface.getBoundingClientRect();
      const ratio = (event.clientX - rect.left) / rect.width;
      if (currentPage === 0) openCover();
      else if (ratio <= .28) previous();
      else if (ratio >= .72) next();
    }
  });

  surface.addEventListener("pointercancel", () => { pointerId = null; gestureAxis = "idle"; });

  const updateFullscreenLabel = () => {
    fullscreenButton.textContent = document.fullscreenElement ? "Exit Fullscreen" : "View Fullscreen";
  };

  fullscreenButton.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (stage.requestFullscreen) await stage.requestFullscreen();
    } catch {
      // Fullscreen can be denied by browser policy; the book remains usable.
    } finally {
      window.setTimeout(updateFullscreenLabel, 80);
    }
  });

  document.addEventListener("fullscreenchange", updateFullscreenLabel);
  document.addEventListener("fullscreenerror", updateFullscreenLabel);

  mobileQuery.addEventListener("change", () => {
    currentPage = mobileQuery.matches ? currentPage : normalizeDesktopPage(currentPage);
    isAnimating = false;
    turner.className = "menu-book__turner";
    render();
  });

  render();
  window.setTimeout(() => { loadPage(1); loadPage(2); }, 250);
}

initMenuBook();
