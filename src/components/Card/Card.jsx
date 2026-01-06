import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import colorClasses from './../../gradients';

export default function Card({ project, onSelectProject }) {
  return (
    <article 
      className="h-full w-full rounded-2xl shadow-md bg-[#0e0e0e] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/20 border border-white/5 flex flex-col"
      key={project.id}
    >
      {/* Imagen con overlay de iconos */}
      <div className="relative group">
        <img
          src={project.image}
          className="h-48 sm:h-56 md:h-64 w-full object-cover"
          alt={`${project.name} proyecto por JesusM15`}
          loading='lazy'
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Overlay con iconos de acción */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md"
              aria-label="Ver código en GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="text-2xl" />
            </a>
          )}

          {project.video && (
            <button
              className="text-white p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md cursor-pointer"
              onClick={onSelectProject}
              aria-label="Ver video del proyecto"
              type="button"
            >
              <FaYoutube className="text-2xl" />
            </button>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-3 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-md"
              aria-label="Ver proyecto en vivo"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-2xl" />
            </a>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h6 className="font-semibold text-xl sm:text-2xl text-white line-clamp-1 mb-2">
          {project.name}
        </h6>
        
        <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags de tecnologías */}
        <ul className="flex gap-2 flex-wrap" >
          {project?.tags?.slice(0, 4).map((tag, index) => (
            <li
              key={index}
              className={`flex text-xs items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-200 border ${
                colorClasses[tag.color] || 
                "border-gray-500 text-gray-300 bg-gray-600/20 hover:bg-gray-600/40"
              }`}
            >
              <span className="text-sm">{tag.icon}</span>
              <span className="hidden sm:inline">{tag.name}</span>
            </li>
          ))}
          
          {project?.tags?.length > 4 && (
            <li className="flex text-xs items-center px-2.5 py-1 rounded-full border border-gray-600 text-gray-400 bg-gray-700/20">
              +{project.tags.length - 4}
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}