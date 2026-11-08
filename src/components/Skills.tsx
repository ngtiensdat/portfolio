"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Zap, Code2, Server, Award, CheckCircle } from "lucide-react";
import { TiltCard } from "./effects/TiltCard";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Tất cả");

  const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "Sử dụng thường xuyên": Zap,
    "Đã dùng trong dự án thực tế": Code2,
    "Cơ sở hạ tầng & Nền tảng": Server,
    "Kỹ năng mềm & Quy trình": Award,
  };

  const categories = ["Tất cả", ...portfolioData.skills.map((c) => c.title)];

  const filteredCategories =
    activeCategory === "Tất cả"
      ? portfolioData.skills
      : portfolioData.skills.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-20 scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2">
            Năng lực chuyên môn
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Kỹ năng &amp; Hộp công cụ công nghệ
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((catGroup) => {
            const IconComponent = categoryIcons[catGroup.title] || Zap;
            return (
              <TiltCard key={catGroup.title} className="rounded-3xl" maxTilt={6}>
                <div className="p-7 h-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all group">
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {catGroup.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {catGroup.skills.length} công nghệ chủ lực
                      </p>
                    </div>
                  </div>

                  {/* Skills list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {catGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center justify-between hover:border-emerald-500/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 shrink-0 ml-1">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
