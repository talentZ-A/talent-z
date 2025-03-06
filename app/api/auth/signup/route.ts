import { NextResponse } from "next/server"
import { getCollection } from "@/lib/mongodb"
import { hashPassword, createToken } from "@/lib/auth"
import type { UserDocument } from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    const users = await getCollection<UserDocument>("users")

    // Check if user already exists
    const existingUser = await users.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      )
    }

    // Hash password and create user
    const hashedPassword = await hashPassword(password)
    const now = new Date()

    const user = await users.insertOne({
      name,
      email,
      password: hashedPassword,
      role: null, // Role will be set after subscription
      createdAt: now,
      updatedAt: now,
    })

    // Create session token
    await createToken({
      id: user.insertedId.toString(),
      email,
      role: null,
      name,
    })

    // Return user data (excluding password)
    return NextResponse.json({
      message: "User created successfully",
      user: {
        id: user.insertedId.toString(),
        name,
        email,
        role: null,
      }
    }, { status: 201 })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
} 