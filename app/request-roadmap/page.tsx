import type { Metadata } from "next"
import RequestRoadmapForm from "@/components/request-roadmap-form"

export const metadata: Metadata = {
  title: "Request a Roadmap | TechPath",
  description: "Request a custom learning roadmap tailored to your specific needs and goals.",
}

export default function RequestRoadmapPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Request a Custom Roadmap</h1>
          <p className="text-gray-400 text-center mb-8">
            Tell us what you want to learn, and we'll create a personalized learning roadmap just for you.
          </p>

          <RequestRoadmapForm />
        </div>
      </div>
    </main>
  )
}
