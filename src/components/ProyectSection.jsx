import React, { useState, useRef, useEffect } from "react";
import Card from "./Card/Card";
import projectsES from "./../utils/projects.jsx";
import projectsEN from "./../utils/projectsen.jsx";
import { useTranslation } from "react-i18next";
import MobileMockup from "./MobileMockup/MobileMockup";
import WatchMockup from "./WatchMockup/WatchMockup";
import './../App.css'
import HeroCard from "./Card/HeroCard.jsx";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Componente optimizado para imágenes con lazy loading
const LazyImage = ({ src, alt, className, style, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && src) {
      if (typeof src === 'function') {
        src().then(module => setImageSrc(module.default));
      } else {
        setImageSrc(src);
      }
    }
  }, [isInView, src]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div ref={imgRef} className={className} style={style}>
      {isInView && imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          onLoad={handleLoad}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      )}
      {!isLoaded && (
        <div className="w-full h-full bg-purple-500/10 animate-pulse" />
      )}
    </div>
  );
};

function ProyectSection({ onSelectedProject }) {
    const { i18n, t } = useTranslation();
    const projects = i18n.language === "es" ? projectsES : projectsEN;
    const [selectedCategory, setSelectedCategory] = useState("web");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const carouselRef = useRef(null);
    const sectionRef = useRef(null);

    // Intersection Observer para optimizar carga
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleNext = () => {
        setCurrentIndex(prev => 
            prev < projects["mobile"].length - 1 ? prev + 1 : 0
        );
    };

    const handlePrev = () => {
        setCurrentIndex(prev => 
            prev > 0 ? prev - 1 : projects["mobile"].length - 1
        );
    };

    const handleSelectProject = (project) => {
        onSelectedProject(project)
    }

    const list = projects[selectedCategory] || [];
    const heroProjects = list.filter(p => p?.hero === true);
    const normalProjects = list.filter(p => p?.hero !== true);

    const getVisibleCards = () => {
        if (window.innerWidth >= 1200) return 3; 
        if (window.innerWidth >= 768) return 2;  
        return 1; 
    };

    const [visibleCards, setVisibleCards] = useState(getVisibleCards());

    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(getVisibleCards());
            setCarouselIndex(0);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setCarouselIndex(0); 
    }, [selectedCategory]);

    const maxCarouselIndex = Math.max(0, normalProjects.length - visibleCards);

    const handleCarouselNext = () => {
        setCarouselIndex(prev => 
            prev < maxCarouselIndex ? prev + 1 : 0
        );
    };

    const handleCarouselPrev = () => {
        setCarouselIndex(prev => 
            prev > 0 ? prev - 1 : maxCarouselIndex
        );
    };

    // Loading state mientras no es visible
    if (!isVisible) {
        return (
            <section ref={sectionRef} className="flex flex-col px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-20 degradade relative" id="projects">
                <div className="min-h-[400px] flex items-center justify-center">
                    <div className="relative">
                        <div className="w-16 h-16 border-2 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-purple-500/30 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section ref={sectionRef} className="flex flex-col px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-20 degradade relative" id="projects">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                    {t('projects') || 'Proyectos'}
                </h2>
            </div>

            <div className="grid grid-cols-2 lg:flex lg:w-auto w-full max-w-2xl mx-auto gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
                {Object.keys(projects).map(category => (
                    <button 
                        key={category} 
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 sm:py-2.5 text-sm sm:text-base lg:text-lg font-medium rounded-lg transition-all duration-200 cursor-pointer border lg:flex-1
                            ${selectedCategory === category 
                                ? "text-white bg-gradient-to-r from-indigo-600/70 via-purple-600/70 to-purple-700/70 border-purple-500 shadow-lg shadow-purple-500/20 scale-[1.02]"
                                : "text-gray-400 border-gray-700 hover:bg-gradient-to-r hover:from-indigo-600/30 hover:via-purple-600/30 hover:to-purple-700/30 hover:border-purple-600 hover:text-white"
                            }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {((selectedCategory === "web") || (selectedCategory === "desktop")) && (
                <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12 lg:gap-16">
                    {heroProjects.length > 0 && (
                        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 w-full">
                            {heroProjects.map((project, idx) => (
                                <HeroCard
                                    key={project.id}
                                    project={project}
                                    type={selectedCategory}
                                    featured={!!project.featured}
                                    production={!!project.production}
                                    reverse={project.reverse ?? (idx % 2 === 1)}
                                    onSelectProject={() => handleSelectProject(project)}
                                />
                            ))}
                        </div>
                    )}

                    {normalProjects.length > 0 && (
                        <div className="w-full">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                    {t('more_projects') || 'Más proyectos'}
                                </h3>
                                
                                {normalProjects.length > visibleCards && (
                                    <div className="hidden sm:flex gap-2">
                                        <button
                                            onClick={handleCarouselPrev}
                                            disabled={carouselIndex === 0}
                                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-purple-500/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                            aria-label="Previous"
                                        >
                                            <IoChevronBack className="text-xl" />
                                        </button>
                                        <button
                                            onClick={handleCarouselNext}
                                            disabled={carouselIndex === maxCarouselIndex}
                                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-purple-500/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                            aria-label="Next"
                                        >
                                            <IoChevronForward className="text-xl" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="relative overflow-hidden">
                                <div 
                                    ref={carouselRef}
                                    className="flex transition-transform duration-500 ease-out gap-6 lg:gap-8"
                                    style={{ 
                                        transform: `translateX(-${carouselIndex * (100 / visibleCards + (visibleCards > 1 ? 2.5 : 0))}%)` 
                                    }}
                                >
                                    {normalProjects.map(project => (
                                        <div 
                                            key={project.id}
                                            className="flex-shrink-0"
                                            style={{ 
                                                width: `calc(${100 / visibleCards}% - ${visibleCards > 1 ? '1.5rem' : '0px'})` 
                                            }}
                                        >
                                            <Card
                                                project={project}
                                                onSelectProject={() => handleSelectProject(project)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {normalProjects.length > visibleCards && (
                                    <>
                                        <button
                                            onClick={handleCarouselPrev}
                                            className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-all z-10"
                                            aria-label="Previous"
                                        >
                                            <IoChevronBack className="text-xl" />
                                        </button>
                                        <button
                                            onClick={handleCarouselNext}
                                            className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-all z-10"
                                            aria-label="Next"
                                        >
                                            <IoChevronForward className="text-xl" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {normalProjects.length > visibleCards && (
                                <div className="flex justify-center gap-2 mt-6">
                                    {Array.from({ length: maxCarouselIndex + 1 }).map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCarouselIndex(idx)}
                                            className={`h-2 rounded-full transition-all ${
                                                idx === carouselIndex 
                                                    ? 'w-8 bg-purple-500' 
                                                    : 'w-2 bg-white/30 hover:bg-white/50'
                                            }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {selectedCategory === "mobile" && (
                <div className="relative flex items-center w-full max-w-6xl justify-center mx-auto overflow-hidden rounded-xl">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)`, maxWidth: '-webkit-fill-available' }}
                    >
                        {projects[selectedCategory]?.map(project => (
                            <div 
                                key={project.id} 
                                className="w-full flex-shrink-0"
                            >
                                <MobileMockup project={project} onSelectProject={() => handleSelectProject(project)} />
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={handlePrev}
                        className="absolute cursor-pointer left-4 top-1/2 lg:top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all shadow-lg"
                        aria-label="Previous mobile project"
                    >
                        <IoChevronBack className="text-xl" />
                    </button>

                    <button 
                        onClick={handleNext}
                        className="absolute cursor-pointer right-4 top-1/2 lg:top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all shadow-lg"
                        aria-label="Next mobile project"
                    >
                        <IoChevronForward className="text-xl" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {projects[selectedCategory]?.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 w-2 rounded-full transition-all ${
                                    index === currentIndex ? "bg-purple-500 w-8" : "bg-white/30"
                                }`}
                                aria-label={`Go to mobile project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                
            )}

            {selectedCategory === "watch" && (
                <div className="max-w-6xl flex  flex-wrap  gap-12 m-auto justify-center">
                    {projects[selectedCategory]?.map(project => (
                        <WatchMockup key={project.id} project={project} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default ProyectSection;