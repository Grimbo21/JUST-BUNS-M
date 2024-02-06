function openmenu(){
    document.getElementById('dr').style.display = "flex" ;
}
function closemenu(){
    document.getElementById('dr').style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector('.text');
    const textContent = text.textContent.trim();
    text.textContent = '';

    const container = document.querySelector('.container');
    var radius = 40; // initial radius
    const circumference = 2 * Math.PI * radius;
    const letterSpacing = 0; // adjust letter spacing as needed

    const totalWidth = text.offsetWidth;
    const angleStep = (360 / textContent.length) * Math.PI / 180; // angle step for each letter
    const letterWidth = totalWidth / textContent.length;

    let angle = -Math.PI / 2; // starting angle at the top

    for (let i = 0; i < textContent.length; i++) {
        const char = textContent.charAt(i);

        const span = document.createElement('span');
        span.textContent = char;
        span.style.position = 'absolute';

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        const rotation = Math.atan2(y, x); // calculate rotation angle

        span.style.left = `calc(50% - ${letterWidth / 2}px + ${x}px)`;
        span.style.top = `calc(50% + ${y}px)`;
        span.style.transform = `translate(-50%, -50%) rotate(${rotation}rad) rotate(90deg)`; // rotate to keep text horizontal

        text.appendChild(span);

        angle += angleStep;
    }
});
gsap.to(".text",{
    rotation:"360",
    ease:Linear.easeNone, 
    duration : 3,
    repeat : -1,
})
var t1 = gsap.timeline()
t1
.from("#menu img, #menu h4, #menu i",{
    scale : 0,
    y : -50,
    duration : 1 ,
    stagger : 0.5,
})
.from(".left img",{
    y : -40,
    duration : 1,
})
.from(".content h1",{
    delay : 2,
    scale : 0,
    top:-100,
    opacity:0, 
    delay:0.5, 
    ease: Elastic.easeOut.config(0.9, 0.45),
    stagger:1}, 0.6)
gsap.from(".ic, .ic2, .ic3, .ic4, .right h1",{
    scale : 0,
    duration : 1,
    stagger : 0.5,
})
gsap.from(".sec1, .sec2",{
    scale : 0,
    duration : 2,
    scrollTrigger : {
        trigger : ".co",
        scroller: "body",
        start : "top 40%",
        end : "top 30%",
    }
})
gsap.from("#mcard",{
    height:"0%",
    ease : Expo.easeInOut,
    duration: 1, 
    scrollTrigger : {
        trigger : "#mcard",
        scroller : "body",
        start : "top 60%",
        end : "top 40%",
    }
})

var tl = gsap.timeline({repeat:-1})
tl
.to(".slide",{
    ease : Expo.easeInOut,
    delay : 2,
    opacity : 0,
    duration : 2,
    stagger : 4,
})
.to(".slide:nth-child(1)",{
    opacity : 100,
    duration : 2,
    stagger : 1,
})

