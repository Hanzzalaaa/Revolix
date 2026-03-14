"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"
import { AnimatedCounter } from "./animated-counter"

const stats = [
  { value: 200, suffix: "+", label: "Clients Worldwide" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "AI Models Deployed" },
]

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced parallax backgrounds */}
      <ParallaxSection speed={0.3} mouseParallax mouseIntensity={0.01} className="absolute inset-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_oklch(0.75_0.15_180_/_0.15)_0%,_transparent_50%)]" />
      </ParallaxSection>
      <ParallaxSection speed={0.2} direction="down" className="absolute bottom-0 left-0 w-full h-1/2">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,_oklch(0.75_0.15_75_/_0.1)_0%,_transparent_50%)]" />
      </ParallaxSection>

      {/* Floating orbs */}
      <ParallaxSection speed={0.5} rotateOnScroll className="absolute top-10 left-10 w-24 h-24 opacity-20">
        <div className="w-full h-full rounded-full bg-primary blur-2xl animate-pulse-glow" />
      </ParallaxSection>
      <ParallaxSection speed={0.4} direction="down" className="absolute bottom-10 right-10 w-32 h-32 opacity-15">
        <div className="w-full h-full rounded-full bg-accent blur-2xl animate-pulse-glow" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100} direction="scale">
              <motion.div
                className="text-center p-6 rounded-2xl glass"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
