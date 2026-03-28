import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

function CaseStudiesFilterSkeleton() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton key={index} className="h-9 w-24 rounded-full" />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="rounded-2xl border border-border bg-card overflow-hidden">
              <Skeleton className="aspect-video w-full" />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-5 w-16" />
                </div>
                <Skeleton className="h-6 w-2/3 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-4" />
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASectionSkeleton() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
          <Skeleton className="h-8 w-2/3 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-4/5 mb-6" />
          <div className="flex flex-wrap gap-3">
            <Skeleton className="h-11 w-40" />
            <Skeleton className="h-11 w-32" />
          </div>
        </div>
      </div>
    </section>
  )
}

const CaseStudiesFilter = dynamic(() => import("@/components/case-studies/case-studies-filter").then((m) => m.CaseStudiesFilter), {
  loading: () => <CaseStudiesFilterSkeleton />,
})
const CTASection = dynamic(() => import("@/components/cta-section").then((m) => m.CTASection), {
  loading: () => <CTASectionSkeleton />,
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Case Studies | Revolix Results & ROI",
    description: "Case studies showing measurable ROI from AI, web development, and software delivery by Revolix.",
    keywords: [
      "best case studies in the world",
      "case studies in ai",
      "AI case studies",
    ],
    alternates: { canonical: "https://revolixtech.com/case-studies" },
  }
}

export default function CaseStudiesPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudiesFilter />
        <CTASection headingAs="p" subheadingAs="p" />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}



