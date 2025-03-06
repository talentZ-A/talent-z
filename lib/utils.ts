import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCountryFlag(code: string): string {
  const flags: Record<string, string> = {
    US: "🇺🇸",
    CA: "🇨🇦",
    ES: "🇪🇸",
    UK: "🇬🇧",
    FR: "🇫🇷",
    DE: "🇩🇪",
    IT: "🇮🇹",
    JP: "🇯🇵",
    AU: "🇦🇺",
  }

  return flags[code] || code
}

export function getGenderSymbol(gender: string): string {
  return gender === "female" ? "♀" : "♂"
}
