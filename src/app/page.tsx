import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { Services } from "@/components/services";
import { InBusiness } from "@/components/in-business";
import { Comparison } from "@/components/comparison-table";
import { CaseStudies } from "@/components/case-studies";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <LogoMarquee />
        <Services />
        <InBusiness />
        <Comparison />
        <CaseStudies />
        <Process />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
