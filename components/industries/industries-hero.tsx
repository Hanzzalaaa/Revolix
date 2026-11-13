"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Button } from "@/components/ui/button"

export function IndustriesHero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-[#060A12]">
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
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
          
          {/* Left Column: Core Hero Text */}
          <div className="max-w-3xl">
            <ScrollReveal delay={100}>
              <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance text-foreground leading-[1.14] sm:leading-[1.12]">
                Industries We Serve for AI Software &amp; Web Development
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We specialize in tailor-made software solutions designed to enhance the growth and advancement of
                businesses across various industries globally.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={280}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto bg-primary text-primary-foreground">
                  <Link href="/contact" className="justify-center">
                    Discuss Your Industry
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-teal-500/30 hover:bg-teal-500/10 text-foreground bg-transparent">
                  <Link href="/portfolio" className="justify-center">See Portfolio</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Floating Interactive Visual Floating Balls/Widgets */}
          <div className="relative hidden lg:flex items-center justify-center h-[400px] w-full">
            
            {/* Top-Left Orb (Primary Ambient Glow Ball) */}
            <ScrollReveal delay={150} className="absolute top-10 left-10">
              <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-primary/40 to-primary/10 border border-primary/30 shadow-lg shadow-primary/20 backdrop-blur-md animate-[bounce_4s_ease-in-out_infinite]" />
            </ScrollReveal>

            {/* Center Main Orb (Accent/Core Theme Interaction Ball) */}
            <ScrollReveal delay={250} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-accent/30 via-background/40 to-primary/20 border border-border/80 shadow-2xl backdrop-blur-sm flex items-center justify-center animate-[bounce_6s_ease-in-out_infinite_1s]">
                {/* Embedded Design/Tech node abstraction inside center ball */}
                <div className="h-12 w-12 rounded-xl bg-muted/40 border border-border/50 rotate-12 flex items-center justify-center backdrop-blur-xs">
                  <div className="h-4 w-4 rounded-full bg-primary/40 border border-primary animate-pulse" />
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom-Right Orb (Compact Deep Accent Tracking Ball) */}
            <ScrollReveal delay={350} className="absolute bottom-12 right-12">
              <div className="h-20 w-20 rounded-full bg-gradient-to-bl from-foreground/10 to-accent/40 border border-accent/40 shadow-xl backdrop-blur-lg animate-[bounce_5s_ease-in-out_infinite_2s]" />
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  )
}
