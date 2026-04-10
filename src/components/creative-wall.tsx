"use client";

import { creativeWall, type CreativeMedia } from "@/lib/data";

// ---- Tile: either a muted autoplay video or a static image ----

function CreativeTile({ item }: { item: CreativeMedia }) {
  const src = encodeURI(item.src);

  if (item.type === "video") {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-auto rounded-xl block border border-white/[0.06] bg-black"
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      loading="lazy"
      className="w-full h-auto rounded-xl block border border-white/[0.06] bg-black"
    />
  );
}

// ---- Column: a stack of tiles that scrolls infinitely upward ----

type ColumnProps = {
  items: CreativeMedia[];
  duration: string;
  className?: string;
};

function Column({ items, duration, className = "" }: ColumnProps) {
  // Duplicate the set so the translateY(-50%) loop stitches seamlessly
  const loop = [...items, ...items];
  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className="flex flex-col gap-3 animate-marquee-up will-change-transform"
        style={{ animationDuration: duration }}
      >
        {loop.map((item, i) => (
          <CreativeTile key={`${item.src}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

// ---- Distribute creatives into 5 columns, interleaving statics + videos ----

function buildColumns(media: readonly CreativeMedia[]): CreativeMedia[][] {
  const statics = media.filter((m) => m.type === "image");
  const videos = media.filter((m) => m.type === "video");

  // Interleave so each column gets a mix of statics + videos
  const interleaved: CreativeMedia[] = [];
  const maxLen = Math.max(statics.length, videos.length);
  for (let i = 0; i < maxLen; i++) {
    if (statics[i]) interleaved.push(statics[i]);
    if (videos[i]) interleaved.push(videos[i]);
  }
  if (statics.length > videos.length) {
    interleaved.push(...statics.slice(videos.length));
  }

  const cols: CreativeMedia[][] = [[], [], [], [], []];
  interleaved.forEach((item, i) => {
    cols[i % 5].push(item);
  });
  return cols;
}

// ---- Main section ----

export function CreativeWall() {
  const cols = buildColumns(creativeWall);
  // Varied slow speeds per lane for organic motion
  const durations = ["72s", "88s", "80s", "95s", "78s"];

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* The scrolling wall (5 lanes on desktop) */}
      <div className="relative h-[820px] sm:h-[920px] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 px-3 sm:px-5">
          <Column items={cols[0]} duration={durations[0]} />
          <Column items={cols[1]} duration={durations[1]} />
          <Column items={cols[2]} duration={durations[2]} className="hidden sm:flex" />
          <Column items={cols[3]} duration={durations[3]} className="hidden lg:flex" />
          <Column items={cols[4]} duration={durations[4]} className="hidden lg:flex" />
        </div>

        {/* Top + bottom fades into the page background */}
        <div className="absolute top-0 inset-x-0 h-32 sm:h-40 bg-gradient-to-b from-bg via-bg/90 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-40 bg-gradient-to-t from-bg via-bg/90 to-transparent pointer-events-none z-10" />

        {/* Floating overlay card — left-aligned on desktop, centered on mobile */}
        <div className="absolute inset-0 flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:pl-[7%] z-20 pointer-events-none">
          <div className="pointer-events-auto w-full max-w-md bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-5 leading-[0.95]">
              Creative that
              <br />
              converts.
            </h2>
            <p className="text-white/65 text-base sm:text-[17px] mb-8 leading-relaxed">
              Our ads don&apos;t just look good —{" "}
              <span className="text-white font-bold">they perform</span>. High-production, UGC, and
              design concepts that command attention, lower CAC, increase CTR and fuel profit.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-black font-black uppercase text-sm tracking-wide hover:bg-gold-bright transition-colors shadow-[0_0_40px_rgba(255,210,48,0.4)]"
            >
              Book a Free Discovery Call
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
