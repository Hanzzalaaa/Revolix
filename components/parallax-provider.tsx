"use client"

import { createContext, useContext, useEffect, useState, useCallback, useRef, type ReactNode } from "react"

interface ParallaxContextType {
  scrollY: number
  windowHeight: number
  windowWidth: number
  mouseX: number
  mouseY: number
}

const ParallaxContext = createContext<ParallaxContextType>({
  scrollY: 0,
  windowHeight: 0,
  windowWidth: 0,
  mouseX: 0,
  mouseY: 0,
})

export function useParallax() {
  return useContext(ParallaxContext)
}

export function ParallaxProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  
  const scrollTicking = useRef(false)
  const mouseTicking = useRef(false)

  const handleScroll = useCallback(() => {
    if (!scrollTicking.current) {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY)
        scrollTicking.current = false
      })
      scrollTicking.current = true
    }
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!mouseTicking.current) {
      requestAnimationFrame(() => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
        mouseTicking.current = false
      })
      mouseTicking.current = true
    }
  }, [])

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
      setWindowWidth(window.innerWidth)
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!prefersReducedMotion) {
      window.addEventListener("scroll", handleScroll, { passive: true })
      window.addEventListener("mousemove", handleMouseMove, { passive: true })
      window.addEventListener("resize", handleResize)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [handleScroll, handleMouseMove])

  return (
    <ParallaxContext.Provider value={{ scrollY, windowHeight, windowWidth, mouseX, mouseY }}>
      {children}
    </ParallaxContext.Provider>
  )
}
