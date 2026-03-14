import type { Metadata } from "next"
import HomePage from "@/app/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export const metadata: Metadata = {
  title: "Advanced Development | Revolix Technologies",
  description: "From ML pipelines to cloud infra - advanced development solutions that scale.",
  keywords: [
    "advance development inc",
  ],
  alternates: { canonical: SITE_URL + "/advance-development-inc" },
}

export default HomePage


