//components/CustomCursor.tsx

"use client"

import { useEffect } from "react"

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return null
}

