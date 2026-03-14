import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllPostSlugs } from "@/lib/content"
import ArticleJsonLd from "@/components/seo/json-ld"

export const revalidate = 60 // ISR: revalidate every 60s

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: "Post not found" }

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"

  return {
    title: post.title,
    description: post.excerpt,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: post.image ? [{ url: `${SITE_URL}${post.image}`, alt: post.title }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
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
          <p>{post.excerpt}</p>
        </div>

        <ArticleJsonLd title={post.title} description={post.excerpt || ""} authorName={post.author} datePublished={post.date} url={`${process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com"}/blog/${post.slug}`} image={post.image} />
      </article>
    </main>
  )
}

