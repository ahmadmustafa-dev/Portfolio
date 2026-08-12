import { ArrowDown, ArrowUpRight, Terminal, Zap } from "lucide-react";
import CountUp from "./CountUp";
import Typewriter from "./Typewriter";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./icons";
import { profile, stats, skillClusters } from "@/lib/data";

const WHATSAPP_LINK = "https://wa.me/923009535229";

export default function Hero() {
  const marqueeItems = [
    ...skillClusters.flatMap((c) => c.items),
    "n8n",
    "AI Workflows",
    "REST APIs",
  ];

  const socials = [
    { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
    { icon: LinkedinIcon, href: profile.socials.linkedin, label: "LinkedIn" },
    { icon: WhatsAppIcon, href: WHATSAPP_LINK, label: "WhatsApp" },
  ];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28">
        {/* Backdrop — layered atmosphere */}
        <div className="aurora absolute inset-0" aria-hidden="true" />
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div
          className="animate-glow-drift absolute -top-44 left-1/2 h-[500px] w-[760px] rounded-full bg-neon-500/[0.07] blur-[130px]"
          aria-hidden="true"
        />
        <div
          className="animate-glow-drift absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-neon-500/[0.05] blur-[120px]"
          style={{ animationDelay: "-8s" }}
          aria-hidden="true"
        />
        {/* Ghost word behind headline */}
        <span
          aria-hidden="true"
          className="text-ghost-hero pointer-events-none absolute left-0 top-16 select-none whitespace-nowrap font-display text-[26vw] font-bold leading-none lg:top-6"
        >
          BUILDER
        </span>

        {/* Vertical edge label — fine print detail */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-6 hidden items-center gap-3 lg:flex"
        >
          <span className="h-16 w-px bg-neon-500/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-fog-700">
            Portfolio — Est. 2026
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-neon-400/70" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-2 sm:px-4">
          {/* Editorial meta row */}
          <div className="animate-fade-up mb-12 flex items-center justify-between gap-4 border-b border-white/8 pb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-fog-700">
            <span className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-[6px] border border-neon-500/35 bg-neon-500/[0.08] text-[10px] text-neon-400">
                01
              </span>
              / Intro
            </span>
            <span className="hidden sm:block">{profile.location}</span>
            <span className="flex items-center gap-2 text-fog-500">
              Scroll
              <ArrowDown size={12} className="animate-float text-neon-500" />
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* -------- Left: message -------- */}
            <div className="animate-fade-up">
              {/* Availability pill — solid parrot border */}
              <div className="mb-7 inline-flex rounded-full border border-neon-500/35 bg-neon-500/[0.06]">
                <span className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5">
                  <span className="animate-pulse-dot h-2 w-2 rounded-full bg-neon-400" aria-hidden="true" />
                  <span className="font-mono text-xs tracking-wide text-fog-300">{profile.availability}</span>
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[clamp(3.2rem,8vw,6.2rem)] font-bold leading-[1.02] tracking-tight text-fog-50">
                <span className="text-luxe text-champ italic">Ahmad</span>
                <span className="text-neon-400">.</span>
                <br />
                <span className="relative inline-block">
                  I build
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-neon-400/80"
                  />
                </span>
                <br />
                <span className="inline-block whitespace-nowrap text-[0.75em]">
                  <Typewriter />
                  <span className="text-fog-700"> —</span>
                </span>
                <br />
                <span className="text-ghost">web · mobile · automation</span>
              </h1>

              <p className="mt-8 max-w-xl text-[16.5px] leading-relaxed text-fog-300">
                {profile.tagline}
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="btn-shine group inline-flex h-12 items-center gap-2 rounded-full bg-neon-400 px-7 font-display text-[15px] font-semibold text-ink-950 shadow-[0_8px_28px_-8px_rgb(211_248_75/0.5)] transition-all duration-300 hover:bg-neon-300 hover:shadow-[0_0_36px_rgb(211_248_75/0.45)]"
                >
                  View work
                  <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-7 font-mono text-[14px] text-fog-100 backdrop-blur transition-all duration-300 hover:border-neon-500/50 hover:bg-neon-500/[0.05] hover:text-neon-400"
                >
                  <Terminal size={16} />
                  <span>contact</span>
                  <span className="text-fog-700 transition-colors group-hover:text-neon-500">~$</span>
                </a>
              </div>

              {/* Socials + hint */}
              <div className="mt-10 flex items-center gap-5">
                <div className="flex items-center gap-2.5">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-ink-900/40 text-fog-500 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-neon-500/40 hover:text-neon-300 hover:shadow-[0_6px_18px_-6px_rgb(211_248_75/0.35)]"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
                <span aria-hidden="true" className="h-px w-10 bg-white/15" />
                <p className="flex items-center gap-2 font-mono text-xs text-fog-700">
                  <Zap size={13} className="text-neon-500" />
                  <span className="font-mono text-fog-500">{"// scroll to explore"}</span>
                </p>
              </div>
            </div>

            {/* -------- Right: terminal dock (fixed width, pinned right) -------- */}
            <div
              className="animate-fade-up relative hidden lg:block lg:w-[430px]"
              style={{ animationDelay: "150ms" }}
            >
              {/* Ambient lime glow behind the dock */}
              <div aria-hidden="true" className="absolute -inset-12 rounded-[3rem] bg-neon-500/[0.08] blur-3xl" />

              {/* Solid parrot frame (flat border via .frame-gradient) */}
              <div className="frame-gradient relative rotate-[0.6deg] rounded-2xl transition-all duration-500 hover:rotate-0 hover:shadow-[0_0_70px_-14px_rgb(211_248_75/0.3)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-ink-900/95">
                  {/* Window bar */}
                  <div className="flex items-center justify-between border-b border-white/8 bg-ink-900/90 px-4 py-2.5">
                    <div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-neon-500/90" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-neon-400/90" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-neon-300/90" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[10.5px] text-fog-500">ahmad@dev: ~/portfolio</span>
                    <span className="font-mono text-[10.5px] text-neon-500">●</span>
                  </div>

                  {/* Terminal body — compact */}
                  <div className="space-y-2.5 px-4 py-4 font-mono text-[12px] leading-relaxed">
                    <p className="text-fog-500">
                      <span className="text-neon-400">➜</span> <span className="text-fog-100">~/portfolio</span>{" "}
                      <span className="text-fog-700">git status</span>
                    </p>
                    <p className="text-fog-300">
                      <span className="text-fog-700">on branch</span>{" "}
                      <span className="rounded-sm bg-neon-500/10 px-1.5 py-px text-neon-300">master</span> — nothing
                      to commit, <span className="text-fog-300">working tree clean</span>
                    </p>

                    <p className="pt-1 text-fog-500">
                      <span className="text-neon-400">➜</span> <span className="text-fog-100">~/stack</span>{" "}
                      <span className="text-fog-700">ls -la</span>
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-fog-300">
                      {marqueeItems.slice(0, 8).map((item) => (
                        <p key={item} className="truncate">
                          <span className="text-fog-700">-rw-r--r--</span>{" "}
                          <span className="text-fog-100">{item.toLowerCase().replace(/\s+/g, "-")}.ext</span>
                        </p>
                      ))}
                    </div>

                    <p className="pt-1 text-fog-500">
                      <span className="text-neon-400">➜</span> <span className="text-fog-100">~/mission</span>{" "}
                      <span className="text-fog-700">cat core.txt</span>
                    </p>
                    <p className="border-l-2 border-neon-500/50 pl-3 text-fog-100">
                      Ship fast. Stay curious.
                      <br />
                      Automate everything else.
                      <span className="animate-blink text-neon-400"> ▊</span>
                    </p>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between border-t border-white/8 px-4 py-2 font-mono text-[10px] text-fog-700">
                    <span className="flex items-center gap-2 text-fog-500">
                      <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-neon-400" aria-hidden="true" />
                      online — 3 services
                    </span>
                    <span>ahmad@dev · v3.0</span>
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="pointer-events-none absolute -right-4 -top-5 hidden rounded-xl border border-white/12 bg-ink-850/95 px-4 py-3 shadow-2xl lg:block animate-float">
                <p className="font-mono text-[11px] text-fog-500">avg. task reduction</p>
                <p className="font-display text-xl font-bold text-neon-400">87%</p>
              </div>
              <div
                className="pointer-events-none absolute -bottom-6 -left-6 hidden rounded-xl border border-white/12 bg-ink-850/95 px-4 py-3 shadow-2xl lg:block animate-float-slow"
                style={{ animationDelay: "-4s" }}
              >
                <p className="font-mono text-[11px] text-fog-500">est. response</p>
                <p className="font-display text-xl font-bold text-fog-50">
                  &lt;24<span className="text-neon-400">h</span>
                </p>
              </div>
            </div>
          </div>

          {/* ============ STATS — open ledger ============ */}
          <div className="animate-fade-up relative mt-20" style={{ animationDelay: "220ms" }}>
            {/* Hairline top rule with center marker */}
            <div aria-hidden="true" className="mb-8 flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-fog-600">
                {"// Key metrics"}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 rounded-2xl border border-white/8 bg-ink-900/50 px-6 py-8 backdrop-blur-sm sm:grid-cols-4 sm:gap-0 sm:px-2 sm:py-6 sm:border-transparent sm:bg-transparent">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`transition-transform duration-300 hover:-translate-y-1 ${
                    i > 0 ? "sm:border-l sm:border-white/10 sm:pl-8" : ""
                  }`}
                >
                  <CountUp value={stat.value} suffix={stat.suffix} label={stat.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}