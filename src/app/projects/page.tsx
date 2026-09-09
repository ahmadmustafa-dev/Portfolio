"use client";

import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/api";
import { projects as fallbackProjects, type Project } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AllProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category ?? p.details?.category ?? "General"))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    let mounted = true;
    fetchProjects()
      .then((p) => {
        if (mounted) setProjects(p);
      })
      .catch(() => {
        /* swallow — fallback already set */
      });
    return () => {
      mounted = false;
    };
  }, []);

  const filteredProjects = projects
    .filter((project) => {
      const text = `${project.summary ?? ""} ${project.description ?? ""}`.trim();
      if (!text || text.toLowerCase().includes("case study soon")) return false;
      return Boolean(project.link || project.details || project.image || (project.summary && project.summary.trim().length > 25));
    })
    .filter((project) => {
      const projectCategory = project.category ?? project.details?.category ?? "General";
      return activeCategory === "All" || projectCategory === activeCategory;
    });

  return (
    <section
      id="work"
      className="section-sep relative scroll-mt-24 bg-ink-900/40 py-24 sm:py-32 min-h-screen"
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

        {/* Category Filter */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap items-center justify-start gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${activeCategory === category
                    ? "bg-neon-400 text-ink-950 shadow-[0_0_15px_rgba(211,248,75,0.4)] border border-neon-400"
                    : "bg-white/[0.03] text-fog-500 hover:bg-white/[0.08] hover:text-fog-200 border border-white/10"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project card grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 80}>
              <SpotlightCard className="h-full rounded-lg">
                <article className="card-line group relative h-full overflow-hidden rounded-[calc(0.5rem-1px)] transition-colors duration-300">
                  {/* Image slot */}
                  <div className="relative aspect-video w-full overflow-hidden bg-ink-800">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={900}
                        className="h-full w-full object-cover"
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
                    {/* Category Label */}
                    <span className="mb-3 inline-block font-mono text-[11px] uppercase tracking-wider text-neon-500/80">
                      {project.category ?? project.details?.category ?? "General"}
                    </span>

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
                    <p className="mt-2 text-xs leading-[20px] text-fog-500 min-[480px]:text-[14px]">
                      {project.summary ?? project.description}
                    </p>

                    {/* Case Study button */}
                    <div className="mt-auto pt-6">
                      {project.link ? (
                        <a
                          href={project.link}
                          className="group/btn flex w-full sm:w-fit items-center justify-center rounded border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-semibold text-fog-600 min-[480px]:px-6 min-[480px]:py-2.5 hover:bg-white/[0.06] hover:border-neon-400 hover:text-neon-400 transition-colors duration-300"
                        >
                          Case study
                          <ArrowRight size={18} className="ml-2 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-neon-400" />
                        </a>
                      ) : (
                        <span className="flex w-full sm:w-fit items-center justify-center rounded border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-semibold text-fog-600 min-[480px]:px-6 min-[480px]:py-2.5 cursor-not-allowed opacity-60">
                          Case study soon
                          <ArrowRight size={18} className="ml-2" />
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-20 py-20 text-center font-mono text-sm text-fog-500">
            No projects found in this category.
          </div>
        )}

        <Reveal delay={100}>
          <p className="mt-14 font-mono text-xs text-fog-500">
            <span className="text-neon-500">➜</span> Full case studies and client work available on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
