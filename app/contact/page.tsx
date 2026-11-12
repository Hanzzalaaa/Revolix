import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Revolix Technologies | Book a Free AI Consultation",
    description: "Connect with Revolix Technologies in Karachi & USA. Book a free consultation to discuss custom AI agents, voice AI, GoHighLevel automation, and software engineering.",
    keywords: [
      "Contact Revolix Technologies",
      "Hire AI developers",
      "AI development company Karachi",
      "Free AI consultation",
      "AI engineering agency contact",
    ],
    alternates: { canonical: "https://revolixtech.com/contact" },
  }
}

export default function ContactPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <BreadcrumbJsonLd items={[
          { name: "Home", item: "https://www.revolixtech.com/" },
          { name: "Contact", item: "https://www.revolixtech.com/contact" },
        ]} />
        <ContactHero />
        <ContactForm /> 
        <ContactInfo />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}



