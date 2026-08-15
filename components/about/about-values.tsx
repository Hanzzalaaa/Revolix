"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { ShieldCheck, Timer, ThumbsUp } from "lucide-react"

const values = [
  {
    icon: ShieldCheck,
    title: "Professional Work",
    description: "We deliver clean, scalable, and secure solutions with a focus on long-term value.",
  },
  {
    icon: Timer,
    title: "Fast Delivery",
    description: "Streamlined workflows and clear milestones keep projects moving without surprises.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted Company",
    description: "We focus on clear communication while building long-term relationships with every client we work with.",
  },
]

export function AboutValues() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Us</h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 75}>
              <div className="p-6 rounded-2xl bg-background border border-border h-full hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
