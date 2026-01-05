"use client"

import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Zap, Building2, Hotel, Factory, Home, Truck, ArrowRight } from "lucide-react"

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "AI solutions cutting costs, boosting care, securing data, and streamlining systems for smarter patient experiences.",
    href: "/industries#healthcare",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description: "Fuel your eCommerce growth with AI, fight fraud, streamline ops, and personalize customer journeys.",
    href: "/industries#ecommerce",
  },
  {
    icon: Zap,
    title: "Energy",
    description: "Optimize grids, cut emissions, predict demand, and build smarter, cleaner energy systems.",
    href: "/industries#energy",
  },
  {
    icon: Building2,
    title: "Fintech",
    description: "Boost security, personalize experiences, ensure compliance, and deliver seamless digital journeys.",
    href: "/industries#fintech",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Streamline operations, personalize stays, cut costs, and deliver eco-smart guest experiences.",
    href: "/industries#hospitality",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize supply chains, boost uptime, secure operations, and drive sustainability.",
    href: "/industries#manufacturing",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Price smart, predict demand, and personalize buyer journeys for faster property transactions.",
    href: "/industries#realestate",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Optimize routes, forecast workforce needs, and build resilient supply chains that deliver.",
    href: "/industries#logistics",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute left-0 top-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-[linear-gradient(135deg,_var(--accent)_25%,_transparent_25%,_transparent_75%,_var(--accent)_75%)] bg-[size:80px_80px]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side - Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
            <ScrollReveal>
              <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Industries</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Industries Empowered by NexaFlow</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground text-lg mb-8">
                We specialize in tailor-made software solutions designed to enhance the growth and advancement of
                businesses across various industries globally.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Button size="lg" variant="outline" asChild className="group bg-transparent">
                <Link href="/industries">
                  Explore All Industries
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>

          {/* Right Side - Grid */}
          <div className="lg:w-2/3">
            <div className="grid sm:grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <ScrollReveal key={industry.title} delay={index * 75}>
                  <Link href={industry.href} className="group block">
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <industry.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {industry.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
