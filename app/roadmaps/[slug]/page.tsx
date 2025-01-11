'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Video, LinkIcon, MessageSquare, Users } from 'lucide-react'
import Link from "next/link"

export default function RoadmapDetail() {
  const skills = [
    { id: 1, name: "HTML & CSS Basics", completed: true },
    { id: 2, name: "JavaScript Fundamentals", completed: true },
    { id: 3, name: "React Basics", completed: false },
    { id: 4, name: "Next.js", completed: false },
    { id: 5, name: "State Management", completed: false },
  ]

  const resources = [
    {
      type: "article",
      title: "Complete Guide to React",
      description: "Learn React from scratch with this comprehensive guide",
      icon: <BookOpen className="h-5 w-5" />,
      link: "#"
    },
    {
      type: "video",
      title: "Next.js Tutorial",
      description: "Build modern web applications with Next.js",
      icon: <Video className="h-5 w-5" />,
      link: "#"
    }
  ]

  const comments = [
    {
      author: "Sarah Johnson",
      content: "This roadmap helped me land my first dev job!",
      avatar: "/placeholder.svg"
    },
    {
      author: "Mike Chen",
      content: "Very comprehensive and well-structured learning path.",
      avatar: "/placeholder.svg"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-6">
              Frontend Development Roadmap
            </h1>
            <p className="text-xl text-muted-foreground">
              Master modern web development with React and Next.js
            </p>
          </div>

          <Tabs defaultValue="skills" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                    <Progress value={40} />
                  </div>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.id} className="flex items-center space-x-3">
                        <Checkbox id={`skill-${skill.id}`} checked={skill.completed} />
                        <label
                          htmlFor={`skill-${skill.id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {skill.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources">
              <div className="grid gap-6">
                {resources.map((resource, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {resource.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{resource.title}</h3>
                          <p className="text-muted-foreground mb-4">{resource.description}</p>
                          <Button variant="outline" size="sm" className="group" asChild>
                            <Link href={resource.link}>
                              <LinkIcon className="w-4 h-4 mr-2" />
                              View Resource
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Community Feedback</h3>
                    <Button size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Add Comment
                    </Button>
                  </div>
                  <div className="space-y-6">
                    {comments.map((comment, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{comment.author}</h4>
                          <p className="text-muted-foreground">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

