import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="py-28 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold mb-4 font-semibold">
            / How we work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em]">
            A relentless
            <br />
            <span className="text-gradient-gold">iteration engine.</span>
          </h2>
          <p className="mt-6 text-white/55 max-w-2xl">
            We create a seamless feedback loop between media buying and creative — a process that
            consistently enhances performance and accelerates growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-3xl overflow-hidden">
          {processSteps.map((s) => (
            <div
              key={s.step}
              className="bg-black/70 backdrop-blur p-8 relative hover:bg-black/40 transition-colors"
            >
              <div className="text-[5rem] font-black text-white/[0.05] absolute top-3 right-5 leading-none pointer-events-none select-none">
                {s.step}
              </div>
              <div className="relative">
                <div className="w-10 h-px bg-gold mb-5" />
                <div className="text-xs font-mono text-gold/70 mb-2">STEP /{s.step}</div>
                <h3 className="text-xl font-black mb-3 tracking-tight">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
