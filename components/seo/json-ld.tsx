import React from "react"

export function ArticleJsonLd({
  title,
  description,
  authorName,
  datePublished,
  url,
  image,
}: {
  title: string
  description: string
  authorName?: string
  datePublished?: string
  url?: string
  image?: string
}) {
  const json: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Person", name: authorName || "Revolix Team" },
    datePublished: datePublished,
  }

  if (url) json.url = url
  if (image) json.image = image

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}

export default ArticleJsonLd
