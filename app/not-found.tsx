import Link from "next/link"

export default function NotFound() {
  return (
    <main className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-sm uppercase tracking-wider text-primary mb-3">404</p>
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-8">
        The page you are looking for does not exist. Try heading back to the homepage.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Go to Homepage
      </Link>
    </main>
  )
}
