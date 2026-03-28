const fs = require("fs")
const path = require("path")

const SITE_URL = process.env.SEO_AUDIT_URL || process.env.NEXT_PUBLIC_SITE_URL || ""
const ROOT = path.resolve(__dirname, "..")
const KEYWORDS_PATH = path.resolve(__dirname, "seo-keywords.json")

function loadConfig() {
  if (!fs.existsSync(KEYWORDS_PATH)) {
    return { pages: [] }
  }
  const raw = fs.readFileSync(KEYWORDS_PATH, "utf8")
  try {
    return JSON.parse(raw)
  } catch (err) {
    console.error("Invalid JSON in scripts/seo-keywords.json")
    process.exit(2)
  }
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function countWords(text) {
  if (!text) return 0
  return text.split(/\s+/).filter(Boolean).length
}

function keywordDensity(text, keyword) {
  if (!text || !keyword) return 0
  const wordCount = countWords(text)
  if (wordCount === 0) return 0
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const re = new RegExp(`\\b${escaped}\\b`, "gi")
  const matches = text.match(re)
  const occurrences = matches ? matches.length : 0
  return occurrences / wordCount
}

async function fetchHtml(pathname) {
  if (!SITE_URL) return null
  const url = `${SITE_URL}${pathname}`
  const res = await fetch(url)
  const html = await res.text()
  return { ok: res.ok, status: res.status, html }
}

function tryExtractLocalText(routePath) {
  const appDir = path.join(ROOT, "app")
  const slugPath = routePath === "/" ? "" : routePath.replace(/^\//, "")
  const pagePath = path.join(appDir, slugPath, "page.tsx")
  if (!fs.existsSync(pagePath)) {
    return null
  }
  const raw = fs.readFileSync(pagePath, "utf8")
  return raw
    .replace(/`[^`]*`/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

async function auditPage(config) {
  const { path: routePath, primaryKeyword, minWords = 0, maxDensity = 0.04 } = config
  let textSource = ""
  let source = "local"

  const remote = await fetchHtml(routePath)
  if (remote && remote.ok) {
    textSource = stripHtml(remote.html)
    source = "remote"
  } else {
    const local = tryExtractLocalText(routePath)
    if (local) {
      textSource = local
    }
  }

  const words = countWords(textSource)
  const density = keywordDensity(textSource.toLowerCase(), primaryKeyword.toLowerCase())

  const passWords = words >= minWords
  const passDensity = density <= maxDensity

  return {
    routePath,
    source,
    words,
    minWords,
    density,
    maxDensity,
    passWords,
    passDensity,
    keyword: primaryKeyword,
  }
}

function fmtPercent(value) {
  return `${(value * 100).toFixed(2)}%`
}

async function main() {
  const config = loadConfig()
  if (!config.pages || config.pages.length === 0) {
    console.log("No pages configured in scripts/seo-keywords.json")
    process.exit(1)
  }

  console.log("SEO Audit")
  console.log(`Source: ${SITE_URL ? "remote" : "local"}${SITE_URL ? ` (${SITE_URL})` : ""}`)
  console.log("")

  let hasFailures = false
  for (const page of config.pages) {
    const result = await auditPage(page)
    const wordStatus = result.passWords ? "PASS" : "FAIL"
    const densityStatus = result.passDensity ? "PASS" : "FAIL"
    if (!result.passWords || !result.passDensity) hasFailures = true

    console.log(`${result.routePath}`)
    console.log(`- Keyword: ${result.keyword}`)
    console.log(`- Word count: ${result.words} (min ${result.minWords}) -> ${wordStatus}`)
    console.log(`- Keyword density: ${fmtPercent(result.density)} (max ${fmtPercent(result.maxDensity)}) -> ${densityStatus}`)
    console.log(`- Source: ${result.source}`)
    console.log("")
  }

  process.exit(hasFailures ? 2 : 0)
}

main().catch((err) => {
  console.error("SEO audit failed:", err)
  process.exit(3)
})
