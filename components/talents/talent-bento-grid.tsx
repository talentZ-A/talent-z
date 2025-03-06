import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { getCountryFlag, getGenderSymbol } from "@/lib/utils"
import { Talent } from "@/types/types"

export interface TalentBentoGridProps {
  talents: Talent[]
}

export function TalentBentoGrid({ talents }: TalentBentoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {talents.map((talent) => (
        <Link href={`/talents/${talent.slug}`} key={talent.id}>
          <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
            <div className="relative aspect-[2/3] w-full">
              <Image 
                src={talent.image || "/placeholder.svg"} 
                alt={talent.fullName} 
                fill 
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {talent.fullName} {getGenderSymbol(talent.gender)}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm">
                  {getCountryFlag(talent.placeOfBirth)} {talent.age} years
                </span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <p>{talent.height} • {talent.bodyType}</p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

