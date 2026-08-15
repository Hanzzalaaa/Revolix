"use client"

import { motion } from "framer-motion"
import {
  Search,
  ClipboardList,
  Code2,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, goals, challenges, audience, and the results you want to achieve.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We create a clear strategy and roadmap covering the right technology, features, design, timeline, and priorities.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our team turns the plan into a real solution through design, development, integration, testing, and refinement.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "After launch, we help optimize, maintain, improve, and scale your digital solution as your business grows.",
    icon: TrendingUp,
  },
]

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-0">
        {/* Heading */}
        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              How We Work
            </p>

            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              From Idea to Impact
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A simple, transparent process designed to turn your ideas
              into practical digital solutions that deliver real results.
            </p>
          </div>
        </ScrollReveal>

        {/* Process */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[60px] hidden h-px bg-border lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <ScrollReveal
                  key={step.number}
                  delay={index * 100}
                >
                  <motion.div
                    className="group relative h-full"
                    whileHover={{ y: -6 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    {/* Icon */}
                    <div className="relative z-10 mb-7 flex items-center justify-between lg:justify-center">
                      <div
                        className="
                          flex
                          h-[120px]
                          w-[120px]
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-border
                          bg-background
                          shadow-sm
                          transition-all
                          duration-300
                          group-hover:border-primary/40
                          group-hover:bg-primary/5
                          group-hover:shadow-xl
                        "
                      >
                        <div
                          className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-xl
                            bg-primary/10
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        >
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                      </div>

                      {/* Mobile/tablet number */}
                      <span className="text-5xl font-bold text-primary/10 sm:hidden">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <p className="mb-2 hidden text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:block">
                        Step {step.number}
                      </p>

                      <h3 className="mb-3 text-xl font-semibold">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute right-[-22px] top-[52px] z-20 hidden lg:block">
                        <ArrowRight className="h-5 w-5 text-primary/40" />
                      </div>
                    )}
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <p className="mb-5 text-sm text-muted-foreground">
              Have an idea you want to bring to life?
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-primary
                px-6
                py-3
                text-sm
                font-medium
                text-primary-foreground
                transition-all
                hover:shadow-lg
                hover:shadow-primary/20
              "
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}