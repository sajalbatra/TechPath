"use client"

import Image from "next/image"
import Link from "next/link"
import { siteData } from "@/lib/data"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className=" mx-auto px-4 text-center flex flex-col justify-center items-center">
          <div className="mb-4 bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 transition-colors w-fit px-4 py-2 rounded-full">
            <p className="">{siteData.hero.tagline}</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {siteData.hero.title.part1} <br />
            {siteData.hero.title.part2} <span className="purple-gradient">{siteData.hero.title.part3}</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">{siteData.hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={siteData.hero.primaryButton.href} className="btn btn-primary px-6 py-3">
              {siteData.hero.primaryButton.text} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href={siteData.hero.secondaryButton.href} className="btn btn-secondary px-6 py-3">
              {siteData.hero.secondaryButton.text}
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Roadmap CTA */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg p-6 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center mb-2">
                  <Sparkles className="text-primary h-5 w-5 mr-2" />
                  <h2 className="text-xl font-semibold">Need a Custom Learning Path?</h2>
                </div>
                <p className="text-gray-300">
                  Get a personalized roadmap tailored to your specific goals and experience level.
                </p>
              </div>
              <Link href="/request-roadmap" className="btn btn-primary whitespace-nowrap">
                Request a Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <form
              className="relative"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.target as HTMLFormElement
                const input = form.elements.namedItem("search") as HTMLInputElement
                if (input.value.trim()) {
                  // In production, redirect to search results page
                  console.log(`Searching for: ${input.value}`)
                }
              }}
            >
              <input
                type="text"
                name="search"
                placeholder="Search roadmaps and resources..."
                className="input py-3 pl-4 pr-12 w-full"
                aria-label="Search roadmaps and resources"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-md"
                aria-label="Submit search"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Roadmaps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary mb-2">{siteData.featuredSection.title}</p>
            <h2 className="text-3xl font-bold mb-4">{siteData.featuredSection.subtitle}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{siteData.featuredSection.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.roadmaps.slice(0, 3).map((roadmap, index) => (
              <Link href={`/roadmaps/${roadmap.slug}`} key={roadmap.id} className="card">
                <div className="relative h-48 w-full">
                  <Image
                    src={roadmap.image || "/placeholder.svg?height=200&width=350"}
                    alt={roadmap.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                    priority={index === 0}
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

          <div className="text-center mt-12">
            <Link href="/roadmaps" className="btn btn-secondary px-6 py-3">
              View All Roadmaps
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
