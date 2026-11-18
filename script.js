(() => {

// Random colour system: choose a different palette on each page load.
const palettes=[
{name:'Midnight Blue',bg:'#090e1c',panel:'#151f38',panel2:'#10182d',text:'#f4f2ec',muted:'#b2b8cb',line:'#293653',accent:'#a5b4ff',glow:'#f0c98e',rgb:'165,180,255'},
{name:'Emerald',bg:'#071711',panel:'#10291e',panel2:'#0b2118',text:'#f1fff6',muted:'#a9c8b5',line:'#244735',accent:'#63f5b0',glow:'#d8ffea',rgb:'99,245,176'},
{name:'Violet',bg:'#10091c',panel:'#291b3d',panel2:'#1a1128',text:'#fbf5ff',muted:'#c4b4d5',line:'#49345f',accent:'#c78bff',glow:'#f0d9ff',rgb:'199,139,255'},
{name:'Ruby',bg:'#1b0b13',panel:'#3a1927',panel2:'#25111b',text:'#fff4f1',muted:'#d9bcc5',line:'#573044',accent:'#f08aa8',glow:'#f6d8b5',rgb:'240,138,168'},
{name:'Ocean Teal',bg:'#07191d',panel:'#103039',panel2:'#0b2229',text:'#effcff',muted:'#a9c8ce',line:'#28505a',accent:'#5de1dc',glow:'#c4fff4',rgb:'93,225,220'},
{name:'Amber Noir',bg:'#17120a',panel:'#302516',panel2:'#21190f',text:'#fff8eb',muted:'#d0c0a5',line:'#55432a',accent:'#f2bd67',glow:'#ffe6b8',rgb:'242,189,103'}
];
let previous=-1;try{previous=Number(localStorage.getItem('tis-colour-index'))}catch(e){}
let chosen=Math.floor(Math.random()*(palettes.length-1));if(chosen>=previous)chosen++;
const palette=palettes[chosen];try{localStorage.setItem('tis-colour-index',String(chosen))}catch(e){}
document.body.dataset.colourTheme=palette.name;
const themeStyle=document.createElement('style');themeStyle.id='tis-random-theme';
themeStyle.textContent=`
body.home-page-v2{background:${palette.bg}!important;color:${palette.text}!important;--bg:${palette.bg};--panel:${palette.panel};--text:${palette.text};--muted:${palette.muted};--line:${palette.line};--accent:${palette.accent}}
body.home-page-v2:before{background:radial-gradient(ellipse at 12% 18%,${palette.accent}55 0,transparent 34%),radial-gradient(ellipse at 82% 28%,${palette.glow}35 0,transparent 32%),radial-gradient(ellipse at 50% 85%,${palette.accent}30 0,transparent 38%)!important;animation:randomAurora 24s ease-in-out infinite alternate!important}
body.home-page-v2:after{background-image:radial-gradient(${palette.glow}88 .8px,transparent 1px),radial-gradient(${palette.accent}77 .7px,transparent 1px)!important}
@keyframes randomAurora{0%{transform:translate(-3%,1%) rotate(-5deg) scale(1)}50%{transform:translate(3%,-2%) rotate(5deg) scale(1.1)}100%{transform:translate(-1%,3%) rotate(-3deg) scale(1.05)}}
body.home-page-v2 .v2-header{background:${palette.bg}dd!important;border-color:${palette.accent}44!important}
body.home-page-v2 .v2-section:before,body.home-page-v2 .v2-header:after,body.home-page-v2 .v2-statement:before,body.home-page-v2 .v2-statement:after,body.home-page-v2 .v2-footer:before,body.home-page-v2 .v2-final:after{background:linear-gradient(90deg,transparent,${palette.accent},${palette.glow},${palette.accent},transparent)!important;box-shadow:0 0 12px ${palette.accent},0 0 25px ${palette.glow}66!important}
body.home-page-v2 .hero-left h1,body.home-page-v2 .v2-section h2,body.home-page-v2 .world-card h3,body.home-page-v2 .feature-visual-text,body.home-page-v2 .timeline-item h3,body.home-page-v2 .final-content h2{color:${palette.text}!important}
body.home-page-v2 .hero-left h1 em,body.home-page-v2 .v2-section h2 em,body.home-page-v2 .feature-visual-text em,body.home-page-v2 .final-content h2 em,body.home-page-v2 .statement-copy blockquote{color:${palette.glow}!important;text-shadow:0 0 24px ${palette.accent}55!important}
body.home-page-v2 .hero-description,body.home-page-v2 .intro-body,body.home-page-v2 .world-card p,body.home-page-v2 .feature-copy>p,body.home-page-v2 .timeline-item p,body.home-page-v2 .final-content>p{color:${palette.muted}!important}
body.home-page-v2 .brand-icon,body.home-page-v2 .hero-overline,body.home-page-v2 .tiny-kicker,body.home-page-v2 .v2-section-label,body.home-page-v2 .v2-inline-link,body.home-page-v2 .hero-meta b,body.home-page-v2 .hero-scroll,body.home-page-v2 .card-index,body.home-page-v2 .card-symbol,body.home-page-v2 .world-arrow,body.home-page-v2 .timeline-date,body.home-page-v2 .timeline-symbol,body.home-page-v2 .final-contact{color:${palette.accent}!important}
body.home-page-v2 .world-card{background:linear-gradient(145deg,${palette.panel},${palette.panel2})!important;border-color:${palette.line}!important}
body.home-page-v2 .world-card:hover{border-color:${palette.accent}!important;box-shadow:0 12px 40px ${palette.accent}33!important}
body.home-page-v2 .world-art{background:linear-gradient(145deg,${palette.panel},${palette.panel2})!important}
body.home-page-v2 .world-art>span{color:${palette.glow}!important;filter:drop-shadow(0 0 14px ${palette.accent})!important}
body.home-page-v2 .portrait-backdrop{background:linear-gradient(145deg,${palette.panel},${palette.bg} 65%,${palette.accent}55)!important;box-shadow:0 0 40px ${palette.accent}55!important}
body.home-page-v2 .portrait-frame:before,body.home-page-v2 .portrait-outline{border-color:${palette.accent}!important;filter:drop-shadow(0 0 8px ${palette.accent})!important;box-shadow:inset 0 0 25px ${palette.accent}22,0 0 22px ${palette.accent}55!important}
body.home-page-v2 .portrait-frame:after{background:linear-gradient(180deg,transparent,${palette.glow}22,${palette.accent}77,${palette.glow}22,transparent)!important}
body.home-page-v2 .floating-note,body.home-page-v2 .portrait-stamp{background:${palette.panel}dd!important;border-color:${palette.accent}88!important;color:${palette.glow}!important}
body.home-page-v2 .v2-statement{background:linear-gradient(110deg,${palette.panel},${palette.bg})!important;border-color:${palette.line}!important}
body.home-page-v2 .feature-visual{background:radial-gradient(ellipse at 50% 50%,${palette.accent}66,${palette.panel2} 70%)!important;border-color:${palette.line}!important}
body.home-page-v2 .timeline-list:before{background:linear-gradient(180deg,transparent,${palette.accent},${palette.glow},${palette.accent},transparent)!important;box-shadow:0 0 12px ${palette.accent}!important}
body.home-page-v2 .timeline-dot{background:${palette.panel}!important;box-shadow:0 0 0 4px ${palette.accent}22,0 0 15px ${palette.accent}!important}
body.home-page-v2 .v2-button{background:linear-gradient(110deg,${palette.accent},${palette.glow})!important;color:${palette.bg}!important;border-color:${palette.accent}!important;box-shadow:0 0 25px ${palette.accent}55!important}
body.home-page-v2 #scroll-light-progress{background:linear-gradient(90deg,${palette.accent},${palette.glow})!important;box-shadow:0 0 12px ${palette.accent}!important}
body.home-page-v2 .page-loader{background:${palette.bg}!important}body.home-page-v2 .loader-mark{color:${palette.text}!important}body.home-page-v2 .loader-mark span,body.home-page-v2 .loader-track i{color:${palette.accent}!important;background:${palette.accent}!important;box-shadow:0 0 14px ${palette.accent}!important}
`;
document.head.appendChild(themeStyle);

const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
const l=document.querySelector('.page-loader');const done=()=>{document.body.classList.add('site-ready');if(l)setTimeout(()=>l.remove(),900)};if(document.readyState==='complete')done();else window.addEventListener('load',done,{once:true});
const m=document.querySelector('.v2-menu'),n=document.querySelector('.v2-nav');if(m&&n)m.addEventListener('click',()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',String(o));m.textContent=o?'×':'☰'});if(n)n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');if(m){m.setAttribute('aria-expanded','false');m.textContent='☰'}}));
const back=document.getElementById('back-top');if(back)back.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})});
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const items=document.querySelectorAll('.reveal-v2');if(!('IntersectionObserver'in window)||reduce)items.forEach(x=>x.classList.add('in-view'));else{const ob=new IntersectionObserver((es,obs)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');obs.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -35px 0px'});items.forEach(x=>ob.observe(x))}
const progress=document.createElement('div');progress.id='scroll-light-progress';document.body.appendChild(progress);
let scrollTick=false;const updateProgress=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';scrollTick=false};window.addEventListener('scroll',()=>{if(!scrollTick){requestAnimationFrame(updateProgress);scrollTick=true}},{passive:true});updateProgress();
if(!reduce){const canvas=document.createElement('canvas');canvas.id='space-canvas';document.body.prepend(canvas);const ctx=canvas.getContext('2d');let w=0,h=0,pts=[],raf=0;const pointer={x:-1000,y:-1000};const resize=()=>{const d=Math.min(devicePixelRatio||1,1.6);w=innerWidth;h=innerHeight;canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);const count=Math.min(95,Math.max(32,Math.floor(w/15)));pts=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.4+.35,p:Math.random()*6.28}))};const draw=()=>{ctx.clearRect(0,0,w,h);for(let i=0;i<pts.length;i++){const a=pts[i];a.x+=a.vx;a.y+=a.vy;a.p+=.012;if(a.x<0||a.x>w)a.vx*=-1;if(a.y<0||a.y>h)a.vy*=-1;const glow=.3+(.4+.3*Math.sin(a.p));ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,Math.PI*2);ctx.fillStyle='rgba('+palette.rgb+','+glow+')';ctx.shadowBlur=10;ctx.shadowColor=palette.accent;ctx.fill();ctx.shadowBlur=0;for(let j=i+1;j<pts.length;j++){const b=pts[j],dx=a.x-b.x,dy=a.y-b.y,dist=Math.hypot(dx,dy);if(dist<115){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle='rgba('+palette.rgb+','+((1-dist/115)*.13)+')';ctx.lineWidth=.65;ctx.stroke()}}const dx=a.x-pointer.x,dy=a.y-pointer.y,dist=Math.hypot(dx,dy);if(dist<145){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(pointer.x,pointer.y);ctx.strokeStyle='rgba('+palette.rgb+','+((1-dist/145)*.22)+')';ctx.stroke()}}raf=requestAnimationFrame(draw)};resize();draw();window.addEventListener('resize',resize,{passive:true});window.addEventListener('pointermove',e=>{pointer.x=e.clientX;pointer.y=e.clientY},{passive:true});document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(raf);else draw()})}
const portrait=document.querySelector('.hero-right');if(portrait&&!reduce&&matchMedia('(pointer:fine)').matches){portrait.addEventListener('pointermove',e=>{const r=portrait.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;portrait.style.transform='perspective(900px) rotateY('+(x*7)+'deg) rotateX('+(-y*6)+'deg)'});portrait.addEventListener('pointerleave',()=>portrait.style.transform='')}
})();