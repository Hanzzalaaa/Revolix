import Link from "next/link"
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react"
import { RevolixLogo } from "./revolix-logo"

const footerLinks = {
  services: [
    { name: "AI & Machine Learning", href: "/services#ai" },
    { name: "Software Development", href: "/services#software" },
    { name: "Cloud Infrastructure", href: "/services#cloud" },
    { name: "Data Analytics", href: "/services#data" },
    { name: "UX & Product Design", href: "/services#ux" },
  ],
  industries: [
    { name: "Healthcare", href: "/industries#healthcare" },
    { name: "Fintech", href: "/industries#fintech" },
    { name: "eCommerce", href: "/industries#ecommerce" },
    { name: "Real Estate", href: "/industries#realestate" },
    { name: "Energy", href: "/industries#energy" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column - Updated to Revolix */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <RevolixLogo size="lg" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Your partner in leading the future with AI. We deliver intelligent solutions designed to accelerate growth
              and transform businesses.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/revolix-technology"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/Revolixtech"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/revolixtechnologies/?hl=en"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Revolixtech"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4 font-display">Services</p>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4 font-display">Industries</p>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4 font-display">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
            (c) {new Date().getFullYear()} Revolix Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
