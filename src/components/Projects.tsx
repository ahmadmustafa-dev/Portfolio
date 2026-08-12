import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="work"
      className="section-sep relative scroll-mt-24 bg-ink-900/40 py-24 sm:py-32"
    >
      {/* Ambient neon drift glows */}
      <div
        className="animate-glow-drift absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-neon-500/[0.05] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="animate-glow-drift absolute -left-40 top-1/2 h-[520px] w-[520px] rounded-full bg-neon-500/[0.05] blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          label="Work"
          watermark="WORK"
          title={
            <>
              Selected work,
              <br />
              <span className="text-champ">unboxed.</span>
            </>
          }
          description="A selection of key full-stack, mobile and automation projects — case studies and screenshots are landing one by one."
        />

        {/* Project card grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 9).map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 80}>
              <SpotlightCard className="h-full rounded-lg">
                <article className="card-line group relative h-full overflow-hidden rounded-[calc(0.5rem-1px)] transition-colors duration-300">
                  {/* Image slot */}
                  <div className="relative aspect-video w-full overflow-hidden bg-ink-800">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center">
                        <span className="select-none font-display text-[5rem] font-bold leading-none tracking-tighter text-fog-600">
                          {project.id}
                        </span>
                        <span className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.22em] text-fog-700">
                          Screenshot coming soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="relative flex flex-1 flex-col p-4 min-[480px]:p-8">
                    {/* Giant watermark ID */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-6 right-3 hidden select-none font-display text-[4.5rem] font-bold leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-neon-400/[0.07] sm:block"
                    >
                      {project.id}
                    </span>

                    <h3 className="pt-1 text-base font-semibold text-fog-50 min-[480px]:text-lg">
                      {project.title}
                    </h3>
                    <p className="mt-0 text-xs leading-[20px] text-fog-500 min-[480px]:text-[14px]">
                      {project.description}
                    </p>

                    {/* Case Study button */}
                    <div className="mt-auto">
                      {project.link ? (
                        <a
                          href={project.link}
                          className="mt-5 inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-semibold text-fog-600 hover:bg-white/[0.06] transition-colors"
                        >
                          Case study
                          <ArrowUpRight size={16} className="ml-1 min-[480px]:ml-3" />
                        </a>
                      ) : (
                        <span className="mt-5 flex max-sm:w-full items-center justify-center rounded border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-semibold text-fog-600 min-[480px]:py-[23px] min-[480px]:text-base">
                          Case study soon
                          <ArrowUpRight size={16} className="ml-1 min-[480px]:ml-3" />
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
          </div>
          {/* Show all projects button */}
          <div className="mt-8 flex justify-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-semibold text-fog-600 hover:bg-white/[0.06] transition-colors"
            >
              Show all projects
              <ArrowUpRight size={16} />
            </a>
          </div>

        <Reveal delay={100}>
          <p className="mt-10 font-mono text-xs text-fog-500">
            <span className="text-neon-500">➜</span> Full case studies and client work available on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}