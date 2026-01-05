"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"

export function IndustriesHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <ParallaxSection speed={0.2} className="absolute top-0 left-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--primary)_0%,_transparent_50%)]" />
        </ParallaxSection>
        <ParallaxSection speed={0.15} className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--accent)_0%,_transparent_50%)]" />
        </ParallaxSection>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Industries</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Transforming Industries with Intelligent Solutions
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We specialize in tailor-made software solutions designed to enhance the growth and advancement of
              businesses across various industries globally.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
