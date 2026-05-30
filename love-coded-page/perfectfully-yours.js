const revealItems = document.querySelectorAll(".reveal");
const form = document.querySelector("[data-pf-form]");
const toast = document.querySelector("[data-pf-toast]");

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
