import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/content"
import ArticleJsonLd from "@/components/seo/json-ld"

export const revalidate = 60

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) return { title: "Case study not found" }

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolix.example"

  return {
    title: `${study.title} — Case Study | Revolix Technologies`,
    description: study.description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `${SITE_URL}/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.title} — Case Study | Revolix Technologies`,
      description: study.description,
      url: `${SITE_URL}/case-studies/${study.slug}`,
      images: study.image ? [{ url: `${SITE_URL}${study.image}`, alt: study.title }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.description,
    },
  }
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) return notFound()

  return (
    <main className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <article>
        <h1 className="text-3xl font-bold mb-4">{study.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">{study.industry}</p>
        {study.image && (
          <div className="relative w-full h-72 mb-6 rounded-lg overflow-hidden">
            <Image src={study.image} alt={study.title} fill sizes="100vw" className="object-cover" />
          </div>
        )}

        <div className="prose max-w-none text-muted-foreground mb-8">
          <p>{study.description}</p>
        </div>

        <ArticleJsonLd title={study.title} description={study.description || ""} authorName="Revolix Team" datePublished={new Date().toISOString()} url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://revolix.example"}/case-studies/${study.slug}`} image={study.image} />
      </article>
    </main>
  )
}
