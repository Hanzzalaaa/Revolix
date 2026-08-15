"use client"

import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"

const clients = [
  { name: "TechCorp", initial: "T" },
  { name: "Innovate Inc", initial: "I" },
  { name: "DataFlow", initial: "D" },
  { name: "CloudNine", initial: "C" },
  { name: "AI Labs", initial: "A" },
  { name: "NextGen", initial: "N" },
]

export function TrustedBySection() {
  return (
    <section className="py-20 border-y border-border relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm text-muted-foreground mb-10 uppercase tracking-wider">
            Trusted by over 200+ Clients
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <ScrollReveal key={client.name} delay={index * 100}>
              <div className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-lg font-bold">{client.initial}</span>
                </div>
                <span className="text-lg font-semibold">{client.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div> 
      </div>
    </section>
  )
}
