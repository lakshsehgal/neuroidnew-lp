"use client";

import { useEffect, useState } from "react";
import { ugcVideoIds } from "@/lib/data";

// =================================================================
// Thumbnail card — YouTube thumbnail, click to open modal
// =================================================================

function VideoCard({
  videoId,
  onOpen,
}: {
  videoId: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Play video"
      className="group relative w-full aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-black shadow-xl hover:scale-[1.02] hover:border-gold/50 transition-all duration-300 cursor-pointer"
    >
      {/* YouTube thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Play button */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/30 grid place-items-center shadow-2xl group-hover:scale-110 group-hover:bg-black/60 transition-all duration-300">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Shorts badge */}
      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2 py-0.5 sm:py-1 rounded-full bg-black/65 backdrop-blur border border-white/10 text-[8px] sm:text-[9px] text-white/90 flex items-center gap-1 font-semibold uppercase tracking-wider pointer-events-none">
        <svg
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-red-500"
        >
          <path d="M23.5 6.5a3 3 0 00-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 00.5 6.5S0 8.5 0 10.5v2c0 2 .5 4 .5 4a3 3 0 002.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 002.1-2.1s.5-2 .5-4v-2c0-2-.5-4-.5-4zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
        Shorts
      </div>
    </button>
  );
}

// =================================================================
// Modal — YouTube iframe
// =================================================================

function VideoModal({
  videoId,
  onClose,
}: {
  videoId: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-xl grid place-items-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed top-5 right-5 w-11 h-11 rounded-full bg-white/10 backdrop-blur border border-white/20 grid place-items-center text-white hover:bg-white/20 active:scale-95 transition-all z-10"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>

      <div
        className="animate-scale-in w-full max-w-sm sm:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title="UGC Video"
          className="w-full aspect-[9/16] rounded-3xl border border-white/15 shadow-2xl bg-black"
        />
      </div>
    </div>
  );
}

// =================================================================
// Grid
// =================================================================

export function PortfolioGrid() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
        {ugcVideoIds.map((id, i) => (
          <div
            key={id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${Math.min(i * 60, 600)}ms` }}
          >
            <VideoCard videoId={id} onOpen={() => setActiveIdx(i)} />
          </div>
        ))}
      </div>

      {/* Video count */}
      <div className="mt-10 sm:mt-14 text-center text-sm text-white/40">
        <span className="font-semibold text-white/60">{ugcVideoIds.length} creatives</span>
        {" · "}
        and counting
      </div>

      {/* Modal */}
      {activeIdx !== null && (
        <VideoModal
          videoId={ugcVideoIds[activeIdx]}
          onClose={() => setActiveIdx(null)}
        />
      )}
    </>
  );
}
