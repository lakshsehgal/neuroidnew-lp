"use client";

import { useEffect, useState } from "react";

/**
 * A thin gold progress bar fixed to the top of the viewport that tracks
 * scroll position. Uses requestAnimationFrame for buttery scroll updates.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 h-[2px] z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-gold-dim via-gold to-gold-bright shadow-[0_0_14px_rgba(255,210,48,0.7)]"
        style={{
          width: `${progress}%`,
          transition: "width 120ms linear",
        }}
      />
    </div>
  );
}
