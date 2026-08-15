"use client"

import type React from "react"
import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Loader2 } from "lucide-react"



const services = [
  "AI & Machine Learning",
  "Software Development",
  "Cloud Infrastructure",
  "Data Analytics",
  "UX Design",
  "Digital Strategy",
  "Other",
]

const budgets = [
  "< $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+",
]

interface FormData {
  first_name: string
  last_name: string
  email: string
  company: string
  service: string
  budget: string
  about: string
}





export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [selectedBudget, setSelectedBudget] = useState("")

  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    about: "",
  })

  // INPUT & TEXTAREA HANDLER
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = {
      ...formData,
      service: selectedService,
      budget: selectedBudget,
    }

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })


    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-16 relative overflow-hidden">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center p-12 rounded-2xl bg-card border border-border">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <p className="text-2xl font-bold mb-4">Thank You!</p>
              <p className="text-muted-foreground">
                We&apos;ve received your message and will get back to you within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="py-16 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute inset-0 opacity-5">
        <div className="w-full h-full `bg-[linear-gradient(45deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:80px_80px]`" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Free Consultation</h2>
                <p className="text-muted-foreground">
                  Share your goals and we will propose a plan that fits your business.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="bg-card"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="bg-card"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="bg-card"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="bg-card"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Service Interested In *</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedService === service
                            ? "bg-primary text-primary-foreground"
                            : "bg-card border border-border text-muted-foreground hover:border-primary/50"
                          }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Budget Range</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setSelectedBudget(budget)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedBudget === budget
                            ? "bg-primary text-primary-foreground"
                            : "bg-card border border-border text-muted-foreground hover:border-primary/50"
                          }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell us about your project *
                  </label>
                  <Textarea
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Describe your project..."
                    className="bg-card resize-none"
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
