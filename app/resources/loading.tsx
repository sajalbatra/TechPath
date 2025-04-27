export default function ResourcesLoading() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="h-10 w-1/2 bg-gray-800 rounded-md mb-4 mx-auto animate-pulse"></div>
          <div className="h-6 w-3/4 bg-gray-800 rounded-md mx-auto animate-pulse"></div>
        </div>

        <div className="space-y-16">
          {[1, 2, 3].map((category) => (
            <section key={category}>
              <div className="h-8 w-1/4 bg-gray-800 rounded-md mb-6 border-b border-gray-800 pb-2 animate-pulse"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="card p-6">
                    <div className="h-6 w-3/4 bg-gray-800 rounded-md mb-2 animate-pulse"></div>
                    <div className="h-4 w-1/2 bg-gray-800 rounded-md mb-3 animate-pulse"></div>
                    <div className="h-16 w-full bg-gray-800 rounded-md mb-4 animate-pulse"></div>
                    <div className="h-4 w-1/3 bg-gray-800 rounded-md animate-pulse"></div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
