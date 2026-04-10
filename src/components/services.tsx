import { services } from "@/lib/data";

// ---- Per-service inline SVG illustrations ----

function PerformanceIllo() {
  return (
    <svg viewBox="0 0 180 110" className="w-full h-full">
      <defs>
        <linearGradient id="perfGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFDB52" />
          <stop offset="100%" stopColor="#E6B81F" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <line x1="0" y1="90" x2="180" y2="90" stroke="#ffffff" strokeOpacity="0.08" />
      <line x1="0" y1="60" x2="180" y2="60" stroke="#ffffff" strokeOpacity="0.05" />
      <line x1="0" y1="30" x2="180" y2="30" stroke="#ffffff" strokeOpacity="0.05" />
      <rect x="15" y="65" width="16" height="25" rx="2" fill="url(#perfGrad)" opacity="0.4" />
      <rect x="40" y="50" width="16" height="40" rx="2" fill="url(#perfGrad)" opacity="0.55" />
      <rect x="65" y="35" width="16" height="55" rx="2" fill="url(#perfGrad)" opacity="0.7" />
      <rect x="90" y="42" width="16" height="48" rx="2" fill="url(#perfGrad)" opacity="0.8" />
      <rect x="115" y="22" width="16" height="68" rx="2" fill="url(#perfGrad)" opacity="0.9" />
      <rect x="140" y="10" width="16" height="80" rx="2" fill="url(#perfGrad)" />
      <polyline
        points="23,70 48,55 73,38 98,45 123,25 148,13"
        stroke="#FFDB52"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="148" cy="13" r="3" fill="#FFDB52" />
      <circle cx="148" cy="13" r="7" fill="#FFDB52" opacity="0.3" />
    </svg>
  );
}

function CreativeIllo() {
  return (
    <svg viewBox="0 0 180 110" className="w-full h-full">
      <defs>
        <linearGradient id="creGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD230" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFD230" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect x="15" y="25" width="55" height="70" rx="6" fill="url(#creGrad1)" stroke="#FFD230" strokeOpacity="0.3" transform="rotate(-6 42 60)" />
      <rect x="60" y="18" width="55" height="75" rx="6" fill="url(#creGrad1)" stroke="#FFD230" strokeOpacity="0.5" />
      <rect x="105" y="25" width="55" height="70" rx="6" fill="url(#creGrad1)" stroke="#FFD230" strokeOpacity="0.3" transform="rotate(6 135 60)" />
      <circle cx="87" cy="55" r="14" fill="#FFD230" opacity="0.9" />
      <polygon points="83,48 96,55 83,62" fill="#050505" />
      <rect x="72" y="75" width="30" height="3" rx="1" fill="#fff" opacity="0.4" />
      <rect x="78" y="82" width="18" height="3" rx="1" fill="#fff" opacity="0.3" />
    </svg>
  );
}

function RetentionIllo() {
  return (
    <svg viewBox="0 0 180 110" className="w-full h-full">
      <defs>
        <linearGradient id="retGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFD230" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#FFD230" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFD230" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="90" cy="55" r="38" fill="none" stroke="#FFD230" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="3,4" />
      <circle cx="90" cy="55" r="26" fill="none" stroke="#FFD230" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3,4" />
      <path d="M 52 55 A 38 38 0 0 1 128 55" fill="none" stroke="url(#retGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="90" cy="17" r="6" fill="#FFD230" />
      <circle cx="128" cy="55" r="5" fill="#FFD230" opacity="0.7" />
      <circle cx="90" cy="93" r="5" fill="#FFD230" opacity="0.5" />
      <circle cx="52" cy="55" r="5" fill="#FFD230" opacity="0.7" />
      <circle cx="90" cy="55" r="8" fill="#050505" stroke="#FFD230" strokeWidth="1.5" />
      <path d="M 87 52 L 90 56 L 94 50" stroke="#FFD230" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CROIllo() {
  return (
    <svg viewBox="0 0 180 110" className="w-full h-full">
      <rect x="20" y="15" width="140" height="85" rx="6" fill="#0a0a0a" stroke="#FFD230" strokeOpacity="0.25" />
      <rect x="20" y="15" width="140" height="14" rx="6" fill="#141414" />
      <circle cx="28" cy="22" r="1.5" fill="#FFD230" opacity="0.6" />
      <circle cx="34" cy="22" r="1.5" fill="#FFD230" opacity="0.4" />
      <circle cx="40" cy="22" r="1.5" fill="#FFD230" opacity="0.3" />
      <rect x="50" y="19" width="70" height="6" rx="3" fill="#fff" opacity="0.08" />
      <rect x="30" y="38" width="60" height="6" rx="1.5" fill="#FFD230" opacity="0.8" />
      <rect x="30" y="48" width="85" height="3" rx="1" fill="#fff" opacity="0.2" />
      <rect x="30" y="54" width="75" height="3" rx="1" fill="#fff" opacity="0.2" />
      <rect x="30" y="60" width="65" height="3" rx="1" fill="#fff" opacity="0.2" />
      <rect x="30" y="75" width="50" height="14" rx="3" fill="#FFD230" />
      <rect x="30" y="75" width="50" height="14" rx="3" fill="url(#croShine)" />
      <rect x="110" y="40" width="40" height="50" rx="4" fill="#FFD230" opacity="0.1" stroke="#FFD230" strokeOpacity="0.3" />
      <circle cx="130" cy="60" r="10" fill="#FFD230" opacity="0.3" />
      <defs>
        <linearGradient id="croShine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const illos: Record<string, () => React.JSX.Element> = {
  "01": PerformanceIllo,
  "02": CreativeIllo,
  "03": RetentionIllo,
  "04": CROIllo,
};

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold mb-3 sm:mb-4 font-semibold">
            / What we do
          </div>
          <h2 className="text-[2rem] sm:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em]">
            Four disciplines.
            <br />
            <span className="text-white/35">One growth engine.</span>
          </h2>
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-base text-white/55 max-w-2xl">
            Creative, media, retention and conversion — run as one integrated system instead of three
            disconnected silos that finger-point when results slip.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {services.map((s) => {
            const Illo = illos[s.num];
            return (
              <div
                key={s.num}
                className="group relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.025] to-transparent hover:border-gold/30 transition-colors overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Illustration band */}
                <div className="relative h-36 sm:h-40 border-b border-white/[0.06] bg-black/30 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,210,48,0.08),transparent_70%)]" />
                  <div className="absolute inset-0 p-6">{Illo && <Illo />}</div>
                  <div className="absolute top-3 left-4 text-[11px] font-mono text-gold/70 tracking-wider">
                    /{s.num}
                  </div>
                </div>

                <div className="relative p-7 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight">{s.title}</h3>
                      <div className="text-sm text-white/40 mt-1">{s.subtitle}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 grid place-items-center group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-white/40 group-hover:text-gold group-hover:rotate-45 transition-all"
                      >
                        <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-white/60 text-[15px] leading-relaxed mb-6">{s.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs border border-white/10 text-white/65 bg-white/[0.02]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
