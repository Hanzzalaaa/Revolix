"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronDown,
  Figma,
  Layers,
  LayoutDashboard,
  Smartphone,
  Monitor,
  Palette,
  Users,
  Zap,
  PenTool,
  Sparkle,
  Brush,
} from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TiltCard } from "@/components/interactive/page"
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

const services = [
  {
    icon: LayoutDashboard,
    title: "Web UI/UX Design",
    description:
      "Modern and intuitive website interfaces designed around your users, brand, and business goals.",
    items: [
      "Website design",
      "Landing page design",
      "Responsive layouts",
      "Design systems",
      "Wireframes",
      "Interactive prototypes",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description:
      "User-friendly mobile experiences designed for clear navigation, usability, and consistent interaction.",
    items: [
      "iOS app interfaces",
      "Android app interfaces",
      "Mobile wireframes",
      "User flows",
      "Interactive prototypes",
      "Responsive components",
    ],
  },
  {
    icon: Layers,
    title: "Product UI/UX",
    description:
      "Scalable interfaces for SaaS platforms, dashboards, business applications, and digital products.",
    items: [
      "SaaS dashboards",
      "Admin panels",
      "Web applications",
      "User journeys",
      "Component systems",
      "Product prototypes",
    ],
  },
  {
    icon: Palette,
    title: "Design Systems",
    description:
      "Reusable visual components and design guidelines that keep your product consistent as it grows.",
    items: [
      "UI component libraries",
      "Typography systems",
      "Color systems",
      "Spacing guidelines",
      "Reusable components",
      "Design documentation",
    ],
  },
  {
    icon: Users,
    title: "UX Research",
    description:
      "Understand your users and identify usability problems before investing heavily in development.",
    items: [
      "User research",
      "User personas",
      "Competitor analysis",
      "User flows",
      "Usability analysis",
      "UX recommendations",
    ],
  },
  {
    icon: Figma,
    title: "Figma Design & Prototyping",
    description:
      "High-fidelity Figma designs and clickable prototypes that make the final product easier to understand.",
    items: [
      "High-fidelity designs",
      "Clickable prototypes",
      "Figma components",
      "Developer handoff",
      "Responsive variants",
      "Design specifications",
    ],
  },
    {
    icon: Brush,
    title: "Photoshop & Asset Creation",
    description: "High-end photo manipulation, creative compositing, and professional digital asset production.",
    items: [
      "Photo manipulation",
      "Product mockup design",
      "Advanced color grading",
      "Creative compositing",
      "Banner & ad graphics",
      "Asset optimization",
    ],
  },
  {
    icon: PenTool,
    title: "Illustrator & Vector Artwork",
    description: "Scalable vector graphics, custom iconography, and brand assets designed for crisp rendering at any size.",
    items: [
      "Logo & brand identity",
      "Custom vector illustrations",
      "Icon set design",
      "Typography & lettering",
      "Print-ready artwork",
      "Scalable asset exports",
    ],
  },
  {
    icon: Sparkle,
    title: "Canva Templates & Social Assets",
    description: "Empower your team with easily editable, beautifully structured templates optimized for fast workflows.",
    items: [
      "Social media templates",
      "Editable presentation decks",
      "Brand kit setup",
      "Marketing collateral",
      "Drag-and-drop layouts",
      "Client handoff files",
    ],
  },

]

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users, competitors, goals, and the problem the product needs to solve.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We map user journeys, information architecture, wireframes, and the overall experience before visual design.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We transform the approved structure into polished, responsive interfaces with a consistent visual system.",
  },
  {
    number: "04",
    title: "Prototype",
    description:
      "We connect the screens into an interactive prototype so the experience can be reviewed before development.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "We review usability, navigation, responsiveness, accessibility, and interaction patterns.",
  },
  {
    number: "06",
    title: "Handoff",
    description:
      "Developers receive organized Figma files, components, specifications, and assets needed for implementation.",
  },
]

const deliverables = [
  "User flows",
  "Wireframes",
  "High-fidelity UI designs",
  "Responsive designs",
  "Interactive prototypes",
  "Design systems",
  "Figma component libraries",
  "Developer handoff",
  "Icons and visual assets",
  "UX recommendations",
  "Mobile and desktop layouts",
  "Design documentation",
]

const packages = [
  {
    name: "UI Design",
    price: "Let's Discuss",
    description:
      "For businesses that already understand their product and need polished interfaces.",
    features: [
      "UI design",
      "Responsive layouts",
      "Figma source files",
      "Reusable components",
      "Basic prototype",
      "Developer handoff",
    ],
        popular: true,
  },
  {
    name: "UI/UX Product design",
    price: "Let's Discuss",
    description:
      "For new products that need both user experience planning and visual design.",
    features: [
      "UX research",
      "User flows",
      "Wireframes",
      "High-fidelity UI",
      "Interactive prototype",
      "Design system",
    ],
    popular: true,
  },
  {
    name: "Design System", 
    price: "Let's Discuss",
    description:
      "For growing products that need a consistent and scalable design foundation.",
    features: [
      "Component library",
      "Typography system",
      "Color system",
      "Responsive components",
      "Figma documentation",
      "Developer handoff",
    ],
        popular: true,
  },
]

const faqs = [
  {
    question: "What is the difference between UI and UX design?",
    answer: "UX focuses on how a product works and how users move through it, while UI focuses on how the interface looks and how users interact with visual elements. Good products need both.",
  },
  {
    question: "Do you design websites and mobile apps?",
    answer: "Yes. We can design websites, landing pages, dashboards, SaaS products, mobile applications, and other digital interfaces.",
  },
  {
    question: "Do you use Adobe Illustrator for vector work?",
    answer: "Yes. We use Illustrator to create custom vector graphics, icons, logos, and scalable illustrations for your brand.",
  },
  {
    question: "Can you edit images using Photoshop?",
    answer: "Yes. We use Photoshop for advanced photo manipulation, retouching, masking, and preparing complex raster assets.",
  },
  {
    question: "Can you create templates we can edit in Canva?",
    answer: "Yes. We can design custom, brand-aligned templates in Canva so your team can easily update social media graphics or presentations.",
  },
  {
    question: "Can you redesign an existing website or application?",
    answer: "Yes. We can review an existing product, identify usability and visual issues, and create an improved interface and user experience.",
  },
  {
    question: "Can you design only one page?",
    answer: "Yes. We can work on individual pages such as landing pages, dashboards, login screens, checkout pages, or other specific product interfaces.",
  },
  {
    question: "Do you also develop the designs?",
    answer: "Yes. When required, the design can be followed by front-end implementation using technologies such as React or Next.js.",
  },
];


export default function UIUXPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Header />

      <main> 
        <BreadcrumbJsonLd items={[
         { name: "Home", item: "https://revolixtech.com/" },
         { name: "UI/UX Design", item: "https://revolixtech.com/uiux" },
       ]} />

        {/* =========================
            HERO
        ========================= */}
        <section className="relative overflow-hidden py-24 lg:py-32">

          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              <ScrollReveal>

                <div>

                  <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    UI/UX Design
                  </p>

                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    Design Digital Experiences{" "}
                    <span className="text-primary">
                      People Want to Use
                    </span>
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    We design intuitive websites, mobile applications,
                    dashboards, and digital products that combine strong
                    visual design with practical user experiences.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Start a Project

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/portfolio"
                      className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      View Our Work
                    </Link>

                  </div>

                </div>

              </ScrollReveal>

              {/* Design Preview */}
<ScrollReveal delay={150} className="hidden md:block"> 
  <TiltCard className="mx-auto w-full max-w-xl"> 
    <div className="mx-auto w-full max-w-xl"> 
      <div className="rounded-3xl border border-border bg-card p-5 shadow-2xl backdrop-blur-sm"> 
        <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-inner"> 
          
          {/* Design App Top Bar */} 
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5 bg-muted/40"> 
            <div className="flex items-center gap-2"> 
              <div className="h-3 w-3 rounded-full bg-red-500/80 transition-colors hover:bg-red-500" /> 
              <div className="h-3 w-3 rounded-full bg-yellow-500/80 transition-colors hover:bg-yellow-500" /> 
              <div className="h-3 w-3 rounded-full bg-green-500/80 transition-colors hover:bg-green-500" /> 
            </div> 
            
            {/* Project Title / Breadcrumbs */}
            <div className="mx-4 flex h-6 max-w-[260px] flex-1 items-center justify-center rounded-md bg-muted/60 px-3 text-[10px] text-muted-foreground tracking-wider font-mono"> 
              design-system / v2.4-wireframe 
            </div> 
            
            {/* Share / Present Button Placeholder */}
            <div className="h-6 w-12 rounded bg-primary/20 border border-primary/30 flex items-center justify-center text-[9px] text-primary font-medium tracking-wide">
              SHARE
            </div> 
          </div> 

          {/* Editor Workspace layout: Left Layers, Center Canvas, Right Properties */} 
          <div className="grid min-h-[380px] grid-cols-[80px_1fr_100px]"> 
            
            {/* Left Toolbar & Layers Panel */} 
            <div className="border-r border-border p-2.5 bg-muted/10 flex flex-col justify-between"> 
              <div className="flex flex-col gap-2.5"> 
                {/* Active Selection Tool */}
                <div className="h-8 w-full rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-sm"> 
                  <div className="h-3 w-3 rotate-45 border-l-2 border-t-2 border-current" /> {/* Move Tool Icon */}
                </div> 
                {/* Shape / Text Tools */}
                <div className="h-8 w-full rounded-lg bg-muted/40 hover:bg-muted transition-colors flex items-center justify-center">
                  <div className="h-3 w-3 border-2 border-muted-foreground/60 rounded-sm" />
                </div> 
                <div className="h-8 w-full rounded-lg bg-muted/40 hover:bg-muted transition-colors flex items-center justify-center">
                  <div className="h-3 w-3 border-2 border-muted-foreground/60 rounded-full" />
                </div> 
                <div className="h-8 w-full rounded-lg bg-muted/40 hover:bg-muted transition-colors flex items-center justify-center text-[11px] font-serif text-muted-foreground/70 font-bold">
                  T
                </div> 
              </div> 
              {/* Asset Component Indicator */}
              <div className="h-8 w-full rounded-lg bg-muted/30 border border-dashed border-border flex items-center justify-center">
                <div className="h-2 w-2 rotate-45 bg-purple-500/50" />
              </div>
            </div> 

            {/* Central Canvas (Design Preview Area) */} 
            <div className="p-5 bg-muted/5 flex flex-col justify-between relative overflow-hidden"> 
              
              {/* Floating Canvas Zoom Scale */}
              <div className="absolute top-3 right-3 h-5 w-10 rounded bg-background/80 border border-border text-[9px] text-muted-foreground font-mono flex items-center justify-center backdrop-blur-xs">
                44%
              </div>

              {/* Wireframe Canvas / Artboard */} 
              <div className="flex-1 flex flex-col justify-center items-center">
                {/* Device Frame Concept */}
                <div className="w-full max-w-[180px] border border-border/80 bg-background rounded-2xl p-4 shadow-md space-y-3 relative group">
                  {/* Fake User Avatars Floating (Collaborative Design Feature) */}
                  <div className="absolute -top-2 -right-2 flex -space-x-1.5">
                    <div className="h-4 w-4 rounded-full bg-blue-500 ring-2 ring-background text-[6px] font-bold text-white flex items-center justify-center">A</div>
                    <div className="h-4 w-4 rounded-full bg-pink-500 ring-2 ring-background text-[6px] font-bold text-white flex items-center justify-center">M</div>
                  </div>

                  {/* UI Hero Frame Component */}
                  <div className="h-16 rounded-lg bg-muted/30 border border-muted/50 flex flex-col justify-center p-2.5 space-y-1.5">
                    <div className="h-2 w-16 rounded bg-foreground/60" />
                    <div className="h-1.5 w-24 rounded bg-muted-foreground/35" />
                    <div className="h-1.5 w-10 rounded bg-muted-foreground/25" />
                  </div>

                  {/* UI Grid Layout Elements */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 rounded-lg bg-primary/5 border border-primary/20 p-2 flex flex-col justify-between">
                      <div className="h-1.5 w-6 rounded bg-primary/40" />
                      <div className="h-2.5 w-8 rounded bg-primary/60" />
                    </div>
                    <div className="h-12 rounded-lg bg-muted/20 border border-border/40 p-2 flex flex-col justify-between">
                      <div className="h-1.5 w-6 rounded bg-muted-foreground/30" />
                      <div className="h-2.5 w-8 rounded bg-foreground/40" />
                    </div>
                  </div>

                  {/* User Flow Vector Anchor Points */}
                  <div className="absolute left-1/2 -bottom-2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-background cursor-crosshair" />
                </div>
              </div>

              {/* Breadcrumb Layer Tracker */}
              <div className="h-5 w-32 rounded bg-background/60 border border-border text-[9px] text-muted-foreground flex items-center px-2 gap-1 font-mono">
                <span className="text-purple-400">◆</span> Frame 1 &gt; Card
              </div>
            </div> 

            {/* Right Sidebar (Design Properties Panel) */}
            <div className="border-l border-border p-2.5 bg-muted/10 flex flex-col gap-4">
              {/* Alignment Controls */}
              <div className="space-y-1.5">
                <div className="h-1.5 w-10 rounded bg-muted-foreground/40" />
                <div className="grid grid-cols-4 gap-1">
                  <div className="h-4 rounded bg-muted/50 border border-border/60" />
                  <div className="h-4 rounded bg-muted/50 border border-border/60" />
                  <div className="h-4 rounded bg-muted/50 border border-border/60" />
                  <div className="h-4 rounded bg-muted/50 border border-border/60" />
                </div>
              </div>

              {/* Layout Coordinates */}
              <div className="space-y-2">
                <div className="h-1.5 w-14 rounded bg-muted-foreground/40" />
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="h-5 rounded bg-background border border-border p-1 flex items-center justify-between"><span className="text-[8px] text-muted-foreground/50">X</span><span className="text-[8px] font-mono">140</span></div>
                  <div className="h-5 rounded bg-background border border-border p-1 flex items-center justify-between"><span className="text-[8px] text-muted-foreground/50">Y</span><span className="text-[8px] font-mono">320</span></div>
                  <div className="h-5 rounded bg-background border border-border p-1 flex items-center justify-between"><span className="text-[8px] text-muted-foreground/50">W</span><span className="text-[8px] font-mono">100%</span></div>
                  <div className="h-5 rounded bg-background border border-border p-1 flex items-center justify-between"><span className="text-[8px] text-muted-foreground/50">H</span><span className="text-[8px] font-mono">Auto</span></div>
                </div>
              </div>

              {/* Style / Color Pill */}
              <div className="space-y-1.5 mt-2">
                <div className="h-1.5 w-8 rounded bg-muted-foreground/40" />
                <div className="h-6 rounded-lg bg-background border border-border p-1 flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-sm bg-primary shadow-xs" />
                  <div className="h-2 w-10 rounded bg-foreground/60" />
                </div>
              </div>

              {/* Typography Preview */}
              <div className="space-y-1.5">
                <div className="h-1.5 w-12 rounded bg-muted-foreground/40" />
                <div className="h-5 rounded bg-background border border-border px-1.5 flex items-center justify-between">
                  <span className="text-[8px] font-mono">Inter</span>
                  <span className="text-[7px] text-muted-foreground">Bold</span>
                </div>
              </div>
            </div>

          </div> 
        </div> 
      </div> 
    </div> 
  </TiltCard> 
</ScrollReveal>


            </div>

          </div>

        </section>

        {/* =========================
            INTRO
        ========================= */}
        <section className="border-y border-border py-20">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                User-Centered Design
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Good design should make things easier
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                A beautiful interface is only part of a successful product.
                We focus on navigation, information hierarchy, usability,
                accessibility, responsiveness, and the details that make
                an experience feel natural.
              </p>

            </ScrollReveal>

          </div>

        </section>

        {/* =========================
            SERVICES
        ========================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  What We Design
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  UI/UX Services for Digital Products
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  From a single landing page to a complete SaaS product,
                  we can design the experience around your requirements.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">

              {services.map((service, index) => {

                const Icon = service.icon

                return (
                  <ScrollReveal
                    key={service.title}
                    delay={index * 75}
                  >

                    <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <h3 className="mt-6 text-xl font-semibold">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      <div className="mt-6 space-y-3">

                        {service.items.map((item) => (

                          <div
                            key={item}
                            className="flex items-start gap-3"
                          >

                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                            <span className="text-sm text-muted-foreground">
                              {item}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>

                  </ScrollReveal>
                )
              })}

            </div>

          </div>

        </section>

        {/* =========================
            DESIGN PROCESS
        ========================= */}
        <section className="border-y border-border py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Our Process
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  From Idea to Interface
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  A structured design process helps us understand the
                  problem before designing the solution.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {process.map((step, index) => (

                <ScrollReveal
                  key={step.number}
                  delay={index * 75}
                >

                  <div className="h-full rounded-2xl border border-border bg-card p-7">

                    <span className="text-sm font-semibold text-primary">
                      {step.number}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                  </div>

                </ScrollReveal>

              ))}

            </div>

          </div>

        </section>

        {/* =========================
            DELIVERABLES
        ========================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <ScrollReveal>

                <div>

                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Deliverables
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    Everything Your Team Needs to Build
                  </h2>

                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    We don't just provide screenshots. Our design files
                    are structured so your development team can understand,
                    build, and maintain the interface.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-8 inline-flex items-center text-sm font-medium text-primary"
                  >
                    Discuss your project

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>

              </ScrollReveal>

              <ScrollReveal delay={150}>

                <div className="grid gap-3 sm:grid-cols-2">

                  {deliverables.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                    >

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">

                        <Check className="h-4 w-4 text-primary" />

                      </div>

                      <span className="text-sm font-medium">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </ScrollReveal>

            </div>

          </div>

        </section>

        {/* =========================
            PACKAGES
        ========================= */}
        <section className="border-y border-border py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Design Packages
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Flexible Design Engagements
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Start with the design service your product needs and
                  expand the scope as the project grows.
                </p>

              </div>

            </ScrollReveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">

              {packages.map((pkg, index) => (

                <ScrollReveal
                  key={pkg.name}
                  delay={index * 100}
                >

                  <div
                    className={`relative h-full rounded-2xl border bg-card p-7 ${
                      pkg.popular
                        ? "border-primary shadow-lg shadow-primary/10"
                        : "border-border"
                    }`}
                  >

                    {pkg.popular && (
                      <div className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        Popular
                      </div>
                    )}

                    <h3 className="text-xl font-semibold">
                      {pkg.name}
                    </h3>

                    <p className="mt-4 text-2xl font-bold">
                      {pkg.price}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {pkg.description}
                    </p>

                    <div className="mt-7 space-y-3">

                      {pkg.features.map((feature) => (

                        <div
                          key={feature}
                          className="flex items-start gap-3"
                        >

                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>

                        </div>

                      ))}

                    </div>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      Discuss Your Project
                    </Link>

                  </div>

                </ScrollReveal>

              ))}

            </div>

          </div>

        </section>

        {/* =========================
            FAQ
        ========================= */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

            <ScrollReveal>

              <div className="mb-12 text-center">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  FAQ
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  UI/UX Design Questions
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Answers to common questions about our design process.
                </p>

              </div>

            </ScrollReveal>

            <div className="space-y-4">

              {faqs.map((faq, index) => (

                <ScrollReveal
                  key={faq.question}
                  delay={index * 50}
                >

                  <div className="overflow-hidden rounded-2xl border border-border bg-card">

                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(
                          openIndex === index ? null : index
                        )
                      }
                      className="flex w-full items-center justify-between p-6 text-left"
                      aria-expanded={openIndex === index}
                    >

                      <h3 className="pr-4 text-lg font-semibold">
                        {faq.question}
                      </h3>

                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          openIndex === index
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index
                          ? "max-h-96"
                          : "max-h-0"
                      }`}
                    >

                      <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </ScrollReveal>

              ))}

            </div>

          </div>

        </section>

        {/* =========================
            CTA
        ========================= */}
        <section className="border-t border-border py-24 lg:py-32">

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

            <ScrollReveal>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Let's Design Something Better
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Have a Product in Mind?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Whether you're starting from an idea or improving an
                existing product, our team can help turn your requirements
                into a clear and usable digital experience.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start a Project

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  View Portfolio
                </Link>

              </div>

            </ScrollReveal>

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}