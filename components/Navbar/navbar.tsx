"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MobileNav } from "./mobile-nav"
import { useAuthStore } from "@/lib/store"
import { SearchBox } from "./search-box"

const navItems = [
  { title: "Subscription", href: "/subscription" },
  { title: "Contact", href: "/contact" },
  { title: "Talents", href: "/talents" },
]

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuthStore()
  const isTalentsPage = pathname === "/talents" || pathname.startsWith("/talents/")

  const handleSearch = (query: string) => {
    // In a real app, this would navigate to a search results page
    // or filter the talents on the current page
    console.log("Searching for:", query)
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      logout()
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <header className="sticky top-0 z-[5000] w-full border-b bg-white/70 dark:bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 lg:h-[4.2rem] items-center transition-all duration-300">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl">🎬 TalentZ Vercel</h1>
          </Link>
        </div>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <nav className="hidden lg:flex md:flex-1 md:items-center md:justify-start md:gap-1 lg:gap-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={
                pathname === item.href || (item.href === "/talents" && pathname.startsWith("/talents/"))
                  ? "default"
                  : "ghost"
              }
              asChild
              className={cn(
                "text-sm",
                (pathname === item.href || (item.href === "/talents" && pathname.startsWith("/talents/"))) &&
                  "bg-primary text-primary-foreground",
              )}
            >
              <Link href={item.href}>{item.title}</Link>
            </Button>
          ))}
        </nav>

        {/* {isTalentsPage && (
          <div className="hidden md:block ml-4 w-full max-w-xs">
            <SearchBox onSearch={handleSearch} placeholder="Search talents..." />
          </div>
        )} */}

        <div className="hidden lg:flex ml-auto items-center gap-2">
          {user ? (
            <>
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="ghost" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button variant="default" asChild>
              <Link href="/auth">Login</Link>
            </Button>
          )}
        </div>
        <MobileNav navItems={navItems} isTalentsPage={isTalentsPage} />
      </div>
    </header>
  )
}

