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
