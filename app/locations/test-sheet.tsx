"use client"

import { useEffect, useState } from 'react'
import { City } from '@/types/locations'

export default function TestSheet() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<City[] | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('Fetching locations from API...')
        const response = await fetch('/api/locations')
        if (!response.ok) {
          throw new Error('Failed to fetch locations')
        }
        const json = await response.json()
        console.log('Received data:', json)
        setData(json.cities)
      } catch (err) {
        console.error('Error:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!data) return <div>No data found</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Locations Test</h1>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}