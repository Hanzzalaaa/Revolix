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
  title: "Revolix Technologies — AI Systems, CRM Automation & Custom Software",
  description:
    "We build production AI agents, GoHighLevel automation, and backend infrastructure... ",
  authors: [{ name: "Revolix Technologies" }],
  creator: "Revolix Technologies",
  publisher: "Revolix Technologies",
  robots: { index: true, follow: true },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: { title: "Revolix Technologies | AI & Software Development", description: "We build AI systems and software that works.", url: SITE_URL, siteName: "Revolix Technologies", images: [{ url: `${SITE_URL}/icon.png`, width: 512, height: 512, alt: "Revolix Technologies" }], locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: "Revolix Technologies", description: "Building AI systems and software that actually works in production.", images: [`${SITE_URL}/icon.png`] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Revolix Technologies",
    url: "https://www.revolixtech.com",
    description: "AI solutions, web development & digital marketing",
    logo: "https://www.revolixtech.com/icon.png",
  }

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
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