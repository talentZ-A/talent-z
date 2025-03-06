import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/Theme/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Talent-Z",
  description: "Connect with top talent and opportunities in the entertainment industry",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
        <Toaster />
      </body>
      </ThemeProvider>
    </html>
  )
}
