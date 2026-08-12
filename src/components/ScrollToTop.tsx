"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Next.js preserves scroll position when navigating between routes that
 * share a layout. This resets to the top on every real route change,
 * while leaving hash-anchor jumps (e.g. "/#work") untouched.
 *
 * "instant" is required: the site uses `scroll-smooth` globally, so a
 * plain scrollTo(0,0) would animate from the old position up to the top.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Hash navigations keep the browser/anchor scroll behavior
    if (window.location.hash) return;

    // Double call: first call beats the first painted frame of the new
    // page; the rAF call wins any race with Next's own scroll handling.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const id = requestAnimationFrame(() =>
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    );
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}