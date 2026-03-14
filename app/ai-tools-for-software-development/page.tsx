import type { Metadata } from "next"
import IndustriesPage from "@/app/industries/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export const metadata: Metadata = {
  title: "AI Tools for Software Development | Revolix",
  description: "We use cutting-edge AI tools to build smarter software, faster. See our tech stack.",
  keywords: [
    "ai tools for software development",
  ],
  alternates: { canonical: SITE_URL + "/ai-tools-for-software-development" },
}

export default IndustriesPage


