import { WhatsAppIcon } from "./icons";

const WHATSAPP_NUMBER = "+92 300 9535229";
const WHATSAPP_LINK = "https://wa.me/923009535229";

/**
 * Floating WhatsApp action button — bottom-right.
 * Pulsing ring, staggered entrance, hover tooltip.
 * Pure CSS animation; no JS needed.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp: ${WHATSAPP_NUMBER}`}
      className="group fixed bottom-6 right-6 z-50"
    >
      {/* Pulsing halo */}
      <span
        aria-hidden="true"
        className="animate-wa-in absolute inset-0 rounded-full bg-neon-400/50"
      />
      <span
        aria-hidden="true"
        className="animate-ring-pulse absolute inset-0 rounded-full bg-neon-400/40"
      />

      {/* Button body — gentle float like ko-ramen.com */}
      <span className="animate-wa-float relative flex h-14 w-14 items-center justify-center rounded-full bg-neon-400 text-ink-950 shadow-[0_8px_28px_-6px_rgb(211_248_75/0.6)] transition-colors duration-300 hover:bg-neon-300 hover:scale-110 hover:shadow-[0_10px_36px_-4px_rgb(211_248_75/0.8)]">
        <WhatsAppIcon />
      </span>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-ink-850 px-4 py-2.5 font-mono text-xs text-fog-100 opacity-0 shadow-2xl transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
        <span className="block text-fog-500">WhatsApp me</span>
        {WHATSAPP_NUMBER}
        <span
          aria-hidden="true"
          className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-ink-850"
        />
      </span>
    </a>
  );
}