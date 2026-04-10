import { comparison } from "@/lib/data";

const Check = () => (
  <svg
    className="w-4 h-4 text-green-400 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const X = () => (
  <svg
    className="w-4 h-4 text-red-400 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Comparison() {
  return (
    <section id="compare" className="py-28 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold mb-4 font-semibold">
            / Why Neuroid
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em] mb-5">
            Most agencies pick a lane.
            <br />
            <span className="text-gradient-gold">We own the whole funnel.</span>
          </h2>
          <p className="text-white/55 text-lg">
            Creative, media and conversion — run as one integrated system, not three disconnected silos.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block space-y-3">
          {/* Header */}
          <div className="grid grid-cols-4 gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/50 py-4 px-5 text-center text-xs font-bold tracking-[0.15em] uppercase text-white/70">
              Category
            </div>
            <div className="relative rounded-2xl border border-gold/50 bg-gradient-to-b from-gold/25 via-gold/10 to-gold/5 py-4 px-5 text-center text-sm font-black text-gold flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(229,184,76,0.2)]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 7l4 7 6-5 6 5 4-7v11H2V7z" />
              </svg>
              Full-Funnel D2C Agency
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/50 py-4 px-5 text-center text-sm font-bold text-gold/60">
              Paid Media Agency
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/50 py-4 px-5 text-center text-sm font-bold text-gold/60">
              Creative Agency
            </div>
          </div>

          {/* Rows */}
          {comparison.rows.map((row) => (
            <div key={row.category} className="grid grid-cols-4 gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/50 py-4 px-5 text-center text-sm font-semibold text-white/85 flex items-center justify-center">
                {row.category}
              </div>
              <div className="rounded-2xl border border-gold/50 bg-gradient-to-b from-gold/15 via-gold/[0.08] to-gold/[0.03] py-4 px-5 text-center text-sm font-bold text-white shadow-[0_0_25px_rgba(229,184,76,0.1)] flex items-center justify-center gap-2">
                <Check />
                <span>{row.neuroid}</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/50 py-4 px-5 text-center text-sm text-white/55 flex items-center justify-center gap-2">
                <X />
                <span>{row.paid}</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/50 py-4 px-5 text-center text-sm text-white/55 flex items-center justify-center gap-2">
                <X />
                <span>{row.creative}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Stacked */}
        <div className="md:hidden space-y-8">
          <div className="rounded-2xl border border-gold/50 bg-gradient-to-b from-gold/15 to-gold/[0.03] p-6 shadow-[0_0_30px_rgba(229,184,76,0.15)]">
            <div className="flex items-center gap-2 text-gold font-black mb-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 7l4 7 6-5 6 5 4-7v11H2V7z" />
              </svg>
              Full-Funnel D2C Agency
            </div>
            <ul className="space-y-3">
              {comparison.rows.map((row) => (
                <li key={row.category} className="flex items-start gap-3">
                  <Check />
                  <div>
                    <div className="text-xs text-white/45 uppercase tracking-wider">{row.category}</div>
                    <div className="text-sm font-semibold">{row.neuroid}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
              <div className="text-sm font-bold text-gold/60 mb-3">Paid Media Agency</div>
              <ul className="space-y-2">
                {comparison.rows.map((row) => (
                  <li key={row.category} className="flex items-start gap-2 text-sm text-white/55">
                    <X />
                    <span>{row.paid}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
              <div className="text-sm font-bold text-gold/60 mb-3">Creative Agency</div>
              <ul className="space-y-2">
                {comparison.rows.map((row) => (
                  <li key={row.category} className="flex items-start gap-2 text-sm text-white/55">
                    <X />
                    <span>{row.creative}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
