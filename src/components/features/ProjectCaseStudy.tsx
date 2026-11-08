"use client";

import { useState } from "react";
import Link from "next/link";
import { Project } from "@/data/portfolioData";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code2,
  Layers,
  Cpu,
  Database,
  CheckCircle2,
  FolderTree,
  Terminal,
  Copy,
  Check,
  Maximize2,
  X,
  Sparkles,
  Share2,
  Calendar,
  User,
  Building,
  Users2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCaseStudyProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}

export default function ProjectCaseStudy({
  project,
  prevProject,
  nextProject,
}: ProjectCaseStudyProps) {
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>("Tất cả");

  const galleryItems = project.gallery || [
    { src: project.image, caption: project.title, category: "Tổng quan" },
  ];

  const galleryCategories = [
    "Tất cả",
    ...Array.from(
      new Set(galleryItems.map((g) => g.category).filter(Boolean) as string[])
    ),
  ];

  const filteredGallery = galleryItems.filter(
    (item) =>
      selectedGalleryCategory === "Tất cả" ||
      item.category === selectedGalleryCategory
  );

  const activeImage =
    filteredGallery[selectedGalleryIdx] || filteredGallery[0] || galleryItems[0];

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const handleShareLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <article className="pt-24 pb-20">
      {/* Top Breadcrumb & Back Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <Link
              href="/"
              className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              Trang chủ
            </Link>
            <span>/</span>
            <Link
              href="/#projects"
              className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              Dự án
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </nav>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh mục</span>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden">
          {/* Background Decorative Gradients */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                {project.category}
              </span>
              {project.status && (
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {project.status}
                </span>
              )}
              {project.featured && (
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Dự án nổi bật
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mt-4 text-base sm:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-4xl leading-relaxed">
                {project.subtitle}
              </p>
            )}

            {/* Metadata Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.role && (
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Vai trò
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {project.role}
                    </p>
                  </div>
                </div>
              )}

              {project.timeline && (
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Thời gian
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {project.timeline}
                    </p>
                  </div>
                </div>
              )}

              {project.organization && (
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Đơn vị / Tổ chức
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {project.organization}
                    </p>
                  </div>
                </div>
              )}

              {project.teamSize && (
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Quy mô nhóm
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {project.teamSize}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-500/25 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Trải nghiệm Live Demo</span>
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Mã nguồn GitHub</span>
              </a>
              <button
                onClick={handleShareLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition-colors cursor-pointer"
                title="Sao chép liên kết dự án"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Đã chép link!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Chia sẻ</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Key Metrics Strip */}
      {project.stats && project.stats.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm"
              >
                <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1">
                  {stat.label}
                </p>
                {stat.hint && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {stat.hint}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Image & Diagram Interactive Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Thư viện hình ảnh thực tế & Sơ đồ kỹ thuật
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Giao diện, Kiến trúc & Thuật toán
              </h2>
            </div>

            {/* Filter pills */}
            {galleryCategories.length > 2 && (
              <div className="flex flex-wrap gap-1.5">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedGalleryCategory(cat);
                      setSelectedGalleryIdx(0);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedGalleryCategory === cat
                        ? "bg-emerald-500 text-slate-950 font-bold shadow-sm"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Main Preview with Lightbox Zoom Button */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[16/9] border border-slate-200 dark:border-slate-800 group">
            <img
              src={activeImage.src}
              alt={activeImage.caption}
              className="w-full h-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
              onClick={() => setIsLightboxOpen(true)}
            />

            {/* Overlay Caption Bar */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-semibold text-emerald-400">
                  {activeImage.category || "Minh họa"}
                </p>
                <p className="text-xs sm:text-sm font-medium mt-0.5 line-clamp-1">
                  {activeImage.caption}
                </p>
              </div>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-xs font-semibold transition-colors cursor-pointer shrink-0"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Phóng to sơ đồ</span>
              </button>
            </div>
          </div>

          {/* Thumbnails Strip */}
          {filteredGallery.length > 1 && (
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {filteredGallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGalleryIdx(idx)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage.src === img.src
                      ? "border-emerald-500 ring-2 ring-emerald-500/30 scale-102"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover bg-slate-900"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="flex items-center justify-between text-white mb-4 z-10">
            <p className="text-sm sm:text-base font-semibold truncate max-w-xl">
              {activeImage.caption}
            </p>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="flex-1 flex items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.caption}
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Project Overview & Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detailed Overview */}
          <div className="lg:col-span-2 rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-emerald-600 dark:text-emerald-400">
                <Layers className="w-5 h-5" />
                <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Tổng quan nghiệp vụ & Bối cảnh
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>

              {project.architectureOverview && (
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-teal-400" />
                    <span>Mô hình kiến trúc tổng thể</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.architectureOverview}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Codebase đã kiểm thử & tối ưu hiệu năng
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                Sẵn sàng mở rộng kiến trúc
              </span>
            </div>
          </div>

          {/* Key Deliverables & Features */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Chức năng cốt lõi</span>
            </h2>
            <div className="space-y-3.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-800">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Structure & Architecture Explorer */}
      {project.codeStructure && project.codeStructure.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <FolderTree className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Cấu trúc thư mục & Module mã nguồn
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Bản đồ kiến trúc thư mục thực tế
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">
              Mã nguồn được tổ chức sạch sẽ theo từng module chuyên biệt, tuân thủ nguyên tắc Single Responsibility và dễ dàng mở rộng.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {project.codeStructure.map((module, mIdx) => (
                <div
                  key={mIdx}
                  className="rounded-2xl p-5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <span>{module.title}</span>
                      </h3>
                      {module.badge && (
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                          {module.badge}
                        </span>
                      )}
                    </div>
                    <code className="text-xs font-mono text-teal-600 dark:text-teal-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 inline-block mb-3">
                      {module.path}
                    </code>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                      {module.description}
                    </p>

                    {module.children && module.children.length > 0 && (
                      <div className="space-y-2 pt-3 border-t border-slate-200/70 dark:border-slate-800/70">
                        {module.children.map((child, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-2 text-xs font-mono"
                          >
                            <span className="text-slate-400 dark:text-slate-500 select-none">
                              ├──
                            </span>
                            <span className="text-slate-900 dark:text-slate-200 font-semibold shrink-0">
                              {child.path}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 font-sans text-[11px] truncate">
                              : {child.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Deep Dives (Problems & Solutions with Code Snippets) */}
      {project.deepDives && project.deepDives.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Giải pháp kỹ thuật chuyên sâu
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Bài toán kỹ thuật & Cách giải quyết
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
              Các thách thức thực tế phát sinh trong quá trình thiết kế hệ thống và giải pháp code đã áp dụng.
            </p>
          </div>

          <div className="space-y-8">
            {project.deepDives.map((deepDive, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-md"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-sm shadow-md shadow-emerald-500/30">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {deepDive.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Challenge */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
                      ⚠️ Thách thức kỹ thuật đặt ra
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {deepDive.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
                      💡 Giải pháp kiến trúc & Triển khai
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {deepDive.solution}
                    </p>
                  </div>
                </div>

                {/* Code Snippet Window */}
                {deepDive.codeSnippet && (
                  <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl mb-6">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-slate-400 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <span className="font-mono text-slate-300 ml-2">
                          {deepDive.codeSnippet.filename}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          handleCopyCode(deepDive.codeSnippet!.code, idx)
                        }
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                      >
                        {copiedCodeIdx === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-medium">Đã chép!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Sao chép</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">
                      <code>{deepDive.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}

                {/* Key Takeaways */}
                {deepDive.keyTakeaways && deepDive.keyTakeaways.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Kết quả đạt được
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {deepDive.keyTakeaways.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tech Stack Matrix */}
      {project.techStackByCategory && project.techStackByCategory.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2.5">
              <Code2 className="w-5 h-5 text-emerald-400" />
              <span>Hệ sinh thái công nghệ sử dụng</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              Toàn bộ các thư viện, framework và công nghệ được tích hợp trong dự án này.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.techStackByCategory.map((cat, cIdx) => (
                <div
                  key={cIdx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/70"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                    {cat.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Navigation (Previous / Next) */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 transition-all shadow-sm flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-emerald-500 group-hover:text-slate-950 font-bold transition-colors shrink-0">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Dự án trước
              </p>
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                {prevProject.title}
              </p>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 transition-all shadow-sm flex items-center justify-between text-right gap-4"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Dự án kế tiếp
              </p>
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                {nextProject.title}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-emerald-500 group-hover:text-slate-950 font-bold transition-colors shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </footer>
    </article>
  );
}

