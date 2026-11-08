"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import Link from "next/link";
import { ExternalLink, Eye, Sparkles, Search, XCircle, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { TiltCard } from "./effects/TiltCard";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["Tất cả", "Full-stack", "Frontend", "Backend"];

  const filteredProjects = portfolioData.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "Tất cả" || project.category === selectedCategory;

    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 sm:py-20 scroll-mt-8 sm:scroll-mt-10 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2">
            Sản phẩm tiêu biểu
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Các dự án đã thực hiện
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Dưới đây là một số dự án thực tế chứng minh năng lực thiết kế, tư duy code và giải quyết vấn đề.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Controls: Category Buttons + Live Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên, công nghệ..."
              className="w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <XCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Empty Search Result */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 px-4 bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-xl mx-auto">
            <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
              Không tìm thấy dự án phù hợp
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Thử tìm kiếm với từ khóa khác như &quot;React&quot;, &quot;Next.js&quot;, hoặc chọn tab &quot;Tất cả&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("Tất cả");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl hover:bg-emerald-100 transition-colors"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}

        {/* Projects Grid with 3D Parallax Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} className="rounded-3xl">
              <div className="group flex flex-col h-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
                {/* Project Image & Overlay - Clickable to Case Study Page */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative h-56 sm:h-64 overflow-hidden bg-slate-100 dark:bg-slate-800 block cursor-pointer"
                  title={`Xem chi tiết kiến trúc & mã nguồn dự án ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Hover Explore Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/80 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Xem kiến trúc &amp; mã nguồn</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </span>
                  </div>

                  {/* Badge Category */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 backdrop-blur-md shadow-sm">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-white backdrop-blur-md shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        <span>Nổi bật</span>
                      </span>
                    )}
                  </div>
                </Link>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-[11px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm shadow-emerald-500/20 transition-all cursor-pointer"
                      >
                        <span>Chi tiết dự án</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => setActiveProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2 py-1.5 transition-colors cursor-pointer"
                        title="Xem nhanh trong modal"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Xem nhanh</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Modal for detail */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}
