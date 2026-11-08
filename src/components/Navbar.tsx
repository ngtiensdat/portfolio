"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Moon, Sun, Menu, X, FileText } from "lucide-react";
import Link from "next/link";
import { FlipAvatar } from "./effects/FlipAvatar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const navLinks = [
    { name: "Giới thiệu", href: "/#about" },
    { name: "Kỹ năng", href: "/#skills" },
    { name: "Dự án", href: "/#projects" },
    { name: "Kinh nghiệm", href: "/#experience" },
    { name: "Chứng chỉ", href: "/#certificates" },
    { name: "Liên hệ", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-[#060e0a]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-emerald-500/15 ${
        isScrolled
          ? "py-3 shadow-md shadow-slate-900/5 dark:shadow-emerald-950/25 bg-white dark:bg-[#060e0a]"
          : "py-4 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with uploaded avatar image */}
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white group"
          >
            <div className="relative w-10 h-10 rounded-full border-2 border-emerald-500/60 shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform bg-slate-900 shrink-0">
              <FlipAvatar
                videoSrc="/videologo.mp4"
                imageSrc="/portrait.jpg"
                alt="Tiến Đạt Logo"
                className="w-full h-full"
                flipIntervalMs={3000}
              />
            </div>
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
              {portfolioData.personal.name.split(" ").slice(-2).join(" ")}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              Dev
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle + CV Button */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              suppressHydrationWarning
              onClick={toggleTheme}
              aria-label="Chuyển chế độ sáng / tối"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer w-9 h-9 flex items-center justify-center shrink-0"
            >
              <Sun className="w-4 h-4 text-amber-400 hidden dark:block" />
              <Moon className="w-4 h-4 text-slate-600 block dark:hidden" />
            </button>

            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              <span>Xem CV</span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              suppressHydrationWarning
              onClick={toggleTheme}
              aria-label="Chuyển chế độ sáng / tối"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer w-8 h-8 flex items-center justify-center shrink-0"
            >
              <Sun className="w-4 h-4 text-amber-400 hidden dark:block" />
              <Moon className="w-4 h-4 text-slate-600 block dark:hidden" />
            </button>

            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-500 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-400 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <Link
                href="/cv"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl font-bold transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Xem &amp; In CV (PDF)</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
