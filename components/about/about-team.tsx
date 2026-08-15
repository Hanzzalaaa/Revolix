"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Code2, Search, Sparkles, ArrowRight } from "lucide-react"

const teamGroups = [
  {
    icon: Code2,
    title: "Developers",
    description:
      "Full-stack engineers focused on performance, security, and scalable architecture.",
    highlights: [
      "Frontend & backend",
      "Next.js & React",
      "API integration",
    ],
  },
  {
    icon: Sparkles,
    title: "Designers",
    description:
      "Product and brand designers focused on UI/UX and visual clarity.",
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
      "Search specialists improving visibility with technical and on-page optimization.",
    highlights: [
      "On-page SEO",
      "Technical audits",
      "Content planning",
    ],
  },
]

export function AboutTeam() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      <ParallaxSection
        speed={0.1}
        className="absolute right-0 top-0 h-full w-1/2 opacity-5"
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_60%)]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            SECTION HEADING
        ================================================== */}

        <ScrollReveal>
          <div className="mb-16 text-center">

            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
              Our Team
            </p>

            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Our Team
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A focused, cross-functional team built to deliver
              results across development, design, and SEO.
            </p>

          </div>
        </ScrollReveal>

        {/* ==================================================
            TEAM GROUPS
        ================================================== */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {teamGroups.map((group, index) => (

            <ScrollReveal
              key={group.title}
              delay={index * 100}
            >

              <div className="h-full rounded-2xl border border-border bg-background p-8">

                {/* ICON */}

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">

                  <group.icon className="h-6 w-6 text-primary" />

                </div>

                {/* TITLE */}

                <h3 className="mb-2 text-lg font-semibold">
                  {group.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mb-4 text-sm text-muted-foreground">
                  {group.description}
                </p>

                {/* HIGHLIGHTS */}

                <ul className="space-y-2">

                  {group.highlights.map((item) => (

                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >

                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            </ScrollReveal>

          ))}

        </div>

        {/* ==================================================
            TEAM & PROJECT BUTTONS
        ================================================== */}

        <ScrollReveal delay={300}>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* VIEW TEAM */}

            <Link
              href="/team"
              className="group inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 sm:w-auto"
            >

              View Team

              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />

            </Link>

          

          </div>

        </ScrollReveal>

      </div>
    </section>
  )
}