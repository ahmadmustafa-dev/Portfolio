"use client";

import { useEffect, useRef } from "react";

/**
 * Premium cursor: a soft neon glow that trails the pointer (lerp smoothing)
 * plus a precise dot that expands into a ring over interactive elements.
 * - Additive only: the native cursor is never hidden (a11y-safe).
 * - Fine pointers (mouse/trackpad) only; disabled for touch & reduced motion.
 */
export default function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const glow = glowRef.current;
    const dot = dotRef.current;
    if (!glow || !dot) return;

    glow.classList.add("cursor-visible");
    dot.classList.add("cursor-visible");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
    };

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        "a, button, [role='button'], input, textarea, select, summary",
      );
      dot.classList.toggle("cursor-active", interactive);
      glow.classList.toggle("cursor-active", interactive);
    };

    const loop = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onBlur = () => {
      glow.classList.remove("cursor-visible");
      dot.classList.remove("cursor-visible");
    };
    const onFocus = () => {
      glow.classList.add("cursor-visible");
      dot.classList.add("cursor-visible");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}