import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPostSlugs } from "@/lib/content"
import ArticleJsonLd from "@/components/seo/json-ld"

export const revalidate = 60 // ISR: revalidate every 60s

type Props = { params: { slug: string } }

const clampMeta = (value: string, maxLength: number) => {
  if (value.length <= maxLength) return value
  return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: "Post not found" }

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"
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
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/)
    if (linkMatch) {
      return (
        <a key={`${part}-${index}`} href={linkMatch[2]} className="text-primary underline-offset-4 hover:underline">
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

    if (lines[0]?.startsWith("## ")) {
      return (
        <h2 key={`${block}-${index}`} className="text-2xl font-semibold mt-8 mb-4 text-foreground">
          {renderInlineMarkdown(lines[0].replace(/^##\s*/, ""))}
        </h2>
      )
    }

    if (lines[0]?.startsWith("### ")) {
      return (
        <h3 key={`${block}-${index}`} className="text-xl font-semibold mt-6 mb-3 text-foreground">
          {renderInlineMarkdown(lines[0].replace(/^###\s*/, ""))}
        </h3>
      )
    }

    if (lines.every((line) => line.startsWith("- "))) {
      return (
        <ul key={`${block}-${index}`} className="list-disc space-y-2 pl-6 mb-6 text-muted-foreground">
          {lines.map((line, lineIndex) => (
            <li key={`${line}-${lineIndex}`}>{renderInlineMarkdown(line.replace(/^[-]\s*/, ""))}</li>
          ))}
        </ul>
      )
    }

    return (
      <p key={`${block}-${index}`} className="mb-5 leading-8 text-muted-foreground">
        {renderInlineMarkdown(lines.join(" "))}
      </p>
    )
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <main className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">{post.date} - {post.readTime}</p>
        {post.image && (
          <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={`${post.title} - frontend developer and backend developer insights`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="prose max-w-none text-muted-foreground mb-8">
          <p className="text-lg leading-8 mb-8">{post.excerpt}</p>
          {post.content ? renderMarkdownContent(post.content) : null}
        </div>

        <ArticleJsonLd title={post.title} description={post.excerpt || ""} authorName={post.author} datePublished={post.date} url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"}/blog/${post.slug}`} image={post.image} />
      </article>
    </main>
  )
}

