import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-28 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold mb-4 font-semibold">
            / Trusted partners
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em]">
            What founders
            <br />
            <span className="text-gradient-gold">say about us.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.025] to-transparent hover:border-gold/25 transition-colors"
            >
              <div className="flex items-center gap-1 text-gold mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.897l-7.416 4.516 1.48-8.279L0 9.306l8.332-1.151z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-white/85 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/30 grid place-items-center text-gold font-black text-sm">
                  {t.author[0]}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.author}</div>
                  <div className="text-xs text-white/40">{t.brand}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
