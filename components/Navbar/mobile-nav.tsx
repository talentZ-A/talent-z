"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSelector } from "@/components/ui/language-selector"
import { ThemeToggle } from "@/components/Theme/theme-toggle"
import { SearchBox } from "./search-box"

interface MobileNavProps {
  navItems: {
    title: string
    href: string
  }[]
  isTalentsPage?: boolean
}

export function MobileNav({ navItems, isTalentsPage }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)

  const handleSearch = (query: string) => {
    // In a real app, this would navigate to a search results page
    // or filter the talents on the current page
    console.log("Searching for:", query)
  }

  return (
    <div className="flex items-center gap-2 ml-auto lg:hidden">
      {isTalentsPage && (
        <div className="w-full max-w-[180px] mr-2 md:hidden">
          <SearchBox onSearch={handleSearch} placeholder="Search..." />
        </div>
      )}

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right">
          <div className="flex flex-col gap-4 py-8 ml-8">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </SheetContent>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
      </Sheet>
    </div>
  )
}

