"use client"

import { useEffect, useRef } from "react"

export default function ParticlesBackground() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const particlesContainer = particlesRef.current
    if (!particlesContainer) return

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.classList.add("particle")
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDuration = `${Math.random() * 2 + 3}s`
      particlesContainer.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 5000)
    }

    const intervalId = setInterval(createParticle, 200)

    return () => clearInterval(intervalId)
  }, [])

  return <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
}