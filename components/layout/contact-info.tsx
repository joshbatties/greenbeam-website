"use client"

import { useState, useEffect } from "react"
import { Mail, Phone } from "lucide-react"

export default function ContactInfo() {
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const email = "hello@greenbeam.com.au"
  const phone = "+61 3 9123 4567"
  
  useEffect(() => {
    setIsMounted(true)
    setIsMobile(window.innerWidth <= 768)
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const handlePhoneClick = (e: React.MouseEvent) => {
    if (isMobile) {
      // Let the default behavior handle it (tel: link)
      return
    } else {
      e.preventDefault()
      navigator.clipboard.writeText(phone)
    }
  }
  
  if (!isMounted) return null

  return (
    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mt-4">
      <a 
        href={`mailto:${email}`}
        className="flex items-center space-x-2 group"
        aria-label="Email us"
      >
        <Mail size={16} className="text-[#4fa800] transition-all duration-300 group-hover:scale-110" />
        <span className="transition-all duration-300 group-hover:text-[#4fa800]">
          {email}
        </span>
      </a>
      
      <a 
        href={`tel:${phone.replace(/\s/g, '')}`}
        className="flex items-center space-x-2 group relative"
        onClick={handlePhoneClick}
        aria-label="Contact by phone"
      >
        <Phone size={16} className="text-[#4fa800] transition-all duration-300 group-hover:scale-110" />
        <span className="transition-all duration-300 group-hover:text-[#4fa800]">
          {phone}
        </span>
      </a>
    </div>
  )
}