"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  FileText,
  Bookmark,
  PenLine,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import { InternalLinksRow } from "@/components/internal-links-row"

export function BlogHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        <ParallaxSection
          speed={0.2}
          className="absolute left-0 top-0 h-full w-1/2 opacity-10"
        >
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,_var(--primary)_0%,_transparent_50%)]" />
        </ParallaxSection>

        <ParallaxSection
          speed={0.15}
          className="absolute bottom-0 right-0 h-1/2 w-1/3 opacity-10"
        >
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--accent)_0%,_transparent_50%)]" />
        </ParallaxSection>

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="max-w-3xl">

            <ScrollReveal>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Blog & Insights
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Latest SEO, Web Development &amp; Digital Marketing Blog
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                Explore practical insights, guides, and ideas across
                artificial intelligence, web development, automation,
                SEO, digital marketing, and modern technology.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <InternalLinksRow className="mt-6" />
            </ScrollReveal>

            <ScrollReveal delay={280}>
              <div className="mt-8 flex flex-wrap gap-4">

                <Button
                  size="lg"
                  asChild
                >
                  <Link href="/contact">
                    Get Content Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="glass border-primary/30 bg-transparent hover:bg-primary/10"
                >
                  <Link href="/services">
                    Explore Our Services
                  </Link>
                </Button>

              </div>
            </ScrollReveal>

          </div>

          {/* =====================================================
              RIGHT BLOG VISUAL
          ===================================================== */}

          <ScrollReveal
            delay={250}
            direction="scale"
            className="hidden md:block"
          >

            <ParallaxSection
              speed={0.2}
              mouseParallax
              mouseIntensity={0.025}
              className="relative mx-auto h-[430px] w-full max-w-[520px]"
            >

              {/* Main soft glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

              {/* =================================================
                  MAIN ARTICLE CARD
              ================================================= */}

              <motion.div
                className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-xl"
                initial={{
                  opacity: 0,
                  y: 20,
                  rotate: -3,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: -3,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                whileHover={{
                  rotate: -1,
                  y: -5,
                }}
              >

                {/* Article top */}
                <div className="flex items-center justify-between border-b border-border pb-4">

                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>

                    <span className="text-xs font-medium text-muted-foreground">
                      INSIGHTS
                    </span>
                  </div>

                  <Bookmark className="h-4 w-4 text-muted-foreground" />

                </div>

                {/* Article title */}
                <div className="pt-5">

                  <div className="h-3 w-20 rounded-full bg-primary/25" />

                  <div className="mt-4 h-5 w-full rounded-md bg-foreground/10" />
                  <div className="mt-2 h-5 w-4/5 rounded-md bg-foreground/10" />

                  <div className="mt-4 space-y-2">
                    <div className="h-2.5 w-full rounded-full bg-muted" />
                    <div className="h-2.5 w-11/12 rounded-full bg-muted" />
                    <div className="h-2.5 w-3/4 rounded-full bg-muted" />
                  </div>

                </div>

                {/* Article footer */}
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">

                  <div className="flex items-center gap-2">

                    <div className="h-7 w-7 rounded-full bg-primary/10" />

                    <div>
                      <div className="h-2 w-20 rounded-full bg-muted" />
                      <div className="mt-1 h-2 w-14 rounded-full bg-muted" />
                    </div>

                  </div>

                  <span className="text-[10px] text-muted-foreground">
                    6 min read
                  </span>

                </div>

              </motion.div>

              {/* =================================================
                  SECOND FLOATING CARD
              ================================================= */}

              <motion.div
                className="absolute left-2 top-16 w-44 rounded-xl border border-border bg-background/90 p-4 shadow-xl backdrop-blur-xl"
                initial={{
                  opacity: 0,
                  x: -20,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                }}
                whileHover={{
                  y: -4,
                }}
              >

                <div className="flex items-center gap-2">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-medium">
                      Guides
                    </p>

                    <p className="text-[10px] text-muted-foreground">
                      Practical knowledge
                    </p>
                  </div>

                </div>

                <div className="mt-4 space-y-2">

                  <div className="h-2 rounded-full bg-muted" />
                  <div className="h-2 w-4/5 rounded-full bg-muted" />
                  <div className="h-2 w-2/3 rounded-full bg-primary/15" />

                </div>

              </motion.div>

              {/* =================================================
                  TOP RIGHT MINI CARD
              ================================================= */}

              <motion.div
                className="absolute right-0 top-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background/90 shadow-xl backdrop-blur-xl"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: 8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 8,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                }}
                whileHover={{
                  rotate: 12,
                  scale: 1.05,
                }}
              >

                <PenLine className="h-6 w-6 text-primary" />

              </motion.div>

              {/* =================================================
                  BOTTOM RIGHT FLOATING TAG
              ================================================= */}

              <motion.div
                className="absolute bottom-12 right-4 rounded-xl border border-border bg-background/90 px-4 py-3 shadow-xl backdrop-blur-xl"
                initial={{
                  opacity: 0,
                  x: 20,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 1.1,
                }}
              >

                <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Topics
                </p>

                <p className="mt-1 text-xs font-medium text-primary">
                  SEO · AI · Web · Growth
                </p>

              </motion.div>

              {/* =================================================
                  DECORATIVE OUTLINE
              ================================================= */}

              <motion.div
                className="absolute bottom-5 left-12 h-16 w-16 rounded-xl border border-primary/20"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Small dot */}
              <motion.div
                className="absolute right-24 bottom-3 h-2.5 w-2.5 rounded-full bg-primary/50"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

            </ParallaxSection>

          </ScrollReveal>

        </div>

      </div>
    </section>
  )
}