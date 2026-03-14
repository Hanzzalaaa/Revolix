import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudiesFilter } from "@/components/case-studies/case-studies-filter"
import { CTASection } from "@/components/cta-section"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Case Studies | Revolix - Real Results",
  description: "See how Revolix delivered results. Real case studies from real clients.",
  keywords: [
    "best case studies in the world",
    "case studies in ai",
    "AI case studies",
  ],
  alternates: { canonical: "https://revolixtech.com/case-studies" },
}

export default function CaseStudiesPage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

  return (
    <ParallaxProvider>
      <Header />
      <main>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: SITE_URL },
            { name: "Case Studies", item: `${SITE_URL}/case-studies` },
          ]}
        />
        <CaseStudiesHero />
        <CaseStudiesFilter />
        <CTASection headingAs="p" subheadingAs="p" />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
