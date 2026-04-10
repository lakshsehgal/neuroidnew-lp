import { clients } from "@/lib/data";

export function LogoMarquee() {
  const loop = [...clients, ...clients];
  return (
    <section className="py-16 border-y border-white/[0.06] bg-black/40">
      <p className="text-center text-[11px] uppercase tracking-[0.25em] text-white/40 mb-8">
        Trusted by ambitious D2C brands
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {loop.map((name, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-black text-white/25 hover:text-white/70 transition-colors tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
