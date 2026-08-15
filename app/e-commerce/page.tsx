"use client"

import Link from "next/link"
import {
  ArrowRight,
  ShoppingCart,
  Store,
  CreditCard,
  Package,
  Zap,
  BarChart3,
  CheckCircle2,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { TiltCard } from "@/components/interactive/page"

const services = [
  {
    icon: Store,
    title: "E-commerce Website Development",
    description:
      "High-performance online stores built around your products, customers, and business goals.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    description:
      "Custom Shopify stores, themes, sections, and integrations designed for conversion and scalability.",
  },
  {
    icon: Package,
    title: "WordPress & WooCommerce",
    description:
      "Flexible WooCommerce stores with custom functionality, product management, and payment integrations.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Secure payment solutions and checkout experiences that make purchasing simple for your customers.",
  },
  {
    icon: Zap,
    title: "E-commerce Automation",
    description:
      "Automate orders, customer notifications, inventory workflows, abandoned carts, and repetitive tasks.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion",
    description:
      "Track customer behavior and optimize your store around measurable conversion and sales performance.",
  },
]

const features = [
  "Responsive mobile-first storefronts",
  "Custom Shopify development",
  "WooCommerce development",
  "Custom product pages",
  "Payment gateway integration",
  "Shopping cart & checkout systems",
  "Inventory management",
  "Order management",
  "Customer account systems",
  "Third-party API integrations",
  "Analytics & tracking",
  "Performance optimization",
]

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your products, target customers, business model, and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a clean and conversion-focused shopping experience around your brand.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our team builds the storefront, integrations, backend functionality, and required workflows.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We test the store across devices, verify checkout flows, optimize performance, and prepare it for launch.",
  },
]

export default function EcommercePage() {
  return (
    <>
      <Header /> 

      <main className="overflow-hidden">
        {/* Hero */}
<section className="relative py-24 pt-32 lg:py-32 lg:pt-40">
  <div className="absolute inset-0 -z-10 opacity-10">
    <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
  </div>
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <ScrollReveal>
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            E-commerce Development
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            E-commerce Stores Built to{" "}
            <span className="text-primary">Sell</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We build fast, responsive, and scalable e-commerce experiences that help businesses sell products online, manage operations, and create better customer journeys.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start Your Store{" "}
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

      {/* Added 'hidden lg:block' to hide on mobile/tablet and show only on desktop */}
      <ScrollReveal delay={150}>
        <TiltCard className="mx-auto w-full max-w-xl">
        <div className="relative hidden lg:block">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl">
            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground"> Online Store </p>
                  <h3 className="mt-1 text-xl font-semibold"> Your Products </h3>
                </div>
                <div className="rounded-xl bg-primary/10 p-3">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border p-4">
                  <p className="text-xs text-muted-foreground"> Products </p>
                  <p className="mt-2 text-2xl font-bold">+</p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="text-xs text-muted-foreground"> Orders </p>
                  <p className="mt-2 text-2xl font-bold">+</p>
                </div>
                <div className="col-span-2 rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <p className="text-sm font-medium">
                      Optimized shopping experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </TiltCard>
      </ScrollReveal>
    </div>
  </div>
</section>


        {/* Services */}
        <section className="border-t border-border py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  What We Build
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Complete E-commerce Solutions
                </h2>

                <p className="mt-5 text-muted-foreground">
                  From storefront development to automation and integrations,
                  we build the systems your online business needs to operate
                  and grow.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <ScrollReveal key={service.title} delay={index * 75}>
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

        {/* Features */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-5" />

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <ScrollReveal>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-primary">
                    Built For Your Business
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Everything Your Online Store Needs
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    Whether you are launching your first store or improving an
                    existing e-commerce operation, we can build the technology
                    around your business requirements.
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

        {/* Process */}
        <section className="border-y border-border bg-secondary/20 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Our Process
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  From Idea to Online Store
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 100}>
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

        {/* CTA */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Ready to Sell Online?
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Build an E-commerce Store That Works for Your Business
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Tell us about your products and business. We&apos;ll help you
                plan and build an e-commerce experience around your goals.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-lg bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Get Started
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