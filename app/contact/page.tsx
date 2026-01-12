import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | Revolix - Let's Talk",
  description: "Got a project in mind? Not sure where to start? Drop us a line and we'll figure it out together. No sales pitch, just an honest conversation about what you need.",
  keywords: [
    "contact AI developers",
    "software consulting inquiry",
    "get in touch",
    "project quote",
  ],
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
