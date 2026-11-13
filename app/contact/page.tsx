import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactProcess } from "@/components/contact/contact-process"
import { LocationsSection } from "@/components/contact/locations-section"
import { ContactInfo } from "@/components/contact/contact-info"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Revolix | Free AI Consultation",
    description: "Contact Revolix for a free AI consultation on web development, SEO, and growth.",
    keywords: [
      "starting a business",
      "small business",
      "contact Revolix",
    ],
    alternates: { canonical: "https://www.revolixtech.com/contact" },
  }
}

export default function ContactPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main className="bg-[#060A12]">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "https://www.revolixtech.com/" },
            { name: "Contact", item: "https://www.revolixtech.com/contact" },
          ]}
        />
        <ContactHero />
        <ContactForm />
        <ContactProcess />
        <LocationsSection />
        <ContactInfo />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
