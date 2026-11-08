"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                ★ Dự án nổi bật
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {project.title}
          </h3>
        </div>

        {/* Image Preview */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Mô tả dự án & Giải pháp
          </h4>
          <p>{project.longDescription}</p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
            Tính năng & Điểm nổi bật kỹ thuật
          </h4>
          <div className="space-y-2">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
            Công nghệ sử dụng
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <Link
            href={`/projects/${project.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            <span>Trang phân tích chi tiết & Mã nguồn</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
