// HeroCard.jsx
import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaYoutube,
  FaStar,
  FaRocket,
  FaDesktop,
  FaMobileAlt,
} from "react-icons/fa";
import { IoWatch } from "react-icons/io5";
import colorClasses from "./../../gradients";

const TYPE_META = {
  web: { label: "Web", icon: <FaDesktop /> },
  mobile: { label: "Mobile", icon: <FaMobileAlt /> },
  watch: { label: "Wearable", icon: <IoWatch /> },
  desktop: { label: "Desktop", icon: <FaDesktop /> },
};

function getBullets(project) {
  if (Array.isArray(project.highlights) && project.highlights.length) return project.highlights;
  if (Array.isArray(project.functionalities) && project.functionalities.length) return project.functionalities;
  return [];
}

export default function HeroCard({
  project,
  onSelectProject,
  featured = false,
  production = false,
  type,
  reverse = false,
  maxBullets = 5,
  showActions = true,
}) {
  const bullets = getBullets(project).slice(0, maxBullets);
  const typeInfo = type ? TYPE_META[type] : null;

  return (
    <article
      className={[
        "w-full",
        "rounded-3xl overflow-hidden",
        "border border-white/10",
        "bg-white/[0.035]",
        "backdrop-blur-md",
        "shadow-[0_22px_70px_rgba(0,0,0,0.6)]",
      ].join(" ")}
    >
      <div
        className={[
          "grid grid-cols-1 lg:grid-cols-12",
          reverse ? "lg:[&>*:first-child]:order-2" : "",
        ].join(" ")}
      >
        {/* Media */}
        <div className="relative lg:col-span-7 min-h-[320px] sm:min-h-[380px] lg:min-h-[460px]">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          {/* overlay más pro */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
          <div className="absolute inset-0 ring-1 ring-white/10" />

          {/* Badges top-left */}
          <div className="absolute top-5 left-5 flex gap-2 flex-wrap">
            {featured && (
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-purple-600/90 text-white">
                <FaStar /> Destacado
              </span>
            )}
            {production && (
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-green-600/90 text-white">
                <FaRocket /> En producción
              </span>
            )}
          </div>

          {/* Type badge bottom-left */}
          {typeInfo && (
            <div className="absolute bottom-5 left-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-black/60 border border-white/15 text-white">
                {typeInfo.icon}
                {typeInfo.label}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-7">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {project.name}
            </h3>

            {(project.company || project.date) && (
              <p className="text-sm text-gray-300/80 mt-2">
                {[project.company, project.date].filter(Boolean).join(" • ")}
              </p>
            )}

            {project.description && (
              <p className="text-gray-200/80 mt-4 leading-relaxed">
                {project.description}
              </p>
            )}

            {bullets.length > 0 && (
              <ul className="mt-5 space-y-2 text-sm text-gray-200/90 leading-relaxed">
                {bullets.map((txt, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <ul className="flex flex-wrap gap-2">
              {project?.tags?.map((tag, index) => (
                <li
                  key={index}
                  className={[
                    "flex items-center gap-2 px-3 py-1 rounded-full text-xs border",
                    "transition-all",
                    colorClasses[tag.color] ||
                      "border-gray-500 text-gray-300 bg-gray-600/20 hover:bg-gray-600/30",
                  ].join(" ")}
                >
                  {tag.icon}
                  {tag.name}
                </li>
              ))}
            </ul>

            {showActions && (
              <div className="flex gap-4 text-xl">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                )}

                {project.video && (
                  <button
                    onClick={() => onSelectProject?.(project)}
                    className="text-gray-300 hover:text-white transition"
                    aria-label="Video"
                    type="button"
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
                    aria-label="Live demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
