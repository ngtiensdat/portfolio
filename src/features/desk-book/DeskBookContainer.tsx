"use client";

import { usePageFlipSound } from "@/hooks/usePageFlipSound";
import { useFlipBook } from "@/hooks/useFlipBook";
import { DeskHeader } from "./DeskHeader";
import { DeskSurface } from "./DeskSurface";
import { BookFlipView } from "./BookFlipView";

interface DeskBookContainerProps {
  onBackToStandard: () => void;
}

export function DeskBookContainer({ onBackToStandard }: DeskBookContainerProps) {
  const { playFlipSound, soundEnabled, toggleSound } = usePageFlipSound();
  const {
    activeBookId,
    currentPage,
    isFlipping,
    flipDirection,
    maxPages,
    openBook,
    closeBook,
    nextPage,
    prevPage,
  } = useFlipBook({ onPlaySound: playFlipSound });

  return (
    <div className="relative min-h-screen bg-[#0e0b08] text-amber-50 flex flex-col justify-between overflow-hidden select-none">
      {/* Warm Ambient Desk Lamp & Vignette Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(245,158,11,0.14),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-800/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Desk Top Navigation Bar */}
      <DeskHeader
        isBookOpen={Boolean(activeBookId)}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onCloseBook={closeBook}
        onSwitchToStandard={onBackToStandard}
      />

      {/* Desk Stage Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-3 sm:p-8">
        {!activeBookId ? (
          <DeskSurface onOpenBook={openBook} />
        ) : (
          <BookFlipView
            activeBookId={activeBookId}
            currentPage={currentPage}
            isFlipping={isFlipping}
            flipDirection={flipDirection}
            maxPages={maxPages}
            onOpenBook={openBook}
            onCloseBook={closeBook}
            onNextPage={nextPage}
            onPrevPage={prevPage}
          />
        )}
      </main>

      {/* Desk Bottom Status Bar */}
      <footer className="relative z-20 px-6 py-2.5 bg-black/60 text-center text-[11px] text-amber-400/60 border-t border-amber-900/30">
        💡 Mẹo: Nhấn nút <b>&quot;Chế độ đọc nhanh (CV)&quot;</b> ở góc phải bất kỳ lúc nào để chuyển về giao diện cuộn thông thường.
      </footer>
    </div>
  );
}

