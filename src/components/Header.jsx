import React, { useState, useEffect } from "react";
import "./../index.css";

export default function Header() {
  const [selected, setSelected] = useState("Inicio");

  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const threshold = 5; 

      if (currentScrollPos - lastScrollPosition > threshold && currentScrollPos > 30) {
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

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full h-16 px-6 
        flex items-center justify-between
        text-white
        transition-transform duration-300
        z-50
        ${showNav ? "translate-y-0" : "-translate-y-full"}
      `}
      style={{
        // Un fondo semitransparente para no tapar completamente el contenido
        backgroundColor: "rgba(14, 14, 14, 0.8)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="font-bold text-lg">
      </div>

      <ul className="text-lg font-normal flex gap-4">
        <li
          className={`cursor-pointer text-lg font-normal ${
            selected === "Inicio"
              ? "text-glow selected-li"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setSelected("Inicio")}
        >
          Inicio
        </li>
        <li
          className={`cursor-pointer text-lg font-normal ${
            selected === "Proyectos"
              ? "text-glow selected-li"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setSelected("Proyectos")}
        >
          Proyectos
        </li>
        <li
          className={`cursor-pointer text-lg font-normal ${
            selected === "Experiencia"
              ? "text-glow selected-li"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setSelected("Experiencia")}
        >
          Experiencia
        </li>
        <li
          className={`cursor-pointer text-lg font-normal ${
            selected === "Acerca de mi"
              ? "text-glow selected-li"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setSelected("Acerca de mi")}
        >
          Acerca de mi
        </li>
      </ul>
    </nav>
  );
}
