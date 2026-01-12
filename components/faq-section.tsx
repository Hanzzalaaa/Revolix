"use client"

import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"
import { ChevronDown } from "lucide-react"
import { FAQJsonLd } from "./seo/json-ld"

const faqs = [
  {
    question: "How do you scale AI solutions?",
    answer:
      "We start with a proof of concept, then build it out piece by piece. Using tools like Kubeflow and MLflow, we set up proper tracking and deployment pipelines. Once it's working, we handle the monitoring and scaling so your models don't break when traffic increases.",
  },
  {
    question: "Why work with Revolix for cloud migration?",
    answer:
      "We use infrastructure-as-code (mostly Terraform) so your setup works the same way on AWS, Azure, or GCP. Everything runs in containers, we automate the security checks, and migrations happen without downtime. Most clients see their cloud costs drop 20-30% after we optimize things.",
  },
  {
    question: "How do you handle AI compliance and data privacy?",
    answer:
      "We bake compliance into the workflow from day one. That means proper data governance with tools like OpenMetadata, validation checks with Great Expectations, and privacy-preserving techniques where needed. We make sure everything passes GDPR, HIPAA, and SOC 2 audits.",
  },
  {
    question: "How do you measure ROI on AI projects?",
    answer:
      "Before we start, we agree on specific metrics - things like model accuracy, how many people actually use it, and impact on revenue or costs. We track everything openly and most clients see clear ROI within 6-12 months. If a project isn't working, we tell you early and adjust.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We're flexible. Some clients want dedicated teams (we call them innovation pods), others prefer outcome-based contracts where we get paid when you hit goals. We also do managed MLOps where we handle everything - monitoring, retraining, fixing issues. Whatever makes sense for your situation.",
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
