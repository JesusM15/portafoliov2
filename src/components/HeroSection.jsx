// HeroSection.jsx
import React from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import "./HeroSection.css";
import nebulosa from "./../assets/nebulosa.png";
import astronaut from "./../assets/astronaut.png";
import { useTranslation } from "react-i18next";
import cv from "./../assets/cv_jesus_2025.pdf";
import encv from "./../assets/english_cv_2025.pdf";
import Metrics from "./Metrics";

export default function HeroSection({ ref }) {
  const { t, i18n } = useTranslation();
  
  const cvLink = i18n.language === "es" ? cv : encv;

  return (
    <section
      id="home"
      ref={ref}
      className="w-full flex relative min-h-[100svh] md:flex-row flex-col md:p-16 p-6 sm:p-8 pt-16 sm:pt-20 md:pt-16 gap-8 md:gap-0"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 blur-md pointer-events-none"
        style={{ backgroundImage: `url(${nebulosa})` }}
      />

      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(1,1,1,0) 75%, #000 100%)",
        }}
      />

      {/* Particles */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* LEFT CONTENT */}
      <article className="relative z-10 flex flex-col items-center md:items-start w-full md:max-w-[720px]">
        {/* Título */}
        <h1 className="text-white font-extrabold tracking-tight pb-2 text-[clamp(2rem,6vw,4.5rem)] text-center md:text-left leading-tight">
          {t("hero_section.greet")}
        </h1>

        {/* Nombre con gradiente */}
        <span className="bg-gradient-to-r from-rose-400 via-purple-500 to-purple-700 inline-block text-transparent bg-clip-text font-extrabold text-[clamp(2.5rem,7vw,4.75rem)] text-center md:text-left leading-tight">
          Jesús
        </span>

        {/* Rol */}
        <p className="text-purple-300 text-sm sm:text-base md:text-xl py-3 sm:py-4 purple-glow text-center md:text-left">
          {t("full_stack_developer")}
        </p>

        {/* Descripción */}
        <p className="text-gray-50 w-full max-w-[46ch] md:max-w-xl text-center md:text-left text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-0">
          {t("hero_section.subtitle")}
        </p>

        {/* Métricas */}
        <section className="flex gap-4 sm:gap-6 pb-4 sm:pb-6 pt-6 justify-center md:justify-start w-full">
          <Metrics number={3} label={t("hero_section.years_experience")} />
          <Metrics number={10} label={t("hero_section.completed_projects")} />
        </section>

        {/* Astronauta solo en móvil */}
        <div className="md:hidden flex justify-center py-6 w-full">
          <img
            src={astronaut}
            className="h-40 sm:h-52 w-auto floatRotateForward astronaut-glow glow"
            alt="Astronaut"
          />
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-4 sm:pb-6 w-full sm:w-auto">
          <a href="#contact_me" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto justify-center sm:justify-between py-2.5 sm:py-2 px-4 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 flex items-center gap-3 hover:brightness-90 transition-all">
              {t("work_together")}
              <FaArrowRight />
            </button>
          </a>

          <a href="#projects" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto text-purple-400 py-2.5 sm:py-2 px-4 rounded-lg hover:bg-purple-600/20 hover:text-purple-200 transition-all">
              {t("my_projects")}
            </button>
          </a>
        </div>

        {/* Iconos sociales */}
        <div className="flex gap-5 sm:gap-6 justify-center md:justify-start w-full">
          <a 
            href={cvLink} 
            download
            className="transform hover:scale-110 transition-transform"
            aria-label="Download CV"
          >
            <IoMdDownload className="text-3xl sm:text-4xl text-purple-400 hover:text-purple-300" />
          </a>
          
          <a 
            href="https://github.com/JesusM15" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-3xl sm:text-4xl text-purple-400 hover:text-purple-300" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/jesus-manuel-perez-guerra-235260229" 
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-3xl sm:text-4xl text-purple-400 hover:text-purple-300" />
          </a>
        </div>
      </article>

      {/* RIGHT ASTRONAUT (tablet y desktop) */}
      <article className="relative z-10 flex-1 hidden md:flex justify-center items-center">
        <img
          src={astronaut}
          className="h-48 lg:h-64 w-auto floatRotateForward astronaut-glow glow"
          alt="Astronaut"
        />
      </article>
    </section>
  );
}