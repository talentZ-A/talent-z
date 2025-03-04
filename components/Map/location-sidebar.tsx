"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { toast } from 'sonner'
import { type Location, type City } from "@/types/locations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/Map/scroll-area"
import { SearchBox } from "./search-box"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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

  const handleLocationClick = (location: Location) => {
    onLocationSelect(location)
    const [lat, lng] = location.coordinates
    const textToCopy = `${location.address}\nКоординати: ${lat}, ${lng}`
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast.success('Копирано в клипборда')
    }).catch(() => {
      toast.error('Неуспешно копиране')
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <SearchBox onSearch={onSearch} placeholder="Търсене на локации..." />
      <ScrollArea className="h-[calc(100vh-16rem)] pr-6">
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
                          className="justify-start h-auto py-3 px-4 text-left w-full"
                          onClick={() => handleLocationClick(location)}
                        >
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                          <MapPin className="mr-2 h-4 w-4 shrink-0" />
                          </TooltipTrigger>
                              <TooltipContent>
                                <p>Копирай адресът</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <div className="flex flex-col w-full">
                            <span className="font-medium text-wrap">{location.address}</span>
                            <div className="flex justify-end w-full">
                              <span className="text-xs text-muted-foreground">{location.coordinates}</span>
                            </div>
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