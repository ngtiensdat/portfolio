"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import {
  BookOpen,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Award,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Bookmark,
  Coffee,
  Lamp
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

type BookType = "profile" | "projects" | "contact" | null;

export default function DeskBookExperience({ onBackToStandard }: { onBackToStandard: () => void }) {
  const [activeBook, setActiveBook] = useState<BookType>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { personal, skills, projects, experiences, certificates } = portfolioData;

  const openBook = (type: BookType) => {
    setActiveBook(type);
    setCurrentPage(0);
  };

  const closeBook = () => {
    setActiveBook(null);
    setCurrentPage(0);
  };

  return (
    <div className="relative min-h-screen bg-[#110e0c] text-amber-50 flex flex-col justify-between overflow-hidden select-none">
      {/* Ambient Lighting & Desk Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(217,119,6,0.18),transparent_65%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-700/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Bar on Desk */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md border-b border-amber-900/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-700/40 border border-amber-600/40 flex items-center justify-center text-amber-400">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className="text-sm font-bold text-amber-200">Góc bàn làm việc</span>
            <span className="hidden sm:inline text-xs text-amber-500/80 ml-2">| Interactive 3D Desk</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {activeBook && (
            <button
              onClick={closeBook}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-900/40 hover:bg-amber-900/70 border border-amber-700/40 text-amber-300 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Gấp sách lại</span>
            </button>
          )}

          <button
            onClick={onBackToStandard}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-sm transition-all cursor-pointer"
          >
            <span>⚡ Chế độ xem nhanh (CV)</span>
          </button>
        </div>
      </header>

      {/* Main Desk Surface */}
      <main className="relative flex-1 flex items-center justify-center p-4 sm:p-8">
        {!activeBook ? (
          /* ==================== THE DESK VIEW (3 CLOSED BOOKS) ==================== */
          <div className="flex flex-col items-center justify-center max-w-5xl w-full text-center">
            {/* Desk Prompt */}
            <div className="mb-10 animate-fade-in">
              <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-amber-950/70 text-amber-400 border border-amber-800/60 inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Không gian trải nghiệm sáng tạo</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-amber-100 tracking-tight mt-3 font-serif">
                Bàn làm việc của Nguyễn Tiến Đạt
              </h2>
              <p className="text-xs sm:text-sm text-amber-400/80 mt-2 max-w-md mx-auto">
                Hãy nhấp vào một cuốn sách bên dưới để lật mở hồ sơ, dự án hoặc thông tin liên lạc.
              </p>
            </div>

            {/* 3 Hardcover Leather Books arranged on the wood table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 w-full max-w-4xl px-4">
              {/* BOOK 1: PROFILE & SKILLS */}
              <div
                onClick={() => openBook("profile")}
                className="group cursor-pointer perspective-1000 transform transition-all duration-300 hover:-translate-y-3"
              >
                <div className="relative h-80 sm:h-96 rounded-2xl p-6 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 border-2 border-blue-600/40 shadow-[0_20px_50px_rgba(30,58,138,0.35)] group-hover:border-blue-400/80 group-hover:shadow-[0_25px_60px_rgba(59,130,246,0.45)] transition-all flex flex-col justify-between overflow-hidden">
                  {/* Book Spine Accent */}
                  <div className="absolute top-0 left-0 bottom-0 w-5 bg-gradient-to-r from-blue-900 to-indigo-950 border-r border-blue-500/30" />
                  
                  {/* Gold Ribbon Bookmark */}
                  <div className="absolute top-0 right-6 w-5 h-16 bg-amber-500 rounded-b-md shadow-md flex items-end justify-center pb-1">
                    <Bookmark className="w-3 h-3 text-amber-950 fill-amber-950" />
                  </div>

                  <div className="pl-4 text-left">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-blue-400 font-bold">
                      Quyển I
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-serif group-hover:text-blue-300 transition-colors">
                      Hồ Sơ & Kỹ Năng
                    </h3>
                    <p className="text-xs text-blue-200/70 mt-2">
                      Tiểu sử, định hướng nghề nghiệp, học vấn và hộp công cụ công nghệ.
                    </p>
                  </div>

                  {/* Badges preview */}
                  <div className="pl-4 space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-blue-900/60 text-blue-300 border border-blue-700/50">Next.js</span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-blue-900/60 text-blue-300 border border-blue-700/50">NestJS</span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-blue-900/60 text-blue-300 border border-blue-700/50">Spring Boot</span>
                    </div>
                    <div className="text-center pt-3 border-t border-blue-800/40 text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center justify-center gap-1">
                      <span>Mở sách xem</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* BOOK 2: PROJECTS EXPEDITION */}
              <div
                onClick={() => openBook("projects")}
                className="group cursor-pointer perspective-1000 transform transition-all duration-300 hover:-translate-y-3"
              >
                <div className="relative h-80 sm:h-96 rounded-2xl p-6 bg-gradient-to-br from-amber-950 via-stone-900 to-yellow-950 border-2 border-amber-600/40 shadow-[0_20px_50px_rgba(180,83,9,0.35)] group-hover:border-amber-400/80 group-hover:shadow-[0_25px_60px_rgba(245,158,11,0.45)] transition-all flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-5 bg-gradient-to-r from-amber-900 to-stone-950 border-r border-amber-500/30" />
                  
                  {/* Green Ribbon */}
                  <div className="absolute top-0 right-6 w-5 h-16 bg-emerald-500 rounded-b-md shadow-md flex items-end justify-center pb-1">
                    <Bookmark className="w-3 h-3 text-emerald-950 fill-emerald-950" />
                  </div>

                  <div className="pl-4 text-left">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-amber-400 font-bold">
                      Quyển II
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-serif group-hover:text-amber-300 transition-colors">
                      Ký Sự Dự Án
                    </h3>
                    <p className="text-xs text-amber-200/70 mt-2">
                      3 Dự án thực chiến: Food AI, Payment Hub, Learn English (kèm Demo).
                    </p>
                  </div>

                  <div className="pl-4 space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-amber-900/60 text-amber-300 border border-amber-700/50">AI / RAG</span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-amber-900/60 text-amber-300 border border-amber-700/50">WebSocket</span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-amber-900/60 text-amber-300 border border-amber-700/50">Kafka & MinIO</span>
                    </div>
                    <div className="text-center pt-3 border-t border-amber-800/40 text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center justify-center gap-1">
                      <span>Lật trang ký sự</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* BOOK 3: CONTACT NOTEBOOK */}
              <div
                onClick={() => openBook("contact")}
                className="group cursor-pointer perspective-1000 transform transition-all duration-300 hover:-translate-y-3"
              >
                <div className="relative h-80 sm:h-96 rounded-2xl p-6 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 border-2 border-emerald-600/40 shadow-[0_20px_50px_rgba(6,78,59,0.35)] group-hover:border-emerald-400/80 group-hover:shadow-[0_25px_60px_rgba(16,185,129,0.45)] transition-all flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-5 bg-gradient-to-r from-emerald-900 to-slate-950 border-r border-emerald-500/30" />
                  
                  {/* Purple Ribbon */}
                  <div className="absolute top-0 right-6 w-5 h-16 bg-purple-500 rounded-b-md shadow-md flex items-end justify-center pb-1">
                    <Bookmark className="w-3 h-3 text-purple-950 fill-purple-950" />
                  </div>

                  <div className="pl-4 text-left">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400 font-bold">
                      Quyển III
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-serif group-hover:text-emerald-300 transition-colors">
                      Sổ Liên Lạc
                    </h3>
                    <p className="text-xs text-emerald-200/70 mt-2">
                      Danh thiếp, số điện thoại, email và gửi tin nhắn phỏng vấn trực tiếp.
                    </p>
                  </div>

                  <div className="pl-4 space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">0337562201</span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">Hà Nội</span>
                    </div>
                    <div className="text-center pt-3 border-t border-emerald-800/40 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 flex items-center justify-center gap-1">
                      <span>Mở sổ kết nối</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Desk props icons */}
            <div className="mt-12 flex items-center justify-center gap-8 text-amber-700/40 text-xs">
              <span className="flex items-center gap-1.5">
                <Coffee className="w-4 h-4" />
                <span>Cà phê lập trình</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Lamp className="w-4 h-4" />
                <span>Ánh sáng bàn làm việc</span>
              </span>
            </div>
          </div>
        ) : (
          /* ==================== THE OPEN FLIPBOOK VIEW ==================== */
          <div className="w-full max-w-5xl bg-[#f7f2e7] text-slate-900 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] border-4 border-[#3c2a1a] p-4 sm:p-8 relative min-h-[560px] flex flex-col justify-between overflow-hidden">
            {/* Center Book Crease Shadow */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 bg-gradient-to-r from-transparent via-amber-950/20 to-transparent pointer-events-none z-10" />

            {/* Ribbon Tabs for Fast Navigation between Books */}
            <div className="flex items-center justify-between border-b-2 border-amber-900/20 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openBook("profile")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeBook === "profile"
                      ? "bg-blue-900 text-white shadow-sm"
                      : "bg-amber-200/60 hover:bg-amber-200 text-slate-800"
                  }`}
                >
                  📘 Quyển I: Hồ Sơ
                </button>
                <button
                  onClick={() => openBook("projects")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeBook === "projects"
                      ? "bg-amber-900 text-white shadow-sm"
                      : "bg-amber-200/60 hover:bg-amber-200 text-slate-800"
                  }`}
                >
                  📙 Quyển II: Dự Án
                </button>
                <button
                  onClick={() => openBook("contact")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeBook === "contact"
                      ? "bg-emerald-900 text-white shadow-sm"
                      : "bg-amber-200/60 hover:bg-amber-200 text-slate-800"
                  }`}
                >
                  📗 Quyển III: Liên Hệ
                </button>
              </div>

              <button
                onClick={closeBook}
                className="text-xs font-semibold text-amber-900 hover:text-black underline cursor-pointer"
              >
                ✕ Đóng sách
              </button>
            </div>

            {/* Book Pages Content */}
            <div className="flex-1">
              {/* BOOK 1: PROFILE CONTENT */}
              {activeBook === "profile" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                  {/* Left Page: Intro & Education */}
                  <div className="space-y-4 md:pr-6 border-b md:border-b-0 md:border-r border-amber-900/15 pb-4 md:pb-0">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-amber-800 uppercase">
                      Chương 1: Chân Dung & Học Vấn
                    </span>
                    <h3 className="text-2xl font-serif font-extrabold text-slate-900">
                      {personal.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-800">
                      {personal.title} — {personal.location.split(",")[0]}
                    </p>

                    <div className="p-4 rounded-xl bg-amber-100/70 border border-amber-300/60 text-xs text-slate-800 leading-relaxed font-serif italic">
                      &quot;{personal.aboutText[0]}&quot;
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-slate-900">Đại học Phenikaa (2022 - 2026)</p>
                          <p className="text-[11px] text-slate-600">Chuyên ngành Lập trình Web — GPA dự kiến: 3.0 / 4.0</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-slate-900">Chứng chỉ TOEIC 580 (ETS)</p>
                          <p className="text-[11px] text-slate-600">Đọc hiểu tài liệu kỹ thuật & API tiếng Anh tốt</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Page: Tech Spellbook Matrix */}
                  <div className="space-y-4 md:pl-6">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-amber-800 uppercase">
                      Chương 2: Bí Kíp Công Nghệ (Tech Stack)
                    </span>
                    <h4 className="text-lg font-serif font-bold text-slate-900">
                      Vũ Khí Lập Trình Chủ Lực
                    </h4>

                    <div className="space-y-3 text-xs">
                      <div>
                        <p className="font-bold text-slate-800 mb-1">⚡ Sử dụng thường xuyên:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {["TypeScript", "Next.js", "NestJS", "React", "PostgreSQL", "Prisma ORM", "GitFlow"].map((t) => (
                            <span key={t} className="px-2 py-0.5 bg-blue-100 text-blue-900 rounded font-medium border border-blue-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-bold text-slate-800 mb-1">🛡️ Đã dùng trong dự án thực tế:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {["Java Spring Boot", "Spring Security", "Angular", "WebSocket", "LangChain (RAG)", "Kafka", "MinIO"].map((t) => (
                            <span key={t} className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-medium border border-amber-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-bold text-slate-800 mb-1">💼 Kinh nghiệm thực tập:</p>
                        <div className="p-2.5 rounded-lg bg-stone-100 text-[11px] space-y-1">
                          <p>• <b>Lạc Long Quân Software:</b> Angular, Spring Boot, Oracle DB.</p>
                          <p>• <b>Rikkei Education:</b> Next.js, NestJS, Prisma, OJT OneConnect.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* BOOK 2: PROJECTS EXPEDITION */}
              {activeBook === "projects" && (
                <div>
                  {/* Page Navigation for Projects */}
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-amber-900/15">
                    <span className="text-xs font-mono font-bold text-amber-900">
                      Dự án {currentPage + 1} / {projects.length}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        disabled={currentPage === 0}
                        onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                        className="px-2.5 py-1 rounded bg-amber-200 hover:bg-amber-300 disabled:opacity-40 text-xs font-bold cursor-pointer"
                      >
                        ◀ Trang trước
                      </button>
                      <button
                        disabled={currentPage === projects.length - 1}
                        onClick={() => setCurrentPage((p) => Math.min(projects.length - 1, p + 1))}
                        className="px-2.5 py-1 rounded bg-amber-200 hover:bg-amber-300 disabled:opacity-40 text-xs font-bold cursor-pointer"
                      >
                        Trang sau ▶
                      </button>
                    </div>
                  </div>

                  {/* Project Spread */}
                  {(() => {
                    const project = projects[currentPage];
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left Page: Image & Details */}
                        <div className="space-y-3">
                          <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-900/30 shadow-md">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-900 border border-amber-200">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right Page: Problem, Features & Links */}
                        <div className="space-y-3 font-serif">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                              {project.category} Showcase
                            </span>
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:underline"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>Xem Live Demo</span>
                              </a>
                            )}
                          </div>

                          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-serif">
                            {project.title}
                          </h3>

                          <p className="text-xs text-slate-700 leading-relaxed">
                            {project.longDescription}
                          </p>

                          <div className="space-y-1.5 pt-2 font-sans">
                            <p className="text-xs font-bold text-slate-900">Điểm nổi bật kỹ thuật:</p>
                            {project.features.slice(0, 3).map((f, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* BOOK 3: CONTACT NOTEBOOK */}
              {activeBook === "contact" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
                  {/* Left Page: Business Card */}
                  <div className="space-y-4 md:pr-6 border-b md:border-b-0 md:border-r border-amber-900/15 pb-4 md:pb-0">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-amber-800 uppercase">
                      Danh Thiếp Kỹ Sư
                    </span>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200/80 border-2 border-amber-900/30 shadow-md space-y-4">
                      <div>
                        <h4 className="text-xl font-bold font-serif text-slate-900">{personal.name}</h4>
                        <p className="text-xs font-semibold text-blue-800">{personal.title}</p>
                      </div>

                      <div className="space-y-2 text-xs text-slate-800 font-sans">
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-emerald-700" />
                          <span>{personal.phone}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-blue-700" />
                          <span>{personal.email}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-700" />
                          <span>{personal.location}</span>
                        </p>
                      </div>

                      <div className="pt-3 border-t border-amber-900/20 flex gap-2">
                        <a
                          href={personal.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-slate-900 text-white rounded text-xs font-semibold"
                        >
                          GitHub
                        </a>
                        <a
                          href={personal.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-blue-700 text-white rounded text-xs font-semibold"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Page: Quick Invitation Note */}
                  <div className="space-y-4 md:pl-6 font-serif">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-amber-800 uppercase">
                      Lời Nhắn Gửi Nhà Tuyển Dụng
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Sẵn sàng đồng hành cùng đội ngũ!
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Tôi đang tìm kiếm cơ hội gia nhập vị trí <b>Fresher Full-Stack Developer</b> để cống hiến năng lực, phát triển các sản phẩm phần mềm thực tế và học hỏi từ các anh chị Senior/Tech Lead.
                    </p>
                    <div className="pt-2 font-sans">
                      <a
                        href={`mailto:${personal.email}?subject=Thư mời phỏng vấn - Fresher Full-Stack Developer&body=Chào Đạt, chúng tôi có cơ hội việc làm phù hợp muốn trao đổi cùng bạn.`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-md transition-all cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Gửi thư mời phỏng vấn ngay</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Book Footer */}
            <div className="pt-4 mt-4 border-t border-amber-900/20 flex items-center justify-between text-[11px] text-amber-900 font-mono">
              <span>📖 Portfolio Book Edition</span>
              <span>Nguyễn Tiến Đạt • 2026</span>
            </div>
          </div>
        )}
      </main>

      {/* Desk Bottom Bar */}
      <footer className="relative z-20 px-6 py-3 bg-black/50 text-center text-[11px] text-amber-500/70 border-t border-amber-900/20">
        Mẹo: Bạn có thể chuyển đổi bất kỳ lúc nào giữa <b>Bàn làm việc 3D</b> và <b>Chế độ xem nhanh (CV)</b> bằng nút ở góc trên bên phải.
      </footer>
    </div>
  );
}

