"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const credibilityValues = [
  {
    index: "01",
    title: "Professional Work",
    subtitle: "Production-Grade Engineering & Architectural Integrity",
    description:
      "We deliver clean, scalable, and secure digital systems built on enterprise standards. Rather than relying on fragile templates or quick-fix scripts, every line of code is structured for long-term maintainability, rigorous type safety, and seamless cloud scale. We eliminate technical debt before it starts so your platform remains fast, stable, and ready to evolve as your business expands.",
    principles: [
      {
        title: "Rigorous Type Safety & Clean Architecture",
        detail: "End-to-end type validation across APIs, database schemas, and client interfaces prevents runtime crashes and guarantees data integrity.",
      },
      {
        title: "Production-Ready Security Standards",
        detail: "Hardened authentication protocols, encrypted data in transit and at rest, strict CORS configurations, and automated vulnerability scanning.",
      },
      {
        title: "Zero-Debt Engineering Mindset",
        detail: "Modular component hierarchies and optimized backend queries engineered to keep cloud infrastructure costs lean and load times snappy.",
      },
      {
        title: "Comprehensive QA & Automated Testing",
        detail: "Rigorous end-to-end integration test suites that proactively validate edge cases before code ever deploys to production.",
      },
    ],
  },
  {
    index: "02",
    title: "Fast Delivery",
    subtitle: "Agile Execution Sprints with Transparent Milestones",
    description:
      "Speed is useless without precision. Our delivery workflow is engineered around focused 2-week execution sprints, continuous integration, and real-time progress visibility. By maintaining clear scopes and eliminating unnecessary administrative friction, we turn concepts into working production software in weeks, not quarters, while keeping you fully informed at every checkpoint.",
    principles: [
      {
        title: "Agile 2-Week Execution Sprints",
        detail: "Focused development cycles that deliver tangible, testable software increments every fourteen days with no hidden delays or drift.",
      },
      {
        title: "Real-Time Milestone Transparency",
        detail: "Live staging environments and transparent progress boards grant you complete visibility into ongoing progress and deliverable status.",
      },
      {
        title: "Proactive Roadblock Resolution",
        detail: "Direct senior-engineer intervention to rapidly diagnose bottlenecks and address technical blockers within 24 hours.",
      },
      {
        title: "Continuous Integration & Deployment",
        detail: "Automated CI/CD build pipelines ensure feature releases and optimizations deploy smoothly without downtime or service disruption.",
      },
    ],
  },
  {
    index: "03",
    title: "Trusted Company",
    subtitle: "Long-Term Partnership Built on Total Transparency",
    description:
      "We believe the strongest digital systems come from direct, honest partnerships. When you work with Revolix, you collaborate directly with senior engineers and designers who understand your commercial goals—no middleman account managers or opaque sales rhetoric. We provide honest technical assessments, fixed milestone scopes, and steadfast post-launch support you can depend on.",
    principles: [
      {
        title: "Direct Engineer-to-Client Dialogue",
        detail: "Direct, unmediated communication with the engineers actually authoring your product for rapid, accurate answers to technical questions.",
      },
      {
        title: "Transparent Scopes & Fixed Milestones",
        detail: "Clear project roadmaps, realistic timelines, and transparent fixed quotes with zero unexpected billing surprises or hidden charges.",
      },
      {
        title: "Continuous Post-Launch Support",
        detail: "Proactive maintenance, performance monitoring, dependency updates, and scaling support as your active user base increases.",
      },
      {
        title: "Complete Ownership & IP Transfer",
        detail: "100% intellectual property transfer, exhaustive documentation, and complete ownership of your codebase and design assets from day one.",
      },
    ],
  },
]

export function AboutValues() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRibbonRef = useRef<SVGPathElement>(null)
  const mobileRibbonRef = useRef<SVGPathElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      // Animate Section Header
      gsap.fromTo(
        ".values-header",
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      )

      // Desktop Flowing S-Ribbon through empty negative spaces around cards
      if (svgRibbonRef.current) {
        const pathLength = svgRibbonRef.current.getTotalLength()
        gsap.set(svgRibbonRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        })

        gsap.to(svgRibbonRef.current, {
          scrollTrigger: {
            trigger: ".values-flow-container",
            start: "top 78%",
            end: "bottom 82%",
            scrub: 0.2,
          },
          strokeDashoffset: 0,
          ease: "none",
        })
      }

      // Mobile Vertical Timeline Ribbon
      if (mobileRibbonRef.current) {
        const mobilePathLength = mobileRibbonRef.current.getTotalLength()
        gsap.set(mobileRibbonRef.current, {
          strokeDasharray: mobilePathLength,
          strokeDashoffset: mobilePathLength,
        })

        gsap.to(mobileRibbonRef.current, {
          scrollTrigger: {
            trigger: ".values-flow-container",
            start: "top 80%",
            end: "bottom 85%",
            scrub: 0.2,
          },
          strokeDashoffset: 0,
          ease: "none",
        })
      }

      // Snappy card reveals (hardware-accelerated, zero state re-renders)
      const cards = gsap.utils.toArray<HTMLElement>(".values-big-card")
      cards.forEach((card, index) => {
        const isLeft = index % 2 === 0
        gsap.fromTo(
          card,
          { opacity: 0, x: isLeft ? -25 : 25, y: 15 },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "opacity,transform",
          }
        )
      })
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-28 bg-[#060A12] relative overflow-hidden border-t border-border/40"
    >
      {/* Background Lighting Detail */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[160px]" />
        <div className="absolute -bottom-20 left-10 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="values-header mx-auto mb-16 lg:mb-20 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-foreground">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            We partner with ambitious businesses who require predictable execution,
            high-performance code, and a reliable technical team that takes genuine ownership of results.
          </p>
        </div>

        {/* =====================================================
            EXPANDED CARDS WITH S-FLOW RIBBON THROUGH EMPTY SPACES
        ===================================================== */}
        <div className="values-flow-container relative">
          {/* ===================================================
              DESKTOP S-CURVE FLOWING RIBBON (Through Negative Space)
              - Beside Card 01 on the right
              - Curves through vertical gap to the left of Card 02
              - Curves through vertical gap to the right of Card 03
              - Never touches or overlaps any card content
          =================================================== */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block overflow-visible z-0">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 1200 1200"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Subtle background guide path trace */}
              <path
                d="M 920 20 C 970 120, 960 240, 910 360 C 840 440, 340 400, 280 490 C 230 580, 220 720, 280 820 C 340 900, 840 860, 910 950 C 960 1040, 950 1130, 900 1200"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="2"
                strokeDasharray="4 6"
              />

              {/* Animated Glowing Turquoise Flowing Ribbon */}
              <path
                ref={svgRibbonRef}
                d="M 920 20 C 970 120, 960 240, 910 360 C 840 440, 340 400, 280 490 C 230 580, 220 720, 280 820 C 340 900, 840 860, 910 950 C 960 1040, 950 1130, 900 1200"
                stroke="url(#valuesNegativeSpaceRibbon)"
                strokeWidth="3.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-[0_0_14px_rgba(45,212,191,0.7)]"
              />

              {/* Decorative Subtle Node Particles in Negative Space */}
              <g className="opacity-80">
                <circle cx="935" cy="190" r="3" fill="#2dd4bf" className="drop-shadow-[0_0_8px_#2dd4bf]" />
                <circle cx="250" cy="655" r="3" fill="#06b6d4" className="drop-shadow-[0_0_8px_#06b6d4]" />
                <circle cx="935" cy="1075" r="3" fill="#2dd4bf" className="drop-shadow-[0_0_8px_#2dd4bf]" />
              </g>

              <defs>
                <linearGradient id="valuesNegativeSpaceRibbon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2dd4bf" />
                  <stop offset="30%" stopColor="#06b6d4" />
                  <stop offset="65%" stopColor="#2dd4bf" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* ===================================================
              MOBILE ADAPTED TIMELINE (Along Left Edge, Never Overlapping Cards)
          =================================================== */}
          <div className="pointer-events-none absolute left-2 top-2 bottom-2 lg:hidden w-6 h-[98%] overflow-visible z-0">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 24 1000"
              fill="none"
              preserveAspectRatio="none"
            >
              <line
                x1="12"
                y1="0"
                x2="12"
                y2="1000"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="2"
                strokeDasharray="4 6"
              />
              <path
                ref={mobileRibbonRef}
                d="M 12 0 L 12 1000"
                stroke="url(#valuesNegativeSpaceRibbon)"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="drop-shadow-[0_0_10px_rgba(45,212,191,0.65)]"
              />
            </svg>
          </div>

          {/* Cards Sequence: Positioned away from center to outer sides with compressed spacing */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20 relative z-10">
            {credibilityValues.map((value, index) => {
              const cardOnLeft = index % 2 === 0

              return (
                <div
                  key={value.title}
                  className="relative flex items-center w-full"
                >
                  {/* Card Container pushed away from the center to the sides */}
                  <div
                    className={`w-full lg:w-[58%] xl:w-[54%] ${
                      cardOnLeft ? "lg:mr-auto" : "lg:ml-auto"
                    }`}
                  >
                    <div className="values-big-card group relative rounded-3xl border-0 bg-[#070c18] p-5 min-[400px]:p-6 sm:p-8 lg:p-12 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.2),inset_0_0_30px_rgba(45,212,191,0.06)] shadow-2xl shadow-black/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[inset_0_0_0_1px_rgba(45,212,191,0.4),inset_0_0_40px_rgba(45,212,191,0.12)] flex flex-col justify-between overflow-hidden">
                      {/* Large Subtle Monospace Watermark Index in Background */}
                      <span className="pointer-events-none absolute -right-4 -top-8 text-8xl lg:text-9xl font-mono font-bold text-foreground/[0.03] select-none group-hover:text-teal-400/[0.07] transition-colors duration-500">
                        {value.index}
                      </span>

                      <div className="relative z-10">
                        {/* Subtitle / Category Tagline */}
                        <div className="mb-2.5">
                          <span className="text-xs font-mono uppercase tracking-[0.16em] text-teal-400 font-semibold">
                            {value.subtitle}
                          </span>
                        </div>

                        {/* Card Title */}
                        <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-teal-300 transition-colors duration-200">
                          {value.title}
                        </h3>

                        {/* Deep-Dive Rich Description */}
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                          {value.description}
                        </p>

                        {/* Detailed Execution Principles */}
                        <div className="space-y-4 pt-4 border-t border-teal-500/10">
                          {value.principles.map((principle) => (
                            <div
                              key={principle.title}
                              className="flex items-start gap-3 text-xs sm:text-sm text-foreground/85 leading-relaxed"
                            >
                              <span className="text-teal-400 font-bold mt-0.5 shrink-0 text-base leading-none">
                                •
                              </span>
                              <div>
                                <span className="font-semibold text-foreground block mb-0.5">
                                  {principle.title}
                                </span>
                                <span className="text-muted-foreground leading-relaxed block text-xs sm:text-[13px]">
                                  {principle.detail}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
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
