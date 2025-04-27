import Link from "next/link"

export default function NotFound() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn btn-primary px-6 py-3">
          Return to Home
        </Link>
      </div>
    </main>
  )
}
