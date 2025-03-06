import { NextResponse } from "next/server"
import { getCollection } from "@/lib/mongodb"
import { verifyPassword, createToken } from "@/lib/auth"
import type { UserDocument, SubscriptionDocument } from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    const users = await getCollection<UserDocument>("users")

    // Find user
    const user = await users.findOne({ email })
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      )
    }

    // Verify password
    const isValid = await verifyPassword(password, user.password)
    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      )
    }

    // Get subscription data
    const subscriptions = await getCollection<SubscriptionDocument>("subscriptions")
    const subscription = await subscriptions.findOne({ userId: user._id.toString() })

    // Create session token
    await createToken({
      id: user._id.toString(),
      email: user.email,
      role: user.role,
      name: user.name,
    })

    // Return user data (excluding password) and subscription
    const { password: _, ...userData } = user
    return NextResponse.json({
      message: "Logged in successfully",
      user: {
        ...userData,
        id: userData._id.toString(),
      },
      subscription: subscription ? {
        plan: subscription.plan,
        status: subscription.status,
        expiresAt: subscription.expiresAt,
      } : {
        plan: null,
        status: null,
        expiresAt: null,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
} 