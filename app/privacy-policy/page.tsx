import type { Metadata } from "next"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import {
  FileText,
  Globe,
  Database,
  Shield,
  Cookie,
  Users,
  Plane,
  Archive,
  Scale,
  Lock,
  Baby,
  Link2,
  Mail,
  Bell,
} from "lucide-react"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy Policy | Revolix Technologies",
    description:
      "Learn how Revolix Technologies collects, uses, shares, and protects your information when you use our website and services.",
    alternates: { canonical: "https://revolixtech.com/privacy-policy" },
    robots: { index: true, follow: true },
  }
}

const LAST_UPDATED = "September 22, 2026"

/**
 * A single hover-expand box.
 * - Desktop (md+): only the heading is visible by default. On hover, the
 *   panel expands downward while the header stays fixed at the top.
 * - Mobile: always shown expanded, since there's no hover on touch.
 */
function PolicyBox({
  number,
  title,
  icon: Icon,
  children,
}: {
  number: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <div
      className="
        group
        w-full
        rounded-2xl
        border border-border
        bg-card/40
        backdrop-blur-sm
        transition-colors duration-300
        hover:border-primary/30
        hover:bg-card/60
      "
    >
      {/* HEADER - stays fixed, never moves when the panel opens */}
      <div className="flex items-center p-5 sm:p-6">
  <h2 className="text-base sm:text-lg font-bold text-foreground">
    <span className="text-primary mr-2">{number}.</span>
    {title}
  </h2>
</div>

      {/* PANEL - opens downward on hover (desktop), always open on mobile */}
      <div
        className="
          grid
          grid-rows-[1fr] opacity-100
          md:grid-rows-[0fr] md:opacity-0
          md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100
          transition-all duration-500 ease-in-out
        "
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-5 sm:px-6 pb-6 pt-4 text-sm sm:text-base text-aliceBlue leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <ParallaxProvider>
      <Header />
      <main className="relative overflow-hidden">
        
        
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
          <div
            className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute -right-1/4 top-2/3 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-pulse"
            style={{ animationDuration: "12s" }}
          />
        </div>

        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "https://revolixtech.com/" },
            { name: "Privacy Policy", item: "https://revolixtech.com/privacy-policy" },
          ]}
        />
        
   
          <section className="relative py-20 lg:py-28">
  <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

    {/* Document left/right borders */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-border hidden md:block" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[3px] bg-border hidden md:block" />

    
            <div className="max-w-3xl mx-auto md:pl-[50px]">
              
              <div className="relative z-10 mb-16">
                
                <p className="text-sm text-primary font-bold uppercase tracking-widest mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  Legal
                </p>
                <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                  Privacy Policy
                </h1>
                <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                  Last updated: <span className="text-foreground font-medium">{LAST_UPDATED}</span>
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <PolicyBox number="01" title="Introduction" icon={FileText}>
                  <p>
                    Revolix Technologies ("Revolix," "we," "us," or "our") provides AI systems and
                    agents, CRM and marketing automation, custom software development, cloud and
                    DevOps services, UI/UX design, e-commerce solutions, and related digital
                    services. This Privacy Policy explains what personal information we collect when
                    you visit revolixtech.com or engage us for services (together, the "Site"), why
                    we collect it, who we share it with, and the rights and choices available to
                    you.
                  </p>
                  <p className="mt-4">
                    By using the Site, submitting a form, or engaging Revolix for services, you
                    acknowledge that you have read and understood this Privacy Policy. If you do not
                    agree with it, please do not use the Site.
                  </p>
                </PolicyBox>

                <PolicyBox number="02" title="Scope of This Policy" icon={Globe}>
                  <p>
                    This policy applies to personal information we collect through the Site,
                    through direct communication with you (email, calls, meetings), and through the
                    provision of our services to clients. It does not apply to third-party websites
                    or services we link to, or to the internal systems and websites of our clients,
                    which are governed by their own privacy practices.
                  </p>
                </PolicyBox>

                <PolicyBox number="03" title="Information We Collect" icon={Database}>
                  <h3 className="text-base font-semibold text-foreground mt-2 mb-3">
                    3.1 Information you provide directly
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                    <li>Name and email address (contact form, newsletter signup)</li>
                    <li>Company name, job title, and service(s) of interest</li>
                    <li>Budget range and project details you choose to share</li>
                    <li>Communications you send us (email, call notes, meeting notes)</li>
                    <li>
                      Information you provide as part of an active engagement (e.g. account access,
                      project assets, business data) necessary to deliver the contracted service
                    </li>
                  </ul>

                  <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
                    3.2 Information collected automatically
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                    <li>IP address, approximate location, browser type, and device information</li>
                    <li>Pages visited, time on page, referring/exit URLs, and click behavior</li>
                    <li>Cookies and similar tracking technologies (see Section 5)</li>
                  </ul>

                  <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
                    3.3 Information from third parties
                  </h3>
                  <p>
                    We may receive limited information about you from publicly available sources
                    (e.g. your company's public website or LinkedIn profile) when researching a
                    potential engagement, or from a service provider acting on our behalf as
                    described in Section 6.
                  </p>
                </PolicyBox>

                <PolicyBox
                  number="04"
                  title="How We Use Your Information & Legal Basis"
                  icon={Shield}
                >
                  <p className="mb-3">We use the information we collect to:</p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                    <li>Respond to inquiries and provide quotes or consultations</li>
                    <li>Deliver, manage, and improve our services under a client agreement</li>
                    <li>Send newsletters or updates you've opted into</li>
                    <li>Understand Site usage and improve its content and performance</li>
                    <li>Maintain the security of the Site and detect fraud or abuse</li>
                    <li>Comply with legal, accounting, or regulatory obligations</li>
                  </ul>
                  <p className="mt-4">
                    If you are in the European Economic Area (EEA) or UK, we rely on one or more of
                    the following legal bases to process your information: performance of a
                    contract (delivering a service you've engaged us for), our legitimate interests
                    (operating and improving the Site, responding to inquiries), your consent (e.g.
                    analytics/marketing cookies, newsletter emails), and compliance with a legal
                    obligation.
                  </p>
                  <p className="mt-4 font-medium text-foreground">
                    We do not sell your personal information.
                  </p>
                </PolicyBox>

                <PolicyBox number="05" title="Cookies & Tracking Technologies" icon={Cookie}>
                  <p className="mb-3">
                    We use cookies and similar technologies on the Site, grouped into the following
                    categories:
                  </p>
                  <ul className="list-disc pl-5 space-y-3 marker:text-primary">
                    <li>
                      <span className="text-foreground font-semibold">Essential:</span> required for
                      the Site to function correctly (e.g. remembering your cookie preference).
                      These cannot be switched off.
                    </li>
                    <li>
                      <span className="text-foreground font-semibold">Analytics:</span> help us
                      understand how visitors use the Site, via Google Tag Manager and Vercel
                      Analytics. Vercel Analytics is cookieless by design. Any Google
                      Analytics/advertising tags configured through Google Tag Manager only run
                      after you accept analytics cookies through our cookie banner.
                    </li>
                    <li>
                      <span className="text-foreground font-semibold">Marketing:</span> may be used
                      to measure the effectiveness of our marketing, if and when such tags are
                      configured. These also require your consent via the cookie banner before they
                      run.
                    </li>
                  </ul>
                  <p className="mt-4">
                    You can accept or decline non-essential cookies via the banner shown on your
                    first visit, and change your choice at any time by clearing your browser's
                    local storage for this Site or through your browser's cookie settings. Declining
                    cookies may limit some Site functionality but will not prevent you from browsing
                    or contacting us.
                  </p>
                </PolicyBox>

                <PolicyBox number="06" title="How We Share Information" icon={Users}>
                  <p className="mb-3">We share information only as necessary, with:</p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                    <li>
                      <span className="text-foreground font-semibold">Hosting & infrastructure:</span>{" "}
                      Vercel, which hosts the Site and provides cookieless analytics.
                    </li>
                    <li>
                      <span className="text-foreground font-semibold">
                        Analytics & tag management:
                      </span>{" "}
                      Google, via Google Tag Manager, for any analytics/advertising tags you've
                      consented to.
                    </li>
                    <li>
                      <span className="text-foreground font-semibold">
                        Business tools (CRM, email, scheduling):
                      </span>{" "}
                      [FILL IN — confirm which CRM/email/scheduling tool(s) process contact form
                      and newsletter submissions].
                    </li>
                    <li>Professional advisors (legal, accounting), where necessary.</li>
                    <li>Authorities, if required by law or to protect our legal rights.</li>
                    <li>
                      A successor entity, in the event of a merger, acquisition, or sale of assets.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Each of these service providers is only permitted to use your information to
                    perform services on our behalf and is bound by contractual confidentiality
                    obligations.
                  </p>
                </PolicyBox>

                <PolicyBox number="07" title="International Data Transfers" icon={Plane}>
                  <p>
                    Revolix is based in Karachi, Pakistan, and works with clients and service
                    providers in other countries. Where personal information is transferred
                    internationally, we take steps to ensure it receives an adequate level of
                    protection consistent with this policy, including through contractual
                    safeguards with our service providers where applicable.
                  </p>
                </PolicyBox>

                <PolicyBox number="08" title="Data Retention" icon={Archive}>
                  <p>
                    We retain personal information only as long as necessary to fulfill the
                    purposes described in this policy — including responding to your inquiry,
                    delivering a contracted service, meeting legal or accounting obligations, and
                    resolving disputes — after which it is deleted or anonymized. Project-related
                    data may be retained for the duration required by an active client agreement
                    plus any applicable legal retention period.
                  </p>
                </PolicyBox>

                <PolicyBox number="09" title="Your Privacy Rights" icon={Scale}>
                  <h3 className="text-base font-semibold text-foreground mt-2 mb-3">
                    9.1 If you are a resident of Pakistan
                  </h3>
                  <p className="mb-3">
                    In accordance with local data protection frameworks, including the Personal
                    Data Protection Bill (PDPB), you have the right to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction or modification of inaccurate or outdated information</li>
                    <li>
                      Request deletion or erasure of your information, subject to legal compliance
                      requirements
                    </li>
                    <li>Object to or restrict the processing of your data for specific purposes</li>
                    <li>Request a portable copy of the information you provided to us</li>
                    <li>
                      Withdraw consent at any time, where data processing is explicitly based on
                      your consent
                    </li>
                  </ul>

                  <h3 className="text-base font-semibold text-foreground mt-6 mb-3">
                    9.2 All users
                  </h3>
                  <p>
                    You may unsubscribe from marketing emails at any time using the link in those
                    emails, and manage cookies as described in Section 5. To exercise any right
                    described in this section, contact us using the details in Section 13 — we may
                    need to verify your identity before fulfilling certain requests.
                  </p>
                </PolicyBox>

                <PolicyBox number="10" title="Data Security" icon={Lock}>
                  <p>
                    We use reasonable administrative, technical, and physical safeguards designed to
                    protect your information against unauthorized access, alteration, disclosure, or
                    destruction. No method of transmission or storage is completely secure, and we
                    cannot guarantee absolute security. If we become aware of a security incident
                    affecting your personal information, we will notify affected individuals and
                    relevant authorities where required by law.
                  </p>
                </PolicyBox>

                <PolicyBox number="11" title="Children's Privacy" icon={Baby}>
                  <p>
                    The Site is not directed to individuals under 18, and we do not knowingly
                    collect personal information from children. If you believe a child has provided
                    us with personal information, please contact us and we will take steps to delete
                    it.
                  </p>
                </PolicyBox>

                <PolicyBox number="12" title="Third-Party Links" icon={Link2}>
                  <p>
                    The Site may contain links to third-party websites, including our social media
                    profiles. We are not responsible for the privacy practices or content of those
                    third-party sites, and we encourage you to review their privacy policies
                    separately.
                  </p>
                </PolicyBox>

                <PolicyBox number="13" title="Contact Us" icon={Mail}>
                  <p>
                    If you have questions about this Privacy Policy or want to exercise any of the
                    rights described above, contact us at{" "}
                    <a
                      href="mailto:hello@revolix.com"
                      className="text-foreground font-semibold hover:text-primary transition-colors"
                    >
                      hello@revolix.com
                    </a>{" "}
                    or{" "}
                    <a
                      href="mailto:support@revolix.com"
                      className="text-foreground font-semibold hover:text-primary transition-colors"
                    >
                      support@revolix.com
                    </a>
                    .
                  </p>
                </PolicyBox>

                <PolicyBox number="14" title="Changes to This Policy" icon={Bell}>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our
                    practices or for legal, operational, or regulatory reasons. Changes take effect
                    when posted on this page, with the "Last updated" date revised accordingly. We
                    encourage you to review this page periodically.
                  </p>
                </PolicyBox>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ParallaxProvider>
  )
}