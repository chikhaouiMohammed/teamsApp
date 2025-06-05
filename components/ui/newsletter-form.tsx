"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

interface NewsletterFormProps {
  variant?: "hero" | "footer" | "inline"
  className?: string
}

export function NewsletterForm({ variant = "inline", className = "" }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      setMessage("Thanks for signing up! You'll get early access when we launch.")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  const isHero = variant === "hero"
  const isFooter = variant === "footer"

  if (status === "success") {
    return (
      <div
        className={`flex items-center justify-center p-4 rounded-lg bg-green-50 border border-green-200 ${className}`}
      >
        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
        <span className={`${isHero ? "text-green-700" : isFooter ? "text-green-200" : "text-green-700"} font-medium`}>
          {message}
        </span>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className={`flex ${isHero ? "flex-col sm:flex-row gap-3" : "flex-row"}`}>
          <div className="relative flex-1">
            <Mail
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isFooter ? "text-[#94a3b1]" : "text-[#6d7d8b]"
              }`}
            />
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`pl-10 ${
                isHero
                  ? "h-12 text-base border-[#dae3ea] focus:border-[#0bc2f7] focus:ring-[#0bc2f7] rounded-full"
                  : isFooter
                    ? "h-12 bg-[#25313c] border-[#25313c] text-white placeholder-[#94a3b1] focus:outline-none focus:border-[#0bc2f7] rounded-l-full rounded-r-none"
                    : "h-10 border-[#dae3ea] focus:border-[#0bc2f7] focus:ring-[#0bc2f7] rounded-l-lg rounded-r-none"
              }`}
              disabled={status === "loading"}
            />
          </div>
          <Button
            type="submit"
            disabled={status === "loading"}
            className={`${
              isHero
                ? "h-12 px-8 bg-gradient-to-r from-[#0bc2f7] to-[#0aa8e6] hover:from-[#0aa8e6] hover:to-[#0bc2f7] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                : isFooter
                  ? "h-12 bg-gradient-to-r from-[#0bc2f7] to-[#0aa8e6] hover:from-[#0aa8e6] hover:to-[#0bc2f7] rounded-l-none rounded-r-full transition-all hover:scale-105 font-semibold px-6"
                  : "h-10 bg-gradient-to-r from-[#0bc2f7] to-[#0aa8e6] hover:from-[#0aa8e6] hover:to-[#0bc2f7] rounded-l-none rounded-r-lg font-semibold px-6"
            }`}
          >
            {status === "loading" ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Get Early Access"
            )}
          </Button>
        </div>

        {status === "error" && (
          <div className="flex items-center text-red-500 text-sm">
            <AlertCircle className="w-4 h-4 mr-2" />
            {message}
          </div>
        )}
      </form>

      {isHero && (
        <p className="text-sm text-[#6d7d8b] mt-2 text-center">
          Join 10,000+ teams already using our platform. No spam, unsubscribe anytime.
        </p>
      )}
    </div>
  )
}
