"use client"

import { useState, useEffect } from "react"
import { Leaf, Award, TreePine, Recycle } from "lucide-react"

export default function SustainabilityBadges() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const badges = [
    { 
      icon: <TreePine size={16} className="text-[#4fa800]" />, 
      text: "FSC Certified" 
    },
    {
      icon: <Leaf size={16} className="text-[#4fa800]" />,
      text: "Low Carbon"
    },
    {
      icon: <Recycle size={16} className="text-[#4fa800]" />,
      text: "Circular Materials"
    },
    {
      icon: <Award size={16} className="text-[#4fa800]" />,
      text: "Durable"
    }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-lg">
      {badges.map((badge, index) => (
        <div 
          key={index}
          className="flex items-center gap-1 py-1 px-2 bg-white bg-opacity-80 rounded-full text-xs text-[#4b4a4f] border border-gray-100 shadow-sm backdrop-blur-sm"
          style={{ 
            animation: `fadeIn 0.5s ease-out forwards ${0.6 + index * 0.1}s`,
            opacity: 0
          }}
        >
          {badge.icon}
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  )
}