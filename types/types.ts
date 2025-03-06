export interface Talent {
  id: string
  fullName: string
  gender: string
  age: number
  placeOfBirth: string
  image: string
  height: string
  weight: string
  eyeColor: string
  hairColor: string
  bodyType: string
  shoeSize: string
  clothingSize: string
  measurements: string
  tattoos: string
  piercings: string
  otherFeatures: string
  actingExperience: string
  skills: string[]
  languages: string[]
  sports: string[]
  medicalConditions: string
  diet: string
  smoking: string
  fitnessLevel: string
  socialMedia: string
  contacts: string
  slug: string
}

export const mockTalents: Talent[] = [
  {
    id: "1",
    fullName: "Emma Thompson",
    gender: "female",
    age: 32,
    placeOfBirth: "US",
    image: "/placeholder.svg?height=600&width=400",
    height: "5'7\" (170 cm)",
    weight: "130 lbs (59 kg)",
    eyeColor: "Blue",
    hairColor: "Blonde",
    bodyType: "Athletic",
    shoeSize: "8 US",
    clothingSize: "6 US",
    measurements: "34-26-36",
    tattoos: "Small star on right wrist",
    piercings: "Standard lobe earrings",
    otherFeatures: "Freckles across nose and cheeks",
    actingExperience: "Film, Television, Theater",
    skills: ["Singing (Soprano)", "Ballet (Advanced)", "Jazz (Intermediate)", "Piano", "Guitar"],
    languages: ["English (Native)", "French (Conversational)"],
    sports: ["Swimming", "Horseback riding", "Tennis"],
    medicalConditions: "None",
    diet: "Vegetarian",
    smoking: "Non-smoker",
    fitnessLevel: "Excellent, daily exercise routine",
    socialMedia: "@emmathompson",
    contacts: "agent@creativetalent.com",
    slug: "emma-thompson",
  },
  {
    id: "2",
    fullName: "Michael Chen",
    gender: "male",
    age: 28,
    placeOfBirth: "CA",
    image: "/placeholder.svg?height=600&width=400",
    height: "5'10\" (178 cm)",
    weight: "165 lbs (75 kg)",
    eyeColor: "Brown",
    hairColor: "Black",
    bodyType: "Lean",
    shoeSize: "10 US",
    clothingSize: "Medium",
    measurements: "40-32-38",
    tattoos: "None",
    piercings: "None",
    otherFeatures: "Dimple on left cheek",
    actingExperience: "Film, Commercials",
    skills: ["Martial Arts", "Parkour", "Drums", "Beatboxing"],
    languages: ["English (Native)", "Mandarin (Fluent)", "Spanish (Basic)"],
    sports: ["Basketball", "Rock Climbing", "Skateboarding"],
    medicalConditions: "None",
    diet: "No restrictions",
    smoking: "Non-smoker",
    fitnessLevel: "Very good, trains 4x weekly",
    socialMedia: "@michaelchenactor",
    contacts: "michael@talentmanagement.com",
    slug: "michael-chen",
  },
  {
    id: "3",
    fullName: "Sofia Rodriguez",
    gender: "female",
    age: 35,
    placeOfBirth: "ES",
    image: "/placeholder.svg?height=600&width=400",
    height: "5'5\" (165 cm)",
    weight: "125 lbs (57 kg)",
    eyeColor: "Hazel",
    hairColor: "Brown",
    bodyType: "Curvy",
    shoeSize: "7 US",
    clothingSize: "8 US",
    measurements: "36-28-38",
    tattoos: "Small butterfly on ankle",
    piercings: "Ears and nose",
    otherFeatures: "Beauty mark above lip",
    actingExperience: "Theater, Television, Voice Acting",
    skills: ["Flamenco Dancing", "Opera Singing", "Guitar", "Improvisation"],
    languages: ["Spanish (Native)", "English (Fluent)", "Italian (Conversational)"],
    sports: ["Yoga", "Dancing", "Swimming"],
    medicalConditions: "None",
    diet: "Mediterranean",
    smoking: "Occasional",
    fitnessLevel: "Good, regular yoga practice",
    socialMedia: "@sofiaacts",
    contacts: "booking@sofiarod.com",
    slug: "sofia-rodriguez",
  },
]

