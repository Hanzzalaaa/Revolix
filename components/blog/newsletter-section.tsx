"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <ParallaxSection
        speed={0.2}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </ParallaxSection>

      {/* Animated grid */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 h-[200%] w-full opacity-40 bg-[linear-gradient(rgba(79,209,197,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,197,0.025)_1px,transparent_1px)] bg-[size:64px_64px]"
        animate={{
          backgroundPosition: ["0px 0px", "64px 64px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale">
          <div className="rounded-3xl border border-border bg-card/80 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12 lg:p-16">

            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Sparkles className="h-4 w-4 text-primary" />

              <span className="text-sm font-medium text-primary">
                Ready to Build?
              </span>
            </motion.div>

            {/* Heading */}
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Turn{" "}
              <span className="text-primary">
                Ideas Into Action?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Reading is a good start. Whether you need a website,
              custom software, AI automation, SEO, digital marketing,
              or another digital solution, our team can help you put
              the right ideas into practice.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Start a Conversation

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center rounded-lg border border-border bg-background/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
                >
                  Explore Our Services

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}