const menuCategories = [
  {
    id: "classics",
    title: "Classics",
    subtitle: "Warm espresso classics and Barock signatures",
    image: "./assets/site/coffee-cup.svg",
    items: [
      { name: "Chocolate Macadamia Latte", price: "BDT 300" },
      { name: "Cappuccino", price: "BDT 385" },
      { name: "Cafe Latte", price: "BDT 300" },
      { name: "Espresso", price: "BDT 385" },
      { name: "Macchiato", price: "BDT 275" },
      { name: "Caffe Mocha", price: "BDT 275" },
      { name: "Caffe Americano", price: "BDT 385" },
      { name: "Caramel Latte", price: "BDT 375" },
      { name: "Vanilla Latte", price: "BDT 255" },
      { name: "Toffee Nut Latte", price: "BDT 385" },
    ],
  },
  {
    id: "hot-chocolate-tea",
    title: "Hot Chocolate & Tea",
    subtitle: "Cozy chocolate pours and calming teas",
    image: "./assets/site/coffee-cup.svg",
    items: [
      { name: "Salted Caramel Hot Chocolate", price: "BDT 420" },
      { name: "White Hot Chocolate", price: "BDT 450" },
      { name: "Classic Hot Chocolate", price: "BDT 475" },
      { name: "Caramel Hot Chocolate", price: "BDT 475" },
      { name: "Nutella Hot Chocolate", price: "BDT 525" },
      { name: "Peppermint Tea", price: "BDT 150" },
      { name: "Green Tea", price: "BDT 150" },
      { name: "Lemon Tea", price: "BDT 150" },
      { name: "Black Tea", price: "BDT 150" },
      { name: "Regular Tea", price: "BDT 150" },
    ],
  },
  {
    id: "iced-coffee-chillers",
    title: "Iced Coffee & Chillers",
    subtitle: "Cold coffee, creamy chillers, and iced comfort",
    image: "./assets/site/iced-coffee.svg",
    items: [
      { name: "Iced Latte", price: "BDT 350" },
      { name: "Iced Mocha", price: "BDT 475" },
      { name: "Iced Caramel Latte", price: "BDT 400" },
      { name: "Iced Salted Caramel Latte", price: "BDT 385" },
      { name: "Choco Cold Coffee", price: "BDT 435" },
      { name: "Iced Vanilla Latte", price: "BDT 450" },
      { name: "Iced Americano", price: "BDT 300" },
      { name: "Chocolate Chiller", price: "BDT 400" },
      { name: "Cookies N Cream Chiller", price: "BDT 475" },
      { name: "Vanilla Mint Chiller", price: "BDT 475" },
      { name: "Strawberry Chiller", price: "BDT 475" },
      { name: "Dark Mocha Latte", price: "BDT 450" },
    ],
  },
  {
    id: "refreshers",
    title: "Refreshers",
    subtitle: "Fruit-forward coolers and bright sips",
    image: "./assets/site/iced-coffee.svg",
    items: [
      { name: "Fresh Lime", price: "BDT 350" },
      { name: "Mango Refresher", price: "BDT 355" },
      { name: "Sweet Orange Refresher", price: "BDT 350" },
      { name: "Watermelon Refresher", price: "BDT 350" },
      { name: "Peach Refresher", price: "BDT 300" },
      { name: "Mint Lemonade", price: "BDT 400" },
      { name: "Apple Refresher", price: "BDT 400" },
      { name: "Strawberry Refresher", price: "BDT 400" },
      { name: "Lychee Refresher", price: "BDT 400" },
      { name: "Classic Mojito", price: "BDT 350" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    subtitle: "Stacked cafe favorites",
    image: "./assets/site/sandwich.svg",
    items: [
      { name: "Club Sandwich", price: "BDT 550" },
      { name: "Crispy Chicken Sandwich", price: "BDT 550" },
      { name: "Turkish Chicken Sandwich", price: "BDT 600" },
      { name: "Roasted Beef Sandwich", price: "BDT 580" },
      { name: "Barock Special Sandwich", price: "BDT 600" },
      { name: "Smoked Chicken Sandwich", price: "BDT 550" },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "Beef and chicken burgers made hearty",
    image: "./assets/site/sandwich.svg",
    items: [
      { name: "Beef Burger", price: "BDT 420" },
      { name: "Beef with Cheese Burger", price: "BDT 550" },
      { name: "Double Beef Signature Burger", price: "BDT 520" },
      { name: "Crispy Chicken Burger", price: "BDT 380" },
      { name: "Barock Special Burger", price: "BDT 380" },
      { name: "Chicken with Cheese Burger", price: "BDT 400" },
      { name: "Double Chicken Signature Burger", price: "BDT 550" },
      { name: "Classic Chicken Burger", price: "BDT 400" },
    ],
  },
  {
    id: "soup-starter",
    title: "Soup & Starter",
    subtitle: "Small plates, soups, dim sums, and quick bites",
    image: "./assets/site/dessert.svg",
    items: [
      { name: "Chicken Momo", price: "BDT 650" },
      { name: "Basil Prawn Rolls", price: "BDT 450" },
      { name: "Buffalo Wings", price: "BDT 350" },
      { name: "Assorted Dim Sums", price: "BDT 499" },
      { name: "Corn Soup", price: "BDT 450" },
      { name: "Thai Soup", price: "BDT 450" },
      { name: "Chicken Dumplings", price: "BDT 299" },
      { name: "Clear Soup", price: "BDT 299" },
      { name: "Mixed Vegetable Soup", price: "BDT 350" },
      { name: "Barock Special Soup", price: "BDT 299" },
      { name: "Soy Garlic Mushroom", price: "BDT 450" },
      { name: "Chicken Lemon Lolly", price: "BDT 499" },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    subtitle: "Thin and medium crust house pizzas",
    image: "./assets/site/friends.svg",
    note: "Pizza prices are shown as small / medium where listed in the menu.",
    items: [
      {
        name: "Margherita Pizza",
        price: "BDT 560 / 895",
        description: "Classic tomato sauce, mozzarella cheese, fresh basil, and oregano on a crisp crust.",
      },
      {
        name: "BBQ Chicken Pizza",
        price: "BDT 800 / 1400",
        description: "Smoky BBQ sauce, grilled chicken, mozzarella, capsicum, and onion.",
      },
      {
        name: "Crispy Chicken Pizza",
        price: "BDT 800 / 1400",
        description: "Crispy chicken, rich pizza sauce, mozzarella, capsicum, onion, and creamy mayo drizzle.",
      },
      {
        name: "Beef Supreme Pizza",
        price: "BDT 999 / 1799",
        description: "Seasoned beef, beef sausage, mozzarella, capsicum, onion, mushrooms, olives, and signature sauce.",
      },
      {
        name: "Meat Lover's Pizza",
        price: "BDT 899 / 1699",
        description: "Chicken, beef, pepperoni, beef sausage, mozzarella, capsicum, onion, and signature sauce.",
      },
      {
        name: "Spicy Beef Pizza",
        price: "BDT 850 / 1499",
        description: "Spicy beef, tomato sauce, mozzarella, capsicum, onion, chili flakes, and herbs.",
      },
      {
        name: "Chicken Supreme Pizza",
        price: "BDT 799 / 1399",
        description: "Tender chicken, mozzarella, capsicum, onion, mushrooms, olives, and signature sauce.",
      },
      {
        name: "Pepperoni Pizza",
        price: "BDT 699 / 1299",
        description: "Pepperoni slices with tomato sauce, mozzarella, oregano, and chili flakes.",
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    subtitle: "Creamy, spicy, baked, and loaded pasta plates",
    image: "./assets/site/coffee-cup.svg",
    items: [
      {
        name: "Chicken Alfredo Pasta",
        price: "BDT 250",
        description: "Creamy Alfredo sauce with grilled chicken, mushroom, cheese, and black pepper.",
      },
      {
        name: "Naga Chicken Pasta",
        price: "BDT 320",
        description: "Spicy creamy pasta with chicken, mushroom, cheese, and Barock's special naga sauce.",
      },
      {
        name: "Creamy Beef Mushroom Pasta",
        price: "BDT 220",
        description: "Tender beef or minced beef cooked with mushroom, cream sauce, mozzarella, and herbs.",
      },
      {
        name: "Four Seasons Pasta",
        price: "BDT 280",
        description: "Chicken, beef, shrimp, mushroom, capsicum, cheese, and creamy tomato sauce.",
      },
      {
        name: "Barock Signature Baked Pasta",
        price: "BDT 250",
        description: "Baked pasta with seasoned beef, mushroom, capsicum, mozzarella, and a golden cheesy crust.",
      },
    ],
  },
  {
    id: "fast-food",
    title: "Fast Food",
    subtitle: "Loaded fries, strips, wings, and quick snacks",
    image: "./assets/site/sandwich.svg",
    items: [
      { name: "Signature Loaded Fries", price: "BDT 420" },
      { name: "Chicken Strips", price: "BDT 399" },
      { name: "Crispy Chicken Wings", price: "BDT 420" },
      { name: "Onion Rings", price: "BDT 399" },
      { name: "Wedges", price: "BDT 450" },
      { name: "Spring Roll", price: "BDT 250" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Sweet Specials",
    subtitle: "Cakes, pastries, ice cream, and sweet endings",
    image: "./assets/site/dessert.svg",
    items: [
      { name: "Red Velvet", price: "BDT 250" },
      { name: "Salted Caramel Cheesecake", price: "BDT 250" },
      { name: "Strawberry Cake", price: "BDT 170" },
      { name: "Chocolate Cake", price: "BDT 280" },
      { name: "Vanilla Cake", price: "BDT 320" },
      { name: "Pudding", price: "BDT 320" },
      { name: "Brownie", price: "BDT 450" },
      { name: "Chocolate Chip", price: "BDT 200" },
      { name: "Blueberry Cheesecake", price: "BDT 199" },
      { name: "Plain Bagel", price: "BDT 180" },
      { name: "Croissant", price: "BDT 150" },
      { name: "Ice Cream Bowl", price: "BDT 200" },
      { name: "Ice Cream Scoop", price: "BDT 170" },
    ],
  },
  {
    id: "seafood",
    title: "Seafood Signatures",
    subtitle: "Fish, prawn, calamari, lobster, and premium seafood plates",
    image: "./assets/site/friends.svg",
    items: [
      {
        name: "Signature Smoked Salmon",
        price: "BDT 1499",
        description: "Smoked salmon with crispy fries, fresh green salad, and lemon butter sauce.",
      },
      {
        name: "King Prawn Supreme",
        price: "BDT 899",
        description: "King prawns with sauteed vegetables, creamy mashed potato, and garlic butter sauce.",
      },
      {
        name: "Signature Grilled Coral Fish",
        price: "BDT 650",
        description: "Grilled coral fish with sauteed vegetables, creamy mashed potato, and garlic butter sauce.",
      },
      {
        name: "Signature Pomfret Grill",
        price: "BDT 1850",
        description: "Grilled pomfret with mashed potato, sauteed vegetables, and garlic butter sauce.",
      },
      {
        name: "Seared Tuna Steak",
        price: "BDT 1150",
        description: "Seared tuna steak with creamy mash, sauteed vegetables, and garlic butter sauce.",
      },
      {
        name: "Lemon Butter Grilled Dory",
        price: "BDT 1465",
        description: "Grilled dory with lemon butter sauce, creamy mash, and sauteed vegetables.",
      },
      {
        name: "Fish & Chips",
        price: "BDT 650",
        description: "Crispy coral fish fillet with seasoned fries, salad, and tartar sauce.",
      },
      {
        name: "Barock Crispy Fish Fingers",
        price: "BDT 599",
        description: "Crispy fish fingers with tartar dip and classic mayonnaise.",
      },
      {
        name: "Barock Crispy Calamari",
        price: "BDT 350",
        description: "Crispy calamari rings with tartar dip and mayonnaise.",
      },
      {
        name: "Grilled Lobster Royale",
        price: "BDT 650",
        description: "Grilled lobster with creamy mashed potato and signature garlic butter sauce.",
      },
    ],
  },
  {
    id: "steaks-beef",
    title: "Steaks & Beef Specials",
    subtitle: "Premium grilled beef plates and sharing platters",
    image: "./assets/site/friends.svg",
    items: [
      {
        name: "Rib Steak",
        price: "BDT 2650",
        description: "Flame-grilled ribeye steak with potato wedges and smoky BBQ & hot chili sauce.",
      },
      {
        name: "T-Bone Steak",
        price: "BDT 2550",
        description: "T-bone steak with potato wedges or fried rice and smoky BBQ & hot chili sauce.",
      },
      {
        name: "Sirloin Steak",
        price: "BDT 2585",
        description: "Flame-grilled sirloin with wedges or fried rice and smoky BBQ & hot chili sauce.",
      },
      {
        name: "Barock Smoked Brisket",
        price: "BDT 2885",
        description: "Slow-smoked beef brisket with wedges or fried rice and smoky BBQ & hot chili sauce.",
      },
      {
        name: "Barock Tomahawk",
        price: "BDT 3335",
        description: "Premium tomahawk steak with wedges, fried rice, and smoky BBQ & hot chili sauce.",
      },
      {
        name: "Barock Special Beef Platter",
        price: "BDT 5499",
        description: "Sirloin, tenderloin, skirt steak, gourmet beef sausage, beef cheese sausage, and beef bacon with BBQ sauce.",
      },
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
const defaultCafeImage = "./assets/site/hero-coffee.svg";

let openCategoryId = "";
let searchTerm = "";

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
  return String(value).replace(/[&<>"']/g, (character) => {
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

function getItemSearchText(item) {
  return [item.name, item.price, item.description].filter(Boolean).join(" ").toLowerCase();
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
        getItemSearchText(item).includes(normalizedSearch),
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
            <li class="${item.description ? "has-description" : ""}">
              <span>
                ${escapeHtml(item.name)}
                ${item.description ? `<small>${escapeHtml(item.description)}</small>` : ""}
              </span>
              <strong>${escapeHtml(item.price || "BDT ___")}</strong>
            </li>
          `,
        )
        .join("");

      return `
        <article class="menu-category-card glass-card reveal is-visible${isOpen ? " is-open" : ""}" style="--delay: ${index * 80}ms">
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
              <span class="menu-category-action glass-button">
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
  initImageFallbacks();
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
