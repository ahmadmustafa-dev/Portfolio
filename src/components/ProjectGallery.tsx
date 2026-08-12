"use client";

import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";

type Props = {
  images: string[];
  projectTitle: string;
};

/**
 * Screenshots grid with "View Large" lightbox (reference-style).
 * Falls back to a placeholder tile when a file is missing, so the
 * page never shows broken images while screenshots are being added.
 */
export default function ProjectGallery({ images, projectTitle }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const [failed, setFailed] = useState<Set<number>>(new Set());

  const hasFailed = (i: number) => failed.has(i);

  // Close lightbox with Escape
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll while the lightbox is open
  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const placeholder = (i: number, size: string) => (
    <span className="absolute inset-0 grid place-items-center">
      <span
        className={`num-engrave select-none font-display font-bold leading-none tracking-tighter ${size}`}
      >
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.22em] text-fog-700">
        Screenshot coming soon
      </span>
    </span>
  );

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-ink-850 text-left focus-visible:outline-2 focus-visible:outline-neon-400"
            aria-label={`View screenshot ${i + 1} of ${projectTitle} large`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${projectTitle} — screenshot ${i + 1}`}
              loading="lazy"
              className={`relative h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] ${
                hasFailed(i) ? "invisible" : ""
              }`}
              onError={() => setFailed((prev) => new Set(prev).add(i))}
            />
            {/* Placeholder — only visible while the file is missing */}
            {hasFailed(i) && placeholder(i, "text-6xl")}
            {/* Hover overlay — "View Large" pill */}
            <span className="absolute inset-0 grid place-items-center bg-ink-950/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-ink-950/70 px-4 py-2 font-mono text-xs text-fog-100">
                <Maximize2 size={13} className="text-neon-400" />
                View Large
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} — screenshot ${open + 1} full view`}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink-950/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-ink-900/80 p-3 text-fog-200 transition-colors hover:border-neon-400 hover:text-neon-400"
          >
            <X size={18} />
          </button>

          <div
            className="relative max-h-full max-w-5xl overflow-hidden rounded-lg border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {hasFailed(open) ? (
              <div className="grid aspect-[4/3] w-full max-w-3xl place-items-center bg-ink-900/60">
                {placeholder(open, "text-8xl")}
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={images[open]}
                alt={`${projectTitle} — screenshot ${open + 1}`}
                className="max-h-[82vh] w-auto object-contain"
                onError={() => setFailed((prev) => new Set(prev).add(open))}
              />
            )}
            <span className="absolute bottom-3 right-4 rounded-md border border-white/10 bg-ink-950/80 px-2.5 py-1 font-mono text-[10.5px] text-fog-300 backdrop-blur">
              {String(open + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      )}
    </>
  );
}