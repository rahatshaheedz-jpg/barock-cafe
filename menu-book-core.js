(() => {
  const pageCount = 11;
  const pagePath = (index) => `./assets/menu-book/page-${String(index + 1).padStart(2, "0")}.webp?v=20260911-menu11`;
  const pageLabels = [
    "front cover and contact details",
    "the story of BAROCK",
    "coffee, hot chocolate, and iced coffee",
    "tea, iced tea, matcha, frappe, smoothies, and milkshakes",
    "signature mocktails and beverages",
    "juices, kids zone, soup, and salad",
    "appetizers, sandwiches, burgers, and fajitas",
    "alambre, pizza, and pasta",
    "seafood, chicken dishes, and straight from the butcher",
    "desserts and breakfast",
    "back cover and contact details",
  ];

  function initSlider(book) {
    const stage = book.closest('[data-book-stage]');
    const viewport = book.querySelector('[data-book-surface]');
    const slider = book.querySelector('[data-book-slider]');
    const previous = stage.querySelector('[data-book-previous]');
    const next = stage.querySelector('[data-book-next]');
    const status = stage.querySelector('[data-book-status]');
    const mobile = matchMedia('(max-width: 768px)');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const images = [], ready = new Set();
    let slides = [], current = 0, busy = false, animations = [], epoch = 0, pointer = null;
    const normalized = n => mobile.matches || n === 0 ? n : n % 2 ? n : n - 1;
    const adjacent = dir => mobile.matches ? current + dir : dir > 0 ? (current === 0 ? 1 : current + 2) : current <= 1 ? 0 : current - 2;
    const indices = n => n < 0 || n >= pageCount ? [] : mobile.matches || n === 0 ? [n] : [n,n+1].filter(i=>i<pageCount);
    const available = n => indices(n).length > 0 && indices(n).every(i=>ready.has(i));
    function controls() {
      previous.disabled = busy || !available(adjacent(-1));
      next.disabled = busy || !available(adjacent(1));
      book.setAttribute('aria-busy', String(busy));
      status.textContent = indices(current).map(i=>String(i+1).padStart(2,'0')).join('-')+' / '+pageCount;
    }
    function settle() {
      slides.forEach(slide=>{
        const active = Number(slide.dataset.pageIndex)===current;
        slide.classList.toggle('is-current',active);
        slide.setAttribute('aria-hidden',String(!active));
        slide.dataset.slideRole=active?'current':'cached';
      });
      busy=false; controls();
    }
    function layout() {
      epoch++; animations.forEach(a=>a.cancel()); animations=[];
      current=normalized(current);
      const fragment=document.createDocumentFragment();slides=[];
      const starts=mobile.matches?Array.from({length:pageCount},(_,i)=>i):[0,...Array.from({length:Math.ceil((pageCount-1)/2)},(_,i)=>1+i*2)];
      starts.forEach(start=>{
        const slide=document.createElement('div');slide.className='menu-book__slide';slide.dataset.pageIndex=start;
        const pages=mobile.matches?[start]:start===0?[-1,0]:[start,start+1];
        pages.forEach((index,side)=>{
          const figure=document.createElement('figure');figure.className='menu-book__page menu-book__page--'+(mobile.matches?'single':side?'right':'left');
          if(index<0||index>=pageCount){figure.classList.add('is-empty');figure.setAttribute('aria-hidden','true');}
          else figure.append(images[index]);
          slide.append(figure);
        });
        if(!mobile.matches&&start>0){const gutter=document.createElement('span');gutter.className='menu-book__gutter';gutter.setAttribute('aria-hidden','true');slide.append(gutter);}
        slides.push(slide);fragment.append(slide);
      });
      // Rebuild only at the one/two-page breakpoint, never during navigation.
      slider.replaceChildren(fragment);settle();
    }
    function move(direction) {
      const target=adjacent(direction);
      if(busy||!available(target))return;
      const outgoing=slides.find(s=>Number(s.dataset.pageIndex)===current);
      const incoming=slides.find(s=>Number(s.dataset.pageIndex)===target);
      book.querySelector('[data-book-hint]')?.classList.add('is-hidden');
      if(reduced.matches){current=target;settle();return;}
      busy=true;controls();const turn=++epoch;
      incoming.style.zIndex='3';outgoing.style.zIndex='2';
      const options={duration:320,easing:'cubic-bezier(0.22, 1, 0.36, 1)',fill:'both'};
      animations=[outgoing.animate([{opacity:1,transform:'translate3d(0,0,0)'},{opacity:0,transform:`translate3d(${-8*direction}px,0,0)`}],options),incoming.animate([{opacity:0,transform:`translate3d(${8*direction}px,0,0)`},{opacity:1,transform:'translate3d(0,0,0)'}],options)];
      Promise.all(animations.map(a=>a.finished)).then(()=>{
        if(turn!==epoch)return;
        current=target;settle();animations.forEach(a=>a.cancel());animations=[];
        incoming.style.zIndex='';outgoing.style.zIndex='';
      }).catch(()=>{});
    }
    for(let index=0;index<pageCount;index++){
      const image=new Image(1201,2400);image.loading='eager';image.decoding='async';image.draggable=false;
      image.dataset.fallbackListener='true'; // Menu failures must never become unrelated cafe photos.
      image.alt=`BAROCK CAFE menu page ${index+1} of ${pageCount}: ${pageLabels[index]}`;
      images.push(image);
      let attempt=0;
      const load=async()=>{
        try{
          if(image.decode)await image.decode();
          else if(!image.complete)await new Promise((resolve,reject)=>{image.addEventListener('load',resolve,{once:true});image.addEventListener('error',reject,{once:true});});
          if(!image.naturalWidth)throw new Error('Menu image unavailable');
          ready.add(index);controls();
        }catch{
          // Keep the current page and controls stable; never animate to a failed asset.
          if(attempt++<2)setTimeout(()=>{image.src=pagePath(index);load();},1000*attempt);
        }
      };
      image.src=pagePath(index);load();
    }
    layout();
    previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
    book.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}});
    viewport.addEventListener('pointerdown',e=>{if(mobile.matches&&e.isPrimary&&!busy)pointer={id:e.pointerId,x:e.clientX,y:e.clientY,vertical:false};},{passive:true});
    viewport.addEventListener('pointermove',e=>{if(pointer?.id===e.pointerId){const x=Math.abs(e.clientX-pointer.x),y=Math.abs(e.clientY-pointer.y);if(y>9&&y>=x/1.4)pointer.vertical=true;}},{passive:true});
    viewport.addEventListener('pointerup',e=>{if(pointer?.id!==e.pointerId)return;const p=pointer;pointer=null;const x=e.clientX-p.x,y=e.clientY-p.y;if(!p.vertical&&Math.abs(x)>=50&&Math.abs(x)>Math.abs(y)*1.4)move(x<0?1:-1);},{passive:true});
    viewport.addEventListener('pointercancel',()=>pointer=null,{passive:true});
    mobile.addEventListener('change',()=>{pointer=null;layout();});
    document.addEventListener('visibilitychange',()=>{if(document.hidden&&busy)layout();});
    const full=stage.querySelector('[data-book-fullscreen]');
    if(full){full.addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await stage.requestFullscreen?.();}catch{}});document.addEventListener('fullscreenchange',()=>full.textContent=document.fullscreenElement?'Exit Fullscreen':'View Fullscreen');}
  }
  document.querySelectorAll('[data-menu-book]').forEach(initSlider);
})();
