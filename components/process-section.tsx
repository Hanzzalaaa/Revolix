"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: "01",
    tag: "Phase 01",
    title: "Discover",
    description:
      "We start by understanding your business, goals, challenges, audience, and the results you want to achieve.",
    image: "/discover process.png",
    alt: "Sculptural 3D magnifying glass representing the Discover phase",
    textLeft: true,
  },
  {
    number: "02",
    tag: "Phase 02",
    title: "Plan",
    description:
      "We create a clear strategy and roadmap covering the right technology, features, design, timeline, and priorities.",
    image: "/planning process.png",
    alt: "3D architectural blueprint and clipboard representing the Plan phase",
    textLeft: false,
  },
  {
    number: "03",
    tag: "Phase 03",
    title: "Build",
    description:
      "Our team turns the plan into a real solution through design, development, integration, testing, and refinement.",
    image: "/building process.png",
    alt: "3D graphite laptop with code editor representing the Build phase",
    textLeft: true,
  },
  {
    number: "04",
    tag: "Phase 04",
    title: "Grow",
    description:
      "After launch, we help optimize, maintain, improve, and scale your digital solution as your business grows.",
    image: "/growth process.png",
    alt: "3D ascending metallic stages representing the Grow phase",
    textLeft: false,
  },
]

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRibbonRef = useRef<SVGPathElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      // Animate Section Header
      gsap.fromTo(
        ".process-header",
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
            once: true,
            fastScrollEnd: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      )

      // Animate curving turquoise SVG ribbon with low-latency scrub (0.2s instead of 0.8s)
      if (svgRibbonRef.current) {
        const pathLength = svgRibbonRef.current.getTotalLength()
        gsap.set(svgRibbonRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        })

        gsap.to(svgRibbonRef.current, {
          scrollTrigger: {
            trigger: ".process-steps-container",
            start: "top 72%",
            end: "bottom 78%",
            scrub: 0.2,
          },
          strokeDashoffset: 0,
          ease: "none",
        })
      }

      // Reveal rows & toggle active status via DOM classes (ZERO React re-renders during scroll)
      const rows = gsap.utils.toArray<HTMLElement>(".process-step-row")
      rows.forEach((row) => {
        // Entrance animation
        gsap.fromTo(
          row,
          { opacity: 0, y: 22 },
          {
            scrollTrigger: {
              trigger: row,
              start: "top 92%",
              toggleActions: "play none none none",
              once: true,
              fastScrollEnd: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "opacity,transform",
          }
        )

        // Native DOM class toggling on scroll (eliminates state updates & layout recalculations)
        ScrollTrigger.create({
          trigger: row,
          start: "top 62%",
          end: "bottom 38%",
          toggleClass: "is-active",
        })
      })
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 lg:py-32 bg-[#060a12]"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[750px] w-[750px] rounded-full bg-teal-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="process-header mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display text-foreground">
            From Idea to Impact
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A simple, transparent process designed to turn your ideas into practical digital solutions that deliver real results.
          </p>
        </div>

        {/* =====================================================
            PROCESS STEPS WITH ORGANIC CURVED TURQUOISE RIBBON
        ===================================================== */}
        <div className="process-steps-container relative" style={{ willChange: "transform" }}>
          {/* Desktop Center Gently Curving Organic SVG Ribbon */}
          <div className="pointer-events-none absolute left-1/2 top-4 bottom-4 hidden -translate-x-1/2 lg:block w-32 h-[96%]">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 120 1200"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Background Guide Trace */}
              <path
                d="M60 0 C 20 180, 20 220, 60 350 C 100 480, 100 520, 60 650 C 20 780, 20 820, 60 950 C 100 1080, 80 1150, 60 1200"
                stroke="rgba(255, 255, 255, 0.06)"
                strokeWidth="2"
                strokeDasharray="4 6"
              />
              {/* Animated Progress-Driven Turquoise Curved Ribbon */}
              <path
                ref={svgRibbonRef}
                d="M60 0 C 20 180, 20 220, 60 350 C 100 480, 100 520, 60 650 C 20 780, 20 820, 60 950 C 100 1080, 80 1150, 60 1200"
                stroke="url(#curvedRibbonGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-[0_0_12px_rgba(45,212,191,0.7)]"
              />
              <defs>
                <linearGradient id="curvedRibbonGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2dd4bf" />
                  <stop offset="35%" stopColor="#06b6d4" />
                  <stop offset="70%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps Sequence */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-28">
            {steps.map((step) => {
              return (
                <div
                  key={step.title}
                  className="process-step-row group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                >
                  {/* Step Milestone Indicator (Center in Desktop) */}
                  <div
                    className="
                      hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                      h-11 w-11 items-center justify-center rounded-full border
                      border-white/10 bg-[#070b14] text-muted-foreground
                      transition-transform duration-300 ease-out
                      group-[.is-active]:border-teal-400 group-[.is-active]:bg-teal-500/20
                      group-[.is-active]:shadow-lg group-[.is-active]:shadow-teal-500/30
                      group-[.is-active]:scale-110
                    "
                  >
                    <span
                      className="
                        font-mono text-xs font-bold text-muted-foreground
                        transition-colors duration-200
                        group-[.is-active]:text-teal-300
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`
                      lg:col-span-6 space-y-4 opacity-85
                      transition-opacity duration-300 ease-out
                      group-[.is-active]:opacity-100
                      ${step.textLeft ? "lg:text-right lg:pr-14" : "lg:order-2 lg:pl-14"}
                    `}
                  >
                    <div
                      className={`
                        inline-flex items-center gap-2 rounded-full border px-3.5 py-1 font-mono text-xs uppercase tracking-wider
                        border-white/10 bg-white/[0.03] text-muted-foreground
                        transition-colors duration-300
                        group-[.is-active]:border-teal-400/50 group-[.is-active]:bg-teal-500/15 group-[.is-active]:text-teal-300
                        ${step.textLeft ? "lg:flex-row-reverse" : ""}
                      `}
                    >
                      <span className="font-bold">{step.tag}</span>
                      <span>—</span>
                      <span>{step.number}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-foreground tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg inline-block">
                      {step.description}
                    </p>
                  </div>

                  {/* 3D Model Image Column */}
                  <div
                    className={`lg:col-span-6 relative flex items-center justify-center ${
                      step.textLeft ? "lg:pl-14" : "lg:order-1 lg:pr-14"
                    }`}
                  >
                    <div
                      className="
                        relative h-[240px] sm:h-[300px] lg:h-[360px] w-full max-w-[420px]
                        opacity-90 transition-transform duration-500 ease-out
                        group-[.is-active]:scale-102 group-[.is-active]:opacity-100
                      "
                      style={{ willChange: "transform" }}
                    >
                      {/* Ambient soft glow beneath the 3D model */}
                      <div
                        className="
                          pointer-events-none absolute inset-4 rounded-full
                          bg-teal-500/10 blur-3xl opacity-60
                          transition-opacity duration-300
                          group-[.is-active]:bg-teal-500/20 group-[.is-active]:opacity-100
                        "
                      />
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-contain drop-shadow-2xl"
                        priority={step.number === "01"}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
