import React from "react";
import  gradientColors  from './../../gradients';

function WatchMockup({ project }) {
    return (
        <div className="flex items-center gap-6 p-5 rounded-2xl shadow-xl bg-gray-900">
            <div className="relative h-48 w-48 bg-black rounded-full overflow-hidden shadow-lg border-8 border-black">
                <img src={project.image} alt={project.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col text-left text-white">
                <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
                <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project?.tags?.map(tag => (
                        <span 
                            key={tag.name} 
                            className={`flex items-center gap-2 px-3 py-1 rounded-full border shadow-md ${gradientColors[tag.color]}`}
                        >
                            {tag.icon} {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WatchMockup;
