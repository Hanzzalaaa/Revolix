import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudiesFilter } from "@/components/case-studies/case-studies-filter"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Case Studies | Revolix - Real Projects, Real Results",
  description: "See what we've built for other companies. These are real projects with actual numbers - no marketing fluff, just what worked and what we learned.",
  keywords: [
    "AI case studies",
    "software development portfolio",
    "client success stories",
    "ML project examples",
    "tech consulting results",
  ],
}

export default function CaseStudiesPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudiesFilter />
        <CTASection />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
