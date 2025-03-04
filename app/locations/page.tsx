"use client"

import { useState, useEffect } from "react"
import { cities, getAllLocations, searchLocations, type Location } from "@/app/data/locations"
import { LocationSidebar } from "@/components/Map/location-sidebar"
import { MapWrapper } from "@/components/Map/map-wrapper"

// Import Leaflet CSS
import "leaflet/dist/leaflet.css"
import "react-leaflet-cluster/lib/assets/MarkerCluster.css"
import "react-leaflet-cluster/lib/assets/MarkerCluster.Default.css"

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredLocations, setFilteredLocations] = useState<Location[]>(getAllLocations())
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [filteredCities, setFilteredCities] = useState(cities)

  // Enhanced search functionality
  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const results = searchLocations(query)
      setFilteredLocations(results)

      // Filter cities and their locations
      const filteredCitiesList = cities
        .map((city) => ({
          ...city,
          locations: city.locations.filter(
            (loc) =>
              loc.name.toLowerCase().includes(query) ||
              loc.address.toLowerCase().includes(query) ||
              city.name.toLowerCase().includes(query)
          ),
        }))
        .filter((city) => 
          city.locations.length > 0 || 
          city.name.toLowerCase().includes(query)
        )
        .map(city => {
          if (city.name.toLowerCase().includes(query) && city.locations.length === 0) {
            return {
              ...city,
              locations: cities.find(c => c.name === city.name)?.locations || []
            }
          }
          return city
        })

      setFilteredCities(filteredCitiesList)

      const allMatchingLocations = new Set([
        ...results,
        ...filteredCitiesList
          .filter(city => city.name.toLowerCase().includes(query))
          .flatMap(city => city.locations)
      ])

      setFilteredLocations(Array.from(allMatchingLocations))
    } else {
      setFilteredLocations(getAllLocations())
      setFilteredCities(cities)
    }
  }, [searchQuery])

  return (
    <div className="py-6 mx-4">
      {/* <h1 className="text-3xl font-bold mb-6">Локации на контейнери</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Градове</h2>
          <LocationSidebar
            cities={filteredCities}
            onLocationSelect={setSelectedLocation}
            selectedLocation={selectedLocation}
            onSearch={setSearchQuery}
          />
        </div>

        <div className="md:col-span-8">
          <MapWrapper
            locations={filteredLocations}
            selectedLocation={selectedLocation}
            onMarkerClick={setSelectedLocation}
          />
        </div>
      </div>
    </div>
  )
}

