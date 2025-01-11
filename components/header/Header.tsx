'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { BookOpen, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(()=>{
    console.log(isOpen)
  },[])
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Branding */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-violet-400" />
            <span className="font-bold text-xl">TechPath</span>
          </Link>

          {/* Navigation Menu for Desktop */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Roadmaps</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {roadmapItems().map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resourceItems().map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/community" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Community</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Login/Signup Buttons for Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="bg-violet-600 hover:bg-violet-700" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle Menu">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-4">
                <Link href="/roadmaps" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Roadmaps</Link>
                <Link href="/resources" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Resources</Link>
                <Link href="/community" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Community</Link>
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</Link>
                <hr className="border-border/40" />
                <Button variant="ghost" asChild className="w-full" onClick={() => setIsOpen(false)}>
                  <Link href="/login">Log in</Link>
                </Button>
                <Button className="w-full bg-violet-600 hover:bg-violet-700" asChild onClick={() => setIsOpen(false)}>
                  <Link href="/signup">Sign up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

// List Item Component for Navigation Menu
const ListItem = ({title, href, children, ...props }: { title: string, href: string, children: React.ReactNode }) => {
  const  router  = usePathname();
  const isActive = router === href;

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            { 'bg-accent text-accent-foreground': isActive }
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

// Styling for Navigation Menu Link
const navigationMenuTriggerStyle = () =>
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"

// Roadmap Items
const roadmapItems = () => [
  {
    title: "Frontend Development",
    href: "/roadmaps/frontend",
    description: "Learn modern frontend development with React and Next.js"
  },
  {
    title: "Backend Development",
    href: "/roadmaps/backend",
    description: "Master server-side programming and API development"
  },
  {
    title: "Data Science",
    href: "/roadmaps/data-science",
    description: "Explore machine learning and data analysis"
  },
  {
    title: "DevOps",
    href: "/roadmaps/devops",
    description: "Learn cloud platforms and deployment strategies"
  }
]

// Resource Items
const resourceItems = () => [
  {
    title: "Articles",
    href: "/resources/articles",
    description: "Read in-depth technical articles and tutorials"
  },
  {
    title: "Video Courses",
    href: "/resources/courses",
    description: "Watch comprehensive video courses"
  },
  {
    title: "Practice Projects",
    href: "/resources/projects",
    description: "Build real-world projects to learn by doing"
  },
  {
    title: "Coding Challenges",
    href: "/resources/challenges",
    description: "Test your skills with coding challenges"
  }
]
