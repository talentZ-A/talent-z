import { google } from 'googleapis'
import { Talent } from '@/types/types'

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

export async function fetchTalentsFromSheet(): Promise<Talent[]> {
  try {
    console.log('Fetching talent data from sheet...')
    
    // Get the sheet name
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    })
    
    const sheetName = spreadsheet.data.sheets?.[0]?.properties?.title || 'Sheet1'
    console.log('Sheet name:', sheetName)

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: `${sheetName}!A2:Z`, // Fetch all columns from row 2 onwards
    })

    const rows = response.data.values

    if (!rows) {
      console.log('No data found in sheet')
      return []
    }

    console.log(`Found ${rows.length} talents`)

    return rows.map((row, index) => {
      // Helper function to safely get array values with default
      const getValue = (index: number, defaultValue: string = ''): string => 
        row[index]?.toString() || defaultValue

      // Split comma-separated values into arrays
      const splitArray = (value: string): string[] => 
        value.split(',').map(item => item.trim()).filter(Boolean)

      // Generate a slug from the full name
      const generateSlug = (name: string): string => 
        name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

      const fullName = getValue(0)
      
      return {
        id: (index + 1).toString(),
        fullName,
        gender: getValue(1),
        age: parseInt(getValue(2, '0'), 10),
        placeOfBirth: getValue(3),
        image: getValue(4, '/placeholder.svg?height=600&width=400'),
        height: getValue(5),
        weight: getValue(6),
        eyeColor: getValue(7),
        hairColor: getValue(8),
        bodyType: getValue(9),
        shoeSize: getValue(10),
        clothingSize: getValue(11),
        measurements: getValue(12),
        tattoos: getValue(13),
        piercings: getValue(14),
        otherFeatures: getValue(15),
        actingExperience: getValue(16),
        skills: splitArray(getValue(17)),
        languages: splitArray(getValue(18)),
        sports: splitArray(getValue(19)),
        medicalConditions: getValue(20),
        diet: getValue(21),
        smoking: getValue(22),
        fitnessLevel: getValue(23),
        socialMedia: getValue(24),
        contacts: getValue(25),
        slug: generateSlug(fullName),
      }
    })
  } catch (error) {
    console.error('Error fetching talents:', error)
    throw error
  }
} 