"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

interface EditorialService {
  title: string
  shortName: string
  description: string
  href: string
  image: string
  alt: string
}

const editorialServices: EditorialService[] = [
  {
    title: "WEBSITE DEVELOPMENT",
    shortName: "Websites",
    description:
      "High-converting, bespoke websites built for US small businesses. Fast-loading, mobile-first, and engineered to turn visitors into booked inquiries.",
    href: "/web-development",
    image: "/web-deve.png",
    alt: "3D precision website development model with modern responsive architecture",
  },
  {
    title: "ECOMMERCE DEVELOPMENT",
    shortName: "Ecommerce",
    description:
      "Conversion-focused online stores with frictionless checkout, inventory synchronization, and scalable shopping experiences across Shopify, WooCommerce, and custom headless storefronts.",
    href: "/e-commerce",
    image: "/E-Commerce.png",
    alt: "Sculptural metallic digital storefront interface and retail checkout systems",
  },
  {
    title: "CUSTOM WEB APPLICATIONS",
    shortName: "Custom Apps",
    description:
      "Unique, high-performance web applications, APIs, and scalable backend architectures built around your exact operational workflows.",
    href: "/custom-software",
    image: "/backend.png",
    alt: "Sculptural custom software backend architecture and high-throughput systems",
  },
  {
    title: "AI SYSTEMS & AGENTS",
    shortName: "AI Systems",
    description:
      "Production AI agents, RAG pipelines, voice AI, and intelligent multi-agent workflows seamlessly integrated into real business operations.",
    href: "/ai-agents",
    image: "/ai-agents-main service.png",
    alt: "Futuristic titanium AI processor core representing autonomous multi-agent intelligence",
  },
  {
    title: "CRM & MARKETING AUTOMATION",
    shortName: "Automations",
    description:
      "GoHighLevel setup, custom webhook orchestration, automated speed-to-lead follow-up, and omnichannel client nurturing systems.",
    href: "/gohighlevel",
    image: "/building process.png",
    alt: "3D build process laptop representing automated CRM workflows and lead management systems",
  },
  {
    title: "CLOUD & DEVOPS",
    shortName: "Cloud & DevOps",
    description:
      "Modern cloud and DevOps practices used to deploy, maintain, and run reliable software applications with automated CI/CD pipelines.",
    href: "/devops",
    image: "/Glossy Chrome Cloud Icon.png",
    alt: "Glossy chrome cloud infrastructure icon representing high-availability DevOps deployment",
  },
  {
    title: "UI/UX DESIGN",
    shortName: "Design",
    description:
      "Modern interfaces, product design, wireframes, design systems, and responsive digital experiences optimized for conversion and usability.",
    href: "/uiux",
    image: "/design.png",
    alt: "Sculptural digital design model representing human-centric interface architectures",
  },
]

export function ServicesList() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#060A12] text-[#F2F2EF] py-24 sm:py-32 lg:py-36 overflow-hidden"
      aria-label="Editorial Services Showcase"
    >
      {/* Background Subtle Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-teal-500/[0.03] blur-[180px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.025] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* =========================================================
            1. SECTION HEADER
            - Small clean "OUR SERVICES"
            - Thin horizontal divider
            - Introductory statement
        ========================================================= */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          {/* Header Tag */}
          <div className="text-xs sm:text-sm font-mono tracking-[0.22em] uppercase text-[#F2F2EF]/90 font-medium">
            OUR SERVICES
          </div>

          {/* Thin Horizontal Divider extending across width */}
          <div className="w-full h-[1px] bg-[#343434] my-6 sm:my-8" />

          {/* Introductory Text Block */}
          <p className="text-2xl sm:text-3xl lg:text-[2.25rem] font-sans font-normal tracking-tight text-[#F2F2EF] max-w-[650px] leading-[1.38]">
            Digital experiences and intelligent systems designed to help
            ambitious businesses grow, operate, and stand out.
          </p>
        </div>

        {/* =========================================================
            2. EDITORIAL SERVICE ROWS
            - No numbers / markings
            - Each image appears inside its own row area
            - Unboxed 3D models with natural drop-shadow
        ========================================================= */}
        <div className="relative">
          {/* Top Divider Line */}
          <div className="w-full h-[1px] bg-[#343434]" />

          {/* Service Rows */}
          <div className="divide-y divide-[#343434]">
            {editorialServices.map((service, index) => {
              const isActive = activeIndex === index

              return (
                <div
                  key={service.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className="relative group transition-colors duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                    className="w-full text-left py-10 sm:py-14 lg:py-16 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400"
                  >
                    {/* Row Content Container: Title & Description on Left, Image inside its own right area */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
                      {/* Left Side: Oversized Title & Dynamic Description */}
                      <div className="flex-1 max-w-full lg:max-w-[62%] xl:max-w-[65%]">
                        {/* Oversized Service Title (No numbers, responsive sizing) */}
                        <h3
                          className={`text-xl sm:text-3xl md:text-5xl lg:text-[3.35rem] xl:text-[3.85rem] font-sans tracking-tight leading-[1.1] uppercase transition-colors duration-300 break-words ${
                            isActive
                              ? "text-[#F2F2EF] font-medium"
                              : "text-[#515151] font-normal group-hover:text-[#858585]"
                          }`}
                        >
                          {service.title}
                        </h3>

                        {/* Active Service Description */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                                marginTop: 16,
                              }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <p className="text-sm sm:text-base text-[#858585] leading-relaxed max-w-xl font-normal">
                                {service.description}
                              </p>

                              {/* Interactive Explore Link */}
                              <div className="pt-4 flex items-center gap-2">
                                <Link
                                  href={service.href}
                                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 hover:text-teal-300 transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <span>Explore {service.shortName}</span>
                                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                                    →
                                  </span>
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Right Side: The Service's Own 3D Model Image (Inside its row area, unboxed) */}
                      <div
                        className={`w-full lg:w-[320px] xl:w-[360px] shrink-0 items-center justify-center ${
                          isActive
                            ? "flex h-[200px] sm:h-[240px] lg:h-[260px] mt-4 lg:mt-0"
                            : "hidden lg:flex lg:h-[260px] pointer-events-none"
                        }`}
                      >
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              key={service.title}
                              initial={{ opacity: 0, scale: 0.9, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.92, y: -8 }}
                              transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="relative w-full h-full flex items-center justify-center -rotate-1 select-none pointer-events-none"
                            >
                              <Image
                                src={service.image}
                                alt={service.alt}
                                width={360}
                                height={260}
                                priority={index < 2}
                                className="w-auto h-full max-h-[200px] sm:max-h-[240px] lg:max-h-[260px] object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                </div>
              )
            })}
          </div>

          {/* Bottom Divider Line */}
          <div className="w-full h-[1px] bg-[#343434]" />
        </div>
      </div>
    </section>
  )
}
