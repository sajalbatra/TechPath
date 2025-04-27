import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BookOpen, ExternalLink, ArrowLeft, Calendar, Target, User } from "lucide-react"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client for server component
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""
const supabase = createClient(supabaseUrl, supabaseServiceKey)

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch roadmap from Supabase
  const { data: roadmap, error } = await supabase
    .from('roadmaps')
    .select('*')
    .eq('slug', params.id)
    .single()

  // If no custom roadmap found in Supabase, fall back to site data
  if (error || !roadmap) {
    return {
      title: "Roadmap Not Found | TechPath",
      description: "The requested roadmap could not be found.",
    }
  }

  return {
    title: `${roadmap.title} | TechPath`,
    description: roadmap.description,
  }
}

export default async function CustomRoadmapPage({ params }: Props) {
  // Fetch roadmap from Supabase
  const { data: roadmap, error } = await supabase
    .from('roadmaps')
    .select('*')
    .eq('slug', params.id)
    .single()

  if (error || !roadmap) {
    notFound()
  }

  // Transform roadmap data format to match component expectations
  const formattedRoadmap = {
    ...roadmap,
    requestDetails: roadmap.request_details,
    createdAt: roadmap.created_at
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/roadmaps" className="flex items-center text-primary mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Roadmaps
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{formattedRoadmap.title}</h1>
            <p className="text-gray-400 mb-6">{formattedRoadmap.description}</p>

            {formattedRoadmap.requestDetails && (
              <div className="bg-gray-900 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Roadmap Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <User className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Experience Level</p>
                      <p className="text-gray-400 capitalize">{formattedRoadmap.requestDetails.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Timeframe</p>
                      <p className="text-gray-400">{formattedRoadmap.requestDetails.timeframe}</p>
                    </div>
                  </div>
                  <div className="flex items-start md:col-span-2">
                    <Target className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Learning Goals</p>
                      <p className="text-gray-400">{formattedRoadmap.requestDetails.goals}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-12">
            {formattedRoadmap.levels.map((level) => (
              <div key={level.id} className="border border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">{level.title}</h2>

                <div className="space-y-8">
                  {level.skills.map((skill, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-medium mb-4 text-primary">{skill.name}</h3>

                      <div className="space-y-4">
                        <h4 className="text-lg font-medium flex items-center">
                          <BookOpen className="mr-2 h-5 w-5" />
                          Learning Resources
                        </h4>

                        <ul className="space-y-3 pl-8">
                          {skill.resources.map((resource, resourceIndex) => (
                            <li key={resourceIndex} className="list-disc text-gray-400">
                              <Link
                                href={resource.url}
                                target="_blank"
                                className="hover:text-primary flex items-center"
                              >
                                {resource.title}
                                <ExternalLink className="ml-1 h-3 w-3" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/request-roadmap" className="btn btn-primary px-6 py-3">
              Request Another Roadmap
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}