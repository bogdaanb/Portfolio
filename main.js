gsap.registerPlugin(SplitText);

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

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

let proyectos = document.querySelectorAll(".projectsSection");
proyectos.forEach((project) => {
  const infoText = project.querySelectorAll(".info-text");

  const projectHeight = project.offsetHeight;

  const tl = gsap.timeline({ paused: true });

  tl.fromTo(
    infoText,
    {
      y: -projectHeight / 3,
      opacity: 0,
      duration: 1,
    },
    {
      y: projectHeight / 3,
      opacity: 1,
    }
  );

  project.addEventListener("mouseenter", () => {
    gsap.delayedCall(0.3, () => tl.play());
  });

  project.addEventListener("mouseleave", () => {
    gsap.delayedCall(0.3, () => tl.reverse());
  });
});

console.log("GSAP cargado:", typeof gsap !== "undefined" ? "✅" : "❌");
console.log(
  "ScrollTrigger cargado:",
  typeof ScrollTrigger !== "undefined" ? "✅" : "❌"
);
console.log("Lenis cargado:", typeof Lenis !== "undefined" ? "✅" : "❌");

console.log("Proyectos encontrados:", proyectos.length);

proyectos.forEach((project, index) => {
  const infoText = project.querySelectorAll(".info-text");
  console.log(`Proyecto ${index + 1}:`, {
    elemento: project,
    infoText: infoText.length,
    offsetHeight: project.offsetHeight,
  });
});

console.log("\n=== Prueba manual ===");
console.log(
  "Ejecuta: document.querySelector('.projectsSection').dispatchEvent(new Event('mouseenter'))"
);

if (typeof gsap !== "undefined") {
  gsap.globalTimeline.getChildren().forEach((tween, i) => {
    console.log(`Timeline ${i}:`, tween);
  });
}

const firstProject = document.querySelector(".projectsSection");
if (firstProject) {
  const styles = window.getComputedStyle(firstProject);
  console.log("Estilos del primer proyecto:", {
    position: styles.position,
    display: styles.display,
    height: styles.height,
  });
}
