import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.revolixtech.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.revolixtech.com/services',
      lastModified: new Date(),
    },
    {
      url: 'https://www.revolixtech.com/industries',
      lastModified: new Date(),
    },
    {
      url: 'https://www.revolixtech.com/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://www.revolixtech.com/contact',
      lastModified: new Date(),
    },

    // SEO Pages
    {
      url: 'https://www.revolixtech.com/best-institute-for-web-development',
      lastModified: new Date(),
    },
    {
      url: 'https://www.revolixtech.com/ai-software-development-company',
      lastModified: new Date(),
    },
    {
      url: 'https://www.revolixtech.com/backend-developer',
      lastModified: new Date(),
    },
    {
      url: 'https://www.revolixtech.com/frontend-developer',
      lastModified: new Date(),
    },
  ]
}