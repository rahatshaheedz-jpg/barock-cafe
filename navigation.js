// Navigation: kinetic fullscreen menu (phones and tablets) + scroll-spy for the section links.
// The kinetic menu is a vanilla rebuild of the "Sterling Gate" GSAP menu, in BAROCK's palette:
// three backdrop layers sweep in, the links rise and tilt into place, and each link lights a
// small ambient scene behind it. CSS does the motion; this file only switches states.
(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const oldPanel = document.querySelector('[data-mobile-menu]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (toggle && oldPanel) {
    const links = [...oldPanel.querySelectorAll('a')].map((a) => ({ href: a.getAttribute('href'), label: a.textContent.trim(), current: a.hasAttribute('aria-current') }));
    oldPanel.hidden = true; // the kinetic menu replaces the small dropdown

    const shapes = [
      // 1 rings · 2 steam waves · 3 bean dots · 4 monogram · 5 lantern rays · 6 orbit
      '<circle class="ks" cx="300" cy="110" r="70" stroke="rgba(129,216,208,.35)" stroke-width="2"/><circle class="ks" cx="300" cy="110" r="110" stroke="rgba(214,178,94,.25)" stroke-width="1.5"/><circle class="ks" cx="300" cy="110" r="150" stroke="rgba(129,216,208,.15)"/>',
      '<path class="ks" d="M60 330c40-60 80 60 120 0s80 60 120 0 80 60 120 0" stroke="rgba(129,216,208,.35)" stroke-width="3"/><path class="ks" d="M60 280c40-60 80 60 120 0s80 60 120 0 80 60 120 0" stroke="rgba(214,178,94,.28)" stroke-width="2"/>',
      '<g class="ks" fill="rgba(214,178,94,.35)"><ellipse cx="90" cy="90" rx="12" ry="17" transform="rotate(30 90 90)"/><ellipse cx="300" cy="70" rx="10" ry="14" transform="rotate(-20 300 70)"/><ellipse cx="200" cy="170" rx="14" ry="19" transform="rotate(60 200 170)"/></g><g class="ks" fill="rgba(129,216,208,.3)"><circle cx="340" cy="230" r="6"/><circle cx="70" cy="260" r="8"/><circle cx="250" cy="320" r="5"/></g>',
      '<text class="ks" x="200" y="290" text-anchor="middle" font-family="Bodoni Moda,serif" font-size="300" fill="rgba(129,216,208,.08)" stroke="rgba(214,178,94,.25)">B</text>',
      '<g class="ks" stroke="rgba(214,178,94,.3)" stroke-width="2"><line x1="200" y1="0" x2="60" y2="400"/><line x1="200" y1="0" x2="200" y2="400"/><line x1="200" y1="0" x2="340" y2="400"/></g><circle class="ks" cx="200" cy="40" r="22" fill="rgba(129,216,208,.25)"/>',
      '<ellipse class="ks" cx="200" cy="200" rx="170" ry="60" stroke="rgba(129,216,208,.3)" stroke-width="2" transform="rotate(-18 200 200)"/><circle class="ks" cx="355" cy="148" r="8" fill="rgba(214,178,94,.6)"/>',
    ];
    const overlay = document.createElement('div');
    overlay.className = 'kinetic';
    overlay.id = 'kinetic-menu';
    overlay.hidden = true;
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Navigation');
    overlay.innerHTML = `
      <div class="kinetic__scrim" data-close></div>
      <div class="kinetic__panel">
        <div class="kinetic__layers" aria-hidden="true"><i></i><i></i><i></i></div>
        <div class="kinetic__shapes" aria-hidden="true">${shapes.map((s, i) => `<svg class="kinetic__shape" data-shape="${i}" viewBox="0 0 400 400" fill="none">${s}</svg>`).join('')}</div>
        <nav class="kinetic__nav" aria-label="Mobile navigation">
          <ol>${links.map((l, i) => `<li data-shape="${i % shapes.length}"><a href="${l.href}"${l.current ? ' aria-current="page"' : ''}><span class="kinetic__num">0${i + 1}</span><span class="kinetic__label">${l.label}</span></a></li>`).join('')}</ol>
        </nav>
        <div class="kinetic__foot">
          <p><span>Visit</span>House 9/B, Road 51/53, Gulshan-02, Dhaka -1212</p>
          <p><span>Hours</span>Daily · 8:00 AM – 2:00 AM</p>
          <p><span>Hotline</span><a href="tel:+8801351943077">01351943077</a></p>
          <p class="kinetic__social"><a href="https://www.instagram.com/barock_cafe/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.facebook.com/profile.php?id=61590421534188" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        </div>
      </div>`;
    document.body.append(overlay);
    toggle.setAttribute('aria-controls', 'kinetic-menu');

    let open = false, closeTimer = 0, lastFocus = null;
    const items = [...overlay.querySelectorAll('.kinetic__nav li')];
    const shapeEls = [...overlay.querySelectorAll('.kinetic__shape')];
    const lightShape = (index) => shapeEls.forEach((s, i) => s.classList.toggle('is-on', i === index));

    const setOpen = (next, { focusToggle = true } = {}) => {
      if (next === open) return;
      open = next;
      clearTimeout(closeTimer);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.classList.toggle('is-active', open);
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      document.documentElement.classList.toggle('kinetic-open', open);
      if (open) {
        lastFocus = document.activeElement;
        overlay.hidden = false;
        requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('is-open')));
        const current = items.findIndex((li) => li.querySelector('[aria-current]'));
        lightShape(current >= 0 ? Number(items[current].dataset.shape) : 0);
        setTimeout(() => overlay.querySelector('.kinetic__nav a')?.focus({ preventScroll: true }), reduced ? 0 : 420);
      } else {
        overlay.classList.remove('is-open');
        overlay.classList.add('is-closing');
        closeTimer = setTimeout(() => { overlay.hidden = true; overlay.classList.remove('is-closing'); }, reduced ? 0 : 640);
        if (focusToggle) (lastFocus && document.contains(lastFocus) ? lastFocus : toggle).focus({ preventScroll: true });
      }
    };

    toggle.addEventListener('click', () => setOpen(!open));
    overlay.addEventListener('click', (event) => {
      if (event.target.closest('[data-close]')) setOpen(false);
      else if (event.target.closest('.kinetic__nav a')) setOpen(false, { focusToggle: false });
    });
    items.forEach((li) => {
      const on = () => lightShape(Number(li.dataset.shape));
      li.addEventListener('pointerenter', on);
      li.addEventListener('focusin', on);
    });
    document.addEventListener('keydown', (event) => {
      if (!open) return;
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); return; }
      if (event.key !== 'Tab') return;
      const focusable = [toggle, ...overlay.querySelectorAll('a')];
      const index = focusable.indexOf(document.activeElement);
      if (event.shiftKey && index <= 0) { event.preventDefault(); focusable[focusable.length - 1].focus(); }
      else if (!event.shiftKey && index === focusable.length - 1) { event.preventDefault(); focusable[0].focus(); }
    });
    matchMedia('(min-width: 961px)').addEventListener('change', (m) => { if (m.matches) setOpen(false, { focusToggle: false }); });
    addEventListener('pageshow', () => setOpen(false, { focusToggle: false }));
  }

  // Scroll-spy: the section in view is marked current in every nav.
  const localLinks = () => [...document.querySelectorAll('.nav-links a[href^="#"], .kinetic__nav a[href^="#"]')];
  const hashes = [...new Set(localLinks().map((a) => a.hash))];
  const targets = hashes
    .map((hash) => ({ hash, element: hash === '#home' ? document.querySelector('.brand-hero') : document.querySelector(hash) }))
    .filter((t) => t.element);
  if (targets.length) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const active = targets.find((t) => t.element === entry.target)?.hash;
        localLinks().forEach((a) => (a.hash === active ? a.setAttribute('aria-current', 'location') : a.removeAttribute('aria-current')));
      }
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    targets.forEach((t) => observer.observe(t.element));
  }
})();
