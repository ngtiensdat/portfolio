"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const { personal } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSent(false), 6000);
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Liên hệ &amp; Kết nối</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Bắt đầu một dự án mới cùng nhau?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Tôi luôn sẵn sàng đón nhận cơ hội việc làm, dự án freelance hoặc đơn giản là trao đổi về công nghệ!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Centered Symmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Column 1: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
            {/* Ambient emerald blur */}
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Thông tin liên lạc trực tiếp
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Sẵn sàng
                </span>
              </div>

              <div className="space-y-4">
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

            {/* Social channels */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-[11px] font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                Kết nối mạng xã hội
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Fast Message Form */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Gửi tin nhắn trực tiếp
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Hãy để lại lời nhắn hoặc mô tả cơ hội hợp tác, tôi sẽ phản hồi lại bạn qua Email trong thời gian sớm nhất.
              </p>

              {isSent && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-center gap-3 animate-in fade-in">
                  <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600" />
                  <p className="text-xs sm:text-sm font-medium">
                    Cảm ơn bạn! Tin nhắn đã được gửi thành công. Tôi sẽ liên hệ lại với bạn sớm.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Email của bạn *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Tiêu đề *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Trao đổi cơ hội việc làm / Hợp tác dự án"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Nội dung tin nhắn *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Chia sẻ ngắn gọn yêu cầu hoặc ý tưởng của bạn..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-700 hover:to-teal-700 shadow-md shadow-emerald-500/25 disabled:opacity-60 transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                >
                  {isSubmitting ? (
                    <span>Đang gửi tin nhắn...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Gửi tin nhắn ngay</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
