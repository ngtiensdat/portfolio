"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Mail, Sparkles, Send, Terminal, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const { personal } = portfolioData;

  const techBadges = [
    { name: "Next.js" },
    { name: "NestJS" },
    { name: "TypeScript" },
    { name: "Java Spring Boot" },
    { name: "Angular" },
    { name: "PostgreSQL" },
    { name: "LangChain (RAG / AI)" },
    { name: "WebSocket" },
    { name: "Kafka" },
    { name: "Docker" },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-cyan-400/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro & Call to Action */}
          <div className="lg:col-span-7 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-6 shadow-xs backdrop-blur-sm animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{personal.status}</span>
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Xin chào, tôi là <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            <div className="mt-4 flex items-center gap-2 text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-200">
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
              <span>{personal.title}</span>
            </div>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {personal.subtitle}
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Xem 3 dự án thực chiến</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 rounded-xl shadow-xs hover:-translate-y-0.5 transition-all"
              >
                <span>Liên hệ phỏng vấn</span>
                <Send className="w-4 h-4 text-blue-500" />
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="mt-8 flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all hover:scale-105 shadow-2xs"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all hover:scale-105 shadow-2xs"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all hover:scale-105 shadow-2xs"
              >
                <Mail className="w-5 h-5" />
              </a>

              <span className="text-xs text-slate-400 dark:text-slate-500 pl-2">
                📍 {personal.location.split(",")[0]}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Developer Profile Code Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900/95 border border-slate-800 text-slate-200 shadow-2xl overflow-hidden backdrop-blur-xl group hover:border-blue-500/40 transition-colors">
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/70 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>developer.config.ts</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-mono">
                  ACTIVE
                </span>
              </div>

              {/* Code Body */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto space-y-1.5">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-yellow-300">{"{"}</span>
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">name</span>:{" "}
                  <span className="text-emerald-300">&quot;Nguyễn Tiến Đạt&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">role</span>:{" "}
                  <span className="text-emerald-300">&quot;Fresher Full-Stack Developer&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">university</span>:{" "}
                  <span className="text-emerald-300">&quot;Đại học Phenikaa (GPA 3.0)&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">certificate</span>:{" "}
                  <span className="text-emerald-300">&quot;TOEIC 580 (ETS)&quot;</span>,
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">coreTech</span>: [
                  <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;NestJS&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;Spring Boot&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;AI/RAG&quot;</span>],
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">internships</span>: [
                  <span className="text-amber-300">&quot;Lạc Long Quân&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;Rikkei Education&quot;</span>],
                </div>

                <div className="pl-4">
                  <span className="text-cyan-300">availableForHire</span>:{" "}
                  <span className="text-blue-400">true</span>,
                </div>

                <div>
                  <span className="text-yellow-300">{"}"}</span>;
                </div>

                {/* Simulated Terminal Status */}
                <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Ready to contribute & grow</span>
                  </div>
                  <span className="text-slate-500">TypeScript v5.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Pills Banner */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-4">
            Hộp công cụ công nghệ chủ lực
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {techBadges.map((badge) => (
              <span
                key={badge.name}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-500/50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors shadow-2xs"
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
