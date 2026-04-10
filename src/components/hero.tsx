import Image from "next/image";
import { stats } from "@/lib/data";

// Case-study banners sit in /public/hero/*.png.
// Each PNG already contains the brand lockup + result headline.
const heroCol1 = ["/hero/1.png", "/hero/3.png", "/hero/5.png", "/hero/7.png", "/hero/9.png"];
const heroCol2 = ["/hero/2.png", "/hero/4.png", "/hero/6.png", "/hero/8.png"];

function Banner({ src, eager }: { src: string; eager?: boolean }) {
  return (
    <Image
      src={src}
      alt=""
      width={960}
      height={1200}
      priority={eager}
      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 22vw"
      className="w-full h-auto rounded-2xl block border border-white/[0.08] shadow-2xl"
    />
  );
}

export function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-overlay opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full bg-gold/[0.06] blur-[130px] pointer-events-none" />
      <div className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-[1.15fr,1fr] gap-10 sm:gap-12 lg:gap-14 items-center">
          {/* ==================== LEFT: Copy + Stats ==================== */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gold/40 bg-gold/[0.06] backdrop-blur text-xs sm:text-sm font-medium text-white/90 mb-6 sm:mb-8 animate-fade-in-up"
              style={{ animationDelay: "0ms" }}
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
              </span>
              100+ D2C brands trust Neuroid
            </div>

            {/* Headline */}
            <h1
              className="font-black text-[2.5rem] sm:text-5xl lg:text-[5rem] leading-[0.95] sm:leading-[0.92] tracking-[-0.035em] mb-5 sm:mb-6 animate-fade-in-up"
              style={{ animationDelay: "120ms" }}
            >
              Creative-led <span className="text-gradient-gold">growth</span>
              <br />
              for ambitious
              <br />
              D2C brands.
            </h1>

            {/* Sub */}
            <p
              className="text-[15px] sm:text-lg text-white/60 max-w-xl mb-8 sm:mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "220ms" }}
            >
              Performance marketing, UGC creatives, retention &amp; CRO — engineered together as one
              full-funnel growth engine. We don&apos;t just run your ads; we move into your business.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gold text-black font-black uppercase text-sm tracking-wider hover:bg-gold-bright hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_50px_rgba(255,210,48,0.45)] mb-10 sm:mb-12 animate-fade-in-up"
              style={{ animationDelay: "320ms" }}
            >
              Book a Call
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="group-hover:translate-x-0.5 transition-transform duration-300"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Stats cards */}
            <div
              className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "420ms" }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur px-3 sm:px-5 py-3 sm:py-5 hover:border-gold/30 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${500 + i * 80}ms` }}
                >
                  <div className="text-xl sm:text-[2rem] font-black text-white mb-1 tracking-tight leading-none">
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/50 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== RIGHT: Banner grid (up + down marquee) ==================== */}
          <div
            className="relative h-[440px] sm:h-[560px] lg:h-[640px] overflow-hidden animate-fade-in-up"
            style={{ animationDelay: "520ms" }}
          >
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
