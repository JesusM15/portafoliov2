import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaYoutube,
  FaStar,
  FaRocket,
  FaDesktop,
  FaMobileAlt,
  FaWatch
} from "react-icons/fa";

import colorClasses from "./../../gradients";

const TYPE_ICONS = {
  web: <FaDesktop />,
  mobile: <FaMobileAlt />,
  watch: <FaWatch />,
  desktop: <FaDesktop />,
};

export default function HeroCard({
  project,
  featured = false,
  production = false,
  type, // "web" | "mobile" | "watch" | "desktop"
  reverse = false, // para alternar layout izquierda/derecha
  onSelectProject,
}) {
  return (
    <article
      className={[
        "w-full",
        "rounded-3xl",
        "overflow-hidden",
        "border border-white/10",
        "bg-gradient-to-br from-[#0e0e0e] to-[#111827]",
        "shadow-[0_20px_60px_rgba(0,0,0,0.6)]",
        "backdrop-blur",
        "transition-all duration-300",
      ].join(" ")}
    >
      <div
        className={[
          "grid grid-cols-1 lg:grid-cols-2",
          reverse ? "lg:flex-row-reverse" : "",
        ].join(" ")}
      >
        {/* IMAGE */}
        <div className="relative h-72 lg:h-full">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
            {featured && (
              <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-purple-600/90 text-white shadow">
                <FaStar />
                Destacado
              </span>
            )}

            {production && (
              <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-green-600/90 text-white shadow">
                <FaRocket />
                En producción
              </span>
            )}

            {type && (
              <span className="flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-black/70 border border-white/20 text-white">
                {TYPE_ICONS[type]}
                {type.toUpperCase()}
              </span>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 lg:p-10 flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              {project.name}
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              {project.company} • {project.date}
            </p>

            <p className="text-gray-300 mt-4 max-w-xl">
              {project.description}
            </p>

            {/* Highlights */}
            {project.highlights && (
              <ul className="mt-5 space-y-2 text-sm text-gray-200/90">
                {project.highlights.slice(0, 5).map((h, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Tech tags */}
            <ul className="flex flex-wrap gap-2">
              {project?.tags?.map((tag, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs border transition-all
                    ${colorClasses[tag.color] ||
                      "border-gray-500 text-gray-300 bg-gray-600/20"}
                  `}
                >
                  {tag.icon}
                  {tag.name}
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex gap-4 text-xl">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  <FaGithub />
                </a>
              )}

              {project.video && (
                <button
                  onClick={onSelectProject}
                  className="text-gray-300 hover:text-white transition"
                >
                  <FaYoutube />
                </button>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
