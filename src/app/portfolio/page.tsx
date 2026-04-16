import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";

export const metadata: Metadata = {
  title: "Portfolio — Neuroid Media",
  description:
    "UGC and performance creatives that scale D2C brands. Watch our best-performing ad creatives.",
};

export default function PortfolioPage() {
  return (
    <main className="relative pt-24 sm:pt-28 pb-20 sm:pb-28">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-overlay opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gold/[0.05] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-center mx-auto">
          <div className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold mb-3 sm:mb-4 font-semibold animate-fade-in-up">
            / Portfolio
          </div>
          <h1
            className="text-[2.5rem] sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-[-0.035em] mb-5 sm:mb-6 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Check out some of
            <br />
            <span className="text-gradient-gold">our work.</span>
          </h1>
          <p
            className="text-[15px] sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            UGC reels, HighProds, and performance creatives — all produced by
            Neuroid and battle-tested at scale. Tap any creative to view.
          </p>
        </div>

        {/* Grid */}
        <PortfolioGrid />
      </div>
    </main>
  );
}
