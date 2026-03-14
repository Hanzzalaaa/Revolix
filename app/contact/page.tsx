import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Contact Us | Revolix - Let's Talk",
  description: "Contact Revolix Tech for AI, software, and cloud solutions. Get a free consultation.",
  keywords: [
    "starting a business",
    "small business",
    "contact Revolix",
  ],
  alternates: { canonical: "https://revolixtech.com/contact" },
}

export default function ContactPage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

  return (
    <ParallaxProvider>
      <Header />
      <main>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: SITE_URL },
            { name: "Contact", item: `${SITE_URL}/contact` },
          ]}
        />
        <ContactHero />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
