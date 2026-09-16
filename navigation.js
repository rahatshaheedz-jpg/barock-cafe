(() => {
  const toggle=document.querySelector('[data-menu-toggle]');
  const panel=document.querySelector('[data-mobile-menu]');
  if(!toggle||!panel)return;
  const backdrop=document.createElement('button');
  backdrop.type='button';backdrop.className='mobile-menu-backdrop';
  backdrop.setAttribute('aria-label','Close navigation');backdrop.tabIndex=-1;
  document.body.append(backdrop);
  function setOpen(open,focus=false){
    // This is a non-modal navigation panel: the document never needs a scroll lock.
    document.documentElement.classList.remove('mobile-menu-open');
    document.body.classList.remove('mobile-menu-open');
    panel.classList.remove('is-opening','is-closing');panel.classList.toggle('is-open',open);
    panel.inert=!open;panel.setAttribute('aria-hidden',String(!open));
    backdrop.classList.toggle('is-visible',open);
    toggle.classList.toggle('is-active',open);toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    if(focus)toggle.focus({preventScroll:true});
  }
  toggle.addEventListener('click',()=>setOpen(toggle.getAttribute('aria-expanded')!=='true'));
  backdrop.addEventListener('click',()=>setOpen(false,true));
  panel.addEventListener('click',event=>{if(event.target.closest('a'))setOpen(false);});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')setOpen(false,true);});
  document.addEventListener('focusin',event=>{if(!panel.contains(event.target)&&!toggle.contains(event.target))setOpen(false);});
  matchMedia('(min-width: 961px)').addEventListener('change',()=>setOpen(false));
  window.addEventListener('pagehide',()=>setOpen(false));
  window.addEventListener('pageshow',()=>setOpen(false));
  setOpen(false);
})();
