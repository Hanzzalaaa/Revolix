"use client"

import Link from "next/link"
import {
  ArrowRight,
  Smartphone,
  Code2,
  Layers3,
  Bell,
  ShieldCheck,
  Rocket,
  Database,
  Globe,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { TiltCard } from "@/components/interactive/page"

const services = [
  {
    icon: Smartphone,
    title: "iOS App Development",
    description:
      "Modern iOS applications designed for performance, reliability, and a smooth native user experience.",
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "Scalable Android applications built for different devices, screen sizes, and real-world business requirements.",
  },
  {
    icon: Layers3,
    title: "Cross-Platform Development",
    description:
      "Build applications for iOS and Android from a shared codebase using modern cross-platform technologies.",
  },
  {
    icon: Code2,
    title: "Custom Mobile Applications",
    description:
      "Purpose-built mobile applications designed around your business workflows, customers, and product goals.",
  },
  {
    icon: Database,
    title: "API & Backend Integration",
    description:
      "Connect your mobile application with APIs, databases, authentication systems, CRMs, and existing software.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description:
      "Engage users with reliable push notifications, alerts, reminders, and real-time application updates.",
  },
]

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Secure Applications",
    description:
      "Authentication, authorization, secure APIs, and data protection designed into the application from the beginning.",
  },
  {
    icon: Rocket,
    title: "Performance & Scalability",
    description:
      "Fast interfaces and scalable architectures designed to support your application as usage grows.",
  },
  {
    icon: Globe,
    title: "Third-Party Integrations",
    description:
      "Integrate payment gateways, maps, analytics, social platforms, CRMs, AI services, and other business tools.",
  },
]

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your product idea, users, business requirements, and technical needs.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "We create clear mobile experiences and interfaces designed around how your users actually interact with the product.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our developers build the application, backend integrations, authentication, APIs, and required functionality.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "The application is tested across devices and common user flows to identify bugs and performance issues.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We prepare the application for release and help deploy it to the appropriate app stores and infrastructure.",
  },
  {
    number: "06",
    title: "Support & Growth",
    description:
      "After launch, we can continue improving features, fixing issues, and scaling the application as your business grows.",
  },
]

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <Header />

      <main className="pt-20">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              <ScrollReveal>
                <div>
                  <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Mobile App Development
                  </p>

                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    Mobile Apps Built for{" "}
                    <span className="text-primary">
                      Real-World Growth
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    We design and develop modern mobile applications for
                    startups and businesses — from product concept and UI/UX
                    to development, integrations, launch, and ongoing support.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Start Your App Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/portfolio"
                      className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      See Our Work
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <TiltCard className="mx-auto w-full max-w-xl">
  <div className="relative hidden md:block">
    <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl">
      <div className="flex items-center justify-center rounded-2xl bg-muted p-12">
        <Smartphone className="h-32 w-32 text-primary" />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">
            Platforms
          </p>
          <p className="mt-1 font-semibold">
            iOS & Android
          </p>
        </div> 

        <div className="rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">
            Approach
          </p>
          <p className="mt-1 font-semibold">
            Scalable
          </p>
        </div>
      </div>
    </div>
  </div>
 </TiltCard>
</ScrollReveal>

            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="border-t border-border py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  What We Build
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Complete Mobile Development Services
                </h2>

                <p className="mt-5 text-muted-foreground">
                  From simple business applications to complex products,
                  we build mobile experiences around your users and business
                  requirements.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <ScrollReveal key={service.title} delay={index * 75}>
                    <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <h3 className="text-xl font-semibold">
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

        {/* ================= CAPABILITIES ================= */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <ScrollReveal>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Built Beyond the Interface
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    More Than Just a Mobile App
                  </h2>

                  <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                    A successful mobile product needs more than attractive
                    screens. We consider security, backend architecture,
                    integrations, performance, and scalability throughout
                    development.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-5">
                {capabilities.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <ScrollReveal key={item.title} delay={index * 100}>
                      <div className="flex gap-5 rounded-2xl border border-border bg-card p-6">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>

                        <div>
                          <h3 className="font-semibold">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>

            </div>

          </div>
        </section>
 
        {/* ================= PROCESS ================= */}
        <section className="border-y border-border py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Our Process
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  From Idea to App Store
                </h2>

                <p className="mt-5 text-muted-foreground">
                  A structured development process keeps your project
                  organized from the first idea through launch.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {process.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 75}>
                  <div className="relative h-full rounded-2xl border border-border bg-card p-7">

                    <span className="text-sm font-semibold text-primary">
                      {step.number}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Build Your Product
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Have an App Idea?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Whether you are starting from an idea or improving an
                existing application, our team can help turn it into a
                reliable mobile product.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-lg bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Discuss Your App
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