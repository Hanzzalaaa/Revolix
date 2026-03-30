"use client"

import { useEffect, useState, useRef } from "react"

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const animationFrameRef = useRef<number | null>(null)

  // Detect touch device
  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches

  useEffect(() => {
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible, isTouchDevice])

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setDotPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.5,
        y: prev.y + (mousePosition.y - prev.y) * 0.5,
      }))
      setCirclePosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.25,
        y: prev.y + (mousePosition.y - prev.y) * 0.25,
      }))
      setLightPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.25,
        y: prev.y + (mousePosition.y - prev.y) * 0.25,
      }))

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationFrameRef.current !== null)
        cancelAnimationFrame(animationFrameRef.current)
    }
  }, [mousePosition])

  return (
    <>
      {/* Light Glow */}
      <div
        className="pointer-events-none fixed z-40 transition-opacity duration-300"
        style={{
          left: `${lightPosition.x}px`,
          top: `${lightPosition.y}px`,
          opacity: isVisible ? 0.7 : 0,
        }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "900px",
            height: "900px",
            background:
              "radial-gradient(circle, rgba(79, 209, 197, 0.15) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Dot & Circle */}
      {!isTouchDevice && (
        <>
          <div
            className="pointer-events-none fixed z-50"
            style={{
              left: `${circlePosition.x}px`,
              top: `${circlePosition.y}px`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-primary/40" />
          </div>

          <div
            className="pointer-events-none fixed z-50"
            style={{
              left: `${dotPosition.x}px`,
              top: `${dotPosition.y}px`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
          </div>
        </>
      )}
    </>
  )
}