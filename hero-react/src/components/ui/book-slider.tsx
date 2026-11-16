import { forwardRef, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
type PageFlip = { turnToNextPage():void; turnToPrevPage():void; flipNext():void; flipPrev():void };

const Page = forwardRef<HTMLDivElement, { number: number }>(function Page({ number }, ref) {
 return <div ref={ref} className="barock-flip-page"><img src={`./assets/menu-current/page-${String(number).padStart(2,"0")}.webp?v=20261116-menu-v2`} alt={`BAROCK menu page ${number} of 22`} draggable={false} decoding="async" /></div>;
});

export default function BookSlider() {
 const host=useRef<HTMLDivElement>(null);
 const book=useRef<{pageFlip:()=>PageFlip}>(null);
 const [size,setSize]=useState({width:0,phone:true});
 const [page,setPage]=useState(0);
 const [reduced,setReduced]=useState(false);
 useEffect(()=>{
  const mq=matchMedia("(prefers-reduced-motion: reduce)");
  const updateMotion=()=>setReduced(mq.matches);updateMotion();mq.addEventListener("change",updateMotion);
  const observer=new ResizeObserver(([entry])=>{const phone=innerWidth<768;const width=Math.floor(Math.min(phone?entry.contentRect.width-12:(entry.contentRect.width-24)/2,phone?600:480));setSize(old=>old.width===width&&old.phone===phone?old:{width,phone});});
  if(host.current)observer.observe(host.current);
  return()=>{observer.disconnect();mq.removeEventListener("change",updateMotion)};
 },[]);
 function turn(next:boolean){const api=book.current?.pageFlip();if(!api)return;if(reduced){next?api.turnToNextPage():api.turnToPrevPage()}else{next?api.flipNext():api.flipPrev()}}
 return <div ref={host} className="barock-flip-viewer" role="region" aria-label="BAROCK menu book" tabIndex={0} onKeyDown={event=>{if(event.target!==event.currentTarget)return;if(event.key==="ArrowRight"||event.key==="ArrowLeft"){event.preventDefault();turn(event.key==="ArrowRight")}}}>
 <style>{`.barock-flip-viewer{width:100%;padding:20px 0;color:#f4efe6}.barock-flip-stage{margin:auto}.barock-flip-page{background:#0a211b;overflow:hidden}.barock-flip-page img{width:100%;height:100%;display:block;object-fit:contain;pointer-events:none}.barock-flip-controls{display:flex;justify-content:center;align-items:center;gap:18px;margin:24px 0}.barock-flip-controls button{border:1px solid #b7dfce55;border-radius:999px;min-height:44px;padding:8px 18px;background:#164438;color:#f4efe6}.barock-flip-controls button:disabled{opacity:.4}.barock-flip-controls button:focus-visible,.barock-flip-viewer:focus-visible{outline:2px solid #edcc84;outline-offset:3px}`}</style>
 {size.width>0&&<div className="barock-flip-stage" style={{width:size.width*(size.phone?1:2),maxWidth:"100%"}}>
 <HTMLFlipBook key={`${size.width}-${size.phone}`} ref={book} width={size.width} height={Math.round(size.width*963.75/481.5)} size="fixed" minWidth={100} maxWidth={600} minHeight={200} maxHeight={1201} startPage={page} drawShadow={!size.phone} flippingTime={650} usePortrait={true} startZIndex={0} autoSize={true} maxShadowOpacity={.22} showCover={true} mobileScrollSupport={true} clickEventForward={true} useMouseEvents={true} swipeDistance={30} showPageCorners={false} disableFlipByClick={false} className="barock-flip-book" style={{}} onFlip={event=>setPage(event.data)}>
 {Array.from({length:22},(_,i)=><Page key={i} number={i+1}/>)}
 </HTMLFlipBook></div>}
 <div className="barock-flip-controls"><button disabled={page===0} onClick={()=>turn(false)}>← Previous</button><span aria-live="polite">{page+1} / 22</span><button disabled={page===21} onClick={()=>turn(true)}>Next →</button></div>
 </div>;
}

