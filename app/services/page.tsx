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
  title: "Our Services | Revolix - What We Build",
  description:
    "We handle everything from training ML models to setting up cloud infrastructure. Whether you need a full AI system or just help debugging your pipeline, we've got you covered.",
  keywords: [
    "AI development services",
    "custom software development",
    "cloud infrastructure setup",
    "ML model training",
    "data pipeline engineering",
    "software consulting",
  ],
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
