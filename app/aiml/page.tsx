"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronDown,
  Brain,
  Bot,
  Database,
  MessageSquare,
  Workflow, 
  BarChart3,
  Cpu,
  Search,
  Zap,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TiltCard } from "@/components/interactive/page"

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "AI-powered agents that can understand requests, perform tasks, and connect with your existing business systems.",
    items: [
      "AI task automation",
      "Business process agents",
      "Tool-connected AI agents",
      "Multi-step workflows",
      "Agent integrations",
      "AI-powered assistants",
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Machine learning solutions designed around real business problems, data, and measurable use cases.",
    items: [
      "Model development",
      "Model training",
      "Prediction systems",
      "Classification models",
      "Recommendation systems",
      "Model deployment",
    ],
  },
  {
    icon: MessageSquare,
    title: "LLM Applications",
    description:
      "Practical applications built around large language models for search, assistants, content, and business workflows.",
    items: [
      "LLM integrations",
      "AI assistants",
      "Prompt engineering",
      "Structured AI outputs",
      "AI workflows",
      "Custom AI applications",
    ],
  },
  {
    icon: Search,
    title: "RAG & Knowledge Systems",
    description:
      "AI systems that retrieve relevant information from your documents and knowledge sources before generating responses.",
    items: [
      "Document processing",
      "Vector search",
      "Knowledge bases",
      "Semantic search",
      "RAG pipelines",
      "Source-aware responses",
    ],
  },
  {
    icon: Database,
    title: "Data Pipelines",
    description:
      "Reliable data pipelines that collect, process, transform, and prepare information for analytics and AI systems.",
    items: [
      "Data ingestion",
      "Data transformation",
      "ETL pipelines",
      "Data processing",
      "Database integration",
      "AI-ready datasets",
    ],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Connect AI with business workflows to reduce repetitive manual work and improve operational efficiency.",
    items: [
      "Workflow automation",
      "AI-powered processes",
      "API integrations",
      "CRM automation",
      "Document automation",
      "Business process integration",
    ],
  },
]

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We identify the business problem, users, existing systems, available data, and the outcome the AI solution needs to achieve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We determine the appropriate architecture, models, data sources, integrations, and workflow for the solution.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop the AI application, data pipeline, model, agent, or automation and connect it to the required systems.",
  },
  {
    number: "04",
    title: "Evaluate",
    description:
      "We test outputs, workflows, performance, reliability, and edge cases before moving the system toward production.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "The solution is deployed into the appropriate infrastructure and integrated with the systems your team already uses.",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "AI systems can be monitored and refined over time as requirements, data, users, and business processes evolve.",
  },
]

const useCases = [
  {
    title: "AI Customer Support",
    description:
      "Assist customers with questions, documentation, product information, and common support workflows.",
  },
  {
    title: "Document Intelligence",
    description:
      "Process and retrieve information from large collections of documents and structured or unstructured data.",
  },
  {
    title: "AI Sales Assistants",
    description:
      "Help sales teams qualify leads, retrieve information, automate follow-ups, and support customer conversations.",
  },
  {
    title: "Business Automation",
    description:
      "Use AI and automation to handle repetitive processes and connect different tools across your organization.",
  },
  {
    title: "Knowledge Assistants",
    description:
      "Give teams a conversational interface for finding information across internal documents and knowledge sources.",
  },
  {
    title: "Predictive Systems",
    description:
      "Use machine learning models to identify patterns, make predictions, and support data-driven decisions.",
  },
]

const technologies = [
  "Python",
  "FastAPI",
  "Node.js",
  "OpenAI APIs",
  "LLM APIs",
  "RAG",
  "Vector Databases",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Celery",
  "Cloud Infrastructure",
]

const packages = [
  {
    name: "AI Discovery",
    price: "Let's Discuss",
    description:
      "For businesses exploring how AI can solve a specific operational or customer-facing problem.",
    features: [
      "Business problem analysis",
      "AI use-case identification",
      "Technical feasibility review",
      "Solution architecture",
      "Technology recommendations",
      "Implementation roadmap",
    ],
    popular: true,
  },
  {
    name: "AI Application",
    price: "Let's Discuss",
    description:
      "For businesses that need a working AI application, assistant, automation, or knowledge system.",
    features: [
      "AI solution architecture",
      "Model or API integration",
      "Application development",
      "Data integration",
      "Testing and evaluation",
      "Deployment support",
    ],
    popular: true,
  },
  {
    name: "Custom AI System",
    price: "Let's Discuss",
    description:
      "For more complex AI projects involving multiple systems, data pipelines, agents, or custom infrastructure.",
    features: [
      "Custom AI architecture",
      "AI agents or RAG",
      "Data pipelines",
      "System integrations",
      "Cloud deployment",
      "Ongoing improvements",
    ],
    popular: true,
  },
]

const faqs = [
  {
    question: "What AI and machine learning services do you offer?",
    answer:
      "We work on AI agents, LLM applications, RAG and knowledge systems, machine learning models, data pipelines, and AI-powered business automation.",
  },
  {
    question: "Can you build a custom AI agent?",
    answer:
      "Yes. AI agents can be designed around specific business workflows and connected to tools, APIs, databases, CRMs, and other systems where appropriate.",
  },
  {
    question: "What is RAG?",
    answer:
      "Retrieval-Augmented Generation, or RAG, allows an AI application to retrieve relevant information from a knowledge source before generating a response. This can be useful for company documents, product information, internal knowledge, and other specialized data.",
  },
  {
    question: "Can you connect AI to our existing systems?",
    answer:
      "Yes. AI applications can be integrated with existing APIs, databases, CRMs, websites, internal tools, and other software depending on the available integrations.",
  },
  {
    question: "Do we need our own AI model?",
    answer:
      "Not necessarily. Depending on the project, an existing model or API may be the most practical option. Custom model development can be considered when the requirements and available data justify it.",
  },
  {
    question: "Can you work with our existing data?",
    answer:
      "Yes. We can assess available data and determine how it can be processed, structured, retrieved, or used within an AI or machine learning system.",
  },
  {
    question: "Can AI systems be integrated with GoHighLevel?",
    answer:
      "Yes. Depending on the workflow, AI applications can be connected with GoHighLevel and other business systems through available APIs and integrations.",
  },
  {
    question: "How long does an AI project take?",
    answer:
      "The timeline depends heavily on the complexity of the system, integrations, data requirements, testing, and deployment environment. A focused AI application will generally require a different scope from a larger production AI platform.",
  },
]

export default function AIMLPage() {
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
                    AI & Machine Learning
                  </p>

                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    AI Systems Built for{" "}
                    <span className="text-primary">
                      Real Business Problems
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    We build practical AI applications, intelligent agents,
                    machine learning systems, RAG pipelines, and automation
                    that connect with the software your business already uses.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Discuss an AI Project

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/portfolio"
                      className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      View Our Work
                    </Link>

                  </div>

                </div>

              </ScrollReveal>

              {/* AI VISUAL */}

              <ScrollReveal delay={150}>
                <TiltCard className="mx-auto w-full max-w-xl">
  <div className="mx-auto hidden w-full max-w-xl md:block">
    <div className="rounded-3xl border border-border bg-card p-4 shadow-2xl">
      <div className="rounded-2xl border border-border bg-background p-6">
        <div className="flex items-center justify-between border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="h-3 w-32 rounded bg-muted" />
              <div className="mt-2 h-2 w-24 rounded bg-muted" />
            </div>
          </div>
          <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            AI System
          </div>
        </div>
        <div className="py-7">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="h-3 w-24 rounded bg-muted" />
                <div className="mt-3 h-2 w-full rounded bg-muted" />
                <div className="mt-2 h-2 w-4/5 rounded bg-muted" />
              </div>
            </div>
            <div className="my-4 flex justify-center">
              <div className="h-8 w-px bg-border" />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border p-4 text-center">
                <Database className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-3 h-2 w-14 mx-auto rounded bg-muted" />
              </div>
              <div className="rounded-xl border border-border p-4 text-center">
                <Cpu className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-3 h-2 w-14 mx-auto rounded bg-muted" />
              </div>
              <div className="rounded-xl border border-border p-4 text-center">
                <Workflow className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-3 h-2 w-14 mx-auto rounded bg-muted" />
              </div>
            </div>
            <div className="mt-5 rounded-xl bg-primary/5 p-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium"> AI → Data → Automation </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Connect intelligence with real business workflows.
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
                Practical AI Engineering
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                AI should solve a problem, not just look impressive
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                We focus on identifying useful applications for AI and
                integrating them into real workflows. From knowledge
                assistants and document systems to AI agents and predictive
                models, the technology should serve a clear purpose.
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
                  Our AI Services
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  AI Solutions Across the Stack
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  From individual AI features to complete AI-powered
                  systems and business workflows.
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

        {/* =========================
            USE CASES
        ========================= */}
        <section className="border-y border-border py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  AI Use Cases
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Where AI Can Fit Into Your Business
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  The right solution depends on your workflow, data,
                  customers, and business objectives.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {useCases.map((useCase, index) => (

                <ScrollReveal
                  key={useCase.title}
                  delay={index * 75}
                >

                  <div className="h-full rounded-2xl border border-border bg-card p-7">

                    <h3 className="text-xl font-semibold">
                      {useCase.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {useCase.description}
                    </p>

                  </div>

                </ScrollReveal>

              ))}

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
                  From Problem to Production
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  We approach AI projects as engineering projects,
                  starting with the business problem and ending with a
                  usable system.
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
            TECHNOLOGY
        ========================= */}
        <section className="border-y border-border py-24 lg:py-32">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <ScrollReveal>

                <div>

                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Technology
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Built With Modern AI Infrastructure
                  </h2>

                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    We choose technologies based on the requirements of
                    each project rather than forcing every solution into
                    the same stack.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-8 inline-flex items-center text-sm font-medium text-primary"
                  >
                    Discuss your technology requirements

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>

              </ScrollReveal>

              <ScrollReveal delay={150}>

                <div className="grid gap-3 sm:grid-cols-2">

                  {technologies.map((technology) => (

                    <div
                      key={technology}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                    >

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">

                        <Check className="h-4 w-4 text-primary" />

                      </div>

                      <span className="text-sm font-medium">
                        {technology}
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
                  AI Engagements
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Start With the Right Scope
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  AI projects vary significantly in complexity, so we
                  scope the engagement around your actual requirements.
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
                      Discuss Your AI Project
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
                  AI & Machine Learning Questions
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Common questions about building AI systems and
                  integrating them into existing businesses.
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

        {/* =========================
            CTA
        ========================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Build With AI
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Have an AI Problem Worth Solving?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Tell us what you want to automate, improve, predict, or
                build. We'll help you determine what kind of AI system
                makes sense for your requirements.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Discuss an AI Project

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