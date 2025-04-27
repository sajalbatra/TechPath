import type { Metadata } from "next";
import { siteData } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, ExternalLink, Youtube } from "lucide-react";

export function generateStaticParams() {
  return siteData.roadmaps.map((roadmap) => ({
    slug: roadmap.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const roadmap = siteData.roadmaps.find((r) => r.slug === params.slug);

  if (!roadmap) {
    return {
      title: "Roadmap Not Found | TechPath",
      description: "The requested roadmap could not be found.",
    };
  }

  return {
    title: `${roadmap.title} Roadmap | TechPath`,
    description: roadmap.description,
  };
}

export default function RoadmapPage({ params }: { params: { slug: string } }) {
  const roadmap = siteData.roadmaps.find((r) => r.slug === params.slug);

  if (!roadmap) {
    notFound();
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{roadmap.title} Roadmap</h1>
          <p className="text-gray-400 mb-8">{roadmap.description}</p>

          <div className="space-y-12">
            {roadmap.levels?.map((level: any) => (
              <div key={level.id} className="border border-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">{level.title} Level</h2>

                <div className="space-y-8">
                  {level.skills?.map((skill: any, index: number) => (
                    <div key={index}>
                      <h3 className="text-xl font-medium mb-4 text-primary">{skill.name}</h3>

                      <div className="space-y-4">
                        <h4 className="text-lg font-medium flex items-center">
                          <BookOpen className="mr-2 h-5 w-5" />
                          Learning Resources
                        </h4>

                        <ul className="space-y-3 pl-8">
                          {skill.theoryUrl && (
                            <li className="list-disc text-gray-400">
                              <Link
                                href={skill.theoryUrl}
                                target="_blank"
                                className="hover:text-primary flex items-center"
                              >
                                Theory Resource
                                <ExternalLink className="ml-1 h-3 w-3" />
                              </Link>
                            </li>
                          )}
                          {skill.videoUrl && (
                            <li className="list-disc text-gray-400">
                              <Link
                                href={skill.videoUrl}
                                target="_blank"
                                className="hover:text-primary flex items-center"
                              >
                                Video Resource
                                <Youtube className="ml-1 h-3 w-3" />
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/roadmaps" className="btn btn-secondary px-6 py-3">
              Back to All Roadmaps
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
