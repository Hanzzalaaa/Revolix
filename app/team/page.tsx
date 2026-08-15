"use client"

import Link from "next/link"
import { ArrowRight, Linkedin, Github , Instagram} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import image1 from "./images/abdullahtwo.jpg"
import image2 from "./images/abdullah.jpg"
import image3 from "./images/abu-bakar.jpg"
import image4 from "./images/ahmed.jpg"
import image5 from "./images/abubakar.jpg"
import image6 from "./images/umer.jpg"
import image7 from "./images/bilal.jpg"
import image8 from "./images/hussain.jpg"

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
    specialization: "Builds multi Agent AI Platforms,LangGraph · FastAPI",
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
    name: "Hussain Kashif",
    role: "Lead Generator",
    specialization: "Sales, Freelance, Lead Generator and Front-End Developer",
    image: image8,
    linkedin: "https://www.linkedin.com/in/hussain-kashif-b69aa8384/",
    github: "",
  },
]

export default function TeamPage() {
  return (
    <>
      <Header />

      <main>
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

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Meet the People Behind{" "}
                <span className="text-primary">
                  Revolix Technologies
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                We are a team of engineers and designers based in Karachi,
                working across AI, backend, front-end, DevOps, automation,
                and product design to build practical digital systems.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Team Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Our People
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  A Team Built to Ship
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Engineers and creatives bringing different skills together
                  to solve complex business and technical problems.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={index} delay={index * 75}>
                  <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                      {member.image ? (
                        <img
                          src={member.image.src}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center">
                          <p className="text-sm text-muted-foreground">
                            Photo coming soon
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Information */}
                    <div className="p-6">

                      <h3 className="text-xl font-semibold">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-primary">
                        {member.role}
                      </p>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {member.specialization}
                      </p>

                      {/* Social Links */}
                      {(member.linkedin || member.github) && (
                        <div className="mt-5 flex items-center gap-3">

                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${member.name} LinkedIn`}
                              className="rounded-lg border border-border p-2 transition-colors hover:bg-muted"
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
                              className="rounded-lg border border-border p-2 transition-colors hover:bg-muted"
                            >
                              <Github className="h-4 w-4" />
                            </Link>
                          )}

                        </div>
                      )}

                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Work With Us
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Have a project in mind?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Tell us what you're building. Our team can help turn your idea
                into a working digital system.
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