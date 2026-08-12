"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

const EMAIL = "ahmadmustafa.dev@gmail.com";

/**
 * Email trigger that never depends on the visitor's mailto handler.
 * Clicking opens a small popover with browser-based compose links
 * (Gmail / Outlook — To field prefilled) and a copy-email action.
 * Fixes Android "select app → Chrome does nothing" issue.
 */
export default function EmailCompose({
  className = "",
  align = "right",
  children,
}: {
  className?: string;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // clipboard API unavailable (http, permissions) — still show feedback
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}`;

  const alignClass =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : align === "left"
        ? "left-0"
        : "right-0";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={className}
      >
        {children}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={`Compose email to ${EMAIL}`}
          className={`absolute top-full z-50 mt-3 w-72 rounded-xl border border-white/10 bg-ink-900/95 p-2 shadow-2xl shadow-black/70 backdrop-blur-xl ${alignClass}`}
        >
          <p className="px-3 pb-1.5 pt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fog-700">
            Email {EMAIL}
          </p>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg px-3 py-2.5 font-mono text-[13px] text-fog-100 transition-colors hover:bg-neon-400/[0.06] hover:text-neon-300"
          >
            Compose in Gmail
            <ArrowUpRight size={14} className="text-fog-700 transition-colors group-hover:text-neon-400" />
          </a>
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg px-3 py-2.5 font-mono text-[13px] text-fog-100 transition-colors hover:bg-neon-400/[0.06] hover:text-neon-300"
          >
            Compose in Outlook
            <ArrowUpRight size={14} className="text-fog-700" />
          </a>

          <button
            type="button"
            onClick={copy}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-mono text-[13px] text-fog-100 transition-colors hover:bg-neon-400/[0.06] hover:text-neon-300"
          >
            {copied ? "Email copied" : "Copy email"}
            {copied ? (
              <Check size={14} className="text-neon-400" />
            ) : (
              <Copy size={14} className="text-fog-700" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
