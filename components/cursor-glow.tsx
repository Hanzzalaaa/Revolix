"use client"

import { useEffect, useState, useRef } from "react"

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  // Animate dot, circle, and light with different delays
  useEffect(() => {
    const animate = () => {
      // Dot with very short delay
      setDotPosition((prev) => {
        const dx = mousePosition.x - prev.x
        const dy = mousePosition.y - prev.y
        
        return {
          x: prev.x + dx * 0.5, // Very fast follow
          y: prev.y + dy * 0.5,
        }
      })

      // Circle with less delay (faster)
      setCirclePosition((prev) => {
        const dx = mousePosition.x - prev.x
        const dy = mousePosition.y - prev.y
        
        return {
          x: prev.x + dx * 0.25, // Faster follow
          y: prev.y + dy * 0.25,
        }
      })

      // Light follows with circle (same delay)
      setLightPosition((prev) => {
        const dx = mousePosition.x - prev.x
        const dy = mousePosition.y - prev.y
        
        return {
          x: prev.x + dx * 0.25, // Same as circle
          y: prev.y + dy * 0.25,
        }
      })
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePosition])

  return (
    <>
      {/* Large attractive glow light - follows with delay like circle - BEHIND circle */}
      <div
        className="pointer-events-none fixed z-40 transition-opacity duration-300"
        style={{
          left: `${lightPosition.x}px`,
          top: `${lightPosition.y}px`,
          opacity: isVisible ? 0.7 : 0,
        }}
      >
        {/* Outer massive glow - much larger spread */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "900px",
            height: "900px",
            background: "radial-gradient(circle, rgba(79, 209, 197, 0.15) 0%, rgba(79, 209, 197, 0.1) 20%, rgba(79, 209, 197, 0.05) 40%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        
        {/* Middle glow layer */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(79, 209, 197, 0.2) 0%, rgba(79, 209, 197, 0.12) 30%, rgba(79, 209, 197, 0.06) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Inner bright glow */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(79, 209, 197, 0.3) 0%, rgba(79, 209, 197, 0.18) 40%, rgba(79, 209, 197, 0.08) 60%, transparent 80%)",
            filter: "blur(25px)",
          }}
        />

        {/* Core bright spot */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "150px",
            height: "150px",
            background: "radial-gradient(circle, rgba(79, 209, 197, 0.4) 0%, rgba(79, 209, 197, 0.25) 50%, transparent 100%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* Secondary trailing glow with accent color - BEHIND circle */}
      <div
        className="pointer-events-none fixed z-30 transition-all duration-500 ease-out"
        style={{
          left: `${lightPosition.x}px`,
          top: `${lightPosition.y}px`,
          opacity: isVisible ? 0.4 : 0,
        }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(246, 173, 85, 0.12) 0%, rgba(246, 173, 85, 0.06) 30%, transparent 60%)",
            filter: "blur(45px)",
          }}
        />
      </div>

      {/* Circle outline - follows with more delay - ON TOP */}
      <div
        className="pointer-events-none fixed z-50 transition-opacity duration-300"
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/40"
          style={{
            width: "40px",
            height: "40px",
            boxShadow: "0 0 20px rgba(79, 209, 197, 0.3), inset 0 0 20px rgba(79, 209, 197, 0.1)",
          }}
        />
      </div>

      {/* Dot with very short delay - follows quickly - ON TOP */}
      <div
        className="pointer-events-none fixed z-50 transition-opacity duration-300"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
          style={{
            boxShadow: "0 0 15px rgba(79, 209, 197, 0.9), 0 0 30px rgba(79, 209, 197, 0.5)",
          }}
        />
      </div>
    </>
  )
}
