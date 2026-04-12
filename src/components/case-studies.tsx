"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CaseStudy = {
  headline: string;
  description: string;
  metrics: { value: string; label: string }[];
  image: string;
};

// Placeholder case studies — user will provide real data soon.
const caseStudies: CaseStudy[] = [
  {
    headline: "₹5.6L to ₹86.7L monthly revenue in 10 months",
    description:
      "We helped a jewelry brand break through their growth plateau with a structured creative + media approach. Systematic testing of 60+ hooks per month, combined with full-funnel campaign architecture, drove a 15× revenue jump while maintaining healthy ROAS.",
    metrics: [
      { value: "15×", label: "Revenue Jump" },
      { value: "4.3X", label: "ROAS Achieved" },
    ],
    image: "/illustrations/11.png",
  },
  {
    headline: "₹5.18Cr revenue in 12 months for a fashion brand",
    description:
      "Scaled a women's apparel brand sustainably across four consecutive quarters. Diversified creative across UGCs, HighProds, and statics while optimizing the full conversion journey from ad click to checkout.",
    metrics: [
      { value: "5.7X", label: "Peak ROAS" },
      { value: "₹5.18Cr", label: "Revenue Generated" },
    ],
    image: "/illustrations/8.png",
  },
  {
    headline: "₹1.92Cr revenue in just 3 months — zero to one",
    description:
      "Took an F&B brand from zero online presence to profitable scale in under 90 days. Built the entire growth infrastructure from scratch — media, creative, landing pages, and retention flows.",
    metrics: [
      { value: "2.29X", label: "ROAS from Day One" },
      { value: "₹1.92Cr", label: "In 3 Months" },
    ],
    image: "/illustrations/7.png",
  },
  {
    headline: "₹1.5Cr+ MRR run-rate for a skincare brand",
    description:
      "Maintained a ₹1.5Cr+ monthly recurring revenue run-rate at scale by continuously refreshing creative, optimizing audience segments, and building retention flows that compounded LTV.",
    metrics: [
      { value: "2.3X", label: "ROAS at Scale" },
      { value: "₹1.5Cr+", label: "Monthly Run-Rate" },
    ],
    image: "/illustrations/9.png",
  },
];

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
  const activeDot = Math.round(scrollPct * (dotCount - 1));

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
          <div
            key={i}
            className="shrink-0 w-[88vw] sm:w-[85vw] max-w-6xl snap-center rounded-[2rem] bg-white overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-10 lg:p-14">
              {/* Left: dashboard screenshot */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 aspect-[4/3]">
                <Image
                  src={cs.image}
                  alt={cs.headline}
                  fill
                  sizes="(max-width: 768px) 85vw, 42vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Right: content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-black text-black tracking-tight leading-[1.05] mb-4 sm:mb-6">
                  {cs.headline}
                </h3>
                <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-8 sm:mb-10">
                  {cs.description}
                </p>
                <div className="flex gap-8 sm:gap-12">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight">
                        {m.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Trailing spacer */}
        <div className="shrink-0 w-2" aria-hidden />
      </div>

      {/* Pagination dots + arrows */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between mt-4 sm:mt-6">
        {/* Dots */}
        <div className="flex gap-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
                i === activeDot
                  ? "w-8 bg-white"
                  : "w-2 bg-white/25"
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-window.innerWidth * 0.85)}
            aria-label="Previous case study"
            className="w-12 h-12 rounded-full border-2 border-gold/60 bg-transparent grid place-items-center text-white/80 hover:bg-gold hover:text-black hover:border-gold active:scale-95 transition-all duration-300"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(window.innerWidth * 0.85)}
            aria-label="Next case study"
            className="w-12 h-12 rounded-full border-2 border-gold/60 bg-gold grid place-items-center text-black hover:bg-gold-bright hover:border-gold-bright active:scale-95 transition-all duration-300"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
