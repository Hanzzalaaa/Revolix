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

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; item: string }>
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}

export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
  providerName,
}: {
  name: string
  description: string
  url: string
  serviceType: string
  providerName: string
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: {
      "@type": "Organization",
      name: providerName,
    },
    url,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}

export default ArticleJsonLd
