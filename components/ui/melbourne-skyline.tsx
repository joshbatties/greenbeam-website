"use client"

import { useState, useEffect } from "react"

export default function MelbourneSkyline() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 z-0 opacity-10 pointer-events-none overflow-hidden">
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Melbourne skyline silhouette */}
        <path 
          d="M0,120 L50,120 L50,80 L65,80 L65,60 L80,60 L80,75 L95,75 L95,50 L110,50 L110,65 L125,65 L125,40 L140,40 L140,70 
          L160,70 L160,55 L175,55 L175,30 L190,30 L190,45 L210,45 L210,20 L230,20 L230,40 L245,40 L245,10 L260,10 L260,40 
          L280,40 L280,25 L300,25 L300,50 L315,50 L315,35 L330,35 L330,15 L350,15 L350,45 L370,45 L370,60 L385,60 L385,30 
          L400,30 L400,70 L420,70 L420,45 L440,45 L440,30 L455,30 L455,55 L470,55 L470,25 L490,25 L490,40 L505,40 L505,15 
          L525,15 L525,50 L540,50 L540,35 L555,35 L555,60 L575,60 L575,40 L590,40 L590,20 L610,20 L610,55 L625,55 L625,35 
          L640,35 L640,45 L655,45 L655,25 L670,25 L670,50 L685,50 L685,35 L700,35 L700,55 L720,55 L720,30 L740,30 L740,50 
          L755,50 L755,20 L775,20 L775,45 L790,45 L790,25 L810,25 L810,55 L825,55 L825,40 L840,40 L840,15 L860,15 L860,35 
          L880,35 L880,60 L895,60 L895,45 L910,45 L910,25 L930,25 L930,50 L945,50 L945,35 L960,35 L960,55 L980,55 L980,30 
          L1000,30 L1000,45 L1015,45 L1015,15 L1035,15 L1035,40 L1050,40 L1050,25 L1070,25 L1070,50 L1085,50 L1085,35 
          L1100,35 L1100,60 L1115,60 L1115,45 L1130,45 L1130,25 L1150,25 L1150,40 L1170,40 L1170,55 L1185,55 L1185,35 
          L1200,35 L1200,120 Z"
          fill="#4fa800"
          className="transform-gpu"
        />
      </svg>
    </div>
  )
}