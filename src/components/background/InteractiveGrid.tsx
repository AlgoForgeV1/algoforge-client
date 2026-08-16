"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle dot-grid that brightens near the cursor, warm orange on white.
 * Mirrors the "aside" reference's soft interactive backdrop.
 */
export function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={
        {
          "--mx": "50%",
          "--my": "30%",
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(600px circle at var(--mx) var(--my), black 0%, transparent 70%), linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        } as React.CSSProperties
      }
    />
  );
}