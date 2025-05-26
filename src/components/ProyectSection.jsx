import React, { useState } from "react";
import Card from "./Card/Card";
import projects from "../utils/projects.jsx";
import MobileMockup from "./MobileMockup/MobileMockup";
import WatchMockup from "./WatchMockup/WatchMockup";
import './../App.css'

function ProyectSection() {
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

    return (
        <section className="flex flex-col items-center w-full degradade" id="projects">
            {/* Botones de filtro */}
            <div className="flex gap-6 mb-6">
                {Object.keys(projects).map(category => (
                    <button 
                        key={category} 
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 text-lg font-medium rounded-full transition-all duration-300 cursor-pointer
                            ${selectedCategory === category 
                                ? "text-white bg-purple-800/30 border border-purple-500 shadow-lg scale-105"
                                : "text-gray-400 hover:bg-purple-800/30 hover:border hover:border-purple-500 hover:text-white hover:scale-105 transition-all"
                            }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="flex justify-center flex-wrap gap-10 w-full relative container">
                {selectedCategory === "web" && 
                    projects[selectedCategory]?.map(project => (
                        <Card key={project.id} project={project} />
                    ))
                }

                {selectedCategory === "mobile" && (
                    <div className="relative w-full max-w-6xl overflow-hidden ">
                        <div 
                            className="flex transition-transform duration-300"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {projects[selectedCategory]?.map(project => (
                                <div key={project.id} className="w-full flex-shrink-0">
                                    <MobileMockup project={project} />
                                </div>
                            ))}
                        </div>

                        <button 
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
                        >
                            ❮
                        </button>
                        <button 
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
                        >
                            ❯
                        </button>
                    </div>
                )}

                {selectedCategory === "watch" && 
                    projects[selectedCategory]?.map(project => (
                        <WatchMockup key={project.id} project={project} />
                    ))
                }
            </div>
        </section>
    );
}

export default ProyectSection;
