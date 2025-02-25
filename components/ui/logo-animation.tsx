"use client"

import { useEffect, useState } from "react"


export default function LogoAnimation() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Simulate logo loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) return null

  return (
    <div className="relative">
      {/* Logo glow effect - more subtle */}
      <div 
        className={`absolute inset-0 rounded-full bg-[#4fa80010] blur-xl transform scale-75 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-40' : 'opacity-0'
        }`}
        style={{ 
          animation: isLoaded ? 'pulse 6s ease-in-out infinite' : 'none'
        }}
      />
      
      {/* Subtle light flare */}
      <div 
        className={`absolute -right-4 -top-4 w-6 h-6 rounded-full bg-white blur-md transition-opacity duration-1000 ${
          isLoaded ? 'opacity-50' : 'opacity-0'
        }`}
        style={{ 
          animation: isLoaded ? 'pulse 5s ease-in-out infinite 1s' : 'none'
        }}
      />

      {/* Decorative rings - more subtle */}
      <div 
        className={`absolute inset-0 rounded-full border border-[#4fa80020] transform scale-110 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-40' : 'opacity-0'
        }`}
      />
      <div 
        className={`absolute inset-0 rounded-full border border-[#4fa80010] transform scale-125 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-20' : 'opacity-0'
        }`}
      />
    </div>
  )
}