import { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import SushiConveyorMenu from "./components/ui/sushi-conveyor-menu";
import "./menu-conveyor.css";

const dishes = [
  ["mushroom", "Spicy Garlic Mushroom", 790],
  ["chicken-strips", "Chicken Tender Strips", 690],
  ["fish-chips", "Fish & Chips", 790],
  ["club", "Club Sandwich", 790],
  ["cheesy-chicken", "Cheesy Grilled Chicken Sandwich", 840],
  ["steak-sandwich", "Beef Steak Sandwich", 890],
  ["special", "Barock Special Sandwich", 990],
] as const;
const prices = [690, 790, 840, 890, 990];
const items = dishes.map(([id, name, price]) => ({
  id, name, price: `BDT ${price}`, tier: (prices.indexOf(price) + 1) as 1|2|3|4|5,
  image: `./assets/menu-dishes/${id}.webp`,
}));
const mount = document.getElementById("menu-conveyor");
if (mount) createRoot(mount).render(<SushiConveyorMenu items={items} legend={{}} eyebrow="From the BAROCK kitchen" heading="Appetizers & sandwiches" caption="Pick a plate to explore a dish." />);

const coffeeMount = document.getElementById("coffee-pour");
if (coffeeMount) {
  const loadCoffee = async () => {
    try {
      const { CoffeePourMenu, DEFAULT_COFFEE_ITEMS } = await import("./components/ui/coffee-pour-menu");
      createRoot(coffeeMount).render(<CoffeePourMenu items={DEFAULT_COFFEE_ITEMS.map(item => ({ ...item, subtitle: undefined }))} />);
    } catch {
      const retry = document.createElement("button");
      retry.textContent = "Load coffee preview";
      retry.className = "button";
      retry.addEventListener("click", loadCoffee, { once: true });
      coffeeMount.replaceChildren(retry);
    }
  };
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    observer.disconnect();
    void loadCoffee();
  }, { rootMargin: "200px" });
  observer.observe(coffeeMount);
}

if (document.querySelector("[data-menu-viewer]")) {
 const fallback = document.querySelector<HTMLElement>("[data-menu-viewer]");
 if(fallback) {
 const observer = new IntersectionObserver(async entries => {
 if(!entries.some(e=>e.isIntersecting)) return;
 observer.disconnect();
 try {
 const BookSlider = lazy(() => import("./components/ui/book-slider"));
 const Journal = lazy(() => import("./components/ui/journal-spread-carousel"));
 const pages=Array.from({length:22},(_,i)=>({label:`Page ${i+1} of 22`,image:`./assets/menu-current/page-${String(i+1).padStart(2,"0")}.webp?v=20261116-menu-v2`}));
 function ResponsiveMenu() {
  const [phone,setPhone]=useState(matchMedia("(max-width: 767px)").matches);
  useEffect(()=>{const mq=matchMedia("(max-width: 767px)");const update=()=>setPhone(mq.matches);mq.addEventListener("change",update);return()=>mq.removeEventListener("change",update)},[]);
  return <Suspense fallback={<p role="status">Loading menu…</p>}>{phone ? <Journal spreads={pages} title="BAROCK Menu" meta="22 original pages · Swipe to browse" height="clamp(940px, 85vw, 1160px)" autoPlay={false}/> : <BookSlider/>}</Suspense>;
 }
 const mount=document.createElement("div");mount.className="menu-journal-desktop";fallback.before(mount);
 createRoot(mount).render(<ResponsiveMenu/>);
 fallback.hidden=true; fallback.style.display="none";
 const download=fallback.querySelector("a[download]");if(download){const link=download.cloneNode(true) as HTMLElement;link.classList.add("menu-journal-desktop");mount.after(link);}
 } catch { /* Preserve the PDF viewer when loading fails. */ }
 },{rootMargin:"200px"});observer.observe(fallback);
 }
}
