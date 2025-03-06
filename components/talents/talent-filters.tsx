"use client"

import { useState, useEffect, useMemo } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchBox } from "@/components/Navbar/search-box"
import { TalentBentoGrid } from "./talent-bento-grid"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MapPin } from "lucide-react"
import { getCountryFlag } from "@/lib/utils"
import type { Talent } from "@/types/types"

// Map of country codes to full names
const countryNames: Record<string, string> = {
  USA: "United States",
  CA: "Canada",
  ES: "Spain",
  UK: "United Kingdom",
  FR: "France",
  DE: "Germany",
  IT: "Italy",
  JP: "Japan",
  AU: "Australia",
  IL: "Israel",
}

// Map of country codes to flags
const countryFlags: Record<string, string> = {
  USA: "🇺🇸",
  CA: "🇨🇦",
  ES: "🇪🇸",
  UK: "🇬🇧",
  FR: "🇫🇷",
  DE: "🇩🇪",
  IT: "🇮🇹",
  JP: "🇯🇵",
  AU: "🇦🇺",
  IL: "🇮🇱",
}

interface TalentFiltersProps {
  talents: Talent[]
  countries: string[]
}

export function TalentFilters({ talents, countries }: TalentFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGender, setSelectedGender] = useState("all")
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])

  // Consolidate US locations into one
  const consolidatedCountries = useMemo(() => {
    const uniqueCountries = new Set<string>()
    countries.forEach(country => {
      if (country.includes("US")) {
        uniqueCountries.add("USA")
      } else {
        uniqueCountries.add(country)
      }
    })
    return Array.from(uniqueCountries).sort()
  }, [countries])

  // Filter talents based on all criteria
  const filteredTalents = useMemo(() => {
    return talents.filter(talent => {
      // Search query filter
      const matchesSearch = talent.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
        talent.languages.some(lang => lang.toLowerCase().includes(searchQuery.toLowerCase()))

      // Gender filter
      const matchesGender = selectedGender === "all" || 
        talent.gender.toLowerCase() === selectedGender.toLowerCase()

      // Country filter
      const matchesCountry = selectedCountries.length === 0 || 
        (talent.placeOfBirth.includes("US") && selectedCountries.includes("USA")) ||
        selectedCountries.includes(talent.placeOfBirth)

      return matchesSearch && matchesGender && matchesCountry
    })
  }, [talents, searchQuery, selectedGender, selectedCountries])

  // Calculate counts for the tabs
  const femaleTalents = talents.filter(t => t.gender.toLowerCase() === "female")
  const maleTalents = talents.filter(t => t.gender.toLowerCase() === "male")

  // Calculate counts for each country
  const countryCounts = useMemo(() => {
    return consolidatedCountries.reduce((acc, country) => {
      if (country === "USA") {
        acc[country] = talents.filter(t => t.placeOfBirth.includes("US")).length
      } else {
        acc[country] = talents.filter(t => t.placeOfBirth === country).length
      }
      return acc
    }, {} as Record<string, number>)
  }, [talents, consolidatedCountries])

  const handleCountryToggle = (country: string) => {
    setSelectedCountries(prev => 
      prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country]
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <Tabs 
            value={selectedGender} 
            onValueChange={setSelectedGender} 
            className="w-full md:w-auto"
          >
            <TabsList>
              <TabsTrigger value="all">All ({talents.length})</TabsTrigger>
              <TabsTrigger value="female">Female ({femaleTalents.length})</TabsTrigger>
              <TabsTrigger value="male">Male ({maleTalents.length})</TabsTrigger>
            </TabsList>
          </Tabs>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full md:w-auto justify-between"
              >
                <MapPin className="mr-2 h-4 w-4" />
                {selectedCountries.length === 0 
                  ? "All Locations" 
                  : `${selectedCountries.length} selected`}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 max-h-[300px] overflow-y-auto">
              <DropdownMenuLabel>Filter by location</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {consolidatedCountries.map(country => (
                <DropdownMenuCheckboxItem
                  key={country}
                  checked={selectedCountries.includes(country)}
                  onCheckedChange={() => handleCountryToggle(country)}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 inline-block">{countryFlags[country]}</span>
                    <span>{countryNames[country] || country}</span>
                    <span className="ml-auto text-muted-foreground">
                      ({countryCounts[country]})
                    </span>
                  </span>
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="w-full md:w-[300px]">
          <SearchBox 
            onSearch={setSearchQuery} 
            placeholder="Search by name, skills, languages..." 
          />
        </div>
      </div>

      {selectedCountries.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCountries.map(country => (
            <Badge
              key={country}
              variant="secondary"
              className="cursor-pointer hover:opacity-80"
              onClick={() => handleCountryToggle(country)}
            >
              <span className="mr-1">{countryFlags[country]}</span>
              {countryNames[country] || country}
              <span className="ml-1 opacity-60">×</span>
            </Badge>
          ))}
        </div>
      )}

      {filteredTalents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No talents found matching your criteria.</p>
        </div>
      ) : (
        <TalentBentoGrid talents={filteredTalents} />
      )}
    </div>
  )
} 