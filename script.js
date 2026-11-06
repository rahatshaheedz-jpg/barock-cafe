const contactForm = document.querySelector("[data-contact-form]");
const toast = document.querySelector("[data-toast]");
const year = document.querySelector("[data-year]");
const revealItems = document.querySelectorAll(".reveal");
const web3FormsEndpoint = ["https://api.web3forms.com", "submit"].join("/");
const web3FormsAccessKey = ["9a69aef0", "2ec6", "43c9", "b2c4", "f59c89d8107d"].join("-");
const defaultCafeImage = "./assets/photography-new/coffee.webp";

// Content is available immediately; motion never gates interaction.
document.body.classList.add('hero-ready');

year.textContent = new Date().getFullYear();

function initScrollProgress() {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  const bar = document.createElement("span");
  bar.className = "scroll-progress__bar";
  progress.appendChild(bar);
  document.body.prepend(progress);
  const header = document.querySelector(".site-header");
  let progressFrame = 0;

  const updateProgress = () => {
    progressFrame = 0;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollable > 0 ? window.scrollY / scrollable : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, percentage))})`;
    header?.classList.toggle("is-scrolled", window.scrollY > 18);
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
    rootMargin: "0px 0px -24px 0px",
    threshold: 0.08,
  },
);

revealItems.forEach((item) => revealObserver.observe(item));

function showToast(message) {
  const status = contactForm.querySelector("[data-form-status]");
  if (status) status.textContent = message;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
}



contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (contactForm.getAttribute("aria-busy") === "true") return;

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

  contactForm.setAttribute("aria-busy", "true");
  contactForm.querySelector("[data-form-status]").textContent = "Sending your message...";
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
    contactForm.setAttribute("aria-busy", "false");
    submitButton.disabled = false;
    submitButton.textContent = defaultButtonText;
  }
});

const mapActivate=document.querySelector('[data-map-activate]');
mapActivate?.addEventListener('click',()=>{const map=document.querySelector('[data-map-src]');map.src=map.dataset.mapSrc;map.hidden=false;mapActivate.hidden=true;});

// Phone rails (Signature Sips, The BAROCK Experience): bleed to the screen edge and show swipe progress.
(() => {
  const rails = [...document.querySelectorAll('.signature-sips__grid, .experience-grid')];
  if (!rails.length) return;
  const phone = matchMedia('(max-width: 760px)');
  const fit = () => rails.forEach(rail => {
    rail.style.removeProperty('--rail-gutter');
    if (!phone.matches) { rail.removeAttribute('tabindex'); rail.removeAttribute('role'); rail.removeAttribute('aria-label'); return; }
    // keyboard users can scroll the rail with the arrow keys
    rail.tabIndex = 0; rail.setAttribute('role', 'region');
    rail.setAttribute('aria-label', rail.closest('section')?.querySelector('h2')?.textContent.trim() || 'Photos');
    const parent = rail.parentElement.getBoundingClientRect();
    rail.style.setProperty('--rail-gutter', Math.max(12, Math.round(parent.left)) + 'px');
  });
  rails.forEach(rail => {
    const bar = rail.nextElementSibling?.classList.contains('rail-hint') ? rail.nextElementSibling : null;
    if (!bar) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = rail.scrollWidth - rail.clientWidth;
      const visible = rail.clientWidth / Math.max(rail.scrollWidth, 1);
      const progress = max > 0 ? visible + (1 - visible) * (rail.scrollLeft / max) : 1;
      bar.style.setProperty('--rail-progress', progress.toFixed(3));
    };
    rail.addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
    addEventListener('resize', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
    update();
  });
  fit();
  phone.addEventListener('change', fit);
  addEventListener('resize', fit, { passive: true });
})();

// Glass panels: a soft Tiffany light follows the pointer (desktop only).
(() => {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.contact-form, .visit-details').forEach((panel) => {
    panel.classList.add('spot');
    let frame = 0, x = 0, y = 0;
    panel.addEventListener('pointermove', (event) => {
      x = event.clientX; y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const box = panel.getBoundingClientRect();
        panel.style.setProperty('--mx', `${x - box.left}px`);
        panel.style.setProperty('--my', `${y - box.top}px`);
      });
    }, { passive: true });
  });
})();
