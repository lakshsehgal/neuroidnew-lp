"use client";

import { useEffect, useRef, useState } from "react";

// =================================================================
// Types
// =================================================================

type Metric = {
  label: string;
  value: string;
  change: string;
  direction: "up" | "down";
};

type DashboardMetrics = {
  dateRange: string;
  totalSales: Metric;
  orders: Metric;
  aov: Metric;
};

type CaseStudy = {
  headline: string;
  description: string;
  before: DashboardMetrics;
  after: DashboardMetrics;
};

// =================================================================
// Case studies data — user will add 2-3 more later
// =================================================================

const caseStudies: CaseStudy[] = [
  {
    headline: "From 69L/month to 2Cr+/month in 4 months with 24% ROAS improvement",
    description:
      "Within the first 6 months of working with this jewellery brand, our growth system drove a 3X monthly revenue jump with a 4.3X ROAS (24% improvement in ROAS).",
    before: {
      dateRange: "Jun 1–30, 2025",
      totalSales: { label: "Total sales over time", value: "₹69,48,249.88", change: "9%", direction: "down" },
      orders: { label: "Orders over time", value: "10,967", change: "7%", direction: "down" },
      aov: { label: "Average order value over time", value: "₹610.75", change: "5%", direction: "up" },
    },
    after: {
      dateRange: "Oct 1–31, 2025",
      totalSales: { label: "Total sales over time", value: "₹2,03,72,486.95", change: "11%", direction: "up" },
      orders: { label: "Orders over time", value: "30,932", change: "17%", direction: "up" },
      aov: { label: "Average order value over time", value: "₹615.33", change: "3%", direction: "up" },
    },
  },
];

// =================================================================
// Sparkline SVG (looks like a Shopify chart)
// =================================================================

function Sparkline({ direction }: { direction: "up" | "down" }) {
  // Declining or ascending line mimicking real Shopify charts
  const points =
    direction === "up"
      ? "0,22 8,20 16,21 24,18 32,16 40,13 48,14 56,10 64,8 72,5 80,3"
      : "0,8 8,10 16,9 24,14 32,11 40,18 48,15 56,22 64,19 72,24 80,22";

  return (
    <svg
      viewBox="0 0 80 28"
      className="w-full h-8 sm:h-10 mt-1.5"
      preserveAspectRatio="none"
    >
      <polyline
        points={points}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dashed comparison line behind */}
      <polyline
        points={
          direction === "up"
            ? "0,15 10,14 20,17 30,13 40,16 50,12 60,14 70,10 80,11"
            : "0,10 10,12 20,10 30,15 40,13 50,17 60,15 70,20 80,19"
        }
        fill="none"
        stroke="#93C5FD"
        strokeWidth="1"
        strokeDasharray="2,2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// =================================================================
// Metric card inside the dashboard mockup
// =================================================================

function MetricCard({ metric }: { metric: Metric }) {
  const isUp = metric.direction === "up";
  return (
    <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200/60">
      <div className="text-[9px] sm:text-[10px] text-gray-500 mb-1 line-clamp-1">
        {metric.label}
      </div>
      <div className="flex items-baseline gap-1.5 mb-1">
        <span className="text-[13px] sm:text-sm font-bold text-gray-900 leading-none">
          {metric.value}
        </span>
        <span
          className={`text-[10px] sm:text-[11px] font-semibold leading-none ${
            isUp ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {isUp ? "↗" : "↘"} {metric.change}
        </span>
      </div>
      <Sparkline direction={metric.direction} />
    </div>
  );
}

// =================================================================
// Dashboard mockup (Shopify-style) — Before or After
// =================================================================

function ResultsDashboard({
  label,
  metrics,
}: {
  label: "Before" | "After";
  metrics: DashboardMetrics;
}) {
  return (
    <div className="relative bg-gray-100 rounded-2xl p-3 sm:p-4 border border-gray-200">
      {/* Before/After pill */}
      <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black text-white text-[10px] sm:text-xs font-bold italic shadow-lg z-10">
        {label}
      </div>

      {/* Date picker row */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3">
        <div className="px-2 py-1 rounded-md bg-white border border-gray-200 text-[9px] sm:text-[10px] text-gray-700 flex items-center gap-1">
          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {metrics.dateRange}
        </div>
        <div className="px-2 py-1 rounded-md bg-white border border-gray-200 text-[9px] sm:text-[10px] text-gray-700">
          INR ₹
        </div>
      </div>

      {/* Metric grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
        <MetricCard metric={metrics.totalSales} />
        <MetricCard metric={metrics.orders} />
        <div className="col-span-2">
          <MetricCard metric={metrics.aov} />
        </div>
      </div>
    </div>
  );
}

// =================================================================
// Single case study card
// =================================================================

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <div className="shrink-0 w-[90vw] sm:w-[88vw] max-w-6xl snap-center rounded-[2rem] bg-gradient-to-br from-[#0f0f0f] to-[#060606] border border-white/10 overflow-hidden">
      <div className="grid lg:grid-cols-[1fr,1.15fr] gap-8 sm:gap-10 lg:gap-14 p-6 sm:p-10 lg:p-14">
        {/* Left: copy + CTA */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-black text-white tracking-[-0.02em] leading-[1.1] mb-5 sm:mb-6">
            {cs.headline}
          </h3>
          <p className="text-white/55 text-[14px] sm:text-base leading-relaxed mb-6 sm:mb-8">
            {cs.description}
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 self-start px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border-2 border-gold text-gold font-black uppercase text-xs sm:text-sm tracking-wider hover:bg-gold hover:text-black transition-all duration-300"
          >
            Book a Call
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="group-hover:translate-x-0.5 transition-transform duration-300"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Right: before/after dashboards */}
        <div className="space-y-4 sm:space-y-5">
          <ResultsDashboard label="Before" metrics={cs.before} />
          <ResultsDashboard label="After" metrics={cs.after} />
        </div>
      </div>
    </div>
  );
}

// =================================================================
// Main carousel section
// =================================================================

export function CaseStudies() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const onScroll = () => {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      setScrollPct(maxScroll > 0 ? scroller.scrollLeft / maxScroll : 0);
    };
    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  const scrollBy = (delta: number) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  const dotCount = caseStudies.length;
  const activeDot = Math.round(scrollPct * Math.max(dotCount - 1, 0));

  return (
    <section id="work" className="py-20 sm:py-24 lg:py-28 relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mb-10 sm:mb-14">
        <div className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold mb-3 sm:mb-4 font-semibold">
          / Case Studies
        </div>
        <h2 className="text-[2rem] sm:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em]">
          Results that
          <br />
          <span className="text-gradient-gold">speak for themselves.</span>
        </h2>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollerRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-5 sm:px-6 pb-8 scrollbar-hide"
      >
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={i} cs={cs} />
        ))}
        <div className="shrink-0 w-2" aria-hidden />
      </div>

      {/* Pagination dots + arrows — only show when multiple case studies */}
      {caseStudies.length > 1 && (
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between mt-4 sm:mt-6">
          <div className="flex gap-2">
            {Array.from({ length: dotCount }).map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  i === activeDot ? "w-8 bg-white" : "w-2 bg-white/25"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-window.innerWidth * 0.85)}
              aria-label="Previous case study"
              className="w-12 h-12 rounded-full border-2 border-gold/60 bg-transparent grid place-items-center text-white/80 hover:bg-gold hover:text-black hover:border-gold active:scale-95 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(window.innerWidth * 0.85)}
              aria-label="Next case study"
              className="w-12 h-12 rounded-full border-2 border-gold/60 bg-gold grid place-items-center text-black hover:bg-gold-bright hover:border-gold-bright active:scale-95 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
