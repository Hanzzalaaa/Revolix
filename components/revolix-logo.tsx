"use client"

import { motion } from "framer-motion"

interface RevolixLogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function RevolixLogo({ className = "", showText = true, size = "md" }: RevolixLogoProps) {
  const sizes = {
    sm: { logo: "h-9 w-9", text: "text-lg" },
    md: { logo: "h-12 w-12", text: "text-xl" },
    lg: { logo: "h-16 w-16", text: "text-2xl" },
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Creative Logo Mark */}
      <div className={`${sizes[size].logo} relative flex-shrink-0`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          style={{ width: "100%", height: "100%" }}
        >
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" width="48" height="48">
            {/* Gradient definitions */}
          <defs>
            <linearGradient id="logoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.75 0.15 180)" />
              <stop offset="100%" stopColor="oklch(0.65 0.18 200)" />
            </linearGradient>
            <linearGradient id="logoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.75 0.15 75)" />
              <stop offset="100%" stopColor="oklch(0.65 0.18 60)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background circle with glow */}
          <circle cx="24" cy="24" r="22" fill="url(#logoGradient1)" opacity="0.15" />

          {/* Main R shape - stylized and modern */}
          <motion.path
            d="M14 12h12c5.5 0 10 4.5 10 10s-4.5 10-10 10h-2l8 8"
            stroke="url(#logoGradient1)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Vertical line of R */}
          <motion.path
            d="M14 12v28"
            stroke="url(#logoGradient1)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Accent dots - innovation nodes */}
          <motion.circle
            cx="38"
            cy="38"
            r="3"
            fill="url(#logoGradient2)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.circle
            cx="26"
            cy="22"
            r="2"
            fill="url(#logoGradient2)"
            opacity="0.7"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />

          {/* Orbiting element */}
          <motion.circle
            cx="36"
            cy="16"
            r="2.5"
            fill="url(#logoGradient2)"
            animate={{
              cx: [36, 38, 36, 34, 36],
              cy: [16, 18, 20, 18, 16],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          </svg>
        </motion.div>
      </div>

      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${sizes[size].text} font-display font-bold tracking-tight text-foreground`}>
            Revol<span className="text-primary">ix</span>
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground font-medium">
            Technologies
          </span>
        </div>
      )}
    </div>
  )
}
