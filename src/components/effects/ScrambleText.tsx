"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  hoverTrigger?: boolean;
}

const CHARS = "!<>-_\\/[]{}—=+*^?#0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function ScrambleText({ text, className = "", hoverTrigger = true }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const isScramblingRef = useRef<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = useCallback(() => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        isScramblingRef.current = false;
      }

      iteration += 1 / 2;
    }, 30);
  }, [text]);

  useEffect(() => {
    startScramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startScramble]);

  return (
    <span
      onMouseEnter={hoverTrigger ? startScramble : undefined}
      className={`inline-block cursor-default font-mono tracking-tight ${className}`}
    >
      {displayText}
    </span>
  );
}

