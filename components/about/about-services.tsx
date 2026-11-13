"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const architecturalPillars = [
  {
    role: "Intelligent Layer",
    title: "AI & Automation",
    description:
      "We deliver tailored machine learning models and intelligent AI agents to automate complex workflows and drive scalable business growth.",
    points: [
      "AI & Machine Learning",
      "AI Automation",
      "AI Agents",
    ],
    technicalAccent: "LLMs • RAG Pipelines • Autonomous Agents",
    href: "/ai-agents",
  },
  {
    role: "Core Systems Layer",
    title: "Software Development",
    description:
      "We engineer high-performance custom software, building robust, scalable digital solutions that streamline operations and accelerate your business growth.",
    points: [
      "Web Development",
      "Backend Development",
      "Custom Software",
    ],
    technicalAccent: "Next.js • React • High-Throughput APIs",
    href: "/web-development",
  },
  {
    role: "Operational Layer",
    title: "Business Automation",
    description:
      "We optimize corporate efficiency by deploying intelligent automated systems that eliminate repetitive tasks, reduce costs, and maximize operational productivity.",
    points: [
      "GoHighLevel",
      "CRM Automation",
      "Workflow Integration",
    ],
    technicalAccent: "GHL • Webhooks • CRM Orchestration",
    href: "/gohighlevel",
  },
]

const integratedCapabilities = [
  { label: "Cloud & Technical Solutions", desc: "Cloud & DevOps, Deployment, Technical Support", href: "/devops" },
  { label: "Design & Digital Experience", desc: "UI/UX Design, Graphic Design, Brand Identity", href: "/uiux" },
  { label: "SEO & Digital Marketing", desc: "SEO Services, Digital Marketing, Content & Campaigns", href: "/seo" },
]

export function AboutServices() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 92%",
          toggleActions: "play none none none",
          once: true,
          fastScrollEnd: true,
        },
        defaults: { ease: "power3.out" },
      })

      tl.fromTo(
        ".architecture-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, clearProps: "opacity,transform" }
      )
        .fromTo(
          ".ecosystem-foundation-unboxed",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.45, clearProps: "opacity,transform" },
          "-=0.2"
        )
        .fromTo(
          ".splitting-wire-svg",
          { opacity: 0, scaleY: 0 },
          { opacity: 1, scaleY: 1, transformOrigin: "top center", duration: 0.5, clearProps: "opacity,transform" },
          "-=0.2"
        )
        .fromTo(
          ".capability-pillar-card",
          { opacity: 0, y: 35, rotate: (i: number) => (i % 2 === 0 ? -1.8 : 1.8), scale: 0.96 },
          { opacity: 1, y: 0, rotate: 0, scale: 1, duration: 0.55, stagger: 0.08, ease: "power3.out", clearProps: "opacity,transform" },
          "-=0.2"
        )
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 lg:py-32 bg-[#060A12] border-t border-border/40"
    >
      {/* Background Subtle Circuit Illumination */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-teal-500/5 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.015)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_50%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* ===================================================
            1. SECTION HEADER
        =================================================== */}
        <div className="architecture-header mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-foreground">
            Built Around Your Digital Needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Revolix brings development, AI, automation, design, marketing,
            and technical capabilities together to help businesses build
            and improve their digital systems.
          </p>
        </div>

        {/* ===================================================
            2. INTEGRATED FOUNDATION PILLARS (Moved UP, Cardless)
        =================================================== */}
        <div className="ecosystem-foundation-unboxed mx-auto max-w-5xl mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-teal-500/20">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-400">
              <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_#2dd4bf]" />
              <span className="font-semibold">Integrated Foundation Pillars</span>
            </div>
            <span className="text-xs text-muted-foreground">
              Cross-disciplinary execution embedded across all client engagements
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            {integratedCapabilities.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group/item flex flex-col p-3.5 rounded-xl hover:bg-teal-500/5 transition-colors duration-200"
                >
                  <div className="text-sm font-semibold text-foreground group-hover/item:text-teal-300 transition-colors flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="text-xs text-teal-400 opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {item.desc}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* ===================================================
            3. WIRE SPLITTING INTO THREE CONNECTING TO CARDS
        =================================================== */}
        <div className="splitting-wire-svg hidden lg:block relative w-full h-16 my-2 pointer-events-none">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1200 64"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Top Central Feeder Node */}
            <circle cx="600" cy="4" r="4" fill="#2dd4bf" className="drop-shadow-[0_0_8px_#2dd4bf]" />
            <line x1="600" y1="4" x2="600" y2="28" stroke="#2dd4bf" strokeWidth="2" strokeOpacity="0.8" />

            {/* Central Split Distribution Junction */}
            <circle cx="600" cy="28" r="3" fill="#2dd4bf" />

            {/* Horizontal Bus Distribution Wire */}
            <line x1="200" y1="28" x2="1000" y2="28" stroke="#2dd4bf" strokeWidth="2" strokeOpacity="0.6" />

            {/* Left Branch Drop to Card 1 */}
            <path
              d="M 200 28 L 200 60"
              stroke="#2dd4bf"
              strokeWidth="2"
              strokeOpacity="0.8"
            />
            <circle cx="200" cy="60" r="3.5" fill="#2dd4bf" className="drop-shadow-[0_0_6px_#2dd4bf]" />

            {/* Center Branch Drop to Card 2 */}
            <path
              d="M 600 28 L 600 60"
              stroke="#2dd4bf"
              strokeWidth="2"
              strokeOpacity="0.8"
            />
            <circle cx="600" cy="60" r="3.5" fill="#2dd4bf" className="drop-shadow-[0_0_6px_#2dd4bf]" />

            {/* Right Branch Drop to Card 3 */}
            <path
              d="M 1000 28 L 1000 60"
              stroke="#2dd4bf"
              strokeWidth="2"
              strokeOpacity="0.8"
            />
            <circle cx="1000" cy="60" r="3.5" fill="#2dd4bf" className="drop-shadow-[0_0_6px_#2dd4bf]" />
          </svg>
        </div>

        {/* ===================================================
            4. THREE MAIN FEATURE CARDS (Moved Below, No Numbers)
        =================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {architecturalPillars.map((pillar) => {
            return (
              <div
                key={pillar.title}
                className="capability-pillar-card group relative rounded-3xl border-0 bg-[#070c18] p-6 sm:p-8 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.2),inset_0_0_30px_rgba(45,212,191,0.06)] shadow-2xl shadow-black/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[inset_0_0_0_1px_rgba(45,212,191,0.4),inset_0_0_40px_rgba(45,212,191,0.12)] flex flex-col justify-between"
              >
                <div>
                  {/* Title (No ranking numbers on cards) */}
                  <h3 className="text-2xl font-bold font-display text-foreground mb-3 group-hover:text-teal-300 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2.5">
                    {pillar.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2.5 text-sm text-foreground/85"
                      >
                        <span className="text-teal-400 font-bold shrink-0">•</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
