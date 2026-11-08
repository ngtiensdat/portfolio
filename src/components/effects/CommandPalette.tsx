"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import {
  Search,
  FileText,
  ExternalLink,
  Moon,
  Sparkles,
  X,
  Code2,
  Phone,
  Mail,
  User,
  Check,
} from "lucide-react";

interface ActionItem {
  id: string;
  label: string;
  category: "Dự án" | "Điều hướng" | "Liên hệ" | "Hành động";
  icon: React.ReactNode;
  shortcut?: string;
  perform: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const router = useRouter();

  const handleCopy = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => {
      setCopiedLabel(null);
      setIsOpen(false);
    }, 1200);
  }, []);

  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#10b981", "#34d399", "#059669", "#f59e0b", "#06b6d4"],
    });
    setIsOpen(false);
  }, []);

  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsOpen(false);
  }, []);

  const actions: ActionItem[] = [
    {
      id: "case-food-ai",
      label: "Chi tiết kỹ thuật & Code: FOOD AI Social Network",
      category: "Dự án",
      icon: <Code2 className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        router.push("/projects/food-ai");
        setIsOpen(false);
      },
    },
    {
      id: "case-payment-hub",
      label: "Chi tiết kỹ thuật & Code: Payment Hub Middleware (1M+ Records, Kafka)",
      category: "Dự án",
      icon: <Code2 className="w-4 h-4 text-teal-400" />,
      perform: () => {
        router.push("/projects/payment-hub");
        setIsOpen(false);
      },
    },
    {
      id: "case-learn-english",
      label: "Chi tiết kỹ thuật & Code: Learn English Web (Real-Time Rooms)",
      category: "Dự án",
      icon: <Code2 className="w-4 h-4 text-emerald-500" />,
      perform: () => {
        router.push("/projects/learn-english");
        setIsOpen(false);
      },
    },
    {
      id: "case-portfolio-frontend",
      label: "Chi tiết thiết kế Frontend & Code: Interactive Developer Portfolio",
      category: "Dự án",
      icon: <Code2 className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        router.push("/projects/portfolio-frontend");
        setIsOpen(false);
      },
    },
    {
      id: "proj-food-ai",
      label: "Mở Live Demo: FOOD AI Social Network",
      category: "Dự án",
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />,
      perform: () => window.open("https://food-ai-frontend-azure.vercel.app/", "_blank"),
    },
    {
      id: "proj-learn-english",
      label: "Mở Live Demo: Learn English Web",
      category: "Dự án",
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />,
      perform: () => window.open("https://learn-english-three-omega.vercel.app/", "_blank"),
    },
    {
      id: "view-cv",
      label: "Xem & In bản CV (Chuẩn A4 ATS)",
      category: "Điều hướng",
      icon: <FileText className="w-4 h-4 text-amber-500" />,
      shortcut: "G C",
      perform: () => {
        router.push("/cv");
        setIsOpen(false);
      },
    },
    {
      id: "nav-about",
      label: "Đến mục: Giới thiệu bản thân",
      category: "Điều hướng",
      icon: <User className="w-4 h-4 text-slate-400" />,
      perform: () => {
        router.push("/#about");
        setIsOpen(false);
      },
    },
    {
      id: "nav-projects",
      label: "Đến mục: 4 Dự án thực chiến",
      category: "Điều hướng",
      icon: <Code2 className="w-4 h-4 text-slate-400" />,
      perform: () => {
        router.push("/#projects");
        setIsOpen(false);
      },
    },
    {
      id: "nav-certificates",
      label: "Đến mục: Chứng chỉ Coursera & TOEIC (Xem PDF trực tiếp)",
      category: "Điều hướng",
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        router.push("/#certificates");
        setIsOpen(false);
      },
    },
    {
      id: "copy-phone",
      label: "Sao chép số điện thoại: 0337562201",
      category: "Liên hệ",
      icon: <Phone className="w-4 h-4 text-emerald-500" />,
      perform: () => handleCopy("0337562201", "phone"),
    },
    {
      id: "copy-email",
      label: "Sao chép email: datga27@gmail.com",
      category: "Liên hệ",
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      perform: () => handleCopy("datga27@gmail.com", "email"),
    },
    {
      id: "open-facebook",
      label: "Mở Facebook cá nhân: facebook.com/ngtiensdat",
      category: "Liên hệ",
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />,
      perform: () => window.open("https://www.facebook.com/ngtiensdat", "_blank"),
    },
    {
      id: "open-github",
      label: "Mở GitHub: github.com/ngtiensdat",
      category: "Liên hệ",
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />,
      perform: () => window.open("https://github.com/ngtiensdat", "_blank"),
    },
    {
      id: "action-confetti",
      label: "Bắn pháo hoa ăn mừng! (Confetti)",
      category: "Hành động",
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      shortcut: "Party",
      perform: triggerConfetti,
    },
    {
      id: "action-theme",
      label: "Chuyển giao diện Dark / Light Mode",
      category: "Hành động",
      icon: <Moon className="w-4 h-4 text-purple-400" />,
      perform: toggleTheme,
    },
  ];

  const filteredActions = actions.filter((act) =>
    act.label.toLowerCase().includes(search.toLowerCase()) ||
    act.category.toLowerCase().includes(search.toLowerCase())
  );

  // Global Keyboard Shortcut: Ctrl + K or Cmd + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSelectedIndex(0);
  };

  // Keyboard navigation inside list
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredActions.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % Math.max(1, filteredActions.length));
    } else if (e.key === "Enter" && filteredActions[selectedIndex]) {
      e.preventDefault();
      filteredActions[selectedIndex].perform();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            autoFocus
            type="text"
            autoComplete="off"
            spellCheck={false}
            suppressHydrationWarning
            value={search}
            onChange={handleSearchChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Tìm kiếm dự án, liên hệ, hoặc gõ lệnh... (↑ ↓ Enter)"
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none font-medium"
          />
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setIsOpen(false)}
            aria-label="Đóng thanh tìm kiếm"
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Copy Feedback Alert */}
        {copiedLabel && (
          <div className="px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-1.5 border-b border-emerald-500/20">
            <Check className="w-3.5 h-3.5" />
            <span>Đã sao chép vào bộ nhớ tạm!</span>
          </div>
        )}

        {/* Actions List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              Không tìm thấy lệnh hoặc dự án phù hợp
            </div>
          ) : (
            filteredActions.map((act, index) => (
              <div
                key={act.id}
                onClick={act.perform}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                  selectedIndex === index
                    ? "bg-emerald-500/15 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    {act.icon}
                  </div>
                  <span>{act.label}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">
                    {act.category}
                  </span>
                  {act.shortcut && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">
                      {act.shortcut}
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span>Dùng phím <kbd className="font-mono bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">↑</kbd> <kbd className="font-mono bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">↓</kbd> để di chuyển</span>
            <span>•</span>
            <span><kbd className="font-mono bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">Enter</kbd> để chọn</span>
          </div>
          <span><kbd className="font-mono bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">Esc</kbd> để đóng</span>
        </div>
      </div>
    </div>
  );
}

