import React, { useState, useEffect, useRef } from "react";
import "./../index.css";
import { useTranslation } from "react-i18next";
import mexicoFlag from './../assets/flag_mexico.png';
import usaFlag from './../assets/flag_usa.png';
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header({ selected, setSelected, refs }) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n?.language);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langRef = useRef();
  const mobileMenuRef = useRef();

  // Cerrar selector de idioma al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setSelectorOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setSelectorOpen(false);
  };

  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const threshold = 4;

      if (currentScrollPos - lastScrollPosition > threshold && currentScrollPos > 20) {
        setShowNav(false);
        setMobileMenuOpen(false); // Cerrar menú al hacer scroll
      } else if (lastScrollPosition - currentScrollPos > threshold) {
        setShowNav(true);
      }

      setLastScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  const handleClick = (section) => {
    setSelected(section);
    setMobileMenuOpen(false); // Cerrar menú móvil al seleccionar
    
    if (section === "Inicio" && refs.heroRef.current) {
      refs.heroRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Proyectos" && refs.projectRef.current) {
      refs.projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Experiencia" && refs.experienceRef.current) {
      refs.experienceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Contactame" && refs.aboutRef.current) {
      refs.aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full h-16
          flex items-center justify-between
          px-4 sm:px-6 lg:px-8
          text-white
          transition-transform duration-300
          z-50
          ${showNav ? "translate-y-0" : "-translate-y-full"}
        `}
        style={{
          backgroundColor: "rgba(5, 5, 5, 0.9)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Selector de idioma */}
        <div className="relative font-bold text-lg" ref={langRef}>
          <button
            onClick={() => setSelectorOpen((prev) => !prev)}
            className="flex items-center gap-2 font-semibold text-base uppercase cursor-pointer px-3 py-1.5 text-white hover:bg-gray-700 rounded transition-all"
            aria-label="Select language"
          >
            <img
              src={language === "es" ? mexicoFlag : usaFlag}
              alt="Current language flag"
              className="h-5 w-5 object-cover rounded-sm"
            />
            {!selectorOpen ? <IoMdArrowDropdown className="text-xl" /> : <IoMdArrowDropup className="text-xl" />}
          </button>

          {selectorOpen && (
            <div className="absolute left-0 z-10 mt-2 w-32 rounded-md shadow-lg bg-black bg-opacity-95 ring-1 ring-white ring-opacity-10">
              <ul className="py-1 text-sm text-white">
                <li
                  onClick={() => handleSelect("es")}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  <img src={mexicoFlag} alt="Español" className="h-4 w-4 object-cover rounded-sm" /> ES
                </li>
                <li
                  onClick={() => handleSelect("en")}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  <img src={usaFlag} alt="English" className="h-4 w-4 object-cover rounded-sm" /> EN
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Menú Desktop */}
        <ul className="hidden lg:flex text-md font-normal gap-4">
          <li
            className={`cursor-pointer text-lg font-normal px-2 py-1 transition-colors ${
              selected === "Inicio"
                ? "text-glow selected-li"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => handleClick("Inicio")}
          >
            <a href="#home">{t("home")}</a>
          </li>
          <li
            className={`cursor-pointer text-lg font-normal px-2 py-1 transition-colors ${
              selected === "Proyectos"
                ? "text-glow selected-li"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => handleClick("Proyectos")}
          >
            <a href="#projects">{t("projects")}</a>
          </li>
          <li
            className={`cursor-pointer text-lg font-normal px-2 py-1 transition-colors ${
              selected === "Experiencia"
                ? "text-glow selected-li"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => handleClick("Experiencia")}
          >
            <a href="#experience">{t("experience")}</a>
          </li>
          <li
            className={`cursor-pointer font-normal 
              border border-gray-600
              bg-gradient-to-r from-indigo-500/40 via-purple-600/40 to-purple-700/40 
              text-md flex items-center py-1 px-3 rounded-full transition-colors ${
              selected === "Contactame"
                ? "text-glow selected-li"
                : "text-purple-100 hover:text-white"
            }`}
            onClick={() => handleClick("Contactame")}
          >
            <a href="#contact_me">{t("contact_me")}</a>
          </li>
        </ul>

        {/* Botón hamburguesa para móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:bg-gray-700 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-3xl" />
          )}
        </button>
      </nav>

      {/* Menú Mobile - Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm
          transition-opacity duration-300 z-40
          lg:hidden
          ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Menú Mobile - Panel */}
      <div
        ref={mobileMenuRef}
        className={`
          fixed top-16 right-0 h-[calc(100vh-4rem)]
          w-64 sm:w-80
          bg-black/95 backdrop-blur-md
          transition-transform duration-300 ease-in-out
          z-40 lg:hidden
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <ul className="flex flex-col gap-2 p-6">
          <li
            className={`cursor-pointer text-xl font-normal px-4 py-3 rounded-lg transition-all ${
              selected === "Inicio"
                ? "text-glow selected-li bg-purple-600/20"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
            onClick={() => handleClick("Inicio")}
          >
            <a href="#home" className="block w-full">{t("home")}</a>
          </li>
          <li
            className={`cursor-pointer text-xl font-normal px-4 py-3 rounded-lg transition-all ${
              selected === "Proyectos"
                ? "text-glow selected-li bg-purple-600/20"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
            onClick={() => handleClick("Proyectos")}
          >
            <a href="#projects" className="block w-full">{t("projects")}</a>
          </li>
          <li
            className={`cursor-pointer text-xl font-normal px-4 py-3 rounded-lg transition-all ${
              selected === "Experiencia"
                ? "text-glow selected-li bg-purple-600/20"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
            onClick={() => handleClick("Experiencia")}
          >
            <a href="#experience" className="block w-full">{t("experience")}</a>
          </li>
          <li
            className={`cursor-pointer font-normal text-xl
              border border-purple-500/50
              bg-gradient-to-r from-indigo-500/40 via-purple-600/40 to-purple-700/40 
              px-4 py-3 rounded-lg transition-all mt-4 ${
              selected === "Contactame"
                ? "text-glow selected-li"
                : "text-purple-100 hover:text-white hover:border-purple-400"
            }`}
            onClick={() => handleClick("Contactame")}
          >
            <a href="#contact_me" className="block w-full">{t("contact_me")}</a>
          </li>
        </ul>
      </div>
    </>
  );
}