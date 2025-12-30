import React, { useState } from "react";
import Card from "./Card/Card";
import projectsES from "./../utils/projects.jsx";
import projectsEN from "./../utils/projectsen.jsx";
import { useTranslation } from "react-i18next";
import MobileMockup from "./MobileMockup/MobileMockup";
import WatchMockup from "./WatchMockup/WatchMockup";
import './../App.css'
import HeroCard from "./Card/HeroCard.jsx";

function ProyectSection({ onSelectedProject }) {
    const { i18n } = useTranslation();
    const projects = i18n.language === "es" ? projectsES : projectsEN;
    const [selectedCategory, setSelectedCategory] = useState("web");
    const [currentIndex, setCurrentIndex] = useState(0);

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

    return (
        <>
        <section className="flex flex-col px-4 w-full degradade relative" id="projects">

            <div className="grid grid-cols-2 lg:flex lg:w-auto w-full gap-6 mb-6 px-4">
                {Object.keys(projects).map(category => (
                    <button 
                        key={category} 
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-1 text-lg font-medium rounded-lg transition-all duration-100 cursor-pointer border border-gray-100 lg:flex-initial flex-1
                            ${selectedCategory === category 
                                ? "text-white bg-gradient-to-r from-indigo-600/70 via-purple-600/70 to-purple-700/70 border border-purple-500 shadow-lg scale-100"
                                : "text-gray-400 hover:bg-gradient-to-r hover:from-indigo-600/50 hover:via-purple-600/50 hover:to-purple-700/50 hover:border hover:border-purple-500 hover:text-white hover:scale-100 transition-all"
                            }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

                {((selectedCategory === "web") || (selectedCategory === "desktop")) && (
                <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
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

                    {normalProjects.length > 0 && (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                        {normalProjects.map(project => (
                        <Card
                            key={project.id}
                            project={project}
                            onSelectProject={() => handleSelectProject(project)}
                        />
                        ))}
                    </div>
                    )}
                </div>
                )}


            <div className="flex justify-center flex-wrap gap-10 w-full relative lg:container p-2 lg:p-4">

                {selectedCategory === "mobile" && (
                <div className="relative  flex items-center w-full max-w-6xl overflow-hidden rounded-xl">
                    <div 
                    className="flex transition-transform duration-500 ease-in-out max-w-screen"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
                    className="absolute cursor-pointer left-4 top-1/3 lg:top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-all shadow-md"
                    >
                    ❮
                    </button>

                    <button 
                    onClick={handleNext}
                    className="absolute cursor-pointer right-4 top-1/3 lg:top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-all shadow-md"
                    >
                    ❯
                    </button>

                    <div className="absolute bottom-0 lg:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {projects[selectedCategory]?.map((_, index) => (
                        <div
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                            index === currentIndex ? "bg-purple-500" : "bg-white/30"
                        }`}
                        ></div>
                    ))}
                    </div>
                </div>
                )}


                {selectedCategory === "watch" && 
                    projects[selectedCategory]?.map(project => (
                        <WatchMockup key={project.id} project={project} />
                    ))
                }
            </div>
        
        </section>

        </>
    );
}

export default ProyectSection;
