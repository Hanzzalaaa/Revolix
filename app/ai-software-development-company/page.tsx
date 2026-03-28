import type { Metadata } from "next"
import ServicesPage from "@/app/services/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI Software Development Company | Revolix",
    description: "We build production-ready AI software. Machine learning, NLP, and data pipelines.",
    keywords: [
      "ai software development company",
    ],
    alternates: { canonical: SITE_URL + "/ai-software-development-company" },
  }
}

export default ServicesPage





