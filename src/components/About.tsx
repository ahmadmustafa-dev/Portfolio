import Image from "next/image";
import { Coffee, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function About() {
  const facts = [
    {
      icon: <Coffee size={17} />,
      title: "Clean code, clear thinking",
      text: "Readable beats clever. I write code the next developer — or the next AI agent — can maintain without a decoder ring.",
    },
    {
      icon: <Sparkles size={17} />,
      title: "Design matters",
      text: "Interfaces are judged in milliseconds. I sweat the pixels so users feel the craft.",
    },
    {
      icon: <Sparkles size={17} />,
      title: "Automation is leverage",
      text: "If a task runs twice, it deserves a workflow. Time back in my day means better solutions.",
    },
  ];

  return (
    <section id="about" className="section-sep scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          label="About"
          watermark="ABOUT"
          title={
            <>
              Developer by trade.
              <br />
              <span className="text-champ">Builder by default.</span>
            </>
          }
        />

        {/* Sticky portrait left, flowing narrative right */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          {/* Sticky column */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              {/* Solid parrot frame */}
              <figure className="group relative rounded-2xl border border-neon-500/25 transition-all duration-500 hover:border-neon-500/50 hover:shadow-[0_0_60px_-14px_rgb(211_248_75/0.3)]">
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Corner ticks */}
                  <span aria-hidden="true" className="corner-ticks absolute inset-0" />
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/images/portrait.png"
                      alt={`Portrait of ${profile.name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 36vw"
                      priority={false}
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Soft bottom gradient for caption legibility */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/90 to-transparent"
                      aria-hidden="true"
                    />
                    {/* Availability chip — overlay */}
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-neon-500/30 bg-ink-950/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-neon-300 backdrop-blur">
                      <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-neon-400" aria-hidden="true" />
                      Available
                    </span>
                  </div>
                  {/* Caption bar */}
                  <figcaption className="flex items-center gap-3 border-t border-white/8 bg-ink-900/95 px-5 py-3.5 font-mono text-[11px] text-fog-500">
                    <span className="text-neon-500">➜</span>
                    <span className="text-fog-300">~/ahmad.png</span>
                    <span
                      aria-hidden="true"
                      className="barcode hidden h-4 w-14 text-fog-700/70 sm:block"
                    />
                  </figcaption>
                </div>
              </figure>
            </Reveal>

            {/* Sticky-support quote card */}
            <Reveal delay={120}>
              <div className="frame-gradient mt-5 rounded-xl">
                <div className="rounded-[calc(0.75rem-1px)] bg-ink-900 px-5 py-5">
                  <p className="font-mono text-[13px] leading-relaxed text-fog-300">
                    <span className="text-neon-400">&ldquo;</span>
                    Software that ships, is maintainable, and removes friction for real
                    people.
                    <span className="text-neon-400">&rdquo;</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Flowing column */}
          <Reveal delay={100}>
            <div className="space-y-5 text-[16.5px] leading-[1.85] text-fog-300">
              <p className="drop-cap">
                I&apos;m <span className="font-semibold text-fog-50">{profile.name}</span> — a full-stack
                developer who started with WordPress plugins and ended up shipping products
                across the entire stack: <span className="text-neon-300">React &amp; Next.js</span> interfaces,
                <span className="text-neon-300"> Laravel &amp; MERN</span> backends,{" "}
                <span className="text-neon-300">Flutter &amp; native Android</span> apps, and{" "}
                <span className="text-neon-300">n8n automation</span> pipelines that quietly run
                businesses on autopilot.
              </p>
              <p>
                The thread through all of it is simple: <em className="text-luxe text-champ">software that ships, is
                maintainable, and removes friction for real people.</em> I care about render
                budgets, 4.5:1 contrast ratios, and whether an API is a joy to consume —
                because those small decisions compound into products people trust.
              </p>
              <p>
                Right now I&apos;m applying that mindset to AI-powered workflows — using n8n
                with LLM agents to turn repetitive operations into deterministic,
                observable pipelines.
              </p>
            </div>

            {/* Facts — 2×2 grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {facts.map((fact, i) => (
                <div
                  key={fact.title}
                  className="group relative overflow-hidden rounded-xl border border-white/8 bg-ink-900 p-5 transition-all duration-300 hover:border-neon-500/30 hover:shadow-[0_16px_40px_-16px_rgb(0_0_0/0.8),0_0_24px_-10px_rgb(211_248_75/0.2)]"
                >
                  {/* Ghost index */}
                  <span
                    aria-hidden="true"
                    className="absolute -right-1 -top-3 font-display text-6xl font-bold leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-neon-400/[0.08]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neon-500/25 bg-neon-500/10 text-neon-400">
                      {fact.icon}
                    </span>
                    <h3 className="font-display text-[15px] font-semibold text-fog-50">{fact.title}</h3>
                  </div>
                  <p className="relative mt-3 text-sm leading-relaxed text-fog-300">{fact.text}</p>
                </div>
              ))}
              {/* Status strip */}
              <div className="relative overflow-hidden rounded-xl border border-neon-500/25 bg-neon-500/[0.07] p-5">
                <span
                  aria-hidden="true"
                  className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-neon-500/10 blur-2xl"
                />
                <p className="font-mono text-xs uppercase tracking-widest text-fog-500">Status — currently</p>
                <p className="mt-2.5 flex items-center gap-2.5 text-sm text-fog-100">
                  <span className="h-2 w-2 shrink-0 animate-pulse-dot rounded-full bg-neon-400" aria-hidden="true" />
                  <span className="text-neon-300">{profile.availability.split("for ")[1] ?? profile.availability}</span>
                  <span className="text-fog-700">·</span>
                  <span>{profile.location.split(" ")[0]}</span>
                </p>
                <p className="mt-3 font-mono text-[11px] text-fog-500">
                  <span className="text-neon-500">➜</span> accepting Q3 2026 engagements
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}