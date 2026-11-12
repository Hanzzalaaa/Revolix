import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import Link from "next/link"
import {
  Bot,
  MessageSquare,
  PhoneCall,
  Calendar,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Layers,
  Send,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Vursell | Multi-Channel AI Sales & Voice Agent | Revolix Technologies",
  description:
    "Vursell is a proprietary multi-channel AI sales platform by Revolix Technologies. Automate WhatsApp, voice calls, web chat, and lead bookings 24/7.",
  keywords: [
    "Vursell",
    "AI sales agent",
    "AI voice agent",
    "WhatsApp AI bot",
    "AI receptionist",
    "multi-channel AI outreach",
    "Revolix Technologies",
  ],
  alternates: {
    canonical: "https://www.revolixtech.com/vursell",
  },
}

const channels = [
  {
    icon: PhoneCall,
    title: "AI Voice Agents",
    description:
      "Ultra-low latency conversational voice agents that answer inbound calls, qualify leads, and dial outbound follow-ups with natural human inflection.",
    badge: "Inbound & Outbound",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp AI Sales",
    description:
      "Engage prospects directly on WhatsApp. Answer product questions, share catalogs, qualify intent, and trigger CRM workflows instantly.",
    badge: "24/7 Automated",
  },
  {
    icon: Bot,
    title: "Intelligent Web Chat",
    description:
      "Replace static contact forms with an interactive AI receptionist trained on your company knowledge base to convert visitors into booked calls.",
    badge: "Live Conversion",
  },
  {
    icon: Send,
    title: "Email & LinkedIn Outreach",
    description:
      "Personalized multi-touch follow-ups that sound like your best SDR, keeping pipeline active without manual effort.",
    badge: "Automated Follow-ups",
  },
  {
    icon: Calendar,
    title: "Built-in Booking Engine",
    description:
      "Synchronizes real-time with Google Calendar, Outlook, and GoHighLevel to book qualified meetings directly into your sales team's schedule.",
    badge: "Direct Calendar Sync",
  },
  {
    icon: Zap,
    title: "CRM & Webhook Sync",
    description:
      "Pushes every conversation summary, lead score, and contact record directly into GoHighLevel, HubSpot, Salesforce, or your custom API.",
    badge: "Zero Data Loss",
  },
]

const features = [
  "Sub-second voice latency for natural conversations",
  "Trained on your custom documents, PDFs, and website knowledge",
  "Multilingual support with native accents",
  "Smart fallback and live human handoff capabilities",
  "Full CRM integration (GoHighLevel, HubSpot, custom APIs)",
  "Enterprise-grade security and data encryption",
]

export default function VursellPage() {
  const vursellSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Vursell",
    operatingSystem: "Cloud, Web",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Revolix Technologies",
      url: "https://www.revolixtech.com",
    },
    description:
      "Multi-channel AI sales and voice agent platform developed by Revolix Technologies.",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vursellSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "https://www.revolixtech.com/" },
            { name: "Vursell", item: "https://www.revolixtech.com/vursell" },
          ]}
        />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
          <ParallaxSection speed={0.15} className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl" />
          </ParallaxSection>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6 border border-primary/30">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Proprietary Product by Revolix Technologies
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto text-balance">
                Vursell: The Multi-Channel{" "}
                <span className="text-primary">AI Sales Agent</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Turn website visitors, incoming calls, and WhatsApp messages into booked appointments
                24/7. Vursell qualifies leads, answers questions with your company data, and schedules
                meetings without human delay.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="gap-2">
                  <Link href="/contact">
                    Request a Live Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="glass border-primary/30">
                  <Link href="/services">Explore All Services</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CHANNELS GRID */}
        <section className="py-20 bg-card/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                  Multi-Channel Coverage
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  One Unified AI Sales Brain Across Every Channel
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {channels.map((channel, i) => (
                <ScrollReveal key={channel.title} delay={i * 80}>
                  <Card className="h-full bg-background border-border hover:border-primary/40 transition-all hover:-translate-y-1">
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <channel.icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-primary/5 text-primary border border-primary/20">
                          {channel.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{channel.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {channel.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY VURSELL */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <ScrollReveal>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                    Engineered for Production
                  </p>
                  <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                    Why Fast-Growing Businesses Choose Vursell
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Most chatbots only spit generic answers. Vursell is an active sales agent engineered
                    by Revolix Technologies with custom RAG, sub-second voice latency, and CRM automation
                    tailored for high-ticket industries like real estate, home services, healthcare, and e-commerce.
                  </p>
                </ScrollReveal>

                <div className="space-y-4">
                  {features.map((feat, idx) => (
                    <ScrollReveal key={idx} delay={idx * 50}>
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground font-medium">{feat}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <ScrollReveal delay={200}>
                <div className="p-8 sm:p-12 rounded-3xl glass border border-primary/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
                  <div className="relative space-y-6">
                    <div className="flex items-center gap-3">
                      <Layers className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">Built by AI Engineers</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Vursell is not a white-labeled wrapper. It is developed and maintained by the 20-person
                      engineering team at Revolix Technologies, backed by FastAPI, Next.js, and enterprise cloud architecture.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <Button asChild size="lg" className="w-full">
                        <Link href="/contact">Book a Strategy Call</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card border-t border-border text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Deploy Vursell for Your Business?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Talk to our engineering team today to see how Vursell can automate your sales outreach and voice reception.
              </p>
              <Button size="lg" asChild className="gap-2">
                <Link href="/contact">
                  Get Started with Vursell
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
