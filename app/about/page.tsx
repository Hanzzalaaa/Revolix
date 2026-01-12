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

export const metadata: Metadata = {
  title: "About Us | Revolix - Who We Are & What We Do",
  description:
    "We're a team of engineers who got tired of seeing AI projects fail. Now we help companies build systems that actually work in production. Meet the team and see how we got here.",
  keywords: [
    "AI consulting team",
    "software engineering company",
    "tech consulting",
    "AI experts",
    "about Revolix",
  ],
}

export default function AboutPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutTimeline />
        <AboutValues />
        <AboutTeam />
        <CTASection />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
