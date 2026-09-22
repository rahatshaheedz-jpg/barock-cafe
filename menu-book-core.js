(() => {
  const pageCount = 19;
  const pagePath = (index) => `./assets/menu-current/page-${String(index + 1).padStart(2, "0")}.webp?v=20260922-official`;
  const pageLabels = Array.from({length:19}, (_,i)=>i===0?'front cover':i===1?'the story of BAROCK':i===18?'back cover':'official food and beverage menu');
  function initSlider(book) {
    const stage = book.closest('[data-book-stage]');
    const viewport = book.querySelector('[data-book-surface]');
    const slider = book.querySelector('[data-book-slider]');
    const previous = stage.querySelector('[data-book-previous]');
    const next = stage.querySelector('[data-book-next]');
    const status = stage.querySelector('[data-book-status]');
    const mobile = matchMedia('(max-width: 768px)');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const images = [], ready = new Set(), loads = new Map();
    let slides = [], current = 0, busy = false, animations = [], epoch = 0, pointer = null;
    const normalized = n => mobile.matches || n === 0 ? n : n % 2 ? n : n - 1;
    const adjacent = dir => mobile.matches ? current + dir : dir > 0 ? (current === 0 ? 1 : current + 2) : current <= 1 ? 0 : current - 2;
    const indices = n => n < 0 || n >= pageCount ? [] : mobile.matches || n === 0 ? [n] : [n,n+1].filter(i=>i<pageCount);
    const available = n => indices(n).length > 0 && indices(n).every(i=>ready.has(i));
    function controls() {
      previous.disabled = busy || !available(adjacent(-1));
      next.disabled = busy || !available(adjacent(1));
      book.setAttribute('aria-busy', String(busy));
      book.classList.toggle('is-closed',current===0);
      status.textContent = indices(current).map(i=>String(i+1).padStart(2,'0')).join('-')+' / '+pageCount;
    }
    function settle() {
      slides.forEach(slide=>{
        const active = Number(slide.dataset.pageIndex)===current;
        slide.classList.toggle('is-current',active);
        slide.setAttribute('aria-hidden',String(!active));
        slide.dataset.slideRole=active?'current':'cached';
      });
      busy=false; controls(); warm();
    }
    function layout() {
      epoch++; animations.forEach(a=>a.cancel()); animations=[];slider.querySelectorAll('.menu-turn-sheet').forEach(s=>s.remove());
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
      slider.replaceChildren(fragment);book.classList.toggle('is-closed',current===0);settle();
    }
    function warm() {
      [...new Set([...indices(current),...indices(adjacent(-1)),...indices(adjacent(1))])].forEach(loadPage);
    }
    function loadPage(index) {
      if(loads.has(index))return loads.get(index);
      const image=images[index];
      const promise=(async()=>{
        image.loading='eager';image.src=pagePath(index);
        try {
          await image.decode();
          if(!image.naturalWidth)throw new Error('Missing menu image');
          ready.add(index);controls();return true;
        } catch { loads.delete(index);return false; }
      })();loads.set(index,promise);return promise;
    }
    function move(direction) {
      const target=adjacent(direction);
      if(busy||!available(target))return;
      const outgoing=slides.find(s=>Number(s.dataset.pageIndex)===current);
      const incoming=slides.find(s=>Number(s.dataset.pageIndex)===target);
      book.querySelector('[data-book-hint]')?.classList.add('is-hidden');
      if(reduced.matches){current=target;settle();return;}
      busy=true;controls();const turn=++epoch;
      const options={duration:mobile.matches?340:620,easing:'cubic-bezier(0.22, 1, 0.36, 1)',fill:'both'};
      incoming.style.zIndex='2';outgoing.style.zIndex='3';
      let sheet=null;
      if(!mobile.matches&&current>0&&target>0){
        incoming.style.opacity='1';
        const side=direction>0?'right':'left';
        const front=outgoing.querySelector('.menu-book__page--'+side);
        const back=incoming.querySelector('.menu-book__page--'+(direction>0?'left':'right'));
        sheet=document.createElement('div');sheet.className='menu-turn-sheet menu-turn-sheet--'+side;
        const face=front.cloneNode(true),reverse=back.cloneNode(true);
        face.className='menu-turn-face';reverse.className='menu-turn-face menu-turn-face--back';
        sheet.append(face,reverse);slider.append(sheet);front.style.visibility='hidden';
        animations=[sheet.animate([{transform:'rotateY(0deg)'},{transform:`rotateY(${-180*direction}deg)`}],options)];
      }else{
        const opening=!mobile.matches&&current===0;
        outgoing.style.transformOrigin='25% center';
        animations=[outgoing.animate([{opacity:1,transform:'rotateY(0deg)'},{opacity:0,transform:opening?'rotateY(-90deg)':`translate3d(${-10*direction}px,0,0)`}],options),incoming.animate([{opacity:0},{opacity:1}],options)];
      }
      Promise.all(animations.map(a=>a.finished)).then(()=>{
        if(turn!==epoch)return;
        current=target;settle();animations.forEach(a=>a.cancel());animations=[];
        sheet?.remove();outgoing.querySelectorAll('figure').forEach(f=>f.style.visibility='');
        incoming.style.opacity='';incoming.style.zIndex='';outgoing.style.zIndex='';
      }).catch(()=>{});
    }
    for(let index=0;index<pageCount;index++){
      const image=new Image(1200,2400);image.loading='lazy';image.decoding='async';image.draggable=false;
      image.dataset.fallbackListener='true';image.alt=`BAROCK CAFÉ menu page ${index+1} of ${pageCount}: ${pageLabels[index]}`;
      images.push(image);
    }
    layout();
    previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
    stage.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.fullscreenElement){document.exitFullscreen?.();return;}if(current===0&&(e.key==='Enter'||e.key===' ')){e.preventDefault();move(1);return;}if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}});
    viewport.addEventListener('pointerdown',e=>{if(e.isPrimary&&!busy)pointer={id:e.pointerId,x:e.clientX,y:e.clientY,vertical:false};},{passive:true});
    viewport.addEventListener('pointermove',e=>{if(pointer?.id===e.pointerId){const x=Math.abs(e.clientX-pointer.x),y=Math.abs(e.clientY-pointer.y);if(y>9&&y>=x/1.4)pointer.vertical=true;}},{passive:true});
    viewport.addEventListener('pointerup',e=>{if(pointer?.id!==e.pointerId)return;const p=pointer;pointer=null;const x=e.clientX-p.x,y=e.clientY-p.y;if(!p.vertical&&Math.abs(x)>=50&&Math.abs(x)>Math.abs(y)*1.4&&mobile.matches)move(x<0?1:-1);else if(!p.vertical&&Math.abs(x)<9&&Math.abs(y)<9){if(current===0)move(1);else if(mobile.matches){const box=viewport.getBoundingClientRect(),ratio=(e.clientX-box.left)/box.width;if(ratio<.3)move(-1);else if(ratio>.7)move(1);}}},{passive:true});
    viewport.addEventListener('pointercancel',()=>pointer=null,{passive:true});
    mobile.addEventListener('change',()=>{pointer=null;layout();});
    document.addEventListener('visibilitychange',()=>{if(document.hidden&&busy)layout();});
    const full=stage.querySelector('[data-book-fullscreen]');
    if(full){full.addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await stage.requestFullscreen?.();}catch{}});document.addEventListener('fullscreenchange',()=>full.textContent=document.fullscreenElement?'Exit Fullscreen':'View Fullscreen');}
  }
  document.querySelectorAll('[data-menu-book]').forEach(initSlider);
})();
