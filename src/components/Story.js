import React from "react";
import { Link } from "react-router-dom"; // Importar Link de React Router
import profpic from "../img/profpic.jpg";

const Story = () => {
  return (
    <div className="relative mt-72">
      {/* Fondo dinámico según el modo */}
      <div className="absolute inset-0 bg-[#303030] dark:bg-[#f2f0ef] w-full h-full"></div>

      {/* Contenedor con flexbox para alinear la imagen y el texto */}
      <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 flex items-center justify-center text-center">
        <div className="flex flex-col sm:flex-row items-center border border-[#303030] dark:border-[#f2f0ef] rounded-md p-5 sm:p-8 m-2 max-w-full bg-[#f2f0ef] dark:bg-[#303030]">
          <img
            src={profpic}
            alt="Bogdan"
            className="w-50 h-40 rounded-md mb-4 sm:mb-0 sm:mr-8"
          />
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-lg sm:text-lg text-[#303030] dark:text-[#f2f0ef]">
              I'm a Spanish multiplatform programmer, passionate about technology and
              committed to creating beautiful and practical solutions.
            </p>
            {/* Enlace a /projects */}
            <Link
              to="/projects"
              className="text-blue-500 dark:text-blue-300 block mt-3 text-lg font-medium hover:underline"
            >
              Get to know me →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
