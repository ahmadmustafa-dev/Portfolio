import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/lib/data";

type Params = { id: string };

/* Prerender every known project — unknown ids 404 at build + on demand */
export function generateStaticParams(): Params[] {
  return projects.filter((p) => p.details).map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project?.details) {
    return { title: "Project not found — Ahmad Mustafa" };
  }

  return {
    title: `${project.title} — Ahmad Mustafa`,
    description: project.description,
  };
}

/* Small section header used throughout the detail page */
function SubHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <header className="mb-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neon-400">{index}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-fog-50 sm:text-3xl">
        {children}
      </h2>
    </header>
  );
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  /* No project or no case study written yet → 404 */
  if (!project?.details) notFound();

  const { details } = project;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* ===== Header — title, stack, live demo + hero image ===== */}
        <section className="section-sep bg-ink-900/40 pb-16 pt-28 sm:pb-20 sm:pt-36">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/70 px-4 py-2 font-mono text-xs text-fog-300 transition-colors duration-300 hover:border-neon-400 hover:text-neon-400"
            >
              <ArrowLeft size={14} />
              Back to work
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Left — title, overview, stack, actions */}
              <div>
                <span className="inline-flex items-center rounded-full border border-neon-400/40 bg-neon-400/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-neon-300">
                  {details.category}
                </span>
                <h1 className="mt-5 font-display text-[2.25rem] font-bold leading-[1.08] tracking-tight text-fog-50 sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-[26px] text-fog-300">
                  {project.description}
                </p>

                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-fog-600">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px] text-fog-500">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded border border-white/8 bg-ink-800/80 px-2.5 py-1.5">
                      {s}
                    </span>
                  ))}
                </div>

                {details.demoUrl && (
                  <a
                    href={details.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex max-sm:w-full items-center justify-center gap-2 rounded border border-transparent bg-fog-50 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:gap-3 hover:border-neon-400 hover:bg-neon-400 hover:shadow-[0_0_24px_rgb(211_248_75/0.35)]"
                  >
                    Live Demo
                    <ArrowUpRight size={16} className="transition-transform duration-300" />
                  </a>
                )}
              </div>

              {/* Right — hero image */}
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-ink-850 shadow-[0_25px_50px_-12px_rgb(0_0_0/0.6)]">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={`${project.title} — project preview`}
                    className="aspect-[4/3] h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="grid aspect-[4/3] place-items-center">
                    <span className="num-engrave select-none font-display text-[7rem] font-bold leading-none tracking-tighter">
                      {project.id}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Project Overview — problem / audience / why ===== */}
        <section className="section-sep border-t border-white/5 bg-ink-900/60 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <SubHeading index="01 · Overview">Project Overview</SubHeading>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "Problem Solved", text: details.overview.problemSolved },
                { label: "Target Audience", text: details.overview.targetAudience },
                { label: "Why I Built It", text: details.overview.whyBuilt },
              ].map((col) => (
                <div
                  key={col.label}
                  className="rounded-lg border border-white/10 bg-ink-900/60 p-6 transition-colors duration-300 hover:border-white/20"
                >
                  <h3 className="font-display text-base font-semibold text-fog-50">
                    <span className="mr-2 text-neon-400">➜</span>
                    {col.label}
                  </h3>
                  <p className="mt-3 text-sm leading-[22px] text-fog-300">{col.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== My Role & Responsibilities ===== */}
        <section className="section-sep border-t border-white/5 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <SubHeading index="02 · Role">My Role &amp; Responsibilities</SubHeading>
            <ul className="grid gap-3 sm:grid-cols-2">
              {details.role.map((r) => (
                <li
                  key={r}
                  className="flex items-center gap-3 rounded-lg border border-white/8 bg-ink-900/50 px-5 py-4 font-display text-sm font-medium text-fog-100"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon-400 shadow-[0_0_8px_rgb(211_248_75/0.8)]" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== Features ===== */}
        <section className="section-sep border-t border-white/5 bg-ink-900/60 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <SubHeading index="03 · Features">Features</SubHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              {details.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-ink-900/60 p-5 text-sm leading-[22px] text-fog-200 transition-colors duration-300 hover:border-neon-400/40"
                >
                  <Sparkles size={15} className="mt-1 shrink-0 text-neon-400" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Screenshots ===== */}
        <section className="section-sep border-t border-white/5 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <SubHeading index="04 · Screenshots">Screenshots</SubHeading>
            <ProjectGallery images={details.screenshots} projectTitle={project.title} />
          </div>
        </section>

        {/* ===== CTA band ===== */}
        <section className="section-sep pb-8">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-xl border border-neon-400/25 bg-ink-900/70 px-6 py-14 text-center sm:px-12 sm:py-16">
              {/* parrot aurora */}
              <div
                aria-hidden
                className="aurora pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-neon-400/15 blur-[100px]"
              />
              <p className="relative font-mono text-[11px] uppercase tracking-[0.22em] text-neon-400">
                Next project
              </p>
              <h2 className="relative mx-auto mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-fog-50 sm:text-4xl">
                Interested in similar work?
              </h2>
              <p className="relative mx-auto mt-4 max-w-lg text-sm leading-[22px] text-fog-300">
                Dashboards, web apps, mobile apps or automation pipelines — let's build
                something that moves your business forward.
              </p>
              <Link
                href="/#contact"
                className="relative mt-8 inline-flex items-center gap-2 rounded border border-transparent bg-fog-50 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:gap-3 hover:border-neon-400 hover:bg-neon-400 hover:shadow-[0_0_24px_rgb(211_248_75/0.35)]"
              >
                Get In Touch
                <ArrowUpRight size={16} className="transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}