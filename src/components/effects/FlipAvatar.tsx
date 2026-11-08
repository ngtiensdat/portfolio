"use client";

import { useEffect, useRef, useState } from "react";

interface FlipAvatarProps {
  videoSrc?: string;
  imageSrc?: string;
  alt?: string;
  className?: string; // size & border classes, e.g. "w-10 h-10 rounded-full"
  flipIntervalMs?: number; // default 3000ms (3 seconds)
}

export function FlipAvatar({
  videoSrc = "/videologo.mp4",
  imageSrc = "/portrait.jpg",
  alt = "Nguyễn Tiến Đạt",
  className = "w-10 h-10 rounded-full",
  flipIntervalMs = 3000,
}: FlipAvatarProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video is muted for cross-browser autoplay policies
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    const interval = setInterval(() => {
      setIsFlipped((prev) => {
        const next = !prev;
        // When flipping back to the video (next === false), replay from start
        if (!next && videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        }
        return next;
      });
    }, flipIntervalMs);

    return () => clearInterval(interval);
  }, [flipIntervalMs]);

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ perspective: "1000px" }}
      title={isFlipped ? "Ảnh chân dung Nguyễn Tiến Đạt" : "Logo Tiến Đạt vẫy tay chào"}
    >
      {/* 3D Flip Rotating Container */}
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Front Face: Waving Video Logo */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden rounded-full bg-slate-900"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-105 pointer-events-none"
          />
        </div>

        {/* Back Face: Real Portrait Image */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden rounded-full bg-slate-900"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover scale-105"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
