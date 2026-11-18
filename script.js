(() => {

// Random colour system: choose a different palette on each page load.
const palettes=[
{name:'Pure Black',bg:'#000000',panel:'#111111',panel2:'#080808',text:'#ffffff',muted:'#c2c2c2',line:'#333333',accent:'#ffffff',glow:'#bdbdbd',rgb:'255,255,255'},
{name:'Pure White',bg:'#ffffff',panel:'#f2f2f2',panel2:'#e8e8e8',text:'#111111',muted:'#555555',line:'#d0d0d0',accent:'#171717',glow:'#777777',rgb:'23,23,23'},
{name:'Graphite',bg:'#101114',panel:'#202228',panel2:'#17191e',text:'#f7f7f8',muted:'#b8bbc3',line:'#383b44',accent:'#aeb4c2',glow:'#ffffff',rgb:'174,180,194'},
{name:'Midnight Blue',bg:'#090e1c',panel:'#151f38',panel2:'#10182d',text:'#f4f2ec',muted:'#b2b8cb',line:'#293653',accent:'#a5b4ff',glow:'#f0c98e',rgb:'165,180,255'},
{name:'Royal Blue',bg:'#07142b',panel:'#102b50',panel2:'#0b1e39',text:'#f2f7ff',muted:'#b4c8e5',line:'#25466d',accent:'#5ca8ff',glow:'#d6eaff',rgb:'92,168,255'},
{name:'Emerald',bg:'#071711',panel:'#10291e',panel2:'#0b2118',text:'#f1fff6',muted:'#a9c8b5',line:'#244735',accent:'#63f5b0',glow:'#d8ffea',rgb:'99,245,176'},
{name:'Violet',bg:'#10091c',panel:'#291b3d',panel2:'#1a1128',text:'#fbf5ff',muted:'#c4b4d5',line:'#49345f',accent:'#c78bff',glow:'#f0d9ff',rgb:'199,139,255'},
{name:'Ruby Red',bg:'#19070b',panel:'#35121b',panel2:'#230b12',text:'#fff4f4',muted:'#d9b8bf',line:'#572631',accent:'#ff536b',glow:'#ffd1d8',rgb:'255,83,107'},
{name:'Rose Pink',bg:'#1b0c16',panel:'#351b2b',panel2:'#25121e',text:'#fff5fa',muted:'#d8bdcc',line:'#58344a',accent:'#ff8fc7',glow:'#ffe0f0',rgb:'255,143,199'},
{name:'Ocean Teal',bg:'#07191d',panel:'#103039',panel2:'#0b2229',text:'#effcff',muted:'#a9c8ce',line:'#28505a',accent:'#5de1dc',glow:'#c4fff4',rgb:'93,225,220'},
{name:'Amber Gold',bg:'#17120a',panel:'#302516',panel2:'#21190f',text:'#fff8eb',muted:'#d0c0a5',line:'#55432a',accent:'#f2bd67',glow:'#ffe6b8',rgb:'242,189,103'},
{name:'Silver Ice',bg:'#111820',panel:'#202d38',panel2:'#17232c',text:'#f3f8fc',muted:'#b9c8d3',line:'#3a4b59',accent:'#b9e4ff',glow:'#ffffff',rgb:'185,228,255'},
{name:'Forest Green',bg:'#0b160d',panel:'#1a2d1d',panel2:'#112016',text:'#f2fff1',muted:'#b6cbb3',line:'#344d37',accent:'#a2d977',glow:'#e5ffc9',rgb:'162,217,119'},
{name:'Copper',bg:'#1a100c',panel:'#35231a',panel2:'#24170f',text:'#fff6ef',muted:'#d1b8a7',line:'#5a3b2b',accent:'#e69a68',glow:'#ffddc2',rgb:'230,154,104'}
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
if(!reduce){
 const canvas=document.createElement('canvas');canvas.id='space-canvas';document.body.prepend(canvas);
 const ctx=canvas.getContext('2d');let w=0,h=0,particles=[],launches=[],smoke=[],raf=0,last=0,clock=0,nextLaunch=900;
 const resize=()=>{
  const d=Math.min(devicePixelRatio||1,1.6);w=innerWidth;h=innerHeight;
  canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);
  particles=Array.from({length:Math.min(95,Math.max(42,Math.floor(w/16)))},()=>({
   x:Math.random()*w,y:Math.random()*h,
   r:Math.random()*1.45+.35,
   vx:(Math.random()-.5)*.34,
   vy:-(Math.random()*.28+.06),
   phase:Math.random()*Math.PI*2,
   twinkle:Math.random()*.7+.3
  }));
 };
 const draw=now=>{
  if(last)clock+=Math.min(40,now-last);last=now;
  ctx.clearRect(0,0,w,h);
  // Quiet, drifting specks like dust in a sunlit room — no waves or connecting lines.
  for(const p of particles){
   p.x+=p.vx+Math.sin(clock*.00022+p.phase)*.08;
   p.y+=p.vy;
   if(p.y<-8){p.y=h+8;p.x=Math.random()*w}
   if(p.x<-8)p.x=w+8;if(p.x>w+8)p.x=-8;
   const pulse=.22+.42*(.5+.5*Math.sin(clock*.0011+p.phase))*p.twinkle;
   const radius=p.r*(2.2+Math.sin(clock*.0008+p.phase)*.45);
   const glow=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,radius*5);
   glow.addColorStop(0,'rgba('+palette.rgb+','+pulse+')');
   glow.addColorStop(1,'rgba('+palette.rgb+',0)');
   ctx.fillStyle=glow;ctx.beginPath();ctx.arc(p.x,p.y,radius*5,0,Math.PI*2);ctx.fill();
   ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
   ctx.fillStyle='rgba('+palette.rgb+','+(pulse+.12)+')';ctx.fill();
  }
  // A few softly blurred, warm lights add depth without competing with the page.
  for(let i=0;i<3;i++){
   const x=w*(.18+i*.32)+Math.sin(clock*.00012+i*2.1)*w*.035;
   const y=h*(.24+i*.23)+Math.cos(clock*.00015+i*1.7)*h*.045;
   const radius=95+i*28;
   const haze=ctx.createRadialGradient(x,y,0,x,y,radius);
   haze.addColorStop(0,'rgba('+palette.rgb+',.045)');
   haze.addColorStop(1,'rgba('+palette.rgb+',0)');
   ctx.fillStyle=haze;ctx.fillRect(x-radius,y-radius,radius*2,radius*2);
  }
  // Tiny rockets, planes and spacecraft set off from just below the portrait.
  if(clock>nextLaunch){
   const photo=document.querySelector('.hero-portrait');
   const frame=photo?.getBoundingClientRect();
   if(frame&&frame.bottom>-30&&frame.top<h+30){
    const kinds=['🚀','✈','🛸','🛰'];const angle=[-2.75,-2.25,-1.85,-1.3,-.85,-.38][Math.floor(Math.random()*6)];
    const speed=1.15+Math.random()*.65;
    launches.push({x:frame.left+frame.width*.5+(Math.random()-.5)*frame.width*.22,y:frame.bottom+18,
     vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,age:0,life:300+Math.random()*130,
     icon:kinds[Math.floor(Math.random()*kinds.length)],size:30+Math.random()*9,angle:angle+Math.PI/2,smokeTick:0});
   }
   nextLaunch=clock+700+Math.random()*900;
  }
  for(let i=launches.length-1;i>=0;i--){
   const s=launches[i];s.age+=1;s.x+=s.vx;s.y+=s.vy;
   s.smokeTick++;
   if(s.smokeTick%2===0)smoke.push({x:s.x-s.vx*1.15,y:s.y-s.vy*1.15,r:2.2+Math.random()*2.8,age:0,life:38+Math.random()*26,vx:(Math.random()-.5)*.32,vy:.18+Math.random()*.28});
   s.vx+=Math.sin(s.age*.012)*.0015;s.vy-=.001;
   const fade=Math.min(1,s.age/24,(s.life-s.age)/55);
   ctx.save();ctx.globalAlpha=Math.max(0,fade)*.88;ctx.translate(s.x,s.y);
   ctx.rotate(s.angle);ctx.font=s.size+'px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
   ctx.shadowColor='rgba('+palette.rgb+',.65)';ctx.shadowBlur=13;ctx.fillText(s.icon,0,0);ctx.restore();
   if(s.age>s.life||s.x<-80||s.x>w+80||s.y<-100)launches.splice(i,1);
  }
  for(let i=smoke.length-1;i>=0;i--){
   const p=smoke[i];p.age++;p.x+=p.vx;p.y+=p.vy;p.r+=.055;
   const a=(1-p.age/p.life)*.22;
   if(a>0){ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(220,228,238,'+a+')';ctx.shadowColor='rgba(220,228,238,.18)';ctx.shadowBlur=7;ctx.fill();ctx.shadowBlur=0;}
   if(p.age>=p.life)smoke.splice(i,1);
  }
  raf=requestAnimationFrame(draw);
 };
 resize();draw(0);window.addEventListener('resize',resize,{passive:true});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);last=0}else raf=requestAnimationFrame(draw)});
}
const portrait=document.querySelector('.hero-right');if(portrait&&!reduce&&matchMedia('(pointer:fine)').matches){portrait.addEventListener('pointermove',e=>{const r=portrait.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;portrait.style.transform='perspective(900px) rotateY('+(x*7)+'deg) rotateX('+(-y*6)+'deg)'});portrait.addEventListener('pointerleave',()=>portrait.style.transform='')}
})();