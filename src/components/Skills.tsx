"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Layout, Server, Database, Wrench, CheckCircle } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Tất cả");

  const categoryIcons: Record<string, any> = {
    "Frontend Development": Layout,
    "Backend Development": Server,
    "Database & Cloud": Database,
    "Tools & Quy trình": Wrench,
  };

  const categories = ["Tất cả", ...portfolioData.skills.map((c) => c.title)];

  const filteredCategories =
    activeCategory === "Tất cả"
      ? portfolioData.skills
      : portfolioData.skills.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Năng lực chuyên môn
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Kỹ năng & Công nghệ sử dụng
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((catGroup) => {
            const IconComponent = categoryIcons[catGroup.title] || Layout;
            return (
              <div
                key={catGroup.title}
                className="p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-blue-500/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {catGroup.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {catGroup.skills.length} công nghệ
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex items-center justify-between hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

