"use client";

import { useState } from "react";
import { portfolioData, CertificateItem } from "@/data/portfolioData";
import {
  Award,
  ExternalLink,
  FileText,
  Download,
  Eye,
  X,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cloud,
  Code2,
  Layers,
} from "lucide-react";

export default function CertificatesShowcase() {
  const { certificates } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [activePdfCert, setActivePdfCert] = useState<CertificateItem | null>(null);

  const categories = ["Tất cả", "Coursera", "Language", "Training"];
  const categoryLabels: Record<string, string> = {
    "Tất cả": "Tất cả",
    Coursera: "Coursera Quốc tế",
    Language: "Chứng chỉ Tiếng Anh",
    Training: "Đào tạo Doanh nghiệp",
  };

  const filteredCerts = certificates.filter((c) => {
    if (selectedCategory === "Tất cả") return true;
    return c.category === selectedCategory;
  });

  const getIssuerBadgeIcon = (issuer: string) => {
    if (issuer.includes("AWS")) return <Cloud className="w-4 h-4 text-amber-500" />;
    if (issuer.includes("Google") || issuer.includes("Agile"))
      return <Layers className="w-4 h-4 text-emerald-500" />;
    if (issuer.includes("Security"))
      return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
    if (issuer.includes("Laravel") || issuer.includes("PHP"))
      return <Code2 className="w-4 h-4 text-teal-400" />;
    return <Award className="w-4 h-4 text-emerald-500" />;
  };

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Xác thực năng lực &amp; Chuyên môn</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Chứng chỉ &amp; Đào tạo quốc tế
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Minh chứng năng lực học tập liên tục, kỹ năng kiến trúc đám mây AWS, phương pháp luận Agile và chuẩn an ninh bảo mật web.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>

        {/* Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-3xl p-6 sm:p-7 bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top ambient glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-colors" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                    {getIssuerBadgeIcon(cert.issuer)}
                    <span className="truncate max-w-[140px] sm:max-w-none">{cert.issuer}</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                  {cert.name}
                </h3>

                {cert.score && (
                  <p className="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Điểm số đạt được: {cert.score}</span>
                  </p>
                )}

                {/* Bullets */}
                <div className="mt-4 space-y-2">
                  {cert.description.map((desc, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="text-emerald-500 select-none">•</span>
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                {cert.pdfUrl ? (
                  <>
                    <button
                      onClick={() => setActivePdfCert(cert)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm shadow-emerald-500/20 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Xem bản PDF</span>
                    </button>
                    <a
                      href={cert.pdfUrl}
                      download
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      title="Tải chứng chỉ về máy"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Tải về</span>
                    </a>
                  </>
                ) : (
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Chứng chỉ đã xác thực</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Modal Viewer */}
      {activePdfCert && activePdfCert.pdfUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col p-3 sm:p-6 animate-in fade-in"
          onClick={() => setActivePdfCert(null)}
        >
          <div className="max-w-5xl w-full mx-auto flex items-center justify-between text-white mb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" />
              <span className="text-sm sm:text-base font-bold truncate max-w-md sm:max-w-xl">
                {activePdfCert.name} ({activePdfCert.issuer})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={activePdfCert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Mở tab mới</span>
              </a>
              <button
                onClick={() => setActivePdfCert(null)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            className="max-w-5xl w-full mx-auto flex-1 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activePdfCert.pdfUrl}
              title={activePdfCert.name}
              className="w-full h-full border-0 rounded-2xl bg-slate-950"
            />
          </div>
        </div>
      )}
    </section>
  );
}
