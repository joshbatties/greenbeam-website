"use client"

import { useEffect, useState } from "react"
import { HardHat, Hammer, Ruler, Axe, Trees, Scale, Warehouse, Building } from "lucide-react"

export default function ConstructionIcons() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const icons = [
    { Icon: HardHat, position: "top-10 right-16", delay: 0, size: 16 },
    { Icon: Hammer, position: "top-32 right-10", delay: 0.2, size: 18 },
    { Icon: Ruler, position: "top-48 right-20", delay: 0.4, size: 20 },
    { Icon: Trees, position: "top-16 left-10", delay: 0.1, size: 18 },
    { Icon: Axe, position: "top-40 left-20", delay: 0.3, size: 16 },
    { Icon: Scale, position: "top-60 left-12", delay: 0.5, size: 20 },
    { Icon: Warehouse, position: "bottom-16 right-16", delay: 0.6, size: 20 },
    { Icon: Building, position: "bottom-40 left-24", delay: 0.7, size: 22 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {icons.map((item, index) => {
        const { Icon, position, delay, size } = item
        return (
          <div
            key={index}
            className={`absolute ${position} opacity-0 z-0`}
            style={{
              animation: `fadeIn 0.5s ease-out forwards ${delay}s, float 8s ease-in-out infinite ${delay + 1}s`,
            }}
          >
            <div className="bg-white bg-opacity-30 p-2 rounded-full">
              <Icon size={size} className="text-[#4fa800] opacity-30" />
            </div>
          </div>
        )
      })}
    </div>
  )
}