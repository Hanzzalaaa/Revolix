"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

const RUNTIME_TEXT = "REVOLIX // PRODUCTION RUNTIME"

// Varied vertical drop offsets for each letter in the runtime text to ensure unique starting heights
const RUNTIME_DROP_OFFSETS = [
  -24, -14, -30, -18, -26, -12, -20, -16, -28, -14, -22, -32, -18, -26, -15,
  -22, -30, -12, -25, -17, -29, -15, -21, -27, -13, -24, -18, -31, -16,
]

// Distinct entrance drop vectors for each letter of "Revolix"
const REVOLIX_LETTERS = [
  { char: "R", isAccent: false, startY: -46, startX: -10, delay: 0.75 },
  { char: "e", isAccent: false, startY: -32, startX: 8, delay: 0.9 },
  { char: "v", isAccent: false, startY: -50, startX: -6, delay: 1.05 },
  { char: "o", isAccent: false, startY: -36, startX: 9, delay: 1.2 },
  { char: "l", isAccent: false, startY: -44, startX: -5, delay: 1.35 },
  { char: "i", isAccent: true, startY: -38, startX: 7, delay: 1.5 },
  { char: "x", isAccent: true, startY: -48, startX: -4, delay: 1.65 },
]

const SUBTITLE_LETTERS = Array.from("TECHNOLOGIES")

export function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState<number>(1)
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  useEffect(() => {
    // Lock scroll during loading sequence
    document.body.style.overflow = "hidden"
    window.scrollTo(0, 0)

    const counterObj = { val: 1 }

    // Smooth count from 1 to 100 over exactly 5.0 seconds
    const countTween = gsap.to(counterObj, {
      val: 100,
      duration: 5.0,
      ease: "power2.inOut",
      onUpdate: () => {
        const rounded = Math.round(counterObj.val)
        setCount(rounded)
        if (counterRef.current) {
          counterRef.current.textContent = String(rounded)
        }
      },
      onComplete: () => {
        // Brief pause at 100% for impact, then drop the whole loading screen down
        gsap.to(loaderRef.current, {
          yPercent: 100,
          duration: 0.9,
          ease: "power4.inOut",
          delay: 0.2,
          onComplete: () => {
            setIsCompleted(true)
            document.body.style.overflow = ""
          },
        })
      },
    })

    return () => {
      countTween.kill()
      document.body.style.overflow = ""
    }
  }, [])

  if (isCompleted) {
    return null
  }

  return (
    <div
      ref={loaderRef}
      aria-hidden="true"
      className="fixed inset-0 z-[99999] flex flex-col justify-between overflow-hidden bg-[#101114] select-none shadow-2xl pointer-events-auto"
      style={{
        willChange: "transform",
      }}
    >
      {/* Background Charcoal Lighting & Subtle Grid Texture */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle Turquoise Ambient Glow centered behind the logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-teal-500/[0.045] blur-[160px]" />

        {/* Subtle Dark Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-60" />
      </div>

      {/* =========================================================
          TOP BAR
          - Top-Left: Clean & empty (System Initializing removed)
          - Top-Right: Animated REVOLIX // PRODUCTION RUNTIME letter drop
      ========================================================= */}
      <div className="relative z-10 w-full px-4 py-4 sm:px-12 sm:py-8 flex items-center justify-between">
        {/* Top-Left: Kept completely empty and clean */}
        <div aria-hidden="true" />

        {/* Top-Right: Individual letters dropping into position */}
        <div className="font-mono text-[9px] min-[400px]:text-[11px] tracking-wider min-[400px]:tracking-widest text-muted-foreground/60 flex items-center overflow-hidden">
          {Array.from(RUNTIME_TEXT).map((char, index) => {
            const yOffset =
              RUNTIME_DROP_OFFSETS[index % RUNTIME_DROP_OFFSETS.length]
            const isSpace = char === " "

            return (
              <motion.span
                key={`${char}-${index}`}
                initial={{ opacity: 0, y: yOffset }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 0.12 + index * 0.024,
                }}
                className={`inline-block ${isSpace ? "w-[0.5em]" : ""}`}
              >
                {isSpace ? "\u00A0" : char}
              </motion.span>
            )
          })}
        </div>
      </div>

      {/* =========================================================
          CENTER: ANIMATED REVOLIX LOGO & BRAND IDENTITY
          - Circular logo icon drops from above
          - Turquoise logo symbol enters from the side
          - Orange accent dots drop/slide into position independently
          - "Revolix" brand text assembles character by character
          - "TECHNOLOGIES" subtitle follows with staggered entrance
          - "NEXT-GEN SOFTWARE & AI SYSTEMS" tagline fades in last
      ========================================================= */}
      <div className="relative z-10 flex flex-col items-center justify-center -mt-6">
        <div className="flex flex-col items-center">
          {/* Logo Mark + Brand Text Row */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            {/* SVG Logo Mark Container */}
            <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 relative flex-shrink-0">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  <linearGradient
                    id="loaderLogoGrad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="oklch(0.75 0.15 180)" />
                    <stop offset="100%" stopColor="oklch(0.65 0.18 200)" />
                  </linearGradient>
                  <linearGradient
                    id="loaderLogoGrad2"
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="oklch(0.75 0.15 75)" />
                    <stop offset="100%" stopColor="oklch(0.65 0.18 60)" />
                  </linearGradient>
                  <filter id="loaderGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* 1. Circular logo background icon: drops into position from above */}
                <motion.circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="url(#loaderLogoGrad1)"
                  initial={{ y: -55, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.15 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.25,
                  }}
                />

                {/* 2. Turquoise logo symbol: enters from the side */}
                <motion.g
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.55,
                  }}
                >
                  {/* Main R loop */}
                  <path
                    d="M14 12h12c5.5 0 10 4.5 10 10s-4.5 10-10 10h-2l8 8"
                    stroke="url(#loaderLogoGrad1)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    filter="url(#loaderGlow)"
                  />
                  {/* Vertical spine of R */}
                  <path
                    d="M14 12v28"
                    stroke="url(#loaderLogoGrad1)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.g>

                {/* 3. Orange circular accent dots: drop/slide independently */}
                {/* Dot 1: Bottom Right (38, 38) */}
                <motion.circle
                  cx="38"
                  cy="38"
                  r="3"
                  fill="url(#loaderLogoGrad2)"
                  initial={{ y: 30, x: 20, opacity: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.1,
                  }}
                />

                {/* Dot 2: Inner Core (26, 22) */}
                <motion.circle
                  cx="26"
                  cy="22"
                  r="2"
                  fill="url(#loaderLogoGrad2)"
                  initial={{ y: -25, x: -15, opacity: 0 }}
                  animate={{ y: 0, x: 0, opacity: 0.7 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.35,
                  }}
                />

                {/* Dot 3: Top Right (36, 16) */}
                <motion.circle
                  cx="36"
                  cy="16"
                  r="2.5"
                  fill="url(#loaderLogoGrad2)"
                  initial={{ y: -30, x: 22, opacity: 0 }}
                  animate={{ y: 0, x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.6,
                  }}
                />
              </svg>
            </div>

            {/* Brand Text Column */}
            <div className="flex flex-col leading-none">
              {/* "Revolix" assembled character by character */}
              <div className="flex items-center text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight">
                {REVOLIX_LETTERS.map((letter) => (
                  <motion.span
                    key={letter.char}
                    initial={{
                      opacity: 0,
                      y: letter.startY,
                      x: letter.startX,
                    }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 1, 0.5, 1],
                      delay: letter.delay,
                    }}
                    className={`inline-block ${
                      letter.isAccent
                        ? "text-primary text-teal-400"
                        : "text-foreground text-white"
                    }`}
                  >
                    {letter.char}
                  </motion.span>
                ))}
              </div>

              {/* "TECHNOLOGIES" subtitle: staggered entrance */}
              <div className="flex items-center text-[0.62rem] sm:text-[0.72rem] md:text-[0.8rem] uppercase tracking-[0.32em] text-muted-foreground font-medium mt-1">
                {SUBTITLE_LETTERS.map((char, idx) => (
                  <motion.span
                    key={`${char}-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 1, 0.5, 1],
                      delay: 1.95 + idx * 0.045,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Tagline: Appears last with smooth fade-in and slight upward movement */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 2.65,
            }}
            className="flex items-center gap-2 mt-5 text-[10px] sm:text-[11px] font-mono tracking-[0.26em] text-muted-foreground/70 uppercase"
          >
            <span>Next-Gen Software &amp; AI Systems</span>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM AREA
          - Large loading percentage (1–100%) moved 15px upward
          - Typography, colors, and layout preserved
      ========================================================= */}
      <div className="relative z-10 w-full px-6 pb-6 sm:px-12 sm:pb-12 lg:px-16 lg:pb-14 flex items-end justify-between">
        {/* Bottom Left Corner: Big 1-100 Counter moved 15px upward */}
        <div className="flex flex-col -translate-y-[15px]">
          <div className="flex items-baseline gap-2 leading-none">
            <span
              ref={counterRef}
              className="font-mono text-6xl min-[380px]:text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-bold tracking-tighter text-white leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              {count}
            </span>
            <span className="font-mono text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-teal-400 font-bold">
              %
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-3">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-muted-foreground uppercase font-medium">
              Loading Resources
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          FULL-WIDTH HORIZONTAL BOTTOM PROGRESS BAR
          - Stretches across the entire viewport width
          - Starts at bottom-left, fills to bottom-right
          - Thin, clean, minimal, turquoise accent
          - Accurately tracks actual count percentage
      ========================================================= */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[2px] bg-white/[0.06] overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(45,212,191,0.7)]"
          style={{ width: `${count}%` }}
        />
      </div>
    </div>
  )
}
