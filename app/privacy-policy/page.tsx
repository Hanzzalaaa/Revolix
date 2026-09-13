import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy Policy | Revolix Technologies",
    description:
      "Learn how Revolix Technologies collects, uses, and protects your information when you use our website and services.",
    alternates: { canonical: "https://revolixtech.com/privacy-policy" },
    robots: { index: true, follow: true },
  }
}

const LAST_UPDATED = "September 13, 2026" // TODO: update this date every time the policy actually changes

export default function PrivacyPolicyPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "https://revolixtech.com/" },
            { name: "Privacy Policy", item: "https://revolixtech.com/privacy-policy" },
          ]}
        />

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">
              Legal
            </p>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last updated: {LAST_UPDATED}</p>

            <div className="space-y-10 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">1. Introduction</h2>
                <p>
                  Revolix Technologies ("Revolix," "we," "us," or "our") provides AI systems, CRM
                  automation, custom software, and related digital services. This Privacy Policy
                  explains what information we collect when you visit revolixtech.com (the
                  "Site"), how we use it, and the choices you have. By using the Site, you agree
                  to the practices described here.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  2. Information We Collect
                </h2>
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
                  Information you provide directly
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name and email address (contact form, newsletter signup)</li>
                  <li>Company name and service of interest</li>
                  <li>Budget range and project details you choose to share</li>
                  <li>Any other information you include in messages to us</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
                  Information collected automatically
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address, browser type, device type, and general location</li>
                  <li>Pages visited, time on page, and referring URLs</li>
                  <li>Cookies and similar tracking technologies (see Section 4)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Respond to inquiries and provide consultations or quotes</li>
                  <li>Deliver, maintain, and improve our services</li>
                  <li>Send newsletters or updates you've opted into</li>
                  <li>Understand site usage and improve the Site's performance and content</li>
                  <li>Detect, prevent, and address technical issues, fraud, or abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-3">We do not sell your personal information.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  4. Cookies & Analytics
                </h2>
                <p>
                  We use cookies and similar technologies, including Google Tag Manager and
                  Vercel Analytics, to understand how visitors use the Site and to improve it over
                  time. These tools may collect information such as pages viewed, session
                  duration, and device/browser details. You can control or disable cookies through
                  your browser settings; doing so may affect some Site functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  5. How We Share Information
                </h2>
                <p>We may share information with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Service providers who help us operate the Site and our business (e.g.
                    hosting, analytics, email delivery), bound to use it only for that purpose
                  </li>
                  <li>Professional advisors (legal, accounting) where necessary</li>
                  <li>Authorities, if required by law or to protect our legal rights</li>
                  <li>A successor entity in the event of a merger, acquisition, or asset sale</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  6. Data Retention
                </h2>
                <p>
                  We retain personal information for as long as necessary to fulfill the purposes
                  described in this policy, respond to inquiries, meet legal obligations, and
                  resolve disputes, after which it is deleted or anonymized.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  7. Your Rights & Choices
                </h2>
                <p>
                  Depending on your location, you may have the right to access, correct, delete,
                  or restrict the use of your personal information, and to opt out of marketing
                  communications at any time (e.g. via the unsubscribe link in our emails). To
                  exercise any of these rights, contact us using the details in Section 10.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  8. Data Security
                </h2>
                <p>
                  We use reasonable administrative, technical, and physical safeguards designed to
                  protect your information. No method of transmission or storage is completely
                  secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  9. Children's Privacy
                </h2>
                <p>
                  The Site is not directed to individuals under 18, and we do not knowingly
                  collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  10. Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy or want to exercise your rights
                  over your data, contact us at{" "}
                  {/* TODO: confirm correct domain before publishing — hello@revolixtech.com vs hello@revolix.com */}
                  <span className="text-foreground font-medium">[hello@revolix.com, support@revolix.com]</span>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  11. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes take effect when
                  posted on this page, with the "Last updated" date revised accordingly.
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