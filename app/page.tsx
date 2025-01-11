'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Code2, Database, Brain, Sparkles, Users, BookOpen } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const featuredRoadmaps = [
    {
      title: "Frontend Development",
      description: "Master modern web development with React, Next.js, and more",
      image: "/placeholder.svg?height=200&width=400",
      icon: <Code2 className="h-6 w-6 text-violet-400" />,
      users: "2.5k+"
    },
    {
      title: "Backend Development",
      description: "Learn server-side programming, APIs, and databases",
      image: "/placeholder.svg?height=200&width=400",
      icon: <Database className="h-6 w-6 text-violet-400" />,
      users: "1.8k+"
    },
    {
      title: "Data Science",
      description: "Explore machine learning, AI, and data visualization",
      image: "/placeholder.svg?height=200&width=400",
      icon: <Brain className="h-6 w-6 text-violet-400" />,
      users: "3k+"
    }
  ]

  const features = [
    {
      title: "Interactive Roadmaps",
      description: "Follow structured learning paths designed by experts",
      icon: <Sparkles className="h-6 w-6 text-violet-400" />
    },
    {
      title: "Active Community",
      description: "Learn and grow with fellow developers",
      icon: <Users className="h-6 w-6 text-violet-400" />
    },
    {
      title: "Curated Resources",
      description: "Access hand-picked learning materials",
      icon: <BookOpen className="h-6 w-6 text-violet-400" />
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-violet-500/10 text-violet-400 hover:bg-violet-500/20 transition-colors">
              Free Learning Resources
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Journey to Becoming a
              <span className="block gradient-text">Tech Professional</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Follow structured roadmaps, access quality resources, and join a community
              of learners to accelerate your tech career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                Explore Roadmaps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Join Community
              </Button>
            </div>
            <div className="max-w-sm mx-auto">
              <div className="relative">
                <Input
                  placeholder="Search roadmaps and resources..."
                  className="pl-4 pr-12 py-6 text-base"
                />
                <Button 
                  size="icon"
                  className="absolute right-1 top-1 bottom-1"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Roadmaps */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-violet-400 border-violet-400/20">
              Featured Paths
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Popular Learning Roadmaps</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our most popular learning paths and start your journey today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRoadmaps.map((roadmap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="relative mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={roadmap.image}
                        alt={roadmap.title}
                        width={400}
                        height={200}
                        className="w-full transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-background/80 backdrop-blur-sm">
                          {roadmap.users} Learning
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-violet-500/10">
                        {roadmap.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{roadmap.title}</h3>
                        <p className="text-sm text-muted-foreground">{roadmap.description}</p>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full group" asChild>
                      <Link href={`/roadmaps/${roadmap.title.toLowerCase().replace(' ', '-')}`}>
                        View Roadmap
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-lg bg-violet-500/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Badge className="mb-4 bg-violet-500/10 text-violet-400">
              Get Started Today
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of developers who are already learning and growing with our platform
            </p>
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
              Create Free Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

