"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const reasons = [
  {
    number: "01",
    title: "Experienced Team",
    description:
      "A multidisciplinary team delivering AI, software, and automation solutions.",
  },
  {
    number: "02",
    title: "Modern Technology",
    description:
      "We use modern frameworks, cloud platforms, and AI technologies to build scalable products.",
  },
  {
    number: "03",
    title: "Client Satisfaction",
    description:
      "Focused on delivering reliable solutions and maintaining long-term client relationships.",
  },
  {
    number: "04",
    title: "Affordable Pricing",
    description:
      "Transparent pricing with solutions tailored to your business requirements.",
  },
]

export function WhyChooseSection() {
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
        ".why-left",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.45, clearProps: "opacity,transform" }
      ).fromTo(
        ".why-item",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, clearProps: "opacity,transform" },
        "-=0.35"
      )
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 lg:py-32 bg-[#060A12] border-y border-white/5"
    >
      {/* Background Soft Lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* =====================================================
              LEFT SIDE: CONFIDENT TYPOGRAPHIC STATEMENT (5 cols)
          ===================================================== */}
          <div className="why-left lg:col-span-5 space-y-6 lg:sticky lg:top-36">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-foreground leading-[1.14] text-balance">
              Good technology isn&apos;t the goal.{" "}
              <span className="text-teal-400">
                Better business outcomes are.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We focus on building practical, battle-tested software, websites, and automations that save hours of manual busywork and turn inquiries into booked jobs.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center gap-6 text-xs text-muted-foreground font-mono">
              <span className="text-teal-300">
                • Fixed quotes
              </span>
              <span className="text-teal-300">
                • Dedicated team
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE: 4 EDITORIAL REASONS WITH QUOTES (NO CARDS)
          ===================================================== */}
          <div className="why-stack lg:col-span-7 space-y-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`why-item group relative pb-8 ${
                  index < reasons.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Subtle Number Indicator */}
                  <span className="font-mono text-sm font-bold text-teal-400/80 pt-1 shrink-0">
                    {reason.number}
                  </span>

                  {/* Editorial Text with Quotes */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground tracking-tight transition-colors duration-300 group-hover:text-teal-300">
                      {reason.title}
                    </h3>

                    <blockquote className="relative text-base sm:text-lg text-muted-foreground leading-relaxed italic border-l-2 border-teal-500/30 pl-4 py-0.5">
                      &ldquo;{reason.description}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
