"use client"

import { Poppins } from "next/font/google"
import SocialLinks from "./social-links"
import ContactInfo from "./contact-info"


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
})

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <SocialLinks />
          <ContactInfo />
          
          <p className={`${poppins.className} text-xs text-gray-500 text-center mt-4`}>
            © 2025 GreenBeam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}