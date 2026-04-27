import { useTranslation } from "react-i18next";
import { FaTrophy } from "react-icons/fa";

const achievements_es = [
  {
    title: "2° Lugar: Hackathon Honeywell · UABC 2026",
    description:
      "Diseño teórico de un sistema IoT acústico y de visión artificial para la detección exacta de fugas en intercambiadores de calor aeronáuticos. La solución propuesta logró una eficiencia de costos un 50% superior a las alternativas actuales del mercado.",
    tags: ["IoT Design", "Vision Artificial", "Eficiencia de Costos"],
    icon: <FaTrophy className="text-amber-500" />,
  },
];

const achievements_en = [
  {
    title: "2nd Place: Honeywell Hackathon · UABC 2026",
    description:
      "Theoretical design of an acoustic and computer vision IoT system for precise leak detection in aircraft heat exchangers. The proposed solution achieved a 50% cost reduction compared to current market options.",
    tags: ["IoT Design", "Computer Vision", "Cost Efficiency"],
    icon: <FaTrophy className="text-amber-500" />,
  },
];

export default function AchievementsSection() {
  const { t, i18n } = useTranslation();
  const achievements = i18n.language === "es" ? achievements_es : achievements_en;

  return (
    <section
      id="achievements"
      className="py-14 px-4 text-white relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0b0b] via-amber-950/10 to-[#0c0b0b] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            {t("achievements") || "Achievements"}
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl p-6 border border-amber-500/20 bg-gradient-to-br from-amber-950/20 via-[#0e0d0d] to-orange-950/10 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]"
            >
              {/* Top glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{achievement.icon}</div>

                <h3 className="text-base font-bold text-amber-300 leading-snug mb-3">
                  {achievement.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
