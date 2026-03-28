import Link from "next/link"
import { Fragment } from "react"
import { cn } from "@/lib/utils"

const defaultLinks = [
  { href: "/blog", label: "Read the Blog" },
  { href: "/services", label: "Explore Services" },
  { href: "/contact", label: "Start a Project" },
]

type InternalLinksRowProps = {
  className?: string
  linkClassName?: string
  separatorClassName?: string
}

export function InternalLinksRow({ className, linkClassName, separatorClassName }: InternalLinksRowProps) {
  return (
    <div className={cn("flex flex-wrap gap-3 text-sm text-muted-foreground", className)}>
      {defaultLinks.map((link, index) => (
        <Fragment key={link.href}>
          {index > 0 ? <span className={cn("text-muted-foreground/60", separatorClassName)}>•</span> : null}
          <Link href={link.href} className={cn("underline underline-offset-4 hover:text-foreground", linkClassName)}>
            {link.label}
          </Link>
        </Fragment>
      ))}
    </div>
  )
}
