"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

// ======================================================
// PROJECT IMAGES
// ======================================================

// ================= ZAKAT =================
import zakat from "./images/project zakat.png"
import zakat2 from "./images/project zakat (2).png"
import zakat3 from "./images/project zakat (3).png"
import zakat4 from "./images/project zakat (4).png"

// ================= GOHIGHLEVEL =================
import goHighLevel from "./images/Project Go high level.png"
import goHighLevel2 from "./images/Project Go high level (2).png"
import goHighLevel3 from "./images/Project Go high level (3).png"
import goHighLevel4 from "./images/Project Go high level (4).png"

// ================= ALPHA MALE =================
import alphaMale from "./images/project alpha male.png"
import alphaMale2 from "./images/project alpha male (2).png"
import alphaMale3 from "./images/project alpha male (3).png"
import alphaMale4 from "./images/project alpha male (4).png"

// ================= N8N CHATBOT =================
import n8nChatbot from "./images/N8N Chatbot.png"
import n8nChatbot2 from "./images/N8N Chatbot (2).png"
import n8nChatbot3 from "./images/N8N Chatbot (3).png"
import n8nChatbot4 from "./images/N8N Chatbot (4).png"

// ================= LLM ORCHESTRATOR =================
import llmOrchestrator from "./images/LLM Orchistrator.png"
import llmOrchestrator2 from "./images/LLM Orchistrator (2).png"
import llmOrchestrator3 from "./images/LLM Orchistrator (3).png"
import llmOrchestrator4 from "./images/LLM Orchistrator (4).png"

// ================= HRM =================
import hrm from "./images/Hrm project.png"
import hrm2 from "./images/Hrm project (2).png"
import hrm3 from "./images/Hrm project (3).png"
import hrm4 from "./images/Hrm project (4).png"

// ================= CRAVE EXPRESS =================
import craveExpress from "./images/crave express.png"
import craveExpress2 from "./images/crave express (2).png"
import craveExpress3 from "./images/crave express (3).png"
import craveExpress4 from "./images/crave express (4).png"

// ======================================================
// PORTFOLIO DATA
// ======================================================

const projects = [
  // ====================================================
  // 1. CRAVE EXPRESS
  // ====================================================

  {
    title: "Crave Express",
    category: "UI/UX Design",
   description:
  "A modern food delivery platform designed to simplify browsing, ordering, and managing food deliveries while providing customers with a smooth and intuitive experience.",
      
    technologies: ["UI/UX Design", "Mobile App", "Food Delivery"],
    image: craveExpress,

    images: [
      craveExpress,
      craveExpress2,
      craveExpress3,
      craveExpress4,
    ],
  },

  // ====================================================
  // 2. HRM PROJECT
  // ====================================================

  {
    title: "HRM System",
    category: "Software Development",
    description:
      "A human resource management system designed to organize employee information, workflows, records, and day-to-day HR operations in one place.",
    technologies: ["Web Application", "Dashboard", "HR Management"],
    image: hrm,

    images: [
      hrm,
      hrm2,
      hrm3,
      hrm4,
    ],
  },

  // ====================================================
  // 3. LLM ORCHESTRATOR
  // ====================================================

  {
    title: "LLM Orchestrator",
    category: "AI & Automation",
    description:
      "An AI orchestration platform designed to manage and coordinate intelligent workflows, models, and AI-powered processes through a centralized interface.",
    technologies: ["AI", "LLM", "Automation"],
    image: llmOrchestrator,

    images: [
      llmOrchestrator,
      llmOrchestrator2,
      llmOrchestrator3,
      llmOrchestrator4,
    ],
  },

  // ====================================================
  // 4. N8N CHATBOT
  // ====================================================

  {
    title: "N8N Chatbot",
    category: "AI & Automation",
    description:
      "An AI chatbot workflow built to connect conversations with automated business processes, helping streamline communication and repetitive tasks.",
    technologies: ["AI Chatbot", "n8n", "Automation"],
    image: n8nChatbot,

    images: [
      n8nChatbot,
      n8nChatbot2,
      n8nChatbot3,
      n8nChatbot4,
    ],
  },

  // ====================================================
  // 5. ALPHA MALE
  // ====================================================

  {
    title: "Alpha Male",
    category: "Web Development",
    description:
      "A modern digital platform with a strong visual identity, structured content, and an engaging interface designed around the project's brand and audience.",
    technologies: ["Web Design", "Frontend", "Responsive UI"],
    image: alphaMale,

    images: [
      alphaMale,
      alphaMale2,
      alphaMale3,
      alphaMale4,
    ],
  },

  // ====================================================
  // 6. GOHIGHLEVEL
  // ====================================================

  {
    title: "GoHighLevel",
    category: "Business & Automation",
    description:
      "A business automation solution focused on CRM workflows, lead management, customer communication, and automated sales processes.",
    technologies: ["GoHighLevel", "CRM", "Automation"],
    image: goHighLevel,

    images: [
      goHighLevel,
      goHighLevel2,
      goHighLevel3,
      goHighLevel4,
    ],
  },

  // ====================================================
  // 7. ZAKAT APP
  // ====================================================

  {
    title: "Zakat App",
    category: "Custom Software",
    description:
      "A modern Zakat management application designed to provide a clear and organized experience for managing Zakat-related information and calculations.",
    technologies: ["Mobile App", "UI/UX", "Custom Software"],
    image: zakat,

    images: [
      zakat,
      zakat2,
      zakat3,
      zakat4,
    ],
  },
]

// ======================================================
// PORTFOLIO PAGE
// ======================================================

export default function PortfolioPage() {
  // Currently selected project
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null)

  // Currently selected image
  const [currentImage, setCurrentImage] = useState(0)

  // ======================================================
  // OPEN IMAGE VIEWER
  // ======================================================

  const openViewer = (
    project: (typeof projects)[number]
  ) => {
    setSelectedProject(project)
    setCurrentImage(0)
  }

  // ======================================================
  // CLOSE IMAGE VIEWER
  // ======================================================

  const closeViewer = () => {
    setSelectedProject(null)
    setCurrentImage(0)
  }

  // ======================================================
  // NEXT IMAGE
  // ======================================================

  const nextImage = () => {
    if (!selectedProject) return

    setCurrentImage((previous) =>
      previous === selectedProject.images.length - 1
        ? 0
        : previous + 1
    )
  }

  // ======================================================
  // PREVIOUS IMAGE
  // ======================================================

  const previousImage = () => {
    if (!selectedProject) return

    setCurrentImage((previous) =>
      previous === 0
        ? selectedProject.images.length - 1
        : previous - 1
    )
  }

  // ======================================================
  // KEYBOARD CONTROLS
  // ======================================================

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer()
      }

      if (event.key === "ArrowRight") {
        nextImage()
      }

      if (event.key === "ArrowLeft") {
        previousImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Stop background page from scrolling
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      )

      document.body.style.overflow = ""
    }
  }, [selectedProject])

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <>
      <Header />

      <main>

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="relative overflow-hidden py-24 lg:py-32">

          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Our Work
              </p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Selected{" "}
                <span className="text-primary">
                  Projects
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Explore the software, AI systems, automation,
                and digital solutions built by the Revolix
                Technologies team.
              </p>

            </ScrollReveal>

          </div>

        </section>

        {/* ==================================================
            PROJECTS
        ================================================== */}

        <section className="pb-24 lg:pb-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-8 md:grid-cols-2">

              {projects.map((project, index) => (
    <ScrollReveal
      key={`${project.title}-${index}`}
      delay={index * 100}
      className={
        index === projects.length - 1
          ? "md:col-span-2 flex justify-center"
          : ""
      }
    >

      <article
        className={
          index === projects.length - 1
            ? "w-full max-w-[calc(50%-1rem)] group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            : "group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        }
      >
                    {/* ==================================================
                        OUTER PROJECT CARD IMAGE
                    ================================================== */}

                    <div className="relative aspect-video overflow-hidden bg-black">
                      <Image
                          src={project.image}
                          alt={`${project.title} project`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>


                    {/* ==================================================
                        PROJECT CONTENT
                    ================================================== */}

                    <div className="p-6 lg:p-8">

                      <p className="text-sm font-medium uppercase tracking-wider text-primary">
                        {project.category}
                      </p>

                      <h2 className="mt-2 text-2xl font-bold">
                        {project.title}
                      </h2>

                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      {/* ==================================================
                          TECHNOLOGIES
                      ================================================== */}

                      <div className="mt-6 flex flex-wrap gap-2">

                        {project.technologies.map(
                          (technology) => (

                            <span
                              key={technology}
                              className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                            >
                              {technology}
                            </span>

                          )
                        )}

                      </div>

                      {/* ==================================================
                          VIEW PROJECT BUTTON
                      ================================================== */}

                      <div className="mt-7">

                        <button
                          type="button"
                          onClick={() =>
                            openViewer(project)
                          }
                          className="group/link inline-flex items-center text-sm font-medium text-primary"
                        >

                          View Project

                          <ArrowRight
                            className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1"
                          />

                        </button>

                      </div>

                    </div>

                  </article>

                </ScrollReveal>

              ))}

            </div>

          </div>

        </section>

        {/* ==================================================
            HOW WE WORK
        ================================================== */}

        <section className="border-t border-border py-24 lg:py-32">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Our Approach
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  From Idea to Working Product
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  We focus on understanding the problem first,
                  then building practical solutions around the
                  needs of the business.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "Understand the business, requirements, users, and technical challenges.",
                },
                {
                  number: "02",
                  title: "Planning",
                  description:
                    "Define the solution, technology stack, architecture, and development plan.",
                },
                {
                  number: "03",
                  title: "Development",
                  description:
                    "Build, test, and refine the product through an iterative development process.",
                },
                {
                  number: "04",
                  title: "Launch",
                  description:
                    "Deploy the finished solution and continue improving it as the business grows.",
                },
              ].map((step, index) => (

                <ScrollReveal
                  key={step.number}
                  delay={index * 100}
                >

                  <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">

                    <span className="text-sm font-semibold text-primary">
                      {step.number}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                  </div>

                </ScrollReveal>

              ))}

            </div>

          </div>

        </section>

        {/* ==================================================
            CTA
        ================================================== */}

        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Have a Project?
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Let&apos;s Build Something That Works
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Have an idea, a technical challenge, or a
                system that needs to be built? Talk to our
                team about your project.
              </p>

              <div className="mt-8">

                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >

                  Start a Conversation

                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  />

                </Link>

              </div>

            </ScrollReveal>

          </div>

        </section>

      </main>

      {/* ==================================================
          IMAGE VIEWER / LIGHTBOX
      ================================================== */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={(event) => {

              // Close when clicking outside viewer
              if (event.target === event.currentTarget) {
                closeViewer()
              }

            }}
          >

            {/* ==================================================
                VIEWER CONTAINER
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
              }}
              className="relative flex h-full max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl"
            >

              {/* ==================================================
                  TOP BAR
              ================================================== */}

              <div className="flex items-center justify-between border-b border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md">

                <div className="min-w-0">

                  <p className="truncate text-sm font-semibold text-white">
                    {selectedProject.title}
                  </p>

                  <p className="text-xs text-white/50">
                    {currentImage + 1} /{" "}
                    {selectedProject.images.length}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={closeViewer}
                  aria-label="Close image viewer"
                  className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >

                  <X className="h-6 w-6" />

                </button>

              </div>

              {/* ==================================================
                  MAIN IMAGE AREA
              ================================================== */}

              <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8">

                <div className="relative flex h-full w-full items-center justify-center">

                  <Image
                    src={
                      selectedProject.images[
                        currentImage
                      ]
                    }
                    alt={`${selectedProject.title} ${
                      currentImage + 1
                    }`}
                    fill
                    sizes="(max-width: 768px) 100vw, 90vw"
                    className="object-contain select-none"
                    priority
                  />

                </div>

                {/* ==================================================
                    PREVIOUS BUTTON
                ================================================== */}

                {selectedProject.images.length > 1 && (

                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-black/80 sm:left-6"
                  >

                    <ChevronLeft className="h-6 w-6" />

                  </button>

                )}

                {/* ==================================================
                    NEXT BUTTON
                ================================================== */}

                {selectedProject.images.length > 1 && (

                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-black/80 sm:right-6"
                  >

                    <ChevronRight className="h-6 w-6" />

                  </button>

                )}

              </div>

              {/* ==================================================
                  THUMBNAILS
              ================================================== */}

              {selectedProject.images.length > 1 && (

                <div className="border-t border-white/10 bg-black/50 px-4 py-3">

                  <div className="flex justify-center gap-2 overflow-x-auto">

                    {selectedProject.images.map(
                      (image, index) => (

                        <button
                          key={index}
                          type="button"
                          onClick={() =>
                            setCurrentImage(index)
                          }
                          aria-label={`View image ${
                            index + 1
                          }`}
                          className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                            currentImage === index
                              ? "border-primary opacity-100"
                              : "border-transparent opacity-50 hover:opacity-80"
                          }`}
                        >

                          <Image
                            src={image}
                            alt={`Thumbnail ${
                              index + 1
                            }`}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />

                        </button>

                      )
                    )}

                  </div>

                </div>

              )}

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      <Footer />
    </>
  )
}