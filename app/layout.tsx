import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import CursorWrapper from "@/components/CursorWrapper"
import "./globals.css" 
import GTM from "@/components/GTM"
import TrackPageView from "@/components/TrackPageView"



const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Revolix Technologies | AI & Software Development",
  description:
    "Building AI systems and software that actually works in production.",
  authors: [{ name: "Revolix Technologies" }],
  creator: "Revolix Technologies",
  publisher: "Revolix Technologies",
  robots: { index: true, follow: true },

  openGraph: {
    title: "Revolix Technologies | AI & Software Development",
    description:
      "We design, build, and scale intelligent digital solutions—from software and AI to automation, cloud, and business technology.",
    url: SITE_URL,
    siteName: "Revolix Technologies",
    images: [
      {
        url: `${SITE_URL}/image.jpg`,
        width: 512,
        height: 512,
        alt: "Revolix Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Revolix Technologies",
    description:
      "Building AI systems and software that actually works in production.",
    images: [`${SITE_URL}/image.jpg`],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const SCHEMA_ORG_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Revolix Technologies",
      alternateName: "Revolix Tech",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/image.jpg`,
        width: 512,
        height: 512,
      },
      image: { "@id": `${SITE_URL}/#logo` },
      description:
        "We design, build, and scale intelligent digital solutions from software and AI to automation, cloud, and business technology.",
      sameAs: [
        "https://www.linkedin.com/company/revolix-technology",
        "https://www.facebook.com/Revolixtech",
        "https://www.instagram.com/revolixtechnologies/",
        "https://x.com/Revolixtech",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Revolix Technologies",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ],
}
 
  return (
    <html lang="en">
      <head>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORG_GRAPH) }}
/>
      </head>
      <body className={`font-sans antialiased ${_inter.variable} ${_spaceGrotesk.variable} ${_geistMono.variable}`}>
        <GTM />
        <Suspense fallback={null}>
          <TrackPageView />
        </Suspense>
        <CursorWrapper />
        <SmoothScrollProvider>
          <ScrollToTop />
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}