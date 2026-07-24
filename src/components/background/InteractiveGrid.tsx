"use client";

import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let frame = 0;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;

        grid.style.setProperty("--mx", `${x}px`);
        grid.style.setProperty("--my", `${y}px`);
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Dark */}
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 hidden dark:block overflow-hidden"
      >
        <div
          className="absolute inset-0 transition-transform duration-200"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",

            maskImage:
              "radial-gradient(circle 180px at var(--mx) var(--my), black 0%, transparent 100%)",

            WebkitMaskImage:
              "radial-gradient(circle 180px at var(--mx) var(--my), black 0%, transparent 100%)",

            transform:
              "perspective(800px) rotateX(60deg) translateY(-8px)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            opacity: 0.25,
          }}
        />
      </div>

      {/* Light */}
      <div className="pointer-events-none absolute inset-0 dark:hidden overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-200"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",

            maskImage:
              "radial-gradient(circle 180px at var(--mx) var(--my), black 0%, transparent 100%)",

            WebkitMaskImage:
              "radial-gradient(circle 180px at var(--mx) var(--my), black 0%, transparent 100%)",

            transform:
              "perspective(800px) rotateX(60deg) translateY(-8px)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            opacity: 0.25,
          }}
        />
      </div>
    </>
  );
}