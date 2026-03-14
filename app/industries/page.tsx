import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IndustriesHero } from "@/components/industries/industries-hero"
import { IndustriesGrid } from "@/components/industries/industries-grid"
import { IndustryStats } from "@/components/industries/industry-stats"
import { CTASection } from "@/components/cta-section"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Industries We Work With | Revolix",
  description: "We've built AI systems for healthcare, fintech, e-commerce, and manufacturing.",
  keywords: [
    "best software development companies in pakistan",
    "ai tools for software development",
    "industries we work with",
  ],
  alternates: { canonical: "https://revolixtech.com/industries" },
}

export default function IndustriesPage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

  return (
    <ParallaxProvider>
      <Header />
      <main>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: SITE_URL },
            { name: "Industries", item: `${SITE_URL}/industries` },
          ]}
        />
        <IndustriesHero />
        <IndustriesGrid />
        <IndustryStats />
        <CTASection headingAs="p" subheadingAs="p" />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
