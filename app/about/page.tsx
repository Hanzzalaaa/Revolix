import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTimeline } from "@/components/about/about-timeline"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"
import { CTASection } from "@/components/cta-section"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "About Us | Revolix - Who We Are & What We Do",
  description:
    "We're engineers who got tired of seeing AI projects fail. Now we build AI that works.",
  keywords: [
    "AI website",
    "IT solutions company",
    "digital solutions company",
  ],
  alternates: { canonical: "https://revolixtech.com/about" },
}

export default function AboutPage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

  return (
    <ParallaxProvider>
      <Header />
      <main>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: SITE_URL },
            { name: "About", item: `${SITE_URL}/about` },
          ]}
        />
        <AboutHero />
        <AboutMission />
        <AboutTimeline />
        <AboutValues />
        <AboutTeam />
        <CTASection headingAs="p" subheadingAs="p" />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
