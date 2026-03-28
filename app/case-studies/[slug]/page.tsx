import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/content"
import ArticleJsonLd from "@/components/seo/json-ld"

export const revalidate = 60

type Props = { params: { slug: string } }

const clampMeta = (value: string, maxLength: number) => {
  if (value.length <= maxLength) return value
  return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) return { title: "Case study not found" }

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"
  const baseTitle = `Case Study: ${study.title} | Revolix`
  const title = clampMeta(baseTitle, 60)
  const description = clampMeta(study.description || "", 160)

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `${SITE_URL}/case-studies/${study.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/case-studies/${study.slug}`,
      images: study.image ? [{ url: `${SITE_URL}${study.image}`, alt: study.title }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) return notFound()

  const altTextBySlug: Record<string, string> = {
    "medi-sync": "best case studies in the world - MediSync AI Healthcare Solution",
    "aurora-events": "case studies in AI - Aurora Events Digital Transformation",
  }
  const imageAlt = altTextBySlug[study.slug] || `${study.title} - case studies in AI`

  return (
    <main className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <article>
        <h1 className="text-3xl font-bold mb-4">{study.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">{study.industry}</p>
        {study.image && (
          <div className="relative w-full h-72 mb-6 rounded-lg overflow-hidden">
            <Image src={study.image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
          </div>
        )}

        <div className="prose max-w-none text-muted-foreground mb-8">
          <p>{study.description}</p>
        </div>

        <ArticleJsonLd title={study.title} description={study.description || ""} authorName="Revolix Team" datePublished={new Date().toISOString()} url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"}/case-studies/${study.slug}`} image={study.image} />
      </article>
    </main>
  )
}

