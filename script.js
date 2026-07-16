const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
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

function initMobileNavigation() {
  if (!menuToggle || !mobileMenu) {
    return;
  }

  const links = [...mobileMenu.querySelectorAll("a")];
  const backdrop = document.createElement("button");
  let navState = "closed";
  let closeTimer = 0;
  let scrollY = 0;

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
      links[0]?.focus({ preventScroll: true });
    }, 360);
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

  menuToggle.addEventListener("click", () => {
    if (navState === "open" || navState === "opening") {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu({ restoreFocus: false });
    }
  });

  backdrop.addEventListener("click", () => closeMenu());

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      closeMenu({ restoreFocus: false });
    }
  });
}

initMobileNavigation();

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
