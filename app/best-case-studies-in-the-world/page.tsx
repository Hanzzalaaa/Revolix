import type { Metadata } from "next"
import CaseStudiesPage from "@/app/case-studies/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export const metadata: Metadata = {
  title: "Case Studies | Revolix - Real Results",
  description: "See how Revolix delivered results. Real case studies from real clients.",
  keywords: [
    "best case studies in the world",
  ],
  alternates: { canonical: SITE_URL + "/best-case-studies-in-the-world" },
}

export default CaseStudiesPage


