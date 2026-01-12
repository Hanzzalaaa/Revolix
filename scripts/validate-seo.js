const { URL } = require("url")

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

async function fetchText(path) {
  const res = await fetch(`${SITE}${path}`)
  const text = await res.text()
  return { ok: res.ok, status: res.status, headers: res.headers, text }
}

function checkSitemap(xml) {
  if (!xml.includes("<urlset") || !xml.includes("<loc>")) return false
  return true
}

function checkRobots(text) {
  if (!text.toLowerCase().includes("user-agent")) return false
  if (!text.toLowerCase().includes("sitemap:")) return false
  return true
}

function checkJsonLd(html) {
  return /<script[^>]+type=(?:"|')application\/ld\+json(?:"|')[^>]*>/.test(html)
}

;(async () => {
  console.log(`Validating SEO endpoints against ${SITE}`)

  try {
    const sitemap = await fetchText("/sitemap.xml")
    console.log(`/sitemap.xml -> ${sitemap.status}`)
    const sitemapOk = sitemap.ok && checkSitemap(sitemap.text)
    console.log("sitemap.xml valid:", sitemapOk)

    const robots = await fetchText("/robots.txt")
    console.log(`/robots.txt -> ${robots.status}`)
    const robotsOk = robots.ok && checkRobots(robots.text)
    console.log("robots.txt valid:", robotsOk)

    const home = await fetchText("/")
    console.log(`/ -> ${home.status}`)
    const jsonLdPresent = home.ok && checkJsonLd(home.text)
    console.log("JSON-LD present on homepage:", jsonLdPresent)

    const exitCode = sitemapOk && robotsOk && jsonLdPresent ? 0 : 2
    process.exit(exitCode)
  } catch (err) {
    console.error("Error validating SEO endpoints:", err)
    process.exit(3)
  }
})()
