const revealItems = document.querySelectorAll(".reveal");
const form = document.querySelector("[data-pf-form]");
const toast = document.querySelector("[data-pf-toast]");
const defaultCafeImage = "./assets/site/hero-coffee.svg";
const web3FormsEndpoint = "https://api.web3forms.com/submit";
const web3FormsAccessKey = ["9a69aef0", "2ec6", "43c9", "b2c4", "f59c89d8107d"].join("-");

function initScrollProgress() {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  const bar = document.createElement("span");
  bar.className = "scroll-progress__bar";
  progress.appendChild(bar);
  document.body.prepend(progress);

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

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const emailInput = form.elements.email;
  const phoneInput = form.elements.phone;
  const submitButton = form.querySelector('button[type="submit"]');
  const defaultButtonText = submitButton.textContent;

  emailInput.value = emailInput.value.trim();
  phoneInput.value = phoneInput.value.trim();

  if (!emailInput.value) {
    showToast("Please enter your email address.");
    return;
  }

  const formData = new FormData(form);
  formData.append("access_key", web3FormsAccessKey);
  formData.append("subject", "New opening notification request from Barock Cafe Website");

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    const response = await fetch(web3FormsEndpoint, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Notification request failed");
    }

    form.reset();
    showToast("Thank you. We will notify you when Perfectfully Yours opens.");
  } catch (error) {
    showToast("Sorry, something went wrong. Please try again.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = defaultButtonText;
  }
});
