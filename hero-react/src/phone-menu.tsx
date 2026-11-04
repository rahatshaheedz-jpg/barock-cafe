import { createRoot } from "react-dom/client";
import FloatingMenu from "./components/ui/liquid-morph-floating-menu";

const phone = matchMedia("(max-width: 767px)");
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("#mobile-menu a"));
const host = document.createElement("div");
host.className = "phone-menu-host";
document.querySelector(".site-header")?.append(host);
const phoneRoot = createRoot(host);
function syncPhoneMenu() {
  phoneRoot.render(phone.matches && links.length ? <FloatingMenu links={links} /> : null);
}
syncPhoneMenu();
phone.addEventListener("change", syncPhoneMenu);
