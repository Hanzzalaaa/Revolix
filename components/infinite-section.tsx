"use client"

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
} from "lucide-react"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

const rowOne = [
  {
    name: "Web Development",
    icon: Globe,
  },
  {
    name: "AI & Machine Learning",
    icon: Brain,
  },
  {
    name: "AI Automation",
    icon: Workflow,
  },
  {
    name: "SEO Services",
    icon: Search,
  },
  {
    name: "UI/UX Design",
    icon: Figma,
  },
  {
    name: "Mobile App Development",
    icon: Smartphone,
  },
  {
    name: "Custom Software",
    icon: Code2,
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
  },
]

const rowTwo = [
  {
    name: "AI Agents",
    icon: Bot,
  },
  {
    name: "Backend Development",
    icon: Database,
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
  },
  {
    name: "E-Commerce",
    icon: ShoppingCart,
  },
  {
    name: "GoHighLevel",
    icon: Sparkles,
  },
  {
    name: "Brand & Graphic Design",
    icon: Palette,
  },
  {
    name: "Data Analytics",
    icon: Database,
  },
  {
    name: "Software QA",
    icon: Code2,
  },
]

/*
 * Mobile layout
 *
 * Instead of squeezing 16 services into 2 rows,
 * we divide them into 3 scrolling rows.
 */

const mobileRowOne = [
  rowOne[0],
  rowOne[1],
  rowTwo[0],
  rowTwo[1],
  rowOne[2],
]

const mobileRowTwo = [
  rowOne[3],
  rowOne[4],
  rowTwo[2],
  rowTwo[3],
  rowOne[5],
]

const mobileRowThree = [
  rowOne[6],
  rowOne[7],
  rowTwo[4],
  rowTwo[5],
  rowTwo[6],
  rowTwo[7],
]

function ServiceCard({
  name,
  icon: Icon,
}: {
  name: string
  icon: React.ElementType
}) {
  return (
    <div
      className="
        group
        flex
        shrink-0
        items-center
        gap-2.5
        rounded-xl
        border
        border-border/70
        bg-background/80
        px-4
        py-3
        shadow-sm
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-primary/40
        hover:bg-primary/5
        hover:shadow-lg
        sm:gap-3
        sm:px-5
        sm:py-4
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-primary/10
          transition-transform
          duration-300
          group-hover:scale-110
          sm:h-10
          sm:w-10
        "
      >
        <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
      </div>

      <span className="whitespace-nowrap text-xs font-medium text-foreground sm:text-sm">
        {name}
      </span>
    </div>
  )
}

/*
 * Reusable infinite row
 */
function InfiniteRow({
  services,
  reverse = false,
  duration = 30,
}: {
  services: typeof rowOne
  reverse?: boolean
  duration?: number
}) {
  const duplicatedServices = [...services, ...services]

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-10
          h-full
          w-12
          bg-gradient-to-r
          from-background
          to-transparent
          sm:w-24
          lg:w-40
        "
      />

      {/* Right fade */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-10
          h-full
          w-12
          bg-gradient-to-l
          from-background
          to-transparent
          sm:w-24
          lg:w-40
        "
      />

      <motion.div
        className="flex w-max gap-3 sm:gap-4"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedServices.map((service, index) => (
          <ServiceCard
            key={`${service.name}-${index}`}
            name={service.name}
            icon={service.icon}
          />
        ))}
      </motion.div>
    </div>
  )
}

export function InfiniteServices() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* ==================================================
          BACKGROUND GLOW
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[400px]
            w-[400px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/5
            blur-3xl
            sm:h-[500px]
            sm:w-[500px]
          "
        />
      </div>

      <div className="relative">
        {/* ==================================================
            HEADING
        ================================================== */}

        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              What We Do
            </p>

            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Technology & Digital Services
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From intelligent automation to modern web experiences,
              we provide the technology and digital solutions businesses
              need to grow, operate, and scale.
            </p>
          </div>
        </ScrollReveal>

        {/* ==================================================
            DESKTOP + TABLET
            ONLY 2 ROWS
        ================================================== */}

        <div className="hidden sm:block">
          {/* First Row */}
          <ScrollReveal delay={100}>
            <div className="mb-5">
              <InfiniteRow
                services={rowOne}
                duration={30}
              />
            </div>
          </ScrollReveal>

          {/* Second Row */}
          <ScrollReveal delay={150}>
            <InfiniteRow
              services={rowTwo}
              reverse
              duration={34}
            />
          </ScrollReveal>
        </div>

        {/* ==================================================
            MOBILE
            3 ROWS
        ================================================== */}

        <div className="block sm:hidden">
          {/* Mobile Row 1 */}
          <ScrollReveal delay={100}>
            <div className="mb-3">
              <InfiniteRow
                services={mobileRowOne}
                duration={24}
              />
            </div>
          </ScrollReveal>

          {/* Mobile Row 2 */}
          <ScrollReveal delay={130}>
            <div className="mb-3">
              <InfiniteRow
                services={mobileRowTwo}
                reverse
                duration={27}
              />
            </div>
          </ScrollReveal>

          {/* Mobile Row 3 */}
          <ScrollReveal delay={160}>
            <InfiniteRow
              services={mobileRowThree}
              duration={30}
            />
          </ScrollReveal>
        </div>

        {/* ==================================================
            BOTTOM LINK
        ================================================== */}

        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <a
              href="/services"
              className="
                inline-flex
                items-center
                rounded-lg
                border
                border-border
                px-5
                py-2.5
                text-sm
                font-medium
                text-muted-foreground
                transition-all
                hover:border-primary/40
                hover:bg-primary/5
                hover:text-primary
              "
            >
              Explore All Services

              <span className="ml-2 transition-transform">
                →
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}