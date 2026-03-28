import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IndustriesHero } from "@/components/industries/industries-hero"
import { IndustriesGrid } from "@/components/industries/industries-grid"
import { IndustryStats } from "@/components/industries/industry-stats"
import { CTASection } from "@/components/cta-section"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Industries We Serve | Revolix",
    description: "Industries we serve: healthcare, fintech, e-commerce, and manufacturing with AI and software solutions.",
    keywords: [
      "best software development companies in pakistan",
      "ai tools for software development",
      "industries we work with",
    ],
    alternates: { canonical: "https://revolixtech.com/industries" },
  }
}

export default function IndustriesPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <IndustriesHero />
        <IndustriesGrid />
        <IndustryStats />
        <CTASection headingAs="p" subheadingAs="p" />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}



