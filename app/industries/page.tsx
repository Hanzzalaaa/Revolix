import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IndustriesHero } from "@/components/industries/industries-hero"
import { IndustriesGrid } from "@/components/industries/industries-grid"
import { IndustryStats } from "@/components/industries/industry-stats"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Industries | NexaFlow - AI Solutions Across Sectors",
  description:
    "Discover how NexaFlow delivers tailored AI and digital solutions across healthcare, fintech, eCommerce, energy, real estate, and more.",
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
