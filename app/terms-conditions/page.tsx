import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms & Conditions | Revolix Technologies",
    description:
      "The terms and conditions governing your use of the Revolix Technologies website and our services.",
    alternates: { canonical: "https://revolixtech.com/terms-and-conditions" },
    robots: { index: true, follow: true },
  }
}

const LAST_UPDATED = "September 22, 2026"

type TermSection = {
  number: string
  title: string
  body: React.ReactNode
}

const SECTIONS: TermSection[] = [
  {
    number: "01",
    title: "Acceptance of Terms",
    body: (
      <p>
        These Terms & Conditions ("Terms") govern your use of revolixtech.com (the
        "Site") and any services provided by Revolix Technologies ("Revolix," "we,"
        "us," or "our"). By using the Site, submitting an inquiry, or engaging us for
        services, you agree to be bound by these Terms. If you do not agree, please do
        not use the Site or our services.
      </p>
    ),
  },
  {
    number: "02",
    title: "Our Services",
    body: (
      <p>
        Revolix provides AI systems and agents, CRM and marketing automation, custom
        software development, cloud and DevOps services, UI/UX design, e-commerce
        solutions, SEO, and related digital services. Specific project scope,
        deliverables, timelines, and pricing for any engagement are defined separately
        in a proposal, statement of work, or signed agreement between Revolix and the
        client, which takes precedence over these general Terms in the event of a
        conflict.
      </p>
    ),
  },
  {
    number: "03",
    title: "Quotes & Payment",
    body: (
      <ul className="list-disc pl-6 space-y-2 marker:text-primary">
        <li>
          Pricing shared via the Site or a consultation is an estimate only; final
          pricing is confirmed in a written proposal or agreement.
        </li>
        <li>
          Payment terms (deposits, milestones, invoicing schedule) will be set out in
          that project agreement.
        </li>
        <li>
          Late payments may result in paused work, and Revolix reserves the right to
          charge interest or fees on overdue amounts as permitted by applicable law.
        </li>
        <li>Unless otherwise agreed in writing, fees paid are non-refundable.</li>
      </ul>
    ),
  },
  {
    number: "04",
    title: "Project Scope & Changes",
    body: (
      <p>
        Work is performed according to the scope agreed at the start of a project.
        Requests that fall outside that scope ("change requests") may require an
        updated timeline and additional fees, to be agreed in writing before work
        begins on them.
      </p>
    ),
  },
  {
    number: "05",
    title: "Client Responsibilities",
    body: (
      <p>
        Clients agree to provide timely feedback, necessary access (e.g. hosting, APIs,
        third-party accounts), and accurate information required for us to perform the
        agreed services. Delays caused by missing client input or access may extend
        project timelines accordingly.
      </p>
    ),
  },
  {
    number: "06",
    title: "Intellectual Property",
    body: (
      <ul className="list-disc pl-6 space-y-2 marker:text-primary">
        <li>
          Upon full payment for a project, ownership of the final agreed deliverables
          (e.g. custom code written for the client, designs) transfers to the client,
          except as otherwise stated in the project agreement.
        </li>
        <li>
          Revolix retains ownership of its own pre-existing tools, frameworks,
          libraries, and general know-how used to build deliverables, and may reuse
          them in other projects.
        </li>
        <li>
          Third-party software, plugins, or licensed assets used in a project remain
          subject to their own respective licenses.
        </li>
        <li>
          Unless agreed otherwise, Revolix may reference completed projects (name,
          screenshots, general description) in its portfolio and marketing materials.
        </li>
      </ul>
    ),
  },
  {
    number: "07",
    title: "Confidentiality",
    body: (
      <p>
        Each party agrees to keep confidential any non-public business, technical, or
        financial information shared during the course of a project, and to use it only
        for the purposes of that project, except where disclosure is required by law.
      </p>
    ),
  },
  {
    number: "08",
    title: "Warranties & Disclaimers",
    body: (
      <p>
        We perform services with reasonable skill and care. Except as expressly stated
        in a signed project agreement, the Site and our services are provided "as is"
        without warranties of any kind, express or implied, including fitness for a
        particular purpose. We do not guarantee specific business outcomes (e.g.
        rankings, revenue, conversion rates) resulting from our services, as these
        depend on many factors outside our control.
      </p>
    ),
  },
  {
    number: "09",
    title: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, Revolix will not be liable for any
        indirect, incidental, special, or consequential damages arising from your use of
        the Site or our services. Our total liability for any claim relating to a
        project will not exceed the total fees paid by the client for that specific
        project.
      </p>
    ),
  },
  {
    number: "10",
    title: "Termination",
    body: (
      <p>
        Either party may terminate an ongoing project per the terms of the applicable
        project agreement, typically with written notice. The client remains responsible
        for payment for all work completed up to the termination date.
      </p>
    ),
  },
  {
    number: "11",
    title: "Third-Party Links & Tools",
    body: (
      <p>
        The Site may link to or integrate with third-party services (e.g. social
        platforms, analytics providers). We are not responsible for the content,
        policies, or practices of any third-party site or service.
      </p>
    ),
  },
  {
    number: "12",
    title: "Governing Law & Jurisdiction",
    body: (
      <p>
        These Terms and any dispute or claim arising out of or in connection with them
        or their subject matter are governed by and construed in accordance with the laws
        of the <span className="text-foreground font-semibold">Islamic Republic of Pakistan</span>,
        without regard to conflict-of-law principles. Any legal action or proceeding shall
        be subject to the exclusive jurisdiction of the competent courts located in{" "}
        <span className="text-foreground font-semibold">Karachi, Pakistan</span>, unless otherwise
        agreed in a signed project contract.
      </p>
    ),
  },
  {
    number: "13",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. Changes take effect when posted on
        this page, with the "Last updated" date revised accordingly. Continued use of
        the Site or our services after changes are posted constitutes acceptance of the
        updated Terms.
      </p>
    ),
  },
  {
    number: "14",
    title: "Contact Us",
    body: (
      <p>
        If you have questions about these Terms & Conditions, contact us at{" "}
        <a href="mailto:hello@revolix.com" className="text-foreground font-semibold hover:text-primary transition-colors">
          hello@revolix.com
        </a>{" "}
        or{" "}
        <a href="mailto:support@revolix.com" className="text-foreground font-semibold hover:text-primary transition-colors">
          support@revolix.com
        </a>
        .
      </p>
    ),
  },
]

export default function TermsAndConditionsPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main className="relative overflow-hidden">
        {/* Ambient background glows to make the page feel alive */}
        <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute -right-1/4 top-2/3 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
        </div>

        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "https://revolixtech.com/" },
            { name: "Terms & Conditions", item: "https://revolixtech.com/terms-and-conditions" },
          ]}
        />

        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">

            {/* Two Vertical Lines (Left and Right borders - No Horizontal Lines) */}
            <div className="absolute inset-y-0 left-0 w-[3px] bg-border hidden md:block" />
            <div className="absolute inset-y-0 right-0 w-[3px] bg-border hidden md:block" />

            <div className="max-w-3xl mx-auto md:px-12">
              <div className="relative z-10 mb-16">
                <p className="text-sm text-primary font-bold uppercase tracking-widest mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  Legal
                </p>
                <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                  Terms & Conditions
                </h1>
                <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                  Last updated: <span className="text-foreground font-medium">{LAST_UPDATED}</span>
                </p>
              </div>

              {/* Single-column stack — every box is full width, none wider than another */}
              <div className="flex flex-col gap-4">
                {SECTIONS.map((section) => (
                  <div
                    key={section.number}
                    className="group w-full rounded-2xl border border-border bg-card/40 backdrop-blur-sm px-6 py-5 md:px-8 md:py-6 transition-colors duration-300 hover:border-primary/40 hover:bg-card/60"
                  >
                    {/* Header — stays fixed in place, never shifts when content opens */}
                    <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-foreground">
                      <span className="text-primary text-lg md:text-xl">{section.number}.</span>
                      {section.title}
                    </h2>

                    {/*
                      Expand-downward panel.
                      - Mobile (default): grid-rows-[1fr] => always fully open, no hover needed.
                      - md and up: collapses to grid-rows-[0fr] by default, opens to [1fr] on hover.
                      The inner div with overflow-hidden is what makes the row-height trick animate smoothly.
                    */}
                    <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out md:group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <div className="pt-4 text-aliceBlue leading-relaxed">
                          {section.body}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ParallaxProvider>
  )
}