import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { ServicesSection } from "@/components/services-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { StatsSection } from "@/components/stats-section"
import { IndustriesSection } from "@/components/industries-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <CaseStudiesSection />
        <StatsSection />
        <IndustriesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
