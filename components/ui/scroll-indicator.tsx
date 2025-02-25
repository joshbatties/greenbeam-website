"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      // Hide indicator when user scrolls down
      if (window.scrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToFooter = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isMounted) return null

  return (
    <div 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 cursor-pointer ${
        isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      onClick={scrollToFooter}
      aria-label="Scroll to subscribe"
    >
      <div className="flex flex-col items-center">
        <span className="text-xs text-[#4b4a4f] mb-2 font-light">Subscribe</span>
        <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 animate-bounce">
          <ChevronDown size={18} className="text-[#4fa800]" />
        </div>
      </div>
    </div>
  )
}