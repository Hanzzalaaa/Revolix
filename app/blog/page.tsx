import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { NewsletterSection } from "@/components/blog/newsletter-section"

export const metadata: Metadata = {
  title: "Blog | Revolix - Technical Insights & Case Studies",
  description: "Real stories from the trenches. We write about what actually works (and what doesn't) when building AI systems and shipping software.",
  keywords: [
    "AI blog",
    "software development insights",
    "ML engineering",
    "tech case studies",
    "engineering blog",
  ],
}

export default function BlogPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <BlogHero />
        <BlogGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
