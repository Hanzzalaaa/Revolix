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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Revolix | AI & Web Development Team",
    description:
      "About Revolix: meet the AI and web development team building growth-ready products that deliver results.",
    keywords: [
      "AI website",
      "IT solutions company",
      "digital solutions company",
    ],
    alternates: { canonical: "https://revolixtech.com/about" },
  }
}

export default function AboutPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <AboutHero />
        <AboutMission />
        {/* <AboutTimeline /> */}
        <AboutValues />
        <AboutTeam />
        <CTASection headingAs="p" subheadingAs="p" />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}



