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

// ---- Distribute creatives into 4 columns, interleaving statics + videos ----

function buildColumns(media: readonly CreativeMedia[]): CreativeMedia[][] {
  const statics = media.filter((m) => m.type === "image");
  const videos = media.filter((m) => m.type === "video");

  // Interleave so each column gets a mix
  const interleaved: CreativeMedia[] = [];
  const maxLen = Math.max(statics.length, videos.length);
  for (let i = 0; i < maxLen; i++) {
    if (statics[i]) interleaved.push(statics[i]);
    if (videos[i]) interleaved.push(videos[i]);
  }
  // Any leftovers (if statics > videos) continue
  if (statics.length > videos.length) {
    interleaved.push(...statics.slice(videos.length));
  }

  const cols: CreativeMedia[][] = [[], [], [], []];
  interleaved.forEach((item, i) => {
    cols[i % 4].push(item);
  });
  return cols;
}

// ---- Main section ----

export function CreativeWall() {
  const cols = buildColumns(creativeWall);
  const durations = ["70s", "85s", "78s", "92s"];

  return (
    <section className="relative py-24 sm:py-28 overflow-hidden">
      {/* Section header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-14 relative z-10">
        <div className="inline-block text-[11px] uppercase tracking-[0.25em] text-gold mb-4 font-semibold">
          / Creative Engine
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-[-0.02em] mb-4">
          Ads that scale to
          <br />
          <span className="text-gradient-gold">₹5–6L per creative.</span>
        </h2>
        <p className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto">
          UGCs, HighProds, lifestyle &amp; statics — a glimpse of the creative we&apos;ve shipped across
          our partner brands.
        </p>
      </div>

      {/* The scrolling wall */}
      <div className="relative h-[780px] sm:h-[900px] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-3 sm:px-6">
          <Column items={cols[0]} duration={durations[0]} />
          <Column items={cols[1]} duration={durations[1]} />
          <Column items={cols[2]} duration={durations[2]} className="hidden md:flex" />
          <Column items={cols[3]} duration={durations[3]} className="hidden md:flex" />
        </div>

        {/* Top + bottom fades into the page background */}
        <div className="absolute top-0 inset-x-0 h-32 sm:h-40 bg-gradient-to-b from-bg via-bg/90 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-40 bg-gradient-to-t from-bg via-bg/90 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
