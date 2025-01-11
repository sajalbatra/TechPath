'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Code2, Database, Brain, Cloud, Search, ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function Roadmaps() {
  const roadmaps = [
    {
      title: "Frontend Development",
      description: "Master modern web development with React, Next.js, and more",
      category: "Web Development",
      icon: <Code2 className="h-8 w-8 text-primary" />,
      level: "Beginner"
    },
    {
      title: "Backend Development",
      description: "Learn server-side programming, APIs, and databases",
      category: "Web Development",
      icon: <Database className="h-8 w-8 text-primary" />,
      level: "Intermediate"
    },
    {
      title: "Data Science",
      description: "Explore machine learning, AI, and data visualization",
      category: "Data",
      icon: <Brain className="h-8 w-8 text-primary" />,
      level: "Advanced"
    },
    {
      title: "Cloud Computing",
      description: "Master cloud platforms, DevOps, and infrastructure",
      category: "DevOps",
      icon: <Cloud className="h-8 w-8 text-primary" />,
      level: "Intermediate"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold gradient-text mb-6">
            Technology Roadmaps
          </h1>
          <p className="text-xl text-muted-foreground">
            Find the perfect learning path for your tech journey
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for a roadmap..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="data">Data</SelectItem>
                <SelectItem value="devops">DevOps</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Roadmaps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmaps.map((roadmap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <div className="mb-4">{roadmap.icon}</div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{roadmap.category}</span>
                    <span className="text-sm text-primary">{roadmap.level}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{roadmap.title}</h3>
                  <p className="text-muted-foreground">{roadmap.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full group" asChild>
                    <Link href={`/roadmaps/${roadmap.title.toLowerCase().replace(' ', '-')}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

