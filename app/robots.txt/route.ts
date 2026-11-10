import { NextResponse } from "next/server"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.revolixtech.com"

export async function GET() {
  const lines = [
    "# Googlebot",
    "User-agent: Googlebot",
    "Allow: /",
    "Allow: /favicon.ico",
    "Allow: /favicon.png",
    "",
    "# Googlebot-Image",
    "User-agent: Googlebot-Image",
    "Allow: /",
    "Allow: /favicon.ico",
    "Allow: /favicon.png",
    "Allow: /og-image.png",
    "",
    "# All other crawlers",
    "User-agent: *",
    "Allow: /",
    "Disallow: /api",
    "",
    `Host: ${SITE_URL}`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
  ]

  return new NextResponse(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
