import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudiesFilter } from "@/components/case-studies/case-studies-filter"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Case Studies | NexaFlow - Our Work & Success Stories",
  description:
    "Explore our portfolio of successful projects across healthcare, fintech, entertainment, and more. See how we've helped businesses transform with AI.",
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
