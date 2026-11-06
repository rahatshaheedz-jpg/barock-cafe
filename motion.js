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
    const hero = $('[data-brand-hero]');
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

  /* ---------------- Card fan carousel (home) ----------------
     Vanilla port of the "card-fan-carousel" component: 7 cards fanned like a hand,
     elastic GSAP entry, neighbours part on hover, arrows/dots/swipe cycle the photos. */
  if (isHome) {
    const anchor = $('.home-menu-section');
    if (anchor) {
      const photos = [
        ['brand-photography/terrace', 'The BAROCK terrace among the trees'],
        ['photography-new/iced-latte', 'Iced latte at the espresso machine'],
        ['brand-photography/bar-counter', 'The teal bar counter'],
        ['photography-new/matcha', 'Iced matcha and matcha latte'],
        ['brand-photography/barista', 'A BAROCK barista at work'],
        ['photography-new/rainbow', 'A layered rainbow drink'],
        ['brand-photography/entrance-sign', 'The illuminated BAROCK sign'],
        ['brand-photography/cappuccino', 'Cappuccino with latte art'],
        ['brand-photography/goldie', 'Goldie, a BAROCK signature drink'],
        ['photography-new/coffee', 'Freshly made coffee'],
        ['brand-photography/ruby-refresher', 'Ruby refresher'],
        ['photography-new/green-sparkling', 'Green sparkling refresher'],
      ];
      const MAX = 7, HALF = 3, total = photos.length;
      const FAN = [
        { rot: -21, scale: .7756, x: -30, y: 7.3, z: 1 }, { rot: -14, scale: .8498, x: -22, y: 4, z: 2 },
        { rot: -7, scale: .9346, x: -11, y: 1.3, z: 3 }, { rot: 0, scale: 1, x: 0, y: 0, z: 10 },
        { rot: 7, scale: .9346, x: 11, y: 1.3, z: 3 }, { rot: 14, scale: .8498, x: 22, y: 4, z: 2 },
        { rot: 21, scale: .7756, x: 30, y: 7.3, z: 1 },
      ];
      const wMult = () => { const w = innerWidth; return w < 480 ? .28 : w < 640 ? .38 : w < 768 ? .5 : w < 1024 ? .75 : 1; };
      const hMult = () => {
        const w = innerWidth, ideal = (w < 480 ? 22 : w < 640 ? 26 : w < 768 ? 28 : w < 1024 ? 34 : 38) * 16;
        return Math.min(1, (innerHeight * .7) / ideal);
      };
      const chevron = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="${d === 'left' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'}"/></svg>`;

      const section = document.createElement('section');
      section.className = 'm-reel m-fan-section';
      section.setAttribute('aria-label', 'Moments at BAROCK');
      section.innerHTML = `
        <div class="m-fan" data-fan>
          ${photos.map(([p, alt], i) => `<button type="button" class="fan-card" data-i="${i}" tabindex="-1" aria-label="Show photo: ${alt}"><img data-src="./assets/${p}-640.webp" alt="${alt}" width="640" height="800" decoding="async" /></button>`).join('')}
        </div>
        <div class="m-fan__controls">
          <button type="button" class="m-fan__arrow" data-fan-prev aria-label="Previous photo">${chevron('left')}</button>
          <div class="m-fan__dots" aria-hidden="true">${photos.map(() => '<span></span>').join('')}</div>
          <button type="button" class="m-fan__arrow" data-fan-next aria-label="Next photo">${chevron('right')}</button>
        </div>
        <p class="m-fan__status" data-fan-status aria-live="polite"></p>
        <div class="m-reel__copy"><p class="eyebrow">Inside BAROCK · Gulshan-02</p><p class="m-reel__title">Every Moment, <em>Perfectly Yours.</em></p></div>`;
      anchor.after(section);
      pauseOffscreen(section);

      const fan = $('[data-fan]', section);
      const cards = $$('.fan-card', fan);
      const dots = $$('.m-fan__dots span', section);
      const status = $('[data-fan-status]', section);
      const G = window.gsap && !reduced ? window.gsap : null;
      // Apply a pose instantly (reduced motion / no GSAP) or tween it.
      const pose = (el, v, tween) => {
        if (G) { tween ? G.to(el, { ...v, ...tween }) : G.set(el, v); return; }
        el.style.transform = `translate(${v.x ?? '0rem'}, ${v.y ?? '0rem'}) rotate(${v.rotation ?? 0}deg) scale(${v.scale ?? 1})`;
        if (v.opacity !== undefined) el.style.opacity = v.opacity;
        if (v.zIndex !== undefined) el.style.zIndex = v.zIndex;
        tween?.onComplete?.();
      };

      let center = HALF, prevVisible = new Set(), animating = false, entered = false, hovered = null, leaveTimer = 0;
      const mod = (n) => ((n % total) + total) % total;
      const visibleMap = () => { const m = new Map(); for (let s = 0; s < MAX; s++) m.set(mod(center + s - HALF), s); return m; };
      const target = (slot) => { const c = FAN[slot]; return { x: `${c.x * wMult()}rem`, y: `${c.y * hMult()}rem`, rotation: c.rot, scale: c.scale, opacity: 1, zIndex: c.z }; };

      const render = (dir) => {
        const map = visibleMap(), first = !entered, hm = hMult();
        animating = true;
        let done = 0;
        const finish = () => { if (++done >= map.size) { animating = false; entered = true; } };
        cards.forEach((card, i) => {
          const slot = map.get(i), was = prevVisible.has(i);
          card.tabIndex = slot !== undefined && slot !== HALF ? 0 : -1;
          card.classList.toggle('is-center', slot === HALF);
          card.setAttribute('aria-hidden', String(slot === undefined));
          if (slot !== undefined) {
            const t = target(slot);
            if (first) {
              pose(card, { x: 0, y: `${12 * hm}rem`, rotation: 0, scale: .5, opacity: 0 });
              pose(card, t, { duration: 1.2, ease: 'elastic.out(1.05,.78)', delay: .15 + slot * .06, onComplete: finish });
            } else if (!was) {
              pose(card, { x: `${dir > 0 ? 40 : -40}rem`, y: t.y, rotation: dir > 0 ? 30 : -30, scale: .5, opacity: 0 });
              pose(card, t, { duration: .6, ease: 'power2.out', onComplete: finish });
            } else pose(card, t, { duration: .5, ease: 'power2.out', onComplete: finish });
          } else if (was) {
            pose(card, { x: `${dir > 0 ? -40 : 40}rem`, opacity: 0, scale: .5, rotation: dir > 0 ? -30 : 30, zIndex: 0 }, { duration: .4, ease: 'power2.in' });
          } else if (first) pose(card, { x: 0, y: 0, opacity: 0, scale: .3, zIndex: 0 });
        });
        prevVisible = new Set(map.keys());
        dots.forEach((d, i) => d.classList.toggle('is-on', i === center));
        status.textContent = `Photo ${center + 1} of ${total}: ${photos[center][1]}`;
      };

      // Neighbours part around the hovered card (desktop pointer only).
      const hoverLayout = (hSlot) => {
        if (!G) return;
        const map = visibleMap(), wm = wMult(), hm = hMult();
        cards.forEach((el, i) => {
          const slot = map.get(i);
          if (slot === undefined) return;
          const c = FAN[slot];
          let x = c.x * wm, y = c.y * hm, rot = c.rot, scale = c.scale, delay = Math.abs(slot - (hSlot ?? HALF)) * .02;
          if (hSlot !== null) {
            const dist = Math.abs(slot - hSlot);
            if (slot === hSlot) { y -= 2.5 * hm; scale *= 1.08; }
            else {
              const norm = (slot - HALF) / HALF, push = 8 * (1 - Math.abs(norm)) * (1 + .2 * Math.max(0, 3 - dist));
              if (slot < hSlot) { x -= push * wm; rot -= 3 / (dist + 1); } else { x += push * wm; rot += 3 / (dist + 1); }
              if (slot === MAX - 1 && hSlot < HALF) y -= hm;
              if (slot === 0 && hSlot > HALF) y -= hm;
            }
          }
          G.to(el, { x: `${x}rem`, y: `${y}rem`, rotation: rot, scale, duration: .5, delay, ease: 'elastic.out(1,.75)', overwrite: 'auto' });
          G.set(el, { zIndex: c.z });
        });
      };

      const go = (to) => {
        if (animating || to === center) return;
        const diff = mod(to - center), dir = diff <= total / 2 ? 1 : -1;
        center = mod(to); hovered = null;
        render(dir);
      };
      $('[data-fan-prev]', section).addEventListener('click', () => go(center - 1));
      $('[data-fan-next]', section).addEventListener('click', () => go(center + 1));
      cards.forEach((card, i) => {
        card.addEventListener('click', () => { if (!card.classList.contains('is-center')) go(i); });
        if (fine) card.addEventListener('mouseenter', () => {
          if (animating) return;
          clearTimeout(leaveTimer);
          const slot = visibleMap().get(i);
          if (slot !== undefined && slot !== hovered) { hovered = slot; hoverLayout(slot); }
        });
      });
      fan.addEventListener('mouseleave', () => { if (animating) return; clearTimeout(leaveTimer); leaveTimer = setTimeout(() => { hovered = null; hoverLayout(null); }, 50); });
      section.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(center - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(center + 1); }
      });
      let sx = 0, sy = 0;
      fan.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
      fan.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) go(center + (dx < 0 ? 1 : -1));
      }, { passive: true });
      let rz = 0;
      addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { if (entered && !animating) { const map = visibleMap(); cards.forEach((c, i) => { const s = map.get(i); if (s !== undefined) pose(c, target(s)); }); } }, 120); });

      // Photos load near the viewport; the fan deals itself in when it is actually seen.
      cards.forEach((c) => pose(c, { x: 0, y: 0, opacity: 0, scale: .5, zIndex: 0 }));
      onceVisible([section], () => $$('img[data-src]', section).forEach((img) => { img.src = img.dataset.src; img.removeAttribute('data-src'); }), '700px 0px');
      onceVisible([fan], () => render(1), '0px 0px -20% 0px');
    }
  }

  /* ---------------- Menu: animated tabs ----------------
     Vanilla port of the "animated-tabs" component: a shared glass pill springs to the
     active category, and each new menu page arrives with a soft slide, scale and blur. */
  $$('[data-menu-viewer]').forEach((viewer) => {
    const track = $('[data-menu-categories]', viewer);
    const frame = $('[data-menu-frame]', viewer);
    if (track) {
      track.classList.add('is-animated');
      const pill = document.createElement('span');
      pill.className = 'm-tab-pill';
      pill.setAttribute('aria-hidden', 'true');
      let placed = false;
      const placePill = () => {
        const active = track.querySelector('button[aria-current="page"]');
        if (!active) { pill.classList.remove('is-on'); return; }
        if (pill.parentNode !== track) track.prepend(pill);
        if (!placed) pill.style.transition = 'none';
        pill.style.width = `${active.offsetWidth}px`;
        pill.style.height = `${active.offsetHeight}px`;
        pill.style.transform = `translate3d(${active.offsetLeft}px,${active.offsetTop}px,0)`;
        pill.classList.add('is-on');
        if (!placed) { void pill.offsetWidth; pill.style.transition = ''; placed = true; }
        // keep the active tab in view inside the scrolling strip
        const l = active.offsetLeft, r = l + active.offsetWidth;
        if (l < track.scrollLeft || r > track.scrollLeft + track.clientWidth) track.scrollTo({ left: l - 16, behavior: reduced ? 'auto' : 'smooth' });
      };
      new MutationObserver(placePill).observe(track, { childList: true, subtree: true, attributes: true, attributeFilter: ['aria-current'] });
      addEventListener('resize', () => { placed = false; placePill(); });
      document.fonts?.ready.then(() => { placed = false; placePill(); });
      placePill();
    }
    if (frame && !reduced && 'animate' in Element.prototype) {
      let last = Number(viewer.dataset.currentPage) || 1;
      new MutationObserver(() => {
        const page = Number(viewer.dataset.currentPage) || last;
        const img = frame.firstElementChild;
        if (!img || page === last) return;
        const dir = page > last ? 1 : -1;
        last = page;
        const from = { opacity: 0, transform: `translate3d(${dir * -10}px,0,0) scale(.95)` };
        if (!phone) from.filter = 'blur(10px)';
        img.animate([from, { opacity: 1, transform: 'none', filter: 'blur(0px)' }], { duration: 520, easing: 'cubic-bezier(.2,.9,.25,1.15)' });
      }).observe(frame, { childList: true });
    }
  });

  if (reduced) return; // everything below is pure motion

  /* ---------------- Scroll progress ---------------- */
  const bar = document.createElement('div');
  bar.className = 'm-progress';
  bar.setAttribute('aria-hidden', 'true');
  if (!$('.scroll-progress')) document.body.append(bar);

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
    const count = phone ? 6 : 30;
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
  if (bar.isConnected || heroMedia) addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
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

const marqueeGallery = document.querySelector(".barock-marquee__gallery");
if (marqueeGallery) new IntersectionObserver(([entry]) => {
  marqueeGallery.classList.toggle("is-playing", entry.isIntersecting);
}).observe(marqueeGallery);

// Offscreen glass surfaces need no backdrop sampling.
const glassSurfaces = document.querySelectorAll(".glass-button, .button, .socials a, .contact-links a, .contact-form input, .contact-form textarea");
if ("IntersectionObserver" in window) {
  const glassObserver = new IntersectionObserver(entries => {
    for (const entry of entries) entry.target.classList.toggle("glass-offscreen", !entry.isIntersecting);
  }, { rootMargin: "120px" });
  glassSurfaces.forEach(element => glassObserver.observe(element));
}
