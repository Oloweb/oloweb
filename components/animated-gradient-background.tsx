"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface AnimatedGradientBackgroundProps {
  children: React.ReactNode
}

export default function AnimatedGradientBackground({ children }: AnimatedGradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const backgroundStyle = {
    // More obvious black to dark blue gradient for a futuristic feel
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #000000 0%, #000033 50%, #000000 100%)`, // Stronger dark blue
    transition: "background 0.3s ease-out", // Slightly slower transition for more noticeable movement
  }

  // Subtle dot pattern SVG data URI
  const dotPattern = `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff' opacity='0.05'/%3E%3C/svg%3E")` // Slightly more visible dots

  return (
    <div className="relative min-h-screen overflow-hidden" style={backgroundStyle}>
      {/* Overlay for subtle dots - Increased opacity for better visibility */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: dotPattern,
          backgroundSize: "10px 10px",
          opacity: 0.3, // Increased opacity from 0.2 to 0.3
        }}
      ></div>

      {/* Futuristic glowing elements */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float animation-delay-4000"></div>

      <div className="relative z-10">
        {" "}
        {/* Ensure children are above the dot overlay and glowing elements */}
        {children}
      </div>
    </div>
  )
}
