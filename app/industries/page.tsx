import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IndustriesHero } from "@/components/industries/industries-hero"
import { IndustriesGrid } from "@/components/industries/industries-grid"
import { IndustryStats } from "@/components/industries/industry-stats"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Industries We Work With | Revolix",
  description: "We've built AI systems for healthcare, fintech, e-commerce, manufacturing, and more. Each industry has different challenges - here's how we approach them.",
  keywords: [
    "AI for healthcare",
    "fintech software development",
    "e-commerce AI solutions",
    "manufacturing automation",
    "industry-specific AI",
  ],
}

export default function IndustriesPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <IndustriesHero />
        <IndustriesGrid />
        <IndustryStats />
        <CTASection />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
