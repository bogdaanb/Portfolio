import React, { useEffect, useRef } from "react";
import SplitType from "split-type"; // Asegúrate de tener instalada la librería
import { gsap } from "gsap"; // Importar gsap

const HeroSection = ({ isLightMode }) => {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Inicializar SplitType en el texto
    new SplitType('.animate', {
      types: 'lines, words, chars',
      tagName: 'span'
    });
  
    // Animar cada palabra con GSAP
    gsap.from('.animate .word', {
      y: '100%', // Palabras aparecen desde abajo
      opacity: 0, // Comienza oculto
      duration: 0.5, // Duración de la animación
      ease: 'power1.out', // Easing
      stagger: 0.1, // Retraso entre animaciones
    });
  
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1; // Normalizar a rango [-1, 1]
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalizar a rango [-1, 1]
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div className="h-screen w-full flex items-center">
      <div className="w-full sm:w-9/12">
        <h1 className="font-bold leading-tight text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw]">
          <span className="text-[#303030] dark:text-[#f2f0ef] animate">
            Hey! My name is Bogdan.
          </span>
        </h1>
        <p className="animate text-[3vw] text-[#505050] dark:text-[#cfcfcf] mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          Web and multiplatform applications developer.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
