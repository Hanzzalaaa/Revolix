"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"

export function CaseStudiesHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <ParallaxSection speed={0.2} className="absolute top-0 right-1/4 w-96 h-96 opacity-10">
          <div className="w-full h-full rounded-full bg-primary blur-3xl" />
        </ParallaxSection>
        <ParallaxSection speed={0.15} className="absolute bottom-0 left-1/4 w-64 h-64 opacity-10">
          <div className="w-full h-full rounded-full bg-accent blur-3xl" />
        </ParallaxSection>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Our Work</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Success Stories That Inspire Innovation
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore how we&apos;ve helped businesses across industries transform their operations, enhance customer
              experiences, and achieve remarkable growth through technology.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
