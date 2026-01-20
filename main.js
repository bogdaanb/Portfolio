const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

let proyectos = document.querySelectorAll(".projectsSection")
proyectos.forEach(project => {

  const infoText = project.querySelectorAll(".info-text");

  const projectHeight = project.offsetHeight;

  const tl = gsap.timeline({ paused: true });

  tl.fromTo(infoText, {
    y: -projectHeight / 3,
    opacity: 0,
    duration: 1,
  },
    {
      y: projectHeight / 3,
      opacity: 1,
    })


  project.addEventListener("mouseenter", () => {
    gsap.delayedCall(0.3, () => tl.play());
  });


  project.addEventListener('mouseleave', () => {
    gsap.delayedCall(0.3, () => tl.reverse());
  });
});