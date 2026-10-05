"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Bot,
  Palette,
  Smartphone,
  Atom,
  Layers,
  Code2,
  Server,
  Database,
  Terminal,
  Wind,
  Workflow,
  Globe,
  ShoppingBag,
  Figma,
  Building2,
  Plug,
  GitBranch,
  Braces,
  Cloud,
  Sparkles,
  LayoutDashboard,
  BadgeCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"

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

// =================== BMS =============================
import bms from "./images/BMS.png"
import bms2 from "./images/BMS-2.png"
import bms3 from "./images/BMS-3.png"
import bms4 from "./images/BMS-4.png"


// ======================= LOGOS ==========================
import typescript from "./images/type.png"
import wordpress from "./images/wordpress.png"
import tailwind from "./images/tailwind.png"
import restapi from "./images/restapi.png"
import react from "./images/react.png"
import python from "./images/python.png"
import node from "./images/node.png"
import n8n from "./images/n8n.png"
import nextjs from "./images/nextjs.png"
import mongodb from "./images/mongodb.png"
import javascript from "./images/javas.png"
import github from "./images/github.png"
import git from "./images/git.png"
import figma from "./images/figma.png"
import ghl from "./images/ghl-age.png"
import aws from "./images/aws.png"
import ps from "./images/photoshop.png"
import docker from "./images/docker.png"

// ======================================================
// TECH STACK
// ======================================================

const techStack = [
  {
    name: "JavaScript",
    logo: javascript,
  },
  {
    name: "TypeScript",
    logo: typescript,
  },
  {
    name: "React",
    logo: react,
  },
  {
    name: "Next.js",
    logo: nextjs,
  },
   {
    name: "Tailwind CSS",
    logo: tailwind,
  },
  {
    name: "Node.js",
    logo: node,
  },
  {
    name: "MongoDB",
    logo: mongodb,
  },
  {
    name: "Python",
    logo: python,
  },
  {
    name: "Express.js",
    logo: restapi,
  },
  {
    name: "n8n",
    logo: n8n,
  },
    {
    name: "GoHighLevel",
    logo: ghl,
  },
  {
    name: "GitHub",
    logo: github,
  },
  {
    name: "WordPress",
    logo: wordpress,
  },
  {
    name: "Figma",
    logo: figma,
  },
  {
    name: "Shopify",
    logo: git,
  },
  {
    name: "AWS",
    logo: aws,
  },
  {
    name: "Photoshop",
    logo: ps,
  },
  {
    name: "Docker",
    logo: docker,
  },
]

// ======================================================
// PORTFOLIO DATA
// ======================================================

const projects = [
  {
    title: "Crave Express",
    category: "UI/UX Design",
    description:
      "A modern food delivery platform designed to simplify browsing, ordering, and managing food deliveries while providing customers with a smooth and intuitive experience.",
    technologies: [
      "Figma",
      "Mobile UI/UX",
      "Prototyping",
      "Design Systems",
    ],
    image: craveExpress,
    images: [
      craveExpress,
      craveExpress2,
      craveExpress3,
      craveExpress4,
    ],
  },

  {
    title: "HRM System",
    category: "Software Development",
    description:
      "A human resource management system designed to organize employee information, workflows, records, and day-to-day HR operations in one place.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Admin Dashboard",
    ],
    image: hrm,
    images: [hrm, hrm2, hrm3, hrm4],
  },

  {
    title: "LLM Orchestrator",
    category: "AI & Automation",
    description:
      "An AI orchestration platform designed to manage and coordinate intelligent workflows, models, and AI-powered processes through a centralized interface.",
    technologies: [
      "LLM",
      "AI Workflows",
      "Python",
      "API Integrations",
      "AI Orchestration",
    ],
    image: llmOrchestrator,
    images: [
      llmOrchestrator,
      llmOrchestrator2,
      llmOrchestrator3,
      llmOrchestrator4,
    ],
  },

  {
    title: "N8N Chatbot",
    category: "AI Agents",
    description:
      "An AI chatbot workflow built to connect conversations with automated business processes, helping streamline communication and repetitive tasks.",
    technologies: [
      "n8n",
      "AI Chatbot",
      "API Automation",
      "Workflow Automation",
    ],
    image: n8nChatbot,
    images: [
      n8nChatbot,
      n8nChatbot2,
      n8nChatbot3,
      n8nChatbot4,
    ],
  },
  {
    title: "GoHighLevel",
    category: "Business & Automation",
    description:
      "A business automation solution built around CRM workflows, lead management, customer communication, and automated sales pipelines.",
    technologies: [
      "GoHighLevel",
      "CRM",
      "Workflow Automation",
      "Lead Management",
      "AI Integration",
    ],
    image: goHighLevel,
    images: [
      goHighLevel,
      goHighLevel2,
      goHighLevel3,
      goHighLevel4,
    ],
  },

  {
    title: "Zakat App",
    category: "Custom Software",
    description:
      "A modern Zakat management application designed to provide a clear and organized experience for managing Zakat-related information and calculations.",
    technologies: [
      "Mobile Application",
      "UI/UX",
      "Interactive Forms",
      "Custom Software",
      "Responsive Interface",
    ],
    image: zakat,
    images: [zakat, zakat2, zakat3, zakat4],
  }, 
  {
title: "Building Management System",

category: "Custom Software",

description:
"A Building Management System designed to streamline property operations, tenant management, bookings, financial accounts, inventory, and complaint workflows through a centralized platform.",

technologies: [
"Web Application",
"Role-Based Access",
"Property Management",
"Financial Management",
"Inventory Management",
"Workflow Automation",
],

image: bms,

images: [bms, bms2, bms3, bms4],
},

  // {
  //   title: "Alpha Male",
  //   category: "Web Development",
  //   description:
  //     "A modern digital platform with a strong visual identity, structured content, and an engaging interface designed around the project's brand and audience.",
  //   technologies: [
  //     "WordPress",
  //     "WooCommerce",
  //     "Responsive Design",
  //     "E-Commerce",
  //     "Frontend Development",
  //   ],
  //   image: alphaMale,
  //   images: [alphaMale, alphaMale2, alphaMale3, alphaMale4],
  // },
]

// ======================================================
// PROCESS
// ======================================================

const processSteps = [
  {
    number: "01",
    icon: Palette,
    title: "Discovery",
    description:
      "Understand the business, requirements, users, and technical challenges before defining the solution.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Planning",
    description:
      "Define the architecture, technology stack, product direction, and development plan.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Build, test, and refine the product through an iterative development process.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Launch",
    description:
      "Deploy the finished solution and continue improving it as the business grows.",
  },
]

// ======================================================
// CAPABILITIES
// ======================================================

const capabilities = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive websites and web applications built for marketing, products, dashboards, and business platforms.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "LLM-powered tools, chatbots, orchestration systems, and intelligent workflows connected to real business processes.",
  },
  {
    icon: Workflow,
    title: "Workflow & Business Automation",
    description:
      "CRM, lead management, internal workflows, and repetitive process automation designed to reduce manual work.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces and design systems shaped around usability, clear interaction, responsive layouts, and strong visual identity.",
  },
  {
    icon: Database,
    title: "Custom Software",
    description:
      "Purpose-built applications and internal tools designed around a specific business process rather than a generic template.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Mobile-first products, interactive flows, and app experiences designed for clarity and ease of use.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Storefronts and content-managed experiences using platforms such as WooCommerce and WordPress.",
  },
  {
    icon: Plug,
    title: "APIs & Integrations",
    description:
      "Connect products, services, CRMs, AI systems, and third-party platforms into one connected workflow.",
  },
]



// ======================================================
// BUILD AREAS
// ======================================================

const buildAreas = [
  "Web Products",
  "AI Systems",
  "Business Automation",
  "Mobile Apps",
  "E-Commerce",
  "Internal Tools",
]
const capabilityLinks: Record<string, string> = {
  "AI & Automation": "/ai-automation",
  "AI & Machine Learning": "/aiml",
  "Software Development": "/custom-software",
  "Web Development": "/web-development",
  "UI/UX Design": "/uiux",
  "GoHighLevel": "/gohighlevel",
  "SEO": "/seo",
  "Digital Marketing": "/digital-marketing",
  "E-Commerce": "/e-commerce",
  "Cloud & DevOps": "/devops",
  "Workflow & Business Automation": "/gohighlevel",
  "Custom Software": "/custom-software",
  "Mobile Applications": "/mobile-app-development",
  'APIs & Integrations': "/backend-deve",
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null)

  const [currentImage, setCurrentImage] = useState(0)

  const openViewer = (project: (typeof projects)[number]) => {
    setSelectedProject(project)
    setCurrentImage(0)
  }

  const closeViewer = () => {
    setSelectedProject(null)
    setCurrentImage(0)
  }

  const nextImage = () => {
    if (!selectedProject) return

    setCurrentImage((previous) =>
      previous === selectedProject.images.length - 1 ? 0 : previous + 1,
    )
  }

  const previousImage = () => {
    if (!selectedProject) return

    setCurrentImage((previous) =>
      previous === 0 ? selectedProject.images.length - 1 : previous - 1,
    )
  }

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer()
      if (event.key === "ArrowRight") nextImage()
      if (event.key === "ArrowLeft") previousImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedProject])

  return (
    <>
      <Header />

      <main>
        <BreadcrumbJsonLd
          items={[
            {
              name: "Home",
              item: "https://revolixtech.com/",
            },
            {
              name: "Case Studies",
              item: "https://revolixtech.com/case-studies",
            },
          ]}
        />

        {/* ==================================================
            HERO
        ================================================== */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.08]" />
            <div className="absolute left-1/2 top-20 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Our Work
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Selected{" "}
                  <span className="text-primary">Projects</span>
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  Explore the software, AI systems, automation, and digital
                  experiences built by the Revolix Technologies team.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2 ">
                {buildAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-colors duration-200 hover:border-primary/30 hover:text-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
  <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center divide-x-0 divide-border rounded-2xl border border-border bg-card/60 px-3 py-5 backdrop-blur-sm sm:divide-x">
    {[
      {
        value: `${projects.length}+`,
        label: "Projects Delivered",
      },
      {
        value: `14+`,
        label: "Build Areas",
      },
      {
        value: `${techStack.length}+`,
        label: "Tools & Technologies",
      },
    ].map((stat) => (
      <div
        key={stat.label}
        className="min-w-[150px] px-5 text-center"
      >
        <p className="text-2xl font-bold text-foreground sm:text-3xl">
          {stat.value}
        </p>

        <p className="mt-1 text-xs uppercase tracking-wider text-teal-400/80 sm:text-sm">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</ScrollReveal>
          </div>
        </section>

        {/* ==================================================
            PROJECTS
        ================================================== */}
        <section
          id="projects"
          className="border-t border-border py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center "
>
            <ScrollReveal>
              <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between text-center ">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Selected Work
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Built for Real-World Use
                  </h2>

                  <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  A mix of product designs, custom softwares, AI systems,
                  business automation, digital experiences and e-commerce.
                </p>
                </div>
                
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project, index) => {
               
                const isLast = projects.length % 2 !== 0 && index === projects.length - 1

                return (
                  <ScrollReveal
                    key={`${project.title}-${index}`}
                    delay={index * 90}
                    className={cn(
                      isLast && "flex justify-center md:col-span-2",
                    )}
                  >
                    <article
                      className={cn(
                        "group relative w-full overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow,transform] duration-800 ease-[var(--ease-out)] hover:-translate-y-1 ",
                        isLast && "md:w-[calc(50%-1rem)]",
                      )}
                    >


                      {/* Project image */}
                      <div className="relative aspect-video overflow-hidden bg-black">
                        <Image
                          src={project.image}
                          alt={`${project.title} project`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>

                      {/* Project content */}
                      <div className="p-6 lg:p-8">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            

                            <div>
                              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                                {project.category}
                              </p>

                              <h3 className="mt-1 text-2xl font-bold">
                                {project.title}
                              </h3>
                            </div>
                          </div>

                          <div className="hidden rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:block">
                            Case Study
                          </div>
                        </div>

                        <p className="mt-5 leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.technologies.map((technology, techIndex) => (
                            <span
                              key={technology}
                              className={cn(
                                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200",
                                techIndex === 0
                                  ? "border-primary/20 bg-primary/5 text-foreground"
                                  : "border-border bg-muted/40 text-muted-foreground",
                              )}
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        <div className="mt-7 border-t border-border pt-5">
                          <button
                            type="button"
                            onClick={() => openViewer(project)}
                            className="press-feedback group/link inline-flex items-center rounded-md text-sm font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          >
                            View Project
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-[var(--ease-out)] group-hover/link:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            WHAT WE BUILD
        ================================================== */}
        <section
  id="capabilities"
  className="border-t border-border py-24 lg:py-32"
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <ScrollReveal>
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          What We Build
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Capabilities Across the Stack
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          From early-stage product design to production-ready
          software and AI-driven automation, we build around the
          actual needs of the business.
        </p>
      </div>
    </ScrollReveal>

    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {capabilities.map((capability, index) => {
        const Icon = capability.icon
        const href = capabilityLinks[capability.title] || "/services"

        return (
          <ScrollReveal
            key={capability.title}
            delay={index * 60}
            className="h-full"
          >
            <Link
              href={href}
              aria-label={`Explore ${capability.title}`}
              className="group block h-full rounded-2xl"
            >
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-[border-color,box-shadow,transform] duration-200 ease-[var(--ease-out)] group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-xl">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 transition-colors duration-200 group-hover:border-primary/20 group-hover:bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        )}
      )}
    </div>

    <ScrollReveal delay={250}>
      <div className="mt-10 flex justify-center">
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
        >
          Explore All Services
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </ScrollReveal>
  </div>
</section>

        {/* ==================================================
            TECH STACK
        ================================================== */}
      <section
  id="stack"
  className="border-t border-border bg-muted/[0.02] py-24 lg:py-32"
>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

    <ScrollReveal>
      <div className="text-center">

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Tools & Technologies
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          What We Build With
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A flexible stack covering frontend development, backend
          systems, automation, AI, design, e-commerce, and
          integrations.
        </p>

      </div>
    </ScrollReveal>

    <ScrollReveal delay={100}>
      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

        {techStack.map((tech, index) => {

          // =====================================================
          // TECHNOLOGIES THAT STAY LOGO-ONLY
          // =====================================================

          const logoOnlyTechs = new Set([
            "JavaScript",
            "JS",
            "Figma",
            "MongoDB",
            "React",
            "Tailwind CSS",
            "Tailwind",
            "Node.js",
            "AWS",
          ])

          const useImageBackground =
            !logoOnlyTechs.has(tech.name)

          // =====================================================
          // LAST ROW CENTERING
          // =====================================================

          const lastRowStart =
            techStack.length - (techStack.length % 6)

          const isLastRowOfFour =
            techStack.length % 6 === 4 &&
            index >= lastRowStart

          const colStartClasses = [
            "lg:col-start-2",
            "lg:col-start-3",
            "lg:col-start-4",
            "lg:col-start-5",
          ]

          return (
            <div
              key={tech.name}
              className={cn(
                `
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-card
                  text-center
                  transition-all
                  duration-300
                  ease-[var(--ease-out)]
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-xl
                `,
                isLastRowOfFour &&
                  colStartClasses[index - lastRowStart],
              )}
            >

              {/* =================================================
                  VISUAL AREA
              ================================================= */}

              <div className="relative h-36 w-full overflow-hidden bg-muted/120 sm:h-40">

                {useImageBackground ? (

                  <>
                    {/* Background Image */}
                    {/* <Image
                      src={tech.logo}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    /> */}

                    {/* Dark readability overlay */}
                    <div className="absolute inset-0 bg-red/900 transition-colors duration-300 group-hover:bg-black/15" />

                    {/* Optional logo over image */}
                    <div className="absolute inset-0 flex items-center justify-center">

                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={124}
                        height={124}
                        className="
                          h-35
                          w-45
                          object-contain
                          drop-shadow-lg
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />

                    </div>
                  </>

                ) : (

                  /* =================================================
                     LOGO-ONLY TECHNOLOGY
                  ================================================= */

                  <div className="flex h-full w-full items-center justify-center">

                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="
                        h-35
                        w-45
                        object-contain
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                  </div>

                )}

              </div>

              {/* =================================================
                  TECHNOLOGY NAME
              ================================================= */}

              <div className="border-t border-border bg-card px-3 py-4">

                <span className="text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground border">
                  {tech.name}
                </span>

              </div>

            </div>
          )
        })}

      </div>
    </ScrollReveal>

  </div>
</section>
        {/* ==================================================
            HOW WE WORK
        ================================================== */}
        <section
          id="process"
          className="border-t border-border py-24 lg:py-32"
        >
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
                  We focus on understanding the problem first, then building
                  practical solutions around the needs of the business.
                </p>
              </div>
            </ScrollReveal>

            <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-16 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

              {processSteps.map((step, index) => {
                const Icon = step.icon

                return (
                  <ScrollReveal key={step.number} delay={index * 90}>
                    <div className="relative h-full">
                      <div className="hover-lift relative z-10 h-full rounded-2xl border border-border bg-card p-6 transition-[border-color,box-shadow,transform] duration-200 ease-[var(--ease-out)] hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                        <div className="mb-6 flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/10 bg-primary/5">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>

                          <span className="text-sm font-bold text-primary/100">
                            {step.number}
                          </span>
                        </div>

                        <h3 className="text-xl font-semibold">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            CTA
        ================================================== */}
        <section className="border-y border-border py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Have a Project?
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Let&apos;s Build Something That Works
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Have an idea, a technical challenge, or a system that needs
                to be built? Talk to the Revolix Technologies team about your
                project.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="press-feedback group inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1" />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeViewer()
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.2,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative flex h-full max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-border bg-card/60 shadow-2xl"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-border bg-card/70 px-4 py-3 backdrop-blur-md">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <LayoutDashboard className="h-4 w-4 text-primary" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {selectedProject.title}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {currentImage + 1} / {selectedProject.images.length}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeViewer}
                  aria-label="Close image viewer"
                  className="press-feedback rounded-full p-2 text-muted-foreground transition-colors duration-200 ease-[var(--ease-out)] hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Main image */}
              <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8">
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src={selectedProject.images[currentImage]}
                    alt={`${selectedProject.title} ${currentImage + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 90vw"
                    className="select-none object-contain"
                  />
                </div>

                {selectedProject.images.length > 1 && (
                  <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Previous image"
                    className="press-feedback absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/70 text-foreground backdrop-blur-sm transition-transform duration-200 ease-[var(--ease-out)] hover:scale-105 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:left-6"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                )}

                {selectedProject.images.length > 1 && (
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="press-feedback absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/70 text-foreground backdrop-blur-sm transition-transform duration-200 ease-[var(--ease-out)] hover:scale-105 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:right-6"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="border-t border-border bg-card/70 px-4 py-3">
                  <div className="flex justify-center gap-2 overflow-x-auto">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentImage(index)}
                        aria-label={`View image ${index + 1}`}
                        className={cn(
                          "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-[opacity,border-color] duration-200 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          currentImage === index
                            ? "border-primary opacity-100"
                            : "border-transparent opacity-50 hover:opacity-80",
                        )}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    ))}
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