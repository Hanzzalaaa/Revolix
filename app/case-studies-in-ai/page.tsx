import type { Metadata } from "next"
import CaseStudiesPage from "@/app/case-studies/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI Case Studies | Revolix Technologies",
    description: "Real-world AI implementation stories. See how we solved complex problems with AI.",
    keywords: [
      "case studies in ai",
    ],
    alternates: { canonical: SITE_URL + "/case-studies-in-ai" },
  }
}

export default CaseStudiesPage





