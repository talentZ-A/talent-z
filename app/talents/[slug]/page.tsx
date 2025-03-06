import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { TalentTabs } from "@/components/talents/talent-tabs"
import { Button } from "@/components/ui/button"
import { getCountryFlag, getGenderSymbol } from "@/lib/utils"
import { Metadata } from "next"
import { getTalentBySlug } from "@/lib/talents"

type TalentPageProps = {
  params: {
    slug: string
  }
  searchParams: Record<string, string | string[] | undefined>
}

export async function generateMetadata({ params }: TalentPageProps): Promise<Metadata> {
  const talent = await getTalentBySlug(params.slug)

  if (!talent) {
    return {
      title: "Talent Not Found - Talent-Z",
      description: "The requested talent profile could not be found.",
    }
  }

  return {
    title: `${talent.fullName} - Talent-Z`,
    description: talent.actingExperience,
  }
}

export default async function TalentPage({ params }: TalentPageProps) {
  const talent = await getTalentBySlug(params.slug)

  if (!talent) {
    notFound()
  }

  return (
    <main className="container py-6 md:py-8 lg:py-10">
      <div className="flex items-center justify-between mb-8">
        <Link href="/talents">
          <Button variant="ghost" className="-ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Talents
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-8">
        <div className="space-y-4">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={talent.image}
              alt={talent.fullName}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 350px"
              priority
            />
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                {talent.fullName} 
                <span className="text-primary">{getGenderSymbol(talent.gender)}</span>
              </h1>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <span>{getCountryFlag(talent.placeOfBirth)}</span>
                <span>{talent.age} years</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>{talent.height} • {talent.weight}</p>
              <p>{talent.bodyType}</p>
            </div>
            <p className="text-sm">{talent.actingExperience}</p>
          </div>
        </div>

        <div>
          <TalentTabs talent={talent} mode="full" />
        </div>
      </div>
    </main>
  )
}

