"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"
import { createClient } from "@supabase/supabase-js"
import { Loader2 } from "lucide-react"

// Initialize Supabase client for client-side
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function MyRoadmapsPage() {
  const { isSignedIn, userId } = useAuth()
  const [roadmaps, setRoadmaps] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUserRoadmaps() {
      if (!isSignedIn || !userId) return
      
      try {
        setIsLoading(true)
        const { data, error } = await supabase
          .from('roadmaps')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })
        
        if (error) throw error
        
        // Format the roadmaps
        const formattedRoadmaps = data.map(roadmap => ({
          ...roadmap,
          requestDetails: roadmap.request_details,
          createdAt: roadmap.created_at
        }))
        
        setRoadmaps(formattedRoadmaps)
      } catch (err) {
        console.error("Error fetching roadmaps:", err)
        setError("Failed to load your roadmaps")
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchUserRoadmaps()
  }, [isSignedIn, userId])

  if (!isSignedIn) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold mb-6">My Roadmaps</h1>
          <p className="text-gray-400 mb-8">Sign in to view and manage your custom roadmaps</p>
          <Link href="/sign-in" className="btn btn-primary px-6 py-3">
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Roadmaps</h1>
        
        {isLoading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="bg-red-900/20 border border-red-800 text-red-100 px-4 py-3 rounded">
            {error}
          </div>
        ) : roadmaps.length === 0 ? (
          <div className="text-center py-10 bg-gray-900 rounded-lg border border-gray-800">
            <h2 className="text-xl font-medium mb-3">You haven't created any roadmaps yet</h2>
            <p className="text-gray-400 mb-6">Create your first custom learning roadmap to get started</p>
            <Link href="/request-roadmap" className="btn btn-primary px-6 py-2">
              Create Roadmap
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmaps.map((roadmap) => (
              <Link
                key={roadmap.slug}
                href={`/roadmaps/custom/${roadmap.slug}`}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-primary transition-colors duration-200"
              >
                <div className="mb-4 h-40 bg-gray-800 rounded-md overflow-hidden flex items-center justify-center">
                  {roadmap.image && (
                    <img
                      src={roadmap.image}
                      alt={roadmap.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h2 className="text-xl font-semibold mb-2">{roadmap.title}</h2>
                <p className="text-gray-400 text-sm line-clamp-2">{roadmap.description}</p>
                <div className="mt-4 text-sm text-gray-500">
                  Created: {new Date(roadmap.createdAt).toLocaleDateString()}
                </div>
              </Link>
            ))}
          </div>
        )}
        
        <div className="mt-10">
          <Link href="/request-roadmap" className="btn btn-primary px-6 py-3">
            Create New Roadmap
          </Link>
        </div>
      </div>
    </div>
  )
}