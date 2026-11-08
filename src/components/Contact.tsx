"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  QrCode,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { GithubIcon, FacebookIcon, MessengerIcon } from "./Icons";
import THEME from "@/config/theme";

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const facebookUrl = personal.facebook || "https://www.facebook.com/ngtiensdat";
  const messengerUrl = "https://m.me/ngtiensdat";
  const githubUrl = personal.github || "https://github.com/ngtiensdat";

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24 bg-slate-50/60 dark:bg-[#060e0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={THEME.classes.sectionBadge}>
            <Sparkles className="w-4 h-4" />
            <span>Liên hệ &amp; Kết nối trực tiếp</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Bắt đầu một dự án mới cùng nhau?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Tôi luôn sẵn sàng đón nhận cơ hội việc làm, thảo luận kỹ thuật và kết nối trực tiếp qua Facebook &amp; Messenger!
          </p>
          <div className={THEME.classes.sectionDivider} />
        </div>

        {/* Centered Symmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Column 1: Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#0c1a14]/90 border border-slate-200/80 dark:border-emerald-500/20 shadow-sm relative overflow-hidden">
            {/* Ambient emerald blur */}
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Kênh liên hệ trực tiếp
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Sẵn sàng
                </span>
              </div>

              <div className="space-y-3.5">
                {/* Facebook Profile Card */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/40 hover:border-blue-400 transition-colors group">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 overflow-hidden flex-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1877f2] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                      <FacebookIcon className="w-5 h-5 fill-white" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        Facebook cá nhân
                      </p>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 truncate">
                        facebook.com/ngtiensdat
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy(facebookUrl, "facebook")}
                    title="Sao chép link Facebook"
                    className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    {copiedItem === "facebook" ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Email with 1-click copy */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50/60 dark:hover:bg-slate-800 transition-colors group">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-3.5 overflow-hidden flex-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        Email liên hệ
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                        {personal.email}
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy(personal.email, "email")}
                    title="Sao chép email"
                    className="p-2 text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    {copiedItem === "email" ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone with 1-click copy */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50/60 dark:hover:bg-slate-800 transition-colors group">
                  <a
                    href={`tel:${personal.phone}`}
                    className="flex items-center gap-3.5 overflow-hidden flex-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        Điện thoại / Zalo
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {personal.phone}
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy(personal.phone, "phone")}
                    title="Sao chép số điện thoại"
                    className="p-2 text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    {copiedItem === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub with 1-click copy */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50/60 dark:hover:bg-slate-800 transition-colors group">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 overflow-hidden flex-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        GitHub Profile
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                        github.com/ngtiensdat
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy(githubUrl, "github")}
                    title="Sao chép link GitHub"
                    className="p-2 text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    {copiedItem === "github" ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      Khu vực làm việc
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <p className="text-[11px] font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                Truy cập nhanh trang cá nhân
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-300 hover:bg-blue-100 transition-colors border border-blue-200/50 dark:border-blue-800/50"
                >
                  <FacebookIcon className="w-4 h-4 fill-current" />
                  <span>Facebook Profile</span>
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Live Facebook Profile Card & Messenger Hub */}
          <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#0c1a14]/90 border border-slate-200/80 dark:border-emerald-500/20 shadow-xl overflow-hidden flex flex-col justify-between">
            {/* Facebook Styled Header Banner */}
            <div className="relative h-28 sm:h-32 bg-gradient-to-r from-[#1877f2] via-[#0866ff] to-[#0052cc] p-6 flex items-start justify-between">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)] pointer-events-none" />

              <div className="relative z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold shadow-xs">
                <FacebookIcon className="w-4 h-4 fill-white" />
                <span>Trang Facebook chính thức</span>
              </div>

              <div className="relative z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md text-emerald-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Đang hoạt động</span>
              </div>
            </div>

            {/* Profile Content Body */}
            <div className="px-6 sm:px-8 pb-8 pt-0 flex-1 flex flex-col justify-between">
              {/* Avatar + Main Details */}
              <div className="relative -mt-12 sm:-mt-14 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="flex items-end gap-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white dark:border-[#0c1a14] shadow-xl shrink-0 bg-slate-900">
                      <img
                        src="/logo.jpg"
                        alt="Nguyễn Tiến Đạt Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                          {personal.name}
                        </h3>
                        <span title="Tài khoản chính thức" className="inline-flex">
                          <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                        @ngtiensdat
                      </p>
                    </div>
                  </div>

                  {/* Top Messenger Quick Button */}
                  <div className="flex gap-2">
                    <a
                      href={messengerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={THEME.classes.btnMessenger}
                    >
                      <MessengerIcon className="w-4 h-4" />
                      <span>Nhắn tin qua Messenger</span>
                    </a>
                  </div>
                </div>

                {/* Bio & Intro */}
                <div className="mt-5 space-y-2">
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {personal.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Thời gian phản hồi thông điệp: thường dưới 15 phút</span>
                  </p>
                </div>
              </div>

              {/* QR Code + Connect Strip */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#060e0a]/60 border border-slate-200/80 dark:border-emerald-500/20 mb-6">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  {/* QR Code thumbnail */}
                  <div className="p-2 bg-white rounded-xl shadow-md border border-slate-200/80 shrink-0">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(facebookUrl)}`}
                      alt="QR Code kết nối Facebook"
                      className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                    />
                  </div>

                  {/* QR instruction */}
                  <div className="space-y-2 text-center sm:text-left flex-1">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      <QrCode className="w-4 h-4 text-emerald-500" />
                      <span>Quét mã QR để mở Facebook trên điện thoại</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dùng Camera điện thoại hoặc app Facebook quét mã để kết nối và trao đổi công việc nhanh chóng nhất.
                    </p>
                    <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <button
                        onClick={() => handleCopy(facebookUrl, "fb-profile")}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition-colors cursor-pointer"
                      >
                        {copiedItem === "fb-profile" ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-500">Đã sao chép link!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Sao chép link Facebook</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={THEME.classes.btnFacebook}
                >
                  <FacebookIcon className="w-4 h-4 fill-white" />
                  <span>Mở trang cá nhân Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={THEME.classes.btnSecondary}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Xem các Repository trên GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
