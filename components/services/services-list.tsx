"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"

const SHOW_GRAPHICS = process.env.NEXT_PUBLIC_SHOW_GRAPHICS === "true"

const serviceSections = [
  {
    title: "Website Development",
    description: "Professional website builds tailored for speed, SEO, and conversions.",
    items: [
      {
        title: "Business Website",
        detail: "Corporate and service websites built to generate qualified leads.",
      },
      {
        title: "Ecommerce Website",
        detail: "Conversion-first storefronts with secure checkout and scalable catalogs.",
      },
      {
        title: "Custom Website",
        detail: "Unique, feature-rich websites designed around your business model.",
      },
    ],
  },
  {
    title: "SEO Services",
    description: "Full-spectrum SEO that improves rankings and drives high-intent traffic.",
    items: [
      {
        title: "On Page SEO",
        detail: "Keyword alignment, metadata, and content structure tuned for ranking.",
      },
      {
        title: "Off Page SEO",
        detail: "Authority building through quality backlinks and brand mentions.",
      },
      {
        title: "Technical SEO",
        detail: "Site speed, crawlability, and index health improvements.",
      },
    ],
  },
  {
    title: "Digital Marketing",
    description: "Growth-focused campaigns across organic and paid channels.",
    items: [
      {
        title: "Social Media Marketing",
        detail: "Content and campaigns that build community and drive engagement.",
      },
      {
        title: "Google Ads",
        detail: "High-intent paid search and display campaigns that convert.",
      },
      {
        title: "Content Marketing",
        detail: "Authority content that supports SEO and lead generation.",
      },
    ],
  },
  ...(SHOW_GRAPHICS
    ? [
        {
          title: "Graphic Design",
          description: "Design systems and creative assets that elevate your brand presence.",
          items: [
            {
              title: "Logo Design",
              detail: "Memorable identities built with brand strategy in mind.",
            },
            {
              title: "Social Media Posts",
              detail: "Scroll-stopping creatives tailored for each platform.",
            },
            {
              title: "Branding Design",
              detail: "Cohesive visual systems across print and digital assets.",
            },
          ],
        },
      ]
    : []),
]

export function ServicesList() {
  return (
    <section className="py-24 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(45deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:120px_120px]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        {serviceSections.map((section, sectionIndex) => (
          <ScrollReveal key={section.title} delay={sectionIndex * 100}>
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-muted-foreground text-lg mb-6">{section.description}</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {section.items.map((item) => (
                  <div key={item.title} className="p-5 rounded-xl bg-background border border-border">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}

        <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
          <p className="text-muted-foreground text-lg mb-6">
            Revolix Technologies delivers end-to-end web development, SEO services, and digital marketing tailored to
            the exact stage of your business. We start by understanding your goals, audience, and competitive
            landscape, then build a strategy that connects discovery, design, and conversion. This approach keeps your
            message consistent while ensuring every page answers search intent and drives action.
          </p>
          <div className="space-y-4 text-muted-foreground">
            <p>
              For web development, we focus on performance, usability, and a scalable architecture so your site can
              grow without slowing down. We build business websites that showcase credibility, ecommerce experiences
              that convert traffic into revenue, and custom platforms that support unique workflows. Each build includes
              clean structure, fast load times, and responsive layouts optimized for every screen size.
            </p>
            <p>
              Our SEO services cover on-page SEO, off-page SEO, and technical SEO as one unified plan. That means
              keyword strategy, metadata optimization, internal linking, image alt text, and crawlability improvements
              are all executed together. We avoid keyword stuffing and keep density natural by mapping intent to the
              right sections, making content clear to both users and search engines.
            </p>
            <p>
              Digital marketing is designed to amplify what your website already does well. We align social media,
              Google Ads, and content marketing to the same value proposition used in your landing pages. That creates a
              consistent journey from first click to inquiry, improving CTR and reducing bounce rate across campaigns.
            </p>
            {SHOW_GRAPHICS && (
              <p>
                Graphic design supports brand trust at every touchpoint. From logo design and social media posts to full
                branding design systems, we make sure every asset feels cohesive. This consistency helps your business
                look professional, credible, and ready to win competitive deals.
              </p>
            )}
            <p>
              We also prioritize security, accessibility, and maintenance. Each launch includes performance checks,
              image optimization, and a clean codebase that is easy to extend. If you need ongoing support, we provide
              monitoring, content updates, and campaign iteration so your site keeps improving after the initial release.
            </p>
            <p>
              When you work with Revolix, you get a partner that understands the full stack of growth: strategy,
              execution, and optimization. That means we can launch a new landing page, connect it to ads, improve its
              SEO over time, and evolve the design as your brand matures. It is a complete system, not a one-off project.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keyword-driven website development for commercial and transactional searches.</li>
              <li>Technical SEO improvements that raise visibility and site quality.</li>
              <li>Digital marketing campaigns that target high-intent buyers.</li>
              {SHOW_GRAPHICS && <li>Graphic design assets that reinforce brand recognition.</li>}
            </ul>
            <p>
              This integrated approach reduces handoffs and ensures the strategy stays consistent. It also helps your
              team move faster, because design, development, and marketing are planned together. If you are comparing
              web development companies or deciding which SEO services to invest in, our process gives you clarity and
              measurable outcomes.
            </p>
            <p>
              Our delivery process includes documentation, performance checks, and growth recommendations so you can
              scale confidently. Whether you are a startup or a growing enterprise, Revolix keeps every project focused
              on measurable results and long-term SEO value.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
