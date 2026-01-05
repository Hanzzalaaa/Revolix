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
  title: "About Us | NexaFlow - Our Story & Mission",
  description:
    "Learn about NexaFlow's mission to transform businesses with AI-powered solutions. Meet our team and discover our journey.",
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
