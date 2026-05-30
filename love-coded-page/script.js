const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const filterButtons = document.querySelectorAll("[data-filter]");
const menuCards = document.querySelectorAll(".menu-card");
const contactForm = document.querySelector("[data-contact-form]");
const toast = document.querySelector("[data-toast]");
const year = document.querySelector("[data-year]");
const revealItems = document.querySelectorAll(".reveal");

year.textContent = new Date().getFullYear();

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

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.reset();
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
});
