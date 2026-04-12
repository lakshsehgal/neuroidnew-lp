import Image from "next/image";
import { services } from "@/lib/data";

// Map each service to a real screenshot from /public/illustrations
const serviceImages: Record<string, string> = {
  "01": "/illustrations/11.png", // Performance Marketing → Shopify/Google Ads dashboard
  "02": "/illustrations/12.png", // UGC & Creatives → Social collage (TikTok, YouTube, creators)
  "03": "/illustrations/6.png",  // Retention Marketing → Creative Insights + audience analytics
  "04": "/illustrations/10.png", // CRO & Landing Pages → Mobile CRO screenshots (cart, PDP)
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
            const img = serviceImages[s.num];
            return (
              <div
                key={s.num}
                className="group relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.025] to-transparent hover:border-gold/30 transition-colors overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Screenshot backdrop — dimmed, full-bleed with heavy gradient */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  {img && (
                    <Image
                      src={img}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center opacity-[0.35] group-hover:opacity-50 group-hover:scale-110 transition-all duration-[1.2s] ease-out"
                      loading="lazy"
                    />
                  )}
                  {/* Heavy gradient: bottom is solid black, fades to semi-transparent at top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/20 pointer-events-none" />
                  {/* Subtle gold glow at top */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,210,48,0.07),transparent_60%)] pointer-events-none" />
                  {/* Number label */}
                  <div className="absolute top-4 left-5 text-[11px] font-mono text-gold/80 tracking-wider z-10">
                    /{s.num}
                  </div>
                  {/* Subtle gold hairline at bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
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
