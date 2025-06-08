import React, { useState } from "react";
import Card from "./Card/Card";
import projects from "../utils/projects.jsx";
import MobileMockup from "./MobileMockup/MobileMockup";
import WatchMockup from "./WatchMockup/WatchMockup";
import './../App.css'

function ProyectSection({ onSelectedProject }) {
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

    return (
        <>
        <section className="flex flex-col items-center w-full degradade relative" id="projects">

            <div className="grid grid-cols-2 lg:flex lg:w-auto w-full gap-6 mb-6 lg:p-0 px-6">
                {Object.keys(projects).map(category => (
                    <button 
                        key={category} 
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-1 text-lg font-medium rounded-lg transition-all duration-300 cursor-pointer border border-gray-100 lg:flex-initial flex-1
                            ${selectedCategory === category 
                                ? "text-white bg-purple-800/30 border border-purple-500 shadow-lg scale-100"
                                : "text-gray-400 hover:bg-purple-800/30 hover:border hover:border-purple-500 hover:text-white hover:scale-100 transition-all"
                            }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="flex justify-center flex-wrap gap-10 w-full relative lg:container p-2 lg:p-4">
                {selectedCategory === "web" && 
                    projects[selectedCategory]?.map(project => (
                        <Card key={project.id} project={project} onSelectProject={() =>  handleSelectProject(project)} />
                    ))
                }

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
