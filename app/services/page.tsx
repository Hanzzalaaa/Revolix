import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ProcessSection } from "@/components/services/process-section"
import { TechStackSection } from "@/components/services/tech-stack-section"
import { CTASection } from "@/components/cta-section"
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Our Services | Revolix - What We Build",
  description:
    "From ML models to cloud infrastructure — we build complete AI systems for your business.",
  keywords: [
    "best data science companies",
    "best security companies",
    "ai software development company",
  ],
  alternates: { canonical: "https://revolixtech.com/services" },
}

export default function ServicesPage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"
  const SHOW_GRAPHICS = process.env.NEXT_PUBLIC_SHOW_GRAPHICS === "true"

  return (
    <ParallaxProvider>
      <Header />
      <main>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: SITE_URL },
            { name: "Services", item: `${SITE_URL}/services` },
          ]}
        />
        <ServiceJsonLd
          name="Web Development, SEO & Digital Marketing Services"
          description={
            SHOW_GRAPHICS
              ? "Professional website development, SEO services, digital marketing, and graphic design tailored for growth."
              : "Professional website development, SEO services, and digital marketing tailored for growth."
          }
          url={`${SITE_URL}/services`}
          serviceType={SHOW_GRAPHICS ? "Web Development, SEO, Digital Marketing, Graphic Design" : "Web Development, SEO, Digital Marketing"}
          providerName="Revolix Technologies"
        />
        <ServicesHero />
        <ServicesList />
        <ProcessSection />
        <TechStackSection />
        <CTASection headingAs="p" subheadingAs="p" />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
