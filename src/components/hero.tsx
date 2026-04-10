import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-overlay opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gold/[0.06] blur-[120px]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/10 blur-[100px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/[0.08] text-gold text-xs font-medium mb-8 backdrop-blur">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
          </span>
          Creative-Led D2C Growth Agency
        </div>

        {/* Headline */}
        <h1 className="font-black text-[2.75rem] sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em] mb-6">
          We don&apos;t just run your ads.
          <br />
          <span className="text-gradient-gold">We move into your business.</span>
        </h1>

        {/* Sub */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/60 mb-10 leading-relaxed">
          Performance marketing, UGC &amp; performance creatives, retention marketing and CRO — engineered
          together to scale ambitious D2C brands aggressively and profitably.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-black font-bold hover:bg-gold-bright transition-colors shadow-[0_0_40px_rgba(229,184,76,0.35)]"
          >
            Book a Growth Audit
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/[0.03] font-semibold transition-colors"
          >
            See Case Studies
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.08] rounded-2xl overflow-hidden max-w-5xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-black/70 backdrop-blur px-6 py-6 sm:py-8 hover:bg-black/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient-gold mb-1 tracking-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
