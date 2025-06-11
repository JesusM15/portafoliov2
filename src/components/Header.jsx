import React, { useState, useEffect } from "react";
import "./../index.css";
import { useTranslation } from "react-i18next";

export default function Header({ selected, setSelected, refs }) {

  const { t, i18n } = useTranslation();
  const [ language, setLanguage ] = useState(i18n?.language);
  const [ selectorLenguageOpen, setSelectorLenguageOpen ] = useState(false);  

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
        flex md:flex-row flex-col-reverse  items-center lg:justify-between justify-center
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
      <div className="font-bold text-lg relative">
        <button
          onClick={() => setSelectorLenguageOpen((prev) => !prev)}
          className="font-semibold text-base uppercase bg-purple-600/40 border-purple-900 border px-3 cursor-pointer"
        >
          {language}
        </button>

        {selectorLenguageOpen && (
          <div className="absolute z-10 mt-2 w-24 rounded-md shadow-lg bg-black bg-opacity-90 ring-1 ring-white ring-opacity-20">
            <ul className="py-1 text-sm text-white">
              <li
                onClick={() => {
                  i18n.changeLanguage('es');
                  setLanguage('es');
                  setSelectorLenguageOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                Español
              </li>
              <li
                onClick={() => {
                  i18n.changeLanguage('en');
                  setLanguage('en');
                  setSelectorLenguageOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                English
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
