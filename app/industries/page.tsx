import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IndustriesHero } from "@/components/industries/industries-hero"
import { IndustriesGrid } from "@/components/industries/industries-grid"
import { CTASection } from "@/components/cta-section"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Industries We Serve | Revolix",
    description: "Industries we serve: healthcare, fintech, e-commerce, and manufacturing with AI and software solutions.",
    alternates: { canonical: "https://revolixtech.com/industries" },
  }
}

export default function IndustriesPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <IndustriesHero />
        <IndustriesGrid />
   
        <CTASection headingAs="p" subheadingAs="p" />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}



