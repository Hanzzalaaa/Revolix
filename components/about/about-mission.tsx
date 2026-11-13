"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function AboutMission() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
          fastScrollEnd: true,
        },
        defaults: { ease: "power3.out" },
      })

      tl.fromTo(
        ".who-we-are-visual",
        { opacity: 0, scale: 0.94, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, clearProps: "opacity,transform" }
      ).fromTo(
        ".who-we-are-header",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "opacity,transform" },
        "-=0.35"
      )
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-32 bg-[#060A12] relative overflow-hidden border-t border-white/5"
    >
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-teal-500/5 blur-[160px]" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* =====================================================
            WHO WE ARE WITH FUTURISTIC LIQUID CHROME SCULPTURE
        ===================================================== */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Futuristic Liquid Chrome Sculpture (Unboxed) */}
          <div className="lg:col-span-6 who-we-are-visual relative flex items-center justify-center">
            {/* Ambient Backlight for the 3D sculpture */}
            <div className="absolute inset-0 -m-8 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

            <Image
              src="/Futuristic Liquid Chrome Sculpture.png"
              alt="Futuristic Liquid Chrome Sculpture representing Revolix technical craftsmanship"
              width={640}
              height={480}
              priority
              className="relative z-10 w-full max-w-[280px] sm:max-w-md lg:max-w-lg h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Right: Narrative text */}
          <div className="lg:col-span-6 who-we-are-header space-y-6">
            <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-foreground leading-[1.15]">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Revolix Technologies is an engineering-driven digital solutions provider
              delivering modern software architectures, autonomous AI workflows, and strategic growth infrastructure.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
              We combine deep technical rigor with human-centric design to transform complex business challenges into intuitive, scalable digital reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
