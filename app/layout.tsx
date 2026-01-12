import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CursorGlow } from "@/components/cursor-glow"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Revolix Technologies | AI & Software Development",
    template: "%s | Revolix",
  },
  description:
    "We build AI systems and software that works. From ML pipelines to cloud infrastructure, we help teams ship production-ready solutions without the usual headaches.",
  keywords: [
    "AI development",
    "machine learning engineering",
    "software development",
    "cloud infrastructure",
    "data engineering",
    "MLOps consulting",
    "enterprise software",
  ],
  authors: [{ name: "Revolix Technologies" }],
  creator: "Revolix Technologies",
  publisher: "Revolix Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Revolix Technologies | AI & Software Development",
    description:
      "We build AI systems and software that works. No buzzwords, just production-ready solutions.",
    url: SITE_URL,
    siteName: "Revolix Technologies",
    images: [
      {
        url: `${SITE_URL}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Revolix Technologies - AI & Software Development",
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
    images: [`${SITE_URL}/og-default.jpg`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Revolix Technologies",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: "AI and software development company",
    sameAs: [
      "https://twitter.com/revolixtech",
      "https://www.linkedin.com/company/revolixtech",
    ],
  }

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: "Revolix Technologies",
    description: "AI systems and software development",
    publisher: {
      "@type": "Organization",
      name: "Revolix Technologies",
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className={`font-sans antialiased ${_inter.variable} ${_spaceGrotesk.variable} ${_geistMono.variable}`}>
        <CursorGlow />
        <SmoothScrollProvider>
          <ScrollToTop />
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
