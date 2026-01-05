"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Target, Eye, Sparkles } from "lucide-react"

export function AboutMission() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <ScrollReveal>
            <div className="p-8 rounded-2xl bg-background border border-border h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with intelligent technology solutions that drive growth, innovation, and
                sustainable success in an ever-evolving digital landscape.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="p-8 rounded-2xl bg-background border border-border h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading force in AI-driven digital transformation, creating a future where technology and
                human potential work in perfect harmony.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="p-8 rounded-2xl bg-background border border-border h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between cutting-edge technology and real business value, making AI accessible and
                impactful for organizations of all sizes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
