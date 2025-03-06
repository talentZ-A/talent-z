import { Suspense } from "react"
import { fetchTalentsFromSheet } from "@/lib/talent-sheets"
import { TalentBentoGrid } from "@/components/talents/talent-bento-grid"
import { TalentFilters } from "@/components/talents/talent-filters"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Talents | TalentZ Vercel",
  description: "Browse our talented actors, actresses, and stunt performers",
}

export const revalidate = 3600 // Revalidate every hour

export default async function TalentsPage() {
  const talents = await fetchTalentsFromSheet()

  // Get unique countries for the filter
  const countries = Array.from(new Set(talents.map(t => t.placeOfBirth))).sort()

  return (
    <main className="container py-6 md:py-8 lg:py-10 space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Our Talents</h1>
        <p className="text-muted-foreground">
          Discover our diverse roster of talented performers and artists.
        </p>
      </div>

      <Suspense fallback={<div>Loading talents...</div>}>
        <TalentFilters talents={talents} countries={countries} />
      </Suspense>
    </main>
  )
}

function getCountryFlag(code: string): string {
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

