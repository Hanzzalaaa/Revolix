"use client"

import { useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        ".about-hero-title",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, clearProps: "opacity,transform" }
      )
        .fromTo(
          ".about-hero-desc",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, clearProps: "opacity,transform" },
          "-=0.5"
        )
        .fromTo(
          ".about-hero-actions",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, clearProps: "opacity,transform" },
          "-=0.3"
        )
        .fromTo(
          ".about-hero-model",
          { opacity: 0, scale: 0.92, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, clearProps: "opacity,transform" },
          "-=0.4"
        )
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative pt-24 pb-16 lg:pt-40 lg:pb-28 overflow-hidden bg-[#060A12]"
    >
      {/* Background Architectural Subtle Grid & Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[550px] w-[800px] rounded-full bg-teal-500/8 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="about-hero-title text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.14] sm:leading-[1.12]">
              About Revolix Tech -<br/> {" "}
              <span className="text-teal-400">
                IT &amp; Digital Solutions
              </span>{" "}
              Company
            </h1>

            <p className="about-hero-desc text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We are a collective of curious and passionate technologists bound
              together by our deep tech knowledge, our human-centric mindset,
              and a passion for using technology to drive business transformation.
            </p>

            <div className="about-hero-actions pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-teal-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link href="/contact" className="inline-flex items-center justify-center gap-2">
                  Get Free Consultation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto border-teal-500/30 bg-background/50 hover:bg-teal-500/10 text-foreground transition-all hover:border-teal-400/50"
              >
                <Link href="/services" className="inline-flex items-center justify-center">View Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Visual: 3D Model Image (Unboxed) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient soft backlight */}
            <div className="absolute inset-0 -m-8 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
            
            <Image
              src="/abt-page.png"
              alt="Revolix Architecture and Digital Systems"
              width={580}
              height={580}
              priority
              className="about-hero-model relative z-10 w-full max-w-[280px] sm:max-w-md lg:max-w-lg h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
