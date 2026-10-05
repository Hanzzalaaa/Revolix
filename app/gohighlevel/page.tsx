"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld"
import {
  CheckCircle,
  Bot,
  Workflow,
  Database,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import { HeroGoHighLevel } from "@/components/service-hero-visuals"

const ghlFaqs = [
  {
    question: "Do I need an existing GoHighLevel account?",
    answer:
      "No. We can create and configure a brand-new GoHighLevel account or optimize an existing one.",
  },
  {
    question: "Can you migrate my current CRM?",
    answer:
      "Yes. We can migrate contacts, pipelines, automations, calendars, and other assets from your current CRM into GoHighLevel.",
  },
  {
    question: "Do you build AI chat and voice agents?",
    answer:
      "Yes. We develop AI-powered chatbots and voice agents that qualify leads, answer questions, and book appointments automatically.",
  },
  {
    question: "Can you integrate GoHighLevel with other software?",
    answer:
      "Absolutely. We build secure API integrations with CRMs, payment gateways, scheduling tools, and other third-party platforms.",
  },
]

const ghlPackages = [
  {
    title: "Launch Setup",
    price: "Starting at $750",
    features: [
      "CRM Setup",
      "Pipelines",
      "Funnels",
      "Forms",
    ],
  },
  {
    title: "Speed-to-Lead",
    price: "Starting at $1,000",
    features: [
      "Missed Call Text Back",
      "Lead Notifications",
      "Automation Workflows",
      "Pipeline Updates",
    ],
  },
  {
    title: "AI Chat Agent",
    price: "Starting at $1,500",
    features: [
      "GPT Chatbot",
      "Knowledge Base",
      "Website Integration",
      "CRM Integration",
    ],
  },
 
]

const ghlServices = [
  "GoHighLevel Account & Sub-Account Setup",
  "Custom Snapshots",
  "Sales Pipelines & CRM Configuration",
  "Funnels, Forms & Landing Pages",
  "Missed Call Text-Back Automation",
  "AI Chat Agents",
  "AI Voice Receptionists",
  "Custom API Integrations",
]

export default function GoHighLevelPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Header />

      <main className="w-full overflow-x-clip">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "https://revolixtech.com/" },
            {
              name: "GoHighLevel",
              item: "https://revolixtech.com/gohighlevel",
            },
          ]}
        />

        {/* Hero */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] sm:h-[600px] sm:w-[600px]" />
          </div>

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14 xl:gap-20">
              {/* Hero Content */}
              <ScrollReveal>
                <div className="min-w-0 max-w-3xl lg:max-w-2xl">
                  <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    GoHighLevel Services
                  </p>

                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    GoHighLevel{" "}
                    <span className="text-primary">
                      Automation That Works
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    We set up and customize GoHighLevel to help businesses
                    automate sales, marketing, customer support, and lead
                    management. From CRM setup and workflows to AI-powered
                    voice and chat agents, we build systems designed to save
                    time and convert more leads.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" asChild className="group">
                      <Link href="/contact#contact-form">
                        Start Your Automation
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>

                    <Button variant="outline" size="lg" asChild>
                      <Link href="/portfolio">View Our Projects</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hero Visual */}
              <ScrollReveal delay={150}>
                <div className="flex min-w-0 w-full justify-center lg:justify-end">
                  <div className="w-full min-w-0 max-w-[520px] xl:max-w-[580px]">
                    <HeroGoHighLevel />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted/30 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Why Businesses Choose Revolix
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Most freelancers can set up a funnel. We build complete
                  systems that connect AI, automation, and custom software to
                  help your business grow.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="h-full border-border/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-7 sm:p-8">
                  <Bot className="mb-5 h-10 w-10 text-primary" />

                  <h3 className="mb-3 text-xl font-semibold">
                    AI-Powered Automation
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">
                    From AI chatbots to voice agents, we automate
                    conversations, qualification, and appointment booking using
                    modern AI.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full border-border/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-7 sm:p-8">
                  <Workflow className="mb-5 h-10 w-10 text-primary" />

                  <h3 className="mb-3 text-xl font-semibold">
                    Complete CRM Workflows
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">
                    We build sales pipelines, calendars, funnels, forms,
                    automations, and customer journeys that actually save time.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full border-border/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-7 sm:p-8">
                  <Database className="mb-5 h-10 w-10 text-primary" />

                  <h3 className="mb-3 text-xl font-semibold">
                    Custom Integrations
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">
                    Need GoHighLevel connected with your existing software? We
                    build secure API integrations and custom backend solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  What We Build
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Whether you're starting from scratch or improving an
                  existing setup, we build complete GoHighLevel systems
                  tailored to your business.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ghlServices.map((service) => (
                <Card
                  key={service}
                  className="h-full border-border/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                >
                  <CardContent className="flex h-full items-start gap-4 p-6">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                    <p className="leading-relaxed">{service}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
       
<section className="bg-muted/30 py-20 sm:py-24">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <ScrollReveal>
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          GoHighLevel Packages
        </h2>

        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Flexible solutions designed for businesses at every stage of
          growth.
        </p>
      </div>
    </ScrollReveal>

    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {ghlPackages.map((pkg, index) => (
        <Card
          key={pkg.title}
          className={`h-full border-border/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg
             `
        }
        >
          <CardContent className="flex h-full flex-col p-7 sm:p-8">
            <h3 className="text-2xl font-bold tracking-tight">
              {pkg.title}
            </h3>

            <div className="mb-7 mt-5 text-3xl font-bold leading-tight text-primary sm:text-4xl">
              {pkg.price}
            </div>

            <div className="flex-grow space-y-3">
              {pkg.features.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              asChild
              className="mt-10 w-full"
            >
              <Link href="/contact/contact-form">
                Get Started
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>

    
  </div>
</section>



        {/* FAQ */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
          <FAQJsonLd faqs={ghlFaqs} />

          <ParallaxSection
            speed={0.1}
            className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-5"
          >
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </ParallaxSection>

          <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                  Got Questions?
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Frequently Asked Questions
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {ghlFaqs.map((faq, index) => {
                const isOpen = openIndex === index

                return (
                  <ScrollReveal key={faq.question} delay={index * 100}>
                    <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenIndex(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <h3 className="pr-2 text-base font-semibold sm:text-lg">
                          {faq.question}
                        </h3>

                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        id={`faq-answer-${index}`}
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <p className="px-5 pb-5 leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="background sidebar-ring relative overflow-hidden py-20 sm:py-24">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-10 sm:w-1/2">
            <div className="h-full w-full bg-[linear-gradient(45deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:100px_100px]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Automate Your Business?
              </h2>

              <p className="mt-6 text-lg leading-relaxed opacity-90">
                Whether you need a complete GoHighLevel setup, AI-powered
                automation, or custom integrations, our team is ready to build
                a solution tailored to your business.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact#contact-form">
                    Book a Free GoHighLevel Consultation
                  </Link>
                </Button>

                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">
                    View Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

