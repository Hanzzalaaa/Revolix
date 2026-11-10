import type { Metadata } from "next"
import Link from "next/link"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { CheckCircle2, ArrowRight, PhoneCall, Sparkles, Code2, Globe, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pricing | Clear Starting Points, No Surprises | Revolix Technologies",
    description:
      "Transparent pricing for GoHighLevel setups, SEO, bespoke websites, and custom software. Fixed quotes after one call.",
    alternates: { canonical: "https://www.revolixtech.com/pricing" },
  }
}

const ghlFixedPackages = [
  {
    title: "Launch Setup",
    price: "$750",
    slug: "launch-setup",
    description: "Ideal for businesses getting started with GoHighLevel who need a turn-key foundation.",
    features: [
      "GoHighLevel account & sub-account configuration",
      "Custom sales pipeline architecture",
      "Lead capture funnels & embedded forms",
      "Calendar & appointment booking setup",
      "Domain DNS & email delivery authentication",
    ],
  },
  {
    title: "Speed-to-Lead",
    price: "$1,000",
    slug: "speed-to-lead",
    popular: true,
    description: "Designed for service businesses that need instant follow-up to convert more inbound calls.",
    features: [
      "Missed-call automatic text-back (< 15 seconds)",
      "Instant SMS & email lead notifications",
      "Multi-step automated follow-up sequences",
      "Pipeline stage auto-updates & task triggers",
      "Two-way SMS communication workflows",
      "Google review request automation",
    ],
  },
  {
    title: "AI Chat Agent",
    price: "$1,500",
    slug: "ai-chat-agent",
    description: "Full conversational AI integration to qualify leads and book appointments 24/7.",
    features: [
      "Custom trained GPT chatbot on your business knowledge",
      "Website chat widget & SMS AI auto-responder",
      "Automated lead qualification & triage",
      "Live calendar booking via conversational AI",
      "Full CRM contact sync & lead logging",
      "Hand-off alerts to human team members",
    ],
  },
]

const seoPackages = [
  {
    title: "SEO Audit",
    price: "$200",
    slug: "seo-audit",
    description: "Comprehensive technical and on-page diagnosis to uncover what is holding your search ranking back.",
    features: [
      "Full technical SEO crawl & health check",
      "On-page content & keyword gap review",
      "Competitor search visibility analysis",
      "Prioritized issue fix blueprint",
    ],
  },
  {
    title: "SEO Optimization",
    price: "$500",
    slug: "seo-optimization",
    popular: true,
    description: "Hands-on structural optimization across your website to accelerate organic search rankings.",
    features: [
      "Complete technical fixes & Core Web Vitals cleanup",
      "High-intent keyword research & mapping",
      "On-page metadata & header tag optimization",
      "Internal linking architecture & Schema structured data",
      "Google Search Console & sitemap optimization",
    ],
  },
]

export default function PricingPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main className="overflow-hidden">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "https://www.revolixtech.com/" },
            { name: "Pricing", item: "https://www.revolixtech.com/pricing" },
          ]}
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-24">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Transparent Pricing Model
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Clear starting points. No surprise invoices.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Whether you need a new website, smarter automation, or custom software, we&apos;ll help you find the right solution for your business.
            </p>
          </div>
        </section>

        {/* SECTION 1: GOHIGHLEVEL FIXED-PRICE PACKAGES */}
        <section className="py-16 sm:py-20 border-t border-border bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Fixed Deliverables</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mt-2">
                GoHighLevel CRM &amp; Automation Packages
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Approved packages with fixed scopes. No ongoing guesswork or unexpected add-ons.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {ghlFixedPackages.map((pkg) => (
                <div
                  key={pkg.title}
                  className={`relative flex flex-col justify-between rounded-3xl border bg-card p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    pkg.popular ? "border-primary shadow-primary/10 ring-1 ring-primary" : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute right-8 top-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{pkg.title}</h3>
                    <div className="mt-4 mb-4">
                      <span className="text-4xl font-extrabold text-primary">{pkg.price}</span>
                      <span className="text-sm text-muted-foreground ml-2">one-time investment</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>

                    <div className="space-y-3 pt-4 border-t border-border/80">
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                          <span className="text-sm text-foreground/90 leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/60">
                    <Button size="lg" asChild className="w-full">
                      <Link href={`/contact?service=gohighlevel&package=${pkg.slug}#contact-form`}>
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: WEBSITE DEVELOPMENT — CUSTOM PRICING */}
        <section className="py-16 sm:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-card to-background p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Tailored Pricing</span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mt-2">
                  Website Development
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Every business has different requirements. Tell us what you need, and we&apos;ll prepare a tailored proposal.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-3 mb-10">
                <div className="p-6 rounded-2xl bg-card/60 border border-border">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Service Business Websites</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    High-trust web design engineered for HVAC, contractors, dental/medical practices, and law firms.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card/60 border border-border">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">E-Commerce &amp; Catalogs</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Shopify and headless Next.js storefronts with automated checkout recovery and inventory sync.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card/60 border border-border">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Custom Web Applications</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Bespoke web applications, customer portals, and internal workflows tailored to your team.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-border/80">
                <Button size="lg" asChild className="h-12 px-8 text-base font-semibold rounded-xl">
                  <Link href="/contact?service=web-development#contact-form">
                    Get a custom quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-primary" />
                  Free 20-minute discovery call included
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SEO PACKAGES */}
        <section className="py-16 sm:py-20 border-t border-border bg-card/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Organic Search</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mt-2">
                SEO &amp; Search Visibility Packages
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Technical optimization and keyword positioning to drive qualified, high-intent organic visitors.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {seoPackages.map((pkg) => (
                <div
                  key={pkg.title}
                  className={`relative flex flex-col justify-between rounded-3xl border bg-card p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    pkg.popular ? "border-primary ring-1 ring-primary" : "border-border"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{pkg.title}</h3>
                    <div className="mt-4 mb-4">
                      <span className="text-4xl font-extrabold text-primary">{pkg.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>

                    <div className="space-y-3 pt-4 border-t border-border/80">
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                          <span className="text-sm text-foreground/90 leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/60">
                    <Button size="lg" variant="outline" asChild className="w-full">
                      <Link href={`/contact?service=seo&package=${pkg.slug}#contact-form`}>
                        Select Package
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}

              {/* Ongoing SEO Card */}
              <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-xl">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Ongoing Growth &amp; Content</h3>
                  <div className="mt-4 mb-4">
                    <span className="text-3xl font-extrabold text-foreground">Custom Quote</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Continuous monthly technical monitoring, keyword expansion, content clusters, and competitor defense.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-border/80">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm text-foreground/90 leading-relaxed">Continuous monthly ranking surveillance</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm text-foreground/90 leading-relaxed">Ongoing content &amp; keyword expansion</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm text-foreground/90 leading-relaxed">Local map pack &amp; citation management</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60">
                  <Button size="lg" variant="outline" asChild className="w-full">
                    <Link href="/contact?service=seo#contact-form">
                      Discuss Monthly SEO
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CUSTOM ENTERPRISE & SOFTWARE SOLUTIONS */}
        <section className="py-16 sm:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-xl">
              <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Custom Enterprise Engineering</span>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mt-2">
                    Custom Software, Backend Systems &amp; AI Agents
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                    For enterprise workflows, complex backend migrations, bespoke mobile apps, and multi-agent AI ecosystems. We prepare detailed technical statements of work with milestones, guaranteed timelines, and fixed deliverables.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Custom API Integrations", "Database Architecture", "Cloud Infrastructure & DevOps", "Proprietary AI Agents"].map((tag) => (
                      <span key={tag} className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-background/50 p-6 sm:p-8 text-center flex flex-col justify-center">
                  <p className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Engagement Model</p>
                  <p className="text-3xl font-bold text-foreground mt-2 mb-4">Custom Quote</p>
                  <p className="text-xs text-muted-foreground mb-6">
                    Fixed-bid milestones based on your technical scope. No hidden hourly fees.
                  </p>
                  <Button size="lg" asChild className="w-full">
                    <Link href="/contact?service=custom-software#contact-form">
                      Request Scope Review
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM DISCOVERY CALL CTA */}
        <section className="py-20 sm:py-24 border-t border-border bg-gradient-to-b from-card/60 to-background text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Not sure what your project needs?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Book a free 20-minute discovery call. We&apos;ll understand your requirements and recommend the right approach.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="h-13 px-8 text-base font-semibold rounded-xl">
                <Link href="/contact#book-call">
                  Book a free call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-13 px-8 text-base font-semibold rounded-xl">
                <Link href="/contact#contact-form">
                  Send us a message
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
