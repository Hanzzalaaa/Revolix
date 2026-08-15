"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InternalLinksRow } from "@/components/internal-links-row"

const FloatingParticles = dynamic(
  () =>
    import("@/components/floating-particles").then(
      (m) => m.FloatingParticles
    ),
  {
    ssr: false,
  }
)

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================= */}

      <FloatingParticles count={25} />

      {/* =========================================================
          PARALLAX BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0">

        <ParallaxSection
          speed={0.3}
          mouseParallax
          mouseIntensity={0.02}
          className="absolute right-0 top-0 h-[600px] w-[600px] opacity-20"
        >
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_50%)] animate-pulse-glow" />
        </ParallaxSection>

        <ParallaxSection
          speed={0.2}
          direction="down"
          mouseParallax
          mouseIntensity={0.015}
          className="absolute bottom-0 left-0 h-[400px] w-[400px] opacity-15"
        >
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--accent)_0%,_transparent_50%)] animate-pulse-glow" />
        </ParallaxSection>

        <ParallaxSection
          speed={0.4}
          rotateOnScroll
          className="absolute left-1/3 top-1/4 h-32 w-32 opacity-10"
        >
          <div className="h-full w-full rounded-full bg-primary blur-2xl" />
        </ParallaxSection>

        {/* =======================================================
            ANIMATED GRID
        ======================================================= */}

        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(79,209,197,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,197,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"
          animate={{
            backgroundPosition: ["0px 0px", "64px 64px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl">

          {/* =====================================================
              BADGE
          ===================================================== */}

          <ScrollReveal direction="scale">

            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2"
              whileHover={{
                scale: 1.05,
              }}
            >

              <Sparkles className="h-4 w-4 animate-pulse text-primary" />

              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Our Services
              </span>

            </motion.div>

          </ScrollReveal>

          {/* =====================================================
              HEADING
          ===================================================== */}

          <ScrollReveal delay={100}>

            <h1 className="mb-6 text-balance text-4xl font-display font-bold sm:text-5xl lg:text-6xl">

              Digital Solutions Built
              <span className="block text-primary">
                For Modern Businesses
              </span>

            </h1>

          </ScrollReveal>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <ScrollReveal delay={200}>

            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground">

              From AI and automation to web development, custom
              software, SEO, digital marketing, e-commerce, design,
              and cloud infrastructure, Revolix Technologies helps
              businesses build, improve, and scale their digital
              presence with modern technology.

            </p>

          </ScrollReveal>

          {/* =====================================================
              INTERNAL LINKS
          ===================================================== */}

          <ScrollReveal delay={220}>

            <InternalLinksRow className="mt-6" />

          </ScrollReveal>

          {/* =====================================================
              BUTTONS
          ===================================================== */}

          <ScrollReveal delay={280}>

            <div className="mt-8 flex flex-wrap gap-4">

              <Button
                size="lg"
                asChild
              >

                <Link href="/contact">

                  Book a Strategy Call

                  <ArrowRight className="ml-2 h-4 w-4" />

                </Link>

              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="glass border-primary/30 bg-transparent hover:bg-primary/10"
              >

                <Link href="/portfolio">
                  View Our Work
                </Link>

              </Button>

            </div>

          </ScrollReveal>

        </div>

        {/* =========================================================
            FLOATING DECORATIVE ELEMENT
        ========================================================= */}

        <ParallaxSection
          speed={0.5}
          mouseParallax
          mouseIntensity={0.05}
          className="absolute right-20 top-20 hidden lg:block"
        >

          <motion.div
            className="flex h-20 w-20 items-center justify-center rounded-2xl glass"
            animate={{
              rotate: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >

            <div className="h-10 w-10 rounded-lg bg-primary/30" />

          </motion.div>

        </ParallaxSection>

      </div>

    </section>
  )
}