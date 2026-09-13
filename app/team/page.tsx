"use client"

import Link from "next/link"
import {  ArrowRight, Cloud, Code2, Cpu, Sparkles, Terminal, Boxes, Wand2, Linkedin, Github, Instagram } from "lucide-react"
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

export default function TeamPage() {
  return (
    <>
      <Header />

      <main>
        <BreadcrumbJsonLd items={[
          { name: "Home", item: "https://revolixtech.com/" },
          { name: "Team", item: "https://revolixtech.com/team" },
        ]} />
        {/* Hero */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </div>

          {/* Floating background widgets */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div
              className="absolute left-[8%] top-[18%] flex items-center gap-2 rounded-xl border border-cyan-400/10 bg-[#0a1420]/60 px-3 py-2 shadow-lg backdrop-blur-sm"
              style={{ animation: "float-y 6s ease-in-out infinite" }}
            >
              <Cpu className="h-4 w-4 text-cyan-300/70" />
              <span className="text-xs font-medium text-slate-300/70">AI/ML</span>
            </div>

            <div
              className="absolute right-[10%] top-[12%] flex items-center gap-2 rounded-xl border border-cyan-400/10 bg-[#0a1420]/60 px-3 py-2 shadow-lg backdrop-blur-sm"
              style={{ animation: "float-y 7s ease-in-out infinite", animationDelay: "0.8s" }}
            >
              <Cloud className="h-4 w-4 text-cyan-300/70" />
              <span className="text-xs font-medium text-slate-300/70">DevOps</span>
            </div>

            <div
              className="absolute left-[16%] top-[62%] flex items-center gap-2 rounded-xl border border-cyan-400/10 bg-[#0a1420]/60 px-3 py-2 shadow-lg backdrop-blur-sm"
              style={{ animation: "float-y 8s ease-in-out infinite", animationDelay: "1.6s" }}
            >
              <Code2 className="h-4 w-4 text-cyan-300/70" />
              <span className="text-xs font-medium text-slate-300/70">Front-end</span>
            </div>

            <div
              className="absolute right-[14%] bottom-[16%] flex items-center gap-2 rounded-xl border border-cyan-400/10 bg-[#0a1420]/60 px-3 py-2 shadow-lg backdrop-blur-sm"
              style={{ animation: "float-y 6.5s ease-in-out infinite", animationDelay: "0.4s" }}
            >
              <Terminal className="h-4 w-4 text-cyan-300/70" />
              <span className="text-xs font-medium text-slate-300/70">Backend</span>
            </div>

            <div
              className="absolute left-[42%] bottom-[8%] flex items-center gap-2 rounded-xl border border-cyan-400/10 bg-[#0a1420]/60 px-3 py-2 shadow-lg backdrop-blur-sm"
              style={{ animation: "float-y 7.5s ease-in-out infinite", animationDelay: "1.2s" }}
            >
              <Boxes className="h-4 w-4 text-cyan-300/70" />
              <span className="text-xs font-medium text-slate-300/70">Automation</span>
            </div>

            <div
              className="absolute right-[6%] top-[46%] flex items-center gap-2 rounded-xl border border-cyan-400/10 bg-[#0a1420]/60 px-3 py-2 shadow-lg backdrop-blur-sm"
              style={{ animation: "float-y 9s ease-in-out infinite", animationDelay: "2s" }}
            >
              <Sparkles className="h-4 w-4 text-cyan-300/70" />
              <span className="text-xs font-medium text-slate-300/70">Designs</span>
            </div>
          </div>

          <style>{`
            @keyframes float-y {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-14px);
              }
            }
          `}</style>

          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 mt-13">
            <ScrollReveal>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                The Team
              </p>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
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

        {/* Team Grid */}
        <section className="pb-24 lg:pb-32 mt-20">
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
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0a1420] shadow-lg ring-1 ring-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-cyan-400/30">
                    {/* Image */}
                    {member.image ? (
                      <img
                        src={member.image.src}
                        alt={member.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[#0a1420]">
                        <p className="text-sm text-slate-400">
                          Photo coming soon
                        </p>
                      </div>
                    )}

                    {/* Subtle full-image tint for brand cohesion */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a1420]/10 via-transparent to-transparent" />

                    {/* Solid darker panel behind text for legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#050b14] via-[#050b14]/90 to-transparent transition-all duration-300 lg:h-[36%] lg:group-hover:h-[55%]" />

                    {/* Social Links (top right) */}
                    {(member.linkedin || member.github) && (
                      <div className="absolute right-4 top-4 flex items-center gap-2">
                        {member.linkedin && (
                          <Link
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn`}
                            className="rounded-lg  bg-[#050b14]/60 p-2  backdrop-blur-sm transition-colors hover:border-orange-400/40 hover:bg-[#050b14]/80 hover:text-teal-400"
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
                            className="rounded-lg border border-cyan-400/20 bg-[#050b14]/60 p-2 text-cyan-300 backdrop-blur-sm transition-colors hover:border-orange-400/40 hover:bg-[#050b14]/80 hover:text-orange-300"
                          >
                            <Github className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    )}

                    {/* Info overlay (bottom left) */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-lg font-bold leading-tight text-teal-400">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-aquawhite-300">
                        {member.role}
                      </p>

                      <p className="mt-2 text-xs leading-relaxed text-slate-300/70 lg:max-h-0 lg:opacity-0 lg:overflow-hidden lg:transition-all lg:duration-300 lg:group-hover:max-h-24 lg:group-hover:opacity-100">
                        {member.specialization}
                      </p>
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