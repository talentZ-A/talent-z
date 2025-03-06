import { Skeleton } from "@/components/ui/skeleton"

export default function TalentsLoading() {
  return (
    <main className="container py-8">
      <Skeleton className="h-10 w-48 mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex flex-col">
              <Skeleton className="aspect-[2/3] w-full" />
              <Skeleton className="h-8 w-3/4 mt-4" />
              <Skeleton className="h-4 w-1/2 mt-2" />
            </div>
          ))}
      </div>
    </main>
  )
}

