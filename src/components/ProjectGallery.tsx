"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Props = {
  images: string[];
  projectTitle: string;
};

/**
 * Screenshots grid — tiles styled exactly like the reference case-study
 * page (h-64, zoom on hover, dark overlay, accent "View Large" pill).
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
      {/* Exact reference grid + tile styling */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`View screenshot ${i + 1} of ${projectTitle} large`}
            className="group relative cursor-pointer overflow-hidden rounded-lg text-left shadow-lg transition-all duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-neon-400"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${projectTitle} — screenshot ${i + 1}`}
              loading="lazy"
              className={`h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                hasFailed(i) ? "invisible" : ""
              }`}
              onError={() => setFailed((prev) => new Set(prev).add(i))}
            />
            {/* Placeholder — only visible while the file is missing */}
            {hasFailed(i) && (
              <div className="relative h-64 w-full bg-ink-850">
                {placeholder(i, "text-6xl")}
              </div>
            )}
            {/* Dark overlay + "View Large" pill on hover — exact reference */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <span className="rounded-full bg-neon-400/90 px-4 py-2 text-sm font-medium text-ink-950 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
              <div className="grid h-96 w-full max-w-3xl place-items-center bg-ink-900/60">
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