"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ServiceItem {
  number: string
  title: string
  description: string
  href: string
  image: string
  alt: string
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "AI Systems & Agents",
    description:
      "Production AI agents, RAG pipelines, voice AI, and intelligent chat systems integrated into real business workflows.",
    href: "/ai-agents",
    image: "/images/services/service-ai-systems.png",
    alt: "Titanium AI processor core representing AI systems and intelligent multi-agent architectures",
  },
  {
    number: "02",
    title: "CRM & Marketing Automation",
    description:
      "GoHighLevel setup, workflow automation, CRM integrations, and lead management systems.",
    href: "/gohighlevel",
    image: "/images/services/service-crm-automation.png",
    alt: "Sculptural metallic pipeline representing automated CRM workflows and lead management systems",
  },
  {
    number: "03",
    title: "Custom Software Development",
    description:
      "Scalable web applications, mobile apps, APIs, and backend systems tailored to your business.",
    href: "/custom-software",
    image: "/images/services/service-custom-software.png",
    alt: "Precision-engineered titanium structural cube representing scalable custom software architectures",
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    description:
      "Modern cloud and DevOps practices used to deploy, maintain, and run reliable software applications.",
    href: "/devops",
    image: "/images/services/service-cloud-devops.png",
    alt: "Metallic interconnected cloud infrastructure nodes representing DevOps and system reliability",
  },
  {
    number: "05",
    title: "UI/UX Design",
    description:
      "Modern interfaces, product design, wireframes, and responsive digital experiences focused on usability.",
    href: "/uiux",
    image: "/images/services/service-ui-ux.png",
    alt: "Architectural titanium interface planes representing user experience and visual systems design",
  },
  {
    number: "06",
    title: "E-Commerce Solutions",
    description:
      "Shopify, WooCommerce, WordPress, custom storefronts, and business integrations built around your needs.",
    href: "/e-commerce",
    image: "/images/services/service-ecommerce.png",
    alt: "Sculptural metallic commerce capsule representing high-conversion online storefronts and checkout workflows",
  },
]

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const prevIndexRef = useRef<number>(0)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const infoTextRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotionRef = useRef<boolean>(false)

  // Track reduced motion preference
  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  }, [])

  // Section Entrance Animation
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
          fastScrollEnd: true,
        },
        defaults: { ease: "power3.out" },
      })

      tl.fromTo(
        ".services-heading",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, clearProps: "opacity,transform" }
      )
        .fromTo(
          ".services-supporting",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.45, clearProps: "opacity,transform" },
          "-=0.3"
        )
        .fromTo(
          ".services-supporting",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.45, clearProps: "opacity,transform" },
          "-=0.3"
        )
        .fromTo(
          ".services-showcase-stage",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45, clearProps: "opacity,transform" },
          "-=0.25"
        )
    },
    { scope: containerRef }
  )

  // Transition active service (Object & Information)
  const handleSelectService = useCallback((newIndex: number) => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === newIndex) return currentIndex
      prevIndexRef.current = currentIndex

      if (prefersReducedMotionRef.current) {
        return newIndex
      }

      const outgoing = imageRefs.current[currentIndex]
      const incoming = imageRefs.current[newIndex]

      // Kill previous in-flight transitions on both images
      if (outgoing) gsap.killTweensOf(outgoing)
      if (incoming) gsap.killTweensOf(incoming)

      // Fade out outgoing object cleanly
      if (outgoing) {
        gsap.to(outgoing, {
          opacity: 0,
          scale: 0.98,
          duration: 0.22,
          ease: "power2.in",
          overwrite: "auto",
        })
      }

      // Fade in incoming object with subtle upward glide and scale
      if (incoming) {
        gsap.fromTo(
          incoming,
          {
            opacity: 0,
            y: 12,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "power3.out",
            overwrite: "auto",
          }
        )
      }

      // Smooth subtle text transition for active information area
      if (infoTextRef.current) {
        gsap.killTweensOf(infoTextRef.current)
        gsap.fromTo(
          infoTextRef.current,
          { opacity: 0, y: 6 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
            clearProps: "transform",
          }
        )
      }

      return newIndex
    })
  }, [])

  const activeService = services[activeIndex]

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 lg:py-32 bg-[#060A12] border-t border-[#0B1B21]/60"
      aria-label="Capabilities and Services Showcase"
    >
      {/* Deep Teal Atmosphere Ambient Backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-[#0B1B21] blur-[180px] opacity-70" />
        <div className="absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#081319] blur-[160px] opacity-80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mx-auto mb-16 lg:mb-20 max-w-3xl text-center">
          {/* Main Heading - Eyebrow Removed */}
          <h2 className="services-heading text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#E7ECEE]">
            Technology built around your business.
          </h2>

          {/* Supporting Text */}
          <p className="services-supporting mt-4 text-base sm:text-lg text-[#89959A] leading-relaxed max-w-2xl mx-auto">
            Six core capabilities spanning our 13+ specialist services.
          </p>
        </div>

        {/* =====================================================
            INTERACTIVE TITANIUM SERVICE SHOWCASE
            Desktop: ~48% Left / ~52% Right
            Mobile: Stacked with Image above Service List
        ===================================================== */}
        <div className="services-showcase-stage grid grid-cols-1 lg:grid-cols-[48%_52%] gap-12 lg:gap-14 items-center">
          {/* ===================================================
              LEFT: SERVICE NAVIGATION & ACTIVE INFORMATION AREA
          =================================================== */}
          <div className="order-2 lg:order-1 flex flex-col justify-between">
            {/* Service Navigation List */}
            <nav
              aria-label="Core disciplines navigation"
              className="divide-y divide-[#E7ECEE]/5 border-t border-b border-[#E7ECEE]/5"
            >
              {services.map((service, index) => {
                const isActive = activeIndex === index

                return (
                  <button
                    key={service.number}
                    type="button"
                    onClick={() => handleSelectService(index)}
                    onMouseEnter={() => handleSelectService(index)}
                    onFocus={() => handleSelectService(index)}
                    aria-selected={isActive}
                    aria-controls="active-service-info-panel"
                    className={`group w-full py-4 sm:py-5 flex items-center justify-between text-left transition-all duration-200 outline-none focus-visible:ring-1 focus-visible:ring-[#26B8AC] ${
                      isActive ? "bg-transparent" : "hover:bg-white/[0.01]"
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0 pr-4">
                      {/* Active Left Indicator Bar */}
                      <span
                        className={`w-[2px] h-4 rounded-full transition-all duration-300 shrink-0 ${
                          isActive
                            ? "bg-[#26B8AC] h-5 opacity-100"
                            : "bg-transparent h-3 opacity-0 group-hover:opacity-40 group-hover:bg-[#89959A]"
                        }`}
                      />

                      {/* Numbered Identifier */}
                      <span
                        className={`font-mono text-xs sm:text-sm tracking-wider transition-colors duration-200 shrink-0 ${
                          isActive
                            ? "text-[#26B8AC] font-semibold"
                            : "text-[#89959A]/60 group-hover:text-[#89959A]"
                        }`}
                      >
                        {service.number}
                      </span>

                      {/* Service Title */}
                      <span
                        className={`text-base sm:text-lg lg:text-xl font-medium tracking-tight transition-colors duration-200 truncate ${
                          isActive
                            ? "text-[#E7ECEE] font-semibold"
                            : "text-[#89959A] group-hover:text-[#E7ECEE]"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>
                  </button>
                )
              })}
            </nav>

            {/* Active Service Information Display Area (Stable Height to prevent layout shift) */}
            <div
              id="active-service-info-panel"
              role="region"
              aria-live="polite"
              className="mt-8 pt-6 border-t border-[#E7ECEE]/10 min-h-[160px] flex flex-col justify-between"
            >
              <div ref={infoTextRef} className="space-y-3">
                {/* Active Sub-label */}
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xl sm:text-[25px] uppercase tracking-wider text-[#89959A]">
                    {activeService.title}
                  </span>
                </div>

                {/* Active Description */}
                <p className="text-sm sm:text-base text-[#89959A] leading-relaxed max-w-xl">
                  {activeService.description}
                </p>

                {/* Explore Service Action Link */}
                <div className="pt-2">
                  <Link
                    href={activeService.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#E7ECEE] hover:text-[#26B8AC] transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    <span>Explore {activeService.title}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT: LARGE PREMIUM METALLIC PNG ARTWORK STAGE
          =================================================== */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            {/* Atmospheric Stage Backing */}
            <div
              className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[540px] aspect-square flex items-center justify-center select-none"
              aria-hidden="true"
            >
              {/* Soft Teal Ambient Lighting behind 3D Object */}
              <div className="pointer-events-none absolute inset-8 rounded-full bg-[radial-gradient(circle_at_center,_rgba(38,184,172,0.14)_0%,_rgba(11,27,33,0.5)_45%,_transparent_72%)] blur-2xl opacity-90" />

              {/* Preloaded Layered Metallic PNG Objects (Smooth crossfade) */}
              {services.map((service, index) => {
                const isActive = activeIndex === index

                return (
                  <div
                    key={service.number}
                    ref={(el) => {
                      imageRefs.current[index] = el
                    }}
                    className={`absolute inset-4 sm:inset-6 flex items-center justify-center transition-none will-change-transform ${
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 540px"
                      className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
