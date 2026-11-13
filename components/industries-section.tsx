"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const industries = [
  {
    number: "01",
    tag: "Trade & Field Services",
    title: "HVAC & Trade Contractors",
    description:
      "Speed-to-lead automations, missed call text-back, and booking funnels that win jobs before competitors reply.",
    href: "/industries#hvac",
    image: "/manufacturing-factory-dark-industrial.jpg",
    alt: "HVAC and trade contractor automation and website infrastructure",
    imageLeft: true,
  },
  {
    number: "02",
    tag: "Healthcare & Dental",
    title: "Dental & Medical Clinics",
    description:
      "HIPAA-compliant infrastructure architectures, online patient scheduling, and digital intake automations.",
    href: "/industries#healthcare",
    image: "/healthcare-technology-abstract-dark.jpg",
    alt: "Medical and dental clinic digital scheduling systems",
    imageLeft: false,
  },
  {
    number: "03",
    tag: "Legal Practices",
    title: "Law Firms & Practices",
    description:
      "High-trust websites and automated client intake systems that screen and pre-qualify cases 24/7.",
    href: "/industries#legal",
    image: "/legal-tech-app-scales-justice-dark.jpg",
    alt: "Law firm high-trust intake funnels and websites",
    imageLeft: true,
  },
  {
    number: "04",
    tag: "Commercial & Residential",
    title: "Real Estate Agencies",
    description:
      "Property listings, automated lead routing, and CRM-ready websites for top-producing teams.",
    href: "/industries#realestate",
    image: "/real-estate-cityscape-dark-night.jpg",
    alt: "Real estate property lead generation and CRM websites",
    imageLeft: false,
  },
  {
    number: "05",
    tag: "Retail & Direct-to-Consumer",
    title: "Ecommerce Brands",
    description:
      "High-converting online storefronts, abandoned checkout recovery, and custom integrations built to scale.",
    href: "/industries#ecommerce",
    image: "/ecommerce-shopping-dark-neon.jpg",
    alt: "Ecommerce custom storefronts and abandoned checkout recovery",
    imageLeft: true,
  },
]

export function IndustriesSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      gsap.fromTo(
        ".industries-header",
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
            once: true,
            fastScrollEnd: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
          clearProps: "opacity,transform",
        }
      )

      gsap.utils.toArray<HTMLElement>(".industry-editorial-card").forEach((card) => {
        // Crisp entrance of card
        gsap.fromTo(
          card,
          { opacity: 0, y: 24 },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              toggleActions: "play none none none",
              once: true,
              fastScrollEnd: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
            clearProps: "opacity,transform",
          }
        )

        // Masked horizontal clip reveal for image container
        const imageMask = card.querySelector(".industry-image-mask")
        if (imageMask) {
          gsap.fromTo(
            imageMask,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 0.5,
              ease: "power2.out",
              clearProps: "clipPath",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                toggleActions: "play none none none",
                once: true,
                fastScrollEnd: true,
              },
            }
          )
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 lg:py-32 bg-[#060A12]"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-0 h-[600px] w-[600px] rounded-full bg-teal-500/5 blur-[160px]" />
        <div className="absolute bottom-1/4 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="industries-header mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-display text-foreground">
            Industries We Serve
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We build dedicated digital solutions, follow-up automations, and custom software for US small businesses and growing teams.
          </p>

          <div className="mt-6">
            <Button size="lg" variant="outline" asChild className="group border-white/10 hover:border-teal-400/40 hover:bg-white/5">
              <Link href="/industries">
                <span>Explore All Industries</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* =====================================================
            LARGE EDITORIAL CARDS
        ===================================================== */}
        <div className="space-y-8 sm:space-y-12">
          {industries.map((industry) => {
            return (
              <div
                key={industry.title}
                className="industry-editorial-card group relative overflow-hidden rounded-3xl border-0 bg-[#070c18] shadow-[inset_0_0_0_1px_rgba(45,212,191,0.2),inset_0_0_30px_rgba(45,212,191,0.06)] shadow-2xl shadow-black/90 transition-all duration-500 hover:shadow-[inset_0_0_0_1px_rgba(45,212,191,0.4),inset_0_0_40px_rgba(45,212,191,0.12)] hover:shadow-black"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch lg:h-[80vh] lg:max-h-[580px]">
                  {/* Image Column (~50%) - Starts on Left */}
                  <div className="industry-image-mask relative min-h-[220px] sm:min-h-[300px] lg:min-h-full lg:col-span-6 overflow-hidden [clip-path:inset(0_0%_0_0)]">
                    <Image
                      src={industry.image}
                      alt={industry.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Dark gradient overlay for contrast & seamless border blend */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-[#070c18]/20 to-transparent lg:hidden" />
                    <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#070c18]" />
                  </div>

                  {/* Content Column (~50%) - On the Right */}
                  <div className="relative flex flex-col justify-between p-6 sm:p-10 lg:p-12 lg:col-span-6">
                    <div className="space-y-4">
                      {/* Top Meta: ONLY Number. Nothing else at this horizontal level */}
                      <div>
                        <span className="font-mono text-sm font-bold tracking-widest text-teal-400">
                          {industry.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground tracking-tight transition-colors duration-300 group-hover:text-teal-300">
                        {industry.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {industry.description}
                      </p>
                    </div>

                    {/* Action Button Link (NO bottom line separator) */}
                    <div className="mt-8 pt-2">
                      <Link
                        href={industry.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-all duration-300 group-hover:text-teal-200"
                      >
                        <span>Learn how we serve this industry</span>
                      </Link>
                    </div>
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
