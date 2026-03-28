import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Revolix | Free AI Consultation",
    description: "Contact Revolix for a free AI consultation on web development, SEO, and growth.",
    keywords: [
      "starting a business",
      "small business",
      "contact Revolix",
    ],
    alternates: { canonical: "https://revolixtech.com/contact" },
  }
}

export default function ContactPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}



