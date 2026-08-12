import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/lib/data";

type Params = { id: string };

/* Prerender every known project — unknown ids 404 */
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
    <header className="mb-6 lg:mb-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neon-400">{index}</p>
      <h2 className="mt-2 text-2xl font-bold text-fog-50 sm:text-3xl">{children}</h2>
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
          <div className="mx-auto w-full max-w-6xl px-3 sm:px-5">
            {/* Back button — exact reference style */}
            <LinkBack />

            <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left — title, overview, stack, actions */}
              <div>
                {/* Category badge — exact reference style, parrot accent */}
                <span className="mb-4 inline-flex rounded-full bg-neon-400 px-3 py-1 text-sm font-medium text-ink-950">
                  {details.category}
                </span>
                <h1 className="font-display text-[2.25rem] font-bold leading-[1.08] tracking-tight text-fog-50 sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-[26px] text-fog-300">
                  {project.description}
                </p>

                {/* Tech stack — exact reference chips */}
                <div className="mt-6 lg:mt-8">
                  <h3 className="mb-3 text-lg font-semibold text-fog-50">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span key={s} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {details.demoUrl && (
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-8">
                    {/* Live Demo — exact reference button */}
                    <a
                      href={details.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-gray-300 bg-white px-6 py-3 text-center text-sm text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      Live Demo
                    </a>
                  </div>
                )}
              </div>

              {/* Right — hero image, exact reference style */}
              <div className="order-first lg:order-last">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={`${project.title} — project preview`}
                    className="w-full rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="grid aspect-video w-full place-items-center rounded-lg bg-ink-850">
                    <span className="num-engrave select-none font-display text-[7rem] font-bold leading-none tracking-tighter">
                      {project.id}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Project Overview — plain columns, exact reference ===== */}
        <section className="section-sep border-t border-white/5 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-3 sm:px-5">
            <div className="mx-auto max-w-4xl">
              <SubHeading index="01 · Overview">Project Overview</SubHeading>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {[
                  { label: "Problem Solved", text: details.overview.problemSolved },
                  { label: "Target Audience", text: details.overview.targetAudience },
                  { label: "Why I Built It", text: details.overview.whyBuilt },
                ].map((col) => (
                  <div key={col.label}>
                    <h3 className="mb-2 text-lg font-semibold text-fog-50">{col.label}</h3>
                    <p className="text-fog-300">{col.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== My Role & Responsibilities — plain accent-bulleted list ===== */}
        <section className="section-sep border-t border-white/5 bg-ink-900/60 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-3 sm:px-5">
            <div className="mx-auto max-w-4xl">
              <SubHeading index="02 · Role">My Role &amp; Responsibilities</SubHeading>
              <ul className="space-y-3">
                {details.role.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-1 text-neon-400">•</span>
                    <span className="text-fog-200">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Features — exact reference white cards ===== */}
        <section className="section-sep border-t border-white/5 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-3 sm:px-5">
            <div className="mx-auto max-w-4xl">
              <SubHeading index="03 · Features">Features</SubHeading>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {details.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                    <span className="text-xl text-neon-400">✨</span>
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Screenshots — exact reference tiles ===== */}
        <section className="section-sep border-t border-white/5 bg-ink-900/60 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl px-3 sm:px-5">
            <SubHeading index="04 · Screenshots">Screenshots</SubHeading>
            <ProjectGallery images={details.screenshots} projectTitle={project.title} />
          </div>
        </section>

        {/* ===== CTA band — exact reference dark band ===== */}
        <section className="section-sep pb-8">
          <div className="bg-gray-900">
            <div className="mx-auto max-w-6xl px-5 py-14 text-center sm:px-8 sm:py-16">
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Interested in Similar Work?
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-300 sm:text-base lg:mb-8">
                I'm always excited to take on new challenges and create amazing digital
                experiences. Let's discuss your next project!
              </p>
              {/* Get In Touch — exact reference filled button */}
              <LinkBtn href="/#contact" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ————— Reference-exact buttons (accent swapped purple → parrot) ————— */

function LinkBack() {
  return (
    <Link
      href="/#work"
      className="mb-6 inline-block rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-300"
    >
      ← Back
    </Link>
  );
}

function LinkBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-block rounded bg-neon-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-neon-300 lg:px-8"
    >
      Get In Touch
    </Link>
  );
}