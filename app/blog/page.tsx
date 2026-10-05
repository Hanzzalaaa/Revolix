import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { CTASection } from "@/components/cta-section"

function BlogGridSkeleton() {
  return (
        <section className="py-12 hidden md:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              {/* Image placeholder */}
              <Skeleton className="aspect-[16/9] w-full" />

              <div className="p-5">
                <Skeleton className="mb-3 h-5 w-3/4" />
                <Skeleton className="mb-2 h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const BlogGrid = dynamic(
  () =>
    import("@/components/blog/blog-grid").then(
      (m) => m.BlogGrid
    ),
  {
    loading: () => <BlogGridSkeleton />,
  }
)

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI, Web Dev & SEO Blog | Revolix",
    description:
      "AI, web dev, and SEO blog with practical guides, case studies, and growth insights from Revolix.",
    keywords: [
      "backend developer",
      "frontend developer",
      "software blog",
    ],
    alternates: {
      canonical: "https://revolixtech.com/blog",
    },
  }
}

export default function BlogPage() {
  return (
    <ParallaxProvider>
      <Header />

      <main className="relative overflow-hidden">
        
        {/* Ambient background glows to make the page feel alive */}
        <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute -left-1/4 top-[10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute -right-1/4 top-[40%] h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
          <div className="absolute left-[10%] top-[80%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
        </div>

        {/* Global Page Vertical Border Framing Lines */}
        <div className="absolute inset-y-0 left-0 w-[3px] bg-border hidden md:block" />
<div className="absolute inset-y-0 right-0 w-[3px] bg-border hidden md:block" />

        <div className="relative z-10">
          <BreadcrumbJsonLd
            items={[
              {
                name: "Home",
                item: "https://revolixtech.com/",
              },
              {
                name: "Blog",
                item: "https://revolixtech.com/blog",
              },
            ]}
          />

          <BlogHero />

          {/* Blog posts with images */}
          <BlogGrid />

          {/* Newsletter removed — CTA is now used instead */}
          <CTASection />
        </div>
      </main>

      <Footer />
    </ParallaxProvider>
  )
}