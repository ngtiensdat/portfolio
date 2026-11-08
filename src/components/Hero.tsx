"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Mail, Sparkles, Send } from "lucide-react";
import { GithubIcon, FacebookIcon } from "./Icons";
import { ScrambleText } from "./effects/ScrambleText";
import { InteractiveTerminal } from "./features/InteractiveTerminal";

export default function Hero() {
  const { personal } = portfolioData;

  const techBadges = [
    { name: "Next.js 15" },
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
      {/* Background Ambient Glow Orbs - Cyber Emerald */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-emerald-400/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Intro & Call to Action */}
          <div className="lg:col-span-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-6 shadow-xs backdrop-blur-sm animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{personal.status}</span>
            </div>

            {/* Name with Hacker Scramble Effect */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Xin chào, tôi là <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">
                <ScrambleText text={personal.name} />
              </span>
            </h1>

            <div className="mt-4 flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-200">
              <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
              <ScrambleText text={personal.title} hoverTrigger={false} />
            </div>

            {/* Subtitle */}
            <p className="mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {personal.subtitle}
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Xem dự án</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 rounded-xl shadow-xs hover:-translate-y-0.5 transition-all"
              >
                <span>Liên hệ phỏng vấn</span>
                <Send className="w-4 h-4 text-emerald-500" />
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="mt-8 flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all hover:scale-105 shadow-2xs"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.facebook || "https://www.facebook.com/ngtiensdat"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all hover:scale-105 shadow-2xs"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all hover:scale-105 shadow-2xs"
              >
                <Mail className="w-5 h-5" />
              </a>

              <span className="text-xs text-slate-400 dark:text-slate-500 pl-2">
                📍 {personal.location.split(",")[0]}
              </span>
            </div>
          </div>

          {/* Right Column: Live Interactive Developer Terminal */}
          <div className="lg:col-span-6 w-full">
            <InteractiveTerminal />
          </div>
        </div>

        {/* Tech Stack Pills Banner */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-4">
            Hộp công cụ công nghệ chủ lực
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {techBadges.map((badge) => (
              <span
                key={badge.name}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-2xs"
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
