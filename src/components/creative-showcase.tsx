import { CreativeCard } from "./creative-card";
import { creatives } from "@/lib/data";

export function CreativeShowcase() {
  return (
    <section className="py-28 sm:py-32 relative overflow-hidden">
      {/* Ambient gold glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold mb-4 font-semibold">
            / Creative Engine
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em] mb-5">
            Creative that scales to
            <br />
            <span className="text-gradient-gold">₹5–6L per ad.</span>
          </h2>
          <p className="text-white/55 text-lg">
            UGCs, HighProds, lifestyle, statics &amp; motion — produced at volume, tested at velocity, and
            engineered for winners that hold at scale.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {creatives.map((c) => (
            <div
              key={c.brand}
              className="transition-transform duration-500 hover:-translate-y-2 hover:rotate-[-1deg]"
            >
              <CreativeCard {...c} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Live creatives in rotation
          </div>
          <div className="hidden sm:block h-4 w-px bg-white/20" />
          <div className="hidden sm:block">Refreshed weekly</div>
          <div className="hidden sm:block h-4 w-px bg-white/20" />
          <div className="hidden sm:block">60+ hooks tested / month</div>
        </div>
      </div>
    </section>
  );
}
