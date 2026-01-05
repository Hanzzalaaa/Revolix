"use client"

import type React from "react"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2 } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubscribed(true)
  }

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Newsletter</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get the latest insights on AI, technology trends, and digital transformation delivered to your inbox weekly.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {isSubscribed ? (
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary/10 border border-primary/30">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="font-medium">Thanks for subscribing! Check your inbox soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background flex-1"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          )}
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-xs text-muted-foreground mt-4">No spam, ever. Unsubscribe at any time.</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
