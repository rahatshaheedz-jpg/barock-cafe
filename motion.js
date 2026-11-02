// BAROCK — Motion layer.
// Vanilla, dependency-free. Everything moves with transform/opacity, loops stop
// when offscreen or when the tab is hidden, and reduced-motion users get a still site.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const phone = matchMedia('(max-width: 760px)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const main = $('main') || document.body;
  const isHome = document.body.classList.contains('home-page') || !!$('[data-brand-hero]');

  // Run a callback when an element enters the viewport (once).
  const onceVisible = (els, cb, margin = '0px 0px -12% 0px') => {
    if (!('IntersectionObserver' in window)) return els.forEach(cb);
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { io.unobserve(e.target); cb(e.target); } }), { rootMargin: margin });
    els.forEach((el) => io.observe(el));
  };
  // Toggle .is-paused on loops that leave the viewport.
  const pauseOffscreen = (el) => {
    if (!('IntersectionObserver' in window)) return;
    new IntersectionObserver(([e]) => el.classList.toggle('is-paused', !e.isIntersecting), { rootMargin: '120px 0px' }).observe(el);
  };

  /* ---------------- Marquee ribbon (home) ---------------- */
  if (isHome) {
    const hero = $('.brand-hero');
    const words = ['Every Moment, Perfectly Yours', 'Coffee', 'Cuisine & Evening Hospitality', 'Gulshan-02 · Dhaka', 'Beneath the Golden Lights', 'Daily 8:00 AM – 2:00 AM'];
    if (hero) {
      const group = `<div class="m-marquee__group">${words.map((w) => `<span class="m-marquee__item">${w}</span>`).join('')}</div>`;
      const ribbon = document.createElement('div');
      ribbon.className = 'm-marquee';
      ribbon.setAttribute('aria-hidden', 'true');
      ribbon.innerHTML = `<div class="m-marquee__track">${group}${group}${group}${group}</div>`;
      const wrap = document.createElement('div');
      wrap.className = 'm-marquee-wrap';
      wrap.append(ribbon);
      hero.after(wrap);
      pauseOffscreen(ribbon);
    }
  }

  /* ---------------- Curved 3D photo reel (home) ---------------- */
  if (isHome) {
    const anchor = $('.home-menu-section');
    if (anchor) {
      const photos = [
        'brand-photography/terrace', 'photography-new/iced-latte', 'brand-photography/bar-counter', 'photography-new/matcha',
        'brand-photography/barista', 'photography-new/rainbow', 'brand-photography/entrance-sign', 'brand-photography/cappuccino',
        'brand-photography/goldie', 'photography-new/coffee', 'brand-photography/ruby-refresher', 'photography-new/green-sparkling',
      ];
      const n = phone ? 9 : 16;
      const w = phone ? 150 : 200, h = phone ? 210 : 280;
      const radius = Math.round((w / 2) / Math.tan(Math.PI / n) * 1.04);
      const section = document.createElement('section');
      section.className = 'm-reel';
      section.setAttribute('aria-label', 'Moments at BAROCK');
      section.innerHTML = `
        <div class="m-reel__stage" aria-hidden="true">
          <div class="m-reel__ring" style="--card-w:${w}px;--card-h:${h}px;--step:${360 / n}deg;--radius:${radius}px">
            ${Array.from({ length: n }, (_, i) => photos[i % photos.length]).map((p, i) => `<figure class="m-reel__card" style="--i:${i}"><img data-src="./assets/${p}-640.webp" alt="" width="640" height="800" decoding="async" /></figure>`).join('')}
          </div>
        </div>
        <div class="m-reel__copy"><p class="eyebrow">Inside BAROCK · Gulshan-02</p><p class="m-reel__title">Every Moment, <em>Perfectly Yours.</em></p></div>`;
      anchor.after(section);
      pauseOffscreen(section);
      // Load the reel photos only when the band is near the viewport.
      onceVisible([section], () => $$('img[data-src]', section).forEach((img) => { img.src = img.dataset.src; img.removeAttribute('data-src'); }), '700px 0px');
    }
  }

  if (reduced) return; // everything below is pure motion

  /* ---------------- Scroll progress ---------------- */
  const bar = document.createElement('div');
  bar.className = 'm-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.append(bar);

  /* ---------------- Hero: letters, gold dust, parallax ---------------- */
  const hero = $('.brand-hero');
  const heroTitle = hero && $('h1', hero);
  if (heroTitle) {
    heroTitle.setAttribute('aria-label', heroTitle.textContent.replace(/\s+/g, ' ').trim());
    let ci = 0;
    const split = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          [...child.textContent].forEach((ch) => {
            if (/\s/.test(ch)) { frag.append(ch); return; }
            const s = document.createElement('span');
            s.className = 'm-char'; s.textContent = ch; s.style.setProperty('--ci', ci++); s.setAttribute('aria-hidden', 'true');
            frag.append(s);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) { split(child); }
      });
    };
    split(heroTitle);
    // Text gradients (background-clip:text) don't reach transformed children in every browser,
    // so each letter gets its own slice of its parent's gradient.
    const chars = $$('.m-char', heroTitle);
    const paintChars = () => {
      heroTitle.classList.add('m-measure');
      const boxes = new Map();
      chars.forEach((c) => {
        const parent = c.parentElement;
        if (!boxes.has(parent)) {
          const cs = getComputedStyle(parent);
          boxes.set(parent, { bg: cs.backgroundImage, clip: (cs.webkitBackgroundClip || cs.backgroundClip) === 'text', r: parent.getBoundingClientRect() });
        }
        const b = boxes.get(parent);
        if (!b.clip || b.bg === 'none') return;
        const r = c.getBoundingClientRect();
        Object.assign(c.style, { backgroundImage: b.bg, backgroundSize: `${b.r.width}px ${b.r.height}px`, backgroundPosition: `${b.r.left - r.left}px ${b.r.top - r.top}px`, webkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' });
      });
      heroTitle.classList.remove('m-measure');
    };
    paintChars();
    document.fonts?.ready.then(paintChars);
    let paintRaf = 0;
    addEventListener('resize', () => { cancelAnimationFrame(paintRaf); paintRaf = requestAnimationFrame(paintChars); });
    const start = () => requestAnimationFrame(() => heroTitle.classList.add('is-split-in'));
    const root = document.documentElement;
    if (root.classList.contains('barock-loader-pending')) {
      const mo = new MutationObserver(() => { if (!root.classList.contains('barock-loader-pending')) { mo.disconnect(); setTimeout(start, 120); } });
      mo.observe(root, { attributes: true, attributeFilter: ['class'] });
      setTimeout(() => { mo.disconnect(); start(); }, 4500);
    } else start();
  }

  if (hero) {
    // Gold & Tiffany dust: CSS-animated motes (compositor-only, no per-frame JS).
    const dust = document.createElement('div');
    dust.className = 'm-dust';
    dust.setAttribute('aria-hidden', 'true');
    const count = phone ? 10 : 30;
    let html = '';
    for (let i = 0; i < count; i++) {
      const size = (phone ? 4 : 5) + Math.random() * (phone ? 8 : 12);
      const tone = Math.random() < .28 ? 't' : 'g';
      html += `<i class="m-mote m-mote--${tone}" style="left:${(Math.random() * 100).toFixed(1)}%;width:${size.toFixed(1)}px;height:${size.toFixed(1)}px;animation-duration:${(11 + Math.random() * 14).toFixed(1)}s;animation-delay:-${(Math.random() * 25).toFixed(1)}s"><b style="opacity:${(.35 + Math.random() * .55).toFixed(2)};animation-duration:${(3 + Math.random() * 4).toFixed(1)}s"></b></i>`;
    }
    dust.innerHTML = html;
    hero.append(dust);
    pauseOffscreen(dust);
  }

  /* ---------------- Scroll-linked: progress + hero parallax ---------------- */
  const heroMedia = hero && $('.brand-hero__media', hero);
  const heroContent = hero && $('.brand-hero__content', hero);
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    if (heroMedia && y < innerHeight * 1.2) {
      heroMedia.style.transform = `translate3d(0,${(y * .28).toFixed(1)}px,0) scale(${1 + Math.min(y / 4000, .08)})`;
      if (heroContent && !phone) { heroContent.style.transform = `translate3d(0,${(y * -.12).toFixed(1)}px,0)`; heroContent.style.opacity = String(Math.max(0, 1 - y / (innerHeight * .85))); }
    }
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------------- Heading word reveals ---------------- */
  const heads = $$('h2', main).filter((h) => !h.closest('[data-menu-viewer], .kinetic, .m-reel') && [...h.childNodes].every((n) => n.nodeType === 3 || n.nodeName === 'BR'));
  heads.forEach((h) => {
    h.setAttribute('aria-label', h.textContent.replace(/\s+/g, ' ').trim());
    let wi = 0;
    [...h.childNodes].forEach((node) => {
      if (node.nodeType !== 3) return;
      const frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.append(' '); return; }
        const outer = document.createElement('span'); outer.className = 'm-w'; outer.setAttribute('aria-hidden', 'true');
        const inner = document.createElement('span'); inner.textContent = part; inner.style.setProperty('--wi', wi++);
        outer.append(inner); frag.append(outer);
      });
      node.replaceWith(frag);
    });
    h.classList.add('m-words');
  });
  onceVisible(heads, (h) => h.classList.add('is-in'), '0px 0px -8% 0px');

  /* ---------------- Image settle reveals ---------------- */
  const pics = $$('picture', main).filter((p) => !p.closest('.brand-hero, [data-menu-viewer], .m-reel, .site-header, footer') && p.querySelector('img'));
  pics.forEach((p) => p.classList.add('m-img'));
  onceVisible(pics, (p) => p.classList.add('is-in'), '0px 0px -6% 0px');

  /* ---------------- Liquid glass nav (desktop) ---------------- */
  const nav = $('.site-header .nav-links');
  if (nav && matchMedia('(min-width: 961px) and (hover: hover)').matches) {
    const links = $$('a', nav);
    links.forEach((a) => { if (!a.querySelector('.nav-label')) a.innerHTML = `<span class="nav-label">${a.innerHTML}</span>`; });
    nav.classList.add('is-liquid');
    const drop = document.createElement('span');
    drop.className = 'liquid-drop'; drop.setAttribute('aria-hidden', 'true');
    drop.innerHTML = '<span class="liquid-drop__body"></span>';
    nav.prepend(drop);
    let hovered = null, placed = null, moveTimer = 0;
    const current = () => links.find((a) => a.hasAttribute('aria-current'));
    const splash = (x, y, n = 3) => {
      for (let i = 0; i < n; i++) {
        const d = document.createElement('span'); d.className = 'liquid-droplet';
        d.style.left = `${x}px`; d.style.top = `${y}px`;
        d.style.setProperty('--dx', `${(Math.random() - .5) * 40}px`); d.style.setProperty('--dy', `${-8 - Math.random() * 18}px`);
        nav.append(d); d.addEventListener('animationend', () => d.remove(), { once: true });
      }
    };
    const place = () => {
      const target = hovered || current();
      links.forEach((a) => a.classList.toggle('is-target', a === target));
      if (!target) { drop.classList.remove('is-on'); placed = null; return; }
      const x = target.offsetLeft - 6, w = target.offsetWidth + 12;
      if (!placed) { drop.style.transition = 'none'; }
      else if (placed !== target) {
        splash(placed.offsetLeft + placed.offsetWidth / 2, nav.clientHeight / 2);
        drop.classList.remove('is-moving'); void drop.offsetWidth; drop.classList.add('is-moving');
        clearTimeout(moveTimer); moveTimer = setTimeout(() => drop.classList.remove('is-moving'), 650);
        target.classList.remove('is-pop'); void target.offsetWidth; target.classList.add('is-pop');
      }
      drop.style.width = `${w}px`;
      drop.style.transform = `translate3d(${x}px,0,0)`;
      drop.classList.add('is-on');
      if (!placed) { void drop.offsetWidth; drop.style.transition = ''; }
      placed = target;
    };
    links.forEach((a) => {
      a.addEventListener('pointerenter', () => { hovered = a; place(); });
      a.addEventListener('focus', () => { hovered = a; place(); });
      a.addEventListener('blur', () => { hovered = null; place(); });
      a.addEventListener('pointerdown', (e) => {
        const r = nav.getBoundingClientRect();
        ['', ' is-gold'].forEach((c) => {
          const rip = document.createElement('span'); rip.className = `liquid-ripple${c}`;
          rip.style.left = `${e.clientX - r.left}px`; rip.style.top = `${e.clientY - r.top}px`;
          nav.append(rip); rip.addEventListener('animationend', () => rip.remove(), { once: true });
        });
        splash(e.clientX - r.left, e.clientY - r.top, 5);
      });
    });
    nav.addEventListener('pointerleave', () => { hovered = null; place(); });
    new MutationObserver(() => { if (!hovered) place(); }).observe(nav, { subtree: true, attributes: true, attributeFilter: ['aria-current'] });
    addEventListener('resize', () => { placed = null; place(); });
    document.fonts?.ready.then(() => { placed = null; place(); });
    place();
  }

  /* ---------------- Desktop: cursor ring + magnetic buttons ---------------- */
  if (fine) {
    const ring = document.createElement('div');
    ring.className = 'm-cursor'; ring.setAttribute('aria-hidden', 'true');
    document.body.append(ring);
    let tx = -100, ty = -100, x = -100, y = -100, loop = 0;
    const step = () => {
      x += (tx - x) * .22; y += (ty - y) * .22;
      ring.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
      loop = Math.abs(tx - x) + Math.abs(ty - y) > .3 ? requestAnimationFrame(step) : 0;
    };
    addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      tx = e.clientX; ty = e.clientY;
      if (!ring.classList.contains('is-on')) { x = tx; y = ty; ring.classList.add('is-on'); }
      ring.classList.toggle('is-link', !!e.target.closest('a, button, [role="button"], input, textarea, select, label'));
      if (!loop) loop = requestAnimationFrame(step);
    }, { passive: true });
    document.addEventListener('pointerleave', () => ring.classList.remove('is-on'));
    addEventListener('pointerdown', () => ring.classList.add('is-down'));
    addEventListener('pointerup', () => ring.classList.remove('is-down'));

    $$('.button, .visit-pill, .glass-button, .map-activate').forEach((el) => {
      el.classList.add('m-mag');
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) / r.width, dy = (e.clientY - r.top - r.height / 2) / r.height;
        el.style.translate = `${(dx * 10).toFixed(1)}px ${(dy * 8).toFixed(1)}px`;
      });
      el.addEventListener('pointerleave', () => { el.style.translate = ''; });
    });
  }
})();
