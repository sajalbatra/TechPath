export default function RoadmapLoading() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="h-10 w-3/4 bg-gray-800 rounded-md mb-4 animate-pulse"></div>
          <div className="h-6 w-full bg-gray-800 rounded-md mb-8 animate-pulse"></div>

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
