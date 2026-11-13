"use client"

import { useRef } from "react"
import NextLink from "next/link"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const capabilityGroups = [
  {
    number: "01",
    title: "Developers",
    description:
      "Full-stack developers focused on building fast, secure, and scalable digital solutions.",
    skills: [
      "Frontend & backend development",
      "Next.js & React",
      "APIs & integrations",
    ],
  },
  {
    number: "02",
    title: "Designers",
    description:
      "Creative designers focused on intuitive interfaces, strong visual systems, and memorable digital experiences.",
    skills: [
      "UI/UX design",
      "Design systems",
      "Brand consistency",
    ],
  },
  {
    number: "03",
    title: "SEO Experts",
    description:
      "SEO specialists helping businesses improve visibility, rankings, and organic growth.",
    skills: [
      "Technical SEO",
      "On-page optimization",
      "Content strategy",
    ],
  },
]

export function AboutTeam() {
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
        ".team-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.45, clearProps: "opacity,transform" }
      )
        .fromTo(
          ".team-visual",
          { opacity: 0, scale: 0.96, y: 16 },
          { opacity: 1, scale: 1, y: 0, duration: 0.45, clearProps: "opacity,transform" },
          "-=0.25"
        )
        .fromTo(
          ".capability-item",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, clearProps: "opacity,transform" },
          "-=0.25"
        )
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 lg:py-32 bg-[#060A12] border-t border-white/5"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="team-header mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display text-foreground">
            The People Behind Revolix
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A focused, cross-functional team combining development, design, SEO, and digital expertise to turn ideas into reliable digital solutions.
          </p>
        </div>

        {/* =====================================================
            COLLECTIVE EXPERTISE: SCULPTURE + 3 CAPABILITY GROUPS
        ===================================================== */}
        <div className="team-body grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Team Sculpture Visual (5 cols) */}
          <div className="team-visual lg:col-span-5 flex flex-col items-center">
            <div className="relative h-[240px] sm:h-[340px] lg:h-[420px] w-full max-w-[400px]">
              {/* Diffused ambient back-glow */}
              <div className="pointer-events-none absolute inset-6 rounded-full bg-teal-500/10 blur-3xl" />
              <Image
                src="/team section homepg.png"
                alt="Collective expertise sculpture representing Revolix engineering, design, and search disciplines"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Engineers • Designers • Growth Specialists
              </span>
            </div>
          </div>

          {/* 3 Capability Groups (7 cols) */}
          <div className="team-capabilities-list lg:col-span-7 space-y-6">
            {capabilityGroups.map((group) => {
              return (
                <div
                  key={group.title}
                  className="capability-item group relative rounded-2xl border border-white/10 bg-[#0d1424] p-5 sm:p-7 transition-all duration-300 hover:border-teal-500/30 hover:bg-[#101a2e]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2 max-w-md">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-teal-400">
                          {group.number}
                        </span>
                        <h3 className="text-xl font-bold font-display text-foreground transition-colors group-hover:text-teal-300">
                          {group.title}
                        </h3>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {group.description}
                      </p>
                    </div>

                    {/* Skill points */}
                    <div className="space-y-1.5 pt-2 sm:pt-0 sm:border-l sm:border-white/10 sm:pl-6 text-xs text-muted-foreground shrink-0">
                      {group.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2">
                          <span className="text-teal-400 font-bold shrink-0">•</span>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* View Team Page CTA */}
            <div className="pt-4 flex items-center justify-between">
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto group border-white/10 hover:border-teal-400/40 hover:bg-white/5">
                <NextLink href="/team" className="justify-center">
                  <span>Meet Our Dedicated Team</span>
                </NextLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
