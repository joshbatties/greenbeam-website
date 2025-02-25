"use client"

import { useState } from "react"
import { Check, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

interface SubscribeFormProps {
  onSuccess?: () => void
}

export default function SubscribeForm({ onSuccess }: SubscribeFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    try {
      // Check if email already exists
      const { data: existingUser } = await supabase
        .from("subscribers")
        .select("email")
        .eq("email", email)
        .single()

      if (existingUser) {
        setError("You're already subscribed to our newsletter!")
        setIsLoading(false)
        return
      }

      // Insert new subscriber
      const { error: insertError } = await supabase
        .from("subscribers")
        .insert([{ email, status: 'active' }])

      if (insertError) throw insertError

      setIsSubscribed(true)
      setError(null)
      
      if (onSuccess) onSuccess()
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    } catch (err) {
      console.error("Error subscribing:", err)
      setError("Failed to subscribe. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading || isSubscribed}
          className="px-6 py-4 text-base sm:text-lg bg-white bg-opacity-90 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300 flex-grow shadow-sm w-full"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={isLoading || isSubscribed}
          className="px-8 py-4 text-base sm:text-lg bg-white bg-opacity-90 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gray-400 shadow-sm hover:shadow-md relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed sm:w-auto w-full"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <Loader2 size={22} className="mr-2 animate-spin" />
              Subscribing...
            </span>
          ) : isSubscribed ? (
            <span className="flex items-center justify-center">
              <Check size={22} className="mr-2" />
              Subscribed!
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Stay Updated
            </span>
          )}
        </button>
      </form>
      {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
    </div>
  )
}