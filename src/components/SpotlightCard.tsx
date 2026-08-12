"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Applies a subtle radial spotlight effect on hover, controlled by mouse position.
 * Respects prefers-reduced-motion.
 * Uses CSS variables --x and --y for the spotlight position.
 */
export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) {
      el.style.setProperty("--x", "0px"); // Reset for smooth transition out
      el.style.setProperty("--y", "0px");
    }
  };

  return (
    <div
      ref={ref}
      className={`spotlight-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}