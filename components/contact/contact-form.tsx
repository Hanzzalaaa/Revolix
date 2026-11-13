"use client"

import type React from "react"
import { useState, Suspense, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface FormData {
  first_name: string
  last_name: string
  email: string
  phone: string
  about: string
}

function ContactFormInner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    about: "",
  })

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      gsap.from(".contact-form-column", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: "power3.out",
      })

      gsap.from(".contact-direct-call-column", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        delay: 0.15,
        ease: "power3.out",
      })
    },
    { scope: containerRef }
  )

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
      <section className="py-20 md:py-28 relative overflow-hidden bg-[#060A12]">
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 text-teal-300 font-bold text-xl">
            ✓
          </div>
          <h2 className="text-3xl font-bold font-display mb-3 text-foreground">Thank You!</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Your message has been received. Our leadership team reviews every enquiry within one business day and will reply to confirm project details.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact-form"
      ref={containerRef}
      className="py-16 md:py-24 relative overflow-hidden bg-[#060A12] border-t border-white/5 scroll-mt-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* =====================================================
              LEFT: COMPACT PROJECT ENQUIRY FORM (Upper Left Side)
              (No heavy card box, no thick borders)
          ===================================================== */}
          <div className="contact-form-column lg:col-span-7">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-foreground">
                  Prefer to write? Send us a message.
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Share your goals and we&apos;ll reply with a clear, tailored proposal within one business day.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                {/* Name Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first_name" className="block text-xs font-semibold mb-1.5 text-foreground uppercase tracking-wider font-mono">
                      First Name <span className="text-teal-400">*</span>
                    </label>
                    <Input
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      placeholder="Marcus"
                      className="h-11 px-3.5 text-sm rounded-lg bg-white/[0.02] border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus-visible:border-teal-400 focus-visible:ring-1 focus-visible:ring-teal-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-xs font-semibold mb-1.5 text-foreground uppercase tracking-wider font-mono">
                      Last Name <span className="text-teal-400">*</span>
                    </label>
                    <Input
                      id="last_name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      placeholder="Vance"
                      className="h-11 px-3.5 text-sm rounded-lg bg-white/[0.02] border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus-visible:border-teal-400 focus-visible:ring-1 focus-visible:ring-teal-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold mb-1.5 text-foreground uppercase tracking-wider font-mono">
                      Email Address <span className="text-teal-400">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      placeholder="marcus@company.com"
                      className="h-11 px-3.5 text-sm rounded-lg bg-white/[0.02] border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus-visible:border-teal-400 focus-visible:ring-1 focus-visible:ring-teal-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold mb-1.5 text-foreground uppercase tracking-wider font-mono">
                      Phone Number <span className="text-xs text-muted-foreground font-normal lowercase">(optional)</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(---) ---_----"
                      className="h-11 px-3.5 text-sm rounded-lg bg-white/[0.02] border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus-visible:border-teal-400 focus-visible:ring-1 focus-visible:ring-teal-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="about" className="block text-xs font-semibold mb-1.5 text-foreground uppercase tracking-wider font-mono">
                    Tell us about your project <span className="text-teal-400">*</span>
                  </label>
                  <Textarea
                    id="about"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    rows={4}
                    placeholder="Describe your requirements, timeline, and what success looks like for your business..."
                    className="min-h-[120px] p-3.5 text-sm rounded-lg bg-white/[0.02] border border-white/10 text-foreground placeholder:text-muted-foreground/40 resize-none leading-relaxed focus-visible:border-teal-400 focus-visible:ring-1 focus-visible:ring-teal-400 transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-12 px-7 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md shadow-teal-500/10"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          {/* =====================================================
              RIGHT: PREFER TO TALK FIRST?
              (Editorial column layout - No card box)
          ===================================================== */}
          <div className="contact-direct-call-column lg:col-span-5 space-y-6 pt-2 lg:pl-4">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-foreground">
                Prefer to talk first?
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Book a free 20-minute strategy call with one of our team. We will ask a few questions about your business and your goals, and give you an honest read on how we can help and what that would look like in practice.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed">
                No deck. No sales pitch. Just a direct conversation with someone who has worked on problems like yours before.
              </p>
            </div>

            <div className="pt-2">
              {calendlyUrl ? (
                <Button size="lg" asChild className="w-full sm:w-auto h-12 px-7 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-teal-500/10">
                  <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="justify-center">
                    <span>Book a free strategy call</span>
                  </a>
                </Button>
              ) : (
                <Button size="lg" asChild className="w-full sm:w-auto h-12 px-7 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-teal-500/10">
                  <a href="mailto:info@revolixtech.com?subject=Strategy%20Call%20Request" className="justify-center">
                    <span>Book a free strategy call</span>
                  </a>
                </Button>
              )}
            </div>

            <div className="pt-6 border-t border-white/5 space-y-2 text-xs text-muted-foreground">
              <p>• Zero obligation or sales pressure</p>
              <p>• Speak directly with engineering &amp; solutions leads</p>
              <p>• Receive fixed milestone quote after call</p>
            </div>
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
