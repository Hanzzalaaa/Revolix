import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | NexaFlow - Get in Touch",
  description:
    "Ready to transform your business with AI? Contact NexaFlow for a free strategy consultation. Let's discuss your project.",
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
