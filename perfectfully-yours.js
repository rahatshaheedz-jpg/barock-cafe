const revealItems = document.querySelectorAll(".reveal");
const form = document.querySelector("[data-pf-form]");
const toast = document.querySelector("[data-pf-toast]");
const defaultCafeImage = "./assets/site/hero-coffee.svg";

function initScrollProgress() {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  progress.innerHTML = '<span class="scroll-progress__bar"></span>';
  document.body.prepend(progress);

  const bar = progress.querySelector(".scroll-progress__bar");
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
    document.querySelector(".pf-nav")?.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}

initScrollProgress();

function initImageFallbacks() {
  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        if (image.dataset.fallbackApplied === "true") {
          return;
        }

        image.dataset.fallbackApplied = "true";
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
    threshold: 0.16,
  },
);

revealItems.forEach((item) => revealObserver.observe(item));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
});
