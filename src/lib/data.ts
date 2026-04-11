// All homepage content lives here — easy to edit without hunting through components.

export const stats = [
  { value: "₹150Cr+", label: "Attributed Client Revenue" },
  { value: "94%", label: "Client Retention Rate" },
  { value: "4.2X", label: "Avg. Net Shopify ROAS" },
] as const;

export const clients = [
  "Sylvi",
  "NourishYou",
  "RustOrange",
  "Sugercandy",
  "ByTheBay",
  "House of Zelena",
  "CloakCouture",
] as const;

// Brand partners — D2C brands Neuroid has scaled.
// Priority brands (Lifelong, Wooden Street, Silverfied, Jewelsmars, Kisah)
// come first so they appear in the visible frame when row 1 starts.
export const brands = [
  { name: "Lifelong", src: "/logos/16.png" },
  { name: "Wooden Street", src: "/logos/21.png" },
  { name: "Silverfied", src: "/logos/4.png" },
  { name: "Jewelsmars", src: "/logos/18.png" },
  { name: "Kisah", src: "/logos/17.png" },
  { name: "Sylvi", src: "/logos/10.png" },
  { name: "NourishYou", src: "/logos/3.png" },
  { name: "Rust Orange", src: "/logos/12.png" },
  { name: "SuperBottoms", src: "/logos/19.png" },
  { name: "Deep Impact", src: "/logos/6.png" },
  { name: "Jaipuri Crown", src: "/logos/8.png" },
  { name: "Yoho", src: "/logos/5.png" },
  { name: "Spirit Animal", src: "/logos/11.png" },
  { name: "Truth & Hair", src: "/logos/13.png" },
  { name: "Jynara", src: "/logos/15.png" },
  { name: "YouGlo", src: "/logos/1.png" },
  { name: "Vedansh Craft", src: "/logos/7.png" },
  { name: "Loving Crafts", src: "/logos/2.png" },
  { name: "Unstd", src: "/logos/9.png" },
  { name: "Ghani Phutri", src: "/logos/14.png" },
  { name: "Cup-ji", src: "/logos/20.png" },
  { name: "Chase", src: "/logos/22.png" },
  { name: "Gataca", src: "/logos/23.png" },
  { name: "Hege", src: "/logos/24.png" },
] as const;

// Ad creative mockups — each represents a fake "Meta ad" style preview card.
// `shape` drives the abstract graphic drawn inside the card.
// If `video` is set, the card plays a real video instead of the SVG mockup.
// If `image` is set (and no video), the card shows a real static creative.
//
// Drop files into:
//   /public/creatives/videos/   → .mp4 (H.264, 4:5 aspect, <3MB)
//   /public/creatives/static/   → .jpg / .png / .webp (4:5 aspect)
export type CreativeShape =
  | "circle"
  | "pill"
  | "blob"
  | "square"
  | "diamond"
  | "wave"
  | "triangle"
  | "chart";

export type Creative = {
  brand: string;
  headline: string;
  cta: string;
  bgFrom: string;
  bgTo: string;
  accent: string;
  shape: CreativeShape;
  /** Path to a video file, e.g. "/creatives/videos/sylvi.mp4" */
  video?: string;
  /** Path to a static image, e.g. "/creatives/static/sylvi.jpg" */
  image?: string;
  /** Poster frame shown while video loads, e.g. "/creatives/static/sylvi.jpg" */
  poster?: string;
};

// UGC creator videos for the shoppable reel section.
// Each entry pairs a video with a brand logo and shop URL.
// Update `shopUrl` to the actual brand website once confirmed.
export type UGCVideo = {
  video: string;
  brand: string;
  logo: string;
  shopUrl: string;
};

export const ugcVideos: UGCVideo[] = [
  {
    video: "/creatives/videos/Sylvi Male-V1 (1).mp4",
    brand: "Sylvi",
    logo: "/logos/10.png",
    shopUrl: "https://sylvi.in",
  },
  {
    video: "/creatives/videos/NH_UGC_03_V1 (1) (1) (1).mp4",
    brand: "NourishYou",
    logo: "/logos/3.png",
    shopUrl: "https://nourishyou.com",
  },
  {
    video: "/creatives/videos/Yoho UGC 3 CollectionV1 (1) (1).mp4",
    brand: "Yoho",
    logo: "/logos/5.png",
    shopUrl: "https://yoho.in",
  },
  {
    video: "/creatives/videos/Gataca_UGC_04.mp4",
    brand: "Gataca",
    logo: "/logos/23.png",
    shopUrl: "https://gataca.life",
  },
  {
    video: "/creatives/videos/UGC_01_ Rugs Video (1) (1) (1).mp4",
    brand: "Rust Orange",
    logo: "/logos/12.png",
    shopUrl: "https://rustorange.com",
  },
  {
    video: "/creatives/videos/SSU 2 Arhan (1) (1).mp4",
    brand: "Unstd",
    logo: "/logos/9.png",
    shopUrl: "https://unstd.in",
  },
  {
    video: "/creatives/videos/H1 Gataca UGC 5 NMN V1 (1) (1).mp4",
    brand: "Gataca",
    logo: "/logos/23.png",
    shopUrl: "https://gataca.life",
  },
  {
    video: "/creatives/videos/varee CC4 mashup (1).mp4",
    brand: "Vedansh Craft",
    logo: "/logos/7.png",
    shopUrl: "#",
  },
  {
    video: "/creatives/videos/UGC 4_ DFL- Script 1 (1).mp4",
    brand: "Deep Impact",
    logo: "/logos/6.png",
    shopUrl: "https://deepimpact.in",
  },
  {
    video: "/creatives/videos/UGC 5 Rush hourV2 (1) (1).mp4",
    brand: "Lifelong",
    logo: "/logos/16.png",
    shopUrl: "https://lifelongindia.com",
  },
  {
    video: "/creatives/videos/UGC 6 _ PUW 2 _ Hook 1 (1) (1).mp4",
    brand: "Kisah",
    logo: "/logos/17.png",
    shopUrl: "https://kisah.com",
  },
  {
    video: "/creatives/videos/4bz__23RW3CKB5gyeRRsn (1) (2) copy.mp4",
    brand: "Jewelsmars",
    logo: "/logos/18.png",
    shopUrl: "https://jewelsmars.com",
  },
];

// Real media for the Creative Wall scrolling section.
// Point at files dropped in /public/creatives/static and /public/creatives/videos.
// The component URL-encodes paths, so spaces/parens/apostrophes in filenames are fine.
export type CreativeMedia = { type: "image" | "video"; src: string };

export const creativeWall: CreativeMedia[] = [
  // Statics
  { type: "image", src: "/creatives/static/Artboard 1 copy.png" },
  { type: "image", src: "/creatives/static/Artboard 1tu.png" },
  { type: "image", src: "/creatives/static/Artboard 1uyigu (1).png" },
  { type: "image", src: "/creatives/static/Artboard 3 (1).png" },
  { type: "image", src: "/creatives/static/1 (2) (1) (1).png" },
  { type: "image", src: "/creatives/static/CC100_Review Static_Static.jpg" },
  { type: "image", src: "/creatives/static/CC14 _ Mirage _ Static -01.jpg" },
  { type: "image", src: "/creatives/static/CC15- Winter wear2 (1).jpg" },
  { type: "image", src: "/creatives/static/CC16- LEGGING - Static.jpg" },
  { type: "image", src: "/creatives/static/CC22_Sale frame_Static (1).jpg" },
  { type: "image", src: "/creatives/static/CC3  BFCM Static 02_Sq.jpg" },
  { type: "image", src: "/creatives/static/CC80_Hype Static_01.jpg" },
  { type: "image", src: "/creatives/static/CC80_Hype Static_02.jpg" },
  { type: "image", src: "/creatives/static/CC82_Valentine day_Banner_valentine's Edit (1).jpg" },
  { type: "image", src: "/creatives/static/CC94_Bestsellers_Static-03.jpg" },
  { type: "image", src: "/creatives/static/Drip Project Year end sale 960X1200.jpg" },
  { type: "image", src: "/creatives/static/Hoodie Unstd V1 .png" },
  { type: "image", src: "/creatives/static/Jaipuri Crown_CC23.jpg" },
  { type: "image", src: "/creatives/static/Nourish you milk 4X5 (2).png" },
  { type: "image", src: "/creatives/static/OPT 1.jpg" },
  { type: "image", src: "/creatives/static/OPT 2.jpg" },
  { type: "image", src: "/creatives/static/Oats 1080x1080.jpg" },
  { type: "image", src: "/creatives/static/V3_1200.jpg" },
  { type: "image", src: "/creatives/static/Youglo Glitter BFCM Sale V1.png" },
  // Videos
  { type: "video", src: "/creatives/videos/Sylvi Male-V1 (1).mp4" },
  { type: "video", src: "/creatives/videos/Gataca_UGC_04.mp4" },
  { type: "video", src: "/creatives/videos/H1 Gataca UGC 5 NMN V1 (1) (1).mp4" },
  { type: "video", src: "/creatives/videos/NH_UGC_03_V1 (1) (1) (1).mp4" },
  { type: "video", src: "/creatives/videos/SSU 2 Arhan (1) (1).mp4" },
  { type: "video", src: "/creatives/videos/UGC 4_ DFL- Script 1 (1).mp4" },
  { type: "video", src: "/creatives/videos/UGC 5 Rush hourV2 (1) (1).mp4" },
  { type: "video", src: "/creatives/videos/UGC 6 _ PUW 2 _ Hook 1 (1) (1).mp4" },
  { type: "video", src: "/creatives/videos/UGC_01_ Rugs Video (1) (1) (1).mp4" },
  { type: "video", src: "/creatives/videos/Yoho UGC 3 CollectionV1 (1) (1).mp4" },
  { type: "video", src: "/creatives/videos/varee CC4 mashup (1).mp4" },
  { type: "video", src: "/creatives/videos/4bz__23RW3CKB5gyeRRsn (1) (2) copy.mp4" },
];

export const creatives: Creative[] = [
  {
    brand: "sylvi_official",
    headline: "WATCHES BUILT FOR HER",
    cta: "Shop Now",
    bgFrom: "#1a1a2e",
    bgTo: "#0f0f1a",
    accent: "#FFD230",
    shape: "circle",
  },
  {
    brand: "nourishyou",
    headline: "FUEL YOUR MORNING",
    cta: "Try It Today",
    bgFrom: "#2a1f0b",
    bgTo: "#1a1505",
    accent: "#FFDB52",
    shape: "pill",
  },
  {
    brand: "rust.orange",
    headline: "HANDMADE IN INDIA",
    cta: "Discover",
    bgFrom: "#3d1a0c",
    bgTo: "#2a1108",
    accent: "#FF8C42",
    shape: "blob",
  },
  {
    brand: "bythebay",
    headline: "COMFORT, REDEFINED",
    cta: "Shop Collection",
    bgFrom: "#0a2e3d",
    bgTo: "#051e2a",
    accent: "#4FB3BF",
    shape: "square",
  },
  {
    brand: "house_of_zelena",
    headline: "ELEGANCE IN EVERY PIECE",
    cta: "Explore",
    bgFrom: "#1a0a1e",
    bgTo: "#0f0517",
    accent: "#C58CF2",
    shape: "diamond",
  },
  {
    brand: "sugercandy",
    headline: "SWEET, SIMPLE, REAL",
    cta: "Order Now",
    bgFrom: "#3d0f1a",
    bgTo: "#240812",
    accent: "#FF6B94",
    shape: "wave",
  },
  {
    brand: "cloakcouture",
    headline: "DRESS THE MOMENT",
    cta: "Shop Now",
    bgFrom: "#0f1a0f",
    bgTo: "#081208",
    accent: "#7ED957",
    shape: "triangle",
  },
  {
    brand: "neuroid.wins",
    headline: "5.7X ROAS / 12 MO",
    cta: "See Case Study",
    bgFrom: "#2a1f05",
    bgTo: "#1a1303",
    accent: "#FFDB52",
    shape: "chart",
  },
];

export const services = [
  {
    num: "01",
    title: "Performance Marketing",
    subtitle: "Meta & Google Ads",
    desc: "Engineered media systems that drive incremental reach, maximize AOV and build predictable profitability. Full-funnel campaign architecture with continuous bid, audience & budget optimization to maximize MER/ROAS.",
    tags: ["Meta Ads", "Google Ads", "Full-funnel", "MER/ROAS"],
  },
  {
    num: "02",
    title: "UGC & Performance Creatives",
    subtitle: "Creative that scales",
    desc: "Our streamlined creative engine produces winners that scale to ₹5–6L spend per creative. UGCs, HighProds, lifestyle, statics & motion — all tested through structured creative systems designed for consistent winners.",
    tags: ["UGC", "HighProds", "Statics", "Motion", "Iteration"],
  },
  {
    num: "03",
    title: "Retention Marketing",
    subtitle: "LTV unlocked",
    desc: "Email, SMS, WhatsApp, community & loyalty — retention flows that compound AOV and LTV. We turn first-time buyers into repeat revenue long after the ad click.",
    tags: ["Email", "SMS", "WhatsApp", "Loyalty", "LTV"],
  },
  {
    num: "04",
    title: "CRO & Landing Pages",
    subtitle: "Conversion architecture",
    desc: "We re-architect the journey from ad click to checkout — product pages, offer stacks, AOV builders and custom landing pages built for scale and tested against real traffic.",
    tags: ["Landing Pages", "PDP", "Offer Strategy", "AOV"],
  },
] as const;

export const inBusinessPillars = [
  {
    icon: "research",
    title: "Creative Research",
    desc: "We sit inside your customer reviews, competitor ads and category trends — not outside of them.",
  },
  {
    icon: "product",
    title: "Product Ideas",
    desc: "New bundles, SKUs and hero products — we weigh in on what to sell next.",
  },
  {
    icon: "offer",
    title: "Offer Strategy",
    desc: "Promos, AOV builders and margin math — modelled against your P&L, not just ROAS.",
  },
  {
    icon: "site",
    title: "Website Feedback",
    desc: "PDP, cart, checkout and landers — we're in the doc with you every week.",
  },
  {
    icon: "retain",
    title: "Retention Strategy",
    desc: "Email, SMS, WhatsApp and loyalty loops — designed hand-in-hand with paid.",
  },
  {
    icon: "outside",
    title: "Outside-of-Meta Growth",
    desc: "Influencer, affiliate, marketplace — we don't pretend the world ends at Ads Manager.",
  },
] as const;

export const comparison = {
  rows: [
    {
      category: "Creative–Media Synergy",
      neuroid: "Fully Integrated",
      paid: "Disconnected",
      creative: "No Distribution",
    },
    {
      category: "Growth Strategy & Financial Planning",
      neuroid: "Detailed Growth Maps",
      paid: "Not Offered",
      creative: "Not Offered",
    },
    {
      category: "Brand Alignment & In-depth Research",
      neuroid: "Deep & Actionable",
      paid: "Minimal Insights",
      creative: "No Connection to Distribution",
    },
    {
      category: "Diversified Creative Outputs",
      neuroid: "UGCs, High Prods, Lifestyle & Statics",
      paid: "No Creative Offerings",
      creative: "Limited Capabilities",
    },
    {
      category: "Full Customer Journey Experience",
      neuroid: "Landing Page, LTV, AOV, RCC",
      paid: "Limited to Paid Media",
      creative: "Limited to Creative Assets",
    },
    {
      category: "Seamless Comms",
      neuroid: "Daily Collaboration",
      paid: "No Integration",
      creative: "Minimal",
    },
  ],
} as const;

export const caseStudies = [
  {
    tag: "Skincare",
    headline: "₹1.5Cr+ MRR",
    metric: "2.3X",
    metricLabel: "ROAS",
    note: "Run-rate maintained at scale with consistent creative refresh.",
  },
  {
    tag: "Women's Apparel",
    headline: "₹5.18Cr / 12 mo",
    metric: "5.7X",
    metricLabel: "ROAS",
    note: "Scaled profitably across four consecutive quarters.",
  },
  {
    tag: "Jewelry",
    headline: "₹5.6L → ₹86.7L",
    metric: "4.3X",
    metricLabel: "ROAS",
    note: "15× monthly revenue jump in 10 months (+24% ROAS improvement).",
  },
  {
    tag: "Food & Beverage",
    headline: "₹1.92Cr / 3 mo",
    metric: "2.29X",
    metricLabel: "ROAS",
    note: "Zero-to-one launch — profitable from month one.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Deep Discovery",
    desc: "We dissect first-party data, audience behavior and platform dynamics to architect a growth model tailored to your brand's scale stage.",
  },
  {
    step: "02",
    title: "Growth Map",
    desc: "A detailed plan across media, creative, retention and CRO — mapped against revenue, AOV, LTV and contribution margin targets.",
  },
  {
    step: "03",
    title: "Creative Engine",
    desc: "Hook, messaging and format ideation driven by performance data. Systematic production and iterative testing at volume.",
  },
  {
    step: "04",
    title: "Relentless Iteration",
    desc: "Creatives, offers, audiences and landing pages evolve through analytics — sustained scale without fatigue.",
  },
] as const;

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  brand: string;
  brandLogo?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Brand visibility & engagement have been achieved at great scale. Neuroid will be in top of charts when it comes to recommendations.",
    author: "Ishan Kukadia",
    role: "Co-Founder",
    brand: "Sylvi",
    brandLogo: "/logos/10.png",
  },
  {
    quote:
      "They have been a great performance marketing team. The team has been very impactful, also has worked very hard to lift our performance.",
    author: "Varshikha Jyoti",
    role: "Founder",
    brand: "Shyr",
  },
  {
    quote:
      "They combine strong technical capability with deep understanding of D2C ecosystem. Working with Neuroid has been seamless & an outcome-driven partnership. Their ownership mindset & solution-focused approach make them a trusted extension of our team.",
    author: "Pulkit Tiwari",
    role: "CMO",
    brand: "Wooden Street",
    brandLogo: "/logos/21.png",
  },
];
