"use client"

import Link from "next/link"
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  MessageSquare, 
  PhoneCall,
  Workflow,
  Database,
  Plug,
  ShieldCheck,
  Zap,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const agentServices = [
  {
    icon: MessageSquare,
    title: "AI Chat Agents",
    description:
      "Intelligent chat agents that answer questions, qualify leads, provide information, and support customers around the clock.",
  },
  {
    icon: PhoneCall,
    title: "AI Voice Agents",
    description:
      "AI-powered voice agents that can handle inbound calls, qualify callers, answer common questions, and help schedule appointments.",
  },
  {
    icon: Workflow,
    title: "Business Process Agents",
    description:
      "AI agents that automate repetitive business tasks and connect multiple steps in your existing workflows.",
  },
  {
    icon: Database,
    title: "Knowledge-Based Agents",
    description:
      "Agents connected to your business documents, knowledge bases, and internal information to provide context-aware responses.",
  },
  {
    icon: Plug,
    title: "AI Integrations",
    description:
      "Connect AI agents with CRMs, calendars, databases, APIs, communication platforms, and other business tools.",
  },
  {
    icon: BrainCircuit,
    title: "Custom AI Agents",
    description:
      "Custom agent systems designed around your specific business process, requirements, and technical environment.",
  },
]

const capabilities = [
  "Lead qualification",
  "Customer support",
  "Appointment booking",
  "FAQ automation",
  "Document-based answers",
  "CRM updates",
  "Email automation",
  "Data retrieval",
  "Workflow automation",
  "API integrations",
  "Voice interactions",
  "Internal business assistants",
]

const technologies = [
  "LLM APIs",
  "RAG",
  "Vector Databases",
  "REST APIs",
  "WebSockets",
  "Node.js",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Redis",
]

export default function AIAgentsPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden py-28 lg:py-36">

  <div className="absolute inset-0 -z-10 opacity-10 hidden lg:block">
    <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
  </div>

  <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">

    <ScrollReveal>

      <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
        AI Agents
      </p>

      <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        AI Agents That{" "}
        <span className="text-primary">
          Work for Your Business
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        We build intelligent AI agents that can communicate with
        customers, retrieve information, qualify leads, automate
        workflows, and connect with the systems your business already
        uses.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

        <Link
          href="/contact"
          className="group inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Build an AI Agent
 
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="/gohighlevel"
          className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Explore AI + GoHighLevel
        </Link>

      </div>

    </ScrollReveal>

  </div>

</section>


        {/* ================= INTRO ================= */}
        <section className="border-y border-border py-20 lg:py-28">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <ScrollReveal>

                <div>

                  <p className="text-sm font-medium uppercase tracking-wider text-primary">
                    Beyond Chatbots
                  </p>

                  <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                    AI agents built to take action
                  </h2>

                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    Traditional chatbots mostly respond to predefined
                    questions. AI agents can understand context, work with
                    information, interact with tools, and perform tasks based
                    on the instructions and systems they are connected to.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    We design agents around real business workflows rather
                    than building AI demos that look impressive but provide
                    little practical value.
                  </p>

                </div>

              </ScrollReveal>

              <ScrollReveal delay={150}>

                <div className="rounded-2xl border border-border bg-card p-8">

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Bot className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    From conversation to action
                  </h3>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    An AI agent can understand a request, retrieve relevant
                    information, interact with connected tools, and help
                    complete the next step in a workflow.
                  </p>

                </div>

              </ScrollReveal>

            </div>

          </div>

        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="mx-auto mb-14 max-w-3xl text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  What We Build
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  AI Agent Solutions
                </h2>

                <p className="mt-5 text-muted-foreground">
                  Intelligent agents designed around the way your business
                  actually operates.
                </p>

              </div>

            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {agentServices.map((service, index) => {

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

        {/* ================= USE CASES ================= */}
        <section className="border-y border-border py-20 lg:py-28">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Use Cases
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  What Can an AI Agent Do?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
                  AI agents can be designed for different parts of your
                  customer journey and internal operations.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {capabilities.map((capability, index) => (

                <ScrollReveal
                  key={capability}
                  delay={index * 40}
                >

                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">

                    <Zap className="h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm font-medium">
                      {capability}
                    </span>

                  </div>

                </ScrollReveal>

              ))}

            </div>

          </div>

        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="mx-auto mb-14 max-w-3xl text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  How It Works
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  From Idea to Working Agent
                </h2>

              </div>

            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "We identify the business problem, workflow, users, and tasks the agent needs to handle.",
                },
                {
                  number: "02",
                  title: "Design",
                  text: "We define the agent's behavior, knowledge sources, tools, integrations, and conversation flow.",
                },
                {
                  number: "03",
                  title: "Build",
                  text: "We develop the agent and connect it with the APIs, databases, CRM, or other systems it needs.",
                },
                {
                  number: "04",
                  title: "Improve",
                  text: "We test the agent's responses and workflows and refine the system based on real usage.",
                },
              ].map((step, index) => (

                <ScrollReveal
                  key={step.number}
                  delay={index * 100}
                >

                  <div className="rounded-2xl border border-border bg-card p-6">

                    <span className="text-sm font-bold text-primary">
                      {step.number}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>

                  </div>

                </ScrollReveal>

              ))}

            </div>

          </div>

        </section>

        {/* ================= TECHNOLOGY ================= */}
        <section className="border-y border-border py-20 lg:py-28">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Technology
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  AI Agent Technology Stack
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
                  We choose technologies based on the requirements of the
                  agent and the systems it needs to work with.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-12 flex flex-wrap justify-center gap-3">

              {technologies.map((technology, index) => (

                <ScrollReveal
                  key={technology}
                  delay={index * 40}
                >

                  <div className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary">
                    {technology}
                  </div>

                </ScrollReveal>

              ))}

            </div>

          </div>

        </section>

        {/* ================= WHY US ================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="mx-auto mb-14 max-w-3xl text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Why Revolix
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  AI Built Around Your Business
                </h2>

              </div>

            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-3">

              <ScrollReveal>

                <div className="rounded-2xl border border-border bg-card p-7">

                  <BrainCircuit className="h-7 w-7 text-primary" />

                  <h3 className="mt-5 text-xl font-semibold">
                    Business-Focused
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    We start with the business problem and workflow instead
                    of forcing a generic AI solution onto your process.
                  </p>

                </div>

              </ScrollReveal>

              <ScrollReveal delay={100}>

                <div className="rounded-2xl border border-border bg-card p-7">

                  <Plug className="h-7 w-7 text-primary" />

                  <h3 className="mt-5 text-xl font-semibold">
                    Connected Systems
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Agents can be connected with the tools and platforms
                    your business already relies on.
                  </p>

                </div>

              </ScrollReveal>

              <ScrollReveal delay={200}>

                <div className="rounded-2xl border border-border bg-card p-7">

                  <ShieldCheck className="h-7 w-7 text-primary" />

                  <h3 className="mt-5 text-xl font-semibold">
                    Practical & Reliable
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    We focus on useful workflows, controlled behavior,
                    appropriate data access, and maintainable systems.
                  </p>

                </div>

              </ScrollReveal>

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}
        <section className="border-t border-border py-24 lg:py-32">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>

              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Build an AI Agent
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready to automate a real business workflow?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Tell us what you want your AI agent to do. We'll help you
                turn the workflow into a practical AI-powered system.
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