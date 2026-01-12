"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Alexandra Chen",
    role: "CEO & Co-Founder",
    bio: "Former Google AI researcher with 15+ years in tech leadership.",
    image: "/team-ceo-woman-professional.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Amazon principal engineer, specializing in scalable AI systems.",
    image: "/team-cto-man-professional.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Kim",
    role: "Chief Design Officer",
    bio: "Award-winning designer with a passion for human-centered design.",
    image: "/team-cdo-woman-creative.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Thompson",
    role: "VP of Engineering",
    bio: "20+ years building enterprise software for Fortune 500 companies.",
    image: "/team-vp-man-engineering.jpg",
    linkedin: "#",
    twitter: "#",
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Leadership</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, engineering, design, and business
              strategy.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 100}>
              <div className="group text-center">
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      <a
                        href={member.linkedin}
                        className="p-2 rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="p-2 rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
