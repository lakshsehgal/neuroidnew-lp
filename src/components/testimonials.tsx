import Image from "next/image";
import { testimonials, type Testimonial } from "@/lib/data";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative p-7 sm:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.025] to-transparent hover:border-gold/25 transition-colors duration-500 flex flex-col">
      {/* Big decorative quote mark */}
      <svg
        className="w-11 h-11 text-white/[0.08] mb-5 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
      </svg>

      {/* Quote text */}
      <p className="text-[15px] sm:text-base text-white/75 leading-relaxed mb-8 flex-1">
        {testimonial.quote}
      </p>

      {/* Footer row: photo + author + brand logo */}
      <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {testimonial.photo ? (
            <Image
              src={testimonial.photo}
              alt={testimonial.author}
              width={44}
              height={44}
              className="w-11 h-11 rounded-full object-cover border border-white/15 shrink-0"
            />
          ) : (
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/40 grid place-items-center text-gold font-black text-sm shrink-0">
              {testimonial.author.charAt(0)}
            </div>
          )}
          <div className="min-w-0">
            <div className="font-bold text-sm text-white truncate">{testimonial.author}</div>
            <div className="text-xs text-white/45 truncate">{testimonial.role}</div>
          </div>
        </div>

        <div className="shrink-0">
          {testimonial.brandLogo ? (
            <Image
              src={testimonial.brandLogo}
              alt={testimonial.brand}
              width={120}
              height={24}
              className="h-5 sm:h-6 w-auto max-w-[100px] object-contain opacity-70 [filter:brightness(0)_invert(1)]"
            />
          ) : (
            <div className="text-sm font-black text-white/70 uppercase tracking-wider">
              {testimonial.brand}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold mb-3 sm:mb-4 font-semibold">
            / Happy clients
          </div>
          <h2 className="text-[2rem] sm:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em]">
            Our clients,
            <br />
            <span className="text-gradient-gold">in their own words.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`${t.author}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
