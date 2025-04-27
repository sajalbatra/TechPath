import { type NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"
import { callGeminiAPI } from "@/lib/gemini"
import { createClient } from "@supabase/supabase-js"
import { auth } from '@clerk/nextjs/server';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""
const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request: NextRequest) {
  // Check if user is authenticated
  const { userId } = await auth();
  
  if (!userId) {
    return NextResponse.json({ message: "Authentication required" }, { status: 401 })
  }

  try {
    const { topic, experience, goals, timeframe } = await request.json()

    // Validate required fields
    if (!topic || !experience || !goals || !timeframe) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Generate a prompt for Gemini
    const prompt = `
      I need a detailed learning roadmap for ${topic} in JSON format.
      
      USER DETAILS:
      - Experience level: ${experience}
      - Goals: ${goals}
      - Timeframe: ${timeframe}
      
      RESPONSE INSTRUCTIONS:
      - Your entire response must be valid JSON only
      - No explanatory text before or after the JSON
      - Do not use markdown formatting
      - Ensure all URLs are valid
      
      JSON STRUCTURE:
      {
        "title": "Learning Roadmap for ${topic}",
        "description": "A detailed roadmap tailored for ${experience} level learners aiming to ${goals} within ${timeframe}",
        "levels": [
          {
            "id": "beginner",
            "title": "Beginner Level",
            "skills": [
              {
                "name": "Skill Name",
                "resources": [
                  {
                    "title": "Resource Title",
                    "url": "https://example.com"
                  }
                ]
              }
            ]
          }
        ]
      }
      
      REQUIREMENTS:
      - Include exactly 3 levels: beginner, intermediate, and advanced
      - Each level should have 3-5 skills
      - Each skill should have 2-3 resources with valid URLs
      - Every URL must be real and accessible
      - All JSON must be properly formatted with no trailing commas
    `;

    // Call Gemini API
    const apiKey = process.env.GEMINI_SECRET_KEY || ""
    const roadmapData = await callGeminiAPI(prompt, apiKey)

    // Generate a unique ID for the roadmap
    const roadmapId = uuidv4()
    const slug = `${roadmapId}`

    // Create the roadmap object
    const newRoadmap = {
      id: roadmapId,
      slug,
      title: roadmapData.title,
      description: roadmapData.description,
      image: "/placeholder.svg?height=200&width=350",
      levels: roadmapData.levels,
      created_at: new Date().toISOString(),
      user_id: userId,
      request_details: {
        topic,
        experience,
        goals,
        timeframe,
      },
    }

    // Store in Supabase
    const { error } = await supabase
      .from('roadmaps')
      .insert(newRoadmap)

    if (error) {
      console.error("Error storing roadmap in Supabase:", error)
      return NextResponse.json({ message: "Failed to store roadmap" }, { status: 500 })
    }

    return NextResponse.json({
      message: "Roadmap generated successfully",
      roadmapId: slug,
    })
  } catch (error) {
    console.error("Error generating roadmap:", error)
    return NextResponse.json({ message: "Failed to generate roadmap" }, { status: 500 })
  }
}