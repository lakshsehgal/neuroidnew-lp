import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { BrandPartners } from "@/components/brand-partners";
import { CreativeWall } from "@/components/creative-wall";
import { UGCVideos } from "@/components/ugc-videos";
import { Services } from "@/components/services";
import { InBusiness } from "@/components/in-business";
import { Comparison } from "@/components/comparison-table";
import { CaseStudies } from "@/components/case-studies";
import { GrowthMethod } from "@/components/growth-method";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="relative">
        {/* Hero has its own stagger entrance — no Reveal wrapper */}
        <Hero />

        {/* Everything below fades + slides in as it enters the viewport */}
        <Reveal>
          <BrandPartners />
        </Reveal>
        <Reveal>
          <CreativeWall />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <InBusiness />
        </Reveal>
        <Reveal>
          <Comparison />
        </Reveal>
        <Reveal>
          <UGCVideos />
        </Reveal>
        <Reveal>
          <CaseStudies />
        </Reveal>
        <Reveal>
          <GrowthMethod />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <CTASection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
