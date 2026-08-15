"use client"

import Link from "next/link"
import {
  ArrowRight,
  Server,
  Database,
  Code2,
  ShieldCheck,
  Zap,
  Cloud,
  Layers3,
  GitBranch,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Code2,
    title: "API Development",
    description:
      "Secure and scalable REST APIs that connect your applications, services, databases, and third-party platforms.",
  },
  {
    icon: Database,
    title: "Database Development",
    description:
      "Reliable database architecture, optimization, and data management built around your application's requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
    description:
      "Secure authentication, authorization, role-based access, and protected APIs for modern applications.",
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    description:
      "Real-time features using WebSockets and event-driven architecture for dashboards, messaging, notifications, and live applications.",
  },
  {
    icon: Layers3,
    title: "Backend Architecture",
    description:
      "Clean and maintainable backend architectures designed to support growing applications and changing business requirements.",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Production-ready backend deployments with cloud infrastructure, environment configuration, and scalable hosting.",
  },
]

const technologies = [
  "Node.js",
  "Express.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "WebSockets",
  "Docker",
  "AWS",
  "Azure",
  "Google Cloud",
]

export default function BackendDevelopmentPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">

        {/* Hero */}
        <section className="relative overflow-hidden py-28 lg:py-36">
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Backend Development
              </p>

              <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Powerful Backend Systems{" "}
                <span className="text-primary">
                  Built to Scale
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                We build secure APIs, scalable backend architectures,
                databases, integrations, and real-time systems that power
                modern digital products.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  View Our Work
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-y border-border py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <ScrollReveal>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-primary">
                    The Engine Behind Your Product
                  </p>

                  <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                    Backend engineering that keeps your business moving
                  </h2>

                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    A great frontend is only as reliable as the system behind
                    it. Our backend development services focus on building
                    secure, efficient, and maintainable infrastructure that
                    supports your applications and business processes.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    From APIs and databases to authentication, integrations,
                    and real-time functionality, we develop the systems that
                    make your products work reliably in production.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Server className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    Built for real-world applications
                  </h3>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    We focus on clean architecture, reliable data handling,
                    security, performance, and maintainability so your backend
                    can evolve alongside your business.
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  What We Build
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Backend Development Services
                </h2>

                <p className="mt-5 text-muted-foreground">
                  From simple APIs to complex backend platforms, we build
                  reliable systems around your product's requirements.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <ScrollReveal key={service.title} delay={index * 75}>
                    <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <h3 className="mt-6 text-xl font-semibold">
                        {service.title}
                      </h3>

                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                    </div>
                  </ScrollReveal>
                )
              })}
            </div>

          </div>
        </section>

        {/* Technologies */}
        <section className="border-y border-border py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Our Technology Stack
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Technologies We Work With
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
                  We select technologies based on your product requirements,
                  scalability needs, and long-term goals.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {technologies.map((technology, index) => (
                <ScrollReveal key={technology} delay={index * 40}>
                  <div className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary">
                    {technology}
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* Process */}
        <div className="mx-auto max-w-3xl mt-14 grid gap-6 md:grid-cols-2">
  {[
    {
      number: "01",
      title: "Understand",
      text: "We learn about your product, users, requirements, and technical goals.",
    },
    {
      number: "02",
      title: "Architect",
      text: "We plan the backend structure, APIs, database, integrations, and infrastructure.",
    },
    {
      number: "03",
      title: "Build",
      text: "Our engineers develop and test the backend using an iterative development process.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "We prepare the system for production, help establish reliable deployment workflows.",
    },
  ].map((step, index) => (
    <ScrollReveal key={step.number} delay={index * 100} className="h-full">
      <div className="relative h-full rounded-2xl border border-border bg-card p-6 flex flex-col">
        <span className="text-sm font-bold text-primary">{step.number}</span>
        <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {step.text}
        </p>
      </div>
    </ScrollReveal> 
  ))} 
</div>



        {/* CTA */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Build Your Backend
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Need a backend that can grow with your product?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Tell us what you're building and we'll help you design and
                develop the backend systems behind it.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Talk to Our Team

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}