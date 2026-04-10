import { stats } from "@/lib/data";

// Case-study banners sit in /public/hero/*.png.
// Each PNG already contains the brand lockup + result headline, so
// no overlay is needed — we just render the image.
const heroCol1 = ["/hero/1.png", "/hero/3.png", "/hero/5.png", "/hero/7.png", "/hero/9.png"];
const heroCol2 = ["/hero/2.png", "/hero/4.png", "/hero/6.png", "/hero/8.png"];

function Banner({ src, eager }: { src: string; eager?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      loading={eager ? "eager" : "lazy"}
      className="w-full h-auto rounded-2xl block border border-white/[0.08] shadow-2xl"
    />
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-overlay opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full bg-gold/[0.06] blur-[130px] pointer-events-none" />
      <div className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr,1fr] gap-12 lg:gap-14 items-center">
          {/* ==================== LEFT: Copy + Stats ==================== */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold/40 bg-gold/[0.06] backdrop-blur text-sm font-medium text-white/90 mb-8">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
              </span>
              100+ D2C brands trust Neuroid
            </div>

            {/* Headline */}
            <h1 className="font-black text-[2.75rem] sm:text-6xl lg:text-[5rem] leading-[0.92] tracking-[-0.035em] mb-6">
              Creative-led <span className="text-gradient-gold">growth</span>
              <br />
              for ambitious
              <br />
              D2C brands.
            </h1>

            {/* Sub */}
            <p className="text-base sm:text-lg text-white/60 max-w-xl mb-10 leading-relaxed">
              Performance marketing, UGC creatives, retention &amp; CRO — engineered together as one
              full-funnel growth engine. We don&apos;t just run your ads; we move into your business.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold text-black font-black uppercase text-sm tracking-wider hover:bg-gold-bright transition-colors shadow-[0_0_50px_rgba(255,210,48,0.45)] mb-12"
            >
              Book a Call
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur px-4 sm:px-5 py-4 sm:py-5 hover:border-gold/25 transition-colors"
                >
                  <div className="text-2xl sm:text-[2rem] font-black text-white mb-1 tracking-tight leading-none">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-white/50 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== RIGHT: Banner grid (up + down marquee) ==================== */}
          <div className="relative h-[560px] lg:h-[640px] overflow-hidden">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
              {/* Col 1 — scrolls upward */}
              <div className="relative overflow-hidden">
                <div
                  className="flex flex-col gap-3 sm:gap-4 animate-marquee-up will-change-transform"
                  style={{ animationDuration: "55s" }}
                >
                  {[...heroCol1, ...heroCol1].map((src, i) => (
                    <Banner key={`c1-${i}`} src={src} eager={i < 2} />
                  ))}
                </div>
              </div>

              {/* Col 2 — scrolls downward */}
              <div className="relative overflow-hidden">
                <div
                  className="flex flex-col gap-3 sm:gap-4 animate-marquee-down will-change-transform"
                  style={{ animationDuration: "65s" }}
                >
                  {[...heroCol2, ...heroCol2].map((src, i) => (
                    <Banner key={`c2-${i}`} src={src} eager={i < 2} />
                  ))}
                </div>
              </div>
            </div>

            {/* Top + bottom fades */}
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-bg via-bg/80 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-bg via-bg/80 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
