"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, audience, goals, challenges, and current digital presence so we know exactly what needs to be improved.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Plan",
    description:
      "We create a clear strategy covering the right services, technology, content, SEO, automation, design, and growth opportunities for your business.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Design",
    description:
      "Our team turns the strategy into intuitive experiences, strong visual systems, conversion-focused layouts, and practical user journeys.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Build & Launch",
    description:
      "We develop, configure, integrate, test, and launch your solution with a focus on performance, reliability, responsiveness, and scalability.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Grow & Optimize",
    description:
      "After launch, we monitor performance, improve SEO and conversions, refine campaigns, optimize automation, and continuously identify new growth opportunities.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <ParallaxSection
        speed={0.15}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      </ParallaxSection>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =======================================================
            HEADING
        ======================================================= */}

        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">
              Our Process
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              From Idea to Growth
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A straightforward process designed to turn your business
              goals into practical digital solutions and measurable
              results.
            </p>
          </div>
        </ScrollReveal>

        {/* =======================================================
            PROCESS
        ======================================================= */}

        <div className="relative">

          {/* Desktop connection line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <ScrollReveal
                  key={step.number}
                  delay={index * 100}
                >
                  <div className="relative flex flex-col items-center text-center">

                    {/* =================================================
                        ICON + NUMBER
                    ================================================= */}

                    <div className="relative z-10 mb-6">

                      <div className="w-20 h-20 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>

                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                        {step.number}
                      </span>

                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <h3 className="text-xl font-semibold mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                      {step.description}
                    </p>

                  </div>
                </ScrollReveal>
              )
            })}

          </div>
        </div>

        {/* =========================================================
            BOTTOM SERVICE MESSAGE
        ========================================================= */}

        <ScrollReveal delay={500}>
          <div className="mt-16 mx-auto max-w-3xl text-center">
            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm px-6 py-6">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Whether you need a new website, SEO, digital marketing,
                GoHighLevel automation, AI solutions, UI/UX design,
                software development, or ongoing digital support, our
                process keeps everything aligned from strategy to
                execution.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}