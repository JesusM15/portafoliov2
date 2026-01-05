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

  return (
    <section
      id="home"
      ref={ref}
      className={[
        "w-full flex relative",
        "min-h-[100svh]",
        "lg:flex-row flex-col",
        "lg:p-16 p-6 sm:p-8",
        "pt-12 sm:pt-16 lg:pt-16",
        "gap-10 lg:gap-0",
      ].join(" ")}
    >
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

      {/* Left: Text content */}
      <article className="relative z-10 lg:flex-initial flex justify-center items-center lg:items-start flex-col w-full lg:max-w-[720px]">
        {/* Title */}
        <h1
          className={[
            "text-white font-extrabold tracking-tight pb-2",
            // ✅ fluid typography (better for big phones)
            "text-[clamp(2.2rem,6vw,4.5rem)]",
            "text-center lg:text-left",
          ].join(" ")}
        >
          {t("hero_section.greet")}
        </h1>

        <span
          className={[
            "bg-gradient-to-r from-rose-400 via-purple-500 to-purple-700",
            "inline-block text-transparent bg-clip-text font-extrabold",
            "text-[clamp(2.6rem,7vw,4.75rem)]",
            "text-center lg:text-left",
          ].join(" ")}
        >
          Jesús
        </span>

        <p className="text-purple-300 text-sm sm:text-base md:text-xl py-3 purple-glow text-center lg:text-left">
          {t("full_stack_developer")}
        </p>

        <p
          className={[
            "text-gray-50 w-full",
            // ✅ readable line length on large phones
            "max-w-[46ch] lg:max-w-xl",
            "text-center lg:text-left",
            "text-sm sm:text-base md:text-lg",
            "leading-relaxed",
          ].join(" ")}
        >
          <span>{t("hero_section.subtitle")}</span>
        </p>

        {/* Desktop / Tablet layout */}
        <div className="hidden md:block w-full">
          <section className="flex gap-6 pb-6 pt-6 justify-center lg:justify-start">
            <Metrics number={3} label={t("hero_section.years_experience")} />
            <Metrics number={10} label={t("hero_section.completed_projects")} />
          </section>

          <div className="flex gap-4 pb-2 justify-center lg:justify-start">
            <a className="no-underline opacity-100" href="#contact_me">
              <button
                className={[
                  "justify-between py-2 px-4 rounded-lg",
                  "bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700",
                  "transition-all ease-in-out duration-300",
                  "flex items-center gap-3 shadow-indigo-600 shadow-sm cursor-pointer",
                  "hover:text-white hover:brightness-90",
                ].join(" ")}
              >
                {t("work_together")}
                <FaArrowRight />
              </button>
            </a>

            <a className="no-underline opacity-100" href="#projects">
              <button
                className={[
                  "text-purple-400 py-2 px-4 rounded-lg",
                  "hover:bg-purple-600/20 hover:text-purple-200",
                  "transition-all ease-in-out duration-300",
                  "flex items-center gap-3 shadow-purple-600 shadow-sm cursor-pointer",
                ].join(" ")}
              >
                {t("my_projects")}
              </button>
            </a>
          </div>

          <div className="flex gap-5 mt-6 justify-center lg:justify-start">
            <a
              href={i18n?.language === "es" ? cv : encv}
              download="CV_JesusM.pdf"
              title={t("download_resume")}
            >
              <IoMdDownload
                className="text-4xl text-purple-400 hover:text-purple-600 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                style={{ filter: "drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))" }}
              />
            </a>

            <a href="https://github.com/JesusM15" target="_blank" rel="noopener noreferrer">
              <FaGithub
                className="text-4xl text-purple-400 hover:text-purple-600 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                style={{ filter: "drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/jesus-manuel-perez-guerra-235260229"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-4xl text-purple-400 hover:text-purple-600 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                style={{ filter: "drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))" }}
              />
            </a>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden block w-full">
          <section className="flex gap-6 pb-4 pt-6 justify-center">
            <Metrics number={3} label={t("hero_section.years_experience")} />
            <Metrics number={10} label={t("hero_section.completed_projects")} />
          </section>

          {/* ✅ astronaut: no absolute, scales better on big phones */}
          <article className="flex justify-center items-center w-full py-6">
            <img
              src={astronaut}
              className="h-40 sm:h-48 floatRotateForward astronaut-glow glow"
              alt="Astronaut"
            />
          </article>

          <div className="flex gap-3 pb-2 flex-col text-sm w-full">
            <a className="no-underline opacity-100 w-full" href="#contact_me">
              <button
                className={[
                  "w-full justify-between py-2.5 px-4 rounded-lg",
                  "bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700",
                  "transition-all ease-in-out duration-300",
                  "flex items-center gap-3 shadow-indigo-600 shadow-sm cursor-pointer",
                  "hover:text-white hover:brightness-90",
                ].join(" ")}
              >
                {t("work_together")}
                <FaArrowRight />
              </button>
            </a>
          </div>

          <div className="flex gap-5 mt-5 justify-center">
            <a
              href={i18n?.language === "es" ? cv : encv}
              download="CV_JesusM.pdf"
              title={t("download_resume")}
            >
              <IoMdDownload
                className="text-2xl text-purple-400 hover:text-purple-600 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                style={{ filter: "drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))" }}
              />
            </a>

            <a href="https://github.com/JesusM15" target="_blank" rel="noopener noreferrer">
              <FaGithub
                className="text-2xl text-purple-400 hover:text-purple-600 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                style={{ filter: "drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/jesus-manuel-perez-guerra-235260229"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-2xl text-purple-400 hover:text-purple-600 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                style={{ filter: "drop-shadow(0px 0px 6px rgba(128, 0, 128, 0.6))" }}
              />
            </a>
          </div>
        </div>
      </article>

      {/* Right: astronaut only on md+ */}
      <article className="relative z-10 flex-1 md:flex justify-center items-center hidden">
        <img
          src={astronaut}
          className="h-64 absolute floatRotateForward astronaut-glow glow"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          alt="Astronaut"
        />
      </article>
    </section>
  );
}
