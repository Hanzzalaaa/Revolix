"use client"

import { useState } from "react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import { Clock, ArrowRight } from "lucide-react"


const categories = ["All", "AI & ML", "App development", "Web development", "UI/UX Design"]

const posts = [
  {
    id: "future-of-ai-enterprise",
    title: "The Future of AI in Enterprise: 2025 and Beyond",
    excerpt:
      "Explore how artificial intelligence is reshaping enterprise operations, from automated decision-making to predictive analytics and beyond.",
    category: "AI & ML",
    author: "Alexandra Chen",
    authorRole: "CEO",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "/Blog/1.jpg",
    featured: true,
  },
  {
    id: "building-scalable-ml-pipelines",
    title: "Building Scalable ML Pipelines: A Practical Guide",
    excerpt:
      "Learn best practices for designing and implementing machine learning pipelines that can scale with your business needs.",
    category: "App development",
    author: "Marcus Rodriguez",
    authorRole: "CTO",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    image: "/Blog/2.jpg",
    featured: false,
  },
  {
    id: "design-systems-ai-products",
    title: "Design Systems for AI-Powered Products",
    excerpt:
      "How to create consistent, accessible design systems that adapt to the unique challenges of AI-driven interfaces.",
    category: "App development",
    author: "Sarah Kim",
    authorRole: "CDO",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    image: "/Blog/3.png",
    featured: false,
  },
  {
    id: "digital-transformation-roadmap",
    title: "Creating a Digital Transformation Roadmap",
    excerpt:
      "A step-by-step guide to planning and executing successful digital transformation initiatives in your organization.",
    category: "App development",
    author: "David Thompson",
    authorRole: "VP Engineering",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    image: "/Blog/4.jpg",
    featured: false,
  },
  {
    id: "healthcare-ai-trends",
    title: "AI in Healthcare: Trends Shaping 2025",
    excerpt:
      "From diagnostic AI to personalized treatment plans, discover the innovations transforming healthcare delivery.",
    category: "Web development",
    author: "Marcus Rodriguez",
    authorRole: "CTO",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    image: "/Blog/6.jpg",
    featured: false,
  },
    {
    id: "healthcare-ai-trends",
    title: "AI in Healthcare: Trends Shaping 2025",
    excerpt:
      "From diagnostic AI to personalized treatment plans, discover the innovations transforming healthcare delivery.",
    category: "Web development",
    author: "Marcus Rodriguez",
    authorRole: "CTO",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    image: "/Blog/6.jpg",
    featured: false,
  },
    {
    id: "healthcare-ai-trends",
    title: "AI in Healthcare: Trends Shaping 2025",
    excerpt:
      "From diagnostic AI to personalized treatment plans, discover the innovations transforming healthcare delivery.",
    category: "Web development",
    author: "Marcus Rodriguez",
    authorRole: "CTO",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    image: "/Blog/6.jpg",
    featured: false,
  },
  {
    id: "healthcare-ai-trends",
    title: "AI in Healthcare: Trends Shaping 2025",
    excerpt:
      "From diagnostic AI to personalized treatment plans, discover the innovations transforming healthcare delivery.",
    category: "UI/UX Design",
    author: "Marcus Rodriguez",
    authorRole: "CTO",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    image: "/Blog/6.jpg",
    featured: false,
  },
    {
    id: "healthcare-ai-trends",
    title: "AI in Healthcare: Trends Shaping 2025",
    excerpt:
      "From diagnostic AI to personalized treatment plans, discover the innovations transforming healthcare delivery.",
    category: "UI/UX Design",
    author: "Marcus Rodriguez",
    authorRole: "CTO",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    image: "/Blog/6.jpg",
    featured: false,
  },
    {
    id: "healthcare-ai-trends",
    title: "AI in Healthcare: Trends Shaping 2025",
    excerpt:
      "From diagnostic AI to personalized treatment plans, discover the innovations transforming healthcare delivery.",
    category: "UI/UX Design",
    author: "Marcus Rodriguez",
    authorRole: "CTO",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    image: "/Blog/6.jpg",
    featured: false,
  },
]

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts = activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory)

  const featuredPost = filteredPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)


console.log(activeCategory);
  return (
    <section className="py-12 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(135deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:60px_60px]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Coming Soon Message */}
        <ScrollReveal>
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Blog Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're working on bringing you insightful articles about AI, technology, and digital innovation. Stay tuned!
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Clock className="w-4 h-4" />
                Coming Soon
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured Post */}
        {featuredPost && (
          <ScrollReveal>
            <Link href={`/blog/${featuredPost.id}`} className="group block mb-12">
              <article className="grid lg:grid-cols-2 gap-8 rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-sm text-primary font-medium mb-3">{featuredPost.category}</span>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary" />
                      <div>
                        <p className="text-sm font-medium">{featuredPost.author}</p>
                        <p className="text-xs text-muted-foreground">{featuredPost.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </ScrollReveal>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <Link href={`/blog/${post.id}`} className="group block h-full">
                  <article className="h-full rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}    
                        alt={post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs text-primary font-medium mb-2">{post.category}</span>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Load More - Hidden */}
        {false && (
          <ScrollReveal delay={400}>
            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors group">
                Load More Articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
