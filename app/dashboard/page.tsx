"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/lib/store"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function DashboardPage() {
  const router = useRouter()
  const { user, subscription } = useAuthStore()

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Profile Information</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground">Name</div>
              <div className="font-medium">{user.name}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium">{user.email}</div>
            </div>
            {user.role && (
              <div>
                <div className="text-sm text-muted-foreground">Role</div>
                <div className="font-medium capitalize">{user.role}</div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Subscription Details</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {!user.role ? (
              <div className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    You haven&apos;t chosen a subscription plan yet. Choose a plan to access all features.
                  </AlertDescription>
                </Alert>
                <Button
                  className="w-full"
                  onClick={() => router.push("/subscription")}
                >
                  Choose Plan
                </Button>
              </div>
            ) : subscription?.status === "active" ? (
              <>
                <div>
                  <div className="text-sm text-muted-foreground">Current Plan</div>
                  <div className="font-medium capitalize">{user.role}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Status</div>
                  <div className="font-medium capitalize">{subscription.status}</div>
                </div>
                {subscription.expiresAt && (
                  <div>
                    <div className="text-sm text-muted-foreground">Expires</div>
                    <div className="font-medium">
                      {new Date(subscription.expiresAt).toLocaleDateString()}
                    </div>
                  </div>
                )}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push("/subscription")}
                >
                  Manage Subscription
                </Button>
              </>
            ) : (
              <div className="text-center space-y-4">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Your subscription has expired. Please renew to continue accessing features.
                  </AlertDescription>
                </Alert>
                <Button
                  className="w-full"
                  onClick={() => router.push("/subscription")}
                >
                  Renew Subscription
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 