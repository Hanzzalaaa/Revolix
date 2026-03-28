import type { Metadata } from "next"
import ServicesPage from "@/app/services/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Secure Software Development | Revolix",
    description: "We build secure, scalable software systems. From code review to cloud hardening.",
    keywords: [
      "best security companies",
    ],
    alternates: { canonical: SITE_URL + "/best-security-companies" },
  }
}

export default ServicesPage





