import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <Link 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

