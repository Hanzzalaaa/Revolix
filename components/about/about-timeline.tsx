"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"

const milestones = [
  {
    year: "2018",
    title: "Founded",
    description:
      "NexaFlow was born from a vision to democratize AI technology for businesses of all sizes, starting with a small team of passionate engineers.",
  },
  {
    year: "2019",
    title: "First Major Client",
    description:
      "Secured our first Fortune 500 client, delivering an AI-powered analytics platform that transformed their decision-making process.",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description:
      "Expanded operations to Europe and Asia, establishing offices in London, Singapore, and Dubai to serve our growing international client base.",
  },
  {
    year: "2021",
    title: "100+ Team Members",
    description:
      "Crossed the 100-employee milestone with experts spanning AI research, software engineering, design, and business strategy.",
  },
  {
    year: "2022",
    title: "AI Innovation Award",
    description:
      "Recognized as the 'Most Innovative AI Solutions Provider' at the Global Tech Awards, validating our commitment to excellence.",
  },
  {
    year: "2023",
    title: "200+ Clients Milestone",
    description:
      "Reached 200+ satisfied clients across 12 industries, with a 95% client retention rate and numerous long-term partnerships.",
  },
  {
    year: "2024",
    title: "Next-Gen AI Launch",
    description:
      "Launched our proprietary AI platform featuring advanced LLM capabilities, enabling even more powerful solutions for our clients.",
  },
]

export function AboutTimeline() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(45deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:100px_100px]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Building the Future, One Milestone at a Time</h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 100}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""} pl-12 md:pl-0`}>
                    <ParallaxSection speed={0.05 * (index % 2 === 0 ? 1 : -1)}>
                      <div
                        className={`p-6 rounded-2xl bg-card border border-border ${
                          index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                        }`}
                      >
                        <span className="text-4xl font-bold text-primary">{milestone.year}</span>
                        <h3 className="text-xl font-semibold mt-2 mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                      </div>
                    </ParallaxSection>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
