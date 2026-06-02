const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const filterButtons = document.querySelectorAll("[data-filter]");
const menuCards = document.querySelectorAll(".menu-card");
const contactForm = document.querySelector("[data-contact-form]");
const toast = document.querySelector("[data-toast]");
const year = document.querySelector("[data-year]");
const revealItems = document.querySelectorAll(".reveal");
const web3FormsEndpoint = ["https://api.web3forms.com", "submit"].join("/");
const web3FormsAccessKey = ["9a69aef0", "2ec6", "43c9", "b2c4", "f59c89d8107d"].join("-");
const defaultCafeImage = "./assets/site/hero-coffee.svg";

year.textContent = new Date().getFullYear();

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
    document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 18);
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

function initSignatureShowcase() {
  const section = document.querySelector("[data-signature-section]");

  if (!section) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = Array.from(section.querySelectorAll("[data-signature-item]")).map((item, index) => ({
    eyebrow: item.dataset.eyebrow,
    title: item.dataset.title,
    description: item.dataset.description,
    image: item.dataset.image,
    alt: item.dataset.alt,
    number: String(index + 1).padStart(2, "0"),
  }));

  const image = section.querySelector("[data-signature-image]");
  const eyebrow = section.querySelector("[data-signature-eyebrow]");
  const title = section.querySelector("[data-signature-title]");
  const description = section.querySelector("[data-signature-description]");
  const current = section.querySelector("[data-signature-current]");
  const copy = section.querySelector(".signature-copy");
  const pin = section.querySelector("[data-signature-pin]");
  const steps = Array.from(section.querySelectorAll("[data-signature-step]"));
  const orbs = section.querySelectorAll(".signature-orb");

  if (!items.length || !image || !eyebrow || !title || !description || !current || !pin) {
    section.classList.add("is-static");
    return;
  }

  const setActiveItem = (index) => {
    const item = items[index] || items[0];
    const rotation = index % 2 === 0 ? 10 : -10;

    if (window.gsap && !prefersReducedMotion) {
      gsap.killTweensOf([image, copy]);
      gsap.to(copy, {
        opacity: 0,
        y: 18,
        duration: 0.18,
        ease: "power2.out",
        onComplete: () => {
          image.src = item.image;
          image.alt = item.alt;
          eyebrow.textContent = item.eyebrow;
          title.textContent = item.title;
          description.textContent = item.description;
          current.textContent = item.number;

          gsap.fromTo(
            image,
            { rotate: rotation, scale: 0.92, opacity: 0.78 },
            { rotate: 0, scale: 1, opacity: 1, duration: 0.7, ease: "power3.out" },
          );
          gsap.to(copy, { opacity: 1, y: 0, duration: 0.48, ease: "power3.out" });
        },
      });
    } else {
      image.src = item.image;
      image.alt = item.alt;
      eyebrow.textContent = item.eyebrow;
      title.textContent = item.title;
      description.textContent = item.description;
      current.textContent = item.number;
    }
  };

  setActiveItem(0);

  if (prefersReducedMotion || !window.gsap || !window.ScrollTrigger) {
    section.classList.add("is-static");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width: 901px)": () => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin,
        pinSpacing: false,
        anticipatePin: 1,
      });

      steps.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveItem(index),
          onEnterBack: () => setActiveItem(index),
        });
      });

      gsap.to(image, {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(orbs, {
        y: -120,
        x: 38,
        rotate: 10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
  });

  image.addEventListener("load", () => ScrollTrigger.refresh());
  window.addEventListener("load", () => ScrollTrigger.refresh());
}

initSignatureShowcase();

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

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });

    menuCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const defaultButtonText = submitButton.textContent;
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
