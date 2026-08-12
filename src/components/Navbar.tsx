"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

/**
 * Floating capsule navigation — gradient hairline frame, glass pill,
 * pill-highlighted scrollspy. Distinct from a full-width bar.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scrollspy: highlight the section currently in view
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href.replace("/#", "#")))
      .filter((el): el is HTMLElement => !!el);

    const spy = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const section of sections) {
        if (section.offsetTop <= probe) current = section.id;
      }
      setActive(current);
    };
    spy();
    window.addEventListener("scroll", spy, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", spy);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      {/* Solid parrot frame */}
      <div
        className={`pointer-events-auto w-full max-w-2xl rounded-full border border-neon-500/35 bg-ink-950/70 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-neon-500/50 bg-ink-950/90 shadow-[0_18px_50px_-12px_rgb(0_0_0/0.7),0_0_28px_-8px_rgb(211_248_75/0.16)] backdrop-blur-xl"
            : ""
        }`}
      >
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="group relative flex items-baseline gap-1 py-2.5 font-mono text-lg font-medium tracking-tight">
            <span className="text-neon-400 transition-transform duration-300 group-hover:-rotate-12">⟨</span>
            <span className="text-luxe text-xl font-medium text-fog-50">Ahmad</span>
            <span className="animate-blink text-neon-400">_</span>
            {/* Live dot */}
            <span
              aria-hidden="true"
              className="absolute -right-3.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 animate-pulse-dot rounded-full bg-neon-400"
            />
          </Link>

          {/* Desktop nav — pills with index numbers */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, i) => {
              const sectionId = link.href.replace("/#", "");
              const isActive = active === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-full px-3.5 py-1.5 font-mono text-[12.5px] transition-all duration-200 ${
                      isActive
                        ? "bg-neon-400/10 text-neon-300 shadow-[inset_0_0_0_1px_rgb(211_248_75/0.2)]"
                        : "text-fog-500 hover:bg-white/5 hover:text-fog-50"
                    }`}
                  >
                    <span className={`mr-1 text-[10px] transition-colors ${isActive ? "text-neon-500" : "text-fog-700"}`}>
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-fog-100 transition-colors hover:border-neon-500/40 hover:text-neon-400 md:hidden"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — drops below the capsule */}
      {open && (
        <div className="pointer-events-auto absolute inset-x-4 top-[4.6rem] rounded-2xl border border-neon-500/30 bg-ink-950/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl sm:inset-x-6 md:hidden">
          <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 font-mono text-sm transition-colors ${
                      active === link.href.replace("/#", "")
                        ? "bg-neon-400/10 text-neon-300"
                        : "text-fog-300 hover:bg-white/5 hover:text-neon-400"
                    }`}
                  >
                    <span className="mr-2 text-[11px] text-fog-700">0{i + 1}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      )}
    </header>
  );
}