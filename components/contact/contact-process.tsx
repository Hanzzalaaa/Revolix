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
    title: "We read your message properly.",
    description:
      "Not a bot. Not a form auto-responder. A real person reads what you send and makes sure it gets to the right person on our team.",
  },
  {
    number: "02",
    title: "We respond within one business day.",
    description:
      "Usually faster. We will ask a few clarifying questions if we need to or set up a call directly if the scope is clear enough.",
  },
  {
    number: "03",
    title: "We have an honest conversation.",
    description:
      "We will tell you whether we think we are the right fit. If the timing is wrong, the budget does not match, or a different approach would serve you better, we say so. No wasted time on either side.",
  },
  {
    number: "04",
    title: "If it is a fit, we scope the work together.",
    description:
      "We put together a clear proposal with timeline, deliverables, and investment. Nothing starts without you having a full picture of what you are signing up for.",
  },
]

export function ContactProcess() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      gsap.from(".process-person-image", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: "power3.out",
      })

      gsap.from(".process-steps-list > div", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      })
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 relative overflow-hidden bg-[#060A12] border-t border-white/5"
    >
      {/* Background Soft Lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-teal-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* =====================================================
              LEFT: personthinking.png FROM PUBLIC (Unboxed, floating 3D model)
          ===================================================== */}
          <div className="process-person-image lg:col-span-5 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <Image
              src="/personthinking.png"
              alt="Person evaluating strategic business solutions"
              width={480}
              height={480}
              className="relative z-10 w-full max-w-[280px] sm:max-w-md h-auto object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.75)] transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* =====================================================
              RIGHT: HERE IS WHAT HAPPENS WHEN YOU GET IN TOUCH
              (No card boxes - clean open layout)
          ===================================================== */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-foreground leading-[1.15]">
                Here is what happens when you get in touch.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Clear expectations from the moment you reach out. No runaround or unnecessary delays.
              </p>
            </div>

            <div className="process-steps-list space-y-8 pt-2">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-5">
                  <span className="font-mono text-sm font-bold text-teal-400 shrink-0 pt-0.5">
                    {step.number}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
