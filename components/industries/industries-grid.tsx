"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import {
  Heart,
  ShoppingCart,
  Zap,
  Building2,
  Hotel,
  Factory,
  Home,
  Truck,
  Droplet,
  Gamepad2,
  GraduationCap,
  Leaf,
  ArrowRight,
} from "lucide-react"

const industries = [
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare",
    shortDesc: "AI-powered healthcare solutions",
    description:
      "Revolix AI brings AI to healthcare, cutting costs, boosting care quality, securing patient data, and streamlining systems for smarter, faster, and more personalized patient experiences.",
    solutions: [
      "Clinical decision support systems",
      "Medical imaging AI",
      "Patient engagement platforms",
      "Healthcare analytics",
      "Telemedicine solutions",
      "EHR optimization",
    ],
    image: "/healthcare-technology-abstract-dark.jpg",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "eCommerce",
    shortDesc: "Intelligent retail experiences",
    description:
      "We fuel your eCommerce growth with AI, fight fraud, streamline operations, personalize customer journeys, and scale fast. Smarter tech means happier customers and bigger wins.",
    solutions: [
      "Personalization engines",
      "Fraud detection systems",
      "Inventory optimization",
      "Dynamic pricing",
      "Customer analytics",
      "Chatbot integration",
    ],
    image: "/ecommerce-shopping-dark-neon.jpg",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energy",
    shortDesc: "Smart grid & sustainability",
    description:
      "Revolix AI powers the energy shift with AI tech stack. We optimize grids, cut emissions, predict demand, and build smarter, cleaner, and more secure energy systems for a sustainable future.",
    solutions: [
      "Smart grid management",
      "Energy demand forecasting",
      "Renewable optimization",
      "Asset monitoring",
      "Carbon tracking",
      "Grid security",
    ],
    image: "/energy-power-grid-dark-blue.jpg",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: "fintech",
    icon: Building2,
    title: "Fintech",
    shortDesc: "Secure financial innovation",
    description:
      "Revolix AI powers fintech with AI. It smartly improves processes, boosts security, personalizes experiences, ensures compliance, and delivers seamless digital journeys that earn trust and drive growth.",
    solutions: [
      "Risk assessment models",
      "Fraud prevention",
      "Algorithmic trading",
      "Regulatory compliance",
      "Digital banking platforms",
      "Payment processing",
    ],
    image: "/fintech-finance-dark-green.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "hospitality",
    icon: Hotel,
    title: "Hospitality",
    shortDesc: "Elevated guest experiences",
    description:
      "Revolix AI uses AI to transform hospitality, streamline operations, personalize stays, cut costs, and deliver eco-smart and guest-first experiences that keep customers coming back.",
    solutions: [
      "Revenue management",
      "Guest personalization",
      "Booking optimization",
      "Operations automation",
      "Sentiment analysis",
      "Smart room technology",
    ],
    image: "/hospitality-hotel-dark-luxury.jpg",
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    shortDesc: "Industry 4.0 solutions",
    description:
      "Revolix AI powers smart manufacturing with AI. It can optimize supply chains, boost uptime, secure operations, and drive sustainability without slowing production.",
    solutions: [
      "Predictive maintenance",
      "Quality control AI",
      "Supply chain optimization",
      "Production scheduling",
      "IoT integration",
      "Digital twins",
    ],
    image: "/manufacturing-factory-dark-industrial.jpg",
    color: "from-slate-500/20 to-gray-500/20",
  },
  {
    id: "realestate",
    icon: Home,
    title: "Real Estate",
    shortDesc: "Intelligent property solutions",
    description:
      "Revolix AI helps real estate professionals price smart, predict demand, and personalize buyer journeys, and market properties faster and smoother regardless of market mood.",
    solutions: [
      "Property valuation AI",
      "Market prediction",
      "Virtual property tours",
      "Lead scoring",
      "Portfolio management",
      "Smart building systems",
    ],
    image: "/real-estate-cityscape-dark-night.jpg",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics",
    shortDesc: "Optimized supply chains",
    description:
      "Revolix AI brings AI to the logistics industry. We optimize routes, forecast workforce needs, and build resilient supply chains that move faster, waste less, and deliver every time.",
    solutions: [
      "Route optimization",
      "Warehouse automation",
      "Demand forecasting",
      "Fleet management",
      "Last-mile delivery",
      "Inventory tracking",
    ],
    image: "/logistics-warehouse-dark-tech.jpg",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "oil-gas",
    icon: Droplet,
    title: "Oil & Gas",
    shortDesc: "Upstream to downstream AI",
    description:
      "Revolix AI applies AI to oil and gas industry. It predicts failures, optimizes exploration, streamlines logistics, and improves safety across upstream, midstream, and downstream operations.",
    solutions: [
      "Predictive maintenance",
      "Exploration optimization",
      "Pipeline monitoring",
      "Safety systems",
      "Production forecasting",
      "Environmental monitoring",
    ],
    image: "/oil-gas-refinery-dark-industrial.jpg",
    color: "from-stone-500/20 to-zinc-500/20",
  },
  {
    id: "entertainment",
    icon: Gamepad2,
    title: "Entertainment",
    shortDesc: "Content & engagement AI",
    description:
      "Revolix AI brings AI to entertainment. We predict trends, personalize content, streamline production, and boost audience engagement with data that steals the spotlight.",
    solutions: [
      "Content recommendation",
      "Audience analytics",
      "Production optimization",
      "Trend prediction",
      "Engagement platforms",
      "Rights management",
    ],
    image: "/entertainment-gaming-dark-neon.jpg",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    shortDesc: "Adaptive learning solutions",
    description:
      "Transform education with AI-powered learning platforms, adaptive assessments, and intelligent tutoring systems that personalize the learning journey for every student.",
    solutions: [
      "Adaptive learning platforms",
      "Automated grading",
      "Student analytics",
      "Virtual classrooms",
      "Curriculum optimization",
      "Skill assessment",
    ],
    image: "/education-learning-dark-digital.jpg",
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    id: "agriculture",
    icon: Leaf,
    title: "Agriculture",
    shortDesc: "Precision farming AI",
    description:
      "Enhance agricultural operations with AI solutions that deliver personalized farming insights, optimize crop yields, and drive sustainable practices for modern agriculture.",
    solutions: [
      "Crop monitoring",
      "Yield prediction",
      "Smart irrigation",
      "Pest detection",
      "Supply chain tracking",
      "Sustainability metrics",
    ],
    image: "/agriculture-farming-dark-tech.jpg",
    color: "from-green-500/20 to-emerald-500/20",
  },
]

export function IndustriesGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-24 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(135deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:100px_100px]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.id} delay={index * 50}>
              <div
                id={industry.id}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                onMouseEnter={() => setHoveredId(industry.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} to-background/90`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                      <industry.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{industry.shortDesc}</p>

                  {/* Expanded content on hover */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      hoveredId === industry.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{industry.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.slice(0, 4).map((solution) => (
                        <span
                          key={solution}
                          className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground"
                        >
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 mt-4 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
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
