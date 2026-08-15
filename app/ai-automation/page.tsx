"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Workflow,
  Zap, 
  MessageSquare,
  Phone,
  Database,
  Mail,
  GitBranch,
  Settings,
  Brain,
  Plug,
  BarChart3,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TiltCard } from "@/components/interactive/page"

const automationServices = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Intelligent agents that can understand requests, make decisions, use tools, and complete business tasks.",
    items: [
      "AI customer support agents",
      "Lead qualification agents",
      "Internal business assistants",
      "Task automation agents",
      "Tool-connected AI agents",
      "Custom AI workflows",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes and connect the applications your team already uses.",
    items: [
      "Multi-step workflows",
      "Trigger-based automation",
      "Approval workflows",
      "Data synchronization",
      "Task automation",
      "Process optimization",
    ],
  },
  {
    icon: MessageSquare,
    title: "AI Chat Automation",
    description:
      "AI-powered conversations that help answer questions, qualify leads, and move customers through your sales process.",
    items: [
      "Website AI chat",
      "Lead qualification",
      "FAQ automation",
      "Knowledge-based responses",
      "Appointment booking",
      "CRM integration",
    ],
  },
  {
    icon: Phone,
    title: "AI Voice Automation",
    description:
      "AI voice systems designed to handle inbound conversations, qualify callers, and automate booking workflows.",
    items: [
      "Inbound AI voice agents",
      "Missed-call automation",
      "Lead qualification",
      "Appointment booking",
      "Call routing",
      "CRM updates",
    ],
  },
  {
    icon: Database,
    title: "Data Automation",
    description:
      "Move and transform information automatically between databases, CRMs, APIs, spreadsheets, and other systems.",
    items: [
      "Data synchronization",
      "API automation",
      "Database workflows",
      "Lead management",
      "Automated reporting",
      "Data transformation",
    ],
  },
  {
    icon: Plug,
    title: "Custom Integrations",
    description:
      "Connect your existing software and services so information can move between systems without repetitive manual work.",
    items: [
      "REST API integrations",
      "CRM integrations",
      "Webhook automation",
      "Third-party APIs",
      "Custom backend integrations",
      "Business system connections",
    ],
  },
]

const useCases = [
  {
    icon: Zap,
    title: "Lead Management",
    description:
      "Automatically capture, qualify, route, and follow up with leads across your sales systems.",
  },
  {
    icon: MessageSquare,
    title: "Customer Support",
    description:
      "Handle common questions and support requests with AI while escalating more complex issues to your team.",
  },
  {
    icon: Phone,
    title: "Missed-Call Follow-Up",
    description:
      "Automatically respond to missed calls, collect information, qualify leads, and help schedule appointments.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Automate notifications, follow-ups, customer communication, and internal email workflows.",
  },
  {
    icon: Database,
    title: "CRM Automation",
    description:
      "Keep customer records updated automatically and trigger actions based on changes in your CRM.",
  },
  {
    icon: BarChart3,
    title: "Reporting Automation",
    description:
      "Collect information from multiple systems and turn it into recurring reports and business insights.",
  },
]

const process = [
  {
    number: "01",
    title: "Map the Workflow",
    description:
      "We identify repetitive tasks, bottlenecks, systems involved, and the outcome you want the automation to achieve.",
  },
  {
    number: "02",
    title: "Design the Automation",
    description:
      "We define triggers, actions, conditions, AI decisions, integrations, and the overall workflow architecture.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "We connect your applications, APIs, databases, CRM, AI services, and automation workflows.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "We test the workflow against normal scenarios, edge cases, failures, and unexpected inputs.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "The automation is deployed into your production workflow with the appropriate permissions and integrations.",
  },
  {
    number: "06",
    title: "Monitor & Improve",
    description:
      "We monitor the workflow and refine it as your processes, customers, and business requirements change.",
  },
]

const integrations = [
  "GoHighLevel",
  "OpenAI",
  "Google Workspace",
  "Slack",
  "Microsoft Teams",
  "Shopify",
  "WordPress",
  "HubSpot",
  "Salesforce",
  "REST APIs",
  "Webhooks",
  "Custom Databases",
]

const packages = [
  {
    name: "Automation Audit",
    price: "Let's Discuss",
    description:
      "For businesses that want to identify where automation and AI can save time or improve operations.",
    features: [
      "Workflow review",
      "Automation opportunities",
      "Process analysis",
      "Integration assessment",
      "AI use-case recommendations",
      "Automation roadmap",
    ],
  },
  {
    name: "AI Automation Build",
    price: "Let's Discuss",
    description:
      "For businesses ready to automate a specific workflow or customer-facing process.",
    features: [
      "Custom workflow design",
      "AI integration",
      "API integrations",
      "CRM integration",
      "Testing",
      "Deployment support",
    ],
    popular: true,
  },
  {
    name: "Custom Automation System",
    price: "Let's Discuss",
    description:
      "For complex businesses that need multiple workflows, integrations, AI agents, or custom infrastructure.",
    features: [
      "Multiple automated workflows",
      "AI agents",
      "Custom integrations",
      "CRM & database automation",
      "Monitoring",
      "Ongoing improvements",
    ],
  },
]

const faqs = [
  {
    question: "What is AI automation?",
    answer:
      "AI automation combines traditional workflow automation with AI capabilities. Instead of only following fixed rules, an automated system can use AI to understand information, classify requests, generate responses, or make decisions within a defined workflow.",
  },
  {
    question: "What business processes can you automate?",
    answer:
      "Depending on the business, automation can be applied to lead management, customer support, CRM updates, appointment booking, email workflows, data synchronization, reporting, document processing, and many other repetitive processes.",
  },
  {
    question: "Can you integrate AI automation with GoHighLevel?",
    answer:
      "Yes. AI automation can be connected with GoHighLevel workflows, pipelines, calendars, forms, conversations, and other systems through available integrations and APIs.",
  },
  {
    question: "Can you connect our existing software?",
    answer:
      "Yes. We can work with APIs, webhooks, databases, CRMs, SaaS platforms, and other systems where appropriate integration methods are available.",
  },
  {
    question: "Will automation completely replace our team?",
    answer:
      "Not necessarily. The goal is usually to reduce repetitive work and allow people to focus on tasks that require judgment, creativity, relationships, or specialized expertise. Human approval can also be built into automated workflows.",
  },
  {
    question: "Can AI automation handle customer conversations?",
    answer:
      "Yes. AI chat and voice systems can be designed for specific customer-facing workflows such as answering common questions, collecting information, qualifying leads, and helping with appointment booking.",
  },
  {
    question: "How long does an automation project take?",
    answer:
      "The timeline depends on the number of workflows, systems involved, integrations, AI requirements, testing, and deployment complexity. A single focused workflow is significantly different from a company-wide automation system.",
  },
]

export default function AIAutomationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Header />

      <main>

        {/* =========================
            HERO
        ========================= */}
        <section className="relative overflow-hidden py-24 lg:py-32">

          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              <ScrollReveal>

                <div>

                  <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    AI Automation
                  </p>

                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    Automate Your Business With{" "}
                    <span className="text-primary">
                      AI-Powered Workflows
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    We build AI agents, automated workflows, integrations,
                    and intelligent business systems that reduce repetitive
                    work and connect the tools your team already uses.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Automate Your Workflow

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/gohighlevel"
                      className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      Explore GoHighLevel
                    </Link>

                  </div>

                </div>

              </ScrollReveal>

              {/* AUTOMATION VISUAL */}

              <ScrollReveal delay={150} className="hidden md:block">
                <TiltCard className="mx-auto w-full max-w-xl">
  <div className="mx-auto w-full max-w-xl">
    <div className="rounded-3xl border border-border bg-card p-5 shadow-2xl">
      <div className="rounded-2xl border border-border bg-background p-6">
        <div className="flex items-center justify-between border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <Workflow className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">
                Automated Workflow
              </p>
              <p className="text-xs text-muted-foreground">
                AI-powered business process
              </p>
            </div>
          </div>
          <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Active
          </div>
        </div>
        <div className="space-y-3 py-6">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">
                New Lead Received
              </p>
              <p className="text-xs text-muted-foreground">
                Trigger workflow
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

        {/* =========================
            INTRO
        ========================= */}
        <section className="border-y border-border py-20">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Intelligent Automation
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Turn repetitive processes into automated systems
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Many businesses rely on people to repeatedly move data,
                respond to messages, update CRMs, send follow-ups, and
                perform routine tasks. We help turn those processes into
                connected workflows using automation, APIs, and AI.
              </p>

            </ScrollReveal>

          </div>

        </section>

        {/* =========================
            SERVICES
        ========================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  What We Automate
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  AI Automation Services
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  From individual workflows to complete AI-powered
                  business automation systems.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">

              {automationServices.map((service, index) => {

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

        {/* =========================
            USE CASES
        ========================= */}
        <section className="border-y border-border py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Use Cases
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  What Can You Automate?
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Automation can be applied to almost any repetitive,
                  rule-based, or information-heavy business process.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {useCases.map((useCase, index) => {

                const Icon = useCase.icon

                return (

                  <ScrollReveal
                    key={useCase.title}
                    delay={index * 75}
                  >

                    <div className="h-full rounded-2xl border border-border bg-card p-7">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <h3 className="mt-5 text-xl font-semibold">
                        {useCase.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {useCase.description}
                      </p>

                    </div>

                  </ScrollReveal>

                )
              })}

            </div>

          </div>

        </section>

        {/* =========================
            PROCESS
        ========================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Our Process
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  From Manual Process to Automated Workflow
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  We build automation around your actual business
                  process rather than forcing your workflow into a
                  generic template.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {process.map((step, index) => (

                <ScrollReveal
                  key={step.number}
                  delay={index * 75}
                >

                  <div className="h-full rounded-2xl border border-border bg-card p-7">

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

        {/* =========================
            INTEGRATIONS
        ========================= */}
        <section className="border-y border-border py-24 lg:py-32">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <ScrollReveal>

                <div>

                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Integrations
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Connect the Tools You Already Use
                  </h2>

                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    Your automation should work with your existing
                    technology. We connect CRMs, communication tools,
                    websites, databases, APIs, and business platforms
                    into a single workflow.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-8 inline-flex items-center text-sm font-medium text-primary"
                  >
                    Discuss an integration

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>

              </ScrollReveal>

              <ScrollReveal delay={150}>

                <div className="grid gap-3 sm:grid-cols-2">

                  {integrations.map((integration) => (

                    <div
                      key={integration}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                    >

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">

                        <Plug className="h-4 w-4 text-primary" />

                      </div>

                      <span className="text-sm font-medium">
                        {integration}
                      </span>

                    </div>

                  ))}

                </div>

              </ScrollReveal>

            </div>

          </div>

        </section>

        {/* =========================
            PACKAGES
        ========================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Automation Packages
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Start With the Right Automation
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Every automation project is different. We scope the
                  work around your actual workflow and requirements.
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
                      Discuss Automation
                    </Link>

                  </div>

                </ScrollReveal>

              ))}

            </div>

          </div>

        </section>

        {/* =========================
            FAQ
        ========================= */}
        <section className="border-y border-border py-24 lg:py-32">

          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="mb-12 text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  FAQ
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  AI Automation Questions
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Common questions about AI-powered business automation.
                </p>

              </div>

            </ScrollReveal>

            <div className="space-y-4">

              {faqs.map((faq, index) => (

                <ScrollReveal
                  key={faq.question}
                  delay={index * 50}
                >

                  <div className="overflow-hidden rounded-2xl border border-border bg-card">

                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(
                          openIndex === index
                            ? null
                            : index
                        )
                      }
                      className="flex w-full items-center justify-between p-6 text-left"
                      aria-expanded={
                        openIndex === index
                      }
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

        {/* =========================
            CTA
        ========================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Automate Smarter
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready to Automate Your Workflow?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Tell us which process is slowing your team down. We'll
                help you identify where AI, automation, and integrations
                can make the biggest difference.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Book a Consultation

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/gohighlevel"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  GoHighLevel Automation
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