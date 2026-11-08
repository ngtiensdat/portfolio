"use client";

import { useState, useEffect, useCallback } from "react";
import { BookId } from "@/types/book";
import { DESK_BOOKS } from "@/constants/books";

interface UseFlipBookProps {
  onPlaySound?: () => void;
}

export function useFlipBook({ onPlaySound }: UseFlipBookProps = {}) {
  const [activeBookId, setActiveBookId] = useState<BookId | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");

  const currentBook = DESK_BOOKS.find((b) => b.id === activeBookId) || null;
  const maxPages = currentBook ? currentBook.totalPages : 1;

  const openBook = useCallback((id: BookId) => {
    setActiveBookId(id);
    setCurrentPage(0);
    setIsFlipping(false);
    onPlaySound?.();
  }, [onPlaySound]);

  const closeBook = useCallback(() => {
    setActiveBookId(null);
    setCurrentPage(0);
    setIsFlipping(false);
    onPlaySound?.();
  }, [onPlaySound]);

  const nextPage = useCallback(() => {
    if (currentPage < maxPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection("next");
      onPlaySound?.();

      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 350);
    }
  }, [currentPage, maxPages, isFlipping, onPlaySound]);

  const prevPage = useCallback(() => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection("prev");
      onPlaySound?.();

      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 350);
    }
  }, [currentPage, isFlipping, onPlaySound]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeBookId) return;

      if (e.key === "ArrowRight") {
        nextPage();
      } else if (e.key === "ArrowLeft") {
        prevPage();
      } else if (e.key === "Escape") {
        closeBook();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeBookId, nextPage, prevPage, closeBook]);

  return {
    activeBookId,
    currentBook,
    currentPage,
    isFlipping,
    flipDirection,
    maxPages,
    openBook,
    closeBook,
    nextPage,
    prevPage,
    setCurrentPage,
  };
}

