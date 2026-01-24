import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import './index.css'

// Lazy loading de componentes para mejor rendimiento
const HeroSection = lazy(() => import("./components/HeroSection"));
const ProyectSection = lazy(() => import("./components/ProyectSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));

// Componente de loading optimizado
const SectionLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0c0a0c]">
    <div className="relative">
      <div className="w-16 h-16 border-2 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-purple-500/30 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

function App() {
  const heroRef = React.useRef(null);
  const projectRef = React.useRef(null);
  const experienceRef = React.useRef(null);
  const aboutRef = React.useRef(null);

  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selected, setSelected] = React.useState("Inicio");

  React.useEffect(() => {
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
            setSelected("Contactame");
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

  React.useEffect(() => {
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
      <div className="text-white overflow-x-hidden relative overflow-y-auto background">
        <Header selected={selected} setSelected={setSelected} refs={{ heroRef, projectRef, experienceRef, aboutRef }} />

        {/* HeroSection - carga inmediata (first paint) */}
        <div ref={heroRef}>
          <Suspense fallback={<SectionLoader />}>
            <HeroSection />
          </Suspense>
        </div>

        {/* Lazy loading para el resto de secciones */}
        <div ref={projectRef}>
          <Suspense fallback={<SectionLoader />}>
            <ProyectSection onSelectedProject={(project) => {
              setSelectedProject(project);
            }} />
          </Suspense>
        </div>

        <div ref={experienceRef}>
          <Suspense fallback={<SectionLoader />}>
            <ExperienceSection />
          </Suspense>
        </div>

        <div ref={aboutRef}>
          <Suspense fallback={<SectionLoader />}>
            <ContactSection />
          </Suspense>
        </div>

        {/* Modal optimizado */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-black rounded-lg p-6 max-w-lg w-full relative shadow-lg">
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
                    loading="lazy"
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
