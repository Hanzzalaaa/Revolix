import type { Metadata } from "next"
import ContactPage from "@/app/contact/page"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us | Revolix - Let's Talk",
    description: "Contact Revolix Tech for AI, software, and cloud solutions. Get a free consultation.",
    keywords: [
      "starting a business",
    ],
    alternates: { canonical: SITE_URL + "/starting-a-business" },
  }
}

export default ContactPage





