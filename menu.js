const menuItems = [
  {
    name: "Classic Cappuccino",
    category: "hot",
    categoryLabel: "Hot Coffee",
    description: "Velvety milk, rich espresso, and a soft signature foam.",
    price: "BDT 280",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/menu-cappuccino-dOQkuuY3.jpg",
    popular: true,
  },
  {
    name: "Double Espresso",
    category: "hot",
    categoryLabel: "Hot Coffee",
    description: "Two intense shots with golden crema and a clean finish.",
    price: "BDT 220",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/menu-espresso-CnmzVZk6.jpg",
    popular: false,
  },
  {
    name: "Signature Latte",
    category: "hot",
    categoryLabel: "Hot Coffee",
    description: "Slow-steamed milk, house espresso, and a hand-poured rosetta.",
    price: "BDT 340",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/signature-latte-BiROs_4w.jpg",
    popular: true,
  },
  {
    name: "Slow Cold Brew",
    category: "cold",
    categoryLabel: "Cold Coffee",
    description: "Steeped for 16 hours with a smooth chocolate-like body.",
    price: "BDT 320",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/menu-coldbrew-BLwLUPhm.jpg",
    popular: true,
  },
  {
    name: "Iced Caramel Coffee",
    category: "cold",
    categoryLabel: "Cold Coffee",
    description: "Espresso over ice with house caramel and a cream finish.",
    price: "BDT 360",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/iced-caramel-C_8bRu5i.jpg",
    popular: false,
  },
  {
    name: "Mocha Cloud",
    category: "cold",
    categoryLabel: "Cold Coffee",
    description: "Cold espresso, cocoa, milk, and a cloud of whipped cream.",
    price: "BDT 390",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/gallery-cappuccino-D37XPvl8.jpg",
    popular: false,
  },
  {
    name: "Berry Bloom Refresher",
    category: "refreshers",
    categoryLabel: "Refreshers",
    description: "Mixed berries, mint, citrus, and a sparkling lift.",
    price: "BDT 300",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/menu-refresher-CDhCwMp1.jpg",
    popular: true,
  },
  {
    name: "Citrus Mint Cooler",
    category: "refreshers",
    categoryLabel: "Refreshers",
    description: "Fresh lemon, mint, soda, and a crisp cafe-style finish.",
    price: "BDT 260",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/gallery-beans-f9SuyNaU.jpg",
    popular: false,
  },
  {
    name: "Berry Cheesecake",
    category: "desserts",
    categoryLabel: "Desserts",
    description: "Vanilla cheesecake layered with seasonal berries.",
    price: "BDT 380",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/menu-cheesecake-IJxGKb95.jpg",
    popular: true,
  },
  {
    name: "Molten Chocolate",
    category: "desserts",
    categoryLabel: "Desserts",
    description: "Warm chocolate centre, dusted cocoa, and a rich dark crumb.",
    price: "BDT 420",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/chocolate-dessert-DDRWZGfI.jpg",
    popular: false,
  },
  {
    name: "Butter Croissant",
    category: "desserts",
    categoryLabel: "Desserts",
    description: "Flaky, golden, and baked fresh for a slow morning coffee.",
    price: "BDT 240",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/gallery-pastries-BVf-ZN5N.jpg",
    popular: false,
  },
  {
    name: "Classic Club Sandwich",
    category: "snacks",
    categoryLabel: "Snacks",
    description: "Triple stacked with chicken, greens, cheese, and fries.",
    price: "BDT 450",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/menu-sandwich-CYoZrlWE.jpg",
    popular: true,
  },
  {
    name: "Truffle Chicken Toast",
    category: "snacks",
    categoryLabel: "Snacks",
    description: "Toasted sourdough, creamy chicken, herbs, and truffle notes.",
    price: "BDT 390",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/gallery-friends-EGdaPmPu.jpg",
    popular: false,
  },
];

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const year = document.querySelector("[data-year]");
const searchInput = document.querySelector("[data-menu-search]");
const categoryButtons = document.querySelectorAll("[data-menu-category]");
const menuList = document.querySelector("[data-menu-list]");
const menuCount = document.querySelector("[data-menu-count]");
const emptyState = document.querySelector("[data-empty-state]");
const revealItems = document.querySelectorAll(".reveal");

let activeCategory = "all";
let searchTerm = "";

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

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}

function getVisibleItems() {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return menuItems.filter((item) => {
    const categoryMatches = activeCategory === "all" || item.category === activeCategory;
    const searchMatches =
      !normalizedSearch ||
      item.name.toLowerCase().includes(normalizedSearch) ||
      item.description.toLowerCase().includes(normalizedSearch) ||
      item.categoryLabel.toLowerCase().includes(normalizedSearch);

    return categoryMatches && searchMatches;
  });
}

function renderMenu() {
  const visibleItems = getVisibleItems();

  menuList.innerHTML = visibleItems
    .map(
      (item) => `
        <article class="menu-product-card reveal is-visible">
          <div class="menu-product-media">
            <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" />
            ${item.popular ? '<span class="popular-badge">Popular</span>' : ""}
          </div>
          <div class="menu-product-body">
            <span>${escapeHtml(item.categoryLabel)}</span>
            <div class="menu-product-title">
              <h2>${escapeHtml(item.name)}</h2>
              <strong>${escapeHtml(item.price)}</strong>
            </div>
            <p>${escapeHtml(item.description)}</p>
          </div>
        </article>
      `,
    )
    .join("");

  menuCount.textContent = String(visibleItems.length);
  emptyState.hidden = visibleItems.length > 0;
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

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.menuCategory;

    categoryButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });

    renderMenu();
  });
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderMenu();
});

renderMenu();
