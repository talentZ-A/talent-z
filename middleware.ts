import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

// Define protected routes and their required roles
const protectedRoutes = {
  "/dashboard": ["actor", "producer"],
  "/talents": ["producer"],
  "/profile": ["actor", "producer"],
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the route needs protection
  const requiredRoles = Object.entries(protectedRoutes).find(([route]) =>
    pathname.startsWith(route)
  )?.[1]

  if (!requiredRoles) {
    return NextResponse.next()
  }

  try {
    const token = request.cookies.get("token")?.value

    if (!token) {
      throw new Error("No token found")
    }

    // Verify the token
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")
    )

    const userRole = verified.payload.role as string

    // Check if user has required role
    if (!requiredRoles.includes(userRole)) {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }

    return NextResponse.next()
  } catch (error) {
    // Redirect to login page with return URL
    const url = new URL("/auth", request.url)
    url.searchParams.set("from", pathname)
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/talents/:path*", "/profile/:path*"],
} 