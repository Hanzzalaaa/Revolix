"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"

const features = [
  {
    title: "Experienced Team",
    description:
      "A multidisciplinary team delivering AI, software, and automation solutions.",
  },
  {
    title: "Modern Technology",
    description:
      "We use modern frameworks, cloud platforms, and AI technologies to build scalable products.",
  },
  {
    title: "Client Satisfaction",
    description:
      "Focused on delivering reliable solutions and maintaining long-term client relationships.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Transparent pricing with solutions tailored to your business requirements.",
  },
]

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
     
      <ParallaxSection
        speed={0.3}
        mouseParallax
        mouseIntensity={0.01}
        className="absolute inset-0"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_oklch(0.75_0.15_180_/_0.15)_0%,_transparent_50%)]" />
      </ParallaxSection>

      <ParallaxSection
        speed={0.2}
        direction="down"
        className="absolute bottom-0 left-0 w-full h-1/2"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,_oklch(0.75_0.15_75_/_0.1)_0%,_transparent_50%)]" />
      </ParallaxSection>

      {/* Floating Orbs */}
      <ParallaxSection
        speed={0.5}
        rotateOnScroll
        className="absolute top-10 left-10 w-24 h-24 opacity-20"
      >
        <div className="w-full h-full rounded-full bg-primary blur-2xl animate-pulse-glow" />
      </ParallaxSection>

      <ParallaxSection
        speed={0.4}
        direction="down"
        className="absolute bottom-10 right-10 w-32 h-32 opacity-15"
      >
        <div className="w-full h-full rounded-full bg-accent blur-2xl animate-pulse-glow" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
              Why Choose Revolix Tech
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              delay={index * 100}
              direction="scale"
            >
              <motion.div
                className="glass rounded-2xl p-8 h-full text-center"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-6">
                  {feature.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}