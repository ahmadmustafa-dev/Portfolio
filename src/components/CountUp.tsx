"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
};

/**
 * Animated counter — counts up when scrolled into view.
 * Falls back to instant value with prefers-reduced-motion.
 */
export default function CountUp({ value, suffix = "", label, duration = 1400 }: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [display, setDisplay] = useState(() => (reduceMotion ? value : 0));

  useEffect(() => {
    const node = ref.current;
    if (!node || reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const t0 = performance.now();

            const tick = (t: number) => {
              const p = Math.min((t - t0) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
              setDisplay(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, reduceMotion]);

  return (
    <div ref={ref}>
      <p className="font-serif text-[2.6rem] font-medium leading-none text-fog-50 tabular-nums">
        {display}
        <span className="text-neon-400">{suffix}</span>
      </p>
      <p className="mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fog-500">
        <span aria-hidden="true" className="h-px w-4 bg-neon-500/50" />
        {label}
      </p>
    </div>
  );
}