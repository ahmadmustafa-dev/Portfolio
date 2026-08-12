"use client";

import { useEffect, useState } from "react";

/**
 * Ultra-short boot intro — a dev-terminal line that flashes on load,
 * then fades out fast. No storage guard: it always plays and always
 * clears (a guard previously left the overlay stuck). Reduced-motion
 * users see it briefly as a static screen — all motion is already
 * disabled by the global reduced-motion CSS.
 */
export default function Intro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 950);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`boot-intro fixed inset-0 z-[200] flex items-center justify-center bg-ink-950 ${
        done ? "is-done" : ""
      }`}
    >
      <div className="w-64 font-mono text-sm text-fog-300">
        <p>
          <span className="text-neon-400">&gt;</span>{" "}
          <span className="text-fog-100">~/portfolio</span>{" "}
          <span className="text-fog-700">init --production</span>
        </p>
        <p className="mt-3 text-xs text-fog-500">
          loading experience<span className="animate-blink text-neon-400"> █</span>
        </p>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-ink-800">
          <div className="boot-bar h-full rounded-full" />
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-fog-700">
          <span>ink &amp; neon v3.0</span>
          <span className="text-neon-500/80">grand atelier</span>
        </div>
      </div>
    </div>
  );
}