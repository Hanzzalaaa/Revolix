import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { NewsletterSection } from "@/components/blog/newsletter-section"

export const metadata: Metadata = {
  title: "Blog & Insights | NexaFlow - Tech Trends & AI News",
  description:
    "Stay updated with the latest in AI, technology trends, digital transformation insights, and expert analysis from NexaFlow.",
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
