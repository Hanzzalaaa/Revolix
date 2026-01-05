"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import {
  Brain,
  Code2,
  Cloud,
  BarChart3,
  Shield,
  Palette,
  Cpu,
  Database,
  Rocket,
  Settings,
  Globe,
  ChevronDown,
} from "lucide-react"

const services = [
  {
    id: "ai",
    icon: Brain,
    title: "AI Model & Algorithm Development",
    shortDesc: "Custom AI solutions leveraging cutting-edge machine learning.",
    description:
      "We design and deploy custom AI models tailored to your specific business needs. Our expertise spans natural language processing, computer vision, predictive analytics, and recommendation systems.",
    features: [
      "Custom ML model development",
      "Natural Language Processing",
      "Computer Vision solutions",
      "Predictive analytics",
      "Recommendation engines",
      "AI model optimization",
    ],
  },
  {
    id: "software",
    icon: Code2,
    title: "Software & Product Development",
    shortDesc: "End-to-end development from concept to deployment.",
    description:
      "From ideation to deployment, we build robust, scalable software products. Our team specializes in web applications, mobile apps, enterprise software, and SaaS platforms.",
    features: [
      "Web application development",
      "Mobile app development (iOS/Android)",
      "Enterprise software solutions",
      "SaaS platform development",
      "API development & integration",
      "Legacy system modernization",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & Infrastructure Optimization",
    shortDesc: "Scalable cloud solutions with AWS, Azure, and GCP.",
    description:
      "We architect and implement cloud-native solutions that scale with your business. Our cloud-agnostic approach ensures optimal performance, security, and cost efficiency.",
    features: [
      "Cloud migration strategy",
      "Multi-cloud architecture",
      "Infrastructure as Code (IaC)",
      "Kubernetes orchestration",
      "DevOps implementation",
      "Cost optimization",
    ],
  },
  {
    id: "data",
    icon: BarChart3,
    title: "Data Science & Analytics",
    shortDesc: "Transform raw data into actionable insights.",
    description:
      "Unlock the power of your data with our advanced analytics services. We help you build data pipelines, create visualizations, and derive meaningful insights that drive decisions.",
    features: [
      "Data pipeline architecture",
      "Business intelligence dashboards",
      "Advanced analytics & reporting",
      "Data warehouse design",
      "Real-time data processing",
      "Data governance frameworks",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Privacy",
    shortDesc: "Enterprise-grade security ensuring compliance.",
    description:
      "Protect your digital assets with our comprehensive security solutions. We implement robust security measures that meet regulatory requirements while safeguarding your business.",
    features: [
      "Security audits & assessments",
      "Compliance management (GDPR, HIPAA, SOC 2)",
      "Penetration testing",
      "Identity & access management",
      "Data encryption solutions",
      "Incident response planning",
    ],
  },
  {
    id: "ux",
    icon: Palette,
    title: "UX & Product Design",
    shortDesc: "User-centered design creating engaging experiences.",
    description:
      "We craft intuitive, beautiful digital experiences that users love. Our design process is research-driven and focused on creating products that convert and retain users.",
    features: [
      "User research & testing",
      "UI/UX design",
      "Design systems",
      "Prototyping & wireframing",
      "Usability optimization",
      "Accessibility compliance",
    ],
  },
  {
    id: "advanced",
    icon: Cpu,
    title: "Advanced Technologies & Innovations",
    shortDesc: "Blockchain, IoT, AR/VR solutions.",
    description:
      "Stay ahead with emerging technologies. We help you explore and implement cutting-edge solutions including blockchain, IoT, augmented reality, and more.",
    features: [
      "Blockchain development",
      "IoT solutions & integration",
      "AR/VR applications",
      "Edge computing",
      "5G implementation",
      "Quantum computing readiness",
    ],
  },
  {
    id: "strategy",
    icon: Database,
    title: "Branding & Digital Strategy",
    shortDesc: "Strategic consulting aligning technology with business goals.",
    description:
      "Align your technology investments with business objectives. We provide strategic guidance to ensure your digital transformation delivers maximum value.",
    features: [
      "Digital transformation roadmaps",
      "Technology assessment",
      "Competitive analysis",
      "Brand identity development",
      "Content strategy",
      "Growth marketing",
    ],
  },
  {
    id: "market",
    icon: Globe,
    title: "Market Insights & Strategy",
    shortDesc: "Data-driven market intelligence and strategic planning.",
    description:
      "Make informed decisions with our market intelligence services. We analyze trends, competitors, and opportunities to position your business for success.",
    features: [
      "Market research & analysis",
      "Competitive intelligence",
      "Customer segmentation",
      "Pricing strategy",
      "Go-to-market planning",
      "Market entry analysis",
    ],
  },
  {
    id: "qa",
    icon: Settings,
    title: "Software Quality Assurance",
    shortDesc: "Comprehensive testing ensuring product excellence.",
    description:
      "Ensure your software meets the highest quality standards. Our QA services cover functional, performance, security, and automated testing.",
    features: [
      "Automated testing",
      "Performance testing",
      "Security testing",
      "API testing",
      "Mobile app testing",
      "CI/CD integration",
    ],
  },
  {
    id: "migration",
    icon: Rocket,
    title: "Workspace Migration",
    shortDesc: "Seamless migration with zero downtime.",
    description:
      "Migrate your systems with confidence. We handle the complexity of data migration, system integration, and change management to ensure smooth transitions.",
    features: [
      "Cloud migration",
      "Data migration",
      "Platform migration",
      "Legacy system modernization",
      "Zero-downtime migration",
      "Post-migration support",
    ],
  },
]

export function ServicesList() {
  const [expandedId, setExpandedId] = useState<string | null>("ai")

  return (
    <section className="py-24 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(45deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:120px_120px]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your industry and business needs
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 50}>
              <div
                id={service.id}
                className="rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30"
              >
                <button
                  onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                  className="w-full flex items-center gap-6 p-6 text-left"
                  aria-expanded={expandedId === service.id}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.shortDesc}</p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      expandedId === service.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedId === service.id ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-border">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                          Key Capabilities
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
