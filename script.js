const observer = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menuBtn=document.getElementById('menuBtn'); const navLinks=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
window.addEventListener('scroll',()=>document.querySelector('.nav-wrap').classList.toggle('scrolled',scrollY>20));
const glow=document.getElementById('cursorGlow'); document.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
document.getElementById('year').textContent=new Date().getFullYear();
