"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted")
    window.dispatchEvent(new Event("cookie_consent_updated"))
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined")
    window.dispatchEvent(new Event("cookie_consent_updated"))
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div
      role="region"
      aria-label="Cookie Consent"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Cookie className="h-5 w-5" />
        </div>
        <div className="flex-1 text-sm">
          <p className="font-semibold text-foreground">We value your privacy</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            We use essential cookies to make our site work, and optional analytics to understand traffic. You can choose to accept or decline analytics cookies. Learn more in our{" "}
            <Link href="/privacy-policy" className="text-primary underline hover:opacity-80">
              Privacy Policy
            </Link>.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Button size="sm" onClick={handleAccept} className="h-8 text-xs font-semibold px-4 rounded-lg">
              Accept
            </Button>
            <Button size="sm" variant="outline" onClick={handleDecline} className="h-8 text-xs rounded-lg">
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
