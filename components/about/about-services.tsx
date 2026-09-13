"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import {
  Brain,
  Code2,
  Workflow,
  Megaphone,
  Palette,
  Cloud,
} from "lucide-react"

const capabilities = [
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "We delivers tailored machine learning models and intelligent AI agents to automate complex workflows and drive scalable business growth.",
    points: [
      "AI & Machine Learning",
      "AI Automation",
      "AI Agents",
    ],
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "We engineers high-performance custom software, building robust, scalable digital solutions that streamline operations and accelerate your business growth.",
    points: [
      "Web Development",
      "Backend Development",
      "Custom Software",
    ],
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "We optimizes corporate efficiency by deploying intelligent automated systems that eliminate repetitive tasks, reduce costs, and maximize operational productivity.",
    points: [
      "GoHighLevel",
      "CRM Automation",
      "Workflow Integration",
    ],
  },
  {
    icon: Megaphone,
    title: "SEO & Digital Marketing",
    description:
      "We accelerates online visibility and drives targeted traffic through data-backed SEO strategies and high-converting digital marketing campaigns.",
    points: [
      "SEO Services",
      "Digital Marketing",
      "Content & Campaigns",
    ],
  },
  {
    icon: Palette,
    title: "Design & Digital Experience",
    description:
      "We crafts intuitive user interfaces and immersive digital experiences that captivate audiences, elevate brands, and optimize user engagement.",
    points: [
      "UI/UX Design",
      "Graphic Design",
      "Brand Identity",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Technical Solutions",
    description:
      "We engineers secure cloud infrastructure and robust technical frameworks, ensuring seamless data integration, high availability, and effortless system scalability.",
    points: [
      "Cloud & DevOps",
      "Deployment",
      "Technical Support",
    ],
  },
]

export function AboutServices() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <ParallaxSection
        speed={0.1}
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-5"
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_65%)]" />
      </ParallaxSection>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===================================================
            HEADER
        =================================================== */}

        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              What We Do
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Built Around Your Digital Needs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Revolix brings development, AI, automation, design, marketing,
              and technical capabilities together to help businesses build
              and improve their digital systems.
            </p>

          </div>
        </ScrollReveal>

        {/* ===================================================
            CAPABILITY GRID
        =================================================== */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {capabilities.map((capability, index) => {
            const Icon = capability.icon

            return (
              <ScrollReveal
                key={capability.title}
                delay={index * 75}
              >
                <div
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/40
                    hover:shadow-xl
                    hover:shadow-primary/5
                  "
                >

                  {/* =================================================
                      GLOW
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-primary/5
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:bg-primary/10
                    "
                  />

                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div
                    className="
                      relative
                      mb-6
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary/10
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================= */}

                  <h3 className="relative text-xl font-semibold">
                    {capability.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>

                  {/* =================================================
                      POINTS
                  ================================================= */}

                  <div className="relative mt-6 space-y-3">

                    {capability.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                        <span>{point}</span>
                      </div>
                    ))}

                  </div>

                </div>
              </ScrollReveal>
            )
          })}

        </div>

      </div>
    </section>
  )
}