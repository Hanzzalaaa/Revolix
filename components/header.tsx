"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RevolixLogo } from "./revolix-logo"

const SHOW_GRAPHICS =
  process.env.NEXT_PUBLIC_SHOW_GRAPHICS === "true"

// ============================================================
// NAVIGATION
// ============================================================

const navigation = [
  {
    name: "Home",
    href: "/",
  },

  // ==========================================================
  // SERVICES
  // ==========================================================

  {
    name: "Services",
    href: "/services",

    dropdownSections: [
      {
        title: "AI & Automation",
        items: [
          {
            name: "AI & Machine Learning",
            href: "/aiml",
          },
          {
            name: "AI Automation",
            href: "/ai-automation",
          },
          {
            name: "AI Agents",
            href: "/ai-agents",
          },
        ],
      },

      {
        title: "Software Development",
        items: [
          {
            name: "Web Development",
            href: "/web-development",
          },
          {
            name: "Backend Development",
            href: "/backend-deve",
          },
          {
            name: "Custom Software",
            href: "/custom-software",
          },
          {
            name: "Mobile App Development",
            href: "/mobile-app-development",
          },
        ],
      },

      {
        title: "Business & Growth",
        items: [
          {
            name: "GoHighLevel",
            href: "/gohighlevel",
          },
          {
            name: "SEO Services",
            href: "/seo",
          },
          {
            name: "Digital Marketing",
            href: "/digital-marketing",
          },
          {
            name: "E-Commerce",
            href: "/e-commerce",
          },
        ],
      },

      {
        title: "Design",
        items: [
          {
            name: "UI/UX Design",
            href: "/uiux",
          },
        ],
      },

      {
        title: "Cloud & Infrastructure",
        items: [
          {
            name: "Cloud & DevOps",
            href: "/devops",
          },
        ],
      },
    ],
  },

  // ==========================================================
  // INDUSTRIES
  // ==========================================================

  {
    name: "Industries",
    href: "/industries",
  },

  // ==========================================================
  // GRAPHICS
  // ==========================================================

  ...(SHOW_GRAPHICS
    ? [
        {
          name: "Graphics",
          href: "/graphics",
        },
      ]
    : []),

  // ==========================================================
  // OTHER PAGES
  // ==========================================================

  {
    name: "About",
    href: "/about",
  },

  {
    name: "Team",
    href: "/team",
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
    name: "Contact",
    href: "/contact",
  },
]

// ============================================================
// HEADER
// ============================================================

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false)

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null)

  const [openMobileDropdown, setOpenMobileDropdown] =
    useState<string | null>(null)

  const pathname = usePathname()

  // ==========================================================
  // SCROLL DETECTION
  // ==========================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () =>
      window.removeEventListener("scroll", handleScroll)
  }, [])

  // ==========================================================
  // CLOSE MENUS WHEN ROUTE CHANGES
  // ==========================================================

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenMobileDropdown(null)
    setOpenDropdown(null)
  }, [pathname])

  // ==========================================================
  // SERVICE PATHS
  // ==========================================================

  const servicePaths = [
    "/services",
    "/aiml",
    "/ai-automation",
    "/ai-agents",
    "/web-development",
    "/backend-deve",
    "/custom-software",
    "/mobile-app-development",
    "/gohighlevel",
    "/seo",
    "/digital-marketing",
    "/e-commerce",
    "/uiux",
    "/devops",
  ]

  const isServicesActive =
    servicePaths.includes(pathname)

  // ==========================================================
  // INDUSTRIES
  // ==========================================================

  const isIndustriesActive =
    pathname === "/industries"

  // ==========================================================
  // TOGGLE MOBILE MENU
  // ==========================================================

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous)

    if (isMobileMenuOpen) {
      setOpenMobileDropdown(null)
    }
  }

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-border/50 bg-background/80 shadow-2xl shadow-primary/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >

      {/* ======================================================
          HEADER BAR
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* ==================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            className="relative z-10"
          >
            <RevolixLogo />
          </Link>

          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden items-center gap-1 lg:flex">

            {navigation.map((item, index) => {

              const hasSections =
                "dropdownSections" in item &&
                Array.isArray(item.dropdownSections)

              const hasDropdown =
                "dropdown" in item &&
                Array.isArray(item.dropdown)

              const isActive =
                item.name === "Services"
                  ? isServicesActive
                  : item.name === "Industries"
                    ? isIndustriesActive
                    : pathname === item.href

              return (
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    y: -20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="relative"

                  onMouseEnter={() => {
                    if (
                      hasSections ||
                      hasDropdown
                    ) {
                      setOpenDropdown(item.name)
                    }
                  }}

                  onMouseLeave={() => {
                    if (
                      hasSections ||
                      hasDropdown
                    ) {
                      setOpenDropdown(null)
                    }
                  }}
                >

                  {/* ==================================================
                      DESKTOP NORMAL LINK
                  ================================================== */}

                  {!hasSections && !hasDropdown ? (

                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.name}

                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                        />
                      )}
                    </Link>

                  ) : (

                    /* ==================================================
                        DESKTOP DROPDOWN BUTTON
                    ================================================== */

                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name
                            ? null
                            : item.name
                        )
                      }
                      className={`relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-expanded={
                        openDropdown === item.name
                      }
                    >

                      {item.name}

                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openDropdown === item.name
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                        />
                      )}

                    </button>
                  )}

                  {/* ==================================================
                      DESKTOP SERVICES MEGA MENU
                  ================================================== */}

                  {hasSections && (
                    <AnimatePresence>

                      {openDropdown === item.name && (

                        <motion.div
                          initial={{
                            opacity: 0,
                            y: -10,
                            scale: 0.98,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: -10,
                            scale: 0.98,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="absolute left-1/2 top-full w-[850px] -translate-x-1/2 pt-3"
                        >

                          <div className="rounded-2xl border border-border bg-background/95 p-6 shadow-2xl backdrop-blur-xl">

                            {/* ALL SERVICES */}

                            <Link
                              href="/services"
                              className="group mb-5 flex items-center justify-between rounded-xl border border-border bg-card/50 px-5 py-4 transition-all hover:border-primary/30 hover:bg-primary/5"
                            >

                              <div>

                                <p className="text-sm font-semibold text-foreground">
                                  All Services
                                </p>

                                <p className="mt-1 text-xs text-muted-foreground">
                                  Explore everything we offer
                                </p>

                              </div>

                              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />

                            </Link>

                            {/* SERVICE CATEGORIES */}

                            <div className="grid grid-cols-3 gap-x-8 gap-y-7">

                              {item.dropdownSections?.map(
                                (section) => (

                                  <div
                                    key={section.title}
                                  >

                                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                                      {section.title}
                                    </h3>

                                    <div className="space-y-1">

                                      {section.items.map(
                                        (service) => {

                                          const active =
                                            pathname ===
                                            service.href

                                          return (
                                            <Link
                                              key={
                                                service.name
                                              }
                                              href={
                                                service.href
                                              }
                                              className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-all ${
                                                active
                                                  ? "bg-primary/10 text-primary"
                                                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                              }`}
                                            >

                                              <span>
                                                {
                                                  service.name
                                                }
                                              </span>

                                              <ArrowRight
                                                className={`h-3.5 w-3.5 transition-all ${
                                                  active
                                                    ? "opacity-100"
                                                    : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                                }`}
                                              />

                                            </Link>
                                          )
                                        }
                                      )}

                                    </div>

                                  </div>
                                )
                              )}

                            </div>

                          </div>

                        </motion.div>
                      )}

                    </AnimatePresence>
                  )}

                </motion.div>
              )
            })}

          </nav>

          {/* ==================================================
              DESKTOP CTA
          ================================================== */}

          <div className="hidden lg:flex">

            <Button
              asChild
              className="relative overflow-hidden"
            >

              <Link href="/contact">
                <span className="relative z-10">
                  Let&apos;s Connect
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                  initial={{
                    x: "-100%",
                  }}
                  whileHover={{
                    x: "100%",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

              </Link>

            </Button>

          </div>

          {/* ==================================================
              MOBILE BUTTON
          ================================================== */}

          <button
            type="button"
            className="relative z-10 p-2 text-foreground lg:hidden"
            onClick={toggleMobileMenu}
            aria-label={
              isMobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isMobileMenuOpen}
          >

            <AnimatePresence mode="wait">

              {isMobileMenuOpen ? (

                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                >
                  <X className="h-6 w-6" />
                </motion.div>

              ) : (

                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>

              )}

            </AnimatePresence>

          </button>

        </div>
      </div>

      {/* ======================================================
          MOBILE MENU
          IMPORTANT:
          max-h + overflow-y-auto = MOBILE SCROLL BAR
      ====================================================== */}

      <AnimatePresence>

        {isMobileMenuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="lg:hidden overflow-hidden"
          >

            {/* ==================================================
                SCROLLABLE MOBILE CONTAINER
            ================================================== */}

            <div
              className="
                max-h-[calc(100vh-5rem)]
                overflow-y-auto
                overscroll-contain
                border-b
                border-border
                bg-background/95
                px-4
                py-5
                backdrop-blur-xl
                [-webkit-overflow-scrolling:touch]
              "
            >

              <nav className="flex flex-col gap-1">

                {navigation.map(
                  (item, index) => {

                    const hasSections =
                      "dropdownSections" in item &&
                      Array.isArray(
                        item.dropdownSections
                      )

                    const hasDropdown =
                      "dropdown" in item &&
                      Array.isArray(
                        item.dropdown
                      )

                    const isActive =
                      item.name === "Services"
                        ? isServicesActive
                        : item.name === "Industries"
                          ? isIndustriesActive
                          : pathname === item.href

                    return (

                      <motion.div
                        key={item.name}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                      >

                        {/* ==================================================
                            MOBILE DROPDOWN
                        ================================================== */}

                        {hasSections || hasDropdown ? (

                          <div>

                            {/* DROPDOWN BUTTON */}

                            <button
                              type="button"
                              onClick={() =>
                                setOpenMobileDropdown(
                                  openMobileDropdown ===
                                    item.name
                                    ? null
                                    : item.name
                                )
                              }
                              className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                                isActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                              }`}
                              aria-expanded={
                                openMobileDropdown ===
                                item.name
                              }
                            >

                              <span>
                                {item.name}
                              </span>

                              <ChevronDown
                                className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                                  openMobileDropdown ===
                                  item.name
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />

                            </button>

                            {/* DROPDOWN CONTENT */}

                            <AnimatePresence>

                              {openMobileDropdown ===
                                item.name && (

                                <motion.div
                                  initial={{
                                    opacity: 0,
                                    height: 0,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    height: "auto",
                                  }}
                                  exit={{
                                    opacity: 0,
                                    height: 0,
                                  }}
                                  transition={{
                                    duration: 0.2,
                                  }}
                                  className="overflow-hidden"
                                >

                                  {/* ==================================================
                                      SERVICES
                                  ================================================== */}

                                  {hasSections ? (

                                    <div className="ml-3 mt-1 border-l-2 border-border pl-3">

                                      {/* ALL SERVICES */}

                                      <Link
                                        href="/services"
                                        className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                                          pathname ===
                                          "/services"
                                            ? "bg-primary/10 text-primary"
                                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                        }`}
                                      >
                                        All Services
                                      </Link>

                                      {/* ==================================================
                                          ALL SERVICES FROM EVERY CATEGORY
                                          INCLUDING CLOUD & DEVOPS
                                      ================================================== */}

                                      <div className="mt-1">

                                        {item.dropdownSections?.map(
                                          (section) => (

                                            <div
                                              key={
                                                section.title
                                              }
                                              className="mt-2"
                                            >

                                              {/* CATEGORY NAME */}

                                              <p className="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                                                {
                                                  section.title
                                                }
                                              </p>

                                              {/* CATEGORY SERVICES */}

                                              {section.items.map(
                                                (service) => (

                                                  <Link
                                                    key={
                                                      service.name
                                                    }
                                                    href={
                                                      service.href
                                                    }
                                                    className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                                                      pathname ===
                                                      service.href
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                                    }`}
                                                  >
                                                    {
                                                      service.name
                                                    }
                                                  </Link>

                                                )
                                              )}

                                            </div>

                                          )
                                        )}

                                      </div>

                                    </div>

                                  ) : (

                                    /* ==================================================
                                        OTHER DROPDOWN
                                    ================================================== */

                                    <div className="ml-3 mt-1 border-l-2 border-border pl-3">

                                      {item.dropdown?.map(
                                        (
                                          dropdownItem
                                        ) => (

                                          <Link
                                            key={
                                              dropdownItem.name
                                            }
                                            href={
                                              dropdownItem.href
                                            }
                                            className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                                              pathname ===
                                              dropdownItem.href
                                                ? "bg-primary/10 text-primary"
                                                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                            }`}
                                          >
                                            {
                                              dropdownItem.name
                                            }
                                          </Link>

                                        )
                                      )}

                                    </div>

                                  )}

                                </motion.div>
                              )}

                            </AnimatePresence>

                          </div>

                        ) : (

                          /* ==================================================
                              NORMAL MOBILE LINK
                          ================================================== */

                          <Link
                            href={item.href}
                            className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            }`}
                          >
                            {item.name}
                          </Link>

                        )}

                      </motion.div>
                    )
                  }
                )}

                {/* ==================================================
                    MOBILE CTA
                ================================================== */}

                <div className="pb-2 pt-4">

                  <Button
                    asChild
                    className="w-full"
                  >

                    <Link href="/contact">
                      Let&apos;s Connect
                    </Link>

                  </Button>

                </div>

              </nav>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  )
}