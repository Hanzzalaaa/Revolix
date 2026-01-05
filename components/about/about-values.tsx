"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Lightbulb, Users, Shield, Zap, Heart, Globe } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We view every client as a partner, working collaboratively to achieve shared success.",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We operate with complete transparency and maintain the highest ethical standards.",
  },
  {
    icon: Zap,
    title: "Excellence Driven",
    description: "We are committed to delivering exceptional quality in everything we do.",
  },
  {
    icon: Heart,
    title: "Human-Centric",
    description: "Technology should serve people. We design solutions that enhance human potential.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "We embrace diversity and think globally while acting locally for our clients.",
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
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold">What Drives Us Forward</h2>
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
