import type { Metadata } from "next"
import ContactPage from "@/app/contact/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export const metadata: Metadata = {
  title: "Revolix for Small Business | Get Started",
  description: "We help small businesses build professional software and grow online. Let's talk.",
  keywords: [
    "small business",
  ],
  alternates: { canonical: SITE_URL + "/small-business" },
}

export default ContactPage


