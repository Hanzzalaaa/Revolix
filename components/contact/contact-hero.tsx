"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"

export function ContactHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        ".contact-hero-title",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, clearProps: "opacity,transform" }
      )
        .fromTo(
          ".contact-hero-desc",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, clearProps: "opacity,transform" },
          "-=0.5"
        )
        .fromTo(
          ".contact-hero-actions",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, clearProps: "opacity,transform" },
          "-=0.4"
        )
        .fromTo(
          ".contact-meta-strip",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, clearProps: "opacity,transform" },
          "-=0.3"
        )
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden bg-[#060A12]"
    >
      {/* Background Soft Lighting & Architectural Coordinates */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-[550px] w-[800px] rounded-full bg-teal-500/8 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_40%_35%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Left-Aligned Hero Content */}
        <div className="max-w-3xl text-left space-y-6">
          {/* Heading */}
          <h1 className="contact-hero-title text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.14] sm:leading-[1.12]">
            Let&apos;s talk about{" "}
            <span className="text-teal-400">
              what you&apos;re building.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="contact-hero-desc text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Tell us about your goals, discuss your requirements, or schedule a conversation with our team. We&apos;ll explore the right approach for your business.
          </p>

          {/* Conversion Actions (Left-Aligned) */}
          <div className="contact-hero-actions flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 pt-2">
            {/* Primary CTA: Schedule a Call */}
            {calendlyUrl ? (
              <Button size="lg" asChild className="w-full sm:w-auto h-12 px-7 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-teal-500/10">
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="justify-center">
                  <span>Schedule a 20-min call</span>
                </a>
              </Button>
            ) : (
              <Button size="lg" asChild className="w-full sm:w-auto h-12 px-7 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-teal-500/10">
                <a href="#contact-form" className="justify-center">
                  <span>Schedule a 20-min call</span>
                </a>
              </Button>
            )}

            {/* Secondary CTA: Send a project enquiry */}
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto h-12 px-7 text-base font-medium rounded-xl border-white/10 hover:border-teal-400/40 hover:bg-white/[0.04] text-foreground bg-transparent"
            >
              <a href="#contact-form" className="justify-center">
                <span>Send a project enquiry</span>
              </a>
            </Button>
          </div>

          {/* Refined Horizontal Consultation Metadata Strip (Open, No Heavy Box Cards) */}
          <div className="contact-meta-strip pt-4 max-w-2xl text-left">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 border-t border-b border-white/5">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Duration</span>
                <span className="text-sm font-semibold text-foreground">20 Minutes</span>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Format</span>
                <span className="text-sm font-semibold text-foreground">Google Meet / Phone</span>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Time Zones</span>
                <span className="text-sm font-semibold text-foreground">US Eastern (ET) &amp; Flexible</span>
              </div>
            </div>

            <p className="mt-3 text-xs text-muted-foreground/80">
              Free discovery session • No sales pressure • Direct quote after call
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
