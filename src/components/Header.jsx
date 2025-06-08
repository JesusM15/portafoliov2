import React, { useState, useEffect } from "react";
import "./../index.css";

export default function Header({ selected, setSelected, refs }) {

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
        flex items-center lg:justify-between justify-center
        text-white
        transition-transform duration-300
        z-50
        ${showNav ? "translate-y-0" : "-translate-y-full"}
      `}
      style={{
        // Un fondo semitransparente para no tapar completamente el contenido
        backgroundColor: "rgba(5, 5, 5, 0.8)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="font-bold text-lg">
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
            Inicio
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
            Proyectos
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
            Experiencia
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
            Acerca de mi
          </a>
        </li>
      </ul>
    </nav>
  );
}
