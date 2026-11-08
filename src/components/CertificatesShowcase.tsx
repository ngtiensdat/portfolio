"use client";

import { useState } from "react";
import { CERTIFICATES_DATA } from "@/constants/portfolio";
import { CertificateItem } from "@/types/portfolio";
import {
  Award,
  ExternalLink,
  Download,
  Eye,
  CheckCircle2,
  X,
  FileText,
  ShieldCheck,
  Layers,
  Sparkles,
  Code2,
  Maximize2,
} from "lucide-react";
import THEME from "@/config/theme";

export default function CertificatesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [activePdfCert, setActivePdfCert] = useState<CertificateItem | null>(null);

  const categories = ["Tất cả", "Coursera", "Language", "Training"];
  const categoryLabels: Record<string, string> = {
    "Tất cả": `Tất cả (${CERTIFICATES_DATA.length})`,
    Coursera: "Coursera Quốc tế (4)",
    Language: "Ngôn ngữ (1)",
    Training: "Đào tạo thực tập (1)",
  };

  const filteredCerts =
    selectedCategory === "Tất cả"
      ? CERTIFICATES_DATA
      : CERTIFICATES_DATA.filter((c) => c.category === selectedCategory);

  const getIssuerBadgeIcon = (issuer: string) => {
    if (issuer.includes("AWS"))
      return <Award className="w-4 h-4 text-amber-500" />;
    if (issuer.includes("Google") || issuer.includes("Agile"))
      return <Layers className="w-4 h-4 text-emerald-500" />;
    if (issuer.includes("Security"))
      return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
    if (issuer.includes("Laravel") || issuer.includes("PHP"))
      return <Code2 className="w-4 h-4 text-teal-400" />;
    return <Award className="w-4 h-4 text-emerald-500" />;
  };

  return (
    <section id="certificates" className="py-16 sm:py-20 scroll-mt-8 sm:scroll-mt-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className={THEME.classes.sectionBadge}>
            <Sparkles className="w-4 h-4" />
            <span>Chứng chỉ chuyên môn &amp; Đào tạo</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Chứng chỉ Quốc tế &amp; Năng lực Chuyên môn
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Minh chứng năng lực học tập liên tục, kỹ năng kiến trúc đám mây AWS, phương pháp luận Agile và chuẩn an ninh bảo mật web.
          </p>
          <div className={THEME.classes.sectionDivider} />
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
              className="group rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#0c1a14]/90 border border-slate-200/80 dark:border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top ambient glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-colors" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                    {getIssuerBadgeIcon(cert.issuer)}
                    <span className="truncate max-w-[140px] sm:max-w-none">{cert.issuer}</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {cert.date}
                  </span>
                </div>

                {/* Mini Certificate Image Preview (Ảnh mini của chứng chỉ) */}
                {cert.thumbnailUrl && (
                  <div
                    onClick={() => setActivePdfCert(cert)}
                    className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-4 cursor-pointer group/thumb shadow-xs"
                    title={`Bấm để phóng to xem ${cert.name}`}
                  >
                    <img
                      src={cert.thumbnailUrl}
                      alt={cert.name}
                      className="w-full h-full object-contain p-1.5 transition-transform duration-300 group-hover/thumb:scale-[1.03]"
                    />

                    {/* Hover Overlay with Action Pill */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-xs font-bold shadow-lg shadow-emerald-950/40 backdrop-blur-sm transition-transform group-hover/thumb:scale-105">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Xem chi tiết</span>
                      </span>
                    </div>

                    {/* Mini Verified Badge on corner */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-xs text-[10px] font-semibold text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Xác thực</span>
                    </div>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors leading-snug">
                  {cert.name}
                </h3>

                {cert.score && (
                  <p className="mt-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Điểm số đạt được: {cert.score}</span>
                  </p>
                )}

                {/* Bullets */}
                <div className="mt-3 space-y-1.5">
                  {cert.description.map((desc, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="text-emerald-500 select-none font-bold">•</span>
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActivePdfCert(cert)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-sm shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Xem chứng chỉ</span>
                </button>
                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    download
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors"
                    title="Tải chứng chỉ PDF về máy"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Tải PDF</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF / Image Certificate Lightbox Modal */}
      {activePdfCert && (
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
              {activePdfCert.pdfUrl && (
                <a
                  href={activePdfCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Mở tab mới</span>
                </a>
              )}
              <button
                onClick={() => setActivePdfCert(null)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            className="max-w-5xl w-full mx-auto flex-1 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {activePdfCert.pdfUrl ? (
              <iframe
                src={activePdfCert.pdfUrl}
                title={activePdfCert.name}
                className="w-full h-full border-0 rounded-2xl bg-slate-950"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4 bg-slate-950 rounded-2xl">
                <img
                  src={activePdfCert.thumbnailUrl}
                  alt={activePdfCert.name}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
