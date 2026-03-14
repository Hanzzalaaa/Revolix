"use client"

import { useState } from "react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "Healthcare", "Fintech", "Entertainment", "eCommerce", "Education", "Legal Tech", "Gaming"]

const caseStudies = [
  {
    id: "AuroraEvents",
    title: "AuroraEvents",
    category: "Entertainment",
    tags: ["AI Platform", "Mobile App", "Event Tech"],
    description:
      "An AI-powered artist booking and event planning platform that revolutionized how event organizers find and book performers, creating a reliable marketplace with over 10,000 artists.",
    results: ["300% increase in bookings", "10K+ artists onboarded", "50% reduction in search time"],
    image: "/entertainment-app-dark-purple-neon.jpg",
    href: "/case-studies/aurora-events",
  },
  {
    id: "MediSync",
    title: "MediSync",
    category: "Healthcare",
    tags: ["AI/ML", "Clinical Trials", "Image Recognition"],
    description:
      "A digital health platform leveraging AI and advanced image capture technology to improve clinical trial enrollment, management, and patient monitoring with unprecedented accuracy.",
    results: ["85% enrollment improvement", "40% faster trial completion", "99.2% image accuracy"],
    image: "/healthcare-app-medical-blue-technology.jpg",
    href: "/case-studies/medi-sync",
  },
  {
    id: "LexaSuite",
    title: "LexaSuite",
    category: "Legal Tech",
    tags: ["AI Assistant", "Contract Analysis", "NLP"],
    description:
      "An AI-powered personal legal assistant that streamlines legal processes, enabling users to draft contracts, analyze risks, research case law, and visualize complex legal scenarios.",
    results: ["70% time savings", "95% accuracy rate", "$2M+ in saved legal fees"],
    image: "/legal-tech-app-scales-justice-dark.jpg",
    href: "/case-studies/lexa-suite",
  },
  {
    id: "FinSight",
    title: "FinSight",
    category: "Fintech",
    tags: ["Compliance", "Internal Audit", "Process Automation"],
    description:
      "A comprehensive platform enhancing companies' financial health with top-tier internal audit consulting, using AI-driven analysis to review and improve compliance processes.",
    results: ["60% audit efficiency gain", "Zero compliance violations", "40% cost reduction"],
    image: "/fintech-compliance-dashboard-dark-green.jpg",
    href: "/case-studies/finsight",
  },
  {
    id: "wits",
    title: "What Is The Sentence",
    category: "Gaming",
    tags: ["Educational Game", "Mobile App", "Gamification"],
    description:
      "An educational gaming app that sparks creativity and tests vocabulary skills through unique sentence generation challenges, making learning fun and engaging for all ages.",
    results: ["500K+ downloads", "4.8 star rating", "15M+ games played"],
    image: "/gaming-education-app-dark-colorful.jpg",
    href: "/case-studies/wits",
  },
  {
    id: "tapnswap",
    title: "TapnSwap",
    category: "eCommerce",
    tags: ["Marketplace", "Sustainability", "Community"],
    description:
      "A groundbreaking platform for free bartering within communities, promoting sustainability by encouraging reuse and fostering community connections through seamless item exchanges.",
    results: ["100K+ successful swaps", "50 tons diverted from landfill", "4.9 user satisfaction"],
    image: "/ecommerce-barter-app-dark-eco.jpg",
    href: "/case-studies/tapnswap",
  },
  {
    id: "medconnect",
    title: "MedConnect",
    category: "Healthcare",
    tags: ["Telemedicine", "Patient Portal", "Integration"],
    description:
      "A comprehensive telemedicine platform connecting patients with healthcare providers, featuring seamless EHR integration, video consultations, and AI-powered symptom assessment.",
    results: ["200K+ consultations", "98% patient satisfaction", "30% reduced no-shows"],
    image: "/telemedicine-app-dark-health.jpg",
    href: "/case-studies/medconnect",
  },
  {
    id: "edulearn",
    title: "EduLearn Pro",
    category: "Education",
    tags: ["E-Learning", "Adaptive Learning", "Analytics"],
    description:
      "An adaptive learning platform that personalizes educational content based on student performance, learning style, and goals, dramatically improving learning outcomes.",
    results: ["45% improvement in scores", "2M+ active learners", "85% course completion"],
    image: "/education-learning-dark-digital.jpg",
    href: "/case-studies/edulearn",
  },
]

export function CaseStudiesFilter() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const filteredStudies =
    activeCategory === "All" ? caseStudies : caseStudies.filter((study) => study.category === activeCategory)

  return (
    <section className="py-12 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(45deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:80px_80px]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredStudies.map((study, index) => (
            <ScrollReveal key={study.id} delay={index * 100}>
              <Link
                href={study.href}
                className="group block"
                onMouseEnter={() => setHoveredId(study.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <article className="rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={`${study.title} - best case studies in the world, case studies in AI`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                        {study.category}
                      </span>
                    </div>

                    {/* Arrow on hover */}
                    <div
                      className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${
                        hoveredId === study.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{study.description}</p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <p className="text-xs text-muted-foreground">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
