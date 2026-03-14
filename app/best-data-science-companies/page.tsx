import type { Metadata } from "next"
import ServicesPage from "@/app/services/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export const metadata: Metadata = {
  title: "Our Services | Revolix - What We Build",
  description: "From ML models to cloud infrastructure - we build complete AI systems for your business.",
  keywords: [
    "best data science companies",
  ],
  alternates: { canonical: SITE_URL + "/best-data-science-companies" },
}

export default ServicesPage


