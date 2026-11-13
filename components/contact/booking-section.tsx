"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video, Globe2, ArrowRight } from "lucide-react"

export function BookingSection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

  return (
    <section id="book-call" className="py-16 md:py-20 relative overflow-hidden bg-card/20 border-b border-border">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-card to-background p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                <Calendar className="w-3.5 h-3.5" />
                Live Video / Phone Call
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Pick a time for a free 20-minute call
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Select a convenient time on our calendar. We&apos;ll discuss your requirements, explore solutions, and provide a fixed quote.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-card/60 border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Duration</p>
                  <p className="text-sm font-bold text-foreground">20 Minutes</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-card/60 border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Format</p>
                  <p className="text-sm font-bold text-foreground">Google Meet / Phone</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-card/60 border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Time Zones</p>
                  <p className="text-sm font-bold text-foreground">US Eastern (ET) &amp; Flexible</p>
                </div>
              </div>
            </div>

            {/* Calendly Integration / Action */}
            {calendlyUrl ? (
              <div className="w-full h-[650px] rounded-2xl overflow-hidden border border-border">
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a discovery call with Revolix Technologies"
                />
              </div>
            ) : (
              <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
                <p className="text-sm sm:text-base text-foreground font-medium mb-4">
                  Ready to speak with our leadership team? Book your 20-minute slot directly or send us project specs below.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button size="lg" asChild className="h-12 px-8 text-base font-semibold rounded-xl">
                    <a href="#contact-form">
                      Schedule a call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
