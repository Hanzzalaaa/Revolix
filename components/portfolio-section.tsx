"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ExternalLink,
  Code2,
  Globe,
  Smartphone,
  Bot,
  Search,
  ShoppingCart,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import Link from "next/link"

type Project = {
  title: string
  category: string
  description: string
  technologies: string[]
  icon: React.ElementType
  href?: string
}

const projects: Project[] = [
  {
    title: "Crave Express",
    category: "Web Development",
    description:
      "A modern food delivery experience designed to make browsing, ordering, and managing food deliveries simple and intuitive.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    icon: ShoppingCart,
  },

  {
    title: "HR Management System",
    category: "Custom Software",
    description:
      "A human resource management system designed to organize employee information, workflows, records, and day-to-day HR operations in one place.",
    technologies: ["React", "Node.js", "MongoDB"],
    icon: Code2,
  },

  {
    title: "AI Automation Platform",
    category: "AI & Automation",
    description:
      "An automation-focused digital solution designed to reduce repetitive tasks and improve business workflows through intelligent technology.",
    technologies: ["AI", "Automation", "APIs"],
    icon: Bot,
  },

  {
    title: "Business Website",
    category: "Web Development",
    description:
      "A responsive business website focused on clear communication, modern design, performance, and a strong digital presence.",
    technologies: ["Next.js", "React", "UI/UX"],
    icon: Globe,
  },

  {
    title: "SEO Growth Project",
    category: "SEO",
    description:
      "A search optimization project focused on improving website visibility, technical performance, and organic growth.",
    technologies: ["Technical SEO", "On-Page SEO", "Analytics"],
    icon: Search,
  },

  {
    title: "Mobile App Concept",
    category: "Mobile Development",
    description:
      "A mobile application concept designed around a simple user experience, intuitive navigation, and scalable functionality.",
    technologies: ["Mobile UI", "API Integration", "UX"],
    icon: Smartphone,
  },
]

const categories = [
  "All",
  "Web Development",
  "Custom Software",
  "AI & Automation",
  "SEO",
  "Mobile Development",
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        )

  return (
    <main className="relative overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-[45vh] items-center overflow-hidden py-20 lg:py-24">

        {/* Background */}
        <ParallaxSection
          speed={0.2}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        </ParallaxSection>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <ScrollReveal direction="scale">
              <div className="mb-5 inline-flex items-center rounded-full border border-border bg-background/60 px-4 py-2 backdrop-blur-xl">
                <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />

                <span className="text-sm font-medium text-primary">
                  Our Portfolio
                </span>
              </div>
            </ScrollReveal>

            {/* Main Heading */}
            <ScrollReveal>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Work That Turns
                <span className="block text-primary">
                  Ideas Into Reality
                </span>
              </h1>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section
        id="projects"
        className="relative pt-8 pb-24 lg:pt-10 lg:pb-32"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* =====================================================
              SECTION HEADING
          ===================================================== */}

          <ScrollReveal>
            <div className="mb-6 text-center">

              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Selected Work
              </p>

              <h2 className="mb-2 text-3xl font-bold sm:text-4xl">
                Projects We&apos;ve Built
              </h2>

              <p className="mx-auto max-w-2xl text-muted-foreground">
                A selection of digital products, websites, and
                technology solutions created to solve real business
                needs.
              </p>

            </div>
          </ScrollReveal>

          {/* =====================================================
              FILTERS
          ===================================================== */}

          <ScrollReveal delay={100}>
            <div className="mb-8 flex justify-start gap-2 overflow-x-auto pb-3 sm:justify-center">

              {categories.map((category) => (

                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>
          </ScrollReveal>

          {/* =====================================================
              PROJECT GRID
          ===================================================== */}

          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >

            <AnimatePresence mode="popLayout">

              {filteredProjects.map(
                (project, index) => {

                  const Icon = project.icon

                  return (

                    <motion.article
                      key={project.title}
                      layout
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                      }}
                      className="group"
                    >

                      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">

                        {/* =================================================
                            PROJECT VISUAL
                        ================================================= */}

                        <div className="relative flex h-56 items-center justify-center overflow-hidden bg-muted/30">

                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

                          <motion.div
                            className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-background/80 shadow-xl backdrop-blur-xl"
                            whileHover={{
                              scale: 1.1,
                              rotate: 3,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                            }}
                          >
                            <Icon className="h-9 w-9 text-primary" />
                          </motion.div>

                          {/* Category */}
                          <div className="absolute left-5 top-5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur-xl">
                            {project.category}
                          </div>

                        </div>

                        {/* =================================================
                            PROJECT CONTENT
                        ================================================= */}

                        <div className="flex flex-1 flex-col p-7">

                          <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary">
                            {project.title}
                          </h3>

                          <p className="mb-6 text-sm leading-7 text-muted-foreground">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="mb-6 flex flex-wrap gap-2">

                            {project.technologies.map(
                              (technology) => (

                                <span
                                  key={technology}
                                  className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                                >
                                  {technology}
                                </span>

                              )
                            )}

                          </div>

                          {/* Project Link */}
                          <div className="mt-auto">

                            {project.href ? (

                              <Link
                                href={project.href}
                                className="group/link inline-flex items-center text-sm font-medium text-primary"
                              >
                                View Project

                                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                              </Link>

                            ) : (

                              <span className="inline-flex items-center text-sm font-medium text-muted-foreground">
                                Project Preview
                              </span>

                            )}

                          </div>

                        </div>

                      </div>

                    </motion.article>

                  )
                }
              )}

            </AnimatePresence>

          </motion.div>

        </div>
      </section>

    </main>
  )
}