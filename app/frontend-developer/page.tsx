import type { Metadata } from "next"
import BlogPage from "@/app/blog/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export const metadata: Metadata = {
  title: "Frontend Dev Insights | Revolix Blog",
  description: "Latest tips, tutorials, and insights on frontend development from Revolix engineers.",
  keywords: [
    "frontend developer",
  ],
  alternates: { canonical: SITE_URL + "/frontend-developer" },
}

export default BlogPage


