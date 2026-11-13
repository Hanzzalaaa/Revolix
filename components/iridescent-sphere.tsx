"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export function IridescentSphere({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    // WebGL capability check
    try {
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl")
      if (!gl) {
        setWebglSupported(false)
        return
      }
    } catch {
      setWebglSupported(false)
      return
    }

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 7.2)

    // 2. Renderer Setup
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      renderer.setClearColor(0x000000, 0)
    } catch {
      setWebglSupported(false)
      return
    }

    // 3. Procedural Asymmetrical Organic Geometry
    // We create a high-resolution sphere and deform vertices to create an organic,
    // asymmetrical glass sculpture where one side is noticeably fuller and contours are uneven.
    const baseRadius = 2.02
    const geometry = new THREE.SphereGeometry(baseRadius, 96, 96)
    const posAttr = geometry.attributes.position
    const vertex = new THREE.Vector3()

    // Primary asymmetric expansion vector (expanded towards upper right-front)
    const asymDir = new THREE.Vector3(0.9, 0.45, 0.4).normalize()

    for (let i = 0; i < posAttr.count; i++) {
      vertex.fromBufferAttribute(posAttr, i)
      const norm = vertex.clone().normalize()

      // Asymmetric bulge on one side
      const dotAsym = norm.dot(asymDir)
      // Smoothly expand when pointing along asymDir, subtly flatten on opposite
      const asymFactor = Math.pow(Math.max(0, (dotAsym + 0.8) / 1.8), 1.6) * 0.42

      // Non-repeating organic harmonic undulations for natural glass contours
      const wave1 = Math.sin(norm.x * 2.4 + norm.z * 1.8) * 0.11
      const wave2 = Math.cos(norm.y * 3.0 + norm.x * 1.5) * 0.08
      const wave3 = Math.sin(norm.z * 3.8 + norm.y * 2.2) * 0.05
      const wave4 = Math.cos(norm.x * 4.2 - norm.z * 2.8) * 0.03

      // Subtle unevenness in curvature
      const r = baseRadius * (1.0 + asymFactor + wave1 + wave2 + wave3 + wave4)
      vertex.copy(norm.multiplyScalar(r))
      posAttr.setXYZ(i, vertex.x, vertex.y, vertex.z)
    }

    // Recompute normals mathematically across the deformed surface
    geometry.computeVertexNormals()

    // 4. Custom Smoked Obsidian Glass & Thin-Film Iridescent Shader
    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        vec4 mvPosition = viewMatrix * worldPosition;
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `

    const fragmentShader = `
      uniform float uTime;
      uniform vec3 uBaseColor;
      
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;

      // Physically-inspired thin-film spectral iridescence
      // Produces subtle violet, blue, cyan, amber and rose transitions at grazing angles
      vec3 getIridescentPalette(float cosTheta, float phase) {
        float phi = (1.0 - cosTheta) * 6.28318 * 1.6 + phase;
        
        vec3 col;
        col.r = 0.52 + 0.45 * cos(phi + 0.2);
        col.g = 0.50 + 0.45 * cos(phi + 2.1);
        col.b = 0.54 + 0.44 * cos(phi + 4.2);

        // Desaturate slightly and blend with cool titanium/teal undertones
        vec3 titanium = vec3(0.55, 0.78, 0.85);
        return mix(col, titanium, 0.28);
      }

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);

        // Angle between surface normal and camera view
        float NdotV = max(dot(normal, viewDir), 0.0);
        
        // High-order Fresnel curves
        float fresnel = pow(1.0 - NdotV, 3.4);
        float softFresnel = pow(1.0 - NdotV, 2.0);

        // Deep smoked obsidian glass core (dark, light-absorbing facing viewer)
        // This ensures the headline text placed in front has maximum contrast and legibility
        vec3 deepGlass = vec3(0.015, 0.02, 0.032);
        deepGlass += vec3(0.015, 0.025, 0.035) * (normal.y * 0.5 + 0.5);

        // Studio Lighting (3 carefully calibrated dark-studio light sources)
        // Light 1: Key upper-right softbox
        vec3 light1 = normalize(vec3(2.5, 3.2, 2.8));
        vec3 half1 = normalize(light1 + viewDir);
        float diff1 = max(dot(normal, light1), 0.0) * 0.12;
        float spec1 = pow(max(dot(normal, half1), 0.0), 56.0) * 0.88;

        // Light 2: Rim / kicker light from lower-left
        vec3 light2 = normalize(vec3(-3.2, -1.8, -1.5));
        vec3 half2 = normalize(light2 + viewDir);
        float spec2 = pow(max(dot(normal, half2), 0.0), 36.0) * 0.65;

        // Light 3: Top back edge highlight
        vec3 light3 = normalize(vec3(0.2, 4.0, -1.2));
        vec3 half3 = normalize(light3 + viewDir);
        float spec3 = pow(max(dot(normal, half3), 0.0), 64.0) * 0.95;

        // Thin-film iridescent edge reflections
        // Controlled by grazing angles and curvature variation
        float phaseShift = normal.x * 0.9 + normal.y * 0.6 + normal.z * 0.4;
        vec3 iridColor = getIridescentPalette(NdotV, phaseShift);

        // Chrome-like metallic specular sheen at grazing edges
        vec3 chromeSheen = vec3(0.85, 0.92, 0.98) * fresnel;

        // Base composition: Smoked glass + subtle diffuse
        vec3 color = deepGlass + (diff1 * vec3(0.12, 0.18, 0.22));

        // Thin controlled iridescent grazing rim
        float iridIntensity = pow(fresnel, 2.4);
        color += iridColor * iridIntensity * 0.92;

        // Chrome edge sheen
        color += chromeSheen * 0.32;

        // Crisp specular studio highlights
        color += (spec1 + spec3) * vec3(0.96, 0.98, 1.0);
        color += spec2 * vec3(0.72, 0.85, 0.95);

        // Translucent obsidian opacity:
        // Deep interior is dark (~0.88), rim reflections achieve glossy definition
        float alpha = clamp(0.86 + fresnel * 0.14 + (spec1 + spec3) * 0.25, 0.0, 1.0);

        gl_FragColor = vec4(color, alpha);
      }
    `

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uBaseColor: { value: new THREE.Color(0x06080e) },
      },
      transparent: true,
      depthWrite: true,
      depthTest: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    // Initial slight diagonal tilt for sophisticated composition
    mesh.rotation.x = 0.18
    mesh.rotation.z = -0.08
    scene.add(mesh)

    // 5. Responsive Resize Handling
    const updateSize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      if (width === 0 || height === 0) return

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    updateSize()
    const resizeObserver = new ResizeObserver(() => updateSize())
    resizeObserver.observe(container)

    // 6. Viewport Visibility & Performance Optimization
    let isVisible = true
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    visibilityObserver.observe(container)

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // 7. Continuous 360-degree 3D Rotation Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      if (!isVisible) return

      const elapsedTime = clock.getElapsedTime()
      material.uniforms.uTime.value = elapsedTime

      if (!prefersReducedMotion) {
        // Continuous, smooth 360-degree rotation around Y axis
        // The asymmetrical lobe periodically sweeps into view, visibly changing the silhouette
        mesh.rotation.y += 0.0038

        // Subtle organic floating and multi-axis tilt
        mesh.rotation.x = 0.18 + Math.sin(elapsedTime * 0.35) * 0.08
        mesh.rotation.z = -0.08 + Math.cos(elapsedTime * 0.28) * 0.05
      }

      renderer.render(scene, camera)
    }

    animate()

    // 8. Cleanup and Memory Disposal
    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()

      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  if (!webglSupported) {
    // Elegant CSS Fallback if WebGL is unavailable
    return (
      <div className={`relative ${className}`}>
        <div
          className="w-full h-full rounded-full blur-2xl opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(79, 209, 197, 0.25) 0%, rgba(15, 23, 42, 0.8) 60%, rgba(7, 10, 15, 0.95) 100%)",
            border: "1px solid rgba(79, 209, 197, 0.15)",
          }}
        />
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`relative overflow-visible select-none ${className}`}>
      {/* Soft ambient backlight bloom behind the orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 209, 197, 0.35) 0%, rgba(99, 102, 241, 0.15) 45%, rgba(0, 0, 0, 0) 70%)",
        }}
      />
      <canvas ref={canvasRef} className="w-full h-full block pointer-events-none" />
    </div>
  )
}
