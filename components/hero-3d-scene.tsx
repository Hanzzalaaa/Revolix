"use client"

import { Suspense, useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

// Simple rotating sphere without heavy distortion
function SimpleSphere({
  position,
  color,
  speed = 1,
}: {
  position: [number, number, number]
  color: string
  speed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.7}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

// Minimal particle field
function ParticleField() {
  const count = 80
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return pos
  }, [])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#4fd1c5" transparent opacity={0.5} />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />

      <SimpleSphere position={[0, 0, 0]} color="#4fd1c5" speed={0.5} />
      <SimpleSphere position={[-2, 1.5, -2]} color="#f6ad55" speed={0.7} />

      <ParticleField />
    </>
  )
}

export function Hero3DScene() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Check device capabilities
    const isLowEnd = () => {
      // Check for mobile devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      
      // Check hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 0
      
      // Check device memory if available
      const memory = (navigator as any).deviceMemory || 8
      
      return isMobile || cores < 4 || memory < 4
    }

    // Only render 3D on capable devices
    if (!isLowEnd()) {
      setShouldRender(true)
    }
  }, [])

  if (!shouldRender) {
    // Fallback gradient background for low-end devices
    return (
      <div className="absolute top-20 right-10 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] z-0 opacity-50 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-full blur-3xl" />
      </div>
    )
  }

  return (
    <div className="absolute top-20 right-10 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] z-0 hidden lg:block">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 50 }} 
        dpr={[1, 1]} 
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false
        }}
        performance={{ min: 0.1 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
