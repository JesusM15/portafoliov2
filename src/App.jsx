import React, { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProyectSection from "./components/ProyectSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutMeSection from "./components/AboutMeSection";
import './index.css'
import { useTranslation } from "react-i18next";

function App() {
  const heroRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);

  const [ selectedProject, setSelectedProject ] = useState(null);

  const [selected, setSelected] = useState("Inicio");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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

  useEffect(() => {
    if (selectedProject) {
      projectRef.current?.scrollIntoView({ behavior: "smooth" });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <>
      <div className=" text-white overflow-x-hidden relative overflow-y-auto background">
        <Header selected={selected} setSelected={setSelected} refs={{ heroRef, projectRef, experienceRef, aboutRef }} />

        <div ref={heroRef}>
          <HeroSection />
        </div>
        <div ref={projectRef}>
          <ProyectSection onSelectedProject={(project) => {
            setSelectedProject(project);
          }} />
        </div>
        <div ref={experienceRef}>
          <ExperienceSection />
        </div>
        <div ref={aboutRef}>
          <AboutMeSection />
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-black  rounded-lg p-6 max-w-lg w-full relative shadow-lg">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-white duration-150 hover:text-red-400 transition-colors text-3xl cursor-pointer"
              >
                &times;
              </button>
              {selectedProject.video && (
                <div className="mb-4 aspect-video w-full rounded overflow-hidden">
                  <iframe
                    className="w-full h-full p-4"
                    src={`https://www.youtube.com/embed/${selectedProject.video?.split("v=")[1]}`}
                    title={selectedProject.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <h2 className="text-2xl font-bold mb-4 text-white">{selectedProject.name || "Título del proyecto"}</h2>
              <p className="text-gray-200 opacity-70">{selectedProject.description || "Descripción del proyecto..."}</p>
            </div>
          </div>
        )}

      </div>
    </>

    
  );
}

export default App;
