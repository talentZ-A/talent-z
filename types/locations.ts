export interface Location {
  id: string
  name: string // Add this field
  city: string
  address: string
  coordinates: [number, number]
}

export interface City {
  name: string
  locations: Location[]
}