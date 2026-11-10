"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Loader2, MapPin, ExternalLink } from "lucide-react"

interface FormData {
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string
  service: string
  about: string
}

const SERVICE_OPTIONS = [
  "Website Development",
  "AI Automations & Follow-up",
  "GoHighLevel Implementation",
  "Custom Software & APIs",
  "SEO & Growth",
  "E-Commerce Solutions",
  "Other / Custom Project",
]

function ContactFormInner() {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    about: "",
  })

  // Prepopulate from URL parameters (e.g., from GoHighLevel pricing cards or other services)
  useEffect(() => {
    const serviceParam = searchParams.get("service")
    const packageParam = searchParams.get("package")

    if (serviceParam || packageParam) {
      let matchedService = ""
      if (serviceParam === "gohighlevel") matchedService = "GoHighLevel Implementation"
      else if (serviceParam === "web-development") matchedService = "Website Development"
      else if (serviceParam === "ai-automation" || serviceParam === "ai-agents" || serviceParam === "neverloselead") {
        matchedService = "AI Automations & Follow-up"
      } else if (serviceParam === "custom-software" || serviceParam === "backend-development") {
        matchedService = "Custom Software & APIs"
      } else if (serviceParam === "seo") {
        matchedService = "SEO & Growth"
      }

      setFormData((prev) => ({
        ...prev,
        service: matchedService || prev.service,
        about: packageParam
          ? `Inquiring about package: ${packageParam.replace(/-/g, " ").toUpperCase()}.\n\n`
          : prev.about,
      }))
    }
  }, [searchParams])

  // INPUT & TEXTAREA HANDLER
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
    } catch (err) {
      console.error("Submission error:", err)
    } finally {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center p-12 sm:p-16 rounded-3xl bg-card border border-border shadow-xl">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Thank you. We review inquiries within one business day and will reply to confirm details.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="py-20 md:py-28 relative overflow-hidden">
      {/* Diagonal checkered background on the left side only */}
      <ParallaxSection speed={0.1} className="absolute inset-y-0 left-0 w-full lg:w-1/2 opacity-10 pointer-events-none overflow-hidden">
        <div className="w-full h-full bg-[linear-gradient(45deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:80px_80px] [mask-image:linear-gradient(to_right,black_70%,transparent_100%)]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Consultation Form with generous padding and height */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-card/90 border border-border shadow-xl backdrop-blur-sm">
                <div className="mb-10">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">
                    Prefer to write? Send us a message.
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Share your goals and we&apos;ll reply with a clear, tailored proposal within one business day.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-semibold mb-2.5">
                        First Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        placeholder="John"
                        className="h-13 px-4 text-base rounded-xl bg-background/80 border-border focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-semibold mb-2.5">
                        Last Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        placeholder="Doe"
                        className="h-13 px-4 text-base rounded-xl bg-background/80 border-border focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2.5">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        placeholder="john@company.com"
                        className="h-13 px-4 text-base rounded-xl bg-background/80 border-border focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2.5">
                        Phone Number <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="h-13 px-4 text-base rounded-xl bg-background/80 border-border focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Company & Service Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2.5">
                        Company Name <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Business Name"
                        className="h-13 px-4 text-base rounded-xl bg-background/80 border-border focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold mb-2.5">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-13 px-4 text-base rounded-xl bg-background/80 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service...</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="about" className="block text-sm font-semibold mb-2.5">
                      Tell us about your project <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="about"
                      name="about"
                      value={formData.about}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      rows={6}
                      placeholder="Describe your project, timeline, current systems, and what success looks like for your business..."
                      className="min-h-[160px] p-4 text-base rounded-xl bg-background/80 border-border resize-none leading-relaxed focus-visible:ring-primary"
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="h-13 px-8 text-base font-semibold rounded-xl w-full sm:w-auto">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Two Google Maps (One Above, One Below) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Map 1: Revolix Technologies - Pakistan Office */}
            <ScrollReveal delay={100}>
              <div className="p-6 sm:p-7 rounded-3xl bg-card/90 border border-border shadow-lg flex flex-col gap-4 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Revolix Technologies</h3>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Karachi, Pakistan</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild className="h-8 text-xs gap-1.5 shrink-0 rounded-lg">
                    <a
                      href="https://www.google.com/maps/place/Revolix+Technologies/data=!4m2!3m1!1s0x0:0x882232a068645bd1?sa=X&ved=1t:2428&ictx=111"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Open Map</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
                <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-border/80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115778.04006656325!2d67.1023104!3d24.9298944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x882232a068645bd1!2sRevolix%20Technologies!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Revolix Technologies Karachi Office Map"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Map 2: 30 N Gould St, Sheridan, WY, USA (Head Office) */}
            <ScrollReveal delay={200}>
              <div className="p-6 sm:p-7 rounded-3xl bg-card/90 border border-border shadow-lg flex flex-col gap-4 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">USA Headquarters</h3>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Sheridan, Wyoming, USA</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild className="h-8 text-xs gap-1.5 shrink-0 rounded-lg">
                    <a
                      href="https://www.google.com/maps/place/30+N+Gould+St,+Sheridan,+WY+82801,+USA/@44.7977257,-106.9574119,17z/data=!3m1!4b1!4m6!3m5!1s0x5335fabc2a655551:0x7d0215852acbacda!8m2!3d44.7977257!4d-106.954837!16s%2Fg%2F11zgqwrcpn?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Open Map</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
                <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-border/80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.8778696803274!2d-106.9574119!3d44.7977257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a655551%3A0x7d0215852acbacda!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="USA Headquarters 30 N Gould St Sheridan Map"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Loading contact form...</div>}>
      <ContactFormInner />
    </Suspense>
  )
}
