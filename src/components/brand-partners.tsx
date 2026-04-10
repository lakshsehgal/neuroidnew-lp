import Image from "next/image";
import { brands } from "@/lib/data";

type Brand = { name: string; src: string };

function LogoPill({ brand }: { brand: Brand }) {
  return (
    <div className="flex-shrink-0 w-40 h-20 sm:w-48 sm:h-24 rounded-2xl bg-white border border-white/10 grid place-items-center px-5 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(229,184,76,0.3)]">
      <div className="relative w-full h-full">
        <Image
          src={brand.src}
          alt={brand.name}
          fill
          sizes="(max-width: 640px) 160px, 192px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function BrandPartners() {
  // Split 24 brands into two rows of 12 — priority brands land in row 1
  const row1 = brands.slice(0, 12);
  const row2 = brands.slice(12, 24);

  return (
    <section className="py-24 sm:py-28 relative overflow-hidden">
      {/* Ambient gold glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-14">
          <div className="inline-block text-[11px] uppercase tracking-[0.25em] text-white/55 mb-5 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur font-semibold">
            D2C Brands
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-[-0.02em]">
            Growth Partners to some of
            <br />
            the <span className="text-gradient-gold">Top D2C Brands</span> in India
          </h2>
        </div>

        {/* Row 1 — scroll right-to-left */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] mb-5">
          <div className="flex gap-4 sm:gap-5 animate-marquee w-max">
            {[...row1, ...row1].map((b, i) => (
              <LogoPill key={`r1-${i}-${b.name}`} brand={b} />
            ))}
          </div>
        </div>

        {/* Row 2 — scroll left-to-right (opposite direction) */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex gap-4 sm:gap-5 animate-marquee-reverse w-max">
            {[...row2, ...row2].map((b, i) => (
              <LogoPill key={`r2-${i}-${b.name}`} brand={b} />
            ))}
          </div>
        </div>

        {/* Sub-label */}
        <div className="text-center mt-10 text-sm text-white/40">
          <span className="font-semibold text-white/60">A glimpse of the 100+ brands we&apos;ve scaled</span>
          {" · "}
          ₹150Cr+ in client revenue driven
        </div>
      </div>
    </section>
  );
}
