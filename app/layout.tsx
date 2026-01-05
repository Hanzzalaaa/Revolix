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

export const metadata: Metadata = {
  title: "Revolix Technologies | AI-Powered Digital Solutions & Innovation",
  description:
    "Your partner in leading the future with AI. We offer intelligent IT solutions designed to support growth-stage and established enterprises.",
  keywords: [
    "AI solutions",
    "digital transformation",
    "software development",
    "cloud infrastructure",
    "data analytics",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
