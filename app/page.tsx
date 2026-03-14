import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { ServicesSection } from "@/components/services-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { StatsSection } from "@/components/stats-section"
import { IndustriesSection } from "@/components/industries-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ServiceJsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Revolix Tech - AI Solutions That Actually Work",
  description:
    "We build AI systems that solve real problems. Ship better products faster.",
  keywords: [
    "best institute for web development",
    "web development",
    "SEO services",
  ],
  alternates: { canonical: "https://revolixtech.com/" },
  openGraph: {
    title: "Revolix Tech - AI Solutions That Actually Work",
    description: "We build AI systems that solve real problems. Ship better products faster.",
  },
}

export default function HomePage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"
  const SHOW_GRAPHICS = process.env.NEXT_PUBLIC_SHOW_GRAPHICS === "true"

  return (
    <ParallaxProvider>
      <Header />
      <main>
        <ServiceJsonLd
          name="Professional Web Development, SEO & Digital Marketing Services"
          description={
            SHOW_GRAPHICS
              ? "Web development, SEO services, digital marketing, and graphic design for businesses ready to grow."
              : "Web development, SEO services, and digital marketing for businesses ready to grow."
          }
          url={SITE_URL}
          serviceType={SHOW_GRAPHICS ? "Web Development, SEO, Digital Marketing, Graphic Design" : "Web Development, SEO, Digital Marketing"}
          providerName="Revolix Technologies"
        />
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <CaseStudiesSection />
        <StatsSection />
        <IndustriesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
