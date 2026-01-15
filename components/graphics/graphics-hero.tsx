"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Palette, Sparkles } from "lucide-react"

export function GraphicsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <ParallaxSection
        speed={0.3}
        className="absolute top-20 right-10 w-96 h-96 opacity-20"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500/40 via-purple-500/40 to-blue-500/40 blur-3xl animate-pulse-glow" />
      </ParallaxSection>

      <ParallaxSection
        speed={0.4}
        direction="down"
        className="absolute bottom-0 left-10 w-80 h-80 opacity-15"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-500/40 to-purple-500/40 blur-3xl" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6"
            >
              <Palette className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium">Graphics & Digital Art</span>
              <Sparkles className="w-4 h-4 text-blue-500" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              We Make{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Cool Stuff
              </span>
              {" "}Too
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              We also love creating art.
              <br />
              Anime characters, vtuber designs, illustrations - whatever catches our imagination.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pink-500" />
                <span>Anime Style</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Vtuber Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Character Art</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>Digital Illustrations</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
