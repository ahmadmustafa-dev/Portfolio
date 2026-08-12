import { skillClusters } from "@/lib/data";

const items = skillClusters.flatMap((cluster) => cluster.items);

/**
 * Infinite marquee band separating hero from content.
 * Alternates filled + outline text with diamond separators,
 * framed by flat hairlines. Duplicated list + aria-hidden
 * clone = seamless loop.
 */
export default function Marquee() {
  return (
    <section
      aria-label="Technologies"
      className="relative overflow-hidden border-y border-white/8 bg-ink-900/60 py-7"
    >
      {/* Flat hairlines */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-neon-500/40"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-white/10"
      />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[false, true].map((clone) => (
          <div key={clone ? "clone" : "main"} className="flex shrink-0 items-center" aria-hidden={clone || undefined}>
            {items.map((item, i) => (
              <span
                key={item}
                className={`flex items-center font-mono text-[13.5px] uppercase tracking-[0.18em] ${
                  i % 2 === 1 ? "text-ghost" : ""
                }`}
              >
                <span className={`px-6 transition-colors ${i % 2 === 1 ? "" : "text-fog-100 hover:text-neon-400"}`}>
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rotate-45 border border-neon-500/50 bg-neon-500/10"
                />
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-ink-950 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-ink-950 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}