import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

function BlogGridSkeleton() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="rounded-2xl border border-border bg-card p-4">
              <Skeleton className="aspect-[16/9] w-full mb-4" />
              <Skeleton className="h-5 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsletterSectionSkeleton() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8">
          <Skeleton className="h-8 w-2/3 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-4/5 mb-6" />
          <div className="flex flex-col sm:flex-row gap-3">
            <Skeleton className="h-11 w-full sm:flex-1" />
            <Skeleton className="h-11 w-32" />
          </div>
        </div>
      </div>
    </section>
  )
}

const BlogGrid = dynamic(() => import("@/components/blog/blog-grid").then((m) => m.BlogGrid), {
  loading: () => <BlogGridSkeleton />,
})
const NewsletterSection = dynamic(() => import("@/components/blog/newsletter-section").then((m) => m.NewsletterSection), {
  loading: () => <NewsletterSectionSkeleton />,
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI, Web Dev & SEO Blog | Revolix",
    description: "AI, web dev, and SEO blog with practical guides, case studies, and growth insights from Revolix.",
    keywords: [
      "backend developer",
      "frontend developer",
      "software blog",
    ],
    alternates: { canonical: "https://revolixtech.com/blog" },
  }
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



