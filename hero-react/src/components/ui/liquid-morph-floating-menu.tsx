import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function FloatingMenu({ links }: { links: HTMLAnchorElement[] }) {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const first = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    first.current?.focus({ preventScroll: true });
    function outside(event: PointerEvent) {
      if (!panel.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return <motion.nav ref={panel} className="phone-liquid-menu" aria-label="Mobile navigation"
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
    initial={false} animate={{ width: open ? 280 : 150, borderRadius: open ? 32 : 72 }}
    transition={{ duration: reduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}>
    <motion.div className="phone-menu-links" id="phone-nav-links" inert={!open}
      initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: reduced ? 0 : 0.35 }}>
      {links.map((link, i) => <a ref={i === 0 ? first : undefined} key={link.href} href={link.href}
        aria-current={link.hasAttribute("aria-current") ? "page" : undefined}>{link.textContent}</a>)}
    </motion.div>
    <button ref={toggle} aria-expanded={open} aria-controls="phone-nav-links" onClick={() => setOpen(!open)}>
      Menu <span aria-hidden="true">{open ? "×" : "☰"}</span>
    </button>
  </motion.nav>;
}
