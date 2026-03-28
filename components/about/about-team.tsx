"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Code2, Search, Sparkles } from "lucide-react"

const teamGroups = [
  {
    icon: Code2,
    title: "Developers",
    description: "Full-stack engineers focused on performance, security, and scalable architecture.",
    highlights: ["Frontend & backend", "Next.js & React", "API integration"],
  },
  {
    icon: Sparkles,
    title: "Designers",
    description: "Product and brand designers focused on UI/UX and visual clarity.",
    highlights: ["UI/UX design", "Design systems", "Brand consistency"],
  },
  {
    icon: Search,
    title: "SEO Experts",
    description: "Search specialists improving visibility with technical and on-page optimization.",
    highlights: ["On-page SEO", "Technical audits", "Content planning"],
  },
]

export function AboutTeam() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute right-0 top-0 w-1/2 h-full opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_60%)]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A focused, cross-functional team built to deliver results across development, design, and SEO.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 100}>
              <div className="p-8 rounded-2xl bg-background border border-border h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <group.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{group.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
                <ul className="space-y-2">
                  {group.highlights.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
