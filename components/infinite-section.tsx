"use client"

import {
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  Figma,
  Globe,
  Megaphone,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

const rowOne = [
  {
    name: "Web Development",
    icon: Globe,
  },
  {
    name: "AI & Machine Learning",
    icon: Brain,
  },
  {
    name: "AI Automation",
    icon: Workflow,
  },
  {
    name: "SEO Services",
    icon: Search,
  },
  {
    name: "UI/UX Design",
    icon: Figma,
  },
  {
    name: "Mobile App Development",
    icon: Smartphone,
  },
  {
    name: "Custom Software",
    icon: Code2,
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
  },
]

const rowTwo = [
  {
    name: "AI Agents",
    icon: Bot,
  },
  {
    name: "Backend Development",
    icon: Database,
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
  },
  {
    name: "E-Commerce",
    icon: ShoppingCart,
  },
  {
    name: "GoHighLevel",
    icon: Sparkles,
  },
  {
    name: "Brand & Graphic Design",
    icon: Palette,
  },
  {
    name: "Data Analytics",
    icon: Database,
  },
  {
    name: "Software QA",
    icon: Code2,
  },
]

function ServiceCard({
  name,
  icon: Icon,
}: {
  name: string
  icon: React.ElementType
}) {
  return (
    <div
      className="
        group
        flex
        shrink-0
        items-center
        gap-3
        rounded-xl
        border
        border-border/70
        bg-background/80
        px-5
        py-4
        shadow-sm
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-primary/40
        hover:bg-primary/5
        hover:shadow-lg
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-primary/10
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <Icon className="h-5 w-5 text-primary" />
      </div>

      <span className="whitespace-nowrap text-sm font-medium text-foreground">
        {name}
      </span>
    </div>
  )
}

export function InfiniteServices() {
  // Duplicate the array so the animation can loop seamlessly.
  const firstRow = [...rowOne, ...rowOne]
  const secondRow = [...rowTwo, ...rowTwo]

  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative">
        {/* Heading */}
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              What We Do
            </p>

            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Technology & Digital Services
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From intelligent automation to modern web experiences,
              we provide the technology and digital solutions businesses
              need to grow, operate, and scale.
            </p>
          </div>
        </ScrollReveal>

        {/* First Row */}
        <ScrollReveal delay={100}>
          <div className="relative mb-5 overflow-hidden">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-24 lg:w-40" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-24 lg:w-40" />

            <motion.div
              className="flex w-max gap-4 hover:[animation-play-state:paused]"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {firstRow.map((service, index) => (
                <ServiceCard
                  key={`row-one-${service.name}-${index}`}
                  name={service.name}
                  icon={service.icon}
                />
              ))}
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Second Row */}
        <ScrollReveal delay={150}>
          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-24 lg:w-40" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-24 lg:w-40" />

            <motion.div
              className="flex w-max gap-4"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                x: {
                  duration: 34,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {secondRow.map((service, index) => (
                <ServiceCard
                  key={`row-two-${service.name}-${index}`}
                  name={service.name}
                  icon={service.icon}
                />
              ))}
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Bottom link */}
        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <a
              href="/services"
              className="
                inline-flex
                items-center
                rounded-lg
                border
                border-border
                px-5
                py-2.5
                text-sm
                font-medium
                text-muted-foreground
                transition-all
                hover:border-primary/40
                hover:bg-primary/5
                hover:text-primary
              "
            >
              Explore All Services
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}