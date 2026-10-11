(() => {
  'use strict';
  // Labels are transcribed from headings in the official PDF, in PDF order.
  const labels = ['Cover', 'Our story', 'Coffee & hot chocolate', 'Iced coffee & tea', 'Iced tea, matcha & frappe', 'Smoothies, milkshakes & mocktails', 'Signature mocktails', 'Beverages', 'Juices, kids zone & soup', 'Salads & appetizers', 'Appetizers & sandwiches', 'Burgers, fajitas & alambre', 'Pizza', 'Pasta', 'Seafood & chicken', 'Straight from the butcher', 'Desserts', 'Breakfast', 'Back cover'];
  const count = labels.length;
  const version = '20261012-fast-v1';
  document.querySelectorAll('[data-menu-viewer]').forEach(viewer => {
    const surface = viewer.querySelector('[data-menu-surface]');
    const frame = viewer.querySelector('[data-menu-frame]');
    const status = viewer.querySelector('[data-menu-status]');
    const notice = viewer.querySelector('[data-menu-notice]');
    const retry = viewer.querySelector('[data-menu-retry]');
    const tabs = viewer.querySelector('[data-menu-categories]');
    const previous = [...viewer.querySelectorAll('[data-menu-previous]')];
    const next = [...viewer.querySelectorAll('[data-menu-next]')];
    const records = new Map();
    const connection = navigator.connection;
    const constrained = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '') || (navigator.deviceMemory && navigator.deviceMemory <= 4);
    const capacity = constrained ? 3 : 5;
    let selected = 0, displayed = -1, running = 0, started = false, sequence = 0, idleScheduled = false;
    let pointer = null, multiTouch = false, tabFrame = 0;
    const pointers = new Set();
    const path = (index, small) => `./assets/menu-current/page-${String(index+1).padStart(2,'0')}${small?'-720':''}.webp?v=${version}`;
    // Standard phone rendering uses a sharp 720px source. Pinch zoom upgrades only the visible page.
    const smallSource = () => surface.clientWidth <= 480 && (window.visualViewport?.scale || 1) <= 1.15;
    const keyFor = index => `${index}:${smallSource()?'small':'large'}`;
    function getRecord(index) {
      const key = keyFor(index);
      if (!records.has(key)) records.set(key, {key, index, small:smallSource(), state:'queued', image:null, touched:++sequence});
      return records.get(key);
    }
    function controls() {
      previous.forEach(b=>b.disabled=selected===0);
      next.forEach(b=>b.disabled=selected===count-1);
      viewer.dataset.requestedPage=String(selected+1);
      tabs.querySelectorAll('button').forEach((b,i)=>{
        b.setAttribute('aria-current',i===selected?'page':'false');
      });
      cancelAnimationFrame(tabFrame);
      tabFrame=requestAnimationFrame(()=>{
        const active=tabs.children[selected],edge=tabs.getBoundingClientRect(),rect=active.getBoundingClientRect();
        if(rect.left<edge.left)tabs.scrollLeft+=rect.left-edge.left-8;
        else if(rect.right>edge.right)tabs.scrollLeft+=rect.right-edge.right+8;
      });
    }
    function trim() {
      const ready=[...records.values()].filter(r=>r.state==='ready').sort((a,b)=>b.touched-a.touched);
      const keep=new Set(ready.filter(r=>r.image===frame.firstElementChild||r.key===keyFor(selected)).map(r=>r.key));
      for (const r of ready) { if (keep.size<capacity) keep.add(r.key); }
      for (const r of ready) if(!keep.has(r.key)) records.delete(r.key);
      // Discard superseded queued work; in-flight requests can finish and enter the browser cache.
      for(const [key,r] of records) if(r.state==='queued'&&Math.abs(r.index-selected)>1) records.delete(key);
      viewer.dataset.decodedPages=String([...records.values()].filter(r=>r.state==='ready').length);
    }
    function show(record) {
      if(record.key!==keyFor(selected)||record.state!=='ready')return;
      const begin=performance.now();
      if(frame.firstElementChild!==record.image)frame.replaceChildren(record.image);
      displayed=selected;record.touched=++sequence;
      viewer.dataset.currentPage=String(displayed+1);
      status.textContent=`${String(displayed+1).padStart(2,'0')} / ${count}`;
      notice.textContent='';retry.hidden=true;
      surface.setAttribute('aria-label',`Menu page ${displayed+1} of ${count}: ${labels[displayed]}`);
      performance.measure('barock-menu-commit',{start:begin,end:performance.now()});
      trim();
    }
    function scheduleNearby() {
      for(const i of [selected-1,selected+1])if(i>=0&&i<count)getRecord(i);
      trim();pump();scheduleBackground();
    }
    function pump() {
      while(running<2) {
        const record=[...records.values()].filter(r=>r.state==='queued').sort((a,b)=>(a.key===keyFor(selected)?-100:Math.abs(a.index-selected))-(b.key===keyFor(selected)?-100:Math.abs(b.index-selected)))[0];
        if(!record)break;
        running++;record.state='loading';
        const img=new Image();record.image=img;
        img.width=record.small?720:1199;img.height=record.small?1441:2400;
        img.decoding='async';img.draggable=false;img.dataset.fallbackListener='true';
        img.alt=`BAROCK CAF\u00c9 official menu, page ${record.index+1} of ${count}: ${labels[record.index]}`;
        img.fetchPriority=record.index===selected?'high':'low';img.src=path(record.index,record.small);
        img.decode().then(()=>{
          if(!img.naturalWidth)throw new Error('Image unavailable');
          record.state='ready';record.touched=++sequence;show(record);
        }).catch(()=>{
          record.state='error';
          if(record.key===keyFor(selected)) {notice.textContent=`Page ${selected+1} could not load. ${displayed<0?"Please retry or download the PDF below.":"Your current page is still available."}`;retry.hidden=false;}
        }).finally(()=>{running--;trim();pump();});
      }
    }
    // This index changes synchronously for EVERY input, even while an image request is pending.
    function select(index) {
      selected=Math.max(0,Math.min(count-1,index));
      controls();const record=getRecord(selected);record.touched=++sequence;
      if(record.state==='ready')show(record);
      else {
        notice.textContent=displayed<0?'':`Page ${selected+1} selected`;
        retry.hidden=record.state!=='error';
      }
      scheduleNearby();
    }
    function start() {if(started)return;started=true;select(0);}
    let backgroundIndex=0;
    function scheduleBackground() {
      if(constrained||idleScheduled||backgroundIndex>=count||document.hidden||!started)return;
      idleScheduled=true;
      const idle=window.requestIdleCallback||((fn)=>setTimeout(fn,800));
      idle(async()=>{
        idleScheduled=false;
        if(document.hidden||running||selected!==displayed){setTimeout(scheduleBackground,800);return;}
        const index=backgroundIndex++;
        // Serial low-resolution network warmup, not nineteen decoded full-resolution images.
        try{if(!records.has(`${index}:small`)){const response=await fetch(path(index,true),{cache:'force-cache',priority:'low'});if(response.ok)await response.arrayBuffer();}}catch{}
        setTimeout(scheduleBackground,400);
      });
    }
    labels.forEach((label,i)=>{
      const button=document.createElement('button');button.type='button';button.textContent=label;
      button.setAttribute('aria-label',`${label}, page ${i+1}`);button.addEventListener('click',()=>{start();select(i);});tabs.append(button);
    });
    previous.forEach(b=>b.addEventListener('click',()=>{start();select(selected-1);}));
    next.forEach(b=>b.addEventListener('click',()=>{start();select(selected+1);}));
    retry.addEventListener('click',()=>{records.delete(keyFor(selected));select(selected);});
    viewer.addEventListener('keydown',e=>{
      if(e.target.closest('input,select,textarea'))return;
      if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();start();select(selected+(e.key==='ArrowRight'?1:-1));}
      if(e.key==='Escape'&&document.fullscreenElement===viewer)document.exitFullscreen?.();
    });
    surface.addEventListener('pointerdown',e=>{
      pointers.add(e.pointerId);
      if(pointers.size>1||!e.isPrimary){multiTouch=true;pointer=null;return;}
      if((window.visualViewport?.scale||1)>1.05)return;
      pointer={id:e.pointerId,x:e.clientX,y:e.clientY,vertical:false};
    },{passive:true});
    surface.addEventListener('pointermove',e=>{
      if(pointer?.id!==e.pointerId)return;
      const x=Math.abs(e.clientX-pointer.x),y=Math.abs(e.clientY-pointer.y);
      if(y>9&&y>x*.75)pointer.vertical=true;
    },{passive:true});
    window.addEventListener('pointerup',e=>{
      const p=pointer;
      if(p?.id===e.pointerId&&!multiTouch&&!p.vertical&&(window.visualViewport?.scale||1)<=1.05){
        const x=e.clientX-p.x,y=e.clientY-p.y;
        if(Math.abs(x)>45&&Math.abs(x)>Math.abs(y)*1.5){start();select(selected+(x<0?1:-1));}
      }
      pointers.delete(e.pointerId);pointer=null;if(!pointers.size)multiTouch=false;
    },{passive:true});
    window.addEventListener('pointercancel',e=>{pointers.delete(e.pointerId);pointer=null;if(!pointers.size)multiTouch=false;},{passive:true});
    surface.addEventListener('touchstart',e=>{if(e.touches.length>1){multiTouch=true;pointer=null;}},{passive:true});
    surface.addEventListener('touchend',e=>{if(!e.touches.length)multiTouch=false;},{passive:true});
    const full=viewer.querySelector('[data-menu-fullscreen]');
    if(!viewer.requestFullscreen)full.hidden=true;
    else full.addEventListener('click',async()=>{try{if(document.fullscreenElement===viewer)await document.exitFullscreen();else await viewer.requestFullscreen();}catch{notice.textContent='Fullscreen is unavailable in this browser. Pinch to zoom the page.';}});
    document.addEventListener('fullscreenchange',()=>{full.textContent=document.fullscreenElement===viewer?'Exit fullscreen':'Fullscreen';});
    new ResizeObserver(()=>{if(started)select(selected);}).observe(surface);
    window.visualViewport?.addEventListener('resize',()=>{if(started&&smallSource()===false&&frame.firstElementChild?.naturalWidth<1000)select(selected);},{passive:true});
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)scheduleBackground();});
    controls();
    if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){start();observer.disconnect();}},{rootMargin:'600px'});observer.observe(viewer);}else start();
  });
})();
