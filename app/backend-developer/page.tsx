import type { Metadata } from "next"
import BlogPage from "@/app/blog/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export const metadata: Metadata = {
  title: "Blog | Revolix - Technical Insights & Case Studies",
  description: "Real stories from the trenches. What works and what doesn't in AI and software.",
  keywords: [
    "backend developer",
  ],
  alternates: { canonical: SITE_URL + "/backend-developer" },
}

export default BlogPage


