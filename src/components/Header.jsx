import React, { useState } from "react";
import './../index.css';

export default function Header() {
  // Estado para saber qué enlace está seleccionado
  const [selected, setSelected] = useState("Inicio");

  return (
    <nav className="text-white flex flex-row h-14 items-center justify-between px-6 flex-1">
        <div>
            
        </div>
        <ul className="text-lg font-normal flex gap-4">
            <li
            className={`cursor-pointer text-lg font-normal ${selected === "Inicio" ? "text-glow selected-li" : "text-gray-400 hover:text-white"}`}
            onClick={() => setSelected("Inicio")}
            >
            Inicio
            </li>
            <li
            className={`cursor-pointer text-lg font-normal ${selected === "Proyectos" ? "text-glow selected-li" : "text-gray-400 hover:text-white"}`}
            onClick={() => setSelected("Proyectos")}
            >
            Proyectos
            </li>
            <li
            className={`cursor-pointer text-lg font-normal ${selected === "Experiencia" ? "text-glow selected-li" : "text-gray-400 hover:text-white"}`}
            onClick={() => setSelected("Experiencia")}
            >
            Experiencia
            </li>
            <li
            className={`cursor-pointer text-lg font-normal ${selected === "Acerca de mi" ? "text-glow selected-li" : "text-gray-400 hover:text-white"}`}
            onClick={() => setSelected("Acerca de mi")}
            >
            Acerca de mi
            </li>
        </ul>
    </nav>
  );
}
