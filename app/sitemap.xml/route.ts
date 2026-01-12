import { NextResponse } from "next/server"
import { posts, caseStudies } from "@/lib/content"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolix.example"

function formatUrl(path: string, lastmod?: string) {
  return `  <url>\n    <loc>${SITE_URL}${path}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}\n  </url>`
}

export async function GET() {
  const staticPages = ["/", "/about", "/blog", "/case-studies", "/contact", "/services", "/industries", "/graphics"]

  const pageEntries = staticPages.map((p) => formatUrl(p, new Date().toISOString().slice(0, 10))).join("\n")

  const postEntries = posts
    .map((post) => formatUrl(`/blog/${post.slug}`, post.date || new Date().toISOString().slice(0, 10)))
    .join("\n")

  const caseEntries = caseStudies
    .map((c) => formatUrl(`/case-studies/${c.slug}`, c.results && c.results.length ? new Date().toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10)))
    .join("\n")

  const urlset = [pageEntries, postEntries, caseEntries].filter(Boolean).join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>`

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}
