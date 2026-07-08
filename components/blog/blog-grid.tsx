"use client"

import { useState } from "react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import { RevolixLogo } from "@/components/revolix-logo"
import { Clock, ArrowRight } from "lucide-react"


const categories = ["All", "AI & ML", "App development", "Web development", "UI/UX Design", "SEO"]

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
]

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts = activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory)

  const featuredPost = filteredPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)
  return (
    <section className="py-12 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(135deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:60px_60px]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">SEO Tips</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-2">On Page SEO</h3>
                <p className="text-sm text-muted-foreground">Actionable on-page tactics for higher rankings.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-2">Keyword Research</h3>
                <p className="text-sm text-muted-foreground">Find the keywords your buyers actually search.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Web Development</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-2">Website Design</h3>
                <p className="text-sm text-muted-foreground">Design patterns that convert and build trust.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-2">UI UX</h3>
                <p className="text-sm text-muted-foreground">User-first experiences for better engagement.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Digital Marketing</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                <p className="text-sm text-muted-foreground">Content that grows reach and brand trust.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-2">Ads Strategy</h3>
                <p className="text-sm text-muted-foreground">Campaigns engineered for ROI and scale.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-20 text-muted-foreground space-y-5">
            <p>
              This blog is where we document what actually works in SEO, web development, and digital marketing. We
              publish clear, implementation-ready guidance for teams that want results without hype. Each article is
              built to be practical for founders, marketing managers, and technical teams who need a real plan for
              growth and visibility. You will find frameworks, templates, and examples that explain why something
              matters and how to execute it correctly.
            </p>
            <p>
              For SEO tips, we focus on the fundamentals that consistently move rankings: intent-aligned headings,
              clean metadata, fast page speed, and internal links that guide users to the next best action. We cover
              technical audits, on-page improvements, and content planning so your pages are easy to crawl and easy to
              trust. Our recommendations avoid keyword stuffing and prioritize readability, because users and search
              engines are both looking for clarity.
            </p>
            <p>
              Web development content is written for both decision-makers and engineers. We break down how to structure
              pages, optimize layout for conversion, and maintain accessibility as your site grows. Topics include
              performance optimization, responsive design, and modern frameworks such as Next.js. Whether you are a
              backend developer or a frontend developer, you will find workflow insights that connect engineering
              quality with business outcomes.
            </p>
            <p>
              On the digital marketing side, we show how to connect campaigns to landing pages that convert. That means
              aligning ad copy, social messaging, and email flows with the same value proposition a visitor sees on
              arrival. When marketing and product teams share a single message, conversion rates rise and bounce rates
              drop. We also explain how to track results with clear KPIs that help you make confident decisions.
            </p>
            <p>
              We publish with a simple editorial standard: actionable insights, real examples, and straightforward
              steps. If something requires a specific tool, we describe the reasoning before pointing to the tool. If a
              strategy depends on data, we show the measurement and the expected impact. This approach keeps the blog
              useful for both newcomers and experienced practitioners who want to sharpen their process.
            </p>
            <p>
              You can also expect posts that explain how to choose the right approach for your business. For example,
              when to prioritize technical fixes over new content, how to decide between long-form guides and landing
              pages, and what to measure after a redesign. These are practical decisions teams face every quarter, and
              we break them down with clear trade-offs rather than generic advice.
            </p>
            <p>
              If you are building internal capability, the blog is structured to help you train your team. Share posts
              with designers, developers, and marketers so everyone understands the same goals and vocabulary. That
              alignment makes SEO projects smoother, keeps timelines predictable, and improves quality across the board.
            </p>
            <p>
              The goal is to help you build a sustainable content engine that supports long-term rankings, not just
              short-term spikes. We show how to build topic clusters, map keywords to real business intent, and publish
              content that answers specific questions your buyers ask. That is how you earn trust, improve CTR, and
              convert visits into sales conversations.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Step-by-step SEO checklists you can implement immediately.</li>
              <li>Website architecture guides that improve usability and crawlability.</li>
              <li>Digital marketing playbooks for paid and organic growth.</li>
              <li>Conversion tactics for landing pages and lead capture.</li>
            </ul>
            <p>
              As new content goes live, we will expand into deeper case studies and tactical tutorials. Until then, use
              this section as a foundation for your content strategy, and reach out if you want help implementing any
              of these ideas for your brand.
            </p>
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
                    alt={`${featuredPost.title} - frontend developer and backend developer blog`}
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
                  <p className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <RevolixLogo size="sm" showText={false} />
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
              <ScrollReveal key={`${post.id}-${index}`} delay={index * 100}>
                <Link href={`/blog/${post.id}`} className="group block h-full">
                  <article className="h-full rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={`${post.title} - frontend developer and backend developer blog`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs text-primary font-medium mb-2">{post.category}</span>
                      <p className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </p>
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
