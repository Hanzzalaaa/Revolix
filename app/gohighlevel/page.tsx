"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { FAQJsonLd } from "@/components/seo/json-ld"
import { TiltCard } from "@/components/interactive/page"
import {
  CheckCircle,
  Bot,
  Phone,
  Workflow,
  Database,
  ArrowRight,
  ChevronDown,
} from "lucide-react"


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

export default function GoHighLevelPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
      
<section className="relative overflow-hidden py-24 lg:py-32">
  <div className="absolute inset-0 -z-10 opacity-10">
    <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
  </div>

  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-12 lg:grid-cols-2">

      <ScrollReveal>
        <div>
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
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start Your Automation

              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Right Side Visual */}
      <ScrollReveal delay={150} className="hidden md:block">
        <TiltCard className="mx-auto w-full max-w-xl">
        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">

            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Automation System
                </p>

                <h3 className="mt-1 text-xl font-semibold">
                  GoHighLevel
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="text-lg font-bold">AI</span>
              </div>
            </div>

            <div className="space-y-3">

              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-sm font-medium">
                  New Lead
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Lead automatically enters CRM
                </p>
              </div>

              <div className="mx-auto h-5 w-px bg-border" />

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm font-medium text-primary">
                  Automated Follow-Up
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  SMS, email & workflow automation
                </p>
              </div>

              <div className="mx-auto h-5 w-px bg-border" />

              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-sm font-medium">
                  AI Agent
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  AI handles conversations and qualifies leads
                </p>
              </div>

              <div className="mx-auto h-5 w-px bg-border" />

              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-sm font-medium">
                  Sales Team
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Qualified leads are ready for conversion
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
        

        {/* Why Choose Us */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold">
                Why Businesses Choose Revolix
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Most freelancers can set up a funnel. We build complete systems
                that connect AI, automation, and custom software to help your
                business grow.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 cursor-pointer"> 
                <CardContent className="p-8">
                  <Bot className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    AI-Powered Automation
                  </h3>
                  <p className="text-muted-foreground">
                    From AI chatbots to voice agents, we automate conversations,
                    qualification, and appointment booking using modern AI.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 cursor-pointer">
                <CardContent className="p-8">
                  <Workflow className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Complete CRM Workflows
                  </h3>
                  <p className="text-muted-foreground">
                    We build sales pipelines, calendars, funnels, forms,
                    automations, and customer journeys that actually save time.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 cursor-pointer">
                <CardContent className="p-8">
                  <Database className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Custom Integrations
                  </h3>
                  <p className="text-muted-foreground">
                    Need GoHighLevel connected with your existing software? We
                    build secure API integrations and custom backend solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold">What We Build</h2>

              <p className="mt-4 text-lg text-muted-foreground">
                Whether you're starting from scratch or improving an existing
                setup, we build complete GoHighLevel systems tailored to your
                business.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "GoHighLevel Account & Sub-Account Setup",
                "Custom Snapshots",
                "Sales Pipelines & CRM Configuration",
                "Funnels, Forms & Landing Pages",
                "Missed Call Text-Back Automation",
                "AI Chat Agents",
                "AI Voice Receptionists",
                "Custom API Integrations",
              ].map((service) => (
                <Card key={service}className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 cursor-pointer"> 
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                    <p>{service}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold">GoHighLevel Packages</h2>

              <p className="mt-4 text-lg text-muted-foreground">
                Flexible solutions designed for businesses at every stage of
                growth.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              {[
                { 
                  title: "Launch Setup",
                  price: "$500",
                  time: "7 Days",
                  features: [
                    "CRM Setup",
                    "Pipelines",
                    "Calendars",
                    "Funnels",
                    "Forms",
                  ],
                },
                {
                  title: "Speed-to-Lead",
                  price: "$400",
                  time: "5 Days",
                  features: [
                    "Missed Call Text Back",
                    "Lead Notifications",
                    "Automation Workflows",
                    "Pipeline Updates",
                  ],
                },
                {
                  title: "AI Chat Agent",
                  price: "$1,200",
                  time: "10 Days",
                  features: [
                    "GPT Chatbot",
                    "Knowledge Base",
                    "Website Integration",
                    "CRM Integration",
                  ],
                },
                {
                  title: "AI Voice Receptionist",
                  price: "$2,500",
                  time: "14 Days",
                  features: [
                    "Voice AI",
                    "Appointment Booking",
                    "Lead Qualification",
                    "GoHighLevel Integration",
                  ],
                }, 
              ].map((pkg) => (
                <Card key={pkg.title} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 cursor-pointer"> 
                  <CardContent className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl font-bold">{pkg.title}</h3>

                    <div className="mt-6 text-4xl font-bold text-primary">
                      {pkg.price}
                    </div>

                    <p className="text-sm text-muted-foreground mb-6">
                      Timeline: {pkg.time}
                    </p>

                    <div className="space-y-3 flex-grow">
                      {pkg.features.map((item) => (
                        <div key={item} className="flex gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <Button size="lg" asChild>
                      <Link href="./contact/contact-form">
                         Get Started
                      </Link>
                    </Button>

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Accordion FAQ Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <FAQJsonLd faqs={ghlFaqs} />
          <ParallaxSection
            speed={0.1}
            className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none"
          >
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </ParallaxSection>

          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                  Got Questions?
                </p>
                <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {ghlFaqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="rounded-2xl border border-border bg-card overflow-hidden transition-all">
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-6 text-left"
                      aria-expanded={openIndex === index}
                    >
                      <h3 className="text-lg font-semibold pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 background sidebar-ring relative overflow-hidden">
  {/* Diagonal Grid Pattern Background */}
  <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[linear-gradient(45deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:100px_100px] pointer-events-none" />

  {/* Content Container */}
  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold">
        Ready to Automate Your Business?
      </h2>

      <p className="mt-6 text-lg opacity-90">
        Whether you need a complete GoHighLevel setup, AI-powered
        automation, or custom integrations, our team is ready to build a
        solution tailored to your business.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
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
