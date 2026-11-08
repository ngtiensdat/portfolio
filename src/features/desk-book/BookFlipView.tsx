"use client";

import { useState } from "react";
import { BookId } from "@/types/book";
import { DESK_BOOKS } from "@/constants/books";
import {
  PORTFOLIO_DATA,
  PERSONAL_DATA,
  PROJECTS_DATA,
  EXPERIENCES_DATA,
  CERTIFICATES_DATA,
} from "@/constants/portfolio";
import {
  GraduationCap,
  Award,
  ExternalLink,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Send,
  ChevronLeft,
  ChevronRight,
  BookMarked,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface BookFlipViewProps {
  activeBookId: BookId;
  currentPage: number;
  isFlipping: boolean;
  flipDirection: "next" | "prev";
  maxPages: number;
  onOpenBook: (id: BookId) => void;
  onCloseBook: () => void;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export function BookFlipView({
  activeBookId,
  currentPage,
  isFlipping,
  flipDirection,
  maxPages,
  onOpenBook,
  onCloseBook,
  onNextPage,
  onPrevPage,
}: BookFlipViewProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <div className="w-full max-w-5xl bg-[#fbf7ed] text-slate-900 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.85)] border-4 border-[#332214] p-4 sm:p-8 relative min-h-[580px] flex flex-col justify-between overflow-hidden">
      {/* Book Center Crease Shadow (Hiệu ứng gáy sách) */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-r from-transparent via-amber-950/20 to-transparent pointer-events-none z-20" />

      {/* Ribbon Bookmarks on Top (Tabs to jump between books) */}
      <div className="flex flex-wrap items-center justify-between border-b-2 border-amber-900/15 pb-4 mb-4 gap-2">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {DESK_BOOKS.map((b) => (
            <button
              key={b.id}
              onClick={() => onOpenBook(b.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeBookId === b.id
                  ? "bg-amber-950 text-amber-200 shadow-sm border border-amber-800"
                  : "bg-amber-100 hover:bg-amber-200 text-slate-800 border border-amber-200"
              }`}
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span>{b.volNumber}: {b.title}</span>
            </button>
          ))}
        </div>

        <button
          onClick={onCloseBook}
          className="text-xs font-bold text-amber-900 hover:text-black underline cursor-pointer px-2 py-1"
        >
          ✕ Gấp sách lại
        </button>
      </div>

      {/* Pages Container with 3D Flip Transform Effect */}
      <div
        className={`flex-1 relative transition-all duration-300 ${
          isFlipping
            ? flipDirection === "next"
              ? "opacity-50 scale-[0.985] -rotate-y-3"
              : "opacity-50 scale-[0.985] rotate-y-3"
            : "opacity-100 scale-100 rotate-y-0"
        }`}
      >
        {/* ==================== TẬP I: HỒ SƠ & HỌC VẤN ==================== */}
        {activeBookId === "profile" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Page 1: Bio, Objective & University */}
            <div className="space-y-4 md:pr-6 border-b md:border-b-0 md:border-r border-amber-900/15 pb-4 md:pb-0 font-serif">
              <span className="text-[11px] font-mono font-bold tracking-widest text-amber-900 uppercase">
                Trang 1 • Chân Dung & Học Vấn
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                {PERSONAL_DATA.name}
              </h3>
              <p className="text-xs font-bold text-blue-900 font-sans">
                {PERSONAL_DATA.title} — {PERSONAL_DATA.location.split(",")[0]}
              </p>

              <div className="p-4 rounded-xl bg-amber-100/80 border border-amber-300 text-xs text-slate-800 leading-relaxed italic">
                &quot;{PERSONAL_DATA.aboutText[0]}&quot;
              </div>

              <div className="space-y-3 pt-2 font-sans">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-amber-900 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">Trường Đại học Phenikaa (10/2022 - 12/2026)</p>
                    <p className="text-[11px] text-slate-700">Ngành CNTT - Khoa HTTT - Chuyên ngành Lập trình Web</p>
                    <p className="text-[11px] font-semibold text-blue-800">GPA dự kiến: 3.0 / 4.0 (Xếp loại Khá)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-900 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">Chứng chỉ TOEIC 580 (ETS - 12/2025)</p>
                    <p className="text-[11px] text-slate-700">Trình độ trung cấp, đọc hiểu tài liệu kỹ thuật & API tiếng Anh tốt</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Page 2: Internships & Work Principle */}
            <div className="space-y-4 md:pl-6">
              <span className="text-[11px] font-mono font-bold tracking-widest text-amber-900 uppercase">
                Trang 2 • Hành Trình Thực Tập & OJT
              </span>
              <h4 className="text-lg font-serif font-bold text-slate-900">
                Kinh Nghiệm Thực Chiến Doanh Nghiệp
              </h4>

              <div className="space-y-3 text-xs">
                {EXPERIENCES_DATA.filter((e) => e.type === "work").map((exp) => (
                  <div key={exp.id} className="p-3.5 rounded-xl bg-amber-100/70 border border-amber-300/80 space-y-1.5">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>{exp.company}</span>
                      <span className="text-[10px] text-amber-900">{exp.period}</span>
                    </div>
                    <p className="text-[11px] font-semibold text-blue-900">{exp.role}</p>
                    <p className="text-[11px] text-slate-700 leading-relaxed">
                      {exp.description[0]}
                    </p>
                  </div>
                ))}

                <div className="p-3 rounded-xl bg-stone-100 border border-stone-300 text-[11px] text-slate-800 space-y-1">
                  <p className="font-bold">🎖️ Chứng nhận Internship OneConnect (06/2026):</p>
                  <p>Mô phỏng quy trình Agile-Scrum doanh nghiệp dưới sự dẫn dắt của các Tech Lead.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TẬP II: BÍ KÍP KỸ NĂNG ==================== */}
        {activeBookId === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Page 1: Core Toolset */}
            <div className="space-y-4 md:pr-6 border-b md:border-b-0 md:border-r border-amber-900/15 pb-4 md:pb-0">
              <span className="text-[11px] font-mono font-bold tracking-widest text-amber-900 uppercase">
                Trang 1 • Hộp Công Cụ Cốt Lõi
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Full-Stack Core Stack
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <p className="font-bold text-slate-900 mb-1.5">⚡ Sử dụng thường xuyên:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "TypeScript", level: "Thường xuyên" },
                      { name: "Next.js 15 / React", level: "Thường xuyên" },
                      { name: "NestJS / Node.js", level: "Thường xuyên" },
                      { name: "PostgreSQL / Prisma", level: "Thường xuyên" },
                      { name: "Tailwind CSS", level: "Thường xuyên" },
                      { name: "Git / GitFlow", level: "Thường xuyên" },
                    ].map((s) => (
                      <div key={s.name} className="p-2 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-between">
                        <span className="font-semibold text-slate-900">{s.name}</span>
                        <span className="text-[10px] text-blue-700">{s.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <p className="font-bold text-slate-900 mb-1.5">☕ Java Ecosystem & Enterprise:</p>
                  <div className="p-3 rounded-xl bg-amber-100/80 border border-amber-300 space-y-1 text-[11px]">
                    <p>• <b>Java Spring Boot:</b> Spring Security, JWT Cookie, MapStruct.</p>
                    <p>• <b>Database:</b> Oracle Database, cấu trúc quan hệ chuẩn hóa.</p>
                    <p>• <b>Frontend kết hợp:</b> Angular, Zod Schema validation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Page 2: Advanced Tech (AI, Realtime, Infrastructure) */}
            <div className="space-y-4 md:pl-6">
              <span className="text-[11px] font-mono font-bold tracking-widest text-amber-900 uppercase">
                Trang 2 • Vũ Khí Nâng Cao: AI & Hạ Tầng
              </span>
              <h4 className="text-xl font-serif font-bold text-slate-900">
                AI / RAG & Microservices
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 space-y-1">
                  <p className="font-bold text-purple-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span>Tích hợp Trí Tuệ Nhân Tạo (AI / RAG):</span>
                  </p>
                  <p className="text-[11px] text-slate-700 leading-relaxed">
                    Xây dựng trợ lý AI Chat thông minh với <b>LangChain</b> và <b>OpenAI API</b>. Triển khai đánh chỉ mục ngữ nghĩa (Vector Embeddings) phục vụ tìm kiếm thông minh (Semantic Search).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <p className="font-bold text-emerald-900">⚡ Realtime & Giao tiếp thời gian thực:</p>
                  <p className="text-[11px] text-slate-700 leading-relaxed">
                    Sử dụng <b>WebSockets</b> để đồng bộ hóa phòng thi trực tuyến, live chat và cập nhật trạng thái đơn hàng tức thì.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-100 border border-stone-300 flex flex-wrap gap-2 text-[11px]">
                  <span className="font-bold text-slate-900">Cơ bản:</span>
                  <span className="px-2 py-0.5 bg-white rounded border">Docker</span>
                  <span className="px-2 py-0.5 bg-white rounded border">Apache Kafka</span>
                  <span className="px-2 py-0.5 bg-white rounded border">Redis Caching</span>
                  <span className="px-2 py-0.5 bg-white rounded border">MinIO Storage</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TẬP III: KÝ SỰ DỰ ÁN ==================== */}
        {activeBookId === "projects" && (
          <div>
            {(() => {
              const project = PROJECTS_DATA[currentPage];
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left Page: Mockup & Tags */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-amber-900 uppercase">
                      Ký Sự Dự Án • {currentPage + 1} / {PROJECTS_DATA.length}
                    </span>

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

                  {/* Right Page: Architecture, Story & Live Links */}
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

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
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

        {/* ==================== TẬP IV: SỔ LIÊN LẠC ==================== */}
        {activeBookId === "contact" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
            {/* Left Page: Business Card */}
            <div className="space-y-4 md:pr-6 border-b md:border-b-0 md:border-r border-amber-900/15 pb-4 md:pb-0">
              <span className="text-[11px] font-mono font-bold tracking-widest text-amber-900 uppercase">
                Danh Thiếp Kỹ Sư
              </span>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-900/30 shadow-md space-y-4">
                <div>
                  <h4 className="text-xl font-bold font-serif text-slate-900">{PERSONAL_DATA.name}</h4>
                  <p className="text-xs font-semibold text-blue-900 font-sans">{PERSONAL_DATA.title}</p>
                </div>

                <div className="space-y-2.5 text-xs text-slate-800 font-sans">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/70">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-700" />
                      <span>{PERSONAL_DATA.phone}</span>
                    </span>
                    <button
                      onClick={() => handleCopy(PERSONAL_DATA.phone, "phone")}
                      className="text-[11px] font-bold text-blue-800 hover:underline"
                    >
                      {copiedText === "phone" ? "✓ Đã chép" : "Sao chép"}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-white/70">
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-700" />
                      <span>{PERSONAL_DATA.email}</span>
                    </span>
                    <button
                      onClick={() => handleCopy(PERSONAL_DATA.email, "email")}
                      className="text-[11px] font-bold text-blue-800 hover:underline"
                    >
                      {copiedText === "email" ? "✓ Đã chép" : "Sao chép"}
                    </button>
                  </div>

                  <p className="flex items-center gap-2 p-2">
                    <MapPin className="w-4 h-4 text-purple-700" />
                    <span>{PERSONAL_DATA.location}</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-amber-900/20 flex gap-2">
                  <a
                    href={PERSONAL_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white rounded text-xs font-semibold"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 bg-blue-700 text-white rounded text-xs font-semibold"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Page: Quick Invitation */}
            <div className="space-y-4 md:pl-6 font-serif">
              <span className="text-[11px] font-mono font-bold tracking-widest text-amber-900 uppercase">
                Gửi Lời Mời Phỏng Vấn
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Sẵn sàng nhận việc & Cống hiến!
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                Tôi luôn sẵn sàng đón nhận cơ hội việc làm vị trí <b>Fresher Full-Stack Developer</b> để phát triển sản phẩm thực tế và học hỏi trong môi trường chuyên nghiệp.
              </p>
              <div className="pt-2 font-sans">
                <a
                  href={`mailto:${PERSONAL_DATA.email}?subject=Thư mời phỏng vấn - Fresher Full-Stack Developer&body=Chào Đạt, chúng tôi có cơ hội việc làm phù hợp muốn trao đổi cùng bạn.`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Gửi thư mời phỏng vấn trực tiếp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Book Bottom Controls: Page Number & Prev/Next Flip Buttons */}
      <div className="pt-4 mt-4 border-t border-amber-900/20 flex items-center justify-between text-xs text-amber-950 font-mono">
        {/* Prev Page Button */}
        <button
          disabled={currentPage === 0 || isFlipping}
          onClick={onPrevPage}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-200/80 hover:bg-amber-300 disabled:opacity-30 disabled:cursor-not-allowed font-bold cursor-pointer transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Trang trước</span>
        </button>

        {/* Page indicator */}
        <div className="text-center">
          <span className="font-bold">Trang {currentPage + 1} / {maxPages}</span>
          <p className="text-[10px] text-amber-800">Dùng phím ← → để lật trang</p>
        </div>

        {/* Next Page Button */}
        <button
          disabled={currentPage >= maxPages - 1 || isFlipping}
          onClick={onNextPage}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-200/80 hover:bg-amber-300 disabled:opacity-30 disabled:cursor-not-allowed font-bold cursor-pointer transition-all"
        >
          <span>Trang sau</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

