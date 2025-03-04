"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import type { City, Location } from "@/app/data/locations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/Map/scroll-area"
import { SearchBox } from "./search-box"

interface LocationSidebarProps {
  cities: City[]
  onLocationSelect: (location: Location) => void
  selectedLocation?: Location | null
  onSearch: (query: string) => void
}

export function LocationSidebar({ cities, onLocationSelect, selectedLocation, onSearch }: LocationSidebarProps) {
  const [expandedCities, setExpandedCities] = useState<string[]>([])
  

  const handleCityToggle = (cityName: string) => {
    setExpandedCities((prev) =>
      prev.includes(cityName) ? prev.filter((name) => name !== cityName) : [...prev, cityName],
    )
  }

  

  return (
    <div className="flex flex-col gap-4">
      <SearchBox onSearch={onSearch} placeholder="Търсене на локации..." />
      <ScrollArea className="h-[calc(100vh-16rem)] px-4">
        <Accordion type="multiple" value={expandedCities} className="w-full">
          {cities.map((city) => (
            <AccordionItem key={city.name} value={city.name}>
              <AccordionTrigger onClick={() => handleCityToggle(city.name)} className="text-lg font-medium py-3">
                {city.name} ({city.locations.length})
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 py-2">
                  {city.locations.map((location) => (
                    <Button
                      key={location.id}
                      variant={selectedLocation?.id === location.id ? "default" : "outline"}
                      className="justify-start h-auto py-3 px-4 text-left"
                      onClick={() => onLocationSelect(location)}
                    >
                      <MapPin className="mr-2 h-4 w-4 shrink-0" />
                      <div className="flex flex-col items-start">
                        <span className="font-medium">{location.name}</span>
                        <span className="text-xs text-muted-foreground">{location.address}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  )
}

