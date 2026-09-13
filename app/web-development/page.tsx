"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Globe,
  Layers,
  Smartphone,
  Zap,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {TiltCard} from "@/components/interactive/page"
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { motion } from "framer-motion"

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional, responsive websites designed to establish your brand online and turn visitors into potential customers.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Custom web applications built around your business requirements, workflows, users, and technical needs.",
  },
  {
    icon: Layers,
    title: "Next.js & React Development",
    description:
      "Modern React and Next.js applications focused on performance, maintainability, and a smooth user experience.",
  },
  {
    icon: Smartphone,
    title: "Responsive Development",
    description:
      "Websites and applications that work smoothly across desktops, tablets, and mobile devices.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Improve loading speed, usability, and technical performance so your website feels fast and reliable.",
  },
  {
    icon: Code2,
    title: "API & Backend Integration",
    description:
      "Connect your website or application with APIs, databases, authentication systems, CRMs, and other business tools.",
  },
]

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, audience, goals, required features, and technical requirements.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "We define the page structure, user experience, technology stack, and development plan.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our team builds the website or application using a modern and maintainable development approach.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We test responsiveness, functionality, performance, and integrations before deployment.",
  },
]

const packages = [
  {
    name: "Business Website",
    price: "Let's Discuss",
    description:
      "For businesses that need a professional website to establish their online presence.",
    features: [
      "Professional responsive design",
      "Up to 5 pages",
      "Mobile optimization",
      "Contact form",
      "Basic SEO setup",
      "Deployment assistance",
    ],
    popular: true,
  },
{
  name: "E-commerce Website",
  price: "Let's Discuss",
  description:
    "Ready to sell online with professional, responsive, and conversion-focused e-commerce store.",
  features: [
    "Everything in Business",
    "Product & category setup",
    "Shopping cart & checkout",
    "Payment gateway integration",
    "Mobile-responsive design",
    "Order management setup",
  ],
  popular: true,
},
  {
    name: "Custom Website",
    price: "Let's Discuss",
    description:
      "For businesses that need a custom application, dashboard, platform, or complex web system.",
    features: [
      "Custom application architecture",
      "React / Next.js development",
      "Backend & API integration",
      "Authentication systems",
      "Database integration",
      "Custom functionality",
    ],
    popular: true,
  },
]

const faqs = [
  {
    question: "How long does a website take to build?",
    answer:
      "The timeline depends on the size and complexity of the project. A straightforward business website can be completed relatively quickly, while custom applications and complex integrations require more development time.",
  },
  {
    question: "Do you build websites from scratch?",
    answer:
      "Yes. We can build custom websites and web applications around your business requirements instead of relying on a one-size-fits-all template.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Yes. Responsive development is part of our approach, so websites are designed and tested to work across desktop, tablet, and mobile screen sizes.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can redesign an existing website, improve its user experience, modernize its interface, and rebuild parts of the technical implementation where needed.",
  },
  {
    question: "Can you connect my website to other systems?",
    answer:
      "Yes. We can integrate websites and applications with APIs, CRMs, databases, authentication systems, payment services, automation platforms, and other business tools depending on the project requirements.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Maintenance and ongoing development can be discussed depending on your project. We can continue improving, updating, and supporting the system after launch.",
  },
]

export default function WebDevelopmentPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Header />

      <main>
        <BreadcrumbJsonLd items={[
         { name: "Home", item: "https://revolixtech.com/" },
         { name: "Web Development", item: "https://revolixtech.com/web-development" },
       ]} />

        {/* hero */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              <ScrollReveal>
                <div>
                  <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Web Development
                  </p>

                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    Websites & Web Applications{" "}
                    <span className="text-primary">
                      Built to Work
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    We build fast, responsive, and scalable websites and
                    web applications for businesses that need more than a
                    basic template.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Start Your Project
 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/portfolio"
                      className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      See Our Work
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hero Visual */}
<ScrollReveal delay={150} className="hidden md:block">
  <TiltCard className="mx-auto w-full max-w-xl">
    <div className="relative mx-auto w-full max-w-xl">

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-primary/15 blur-3xl" />

      {/* Main Browser Widget */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-2xl">

        <div className="overflow-hidden rounded-2xl border border-border bg-background">

          {/* Browser Header */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">

            <span className="h-2.5 w-2.5 rounded-full bg-primary/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/20" />

            <div className="ml-3 flex h-7 flex-1 items-center rounded-md border border-border bg-muted/50 px-3">
              <span className="text-[10px] text-muted-foreground">
                yourbusiness.com
              </span>
            </div>

          </div>

          {/* Website Preview */}
          <div className="p-5">

            {/* Mini Navigation */}
            <div className="mb-8 flex items-center justify-between">

              <div className="h-5 w-24 rounded-md bg-primary/25" />

              <div className="flex gap-2">
                <div className="h-2 w-10 rounded-full bg-muted" />
                <div className="h-2 w-10 rounded-full bg-muted" />
                <div className="h-2 w-10 rounded-full bg-muted" />
              </div>

            </div>

            {/* Hero Content */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div className="flex flex-col justify-center">

                <div className="mb-3 h-3 w-20 rounded-full bg-primary/30" />

                <div className="h-7 w-full rounded-lg bg-primary/15" />

                <div className="mt-2 h-7 w-4/5 rounded-lg bg-primary/10" />

                <div className="mt-4 space-y-2">
                  <div className="h-2.5 w-full rounded-full bg-muted" />
                  <div className="h-2.5 w-5/6 rounded-full bg-muted" />
                </div>

                <div className="mt-5 h-9 w-28 rounded-lg bg-primary/25" />

              </div>

              {/* Website Visual */}
              <div className="flex items-center justify-center rounded-2xl border border-border bg-muted/30 p-4">

                <div className="w-full space-y-3">

                  <div className="h-3 w-1/2 rounded-full bg-primary/20" />

                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-14 rounded-lg bg-primary/10" />
                    <div className="h-14 rounded-lg bg-muted" />
                    <div className="h-14 rounded-lg bg-primary/10" />
                  </div>

                  <div className="h-16 rounded-lg bg-muted/70" />

                </div>

              </div>

            </div>

            {/* Lower Website Sections */}
            <div className="mt-7 grid grid-cols-3 gap-3">

              <div className="h-12 rounded-xl border border-border bg-muted/40" />
              <div className="h-12 rounded-xl border border-primary/10 bg-primary/5" />
              <div className="h-12 rounded-xl border border-border bg-muted/40" />

            </div>

          </div>

        </div>
      </div>

      {/* Small Floating Responsive Badge */}
      <motion.div
        className="absolute -right-3 top-10 rounded-xl border border-border bg-background/90 px-3 py-2 shadow-xl backdrop-blur-xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="text-[10px] font-medium text-muted-foreground">
          Responsive
        </p>
        <p className="text-xs font-semibold text-primary">
          Web Experience
        </p>
      </motion.div>

    </div>
  </TiltCard>
</ScrollReveal>


            </div>
          </div>
        </section>

        {/* intro */}
        <section className="border-y border-border py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                More Than a Website
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Your website should support your business
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                A website is often the first interaction a potential customer
                has with your business. We combine modern development,
                responsive design, performance, and integrations to create
                digital experiences that are built around your goals.
              </p>
            </ScrollReveal>

          </div>
        </section>

        {/* services */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  What We Build
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Web Development Services
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  From business websites to custom web applications, we
                  build digital products around your requirements.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <ScrollReveal
                    key={service.title}
                    delay={index * 75}
                  >
                    <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <h3 className="mt-6 text-xl font-semibold">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                    </div>
                  </ScrollReveal>
                )
              })}

            </div>
          </div>
        </section>

        {/* technology */}
        <section className="border-y border-border py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Technology
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Built With Modern Technology
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We select technologies based on the needs of the project,
                rather than forcing every business into the same stack.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "REST APIs",
                  "Tailwind CSS",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* process */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Our Process
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  From Idea to Launch
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"> 

              {process.map((step, index) => (
                <ScrollReveal
                  key={step.number}
                  delay={index * 100}
                >
                  <div className="relative h-full rounded-2xl border border-border bg-card p-6">

                    <span className="text-sm font-semibold text-primary">
                      {step.number}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold">
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

        {/* package */}
        <section className="border-y border-border py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Packages
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Choose the Right Starting Point
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Every project is different. These packages provide a
                  starting point and can be customized around your needs.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">

              {packages.map((pkg, index) => (
                <ScrollReveal
                  key={pkg.name}
                  delay={index * 100}
                >
                  <div
                    className={`relative h-full rounded-2xl border bg-card p-7 ${
                      pkg.popular
                        ? "border-primary shadow-lg shadow-primary/10"
                        : "border-border"
                    }`}
                  >

                    {pkg.popular && (
                      <div className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        Popular
                      </div>
                    )}

                    <h3 className="text-xl font-semibold">
                      {pkg.name}
                    </h3>

                    <p className="mt-4 text-2xl font-bold">
                      {pkg.price}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {pkg.description}
                    </p>

                    <div className="mt-7 space-y-3">

                      {pkg.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}

                    </div>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      Discuss Your Project
                    </Link>

                  </div>
                </ScrollReveal>
              ))}

            </div>
          </div>
        </section>

        {/* faq */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  FAQ
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Web Development Questions
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Some common questions about working with our development
                  team.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">

              {faqs.map((faq, index) => (
                <ScrollReveal
                  key={faq.question}
                  delay={index * 75}
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-card">

                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(
                          openIndex === index ? null : index
                        )
                      }
                      className="flex w-full items-center justify-between p-6 text-left"
                      aria-expanded={openIndex === index}
                    >
                      <h3 className="pr-4 text-lg font-semibold">
                        {faq.question}
                      </h3>

                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          openIndex === index
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index
                          ? "max-h-96"
                          : "max-h-0"
                      }`}
                    >
                      <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              ))}

            </div>
          </div>
        </section>

        {/* cta */}
        <section className="border-t border-border py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Start Your Project
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready to Build Your Website?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Tell us what you&apos;re building, what you need, and where
                you want to go. We&apos;ll help you figure out the right
                technical approach.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Get a Free Consultation

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  View Portfolio
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
