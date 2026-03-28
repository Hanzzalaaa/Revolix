import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraphicsHero } from "@/components/graphics/graphics-hero"
import { GraphicsGallery } from "@/components/graphics/graphics-gallery"
import { CTASection } from "@/components/cta-section"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Graphics & Digital Art | Revolix",
    description: "Graphics & digital art by Revolix—anime art, vtuber designs, and character illustration.",
    keywords: [
      "anime art",
      "vtuber design",
      "digital illustration",
      "character design",
      "graphic design portfolio",
      "anime style",
    ],
  }
}

export default function GraphicsPage() {
  const SHOW_GRAPHICS = process.env.NEXT_PUBLIC_SHOW_GRAPHICS === "true"
  if (!SHOW_GRAPHICS) {
    return notFound()
  }

  return (
    <ParallaxProvider>
      <Header />
      <main>
        <GraphicsHero />
        <GraphicsGallery />
        <CTASection />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}



