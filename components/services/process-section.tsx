"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Search, Lightbulb, Code, Rocket, RefreshCw } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into understanding your business, challenges, and goals through stakeholder interviews and market research.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy",
    description:
      "Our team develops a comprehensive roadmap with clear milestones, technology stack recommendations, and resource planning.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description:
      "Agile development with iterative sprints, continuous integration, and regular demos to ensure alignment with your vision.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deployment",
    description:
      "Smooth rollout with comprehensive testing, documentation, and training to ensure successful adoption.",
  },
  {
    icon: RefreshCw,
    number: "05",
    title: "Optimization",
    description:
      "Ongoing monitoring, performance tuning, and iterative improvements based on real-world usage and feedback.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Our Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and exceeds expectations
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
