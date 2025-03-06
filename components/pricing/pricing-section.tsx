"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PricingCard } from "./pricing-card"
import { Check } from "lucide-react"

const plans = {
  monthly: [
    {
      name: "Actor",
      description: "Perfect for individual talents looking to showcase their skills",
      price: 19,
      billingPeriod: "/mo",
      billedAmount: "$227 billed yearly",
      features: [
        "Create a detailed talent profile",
        "Appear in talent searches",
        "Upload unlimited photos",
        "Access to casting calls",
        "Direct messaging with producers",
        "Analytics on profile views",
        "Export your portfolio as PDF",
      ],
      cta: "Due to high demand registration is closed",
      popular: true,
    },
    {
      name: "Producer/Director",
      description: "For production companies and casting directors",
      price: 1890,
      billingPeriod: "/mo",
      billedAmount: "$22680 billed yearly",
      features: [
        "All Actor features",
        "Post unlimited casting calls",
        "Advanced talent search filters",
        "Organize talents into projects",
        "Schedule auditions and callbacks",
        "Team collaboration tools",
        "Priority support",
        "Custom branding options",
        "API access for integration",
      ],
      cta: "Due to high demand registration is closed",
      popular: false,
    },
  ],
  yearly: [
    {
      name: "Actor",
      description: "Perfect for individual talents looking to showcase their skills",
      price: 15,
      billingPeriod: "/mo",
      billedAmount: "$180 billed yearly",
      features: [
        "Create a detailed talent profile",
        "Appear in talent searches",
        "Upload unlimited photos",
        "Access to casting calls",
        "Direct messaging with producers",
        "Analytics on profile views",
        "Export your portfolio as PDF",
      ],
      cta: "Due to high demand registration is closed",
      popular: true,
    },
    {
      name: "Producer/Director",
      description: "For production companies and casting directors",
      price: 1590,
      billingPeriod: "/mo",
      billedAmount: "$19080 billed yearly",
      features: [
        "All Actor features",
        "Post unlimited casting calls",
        "Advanced talent search filters",
        "Organize talents into projects",
        "Schedule auditions and callbacks",
        "Team collaboration tools",
        "Priority support",
        "Custom branding options",
        "API access for integration",
      ],
      cta: "Due to high demand registration is closed",
      popular: false,
    },
  ],
}

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Subscription Plans</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Choose the right plan for your career or production needs
        </p>
      </div>

      <Tabs value={selectedPlan} onValueChange={(value) => setSelectedPlan(value as "monthly" | "yearly")} className="w-full">
        <div className="mb-8 flex justify-center">
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">
              Yearly
              <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                Save 10%
              </span>
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {plans[selectedPlan].map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </Tabs>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">All Plans Include</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex items-center p-4 bg-muted/50 rounded-lg">
            <Check className="h-5 w-5 text-primary mr-2" />
            <span>24/7 Customer Support</span>
          </div>
          <div className="flex items-center p-4 bg-muted/50 rounded-lg">
            <Check className="h-5 w-5 text-primary mr-2" />
            <span>Secure Data Storage</span>
          </div>
          <div className="flex items-center p-4 bg-muted/50 rounded-lg">
            <Check className="h-5 w-5 text-primary mr-2" />
            <span>Regular Platform Updates</span>
          </div>
          <div className="flex items-center p-4 bg-muted/50 rounded-lg">
            <Check className="h-5 w-5 text-primary mr-2" />
            <span>Mobile App Access</span>
          </div>
          <div className="flex items-center p-4 bg-muted/50 rounded-lg">
            <Check className="h-5 w-5 text-primary mr-2" />
            <span>Cancel Anytime</span>
          </div>
          <div className="flex items-center p-4 bg-muted/50 rounded-lg">
            <Check className="h-5 w-5 text-primary mr-2" />
            <span>SSL Encryption</span>
          </div>
        </div>
      </div>
    </div>
  )
}

