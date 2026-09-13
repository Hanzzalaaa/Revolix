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
  // ============================================================
  // 01 — SEO
  // ============================================================

  {
    slug: "on-page-seo-checklist-2026",
    title:
      "On-Page SEO Checklist 2026: 15 Steps to Actually Rank Higher",
    excerpt:
      "A practical SEO checklist for publishers and business owners who want better rankings without relying on guesswork.",
    category: "SEO",
    author: "Revolix Team",
    date: "2026-07-07",
    readTime: "8 min read",
    image: "/Blog/seo-checklist-cover.svg",
    content:
      `## Why on-page SEO still matters

On-page SEO is the foundation for content that gets discovered, understood, trusted, and clicked. It helps search engines understand what a page is about while making the experience clearer for the people who visit it.

A strong page does not need to be stuffed with keywords. It needs to clearly answer the user's question, provide useful information, and make it easy to navigate.

## 15 practical checks to use today

- Write a clear and useful title tag that reflects the page's main topic.
- Create a meta description that accurately explains what the visitor will find.
- Use one clear H1 and organize supporting content with H2 and H3 headings.
- Match the page to the search intent behind the target query.
- Use descriptive URLs that are easy for people and search engines to understand.
- Add internal links to related and important pages.
- Optimize images with descriptive alt text where appropriate.
- Compress large images and avoid unnecessary media files.
- Make sure the page works well on mobile devices.
- Improve page speed by reducing unnecessary scripts and assets.
- Keep important content easy to reach without excessive interaction.
- Update outdated information when the topic changes.
- Remove duplicate or thin pages that do not add useful value.
- Use clear calls to action where they make sense for the user journey.
- Review important pages regularly instead of treating SEO as a one-time task.

## Start with the pages that matter most

You do not need to change your entire website at once.

Start with pages that already receive traffic, target commercial searches, or support important parts of your business. Improve those pages first, measure the changes, and then apply the lessons to the rest of the site.

## What to do next

Use the checklist as a practical audit rather than a box-ticking exercise. The goal is to make every important page clearer, more useful, and easier to discover.`,
  },

  // ============================================================
  // 02 — AI & AUTOMATION
  // ============================================================

  {
    slug: "ai-agents-for-business",
    title:
      "AI Agents for Business: Where They Actually Make Sense",
    excerpt:
      "A practical look at where AI agents can handle repetitive work, support customers, qualify leads, and connect business workflows.",
    category: "AI & Automation",
    author: "Revolix Team",
    date: "2026-08-02",
    readTime: "7 min read",
    
    content:
      `## What is an AI agent?

An AI agent is a software system that can interpret information, make decisions within defined boundaries, and take actions to complete a task.

Unlike a simple chatbot that only responds to a message, an agent can be connected to business tools and workflows to perform useful actions.

The important question is not whether a business can use AI. The better question is where AI can solve a real problem.

## Where AI agents can help

### Customer support

An AI agent can handle common questions, retrieve information from approved sources, and guide customers toward the next step.

This can reduce repetitive conversations while allowing human teams to focus on issues that actually require their attention.

### Lead qualification

Agents can collect basic information from prospects, ask qualifying questions, and route the conversation based on predefined business rules.

For sales teams, this can help reduce the amount of manual qualification work.

### Appointment booking

An AI voice or chat agent can communicate with leads, check availability through connected systems, and help schedule appointments.

The workflow becomes much more useful when the agent can actually complete the booking instead of simply telling the customer to call someone.

### Internal workflows

AI agents can also support internal processes such as information retrieval, document handling, task routing, and repetitive administrative operations.

## Where AI agents may not be the right answer

Not every automation problem requires an autonomous agent.

If a process is completely predictable, a normal workflow automation may be cheaper, easier to maintain, and more reliable.

The goal should be to choose the simplest technology that solves the problem properly.

## A practical approach

Start with one repetitive process.

Define:

- What starts the workflow
- What information the system needs
- What decisions it must make
- What actions it is allowed to take
- When a human should take over
- How success will be measured

This keeps AI projects focused on useful outcomes rather than technology for its own sake.

## Final takeaway

The best AI agents are not built simply because AI is popular. They are built where they can remove meaningful friction from a real business process.

Start with the problem, then choose the technology.`,
  },

  // ============================================================
  // 03 — GOHIGHLEVEL
  // ============================================================

  {
    slug: "gohighlevel-automation-workflows",
    title:
      "5 GoHighLevel Automations That Can Save Your Team Time",
    excerpt:
      "From missed-call text-back to lead follow-ups and appointment reminders, these workflows show where CRM automation can make a practical difference.",
    category: "GoHighLevel",
    author: "Revolix Team",
    date: "2026-08-09",
    readTime: "6 min read",
   
    content:
      `## Why automation matters in a CRM

A CRM becomes much more useful when routine actions happen automatically.

Instead of relying on someone to remember every follow-up, reminder, or lead update, workflows can handle predictable steps while your team focuses on conversations and decisions.

## 1. Missed-call text-back

A missed call can become a lost opportunity when nobody responds quickly.

A missed-call workflow can automatically send a message acknowledging the call and giving the prospect a clear next step.

The goal is not to replace the sales team. It is to make sure an inbound opportunity does not disappear simply because the first call was missed.

## 2. Speed-to-lead follow-up

New leads can be assigned an immediate response sequence.

For example:

- New lead enters the CRM
- Initial message is sent
- Follow-up reminder is scheduled
- Lead is assigned to the appropriate pipeline stage
- Team member receives a notification

This creates a consistent first-touch process.

## 3. Appointment reminders

Once a prospect books an appointment, reminder workflows can help reduce confusion and missed meetings.

Messages can be triggered before the appointment with useful information such as timing, location, or preparation instructions.

## 4. Lead reactivation

Not every lead is ready to buy immediately.

A reactivation workflow can reconnect with older leads after a defined period and give them a relevant reason to respond.

This can be useful when a business already has a large amount of historical lead data.

## 5. Post-appointment follow-up

The workflow should not stop when the meeting ends.

A post-appointment sequence can remind the team to follow up, send relevant information, or move the opportunity to the correct stage based on the outcome.

## Keep the workflows simple

The most useful automations usually begin with predictable business actions.

Before building a complicated workflow, map the process manually:

What happens when a lead arrives?

Who responds?

What happens if they do not respond?

What happens after an appointment?

What happens when the deal is won or lost?

Once the process is clear, automation becomes much easier to design.

## Final takeaway

GoHighLevel automation works best when it removes repetitive work without making the customer experience feel robotic.

The goal is a faster, more consistent sales process — not simply more workflows.`,
  },

  // ============================================================
  // 04 — WEB DEVELOPMENT
  // ============================================================

  {
    slug: "nextjs-performance-guide",
    title:
      "How to Build a Faster Website Without Rebuilding Everything",
    excerpt:
      "A practical guide to improving website performance through image optimization, cleaner rendering, better assets, and smarter architecture.",
    category: "Web Development",
    author: "Revolix Team",
    date: "2026-08-16",
    readTime: "8 min read",
    
    content:
      `## You may not need a complete rebuild

When a website feels slow, the first instinct is often to rebuild everything.

That is not always necessary.

Many performance problems come from oversized images, unnecessary JavaScript, inefficient components, poor loading strategies, or third-party scripts.

Fixing those areas can produce meaningful improvements without replacing the entire application.

## 1. Start with your images

Images are often one of the largest assets loaded by a page.

Use appropriately sized images instead of sending huge files to small components.

For modern React and Next.js applications, responsive image loading can help deliver the right image size for the user's screen.

## 2. Reduce unnecessary JavaScript

Not every component needs to run on the client.

Use server-rendered content where interactive behavior is not required and keep client-side components focused on actual interaction.

This can reduce the amount of JavaScript that needs to be downloaded and executed.

## 3. Review third-party scripts

Analytics, chat widgets, advertising tools, embeds, and other third-party scripts can add significant loading cost.

Keep the tools that provide real value and remove scripts that are no longer needed.

## 4. Improve rendering strategy

Think about what users need immediately and what can appear later.

Important content should load quickly while secondary elements can be deferred.

This is particularly useful for large landing pages with animation-heavy sections.

## 5. Keep components focused

Large components that handle too many responsibilities become harder to optimize.

Breaking functionality into focused components can make the application easier to maintain and easier to reason about.

## 6. Measure before and after

Performance work should be measurable.

Identify the problem, make one meaningful change, test the result, and then continue.

Do not assume a change improved performance simply because the page feels faster on your own machine.

## A better performance mindset

A fast website is not created by one magical optimization.

It comes from many small engineering decisions working together:

- Smaller assets
- Cleaner rendering
- Better loading strategies
- Less unnecessary JavaScript
- Fewer unnecessary third-party tools
- Consistent performance testing

## Final takeaway

Before rebuilding a website, identify what is actually slowing it down.

A focused performance pass can often accomplish more than replacing an entire codebase.`,
  },

  // ============================================================
  // 05 — UI/UX
  // ============================================================

  {
    slug: "ui-ux-conversion-principles",
    title:
      "UI/UX Design Principles That Make Business Websites Easier to Use",
    excerpt:
      "Simple interface decisions that improve navigation, clarity, usability, and the overall experience of a business website.",
    category: "UI/UX Design",
    author: "Revolix Team",
    date: "2026-08-23",
    readTime: "6 min read",
    
    content:
      `## Good design starts with clarity

A business website does not need to be complicated to look professional.

In many cases, the strongest interfaces are the ones that make the user's next step obvious.

Good UI and UX work together to reduce confusion and help visitors find information quickly.

## 1. Give every section a purpose

Before adding another card, animation, or graphic, ask what the section is supposed to accomplish.

A section might:

- Explain a service
- Build trust
- Show proof
- Answer a common question
- Move the user toward a conversion

If it does none of those things, it may not need to exist.

## 2. Create clear visual hierarchy

Visitors should be able to quickly identify:

- What the page is about
- What matters most
- What they can do next

Typography, spacing, contrast, and layout should support that hierarchy.

## 3. Keep navigation predictable

Users should not have to learn how your website works.

Navigation labels should be clear, links should lead where they appear to lead, and important pages should be easy to reach.

## 4. Design for real content

A card may look perfect with short placeholder text and break completely when real content is added.

Design systems should account for realistic titles, descriptions, images, and different screen sizes.

## 5. Treat mobile as a real experience

Responsive design is more than shrinking desktop elements.

Mobile layouts often need different spacing, content ordering, interaction patterns, and sometimes different behavior entirely.

## 6. Use animation with purpose

Animation can guide attention and provide feedback, but too much movement can distract from the content.

Use motion to communicate:

- State changes
- Interaction feedback
- Transitions
- Hierarchy

The interface should still work when motion is reduced.

## Final takeaway

Good UI/UX is not about adding more visual effects.

It is about making the experience easier to understand, easier to navigate, and easier to use.`,
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