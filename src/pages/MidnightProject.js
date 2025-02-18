import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import logo from "../img/LOGO_TRANSP.svg";
import fondoMid from "../img/FondoMidnight.png";
import iphoneMockup from "../img/MockupIphoneMidnight.png";

const MidnightProject = ({ isLightMode, setIsLightMode }) => {
  const textRef = useRef([]);
  const mockupRef = useRef(null); // 📌 Referencia para el mockup

  useEffect(() => {
    textRef.current = textRef.current.slice(0, 3); // Limitar el array a 3 párrafos

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }
    );

    window.scrollTo(0, 0);

    // 🎯 Efecto Hover con GSAP
    const mockup = mockupRef.current;
    if (mockup) {
      mockup.addEventListener("mouseenter", () => {
        gsap.to(mockup, { scale: 1.1, y: -10, duration: 0.3, ease: "power2.out" });
      });

      mockup.addEventListener("mouseleave", () => {
        gsap.to(mockup, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
      });
    }

    return () => {
      if (mockup) {
        mockup.removeEventListener("mouseenter", () => {});
        mockup.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isLightMode ? "bg-[#f2f0ef]" : "bg-[#303030]"}`}>
      <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />

      <div className="flex flex-col items-center justify-start h-screen pt-20 relative">
        <h1 className="md:text-8xl text-6xl font-bold text-[#303030] dark:text-[#f2f0ef] relative text-center">
          MIDNIGHT
          <span className="text-blue-500 font-curvy text-6xl md:text-8xl block sm:inline-block ml-2 mt-8 sm:mt-0 transform sm:rotate-0 rotate-9">
            Club
          </span>
        </h1>

        <h2 className="text:2xl md:text-4xl font-semibold text-[#303030] dark:text-[#f2f0ef]">GAMECHANGERS</h2>

        <div className="mt-28 w-full bg-[#303030] dark:bg-[#f2f0ef] shadow-md text-left self-start py-16 px-6 flex flex-col sm:flex-row items-center sm:items-start">
          <div className="flex-1 w-2/4">
            <p className="text-lg text-[#f2f0ef] dark:text-[#303030]">
              <strong>Midnight Project</strong> is a social app designed for <strong>unconventional activities</strong> in designated areas.
            </p>
            <br />
            <p className="text-lg text-[#f2f0ef] dark:text-[#303030]">
              It connects people for unique events like <strong>car meetups</strong>, <strong>graffiti competitions</strong>, <strong>parkour</strong>, and <strong>urban parties</strong>.
            </p>
            <br />
            <p className="text-lg text-[#f2f0ef] dark:text-[#303030]">
              The platform offers a space for those passionate about alternative culture and authentic experiences, fostering creativity and self-expression.
            </p>
          </div>
          <div className="sm:ml-10 sm:mt-0 mt-10 flex justify-center sm:justify-start">
            <img src={logo} alt="Midnight Project Logo" className="w-52 h-auto" />
          </div>
        </div>

        <div className={`w-full p-8 flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 ${isLightMode ? "bg-[#f2f0ef]" : "bg-[#303030]"}`}>
          <div className={`w-64 h-64 flex flex-col justify-center items-center text-center rounded-full ${isLightMode ? "bg-[#303030]" : "bg-[#f2f0ef]"} shadow-lg text-white dark:text-[#303030]`}>
            <h3 className="text-lg font-semibold mb-2">Join Meetups in Your Area</h3>
            <p className="text-base">Connect with people near you for unique, innovative and exciting gatherings.</p>
          </div>

          <div className={`w-64 h-64 flex flex-col justify-center items-center text-center rounded-full ${isLightMode ? "bg-[#303030]" : "bg-[#f2f0ef]"} shadow-lg text-white dark:text-[#303030]`}>
            <h3 className="text-lg font-semibold mb-2">Create Your Own Meetups</h3>
            <p className="text-base">Organize and share your own events for others to join and experience.</p>
          </div>

          <div className={`w-64 h-64 flex flex-col justify-center items-center text-center rounded-full ${isLightMode ? "bg-[#303030]" : "bg-[#f2f0ef]"} shadow-lg text-white dark:text-[#303030]`}>
            <h3 className="text-lg font-semibold mb-2">Maps And Vids</h3>
            <p className="text-base">Find event locations on the map and create videos of the most popular meetups.</p>
          </div>
        </div>

        <div className="relative w-full flex justify-center items-center">
          <img src={fondoMid} alt="Fondo Midnight" className="max-w-8xl shadow-lg mx-auto" />

          {/* 🎯 Mockup con efecto hover */}
          <img
            ref={mockupRef} // 📌 Agregamos la referencia
            src={iphoneMockup}
            alt="Mockup iPhone Midnight"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              w-[45%] lg:w-[40%] md:w-[35%] sm:w-[45%] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default MidnightProject;
