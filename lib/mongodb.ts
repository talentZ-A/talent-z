import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

interface UserDocument {
  email: string
  password: string // This will be hashed
  role: 'actor' | 'producer' | null // Making role nullable since it will be set after payment
  name: string
  createdAt: Date
  updatedAt: Date
}

interface SubscriptionDocument {
  userId: string
  plan: 'actor' | 'producer'
  status: 'active' | 'expired'
  expiresAt: string
  createdAt: Date
  updatedAt: Date
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise

export async function getCollection<T>(collectionName: string) {
  const client = await clientPromise
  const db = client.db('talent-z')
  return db.collection<T>(collectionName)
}

export type { UserDocument, SubscriptionDocument } 