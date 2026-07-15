const defaultCafeImage = "./assets/site/hero-coffee.svg";

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

const fallbackIngredients = "Prepared using the cafe's standard ingredients for this item.";
const fallbackPreparation = "Prepared fresh by the Barock Cafe team.";

let openCategoryId = "";
let searchTerm = "";
let lastFocusedMenuItem = null;
let previewOpenTimer = 0;
let previewCloseTimer = 0;
let activePreviewItem = null;
let isModalOpen = false;
let isModalClosing = false;
let modalHistoryPushed = false;
let scrollLockY = 0;
let previewAnchor = null;
let previewRafId = 0;
let sheetDrag = null;
let sheetDragRafId = 0;
let sheetDismissTimer = 0;
let modalCloseTimer = 0;
let lastPointerDragStart = 0;
let galleryDrag = null;

const sheetDismissDistanceRatio = 0.3;
const sheetDismissVelocity = 0.6;
const gallerySwipeDistance = 48;
const gallerySwipeVelocity = 0.42;

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

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getCategoryImage(categoryId) {
  const categoryImages = {
    classics: "./assets/site/coffee-cup.svg",
    "hot-chocolate-tea": "./assets/site/coffee-cup.svg",
    "iced-coffee-chillers": "./assets/site/iced-coffee.svg",
    refreshers: "./assets/site/iced-coffee.svg",
    sandwiches: "./assets/site/sandwich.svg",
    burgers: "./assets/site/sandwich.svg",
    "soup-starter": "./assets/site/dessert.svg",
    pizza: "./assets/site/friends.svg",
    pasta: "./assets/site/beans.svg",
    "fast-food": "./assets/site/sandwich.svg",
    desserts: "./assets/site/dessert.svg",
    seafood: "./assets/site/friends.svg",
    "steaks-beef": "./assets/site/interior.svg",
  };

  return categoryImages[categoryId] || defaultCafeImage;
}

const classicProductImages = {
  "chocolate-macadamia-latte": [
    {
      src: "/assets/menu/classics/chocolate-macadamia-latte-1.webp",
      alt: "Chocolate Macadamia Latte served at BAROCK CAFE",
      desktopPosition: "50% 49%",
      mobilePosition: "50% 48%",
    },
  ],
  cappuccino: [
    {
      src: "/assets/menu/classics/cappuccino-1.webp",
      alt: "Cappuccino served in a ceramic cup at BAROCK CAFE",
      desktopPosition: "50% 51%",
      mobilePosition: "50% 50%",
    },
    {
      src: "/assets/menu/classics/cappuccino-2.webp",
      alt: "Second view of BAROCK CAFE Cappuccino foam and cup",
      desktopPosition: "50% 52%",
      mobilePosition: "50% 50%",
    },
  ],
  "cafe-latte": [
    {
      src: "/assets/menu/classics/cafe-latte-1.webp",
      alt: "Cafe Latte served at BAROCK CAFE",
      desktopPosition: "50% 51%",
      mobilePosition: "50% 50%",
    },
  ],
  espresso: [
    {
      src: "/assets/menu/classics/espresso-1.webp",
      alt: "Espresso served at BAROCK CAFE",
      desktopPosition: "50% 53%",
      mobilePosition: "50% 51%",
    },
  ],
  macchiato: [
    {
      src: "/assets/menu/classics/macchiato-1.webp",
      alt: "Macchiato served at BAROCK CAFE",
      desktopPosition: "50% 51%",
      mobilePosition: "50% 50%",
    },
  ],
  "caffe-mocha": [
    {
      src: "/assets/menu/classics/caffe-mocha-1.webp",
      alt: "Caffe Mocha served at BAROCK CAFE",
      desktopPosition: "50% 50%",
      mobilePosition: "50% 49%",
    },
  ],
  "caffe-americano": [
    {
      src: "/assets/menu/classics/caffe-americano-1.webp",
      alt: "Caffe Americano served at BAROCK CAFE",
      desktopPosition: "50% 52%",
      mobilePosition: "50% 50%",
    },
  ],
  "caramel-latte": [
    {
      src: "/assets/menu/classics/caramel-latte-1.webp",
      alt: "Caramel Latte served at BAROCK CAFE",
      desktopPosition: "50% 51%",
      mobilePosition: "50% 49%",
    },
    {
      src: "/assets/menu/classics/caramel-latte-2.webp",
      alt: "Second view of BAROCK CAFE Caramel Latte",
      desktopPosition: "50% 51%",
      mobilePosition: "50% 50%",
    },
  ],
  "vanilla-latte": [
    {
      src: "/assets/menu/classics/vanilla-latte-1.webp",
      alt: "Vanilla Latte served at BAROCK CAFE",
      desktopPosition: "50% 51%",
      mobilePosition: "50% 49%",
    },
    {
      src: "/assets/menu/classics/vanilla-latte-2.webp",
      alt: "Second view of BAROCK CAFE Vanilla Latte",
      desktopPosition: "50% 52%",
      mobilePosition: "50% 50%",
    },
    {
      src: "/assets/menu/classics/vanilla-latte-3.webp",
      alt: "Third view of BAROCK CAFE Vanilla Latte",
      desktopPosition: "50% 51%",
      mobilePosition: "50% 50%",
    },
  ],
  "toffee-nut-latte": [
    {
      src: "/assets/menu/classics/toffee-nut-latte-1.webp",
      alt: "Toffee Nut Latte served at BAROCK CAFE",
      desktopPosition: "50% 50%",
      mobilePosition: "50% 48%",
    },
  ],
};

function getItemImages(itemName, categoryId) {
  const normalized = slugify(itemName);
  const imageMap = {
    ...classicProductImages,
    "iced-latte": [{ src: "./assets/site/iced-coffee.svg", alt: "Iced Latte illustration" }],
    "iced-caramel-latte": [{ src: "./assets/site/iced-coffee.svg", alt: "Iced Caramel Latte illustration" }],
    "iced-americano": [{ src: "./assets/site/iced-coffee.svg", alt: "Iced Americano illustration" }],
    "chocolate-cake": [{ src: "./assets/site/dessert.svg", alt: "Chocolate Cake illustration" }],
    "salted-caramel-cheesecake": [{ src: "./assets/site/dessert.svg", alt: "Salted Caramel Cheesecake illustration" }],
    "blueberry-cheesecake": [{ src: "./assets/site/dessert.svg", alt: "Blueberry Cheesecake illustration" }],
    "club-sandwich": [{ src: "./assets/site/sandwich.svg", alt: "Club Sandwich illustration" }],
    "smoked-chicken-sandwich": [{ src: "./assets/site/sandwich.svg", alt: "Smoked Chicken Sandwich illustration" }],
  };

  return imageMap[normalized] || [{ src: getCategoryImage(categoryId), alt: `${itemName} from BAROCK CAFE` }];
}

function getPrimaryImage(details) {
  return details.images?.[0] || { src: defaultCafeImage, alt: details.altText || "BAROCK CAFE menu item" };
}

function getCategoryTags(category) {
  const tagMap = {
    classics: ["Hot", "Coffee", "Espresso"],
    "hot-chocolate-tea": ["Hot", "Comfort Drink"],
    "iced-coffee-chillers": ["Cold", "Coffee", "Chiller"],
    refreshers: ["Cold", "Refreshing"],
    sandwiches: ["Savory", "Cafe Bite"],
    burgers: ["Savory", "Burger"],
    "soup-starter": ["Starter", "Shareable"],
    pizza: ["Pizza", "Baked"],
    pasta: ["Pasta", "Kitchen"],
    "fast-food": ["Snack", "Quick Bite"],
    desserts: ["Sweet", "Dessert"],
    seafood: ["Seafood", "Signature"],
    "steaks-beef": ["Beef", "Signature"],
  };

  return tagMap[category.id] || [category.title];
}

function normalizeIngredients(value) {
  if (Array.isArray(value)) {
    const ingredients = value.map((ingredient) => String(ingredient).trim()).filter(Boolean);
    return ingredients.length ? ingredients : [fallbackIngredients];
  }

  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }

  return [fallbackIngredients];
}

function normalizePreparation(value) {
  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }

  return fallbackPreparation;
}

function createMenuDetails() {
  const details = {};

  menuCategories.forEach((category) => {
    category.items.forEach((item) => {
      const id = `${category.id}-${slugify(item.name)}`;
      item.id = id;
      item.category = category.title;
      item.images = getItemImages(item.name, category.id);
      item.shortDescription = item.description || fallbackPreparation;
      item.ingredients = normalizeIngredients(item.ingredients || item.mainIngredients || item.ingredientList);
      item.preparation = normalizePreparation(item.preparation || item.preparationMethod || item.method);
      item.tags = getCategoryTags(category);
      details[id] = {
        id,
        name: item.name,
        price: item.price || "BDT ___",
        images: item.images,
        shortDescription: item.shortDescription,
        ingredients: item.ingredients,
        preparation: item.preparation,
        category: item.category,
        tags: item.tags,
        altText: `${item.name} from BAROCK CAFE`,
        note: item.note || "",
      };
    });
  });

  return details;
}

const menuDetailsById = createMenuDetails();

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

  const fragment = document.createDocumentFragment();

  visibleCategories.forEach((category, index) => {
    fragment.append(createCategoryCard(category, index, category.id === openCategoryId));
  });

  menuList.replaceChildren(fragment);

  menuCount.textContent = String(getTotalVisibleItems(visibleCategories));
  emptyState.hidden = visibleCategories.length > 0;
  initImageFallbacks();
}

function createCategoryCard(category, index, isOpen) {
  const card = createElement("article", `menu-category-card glass-card reveal is-visible${isOpen ? " is-open" : ""}`);
  card.style.setProperty("--delay", `${index * 80}ms`);

  const trigger = createElement("button", "menu-category-trigger");
  trigger.type = "button";
  trigger.dataset.categoryId = category.id;
  trigger.setAttribute("aria-expanded", String(isOpen));
  trigger.setAttribute("aria-controls", `${category.id}-panel`);

  const media = createElement("span", "menu-category-media");
  const image = document.createElement("img");
  image.src = category.image;
  image.alt = category.title;
  image.loading = "lazy";
  image.decoding = "async";
  media.append(image);

  const content = createElement("span", "menu-category-content");
  content.append(
    createElement("span", "menu-category-kicker", `${String(category.visibleItems.length).padStart(2, "0")} items`),
    createElement("span", "menu-category-title", category.title),
    createElement("span", "menu-category-subtitle", category.subtitle),
    createCategoryAction(),
  );

  trigger.append(media, content);

  const panel = createElement("div", "menu-category-panel");
  panel.id = `${category.id}-panel`;
  panel.setAttribute("aria-hidden", String(!isOpen));

  const panelInner = createElement("div", "menu-category-panel-inner");

  if (category.note) {
    panelInner.append(createElement("p", "menu-category-note", category.note));
  }

  const itemList = createElement("ul", "menu-item-list");
  category.visibleItems.forEach((item) => itemList.append(createMenuItem(item)));
  panelInner.append(itemList);
  panel.append(panelInner);
  card.append(trigger, panel);

  return card;
}

function createCategoryAction() {
  const action = createElement("span", "menu-category-action glass-button", "View Items");
  const icon = createElement("span", "menu-category-icon");
  icon.setAttribute("aria-hidden", "true");
  action.append(icon);
  return action;
}

function createMenuItem(item) {
  const listItem = createElement("li", item.description ? "has-description" : "");
  const button = createElement("button", "menu-item-button");
  button.type = "button";
  button.dataset.itemId = item.id;
  button.setAttribute("aria-label", `Open full details for ${item.name}`);

  const text = createElement("span");
  text.append(createElement("span", "", item.name));

  if (item.description) {
    text.append(createElement("small", "", item.description));
  }

  button.append(text, createElement("strong", "", item.price || "BDT ___"));
  listItem.append(button);

  return listItem;
}

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (typeof text === "string") {
    element.textContent = text;
  }

  return element;
}

function createMenuModal() {
  const overlay = createElement("div", "menu-modal-overlay");
  overlay.dataset.menuModal = "true";
  overlay.hidden = true;

  const dialog = createElement("section", "menu-modal glass-card");
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-labelledby", "menu-modal-title");
  dialog.setAttribute("tabindex", "-1");

  const header = createElement("header", "menu-modal-header");
  const handle = createElement("span", "menu-modal-handle");
  handle.setAttribute("aria-hidden", "true");
  const headerText = createElement("div", "menu-modal-header-text");
  const headerCategory = createElement("span");
  const headerTitle = createElement("strong");
  headerText.append(headerCategory, headerTitle);
  const closeButton = createElement("button", "menu-modal-close", "Close");
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close item details");
  closeButton.dataset.menuModalClose = "true";
  header.append(handle, headerText, closeButton);

  const imageWrap = createElement("div", "menu-modal-media");
  imageWrap.setAttribute("tabindex", "0");
  imageWrap.setAttribute("aria-label", "Product image gallery");
  const image = document.createElement("img");
  image.loading = "lazy";
  image.decoding = "async";
  image.width = 1200;
  image.height = 1200;
  image.sizes = "(max-width: 700px) 100vw, min(52vw, 750px)";
  const prevButton = createElement("button", "menu-gallery-control menu-gallery-control--prev");
  prevButton.type = "button";
  prevButton.setAttribute("aria-label", "Previous image");
  prevButton.textContent = "‹";
  const nextButton = createElement("button", "menu-gallery-control menu-gallery-control--next");
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", "Next image");
  nextButton.textContent = "›";
  const dots = createElement("div", "menu-gallery-dots");
  dots.setAttribute("aria-hidden", "true");
  const status = createElement("p", "menu-gallery-status");
  status.setAttribute("aria-live", "polite");
  imageWrap.append(image, prevButton, nextButton, dots, status);

  const body = createElement("div", "menu-modal-body");
  const category = createElement("p", "menu-modal-category");
  const title = createElement("h2", "menu-modal-title");
  title.id = "menu-modal-title";
  const price = createElement("p", "menu-modal-price");
  const description = createElement("p", "menu-modal-description");
  const tags = createElement("div", "menu-modal-tags");
  const ingredientsBlock = createElement("div", "menu-modal-block");
  const ingredientsTitle = createElement("h3", "", "Main ingredients");
  const ingredientsList = createElement("ul", "menu-modal-list");
  ingredientsBlock.append(ingredientsTitle, ingredientsList);
  const preparationBlock = createElement("div", "menu-modal-block");
  const preparationTitle = createElement("h3", "", "Preparation");
  const preparation = createElement("p");
  preparationBlock.append(preparationTitle, preparation);
  const note = createElement("p", "menu-modal-note");

  body.append(category, title, price, description, tags, ingredientsBlock, preparationBlock, note);
  dialog.append(header, imageWrap, body);
  overlay.append(dialog);
  document.body.append(overlay);

  return {
    overlay,
    dialog,
    header,
    handle,
    body,
    closeButton,
    imageWrap,
    image,
    prevButton,
    nextButton,
    dots,
    status,
    headerCategory,
    headerTitle,
    category,
    title,
    price,
    description,
    tags,
    ingredientsList,
    preparation,
    note,
  };
}

function createMenuPreview() {
  const preview = createElement("aside", "menu-preview glass-card");
  preview.dataset.menuPreview = "true";
  preview.hidden = true;
  preview.setAttribute("aria-hidden", "true");
  preview.setAttribute("role", "button");
  preview.setAttribute("tabindex", "-1");

  const image = document.createElement("img");
  image.loading = "lazy";
  image.decoding = "async";
  image.width = 96;
  image.height = 96;
  image.addEventListener("load", schedulePreviewPlacement);

  const content = createElement("div", "menu-preview-content");
  const title = createElement("h3");
  const price = createElement("strong");
  const description = createElement("p");
  content.append(title, price, description);
  preview.append(image, content);
  document.body.append(preview);

  return { preview, image, title, price, description };
}

const menuModal = createMenuModal();
const menuPreview = createMenuPreview();
const menuGallery = {
  images: [],
  activeIndex: 0,
  preload: new Set(),
};

function canShowHoverPreview() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function setImageWithFallback(image, src, altText) {
  image.dataset.fallbackApplied = "false";
  image.alt = altText;
  image.onerror = () => {
    if (image.dataset.fallbackApplied === "true") {
      return;
    }

    image.dataset.fallbackApplied = "true";
    image.src = defaultCafeImage;
  };
  image.src = src || defaultCafeImage;
}

function preloadGalleryImage(index) {
  const imageData = menuGallery.images[index];

  if (!imageData || menuGallery.preload.has(imageData.src)) {
    return;
  }

  menuGallery.preload.add(imageData.src);
  const image = new Image();
  image.decoding = "async";
  image.src = imageData.src;
}

function updateGalleryControls() {
  const isMultiImage = menuGallery.images.length > 1;
  menuModal.imageWrap.classList.toggle("has-multiple-images", isMultiImage);
  menuModal.prevButton.hidden = !isMultiImage;
  menuModal.nextButton.hidden = !isMultiImage;
  menuModal.dots.hidden = !isMultiImage;
  menuModal.status.textContent = isMultiImage
    ? `Image ${menuGallery.activeIndex + 1} of ${menuGallery.images.length}`
    : "";

  menuModal.dots.replaceChildren();

  if (!isMultiImage) {
    return;
  }

  menuGallery.images.forEach((_, index) => {
    const dot = createElement("span", index === menuGallery.activeIndex ? "is-active" : "");
    menuModal.dots.append(dot);
  });
}

function renderGalleryImage({ announce = false } = {}) {
  const imageData = menuGallery.images[menuGallery.activeIndex] || {
    src: defaultCafeImage,
    alt: "BAROCK CAFE menu item",
  };
  const imageFit = imageData.fit === "contain" ? "contain" : "cover";
  const desktopPosition = imageData.desktopPosition || imageData.position || "50% 50%";
  const mobilePosition = imageData.mobilePosition || imageData.position || desktopPosition;

  menuModal.image.classList.add("is-switching");
  menuModal.imageWrap.classList.toggle("is-contain-image", imageFit === "contain");
  menuModal.imageWrap.style.setProperty(
    "--gallery-backdrop-image",
    imageFit === "contain" ? `url("${imageData.src.replace(/"/g, "%22")}")` : "none",
  );
  menuModal.image.style.setProperty("--image-fit", imageFit);
  menuModal.image.style.setProperty("--image-position-desktop", desktopPosition);
  menuModal.image.style.setProperty("--image-position-mobile", mobilePosition);
  window.requestAnimationFrame(() => {
    setImageWithFallback(menuModal.image, imageData.src, imageData.alt);
    menuModal.image.style.transform = "";
    menuModal.image.classList.remove("is-dragging");
    window.setTimeout(() => menuModal.image.classList.remove("is-switching"), 120);
  });

  updateGalleryControls();

  if (!announce) {
    menuModal.status.textContent = "";
    window.requestAnimationFrame(updateGalleryControls);
  }

  if (menuGallery.images.length > 1) {
    preloadGalleryImage((menuGallery.activeIndex + 1) % menuGallery.images.length);
  }
}

function setModalGallery(images) {
  menuGallery.images = Array.isArray(images) && images.length
    ? images
    : [{ src: defaultCafeImage, alt: "BAROCK CAFE menu item" }];
  menuGallery.activeIndex = 0;
  menuGallery.preload.clear();
  galleryDrag = null;
  menuModal.image.style.transform = "";
  menuModal.image.classList.remove("is-dragging", "is-switching");
  renderGalleryImage();
}

function showGalleryImage(index) {
  if (menuGallery.images.length <= 1) {
    return;
  }

  const count = menuGallery.images.length;
  menuGallery.activeIndex = (index + count) % count;
  renderGalleryImage({ announce: true });
  preloadGalleryImage((menuGallery.activeIndex + 1) % count);
  preloadGalleryImage((menuGallery.activeIndex - 1 + count) % count);
}

function showNextGalleryImage() {
  showGalleryImage(menuGallery.activeIndex + 1);
}

function showPreviousGalleryImage() {
  showGalleryImage(menuGallery.activeIndex - 1);
}

function resetModalGallery() {
  galleryDrag = null;
  menuGallery.images = [];
  menuGallery.activeIndex = 0;
  menuGallery.preload.clear();
  menuModal.image.style.transform = "";
  menuModal.image.classList.remove("is-dragging", "is-switching");
  menuModal.imageWrap.classList.remove("has-multiple-images");
  menuModal.prevButton.hidden = true;
  menuModal.nextButton.hidden = true;
  menuModal.dots.hidden = true;
  menuModal.dots.replaceChildren();
  menuModal.status.textContent = "";
}

function resetGalleryDrag() {
  if (!galleryDrag) {
    return;
  }

  menuModal.image.style.transform = "";
  menuModal.image.classList.remove("is-dragging");
  galleryDrag = null;
}

function getGalleryClientPoint(event) {
  return {
    x: event.clientX ?? 0,
    y: event.clientY ?? 0,
  };
}

function startGalleryDrag(event) {
  if (
    menuGallery.images.length <= 1 ||
    event.button > 0 ||
    event.target.closest(".menu-gallery-control")
  ) {
    return;
  }

  const point = getGalleryClientPoint(event);
  galleryDrag = {
    pointerId: event.pointerId,
    startX: point.x,
    startY: point.y,
    lastX: point.x,
    lastTime: window.performance.now(),
    startTime: window.performance.now(),
    mode: "",
    velocity: 0,
  };

  try {
    menuModal.imageWrap.setPointerCapture?.(event.pointerId);
  } catch {
    // Pointer capture is an enhancement; swipe still works without it.
  }
}

function updateGalleryDrag(event) {
  if (!galleryDrag || event.pointerId !== galleryDrag.pointerId) {
    return;
  }

  const point = getGalleryClientPoint(event);
  const deltaX = point.x - galleryDrag.startX;
  const deltaY = point.y - galleryDrag.startY;
  const absX = Math.abs(deltaX);
  const absY = Math.abs(deltaY);

  if (!galleryDrag.mode && (absX > 8 || absY > 8)) {
    galleryDrag.mode = absX > absY * 1.15 ? "horizontal" : "vertical";
  }

  if (galleryDrag.mode !== "horizontal") {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  const now = window.performance.now();
  galleryDrag.velocity = (point.x - galleryDrag.lastX) / Math.max(now - galleryDrag.lastTime, 1);
  galleryDrag.lastX = point.x;
  galleryDrag.lastTime = now;
  menuModal.image.classList.add("is-dragging");
  menuModal.image.style.transform = `translate3d(${deltaX * 0.28}px, 0, 0)`;
}

function finishGalleryDrag(event, cancelled = false) {
  if (!galleryDrag || event.pointerId !== galleryDrag.pointerId) {
    return;
  }

  try {
    menuModal.imageWrap.releasePointerCapture?.(event.pointerId);
  } catch {
    // The browser may release capture automatically on cancellation.
  }

  const point = getGalleryClientPoint(event);
  const deltaX = point.x - galleryDrag.startX;
  const velocity = galleryDrag.velocity;
  const shouldChange =
    !cancelled &&
    galleryDrag.mode === "horizontal" &&
    (Math.abs(deltaX) >= gallerySwipeDistance || Math.abs(velocity) >= gallerySwipeVelocity);

  resetGalleryDrag();

  if (!shouldChange) {
    return;
  }

  if (deltaX < 0 || velocity < -gallerySwipeVelocity) {
    showNextGalleryImage();
  } else {
    showPreviousGalleryImage();
  }
}

function populateTags(container, tags) {
  container.replaceChildren();
  (Array.isArray(tags) ? tags : []).filter(Boolean).forEach((tag) => {
    container.append(createElement("span", "", tag));
  });
}

function populateIngredients(list, ingredients) {
  list.replaceChildren();
  normalizeIngredients(ingredients).forEach((ingredient) => {
    const item = createElement("li", "", ingredient);
    list.append(item);
  });
}

function populateModal(details) {
  const ingredients = normalizeIngredients(details.ingredients);
  const preparation = normalizePreparation(details.preparation);

  setModalGallery(details.images);
  menuModal.headerCategory.textContent = details.category;
  menuModal.headerTitle.textContent = details.name;
  menuModal.category.textContent = details.category;
  menuModal.title.textContent = details.name;
  menuModal.price.textContent = details.price;
  menuModal.description.textContent = details.shortDescription;
  populateTags(menuModal.tags, details.tags);
  populateIngredients(menuModal.ingredientsList, ingredients);
  menuModal.preparation.textContent = preparation;
  menuModal.note.textContent = details.note || "";
  menuModal.ingredientsList.closest(".menu-modal-block").hidden = ingredients.length === 0;
  menuModal.preparation.closest(".menu-modal-block").hidden = !preparation;
  menuModal.note.hidden = !details.note;
}

function getFocusableModalElements() {
  return Array.from(
    menuModal.dialog.querySelectorAll(
      'a[href]:not([hidden]), button:not([disabled]):not([hidden]), textarea:not([hidden]), input:not([hidden]), select:not([hidden]), [tabindex]:not([tabindex="-1"]):not([hidden])',
    ),
  );
}

function lockBodyScroll() {
  scrollLockY = window.scrollY || document.documentElement.scrollTop || 0;
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollLockY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : "";
  document.body.classList.add("menu-modal-open");
}

function unlockBodyScroll() {
  document.body.classList.remove("menu-modal-open");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.paddingRight = "";
  window.scrollTo(0, scrollLockY);
}

function isMobileBottomSheet() {
  return window.matchMedia("(hover: none), (pointer: coarse), (max-width: 700px)").matches;
}

function clearSheetDragFrame() {
  if (sheetDragRafId) {
    window.cancelAnimationFrame(sheetDragRafId);
    sheetDragRafId = 0;
  }
}

function resetSheetDragState({ keepClosingStyles = false } = {}) {
  window.clearTimeout(sheetDismissTimer);
  sheetDismissTimer = 0;
  clearSheetDragFrame();
  sheetDrag = null;
  menuModal.dialog.classList.remove("is-dragging", "is-snapping-back", "is-dismissing");
  menuModal.overlay.classList.remove("is-dragging", "is-snapping-back", "is-dismissing");

  if (!keepClosingStyles) {
    menuModal.dialog.style.transform = "";
    menuModal.overlay.style.opacity = "";
  }
}

function setSheetDragVisual(distance) {
  const safeDistance = Math.max(0, distance);
  const sheetHeight = sheetDrag?.sheetHeight || menuModal.dialog.getBoundingClientRect().height || 1;
  const progress = Math.min(safeDistance / (sheetHeight * 0.75), 1);

  menuModal.dialog.style.transform = `translate3d(0, ${safeDistance}px, 0)`;
  menuModal.overlay.style.opacity = String(Math.max(0, 1 - progress));
}

function scheduleSheetDragVisual(distance) {
  if (!sheetDrag) {
    return;
  }

  sheetDrag.distance = Math.max(0, distance);

  if (sheetDragRafId) {
    return;
  }

  sheetDragRafId = window.requestAnimationFrame(() => {
    sheetDragRafId = 0;
    setSheetDragVisual(sheetDrag?.distance || 0);
  });
}

function isCloseButtonTarget(target) {
  return Boolean(target?.closest?.("[data-menu-modal-close]"));
}

function getDragClientY(event) {
  return event.clientY ?? event.touches?.[0]?.clientY ?? event.changedTouches?.[0]?.clientY ?? 0;
}

function getDragPointerId(event) {
  return event.pointerId ?? (event.type.startsWith("touch") ? "touch" : "mouse");
}

function startSheetDrag(event, source) {
  if (
    !isModalOpen ||
    isModalClosing ||
    !isMobileBottomSheet() ||
    isCloseButtonTarget(event.target) ||
    event.button > 0 ||
    (event.type === "mousedown" && window.performance.now() - lastPointerDragStart < 500)
  ) {
    return;
  }

  if (event.type === "pointerdown") {
    lastPointerDragStart = window.performance.now();
  }

  const clientY = getDragClientY(event);
  sheetDrag = {
    pointerId: getDragPointerId(event),
    source,
    startY: clientY,
    currentY: clientY,
    distance: 0,
    startTime: window.performance.now(),
    lastY: clientY,
    lastTime: window.performance.now(),
    velocity: 0,
    active: source === "header",
    sheetHeight: menuModal.dialog.getBoundingClientRect().height || 1,
  };

  if (source === "header") {
    menuModal.dialog.classList.add("is-dragging");
    menuModal.overlay.classList.add("is-dragging");
  }

  try {
    event.currentTarget.setPointerCapture?.(event.pointerId);
  } catch {
    // Pointer capture is an enhancement; dragging still works without it.
  }
}

function updateSheetDrag(event) {
  if (!sheetDrag || getDragPointerId(event) !== sheetDrag.pointerId || !isMobileBottomSheet()) {
    return;
  }

  const now = window.performance.now();
  const clientY = getDragClientY(event);
  const rawDistance = clientY - sheetDrag.startY;
  const movingDown = rawDistance > 0;

  if (!sheetDrag.active) {
    if (sheetDrag.source !== "body" || menuModal.body.scrollTop > 0 || !movingDown) {
      return;
    }

    sheetDrag.active = true;
    menuModal.dialog.classList.add("is-dragging");
    menuModal.overlay.classList.add("is-dragging");
  }

  event.preventDefault();
  sheetDrag.currentY = clientY;
  sheetDrag.velocity = Math.max(0, (clientY - sheetDrag.lastY) / Math.max(now - sheetDrag.lastTime, 1));
  sheetDrag.lastY = clientY;
  sheetDrag.lastTime = now;
  scheduleSheetDragVisual(rawDistance);
}

function finishSheetDrag(event, cancelled = false) {
  if (!sheetDrag || getDragPointerId(event) !== sheetDrag.pointerId) {
    return;
  }

  try {
    event.currentTarget.releasePointerCapture?.(event.pointerId);
  } catch {
    // The browser may release capture automatically on cancellation.
  }

  clearSheetDragFrame();

  const distance = Math.max(0, sheetDrag.distance);
  const totalVelocity = Math.max(
    sheetDrag.velocity,
    distance / Math.max(window.performance.now() - sheetDrag.startTime, 1),
  );
  const threshold = sheetDrag.sheetHeight * sheetDismissDistanceRatio;
  const shouldDismiss = !cancelled && (distance >= threshold || totalVelocity > sheetDismissVelocity);

  menuModal.dialog.classList.remove("is-dragging");
  menuModal.overlay.classList.remove("is-dragging");

  if (shouldDismiss) {
    closeItemModal({ closeFromDrag: true });
    return;
  }

  menuModal.dialog.classList.add("is-snapping-back");
  menuModal.overlay.classList.add("is-snapping-back");
  menuModal.dialog.style.transform = "";
  menuModal.overlay.style.opacity = "";
  sheetDrag = null;
  window.setTimeout(() => {
    menuModal.dialog.classList.remove("is-snapping-back");
    menuModal.overlay.classList.remove("is-snapping-back");
  }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 220);
}

function openItemModal(itemId, trigger) {
  const details = menuDetailsById[itemId];

  if (!details || isModalClosing || isModalOpen) {
    return;
  }

  window.clearTimeout(modalCloseTimer);
  modalCloseTimer = 0;
  lastFocusedMenuItem = trigger || document.activeElement;
  hidePreview(true);
  resetSheetDragState();
  menuModal.overlay.classList.remove("is-closing");
  menuModal.dialog.classList.remove("is-closing");
  menuModal.dialog.style.transform = "";
  menuModal.overlay.style.opacity = "";
  populateModal(details);
  menuModal.overlay.hidden = false;
  lockBodyScroll();
  window.requestAnimationFrame(() => {
    menuModal.overlay.classList.add("is-open");
    menuModal.closeButton.focus({ preventScroll: true });
  });
  isModalOpen = true;
  isModalClosing = false;

  if (window.history && !window.history.state?.menuModal) {
    window.history.pushState({ menuModal: true }, "");
    modalHistoryPushed = true;
  }
}

function finishItemModalClose({ restoreFocus = true } = {}) {
  window.clearTimeout(modalCloseTimer);
  modalCloseTimer = 0;
  menuModal.overlay.hidden = true;
  menuModal.overlay.classList.remove("is-open", "is-closing", "is-dragging", "is-dismissing", "is-snapping-back");
  menuModal.dialog.classList.remove("is-closing", "is-dragging", "is-dismissing", "is-snapping-back");
  resetSheetDragState();
  resetModalGallery();
  unlockBodyScroll();
  isModalClosing = false;

  if (restoreFocus && lastFocusedMenuItem && document.contains(lastFocusedMenuItem)) {
    lastFocusedMenuItem.focus({ preventScroll: true });
  }
}

function closeItemModal({ restoreFocus = true, fromPopState = false, closeFromDrag = false } = {}) {
  if (!isModalOpen || isModalClosing) {
    return;
  }

  isModalClosing = true;
  window.clearTimeout(modalCloseTimer);
  resetSheetDragState({ keepClosingStyles: closeFromDrag });
  menuModal.overlay.classList.add("is-closing");
  menuModal.dialog.classList.add("is-closing");

  if (closeFromDrag) {
    menuModal.dialog.classList.add("is-dismissing");
    menuModal.overlay.classList.add("is-dismissing");
    menuModal.dialog.style.transform = "translate3d(0, 100%, 0)";
    menuModal.overlay.style.opacity = "0";
  }

  window.requestAnimationFrame(() => {
    menuModal.overlay.classList.remove("is-open");
  });
  modalCloseTimer = window.setTimeout(
    () => finishItemModalClose({ restoreFocus }),
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 240,
  );
  isModalOpen = false;

  if (!fromPopState && modalHistoryPushed && window.history.state?.menuModal) {
    modalHistoryPushed = false;
    window.history.back();
  } else if (fromPopState) {
    modalHistoryPushed = false;
  }
}

function getNavigationSafeTop() {
  const header = document.querySelector(".site-header");

  if (!header) {
    return 12;
  }

  const rect = header.getBoundingClientRect();
  return Math.max(12, rect.bottom + 12);
}

function placePreview(anchor) {
  if (!anchor || menuPreview.preview.hidden) {
    return;
  }

  const anchorRect = anchor.getBoundingClientRect();
  const previewRect = menuPreview.preview.getBoundingClientRect();
  const margin = 12;
  const gap = 14;
  const navSafeTop = getNavigationSafeTop();
  const placements = [
    {
      left: anchorRect.right + gap,
      top: anchorRect.top + (anchorRect.height - previewRect.height) / 2,
    },
    {
      left: anchorRect.left - previewRect.width - gap,
      top: anchorRect.top + (anchorRect.height - previewRect.height) / 2,
    },
    {
      left: anchorRect.left,
      top: anchorRect.bottom + gap,
    },
    {
      left: anchorRect.left,
      top: anchorRect.top - previewRect.height - gap,
    },
  ];
  const preferred = placements.find((placement) => (
    placement.left >= margin &&
    placement.left + previewRect.width <= window.innerWidth - margin &&
    placement.top >= navSafeTop &&
    placement.top + previewRect.height <= window.innerHeight - margin
  )) || placements[0];
  const left = Math.max(
    margin,
    Math.min(preferred.left, window.innerWidth - previewRect.width - margin),
  );
  const top = Math.max(
    navSafeTop,
    Math.min(preferred.top, window.innerHeight - previewRect.height - margin),
  );

  menuPreview.preview.style.left = `${left}px`;
  menuPreview.preview.style.top = `${top}px`;

  const placedRect = menuPreview.preview.getBoundingClientRect();

  if (
    placedRect.left < margin ||
    placedRect.right > window.innerWidth - margin ||
    placedRect.top < navSafeTop ||
    placedRect.bottom > window.innerHeight - margin
  ) {
    menuPreview.preview.style.left = `${Math.max(
      margin,
      Math.min(placedRect.left, window.innerWidth - placedRect.width - margin),
    )}px`;
    menuPreview.preview.style.top = `${Math.max(
      navSafeTop,
      Math.min(placedRect.top, window.innerHeight - placedRect.height - margin),
    )}px`;
  }
}

function schedulePreviewPlacement() {
  if (previewRafId) {
    return;
  }

  previewRafId = window.requestAnimationFrame(() => {
    previewRafId = 0;
    placePreview(previewAnchor);
  });
}

function showPreview(itemId, trigger) {
  const details = menuDetailsById[itemId];

  if (!details || !canShowHoverPreview()) {
    return;
  }

  activePreviewItem = itemId;
  previewAnchor = trigger;
  const primaryImage = getPrimaryImage(details);
  setImageWithFallback(menuPreview.image, primaryImage.src, primaryImage.alt);
  menuPreview.title.textContent = details.name;
  menuPreview.price.textContent = details.price;
  menuPreview.description.textContent = details.shortDescription;
  menuPreview.preview.setAttribute("aria-hidden", "false");
  menuPreview.preview.setAttribute("tabindex", "0");
  menuPreview.preview.setAttribute("aria-label", `Open full details for ${details.name}`);
  menuPreview.preview.hidden = false;
  menuPreview.preview.classList.add("is-visible");
  placePreview(trigger);
}

function queuePreview(itemId, trigger) {
  window.clearTimeout(previewCloseTimer);
  window.clearTimeout(previewOpenTimer);
  previewOpenTimer = window.setTimeout(() => {
    if (!document.contains(trigger) || (!trigger.matches(":hover") && document.activeElement !== trigger)) {
      return;
    }

    showPreview(itemId, trigger);
  }, 150);
}

function hidePreview(immediate = false) {
  window.clearTimeout(previewOpenTimer);
  window.clearTimeout(previewCloseTimer);

  const close = () => {
    activePreviewItem = null;
    previewAnchor = null;
    menuPreview.preview.classList.remove("is-visible");
    menuPreview.preview.hidden = true;
    menuPreview.preview.setAttribute("aria-hidden", "true");
    menuPreview.preview.setAttribute("tabindex", "-1");
    menuPreview.preview.removeAttribute("aria-label");
    menuPreview.preview.style.left = "";
    menuPreview.preview.style.top = "";
  };

  if (immediate) {
    close();
    return;
  }

  previewCloseTimer = window.setTimeout(close, 160);
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

function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("mobile-menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  document.body.classList.toggle("mobile-menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 960) {
    closeMobileMenu();
  }
});

menuList.addEventListener("click", (event) => {
  const itemButton = event.target.closest("[data-item-id]");

  if (itemButton) {
    openItemModal(itemButton.dataset.itemId, itemButton);
    return;
  }

  const trigger = event.target.closest("[data-category-id]");

  if (!trigger) {
    return;
  }

  toggleCategory(trigger.dataset.categoryId);
});

menuList.addEventListener("mouseover", (event) => {
  const itemButton = event.target.closest("[data-item-id]");

  if (itemButton) {
    queuePreview(itemButton.dataset.itemId, itemButton);
  }
});

menuList.addEventListener("mousemove", (event) => {
  const itemButton = event.target.closest("[data-item-id]");

  if (itemButton && activePreviewItem !== itemButton.dataset.itemId) {
    queuePreview(itemButton.dataset.itemId, itemButton);
  }
});

menuList.addEventListener("mouseout", (event) => {
  const itemButton = event.target.closest("[data-item-id]");

  if (itemButton && !itemButton.contains(event.relatedTarget)) {
    hidePreview();
  }
});

menuList.addEventListener("focusin", (event) => {
  const itemButton = event.target.closest("[data-item-id]");

  if (itemButton) {
    queuePreview(itemButton.dataset.itemId, itemButton);
  }
});

menuList.addEventListener("focusout", (event) => {
  const itemButton = event.target.closest("[data-item-id]");

  if (itemButton && !itemButton.contains(event.relatedTarget)) {
    hidePreview();
  }
});

menuPreview.preview.addEventListener("mouseenter", () => {
  window.clearTimeout(previewCloseTimer);
});

menuPreview.preview.addEventListener("mouseleave", () => {
  hidePreview();
});

menuPreview.preview.addEventListener("click", () => {
  if (activePreviewItem) {
    openItemModal(activePreviewItem, previewAnchor || menuPreview.preview);
  }
});

menuPreview.preview.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && activePreviewItem) {
    event.preventDefault();
    openItemModal(activePreviewItem, previewAnchor || menuPreview.preview);
  }
});

function addSheetDragListeners(target, source) {
  if (window.PointerEvent) {
    target.addEventListener("pointerdown", (event) => startSheetDrag(event, source));
    target.addEventListener("pointermove", updateSheetDrag);
    target.addEventListener("pointerup", (event) => finishSheetDrag(event));
    target.addEventListener("pointercancel", (event) => finishSheetDrag(event, true));
    return;
  }

  target.addEventListener("mousedown", (event) => startSheetDrag(event, source));
  target.addEventListener("mousemove", updateSheetDrag);
  target.addEventListener("mouseup", (event) => finishSheetDrag(event));
  target.addEventListener("mouseleave", (event) => finishSheetDrag(event, true));
  target.addEventListener("touchstart", (event) => startSheetDrag(event, source), { passive: true });
  target.addEventListener("touchmove", updateSheetDrag, { passive: false });
  target.addEventListener("touchend", (event) => finishSheetDrag(event));
  target.addEventListener("touchcancel", (event) => finishSheetDrag(event, true));
}

addSheetDragListeners(menuModal.header, "header");
addSheetDragListeners(menuModal.body, "body");

menuModal.prevButton.addEventListener("click", (event) => {
  event.stopPropagation();
  showPreviousGalleryImage();
});

menuModal.nextButton.addEventListener("click", (event) => {
  event.stopPropagation();
  showNextGalleryImage();
});

menuModal.imageWrap.addEventListener("pointerdown", startGalleryDrag);
menuModal.imageWrap.addEventListener("pointermove", updateGalleryDrag);
menuModal.imageWrap.addEventListener("pointerup", (event) => finishGalleryDrag(event));
menuModal.imageWrap.addEventListener("pointercancel", (event) => finishGalleryDrag(event, true));

menuModal.closeButton.addEventListener("click", () => closeItemModal());

menuModal.overlay.addEventListener("click", (event) => {
  if (event.target === menuModal.overlay) {
    closeItemModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activePreviewItem) {
    hidePreview(true);
  }

  if (!isModalOpen) {
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeItemModal();
    return;
  }

  if (event.key === "ArrowLeft" && menuGallery.images.length > 1) {
    event.preventDefault();
    showPreviousGalleryImage();
    return;
  }

  if (event.key === "ArrowRight" && menuGallery.images.length > 1) {
    event.preventDefault();
    showNextGalleryImage();
    return;
  }

  if (event.key !== "Tab") {
    return;
  }

  const focusableElements = getFocusableModalElements();

  if (!focusableElements.length) {
    event.preventDefault();
    menuModal.dialog.focus({ preventScroll: true });
    return;
  }

  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

window.addEventListener("popstate", () => {
  if (isModalOpen) {
    closeItemModal({ restoreFocus: false, fromPopState: true });
  }
});

window.addEventListener("resize", () => {
  if (activePreviewItem) {
    schedulePreviewPlacement();
  }
});

window.addEventListener(
  "scroll",
  () => {
    if (activePreviewItem) {
      schedulePreviewPlacement();
    }
  },
  { passive: true },
);

let searchDebounceId = 0;

searchInput.addEventListener("input", (event) => {
  window.clearTimeout(searchDebounceId);
  searchDebounceId = window.setTimeout(() => {
    searchTerm = event.target.value.trim();
    renderMenu();
  }, 120);
});

renderMenu();
