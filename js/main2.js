gsap.registerPlugin(ScrollTrigger, TextPlugin);

/*const timeline = gsap.timeline({defaults: {duration: 1}});
timeline
    .from('.content', {y: '-100%', opacity: -1}, 0)
    .to('.title', {fontSize: 50}, '<.3')
;
gsap.from('.content2', {duration: 1, y: '-100%', opacity: -1}, 0)

document.querySelector('#reverseBtn').addEventListener('click', () => {  
    timeline.timeScale(2);  
    timeline.reverse();
});*/


document.querySelectorAll('.footer').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            toggleActions: 'restart complete none reset',
            start: '-15% 95%',
            end: 'top top'
        },
        duration: .75,
        y: '50%',
        opacity: 0
    });
});

// TITLES ANIMATED

/*function titleText(){
    setTimeout(()=>{
        gsap.to('#pageTitle', {
            scrollTrigger: {
                trigger: '#pageTitle',
                toggleActions: 'play play play play',
                start: 'top bottom',
                end: 'bottom top'
            },
            text: {
                value: "Hoffmann",
                delimiter: '',
                speed: .5   
            },
        });
    }, 1500);
    setTimeout(()=>{
        gsap.to('#pageTitle', {
            text: {
                value: "HTL3R",
                delimiter: '',
                speed: .5   
            },
        });
    }, 3000);
    setTimeout(()=>{
        gsap.to('#pageTitle', {
            text: {
                value: "4Ai",
                delimiter: '',
                speed: .5   
            },
        });
    }, 4500);
    setTimeout(()=>{
        gsap.to('#pageTitle', {
            text: {
                value: "Elias",
                delimiter: '',
                speed: .5   
            },
        });
    }, 6000);
};*/


function lolText(){
    setTimeout(()=>{
        gsap.to('#pageTitle', {
            text: {
                value: "neuer header!!!!",
                delimiter: '',
                speed: .5   
            },
            color: 'green'
        });
    }, 2250);
    setTimeout(()=>{
        gsap.to('#pageTitle', {
            text: {
                value: "LOLOlololololol",
                delimiter: '',
                speed: .5
            },
            color: 'blue'
        });
    }, 4500);
    setTimeout(()=>{
        gsap.to('#pageTitle', {
            text: {
                value: "obszöne dinge",
                delimiter: '',
                speed: .5
            },
            color: 'red'
        });
    }, 6250);
    setTimeout(()=>{
        gsap.to('#pageTitle', {
            text: {
                value: "header text",
                delimiter: '',
                speed: .5
            },
            color: 'black'
        });
    }, 8500);
};

lolText();
setInterval(lolText, 8500);