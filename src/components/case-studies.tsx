import { caseStudies } from "@/lib/data";

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
          {caseStudies.map((c, i) => (
            <div
              key={i}
              className="group relative p-7 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent hover:border-gold/40 hover:bg-gold/[0.02] transition-colors overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-5 font-semibold">
                  {c.tag}
                </div>
                <div className="text-2xl lg:text-[1.65rem] font-black text-white mb-3 leading-[1.1] tracking-tight">
                  {c.headline}
                </div>
                <div className="text-sm text-white/45 mb-8 leading-relaxed">{c.note}</div>

                <div className="pt-6 border-t border-white/10 flex items-end justify-between">
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
          ))}
        </div>
      </div>
    </section>
  );
}
