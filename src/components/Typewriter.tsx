"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "the full stack",
  "mobile apps",
  "AI automation",
  "APIs that scale",
];

/**
 * Typewriter effect for the hero headline.
 * Types, pauses, deletes, cycles. Falls back to the first word
 * statically for prefers-reduced-motion.
 */
export default function Typewriter() {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [staticWord] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? WORDS[0]
      : "",
  );

  useEffect(() => {
    if (staticWord) return; // reduced motion: static first word
    const word = WORDS[wordIndex];
    let delay: number;

    if (!deleting && display === word) {
      delay = 2100; // hold the full word
    } else if (deleting && display === "") {
      delay = 350; // pause before typing next word
    } else {
      delay = deleting ? 30 : 75;
    }

    const t = setTimeout(() => {
      if (!deleting && display === word) {
        setDeleting(true);
      } else if (deleting && display === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % WORDS.length);
      } else {
        setDisplay(word.slice(0, display.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [display, deleting, wordIndex, staticWord]);

  const shown = staticWord || display;

  return (
    <span className="text-gradient inline-block whitespace-nowrap">
      {shown}
      {!staticWord && (
        <span aria-hidden="true" className="animate-blink ml-0.5 text-neon-400">
          ?
        </span>
      )}
    </span>
  );
}