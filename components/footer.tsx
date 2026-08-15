import Link from "next/link"
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react"
import { RevolixLogo } from "./revolix-logo"

const footerLinks = {
  services: [
    {
      name: "Website Development",
      href: "/web-development",
    },
    {
      name: "SEO Services",
      href: "/seo",
    },
    {
      name: "GoHighLevel",
      href: "/gohighlevel",
    },
    {
      name: "AI & Machine Learning",
      href: "/aiml",
    },
    {
      name: "UI/UX Design",
      href: "/uiux",
    },
  ],

  industries: [
    {
      name: "Healthcare",
      href: "/industries#healthcare",
    },
    {
      name: "Fintech",
      href: "/industries#fintech",
    },
    {
      name: "eCommerce",
      href: "/industries#ecommerce",
    },
    {
      name: "Real Estate",
      href: "/industries#realestate",
    },
    {
      name: "Energy",
      href: "/industries#energy",
    },
  ],

  company: [
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Team",
      href: "/team",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <RevolixLogo size="lg" />
            </Link>

            <p className="text-muted-foreground mb-6 max-w-sm">
              Your partner in leading the future with AI. We deliver
              intelligent digital solutions designed to accelerate growth
              and transform businesses.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">

              <a
                href="https://www.linkedin.com/company/revolix-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/Revolixtech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/revolixtechnologies/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://x.com/Revolixtech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="X"
              >
                <Twitter className="h-5 w-5" />
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4 font-display">
              Services
            </p>

            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4 font-display">
              Industries
            </p>

            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4 font-display">
              Company
            </p>

            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Revolix Technologies. All rights reserved.
          </p>

          {/* Privacy / Terms */}
          {/* 
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          */}

        </div>

      </div>
    </footer>
  )
}