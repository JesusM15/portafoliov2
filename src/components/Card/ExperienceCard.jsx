import React from "react";


export default function ExperienceCard({ item, align = "left" }) {
  const alignClass =
     "md:text-left md:items-start";

  // Si no hay highlights, no renderizamos la card (o puedes mostrar un placeholder)
  if (!Array.isArray(item.highlights) || item.highlights.length === 0) {
    return null;
  }

  return (
    <article
      className={[
        "relative",
        "rounded-2xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur",
        "shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
        "p-5 sm:p-6",
        "transition",
        "hover:bg-white/7 hover:border-white/15",
        "focus-within:border-white/20",
        "flex flex-col gap-3",
        alignClass,
      ].join(" ")}
    >
      <header className="w-full">
        <h3 className="text-lg sm:text-xl font-semibold text-purple-200 leading-tight">
          {item.title}
        </h3>

        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-300/80">
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            {item.company}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            {item.date}
          </span>
        </div>
      </header>

      <ul className="w-full mt-1 space-y-1.5 text-sm text-gray-200/85 leading-relaxed">
        {item.highlights.slice(0, 5).map((h, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gradient-to-b from-purple-500 via-purple-600 to-purple-800 shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
