import React from "react";
import gradientColors from './../../gradients';

function MobileMockup({ project }) {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-6 p-5 rounded-2xl relative max-w-3xl m-auto lg:max-w-full bg-[#1d1d1d] bg-transparent">
            {/* Teléfono arriba en móviles, a la izquierda en escritorio */}
            <div className="relative h-[32rem] bg-black rounded-2xl overflow-hidden shadow-lg border-[8px] border-black">
                <div className="absolute top-0 left-0 right-0 mx-auto bg-black h-4 w-20 rounded-b-2xl"></div>
                <div className="absolute top-1 left-0 right-0 mx-auto bg-gray-900/90 h-1 w-10 rounded-full"></div>

                <img src={project.image} alt={project.name} className="w-full h-full object-contain rounded-b-md" />
            </div>

            {/* Contenido abajo en móviles, a la derecha en escritorio */}
            <div className="flex flex-col text-left text-white  lg:text-left">
                <h3 className="text-3xl font-semibold mb-3">{project.name}</h3>
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
