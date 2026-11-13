"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ContactInfo() {
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
        ".info-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, clearProps: "opacity,transform" }
      )
        .fromTo(
          ".info-details-column",
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, duration: 0.6, clearProps: "opacity,transform" },
          "-=0.3"
        )
        .fromTo(
          ".info-phone-visual",
          { opacity: 0, scale: 0.92, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.65, clearProps: "opacity,transform" },
          "-=0.4"
        )
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 bg-[#060A12] relative overflow-hidden border-t border-white/5"
    >
      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-teal-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER (Left-Aligned, No Cards)
        ===================================================== */}
        <div className="info-header mb-16 text-left max-w-3xl space-y-3">
          <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-foreground">
            Get In Touch
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Connect directly with our team for consultations, technical questions, or new project scopes.
          </p>
        </div>

        {/* =====================================================
            INFO SECTION LAYOUT:
            Left: Info on one side (Email, Phone, Operating Hours)
            Middle / Center: Retro Phone PNG horizontally featured
            (No card containers — clean, editorial)
        ===================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Info on One Side (~50%) */}
          <div className="info-details-column lg:col-span-6 space-y-10">
            {/* Email / Official Communications */}
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold">
                Official Communications
              </span>
              <div>
                <a
                  href="mailto:info@revolixtech.com"
                  className="text-2xl sm:text-3xl font-bold text-foreground hover:text-teal-300 transition-colors break-all"
                >
                  info@revolixtech.com
                </a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                Send briefs, RFPs, or technical questions anytime. We review every enquiry directly with our engineering team and reply within one business day.
              </p>
            </div>

            {/* Direct Phone Lines */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <span className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold block">
                Direct Telephony
              </span>

              <div className="space-y-3">
                <div className="flex items-center justify-between max-w-md">
                  <span className="text-sm text-muted-foreground">USA Number:</span>
                  <a
                    href="tel:+13025872208"
                    className="text-lg font-semibold text-foreground hover:text-teal-300 transition-colors"
                  >
                    +1 302-587-2208
                  </a>
                </div>

                <div className="flex items-center justify-between max-w-md">
                  <span className="text-sm text-muted-foreground">Pakistan Line:</span>
                  <a
                    href="tel:+923138062538"
                    className="text-lg font-semibold text-foreground hover:text-teal-300 transition-colors"
                  >
                    +92 313 8062538
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Schedule */}
            <div className="space-y-3 pt-4 border-t border-white/5 max-w-md">
              <span className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold block">
                Operating Schedule
              </span>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Monday – Friday:</span>
                <span className="text-foreground font-medium">9 AM – 6 PM US Eastern (ET)</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Weekend:</span>
                <span className="text-foreground font-medium">By appointment</span>
              </div>
            </div>
          </div>

          {/* Retro Phone Featured Horizontally in the Center (~50%) */}
          <div className="info-phone-visual lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-md aspect-square flex items-center justify-center">
              {/* Soft Ambient Backlight */}
              <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

              <Image
                src="/retro phone.png"
                alt="Direct telephony communication with Revolix engineering team"
                width={500}
                height={500}
                className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
