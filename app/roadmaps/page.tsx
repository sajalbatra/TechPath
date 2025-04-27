import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { siteData } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Learning Roadmaps | TechPath",
  description:
    "Follow structured learning paths designed to take you from beginner to professional in various tech domains.",
}

export default function RoadmapsPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Learning Roadmaps</h1>
          <p className="text-gray-400">
            Follow structured learning paths designed to take you from beginner to professional in various tech domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.roadmaps.map((roadmap) => (
            <Link href={`/roadmaps/${roadmap.slug}`} key={roadmap.id} className="card">
              <div className="relative h-48 w-full">
                <Image
                  src={roadmap.image || "/placeholder.svg?height=200&width=350"}
                  alt={roadmap.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{roadmap.title}</h3>
                <p className="text-gray-400 mb-4">{roadmap.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary">View Roadmap</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
