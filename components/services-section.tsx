'use client'

import Link from 'next/link'
import { ScrollReveal } from './scroll-reveal'
import { Card } from '@/components/ui/card'
import {
  Bot,
  Workflow,
  Code2,
  Cloud,
  Palette,
  ShoppingCart,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI Systems & Agents',
    description:
      'Production AI agents, RAG pipelines, voice AI, and intelligent chat systems integrated into real business workflows.',
    href: '/ai-agents',
    iconColor: 'text-violet-300',
    iconBg: 'bg-violet-400/10',
    iconBorder: 'border-violet-300/20',
  },
  {
    icon: Workflow,
    title: 'CRM & Marketing Automation',
    description:
      'GoHighLevel setup, workflow automation, CRM integrations, and lead management systems.',
    href: '/gohighlevel',
    iconColor: 'text-emerald-300',
    iconBg: 'bg-emerald-400/10',
    iconBorder: 'border-emerald-300/20',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Scalable web applications, mobile apps, APIs, and backend systems tailored to your business.',
    href: '/custom-software',
    iconColor: 'text-sky-300',
    iconBg: 'bg-sky-400/10',
    iconBorder: 'border-sky-300/20',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Modern cloud and DevOps practices used to deploy, maintain, and run reliable software applications.',
    href: '/devops',
    iconColor: 'text-cyan-300',
    iconBg: 'bg-cyan-400/10',
    iconBorder: 'border-cyan-300/20',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Modern interfaces, product design, wireframes, and responsive digital experiences focused on usability.',
    href: '/uiux',
    iconColor: 'text-pink-300',
    iconBg: 'bg-pink-400/10',
    iconBorder: 'border-pink-300/20',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description:
      'Shopify, WooCommerce, WordPress, custom storefronts, and business integrations built around your needs.',
    href: '/e-commerce',
    iconColor: 'text-amber-300',
    iconBg: 'bg-amber-400/10',
    iconBorder: 'border-amber-300/20',
  },
]

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-4 w-4" />
              What We Do
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Our Services
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Technology, automation, design, and digital solutions built
              around the way your business actually works.
            </p>

          </div>
        </ScrollReveal>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <ScrollReveal
                key={service.title}
                delay={index * 75}
              >
                <Link
                  href={service.href}
                  className="group block h-full"
                >
                  <Card
                    interactive
                    className="
                      h-full
                      min-h-[300px]
                      rounded-2xl
                      border-border
                      bg-card
                      p-7
                    "
                  >

                    {/* =================================================
                        ICON
                    ================================================= */}

                    {/* ICON */}
<div
  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${service.iconBorder} ${service.iconBg}`}
>
  <Icon className={`h-6 w-6 ${service.iconColor}`} />
</div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div className="flex flex-1 flex-col">

                      <h3 className="text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {service.description}
                      </p>

                    </div>

                    {/* =================================================
                        LINK
                    ================================================= */}

                    <div className="mt-auto flex items-center justify-between border-t border-border pt-5">

                      <span className="text-sm font-medium text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                        Explore service
                      </span>

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-border
                          text-muted-foreground
                          transition-all
                          duration-200
                          group-hover:border-primary/40
                          group-hover:bg-primary/10
                          group-hover:text-primary
                        "
                      >
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>

                    </div>

                  </Card>
                </Link>
              </ScrollReveal>
            )
          })}

        </div>

      </div>
    </section>
  )
}