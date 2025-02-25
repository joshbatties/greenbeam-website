"use client"

import { useEffect, useState } from "react"

export default function BackgroundShapes() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top-right decorative circle */}
      <div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#f8fbf5] border border-[#4fa80010]"
        style={{ 
          boxShadow: "inset 0 0 40px rgba(79, 168, 0, 0.03)",
          animation: "float 15s ease-in-out infinite"
        }}
      />
      
      {/* Bottom-left large shape */}
      <div 
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#f9fdf6] border border-[#4fa80008]"
        style={{ 
          boxShadow: "inset 0 0 60px rgba(79, 168, 0, 0.02)",
          animation: "float 18s ease-in-out infinite reverse"
        }}
      />
      
      {/* Middle-right small circle */}
      <div 
        className="absolute top-1/3 -right-8 w-24 h-24 rounded-full bg-[#fafdf7] border border-[#4fa80008]"
        style={{ 
          boxShadow: "inset 0 0 15px rgba(79, 168, 0, 0.02)",
          animation: "float 12s ease-in-out infinite 1s"
        }}
      />
      
      {/* Middle-left small square */}
      <div 
        className="absolute top-1/2 -left-10 w-20 h-20 rounded-xl bg-[#fbfef8] border border-[#4fa80005]"
        style={{ 
          transform: "rotate(15deg)",
          boxShadow: "inset 0 0 15px rgba(79, 168, 0, 0.01)",
          animation: "float 10s ease-in-out infinite 2s"
        }}
      />
    </div>
  )
}