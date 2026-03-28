import type { Metadata } from "next"
import HomePage from "@/app/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Top Quality Assurance Company | Revolix Tech",
    description: "Revolix delivers tested, production-ready software with top QA standards.",
    keywords: [
      "best 10 quality assurance companies",
    ],
    alternates: { canonical: SITE_URL + "/best-10-quality-assurance-companies-in-the-world" },
  }
}

export default HomePage





