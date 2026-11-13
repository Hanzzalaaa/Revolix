"use client"

import Link from "next/link"
import {
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  Figma,
  Globe,
  Megaphone,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Workflow,
  ArrowRight,
} from "lucide-react"

interface ServicePill {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const rowOne: ServicePill[] = [
  {
    name: "Web Development",
    href: "/web-development",
    icon: Globe,
  },
  {
    name: "AI & Machine Learning",
    href: "/aiml",
    icon: Brain,
  },
  {
    name: "AI Automation",
    href: "/ai-automation",
    icon: Workflow,
  },
  {
    name: "SEO Services",
    href: "/seo",
    icon: Search,
  },
  {
    name: "UI/UX Design",
    href: "/uiux",
    icon: Figma,
  },
  {
    name: "Mobile App Development",
    href: "/mobile-app-development",
    icon: Smartphone,
  },
  {
    name: "Custom Software",
    href: "/custom-software",
    icon: Code2,
  },
  {
    name: "Digital Marketing",
    href: "/digital-marketing",
    icon: Megaphone,
  },
]

const rowTwo: ServicePill[] = [
  {
    name: "AI Agents",
    href: "/ai-agents",
    icon: Bot,
  },
  {
    name: "Backend Development",
    href: "/backend-development",
    icon: Database,
  },
  {
    name: "Cloud & DevOps",
    href: "/devops",
    icon: Cloud,
  },
  {
    name: "E-Commerce",
    href: "/e-commerce",
    icon: ShoppingCart,
  },
  {
    name: "GoHighLevel",
    href: "/gohighlevel",
    icon: Sparkles,
  },
  {
    name: "Brand & Graphic Design",
    href: "/uiux",
    icon: Palette,
  },
  {
    name: "Data Analytics",
    href: "/custom-software",
    icon: Database,
  },
  {
    name: "Software QA",
    href: "/custom-software",
    icon: Code2,
  },
]

function ServiceChip({ item }: { item: ServicePill }) {
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      className="
        group relative flex shrink-0 items-center gap-2.5 rounded-full
        border border-white/10 bg-[#0d1424] px-4 py-2.5 sm:px-5 sm:py-3
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-teal-400/50 hover:bg-[#131d33] hover:shadow-lg hover:shadow-teal-500/10
        focus:outline-none focus:ring-2 focus:ring-teal-400/50
      "
    >
      <div
        className="
          flex h-7 w-7 shrink-0 items-center justify-center rounded-full
          bg-teal-500/10 text-teal-400 transition-all duration-300
          group-hover:bg-teal-500/20 group-hover:text-teal-300 group-hover:scale-110
        "
      >
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </div>

      <span className="whitespace-nowrap text-xs font-medium text-foreground transition-colors group-hover:text-teal-200 sm:text-sm">
        {item.name}
      </span>
    </Link>
  )
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: ServicePill[]
  reverse?: boolean
}) {
  // Duplicated items for a seamless infinite loop
  const displayItems = [...items, ...items, ...items]

  return (
    <div className="marquee-container relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max gap-3 sm:gap-4 py-2 ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        }`}
      >
        {displayItems.map((item, index) => (
          <ServiceChip
            key={`${item.name}-${index}`}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}

export function InfiniteServices() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20 bg-[#060a12] border-t border-white/5">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-teal-500/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ==================================================
            SECTION HEADER
        ================================================== */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl font-display text-foreground">
            Technology &amp; Digital Services
          </h2>

          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From intelligent automation to modern web experiences, we provide the technology and digital solutions businesses need to grow, operate, and scale.
          </p>
        </div>

        {/* ==================================================
            TWO-ROW ANIMATED MARQUEE
        ================================================== */}
        <div className="space-y-4">
          {/* Row 1: Leftward */}
          <MarqueeRow items={rowOne} />

          {/* Row 2: Rightward */}
          <MarqueeRow items={rowTwo} reverse />
        </div>

        {/* ==================================================
            BOTTOM CTA: EXPLORE ALL SERVICES
        ================================================== */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="
              inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#0d1424] px-5 py-2.5
              text-xs sm:text-sm font-medium text-foreground transition-all duration-300
              hover:border-teal-400/50 hover:bg-[#131d33] hover:text-teal-300
            "
          >
            <span>Explore All Services</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
