const defaultCafeImage = "./assets/site/hero-coffee.svg";

const pizzaCrustOptions = ["Thin", "Medium", "Thick"];

const menuCategories = [
  {
    id: "classics",
    title: "CLASSICS",
    subtitle: "Warm espresso classics and Barock signatures",
    image: getCategoryImage("classics"),
    items: [
      { name: "Cappuccino", price: "BDT 300" },
      { name: "Cafe Latte", price: "BDT 300" },
      { name: "Espresso", price: "BDT 275" },
      { name: "Caffe Mocha", price: "BDT 375" },
      { name: "Caffe Americano", price: "BDT 255" },
      { name: "Caramel Latte", price: "BDT 385" },
      { name: "Vanilla Latte", price: "BDT 385" },
      { name: "Chocolate Macadamia Latte", price: "BDT 385" },
      { name: "Toffee Nut Latte", price: "BDT 385" },
      { name: "Macchiato", price: "BDT 275" },
    ],
  },
  {
    id: "hot-chocolate",
    title: "HOT CHOCOLATE",
    subtitle: "Rich cocoa pours and warm comfort",
    image: getCategoryImage("hot-chocolate"),
    items: [
      { name: "Classic Hot Chocolate", price: "BDT 420" },
      { name: "Caramel Hot Chocolate", price: "BDT 450" },
      { name: "Salted Caramel Hot Chocolate", price: "BDT 475" },
      { name: "Nutella Hot Chocolate", price: "BDT 525" },
      { name: "White Hot Chocolate", price: "BDT 475" },
    ],
  },
  {
    id: "iced-coffee",
    title: "ICED COFFEE",
    subtitle: "Cold espresso classics and creamy iced favorites",
    image: getCategoryImage("iced-coffee"),
    items: [
      { name: "Iced Latte", price: "BDT 350" },
      { name: "Iced Mocha", price: "BDT 400" },
      { name: "Iced Caramel Latte", price: "BDT 450" },
      { name: "Iced Americano", price: "BDT 300" },
      { name: "Iced Vanilla Latte", price: "BDT 400" },
      { name: "Iced Salted Caramel Latte", price: "BDT 475" },
      { name: "Choco Cold Coffee", price: "BDT 385" },
      { name: "Dark Mocha Latte", price: "BDT 435" },
    ],
  },
  {
    id: "chillers",
    title: "CHILLERS",
    subtitle: "Creamy blended coolers for slow afternoons",
    image: getCategoryImage("chillers"),
    items: [
      { name: "Chocolate Chiller", price: "BDT 450" },
      { name: "Cookies N Cream Chiller", price: "BDT 475" },
      { name: "Vanilla Mint Chiller", price: "BDT 475" },
      { name: "Strawberry Chiller", price: "BDT 475" },
    ],
  },
  {
    id: "matcha",
    title: "MATCHA",
    subtitle: "Earthy green tea lattes and layered matcha sips",
    image: getCategoryImage("matcha"),
    items: [
      { name: "Iced Matcha Latte", price: "BDT 350" },
      { name: "Hot Matcha Latte", price: "BDT 350" },
      { name: "Strawberry Iced Matcha Latte", price: "BDT 450" },
      { name: "Dirty Matcha", price: "BDT 400" },
      { name: "Mango Matcha", price: "BDT 400" },
      { name: "Classic Chocolate Matcha Latte", price: "BDT 400" },
    ],
  },
  {
    id: "tea",
    title: "TEA",
    subtitle: "Simple, calming tea selections",
    image: getCategoryImage("tea"),
    items: [
      { name: "Peppermint Tea", price: "BDT 150" },
      { name: "Green Tea", price: "BDT 150" },
      { name: "Regular Milk Tea", price: "BDT 150" },
      { name: "Lemon Tea", price: "BDT 150" },
      { name: "Black Tea", price: "BDT 150" },
    ],
  },
  {
    id: "refreshers",
    title: "REFRESHERS",
    subtitle: "Bright fruit refreshers and cool citrus sips",
    image: getCategoryImage("refreshers"),
    items: [
      { name: "Mint Lemonade", price: "BDT 350" },
      { name: "Fresh Lime", price: "BDT 350" },
      { name: "Apple Refresher", price: "BDT 400" },
      { name: "Strawberry Refresher", price: "BDT 400" },
      { name: "Lychee Refresher", price: "BDT 350" },
      { name: "Mango Refresher", price: "BDT 350" },
      { name: "Watermelon Refresher", price: "BDT 300" },
      { name: "Peach Refresher", price: "BDT 400" },
      { name: "Sweet Orange Refresher", price: "BDT 350" },
    ],
  },
  {
    id: "signature-mocktails",
    title: "SIGNATURE MOCKTAILS",
    subtitle: "Layered, sparkling, and fruit-forward signatures",
    image: getCategoryImage("signature-mocktails"),
    items: [
      { name: "Classic Mojito", price: "BDT 350" },
      { name: "Blue Lagoon", price: "BDT 400" },
      { name: "Strawberry Lemonade Fizz", price: "BDT 450" },
      { name: "Mango-Lime Spritzer", price: "BDT 400" },
      { name: "Pineapple Quencher", price: "BDT 400" },
    ],
  },
  {
    id: "sandwiches",
    title: "SANDWICHES",
    subtitle: "Stacked cafe favorites",
    image: getCategoryImage("sandwiches"),
    items: [
      { name: "Club Sandwich", price: "BDT 550" },
      { name: "Crispy Chicken Sandwich", price: "BDT 580" },
      { name: "Smoked Chicken Sandwich", price: "BDT 600" },
      { name: "Turkish Chicken Sandwich", price: "BDT 550" },
      { name: "Roasted Beef Sandwich", price: "BDT 550" },
      { name: "Barock Special Sandwich", price: "BDT 600" },
    ],
  },
  {
    id: "burgers",
    title: "BURGERS",
    subtitle: "Beef and chicken burgers made hearty",
    image: getCategoryImage("burgers"),
    items: [
      { name: "Beef Burger", price: "BDT 400" },
      { name: "Beef with Cheese Burger", price: "BDT 420" },
      { name: "Double Beef Signature Burger", price: "BDT 550" },
      { name: "Classic Chicken Burger", price: "BDT 380" },
      { name: "Chicken with Cheese Burger", price: "BDT 400" },
      { name: "Double Chicken Signature Burger", price: "BDT 520" },
      { name: "Crispy Chicken Burger", price: "BDT 380" },
      { name: "Barock Special Burger", price: "BDT 550" },
    ],
  },
  {
    id: "starter",
    title: "STARTER",
    subtitle: "Small plates, dim sums, and quick bites",
    image: getCategoryImage("starter"),
    items: [
      { name: "Chicken Lemon Lolly", price: "BDT 350" },
      { name: "Chicken Momo", price: "BDT 499" },
      { name: "Buffalo Wings", price: "BDT 450" },
      { name: "Basil Prawn Rolls", price: "BDT 650" },
      { name: "Soy Garlic Mushroom", price: "BDT 450" },
      { name: "Assorted Dim Sums", price: "BDT 499" },
      { name: "Chicken Dumplings", price: "BDT 450" },
    ],
  },
  {
    id: "soup",
    title: "SOUP",
    subtitle: "Warm bowls for a quiet start",
    image: getCategoryImage("soup"),
    items: [
      { name: "Corn Soup", price: "BDT 299" },
      { name: "Thai Soup", price: "BDT 299" },
      { name: "Clear Soup", price: "BDT 299" },
      { name: "Mixed Vegetable Soup", price: "BDT 350" },
      { name: "Barock Special Soup", price: "BDT 450" },
    ],
  },
  {
    id: "pizza",
    title: "PIZZA",
    subtitle: "Crisp crust pizzas with signature toppings",
    image: getCategoryImage("pizza"),
    note: "Crust options: Thin, Medium, Thick. The PDF lists two price columns without visible size labels, so both prices are preserved as Price 1 and Price 2.",
    items: [
      {
        name: "Margherita Pizza",
        price: "BDT 560 | BDT 895",
        variants: [{ label: "Price 1", price: "BDT 560" }, { label: "Price 2", price: "BDT 895" }],
        crusts: pizzaCrustOptions,
        description: "Classic tomato sauce, mozzarella cheese, fresh basil and oregano baked on a perfectly crisp crust.",
      },
      {
        name: "BBQ Chicken Pizza",
        price: "BDT 800 | BDT 1400",
        variants: [{ label: "Price 1", price: "BDT 800" }, { label: "Price 2", price: "BDT 1400" }],
        crusts: pizzaCrustOptions,
        description: "Smoky BBQ sauce, grilled chicken, melted mozzarella, capsicum, onion on a perfectly crisp crust.",
      },
      {
        name: "Crispy Chicken Pizza",
        price: "BDT 800 | BDT 1400",
        variants: [{ label: "Price 1", price: "BDT 800" }, { label: "Price 2", price: "BDT 1400" }],
        crusts: pizzaCrustOptions,
        description: "Crispy chicken pieces topped with rich pizza sauce, mozzarella cheese, capsicum, onion and creamy mayo drizzle.",
      },
      {
        name: "Beef Supreme Pizza",
        price: "BDT 999 | BDT 1799",
        variants: [{ label: "Price 1", price: "BDT 999" }, { label: "Price 2", price: "BDT 1799" }],
        crusts: pizzaCrustOptions,
        description: "Seasoned beef, beef sausage, mozzarella, capsicum, onion, mushrooms, olives and signature pizza sauce on a crispy golden crust.",
      },
      {
        name: "Spicy Beef Pizza",
        price: "BDT 899 | BDT 1699",
        variants: [{ label: "Price 1", price: "BDT 899" }, { label: "Price 2", price: "BDT 1699" }],
        crusts: pizzaCrustOptions,
        description: "Spicy beef, tomato sauce, mozzarella cheese, capsicum, onion, chili flakes and herbs made for a hot and flavorful bite.",
      },
      {
        name: "Meat Lover's Pizza",
        price: "BDT 850 | BDT 1499",
        variants: [{ label: "Price 1", price: "BDT 850" }, { label: "Price 2", price: "BDT 1499" }],
        crusts: pizzaCrustOptions,
        description: "Loaded with chicken, beef, pepperoni, beef sausage, mozzarella, capsicum, onion and signature pizza sauce.",
      },
      {
        name: "Chicken Supreme Pizza",
        price: "BDT 799 | BDT 1399",
        variants: [{ label: "Price 1", price: "BDT 799" }, { label: "Price 2", price: "BDT 1399" }],
        crusts: pizzaCrustOptions,
        description: "Chicken pizza with tender chicken, mozzarella cheese, capsicum, onion, mushrooms, olives and signature pizza sauce.",
      },
      {
        name: "Pepperoni Pizza",
        price: "BDT 699 | BDT 1299",
        variants: [{ label: "Price 1", price: "BDT 699" }, { label: "Price 2", price: "BDT 1299" }],
        crusts: pizzaCrustOptions,
        description: "Classic pepperoni slices topped with tomato sauce, melted mozzarella cheese, oregano and chili flakes.",
      },
    ],
  },
  {
    id: "fast-food",
    title: "FAST FOOD",
    subtitle: "Loaded fries, strips, wings, and quick snacks",
    image: getCategoryImage("fast-food"),
    items: [
      { name: "Signature Loaded Fries", price: "BDT 220" },
      { name: "Chicken Strips", price: "BDT 280" },
      { name: "Wedges", price: "BDT 250" },
      { name: "Onion Rings", price: "BDT 250" },
      { name: "Crispy Chicken Wings", price: "BDT 320" },
      { name: "Spring Roll", price: "BDT 250" },
    ],
  },
  {
    id: "pasta",
    title: "PASTA",
    subtitle: "Creamy, spicy, baked, and loaded pasta plates",
    image: getCategoryImage("pasta"),
    items: [
      {
        name: "Chicken Alfredo Pasta",
        price: "BDT 399",
        description: "Classic creamy Alfredo sauce with grilled chicken, mushroom, parmesan-style cheese, and black pepper.",
      },
      {
        name: "Naga Chicken Pasta",
        price: "BDT 399",
        description: "Spicy creamy pasta with chicken, mushroom, cheese, and Barock's special naga sauce for a bold hot flavor.",
      },
      {
        name: "Creamy Beef Mushroom Pasta",
        price: "BDT 420",
        description: "Tender beef slices/minced beef cooked with mushroom, cream sauce, mozzarella cheese, and herbs.",
      },
      {
        name: "Four Seasons Pasta",
        price: "BDT 420",
        description: "A loaded pasta with chicken, beef, shrimp, mushroom, capsicum, cheese, and creamy tomato sauce.",
      },
      {
        name: "Barock Signature Baked Pasta",
        price: "BDT 450",
        description: "Creamy baked pasta with seasoned beef, mushroom, capsicum, mozzarella, and herbs topped with a golden cheesy crust.",
      },
    ],
  },
  {
    id: "desserts",
    title: "DESSERTS",
    subtitle: "Cakes, pastries, ice cream, and sweet endings",
    image: getCategoryImage("desserts"),
    items: [
      { name: "Plain Bagel", price: "BDT 170" },
      { name: "Red Velvet", price: "BDT 280" },
      { name: "Salted Caramel Cheesecake", price: "BDT 320" },
      { name: "Strawberry Cake", price: "BDT 250" },
      { name: "Chocolate Cake", price: "BDT 250" },
      { name: "Vanilla Cake", price: "BDT 199" },
      { name: "Pudding", price: "BDT 180" },
      { name: "Brownie", price: "BDT 150" },
      { name: "Croissant", price: "BDT 200" },
      { name: "Chocolate Chip", price: "BDT 170" },
      { name: "Blueberry Cheesecake", price: "BDT 320" },
      { name: "Ice Cream Bowl", price: "BDT 450", subgroup: "SWEET SPECIALS" },
      { name: "Ice Cream Scoop", price: "BDT 200", subgroup: "SWEET SPECIALS" },
    ],
  },
  {
    id: "sea-food",
    title: "SEA FOOD",
    subtitle: "Fish, prawn, calamari, lobster, and premium plates",
    image: getCategoryImage("sea-food"),
    items: [
      {
        name: "Signature Smoked Salmon",
        price: "BDT 1499",
        description: "Smoked salmon served with crispy fries, fresh green salad and lemon butter sauce.",
      },
      {
        name: "King Prawn Supreme",
        price: "BDT 899",
        description: "Juicy king prawns served with sauteed vegetables and creamy mashed potato, finished with a light garlic butter sauce.",
      },
      {
        name: "Grilled Lobster Royale",
        price: "BDT 650",
        description: "Grilled lobster served with creamy mashed potato, and our signature garlic butter sauce.",
      },
      {
        name: "Signature Grilled Coral Fish",
        price: "BDT 1850",
        description: "Grilled coral fish served with sauteed vegetables, creamy mashed potato, and our signature garlic butter sauce.",
      },
      {
        name: "Signature Pomfret Grill",
        price: "BDT 1150",
        description: "A tender grilled pomfret plate served with mashed potato, sauteed vegetables and garlic butter sauce.",
      },
      {
        name: "Seared Tuna Steak",
        price: "BDT 1465",
        description: "A tender tuna steak seared to perfection, served with creamy mash, sauteed vegetables, and garlic butter sauce.",
      },
      {
        name: "Lemon Butter Grilled Dory",
        price: "BDT 650",
        description: "Tender grilled dory fish finished with lemon butter sauce, served with creamy mash and sauteed vegetables.",
      },
      {
        name: "Barock Crispy Calamari",
        price: "BDT 599",
        description: "Crispy golden calamari rings served with creamy tartar dip and mayonnaise.",
      },
      {
        name: "Barock Crispy Fish Fingers",
        price: "BDT 350",
        description: "Crispy golden fish fingers served with creamy tartar dip and classic mayonnaise.",
      },
      {
        name: "Fish & Chips",
        price: "BDT 650",
        description: "Golden crispy Coral fish fillet served with seasoned fries, fresh green salad and creamy tartar sauce.",
      },
    ],
  },
  {
    id: "barock-steak",
    title: "BAROCK STEAK",
    subtitle: "Premium grilled beef plates and sharing platters",
    image: getCategoryImage("barock-steak"),
    items: [
      {
        name: "Rib Steak",
        price: "BDT 2650",
        weight: "400gm",
        description: "Tender ribeye steak flame-grilled to perfection, served with crispy potato wedges and smoky BBQ & Hot chili sauce.",
      },
      {
        name: "T-Bone Steak",
        price: "BDT 2550",
        weight: "350gm",
        description: "Juicy T-bone steak grilled to perfection, served with potato wedges or fried rice and smoky BBQ & Hot chili sauce.",
      },
      {
        name: "Sirloin Steak",
        price: "BDT 2585",
        weight: "300gm",
        description: "Flame-grilled sirloin steak served with crispy potato wedges or fried rice, and smoky BBQ & Hot chili sauce.",
      },
      {
        name: "Barock Smoked Brisket",
        price: "BDT 2885",
        weight: "500gm",
        description: "Slow-smoked beef brisket served with crispy potato wedges or fried rice, and smoky BBQ & Hot chili sauce.",
      },
      {
        name: "Barock Tomahawk",
        price: "BDT 3335",
        weight: "500gm",
        description: "Flame-grilled premium tomahawk steak served with crispy potato wedges, fried rice, and smoky BBQ & Hot chili sauce.",
      },
      {
        name: "Barock Special Beef Platter",
        price: "BDT 5499",
        description: "A premium all-beef platter featuring sirloin steak, tenderloin steak, skirt steak, gourmet beef sausage, beef cheese sausage, and beef bacon served with smoky BBQ sauce and Barock's signature grill seasoning.",
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
const menuStatus = {
  state: "loading",
  error: "",
};

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
let scrollLockY = 0;
let previewAnchor = null;
let previewRafId = 0;
let sheetDrag = null;
let sheetDragRafId = 0;
let sheetDismissTimer = 0;
let modalCloseTimer = 0;
let modalOpenFrame = 0;
let lastPointerDragStart = 0;
let galleryDrag = null;
const modalState = {
  isOpen: false,
  isClosing: false,
  selectedItemId: "",
  savedScrollY: 0,
  triggerElement: null,
  imageRequestToken: 0,
  closeRequestToken: 0,
};
const previewState = {
  hoveredItem: "",
  pointerInsideItem: false,
  pointerInsidePreview: false,
  imageRequestToken: 0,
};

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
    "hot-chocolate": "./assets/site/coffee-cup.svg",
    "iced-coffee": "./assets/site/iced-coffee.svg",
    chillers: "./assets/site/iced-coffee.svg",
    matcha: "./assets/site/iced-coffee.svg",
    tea: "./assets/site/coffee-cup.svg",
    refreshers: "./assets/site/iced-coffee.svg",
    "signature-mocktails": "./assets/site/iced-coffee.svg",
    sandwiches: "./assets/site/sandwich.svg",
    burgers: "./assets/site/sandwich.svg",
    starter: "./assets/site/dessert.svg",
    soup: "./assets/site/coffee-cup.svg",
    pizza: "./assets/site/friends.svg",
    "fast-food": "./assets/site/sandwich.svg",
    pasta: "./assets/site/beans.svg",
    desserts: "./assets/site/dessert.svg",
    "sea-food": "./assets/site/friends.svg",
    "barock-steak": "./assets/site/interior.svg",
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

  return (imageMap[normalized] || [{ src: getCategoryImage(categoryId), alt: `${itemName} from BAROCK CAFE` }])
    .map(prepareImageData);
}

function getPrimaryImage(details) {
  return details.images?.[0] || { src: defaultCafeImage, alt: details.altText || "BAROCK CAFE menu item" };
}

function prepareImageData(imageData) {
  const image = { ...imageData };

  if (/^\/assets\/menu\/classics\/.+\.webp$/i.test(image.src)) {
    const base = image.src.replace(/\.webp$/i, "");
    image.previewSrc = image.previewSrc || `${base}-480.webp`;
    image.srcset = image.srcset || `${base}-480.webp 480w, ${base}-900.webp 900w, ${image.src} 1200w`;
  }

  return image;
}

function getCategoryTags(category) {
  const tagMap = {
    classics: ["Hot", "Coffee", "Espresso"],
    "hot-chocolate": ["Hot", "Chocolate"],
    "iced-coffee": ["Cold", "Coffee"],
    chillers: ["Cold", "Chiller"],
    matcha: ["Matcha", "Tea"],
    tea: ["Tea", "Hot"],
    refreshers: ["Cold", "Refreshing"],
    "signature-mocktails": ["Mocktail", "Refreshing"],
    sandwiches: ["Savory", "Cafe Bite"],
    burgers: ["Savory", "Burger"],
    starter: ["Starter", "Shareable"],
    soup: ["Soup", "Hot"],
    pizza: ["Pizza", "Baked"],
    "fast-food": ["Snack", "Quick Bite"],
    pasta: ["Pasta", "Kitchen"],
    desserts: ["Sweet", "Dessert"],
    "sea-food": ["Seafood", "Signature"],
    "barock-steak": ["Steak", "Signature"],
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

function formatItemPrice(item) {
  if (item.price) {
    return item.price;
  }

  if (Array.isArray(item.variants) && item.variants.length) {
    return item.variants.map((variant) => variant.price).filter(Boolean).join(" | ");
  }

  return "BDT ___";
}

function createMenuDetails() {
  const details = {};

  menuCategories.forEach((category) => {
    category.items.forEach((item) => {
      const id = `${category.id}-${slugify(item.name)}`;
      item.id = id;
      item.category = category.title;
      item.images = getItemImages(item.name, category.id);
      item.displayPrice = formatItemPrice(item);
      item.shortDescription = item.description || "";
      item.ingredients = normalizeIngredients(item.ingredients || item.mainIngredients || item.ingredientList);
      item.preparation = normalizePreparation(item.preparation || item.preparationMethod || item.method);
      item.tags = getCategoryTags(category);
      details[id] = {
        id,
        name: item.name,
        price: item.displayPrice,
        variants: Array.isArray(item.variants) ? item.variants : [],
        crusts: Array.isArray(item.crusts) ? item.crusts : [],
        subgroup: item.subgroup || "",
        weight: item.weight || "",
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

function getItemSearchText(item, category = {}) {
  const variants = Array.isArray(item.variants)
    ? item.variants.flatMap((variant) => [variant.label, variant.price])
    : [];
  const crusts = Array.isArray(item.crusts) ? item.crusts : [];

  return [
    item.name,
    item.category,
    category.title,
    category.subtitle,
    item.subgroup,
    formatItemPrice(item),
    item.description,
    item.weight,
    ...variants,
    ...crusts,
  ].filter(Boolean).join(" ").toLowerCase();
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
        getItemSearchText(item, category).includes(normalizedSearch),
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
  menuStatus.state = "ready";
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
  emptyState.hidden = !(menuStatus.state === "ready" && searchTerm.trim() && visibleCategories.length === 0);
  initImageFallbacks();
}

function createCategoryCard(category, index, isOpen) {
  const card = createElement("article", `menu-category-card glass-card reveal is-visible${isOpen ? " is-open" : ""}`);
  card.dataset.category = category.id;
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

  appendGroupedMenuItems(panelInner, category.visibleItems);
  panel.append(panelInner);
  card.append(trigger, panel);

  return card;
}

function appendGroupedMenuItems(container, items) {
  const groups = items.reduce((groupedItems, item) => {
    const groupName = item.subgroup || "";
    if (!groupedItems.has(groupName)) {
      groupedItems.set(groupName, []);
    }

    groupedItems.get(groupName).push(item);
    return groupedItems;
  }, new Map());

  const regularItems = groups.get("") || [];

  if (regularItems.length) {
    const itemList = createElement("ul", "menu-item-list");
    regularItems.forEach((item) => itemList.append(createMenuItem(item)));
    container.append(itemList);
  }

  groups.forEach((groupItems, groupName) => {
    if (!groupName) {
      return;
    }

    container.append(createElement("p", "menu-subgroup-title", groupName));
    const itemList = createElement("ul", "menu-item-list");
    groupItems.forEach((item) => itemList.append(createMenuItem(item)));
    container.append(itemList);
  });
}

function createCategoryAction() {
  const action = createElement("span", "menu-category-action glass-button", "View Items");
  const icon = createElement("span", "menu-category-icon");
  icon.setAttribute("aria-hidden", "true");
  action.append(icon);
  return action;
}

function createMenuItem(item) {
  const hasSupportingText = Boolean(item.description || item.weight || item.subgroup);
  const listItem = createElement("li", hasSupportingText ? "has-description" : "");
  const button = createElement("button", "menu-item-button");
  button.type = "button";
  button.dataset.itemId = item.id;
  button.setAttribute("aria-label", `Open full details for ${item.name}`);

  const text = createElement("span");
  text.append(createElement("span", "", item.name));

  if (item.description) {
    text.append(createElement("small", "", item.description));
  } else if (item.weight) {
    text.append(createElement("small", "", item.weight));
  }

  button.append(text, createElement("strong", "", formatItemPrice(item)));
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
  const optionsBlock = createElement("div", "menu-modal-block menu-modal-options");
  const optionsTitle = createElement("h3", "", "Options");
  const optionsList = createElement("ul", "menu-modal-list");
  optionsBlock.append(optionsTitle, optionsList);
  const ingredientsBlock = createElement("div", "menu-modal-block");
  const ingredientsTitle = createElement("h3", "", "Main ingredients");
  const ingredientsList = createElement("ul", "menu-modal-list");
  ingredientsBlock.append(ingredientsTitle, ingredientsList);
  const preparationBlock = createElement("div", "menu-modal-block");
  const preparationTitle = createElement("h3", "", "Preparation");
  const preparation = createElement("p");
  preparationBlock.append(preparationTitle, preparation);
  const note = createElement("p", "menu-modal-note");

  body.append(category, title, price, description, tags, optionsBlock, ingredientsBlock, preparationBlock, note);
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
    optionsBlock,
    optionsList,
    ingredientsBlock,
    ingredientsList,
    preparationBlock,
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

function clearImageElement(image, altText = "") {
  image.removeAttribute("src");
  image.removeAttribute("srcset");
  image.alt = altText;
}

function setImageAttributes(image, imageData, { preview = false } = {}) {
  const src = preview ? imageData.previewSrc || imageData.src : imageData.src;
  image.alt = imageData.alt || "BAROCK CAFE menu item";

  if (!preview && imageData.srcset) {
    image.srcset = imageData.srcset;
    image.sizes = imageData.sizes || image.sizes;
  } else {
    image.removeAttribute("srcset");
  }

  image.src = src || defaultCafeImage;
}

async function decodeImageData(imageData, { preview = false, sizes = "" } = {}) {
  const src = preview ? imageData.previewSrc || imageData.src : imageData.src;
  const loader = new Image();
  loader.decoding = "async";
  loader.alt = imageData.alt || "";

  if (!preview && imageData.srcset) {
    loader.srcset = imageData.srcset;
    loader.sizes = sizes || imageData.sizes || "100vw";
  }

  loader.src = src || defaultCafeImage;

  if (loader.decode) {
    await loader.decode();
  } else if (!loader.complete) {
    await new Promise((resolve, reject) => {
      loader.onload = resolve;
      loader.onerror = reject;
    });
  }

  return imageData;
}

function preloadGalleryImage(index) {
  const imageData = menuGallery.images[index];

  if (!imageData || menuGallery.preload.has(imageData.src)) {
    return;
  }

  menuGallery.preload.add(imageData.src);
  const image = new Image();
  image.decoding = "async";
  if (imageData.srcset) {
    image.srcset = imageData.srcset;
    image.sizes = menuModal.image.sizes;
  }
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
  const requestToken = ++modalState.imageRequestToken;
  const imageFit = imageData.fit === "contain" ? "contain" : "cover";
  const desktopPosition = imageData.desktopPosition || imageData.position || "50% 50%";
  const mobilePosition = imageData.mobilePosition || imageData.position || desktopPosition;

  menuModal.imageWrap.classList.add("is-loading");
  menuModal.image.classList.add("is-switching");
  clearImageElement(menuModal.image, imageData.alt || "Loading BAROCK CAFE menu item image");
  menuModal.imageWrap.classList.toggle("is-contain-image", imageFit === "contain");
  menuModal.imageWrap.style.setProperty(
    "--gallery-backdrop-image",
    imageFit === "contain" ? `url("${imageData.src.replace(/"/g, "%22")}")` : "none",
  );
  menuModal.image.style.setProperty("--image-fit", imageFit);
  menuModal.image.style.setProperty("--image-position-desktop", desktopPosition);
  menuModal.image.style.setProperty("--image-position-mobile", mobilePosition);

  decodeImageData(imageData, { sizes: menuModal.image.sizes })
    .then((loadedImage) => {
      if (requestToken !== modalState.imageRequestToken) {
        return;
      }

      setImageAttributes(menuModal.image, loadedImage);
    })
    .catch(() => {
      if (requestToken !== modalState.imageRequestToken) {
        return;
      }

      setImageAttributes(menuModal.image, { src: defaultCafeImage, alt: "BAROCK CAFE menu item" });
    })
    .finally(() => {
      if (requestToken !== modalState.imageRequestToken) {
        return;
      }

      menuModal.imageWrap.classList.remove("is-loading");
      window.setTimeout(() => menuModal.image.classList.remove("is-switching"), 80);
    });

  window.requestAnimationFrame(() => {
    menuModal.image.style.transform = "";
    menuModal.image.classList.remove("is-dragging");
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
  modalState.imageRequestToken += 1;
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
  menuModal.imageWrap.classList.remove("is-loading", "is-contain-image");
  clearImageElement(menuModal.image, "");
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

function populateOptions(list, details) {
  list.replaceChildren();
  const options = [];

  if (details.weight) {
    options.push({ label: "Weight", value: details.weight });
  }

  if (Array.isArray(details.crusts) && details.crusts.length) {
    options.push({ label: "Crusts", value: details.crusts.join(", ") });
  }

  if (Array.isArray(details.variants) && details.variants.length) {
    details.variants.forEach((variant) => {
      options.push({ label: variant.label, value: variant.price });
    });
  }

  options.forEach((option) => {
    const item = createElement("li");
    item.append(createElement("span", "", option.label), createElement("strong", "", option.value));
    list.append(item);
  });
}

function setSectionVisibility(section, isVisible) {
  if (!section) {
    return;
  }

  section.hidden = !isVisible;
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
  menuModal.description.hidden = !details.shortDescription;
  populateTags(menuModal.tags, details.tags);
  populateOptions(menuModal.optionsList, details);
  populateIngredients(menuModal.ingredientsList, ingredients);
  menuModal.preparation.textContent = preparation;
  menuModal.note.textContent = details.note || "";
  setSectionVisibility(menuModal.optionsBlock, menuModal.optionsList.children.length > 0);
  setSectionVisibility(menuModal.ingredientsBlock, ingredients.length > 0);
  setSectionVisibility(menuModal.preparationBlock, Boolean(preparation));
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
  modalState.savedScrollY = scrollLockY;
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
  const restoreY = modalState.savedScrollY || scrollLockY || 0;
  document.body.classList.remove("menu-modal-open");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.paddingRight = "";
  try {
    window.scrollTo({ top: restoreY, left: 0, behavior: "instant" });
  } catch {
    window.scrollTo(0, restoreY);
  }
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

  if (!details || modalState.isClosing || modalState.isOpen || isModalClosing || isModalOpen) {
    return;
  }

  window.clearTimeout(modalCloseTimer);
  modalCloseTimer = 0;
  if (modalOpenFrame) {
    window.cancelAnimationFrame(modalOpenFrame);
    modalOpenFrame = 0;
  }
  modalState.isOpen = true;
  modalState.isClosing = false;
  modalState.selectedItemId = itemId;
  modalState.triggerElement = trigger || document.activeElement;
  lastFocusedMenuItem = trigger || document.activeElement;
  hidePreview(true);
  resetSheetDragState();
  menuModal.overlay.classList.remove("is-open", "is-closing", "is-dragging", "is-dismissing", "is-snapping-back");
  menuModal.dialog.classList.remove("is-closing", "is-dragging", "is-dismissing", "is-snapping-back");
  menuModal.overlay.classList.add("is-preparing");
  menuModal.dialog.classList.add("is-preparing");
  menuModal.dialog.style.transform = "";
  menuModal.overlay.style.opacity = "";
  populateModal(details);
  menuModal.overlay.hidden = false;
  lockBodyScroll();
  isModalOpen = true;
  isModalClosing = false;

  modalOpenFrame = window.requestAnimationFrame(() => {
    modalOpenFrame = window.requestAnimationFrame(() => {
      modalOpenFrame = 0;
      if (!modalState.isOpen || modalState.isClosing || modalState.selectedItemId !== itemId) {
        return;
      }

      menuModal.overlay.classList.remove("is-preparing");
      menuModal.dialog.classList.remove("is-preparing");
      menuModal.overlay.classList.add("is-open");
    });
    menuModal.closeButton.focus({ preventScroll: true });
  });
}

function finishItemModalClose({ restoreFocus = true } = {}) {
  window.clearTimeout(modalCloseTimer);
  modalCloseTimer = 0;
  if (modalOpenFrame) {
    window.cancelAnimationFrame(modalOpenFrame);
    modalOpenFrame = 0;
  }
  menuModal.overlay.hidden = true;
  menuModal.overlay.classList.remove("is-open", "is-preparing", "is-closing", "is-dragging", "is-dismissing", "is-snapping-back");
  menuModal.dialog.classList.remove("is-preparing", "is-closing", "is-dragging", "is-dismissing", "is-snapping-back");
  resetSheetDragState();
  resetModalGallery();
  unlockBodyScroll();
  isModalClosing = false;
  isModalOpen = false;
  modalState.isClosing = false;
  modalState.isOpen = false;
  modalState.selectedItemId = "";

  const focusTarget = modalState.triggerElement || lastFocusedMenuItem;
  modalState.triggerElement = null;

  if (restoreFocus && focusTarget && document.contains(focusTarget)) {
    focusTarget.focus({ preventScroll: true });
  }
}

function closeItemModal({ restoreFocus = true, fromPopState = false, closeFromDrag = false } = {}) {
  if (!modalState.isOpen || modalState.isClosing || !isModalOpen || isModalClosing) {
    return;
  }

  const closeToken = ++modalState.closeRequestToken;
  modalState.isClosing = true;
  isModalClosing = true;
  window.clearTimeout(modalCloseTimer);
  if (modalOpenFrame) {
    window.cancelAnimationFrame(modalOpenFrame);
    modalOpenFrame = 0;
  }
  hidePreview(true);
  modalState.imageRequestToken += 1;
  resetSheetDragState({ keepClosingStyles: closeFromDrag });
  menuModal.overlay.classList.remove("is-preparing");
  menuModal.dialog.classList.remove("is-preparing");
  menuModal.overlay.classList.add("is-closing");
  menuModal.dialog.classList.add("is-closing");

  if (closeFromDrag) {
    menuModal.dialog.classList.add("is-dismissing");
    menuModal.overlay.classList.add("is-dismissing");
    menuModal.dialog.style.transform = "translate3d(0, 100%, 0)";
    menuModal.overlay.style.opacity = "0";
  }

  menuModal.overlay.classList.remove("is-open");

  const finishCloseOnce = (event) => {
    if (
      event?.target &&
      event.target !== menuModal.dialog &&
      event.target !== menuModal.overlay
    ) {
      return;
    }

    if (closeToken !== modalState.closeRequestToken || !modalState.isClosing) {
      return;
    }

    menuModal.dialog.removeEventListener("transitionend", finishCloseOnce);
    menuModal.overlay.removeEventListener("transitionend", finishCloseOnce);
    finishItemModalClose({ restoreFocus });
  };

  menuModal.dialog.addEventListener("transitionend", finishCloseOnce);
  menuModal.overlay.addEventListener("transitionend", finishCloseOnce);
  modalCloseTimer = window.setTimeout(
    finishCloseOnce,
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 340,
  );
  isModalOpen = false;
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

  const requestToken = ++previewState.imageRequestToken;
  activePreviewItem = itemId;
  previewState.hoveredItem = itemId;
  previewAnchor = trigger;
  const primaryImage = getPrimaryImage(details);
  menuPreview.preview.classList.add("is-loading");
  clearImageElement(menuPreview.image, primaryImage.alt || "Loading BAROCK CAFE menu item preview");
  menuPreview.title.textContent = details.name;
  menuPreview.price.textContent = details.price;
  menuPreview.description.textContent = details.shortDescription;
  menuPreview.description.hidden = !details.shortDescription;
  menuPreview.preview.setAttribute("aria-hidden", "false");
  menuPreview.preview.setAttribute("tabindex", "0");
  menuPreview.preview.setAttribute("aria-label", `Open full details for ${details.name}`);
  menuPreview.preview.hidden = false;
  menuPreview.preview.classList.add("is-visible");
  placePreview(trigger);

  decodeImageData(primaryImage, { preview: true })
    .then((loadedImage) => {
      if (requestToken !== previewState.imageRequestToken || activePreviewItem !== itemId) {
        return;
      }

      setImageAttributes(menuPreview.image, loadedImage, { preview: true });
      schedulePreviewPlacement();
    })
    .catch(() => {
      if (requestToken !== previewState.imageRequestToken || activePreviewItem !== itemId) {
        return;
      }

      setImageAttributes(menuPreview.image, { src: defaultCafeImage, alt: "BAROCK CAFE menu item" }, { preview: true });
    })
    .finally(() => {
      if (requestToken === previewState.imageRequestToken && activePreviewItem === itemId) {
        menuPreview.preview.classList.remove("is-loading");
      }
    });
}

function queuePreview(itemId, trigger) {
  window.clearTimeout(previewCloseTimer);
  window.clearTimeout(previewOpenTimer);
  previewState.pointerInsideItem = true;
  previewState.hoveredItem = itemId;
  const primaryImage = getPrimaryImage(menuDetailsById[itemId] || {});

  if (primaryImage?.previewSrc || primaryImage?.src) {
    decodeImageData(primaryImage, { preview: true }).catch(() => {});
  }

  previewOpenTimer = window.setTimeout(() => {
    if (
      previewState.hoveredItem !== itemId ||
      !document.contains(trigger) ||
      (!previewState.pointerInsideItem && document.activeElement !== trigger)
    ) {
      return;
    }

    showPreview(itemId, trigger);
  }, 150);
}

function hidePreview(immediate = false) {
  window.clearTimeout(previewOpenTimer);
  window.clearTimeout(previewCloseTimer);

  const close = () => {
    previewState.imageRequestToken += 1;
    previewState.hoveredItem = "";
    previewState.pointerInsideItem = false;
    previewState.pointerInsidePreview = false;
    activePreviewItem = null;
    previewAnchor = null;
    menuPreview.preview.classList.remove("is-visible", "is-loading");
    menuPreview.preview.hidden = true;
    menuPreview.preview.setAttribute("aria-hidden", "true");
    menuPreview.preview.setAttribute("tabindex", "-1");
    menuPreview.preview.removeAttribute("aria-label");
    menuPreview.preview.style.left = "";
    menuPreview.preview.style.top = "";
    clearImageElement(menuPreview.image, "");
  };

  if (immediate) {
    close();
    return;
  }

  previewCloseTimer = window.setTimeout(close, 160);
}

function schedulePreviewClose() {
  window.clearTimeout(previewCloseTimer);
  previewCloseTimer = window.setTimeout(() => {
    if (!previewState.pointerInsideItem && !previewState.pointerInsidePreview) {
      hidePreview(true);
    }
  }, 150);
}

function toggleCategory(categoryId) {
  const previousScrollY = window.scrollY || document.documentElement.scrollTop || 0;

  openCategoryId = openCategoryId === categoryId ? "" : categoryId;
  renderMenu();

  window.requestAnimationFrame(() => {
    try {
      window.scrollTo({ top: previousScrollY, left: 0, behavior: "instant" });
    } catch {
      window.scrollTo(0, previousScrollY);
    }
  });
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
    previewState.pointerInsideItem = true;
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
    previewState.pointerInsideItem = false;
    schedulePreviewClose();
  }
});

menuList.addEventListener("focusin", (event) => {
  const itemButton = event.target.closest("[data-item-id]");

  if (itemButton) {
    previewState.pointerInsideItem = true;
    queuePreview(itemButton.dataset.itemId, itemButton);
  }
});

menuList.addEventListener("focusout", (event) => {
  const itemButton = event.target.closest("[data-item-id]");

  if (itemButton && !itemButton.contains(event.relatedTarget)) {
    previewState.pointerInsideItem = false;
    schedulePreviewClose();
  }
});

menuPreview.preview.addEventListener("mouseenter", () => {
  previewState.pointerInsidePreview = true;
  window.clearTimeout(previewCloseTimer);
});

menuPreview.preview.addEventListener("mouseleave", () => {
  previewState.pointerInsidePreview = false;
  schedulePreviewClose();
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
