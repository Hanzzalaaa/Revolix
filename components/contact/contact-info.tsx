"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { MapPin, Mail, Phone, Clock } from "lucide-react"


export function ContactInfo() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">Get In Touch</h2>
          </div>
        </ScrollReveal>

        <div className="  mb-16 flex justify-center gap-23">
          <ScrollReveal>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground">hello@revolix.com</p>
                <p className="text-sm text-muted-foreground">support@revolix.com</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">+44 20 1234 5678</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold mb-1">Business Hours</p>
                <p className="text-sm text-muted-foreground">Mon - Fri ; 24/7</p>
                <p className="text-sm text-muted-foreground">Weekend: By appointment</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex gap-4">
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center mb-12">
          </div>
        </ScrollReveal>

        
      </div>
    </section>
  )
}
