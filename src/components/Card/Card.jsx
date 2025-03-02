import React from 'react';

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Iconos para GitHub y link externo

import  colorClasses  from './../../gradients';


export default function Card({ project }) {
  return (
    <article className="h-auto w-full max-w-md rounded-2xl shadow-xl bg-[#1d1d1d] overflow-hidden transition-transform duration-300 hover:scale-100" key={project.id}>
      <div className="relative">
        {/* Imagen con overlay al pasar el mouse */}
        
        <img
          src={project.image}
          className="h-64 w-full object-cover rounded-t-2xl"
          alt={`${project.name} hecho por JesusM15`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-80">
          <div className="flex gap-4">
            {/* GitHub link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white opacity-75 text-3xl hover:text-white hover:opacity-100 hover:drop-shadow-md transition-all shadow-white"
              >
                <FaGithub />
              </a>
            )}

            {/* Link a la web */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white opacity-75 text-3xl hover:text-white hover:opacity-100 hover:drop-shadow-md transition-all shadow-white"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-3">
        <h6 className="font-semibold text-2xl text-white">{project.name}</h6>
        <p className="text-sm text-gray-400 mt-2 line-clamp-3">{project.description}</p>

        <ul className="flex gap-3 mt-4 flex-wrap justify-start" >
          {project?.tags?.map((tag, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-all duration-300 border ${colorClasses[tag.color] || "border-gray-500 text-gray-300 bg-gray-600/20 hover:bg-gray-600/40"}`}              >
              {tag.icon}
              {tag.name}
            </li>
          ))}
        </ul>

      </div>
    </article>
  );
}
