export function CTASection() {
  return (
    <section id="contact" className="py-28 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-[2rem] border border-gold/30 overflow-hidden p-10 md:p-16 lg:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.18] via-gold/[0.05] to-transparent" />
          <div className="absolute inset-0 bg-grid-overlay opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-1/2 bg-gold/25 blur-[140px] rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/15 blur-[100px] rounded-full" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/[0.08] text-gold text-xs font-medium mb-8 backdrop-blur">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
              </span>
              Taking on 3 new brands this quarter
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em] mb-6">
              Ready to scale
              <br />
              <span className="text-gradient-gold">profitably?</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free 30-minute growth audit. We&apos;ll walk through your funnel and map the quickest
              path to profitable scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@neuroidmedia.com"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold text-black font-bold hover:bg-gold-bright transition-colors shadow-[0_0_50px_rgba(255,210,48,0.45)]"
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
              <div className="text-sm text-white/50">
                No contracts. Real operators. Built to scale with you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
