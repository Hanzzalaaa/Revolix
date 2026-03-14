import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraphicsHero } from "@/components/graphics/graphics-hero"
import { GraphicsGallery } from "@/components/graphics/graphics-gallery"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Graphics & Art | Revolix - Anime, Vtubers & Digital Art",
  description: "Check out our creative work - anime-style illustrations, vtuber designs, character art, and more. We do tech, but we also love making cool stuff.",
  keywords: [
    "anime art",
    "vtuber design",
    "digital illustration",
    "character design",
    "graphic design portfolio",
    "anime style",
  ],
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
