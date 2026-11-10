import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IndustriesHero } from "@/components/industries/industries-hero"
import { IndustriesGrid } from "@/components/industries/industries-grid"
import { CTASection } from "@/components/cta-section"
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Industries We Serve | Revolix Technologies",
    description: "Industries we serve: HVAC & trade contractors, healthcare clinics, law firms, real estate, and e-commerce with websites, automations, and software.",
    alternates: { canonical: "https://www.revolixtech.com/industries" },
  }
}

export default function IndustriesPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <BreadcrumbJsonLd items={[
         { name: "Home", item: "https://www.revolixtech.com/" },
         { name: "Industries", item: "https://www.revolixtech.com/industries" },
    ]} />
        <IndustriesHero />
        <IndustriesGrid /> 
   
        <CTASection headingAs="p" subheadingAs="p" />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}



