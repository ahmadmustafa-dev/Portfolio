import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon, XIcon } from "./icons";
import EmailCompose from "./EmailCompose";
import LocationClock from "./LocationClock";
import Reveal from "./Reveal";
import { navLinks, profile } from "@/lib/data";

const WHATSAPP_NUMBER = "+92 300 9535229";
const WHATSAPP_LINK = "https://wa.me/923009535229";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="section-sep relative scroll-mt-24 bg-ink-900/40">
      {/* Top hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-3/4 bg-neon-500/25"
      />

      {/* ---- Contact block ---- */}
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            {/* Pitch */}
            <div>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-neon-500">
                <span className="h-6 w-6 rounded-[6px] border border-neon-500/35 bg-neon-500/[0.08] text-[10px] text-neon-400 inline-flex items-center justify-center">
                  06
                </span>
                Let&apos;s talk
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,4.8vw,3.6rem)] font-bold leading-[1.05] text-fog-50">
                Let&apos;s discuss your
                <br />
                <span className="text-luxe text-neon-400 italic font-medium">project.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-fog-300">
                I&apos;m available for freelance work. Reach out to me directly on WhatsApp or
                connect through my social profiles below.
              </p>
            </div>

            {/* Contact actions */}
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <EmailCompose className="btn-shine group inline-flex h-12 items-center gap-2.5 rounded-full bg-neon-400 px-6 font-display text-[14.5px] font-semibold text-ink-950 shadow-[0_8px_28px_-8px_rgb(211_248_75/0.5)] transition-all duration-300 hover:bg-neon-300 hover:shadow-[0_0_32px_rgb(211_248_75/0.45)]">
                <Mail size={16} />
                {profile.email}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </EmailCompose>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-6 font-mono text-[13.5px] text-fog-100 transition-all duration-300 hover:border-neon-400/60 hover:bg-neon-400/[0.06] hover:text-neon-300 hover:shadow-[0_0_24px_-4px_rgb(211_248_75/0.4)]"
              >
                <WhatsAppIcon />
                <span>
                  Chat on WhatsApp
                  <span className="block text-[11px] text-fog-500 transition-colors group-hover:text-fog-300">
                    {WHATSAPP_NUMBER}
                  </span>
                </span>
                <ArrowUpRight size={15} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ---- Giant statement ---- */}
      <div className="relative overflow-hidden border-t border-white/6 bg-ink-950">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[22vw] font-bold leading-none tracking-tighter text-white/[0.025]"
        >
          CONTACT
        </span>
        <div className="group relative block px-5 pb-28 pt-14 text-center sm:px-8 sm:pb-36 sm:pt-20">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-500/[0.06] blur-[90px] transition-all duration-500 group-hover:bg-neon-500/[0.1]"
          />
          <span className="hover-fill relative font-display text-[clamp(2.6rem,9vw,8rem)] font-bold leading-none">
            <span className="text-ghost block">Let&apos;s build something.</span>
            <span className="text-shimmer fill-layer block">Let&apos;s build something.</span>
          </span>
          <EmailCompose
            align="center"
            className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/60 px-4 py-2 font-mono text-sm text-fog-500 backdrop-blur transition-colors duration-300 group-hover:border-neon-500/30 group-hover:text-neon-400"
          >
            <span className="text-neon-500">➜</span> {profile.email}
          </EmailCompose>
        </div>
      </div>

      {/* ---- Bottom bar ---- */}
      <div className="border-t border-white/6 bg-ink-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row sm:px-8">
          <p className="font-mono text-xs text-fog-700">
            ⟨/⟩ Designed &amp; built by{" "}
            <a href="#top" className="link-slide text-fog-300 transition-colors hover:text-neon-400">
              {profile.name}
            </a>{" "}
            · {year}
          </p>

          <LocationClock />

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-slide pb-0.5 font-mono text-xs text-fog-500 transition-colors hover:text-neon-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {[
              { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
              { icon: LinkedinIcon, href: profile.socials.linkedin, label: "LinkedIn" },
              { icon: XIcon, href: profile.socials.twitter, label: "X" },
              { icon: WhatsAppIcon, href: WHATSAPP_LINK, label: "WhatsApp" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-fog-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-neon-500/40 hover:text-neon-300 hover:shadow-[0_6px_16px_-6px_rgb(211_248_75/0.3)]"
              >
                <social.icon />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-fog-500 transition-all duration-200 hover:border-neon-500/40 hover:text-neon-300"
            >
              <ArrowUpRight size={15} className="rotate-[-45deg]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}