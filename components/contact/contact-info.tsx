"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Get In Touch</h2>
          </div>
        </ScrollReveal>

        {/* Responsive Grid Layout */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-69 max-w-md mx-auto md:max-w-none">
          
          <ScrollReveal>
            <div className="flex gap-4 p-4 rounded-xl transition-colors hover:bg-muted/100">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-base">Email Us</h3>
                <p className="text-sm text-muted-foreground break-all">hello@revolix.com</p>
                <p className="text-sm text-muted-foreground break-all">support@revolix.com</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex gap-4 p-4 rounded-xl transition-colors hover:bg-muted/100">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-base">Call Us</h3>
                <p className="text-sm text-muted-foreground whitespace-nowrap">‪+92 313 8062538‬</p>
                
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex gap-4 p-4 rounded-xl transition-colors hover:bg-muted/100">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-base">Business Hours</h3>
                <p className="text-sm text-muted-foreground">Mon - Fri : 24/7</p>
                <p className="text-sm text-muted-foreground">Weekend: By appointment</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
