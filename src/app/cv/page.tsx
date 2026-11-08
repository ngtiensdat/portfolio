"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { Printer, ArrowLeft, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  const { personal, experiences, projects, certificates } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 py-8 px-4 sm:px-6 print:bg-white print:p-0 relative">
      {/* Floating Always-Visible Back Button on the Left */}
      <Link
        href="/"
        aria-label="Quay lại trang chủ"
        className="fixed bottom-6 left-6 z-40 print:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-300 dark:border-emerald-500/40 shadow-xl shadow-slate-900/10 dark:shadow-emerald-950/40 hover:border-emerald-500 hover:scale-105 active:scale-95 transition-all group cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:-translate-x-1 transition-transform" />
        <span>Quay lại trang chủ</span>
      </Link>

      {/* Top Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại trang chủ</span>
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-500/25 transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>In / Xuất file PDF (Ctrl + P)</span>
        </button>
      </div>

      {/* Main CV Document (A4 Printable Layout) */}
      <article className="max-w-4xl mx-auto bg-white text-slate-900 shadow-xl rounded-2xl p-8 sm:p-12 print:shadow-none print:rounded-none print:p-6 print:max-w-none">
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* Circular Portrait Photo on the left */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-emerald-600 shadow-md shrink-0 bg-slate-100">
                <img
                  src="/portrait.jpg"
                  alt={`Chân dung ${personal.name}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {personal.name}
                </h1>
                <p className="text-base sm:text-lg font-bold text-emerald-700 mt-1">
                  {personal.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Ngày sinh: {personal.birthDate}
                </p>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-700">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span className="font-semibold">{personal.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span className="font-semibold">{personal.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{personal.location}</span>
              </p>
              <p className="flex items-center gap-2 text-[11px]">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold hover:underline">
                  github.com/ngtiensdat
                </a>
                <span>•</span>
                <a href={personal.facebook} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold hover:underline">
                  facebook.com/ngtiensdat
                </a>
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-5 text-xs leading-relaxed text-slate-700 space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <p className="font-bold text-slate-900 uppercase text-[11px] tracking-wider mb-1">
              Tóm tắt mục tiêu & Năng lực
            </p>
            <p>{personal.aboutText[0]}</p>
            <p>{personal.aboutText[1]}</p>
          </div>
        </header>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3">
            Kỹ Năng Chuyên Môn
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <p className="font-bold text-slate-800">• Sử dụng thường xuyên:</p>
              <p className="text-slate-700 pl-3">
                TypeScript, JavaScript, Next.js 15, NestJS, React, Node.js, PostgreSQL, Prisma ORM, Tailwind CSS, Git/GitFlow.
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-800">• Đã dùng trong dự án thực tế:</p>
              <p className="text-slate-700 pl-3">
                Java Spring Boot (Spring Security, JWT, MapStruct), Angular, Oracle Database, WebSocket, LangChain (RAG), OpenAI API, Zustand, Zod Schema, MinIO.
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-800">• Nền tảng & Cơ sở hạ tầng:</p>
              <p className="text-slate-700 pl-3">Docker, Redis Caching, Apache Kafka, Vercel.</p>
            </div>
            <div>
              <p className="font-bold text-slate-800">• Kỹ năng mềm & Quy trình:</p>
              <p className="text-slate-700 pl-3">Làm việc nhóm (Agile/Scrum, code review), tự học công nghệ mới, thuyết trình.</p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3">
            Kinh Nghiệm Thực Tập & Dự Án Doanh Nghiệp
          </h2>
          <div className="space-y-4 text-xs">
            {experiences.filter((e) => e.type === "work").map((exp) => (
              <div key={exp.id}>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span className="text-xs">{exp.company} — <span className="text-emerald-700 font-semibold">{exp.role}</span></span>
                  <span className="text-[11px] text-slate-500">{exp.period}</span>
                </div>
                <ul className="mt-1.5 space-y-1 list-disc list-inside text-slate-700 pl-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3">
            Dự Án Nổi Bật (Featured Projects)
          </h2>
          <div className="space-y-4 text-xs">
            {projects.map((proj) => (
              <div key={proj.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2 font-bold text-slate-900">
                  <span className="text-xs">
                    {proj.title} <span className="text-[11px] font-medium text-slate-500">({proj.category})</span>
                  </span>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>{proj.liveUrl.replace("https://", "")}</span>
                    </a>
                  )}
                </div>

                <p className="mt-1 text-slate-700 leading-relaxed">
                  {proj.longDescription}
                </p>

                <div className="mt-2 flex flex-wrap gap-1">
                  {proj.tags.map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded text-[10px] bg-white border border-slate-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certificates Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3">
              Học Vấn
            </h2>
            <div className="text-xs space-y-1">
              <p className="font-bold text-slate-900">Trường Đại học Phenikaa</p>
              <p className="text-slate-700">Ngành CNTT • Khoa Hệ thống thông tin • Chuyên ngành Lập trình Web</p>
              <p className="text-[11px] text-slate-500">Khoảng thời gian: 10/2022 – 12/2026</p>
              <p className="font-semibold text-emerald-800">GPA dự kiến: 3.0 / 4.0 (Xếp loại Khá)</p>
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3">
              Chứng Chỉ & Đào Tạo
            </h2>
            <div className="text-xs space-y-2">
              {certificates.map((cert) => (
                <div key={cert.id}>
                  <p className="font-bold text-slate-900 flex items-center justify-between">
                    <span>{cert.name}</span>
                    <span className="text-[11px] font-normal text-slate-500">{cert.date}</span>
                  </p>
                  <p className="text-slate-700 text-[11px]">{cert.description[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

