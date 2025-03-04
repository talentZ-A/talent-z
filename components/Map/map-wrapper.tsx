"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import type { Location } from "@/app/data/locations"
import { Skeleton } from "@/components/ui/skeleton"

// Dynamically import the LocationMap component with no SSR
const LocationMap = dynamic(() => import("./location-map").then(mod => mod.LocationMap), {
  ssr: false,
  loading: () => (
    <div className="h-[calc(100vh-7rem)] w-full rounded-md overflow-hidden border">
      <Skeleton className="h-full w-full" />
    </div>
  )
})

interface MapWrapperProps {
  locations: Location[]
  selectedLocation: Location | null
  onMarkerClick: (location: Location) => void
}

export function MapWrapper({ locations, selectedLocation, onMarkerClick }: MapWrapperProps) {
  return (
    <Suspense
      fallback={
        <div className="h-[calc(100vh-7rem)] w-full rounded-md overflow-hidden border">
          <Skeleton className="h-full w-full" />
        </div>
      }
    >
      <LocationMap
        locations={locations}
        selectedLocation={selectedLocation}
        onMarkerClick={onMarkerClick}
      />
    </Suspense>
  )
} 