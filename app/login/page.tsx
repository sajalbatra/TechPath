import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Login() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Log In</Button>
          <div className="text-sm text-center">
            <Link href="/forgot-password" className="text-teal-600 hover:underline">Forgot Password?</Link>
            <span className="mx-2">|</span>
            <Link href="/signup" className="text-teal-600 hover:underline">Create an Account</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

