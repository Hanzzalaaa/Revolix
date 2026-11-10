import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPostSlugs } from "@/lib/content"
import ArticleJsonLd from "@/components/seo/json-ld"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const revalidate = 60 // ISR: revalidate every 60s

type Props = { params: { slug: string } }

const clampMeta = (value: string, maxLength: number) => {
  if (value.length <= maxLength) return value
  return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: "Post not found" }

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.revolixtech.com"
  const title = clampMeta(post.title, 60)
  const description = clampMeta(post.excerpt || "", 160)

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: post.image ? [{ url: `${SITE_URL}${post.image}`, alt: post.title }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

function renderInlineMarkdown(text: string) {
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^\)]+\))/g
  const parts = text.split(regex).filter(Boolean)

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`} className="text-foreground">{part.slice(2, -2)}</strong>
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/)
    if (linkMatch) {
      return (
        <a 
          key={`${part}-${index}`} 
          href={linkMatch[2]} 
          className="text-primary font-semibold underline-offset-4 hover:underline transition-colors hover:text-primary/80"
        >
          {linkMatch[1]}
        </a>
      )
    }

    return <span key={`${part}-${index}`}>{part}</span>
  })
}

function renderMarkdownContent(content: string) {
  const blocks = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)

  return blocks.map((block, index) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean)

    // Heading regex covering h1 through h6
    const headingMatch = lines[0]?.match(/^(#{1,6})\s*(.*)$/)
    if (headingMatch) {
      const level = headingMatch[1].length
      const headingText = headingMatch[2]

      if (level <= 2) {
        return (
          <h2 key={`${block}-${index}`} className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-foreground tracking-tight">
            {renderInlineMarkdown(headingText)}
          </h2>
        )
      }

      if (level === 3) {
        return (
          <h3 key={`${block}-${index}`} className="text-xl font-semibold mt-8 mb-3 text-foreground tracking-tight">
            {renderInlineMarkdown(headingText)}
          </h3>
        )
      }

      return (
        <h4 key={`${block}-${index}`} className="text-lg font-semibold mt-6 mb-2 text-foreground">
          {renderInlineMarkdown(headingText)}
        </h4>
      )
    }

    if (lines.every((line) => line.startsWith("- ") || line.startsWith("* "))) {
      return (
        <ul key={`${block}-${index}`} className="list-none space-y-3 mb-8 text-muted-foreground">
          {lines.map((line, lineIndex) => (
            <li key={`${line}-${lineIndex}`} className="flex items-start gap-3 group">
              <span className="text-primary mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="transition-colors group-hover:text-foreground">
                {renderInlineMarkdown(line.replace(/^[-*]\s*/, ""))}
              </span>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <p key={`${block}-${index}`} className="mb-6 leading-8 text-muted-foreground transition-colors hover:text-foreground/90">
        {renderInlineMarkdown(lines.join(" "))}
      </p>
    )
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <ParallaxProvider>
      <Header />
      <main className="relative overflow-hidden py-20 lg:py-28">
        
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute -right-1/4 top-2/3 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
        </div>

        <section className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Vertical reading column lines */}
          <div className="absolute inset-y-0 left-0 w-[3px] bg-border hidden md:block" />
<div className="absolute inset-y-0 right-0 w-[3px] bg-border hidden md:block" />

          <article className="max-w-3xl mx-auto md:px-12 relative z-10">
            {/* Header Content */}
            <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground">{post.date} &bull; {post.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden border border-border shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10 pointer-events-none" />
                <Image
                  src={post.image}
                  alt={`${post.title} - frontend developer and backend developer insights`}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            )}

            {/* Markdown Body */}
            <div className="prose max-w-none text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              {post.content ? renderMarkdownContent(post.content) : null}
            </div>

            <ArticleJsonLd 
              title={post.title} 
              description={post.excerpt || ""} 
              authorName={post.author} 
              datePublished={post.date} 
              url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.revolixtech.com"}/blog/${post.slug}`} 
              image={post.image} 
            />
          </article>
        </section>
      </main>
      <Footer />
    </ParallaxProvider>
  )
}