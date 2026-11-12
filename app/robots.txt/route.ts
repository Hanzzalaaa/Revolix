import { NextResponse } from "next/server"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.revolixtech.com"

export async function GET() {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/private",
    "",
    "User-agent: GPTBot",
    "Allow: /",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
  ]

  return new NextResponse(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
