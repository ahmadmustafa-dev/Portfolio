import { Boxes, Globe, Smartphone, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { skillClusters } from "@/lib/data";

// Bento layout: wide cells alternate with narrow ones
const CELL_SPANS = ["md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-4"] as const;

export default function Skills() {
  const clusterIcons = [Globe, Boxes, Smartphone, Workflow] as const;

  return (
    <section id="skills" className="section-sep relative scroll-mt-24 bg-ink-900/40 py-24 sm:py-32">
      {/* Subtle dotted texture */}
      <div className="dots-bg absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-3 sm:px-5">
        <SectionHeading
          index="02"
          label="Skills"
          title={
            <>
              One developer, <span className="text-champ">four disciplines.</span>
            </>
          }
          description="Not a wall of logos — a map of where I can take you from idea to shipped product, and everything in between."
          watermark="SKILLS"
        />

        {/* Bento grid — asymmetric, editorial rhythm */}
        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {skillClusters.map((cluster, i) => {
            const Icon = clusterIcons[i] ?? Globe;
            return (
              <Reveal key={cluster.title} delay={i * 90} className={CELL_SPANS[i] ?? "md:col-span-3"}>
                <SpotlightCard className="h-full rounded-2xl p-px">
                  <article className="card-line group relative h-full overflow-hidden rounded-[calc(1rem-1px)] bg-ink-900 p-7 transition-colors duration-300 sm:p-8">
                    {/* Index number watermark */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-2 -top-5 font-display text-[7rem] font-bold leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-neon-400/[0.07]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Discipline meta */}
                    <span className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.2em] text-fog-700 transition-colors group-hover:text-neon-500/80">
                      DISC-{String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative">
                      <div className="flex items-center gap-3">
<span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-neon-500/30 bg-neon-500/10 text-neon-400 transition-all duration-300 group-hover:border-neon-400/50 group-hover:shadow-[0_0_24px_rgb(211_248_75/0.3)]">
                        <Icon size={19} />
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-xl bg-neon-400/0 transition-colors duration-300 group-hover:bg-neon-400/[0.06]"
                        />
                      </span>
                        <h3 className="font-display text-xl font-semibold text-fog-50">{cluster.title}</h3>
                      </div>

                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-fog-300">{cluster.blurb}</p>

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {cluster.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-white/10 bg-ink-850/80 px-3.5 py-1.5 font-mono text-xs text-fog-300 transition-all duration-200 group-hover:border-neon-500/30 hover:!border-neon-400/50 hover:!bg-neon-500/10 hover:!text-neon-300"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}