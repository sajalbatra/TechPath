import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CustomRoadmapLoading() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/roadmaps" className="flex items-center text-primary mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Roadmaps
          </Link>

          <div className="mb-8">
            <div className="h-10 w-3/4 bg-gray-800 rounded-md mb-4 animate-pulse"></div>
            <div className="h-6 w-full bg-gray-800 rounded-md mb-6 animate-pulse"></div>

            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <div className="h-8 w-1/3 bg-gray-800 rounded-md mb-4 animate-pulse"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="h-5 w-5 bg-gray-800 rounded-full mr-2 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-5 w-1/3 bg-gray-800 rounded-md mb-2 animate-pulse"></div>
                    <div className="h-4 w-1/2 bg-gray-800 rounded-md animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-5 w-5 bg-gray-800 rounded-full mr-2 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-5 w-1/3 bg-gray-800 rounded-md mb-2 animate-pulse"></div>
                    <div className="h-4 w-1/2 bg-gray-800 rounded-md animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-start md:col-span-2">
                  <div className="h-5 w-5 bg-gray-800 rounded-full mr-2 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-5 w-1/3 bg-gray-800 rounded-md mb-2 animate-pulse"></div>
                    <div className="h-4 w-full bg-gray-800 rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {[1, 2, 3].map((level) => (
              <div key={level} className="border border-gray-800 rounded-lg p-6">
                <div className="h-8 w-1/3 bg-gray-800 rounded-md mb-6 animate-pulse"></div>

                <div className="space-y-8">
                  {[1, 2, 3].map((skill) => (
                    <div key={skill}>
                      <div className="h-6 w-1/4 bg-gray-800 rounded-md mb-4 animate-pulse"></div>

                      <div className="space-y-4">
                        <div className="h-6 w-1/3 bg-gray-800 rounded-md mb-4 animate-pulse"></div>

                        <div className="space-y-3 pl-8">
                          {[1, 2].map((resource) => (
                            <div key={resource} className="h-4 w-2/3 bg-gray-800 rounded-md animate-pulse"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
