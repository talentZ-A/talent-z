import { google } from 'googleapis'
import { City, Location } from '@/types/locations'

if (!process.env.GOOGLE_SHEETS_ID) throw new Error('Missing GOOGLE_SHEETS_ID')
if (!process.env.GOOGLE_SHEETS_CLIENT_EMAIL) throw new Error('Missing GOOGLE_SHEETS_CLIENT_EMAIL')
if (!process.env.GOOGLE_SHEETS_PRIVATE_KEY) throw new Error('Missing GOOGLE_SHEETS_PRIVATE_KEY')

// Initialize the sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
})

const sheets = google.sheets({ version: 'v4', auth })

export async function fetchLocationsFromSheet(): Promise<City[]> {
  try {
    console.log('Fetching data from sheet...')
    
    // First, let's try to get the sheet name
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    })
    
    const sheetName = spreadsheet.data.sheets?.[0]?.properties?.title || 'Sheet1'
    console.log('Sheet name:', sheetName)

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: `${sheetName}!A2:C456`, // Updated range to match your sheet
    })

    const rows = response.data.values

    if (!rows) {
      console.log('No data found in sheet')
      return []
    }

    console.log(`Found ${rows.length} rows of data`)

    // Create a map to group locations by city
    const citiesMap = new Map<string, Location[]>()

    // Process each row from the sheet
    rows.forEach((row, index) => {
      if (!Array.isArray(row) || row.length !== 3) {
        console.warn(`Skipping invalid row at index ${index}:`, row)
        return
      }

      const [city, address, geocode] = row as [string, string, string]
      
      if (!city || !address || !geocode) {
        console.warn(`Skipping row with missing data at index ${index}:`, row)
        return
      }

      try {
        // Parse coordinates from the geocode string with type safety
        const [lat, lng] = geocode.split(',').map((coord: string) => {
          const parsed = parseFloat(coord.trim())
          if (isNaN(parsed)) throw new Error(`Invalid coordinate: ${coord}`)
          return parsed
        })
        
        // Generate a unique ID
        const id = `${city.toLowerCase().replace(/\s+/g, '-')}-${index + 1}`
        
        const location: Location = {
          id,
          name: `${city} - ${address}`,
          city,
          address,
          coordinates: [lat, lng]
        }

        if (!citiesMap.has(city)) {
          citiesMap.set(city, [])
        }
        citiesMap.get(city)?.push(location)
      } catch (error) {
        console.warn(`Error processing row at index ${index}:`, error)
      }
    })

    // Convert map to array of City objects
    const cities: City[] = Array.from(citiesMap.entries()).map(([name, locations]) => ({
      name,
      locations,
    }))

    return cities.sort((a, b) => a.name.localeCompare(b.name))
  } catch (error) {
    console.error('Error fetching locations:', error)
    throw error
  }
}