// Keep the existing gallery layout; load the viewer only after an explicit click.
const gallery = document.querySelector('#gallery');
if (gallery) {
  const figures = [...gallery.querySelectorAll('.authentic-gallery__scene')];
  const slides = figures.map(figure => {
    const img = figure.querySelector('img');
    return { src: img.src, width: Number(img.getAttribute('width')), height: Number(img.getAttribute('height')), alt: img.alt };
  });
  let pending = false;
  let viewer;
  let resources;
  const loadResources = () => resources ||= Promise.all([
    import('./assets/vendor/photoswipe/photoswipe.esm.min.js'),
    new Promise((resolve, reject) => {
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = './assets/vendor/photoswipe/photoswipe.css';
      css.onload = resolve;
      css.onerror = () => { css.remove(); reject(new Error('Gallery stylesheet unavailable')); };
      document.head.append(css);
    }),
  ]).catch(error => { resources = null; throw error; });
  figures.forEach((figure, index) => {
    const link = document.createElement('a');
    link.className = 'gallery-open';
    link.href = slides[index].src;
    link.setAttribute('aria-label', `Enlarge photo: ${slides[index].alt}`);
    figure.append(link);
    link.addEventListener('click', async event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (pending || viewer) return;
      pending = true;
      link.setAttribute('aria-busy', 'true');
      try {
        const [{ default: PhotoSwipe }] = await loadResources();
        const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
        viewer = new PhotoSwipe({
          dataSource: slides, index, bgOpacity: 0.94,
          showHideAnimationType: reduced ? 'none' : 'fade',
          showAnimationDuration: reduced ? 0 : 180,
          hideAnimationDuration: reduced ? 0 : 180,
          zoomAnimationDuration: reduced ? 0 : 180,
          arrowKeys: true, escKey: true, trapFocus: true, returnFocus: true,
          preload: [1, 1],
        });
        viewer.on('destroy', () => { viewer = null; link.focus({ preventScroll: true }); });
        viewer.init();
      } catch {
        viewer = null;
        // A normal image link remains a reliable fallback if the viewer fails.
        window.location.assign(link.href);
      } finally {
        pending = false;
        link.removeAttribute('aria-busy');
      }
    });
  });
}
