import './globals.css'
import { Inter } from 'next/font/google'
import  Header  from '@/components/header/Header'
import  Footer  from '@/components/footer/Footer'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechPath - Your Learning Journey Starts Here',
  description: 'Comprehensive technology learning roadmaps and resources for developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

