"use client";

import { ArrowLeft, Volume2, VolumeX, Eye } from "lucide-react";

interface DeskHeaderProps {
  isBookOpen: boolean;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onCloseBook: () => void;
  onSwitchToStandard: () => void;
}

export function DeskHeader({
  isBookOpen,
  soundEnabled,
  onToggleSound,
  onCloseBook,
  onSwitchToStandard,
}: DeskHeaderProps) {
  return (
    <header className="relative z-20 flex items-center justify-between px-4 sm:px-8 py-3.5 bg-black/50 backdrop-blur-md border-b border-amber-900/40">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-amber-500/60 shadow-md shrink-0 bg-amber-100">
          <img
            src="/logo.jpg"
            alt="Nguyễn Tiến Đạt Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs sm:text-sm font-bold text-amber-100 font-serif">
            Bàn làm việc của Nguyễn Tiến Đạt
          </span>
          <span className="hidden md:inline text-[11px] text-amber-400/70 ml-2">
            | 3D Desk & Interactive Flipbook
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Sound Toggle */}
        <button
          onClick={onToggleSound}
          aria-label={soundEnabled ? "Tắt âm thanh lật sách" : "Bật âm thanh lật sách"}
          title={soundEnabled ? "Âm thanh lật sách: Bật" : "Âm thanh lật sách: Tắt"}
          className="p-2 rounded-lg bg-amber-950/60 hover:bg-amber-900/60 border border-amber-800/50 text-amber-300 transition-colors cursor-pointer"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-amber-600" />}
        </button>

        {/* Back to Desk if a book is open */}
        {isBookOpen && (
          <button
            onClick={onCloseBook}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-950/80 hover:bg-amber-900 border border-amber-700/60 text-amber-200 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Gấp sách lại</span>
          </button>
        )}

        {/* Switch back to Standard Scrolling Portfolio */}
        <button
          onClick={onSwitchToStandard}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Chế độ đọc nhanh (CV)</span>
        </button>
      </div>
    </header>
  );
}
