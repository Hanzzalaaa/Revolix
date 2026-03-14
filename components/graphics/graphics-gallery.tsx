"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Anime", "Vtubers", "Characters", "Illustrations", "Fan Art"]

const artworks = [
  {
    id: 1,
    title: "Cyber Vtuber",
    category: "Vtubers",
    description: "Cyberpunk-themed vtuber character design with holographic elements",
    image: "/Vtuber/1.jpg",
    tags: ["Vtuber", "Cyberpunk", "Character Design"],
  },
  {
    id: 2,
    title: "Fantasy Mage",
    category: "Anime",
    description: "Anime-style fantasy mage character with elemental magic",
    image: "/Digital%20Art/2.jpg",
    tags: ["Anime", "Fantasy", "Magic"],
  },
  {
    id: 3,
    title: "Neko Streamer",
    category: "Vtubers",
    description: "Cute cat-eared streamer vtuber avatar design",
    image: "/Vtuber/3.jpg",
    tags: ["Vtuber", "Kawaii", "Neko"],
  },
  {
    id: 4,
    title: "Warrior Princess",
    category: "Characters",
    description: "Strong female warrior character with detailed armor",
    image: "/Digital%20Art/4.jpg",
    tags: ["Character", "Warrior", "Fantasy"],
  },
  {
    id: 5,
    title: "Sakura Dreams",
    category: "Illustrations",
    description: "Peaceful spring scene with cherry blossoms",
    image: "/Digital%20Art/5.jpg",
    tags: ["Illustration", "Nature", "Peaceful"],
  },
  {
    id: 6,
    title: "Dragon Slayer",
    category: "Fan Art",
    description: "Epic dragon battle scene fan art",
    image: "/Digital%20Art/6.jpg",
    tags: ["Fan Art", "Dragon", "Action"],
  },
  {
    id: 7,
    title: "Idol Singer",
    category: "Anime",
    description: "Pop idol character in stage outfit",
    image: "/Digital%20Art/7.jpg",
    tags: ["Anime", "Idol", "Music"],
  },
  {
    id: 8,
    title: "Tech Witch",
    category: "Characters",
    description: "Modern witch with tech gadgets and magical elements",
    image: "/Digital%20Art/8.jpg",
    tags: ["Character", "Tech", "Magic"],
  },
  {
    id: 9,
    title: "Demon Vtuber",
    category: "Vtubers",
    description: "Demonic vtuber design with wings and horns",
    image: "/Vtuber/9.png",
    tags: ["Vtuber", "Demon", "Dark"],
  },
]

export function GraphicsGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null)

  const filteredArtworks = activeCategory === "All" 
    ? artworks 
    : artworks.filter(art => art.category === activeCategory)

  const handlePrevious = () => {
    if (!selectedImage) return
    const currentIndex = artworks.findIndex(art => art.id === selectedImage.id)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : artworks.length - 1
    setSelectedImage(artworks[prevIndex])
  }

  const handleNext = () => {
    if (!selectedImage) return
    const currentIndex = artworks.findIndex(art => art.id === selectedImage.id)
    const nextIndex = currentIndex < artworks.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(artworks[nextIndex])
  }

  return (
    <section className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-purple-500/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork, index) => (
            <ScrollReveal key={artwork.id} delay={index * 100}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-card border border-border cursor-pointer"
                onClick={() => setSelectedImage(artwork)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20" />
                
                <Image
                  src={artwork.image}
                  alt={`${artwork.title} - graphic design artwork`}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{artwork.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{artwork.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {artwork.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs text-white">
                  {artwork.category}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Empty State */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No artworks found in this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 mb-6">
                <Image
                  src={selectedImage.image}
                  alt={`${selectedImage.title} - graphic design artwork`}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-400 mb-4">{selectedImage.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedImage.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
