import { fetchLocationsFromSheet } from '@/lib/google-sheets'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('API Route: Starting location fetch...')
    console.log('Environment variables check:')
    console.log('GOOGLE_SHEETS_ID exists:', !!process.env.GOOGLE_SHEETS_ID)
    console.log('GOOGLE_SHEETS_CLIENT_EMAIL exists:', !!process.env.GOOGLE_SHEETS_CLIENT_EMAIL)
    console.log('GOOGLE_SHEETS_PRIVATE_KEY exists:', !!process.env.GOOGLE_SHEETS_PRIVATE_KEY)
    
    const cities = await fetchLocationsFromSheet()
    console.log('API Route: Successfully fetched locations:', cities.length, 'cities')
    return NextResponse.json({ cities })
  } catch (error) {
    console.error('API Route: Detailed error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    )
  }
}