"use client"

import { useState } from "react"
import { Copy, MapPin } from "lucide-react"
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
  }

  const handleCopyAddress = (e: React.MouseEvent, address: string) => {
    e.stopPropagation() // Prevent triggering the main button click
    navigator.clipboard.writeText(address).then(() => {
      toast.success('Адресът е копиран')
    }).catch(() => {
      toast.error('Неуспешно копиране')
    })
  }

  const handleCopyCoordinates = (e: React.MouseEvent, coordinates: [number, number]) => {
    e.stopPropagation() // Prevent triggering the main button click
    const [lat, lng] = coordinates
    const coordText = `${lat}, ${lng}`
    navigator.clipboard.writeText(coordText).then(() => {
      toast.success('Координатите са копирани')
    }).catch(() => {
      toast.error('Неуспешно копиране')
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <SearchBox onSearch={onSearch} placeholder="Търсене на локации..." />
      <ScrollArea className="h-[calc(100vh-15rem)] pr-6">
        <Accordion type="multiple" value={expandedCities} className="w-full">
          
          {cities.map((city) => (
            <AccordionItem key={city.name} value={city.name}>
              <AccordionTrigger onClick={() => handleCityToggle(city.name)} className="text-lg font-medium pl-3 py-3">
                <div className="flex items-end  gap-2">
                  {city.name}

              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-primary  text-sm font-medium">
                    {city.locations.length}
              </span>
                </div>

              </AccordionTrigger>
              
              <AccordionContent>
                <div className="flex flex-col gap-2 py-2">
                  {city.locations.map((location) => (
                    <Button
                      key={location.id}
                      variant={selectedLocation?.id === location.id ? "default" : "outline"}
                      className="justify-start h-auto py-3 px-4 text-left w-full group"
                      onClick={() => handleLocationClick(location)}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button 
                              onClick={(e) => handleCopyAddress(e, location.address)}
                              className=""
                            >
                              <MapPin className="mr-2 h-4 w-4 shrink-0" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Копирай адресът</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <div className="flex flex-col w-full">
                        <span className="font-medium text-wrap">{location.address}</span>
                        <div className="flex justify-end w-full">
                          <span className="text-xs text-muted-foreground">{location.coordinates.join(', ')}</span>
                        </div>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button 
                              onClick={(e) => handleCopyCoordinates(e, location.coordinates)}
                              className=""
                            >
                              <Copy className="ml-2 h-4 w-4 shrink-0" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Копирай координатите</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
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