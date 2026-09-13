"use client"

import Link from "next/link"
import {
  ArrowRight,
  Cloud,
  Server,
  GitBranch,
  Container,
  ShieldCheck,
  Activity,
  Database,
  Zap,
  Settings,
  Cpu,
  Layers,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { TiltCard } from "@/components/interactive/page"


const services = [ 
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Design and configure cloud infrastructure for applications, APIs, databases, and business systems.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description:
      "Automated build, testing, and deployment pipelines that help teams release software more efficiently.",
  },
  {
    icon: Container,
    title: "Docker & Containers",
    description:
      "Containerized applications and deployment environments that make development and production workflows more consistent.",
  },
  {
    icon: Server,
    title: "Server & Deployment Setup",
    description:
      "Production server configuration, application deployment, environment management, and hosting setup.",
  },
  {
    icon: Activity,
    title: "Monitoring & Reliability",
    description:
      "Application and infrastructure monitoring designed to help identify problems and maintain reliable systems.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Infrastructure",
    description:
      "Infrastructure security practices including access control, environment separation, secrets management, and secure deployment.",
  },
]

const technologies = [
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "GitHub Actions",
  "GitLab CI/CD",
  "Nginx",
  "Linux",
  "Redis",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
]

const process = [
  {
    number: "01",
    title: "Assess",
    text: "We understand your application, infrastructure, deployment requirements, and operational challenges.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We design the cloud architecture, deployment workflow and infrastructure needed for your project.",
  }, 
  {
    number: "03",
    title: "Implement",
    text: "We configure infrastructure, deployments, containers, networking, monitoring, and required integrations.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "We review performance, reliability, security, and deployment workflows to improve the overall system.",
  },
]

export default function CloudDevOpsPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <BreadcrumbJsonLd items={[
         { name: "Home", item: "https://revolixtech.com/" },
         { name: "Cloud & DevOps", item: "https://revolixtech.com/devops" },
        ]} />

        {/* ================= HERO ================= */}
       <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Side: Content */}
          <div className="text-left">
            <ScrollReveal>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Cloud & DevOps
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Cloud Infrastructure{" "}
                <span className="text-primary">Built for Reliable Software</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                We design and manage cloud infrastructure, deployment pipelines, containers, servers, and monitoring systems that help applications run reliably in production.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 w-full sm:w-auto justify-center"
                >
                  Talk to Our Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary w-full sm:w-auto justify-center"
                >
                  View Our Work
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: DevOps & Cloud Widget */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <ScrollReveal>
              <TiltCard className="mx-auto w-full max-w-xl">
              <div className="relative h-[400px] w-full max-w-[440px] rounded-2xl border border-border/60 bg-background/50 p-6 backdrop-blur-md shadow-2xl">
                
                {/* Visual Background grid lines */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] rounded-2xl" />

                {/* Top Terminal Header Component */}
                <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-6">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-destructive/70" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/70" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">infrastructure.yaml</span>
                </div>

                {/* Floating Micro-widgets */}
                <div className="space-y-4">
                  
                  {/* Central Cloud Controller */}
                  <div className="flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4 transition-all hover:scale-[1.02]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Cloud className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">AWS / GCP Cluster</p>
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500">Active</span>
                      </div>
                      <p className="text-xs text-muted-foreground font-mono mt-0.5">Uptime: 99.99%</p>
                    </div>
                  </div>

                  {/* CI/CD Pipeline Widget */}
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card/40 p-4 transition-all hover:scale-[1.02]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                      <GitBranch className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">CI/CD Pipeline</p>
                      <div className="mt-1.5 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-4/5 rounded-full bg-amber-500 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Microservices Container Status */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 rounded-xl border border-border bg-card/40 p-3">
                      <Cpu className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">CPU Usage</p>
                        <p className="text-sm font-semibold font-mono">24%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-border bg-card/40 p-3">
                      <Layers className="h-4 w-4 text-indigo-500" />
                      <div>
                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Containers</p>
                        <p className="text-sm font-semibold font-mono">12 Running</p>
                      </div>
                    </div>
                  </div>

                  {/* Security Guard Widget */}
                  <div className="flex items-center justify-between rounded-xl border border-border bg-card/40 px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="h-4 w-4 text-emerald-500" />
                      <span className="text-xs font-medium">SSL & IAM Security Policies</span>
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground">Enforced</span>
                  </div>

                </div>
              </div>
              </TiltCard>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>

        {/* ================= INTRO ================= */}
        <section className="border-y border-border py-20 lg:py-28">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <ScrollReveal>

                <div>

                  <p className="text-sm font-medium uppercase tracking-wider text-primary">
                    Infrastructure That Works
                  </p>

                  <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                    From development to production
                  </h2>

                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    Deploying an application is only one part of running
                    software. Your infrastructure also needs appropriate
                    environments, deployment workflows, security controls,
                    monitoring, and reliable configuration.
                  </p>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Our Cloud and DevOps services help businesses establish
                    practical infrastructure around their applications so
                    development and production environments can work together
                    more efficiently.
                  </p>

                </div>

              </ScrollReveal>

              <ScrollReveal delay={150}>

                <div className="rounded-2xl border border-border bg-card p-8">

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Cloud className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    Cloud infrastructure for modern applications
                  </h3>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    We work with cloud platforms, containers, deployment
                    pipelines, servers, databases, and monitoring tools to
                    create infrastructure suited to your application's needs.
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
                  What We Do
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Cloud & DevOps Services
                </h2>

                <p className="mt-5 text-muted-foreground">
                  Practical infrastructure and deployment solutions for
                  applications at different stages of development.
                </p>

              </div>

            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

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

        {/* ================= DEVOPS FEATURES ================= */}
        <section className="border-y border-border py-20 lg:py-28">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  DevOps Capabilities
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Build, Deploy & Operate
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
                  We help connect development workflows with reliable
                  production infrastructure.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {[
                "Automated deployments",
                "Development & production environments",
                "Containerized applications",
                "Cloud server configuration",
                "Environment variables & secrets",
                "Application monitoring",
                "Database deployment",
                "Reverse proxy configuration",
                "Infrastructure optimization",
              ].map((item, index) => (

                <ScrollReveal
                  key={item}
                  delay={index * 50}
                >

                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">

                    <Zap className="h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm font-medium">
                      {item}
                    </span>

                  </div>

                </ScrollReveal>

              ))}

            </div>

          </div>

        </section>

        {/* ================= TECHNOLOGIES ================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Technology Stack
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Cloud & DevOps Technologies
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
                  We choose infrastructure and deployment technologies based
                  on your application's requirements.
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

        {/* ================= PROCESS ================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Our Process
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  From Infrastructure Planning to Production
                </h2>

              </div>

            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-4">

              {process.map((step, index) => (

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

        {/* ================= CTA ================= */}
        <section className="border-t border-border py-24 lg:py-32">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>

              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Cloud & DevOps
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Need reliable infrastructure for your application?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Tell us about your application and infrastructure requirements.
                We'll help you plan the right deployment and cloud setup.
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