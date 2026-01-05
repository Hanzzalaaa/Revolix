"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"

const techCategories = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "Go", "Rust", "Java", "C++"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "React Native", "Flutter"],
  },
  {
    category: "Backend",
    items: ["Node.js", "FastAPI", "Django", "Spring Boot", "GraphQL", "gRPC"],
  },
  {
    category: "AI/ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "LangChain"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Docker", "Terraform"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Snowflake", "Kafka", "Elasticsearch"],
  },
]

export function TechStackSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute right-0 top-0 w-1/2 h-full opacity-5">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_60%)]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Technology</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We work with the latest and most reliable technologies to build robust solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((tech, index) => (
            <ScrollReveal key={tech.category} delay={index * 100}>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-primary mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
