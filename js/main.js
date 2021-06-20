gsap.from('.header', {duration: 1, y: '-100%', opacity: -1});
gsap.from('.content', {duration: 1, y: '-100%', opacity: -1});
gsap.to('.title', {duration: 1, delay: 1, fontSize: 50});

document.querySelectorAll('.filler')[0].addEventListener('mouseenter', ()=>{
    gsap.to('.header', {duration: 0.5, opacity: 0});
});
document.querySelectorAll('.filler')[0].addEventListener('mouseleave', ()=>{
    gsap.to('.header', {duration: 0.5, opacity: 1});
});