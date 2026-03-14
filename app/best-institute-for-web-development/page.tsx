import type { Metadata } from "next"
import HomePage from "@/app/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export const metadata: Metadata = {
  title: "Revolix Tech - AI Solutions That Actually Work",
  description: "We build AI systems that solve real problems. Ship better products faster.",
  keywords: [
    "best institute for web development",
  ],
  alternates: { canonical: SITE_URL + "/best-institute-for-web-development" },
}

export default HomePage


