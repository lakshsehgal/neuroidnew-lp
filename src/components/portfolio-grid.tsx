"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ugcVideoIds, staticCreatives } from "@/lib/data";

type Tab = "videos" | "statics";

// =================================================================
// Tab switcher (pill-style toggle)
// =================================================================

function TabSwitcher({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (t: Tab) => void;
}) {
  return (
    <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur">
      <button
        type="button"
        onClick={() => onChange("videos")}
        className={`relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-bold transition-colors duration-300 ${
          active === "videos"
            ? "bg-gold text-black shadow-[0_0_25px_rgba(255,210,48,0.35)]"
            : "text-white/70 hover:text-white"
        }`}
      >
        Video Creatives
      </button>
      <button
        type="button"
        onClick={() => onChange("statics")}
        className={`relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-bold transition-colors duration-300 ${
          active === "statics"
            ? "bg-gold text-black shadow-[0_0_25px_rgba(255,210,48,0.35)]"
            : "text-white/70 hover:text-white"
        }`}
      >
        Static Creatives
      </button>
    </div>
  );
}

// =================================================================
// Video card (YouTube thumbnail)
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/30 grid place-items-center shadow-2xl group-hover:scale-110 group-hover:bg-black/60 transition-all duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2 py-0.5 sm:py-1 rounded-full bg-black/65 backdrop-blur border border-white/10 text-[8px] sm:text-[9px] text-white/90 flex items-center gap-1 font-semibold uppercase tracking-wider pointer-events-none">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
          <path d="M23.5 6.5a3 3 0 00-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 00.5 6.5S0 8.5 0 10.5v2c0 2 .5 4 .5 4a3 3 0 002.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 002.1-2.1s.5-2 .5-4v-2c0-2-.5-4-.5-4zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
        Shorts
      </div>
    </button>
  );
}

// =================================================================
// Static image card
// =================================================================

function StaticCard({
  src,
  onOpen,
}: {
  src: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="View creative"
      className="group relative w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-black shadow-xl hover:scale-[1.02] hover:border-gold/50 transition-all duration-300 cursor-pointer"
    >
      <Image
        src={encodeURI(src)}
        alt=""
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      {/* Subtle hover overlay + icon */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur border border-white/30 grid place-items-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M15 3h6v6M10 14L21 3M21 14v7h-7M3 10V3h7M3 3l11 11" />
          </svg>
        </div>
      </div>
    </button>
  );
}

// =================================================================
// Video modal (YouTube iframe)
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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
// Static modal (full-size image lightbox)
// =================================================================

function StaticModal({
  src,
  onClose,
}: {
  src: string;
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>
      <div
        className="relative animate-scale-in max-w-[90vw] max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={encodeURI(src)}
          alt=""
          className="max-w-[90vw] max-h-[88vh] w-auto h-auto rounded-2xl border border-white/15 shadow-2xl object-contain"
        />
      </div>
    </div>
  );
}

// =================================================================
// Main grid with tab switcher
// =================================================================

export function PortfolioGrid() {
  const [tab, setTab] = useState<Tab>("videos");
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [activeStatic, setActiveStatic] = useState<number | null>(null);

  return (
    <>
      {/* Tab switcher */}
      <div
        className="flex justify-center mb-10 sm:mb-14 animate-fade-in-up"
        style={{ animationDelay: "280ms" }}
      >
        <TabSwitcher active={tab} onChange={setTab} />
      </div>

      {/* Grid content */}
      {tab === "videos" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {ugcVideoIds.map((id, i) => (
            <div
              key={id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${Math.min(i * 50, 500)}ms` }}
            >
              <VideoCard videoId={id} onOpen={() => setActiveVideo(i)} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {staticCreatives.map((src, i) => (
            <div
              key={src}
              className="animate-fade-in-up"
              style={{ animationDelay: `${Math.min(i * 50, 500)}ms` }}
            >
              <StaticCard src={src} onOpen={() => setActiveStatic(i)} />
            </div>
          ))}
        </div>
      )}

      {/* Count label */}
      <div className="mt-10 sm:mt-14 text-center text-sm text-white/40">
        {tab === "videos" ? (
          <>
            <span className="font-semibold text-white/60">
              {ugcVideoIds.length} video creatives
            </span>
            {" · "}and counting
          </>
        ) : (
          <>
            <span className="font-semibold text-white/60">
              {staticCreatives.length} static creatives
            </span>
            {" · "}and counting
          </>
        )}
      </div>

      {/* Modals */}
      {activeVideo !== null && (
        <VideoModal
          videoId={ugcVideoIds[activeVideo]}
          onClose={() => setActiveVideo(null)}
        />
      )}
      {activeStatic !== null && (
        <StaticModal
          src={staticCreatives[activeStatic]}
          onClose={() => setActiveStatic(null)}
        />
      )}
    </>
  );
}
