import { inBusinessPillars } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  research: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  ),
  product: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4.04a2 2 0 0 0 2 0l7-4.04A2 2 0 0 0 21 16z" />
      <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
    </svg>
  ),
  offer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7" cy="7" r="1" fill="currentColor" />
    </svg>
  ),
  site: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4M2 8h20" />
    </svg>
  ),
  retain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-6.2-8.56" />
      <path d="M21 3v6h-6" />
    </svg>
  ),
  outside: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

export function InBusiness() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold mb-3 sm:mb-4 font-semibold">
            / Not just another agency
          </div>
          <h2 className="text-[2rem] sm:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em]">
            We don&apos;t just run your ads.
            <br />
            <span className="text-gradient-gold">We&apos;re in your business.</span>
          </h2>
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-base text-white/55 max-w-2xl">
            Most agencies hand you a weekly deck and call it a partnership. We sit inside your business —
            part strategist, part operator, part extension of your team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-3xl overflow-hidden">
          {inBusinessPillars.map((p) => (
            <div
              key={p.title}
              className="bg-black/70 backdrop-blur p-7 sm:p-8 hover:bg-black/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl border border-gold/30 bg-gold/10 grid place-items-center text-gold mb-5">
                <div className="w-5 h-5">{iconMap[p.icon]}</div>
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">{p.title}</h3>
              <p className="text-white/55 text-[14px] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
