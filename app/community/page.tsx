import type { Metadata } from "next"
import { siteData } from "@/lib/data"
import Link from "next/link"
import { MessageSquare, Users, Code, Compass } from "lucide-react"
import ComingSoon from "@/components/commingsoon"
export const metadata: Metadata = {
  title: "Community | TechPath",
  description: siteData.community.description,
}

// Create a mapping of icon names to components
const iconComponents = {
  MessageSquare,
  Users,
  Code,
  Compass,
}

export default function CommunityPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{siteData.community.title}</h1>
          <p className="text-gray-400">{siteData.community.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {siteData.community.features.map((feature, index) => {
            // Get the icon component or default to MessageSquare if not found
            const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents] || MessageSquare

            return (
              <div key={index} className="card p-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* <div className="text-center">
          <Link href={siteData.community.joinButton.href} className="btn btn-primary px-8 py-3 text-lg">
            {siteData.community.joinButton.text}
          </Link>
        </div> */}
      </div>
      <ComingSoon/>
    </main>
  )
}
