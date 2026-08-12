import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-sep scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          label="Journey"
          watermark="JOURNEY"
          title={
            <>
              Where I&apos;ve been <span className="text-champ">building.</span>
            </>
          }
        />

        <ol className="relative mt-14 space-y-0">
          {/* Solid parrot spine */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-0 top-6 w-px bg-neon-500/40"
          />
          {experience.map((role, i) => (
            <li key={role.title}>
              <Reveal delay={i * 80}>
                <div className="group relative grid gap-4 border-l border-transparent py-9 pl-8 transition-all duration-300 hover:pl-10 sm:grid-cols-[140px_1fr] sm:gap-8">
                  {/* Node dot — glow on hover */}
                  <span className="absolute -left-[5px] top-12 h-2.5 w-2.5 rounded-full border-2 border-ink-950 bg-fog-500 transition-all duration-300 group-hover:bg-neon-400 group-hover:shadow-[0_0_16px_rgb(211_248_75/0.9)]" />
                  {/* Node halo — appears on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[11px] top-10 h-0 w-0 rounded-full border border-neon-400/50 transition-all duration-300 group-hover:h-5 group-hover:w-5"
                  />

                  {/* Period badge */}
                  <div className="pt-1">
                    <span className="inline-flex items-center rounded-md border border-white/10 bg-ink-850/80 px-3 py-1.5 font-mono text-[11px] text-fog-500 transition-colors duration-300 group-hover:border-neon-500/30 group-hover:text-neon-300">
                      {role.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-luxe text-[1.45rem] font-medium text-fog-50 transition-colors duration-200 group-hover:text-neon-300">
                      {role.title}
                    </h3>
                    <p className="mt-0.5 font-mono text-[12.5px] text-fog-500">{role.org}</p>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-fog-300">{role.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {role.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-white/10 bg-ink-850/80 px-3 py-1 font-mono text-[11px] text-fog-300 transition-colors duration-200 group-hover:border-neon-500/30 hover:!border-neon-400/50 hover:!text-neon-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Footnote */}
        <Reveal delay={120}>
          <p className="mt-4 flex items-center gap-2 font-mono text-xs text-fog-500">
            <span className="text-neon-500">➜</span> Earlier chapters: WordPress plugins, freelance micro-sites.
          </p>
        </Reveal>
      </div>
    </section>
  );
}