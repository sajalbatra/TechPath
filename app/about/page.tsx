import type { Metadata } from "next"
import { siteData } from "@/lib/data"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | TechPath",
  description: siteData.about.mission,
}

export default function AboutPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">{siteData.about.title}</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">{siteData.about.mission}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">{siteData.about.story}</p>
          </div>

          <div>
            {/* <h2 className="text-2xl font-semibold mb-8 text-center">Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.about.team.map((member, index) => (
                <div key={index} className="card p-6 text-center">
                  <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg?height=150&width=150"}
                      alt={member.name}
                      fill
                      sizes="128px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </main>
  )
}
