import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { siteData } from "@/lib/data"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: siteData.siteName,
    template: `%s | ${siteData.siteName}`,
  },
  description: siteData.hero.description,
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#000000",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techroadmaps.vercel.app/",
    siteName: siteData.siteName,
    title: siteData.siteName,
    description: siteData.hero.description,
    images: [
      {
        url: "https://techroadmaps.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteData.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.siteName,
    description: siteData.hero.description,
    images: ["https://techroadmaps.vercel.app/og-image.jpg"],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar className="flex justify-end items-center gap-4">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Navbar>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}