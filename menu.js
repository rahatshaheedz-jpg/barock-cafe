const menuCategories = [
  {
    id: "coffee-hot-drinks",
    title: "Coffee & Hot Drinks",
    subtitle: "Classic brews and warm comfort",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/menu-cappuccino-dOQkuuY3.jpg",
    items: [
      "Cappuccino",
      "Cafe Latte",
      "Espresso",
      "Macchiato",
      "Caffe Americano",
      "Caffe Mocha",
      "Caramel Latte",
      "Very Vanilla Latte",
      "Chocolate Macadamia Latte",
      "Tiramisu Cappuccino",
      "Toffee Nut Latte",
      "Classic Hot Chocolate",
      "Flavoured Hot Chocolate",
      "Peppermint Tea",
      "Green Tea",
      "Other Teas",
    ],
  },
  {
    id: "cold-drinks-chillers",
    title: "Cold Drinks & Chillers",
    subtitle: "Iced, refreshing, and signature coolers",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/iced-caramel-C_8bRu5i.jpg",
    items: [
      "Iced Latte",
      "Iced Mocha",
      "Iced Caramel Latte",
      "Iced Americano",
      "Espresso Chiller",
      "Mocha Chiller",
      "Chocolate Chiller",
      "Cookies N Cream Chiller",
      "Vanilla Mint Chiller",
      "Strawberry Chiller",
      "Over Ice Drinks",
      "Smoothies",
      "Fusion Drinks",
      "Lychee Cooler",
    ],
  },
  {
    id: "appetizers-starters",
    title: "Appetizers / Starters",
    subtitle: "Quick bites to begin your moment",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/gallery-pastries-BVf-ZN5N.jpg",
    note: "Available from 12 PM at Gulshan 1 & Gulshan 2",
    items: [
      "Fried Calamari Rings",
      "Chicken Lemon Lolly",
      "Chicken Momo",
      "Dumplings",
      "Buffalo Wings",
      "Basil Prawn Rolls",
      "Soy Garlic Mushroom",
      "Tuna Pattie with Mint Sauce",
      "Assorted Dim Sums",
      "Prawn Hargow",
      "Velvet Corn Chicken Dumplings",
      "Cheesy Dumplings",
    ],
  },
  {
    id: "sandwiches-burgers-fast-food",
    title: "Sandwiches, Burgers & Fast Food",
    subtitle: "Hearty cafe favorites",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/menu-sandwich-CYoZrlWE.jpg",
    items: [
      "Club Sandwich",
      "Grilled Chicken Sandwich",
      "Smoked Chicken Sandwich",
      "Turkish Chicken Sandwich",
      "Beef Truffle Burger",
      "Mediterranean Chicken in Focaccia",
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Real thin crust delights",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/gallery-friends-EGdaPmPu.jpg",
    items: [
      "Margherita Pizza",
      "BBQ Chicken Pizza",
      "Crispy Chicken Pizza",
      "Spicy Beef Pizza",
      "Butter Chicken Pizza",
      "Meat Lover's Pizza",
      "Chicken Supreme Pizza",
    ],
  },
  {
    id: "kitchen-items-mains",
    title: "Kitchen Items / Mains",
    subtitle: "Signature plates and all-day specials",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/signature-latte-BiROs_4w.jpg",
    items: [
      "Prawn & Calamari Spinach Apple Pasta",
      "Chicken Parmesan",
      "BBQ Chicken with Veggies & Mash",
      "Citrus Miso Prawn & Mango Salad",
      "Classic British-Style Rib-eye with Yorkshire Pudding",
      "Melted Cheese Omelette",
      "Croque Monsieur",
      "Mini Breakfast",
      "Granola",
      "Biscoff French Toast",
      "Chocolate Waffle",
      "Meat Lover's Platter",
      "Whole Grilled Chicken",
      "Sharing Platters",
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Sweet endings, perfectly yours",
    image: "https://preview--aroma-gate-landing.lovable.app/assets/menu-cheesecake-IJxGKb95.jpg",
    items: [
      "Blueberry Blast",
      "Choco Fantasy",
      "Red Velveteen",
      "Salted Caramel Cheesecake",
      "Waffles",
      "French Toast with Ice Cream",
    ],
  },
];

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const year = document.querySelector("[data-year]");
const searchInput = document.querySelector("[data-menu-search]");
const menuList = document.querySelector("[data-menu-list]");
const menuCount = document.querySelector("[data-menu-count]");
const emptyState = document.querySelector("[data-empty-state]");
const revealItems = document.querySelectorAll(".reveal");

let openCategoryId = "";
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

function getVisibleCategories() {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  if (!normalizedSearch) {
    return menuCategories.map((category) => ({
      ...category,
      visibleItems: category.items,
      hasSearchMatch: false,
    }));
  }

  return menuCategories
    .map((category) => {
      const categoryMatches =
        category.title.toLowerCase().includes(normalizedSearch) ||
        category.subtitle.toLowerCase().includes(normalizedSearch);
      const visibleItems = category.items.filter((item) =>
        item.toLowerCase().includes(normalizedSearch),
      );

      return {
        ...category,
        visibleItems: categoryMatches ? category.items : visibleItems,
        hasSearchMatch: categoryMatches || visibleItems.length > 0,
      };
    })
    .filter((category) => category.hasSearchMatch);
}

function getTotalVisibleItems(categories) {
  return categories.reduce((total, category) => total + category.visibleItems.length, 0);
}

function renderMenu() {
  const visibleCategories = getVisibleCategories();

  if (searchTerm.trim() && visibleCategories.length === 1) {
    openCategoryId = visibleCategories[0].id;
  }

  menuList.innerHTML = visibleCategories
    .map((category, index) => {
      const isOpen = category.id === openCategoryId;
      const itemList = category.visibleItems
        .map(
          (item) => `
            <li>
              <span>${escapeHtml(item)}</span>
              <strong>BDT ___</strong>
            </li>
          `,
        )
        .join("");

      return `
        <article class="menu-category-card reveal is-visible${isOpen ? " is-open" : ""}" style="--delay: ${index * 80}ms">
          <button
            class="menu-category-trigger"
            type="button"
            data-category-id="${category.id}"
            aria-expanded="${isOpen}"
            aria-controls="${category.id}-panel"
          >
            <span class="menu-category-media">
              <img src="${category.image}" alt="${escapeHtml(category.title)}" loading="lazy" />
            </span>
            <span class="menu-category-content">
              <span class="menu-category-kicker">${String(category.visibleItems.length).padStart(2, "0")} items</span>
              <span class="menu-category-title">${escapeHtml(category.title)}</span>
              <span class="menu-category-subtitle">${escapeHtml(category.subtitle)}</span>
              <span class="menu-category-action">
                View Items
                <span class="menu-category-icon" aria-hidden="true"></span>
              </span>
            </span>
          </button>
          <div class="menu-category-panel" id="${category.id}-panel">
            <div class="menu-category-panel-inner">
              ${category.note ? `<p class="menu-category-note">${escapeHtml(category.note)}</p>` : ""}
              <ul class="menu-item-list">
                ${itemList}
              </ul>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  menuCount.textContent = String(getTotalVisibleItems(visibleCategories));
  emptyState.hidden = visibleCategories.length > 0;
}

function toggleCategory(categoryId) {
  openCategoryId = openCategoryId === categoryId ? "" : categoryId;
  renderMenu();

  const openedCard = document.querySelector(`[data-category-id="${categoryId}"]`);
  if (openedCard && openCategoryId === categoryId) {
    openedCard.closest(".menu-category-card").scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
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

menuList.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-category-id]");

  if (!trigger) {
    return;
  }

  toggleCategory(trigger.dataset.categoryId);
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderMenu();
});

renderMenu();
