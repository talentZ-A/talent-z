import { google } from "googleapis"

// Remove local interface and import from types
import type { Talent } from "@/types/types"

const SHEET_ID = process.env.GOOGLE_SHEET_ID
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")

async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  })

  const sheets = google.sheets({ version: "v4", auth })
  return sheets
}

export async function getTalents(): Promise<Talent[]> {
  try {
    const sheets = await getAuthSheets()
    const range = "Talents!A2:Z" // Extended range to include all columns

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range,
    })

    const rows = response.data.values || []
    return rows.map((row) => ({
      id: row[0],
      fullName: row[1],
      gender: row[2],
      age: parseInt(row[3], 10),
      placeOfBirth: row[4],
      image: row[5],
      height: row[6],
      weight: row[7],
      eyeColor: row[8],
      hairColor: row[9],
      bodyType: row[10],
      shoeSize: row[11],
      clothingSize: row[12],
      measurements: row[13],
      tattoos: row[14] || "",
      piercings: row[15] || "",
      otherFeatures: row[16] || "",
      actingExperience: row[17] || "",
      skills: (row[18] || "").split(",").map((s: string) => s.trim()).filter(Boolean),
      languages: (row[19] || "").split(",").map((s: string) => s.trim()).filter(Boolean),
      sports: (row[20] || "").split(",").map((s: string) => s.trim()).filter(Boolean),
      medicalConditions: row[21] || "",
      diet: row[22] || "",
      smoking: row[23] || "",
      fitnessLevel: row[24] || "",
      socialMedia: row[25] || "",
      contacts: row[26] || "",
      slug: row[27],
    }))
  } catch (error) {
    console.error("Error fetching talents:", error)
    return []
  }
}

export async function getTalentBySlug(slug: string): Promise<Talent | null> {
  const talents = await getTalents()
  return talents.find((talent) => talent.slug === slug) || null
} 