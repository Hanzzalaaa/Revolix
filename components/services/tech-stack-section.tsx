"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"

const serviceCategories = [
  {
    category: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "AI Solutions",
      "Predictive Models",
      "Data Processing",
      "AI Integration",
      "Intelligent Systems",
    ],
  },

  {
    category: "AI Automation",
    items: [
      "Workflow Automation",
      "Business Automation",
      "API Automation",
      "Process Automation",
      "AI-Powered Workflows",
      "Automation Systems",
    ],
  },

  {
    category: "AI Agents",
    items: [
      "AI Assistants",
      "Customer Support Agents",
      "Business Agents",
      "Task Automation",
      "AI Chatbots",
      "Agent Integrations",
    ],
  },

  {
    category: "Web Development",
    items: [
      "Next.js",
      "React",
      "Responsive Websites",
      "Business Websites",
      "Custom Web Applications",
      "API Integration",
    ],
  },

  {
    category: "Software Development",
    items: [
      "Custom Software",
      "Backend Development",
      "REST APIs",
      "Database Systems",
      "Business Applications",
      "Software Integration",
    ],
  },

  {
    category: "Mobile App Development",
    items: [
      "Mobile App Solutions",
      "React Native",
      "Cross-Platform Apps",
      "Mobile UI/UX",
      "API Integration",
      "App Architecture",
    ],
  },

  {
    category: "SEO & Digital Marketing",
    items: [
      "Search Engine Optimization",
      "Technical SEO",
      "On-Page SEO",
      "Digital Marketing",
      "Content Strategy",
      "Growth Optimization",
    ],
  },

  {
    category: "E-Commerce & GoHighLevel",
    items: [
      "E-Commerce Websites",
      "Shopify",
      "WooCommerce",
      "GoHighLevel",
      "CRM Setup",
      "Marketing Automation",
    ],
  },

  {
    category: "UI/UX Design & Cloud",
    items: [
      "UI/UX Design",
      "Design Systems",
      "Prototyping",
      "Cloud Infrastructure",
      "DevOps",
      "Deployment & Hosting",
    ],
  },
]

export function TechStackSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <ParallaxSection
        speed={0.1}
        className="absolute right-0 top-0 w-1/2 h-full opacity-5"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_60%)]" />
      </ParallaxSection>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =======================================================
            SECTION HEADING
        ======================================================= */}

        <ScrollReveal>

          <div className="text-center mb-16">

            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">
              What We Do
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Digital & Technology Services
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From AI and automation to software, web development,
              marketing, e-commerce, design, and cloud solutions,
              we help businesses build and scale with modern technology.
            </p>

          </div>

        </ScrollReveal>

        {/* =======================================================
            SERVICE GRID
        ======================================================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {serviceCategories.map((service, index) => (

            <ScrollReveal
              key={service.category}
              delay={index * 100}
            >

              <div className="group h-full p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">

                {/* =================================================
                    SERVICE NUMBER
                ================================================= */}

                <div className="flex items-center justify-between mb-5">

                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-px flex-1 ml-4 bg-border group-hover:bg-primary/20 transition-colors" />

                </div>

                {/* =================================================
                    SERVICE TITLE
                ================================================= */}

                <h3 className="text-lg font-semibold text-primary mb-4">
                  {service.category}
                </h3>

                {/* =================================================
                    SERVICE ITEMS
                ================================================= */}

                <div className="flex flex-wrap gap-2">

                  {service.items.map((item) => (

                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg transition-colors hover:bg-primary/10 hover:text-primary"
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