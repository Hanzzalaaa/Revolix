import type { Metadata } from "next"
import ServicesPage from "@/app/services/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "UI/UX Design Services | Revolix Technologies",
    description: "Beautiful, conversion-focused UI/UX design. Modern interfaces built for real users.",
    keywords: [
      "best ui ux designer",
    ],
    alternates: { canonical: SITE_URL + "/best-ui-ux-designer" },
  }
}

export default ServicesPage





