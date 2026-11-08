"use client";

import { portfolioData } from "@/data/portfolioData";
import { Award, Code, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function About() {
  const { personal } = portfolioData;

  const coreValues = [
    {
      title: "Clean Code & Kiến trúc",
      description: "Thiết kế RESTful API chuẩn mực, phân tầng kiến trúc rõ ràng, mapping DTO/Entity với MapStruct.",
      icon: Code,
    },
    {
      title: "Bảo mật & Phân quyền",
      description: "Thành thạo phân quyền RBAC, xác thực bảo mật với Spring Security, JWT Cookie, NextAuth.",
      icon: Compass,
    },
    {
      title: "Ứng dụng AI & Real-time",
      description: "Tích hợp mô hình RAG với LangChain, OpenAI API, Vector Embeddings và truyền tin thời gian thực qua WebSocket.",
      icon: HeartHandshake,
    },
    {
      title: "Quy trình chuẩn Doanh nghiệp",
      description: "Làm việc theo Agile/Scrum, quản lý nhánh Git/GitFlow, code review và hoàn thành đúng tiến độ sprint.",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Giới thiệu bản thân
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Đam mê kiến tạo sản phẩm phần mềm thực tế
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Story & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Avatar & Profile Badge */}
            <div className="flex items-center gap-4 pb-2">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-lg shrink-0 bg-amber-100">
                <img
                  src="/avatar.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {personal.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {personal.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {personal.location.split(",")[0]}
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {personal.aboutText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Bullet Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "TypeScript, Next.js & NestJS",
                "Java Spring Boot & Angular",
                "Tích hợp AI: LangChain (RAG) & OpenAI",
                "Quy trình Agile/Scrum & Git/GitFlow",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personal.stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all text-center group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Cards */}
        <div className="mt-16 pt-12 border-t border-slate-200/60 dark:border-slate-800/60">
          <h4 className="text-center text-lg font-semibold text-slate-800 dark:text-slate-200 mb-8">
            Năng lực cốt lõi & Giá trị mang lại cho đội ngũ
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 hover:border-blue-500/40 hover:-translate-y-1 transition-all shadow-xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h5 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                    {val.title}
                  </h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
