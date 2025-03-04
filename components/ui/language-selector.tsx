"use client"

import * as React from "react"
import { Check, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Language = {
  code: string
  name: string
  nativeName: string
}

const languages: Language[] = [
  {
    code: "bg",
    name: "Bulgarian",
    nativeName: "Български",
  },
  {
    code: "en",
    name: "English",
    nativeName: "English",
  },
]

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = React.useState<Language>(languages[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          {languages.map((language) => (
            <DropdownMenuItem key={language.code} onClick={() => setCurrentLanguage(language)}>
              <span>{language.nativeName}</span>
              {currentLanguage.code === language.code && <Check className="ml-2 h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

