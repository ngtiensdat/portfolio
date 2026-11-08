"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { DeskBookContainer } from "@/features/desk-book/DeskBookContainer";
import { BookOpen } from "lucide-react";

export default function Home() {
  const [viewMode, setViewMode] = useState<"standard" | "desk">("standard");

  if (viewMode === "desk") {
    return <DeskBookContainer onBackToStandard={() => setViewMode("standard")} />;
  }

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      <Navbar onToggleDeskMode={() => setViewMode("desk")} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

      {/* Persistent Floating 3D Desk Button */}
      <button
        onClick={() => setViewMode("desk")}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-950 text-amber-100 border border-amber-600/60 shadow-xl shadow-amber-950/40 hover:scale-105 active:scale-95 transition-all cursor-pointer font-serif text-xs sm:text-sm font-bold animate-bounce"
        title="Mở trải nghiệm 3D: Những cuốn sách trên bàn làm việc"
      >
        <BookOpen className="w-4 h-4 text-amber-300" />
        <span>Góc bàn 3D & Sách lật</span>
      </button>
    </main>
  );
}
