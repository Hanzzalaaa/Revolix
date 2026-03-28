import type { Metadata } from "next"
import IndustriesPage from "@/app/industries/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Industries We Work With | Revolix",
    description: "We've built AI systems for healthcare, fintech, e-commerce, and manufacturing.",
    keywords: [
      "best software development companies in pakistan",
    ],
    alternates: { canonical: SITE_URL + "/best-software-development-companies-in-pakistan" },
  }
}

export default IndustriesPage





