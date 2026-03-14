"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import dynamic from "next/dynamic"

const FloatingParticles = dynamic(() => import("@/components/floating-particles").then((m) => m.FloatingParticles), {
  ssr: false,
})
import { Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <FloatingParticles count={20} />

      <div className="absolute inset-0">
        <ParallaxSection
          speed={0.3}
          mouseParallax
          mouseIntensity={0.02}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] opacity-15"
        >
          <div className="w-full h-full rounded-full bg-primary blur-3xl animate-pulse-glow" />
        </ParallaxSection>
        <ParallaxSection
          speed={0.2}
          direction="down"
          mouseParallax
          mouseIntensity={0.015}
          className="absolute bottom-0 right-1/4 w-80 h-80 opacity-15"
        >
          <div className="w-full h-full rounded-full bg-accent blur-3xl animate-pulse-glow" />
        </ParallaxSection>
        <ParallaxSection speed={0.4} rotateOnScroll className="absolute top-1/2 right-10 w-40 h-40 opacity-10">
          <div className="w-full h-full rounded-full bg-primary blur-2xl" />
        </ParallaxSection>

        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(79,209,197,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,197,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"
          animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <ScrollReveal direction="scale">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">About Us</span>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance">
              About Revolix Tech - IT &amp; Digital Solutions Company
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a collective of curious and passionate technologists bound together by our deep tech knowledge, our
              human-centric mindset, and a passion for using technology to drive business transformation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <p className="text-sm text-muted-foreground mt-4">
              We follow{" "}
              <a
                href="https://developers.google.com/search/docs/essentials"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4"
              >
                Google Search Essentials
              </a>{" "}
              and{" "}
              <a
                href="https://www.w3.org/WAI/standards-guidelines/"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline underline-offset-4"
              >
                W3C accessibility guidelines
              </a>{" "}
              to keep every AI website compliant and user-friendly.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={280}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="glass border-primary/30 hover:bg-primary/10 bg-transparent">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Floating team icons */}
        <ParallaxSection
          speed={0.45}
          mouseParallax
          mouseIntensity={0.04}
          className="absolute right-10 top-32 hidden lg:block"
        >
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-12 h-12 rounded-full glass flex items-center justify-center"
                animate={{ y: [0, -8 * i, 0] }}
                transition={{ duration: 3 + i, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/30" />
              </motion.div>
            ))}
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  )
}
