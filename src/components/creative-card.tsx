"use client";

import { useRef, useState } from "react";

// ---- Types ----

type Shape = "circle" | "pill" | "blob" | "square" | "diamond" | "wave" | "triangle" | "chart";

export type CreativeCardProps = {
  brand: string;
  headline: string;
  cta: string;
  bgFrom: string;
  bgTo: string;
  accent: string;
  shape: Shape;
  /** Path to a video file, e.g. "/creatives/videos/sylvi.mp4" */
  video?: string;
  /** Path to a static image, e.g. "/creatives/static/sylvi.jpg" */
  image?: string;
  /** Optional poster frame shown while video loads */
  poster?: string;
  className?: string;
};

// ---- Abstract shape (used in mock mode) ----

function ShapeSvg({ shape, color }: { shape: Shape; color: string }) {
  const common = { fill: color, opacity: 0.28 } as const;
  switch (shape) {
    case "circle":
      return (
        <>
          <circle cx="100" cy="130" r="58" {...common} />
          <circle cx="100" cy="130" r="30" fill={color} opacity={0.5} />
          <circle cx="100" cy="130" r="8" fill="#fff" opacity={0.8} />
        </>
      );
    case "pill":
      return (
        <>
          <rect x="55" y="80" width="90" height="110" rx="45" {...common} />
          <rect x="70" y="100" width="60" height="12" rx="6" fill={color} opacity={0.6} />
          <rect x="70" y="120" width="60" height="12" rx="6" fill={color} opacity={0.4} />
          <rect x="70" y="140" width="60" height="12" rx="6" fill={color} opacity={0.3} />
        </>
      );
    case "blob":
      return (
        <>
          <path
            d="M60 90 Q100 50 145 85 Q185 125 155 175 Q110 215 55 180 Q25 135 60 90 Z"
            {...common}
          />
          <path
            d="M80 115 Q100 95 125 115 Q145 140 125 165 Q100 185 75 165 Q55 140 80 115 Z"
            fill={color}
            opacity={0.5}
          />
        </>
      );
    case "square":
      return (
        <>
          <rect x="55" y="85" width="95" height="95" rx="14" {...common} />
          <rect x="55" y="85" width="95" height="95" rx="14" fill="none" stroke={color} strokeWidth="1.5" opacity={0.6} />
          <line x1="55" y1="130" x2="150" y2="130" stroke={color} strokeWidth="1" opacity={0.4} />
          <line x1="102" y1="85" x2="102" y2="180" stroke={color} strokeWidth="1" opacity={0.4} />
        </>
      );
    case "diamond":
      return (
        <>
          <polygon points="100,60 165,130 100,200 35,130" {...common} />
          <polygon points="100,85 140,130 100,175 60,130" fill={color} opacity={0.5} />
          <polygon points="100,110 120,130 100,150 80,130" fill="#fff" opacity={0.7} />
        </>
      );
    case "wave":
      return (
        <>
          <path
            d="M10 150 Q50 100 100 150 T190 150 L190 220 L10 220 Z"
            {...common}
          />
          <path
            d="M10 170 Q50 130 100 170 T190 170"
            stroke={color}
            strokeWidth="2"
            fill="none"
            opacity={0.6}
          />
          <circle cx="100" cy="100" r="22" fill={color} opacity={0.5} />
        </>
      );
    case "triangle":
      return (
        <>
          <polygon points="100,60 175,195 25,195" {...common} />
          <polygon points="100,95 150,185 50,185" fill={color} opacity={0.5} />
        </>
      );
    case "chart":
      return (
        <>
          <polyline
            points="25,180 55,160 85,168 115,130 145,95 175,55"
            stroke={color}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon
            points="25,180 55,160 85,168 115,130 145,95 175,55 175,200 25,200"
            fill={color}
            opacity={0.2}
          />
          <circle cx="175" cy="55" r="5" fill={color} />
          <circle cx="175" cy="55" r="10" fill={color} opacity={0.3} />
        </>
      );
  }
}

// ---- Icons ----

function MuteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <line x1="22" x2="16" y1="9" y2="15" />
      <line x1="16" x2="22" y1="9" y2="15" />
    </svg>
  );
}

function UnmuteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

// ---- Shared chrome (top bar, bottom content) ----

function TopBar({ brand, accent, bgTo }: { brand: string; accent: string; bgTo: string }) {
  return (
    <div className="absolute top-3 left-3 right-3 flex items-center gap-2 z-10">
      <div
        className="w-6 h-6 rounded-full border border-white/30 grid place-items-center text-[9px] font-black"
        style={{ background: accent, color: bgTo }}
      >
        {brand[0].toUpperCase()}
      </div>
      <div className="text-white text-[11px] font-bold leading-none drop-shadow">{brand}</div>
      <div className="text-[9px] text-white/60 ml-auto uppercase tracking-wider">Sponsored</div>
    </div>
  );
}

// ---- Video variant ----

function VideoCreative(props: CreativeCardProps) {
  const { brand, bgFrom, bgTo, accent, video, poster, className = "" } = props;
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div
      className={`relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl ${className}`}
      style={{ background: `linear-gradient(135deg, ${bgFrom}, ${bgTo})` }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle top/bottom vignettes for legibility */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-[5]" />

      {/* Top bar: handle + sponsored */}
      <TopBar brand={brand} accent={accent} bgTo={bgTo} />

      {/* "Playing" indicator */}
      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur border border-white/15 text-[9px] font-bold text-white uppercase tracking-wider z-10">
        <span className="relative flex w-1 h-1">
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-1 w-1 bg-red-400" />
        </span>
        Playing
      </div>

      {/* Mute toggle */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur border border-white/20 grid place-items-center text-white hover:bg-black/90 hover:border-white/40 transition-colors z-20"
      >
        {muted ? <MuteIcon /> : <UnmuteIcon />}
      </button>
    </div>
  );
}

// ---- Mock (SVG) variant ----

function MockCreative(props: CreativeCardProps) {
  const { brand, headline, cta, bgFrom, bgTo, accent, shape, className = "" } = props;

  return (
    <div
      className={`relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl ${className}`}
      style={{ background: `linear-gradient(135deg, ${bgFrom}, ${bgTo})` }}
    >
      {/* Abstract graphic */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 250"
        preserveAspectRatio="xMidYMid meet"
      >
        <ShapeSvg shape={shape} color={accent} />
      </svg>

      <TopBar brand={brand} accent={accent} bgTo={bgTo} />

      {/* Bottom content: headline + CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10">
        <div className="text-white font-black text-[13px] uppercase leading-tight mb-3 tracking-tight">
          {headline}
        </div>
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-bold"
            style={{ background: "#fff", color: "#000" }}
          >
            {cta}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div className="flex items-center gap-3 text-white/50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Static image variant ----

function ImageCreative(props: CreativeCardProps) {
  const { brand, headline, cta, bgFrom, bgTo, accent, image, className = "" } = props;
  return (
    <div
      className={`relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl ${className}`}
      style={{ background: `linear-gradient(135deg, ${bgFrom}, ${bgTo})` }}
    >
      {/* Static creative fills the card */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={`${brand} creative`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Vignettes for overlay legibility */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/55 to-transparent pointer-events-none z-[5]" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-[5]" />

      <TopBar brand={brand} accent={accent} bgTo={bgTo} />

      {/* Bottom content: headline + CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="text-white font-black text-[13px] uppercase leading-tight mb-3 tracking-tight drop-shadow">
          {headline}
        </div>
        <span
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-bold"
          style={{ background: "#fff", color: "#000" }}
        >
          {cta}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

// ---- Public component: picks variant based on provided media ----
// Priority: video > image > mock (SVG fallback)

export function CreativeCard(props: CreativeCardProps) {
  if (props.video) return <VideoCreative {...props} />;
  if (props.image) return <ImageCreative {...props} />;
  return <MockCreative {...props} />;
}
