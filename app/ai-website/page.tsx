import type { Metadata } from "next"
import AboutPage from "@/app/about/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us | Revolix - Who We Are & What We Do",
    description: "We're engineers who got tired of seeing AI projects fail. Now we build AI that works.",
    keywords: [
      "ai website",
    ],
    alternates: { canonical: SITE_URL + "/ai-website" },
  }
}

export default AboutPage





