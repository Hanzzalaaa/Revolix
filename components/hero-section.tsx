"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"
import dynamic from "next/dynamic"

const FloatingParticles = dynamic(
  () =>
    import("./floating-particles").then(
      (m) => m.FloatingParticles
    ),
  {
    ssr: false,
  }
)

const IridescentSphere = dynamic(
  () =>
    import("./iridescent-sphere").then(
      (m) => m.IridescentSphere
    ),
  {
    ssr: false,
  }
)

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-24 lg:py-28 bg-[#060A12]">

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================= */}
      <FloatingParticles count={16} />

      {/* =========================================================
          BACKGROUND AMBIENT ELEMENTS & ANIMATED GRID
      ========================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle center ambient illumination behind 3D orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-b from-primary/15 via-teal-950/10 to-transparent blur-3xl opacity-35" />

        {/* Animated grid pattern matching the homepage */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[200%] bg-[linear-gradient(rgba(79,209,197,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,197,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"
          animate={{
            backgroundPosition: ["0px 0px", "64px 64px"],
          }}
          transition={{
            duration: 26,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* =========================================================
          ASYMMETRICAL 3D IRIDESCENT GLASS ORB
          Positioned centrally across the canvas behind both columns
      ========================================================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[280px] sm:w-[520px] sm:h-[420px] md:w-[640px] md:h-[540px] lg:w-[780px] lg:h-[680px] pointer-events-none z-0">
        <IridescentSphere className="w-full h-full" />
      </div>

      {/* =========================================================
          HERO CONTENT (BALANCED & HORIZONTALLY CENTERED)
      ========================================================= */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* LEFT HERO CONTENT (ON THE LEFT) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Main Heading - No Eyebrow */}
            <ScrollReveal delay={50}>
              <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.15] sm:leading-[1.12] mb-5 text-foreground tracking-tight text-balance">
                Websites, AI &amp; Software for{" "}
                <span className="text-primary font-bold">US Small Businesses.</span>
              </h1>
            </ScrollReveal>

            {/* Supporting Description */}
            <ScrollReveal delay={120}>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 max-w-xl leading-relaxed font-normal">
                We build your website, automate your follow-up, and create the tools your team needs, so more inquiries turn into booked jobs. US company, dedicated team, a fixed quote after one call.
              </p>
            </ScrollReveal>
          </div>

          {/* RIGHT HERO CONTENT (ON THE RIGHT) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right">
            {/* Product Highlight: NeverLoseLead */}
            <ScrollReveal delay={160}>
              <div className="mb-3">
                <a
                  href="https://neverloselead.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-background/60 backdrop-blur-md px-3.5 py-2 text-xs sm:text-sm text-primary transition-all duration-200 hover:border-primary/50 hover:bg-primary/10"
                >
                  <span className="font-semibold text-foreground">Featured Product:</span>
                  <span>NeverLoseLead — AI Speed-to-Lead Follow-up</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Added Statement */}
            <ScrollReveal delay={190}>
              <p className="text-xs sm:text-sm md:text-base text-foreground/85 font-medium mb-5 max-w-md">
                If you are comparing, we are built for results and speed.
              </p>
            </ScrollReveal>

            {/* Hero CTA Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center lg:justify-end gap-3 pt-1 w-full sm:w-auto"
            >
              {/* Primary CTA Button */}
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto group relative overflow-hidden bg-primary text-primary-foreground font-medium px-6 py-3 h-12 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link href="/contact" className="justify-center">
                  <span className="relative z-10 flex items-center justify-center">
                    Book a free call
                  </span>
                </Link>
              </Button>

              {/* Secondary CTA Button */}
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-border/80 bg-background/50 backdrop-blur-sm px-6 py-3 h-12 text-sm font-medium text-foreground transition-all hover:bg-muted/80 hover:border-primary/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore our services
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
      >
        <span className="text-xs text-muted-foreground/80 tracking-wider uppercase font-mono">
          Scroll to explore
        </span>

        <motion.div
          className="w-5 h-9 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1.5"
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{
              y: [0, 6, 0],
              opacity: [1, 0.4, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </motion.div>
      </motion.div>

    </section>
  )
}



