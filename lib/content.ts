export type Post = {
  slug: string
  title: string
  excerpt?: string
  content?: string
  category?: string
  author?: string
  date?: string
  readTime?: string
  image?: string
}

export type CaseStudy = {
  slug: string
  title: string
  industry?: string
  tags?: string[]
  description?: string
  results?: string[]
  image?: string
}

export const posts: Post[] = [
  {
    slug: "future-of-ai-enterprise",
    title: "The Future of AI in Enterprise: 2025 and Beyond",
    excerpt:
      "Explore how artificial intelligence is reshaping enterprise operations, from automated decision-making to predictive analytics and beyond.",
    category: "AI & ML",
    author: "Alexandra Chen",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "/blog-ai-enterprise-future.jpg",
    content: "",
  },
  {
    slug: "building-scalable-ml-pipelines",
    title: "Building Scalable ML Pipelines: A Practical Guide",
    excerpt:
      "Learn best practices for designing and implementing machine learning pipelines that can scale with your business needs.",
    category: "Engineering",
    author: "Marcus Rodriguez",
    date: "2024-12-10",
    readTime: "12 min read",
    image: "/blog-ml-pipelines-code.jpg",
    content: "",
  },
]

export const caseStudies: CaseStudy[] = [
  {
    slug: "aurora-events",
    title: "AuroraEvents",
    industry: "Entertainment",
    tags: ["Evaluation and Design", "PWA", "Mobile Development"],
    description:
      "An AI-powered artist booking and event planning platform aimed at creating a reliable, intuitive space where event organizers can easily find and book performers.",
    image: "/entertainment-app-dark-purple-neon.jpg",
    results: [],
  },
  {
    slug: "medi-sync",
    title: "MediSync",
    industry: "Healthcare",
    tags: ["AI Integration", "Image Recognition", "Clinical Trials"],
    description:
      "A digital health platform leveraging artificial intelligence and advanced image capture technology to improve clinical trial enrollment and monitoring.",
    image: "/healthcare-app-medical-blue-technology.jpg",
    results: [],
  },
]

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null
}

export function getAllPostSlugs() {
  return posts.map((p) => p.slug)
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug) || null
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((c) => c.slug)
}
