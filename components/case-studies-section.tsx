"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"
import dynamic from "next/dynamic"

const FloatingParticles = dynamic(() => import("./floating-particles").then((m) => m.FloatingParticles), {
  ssr: false,
})
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Briefcase } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "AuroraEvents",
    industry: "Entertainment",
    tags: ["Evaluation and Design", "PWA", "Mobile Development"],
    description:
      "An AI-powered artist booking and event planning platform aimed at creating a reliable, intuitive space where event organizers can easily find and book performers.",
    image: "/entertainment-app-dark-purple-neon.jpg",
    imageAlt: "case studies in AI - Aurora Events Digital Transformation",
    href: "/case-studies/aurora-events",
  },
  {
    id: 2,
    title: "MediSync",
    industry: "Healthcare",
    tags: ["AI Integration", "Image Recognition", "Clinical Trials"],
    description:
      "A digital health platform leveraging artificial intelligence and advanced image capture technology to improve clinical trial enrollment and monitoring.",
    image: "/healthcare-app-medical-blue-technology.jpg",
    imageAlt: "best case studies in the world - MediSync AI Healthcare Solution",
    href: "/case-studies/medi-sync",
  },
  {
    id: 3,
    title: "LexaSuite",
    industry: "Legal Tech",
    tags: ["AI Assistant", "Contract Analysis", "Risk Assessment"],
    description:
      "An AI-powered personal legal assistant that streamlines legal processes, enables users to draft contracts, analyze risks, and research case law efficiently.",
    image: "/legal-tech-app-scales-justice-dark.jpg",
    href: "/case-studies/lexa-suite",
  },
  {
    id: 4,
    title: "FinSight",
    industry: "Fintech",
    tags: ["Internal Audit", "Compliance", "Process Optimization"],
    description:
      "A platform enhancing companies' financial health with top-tier internal audit consulting using a top-down approach to review and improve processes.",
    image: "/fintech-compliance-dashboard-dark-green.jpg",
    href: "/case-studies/finsight",
  },
]

export function CaseStudiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentStudy = caseStudies[currentIndex]

  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <FloatingParticles count={15} />

      {/* Enhanced parallax background */}
      <ParallaxSection speed={0.2} mouseParallax mouseIntensity={0.01} className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
        </div>
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left Side - Info */}
          <div className="lg:w-1/2 lg:sticky lg:top-32">
            <ScrollReveal direction="scale">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Briefcase className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm text-primary font-medium uppercase tracking-wider">Case Studies</span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <motion.span
                  key={currentIndex}
                  className="text-6xl font-display font-bold text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentIndex + 1}
                </motion.span>
                <span className="text-2xl text-muted-foreground">/ {caseStudies.length}</span>
              </div>
            </ScrollReveal>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStudy.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ScrollReveal delay={150}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <motion.span
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      {currentStudy.industry}
                    </motion.span>
                    {currentStudy.tags.slice(0, 2).map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <p className="text-4xl lg:text-5xl font-display font-bold mb-6">{currentStudy.title}</p>
                </ScrollReveal>

                <ScrollReveal delay={250}>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{currentStudy.description}</p>
                </ScrollReveal>
              </motion.div>
            </AnimatePresence>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild>
                    <Link href="/case-studies">
                      View All Case Studies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" asChild className="glass border-primary/30 hover:bg-primary/10 bg-transparent">
                    <Link href="/contact">Start a Project</Link>
                  </Button>
                </motion.div>
                <div className="flex gap-2">
                  <motion.button
                    onClick={prevSlide}
                    className="p-3 rounded-full glass border border-border hover:border-primary hover:text-primary transition-colors"
                    aria-label="Previous case study"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    onClick={nextSlide}
                    className="p-3 rounded-full glass border border-border hover:border-primary hover:text-primary transition-colors"
                    aria-label="Next case study"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2">
            <ScrollReveal delay={200}>
              <ParallaxSection speed={0.15} mouseParallax mouseIntensity={0.03}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStudy.id}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden glass"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={currentStudy.image || "/placeholder.svg"}
                      alt={currentStudy.imageAlt || currentStudy.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                    {/* Floating badge */}
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-medium text-primary"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentStudy.industry}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </ParallaxSection>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
