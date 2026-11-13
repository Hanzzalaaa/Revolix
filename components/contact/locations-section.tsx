"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const locations = [
  {
    role: "USA Headquarters",
    badge: "Head Office",
    city: "Sheridan, Wyoming, USA",
    address: "30 N Gould St, Ste 68264, Sheridan WY 82801, United States",
    mapUrl:
      "https://www.google.com/maps/place/30+N+Gould+St,+Sheridan,+WY+82801,+USA/@44.7977257,-106.9574119,17z/data=!3m1!4b1!4m6!3m5!1s0x5335fabc2a655551:0x7d0215852acbacda!8m2!3d44.7977257!4d-106.954837!16s%2Fg%2F11zgqwrcpn?entry=ttu",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.8778696803274!2d-106.9574119!3d44.7977257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a655551%3A0x7d0215852acbacda!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
  },
  {
    role: "Pakistan Office",
    badge: "Engineering Hub",
    city: "Karachi, Pakistan",
    address:
      "Block W, Allama Iqbal Town, Near Orange Line BRT Station & Abdullah College, Allama Iqbal Rd, Karachi 74600, Pakistan",
    mapUrl:
      "https://www.google.com/maps/place/Revolix+Technologies/data=!4m2!3m1!1s0x0:0x882232a068645bd1?sa=X&ved=1t:2428&ictx=111",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115778.04006656325!2d67.1023104!3d24.9298944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x882232a068645bd1!2sRevolix%20Technologies!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
  },
]

export function LocationsSection() {
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
        ".visiting-content",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "opacity,transform" }
      ).fromTo(
        ".location-map-item",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, clearProps: "opacity,transform" },
        "-=0.3"
      )
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
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[170px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* =====================================================
              LEFT COLUMN: VISITING US NARRATIVE & 1-2 POINTS
          ===================================================== */}
          <div className="visiting-content lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold block">
                Physical Presence
              </span>
              <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-foreground leading-[1.15]">
                Visiting Us
              </h2>
            </div>

            {/* Main 3-line paragraph */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Whether you are stopping by our registered headquarters in Sheridan, Wyoming, or connecting directly with our core engineering collective in Karachi, we always welcome dedicated in-person collaboration. We enjoy sitting down with founders and leadership teams to walk through architectural blueprints, unpack technical challenges, and build long-term technology partnerships.
            </p>

            {/* 1-2 Points */}
            <div className="space-y-5 pt-3 border-t border-white/5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold shrink-0">•</span>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    By Appointment Scheduling
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-4">
                  Because our solutions architects and senior engineers are frequently in deep build cycles, we host visits by prior appointment to ensure the right team leads are available for your consultation.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 font-bold shrink-0">•</span>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    Hybrid &amp; Virtual Access
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-4">
                  If visiting in person is not practical, we offer interactive video strategy walkthroughs across US Eastern (ET) and flexible international time zones.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button size="lg" asChild className="w-full sm:w-auto h-11 px-6 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-teal-500/10">
                <a href="#contact-form" className="justify-center">
                  <span>Plan a Visit or Call</span>
                </a>
              </Button>
            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMN: BOTH MAPS MOVED TO THE RIGHT SIDE
              (Stacked in a column, no thick borders)
          ===================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {locations.map((loc) => {
              return (
                <div
                  key={loc.role}
                  className="location-map-item flex flex-col gap-3.5"
                >
                  {/* Location Header Info */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-white/5">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-bold font-display text-foreground">
                          {loc.role}
                        </h3>
                        <span className="font-mono text-[11px] text-teal-400 font-medium">
                          [{loc.badge}]
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {loc.address}
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="h-8 px-3 text-xs rounded-lg border-white/10 hover:border-teal-400/40 hover:bg-white/[0.04] text-foreground bg-transparent"
                    >
                      <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer">
                        <span>Open Map</span>
                      </a>
                    </Button>
                  </div>

                  {/* Google Maps Preview Embed (No thick borders) */}
                  <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden shadow-xl bg-[#090e1a]">
                    <iframe
                      src={loc.embedSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${loc.role} Google Map Preview`}
                    />
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
