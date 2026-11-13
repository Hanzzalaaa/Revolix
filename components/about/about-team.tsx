"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const teamDisciplines = [
  {
    discipline: "Engineering",
    title: "Developers",
    description:
      "Full-stack engineers focused on performance, security, and scalable architecture.",
    highlights: [
      "Frontend & backend",
      "Next.js & React",
      "API integration",
    ],
  },
  {
    discipline: "Product Design",
    title: "Designers",
    description:
      "Product and brand designers focused on UI/UX and visual clarity.",
    highlights: [
      "UI/UX design",
      "Design systems",
      "Brand consistency",
    ],
  },
  {
    discipline: "Search & Growth",
    title: "SEO Experts",
    description:
      "Search specialists improving visibility with technical and on-page optimization.",
    highlights: [
      "On-page SEO",
      "Technical audits",
      "Content planning",
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
          ".team-craftsmanship-block",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45, clearProps: "opacity,transform" },
          "-=0.25"
        )
        .fromTo(
          ".team-discipline-card",
          { opacity: 0, y: 35, rotate: (i: number) => (i % 2 === 0 ? -1.8 : 1.8), scale: 0.96 },
          { opacity: 1, y: 0, rotate: 0, scale: 1, duration: 0.55, stagger: 0.08, ease: "power3.out", clearProps: "opacity,transform" },
          "-=0.2"
        )
        .fromTo(
          ".team-cta-row",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.45, clearProps: "opacity,transform" },
          "-=0.15"
        )
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 lg:py-32 bg-[#060A12] border-t border-border/40"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[160px]" />
        <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* ==================================================
            SECTION HEADING
        ================================================== */}
        <div className="team-header mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-foreground">
            Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            A focused, cross-functional team built to deliver
            results across development, design, and SEO.
          </p>
        </div>

        {/* ==================================================
            COLLABORATIVE TEAM SHOWCASE (Cardless, Unboxed Image)
        ================================================== */}
        <div className="team-craftsmanship-block mb-16 relative">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-400">
                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_#2dd4bf]" />
                Collective Craftsmanship
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground leading-snug">
                High-Autonomy Specialists Working as One Cohesive Unit
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Rather than deploying bloated teams or handing off projects between detached departments,
                Revolix pairs you directly with dedicated developers, product designers, and technical SEO architects
                who build with precision from day one.
              </p>
            </div>

            {/* Right: Unboxed Image (No container box) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[400px]">
                <Image
                  src="/team section homepg.png"
                  alt="Revolix Collaborative Team"
                  width={480}
                  height={340}
                  className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            THREE TEAM FEATURE CARDS (No Ranking Numbers)
        ================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {teamDisciplines.map((group) => {
            return (
              <div
                key={group.title}
                className="team-discipline-card group relative rounded-3xl border-0 bg-[#070c18] p-6 sm:p-8 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.2),inset_0_0_30px_rgba(45,212,191,0.06)] shadow-2xl shadow-black/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[inset_0_0_0_1px_rgba(45,212,191,0.4),inset_0_0_40px_rgba(45,212,191,0.12)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.15em] text-teal-400 font-medium mb-2 block">
                    {group.discipline}
                  </span>

                  <h3 className="text-2xl font-bold font-display text-foreground mb-3 group-hover:text-teal-300 transition-colors">
                    {group.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    {group.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-2">
                    {group.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80"
                      >
                        <span className="text-teal-400 font-bold shrink-0">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ==================================================
            TEAM CTA
        ================================================== */}
        <div className="team-cta-row mt-14 flex flex-col items-center justify-center text-center">
          <Link
            href="/team"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-teal-500/20 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Full Team Roster</span>
          </Link>
          <p className="mt-3 text-xs text-muted-foreground">
            Explore individual member specializations, leadership, and technical profiles.
          </p>
        </div>
      </div>
    </section>
  )
}
