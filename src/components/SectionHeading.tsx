import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  index?: string;
  watermark?: string;
};

/**
 * Consistent section header: index chip + mono label + display title.
 * Gradient hairline rule with a glowing terminus. Optional giant
 * gradient watermark sits behind the heading for editorial depth.
 */
export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  index,
  watermark,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <div className="relative">
        {watermark && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 right-[-2%] -z-10 hidden select-none whitespace-nowrap font-display text-[10rem] font-bold leading-none tracking-tighter text-white/[0.03] lg:block"
          >
            {watermark}
          </span>
        )}
        <div className={`relative flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
          {index && (
            <span className="flex h-7 w-7 items-center justify-center rounded-[8px] border border-neon-500/35 bg-neon-500/[0.08] font-mono text-[11px] text-neon-400">
              {index}
            </span>
          )}
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-neon-500">{label}</span>
          <span
            aria-hidden="true"
            className={`relative h-px flex-1 bg-neon-500/35 ${centered ? "max-w-xs" : ""}`}
          >
            <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-neon-400/80 shadow-[0_0_8px_rgb(211_248_75/0.7)]" />
          </span>
        </div>
        <h2 className="text-luxe relative mt-6 text-[clamp(2.3rem,5vw,3.8rem)] font-medium leading-[1.05] text-fog-50">
          {title}
        </h2>
        {description && (
          <p className={`relative mt-5 max-w-2xl text-[15.5px] leading-relaxed text-fog-300 ${centered ? "mx-auto" : ""}`}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}