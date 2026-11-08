"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 transition-all duration-75 ease-out shadow-sm shadow-emerald-500/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

