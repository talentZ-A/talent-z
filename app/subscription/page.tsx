import { PricingSection } from "@/components/pricing/pricing-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subscription Plans | TalentZ Vercel",
  description: "Choose the right subscription plan for your career or production needs",
}

export default function SubscriptionPage() {
  return (
    <main className="flex-1 py-8 md:py-12">
      <PricingSection />
    </main>
  )
}

