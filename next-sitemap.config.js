/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://revolixtech.com",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/graphics"],
  additionalPaths: async (config) => {
    const slugs = [
      "/best-institute-for-web-development",
      "/advance-development-inc",
      "/best-10-quality-assurance-companies-in-the-world",
      "/best-data-science-companies",
      "/best-security-companies",
      "/best-ui-ux-designer",
      "/ai-software-development-company",
      "/best-software-development-companies-in-pakistan",
      "/ai-tools-for-software-development",
      "/best-case-studies-in-the-world",
      "/case-studies-in-ai",
      "/ai-website",
      "/backend-developer",
      "/frontend-developer",
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
        userAgent: "*",
        allow: "/",
        disallow: ["/api"],
      },
    ],
  },
}
