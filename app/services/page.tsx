import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ProcessSection } from "@/components/services/process-section"
import { TechStackSection } from "@/components/services/tech-stack-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Services | NexaFlow - AI-Powered Digital Solutions",
  description:
    "Explore our comprehensive range of services including AI development, software engineering, cloud infrastructure, data analytics, and UX design.",
}

export default function ServicesPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <ProcessSection />
        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
