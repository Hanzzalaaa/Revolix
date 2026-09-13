"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

const posts = [
  {
    id: "on-page-seo-checklist-2026",
    title: "On-Page SEO Checklist 2026: 15 Steps to Actually Rank Higher",
    excerpt:
      "A practical SEO checklist for publishers and business owners who want better rankings without relying on guesswork.",
    category: "SEO",
    author: "Revolix Team",
    authorRole: "SEO Team",
    date: "Jul 7, 2026",
    readTime: "8 min read",
    image: "/Blog/seo-checklist-cover.svg",
    featured: true,
  },

  {
    id: "ai-agents-for-business",
    title: "AI Agents for Business: Where They Actually Make Sense",
    excerpt:
      "A practical look at how AI agents can handle repetitive tasks, support customers, qualify leads, and connect business workflows.",
    category: "AI & Automation",
    author: "Revolix Team",
    authorRole: "AI Team",
    date: "Aug 2, 2026",
    readTime: "7 min read",
    image: "/Blog/AI-auto.jpg",
  },

  {
    id: "gohighlevel-automation-workflows",
    title: "5 GoHighLevel Automations That Can Save Your Team Time",
    excerpt:
      "From missed-call text-back to lead follow-ups and appointment reminders, these workflows show where CRM automation can make a practical difference.",
    category: "GoHighLevel",
    author: "Revolix Team",
    authorRole: "Automation Team",
    date: "Aug 9, 2026",
    readTime: "6 min read",
    image: "/Blog/ghl.jpg",
  },

  {
    id: "nextjs-performance-guide",
    title: "How to Build a Faster Website Without Rebuilding Everything",
    excerpt:
      "A practical guide to improving website performance through image optimization, better rendering, cleaner code, and smarter architecture.",
    category: "Web Development",
    author: "Revolix Team",
    authorRole: "Development Team",
    date: "Aug 16, 2026",
    readTime: "8 min read",
    image: "/Blog/webDev.jpg",
  },

  {
    id: "ui-ux-conversion-principles",
    title: "UI/UX Design Principles That Make Business Websites Easier to Use",
    excerpt:
      "Simple interface decisions that improve navigation, clarity, usability, and the overall experience of a business website.",
    category: "UI/UX Design",
    author: "Revolix Team",
    authorRole: "Design Team",
    date: "Aug 23, 2026",
    readTime: "6 min read",
    image: "/Blog/uiux.jpg",
  },
]

export function BlogGrid() {
  const featuredPost = posts.find((post) => post.featured)
  const regularPosts = posts.filter((post) => !post.featured)

  return (
    <section className="relative overflow-hidden py-12">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <ParallaxSection
        speed={0.1}
        className="absolute inset-0 opacity-5"
      >
        <div className="h-full w-full bg-[linear-gradient(135deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:60px_60px]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =======================================================
            INTRO
        ======================================================= */}

        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Insights & Guides
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Practical Ideas for Building & Growing
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Explore practical insights across AI, automation, web
              development, SEO, GoHighLevel, UI/UX, and digital growth.
            </p>
          </div>
        </ScrollReveal>

        {/* =======================================================
            FEATURED POST
        ======================================================= */}

        {featuredPost && (
          <ScrollReveal>
            <Link
              href={`/blog/${featuredPost.id}`}
              className="group mb-12 block"
            >
              <article className="grid overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 lg:grid-cols-2">
                {/* Featured image */}
                <div className="relative aspect-video overflow-hidden lg:aspect-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Featured content */}
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <span className="mb-3 text-sm font-medium text-primary">
                    {featuredPost.category}
                  </span>

                  <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-primary lg:text-3xl">
                    {featuredPost.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium">
                        {featuredPost.author}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {featuredPost.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          </ScrollReveal>
        )}

        {/* =======================================================
            REGULAR POSTS
        ======================================================= */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  {regularPosts.map((post, index) => (
    <ScrollReveal
      key={post.id}
      delay={index * 100}
    >
      <Link
        href={`/blog/${post.id}`}
        className="group block h-full"
      >
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
          {/* =================================================
              POST IMAGE
          ================================================= */}

          <div className="relative aspect-[530/395] overflow-hidden bg-muted/30">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* =================================================
              POST CONTENT
          ================================================= */}

          <div className="flex flex-1 flex-col p-6">
            <span className="mb-2 text-xs font-medium text-primary">
              {post.category}
            </span>

            <h3 className="mb-3 line-clamp-2 text-lg font-semibold transition-colors group-hover:text-primary">
              {post.title}
            </h3>

            <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between border-t border-border pt-4">
              <p className="text-xs text-muted-foreground">
                {post.date}
              </p>

              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </div>
            </div>
          </div>
        </article>
      </Link>
    </ScrollReveal>
  ))}
</div>

        {/* =======================================================
            BOTTOM LINK
        ======================================================= */}

        <ScrollReveal delay={400}>
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              Explore Our Services

              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

