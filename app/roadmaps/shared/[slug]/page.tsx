// app/roadmaps/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { supabaseAdmin } from '@/lib/supabase'
import RoadmapView from '@/components/RoadmapView' // Your component to display roadmaps

interface RoadmapPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params
}: RoadmapPageProps): Promise<Metadata> {
  const { data: roadmap } = await supabaseAdmin
    .from('roadmaps')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!roadmap) {
    return {
      title: 'Roadmap Not Found',
    }
  }

  return {
    title: `${roadmap.title} | Learning Roadmap`,
    description: roadmap.description,
  }
}

export default async function RoadmapPage({ params }: RoadmapPageProps) {
  const { slug } = params

  // Fetch the roadmap data from Supabase
  const { data: roadmap, error } = await supabaseAdmin
    .from('roadmaps')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !roadmap) {
    notFound()
  }

  // Transform the data to match your component expectations
  const formattedRoadmap = {
    ...roadmap,
    requestDetails: roadmap.request_details,
    createdAt: roadmap.created_at
  }

  return (
    <div className="container mx-auto py-10">
      <RoadmapView roadmap={formattedRoadmap} />
    </div>
  )
}