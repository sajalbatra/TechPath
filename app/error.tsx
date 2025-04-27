"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Something went wrong!</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => reset()} className="btn btn-primary px-6 py-3">
            Try again
          </button>
          <Link href="/" className="btn btn-secondary px-6 py-3">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
