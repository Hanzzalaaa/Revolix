"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"

const serviceSections = [
  // ============================================================
  // 01 — WEBSITE DEVELOPMENT
  // ============================================================
  {
    title: "Website Development",
    description:
      "Professional website solutions built for performance, usability, SEO, and conversions.",
    items: [
      {
        title: "Business Website",
        detail:
          "Corporate and service websites built to establish credibility and generate qualified leads.",
      },
      {
        title: "Ecommerce Website",
        detail:
          "Conversion-focused online stores with secure checkout, product catalogs, and scalable architecture.",
      },
      {
        title: "Custom Website",
        detail:
          "Unique, feature-rich websites designed around your business model, workflows, and goals.",
      },
    ],
  },

  // ============================================================
  // 02 — WEB & SOFTWARE DEVELOPMENT
  // ============================================================
  {
    title: "Web & Software Development",
    description:
      "Scalable software solutions designed around your business processes and technical requirements.",
    items: [
      {
        title: "Frontend Development",
        detail:
          "Modern responsive interfaces built with React, Next.js, and scalable frontend architecture.",
      },
      {
        title: "Backend Development",
        detail:
          "Secure APIs, databases, authentication, and backend systems built for reliable performance.",
      },
      {
        title: "Custom Software",
        detail:
          "Business-specific software designed to streamline workflows and solve complex operational needs.",
      },
    ],
  },

  // ============================================================
  // 03 — AI & MACHINE LEARNING
  // ============================================================
  {
    title: "AI & Machine Learning",
    description:
      "AI and machine learning solutions that automate processes, analyze data, and improve decision-making.",
    items: [
      {
        title: "Machine Learning",
        detail:
          "Model design, training, and deployment for practical business use cases and intelligent systems.",
      },
      {
        title: "Data Pipelines",
        detail:
          "Reliable data ingestion, transformation, processing, and analytics workflows.",
      },
      {
        title: "AI Solutions",
        detail:
          "AI-powered applications designed to improve productivity, customer experiences, and business operations.",
      },
    ],
  },

  // ============================================================
  // 04 — AI AUTOMATION
  // ============================================================
  {
    title: "AI Automation",
    description:
      "Intelligent automation systems that reduce repetitive work and improve business efficiency.",
    items: [
      {
        title: "Workflow Automation",
        detail:
          "Automated workflows that connect tools, teams, and repetitive business processes.",
      },
      {
        title: "AI Agents",
        detail:
          "AI-powered agents designed to answer questions, qualify leads, handle tasks, and support customers.",
      },
      {
        title: "No-Code Automation",
        detail:
          "Zapier, Make, and similar automation systems that connect your existing tools without complex development.",
      },
    ],
  },

  // ============================================================
  // 05 — GOHIGHLEVEL
  // ============================================================
  {
    title: "GoHighLevel",
    description:
      "Complete GoHighLevel setup, CRM automation, funnels, workflows, and AI integrations built to turn leads into customers.",
    items: [
      {
        title: "GHL Setup & Configuration",
        detail:
          "Account and sub-account setup, pipelines, calendars, forms, funnels, and custom snapshots.",
      },
      {
        title: "CRM & Workflow Automation",
        detail:
          "Automated lead follow-ups, missed-call text-back, appointment reminders, and speed-to-lead workflows.",
      },
      {
        title: "AI Agents & Integrations",
        detail:
          "AI chat and voice agents connected with GoHighLevel to qualify leads, answer questions, and book appointments.",
      },
    ],
  },

  // ============================================================
  // 06 — SEO
  // ============================================================
  {
    title: "SEO Services",
    description:
      "Full-spectrum SEO strategies designed to improve visibility, rankings, and high-intent organic traffic.",
    items: [
      {
        title: "On-Page SEO",
        detail:
          "Keyword alignment, metadata, internal linking, content structure, and page optimization.",
      },
      {
        title: "Off-Page SEO",
        detail:
          "Authority building through quality backlinks, brand mentions, and strategic outreach.",
      },
      {
        title: "Technical SEO",
        detail:
          "Site speed, crawlability, indexing, structured data, and technical performance improvements.",
      },
    ],
  },

  // ============================================================
  // 07 — DIGITAL MARKETING
  // ============================================================
  {
    title: "Digital Marketing",
    description:
      "Growth-focused marketing strategies across organic, paid, social, and content channels.",
    items: [
      {
        title: "Social Media Management",
        detail:
          "Content planning, publishing, engagement, and social campaigns designed to grow your audience.",
      },
      {
        title: "Paid Ad Management",
        detail:
          "Google Ads and paid advertising campaigns focused on reaching high-intent customers.",
      },
      {
        title: "Email Marketing",
        detail:
          "Email campaigns, sequences, automation, and lead-nurturing systems built around customer journeys.",
      },
    ],
  },

  // ============================================================
  // 08 — ECOMMERCE
  // ============================================================
  {
    title: "E-Commerce Solutions",
    description:
      "Complete e-commerce solutions designed to create better shopping experiences and increase online sales.",
    items: [
      {
        title: "Shopify Stores",
        detail:
          "Professional Shopify stores with optimized layouts, product organization, and conversion-focused experiences.",
      },
      {
        title: "WooCommerce Stores",
        detail:
          "Flexible WordPress-based e-commerce solutions built around your products and business requirements.",
      },
      {
        title: "E-Commerce Optimization",
        detail:
          "Improvements to product pages, navigation, checkout, performance, and overall shopping experience.",
      },
    ],
  },

  // ============================================================
  // 09 — UI/UX DESIGN
  // ============================================================
  {
    title: "UI/UX Design",
    description:
      "User-centric design solutions that transform complex workflows into intuitive and engaging digital experiences.",
    items: [
      {
        title: "Figma Prototyping",
        detail:
          "Interactive wireframes, high-fidelity mockups, and scalable design systems for seamless development.",
      },
      {
        title: "Illustrator Assets",
        detail:
          "Custom vector iconography, illustrations, and unique branding elements tailored for digital products.",
      },
      {
        title: "Photoshop Enhancements",
        detail:
          "Advanced image composition, creative asset manipulation, and polished visual graphics for interfaces.",
      },
    ],
  },

  // ============================================================
  // 10 — GRAPHIC DESIGN & BRANDING
  // ============================================================
  {
    title: "Graphic Design & Branding",
    description:
      "Creative visual solutions that help businesses build recognizable and consistent brands.",
    items: [
      {
        title: "Logo Design",
        detail:
          "Professional logo concepts designed around your company's identity, audience, and positioning.",
      },
      {
        title: "Brand Identity",
        detail:
          "Complete visual identity systems including typography, colors, imagery, and brand guidelines.",
      },
      {
        title: "Marketing Graphics",
        detail:
          "Social media graphics, promotional materials, advertisements, and digital marketing assets.",
      },
    ],
  },

  // ============================================================
  // 11 — CONTENT & CREATIVE
  // ============================================================
  {
    title: "Content & Creative Services",
    description:
      "Creative content services that help businesses communicate clearly and consistently across digital channels.",
    items: [
      {
        title: "Content Writing",
        detail:
          "Website, blog, and marketing content written around your audience, brand, and business objectives.",
      },
      {
        title: "Copywriting",
        detail:
          "Conversion-focused copy for landing pages, advertisements, emails, and marketing campaigns.",
      },
      {
        title: "Video & Reels Editing",
        detail:
          "Short-form video editing for Reels, TikTok, YouTube Shorts, advertisements, and promotional content.",
      },
    ],
  },

  // ============================================================
  // 12 — CLOUD & DEVOPS
  // ============================================================
  {
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure and DevOps solutions designed for reliable deployments, scalability, and performance.",
    items: [
      {
        title: "Cloud Infrastructure",
        detail:
          "Cloud setup and infrastructure planning across modern hosting and cloud environments.",
      },
      {
        title: "Deployment & CI/CD",
        detail:
          "Automated development and deployment workflows that make releases faster and more reliable.",
      },
      {
        title: "Domain & Hosting",
        detail:
          "Domain, hosting, DNS, deployment, and technical configuration support for websites and applications.",
      },
    ],
  },

  // ============================================================
  // 13 — DATA, QA & CYBERSECURITY
  // ============================================================
  {
    title: "Data, QA & Cybersecurity",
    description:
      "Technical services that help businesses maintain reliable systems, clean data, and safer digital operations.",
    items: [
      {
        title: "Data Analysis",
        detail:
          "Business data analysis and reporting designed to turn information into useful insights.",
      },
      {
        title: "Software QA Testing",
        detail:
          "Functional and usability testing designed to identify issues before software reaches users.",
      },
      {
        title: "Cybersecurity Auditing",
        detail:
          "Security reviews for small setups to identify common risks and opportunities for improvement.",
      },
    ],
  },

  // ============================================================
  // 14 — IT & TECH SUPPORT
  // ============================================================
  {
    title: "IT & Tech Support",
    description:
      "Practical technical support that helps businesses troubleshoot problems and maintain reliable digital operations.",
    items: [
      {
        title: "IT Troubleshooting",
        detail:
          "Technical troubleshooting and guidance for common software, systems, and digital workflow issues.",
      },
      {
        title: "Technical Consultation",
        detail:
          "Technology guidance to help businesses select, configure, and improve their digital tools.",
      },
      {
        title: "System Maintenance",
        detail:
          "Ongoing technical checks and support to keep websites, applications, and digital systems running smoothly.",
      },
    ],
  },

  // ============================================================
  // 15 — BUSINESS & OPERATIONAL SUPPORT
  // ============================================================
  {
    title: "Business & Operational Support",
    description:
      "Flexible business support services that help teams handle research, operations, administration, and growth tasks.",
    items: [
      {
        title: "Virtual Assistant Support",
        detail:
          "Remote administrative assistance for research, organization, scheduling, and routine business tasks.",
      },
      {
        title: "Lead Generation & Research",
        detail:
          "Lead research, prospect identification, market research, and competitor analysis to support business growth.",
      },
      {
        title: "Customer Support",
        detail:
          "Live chat and customer support assistance designed to improve response times and customer experience.",
      },
    ],
  },
]

export function ServicesList() {
  return (
    <section className="py-24 relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(45deg,_var(--primary)_25%,_transparent_25%,_transparent_75%,_var(--primary)_75%)] bg-[size:120px_120px]" />
      </ParallaxSection>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        {serviceSections.map((section, sectionIndex) => (
          <ScrollReveal key={section.title} delay={sectionIndex * 100}>
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-muted-foreground text-lg mb-6">{section.description}</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {section.items.map((item) => (
                  <div key={item.title} className="p-5 rounded-xl bg-background border border-border">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}

        <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
  <p className="text-muted-foreground text-lg mb-6">
    Revolix Technologies provides a broad range of digital, technology,
    creative, and business services designed to help organizations build,
    improve, and grow their digital presence. Our services cover everything
    from websites and software development to AI automation, SEO,
    cybersecurity, marketing, design, and technical support.
  </p>

  <div className="space-y-4 text-muted-foreground">
    <p>
      Our digital and technology services include custom website design,
      web development, mobile app consultation, e-commerce solutions,
      search engine optimization, paid advertising, email marketing,
      social media management, and no-code automation. We combine strategy,
      design, development, and technology to create practical solutions
      that support real business goals.
    </p>

    <p>
      For businesses that need a stronger digital presence, we provide
      content writing and copywriting, graphic design, logo and brand
      identity design, video editing for short-form content, and other
      creative services. These services help businesses maintain a
      consistent visual identity and communicate their products or services
      more effectively across websites and digital platforms.
    </p>

    <p>
      Our technology services also extend into software quality assurance,
      data analysis, data entry and cleanup, cybersecurity auditing for
      small setups, IT troubleshooting, and domain and hosting management
      consulting. These services are designed to help businesses maintain
      reliable digital operations while identifying opportunities for
      improvement.
    </p>

    <p>
      We also support business and operational needs through services such
      as virtual assistance, bookkeeping support, payroll processing
      management, business plan preparation, pitch deck creation, lead
      generation research, customer support outsourcing, recruitment
      assistance, market research, competitor analysis, and business
      coaching.
    </p>

    <p>
      For marketing and creative teams, Revolix can provide product and
      event photography, promotional video production, public relations
      support, influencer outreach, press release preparation, brand voice
      consulting, proofreading, scriptwriting, subtitles and captions,
      motion graphics, presentation design, and community management.
    </p>

    <p>
      Our approach is flexible because every business has different
      requirements. Some clients may need a complete website and SEO
      strategy, while others may need automation, design, content,
      technical support, or individual business services. We can provide
      focused support for a specific requirement or combine multiple
      services into a larger digital growth strategy.
    </p>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        Digital services including web development, SEO, PPC, e-commerce,
        email marketing, and social media management.
      </li>
      <li>
        Technology services including software development, QA testing,
        cybersecurity auditing, data analysis, automation, and IT support.
      </li>
      <li>
        Creative services including graphic design, branding, video editing,
        copywriting, presentations, motion graphics, and marketing content.
      </li>
      <li>
        Business support services including virtual assistance, research,
        bookkeeping support, lead generation, customer support, and
        operational assistance.
      </li>
    </ul>

    <p>
      By bringing these capabilities together, Revolix reduces the need for
      businesses to coordinate multiple providers for every digital and
      operational requirement. Our goal is to make the process simpler,
      maintain consistent quality, and provide services that can adapt as
      the business grows.
    </p>

    <p>
      Whether you are launching a new business, improving an existing
      website, expanding your online marketing, automating repetitive
      processes, strengthening your digital operations, or looking for
      creative and business support, Revolix Technologies provides a
      flexible service ecosystem built around your specific needs.
    </p>
  </div>
</div>
      </div>
    </section>
  )
}
