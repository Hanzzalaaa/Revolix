"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"
import dynamic from "next/dynamic"

const FloatingParticles = dynamic(() => import("./floating-particles").then((m) => m.FloatingParticles), {
  ssr: false,
})
import { Button } from "@/components/ui/button"
import { Code2, Search, Megaphone, Sparkles, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Business, ecommerce, and custom websites built for speed, security, and conversions.",
    href: "/services",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "On-page, off-page, and technical SEO to rank higher and bring qualified traffic.",
    href: "/services",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Campaigns that drive leads with social media, paid ads, and content strategy.",
    href: "/services",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Sparkles,
    title: "AI ML",
    description: "Machine learning solutions, data pipelines, and intelligent automation.",
    href: "/services",
    color: "from-violet-500/20 to-indigo-500/20",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Floating particles */}
      <FloatingParticles count={20} />

      {/* Enhanced parallax backgrounds */}
      <ParallaxSection
        speed={0.3}
        mouseParallax
        mouseIntensity={0.01}
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
      >
        <div className="w-full h-full bg-[linear-gradient(45deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:100px_100px]" />
      </ParallaxSection>

      <ParallaxSection speed={0.2} direction="down" className="absolute top-20 left-10 w-64 h-64 opacity-15">
        <div className="w-full h-full rounded-full bg-primary blur-3xl animate-pulse-glow" />
      </ParallaxSection>

      <ParallaxSection speed={0.25} rotateOnScroll className="absolute bottom-20 right-20 w-48 h-48 opacity-10">
        <div className="w-full h-full rounded-full bg-accent blur-3xl animate-pulse-glow" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal direction="scale">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">What We Do</span>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 text-balance">Our Services</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, rank, and grow your digital presence with confidence.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 75} direction="scale">
              <Link href={service.href} className="group block h-full">
                <motion.div
                  className="h-full p-6 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-500"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 relative overflow-hidden`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-7 h-7 text-primary relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 2, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-12 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group glass border-primary/30 hover:bg-primary/10 bg-transparent"
              >
                <Link href="/services">
                  Explore All Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
