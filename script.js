// Ensure GSAP and ScrollTrigger are loaded
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Update ScrollTrigger with Locomotive Scroll
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Update the viewport size for ScrollTrigger
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// Add ScrollTrigger animation
gsap.to(".logo svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
});

gsap.to(".navbar2 .links", {
    transform: "translateY(-100%)",
    opacity:"0",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
});
  

const video = document.querySelector('#video-container')
const PlayBtn = document.querySelector('#play')

video.addEventListener('mouseenter',()=>{
    PlayBtn.style.scale = 1;
    PlayBtn.style.opacity = 1;

})

video.addEventListener('mouseleave',()=>{
    PlayBtn.style.scale = 0;
    PlayBtn.style.opacity = 0;

})

video.addEventListener('mousemove',(dets)=>{
      PlayBtn.style.top = dets.y+'px';
      PlayBtn.style.left = dets.x+'px';
})


