import { NextResponse } from "next/server"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://revolix.example"

export async function GET() {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/private",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
  ]

  return new NextResponse(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
