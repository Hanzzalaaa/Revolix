"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Code2, Search, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const teamGroups = [
  {
    icon: Code2,
    title: "Developers",
    description:
      "Full-stack developers focused on building fast, secure, and scalable digital solutions.",
    highlights: [
      "Frontend & backend development",
      "Next.js & React",
      "APIs & integrations",
    ],
  },
  {
    icon: Sparkles,
    title: "Designers",
    description:
      "Creative designers focused on intuitive interfaces, strong visual systems, and memorable digital experiences.",
    highlights: [
      "UI/UX design",
      "Design systems",
      "Brand consistency",
    ],
  },
  {
    icon: Search,
    title: "SEO Experts",
    description:
      "SEO specialists helping businesses improve visibility, rankings, and organic growth.",
    highlights: [
      "Technical SEO",
      "On-page optimization",
      "Content strategy",
    ],
  },
]

export function AboutTeam() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* =====================================================
          ANIMATED CYAN GRID BACKGROUND
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-0
          h-[200%]
          w-full
          bg-[linear-gradient(rgba(79,209,197,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,197,0.03)_1px,transparent_1px)]
          bg-[size:64px_64px]
        "
        animate={{
          backgroundPosition: ["0px 0px", "64px 64px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* =====================================================
          SUBTLE CYAN GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================
            SECTION HEADER
        ========================== */}

        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
              Our Team
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
              The People Behind Revolix
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              A focused, cross-functional team combining development, design,
              SEO, and digital expertise to turn ideas into reliable digital
              solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* =========================
            TEAM GROUPS
        ========================== */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <ScrollReveal
                key={group.title}
                delay={index * 100}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border
                    bg-background
                    p-8
                    transition-all
                    duration-300
                    hover:border-primary/40
                    hover:shadow-xl
                    hover:shadow-primary/5
                  "
                >
                  {/* Card Glow */}

                  <div
                    className="
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

                  {/* Icon */}

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
                    "
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Title */}

                  <h3 className="relative mb-3 text-xl font-semibold">
                    {group.title}
                  </h3>

                  {/* Description */}

                  <p className="relative mb-6 text-sm leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>

                  {/* Highlights */}

                  <ul className="relative space-y-3">
                    {group.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* =========================
            BUTTONS
        ========================== */}

        <ScrollReveal delay={300}>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* View Team */}

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="lg"
                asChild
                className="group min-w-[170px]"
              >
                <Link href="/team">
                  View Team

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}