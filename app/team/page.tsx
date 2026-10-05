"use client"

import Link from "next/link"
import { ArrowRight, Linkedin, Github } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Image from "next/image"
import image1 from "./images/abdullahtwo.jpg"
import image2 from "./images/abdullah.jpg"
import image3 from "./images/abu-bakar.jpg"
import image4 from "./images/ahmed.jpg"
import image5 from "./images/abubakar.jpg"
import image6 from "./images/umer.jpg"
import image7 from "./images/bilal.jpg"
import image8 from "./images/shaheer.jpg"
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

const teamMembers = [
  {
    name: "Abdullah Usman",
    role: "AI Automation",
    specialization: "AI systems, LLM applications & automation",
    image: image1,
    linkedin: "https://www.linkedin.com/in/abdullah-usman-7b29223a5/",
    github: "",
  },
  {
    name: "Abdullah Hammad",
    role: "Backend developer",
    specialization: "APIs, databases & scalable backend systems",
    image: image2,
    linkedin: "https://www.linkedin.com/in/abdullah-hammad-8392642ab/",
    github: "",
  },
  {
    name: "Abu Bakar",
    role: "MERN stack Developer",
    specialization: "React, Next.js & modern web applications",
    image: image3,
    linkedin: "https://www.linkedin.com/in/abu-bakar-shahzad-239b1b400/",
    github: "",
  },
  {
    name: "Ahmed Raza",
    role: "AI Engineer ",
    specialization: "Builds multi Agent AI Platforms,LangGraph & FastAPI",
    image: image4,
    linkedin: "https://www.linkedin.com/in/ahmed-raza-ai/",
    github: "",
  },
  {
    name: "M.Abu Bakar",
    role: "Fullstack Developer",
    specialization: "full-stack web applications using the MERN stack. ",
    image: image5,
    linkedin: "https://www.linkedin.com/in/abubakar-fullstack-dev/",
    github: "",
  },
  {
    name: "Umer Imran",
    role: "UI/UX Designer",
    specialization: "Social media manager, interfaces & user experiences",
    image: image6,
    linkedin: "https://www.linkedin.com/in/muhammad-umer-0a3664400/",
    github: "",
  },
  {
    name: "Bilal Faraaz",
    role: "WordPress & Shopify Developer",
    specialization: "E-commerce, CMS & custom integrations",
    image: image7,
    linkedin: "https://www.linkedin.com/in/bilal-faraz-377b152ba/",
    github: "",
  },
  {
    name: "Muhammad Shaheer",
    role: "Upwork Manager & Agency Lead",
    specialization: "Business development, client acquisition & project management",
    image: image8,
    linkedin: "https://www.linkedin.com/in/muhammad-shaheer-14761639b/",
    github: "",
  },
]

// Derived directly from the roster above — not a separate claim to keep in
// sync by hand. Update teamMembers and this stays accurate.
const disciplines = [
  {
    title: "AI & Automation",
    count: 2,
    description: "AI systems, LLM applications, multi-agent platforms & workflow automation.",
  },
  {
    title: "Software Development",
    count: 4,
    description: "Backend, MERN stack, full-stack, and WordPress/Shopify development.",
  },
  {
    title: "UI/UX Design",
    count: 1,
    description: "Interfaces, user experience & social presence.",
  },
  {
    title: "Client & Delivery",
    count: 1,
    description: "Business development, client acquisition & project management.",
  },
]

export default function TeamPage() {
  return (
    <>
      <Header />

      <main>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "https://revolixtech.com/" },
            { name: "Team", item: "https://revolixtech.com/team" },
          ]}
        />

        {/* Hero */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                The Team
              </p>

              <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Meet the People Behind{" "}
                <span className="text-primary">Revolix Technologies</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                We are a team of engineers and designers based in Karachi,
                working across AI, backend, front-end, DevOps, automation,
                and product design to build practical digital systems.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Team Coverage — sets context for the grid below: one team
            spanning every discipline a client's project would touch,
            rather than 8 faces with no framing. */}
        {/* <section className="border-t border-border py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  How We&apos;re Structured
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  One Team, Four Disciplines
                </h2>

                <p className="mt-4 text-muted-foreground">
                  No handoffs between agencies. The same team that scopes
                  your project builds and ships it.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {disciplines.map((discipline) => (
                  <div
                    key={discipline.title}
                    className="hover-lift group rounded-xl border border-border bg-card px-5 py-3 transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out)] hover:border-primary/40 hover:shadow-lg"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {discipline.title}{" "}
                      <span className="text-muted-foreground">
                        · {discipline.count}
                      </span>
                    </p>
                    <p className="mt-1 max-w-52 text-xs leading-relaxed text-muted-foreground">
                      {discipline.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section> */}

        {/* Team Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Our People
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={index} delay={index * 75}>
                  <div className="hover-lift group relative aspect-[4/5] overflow-hidden rounded-xl bg-card shadow-lg ring-1 ring-border transition-shadow duration-200 ease-[var(--ease-out)] hover:shadow-xl hover:ring-primary/30">
                    {/* Image */}
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-card">
                        <p className="text-sm text-muted-foreground">
                          Photo coming soon
                        </p>
                      </div>
                    )}

                    {/* Subtle full-image tint for brand cohesion */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-transparent" />

                    {/* Solid darker panel behind text for legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-background via-background/90 to-transparent transition-[height] duration-200 ease-[var(--ease-out)] lg:h-[36%] lg:group-hover:h-[55%]" />

                    {/* Social links (top right) */}
                    {(member.linkedin || member.github) && (
                      <div className="absolute right-4 top-4 flex items-center gap-2">
                        {member.linkedin && (
                          <Link
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn`}
                            className="press-feedback rounded-lg border border-border bg-background/60 p-2 text-muted-foreground backdrop-blur-sm transition-colors duration-200 ease-[var(--ease-out)] hover:border-primary/40 hover:bg-background/80 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <Linkedin className="h-4 w-4" />
                          </Link>
                        )}

                        {member.github && (
                          <Link
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} GitHub`}
                            className="press-feedback rounded-lg border border-border bg-background/60 p-2 text-muted-foreground backdrop-blur-sm transition-colors duration-200 ease-[var(--ease-out)] hover:border-primary/40 hover:bg-background/80 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <Github className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    )}

                    {/* Info overlay (bottom left) */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-lg font-bold leading-tight text-primary">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-foreground/80">
                        {member.role}
                      </p>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-[max-height,opacity] lg:duration-200 lg:ease-[var(--ease-out)] lg:group-hover:max-h-24 lg:group-hover:opacity-100">
                        {member.specialization}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — deliberately not a restatement of Portfolio's CTA. That one
            sells the work; this one sells the people the visitor just
            scrolled past, since that's what's specific to this page. */}
        <section className="border-t border-border py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Work With This Team
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Want This Team on Your Project?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                The people above are who you&apos;d actually work with, not
                unnamed subcontractors. Tell us what you&apos;re building and
                we&apos;ll tell you who on the team it fits.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="press-feedback group inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Talk to the Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1" />
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