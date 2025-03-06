"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useAuthStore } from "@/lib/store"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  name: string
  description: string
  price: number
  billingPeriod: string
  billedAmount: string
  features: string[]
  cta: string
  popular?: boolean
}

export function PricingCard({
  name,
  description,
  price,
  billingPeriod,
  billedAmount,
  features,
  cta,
  popular = false,
}: PricingCardProps) {
  const { user, subscription } = useAuthStore()
  const isCurrentPlan = subscription?.plan === name.toLowerCase()
  const isExpired = subscription?.status === "expired"

  const getButtonText = () => {
    if (!user) return cta
    if (isCurrentPlan) {
      if (isExpired) return "Renew Plan"
      return "Current Plan"
    }
    return "Switch Plan"
  }

  const getButtonVariant = () => {
    if (!user || isExpired) return popular ? "default" : "outline"
    if (isCurrentPlan) return "secondary"
    return popular ? "default" : "outline"
  }

  const getButtonProps = () => {
    if (!user) return { href: "/auth" }
    if (isCurrentPlan && !isExpired) return { disabled: true }
    return { href: `/subscription/checkout?plan=${name.toLowerCase()}` }
  }

  return (
    <Card className={cn(
      "flex flex-col",
      popular && "border-primary shadow-lg"
    )}>
      <CardHeader>
        {popular && (
          <div className="mb-2 text-sm font-medium text-primary">
            Most Popular
          </div>
        )}
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="grid flex-1 gap-4">
        <div className="space-y-2">
          <div className="text-3xl font-bold">
            ${price}
            <span className="text-sm font-normal text-muted-foreground">
              {billingPeriod}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{billedAmount}</p>
        </div>
        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant={getButtonVariant()}
          className="w-full"
          {...getButtonProps()}
        >
          {getButtonText()}
        </Button>
      </CardFooter>
    </Card>
  )
}

