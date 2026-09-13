"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ParallaxSection } from "./parallax-section"
import { ScrollReveal } from "./scroll-reveal"
import dynamic from "next/dynamic"
import { InternalLinksRow } from "@/components/internal-links-row"
import { ArrowRight, Sparkles } from "lucide-react"

const FloatingParticles = dynamic(
  () =>
    import("./floating-particles").then(
      (m) => m.FloatingParticles
    ),
  {
    ssr: false,
  }
)

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================= */}

      <FloatingParticles count={20} />

      {/* =========================================================
          PARALLAX BACKGROUND ELEMENTS
      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Primary glow */}
        <ParallaxSection
          speed={0.4}
          mouseParallax
          mouseIntensity={0.03}
          className="absolute top-20 right-10 w-[500px] h-[500px] opacity-30"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-3xl animate-pulse-glow" />
        </ParallaxSection>

        {/* Accent glow */}
        <ParallaxSection
          speed={0.3}
          direction="down"
          mouseParallax
          mouseIntensity={0.02}
          className="absolute bottom-20 left-10 w-96 h-96 opacity-20"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent/40 to-transparent blur-3xl animate-pulse-glow" />
        </ParallaxSection>

        {/* Center glow */}
        <ParallaxSection
          speed={0.5}
          rotateOnScroll
          className="absolute top-1/3 left-1/4 w-72 h-72 opacity-15"
        >
          <div className="w-full h-full rounded-full bg-primary/20 blur-2xl" />
        </ParallaxSection>

        {/* =======================================================
            ANIMATED GRID PATTERN
        ======================================================= */}

        <motion.div
          className="absolute top-0 left-0 w-full h-[200%] bg-[linear-gradient(rgba(79,209,197,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,197,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"
          animate={{
            backgroundPosition: ["0px 0px", "64px 64px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div>

            {/* Badge */}
            <ScrollReveal direction="scale">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary animate-pulse" />

                <span className="text-xs md:text-sm text-primary font-medium">
                  AI-Powered Solutions
                </span>
              </motion.div>
            </ScrollReveal>

            {/* Main heading */}
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-6 text-balance">
                Innovating Tech. Scaling What&apos;s Possible.
              </h1>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={200}>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                We design, build, and scale intelligent digital
                solutions from software and AI to automation,
                cloud, and business technology.
              </p>
            </ScrollReveal>

            {/* Small supporting text */}
            <ScrollReveal delay={220}>
              <p className="text-sm text-muted-foreground mb-6 max-w-xl">
                If you are comparing, we are built for results and speed.
              </p>
            </ScrollReveal>

            {/* =====================================================
                INTERNAL LINKS
            ===================================================== */}

            {/*
            <ScrollReveal delay={220}>
              <InternalLinksRow className="mb-6" />
            </ScrollReveal>
            */}

            {/* =====================================================
                HERO CTA BUTTONS
                IMPORTANT:
                No ScrollReveal here.
                They appear immediately on initial load.
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="flex flex-wrap gap-4"
            >

              {/* =================================================
                  CONSULTATION BUTTON
              ================================================= */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Button
                  size="lg"
                  asChild
                  className="group relative overflow-hidden"
                >
                  <Link href="/contact">

                    <span className="relative z-10 flex items-center">
                      Book a Free Consultation

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>

                  </Link>
                </Button>
              </motion.div>

              {/* =================================================
                  VIEW OUR WORK BUTTON
              ================================================= */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium transition-all hover:bg-muted hover:border-primary/30"
                >
                  View Our Work

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
                </Link>
              </motion.div>

            </motion.div>

          </div>

          {/* =====================================================
              RIGHT CONTENT - FLOATING CARDS
          ===================================================== */}

          <div className="relative hidden lg:block">

            <ParallaxSection
              speed={0.2}
              mouseParallax
              mouseIntensity={0.04}
              className="relative"
            >

              <div className="relative w-full aspect-square">

                {/* =================================================
                    MAIN FLOATING CARD
                ================================================= */}

                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-2xl glass p-6 shadow-2xl shadow-primary/10"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                >

                  <div className="flex items-center gap-3 mb-4">

                    <motion.div
                      className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"
                      animate={{
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <div className="w-5 h-5 rounded bg-primary" />
                    </motion.div>

                    <div>
                      <p className="text-sm font-medium text-foreground">
                        AI Analytics
                      </p>

                      <p className="text-xs text-muted-foreground">
                        Real-time insights
                      </p>
                    </div>

                  </div>

                  <div className="space-y-3">

                    {[80, 60, 75].map((width, i) => (

                      <motion.div
                        key={i}
                        className="h-2 bg-secondary rounded-full overflow-hidden"
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        transition={{
                          delay: 0.5 + i * 0.1,
                        }}
                      >

                        <motion.div
                          className={`h-full rounded-full ${
                            i === 1
                              ? "bg-accent"
                              : "bg-primary"
                          }`}
                          initial={{
                            width: 0,
                          }}
                          animate={{
                            width: `${width}%`,
                          }}
                          transition={{
                            duration: 1,
                            delay: 0.8 + i * 0.2,
                            ease: "easeOut",
                          }}
                        />

                      </motion.div>

                    ))}

                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">

                    {[1, 2, 3, 4, 5, 6].map((i) => (

                      <motion.div
                        key={i}
                        className="aspect-square rounded-lg bg-secondary/50"
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 1 + i * 0.1,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor:
                            "rgba(79, 209, 197, 0.2)",
                        }}
                      />

                    ))}

                  </div>

                </motion.div>

                {/* =================================================
                    FLOATING STATS CARD
                ================================================= */}

                <ParallaxSection
                  speed={0.35}
                  direction="down"
                  mouseParallax
                  mouseIntensity={0.04}
                >

                  <motion.div
                    className="absolute top-4 right-2 w-48 p-4 rounded-xl glass shadow-xl"
                    initial={{
                      opacity: 0,
                      y: -30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                  >

                    <motion.p
                      className="text-2xl font-display font-bold text-primary"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1.2,
                      }}
                    >
                      +127%
                    </motion.p>

                    <p className="text-sm text-muted-foreground">
                      Growth Rate
                    </p>

                  </motion.div>

                </ParallaxSection>

                {/* =================================================
                    PROJECT COMPLETED
                ================================================= */}

                <ParallaxSection
                  speed={0.12}
                  mouseParallax
                  mouseIntensity={0.02}
                  className="absolute bottom-2 right-0 z-20"
                >

                  <motion.div
                    className="w-56 p-4 rounded-xl glass shadow-xl"
                    initial={{
                      opacity: 0,
                      x: 30,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 1,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                  >

                    <div className="flex items-center gap-3">

                      <motion.div
                        className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center"
                        animate={{
                          scale: [1, 1.15, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <span className="text-accent text-lg">
                          ✓
                        </span>
                      </motion.div>

                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Project Completed
                        </p>

                        <p className="text-xs text-muted-foreground">
                          AI Model Deployed
                        </p>
                      </div>

                    </div>

                  </motion.div>

                </ParallaxSection>

                {/* =================================================
                    ADDITIONAL FLOATING ELEMENT
                ================================================= */}

                <ParallaxSection
                  speed={0.45}
                  direction="left"
                  mouseParallax
                  mouseIntensity={0.04}
                >

                  <motion.div
                    className="absolute top-24 left-8 w-16 h-16 rounded-2xl glass flex items-center justify-center"
                    initial={{
                      opacity: 0,
                      rotate: -20,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 1.2,
                    }}
                    whileHover={{
                      rotate: 10,
                    }}
                  >
                    <Sparkles className="w-8 h-8 text-accent" />
                  </motion.div>

                </ParallaxSection>

              </div>

            </ParallaxSection>

          </div>

        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
      >

        <span className="text-xs text-muted-foreground">
          Scroll to explore
        </span>

        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >

          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

        </motion.div>

      </motion.div>

    </section>
  )
}