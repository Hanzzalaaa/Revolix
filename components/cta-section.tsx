"use client"

import type { ElementType } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"
import dynamic from "next/dynamic"
import { ArrowRight, Rocket } from "lucide-react"

const FloatingParticles = dynamic(
  () =>
    import("./floating-particles").then(
      (m) => m.FloatingParticles
    ),
  {
    ssr: false,
  }
)

type CTASectionProps = {
  headingAs?: ElementType
  subheadingAs?: ElementType
}

export function CTASection({
  headingAs: HeadingTag = "h2",
  subheadingAs: SubheadingTag = "h3",
}: CTASectionProps) {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <FloatingParticles count={25} />

      {/* Enhanced parallax backgrounds */}
      <ParallaxSection
        speed={0.3}
        mouseParallax
        mouseIntensity={0.02}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        />
      </ParallaxSection>

      <ParallaxSection
        speed={0.4}
        rotateOnScroll
        className="absolute top-1/4 right-10 w-24 h-24 opacity-20"
      >
        <div className="w-full h-full rounded-full bg-primary blur-xl animate-pulse-glow" />
      </ParallaxSection>

      <ParallaxSection
        speed={0.35}
        direction="down"
        className="absolute bottom-1/4 left-10 w-32 h-32 opacity-15"
      >
        <div className="w-full h-full rounded-full bg-accent blur-xl animate-pulse-glow" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal direction="scale">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <Rocket className="w-4 h-4 text-primary" />

            <span className="text-sm text-primary font-medium">
              Start Your Journey
            </span>
          </motion.div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal>
          <HeadingTag className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 text-balance">
            Contact Us
          </HeadingTag>
        </ScrollReveal>

        {/* Subheading */}
        <ScrollReveal delay={100}>
          <SubheadingTag className="text-lg text-muted-foreground mb-3 max-w-2xl mx-auto">
            Get Free Consultation
          </SubheadingTag>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={150}>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tell us about your goals, and we will map a clear plan
            for web development, SEO, or digital marketing that
            fits your budget and timeline.
          </p>
        </ScrollReveal>

        {/* Buttons */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Button
                size="lg"
                asChild
                className="group relative overflow-hidden"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Let&apos;s Discuss Your Idea

                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </Button>
            </motion.div>

            {/* Portfolio Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <Button
                size="lg"
                variant="outline"
                asChild
                className="glass border-primary/30 hover:bg-primary/10 bg-transparent"
              >
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}