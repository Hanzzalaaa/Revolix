"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import {
  Heart,
  ShoppingCart,
  Zap,
  Building2,
  Hotel,
  Factory,
  Home,
  Truck,
  Droplet,
  Gamepad2,
  GraduationCap,
  Leaf,
  ArrowRight,
  Wrench,
  Scale,
} from "lucide-react"
import Link from "next/link"

const industries = [
  {
    id: "hvac",
    icon: Wrench,
    title: "HVAC, Plumbing & Electrical",
    shortDesc: "Automated booking & speed-to-lead for trade contractors",
    description:
      "Revolix equips home service contractors with high-converting websites, missed call text-back, instant lead dispatch, and GoHighLevel job booking workflows so you never lose a job to a competitor.",
    solutions: [
      "Instant missed-call text back",
      "Online estimate request funnels",
      "Emergency service dispatch automation",
      "Automated review requests & Google maps rank",
      "GoHighLevel CRM & calendar sync",
      "Jobber & ServiceTitan integrations",
    ],
    image: "/manufacturing-factory-dark-industrial.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Dental & Medical Clinics",
    shortDesc: "Secure patient acquisition & clinic automation",
    description:
      "Revolix builds patient-friendly clinic websites and automated intake workflows on HIPAA-compliant infrastructure architectures with BAA-eligible cloud configurations to streamline appointments and patient follow-up.",
    solutions: [
      "Online patient appointment scheduling",
      "Digital intake form automations",
      "HIPAA-compliant infrastructure architectures",
      "Automated appointment SMS reminders",
      "Reputation & Google review automation",
      "Doctor bio & service directories",
    ],
    image: "/healthcare-technology-abstract-dark.jpg",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: "legal",
    icon: Scale,
    title: "Law Firms & Legal Practices",
    shortDesc: "High-trust websites & automated intake",
    description:
      "Revolix develops high-authority law firm websites and client qualification systems that capture high-intent inquiries and screen cases 24/7 before they reach your calendar.",
    solutions: [
      "Automated case intake & pre-qualification",
      "High-trust attorney profile websites",
      "Secure client inquiry routing",
      "Consultation booking & calendar sync",
      "Practice area landing page funnels",
      "Confidential CRM record management",
    ],
    image: "/legal-tech-app-scales-justice-dark.jpg",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: "realestate",
    icon: Home,
    title: "Real Estate",
    shortDesc: "Intelligent property solutions",
    description:
      "Revolix helps real estate professionals price smart, predict demand, personalize buyer journeys, and market properties faster and smoother regardless of market mood.",
    solutions: [
      "Property valuation AI",
      "Market prediction",
      "Virtual property tours",
      "Lead scoring",
      "Portfolio management",
      "Smart building systems",
    ],
    image: "/real-estate-cityscape-dark-night.jpg",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "eCommerce",
    shortDesc: "Intelligent retail experiences",
    description:
      "We fuel your eCommerce growth with conversion-optimized store design, abandoned cart follow-ups, inventory automation, and seamless checkout experiences that turn visitors into repeat buyers.",
    solutions: [
      "High-converting Shopify & Next.js stores",
      "Automated abandoned checkout recovery",
      "Inventory & order management integrations",
      "Dynamic pricing & bundle funnels",
      "Customer lifetime value analytics",
      "AI chat customer support",
    ],
    image: "/ecommerce-shopping-dark-neon.jpg",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "fintech",
    icon: Building2,
    title: "Fintech",
    shortDesc: "Secure financial innovation",
    description:
      "Revolix powers fintech with reliable software architectures, robust security, streamlined compliance workflows, and digital user journeys that earn trust and drive growth.",
    solutions: [
      "Risk assessment models",
      "Fraud prevention",
      "Algorithmic workflows",
      "Regulatory compliance",
      "Digital banking platforms",
      "Payment processing",
    ],
    image: "/fintech-finance-dark-green.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energy & Utilities",
    shortDesc: "Smart grid & sustainability",
    description:
      "Revolix powers the energy shift with modern software. We optimize systems, predict demand, and build smarter, cleaner, and more secure energy platforms for a sustainable future.",
    solutions: [
      "Smart grid management",
      "Energy demand forecasting",
      "Renewable optimization",
      "Asset monitoring",
      "Carbon tracking",
      "System security",
    ],
    image: "/energy-power-grid-dark-blue.jpg",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: "hospitality",
    icon: Hotel,
    title: "Hospitality",
    shortDesc: "Elevated guest experiences",
    description:
      "Revolix transforms hospitality operations, personalizes guest stays, cuts overhead, and delivers eco-smart and guest-first experiences that keep customers coming back.",
    solutions: [
      "Revenue management",
      "Guest personalization",
      "Booking optimization",
      "Operations automation",
      "Sentiment analysis",
      "Smart room technology",
    ],
    image: "/hospitality-hotel-dark-luxury.jpg",
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    shortDesc: "Industry 4.0 solutions",
    description:
      "Revolix powers smart manufacturing with modern software and automation. We optimize supply chains, boost uptime, and secure industrial workflows without slowing production.",
    solutions: [
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization",
      "Production scheduling",
      "IoT integration",
      "Digital twins",
    ],
    image: "/manufacturing-factory-dark-industrial.jpg",
    color: "from-slate-500/20 to-gray-500/20",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Supply Chain",
    shortDesc: "Optimized supply chains",
    description:
      "Revolix brings modern digital solutions to the logistics industry. We optimize routes, forecast dispatch needs, and build resilient supply chains that move faster and deliver on time.",
    solutions: [
      "Route optimization",
      "Warehouse automation",
      "Demand forecasting",
      "Fleet management",
      "Last-mile delivery",
      "Inventory tracking",
    ],
    image: "/logistics-warehouse-dark-tech.jpg",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "oil-gas",
    icon: Droplet,
    title: "Oil & Gas",
    shortDesc: "Upstream to downstream software",
    description:
      "Revolix applies modern engineering to oil and gas operations. We predict maintenance needs, streamline logistics, and improve safety across industrial workflows.",
    solutions: [
      "Predictive maintenance",
      "Logistics optimization",
      "Pipeline monitoring",
      "Safety systems",
      "Production forecasting",
      "Environmental monitoring",
    ],
    image: "/oil-gas-refinery-dark-industrial.jpg",
    color: "from-stone-500/20 to-zinc-500/20",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    shortDesc: "Adaptive learning solutions",
    description:
      "Transform education with modern learning platforms, adaptive assessments, and intelligent student portals that personalize the learning journey for every student.",
    solutions: [
      "Adaptive learning platforms",
      "Automated grading",
      "Student analytics",
      "Virtual classrooms",
      "Curriculum optimization",
      "Skill assessment",
    ],
    image: "/education-learning-dark-digital.jpg",
    color: "from-indigo-500/20 to-violet-500/20",
  },
]

export function IndustriesGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <ParallaxSection
        speed={0.1}
        className="absolute inset-0 opacity-5"
      >
        <div className="h-full w-full bg-[linear-gradient(135deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:100px_100px]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <ScrollReveal
                key={industry.id}
                delay={index * 50}
              >
                <div
                  id={industry.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                  onMouseEnter={() =>
                    setHoveredId(industry.id)
                  }
                  onMouseLeave={() =>
                    setHoveredId(null)
                  }
                >
                  {/* ==================================================
                      MOBILE-ONLY COLOR SHADE
                      Since the image (which normally carries the
                      industry color) is hidden on mobile, add a soft
                      glow in the top-right corner that matches the
                      industry's theme color. Hidden from md breakpoint
                      up, where the real image + gradient takes over.
                  ================================================== */}

                  <div
                    className={`pointer-events-none absolute -right-8 -top-8 h-32 w-70 rounded-full bg-gradient-to-br ${industry.color} blur-2xl md:hidden`}
                  />

                  {/* ==================================================
                      DESKTOP IMAGE
                      Hidden completely on mobile
                  ================================================== */}

                  <div className="relative hidden h-48 overflow-hidden md:block">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} industry`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Industry gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${industry.color} to-background/90`}
                    />

                    {/* Card fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/20 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* ==================================================
                      MOBILE ICON
                      Since image is hidden on mobile
                  ================================================== */}

                  <div className="relative flex items-center px-6 pt-6 md:hidden">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* ==================================================
                      CONTENT
                  ================================================== */}

                  <div className="relative p-6">
                    <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                      {industry.title}
                    </h3>

                    <p className="mb-4 text-sm text-muted-foreground">
                      {industry.shortDesc}
                    </p>

                    {/* ==================================================
                        DESCRIPTION

                        Mobile:
                        Always visible because hover does not work
                        reliably on touch devices.

                        Desktop:
                        Appears on hover as before.
                    ================================================== */}

                    <div
                      className={`
                        overflow-hidden
                        transition-all
                        duration-500

                        max-h-96 opacity-100

                        md:max-h-0 md:opacity-0
                        ${
                          hoveredId === industry.id
                            ? "md:max-h-96 md:opacity-100"
                            : ""
                        }
                      `}
                    >
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {industry.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {industry.solutions
                          .slice(0, 4)
                          .map((solution) => (
                            <span
                              key={solution}
                              className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                            >
                              {solution}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* ==================================================
                        LEARN MORE
                    ================================================== */}

                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                      <Link href="/contact">
                      <span className="relative z-10 flex items-center">
                       Learn more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}