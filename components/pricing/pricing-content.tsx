"use client"

import { useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const ghlFixedPackages = [
  {
    title: "Launch Setup",
    price: "$750",
    slug: "launch-setup",
    description: "Ideal for businesses getting started with GoHighLevel who need a turn-key foundation.",
    features: [
      "GoHighLevel account & sub-account configuration",
      "Custom sales pipeline architecture",
      "Lead capture funnels & embedded forms",
      "Calendar & appointment booking setup",
      "Domain DNS & email delivery authentication",
    ],
  },
  {
    title: "Speed-to-Lead",
    price: "$1,000",
    slug: "speed-to-lead",
    popular: true,
    description: "Designed for service businesses that need instant follow-up to convert more inbound calls.",
    features: [
      "Missed-call automatic text-back (< 15 seconds)",
      "Instant SMS & email lead notifications",
      "Multi-step automated follow-up sequences",
      "Pipeline stage auto-updates & task triggers",
      "Two-way SMS communication workflows",
      "Google review request automation",
    ],
  },
  {
    title: "AI Chat Agent",
    price: "$1,500",
    slug: "ai-chat-agent",
    description: "Full conversational AI integration to qualify leads and book appointments 24/7.",
    features: [
      "Custom trained GPT chatbot on your business knowledge",
      "Website chat widget & SMS AI auto-responder",
      "Automated lead qualification & triage",
      "Live calendar booking via conversational AI",
      "Full CRM contact sync & lead logging",
      "Hand-off alerts to human team members",
    ],
  },
]

const seoPackages = [
  {
    title: "SEO Audit",
    price: "$200",
    slug: "seo-audit",
    description: "Comprehensive technical and on-page diagnosis to uncover what is holding your search ranking back.",
    features: [
      "Full technical SEO crawl & health check",
      "On-page content & keyword gap review",
      "Competitor search visibility analysis",
      "Prioritized issue fix blueprint",
    ],
  },
  {
    title: "SEO Optimization",
    price: "$500",
    slug: "seo-optimization",
    popular: true,
    description: "Hands-on structural optimization across your website to accelerate organic search rankings.",
    features: [
      "Complete technical fixes & Core Web Vitals cleanup",
      "High-intent keyword research & mapping",
      "On-page metadata & header tag optimization",
      "Internal linking architecture & Schema structured data",
      "Google Search Console & sitemap optimization",
    ],
  },
]

export function PricingContent() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      // DISTINCT PRICING REVEAL ANIMATION:
      // 3D Isometric Tilt & Magnetic Rise
      const sections = gsap.utils.toArray<HTMLElement>(".pricing-cards-grid")
      sections.forEach((grid) => {
        const cards = grid.querySelectorAll(".pricing-card")
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 45,
            rotateX: 12,
            transformPerspective: 1000,
            scale: 0.94,
          },
          {
            scrollTrigger: {
              trigger: grid,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
              fastScrollEnd: true,
            },
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform,opacity",
          }
        )
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="bg-[#060A12]">
      {/* Hero Section */}
      
<section className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-24">
  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0 -z-10 opacity-10">
    <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
  </div>

  <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
    {/* Heading */}
    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
      Clear starting points. No surprise invoices.
    </h1>

    {/* Description */}
    <p className="mx-auto mt-6 max-w-2xl text-[10px] leading-relaxed text-muted-foreground sm:text-xl">
      Whether you need a new website, smarter automation, or custom software,
      we&apos;ll help you find the right solution for your business.
    </p>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.25,
        ease: "easeOut",
      }}
      className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      {/* Primary CTA */}
      <Button
        size="lg"
        asChild
        className="group h-12 w-full rounded-lg bg-primary px-7 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] sm:w-auto"
      >
        <Link href="/contact">
          <span className="flex items-center gap-2">
            Book a free call
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
      </Button>

      {/* Secondary CTA */}
      <Button
        size="lg"
        variant="outline"
        asChild
        className="h-12 w-full rounded-lg border-border/80 bg-background/50 px-7 font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-muted/80 active:scale-[0.98] sm:w-auto"
      >
        <Link href="/services">
          Explore our services
        </Link>
      </Button>
    </motion.div>
  </div>
</section>


      {/* SECTION 1: GOHIGHLEVEL FIXED-PRICE PACKAGES */}
      <section className="py-16 sm:py-20 border-t border-white/5 bg-[#060A12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Fixed Deliverables</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mt-2">
              GoHighLevel CRM &amp; Automation Packages
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Approved packages with fixed scopes. No ongoing guesswork or unexpected add-ons.
            </p>
          </div>

          <div className="pricing-cards-grid grid gap-8 lg:grid-cols-3">
            {ghlFixedPackages.map((pkg) => (
              <div
                key={pkg.title}
                className={`pricing-card relative flex flex-col justify-between rounded-3xl border-0 bg-[#070c18] p-8 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.2),inset_0_0_30px_rgba(45,212,191,0.06)] shadow-2xl shadow-black/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_0_0_1px_rgba(45,212,191,0.4),inset_0_0_40px_rgba(45,212,191,0.12)] ${
                  pkg.popular ? "shadow-[inset_0_0_0_1.5px_rgba(45,212,191,0.4),inset_0_0_35px_rgba(45,212,191,0.09)]" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-8 top-8 rounded-full bg-primary/20 border border-primary/40 px-3 py-1 text-xs font-semibold text-teal-300">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-foreground">{pkg.title}</h3>
                  <div className="mt-4 mb-4">
                    <span className="text-4xl font-extrabold text-teal-400">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground ml-2">one-time investment</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>

                  <div className="space-y-3 pt-2">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5">
                        <span className="text-teal-400 font-bold shrink-0">•</span>
                        <span className="text-sm text-foreground/90 leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-2">
                  <Button size="lg" asChild className="w-full bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90">
                    <Link href={`/contact?service=gohighlevel&package=${pkg.slug}#contact-form`}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: WEBSITE DEVELOPMENT — CUSTOM PRICING */}
      <section className="py-16 sm:py-20 border-t border-white/5 bg-[#060A12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pricing-card rounded-3xl border-0 bg-[#070c18] p-8 sm:p-12 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.2),inset_0_0_30px_rgba(45,212,191,0.06)] shadow-2xl shadow-black/90 relative overflow-hidden">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Tailored Pricing</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mt-2">
                Website Development
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Every business has different requirements. Tell us what you need, and we&apos;ll prepare a tailored proposal.
              </p>
            </div>

            <div className="pricing-cards-grid grid gap-6 sm:grid-cols-3 mb-10">
              <div className="pricing-card p-6 rounded-2xl border-0 bg-[#0a1122]/90 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.15),inset_0_0_20px_rgba(45,212,191,0.04)] shadow-xl shadow-black/60">
                <h3 className="font-bold text-lg text-foreground">Service Business Websites</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  High-trust web design engineered for HVAC, contractors, dental/medical practices, and law firms.
                </p>
              </div>

              <div className="pricing-card p-6 rounded-2xl border-0 bg-[#0a1122]/90 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.15),inset_0_0_20px_rgba(45,212,191,0.04)] shadow-xl shadow-black/60">
                <h3 className="font-bold text-lg text-foreground">E-Commerce &amp; Catalogs</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Shopify and headless Next.js storefronts with automated checkout recovery and inventory sync.
                </p>
              </div>

              <div className="pricing-card p-6 rounded-2xl border-0 bg-[#0a1122]/90 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.15),inset_0_0_20px_rgba(45,212,191,0.04)] shadow-xl shadow-black/60">
                <h3 className="font-bold text-lg text-foreground">Custom Web Applications</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Bespoke web applications, customer portals, and internal workflows tailored to your team.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button size="lg" asChild className="h-12 px-8 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact?service=web-development#contact-form">
                  Get a custom quote
                </Link>
              </Button>
              <span className="text-sm text-muted-foreground">
                Free 20-minute discovery call included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SEO PACKAGES */}
      <section className="py-16 sm:py-20 border-t border-white/5 bg-[#060A12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Organic Search</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mt-2">
              SEO &amp; Search Visibility Packages
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Technical optimization and keyword positioning to drive qualified, high-intent organic visitors.
            </p>
          </div>

          <div className="pricing-cards-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {seoPackages.map((pkg) => (
              <div
                key={pkg.title}
                className={`pricing-card relative flex flex-col justify-between rounded-3xl border-0 bg-[#070c18] p-8 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.2),inset_0_0_30px_rgba(45,212,191,0.06)] shadow-2xl shadow-black/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_0_0_1px_rgba(45,212,191,0.4),inset_0_0_40px_rgba(45,212,191,0.12)] ${
                  pkg.popular ? "shadow-[inset_0_0_0_1.5px_rgba(45,212,191,0.4),inset_0_0_35px_rgba(45,212,191,0.09)]" : ""
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{pkg.title}</h3>
                  <div className="mt-4 mb-4">
                    <span className="text-4xl font-extrabold text-teal-400">{pkg.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>

                  <div className="space-y-3 pt-2">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5">
                        <span className="text-teal-400 font-bold shrink-0">•</span>
                        <span className="text-sm text-foreground/90 leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-2">
                  <Button size="lg" variant="outline" asChild className="w-full border-teal-500/30 hover:bg-teal-500/10 text-foreground bg-transparent">
                    <Link href={`/contact?service=seo&package=${pkg.slug}#contact-form`}>
                      Select Package
                    </Link>
                  </Button>
                </div>
              </div>
            ))}

            {/* Ongoing SEO Card */}
            <div className="pricing-card flex flex-col justify-between rounded-3xl border-0 bg-[#070c18] p-8 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.2),inset_0_0_30px_rgba(45,212,191,0.06)] shadow-2xl shadow-black/90">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Ongoing Growth &amp; Content</h3>
                <div className="mt-4 mb-4">
                  <span className="text-3xl font-extrabold text-foreground">Custom Quote</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Continuous monthly technical monitoring, keyword expansion, content clusters, and competitor defense.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0">•</span>
                    <span className="text-sm text-foreground/90 leading-relaxed">Continuous monthly ranking surveillance</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0">•</span>
                    <span className="text-sm text-foreground/90 leading-relaxed">Ongoing content &amp; keyword expansion</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold shrink-0">•</span>
                    <span className="text-sm text-foreground/90 leading-relaxed">Local map pack &amp; citation management</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <Button size="lg" variant="outline" asChild className="w-full border-teal-500/30 hover:bg-teal-500/10 text-foreground bg-transparent">
                  <Link href="/contact?service=seo#contact-form">
                    Discuss Monthly SEO
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CUSTOM ENTERPRISE & SOFTWARE SOLUTIONS */}
      <section className="py-16 sm:py-20 border-t border-white/5 bg-[#060A12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pricing-card rounded-3xl border-0 bg-[#070c18] p-8 sm:p-12 shadow-[inset_0_0_0_1px_rgba(45,212,191,0.2),inset_0_0_30px_rgba(45,212,191,0.06)] shadow-2xl shadow-black/90">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Custom Enterprise Engineering</span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mt-2">
                  Custom Software, Backend Systems &amp; AI Agents
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  For enterprise workflows, complex backend migrations, bespoke mobile apps, and multi-agent AI ecosystems. We prepare detailed technical statements of work with milestones, guaranteed timelines, and fixed deliverables.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Custom API Integrations", "Database Architecture", "Cloud Infrastructure & DevOps", "Proprietary AI Agents"].map((tag) => (
                    <span key={tag} className="rounded-lg bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 text-xs font-medium text-teal-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border-0 bg-[#0a1122]/90 p-6 sm:p-8 text-center flex flex-col justify-center shadow-[inset_0_0_0_1px_rgba(45,212,191,0.15)] shadow-xl shadow-black/60">
                <p className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Engagement Model</p>
                <p className="text-3xl font-bold text-foreground mt-2 mb-4">Custom Quote</p>
                <p className="text-xs text-muted-foreground mb-6">
                  Fixed-bid milestones based on your technical scope. No hidden hourly fees.
                </p>
                <Button size="lg" asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact?service=custom-software#contact-form">
                    Request Scope Review
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM DISCOVERY CALL CTA */}
      <section className="py-20 sm:py-24 border-t border-white/5 bg-[#060A12] text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Not sure what your project needs?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Book a free 20-minute discovery call. We&apos;ll understand your requirements and recommend the right approach.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="h-13 px-8 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Book a free call
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-13 px-8 text-base font-semibold rounded-xl border-teal-500/30 hover:bg-teal-500/10 text-foreground bg-transparent">
              <Link href="/contact#contact-form">
                Send us a message
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
