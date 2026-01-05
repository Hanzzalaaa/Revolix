"use client"

import { useRef, type ReactNode, useMemo } from "react"
import { useParallax } from "./parallax-provider"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
  rotateOnScroll?: boolean
  scaleOnScroll?: boolean
  mouseParallax?: boolean
  mouseIntensity?: number
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
  rotateOnScroll = false,
  scaleOnScroll = false,
  mouseParallax = false,
  mouseIntensity = 0.02,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY, windowHeight, windowWidth, mouseX, mouseY } = useParallax()

  const style = useMemo(() => {
    if (!ref.current || windowHeight === 0) return {}

    const rect = ref.current.getBoundingClientRect()
    const elementTop = rect.top + scrollY
    const elementCenter = elementTop + rect.height / 2
    const viewportCenter = scrollY + windowHeight / 2
    const distance = viewportCenter - elementCenter

    let translateX = 0
    let translateY = 0

    switch (direction) {
      case "up":
        translateY = distance * speed * -1
        break
      case "down":
        translateY = distance * speed
        break
      case "left":
        translateX = distance * speed * -0.5
        break
      case "right":
        translateX = distance * speed * 0.5
        break
    }

    // Mouse parallax effect - only if enabled
    if (mouseParallax && windowWidth > 0) {
      const centerX = windowWidth / 2
      const centerY = windowHeight / 2
      translateX += (mouseX - centerX) * mouseIntensity
      translateY += (mouseY - centerY) * mouseIntensity
    }

    // Rotation effect
    const rotation = rotateOnScroll ? distance * 0.01 : 0

    // Scale effect - reduced
    const progress = Math.abs(distance) / windowHeight
    const scale = scaleOnScroll ? 1 + progress * 0.05 : 1

    return {
      transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotation}deg) scale(${scale})`,
    }
  }, [
    scrollY,
    windowHeight,
    windowWidth,
    mouseX,
    mouseY,
    speed,
    direction,
    rotateOnScroll,
    scaleOnScroll,
    mouseParallax,
    mouseIntensity,
  ])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
