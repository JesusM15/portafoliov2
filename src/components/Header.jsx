import React, { useState, useEffect, useRef } from "react";
import "./../index.css";
import { useTranslation } from "react-i18next";
import mexicoFlag from './../assets/flag_mexico.png';
import usaFlag from './../assets/flag_usa.png';
import { FaArrowDown } from "react-icons/fa";

export default function Header({ selected, setSelected, refs }) {

  const { t, i18n } = useTranslation();
  const [ language, setLanguage ] = useState(i18n?.language);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setSelectorOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setSelectorOpen(false);
  };

  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const threshold = 4; 

      if (currentScrollPos - lastScrollPosition > threshold && currentScrollPos > 20) {
        setShowNav(true);
      }
      else if (lastScrollPosition - currentScrollPos > threshold) {
        setShowNav(false);
      }

      setLastScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  const handleClick = (section) => {
    setSelected(section);
    if (section === "Inicio" && refs.heroRef.current) {
      refs.heroRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Proyectos" && refs.projectRef.current) {
      refs.projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Experiencia" && refs.experienceRef.current) {
      refs.experienceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Acerca de mi" && refs.aboutRef.current) {
      refs.aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full h-16 lg:px-6 px-0
        flex lg:flex-row flex-col-reverse  items-center lg:justify-between justify-center
        text-white
        transition-transform duration-300
        z-50
        ${showNav ? "translate-y-0" : "-translate-y-full"}
      `}
      style={{
        backgroundColor: "rgba(5, 5, 5, 0.8)",
        backdropFilter: "blur(4px)",
      }}
    >
    <div className="relative font-bold text-lg" ref={ref}>
        <button
          onClick={() => setSelectorOpen((prev) => !prev)}
          className="flex items-center gap-2 font-semibold text-base uppercase bg-purple-900/40 border border-purple-900 px-3 py-1 text-white"
        >
          <img
            src={language === "es" ? mexicoFlag : usaFlag}
            alt="Flag"
            className="h-5 w-5 object-cover"
          />
          {language} 
        </button>

        {selectorOpen && (
          <div className="absolute z-10 mt-2 w-32 rounded-md shadow-lg bg-black bg-opacity-90 ring-1 ring-purple-600 ring-opacity-20">
            <ul className="py-1 text-sm text-white">
              <li
                onClick={() => handleSelect("es")}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                <img src={mexicoFlag} alt="Español" className="h-4 w-4 object-cover" /> ES
              </li>
              <li
                onClick={() => handleSelect("en")}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                <img src={usaFlag} alt="English" className="h-4 w-4 object-cover" /> EN
              </li>
            </ul>
          </div>
        )}
      </div>

      <ul className="text-lg font-normal flex gap-3 lg:gap-4">
        <li
          className={`cursor-pointer text-lg font-normal ${
            selected === "Inicio"
              ? "text-glow selected-li"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setSelected("Inicio")}
        >
          <a href="#home">
            {t("home")}
          </a>
        </li>
        <li
          className={`cursor-pointer text-lg font-normal ${
            selected === "Proyectos"
              ? "text-glow selected-li"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setSelected("Proyectos")}
        >
          <a href="#projects">
            {t("projects")}
          </a>
        </li>
        <li
          className={`cursor-pointer text-lg font-normal ${
            selected === "Experiencia"
              ? "text-glow selected-li"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setSelected("Experiencia")}
        >
          <a href="#experience">
            {t("experience")}
          </a>
        </li>
        <li
          className={`cursor-pointer text-lg font-normal ${
            selected === "Acerca de mi"
              ? "text-glow selected-li"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setSelected("Acerca de mi")}
        >
          <a href="#about_me">
            {t("about_me")}
          </a>
        </li>
      </ul>
    </nav>
  );
}
