import React from "react";
import gradientColors from "./../../gradients";

function WatchMockup({ project }) {
  return (
    <div className="flex md:flex-row flex-col items-center gap-6 p-5 rounded-2xl shadow-xl max-w-3xl 
                    bg-black/10  backdrop-blur-3xl border border-white/20">
      <div className="relative h-52 w-auto md:w-xl  rounded-full overflow-hidden shadow-lg border-4 border-gray-900">
        <img src={project.image} alt={project.name} className="w-48 h-48 object-cover" />
      </div>
      <div className="flex flex-col text-center md:items-baseline items-center md:text-left text-white">
        <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
        <p className="text-sm text-gray-300 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project?.tags?.map((tag, i) => (
            <span
              key={i}
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
