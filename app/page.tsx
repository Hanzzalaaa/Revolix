import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "Revolix Technologies - AI Solutions That Actually Work",
  description:
    "We build AI systems that solve real problems. From machine learning pipelines to cloud infrastructure, we help companies ship better products faster. No buzzwords, just results.",
  keywords: [
    "AI development",
    "machine learning solutions",
    "custom software development",
    "cloud infrastructure",
    "data engineering",
    "MLOps",
    "enterprise AI",
    "digital transformation",
  ],
  openGraph: {
    title: "Revolix Technologies - AI Solutions That Actually Work",
    description: "We build AI systems that solve real problems. No buzzwords, just results.",
  },
}

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
