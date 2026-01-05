"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import { ParallaxSection } from "./parallax-section"
import { ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react"

const testimonials = [
  {
    quote:
      "The support from Revolix Technologies has been very applaudable. They are knowledgeable, able to work with their client to bring to life desires. Working with the team has been instrumental to my online business coming to life.",
    author: "James Berkley",
    role: "CEO, TechStart",
    avatar: "/professional-man-headshot.png",
  },
  {
    quote:
      "Revolix did a fantastic job on our creative package! Our website design was sleek and had a very innovative feel to it. We were so impressed with their web design that we gave them the project of designing our product packaging.",
    author: "D.A. Rowe",
    role: "Founder, Innovate Labs",
    avatar: "/professional-woman-headshot.png",
  },
  {
    quote:
      "Revolix Technologies is my go-to web developer and has been helpful over the past 2 years aiding in multiple sites. They are experts in development and all things UI/UX.",
    author: "Sydney Cummings",
    role: "Marketing Director, GrowthCo",
    avatar: "/diverse-professional-headshots.png",
  },
  {
    quote:
      "I can recommend Revolix highly enough! They have been instrumental in bringing my vision to life, starting from the logo design and website development, all the way to now, where we are collaborating on our marketing campaign.",
    author: "Wen Qian",
    role: "Product Manager, DataFlow",
    avatar: "/professional-asian-woman-headshot.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Enhanced parallax backgrounds */}
      <ParallaxSection speed={0.15} mouseParallax mouseIntensity={0.01} className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </ParallaxSection>

      <ParallaxSection speed={0.3} rotateOnScroll className="absolute top-10 right-10 w-32 h-32 opacity-10">
        <div className="w-full h-full rounded-full bg-accent blur-2xl" />
      </ParallaxSection>

      <ParallaxSection speed={0.25} direction="down" className="absolute bottom-10 left-10 w-40 h-40 opacity-10">
        <div className="w-full h-full rounded-full bg-primary blur-2xl" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale">
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <MessageSquare className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Testimonials</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative">
            <motion.div
              className="absolute -top-8 -left-4 w-20 h-20 text-primary/10"
              animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              <Quote className="w-full h-full" />
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-8 lg:p-12 border border-border/50"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <img
                          src={currentTestimonial.avatar || "/placeholder.svg"}
                          alt={currentTestimonial.author}
                          className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-primary"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </motion.div>
                      <div>
                        <p className="font-display font-semibold text-foreground">{currentTestimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <motion.button
                        onClick={prevSlide}
                        className="p-3 rounded-full glass border border-border hover:border-primary hover:text-primary transition-colors"
                        aria-label="Previous testimonial"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        onClick={nextSlide}
                        className="p-3 rounded-full glass border border-border hover:border-primary hover:text-primary transition-colors"
                        aria-label="Next testimonial"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
