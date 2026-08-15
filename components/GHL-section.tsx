"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Phone,
  Workflow,
  PlugZap,
} from "lucide-react"

import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"

const ghlFeatures = [
  {
    icon: Workflow,
    title: "CRM & Pipeline Setup",
    description:
      "Configure pipelines, calendars, forms, funnels, and workflows around the way your business actually operates.",
  },
  {
    icon: Phone,
    title: "Speed-to-Lead Automation",
    description:
      "Automatically respond to missed calls and new leads, qualify prospects, and move them through your sales pipeline.",
  },
  {
    icon: Bot,
    title: "AI Chat & Voice Agents",
    description:
      "Deploy AI agents that answer questions, qualify leads, handle conversations, and book appointments automatically.",
  },
  {
    icon: PlugZap,
    title: "Custom Integrations",
    description:
      "Connect GoHighLevel with your existing CRM, APIs, databases, payment systems, and other business tools.",
  },
]

const ghlHighlights = [
  "GoHighLevel account & sub-account setup",
  "Custom workflows and automation",
  "AI chat and voice agents",
  "Missed-call text-back automation",
  "Custom API integrations",
  "Appointment booking systems",
]

export function GHLSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background decoration */}
      <ParallaxSection
        speed={0.08}
        className="pointer-events-none absolute -right-32 top-20 h-[500px] w-[500px] opacity-10"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
      </ParallaxSection>

      <ParallaxSection
        speed={0.12}
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] opacity-5"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              GoHighLevel Automation
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-10">
              Turn GoHighLevel Into a{" "}
              <span className="text-primary">
                Revenue-Generating System
              </span>
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We build GoHighLevel systems that go beyond funnels and basic
              workflows. From CRM setup and lead automation to AI chat and
              voice agents, we connect your sales process into one intelligent
              system.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/gohighlevel"
                className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                Explore GoHighLevel Services

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                Book a Free GHL Audit
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Feature Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ghlFeatures.map((feature, index) => {
            const Icon = feature.icon

            return (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom Content */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <ScrollReveal>
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
                More Than a GHL Setup
              </p>

              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                We build the automation around your business.
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Most GoHighLevel implementations stop at funnels and
                workflows. We combine GoHighLevel with AI, APIs, and custom
                software to create complete automation systems that fit your
                existing processes.
              </p>

              <Link
                href="/gohighlevel"
                className="group mt-7 inline-flex items-center text-sm font-semibold text-primary"
              >
                See everything that we build

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={150}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold">
                What we can build for you
              </h3>

              <div className="mt-6 space-y-4">
                {ghlHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                    <span className="text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <Link
                  href="/gohighlevel"
                  className="group inline-flex items-center text-sm font-semibold"
                >
                  View GoHighLevel solutions

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Bottom CTA */}
        {/* <ScrollReveal>
          <div className="mt-20 rounded-3xl border border-border bg-muted/40 px-6 py-12 text-center sm:px-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Ready to automate?
            </p>

            <h3 className="mx-auto mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
              Let's turn your GoHighLevel account into a complete automation
              system.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Talk to our team about your current setup, automation goals, or
              the systems you want to connect.
            </p>

            <div className="mt-7">
              <Link
                href="/gohighlevel"
                className="group inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                Explore GoHighLevel Services

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal> */}

      </div>
    </section>
  )
}