import { caseStudies } from "@/lib/data";

// Per-case-study brand color presets for the visual header
const presets = [
  { from: "#2a1a3d", to: "#0f0a1a", accent: "#C58CF2" }, // Skincare (purple)
  { from: "#3d0f1a", to: "#1a0810", accent: "#FF6B94" }, // Apparel (rose)
  { from: "#2a1f05", to: "#1a1303", accent: "#FFDB52" }, // Jewelry (gold)
  { from: "#0f2a1a", to: "#05170e", accent: "#7ED957" }, // F&B (green)
];

function SparkChart({ color }: { color: string }) {
  // Upward-trending sparkline (same shape for all, color varies)
  return (
    <svg
      viewBox="0 0 200 80"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <linearGradient id={`fill-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,68 L25,63 L50,52 L75,58 L100,42 L125,28 L150,22 L175,12 L200,5 L200,80 L0,80 Z"
        fill={`url(#fill-${color.replace("#", "")})`}
      />
      <path
        d="M0,68 L25,63 L50,52 L75,58 L100,42 L125,28 L150,22 L175,12 L200,5"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="200" cy="5" r="3.5" fill={color} />
      <circle cx="200" cy="5" r="7" fill={color} opacity="0.3" />
    </svg>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="py-28 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold mb-4 font-semibold">
              / Proof in numbers
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em]">
              Results that <span className="text-gradient-gold">compound.</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-sm">
            We measure success in MRR run-rates, ROAS holds at scale, and months from zero to profitable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {caseStudies.map((c, i) => {
            const preset = presets[i % presets.length];
            return (
              <div
                key={i}
                className="group relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent hover:border-gold/40 transition-colors overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Visual header */}
                <div
                  className="relative h-32 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${preset.from}, ${preset.to})` }}
                >
                  <SparkChart color={preset.accent} />
                  <div className="absolute top-3 left-4 flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: preset.accent }}
                    />
                    <div
                      className="text-[10px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: preset.accent }}
                    >
                      {c.tag}
                    </div>
                  </div>
                  <div className="absolute top-3 right-4 flex items-center gap-1 text-[10px] font-semibold" style={{ color: preset.accent }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M7 17L17 7M17 17V7H7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Scaling
                  </div>
                </div>

                <div className="relative p-6">
                  <div className="text-xl lg:text-[1.45rem] font-black text-white mb-2 leading-[1.1] tracking-tight">
                    {c.headline}
                  </div>
                  <div className="text-sm text-white/45 mb-6 leading-relaxed">{c.note}</div>

                  <div className="pt-5 border-t border-white/10 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-[0.15em] mb-1">
                        {c.metricLabel}
                      </div>
                      <div className="text-3xl font-black text-gradient-gold leading-none">{c.metric}</div>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white/30 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    >
                      <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
