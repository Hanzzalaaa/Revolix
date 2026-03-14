import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { NewsletterSection } from "@/components/blog/newsletter-section"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Blog | Revolix - Technical Insights & Case Studies",
  description: "Real stories from the trenches. What works and what doesn't in AI and software.",
  keywords: [
    "backend developer",
    "frontend developer",
    "software blog",
  ],
  alternates: { canonical: "https://revolixtech.com/blog" },
}

export default function BlogPage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

  return (
    <ParallaxProvider>
      <Header />
      <main>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: SITE_URL },
            { name: "Blog", item: `${SITE_URL}/blog` },
          ]}
        />
        <BlogHero />
        <BlogGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
