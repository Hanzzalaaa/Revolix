import React from "react"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export default function Head() {
  const orgJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Revolix Technologies",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    sameAs: ["https://twitter.com/", "https://www.linkedin.com/"],
  }

  const webSiteJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: "Revolix Technologies",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={SITE_URL} />

      <meta name="description" content="Revolix Technologies — digital products and engineering" />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Revolix Technologies" />
      <meta property="og:title" content="Revolix Technologies" />
      <meta property="og:description" content="Revolix Technologies — digital products and engineering" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={`${SITE_URL}/og-image.png`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@revolix" />
      <meta name="twitter:title" content="Revolix Technologies" />
      <meta name="twitter:description" content="Revolix Technologies — digital products and engineering" />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJson) }} />
    </>
  )
}
