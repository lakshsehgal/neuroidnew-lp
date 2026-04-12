"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GrowthStep = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
};

// 6-step growth method. Images use files already in /public/creatives/static.
// Swap the image paths whenever you want to show different creatives alongside
// a given step — that's the only thing you ever need to edit.
const steps: GrowthStep[] = [
  {
    num: "01",
    title: "Initial Research, Alignment & Strategy Development",
    desc: "Every engagement starts with a data-backed roadmap. We dissect first-party data, audience behavior and platform dynamics to architect a growth model tailored to your brand's scale stage.",
    bullets: [
      "AI-assisted customer, competitor & creative landscape analysis",
      "Audience segmentation, budget allocation & channel mix strategy",
      "Data-led growth map aligned with profitability, AOV & LTV goals",
    ],
    image: "/illustrations/9.png",
  },
  {
    num: "02",
    title: "Performance Creative Development",
    desc: "High-converting ad creatives produced at scale — UGCs, HighProds, lifestyle, statics & motion — all tested through structured creative systems designed for consistent winners.",
    bullets: [
      "Hook, messaging & format ideation driven by performance data",
      "Systematic creative production & iterative testing at volume",
      "Performance-aligned feedback loop between creative & media teams",
    ],
    image: "/illustrations/7.png",
  },
  {
    num: "03",
    title: "Full-Funnel Media Execution",
    desc: "We execute engineered media systems that drive incremental reach, maximize AOV and build predictable profitability across Meta & Google ecosystems.",
    bullets: [
      "Full-funnel campaign architecture for sustainable scale",
      "Conversion journey optimization from ad click to checkout",
      "Continuous bid, audience & budget optimization to maximize MER/ROAS",
    ],
    image: "/illustrations/8.png",
  },
  {
    num: "04",
    title: "Continuous Testing, Iteration & Optimization",
    desc: "A relentless iteration engine where creatives, offers and audiences evolve through creative analytics — ensuring sustained scale without fatigue.",
    bullets: [
      "Data-driven creative testing, offer iterations & audience refinements",
      "Repurposing top-performing assets across funnel stages & channels",
      "Creative analytics guiding optimization & strategic decision-making",
    ],
    image: "/creatives/static/OPT 1.jpg",
  },
  {
    num: "05",
    title: "Retention Marketing (SMS, Email & WhatsApp)",
    desc: "We build lifecycle systems that elevate repeat rate and LTV — ensuring your brand grows even when ads pause.",
    bullets: [
      "Automated flows for post-purchase, replenishment & winback journeys",
      "Segmentation-led retention strategy for high-intent cohorts",
      "Cohesive creative + messaging parity across acquisition & retention",
    ],
    image: "/creatives/static/Nourish you milk 4X5 (2).png",
  },
  {
    num: "06",
    title: "Scaling, Profit Optimisation & Long-Term Brand Building",
    desc: "We optimize every lever — content, media, CRO and retention — to scale efficiently while protecting margins and building brand equity.",
    bullets: [
      "Forecasting & scaling systems built on performance & profit data",
      "Bridging content–media gaps to maintain efficiency & growth velocity",
      "Strategic consulting on long-term brand positioning & revenue architecture",
    ],
    image: "/creatives/static/Youglo Glitter BFCM Sale V1.png",
  },
];

// Reusable check icon for bullets
function CheckIcon({ active }: { active: boolean }) {
  return (
    <svg
      className={`w-4 h-4 mt-0.5 shrink-0 transition-colors duration-500 ${
        active ? "text-gold" : "text-white/25"
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function GrowthMethod() {
  const [activeIdx, setActiveIdx] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track which step is in the "active zone" (middle 20% of viewport)
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIdx(i);
          }
        },
        {
          // Step is "active" while its midpoint sits in the middle 20% of viewport
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="process" className="py-20 sm:py-24 lg:py-28 relative">
      {/* Ambient gold glow — wrapped in its own overflow-hidden container so
          it never encloses the sticky child below (overflow-hidden on a
          sticky ancestor breaks sticky positioning in all major browsers). */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gold/[0.04] blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-16">
          {/* ============ LEFT: Header + Steps ============ */}
          <div>
            {/* Header */}
            <div className="mb-10 sm:mb-14">
              <div className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold mb-3 sm:mb-4 font-semibold">
                / The Growth Method
              </div>
              <h2 className="text-[2rem] sm:text-5xl lg:text-[3.75rem] font-black leading-[1] tracking-[-0.02em] mb-5 sm:mb-6">
                How Neuroid&apos;s
                <br />
                <span className="text-gradient-gold">Growth Method</span> works.
              </h2>
              <p className="text-[15px] sm:text-lg text-white/60 max-w-lg mb-6 sm:mb-8">
                Custom-built for D2C brands wanting to scale profitably, predictably &amp; with clarity.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gold text-black font-black uppercase text-xs sm:text-sm tracking-wider hover:bg-gold-bright hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_40px_rgba(255,210,48,0.35)]"
              >
                Book a Free Discovery Call
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
            </div>

            {/* Steps */}
            <div className="space-y-14 sm:space-y-16 lg:space-y-24">
              {steps.map((step, i) => {
                const active = activeIdx === i;
                return (
                  <div
                    key={step.num}
                    ref={(el) => {
                      stepRefs.current[i] = el;
                    }}
                    className="relative lg:min-h-[40vh]"
                  >
                    {/* Mobile-only inline image (desktop uses sticky image on the right) */}
                    <div className="lg:hidden mb-6 relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] bg-black">
                      <Image
                        src={encodeURI(step.image)}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 0"
                        className="object-cover"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur border border-white/20 text-[10px] font-bold text-white/90 uppercase tracking-wider">
                        Step {i + 1} / {steps.length}
                      </div>
                    </div>

                    <h3
                      className={`text-[1.5rem] sm:text-2xl lg:text-[1.75rem] font-black tracking-tight mb-3 sm:mb-4 leading-tight transition-colors duration-500 ${
                        active ? "text-white" : "text-white/45"
                      }`}
                    >
                      <span className={`transition-colors duration-500 ${active ? "text-gold" : "text-white/30"}`}>
                        {i + 1}.
                      </span>{" "}
                      {step.title}
                    </h3>
                    <p
                      className={`text-[15px] sm:text-base leading-relaxed mb-4 sm:mb-5 transition-colors duration-500 ${
                        active ? "text-white/70" : "text-white/35"
                      }`}
                    >
                      {step.desc}
                    </p>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {step.bullets.map((b, j) => (
                        <li
                          key={j}
                          className={`flex items-start gap-2.5 text-[13px] sm:text-sm transition-colors duration-500 ${
                            active ? "text-white/75" : "text-white/30"
                          }`}
                        >
                          <CheckIcon active={active} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============ RIGHT: Sticky image (desktop only) ============ */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                {/* All images stacked, crossfade based on activeIdx */}
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className="absolute inset-0"
                    style={{
                      opacity: activeIdx === i ? 1 : 0,
                      transform: activeIdx === i ? "scale(1)" : "scale(1.04)",
                      transition:
                        "opacity 900ms cubic-bezier(0.22, 1, 0.36, 1), transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <Image
                      src={encodeURI(step.image)}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1024px) 0, 45vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                ))}

                {/* Step counter + dots overlay */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
                  <div className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur border border-white/20 text-[11px] font-bold text-white/95 uppercase tracking-wider">
                    Step {activeIdx + 1} of {steps.length}
                  </div>
                  <div className="flex gap-1.5">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          i === activeIdx ? "w-6 bg-gold" : "w-1.5 bg-white/25"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
