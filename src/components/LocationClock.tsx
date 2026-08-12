"use client";

import { useSyncExternalStore } from "react";

/**
 * Live local-time clock (Asia/Karachi) for the footer.
 * Built as an external store subscription (the React-recommended
 * pattern for time sources) — SSR-safe, no cascading renders.
 */

const subscribe = (callback: () => void) => {
  const id = setInterval(callback, 30_000);
  return () => clearInterval(id);
};

// Seconds-resolution snapshot keeps the store stable between ticks
const getSnapshot = () => Math.floor(Date.now() / 1000);
const getServerSnapshot = () => 0;

export default function LocationClock() {
  const timeInSeconds = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!timeInSeconds) return null;

  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(timeInSeconds * 1000));

  return (
    <p className="font-mono text-xs text-fog-700">
      PKT <span className="text-neon-500/80">{time}</span> — Lahore
    </p>
  );
}