"use client"

import React, { useState } from "react"

interface TiltCardProps {
  children: React.ReactNode 
  className?: string
}

export function TiltCard({
  children,
  className = "",
}: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const card = e.currentTarget
    const box = card.getBoundingClientRect()

    // Mouse position relative to the card
    const x = e.clientX - box.left
    const y = e.clientY - box.top

    // Card center
    const centerX = box.width / 2
    const centerY = box.height / 2

    // Calculate tilt
    const tiltX = (y - centerY) / 15
    const tiltY = (centerX - x) / 15

    setRotateX(tiltX)
    setRotateY(tiltY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      className="w-full"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`w-full transform-gpu ${className}`}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  )
}