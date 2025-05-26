import React, { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProyectSection from "./components/ProyectSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutMeSection from "./components/AboutMeSection";
import './index.css'
import './app.css'

function App() {
  // Referencias a cada sección para observarlas
  const heroRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);

  // Estado para saber cuál sección está seleccionada
  const [selected, setSelected] = useState("Inicio");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // cuando al menos el 50% de la sección esté visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === heroRef.current) {
            setSelected("Inicio");
          } else if (entry.target === projectRef.current) {
            setSelected("Proyectos");
          } else if (entry.target === experienceRef.current) {
            setSelected("Experiencia");
          } else if (entry.target === aboutRef.current) {
            setSelected("Acerca de mi");
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (heroRef.current) observer.observe(heroRef.current);
    if (projectRef.current) observer.observe(projectRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full text-white overflow-x-hidden overflow-y-auto background">
      {/* Se le pasa el estado 'selected' y las referencias para el scroll */}
      <Header selected={selected} setSelected={setSelected} refs={{ heroRef, projectRef, experienceRef, aboutRef }} />

      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={projectRef}>
        <ProyectSection />
      </div>
      <div ref={experienceRef}>
        <ExperienceSection />
      </div>
      <div ref={aboutRef}>
        <AboutMeSection />
      </div>
    </div>
  );
}

export default App;
