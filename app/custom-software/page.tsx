"use client"

import Link from "next/link"
import {
  ArrowRight,
  Code2,
  Database,
  Layers3,
  Server,
  Settings2,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  Workflow,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { HeroCustomSoftware } from "@/components/service-hero-visuals";

const services = [
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Business applications designed and developed around your specific workflows, users, and requirements.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Scalable mobile experiences that connect with your backend systems, APIs, and business processes.",
  },
  {
    icon: Server,
    title: "Backend Systems & APIs",
    description:
      "Reliable backend architectures, REST APIs, authentication systems, databases, and integrations.",
  },
  {
    icon: Database,
    title: "Database Development",
    description:
      "Structured and scalable database solutions designed around your application's data and performance needs.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Custom software workflows that reduce repetitive work and connect the tools your business already uses.",
  },
  {
    icon: Layers3,
    title: "System Integrations",
    description:
      "Connect your application with third-party platforms, APIs, CRMs, payment systems, and other services.",
  },
]

const features = [
  "Custom web applications",
  "Backend development",
  "REST API development",
  "Authentication & authorization",
  "Database architecture",
  "Admin dashboards",
  "Real-time applications",
  "Third-party API integrations",
  "Payment integrations",
  "Business workflow automation",
  "Cloud-ready architecture",
  "Performance optimization",
]

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "WebSockets",
  "AWS",
  "Azure",
]

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, users, workflows, technical requirements, and the problem the software needs to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the architecture, features, technology stack, integrations, and development roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our engineers develop the application, backend systems, database, APIs, and integrations in structured stages.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "We test the system, prepare deployment, monitor performance, and continue improving the product as requirements evolve.",
  },
]
 
export default function CustomSoftwarePage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <BreadcrumbJsonLd items={[
         { name: "Home", item: "https://revolixtech.com/" },
         { name: "Custom Software", item: "https://revolixtech.com/custom-software" },
        ]} />

        {/* ================= HERO ================= */}
        <section className="relative py-24 pt-32 lg:py-32 lg:pt-40">
  <div className="absolute inset-0 -z-10 opacity-10 hidden lg:block">
    <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
  </div>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <ScrollReveal>
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Custom Software Development
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Software Built Around{" "}
            <span className="text-primary"> Your Business </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We design and develop custom software, web applications, backend systems, APIs, and integrations that solve real business problems.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Discuss Your Project{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </ScrollReveal>
 
        <HeroCustomSoftware />
    </div>
  </div>
</section>


        {/* ================= SERVICES ================= */}
        <section className="border-t border-border py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="mx-auto mb-14 max-w-3xl text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  What We Build
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Custom Software Solutions
                </h2>

                <p className="mt-5 text-muted-foreground">
                  From internal business tools to customer-facing platforms,
                  we build software around your actual requirements.
                </p>

              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <ScrollReveal
                    key={service.title}
                    delay={index * 75}
                  >
                    <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">

                      <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3">
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

        {/* ================= FEATURES ================= */}
        <section className="relative overflow-hidden py-24 lg:py-32">

          <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-5" />

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

              <ScrollReveal>
                <div>

                  <p className="text-sm font-medium uppercase tracking-wider text-primary">
                    Built For Your Requirements
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Technology That Fits Your Workflow
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Off-the-shelf software does not always fit the way a
                    business operates. Custom software lets you build the
                    features, workflows, and integrations your organization
                    actually needs.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-8 inline-flex items-center text-sm font-medium text-primary"
                  >
                    Discuss your requirements

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="grid gap-3 sm:grid-cols-2">

                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}

                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGY ================= */}
        <section className="border-y border-border bg-secondary/20 py-24 lg:py-32">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="mx-auto mb-12 max-w-3xl text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Technology
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Modern Development Stack
                </h2>

                <p className="mt-5 text-muted-foreground">
                  We select technologies based on the requirements of the
                  product rather than forcing every project into the same stack.
                </p>

              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex flex-wrap justify-center gap-3">

                {technologies.map((technology) => (
                  <div
                    key={technology}
                    className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    {technology}
                  </div>
                ))}

              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="mx-auto mb-14 max-w-3xl text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Our Process
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  From Requirement to Production
                </h2>

                <p className="mt-5 text-muted-foreground">
                  A structured development process keeps the project focused,
                  maintainable, and aligned with your business goals.
                </p>

              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {process.map((step, index) => (
                <ScrollReveal
                  key={step.number}
                  delay={index * 100}
                >
                  <div className="relative h-full rounded-2xl border border-border bg-card p-7">

                    <span className="text-sm font-bold text-primary">
                      {step.number}
                    </span>

                    <h3 className="mt-5 text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                  </div>
                </ScrollReveal>
              ))}

            </div>
          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section className="border-t border-border py-24 lg:py-32">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <ScrollReveal>
                <div>

                  <p className="text-sm font-medium uppercase tracking-wider text-primary">
                    Why Custom Software
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Build What Your Business Actually Needs
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Custom software gives your business control over how its
                    technology works. Instead of adapting your processes to a
                    generic platform, your software can be designed around the
                    way your team operates.
                  </p>

                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="space-y-4">

                  {[
                    {
                      icon: Settings2,
                      title: "Built Around Your Workflow",
                      text: "Design features and processes around your actual business operations.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Designed With Security in Mind",
                      text: "Authentication, permissions, data handling, and secure integrations are considered from the beginning.",
                    },
                    {
                      icon: Layers3,
                      title: "Ready to Scale",
                      text: "Create an architecture that can evolve as your users, data, and requirements grow.",
                    },
                  ].map((item) => {
                    const Icon = item.icon
 
                    return (
                      <div
                        key={item.title}
                        className="flex gap-4 rounded-2xl border border-border bg-card p-6"
                      >
                        {/* <div className="shrink-0 rounded-xl bg-primary/10 p-3 align-center flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div> */}

                        <div>
                          <h3 className="font-semibold">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    )
                  })}

                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>

              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Start Building
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Have a Software Idea?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Tell us what you need to build. We can help turn your
                requirements into a practical, scalable software solution.
              </p>

              <div className="mt-8">

                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-lg bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Discuss Your Project

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