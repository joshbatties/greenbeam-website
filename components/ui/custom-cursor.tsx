"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const cursor = document.createElement("div")
    cursor.classList.add("custom-cursor")
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.body.removeChild(cursor)
    }
  }, [])

  // Only render in browser environment
  if (!isMounted) return null
  
  return null
}