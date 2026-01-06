import React from "react";
import gradientColors from './../../gradients';
import { FaYoutube } from "react-icons/fa6";
import './../../index.css';
import { useTranslation } from "react-i18next";

function MobileMockup({ project, onSelectProject }) {
    const {t} = useTranslation();

    return (
        <>
        
            <div className="flex lg:hidden flex-col text-center lg:text-left text-white w-full lg:flex-1 lg:max-w-2xl px-4 sm:px-0">


            <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center lg:items-start gap-3 sm:gap-4 mb-4 sm:mb-5 w-full">
                <h3 className="text-lg md:text-xl lg:text-4xl font-bold leading-tight text-wrap">
                    {project.name}
                </h3>
                
                {project.video && (
                    <button
                        onClick={onSelectProject}
                        className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium text-white border-2 border-purple-500 rounded-full hover:bg-purple-500/20 hover:border-purple-400 active:scale-95 transition-all shadow-lg shadow-purple-500/20 flex-shrink-0"
                        type="button"
                        aria-label="Ver demo del proyecto"
                    >
                        <FaYoutube className="text-lg sm:text-xl" /> 
                        <span className="hidden sm:inline">Ver demo</span>
                        <span className="sm:hidden">Demo</span>
                    </button>
                )}
            </div>

            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 sm:gap-10 lg:gap-12 p-4 sm:p-6 lg:p-8 rounded-2xl relative w-full max-w-6xl mx-auto bg-transparent">



                <div className="relative flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
                    <div className="relative h-[28rem] sm:h-[32rem] lg:h-[36rem] w-[14rem] sm:w-[16rem] lg:w-[18rem] bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 border-[10px] sm:border-[12px] border-black">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black h-5 sm:h-6 w-24 sm:w-28 rounded-b-3xl z-10"></div>
                        <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 bg-gray-800/80 h-1 sm:h-1.5 w-12 sm:w-14 rounded-full z-20"></div>

                    <div className="w-full h-full overflow-hidden rounded-[1.5rem]">
                            <img 
                                src={project.image} 
                                alt={`${project.name} mobile app screenshot`} 
                                className="w-full h-full object-cover" 
                                loading="lazy" 
                            />
                        </div>

                        {/* Reflection effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-[1.5rem]"></div>
                    </div>

                    <div className="absolute inset-0 -z-10 blur-2xl opacity-30 bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-700 rounded-full lg:scale-95 md:scale-30 scale-10"></div>
                </div>

                <div className="hidden lg:flex flex-col text-center lg:text-left text-white w-full lg:flex-1 lg:max-w-2xl px-4 sm:px-0">


                    <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center lg:items-start gap-3 sm:gap-4 mb-4 sm:mb-5 w-full">
                        <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                            {project.name}
                        </h3>
                        
                        {project.video && (
                            <button
                                onClick={onSelectProject}
                                className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-medium text-white border-2 border-purple-500 rounded-full hover:bg-purple-500/20 hover:border-purple-400 active:scale-95 transition-all shadow-lg shadow-purple-500/20 flex-shrink-0"
                                type="button"
                                aria-label="Ver demo del proyecto"
                            >
                                <FaYoutube className="text-lg sm:text-xl" /> 
                                <span className="hidden sm:inline">{t("watch_demo")}</span>
                                <span className="sm:hidden">Demo</span>
                            </button>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-md text-gray-300 mb-5 sm:mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    {project?.functionalities && project.functionalities.length > 0 && (
                        <div className="mb-6 sm:mb-7 w-full">
                            <h4 className="text-lg sm:text-xl font-semibold mb-3 text-purple-300">
                                {t('features')}
                            </h4>
                            <ul 
                                style={{
                                    maxWidth: 'fit-content'
                                }}
                            className=" grid grid-cols-1 grid-rows-5 lg:justify-normal justify-center m-auto lg:flex  lg:flex-col gap-2.5 sm:gap-3 text-sm sm:text-base text-white/90 text-left max-w-xl mx-auto lg:mx-0">
                                {project.functionalities.map((functionality, index) => (
                                    <li key={index} className="relative pl-5 sm:pl-6 leading-relaxed">
                                        <div className=" hidden lg:absolute top-[0.6rem] left-0 h-2 w-2 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50"></div>
                                        <span>{functionality}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project?.tags && project.tags.length > 0 && (
                        <div className="w-full lg:block hidden">
                            {/* <h4 className="text-base sm:text-lg font-semibold mb-3 text-purple-300">
                                Tecnologías
                            </h4> */}
                            <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center lg:justify-start">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag.name}
                                        className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border text-xs sm:text-sm font-medium transition-all hover:scale-105 ${
                                            gradientColors[tag?.color] || 
                                            'border-gray-500 text-gray-300 bg-gray-600/20 hover:bg-gray-600/40'
                                        }`}
                                    >
                                        <span className="text-sm sm:text-base">{tag.icon}</span>
                                        <span>{tag.name}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>

    );
}

export default MobileMockup;