"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Mail, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactInfo() {
  return (
    <section className="py-20 md:py-28 bg-card/40 relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Get In Touch</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect directly with our team across our USA headquarters and Pakistan operations.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Balanced Grid: Left (Company & Offices) | Right (Active Hours + Call Us below it) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Email & Offices Card (Spacious and Big) */}
          <div className="lg:col-span-7 flex">
            <ScrollReveal className="w-full">
              <div className="h-full p-8 sm:p-10 lg:p-12 rounded-3xl bg-card border border-border shadow-xl space-y-8 hover:border-primary/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-5 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl sm:text-3xl text-foreground">Revolix Technologies</h3>
                      <a
                        href="mailto:info@revolixtech.com"
                        className="text-base sm:text-lg text-primary hover:underline font-semibold break-all block mt-1.5"
                      >
                        info@revolixtech.com
                      </a>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* USA Office */}
                    <div className="pt-6 border-t border-border/80 space-y-3">
                      <h4 className="font-bold text-sm sm:text-base text-foreground uppercase tracking-wider">
                        USA office
                      </h4>
                      <div className="flex flex-wrap sm:flex-nowrap items-start gap-3.5">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="h-8 px-3.5 text-xs font-semibold shrink-0 border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 rounded-lg pointer-events-none"
                        >
                          head office
                        </Button>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          30 N Gould St, Ste 68264, Sheridan WY 82801, United States
                        </p>
                      </div>
                    </div>

                    {/* Pakistan Office */}
                    <div className="pt-6 border-t border-border/80 space-y-3">
                      <h4 className="font-bold text-sm sm:text-base text-foreground uppercase tracking-wider">
                        PAKISTAN office
                      </h4>
                      <div className="flex flex-wrap sm:flex-nowrap items-start gap-3.5">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="h-8 px-3.5 text-xs font-semibold shrink-0 border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 rounded-lg pointer-events-none"
                        >
                          Karachi
                        </Button>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          Block W, Allama Iqbal Town, Near Orange Line BRT Station &amp; Abdullah College, Allama Iqbal Rd, Karachi 74600, Pakistan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Active Hours (Top) and Call Us (Moved Below Active Hours) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Active Hours (Business Hours) */}
            <ScrollReveal delay={100} className="flex-1">
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-xl space-y-6 hover:border-primary/50 transition-all flex flex-col justify-center">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-foreground">Active Hours</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-0.5">Business Schedule</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/80 space-y-3 text-base text-muted-foreground">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-medium text-foreground">Monday – Friday:</span>
                    <span className="text-primary font-semibold">9 AM – 6 PM US Eastern (ET)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-medium text-foreground">Weekend:</span>
                    <span>By appointment</span>
                  </div>
                  <p className="pt-2 text-xs text-muted-foreground border-t border-border/50">
                    We aim to reply to emails within one business day.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Call Us - Moved below Active Hours */}
            <ScrollReveal delay={200} className="flex-1">
              <div className="h-full p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-xl space-y-6 hover:border-primary/50 transition-all flex flex-col justify-center">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-foreground">Call Us</h3>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mt-0.5">Pakistan Line</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <a
                      href="tel:+923138062538"
                      className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap block"
                    >
                      +92 313 8062538
                    </a>
                  </div>

                  <div className="pt-4 border-t border-border/80">
                    <h4 className="font-bold text-base text-foreground">
                      USA number -{" "}
                      <a
                        href="tel:+13025872208"
                        className="text-primary hover:underline font-semibold whitespace-nowrap"
                      >
                        +1 302-587-2208
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
