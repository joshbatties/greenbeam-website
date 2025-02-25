// app/page.tsx

"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import CustomCursor from "../components/CustomCursor"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Check } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
})

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-radial from-white via-[#f5faf2] to-white flex flex-col justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjQwIiBzdHJva2U9IiM0ZmE4MDAiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30"></div>
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      <div className="edge-gradient-left"></div>
      <div className="edge-gradient-right"></div>
      <div className="edge-gradient-top"></div>
      <div className="edge-gradient-bottom"></div>
      <main className="z-10 text-center flex flex-col items-center justify-center flex-grow px-4">
        <div className="mb-8 animate-float">
          <Image
            src="/placeholder.svg?height=120&width=120"
            alt="Company Logo"
            width={120}
            height={120}
            className="mx-auto drop-shadow-lg"
          />
        </div>
        <h1
          className={`${poppins.className} text-4xl sm:text-5xl font-semibold text-[#4b4a4f] mb-4 animate-pulse drop-shadow-sm`}
        >
          Coming Soon
        </h1>
        <p className={`${poppins.className} text-[#4b4a4f] text-lg sm:text-xl mb-8 max-w-2xl drop-shadow-sm`}>
          We're building a sustainable future with environmentally friendly structural timber solutions.
        </p>
      </main>
      <footer className="w-full py-6 bg-gray-50 bg-opacity-80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <form onSubmit={handleSubscribe} className="flex items-center space-x-2 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300 flex-grow shadow-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 text-sm bg-white text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gray-400 shadow-sm hover:shadow-md relative overflow-hidden"
              >
                {isSubscribed ? (
                  <span className="flex items-center justify-center">
                    <Check size={18} className="mr-1" />
                    Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-[#4fa800] hover:text-[#3f8700] transition-all duration-300 transform hover:scale-110"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-[#4fa800] hover:text-[#3f8700] transition-all duration-300 transform hover:scale-110"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-[#4fa800] hover:text-[#3f8700] transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-[#4fa800] hover:text-[#3f8700] transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className={`${poppins.className} text-xs text-gray-500 absolute left-1/2 transform -translate-x-1/2`}>
              © 2024 Your Company. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mt-4 order-last md:order-none">
              <div className="flex items-center space-x-2 group">
                <Mail size={16} className="text-[#4fa800] transition-all duration-300 group-hover:scale-110" />
                <span className="transition-all duration-300 group-hover:text-[#4fa800]">contact@example.com</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Phone size={16} className="text-[#4fa800] transition-all duration-300 group-hover:scale-110" />
                <span className="transition-all duration-300 group-hover:text-[#4fa800]">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <MapPin size={16} className="text-[#4fa800] transition-all duration-300 group-hover:scale-110" />
                <span className="transition-all duration-300 group-hover:text-[#4fa800]">
                  123 Main St, City, Country
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CustomCursor />
    </div>
  )
}

