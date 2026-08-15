"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronDown,
  Search,
  Link2,
  Settings,
  MapPin,
  FileSearch,
  BarChart3,
  Sparkles,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TiltCard } from "@/components/interactive/page"

const services = [
  {
    icon: Search,
    title: "On-Page SEO",
    description:
      "Optimize your pages, content, headings, metadata, internal links, and site structure around relevant search intent.",
    items: [
      "Title & meta description optimization",
      "Heading structure",
      "Keyword alignment",
      "Content optimization",
      "Internal linking",
      "Image & alt-text optimization",
    ],
  },
  {
    icon: Link2,
    title: "Off-Page SEO",
    description:
      "Build your website's authority through relevant backlinks, digital mentions, and a stronger overall online presence.",
    items: [
      "Backlink analysis",
      "Link opportunity research",
      "Competitor backlink analysis",
      "Brand mentions",
      "Authority building",
      "Link profile monitoring",
    ],
  },
  {
    icon: Settings,
    title: "Technical SEO",
    description:
      "Improve the technical foundation of your website so search engines can efficiently crawl, understand, and index your content.",
    items: [
      "Crawlability checks",
      "Indexation issues",
      "Site architecture",
      "Page speed improvements",
      "XML sitemap",
      "Robots.txt configuration",
    ],
  },
  {
    icon: Search,
    title: "Keyword Research",
    description:
      "Identify relevant search terms based on your business, audience, competition, and the intent behind each search.",
    items: [
      "Keyword discovery",
      "Search intent analysis",
      "Competitor keyword research",
      "Long-tail keywords",
      "Keyword grouping",
      "Content opportunities",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Improve your visibility for location-based searches and help potential customers find your business online.",
    items: [
      "Google Business Profile optimization",
      "Local keyword research",
      "Local landing pages",
      "Citation consistency",
      "Review strategy",
      "Local search optimization",
    ],
  },
  {
    icon: FileSearch,
    title: "SEO Audits",
    description:
      "Get a clear picture of your website's SEO health with an audit covering technical, on-page, content, and authority factors.",
    items: [
      "Technical SEO audit",
      "On-page analysis",
      "Content review",
      "Backlink analysis",
      "Competitor analysis",
      "Prioritized recommendations",
    ],
  },
]

const process = [
  {
    number: "01",
    title: "SEO Audit",
    description:
      "We review your website, identify technical and content issues, and establish the areas with the greatest opportunity.",
  },
  {
    number: "02",
    title: "Keyword Research",
    description:
      "We research relevant keywords and search intent to understand what your potential customers are looking for.",
  },
  {
    number: "03",
    title: "Optimization",
    description:
      "We improve your site's technical foundation, pages, content structure, internal linking, and other SEO elements.",
  },
  {
    number: "04",
    title: "Monitor & Improve",
    description:
      "SEO is an ongoing process. We monitor important search visibility signals and identify opportunities for continued improvement.",
  },
]

const packages = [
  {
    name: "SEO Audit",
    price: "Starting from $200",
    description:
      "A detailed review for businesses that want to understand what is holding their website back.",
    features: [
      "Technical SEO review",
      "On-page SEO analysis",
      "Keyword review",
      "Competitor overview",
      "SEO issues report",
      "Prioritized recommendations",
    ],
    popular: true,
  },
  {
    name: "SEO Optimization",
    price: "Starting from $500",
    description:
      "For businesses that need hands-on optimization across their website.",
    features: [
      "SEO audit",
      "Keyword research",
      "On-page optimization",
      "Technical improvements",
      "Internal linking",
      "SEO recommendations",
    ],
    popular: true,
  },
  {
    name: "Ongoing SEO",
    price: "Let's Discuss",
    description:
      "A continuous SEO engagement focused on improving and maintaining your website's search visibility.",
    features: [
      "Ongoing SEO monitoring",
      "Content opportunities",
      "Technical improvements",
      "On-page optimization",
      "Competitor monitoring",
      "Monthly recommendations",
    ],
    popular: true,
  },
]

const faqs = [
  {
    question: "What is SEO?",
    answer:
      "Search Engine Optimization is the process of improving a website so that search engines can better understand its content and users can more easily discover it through relevant searches.",
  },
  {
    question: "What is On-Page SEO?",
    answer:
      "On-Page SEO focuses on elements within your website, including page titles, headings, content, keywords, internal links, images, and overall page structure.",
  },
  {
    question: "What is Technical SEO?",
    answer:
      "Technical SEO focuses on the technical foundation of your website, including crawlability, indexation, site architecture, performance, sitemaps, and other technical factors that affect how search engines access your site.",
  },
  {
    question: "What is Off-Page SEO?",
    answer:
      "Off-Page SEO focuses on signals outside your website, particularly relevant backlinks, brand mentions, and other factors that can contribute to the authority and reputation of your website.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO is a long-term process and the timeline varies depending on your website, industry, competition, current search visibility, and the work required. We do not promise specific rankings or guaranteed timelines.",
  },
  {
    question: "Can you guarantee a #1 Google ranking?",
    answer:
      "No. No legitimate SEO provider can guarantee a specific Google ranking. Our approach is to improve the technical foundation, relevance, content, and overall search visibility of your website using sustainable SEO practices.",
  },
  {
    question: "Do you work with existing websites?",
    answer:
      "Yes. We can audit and optimize existing websites as well as work with new websites during their development and launch.",
  },
]

export default function SEOPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Header />

      <main>

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
                    Search Engine Optimization
                  </p>

                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    SEO That Helps Your Business{" "}
                    <span className="text-primary">
                      Get Found
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    We improve the technical foundation, content, and search
                    visibility of your website through practical SEO
                    strategies built around your business and audience.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Get an SEO Audit

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

              {/* SEO Visual */}
              <ScrollReveal delay={150} className="hidden md:block">
                <TiltCard className="mx-auto w-full max-w-xl">
  <div className="relative w-full max-w-sm">
    {/* Ambient Glow Background Element */}
    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 to-purple-500/10 opacity-70 blur-xl" />

    <div className="relative rounded-3xl border border-border bg-card p-5 shadow-2xl space-y-4">
      
      {/* Widget Header Area */}
      <div className="flex justify-between items-center px-1">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <div className="h-2 w-2 rounded-sm bg-primary" />
          </div>
          <div className="h-2 w-16 rounded bg-muted/60" />
        </div>
        <div className="h-4 w-10 rounded-full bg-primary/10 border border-primary/20" />
      </div>

      {/* Abstract SEO Layer 1: Core Architecture */}
      <div className="space-y-2">
        <div className="flex justify-between items-center h-3">
          <div className="h-2 w-24 rounded bg-muted/80" />
          <div className="h-2 w-6 rounded bg-primary/20" />
        </div>
        <div className="h-3 rounded-xl bg-background border border-border overflow-hidden p-0.5 flex items-center">
          <div className="h-full w-[85%] rounded-lg bg-primary" />
        </div>
      </div>

      {/* Abstract SEO Layer 2: Metadata Injection */}
      <div className="space-y-2">
        <div className="flex justify-between items-center h-3">
          <div className="h-2 w-20 rounded bg-muted/80" />
          <div className="h-2 w-4 rounded bg-primary/20" />
        </div>
        <div className="h-3 rounded-xl bg-background border border-border overflow-hidden p-0.5 flex items-center">
          <div className="h-full w-[70%] rounded-lg bg-primary/70" />
        </div>
      </div>

      {/* Abstract SEO Layer 3: Indexation & Performance */}
      <div className="space-y-2">
        <div className="flex justify-between items-center h-3">
          <div className="h-2 w-28 rounded bg-muted/80" />
          <div className="h-2 w-8 rounded bg-primary/20" />
        </div>
        <div className="h-3 rounded-xl bg-background border border-border overflow-hidden p-0.5 flex items-center">
          <div className="h-full w-[55%] rounded-lg bg-primary/40" />
        </div>
      </div>

      {/* Summary Performance Footer Matrix */}
      <div className="rounded-2xl bg-primary/5 border border-primary/10 p-3 flex justify-between items-center mt-1">
        <div className="grid grid-cols-4 gap-1 w-1/3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={`h-1.5 rounded-sm ${i === 0 ? 'bg-primary' : 'bg-muted'}`} />
          ))}
        </div>
        <div className="h-4 w-4 rounded-full bg-background border border-border" />
      </div>

    </div>
  </div>
  </TiltCard>
</ScrollReveal>


            </div>
          </div>
        </section>

        {/* ==================================================
            INTRO
        ================================================== */}
        <section className="border-y border-border py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                A Complete SEO Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                SEO is more than adding keywords
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                A strong SEO strategy combines technical improvements,
                relevant content, search intent, website structure, authority,
                and continuous optimization. We look at the complete picture
                instead of focusing on a single SEO tactic.
              </p>
            </ScrollReveal>

          </div>
        </section>

        {/* ==================================================
            SERVICES
        ================================================== */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Our SEO Services
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Everything Your SEO Foundation Needs
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  From technical fixes to content and authority building,
                  our SEO services cover the major areas that influence
                  organic search visibility.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">

              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <ScrollReveal
                    key={service.title}
                    delay={index * 75}
                  >
                    <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <h3 className="mt-6 text-xl font-semibold">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      <div className="mt-6 space-y-3">

                        {service.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                            <span className="text-sm text-muted-foreground">
                              {item}
                            </span>
                          </div>
                        ))}

                      </div>

                    </div>
                  </ScrollReveal>
                )
              })}

            </div>
          </div>
        </section>

        {/* ==================================================
            SEO AREAS
        ================================================== */}
        <section className="border-y border-border py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  The Three Core Areas
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  On-Page, Off-Page & Technical SEO
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <ScrollReveal>
                <div className="h-full rounded-2xl border border-border bg-card p-7">

                  <h3 className="text-xl font-semibold">
                    On-Page SEO
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    We optimize the elements users and search engines
                    interact with directly, including content, headings,
                    metadata, internal links, images, and page structure.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Metadata",
                      "Content structure",
                      "Headings",
                      "Internal links",
                      "Search intent",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check className="h-4 w-4 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">

                  <h3 className="text-xl font-semibold">
                    Off-Page SEO
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    We focus on building a stronger online presence through
                    relevant authority signals, backlink analysis, digital
                    mentions, and competitor research.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Backlink analysis",
                      "Link opportunities",
                      "Competitor research",
                      "Brand mentions",
                      "Authority building",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check className="h-4 w-4 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">

                  <h3 className="text-xl font-semibold">
                    Technical SEO
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    We improve the technical foundation of your website so
                    search engines can crawl, understand, and index your
                    important pages efficiently.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Crawlability",
                      "Indexation",
                      "Site architecture",
                      "Sitemaps",
                      "Performance",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check className="h-4 w-4 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ==================================================
            PROCESS
        ================================================== */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Our Process
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  A Practical SEO Process
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {process.map((step, index) => (
                <ScrollReveal
                  key={step.number}
                  delay={index * 100}
                >
                  <div className="h-full rounded-2xl border border-border bg-card p-6">

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

        {/* ==================================================
            PACKAGES
        ================================================== */}
        <section className="border-y border-border py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  SEO Packages
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Start Where Your Website Needs It Most
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Choose an audit, optimization package, or ongoing SEO
                  engagement based on your current needs.
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
                      Discuss Your SEO
                    </Link>

                  </div>
                </ScrollReveal>
              ))}

            </div>
          </div>
        </section>

        {/* ==================================================
            FAQ
        ================================================== */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  FAQ
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  SEO Questions
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Answers to some common questions about SEO and our
                  approach.
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

        {/* ==================================================
            CTA
        ================================================== */}
        <section className="border-t border-border py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Improve Your Search Visibility
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready to Make Your Website Easier to Find?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Get a clearer understanding of your website's SEO
                opportunities and the improvements that can be made.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Get an SEO Audit

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

