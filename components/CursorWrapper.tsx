"use client"

import { useEffect, useState } from "react"
import { CursorGlow } from "./cursor-glow"

export default function CursorWrapper() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none) and (pointer: coarse)")
    setIsTouchDevice(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (isTouchDevice) return null
  return <CursorGlow />
}