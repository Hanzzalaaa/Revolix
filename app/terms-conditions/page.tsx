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

const LAST_UPDATED = "September 13, 2026" // TODO: update this date every time the terms actually change

export default function TermsAndConditionsPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "https://revolixtech.com/" },
            { name: "Terms & Conditions", item: "https://revolixtech.com/terms-and-conditions" },
          ]}
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">
              Legal
            </p>
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-12">Last updated: {LAST_UPDATED}</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  1. Acceptance of Terms
                </h2>
                <p>
                  These Terms & Conditions ("Terms") govern your use of revolixtech.com (the
                  "Site") and any services provided by Revolix Technologies ("Revolix," "we,"
                  "us," or "our"). By using the Site, submitting an inquiry, or engaging us for
                  services, you agree to be bound by these Terms. If you do not agree, please do
                  not use the Site or our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">2. Our Services</h2>
                <p>
                  Revolix provides AI systems and agents, CRM and marketing automation, custom
                  software development, cloud and DevOps services, UI/UX design, e-commerce
                  solutions, SEO, and related digital services. Specific project scope,
                  deliverables, timelines, and pricing for any engagement are defined separately
                  in a proposal, statement of work, or signed agreement between Revolix and the
                  client, which takes precedence over these general Terms in the event of a
                  conflict.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  3. Quotes & Payment
                </h2>
                <ul className="list-disc pl-6 space-y-1">
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
                    charge interest or fees on overdue amounts as permitted by law.
                  </li>
                  <li>Unless otherwise agreed in writing, fees paid are non-refundable.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  4. Project Scope & Changes
                </h2>
                <p>
                  Work is performed according to the scope agreed at the start of a project.
                  Requests that fall outside that scope ("change requests") may require an
                  updated timeline and additional fees, to be agreed in writing before work
                  begins on them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  5. Client Responsibilities
                </h2>
                <p>
                  Clients agree to provide timely feedback, necessary access (e.g. hosting, APIs,
                  third-party accounts), and accurate information required for us to perform the
                  agreed services. Delays caused by missing client input or access may extend
                  project timelines accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  6. Intellectual Property
                </h2>
                <ul className="list-disc pl-6 space-y-1">
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
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  7. Confidentiality
                </h2>
                <p>
                  Each party agrees to keep confidential any non-public business, technical, or
                  financial information shared during the course of a project, and to use it only
                  for the purposes of that project, except where disclosure is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  8. Warranties & Disclaimers
                </h2>
                <p>
                  We perform services with reasonable skill and care. Except as expressly stated
                  in a signed project agreement, the Site and our services are provided "as is"
                  without warranties of any kind, express or implied, including fitness for a
                  particular purpose. We do not guarantee specific business outcomes (e.g.
                  rankings, revenue, conversion rates) resulting from our services, as these
                  depend on many factors outside our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  9. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, Revolix will not be liable for any
                  indirect, incidental, special, or consequential damages arising from your use of
                  the Site or our services. Our total liability for any claim relating to a
                  project will not exceed the total fees paid by the client for that specific
                  project.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  10. Termination
                </h2>
                <p>
                  Either party may terminate an ongoing project per the terms of the applicable
                  project agreement, typically with written notice. The client remains responsible
                  for payment for all work completed up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  11. Third-Party Links & Tools
                </h2>
                <p>
                  The Site may link to or integrate with third-party services (e.g. social
                  platforms, analytics providers). We are not responsible for the content,
                  policies, or practices of any third-party site or service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  12. Governing Law
                </h2>
                <p>
                  These Terms are governed by the laws of{" "}
                  <span className="text-foreground font-medium">
                    [Pakistan]
                  </span>
                  , without regard to conflict-of-law principles. Any disputes will be subject to
                  the exclusive jurisdiction of the courts located there, unless otherwise agreed
                  in a signed project agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  13. Changes to These Terms
                </h2>
                <p>
                  We may update these Terms from time to time. Changes take effect when posted on
                  this page, with the "Last updated" date revised accordingly. Continued use of
                  the Site or our services after changes are posted constitutes acceptance of the
                  updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">14. Contact Us</h2>
                <p>
                  If you have questions about these Terms, contact us at{" "}
                  {/* TODO: confirm correct domain before publishing — hello@revolixtech.com vs hello@revolix.com */}
                  <span className="text-foreground font-medium">
                    [hello@revolix.com, support@revolix.com]
                  </span>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ParallaxProvider>
  )
}