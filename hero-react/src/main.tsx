import { createRoot } from "react-dom/client";
import PerspectiveTunnelHero from "@/components/ui/perspective-tunnel-hero";

const target = document.getElementById("barock-tunnel-hero");
if (target) createRoot(target).render(<PerspectiveTunnelHero />);
