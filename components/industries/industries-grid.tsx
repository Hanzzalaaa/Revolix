"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const industries = [
  {
    id: "hvac",
    title: "HVAC, Plumbing & Electrical",
    description:
      "Revolix equips home service contractors with high-converting websites, missed call text-back, instant lead dispatch, and GoHighLevel job booking workflows so you never lose a job to a competitor.",
    solutions: [
      "Instant missed-call text back (< 15s)",
      "Online estimate request & dispatch funnels",
      "Emergency service dispatch automation",
      "Automated review requests & Google maps rank",
      "GoHighLevel CRM & calendar sync",
      "Jobber & ServiceTitan integrations",
    ],
    image: "/manufacturing-factory-dark-industrial.jpg",
    alt: "HVAC and trade contractor automation and website infrastructure",
  },
  {
    id: "healthcare",
    title: "Dental & Medical Clinics",
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
    alt: "Medical and dental clinic digital scheduling systems",
  },
  {
    id: "legal",
    title: "Law Firms & Legal Practices",
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
    alt: "Law firm high-trust intake funnels and websites",
  },
  {
    id: "realestate",
    title: "Real Estate Agencies",
    description:
      "Revolix helps real estate professionals price smart, predict demand, personalize buyer journeys, and market properties faster and smoother regardless of market mood.",
    solutions: [
      "Property valuation & automated lead capture",
      "Interactive property showcase websites",
      "Automated lead routing & SMS dispatch",
      "High-converting landing pages for listings",
      "CRM pipeline & client follow-up sequences",
      "Local market SEO & visibility funnels",
    ],
    image: "/real-estate-cityscape-dark-night.jpg",
    alt: "Real estate property lead generation and CRM websites",
  },
  {
    id: "ecommerce",
    title: "Ecommerce Brands",
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
    alt: "Ecommerce custom storefronts and abandoned checkout recovery",
  },
  {
    id: "fintech",
    title: "Fintech & Financial Services",
    description:
      "Revolix powers fintech with reliable software architectures, robust security, streamlined compliance workflows, and digital user journeys that earn trust and drive growth.",
    solutions: [
      "Secure client onboarding & portal workflows",
      "Regulatory compliance & data privacy architectures",
      "Payment processing & Stripe integrations",
      "Automated financial advisory scheduling",
      "High-trust branding & responsive web platforms",
      "Custom analytics & reporting dashboards",
    ],
    image: "/fintech-finance-dark-green.jpg",
    alt: "Fintech compliance and financial infrastructure",
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    description:
      "Revolix powers the energy shift with modern software. We optimize systems, predict demand, and build smarter, cleaner, and more secure energy platforms for a sustainable future.",
    solutions: [
      "Smart utility customer management portals",
      "Solar & clean energy quote calculators",
      "Automated lead dispatch for energy consultants",
      "Energy usage analytics & reporting tools",
      "Field technician booking & mobile workflows",
      "High-trust regional energy presence",
    ],
    image: "/energy-power-grid-dark-blue.jpg",
    alt: "Energy and utility smart infrastructure",
  },
  {
    id: "hospitality",
    title: "Hospitality & Dining",
    description:
      "Revolix transforms hospitality operations, personalizes guest stays, cuts overhead, and delivers eco-smart and guest-first experiences that keep customers coming back.",
    solutions: [
      "Direct booking & reservation engines",
      "Guest inquiry automation & instant replies",
      "Digital menus & contactless ordering systems",
      "Automated review collection & reputation management",
      "Event & banquet inquiry pipelines",
      "Loyalty rewards & repeat guest funnels",
    ],
    image: "/hospitality-hotel-dark-luxury.jpg",
    alt: "Hospitality hotel and dining digital platforms",
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    description:
      "Revolix powers smart manufacturing with modern software and automation. We optimize supply chains, boost uptime, and secure industrial workflows without slowing production.",
    solutions: [
      "Industrial RFQ & custom quotation funnels",
      "B2B catalog & product specification engines",
      "Distributor portal & dealer locator systems",
      "Supply chain integration & ERP bridging",
      "Technical document & CAD download gates",
      "High-credibility corporate digital footprint",
    ],
    image: "/manufacturing-factory-dark-industrial.jpg",
    alt: "Manufacturing and industrial operations software",
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    description:
      "Revolix brings modern digital solutions to the logistics industry. We optimize routes, forecast dispatch needs, and build resilient supply chains that move faster and deliver on time.",
    solutions: [
      "Freight rate quote calculators & booking funnels",
      "Driver recruitment & onboarding workflows",
      "Customer shipment tracking interfaces",
      "Automated dispatch notifications & SMS updates",
      "Warehouse & carrier integration endpoints",
      "Broker & shipper relationship CRM",
    ],
    image: "/logistics-warehouse-dark-tech.jpg",
    alt: "Logistics and freight supply chain platforms",
  },
  {
    id: "oil-gas",
    title: "Oil & Gas Operations",
    description:
      "Revolix applies modern engineering to oil and gas operations. We predict maintenance needs, streamline logistics, and improve safety across industrial workflows.",
    solutions: [
      "Contractor safety compliance & induction portals",
      "Equipment catalog & field service booking",
      "Vendor pre-qualification management",
      "Secure project data room integrations",
      "High-security corporate web presence",
      "Emergency notification dispatch workflows",
    ],
    image: "/oil-gas-refinery-dark-industrial.jpg",
    alt: "Oil and gas industrial refinery software",
  },
  {
    id: "education",
    title: "Education & Learning Institutions",
    description:
      "Transform education with modern learning platforms, adaptive assessments, and intelligent student portals that personalize the learning journey for every student.",
    solutions: [
      "Student enrollment & admission funnels",
      "Course catalog & program discovery engines",
      "Automated tuition & consultation booking",
      "Campus event registration & reminders",
      "Alumni network & donor engagement portals",
      "Search visibility & local student acquisition",
    ],
    image: "/education-learning-dark-digital.jpg",
    alt: "Education learning digital portals",
  },
]

export function IndustriesGrid() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      // DISTINCT INDUSTRY REVEAL ANIMATION:
      // Horizontal Curtain Clip Wipe on Image + Inset Glow Bloom & Magnetic Card Rise
      const cards = gsap.utils.toArray<HTMLElement>(".industry-full-card")
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 35,
            scale: 0.97,
          },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
              fastScrollEnd: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform,opacity",
          }
        )

        const imgMask = card.querySelector(".industry-card-img-mask")
        if (imgMask) {
          gsap.fromTo(
            imgMask,
            { clipPath: "inset(0 100% 0 0)" },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
                fastScrollEnd: true,
              },
              clipPath: "inset(0 0% 0 0)",
              duration: 0.7,
              ease: "power2.out",
              clearProps: "clipPath",
            }
          )
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="relative overflow-hidden py-16 lg:py-24 bg-[#060A12]">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 h-[600px] w-[600px] rounded-full bg-teal-500/5 blur-[160px]" />
        <div className="absolute bottom-1/3 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 lg:space-y-16">
          {industries.map((ind, idx) => {
            const formattedNumber = String(idx + 1).padStart(2, "0")

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="industry-full-card group relative overflow-hidden rounded-3xl border-0 bg-[#070c18] shadow-[inset_0_0_0_1px_rgba(45,212,191,0.2),inset_0_0_30px_rgba(45,212,191,0.06)] shadow-2xl shadow-black/90 transition-all duration-500 hover:shadow-[inset_0_0_0_1px_rgba(45,212,191,0.4),inset_0_0_40px_rgba(45,212,191,0.12)] hover:shadow-black"
              >
                {/* 2-Column Grid: Image starts in the left, content to the right */}
                {/* Desktop bounded height (80vh max-h-[580px]) so cards are never too long */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch lg:h-[80vh] lg:max-h-[580px]">
                  {/* Image Column: Starts on Left (~45%) */}
                  <div className="industry-card-img-mask relative min-h-[220px] sm:min-h-[300px] lg:min-h-full lg:col-span-5 overflow-hidden [clip-path:inset(0_0%_0_0)]">
                    <Image
                      src={ind.image}
                      alt={ind.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Dark gradient edge blend to card body */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-transparent lg:hidden" />
                    <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#070c18]" />
                  </div>

                  {/* Content Column: On the Right (~55%) */}
                  <div className="relative flex flex-col justify-between p-6 sm:p-10 lg:p-12 lg:col-span-7">
                    <div className="space-y-4">
                      {/* Top: ONLY the number. No other items at its horizontal level even if a dot */}
                      <div>
                        <span className="font-mono text-sm font-bold tracking-widest text-teal-400">
                          {formattedNumber}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-foreground tracking-tight transition-colors duration-300 group-hover:text-teal-300">
                        {ind.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {ind.description}
                      </p>

                      {/* Key Industry Solutions */}
                      <div className="pt-2 grid sm:grid-cols-2 gap-2.5">
                        {ind.solutions.map((sol) => (
                          <div
                            key={sol}
                            className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80"
                          >
                            <span className="text-teal-400 font-bold shrink-0">•</span>
                            <span className="leading-snug">{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Link: Clean, NO bottom line separator (-----) */}
                    <div className="mt-6 pt-2">
                      <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground font-medium rounded-xl shadow-lg shadow-teal-500/10 hover:bg-primary/90">
                        <Link href={`/contact?service=${ind.id}#contact-form`} className="justify-center">
                          <span>Discuss {ind.title}</span>
                        </Link>
                      </Button>
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
