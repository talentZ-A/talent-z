import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TalentNotFound() {
  return (
    <div className="container py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Talent Not Found</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        We could not find the talent you are looking for. They may have been removed or the URL might be incorrect.
      </p>
      <Button asChild>
        <Link href="/talents">View All Talents</Link>
      </Button>
    </div>
  )
}

