"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { siteData } from "@/lib/data"
import { Menu, X, ChevronDown } from "lucide-react"

interface NavbarProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Navbar({ className, children }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <header className="border-b border-gray-800 sticky top-0 py-4 z-50 bg-black">
      <div className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"></path>
            <path d="M8 7h6"></path>
            <path d="M8 11h8"></path>
            <path d="M8 15h6"></path>
          </svg>
          <span className="font-bold text-xl">{siteData.siteName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {siteData.navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-gray-300 hover:text-white flex items-center"
                onClick={() => item.hasDropdown && toggleDropdown(item.name)}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
            </div>
          ))}

          <Link href="/request-roadmap" className="text-primary hover:text-primary-hover flex items-center bg-violet-500 px-2 py-1 rounded-2xl">
            Request a Roadmap
          </Link>
        </nav>

        {/* Auth UI + custom elements */}
        <div className="hidden md:flex items-center space-x-4">
          {children}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-gray-900 px-4 py-2 absolute w-full shadow-lg">
          <nav className="flex flex-col space-y-4 py-4">
            {siteData.navigation.map((item) => (
              <div key={item.name}>
                <div
                  className="flex justify-between items-center"
                  onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white block py-2"
                    onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <button aria-label={`Toggle ${item.name} dropdown`}>
                      <ChevronDown className="h-4 w-4 text-gray-300" />
                    </button>
                  )}
                </div>
              </div>
            ))}

            <Link
              href="/request-roadmap"
              className="text-primary hover:text-primary-hover block  bg-violet-500 px-2 py-1 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Request a Roadmap
            </Link>

            <div className="pt-4 border-t border-gray-800 flex flex-col space-y-4 justify-center items-center ">
              {/* Add mobile auth UI */}
              <div className={className}>
                {children}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}