"use client"

import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does NexaFlow scale AI solutions?",
    answer:
      "NexaFlow designs modular, scalable AI solutions starting from agile proofs-of-concept, leveraging robust platforms like Kubeflow and Feast. Solutions transition smoothly to production through Kubernetes-driven CI/CD and MLflow-based model tracking. Continuous performance monitoring ensures scalability, agility, and efficiency.",
  },
  {
    question: "Why choose NexaFlow for cloud migration?",
    answer:
      "NexaFlow utilizes a cloud-agnostic, infrastructure-as-code (IaC) approach, employing Terraform for seamless workload portability between AWS, Azure, and GCP. With containerized workloads supporting multiple architectures, automated security guardrails, and zero-downtime transitions, clients experience enhanced agility and significant cost reductions of 20–30%.",
  },
  {
    question: "How does NexaFlow handle AI compliance?",
    answer:
      "NexaFlow integrates strict compliance controls into AI workflows, employing frameworks like OpenMetadata for robust data governance and Great Expectations for data-quality validation. Advanced privacy-preserving techniques ensure sensitive data remains secure, while automated policy checks maintain GDPR, HIPAA, and SOC 2 compliance.",
  },
  {
    question: "How is ROI measured at NexaFlow?",
    answer:
      "NexaFlow defines clear baseline KPIs at project inception, tracking progress via Objective Key Results (OKRs) aligned to business goals. AI impact is evaluated through leading indicators (model accuracy, adoption rates) and lagging indicators (revenue uplift, cost reductions). Transparent reporting demonstrates substantial ROI within 6–12 months.",
  },
  {
    question: "What support models does NexaFlow offer?",
    answer:
      "NexaFlow offers flexible engagement options including dedicated innovation pods, outcome-based retainers tied to performance, and comprehensive managed MLOps services. Strict SLAs guarantee system uptime and rapid issue resolution, alongside regular model retraining and drift monitoring.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute right-0 top-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
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
