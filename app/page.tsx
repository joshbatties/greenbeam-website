"use client"

import { Poppins } from "next/font/google"
import Image from "next/image"
import ParticlesBackground from "@/components/ui/particles-background"
import Footer from "@/components/layout/footer"
import BackgroundShapes from "@/components/ui/background-shapes"
import LogoAnimation from "@/components/ui/logo-animation"
import MelbourneSkyline from "@/components/ui/melbourne-skyline"
import TimberTexture from "@/components/ui/timber-texture"
import SustainabilityBadges from "@/components/ui/sustainability-badges"
import ConstructionIcons from "@/components/ui/construction-icons"
import SubscribeForm from "@/components/ui/subscribe-form"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
})

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-radial from-white via-[#f5faf2] to-white flex flex-col justify-between relative overflow-hidden fade-in">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjQwIiBzdHJva2U9IiM0ZmE4MDAiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30"></div>
      <TimberTexture />
      <BackgroundShapes />
      <ParticlesBackground />
      <MelbourneSkyline />
      <ConstructionIcons />
      
      {/* Edge gradients */}
      <div className="edge-gradient-left hidden md:block"></div>
      <div className="edge-gradient-right hidden md:block"></div>
      <div className="edge-gradient-top hidden md:block"></div>
      <div className="edge-gradient-bottom hidden md:block"></div>
      
      {/* Main content - Full screen flexible layout */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 z-10">
        <div className="flex flex-col items-center max-w-4xl">
          {/* Top section with logo and headline */}
          <div className="text-center mb-8">
            <div className="mb-6 animate-float relative mx-auto">
              <LogoAnimation />
              <Image
                src="/GreenBeam.png"
                alt="GreenBeam Logo"
                width={600}
                height={600}
                className="mx-auto drop-shadow-lg relative z-10"
                priority
              />
            </div>
            <h1 className={`${poppins.className} text-[#4b4a4f] text-lg sm:text-xl mb-8 max-w-2xl drop-shadow-sm bg-white bg-opacity-75 px-4 py-2 rounded-lg mx-auto`}>
              We&apos;re building a sustainable future with environmentally friendly structural timber solutions.
            </h1>
          </div>
          
          {/* Centered subscribe form */}
          <div className="my-8 w-full max-w-2xl">
            <SubscribeForm />
          </div>
          
          {/* Sustainability badges below form */}
          <SustainabilityBadges />
        </div>
      </div>
      
      {/* Footer - Absolute positioned at bottom */}
      <div className="w-full absolute bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  )
}