import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { PricingContent } from "@/components/pricing/pricing-content"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pricing | Clear Starting Points, No Surprises | Revolix Technologies",
    description:
      "Transparent pricing for GoHighLevel setups, SEO, bespoke websites, and custom software. Fixed quotes after one call.",
    alternates: { canonical: "https://www.revolixtech.com/pricing" },
  }
}

export default function PricingPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main className="overflow-hidden bg-[#060A12]">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "https://www.revolixtech.com/" },
            { name: "Pricing", item: "https://www.revolixtech.com/pricing" },
          ]}
        />
        <PricingContent />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
