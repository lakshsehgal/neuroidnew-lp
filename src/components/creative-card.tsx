// Fake "Meta ad" style creative preview card. Pure inline SVG — no images needed.

type Shape = "circle" | "pill" | "blob" | "square" | "diamond" | "wave" | "triangle" | "chart";

type CreativeCardProps = {
  brand: string;
  headline: string;
  cta: string;
  bgFrom: string;
  bgTo: string;
  accent: string;
  shape: Shape;
  className?: string;
};

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

export function CreativeCard({
  brand,
  headline,
  cta,
  bgFrom,
  bgTo,
  accent,
  shape,
  className = "",
}: CreativeCardProps) {
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

      {/* Top bar: avatar + handle + sponsored */}
      <div className="absolute top-3 left-3 right-3 flex items-center gap-2 z-10">
        <div
          className="w-6 h-6 rounded-full border border-white/30 grid place-items-center text-[9px] font-black"
          style={{ background: accent, color: bgTo }}
        >
          {brand[0].toUpperCase()}
        </div>
        <div className="text-white text-[11px] font-bold leading-none">{brand}</div>
        <div className="text-[9px] text-white/50 ml-auto uppercase tracking-wider">Sponsored</div>
      </div>

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
