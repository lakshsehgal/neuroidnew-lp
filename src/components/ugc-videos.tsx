"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ugcVideos, type UGCVideo } from "@/lib/data";

// =================================================================
// UGC Card — phone-frame preview, autoplay muted, click to open modal
// =================================================================

function UGCCard({ item, onOpen }: { item: UGCVideo; onOpen: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* silently ignore autoplay block */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.3, rootMargin: "100px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="shrink-0 w-56 sm:w-60 lg:w-[17rem] snap-center flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Play ${item.brand} UGC video with sound`}
        className="group relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/15 bg-black shadow-2xl hover:scale-[1.02] hover:border-gold/50 transition-all duration-300 cursor-pointer"
      >
        <video
          ref={videoRef}
          src={encodeURI(item.video)}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Edge shadow for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Play overlay — appears on hover */}
        <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/40 grid place-items-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white ml-1"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Muted indicator (top-right) */}
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/65 backdrop-blur border border-white/10 text-[9px] text-white/85 flex items-center gap-1 font-semibold uppercase tracking-wider pointer-events-none">
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <line x1="22" x2="16" y1="9" y2="15" />
            <line x1="16" x2="22" y1="9" y2="15" />
          </svg>
          Tap for sound
        </div>
      </button>

      {/* Brand logo pill (Shop Now CTA) */}
      <a
        href={item.shopUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-white text-black text-xs font-bold hover:scale-[1.05] active:scale-95 transition-transform duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]"
      >
        <Image
          src={item.logo}
          alt={item.brand}
          width={80}
          height={20}
          className="h-4 max-w-[72px] w-auto object-contain"
        />
        <span className="border-l border-black/15 pl-2 tracking-wide">Shop Now</span>
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="group-hover:translate-x-0.5 transition-transform duration-300"
        >
          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

// =================================================================
// UGC Modal — unmuted, starts from beginning, with native controls
// =================================================================

function UGCModal({ item, onClose }: { item: UGCVideo; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.volume = 1;
    v.play().catch(() => {
      /* some browsers block unmuted autoplay — user can tap play on native controls */
    });
  }, []);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-xl grid place-items-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.brand} video player`}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
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
        className="relative flex flex-col gap-5 items-center animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={encodeURI(item.video)}
          controls
          loop
          playsInline
          className="rounded-3xl object-cover border border-white/15 shadow-2xl bg-black max-h-[78vh] aspect-[9/16] w-auto"
        />

        <a
          href={item.shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gold text-black text-sm font-black uppercase tracking-wider hover:bg-gold-bright active:scale-95 transition-all duration-300 shadow-[0_0_50px_rgba(255,210,48,0.45)]"
        >
          <Image
            src={item.logo}
            alt={item.brand}
            width={80}
            height={20}
            className="h-4 max-w-[72px] w-auto object-contain"
          />
          <span className="border-l border-black/25 pl-2.5">Shop {item.brand}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="group-hover:translate-x-0.5 transition-transform duration-300"
          >
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// =================================================================
// Main section
// =================================================================

export function UGCVideos() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const onScroll = () => {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      setScrollPct(maxScroll > 0 ? scroller.scrollLeft / maxScroll : 0);
    };
    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  const scrollBy = (delta: number) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  const dotCount = 6;
  const activeDot = Math.round(scrollPct * (dotCount - 1));

  return (
    <section className="py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 mb-10 sm:mb-14 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold mb-3 sm:mb-4 font-semibold">
              / UGC That Converts
            </div>
            <h2 className="text-[2rem] sm:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em]">
              Real creators.
              <br />
              <span className="text-gradient-gold">Real conversions.</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-[15px] sm:text-base text-white/55 max-w-lg">
              Shoppable UGC reels built to scale. Tap any video to watch with sound — then click
              through to the brand.
            </p>
          </div>

          {/* Desktop arrows */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollBy(-320)}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] grid place-items-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/[0.06] active:scale-95 transition-all"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(320)}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] grid place-items-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/[0.06] active:scale-95 transition-all"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollerRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-5 sm:px-6 pb-6 scrollbar-hide"
      >
        {ugcVideos.map((item, i) => (
          <UGCCard
            key={`${item.brand}-${i}`}
            item={item}
            onOpen={() => setActiveIdx(i)}
          />
        ))}
        {/* Trailing spacer so last card snaps in properly */}
        <div className="shrink-0 w-1 sm:w-2" aria-hidden />
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-4 relative">
        {Array.from({ length: dotCount }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
              i === activeDot ? "w-6 bg-gold" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Modal */}
      {activeIdx !== null && (
        <UGCModal item={ugcVideos[activeIdx]} onClose={() => setActiveIdx(null)} />
      )}
    </section>
  );
}
