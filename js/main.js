gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({defaults: {duration: 1}});
timeline
    .from('.header', {y: '-100%', opacity: -1})
    .from('.content', {y: '-100%', opacity: -1}, 0)
    .to('.title', {fontSize: 50}, '<.3')
;
    

gsap.from('.footer',{
    scrollTrigger: {
        trigger: '.footer',
        toggleActions: 'restart reset restart reset',
        start: 'center 95%',
        end: 'center 5%',
        markers: true
    },
    duration: 1.5,
    y: '100%',
    opacity: -1
});














const filler = document.querySelector('.filler');
filler.addEventListener('mouseenter', ()=>{
    gsap.to('.header', {duration: 0.5, opacity: 0});
});
filler.addEventListener('mouseleave', ()=>{
    gsap.to('.header', {duration: 0.5, opacity: 1});
});

document.querySelector('#reverseBtn').addEventListener('click', () => {  
    timeline.timeScale(2);  
    timeline.reverse();
});