"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { useAuth } from "@clerk/nextjs"
import { SignInButton } from "@clerk/nextjs"

type FormState = {
  topic: string
  experience: string
  goals: string
  timeframe: string
}

export default function RequestRoadmapForm() {
  const router = useRouter()
  const { isSignedIn, userId } = useAuth()
  
  const [formState, setFormState] = useState<FormState>({
    topic: "",
    experience: "beginner",
    goals: "",
    timeframe: "3-6 months",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check if user is signed in
    if (!isSignedIn) {
      setError("Please sign in to generate a roadmap")
      return
    }
    
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/generate-roadmap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          userId: userId // Include user ID for roadmap ownership
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to generate roadmap")
      }

      const data = await response.json()

      // Redirect to the newly created roadmap
      router.push(`/roadmaps/custom/${data.roadmapId}`)
    } catch (err) {
      console.error("Error generating roadmap:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="card p-8">
      {error && <div className="bg-red-900/20 border border-red-800 text-red-100 px-4 py-3 rounded mb-6">{error}</div>}

      {!isSignedIn ? (
        <div className="text-center py-8">
          <h3 className="text-xl font-medium mb-4">Sign in to create a custom roadmap</h3>
          <p className="text-gray-400 mb-6">You need to be signed in to generate and save custom learning roadmaps.</p>
          <SignInButton mode="modal">
            <button className="btn btn-primary px-6 py-2">Sign In</button>
          </SignInButton>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="topic" className="block font-medium">
              What topic would you like to learn?
              <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formState.topic}
              onChange={handleChange}
              placeholder="e.g., Machine Learning, Web Development, DevOps"
              className="input py-2"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="experience" className="block font-medium">
              What's your experience level?
              <span className="text-primary">*</span>
            </label>
            <select
              id="experience"
              name="experience"
              value={formState.experience}
              onChange={handleChange}
              className="input py-2"
              required
              disabled={isLoading}
            >
              <option value="beginner">Beginner (No experience)</option>
              <option value="intermediate">Intermediate (Some experience)</option>
              <option value="advanced">Advanced (Experienced but want to go deeper)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="goals" className="block font-medium">
              What are your learning goals?
              <span className="text-primary">*</span>
            </label>
            <textarea
              id="goals"
              name="goals"
              value={formState.goals}
              onChange={handleChange}
              placeholder="e.g., Build a portfolio, Get a job, Start a project"
              className="input py-2 min-h-[100px]"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="timeframe" className="block font-medium">
              What's your learning timeframe?
              <span className="text-primary">*</span>
            </label>
            <select
              id="timeframe"
              name="timeframe"
              value={formState.timeframe}
              onChange={handleChange}
              className="input py-2"
              required
              disabled={isLoading}
            >
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="1+ year">1+ year</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full py-3 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Roadmap...
              </>
            ) : (
              "Generate Roadmap"
            )}
          </button>
        </form>
      )}
    </div>
  )
}