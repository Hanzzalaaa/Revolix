"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronDown,
  Share2,
  FileText,
  Search,
  Mail,
  BarChart3,
  Target,
  Megaphone,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TiltCard } from "@/components/interactive/page"

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build a consistent social presence with content, creative strategy, publishing, and audience-focused campaigns.",
    items: [
      "Social media strategy",
      "Content planning",
      "Post creation",
      "Platform management",
      "Community engagement",
      "Performance monitoring",
    ],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Create useful, relevant content that helps your brand communicate clearly and attract the right audience.",
    items: [
      "Content strategy",
      "Blog content",
      "Website content",
      "Social media content",
      "Content calendars",
      "Content optimization",
    ],
  },
  {
    icon: Target,
    title: "Google Ads & PPC",
    description:
      "Reach people actively searching for your products or services with carefully structured paid search campaigns.",
    items: [
      "Google Search Ads",
      "Keyword research",
      "Campaign structure",
      "Ad copy",
      "Conversion tracking",
      "Campaign optimization",
    ],
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Run targeted advertising campaigns across Facebook and Instagram with creative testing and audience optimization.",
    items: [
      "Facebook advertising",
      "Instagram advertising",
      "Audience research",
      "Campaign setup",
      "Creative testing",
      "Performance optimization",
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Turn your email list into a useful marketing channel with campaigns and automated communication.",
    items: [
      "Email campaign strategy",
      "Newsletter setup",
      "Email copywriting",
      "Audience segmentation",
      "Automated sequences",
      "Campaign reporting",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Track the performance of your marketing activity and use meaningful data to identify what should improve next.",
    items: [
      "Google Analytics setup",
      "Conversion tracking",
      "Campaign reporting",
      "Performance analysis",
      "Audience insights",
      "Monthly recommendations",
    ],
  },
]

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, audience, goals, existing marketing channels, and competitive environment.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We build a marketing strategy covering the right platforms, content, campaigns, audiences, and messaging.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We create and launch the agreed campaigns, content, advertising, and tracking systems.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We monitor performance, identify opportunities, test improvements, and refine campaigns over time.",
  },
]

const packages = [
  {
    name: "Social Starter",
    price: "Let's Discuss",
    description:
      "For businesses that need a more consistent and professional social media presence.",
    features: [
      "Social media strategy",
      "Content calendar",
      "Social media content",
      "Platform management",
      "Basic performance tracking",
      "Monthly recommendations",
    ],
    popular: true,
  },
  {
    name: "Growth Marketing",
    price: "Let's Discuss",
    description:
      "A broader marketing engagement combining content, social media, and paid campaigns.",
    features: [
      "Marketing strategy",
      "Social media management",
      "Content marketing",
      "Google Ads or Meta Ads",
      "Conversion tracking",
      "Performance reporting",
    ],
    popular: true,
  },
  {
    name: "Paid Advertising",
    price: "Let's Discuss",
    description:
      "For businesses focused on building and optimizing paid advertising campaigns.",
    features: [
      "Campaign strategy",
      "Audience research",
      "Google or Meta Ads",
      "Ad creative guidance",
      "Conversion tracking",
      "Campaign optimization",
    ],
    popular: true,
  },
]

const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We offer social media marketing, content marketing, Google Ads and PPC, Meta Ads, email marketing, analytics, conversion tracking, and broader digital marketing strategy.",
  },
  {
    question: "Do you manage social media accounts?",
    answer:
      "Yes. We can help with social media strategy, content planning, publishing, platform management, audience engagement, and performance monitoring.",
  },
  {
    question: "Do you run Google Ads?",
    answer:
      "Yes. We can help with Google Search Ads, keyword research, campaign structure, ad copy, conversion tracking, and ongoing campaign optimization.",
  },
  {
    question: "Do you run Facebook and Instagram Ads?",
    answer:
      "Yes. We can create and manage advertising campaigns across Facebook and Instagram, including audience research, campaign setup, creative testing, and performance optimization.",
  },
  {
    question: "Can you create content for our business?",
    answer:
      "Yes. We can help develop content strategies, content calendars, website content, blog content, and social media content based on your business and audience.",
  },
  {
    question: "How quickly will we see results?",
    answer:
      "Results depend on the channel, budget, industry, audience, starting point, and campaign strategy. We focus on establishing the right tracking and continuously improving performance rather than promising unrealistic results.",
  },
  {
    question: "Do you guarantee a specific advertising ROI?",
    answer:
      "No. Advertising performance depends on many factors outside the campaign itself, including the offer, market, competition, website, pricing, and audience. We focus on measurable campaigns and continuous optimization.",
  },
  {
    question: "Can you work with our existing marketing team?",
    answer:
      "Yes. We can work as an extension of an existing marketing team or handle specific areas such as paid advertising, social media, content, or analytics.",
  },
]

export default function DigitalMarketingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Header />

      <main>

        {/* ==================================================
            HERO
        ================================================== */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">

              <ScrollReveal className="">
  <div>
    <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
      Digital Marketing
    </p>
    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
      Digital Marketing That{" "}
      <span className="text-primary"> Moves Your Business Forward </span>
    </h1>
    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
      We combine social media, content marketing, paid advertising, and analytics
      to help businesses reach the right audience and make better marketing
      decisions.
    </p>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href="/contact"
        className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Start a Conversation{" "}
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

 
              {/* Marketing Visual */}
              <ScrollReveal delay={150} className="hidden md:block">
                <TiltCard className="mx-auto w-full max-w-xl">
  <div className="relative mx-auto w-full max-w-xl">
    <div className="grid grid-cols-5 gap-4 rounded-3xl border border-border bg-card p-5 shadow-2xl">
      
      {/* Left Side: Visual Funnel Breakdown (2 Columns) */}
      <div className="col-span-2 rounded-2xl bg-background border border-border/60 p-4 flex flex-col justify-between items-center min-h-[160px]">
        {/* Funnel Tier 1 (Top / Awareness) */}
        <div className="w-full h-5 rounded-lg bg-primary border border-primary/20 flex items-center justify-center">
          <div className="h-1.5 w-1/3 rounded-full bg-background/40" />
        </div>
        {/* Funnel Tier 2 (Middle / Consideration) */}
        <div className="w-4/5 h-5 rounded-lg bg-primary/70 border border-primary/10 flex items-center justify-center">
          <div className="h-1.5 w-1/4 rounded-full bg-background/30" />
        </div>
        {/* Funnel Tier 3 (Bottom / Conversion) */}
        <div className="w-3/5 h-5 rounded-lg bg-primary/40 border border-primary/5 flex items-center justify-center">
          <div className="h-1.5 w-1/5 rounded-full bg-background/20" />
        </div>
        {/* Funnel Core Indicator */}
        <div className="h-2 w-2 rounded-full bg-primary animate-ping mt-1" />
      </div>

      {/* Right Side: Analytics Spike & Insights (3 Columns) */}
      <div className="col-span-3 flex flex-col justify-between rounded-2xl bg-background border border-border/60 p-4">
        {/* Compact Header Block */}
        <div className="flex justify-between items-center w-full">
          <div className="h-3 w-16 rounded bg-muted" />
          <div className="h-4 w-10 rounded-full bg-primary/10 border border-primary/20" />
        </div>

        {/* Upward Conversion Spike Graph */}
        <div className="flex items-end gap-1.5 h-16 my-4 w-full px-1">
          <div className="h-[20%] w-full bg-muted rounded-t-sm" />
          <div className="h-[25%] w-full bg-muted rounded-t-sm" />
          <div className="h-[40%] w-full bg-primary/40 rounded-t-sm" />
          <div className="h-[55%] w-full bg-primary/60 rounded-t-sm" />
          <div className="h-[70%] w-full bg-primary/80 rounded-t-sm" />
          <div className="h-[95%] w-full bg-primary rounded-t-sm relative">
            {/* Pulsing focal point on the peak performance spike */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary border border-background" />
          </div>
        </div>

        {/* Mini Multi-channel Segment Track */}
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden flex">
          <div className="h-full w-1/2 bg-primary" />
          <div className="h-full w-1/3 bg-primary/60 border-l border-background" />
          <div className="h-full w-1/6 bg-primary/30 border-l border-background" />
        </div>
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
                A Complete Marketing Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Marketing is more than posting content
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Effective digital marketing combines the right message,
                audience, platform, campaign strategy, creative, and
                measurement. We connect these pieces so your marketing
                activity has a clear purpose.
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
                  Our Services
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Everything You Need to Market Online
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Choose individual services or combine multiple channels
                  into a broader digital marketing strategy.
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
            MARKETING CHANNELS
        ================================================== */}
        <section className="border-y border-border py-24 lg:py-32">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Marketing Channels
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Reach Customers Where They Are
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Different businesses need different channels. We help
                  identify the platforms that make sense for your audience
                  and goals.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  title: "Social Media",
                  text: "Build visibility and relationships through consistent, audience-focused social content.",
                },
                {
                  title: "Google Search",
                  text: "Reach people actively searching for products and services through paid search campaigns.",
                },
                {
                  title: "Facebook & Instagram",
                  text: "Use targeted Meta advertising to reach specific audiences and test different creative approaches.",
                },
                {
                  title: "Content",
                  text: "Educate, inform, and build trust with useful content aligned with your audience's needs.",
                },
                {
                  title: "Email",
                  text: "Stay connected with leads and customers through newsletters, campaigns, and automated sequences.",
                },
                {
                  title: "Analytics",
                  text: "Measure campaign activity and use data to understand what is working and where to improve.",
                },
              ].map((channel, index) => (

                <ScrollReveal
                  key={channel.title}
                  delay={index * 75}
                >

                  <div className="h-full rounded-2xl border border-border bg-card p-7">

                    <h3 className="text-xl font-semibold">
                      {channel.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {channel.text}
                    </p>

                  </div>

                </ScrollReveal>

              ))}

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
                  From Strategy to Execution
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
                  Marketing Packages
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Choose the Right Starting Point
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  We can tailor the scope depending on your business,
                  audience, platforms, and marketing goals.
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
                      Discuss Your Marketing
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
                  Digital Marketing Questions
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Some common questions about our digital marketing services.
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
                Grow Your Digital Presence
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready to Build a Better Marketing Strategy?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Tell us about your business, your audience, and where you
                want to grow. We'll help identify the right digital
                marketing approach.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Talk to Our Team

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
