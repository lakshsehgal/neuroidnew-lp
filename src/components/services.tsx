import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-28 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold mb-4 font-semibold">
            / What we do
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em]">
            Four disciplines.
            <br />
            <span className="text-white/35">One growth engine.</span>
          </h2>
          <p className="mt-6 text-white/55 max-w-2xl">
            Creative, media, retention and conversion — run as one integrated system instead of three
            disconnected silos that finger-point when results slip.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative p-7 sm:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.025] to-transparent hover:border-gold/30 transition-colors overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-start justify-between mb-6">
                <div>
                  <div className="text-[11px] font-mono text-gold/70 mb-2 tracking-wider">/{s.num}</div>
                  <h3 className="text-2xl font-black tracking-tight">{s.title}</h3>
                  <div className="text-sm text-white/40 mt-1">{s.subtitle}</div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 grid place-items-center group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors">
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

              <p className="relative text-white/60 text-[15px] leading-relaxed mb-6">{s.desc}</p>

              <div className="relative flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    </section>
  );
}
