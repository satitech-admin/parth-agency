(()=>{'use strict';if(document.body.dataset.page!=='home')return;
const box=document.querySelector('.reviewbox');if(!box)return;
const reviews=[
{author:'Sumit Patil',quote:'Reasonable price with good quality and variety.'},
{author:'Sharad Murthy',quote:'Really great collection of Godrej locks and kitchen wares and services too.'},
{author:'Shreyash Pande',quote:'All items related to your home decor are available at a good price.'}
];
const track=document.createElement('div');track.className='home-review-track';track.setAttribute('aria-live','polite');
track.innerHTML=reviews.map((r,i)=>'<article class="home-review-slide" aria-label="Review '+(i+1)+' of '+reviews.length+'"><div class="home-review-mark" aria-hidden="true">“</div><p>'+r.quote+'</p><div class="home-review-credit"><strong>'+r.author+'</strong><span>Customer review</span></div></article>').join('');
const windowEl=document.createElement('div');windowEl.className='home-review-window';windowEl.appendChild(track);
const oldQuote=box.querySelector('blockquote');if(!oldQuote)return;const stage=document.createElement('div');stage.className='home-review-stage';
const side=document.createElement('aside');side.className='home-review-side';side.setAttribute('aria-label','Customer review position');
side.innerHTML='<span class="home-review-side-label">CUSTOMER STORIES</span><div class="home-review-bigcount"><span id="homeReviewNumber">01</span><small> / 03</small></div><span class="home-review-side-line"></span><p>Trusted words.<br>Thoughtful spaces.</p><i class="fa-solid fa-quote-right" aria-hidden="true"></i>';
stage.appendChild(windowEl);stage.appendChild(side);oldQuote.insertAdjacentElement('beforebegin',stage);
[oldQuote,box.querySelector('#reviewAuthor'),box.querySelector('#reviewPlatform')].forEach(el=>{if(el)el.classList.add('home-review-original')});
const dots=document.createElement('div');dots.className='home-review-dots';dots.setAttribute('aria-label','Choose customer review');dots.innerHTML=reviews.map((_,i)=>'<button type="button" aria-label="Show review '+(i+1)+'" aria-current="'+(i===0)+'"></button>').join('');const progress=document.createElement('div');progress.className='home-review-progress';progress.innerHTML='<span></span>';box.appendChild(progress);box.appendChild(dots);
let index=0,timer;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function render(){const number=document.getElementById('homeReviewNumber');if(number)number.textContent=String(index+1).padStart(2,'0');track.style.transition=reduce?'none':'';track.style.transform='translateX(-'+(index*100)+'%)';[...dots.children].forEach((b,i)=>b.setAttribute('aria-current',String(i===index)));}
function go(i){index=(i+reviews.length)%reviews.length;render();restart();}
function restart(){clearInterval(timer);progress.classList.remove('running');void progress.offsetWidth;if(!reduce&&!document.hidden)progress.classList.add('running');if(!reduce&&!document.hidden)timer=setInterval(()=>{index=(index+1)%reviews.length;render()},5500)}
document.getElementById('prevReview')?.addEventListener('click',()=>go(index-1));
document.getElementById('nextReview')?.addEventListener('click',()=>go(index+1));
[...dots.children].forEach((b,i)=>b.addEventListener('click',()=>go(i)));
let startX=null;windowEl.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX},{passive:true});windowEl.addEventListener('touchend',e=>{if(startX===null)return;let d=e.changedTouches[0].clientX-startX;if(Math.abs(d)>45)go(index+(d<0?1:-1));startX=null},{passive:true});
box.addEventListener('mouseenter',()=>{clearInterval(timer);progress.classList.add('paused')});box.addEventListener('mouseleave',()=>{progress.classList.remove('paused');restart()});
box.addEventListener('focusin',()=>{clearInterval(timer);progress.classList.add('paused')});box.addEventListener('focusout',()=>{progress.classList.remove('paused');restart()});
document.addEventListener('visibilitychange',restart);render();restart();
})();