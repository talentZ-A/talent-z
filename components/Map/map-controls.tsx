"use client"

import { useEffect } from "react"
import { useMap } from "react-leaflet"
import { type Location } from "@/types/locations"

interface MapControlsProps {
  selectedLocation: Location | null
}

export function MapControls({ selectedLocation }: MapControlsProps) {
  const map = useMap()

  useEffect(() => {
    if (selectedLocation) {
      map.flyTo(selectedLocation.coordinates, 15)
    }
  }, [selectedLocation, map])

  return null
}

