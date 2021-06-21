gsap.registerPlugin(ScrollTrigger, TextPlugin);

const timeline = gsap.timeline({defaults: {duration: 1}});
timeline
    .from('.header', {y: '-100%', opacity: -1})
    .from('.content', {y: '-100%', opacity: -1}, 0)
    .to('.title', {fontSize: 50}, '<.3')
;
document.querySelector('#reverseBtn').addEventListener('click', () => {  
    timeline.timeScale(2);  
    timeline.reverse();
});


document.querySelectorAll('.footer').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            toggleActions: 'restart complete none reset',
            start: '25% 95%',
            end: 'top 5%'
        },
        duration: .75,
        y: '75%',
        opacity: 0
    });
});















const filler = document.querySelector('.filler');
filler.addEventListener('mouseenter', ()=>{
    gsap.to('.header', {duration: 0.5, opacity: 0});
});
filler.addEventListener('mouseleave', ()=>{
    gsap.to('.header', {duration: 0.5, opacity: 1});
});

const header = document.querySelector('#header');
header.addEventListener('mouseenter', ()=>{
    gsap.to('#header', {
        text: {
            value: "neuer Header!!!!!",
            delimiter: '',
            speed: 1
        }
    });
});
header.addEventListener('mouseleave', ()=>{
    gsap.to('#header', {
        text: {
            value: "header text",
            delimiter: '',
            speed: 1
        }
    });
});