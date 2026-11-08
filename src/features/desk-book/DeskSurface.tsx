"use client";

import { DESK_BOOKS } from "@/constants/books";
import { BookId } from "@/types/book";
import { Sparkles, ChevronRight, Bookmark, Coffee, Lamp } from "lucide-react";

interface DeskSurfaceProps {
  onOpenBook: (id: BookId) => void;
}

export function DeskSurface({ onOpenBook }: DeskSurfaceProps) {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl w-full text-center py-6">
      {/* Header Prompt */}
      <div className="mb-10 animate-in fade-in">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-950/80 text-amber-400 border border-amber-800/60 inline-flex items-center gap-2 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Ý tưởng sáng tạo: Những cuốn sách trên bàn làm việc</span>
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-100 tracking-tight mt-4 font-serif">
          Hồ Sơ Kỹ Sư & Ký Sự Dự Án
        </h2>
        <p className="text-xs sm:text-sm text-amber-300/80 mt-2.5 max-w-lg mx-auto">
          Chọn một cuốn sách trên bàn để mở ra và khám phá hành trình công nghệ của tôi.
        </p>
      </div>

      {/* 4 Leather Hardcover Books on Desk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
        {DESK_BOOKS.map((book) => (
          <div
            key={book.id}
            onClick={() => onOpenBook(book.id)}
            className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-3"
          >
            <div
              className={`relative h-84 sm:h-92 rounded-2xl p-5 bg-gradient-to-br ${book.colorScheme.coverGradient} border-2 ${book.colorScheme.borderColor} ${book.colorScheme.shadowColor} group-hover:shadow-[0_25px_60px_rgba(245,158,11,0.35)] transition-all flex flex-col justify-between overflow-hidden text-left`}
            >
              {/* Book Spine Edge Shadow */}
              <div className="absolute top-0 left-0 bottom-0 w-4 bg-gradient-to-r from-black/60 to-transparent border-r border-white/10" />

              {/* Bookmark Ribbon */}
              <div
                className={`absolute top-0 right-5 w-5 h-14 ${book.colorScheme.ribbonColor} rounded-b-md shadow-md flex items-end justify-center pb-1`}
              >
                <Bookmark className="w-3 h-3 text-black/60 fill-black/60" />
              </div>

              {/* Top Meta */}
              <div className="pl-3">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-amber-400/90">
                  {book.volNumber}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1 font-serif group-hover:text-amber-200 transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-amber-100/70 mt-2 line-clamp-3 leading-relaxed">
                  {book.subtitle}
                </p>
              </div>

              {/* Bottom Tags & Open Prompt */}
              <div className="pl-3 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {book.summaryTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-black/40 text-amber-200 border border-amber-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-200">
                  <span>Mở sách đọc</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desk Atmosphere Props */}
      <div className="mt-12 flex items-center justify-center gap-8 text-amber-600/40 text-xs">
        <span className="flex items-center gap-1.5">
          <Coffee className="w-4 h-4" />
          <span>Tách cà phê</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Lamp className="w-4 h-4" />
          <span>Ánh đèn bàn học</span>
        </span>
      </div>
    </div>
  );
}

