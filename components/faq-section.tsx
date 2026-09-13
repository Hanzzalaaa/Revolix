"use client"

import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"
import { ChevronDown } from "lucide-react"
import { FAQJsonLd } from "./seo/json-ld"

const faqs = [
  {
    question: "What kind of projects do you work on?",
    answer:
      "We work on websites, custom software, AI systems, automation, e-commerce platforms, and other digital products depending on the project.",
  },
  {
    question: "Can you work with an existing project?",
    answer:
      "Yes. We can work with an existing codebase, improve an existing system, or build new features around what you already have.",
  },
  {
    question: "How does a typical project start?",
    answer:
      "We start by understanding your requirements, goals, and existing setup. From there, we discuss the scope, approach, timeline, and next steps.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Depending on the project, we can continue with maintenance, improvements, troubleshooting, and additional features after launch.",
  },
]
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <FAQJsonLd faqs={faqs} />
      <ParallaxSection speed={0.1} className="absolute right-0 top-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Frequently Asked Questions
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
