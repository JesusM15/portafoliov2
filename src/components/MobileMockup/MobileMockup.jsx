import React from "react";
import gradientColors from './../../gradients';
import { FaYoutube } from "react-icons/fa6";

function MobileMockup({ project, onSelectProject }) {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-6 p-5 rounded-2xl relative max-w-3xl m-auto lg:max-w-full bg-[#0e0e0e] bg-transparent px-16">
            <div className="relative h-[32rem] bg-gray-900 rounded-2xl overflow-hidden shadow-lg border-[8px] border-black">
                <div className="absolute top-0 left-0 right-0 mx-auto bg-black h-4 w-20 rounded-b-2xl"></div>
                <div className="absolute top-1 left-0 right-0 mx-auto bg-gray-900/90 h-1 w-10 rounded-full"></div>

                <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-b-md" />
            </div>

            <div className="flex flex-col text-left text-white  lg:text-left">
                <div className="flex justify-between items-start">
                    <h3 className="text-3xl font-semibold mb-3">{project.name}</h3>
                    {project.video && (
                        <button
                            onClick={onSelectProject}
                            className=" flex items-center gap-2 cursor-pointer  w-fit px-4 py-2 text-md font-medium text-white border border-purple-500 rounded-full hover:bg-purple-500/10 transition"
                        >
                            <FaYoutube className="text-md" size={24} /> 
                            <p>
                                Ver demo
                            </p>
                        </button>
                    )}
                </div>
                <p className="text-lg text-gray-300 mb-3">{project.description}</p>
                {project?.functionalities && (
                    <>
                        <ul className="flex flex-col gap-2 mb-4 text-md text-white opacity-80">
                            {project?.functionalities?.map((functionality, index) => (
                                <li key={index} className="relative">
                                    <div className="absolute top-1 left-0 md:left-auto md:right-full h-2 w-2 rounded-full bg-purple-400/70"></div>
                                    <p className="pl-4">{functionality}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                

                <div className="flex flex-wrap justify-between lg:justify-start gap-2 mt-3   lg:max-w-3/4">
                    {project?.tags?.map(tag => (
                        <span
                            key={tag.name}
                            className={`cursor-pointer flex lg:flex-none flex-1 text-nowrap items-center  gap-2 px-3 py-1 rounded-full border shadow-md ${gradientColors[tag?.color]}`}
                        >
                            {tag.icon} {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MobileMockup;
