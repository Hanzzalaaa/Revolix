/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.revolixtech.com",
  generateRobotsTxt: true,
  exclude: [
    "/api/*",
    "/graphics",
    "/terms-and-conditions",
    "/backend-deve",
    "/backend-developer",
    "/frontend-developer",
    "/best-institute-for-web-development",
    "/ai-software-development-company",
  ],
  additionalPaths: async (config) => {
    const slugs = [
      "/backend-development",
      "/advance-development-inc",
      "/best-10-quality-assurance-companies-in-the-world",
      "/best-data-science-companies",
      "/best-security-companies",
      "/best-ui-ux-designer",
      "/best-software-development-companies-in-pakistan",
      "/ai-tools-for-software-development",
      "/best-case-studies-in-the-world",
      "/case-studies-in-ai",
      "/ai-website",
      "/starting-a-business",
      "/small-business",
    ]

    return slugs.map((path) => ({
      loc: path,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }))
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "Googlebot",
        allow: ["/", "/favicon.ico", "/favicon.png"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/favicon.ico", "/favicon.png", "/og-image.png"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api"],
      },
    ],
    additionalSitemaps: [],
  },
}

