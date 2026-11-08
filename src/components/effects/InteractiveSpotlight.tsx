"use client";

import { useEffect, useState } from "react";

export function InteractiveSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden transition-opacity duration-300">
      {/* Dynamic Cursor Spotlight Gradient - Cyber Emerald */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 dark:opacity-25 transition-transform duration-75 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.42) 0%, rgba(20, 184, 166, 0.22) 40%, transparent 70%)",
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
        }}
      />

      {/* Subtle Ambient Background Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)] opacity-40 dark:opacity-60" />
    </div>
  );
}

