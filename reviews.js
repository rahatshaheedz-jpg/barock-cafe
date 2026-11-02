// Customer reviews: the page is plain HTML; this script only adds data and interaction.
// Online reviews use Supabase once the two values below are filled in. Until then the page
// shows its empty state and the form explains how to reach BAROCK, exactly as before.
const SUPABASE_URL = "PASTE_SUPABASE_URL_HERE";
const SUPABASE_ANON_KEY = "PASTE_SUPABASE_ANON_KEY_HERE";
const SUPABASE_SCRIPT = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js";
const defaultCafeImage = "./assets/photography-new/coffee.webp";

const supabaseIsConfigured =
  SUPABASE_URL !== "PASTE_SUPABASE_URL_HERE" && SUPABASE_ANON_KEY !== "PASTE_SUPABASE_ANON_KEY_HERE";

const grid = document.querySelector("[data-review-grid]");
const empty = document.querySelector("[data-reviews-empty]");
const loading = document.querySelector("[data-loading]");
const anchor = document.querySelector("[data-reviews-anchor]");
const form = document.querySelector("[data-review-form]");
const statusBox = document.querySelector("[data-review-status]");
const ratingGroup = document.querySelector("[data-rating-input]");
const ratingButtons = [...ratingGroup.querySelectorAll("[data-star]")];
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let rating = 0;
let clientPromise = null;

function getClient() {
  if (!supabaseIsConfigured) return Promise.resolve(null);
  clientPromise ||= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SUPABASE_SCRIPT;
    script.async = true;
    script.onload = () => resolve(window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY));
    script.onerror = () => { clientPromise = null; reject(new Error("Reviews service unavailable")); };
    document.head.append(script);
  });
  return clientPromise;
}

const formatDate = (value) =>
  new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));

function starRow(value) {
  const row = document.createElement("div");
  row.className = "flex gap-1";
  row.setAttribute("aria-label", `${value} star rating`);
  for (let star = 1; star <= 5; star += 1) {
    const item = document.createElement("button");
    item.type = "button";
    item.disabled = true;
    item.textContent = "★";
    item.className = [
      "text-2xl leading-none transition duration-200 cursor-default",
      star <= value ? "text-gold drop-shadow-[0_0_12px_rgba(212,168,95,0.62)]" : "text-[#c8b382]",
    ].join(" ");
    row.append(item);
  }
  return row;
}

function paintStars(row, value) {
  [...row.children].forEach((item, index) => {
    const on = index < value;
    item.classList.toggle("text-gold", on);
    item.classList.toggle("drop-shadow-[0_0_12px_rgba(212,168,95,0.62)]", on);
    item.classList.toggle("text-[#c8b382]", !on);
  });
}

function countUp(element, value, suffix = "") {
  const decimals = value % 1 ? 1 : 0;
  if (reducedMotion) { element.textContent = value.toFixed(decimals) + suffix; return; }
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / 900, 1);
    element.textContent = (value * progress).toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); fadeObserver.unobserve(entry.target); }
  });
}, { threshold: 0.14 });

function render(reviews) {
  const total = reviews.length;
  const average = total ? Number((reviews.reduce((sum, r) => sum + Number(r.rating), 0) / total).toFixed(1)) : 0;
  const five = reviews.filter((r) => Number(r.rating) === 5).length;

  document.querySelectorAll("[data-has-reviews]").forEach((el) => { el.hidden = total === 0; });
  empty.hidden = total > 0;
  if (total) {
    document.querySelectorAll('[data-count="average"]').forEach((el) => countUp(el, average));
    document.querySelectorAll('[data-count="total"]').forEach((el) => countUp(el, total));
    document.querySelectorAll('[data-count="five"]').forEach((el) => countUp(el, five));
    const averageStars = document.querySelector("[data-average-stars]");
    paintStars(averageStars, Math.round(average));
    averageStars.setAttribute("aria-label", `${Math.round(average)} star rating`);
  }

  grid.replaceChildren(...reviews.map((review) => {
    const card = document.createElement("article");
    card.className = "fade-card glass-card rounded-[8px] border border-borderGold bg-cardBrown/95 p-6 shadow-cafe backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-softCafe";
    const top = document.createElement("div");
    top.className = "mb-5 flex items-start justify-between gap-4";
    const who = document.createElement("div");
    const name = document.createElement("h3");
    name.className = "font-display text-3xl font-semibold leading-[1.05] text-cream";
    name.textContent = review.name;
    const date = document.createElement("p");
    date.className = "mt-2 text-sm font-bold text-muted";
    date.textContent = formatDate(review.created_at);
    who.append(name, date);
    top.append(who, starRow(Number(review.rating)));
    const message = document.createElement("p");
    message.className = "text-[1rem] leading-7 text-secondary";
    message.textContent = review.message;
    card.append(top, message);
    fadeObserver.observe(card);
    return card;
  }));
}

function setStatus(message) {
  statusBox.textContent = message;
  statusBox.hidden = !message;
}

async function fetchReviews() {
  if (!supabaseIsConfigured) { render([]); return; }
  loading.hidden = false;
  try {
    const client = await getClient();
    const { data, error } = await client.from("reviews").select("id,name,rating,message,created_at").order("created_at", { ascending: false });
    if (error) throw error;
    render(data || []);
  } catch {
    render([]);
    setStatus("Could not load reviews right now.");
  } finally {
    loading.hidden = true;
  }
}

// Rating input: click, hover preview, and arrow keys.
function setRating(value) {
  rating = value;
  ratingButtons.forEach((button, index) => button.setAttribute("aria-pressed", String(index + 1 === value)));
  paintStars(ratingGroup, value);
}
ratingButtons.forEach((button, index) => {
  button.addEventListener("click", () => setRating(index + 1));
  button.addEventListener("mouseenter", () => paintStars(ratingGroup, index + 1));
  button.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = Math.max(1, Math.min(5, (rating || index + 1) + (event.key === "ArrowRight" ? 1 : -1)));
    setRating(next);
    ratingButtons[next - 1].focus();
  });
});
ratingGroup.addEventListener("mouseleave", () => paintStars(ratingGroup, rating));

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setStatus("");
  const name = form.elements.name.value.trim();
  const message = form.elements.message.value.trim();
  if (!name || !message || !rating) { setStatus("Please add your name, rating, and review message."); return; }
  if (!supabaseIsConfigured) { setStatus("Online reviews are currently unavailable. Please contact us at 01351943077."); return; }

  const submit = form.querySelector('button[type="submit"]');
  submit.disabled = true;
  submit.textContent = "Submitting...";
  try {
    const client = await getClient();
    const { error } = await client.from("reviews").insert({ name, rating, message });
    if (error) throw error;
    setStatus("Thank you! Your review has been submitted.");
    form.reset();
    setRating(0);
    await fetchReviews();
    anchor.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  } catch {
    setStatus("Sorry, your review could not be submitted. Please try again.");
  } finally {
    submit.disabled = false;
    submit.textContent = "Submit Review";
  }
});

fetchReviews();

// Shared page chrome: scroll progress bar and header state.
(() => {
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  const bar = document.createElement("span");
  bar.className = "scroll-progress__bar";
  progress.append(bar);
  document.body.prepend(progress);
  const header = document.querySelector(".site-header");
  let frame = 0;
  const update = () => {
    frame = 0;
    const scrollable = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, scrollable > 0 ? scrollY / scrollable : 0))})`;
    header?.classList.toggle("is-scrolled", scrollY > 18);
  };
  const queue = () => { if (!frame) frame = requestAnimationFrame(update); };
  update();
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", queue, { passive: true });
})();

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    if (image.dataset.fallbackApplied === "true") return;
    image.dataset.fallbackApplied = "true";
    image.src = defaultCafeImage;
  }, { once: true });
});
